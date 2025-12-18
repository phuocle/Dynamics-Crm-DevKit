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
      results.push({
        Test: "P1",
        Property: "Attribute",
        Value: control.Attribute ? "object" : "null",
        Status: control.Attribute ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "P2",
        Property: "AttributeName",
        Value: control.AttributeName,
        Status: control.AttributeName === "name" ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "P3",
        Property: "AttributeType",
        Value: control.AttributeType,
        Status: control.AttributeType === "string" ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "P4",
        Property: "ControlName",
        Value: control.ControlName,
        Status: "\u2713"
      });
      results.push({
        Test: "P5",
        Property: "ControlType",
        Value: control.ControlType,
        Status: "\u2713"
      });
      results.push({
        Test: "P6",
        Property: "Format",
        Value: control.Format,
        Status: "\u2713"
      });
      results.push({
        Test: "P7",
        Property: "IsDirty",
        Value: control.IsDirty,
        Status: "\u2713"
      });
      results.push({
        Test: "P8",
        Property: "IsValid",
        Value: control.IsValid,
        Status: "\u2713"
      });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Properties Error", Value: error.message, Status: "\u2717" });
    }
    const setterResults = [];
    try {
      const origRequired = control.RequiredLevel;
      control.RequiredLevel = "required";
      const newRequired = control.RequiredLevel;
      control.RequiredLevel = origRequired;
      setterResults.push({
        Test: "S1",
        Property: "RequiredLevel",
        Value: `${origRequired}\u2192required\u2192restored`,
        Status: newRequired === "required" ? "\u2713" : "\u2717"
      });
    } catch (e) {
      setterResults.push({ Test: "S1", Property: "RequiredLevel", Value: e.message, Status: "\u2717" });
    }
    try {
      const origSubmit = control.SubmitMode;
      control.SubmitMode = "always";
      const newSubmit = control.SubmitMode;
      control.SubmitMode = origSubmit;
      setterResults.push({
        Test: "S2",
        Property: "SubmitMode",
        Value: `${origSubmit}\u2192always\u2192restored`,
        Status: newSubmit === "always" ? "\u2713" : "\u2717"
      });
    } catch (e) {
      setterResults.push({ Test: "S2", Property: "SubmitMode", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = control.Disabled;
      control.Disabled = true;
      const newDisabled = control.Disabled;
      control.Disabled = origDisabled;
      setterResults.push({
        Test: "S3",
        Property: "Disabled",
        Value: `${origDisabled}\u2192true\u2192restored`,
        Status: newDisabled === true ? "\u2713" : "\u2717"
      });
    } catch (e) {
      setterResults.push({ Test: "S3", Property: "Disabled", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = control.Label;
      control.Label = origLabel + " (TEST)";
      const newLabel = control.Label;
      control.Label = origLabel;
      setterResults.push({
        Test: "S4",
        Property: "Label",
        Value: `"${origLabel}"\u2192modified\u2192restored`,
        Status: newLabel.includes("(TEST)") ? "\u2713" : "\u2717"
      });
    } catch (e) {
      setterResults.push({ Test: "S4", Property: "Label", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = control.Visible;
      control.Visible = false;
      const newVisible = control.Visible;
      control.Visible = origVisible;
      setterResults.push({
        Test: "S5",
        Property: "Visible",
        Value: `${origVisible}\u2192false\u2192restored`,
        Status: newVisible === false ? "\u2713" : "\u2717"
      });
    } catch (e) {
      setterResults.push({ Test: "S5", Property: "Visible", Value: e.message, Status: "\u2717" });
    }
    try {
      control.Value = originalValue + " (MODIFIED)";
      const newValue = control.Value;
      control.Value = originalValue;
      setterResults.push({
        Test: "S6",
        Property: "Value",
        Value: `modified\u2192restored`,
        Status: newValue?.includes("(MODIFIED)") ? "\u2713" : "\u2717"
      });
    } catch (e) {
      setterResults.push({ Test: "S6", Property: "Value", Value: e.message, Status: "\u2717" });
    }
    const methodResults = [];
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} OnChange fired");
    try {
      control.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "M1", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M1", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      control.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    const outputChangeCallback = (ctx) => console.log("  \u{1F4CD} OutputChange fired");
    try {
      control.AddOnOutputChange(outputChangeCallback);
      methodResults.push({ Test: "M3", Property: "AddOnOutputChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M3", Property: "AddOnOutputChange", Value: e.message, Status: "\u2717" });
    }
    try {
      control.RemoveOnOutputChange(outputChangeCallback);
      methodResults.push({ Test: "M4", Property: "RemoveOnOutputChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M4", Property: "RemoveOnOutputChange", Value: e.message, Status: "\u2717" });
    }
    try {
      control.FireOnChange();
      methodResults.push({ Test: "M5", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M5", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => control.Focus(), 1e3);
      methodResults.push({ Test: "M6", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M6", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      control.SetNotification("Test notification from IControl", "CTRL_TEST_1");
      setTimeout(() => control.ClearNotification("CTRL_TEST_1"), 3e3);
      methodResults.push({ Test: "M7", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M7", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      const cleared = control.ClearNotification("NONEXISTENT");
      methodResults.push({ Test: "M8", Property: "ClearNotification", Value: `Result: ${cleared}`, Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M8", Property: "ClearNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      control.AddNotification({
        messages: ["Recommendation from test"],
        notificationLevel: "RECOMMENDATION",
        uniqueId: "CTRL_TEST_2"
      });
      setTimeout(() => control.ClearNotification("CTRL_TEST_2"), 3e3);
      methodResults.push({ Test: "M9", Property: "AddNotification", Value: "Added (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M9", Property: "AddNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      control.SetIsValid(false, "Test invalid message");
      setTimeout(() => control.SetIsValid(true), 2e3);
      methodResults.push({ Test: "M10", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M10", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    console.group(`\u{1F39B}\uFE0F TEST 0: IControl Interface [${startTime}] - Using: Name field`);
    console.log("%c\u{1F4CB} Properties (readonly) - 8 items", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u{1F504} Properties (getter/setter) - 6 items", "font-weight: bold; font-size: 14px; color: #FF9800;");
    console.table(setterResults);
    console.log("%c\u26A1 Methods - 10 items", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    const allResults = [...results, ...setterResults, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
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
        Value: originalDefaultView,
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
    const preSearchCallback = (ctx) => {
      const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
      lookup.AddCustomFilter(filterXml, "contact");
      console.log("  \u{1F4CD} PreSearch fired - filter applied");
    };
    const tagClickCallback = (ctx) => {
      console.log("  \u{1F4CD} LookupTagClick fired - tag was clicked");
    };
    try {
      lookup.AddPreSearch(preSearchCallback);
      methodResults.push({ Test: "10", Property: "AddPreSearch", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "10", Property: "AddPreSearch", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.RemovePreSearch(preSearchCallback);
      methodResults.push({ Test: "11", Property: "RemovePreSearch", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "11", Property: "RemovePreSearch", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.AddLookupTagClick(tagClickCallback);
      methodResults.push({ Test: "12", Property: "AddLookupTagClick", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "12", Property: "AddLookupTagClick", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.RemoveLookupTagClick(tagClickCallback);
      methodResults.push({ Test: "13", Property: "RemoveLookupTagClick", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "13", Property: "RemoveLookupTagClick", Value: e.message, Status: "\u2717" });
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
      methodResults.push({ Test: "14", Property: "AddCustomView", Value: "Added", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "14", Property: "AddCustomView", Value: e.message, Status: "\u2717" });
    }
    try {
      lookup.SetNotification("Test notification", "TEST_1");
      setTimeout(() => lookup.ClearNotification("TEST_1"), 3e3);
      methodResults.push({ Test: "15", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "15", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => lookup.Focus(), 4e3);
      methodResults.push({ Test: "16", Property: "Focus", Value: "Scheduled (4s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "16", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      const testViewId = "{00000000-0000-0000-0000-000000000002}";
      lookup.DefaultView = testViewId;
      const newView = lookup.DefaultView;
      lookup.DefaultView = originalDefaultView;
      methodResults.push({ Test: "17", Property: "DefaultView (set)", Value: `Set\u2192Restored`, Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "17", Property: "DefaultView (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const originalTypes = lookup.EntityTypes;
      lookup.EntityTypes = ["contact"];
      const newTypes = lookup.EntityTypes;
      lookup.EntityTypes = originalTypes;
      methodResults.push({ Test: "18", Property: "EntityTypes (set)", Value: `Set\u2192Restored`, Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "18", Property: "EntityTypes (set)", Value: e.message, Status: "\u2717" });
    }
    console.group(`\u{1F50D} LOOKUP TEST: PrimaryContactId [${startTime}]`);
    console.log("%c\u{1F4CB} Properties (16 items)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Methods (9 items)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
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
      results.push({
        Test: "M1",
        Property: "MaxLength",
        Value: memo.MaxLength,
        Status: typeof memo.MaxLength === "number" ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "M2",
        Property: "Value",
        Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? "..." : ""}"` : "(empty)",
        Status: "\u2713"
      });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Memo Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      results.push({ Test: "I1", Property: "Attribute", Value: memo.Attribute ? "object" : "null", Status: memo.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "I2", Property: "AttributeName", Value: memo.AttributeName, Status: memo.AttributeName === "description" ? "\u2713" : "\u26A0" });
      results.push({ Test: "I3", Property: "AttributeType", Value: memo.AttributeType, Status: memo.AttributeType === "memo" ? "\u2713" : "\u26A0" });
      results.push({ Test: "I4", Property: "ControlName", Value: memo.ControlName, Status: "\u2713" });
      results.push({ Test: "I5", Property: "ControlType", Value: memo.ControlType, Status: "\u2713" });
      results.push({ Test: "I6", Property: "Format", Value: memo.Format, Status: "\u2713" });
      results.push({ Test: "I7", Property: "IsDirty", Value: memo.IsDirty, Status: "\u2713" });
      results.push({ Test: "I8", Property: "IsValid", Value: memo.IsValid, Status: "\u2713" });
      results.push({ Test: "I9", Property: "RequiredLevel", Value: memo.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "I10", Property: "SubmitMode", Value: memo.SubmitMode, Status: "\u2713" });
      results.push({ Test: "I11", Property: "Disabled", Value: memo.Disabled, Status: "\u2713" });
      results.push({ Test: "I12", Property: "Label", Value: memo.Label, Status: "\u2713" });
      results.push({ Test: "I13", Property: "Visible", Value: memo.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "IControl Props Error", Value: error.message, Status: "\u2717" });
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
      methodResults.push({ Test: "M1", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M1", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.FireOnChange();
      methodResults.push({ Test: "M3", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M3", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => memo.Focus(), 1e3);
      methodResults.push({ Test: "M4", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M4", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
      setTimeout(() => memo.ClearNotification("MEMO_TEST_1"), 3e3);
      methodResults.push({ Test: "M5", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M5", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      memo.SetIsValid(false, "Test invalid");
      setTimeout(() => memo.SetIsValid(true), 2e3);
      methodResults.push({ Test: "M6", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "M6", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    console.group(`\u{1F4DD} TEST 3: Memo Control [${startTime}] - Using: Description field`);
    console.log("%c\u{1F4CB} Properties (15 items)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (11 items)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9BY2NvdW50LmZvcm0udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0Q29udHJvbC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RMb29rdXAudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0TWVtby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBUZXN0Q29udHJvbCB9IGZyb20gJy4vQWNjb3VudC5UZXN0Q29udHJvbCc7XHJcbmltcG9ydCB7IFRlc3RMb29rdXAgfSBmcm9tICcuL0FjY291bnQuVGVzdExvb2t1cCc7XHJcbmltcG9ydCB7IFRlc3RNZW1vIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RNZW1vJztcclxuXHJcbmNvbnN0IGZvcm1BY2NvdW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGxldCBmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uTG9hZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBmb3JtID0gbmV3IEFjY291bnRGb3JtLkZvcm0oZXhlY3V0aW9uQ29udGV4dCk7XHJcbiAgICAgICAgcmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICBmb3JtLlVpQWRkTG9hZGVkKFVpQWRkTG9hZGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWdpc3RlckV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZm9ybS5FeGVjdXRpb25Db250ZXh0LklzSW5pdGlhbExvYWQoKSkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIFVpQWRkTG9hZGVkKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vIEJFR0lOIE9OIExPQUQgTE9HSUNcclxuXHJcbiAgICAgICAgLy8gV2FpdCAxMCBzZWNvbmRzIGFmdGVyIE9uTG9hZCB0byBhbGxvdyBmb3JtIHRvIGZ1bGx5IGxvYWRcclxuICAgICAgICAvLyBUaGVuIGNsZWFyIGNvbnNvbGUgYW5kIHJ1biByZWFsIHRlc3RzXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIChiYXNlIGZvciBhbGwgY29udHJvbHMpXHJcbiAgICAgICAgICAgIFRlc3RDb250cm9sKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxOiBMb29rdXAgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TG9va3VwKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAzOiBNZW1vIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE1lbW8oZm9ybSk7XHJcblxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuXHJcbiAgICAgICAgLy8gRU5EIE9OIExPQUQgTE9HSUNcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVORCBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgUFJFIFNFQVJDSFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgT25Mb2FkOiBvbkxvYWRcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQWNjb3VudDtcclxuIiwgImZ1bmN0aW9uIGdldFhybSgpOiB0eXBlb2YgWHJtIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC5wYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlclNldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCwgc2V0dGVyRm46ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgc2V0OiBzZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkOiBhbnksIGF0dHJpYnV0ZTogYW55LCBjb250cm9sOiBhbnkpOiB2b2lkIHtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZScsICgpID0+IGNvbnRyb2w/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZU5hbWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVQYXJlbnQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFBhcmVudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVR5cGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEF0dHJpYnV0ZVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sTmFtZScsICgpID0+IGNvbnRyb2w/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sT3B0aW9ucycsICgpID0+IGNvbnRyb2w/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sUGFyZW50JywgKCkgPT4gY29udHJvbD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBjb250cm9sPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0Zvcm1hdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0Rm9ybWF0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSW5pdGlhbFVybCcsICgpID0+IGNvbnRyb2w/LmdldEluaXRpYWxVcmwoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzRGlydHknLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1BhcnR5TGlzdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNQYXJ0eUxpc3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1ZhbGlkJywgKCkgPT4gYXR0cmlidXRlPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4JywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXhMZW5ndGgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heExlbmd0aCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01pbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWluKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT2JqZWN0JywgKCkgPT4gY29udHJvbD8uZ2V0T2JqZWN0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3B0aW9ucycsICgpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ091dHB1dHMnLCAoKSA9PiBjb250cm9sPy5nZXRPdXRwdXRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRPcHRpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFNlbGVjdGVkT3B0aW9uKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRSZXN1bHRzJywgKCkgPT4gY29udHJvbD8uZ2V0U2VsZWN0ZWRSZXN1bHRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU3RhdGUnLCAoKSA9PiBjb250cm9sPy5nZXRTdGF0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RleHQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFRleHQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUb3RhbFJlc3VsdENvdW50JywgKCkgPT4gY29udHJvbD8uZ2V0VG90YWxSZXN1bHRDb3VudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1VzZXJQcml2aWxlZ2UnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFVzZXJQcml2aWxlZ2UoKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEYXRhJywgKCkgPT4gY29udHJvbD8uZ2V0RGF0YSgpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXREYXRhKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEZWZhdWx0VmlldycsICgpID0+IGNvbnRyb2w/LmdldERlZmF1bHRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERlZmF1bHRWaWV3KHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEaXNhYmxlZCcsICgpID0+IGNvbnRyb2w/LmdldERpc2FibGVkKCksICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgY29udHJvbD8uc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdFbnRpdHlUeXBlcycsICgpID0+IGNvbnRyb2w/LmdldEVudGl0eVR5cGVzKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldEVudGl0eVR5cGVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdMYWJlbCcsICgpID0+IGNvbnRyb2w/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdQcmVjaXNpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFByZWNpc2lvbigpLCAodmFsdWU6IG51bWJlcikgPT4geyBhdHRyaWJ1dGU/LnNldFByZWNpc2lvbih2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NlYXJjaFF1ZXJ5JywgKCkgPT4gY29udHJvbD8uZ2V0U2VhcmNoUXVlcnkoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U2VhcmNoUXVlcnkodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Nob3dUaW1lJywgKCkgPT4gY29udHJvbD8uZ2V0U2hvd1RpbWUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFNob3dUaW1lKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTcmMnLCAoKSA9PiBjb250cm9sPy5nZXRTcmMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U3JjKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTdWJtaXRNb2RlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTdWJtaXRNb2RlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0U3VibWl0TW9kZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBhdHRyaWJ1dGU/LnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmlzaWJsZScsICgpID0+IGNvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbUZpbHRlciA9IChmaWx0ZXI6IHN0cmluZywgZW50aXR5TG9naWNhTmFtZT86IHN0cmluZykgPT4gY29udHJvbD8uYWRkQ3VzdG9tRmlsdGVyKGZpbHRlciwgZW50aXR5TG9naWNhTmFtZSk7XHJcbiAgICBmaWVsZC5BZGRDdXN0b21WaWV3ID0gKHZpZXdJZDogc3RyaW5nLCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZpZXdEaXNwbGF5TmFtZTogc3RyaW5nLCBmZXRjaFhtbDogc3RyaW5nLCBsYXlvdXRYbWw6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuKSA9PiBjb250cm9sPy5hZGRDdXN0b21WaWV3KHZpZXdJZCwgZW50aXR5TmFtZSwgdmlld0Rpc3BsYXlOYW1lLCBmZXRjaFhtbCwgbGF5b3V0WG1sLCBpc0RlZmF1bHQpO1xyXG4gICAgZmllbGQuQWRkTG9va3VwVGFnQ2xpY2sgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Mb29rdXBUYWdDbGljayhjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBub3RpZmljYXRpb25MZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB7IG1lc3NhZ2U6IG1lc3NhZ2UsIGFjdGlvbnM6IFtjYWxsYmFja10gfTtcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7IG1lc3NhZ2VzOiBbbWVzc2FnZV0sIG5vdGlmaWNhdGlvbkxldmVsOiBub3RpZmljYXRpb25MZXZlbCwgdW5pcXVlSWQ6IHVuaXF1ZUlkLCBhY3Rpb25zOiBbYWN0aW9uc10gfTtcclxuICAgICAgICByZXR1cm4gY29udHJvbD8uYWRkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgZmllbGQuQWRkT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5hZGRPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPcHRpb24gPSAodGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBpbmRleD86IG51bWJlcikgPT4gY29udHJvbD8uYWRkT3B0aW9uKHsgdGV4dDogdGV4dCwgdmFsdWU6IHZhbHVlIH0sIGluZGV4KTtcclxuICAgIGZpZWxkLkFkZFBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmaWVsZC5DbGVhck9wdGlvbnMgPSAoKSA9PiBjb250cm9sPy5jbGVhck9wdGlvbnMoKTtcclxuICAgIGZpZWxkLkNvbnRlbnRXaW5kb3cgPSAoc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2w/LmdldENvbnRlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5GaXJlT25DaGFuZ2UgPSAoKSA9PiBhdHRyaWJ1dGU/LmZpcmVPbkNoYW5nZSgpO1xyXG4gICAgZmllbGQuRm9jdXMgPSAoKSA9PiBjb250cm9sPy5zZXRGb2N1cygpO1xyXG4gICAgZmllbGQuT3BlblNlYXJjaFJlc3VsdCA9IChyZXN1bHROdW1iZXI6IG51bWJlciwgbW9kZT86IHN0cmluZykgPT4gY29udHJvbD8ub3BlblNlYXJjaFJlc3VsdChyZXN1bHROdW1iZXIsIG1vZGUpO1xyXG4gICAgZmllbGQuT3B0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlZnJlc2ggPSAoKSA9PiBjb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICBmaWVsZC5SZW1vdmVMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGF0dHJpYnV0ZT8ucmVtb3ZlT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25PdXRwdXRDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25PdXRwdXRDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT3B0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IGNvbnRyb2w/LnJlbW92ZU9wdGlvbih2YWx1ZSk7XHJcbiAgICBmaWVsZC5SZW1vdmVQb3N0U2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUG9zdFNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVQcmVTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlUHJlU2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVJlc3VsdE9wZW5lZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblJlc3VsdE9wZW5lZChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVTZWxlY3Rpb24gPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25TZWxlY3Rpb24oY2FsbGJhY2spO1xyXG4gICAgZmllbGQuU2V0SXNWYWxpZCA9ICh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZykgPT4gYXR0cmlidXRlPy5zZXRJc1ZhbGlkKHZhbGlkLCBtZXNzYWdlKTtcclxuICAgIGZpZWxkLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkcyhmb3JtQ29udGV4dDogYW55LCBib2R5OiBhbnksIHR5cGU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgT2JqZWN0LmtleXMoYm9keSkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9naWNhbE5hbWUgPSB0eXBlID09PSB1bmRlZmluZWQgPyBmaWVsZD8udG9Mb3dlckNhc2UoKSA6ICh0eXBlICsgZmllbGQpPy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChsb2dpY2FsTmFtZSkgPz8gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGQpO1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZ2V0QXR0cmlidXRlKGxvZ2ljYWxOYW1lKTtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZSAmJiBjb250cm9sPy5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBib2R5W2ZpZWxkXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHR5cGUgPT09IFwiaGVhZGVyX1wiKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0SGVhZGVyU2VjdGlvbiA9IGZvcm1Db250ZXh0Py51aT8uaGVhZGVyU2VjdGlvbjtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0JvZHlWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Qm9keVZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Qm9keVZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0NvbW1hbmRCYXJWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Q29tbWFuZEJhclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Q29tbWFuZEJhclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ1RhYk5hdmlnYXRvclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRUYWJOYXZpZ2F0b3JWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldFRhYk5hdmlnYXRvclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2R5O1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRUYWJzKGZvcm1Db250ZXh0OiBhbnksIHRhYnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZFNlY3Rpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiOiBzdHJpbmcsIHNlY3Rpb25zOiBhbnksIHNlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9iamVjdCA9IHRhYk9iamVjdD8uc2VjdGlvbnM/LmdldChzZWN0aW9uKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdOYW1lJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdQYXJlbnQnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTGFiZWwnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRUYWIgPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55LCB0YWI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ05hbWUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ1BhcmVudCcsICgpID0+IHRhYk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdDb250ZW50VHlwZScsICgpID0+IHRhYk9iamVjdD8uZ2V0Q29udGVudFR5cGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRDb250ZW50VHlwZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdEaXNwbGF5U3RhdGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdMYWJlbCcsICgpID0+IHRhYk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdWaXNpYmxlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHRhYnNbdGFiXS5BZGRUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LmFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICB0YWJzW3RhYl0uRm9jdXMgPSAoKSA9PiB0YWJPYmplY3Q/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgdGFic1t0YWJdLlJlbW92ZVRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8ucmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRhYnNbdGFiXS5TZWN0aW9uKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsb2FkU2VjdGlvbihmb3JtQ29udGV4dCwgdGFiLCB0YWJzW3RhYl0uU2VjdGlvbiwgc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXModGFicykuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIGxvYWRUYWIoZm9ybUNvbnRleHQsIHRhYnMsIHRhYik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbkl0ZW0gPSAobmF2aWdhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBmb3JtQ29udGV4dD8udWk/Lm5hdmlnYXRpb24/Lml0ZW1zO1xyXG4gICAgICAgIGlmICghbmF2SXRlbXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5hdkl0ZW1zLmdldExlbmd0aCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5hdkl0ZW1zLmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmdldElkKCkgPT09IG5hdmlnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWROYXZpZ2F0aW9uID0gKGZvcm1Db250ZXh0OiBhbnksIG5hdmlnYXRpb25zOiBhbnksIG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtID0gZ2V0TmF2aWdhdGlvbkl0ZW0obmF2aWdhdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnSWQnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnTGFiZWwnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ1Zpc2libGUnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgICAgICBuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXS5Gb2N1cyA9ICgpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRGb2N1cygpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKG5hdmlnYXRpb25zKS5mb3JFYWNoKG5hdmlnYXRpb24gPT4ge1xyXG4gICAgICAgIGxvYWROYXZpZ2F0aW9uKGZvcm1Db250ZXh0LCBuYXZpZ2F0aW9ucywgbmF2aWdhdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4Y2x1ZGVkRmllbGRzID0gbmV3IFNldChbXCJCb2R5XCIsIFwiQ29udHJvbHNcIiwgXCJJc0xvYWRlZFwiLCBcIlJlZnJlc2hcIiwgXCJGb2N1c1wiLCBcIkNvbnRyb2xUeXBlXCIsIFwiRGlzYWJsZWRcIiwgXCJMYWJlbFwiLCBcIkNvbnRyb2xOYW1lXCIsIFwiQ29udHJvbFBhcmVudFwiLCBcIlZpc2libGVcIl0pO1xyXG4gICAgY29uc3QgbG9hZFF1aWNrRm9ybSA9IChmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnksIHF1aWNrRm9ybTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMocXVpY2tGb3Jtc1txdWlja0Zvcm1dKS5maWx0ZXIoZmllbGQgPT4gIWV4Y2x1ZGVkRmllbGRzLmhhcyhmaWVsZCkpO1xyXG4gICAgICAgIGNvbnN0IHF1aWNrID0gZm9ybUNvbnRleHQ/LnVpPy5xdWlja0Zvcm1zPy5nZXQocXVpY2tGb3JtKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQm9keScsICgpID0+IExvYWRGb3JtRGlhbG9nKHF1aWNrLCBmaWVsZHMpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBxdWljaz8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFBhcmVudCcsICgpID0+IHF1aWNrPy5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gcXVpY2s/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdEaXNhYmxlZCcsICgpID0+IHF1aWNrPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnTGFiZWwnLCAoKSA9PiBxdWljaz8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ1Zpc2libGUnLCAoKSA9PiBxdWljaz8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Db250cm9scyA9IChhcmc6IGFueSkgPT4gcXVpY2s/LmdldENvbnRyb2woYXJnKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uRm9jdXMgPSAoKSA9PiBxdWljaz8uc2V0Rm9jdXMoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uSXNMb2FkZWQgPSAoKSA9PiBxdWljaz8uaXNMb2FkZWQoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uUmVmcmVzaCA9ICgpID0+IHF1aWNrPy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVpY2tGb3JtcykuZm9yRWFjaChxdWlja0Zvcm0gPT4ge1xyXG4gICAgICAgIGxvYWRRdWlja0Zvcm0oZm9ybUNvbnRleHQsIHF1aWNrRm9ybXMsIHF1aWNrRm9ybSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkR3JpZHMoZm9ybUNvbnRleHQ6IGFueSwgZ3JpZHM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZEdyaWRDb2x1bW4gPSAoY29sOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYWJlbCcsICgpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBjb2w/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0Rpc2FibGVkJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBjb2w/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1ZhbHVlJywgKCkgPT4gY29sPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFZhbHVlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgb2JqLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgICAgIG9iai5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkR3JpZFJvdyA9IChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NvbHVtbnMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldExlbmd0aCA9ICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEdyaWRDb2x1bW4oY29sdW1uKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZEdyaWRDb2x1bW4oY29sdW1uKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5SWQnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkID0gKGZvcm1Db250ZXh0OiBhbnksIGdyaWRzOiBhbnksIGdyaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ29sbGVjdGlvbk9iamVjdCA9IChnZXRJdGVtc0ZuOiBhbnksIHByb2Nlc3NJdGVtRm46IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBvYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0SXRlbXNGbigpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgb2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiBwcm9jZXNzSXRlbUZuKGdldEl0ZW1zRm4oKT8uZ2V0KGluZGV4KSk7XHJcbiAgICAgICAgICAgIG9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbXNGbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gaXRlbXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc0l0ZW1GbihpdGVtcy5nZXQoaW5kZXgpKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRW50aXR5TmFtZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0ZldGNoWG1sJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEZldGNoWG1sKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0dyaWRUeXBlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWRUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1JlbGF0aW9uc2hpcCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRSZWxhdGlvbnNoaXAoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFJvd3MoKSxcclxuICAgICAgICAgICAgICAgIChyb3c6IGFueSkgPT4gbG9hZEdyaWRSb3cocm93KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1NlbGVjdGVkUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFNlbGVjdGVkUm93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3c/LmdldERhdGEoKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdUb3RhbFJlY29yZENvdW50JywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWQoKT8uZ2V0VG90YWxSZWNvcmRDb3VudCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdWaWV3U2VsZWN0b3InLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdTZWxlY3RvciA9IGdyaWRDb250cm9sPy5nZXRWaWV3U2VsZWN0b3IoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZ2V0dGVyKG9iaiwgJ1Zpc2libGUnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmlzVmlzaWJsZSgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0N1cnJlbnRWaWV3JywgKCkgPT4gdmlld1NlbGVjdG9yPy5nZXRDdXJyZW50VmlldygpLCAodmFsdWU6IGFueSkgPT4gdmlld1NlbGVjdG9yPy5zZXRDdXJyZW50Vmlldyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihncmlkc1tncmlkXSwgJ1Zpc2libGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBncmlkQ29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLkFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICBncmlkc1tncmlkXS5PcGVuUmVsYXRlZEdyaWQgPSAoKSA9PiBncmlkQ29udHJvbD8ub3BlblJlbGF0ZWRHcmlkKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaCA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaFJpYmJvbiA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoUmliYm9uKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlVybCA9IChjbGllbnQ6IG51bWJlcikgPT4gZ3JpZENvbnRyb2w/LmdldFVybChjbGllbnQpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKGdyaWRzKS5mb3JFYWNoKGdyaWQgPT4ge1xyXG4gICAgICAgIGxvYWRHcmlkKGZvcm1Db250ZXh0LCBncmlkcywgZ3JpZCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBMb2FkRm9ybShmb3JtQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgY29udGV4dERhdGEgPSBmb3JtQ29udGV4dD8uZGF0YTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhRW50aXR5ID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eTtcclxuICAgIGNvbnN0IGNvbnRleHRVaSA9IGZvcm1Db250ZXh0Py51aTtcclxuICAgIGNvbnN0IGNvbnRleHRVaUZvcm1TZWxlY3RvciA9IGZvcm1Db250ZXh0Py51aT8uZm9ybVNlbGVjdG9yO1xyXG4gICAgY29uc3QgZmluZEZvcm1JdGVtID0gKGNyaXRlcmlhOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXRMZW5ndGgoKSA/PyAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uaXRlbXM/LmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgY3JpdGVyaWEoaXRlbSkgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0F0dHJpYnV0ZXMnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYXR0cmlidXRlcyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0NvbnRyb2xzJywgKCkgPT4gY29udGV4dFVpPy5jb250cm9scyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGE/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc1ZhbGlkJywgKCkgPT4gY29udGV4dERhdGE/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFYbWwnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RGF0YVhtbCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzRGlydHknLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlOYW1lJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1JZCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1MYWJlbCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1UeXBlJywgKCkgPT4gY29udGV4dFVpPy5nZXRGb3JtVHlwZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRIZWlnaHQnLCAoKSA9PiBjb250ZXh0VWk/LmdldFZpZXdQb3J0SGVpZ2h0KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdWaWV3UG9ydFdpZHRoJywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydFdpZHRoKCkpO1xyXG4gICAgZm9ybS5BZGRPblBvc3RTYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblBvc3RTYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQWRkT25TYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5jbGVhckZvcm1Ob3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGNvbnRleHRVaT8uY2xvc2UoKTtcclxuICAgIGZvcm0uRGF0YUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRGF0YVJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRm9ybUlzVmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZykgPT4geyByZXR1cm4gZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uZ2V0VmlzaWJsZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZCA9IChmb3JtSWQ6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbCA9IChmb3JtTGFiZWw6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRMYWJlbCgpLCBmb3JtTGFiZWwpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtU2V0VmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH07XHJcbiAgICBmb3JtLlJlZnJlc2ggPSAoc2F2ZT86IGJvb2xlYW4sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8ucmVmcmVzaChzYXZlKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlJlZnJlc2hSaWJib24gPSAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IGNvbnRleHRVaT8ucmVmcmVzaFJpYmJvbihyZWZyZXNoQWxsKTtcclxuICAgIGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlJlbW92ZU9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uU2F2ZSA9IChzYXZlT3B0aW9ucz86IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRleHREYXRhPy5zYXZlKHNhdmVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlNldEZvcm1FbnRpdHlOYW1lID0gKGFyZzogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1FbnRpdHlOYW1lKGFyZyk7XHJcbiAgICBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1Ob3RpZmljYXRpb24obWVzc2FnZSwgbGV2ZWwsIHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uVWlBZGRMb2FkZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRMb2FkZWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZnVuY3Rpb24gTG9hZEV4ZWN1dGlvbkNvbnRleHQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICBnZXR0ZXIob2JqLCAnRGVwdGgnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXREZXB0aCgpKTtcclxuICAgIGdldHRlcihvYmosICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0V2ZW50QXJncycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpKTtcclxuICAgIGdldHRlcihvYmosICdFdmVudFNvdXJjZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50U291cmNlKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0Zvcm1Db250ZXh0JywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnSXNTYXZlU3VjY2VzcycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRJc1NhdmVTdWNjZXNzKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ1NhdmVFcnJvckluZm8nLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0U2F2ZUVycm9ySW5mbygpKTtcclxuICAgIGdldHRlcihvYmosICdTYXZlTW9kZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRTYXZlTW9kZSgpKTtcclxuICAgIG9iai5EaXNhYmxlQXN5bmNUaW1lb3V0ID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmRpc2FibGVBc3luY1RpbWVvdXQoKTtcclxuICAgIG9iai5HZXRTaGFyZWRWYXJpYWJsZSA9IChrZXk6IHN0cmluZykgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0U2hhcmVkVmFyaWFibGUoa2V5KTtcclxuICAgIG9iai5Jc0RlZmF1bHRQcmV2ZW50ZWQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uaXNEZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICBvYmouSXNJbml0aWFsTG9hZCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXREYXRhTG9hZFN0YXRlKCkgPT09IDE7XHJcbiAgICBvYmouU2V0UHJldmVudERlZmF1bHQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8ucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9iai5TZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3IgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8ucHJldmVudERlZmF1bHRPbkVycm9yKCk7XHJcbiAgICBvYmouU2V0U2hhcmVkVmFyaWFibGUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LnNldFNoYXJlZFZhcmlhYmxlKGtleSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIFNpZGVQYW5lcyBBUEkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgYWNjZXNzIHRvIHNpZGUgcGFuZXMgZnVuY3Rpb25hbGl0eSBpbiBtb2RlbC1kcml2ZW4gYXBwcy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVNpZGVQYW5lcyBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLWFwcC1zaWRlcGFuZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkU2lkZVBhbmVzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzaWRlUGFuZXM6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoc2lkZVBhbmVzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uc3RhdGUsICh2YWx1ZTogYW55KSA9PiB7IGNvbnN0IHggPSBnZXRYcm0oKTsgaWYgKCh4IGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzKSAoeCBhcyBhbnkpLkFwcC5zaWRlUGFuZXMuc3RhdGUgPSB2YWx1ZTsgfSk7XHJcbiAgICBzaWRlUGFuZXMuQ3JlYXRlID0gZnVuY3Rpb24gKHBhbmVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSkgeyAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5jcmVhdGVQYW5lKHBhbmVPcHRpb25zKT8udGhlbihzdWNjZXNzQ2FsbGJhY2spOyB9O1xyXG4gICAgc2lkZVBhbmVzLkdldCA9IChwYW5lSWQ6IHN0cmluZykgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0UGFuZShwYW5lSWQpO1xyXG4gICAgc2lkZVBhbmVzLkdldEFsbCA9ICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldEFsbFBhbmVzKCk7XHJcbiAgICBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRTZWxlY3RlZFBhbmUoKTtcclxuICAgIHJldHVybiBzaWRlUGFuZXM7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBXZWJBcGkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgbWV0aG9kcyB0byB1c2UgV2ViIEFQSSB0byBjcmVhdGUgYW5kIG1hbmFnZSByZWNvcmRzIGFuZCBleGVjdXRlIFdlYiBBUEkgYWN0aW9ucyBhbmQgZnVuY3Rpb25zLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJV2ViQXBpIGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0td2ViYXBpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFdlYkFwaSgpOiBEZXZLaXQuSVdlYkFwaSB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9IGFzIERldktpdC5JV2ViQXBpO1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRXZWJBcGkgPSB4cm0/LldlYkFwaTtcclxuICAgIGNvbnN0IGdldE9ubGluZSA9IHhybT8uV2ViQXBpPy5vbmxpbmU7XHJcbiAgICBjb25zdCBnZXRPZmZsaW5lID0geHJtPy5XZWJBcGk/Lm9mZmxpbmU7XHJcbiAgICBjb25zdCBleHRyYWN0RW50aXR5TmFtZSA9IGZ1bmN0aW9uIChmZXRjaFhtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY2xlYW5YbWwgPSBmZXRjaFhtbDtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbE1hdGNoID0gZmV0Y2hYbWwubWF0Y2goL2ZldGNoeG1sPS9pKTtcclxuICAgICAgICBpZiAoZmV0Y2hYbWxNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gZmV0Y2hYbWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmZXRjaHhtbD0nKSArICdmZXRjaHhtbD0nLmxlbmd0aDtcclxuICAgICAgICAgICAgY2xlYW5YbWwgPSBkZWNvZGVVUklDb21wb25lbnQoZmV0Y2hYbWwuc3Vic3RyaW5nKHNwbGl0SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZmV0Y2hYbWwudHJpbSgpLnN0YXJ0c1dpdGgoJzwnKSkge1xyXG4gICAgICAgICAgICBjbGVhblhtbCA9IGZldGNoWG1sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhjbGVhblhtbCwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICBjb25zdCBlbnRpdHlOb2RlID0geG1sRG9jLnF1ZXJ5U2VsZWN0b3IoXCJlbnRpdHlcIik7XHJcbiAgICAgICAgaWYgKGVudGl0eU5vZGUgJiYgZW50aXR5Tm9kZS5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Tm9kZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpITtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRpdHkgbmFtZSBub3QgZm91bmQgaW4gZmV0Y2hYbWxcIik7XHJcbiAgICB9O1xyXG4gICAgb2JqLkNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LmNyZWF0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5EZWxldGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8uZGVsZXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVNdWx0aXBsZVJlY29yZHMgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZywgbWF4UGFnZVNpemU/OiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lLCBvcHRpb25zLCBtYXhQYWdlU2l6ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5VcGRhdGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgZGF0YTogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy51cGRhdGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBkYXRhKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGUgPSBmdW5jdGlvbiAocmVxdWVzdDogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gKGdldFdlYkFwaSBhcyBhbnkpPy5leGVjdXRlKHJlcXVlc3QpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZU11bHRpcGxlKHJlcXVlc3RzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkcyA9IGZ1bmN0aW9uIChhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeTogYW55LCBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9uczogc3RyaW5nLCBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s/OiBhbnksIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s/OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGxldCBlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IG1heFBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGFzRmV0Y2hYbWwgPSAoc3RyOiBzdHJpbmcpID0+IC9mZXRjaHhtbD0vaS50ZXN0KHN0cik7XHJcbiAgICAgICAgY29uc3QgaXNQbGFpbkZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyAmJiBzdHIudHJpbSgpLnN0YXJ0c1dpdGgoJzxmZXRjaCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZFBhcmFtSXNGZXRjaFhtbE9yT0RhdGEgPSB0eXBlb2YgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgIChoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykgfHxcclxuICAgICAgICAgICAgICAgIGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykgfHxcclxuICAgICAgICAgICAgICAgIChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucy5zdGFydHNXaXRoKCc/JykgJiYgIWhhc0ZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSkpO1xyXG4gICAgICAgIGlmIChzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKGlzUGxhaW5GZXRjaFhtbChvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICc/ZmV0Y2hYbWw9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGFzRmV0Y2hYbWwob3B0aW9ucykgfHwgaXNQbGFpbkZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBleHRyYWN0RW50aXR5TmFtZShvcHRpb25zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW50aXR5IG5hbWUgY2Fubm90IGJlIGRldGVybWluZWQgZnJvbSBPRGF0YSBxdWVyeS4gUGxlYXNlIHByb3ZpZGUgZW50aXR5TG9naWNhbE5hbWUgYXMgc2Vjb25kIHBhcmFtZXRlci4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHlMb2dpY2FsTmFtZSA9IGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVNdWx0aXBsZVJlY29yZHMoZW50aXR5TG9naWNhbE5hbWUhLCBvcHRpb25zLCBtYXhQYWdlU2l6ZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbnRpdGllcyAmJiByZXN1bHQuZW50aXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lbnRpdGllcy5tYXAoKGVudGl0eTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJyAmJiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeS5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmQgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEZ1bmN0aW9uLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IFwiPyRzZWxlY3Q9KlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IFwiPyRzZWxlY3Q9KlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMgYXMgc3RyaW5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5ID09PSAnZnVuY3Rpb24nICYmIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgPyBuZXcgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgOiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXR0ZXIob2JqLCAnT25saW5lJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ubGluZTogYW55ID0ge307XHJcbiAgICAgICAgb25saW5lLkV4ZWN1dGUgPSBmdW5jdGlvbiAocmVxdWVzdDogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE9ubGluZT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlTXVsdGlwbGUgPSBmdW5jdGlvbiAocmVxdWVzdHM6IGFueVtdLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE9ubGluZT8uZXhlY3V0ZU11bHRpcGxlKHJlcXVlc3RzKTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBvbmxpbmU7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcihvYmosICdPZmZsaW5lJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9mZmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9mZmxpbmUuSXNBdmFpbGFibGUgPSAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZykgPT4gKGdldE9mZmxpbmUgYXMgYW55KT8uaXNBdmFpbGFibGUoZW50aXR5TG9naWNhbE5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvZmZsaW5lO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgQ29waWxvdCBBUEkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgYWNjZXNzIHRvIENvcGlsb3QgZnVuY3Rpb25hbGl0eSBmb3IgZXhlY3V0aW5nIGV2ZW50cyBhbmQgcHJvbXB0cy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSUNvcGlsb3QgaW50ZXJmYWNlXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlL3hybS1jb3BpbG90XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZENvcGlsb3QoKTogRGV2S2l0LklDb3BpbG90IHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGNvbnN0IGdldENvcGlsb3QgPSAoeHJtIGFzIGFueSk/LkNvcGlsb3Q7XHJcbiAgICBvYmouRXhlY3V0ZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldENvcGlsb3Q/LmV4ZWN1dGVFdmVudChldmVudE5hbWUsIGV2ZW50UGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlUHJvbXB0ID0gZnVuY3Rpb24gKHByb21wdFRleHQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldENvcGlsb3Q/LmV4ZWN1dGVQcm9tcHQocHJvbXB0VGV4dCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuZnVuY3Rpb24gbG9hZE90aGVycyhmb3JtQ29udGV4dDogYW55LCBmb3JtOiBhbnksIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgZm9ybS5TaWRlUGFuZXMgPSBMb2FkU2lkZVBhbmVzKCk7XHJcbiAgICBmb3JtLldlYkFwaSA9IExvYWRXZWJBcGkoKTtcclxuICAgIGZvcm0uQ29waWxvdCA9IExvYWRDb3BpbG90KCk7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIGEgZm9ybSB3aXRoIHR5cGVkIEJvZHksIEhlYWRlciwgVGFiLCBHcmlkLCBOYXZpZ2F0aW9uLCBRdWlja0Zvcm0sIGFuZCBQcm9jZXNzIHNlY3Rpb25zLlxyXG4gKiBUaGlzIGlzIHRoZSBtYWluIGZ1bmN0aW9uIGZvciBpbml0aWFsaXppbmcgYSBmb3JtIGluIFR5cGVTY3JpcHQuXHJcbiAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IFRoZSBleGVjdXRpb24gY29udGV4dCBwYXNzZWQgdG8gdGhlIGZvcm0gZXZlbnQgaGFuZGxlclxyXG4gKiBAcGFyYW0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBPcHRpb25hbCBkZWZhdWx0IHdlYiByZXNvdXJjZSBuYW1lIGZvciB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4gKiBAcGFyYW0gZm9ybUNvbmZpZyBDb25maWd1cmF0aW9uIG9iamVjdCBzcGVjaWZ5aW5nIGZpZWxkcywgdGFicywgZ3JpZHMsIGV0Yy5cclxuICogQHJldHVybnMgQSB0eXBlZCBmb3JtIG9iamVjdCB3aXRoIGFsbCBmb3JtIGZ1bmN0aW9uYWxpdHlcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkRm9ybVYyPFRCb2R5ID0gUmVjb3JkPHN0cmluZywgYW55PiwgVEhlYWRlciA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRUYWIgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUR3JpZCA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFROYXZpZ2F0aW9uID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFF1aWNrRm9ybSA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRQcm9jZXNzID0gYW55PihcclxuICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIGZvcm1Db25maWc6IHtcclxuICAgICAgICBib2R5Pzogc3RyaW5nW107XHJcbiAgICAgICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAgICAgdGFiPzogc3RyaW5nW107XHJcbiAgICAgICAgZ3JpZD86IHN0cmluZ1tdO1xyXG4gICAgICAgIG5hdmlnYXRpb24/OiBzdHJpbmdbXTtcclxuICAgICAgICBxdWljaz86IHN0cmluZ1tdO1xyXG4gICAgICAgIGJwZj86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG4pOiB7XHJcbiAgICBFeGVjdXRpb25Db250ZXh0OiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBCb2R5OiBUQm9keTtcclxuICAgIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIFRhYjogVFRhYjtcclxuICAgIEdyaWQ6IFRHcmlkO1xyXG4gICAgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBGb3JtSWQ6IHN0cmluZztcclxuICAgIEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgQXR0cmlidXRlczogYW55O1xyXG4gICAgQ29udHJvbHM6IGFueTtcclxuICAgIERhdGFYbWw6IHN0cmluZztcclxuICAgIEVudGl0eUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBFbnRpdHlJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgRW50aXR5UmVmZXJlbmNlOiBhbnk7XHJcbiAgICBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuICAgIFZpZXdQb3J0SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBWaWV3UG9ydFdpZHRoOiBudW1iZXI7XHJcbiAgICBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEFkZE9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEFkZE9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgUmVtb3ZlT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgUmVtb3ZlT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBEYXRhQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBEYXRhUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBGb3JtSXNWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBGb3JtTmF2aWdhdGVUb0Zvcm1JZDogKGZvcm1JZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw6IChmb3JtTGFiZWw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIEZvcm1TZXRWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtRW50aXR5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIFByb2Nlc3M6IFRQcm9jZXNzO1xyXG4gICAgVXRpbGl0eTogYW55O1xyXG4gICAgU2lkZVBhbmVzOiBhbnk7XHJcbiAgICBXZWJBcGk6IGFueTtcclxuICAgIENvcGlsb3Q6IGFueTtcclxufSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0Py4oKSA/PyBleGVjdXRpb25Db250ZXh0ID8/IG51bGw7XHJcbiAgICBjb25zdCBmb3JtID0gTG9hZEZvcm0oZm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBib2R5ID0gW10sIHRhYiA9IFtdLCBoZWFkZXIgPSBbXSwgYnBmID0gW10sIHF1aWNrID0gW10sIGdyaWQgPSBbXSwgbmF2aWdhdGlvbiA9IFtdLCBkaWFsb2cgPSBbXSB9ID0gZm9ybUNvbmZpZyBhcyBhbnk7XHJcbiAgICBjb25zdCBib2R5T2JqOiBhbnkgPSB7fTtcclxuICAgIGJvZHkuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4gYm9keU9ialtmaWVsZF0gPSB7fSk7XHJcbiAgICBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBib2R5T2JqKTtcclxuICAgIGNvbnN0IHRhYk9iajogYW55ID0ge307XHJcbiAgICB0YWIuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3RhYk5hbWUsIHNlY3Rpb25OYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgIGlmICghdGFiT2JqW3RhYk5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRhYk9ialt0YWJOYW1lXSA9IHsgU2VjdGlvbjoge30gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFiT2JqW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdID0ge307XHJcbiAgICB9KTtcclxuICAgIGxvYWRUYWJzKGZvcm1Db250ZXh0LCB0YWJPYmopO1xyXG4gICAgYm9keU9iai5UYWIgPSB0YWJPYmo7XHJcbiAgICBmb3JtLkJvZHkgPSBib2R5T2JqO1xyXG4gICAgY29uc3QgaGVhZGVyT2JqOiBhbnkgPSB7fTtcclxuICAgIGhlYWRlci5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiBoZWFkZXJPYmpbZmllbGRdID0ge30pO1xyXG4gICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgaGVhZGVyT2JqLCAnaGVhZGVyXycpO1xyXG4gICAgZm9ybS5IZWFkZXIgPSBoZWFkZXJPYmo7XHJcbiAgICBjb25zdCBwcm9jZXNzID0gTG9hZFByb2Nlc3MoZm9ybUNvbnRleHQpO1xyXG4gICAgaWYgKGJwZi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgYnBmT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgYnBmUHJvY2Vzc05hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGJwZi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3Byb2Nlc3NOYW1lLCBmaWVsZE5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgICAgIGlmICghYnBmUHJvY2Vzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGJwZlByb2Nlc3NOYW1lID0gcHJvY2Vzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnBmT2JqW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBicGZPYmosICdoZWFkZXJfcHJvY2Vzc18nKTtcclxuICAgICAgICBpZiAoYnBmUHJvY2Vzc05hbWUpIHtcclxuICAgICAgICAgICAgcHJvY2Vzc1ticGZQcm9jZXNzTmFtZV0gPSBicGZPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybS5Qcm9jZXNzID0gcHJvY2VzcztcclxuICAgIGNvbnN0IHF1aWNrRm9ybU9iajogYW55ID0ge307XHJcbiAgICBxdWljay5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBbcXVpY2tGb3JtTmFtZSwgZmllbGROYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgIGlmICghcXVpY2tGb3JtT2JqW3F1aWNrRm9ybU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dCwgcXVpY2tGb3JtT2JqKTtcclxuICAgIGZvcm0uUXVpY2tGb3JtID0gcXVpY2tGb3JtT2JqO1xyXG4gICAgY29uc3QgZ3JpZE9iajogYW55ID0ge307XHJcbiAgICBncmlkLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4gZ3JpZE9ialtpdGVtXSA9IHt9KTtcclxuICAgIGxvYWRHcmlkcyhmb3JtQ29udGV4dCwgZ3JpZE9iaik7XHJcbiAgICBmb3JtLkdyaWQgPSBncmlkT2JqO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbk9iajogYW55ID0ge307XHJcbiAgICBuYXZpZ2F0aW9uLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4gbmF2aWdhdGlvbk9ialtpdGVtXSA9IHt9KTtcclxuICAgIGxvYWROYXZpZ2F0aW9ucyhmb3JtQ29udGV4dCwgbmF2aWdhdGlvbk9iaik7XHJcbiAgICBmb3JtLk5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uT2JqO1xyXG4gICAgaWYgKGRpYWxvZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9ybS5EaWFsb2cgPSBMb2FkRm9ybURpYWxvZyhmb3JtQ29udGV4dCwgZGlhbG9nKTtcclxuICAgIH1cclxuICAgIGZvcm0uVXRpbGl0eSA9IExvYWRVdGlsaXR5KGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgZm9ybS5FeGVjdXRpb25Db250ZXh0ID0gTG9hZEV4ZWN1dGlvbkNvbnRleHQoZXhlY3V0aW9uQ29udGV4dCk7XHJcbiAgICBsb2FkT3RoZXJzKGZvcm1Db250ZXh0LCBmb3JtLCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkUHJvY2Vzcyhmb3JtQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHByb2Nlc3M6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgZ2V0UHJvY2VzcyA9IGZvcm1Db250ZXh0Py5kYXRhPy5wcm9jZXNzO1xyXG4gICAgY29uc3QgZ2V0UHJvY2Vzc1VpID0gZm9ybUNvbnRleHQ/LnVpPy5wcm9jZXNzO1xyXG4gICAgY29uc3QgbG9hZFN0ZXAgPSAoc3RlcDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlJywgKCkgPT4gc3RlcD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gc3RlcD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJvZ3Jlc3MnLCAoKSA9PiBzdGVwPy5nZXRQcm9ncmVzcygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUmVxdWlyZWQnLCAoKSA9PiBzdGVwPy5pc1JlcXVpcmVkKCkpO1xyXG4gICAgICAgIG9iai5TZXRQcm9ncmVzcyA9IChzdGVwUHJvZ3Jlc3M6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKSA9PiBzdGVwPy5zZXRQcm9ncmVzcyhzdGVwUHJvZ3Jlc3MsIG1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFN0YWdlID0gKHN0YWdlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDYXRlZ29yeScsICgpID0+IHN0YWdlPy5nZXRDYXRlZ29yeSgpPy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5TmFtZScsICgpID0+IHN0YWdlPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJZCcsICgpID0+IHN0YWdlPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHN0YWdlPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGF0dXMnLCAoKSA9PiBzdGFnZT8uZ2V0U3RhdHVzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGVwcycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBzdGFnZT8uZ2V0U3RlcHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdGVwcykgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwc0FycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzdGVwcy5sZW5ndGggfHwgMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgc3RlcHNBcnJheS5wdXNoKGxvYWRTdGVwKHN0ZXBzW2luZGV4XSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGVwc0FycmF5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9iai5BbGxvd0NyZWF0ZU5ldyA9IChjYWxsYmFjazogYW55KSA9PiB7IGlmIChzdGFnZT8uZ2V0TmF2aWdhdGlvbkJlaGF2aW9yKCkpIHN0YWdlLmdldE5hdmlnYXRpb25CZWhhdmlvcigpLmFsbG93Q3JlYXRlTmV3ID0gY2FsbGJhY2s7IH07XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkUHJvY2Vzc0lubmVyID0gKHByb2Nlc3NPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lkJywgKCkgPT4gcHJvY2Vzc09iaj8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzUmVuZGVyZWQnLCAoKSA9PiBwcm9jZXNzT2JqPy5pc1JlbmRlcmVkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gcHJvY2Vzc09iaj8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RhZ2VzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzU3RhZ2VzID0gcHJvY2Vzc09iaj8uZ2V0U3RhZ2VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlc09iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBwcm9jZXNzU3RhZ2VzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRTdGFnZShzdGFnZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5nZXRMZW5ndGggPSAoKSA9PiBwcm9jZXNzU3RhZ2VzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IChzdGFnZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwcm9jZXNzU3RhZ2VzPy5nZXRMZW5ndGgoKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gcHJvY2Vzc1N0YWdlcy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRTdGFnZShzdGFnZSksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YWdlc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlUGF0aCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY3RpdmVQYXRoT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9hZFN0YWdlKHN0YWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IChzdGFnZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlcyA9IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YWdlcz8uZ2V0TGVuZ3RoKCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZFN0YWdlKHN0YWdlKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlUGF0aE9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVQcm9jZXNzJywgKCkgPT4gbG9hZFByb2Nlc3NJbm5lcihnZXRQcm9jZXNzPy5nZXRBY3RpdmVQcm9jZXNzKCkpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlU3RhZ2UnLCAoKSA9PiBsb2FkU3RhZ2UoZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlU3RhZ2UoKSkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdJbnN0YW5jZUlkJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0SW5zdGFuY2VJZCgpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnSW5zdGFuY2VOYW1lJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0SW5zdGFuY2VOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdTZWxlY3RlZFN0YWdlJywgKCkgPT4gbG9hZFN0YWdlKGdldFByb2Nlc3M/LmdldFNlbGVjdGVkU3RhZ2UoKSkpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdEaXNwbGF5U3RhdGUnLCAoKSA9PiBnZXRQcm9jZXNzVWk/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBnZXRQcm9jZXNzVWk/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdTdGF0dXMnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRTdGF0dXMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgZ2V0UHJvY2Vzcz8uc2V0U3RhdHVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ1Zpc2libGUnLCAoKSA9PiBnZXRQcm9jZXNzVWk/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGdldFByb2Nlc3NVaT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25QcmVTdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByZVN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25Qcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25TdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uU3RhZ2VTZWxlY3RlZCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblN0YWdlU2VsZWN0ZWQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5FbmFibGVkUHJvY2Vzc2VzID0gKGNhbGxiYWNrOiAocHJvY2Vzc2VzOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIGdldFByb2Nlc3M/LmdldEVuYWJsZWRQcm9jZXNzZXMoKGVuYWJsZWRQcm9jZXNzZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZXMgPSBPYmplY3QuZW50cmllcyhlbmFibGVkUHJvY2Vzc2VzKS5tYXAoKFtwcm9jZXNzSWQsIHByb2Nlc3NOYW1lXSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NJZDogcHJvY2Vzc0lkLFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc05hbWU6IHByb2Nlc3NOYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBwcm9jZXNzLk1vdmVOZXh0ID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/Lm1vdmVOZXh0KGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuTW92ZVByZXZpb3VzID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/Lm1vdmVQcmV2aW91cyhjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlByb2Nlc3NJbnN0YW5jZXMgPSAoY2FsbGJhY2s6IChwcm9jZXNzZXM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvY2Vzcz8uZ2V0UHJvY2Vzc0luc3RhbmNlcygocHJvY2Vzc0luc3RhbmNlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IE9iamVjdC52YWx1ZXMocHJvY2Vzc0luc3RhbmNlcykubWFwKChwcm9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzSWQ6IHByb2MuUHJvY2Vzc0RlZmluaXRpb25JRCxcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NOYW1lOiBwcm9jLlByb2Nlc3NEZWZpbml0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRPbjogcHJvYy5DcmVhdGVkT24sXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkT25EYXRlOiBwcm9jLkNyZWF0ZWRPbkRhdGUsXHJcbiAgICAgICAgICAgICAgICBJbnN0YW5jZUlkOiBwcm9jLlByb2Nlc3NJbnN0YW5jZUlELFxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2VOYW1lOiBwcm9jLlByb2Nlc3NJbnN0YW5jZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBTdGF0dXM6IHByb2MuU3RhdHVzQ29kZU5hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3MuUmVmbG93ID0gKHVwZGF0ZVVpOiBib29sZWFuLCBwYXJlbnRTdGFnZTogc3RyaW5nLCBuZXh0U3RhZ2U6IHN0cmluZykgPT4gZ2V0UHJvY2Vzc1VpPy5yZWZsb3codXBkYXRlVWksIHBhcmVudFN0YWdlLCBuZXh0U3RhZ2UpO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25QcmVTdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByZVN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25Qcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25TdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uU3RhZ2VTZWxlY3RlZCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblN0YWdlU2VsZWN0ZWQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVQcm9jZXNzID0gKHByb2Nlc3NJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVQcm9jZXNzKHByb2Nlc3NJZCwgY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVQcm9jZXNzSW5zdGFuY2UgPSAocHJvY2Vzc0luc3RhbmNlSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlUHJvY2Vzc0luc3RhbmNlKHByb2Nlc3NJbnN0YW5jZUlkLCBjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVN0YWdlID0gKHN0YWdlSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlU3RhZ2Uoc3RhZ2VJZCwgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIHByb2Nlc3M7XHJcbn1cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gaW50ZXJmYWNlIGZvciBmb3JtIGluaXRpYWxpemF0aW9uLlxyXG4gKiBTcGVjaWZpZXMgd2hpY2ggZmllbGRzLCB0YWJzLCBncmlkcywgZXRjLiB0byBsb2FkIG9uIGEgZm9ybS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1Db25maWcge1xyXG4gICAgLyoqIEFycmF5IG9mIGJvZHkgZmllbGQgbG9naWNhbCBuYW1lcyAqL1xyXG4gICAgYm9keT86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIGhlYWRlciBmaWVsZCBsb2dpY2FsIG5hbWVzICovXHJcbiAgICBoZWFkZXI/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiB0YWIgYW5kIHNlY3Rpb24gbmFtZXMgaW4gZm9ybWF0IFwiVGFiTmFtZV9fX1NlY3Rpb25OYW1lXCIgKi9cclxuICAgIHRhYj86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIGdyaWQgY29udHJvbCBuYW1lcyAqL1xyXG4gICAgZ3JpZD86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIG5hdmlnYXRpb24gaXRlbSBJRHMgKi9cclxuICAgIG5hdmlnYXRpb24/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBxdWljayBmb3JtIG5hbWVzIGluIGZvcm1hdCBcIlF1aWNrRm9ybU5hbWVfX19GaWVsZE5hbWVcIiAqL1xyXG4gICAgcXVpY2s/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBCUEYgZmllbGRzIGluIGZvcm1hdCBcIlByb2Nlc3NOYW1lX19fRmllbGROYW1lXCIgKi9cclxuICAgIGJwZj86IHN0cmluZ1tdO1xyXG59XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciB0eXBlZCBlbnRpdHkgZm9ybXMuXHJcbiAqIFByb3ZpZGVzIHN0cm9uZ2x5LXR5cGVkIGFjY2VzcyB0byBmb3JtIGNvbnRyb2xzLCBmaWVsZHMsIHRhYnMsIGdyaWRzLCBhbmQgbW9yZS5cclxuICogRXh0ZW5kIHRoaXMgY2xhc3MgaW4gZ2VuZXJhdGVkIGVudGl0eSBmb3JtIGZpbGVzLlxyXG4gKiBAdGVtcGxhdGUgVEJvZHkgVHlwZSBkZWZpbml0aW9uIGZvciBib2R5IGZpZWxkc1xyXG4gKiBAdGVtcGxhdGUgVEhlYWRlciBUeXBlIGRlZmluaXRpb24gZm9yIGhlYWRlciBmaWVsZHNcclxuICogQHRlbXBsYXRlIFRUYWIgVHlwZSBkZWZpbml0aW9uIGZvciB0YWJzXHJcbiAqIEB0ZW1wbGF0ZSBUR3JpZCBUeXBlIGRlZmluaXRpb24gZm9yIGdyaWRzXHJcbiAqIEB0ZW1wbGF0ZSBUTmF2aWdhdGlvbiBUeXBlIGRlZmluaXRpb24gZm9yIG5hdmlnYXRpb24gaXRlbXNcclxuICogQHRlbXBsYXRlIFRRdWlja0Zvcm0gVHlwZSBkZWZpbml0aW9uIGZvciBxdWljayB2aWV3IGZvcm1zXHJcbiAqIEB0ZW1wbGF0ZSBUUHJvY2VzcyBUeXBlIGRlZmluaXRpb24gZm9yIGJ1c2luZXNzIHByb2Nlc3MgZmxvd3NcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZTxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2VzcyA9IGFueT4ge1xyXG4gICAgcHVibGljIEJvZHk6IFRCb2R5O1xyXG4gICAgcHVibGljIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIHB1YmxpYyBUYWI6IFRUYWI7XHJcbiAgICBwdWJsaWMgR3JpZDogVEdyaWQ7XHJcbiAgICBwdWJsaWMgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBwdWJsaWMgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgcHVibGljIFByb2Nlc3M6IFRQcm9jZXNzO1xyXG4gICAgcHVibGljIEV4ZWN1dGlvbkNvbnRleHQ6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIHB1YmxpYyBVdGlsaXR5OiBhbnk7XHJcbiAgICBwdWJsaWMgU2lkZVBhbmVzOiBEZXZLaXQuSVNpZGVQYW5lcztcclxuICAgIHB1YmxpYyBXZWJBcGk6IERldktpdC5JV2ViQXBpO1xyXG4gICAgcHVibGljIENvcGlsb3Q6IERldktpdC5JQ29waWxvdDtcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEF0dHJpYnV0ZXM6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBDb250cm9sczogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFYbWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5UmVmZXJlbmNlOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgVmlld1BvcnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBWaWV3UG9ydFdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgQWRkT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEFkZE9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFJlbW92ZU9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBSZW1vdmVPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBEYXRhQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRGF0YVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1Jc1Zpc2libGU6IChmb3JtSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBGb3JtTmF2aWdhdGVUb0Zvcm1JZDogKGZvcm1JZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsOiAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybVNldFZpc2libGU6IChmb3JtSWQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtRW50aXR5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgICAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgZm9ybUNvbmZpZzogSUZvcm1Db25maWdcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBMb2FkRm9ybVYyPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0sIFRQcm9jZXNzPihcclxuICAgICAgICAgICAgZXhlY3V0aW9uQ29udGV4dCxcclxuICAgICAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZSxcclxuICAgICAgICAgICAgZm9ybUNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gZm9ybS5Cb2R5O1xyXG4gICAgICAgIHRoaXMuSGVhZGVyID0gZm9ybS5IZWFkZXI7XHJcbiAgICAgICAgdGhpcy5UYWIgPSBmb3JtLlRhYjtcclxuICAgICAgICB0aGlzLkdyaWQgPSBmb3JtLkdyaWQ7XHJcbiAgICAgICAgdGhpcy5OYXZpZ2F0aW9uID0gZm9ybS5OYXZpZ2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUXVpY2tGb3JtID0gZm9ybS5RdWlja0Zvcm07XHJcbiAgICAgICAgdGhpcy5Qcm9jZXNzID0gZm9ybS5Qcm9jZXNzO1xyXG4gICAgICAgIHRoaXMuRXhlY3V0aW9uQ29udGV4dCA9IGZvcm0uRXhlY3V0aW9uQ29udGV4dDtcclxuICAgICAgICB0aGlzLkZvcm1JZCA9IGZvcm0uRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybUxhYmVsID0gZm9ybS5Gb3JtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5Gb3JtVHlwZSA9IGZvcm0uRm9ybVR5cGU7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJZCA9IGZvcm0uRW50aXR5SWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlOYW1lID0gZm9ybS5FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuRGF0YUlzRGlydHkgPSBmb3JtLkRhdGFJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRGF0YUlzVmFsaWQgPSBmb3JtLkRhdGFJc1ZhbGlkO1xyXG4gICAgICAgIHRoaXMuQXR0cmlidXRlcyA9IGZvcm0uQXR0cmlidXRlcztcclxuICAgICAgICB0aGlzLkNvbnRyb2xzID0gZm9ybS5Db250cm9scztcclxuICAgICAgICB0aGlzLkRhdGFYbWwgPSBmb3JtLkRhdGFYbWw7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJc0RpcnR5ID0gZm9ybS5FbnRpdHlJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNWYWxpZCA9IGZvcm0uRW50aXR5SXNWYWxpZDtcclxuICAgICAgICB0aGlzLkVudGl0eVJlZmVyZW5jZSA9IGZvcm0uRW50aXR5UmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMuUHJpbWFyeUF0dHJpYnV0ZVZhbHVlID0gZm9ybS5QcmltYXJ5QXR0cmlidXRlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5WaWV3UG9ydEhlaWdodCA9IGZvcm0uVmlld1BvcnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5WaWV3UG9ydFdpZHRoID0gZm9ybS5WaWV3UG9ydFdpZHRoO1xyXG4gICAgICAgIHRoaXMuU2F2ZSA9IGZvcm0uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlZnJlc2ggPSBmb3JtLlJlZnJlc2g7XHJcbiAgICAgICAgdGhpcy5DbG9zZSA9IGZvcm0uQ2xvc2U7XHJcbiAgICAgICAgdGhpcy5TZXRGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoUmliYm9uID0gZm9ybS5SZWZyZXNoUmliYm9uO1xyXG4gICAgICAgIHRoaXMuVWlBZGRMb2FkZWQgPSBmb3JtLlVpQWRkTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVMb2FkZWQgPSBmb3JtLlVpUmVtb3ZlTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlBZGRPbkxvYWQgPSBmb3JtLlVpQWRkT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVPbkxvYWQgPSBmb3JtLlVpUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuQWRkT25Qb3N0U2F2ZSA9IGZvcm0uQWRkT25Qb3N0U2F2ZTtcclxuICAgICAgICB0aGlzLkFkZE9uU2F2ZSA9IGZvcm0uQWRkT25TYXZlO1xyXG4gICAgICAgIHRoaXMuUmVtb3ZlT25Qb3N0U2F2ZSA9IGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uU2F2ZSA9IGZvcm0uUmVtb3ZlT25TYXZlO1xyXG4gICAgICAgIHRoaXMuRGF0YUFkZE9uTG9hZCA9IGZvcm0uRGF0YUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLkRhdGFSZW1vdmVPbkxvYWQgPSBmb3JtLkRhdGFSZW1vdmVPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSXNWaXNpYmxlID0gZm9ybS5Gb3JtSXNWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuRm9ybU5hdmlnYXRlVG9Gb3JtSWQgPSBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWwgPSBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVNldFZpc2libGUgPSBmb3JtLkZvcm1TZXRWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybUVudGl0eU5hbWUgPSBmb3JtLlNldEZvcm1FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuVXRpbGl0eSA9IGZvcm0uVXRpbGl0eTtcclxuICAgICAgICB0aGlzLlNpZGVQYW5lcyA9IGZvcm0uU2lkZVBhbmVzO1xyXG4gICAgICAgIHRoaXMuV2ViQXBpID0gZm9ybS5XZWJBcGk7XHJcbiAgICAgICAgdGhpcy5Db3BpbG90ID0gZm9ybS5Db3BpbG90O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkVXRpbGl0eShkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IHV0aWxpdHk6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRBcHAgPSB4cm0/LkFwcDtcclxuICAgIGNvbnN0IGdldERldmljZSA9IHhybT8uRGV2aWNlO1xyXG4gICAgY29uc3QgZ2V0RW5jb2RpbmcgPSB4cm0/LkVuY29kaW5nO1xyXG4gICAgY29uc3QgZ2V0R2xvYmFsQ29udGV4dCA9IHhybT8uVXRpbGl0eT8uZ2V0R2xvYmFsQ29udGV4dCgpO1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbiA9IHhybT8uTmF2aWdhdGlvbjtcclxuICAgIGNvbnN0IGdldFBhbmVsID0geHJtPy5QYW5lbDtcclxuICAgIGNvbnN0IGdldFV0aWxpdHkgPSB4cm0/LlV0aWxpdHk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0NsaWVudCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGdldEdsb2JhbENvbnRleHQ/LmNsaWVudDtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50TmFtZScsICgpID0+IGNsaWVudD8uZ2V0Q2xpZW50KCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdDbGllbnRTdGF0ZScsICgpID0+IGNsaWVudD8uZ2V0Q2xpZW50U3RhdGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Zvcm1GYWN0b3InLCAoKSA9PiBjbGllbnQ/LmdldEZvcm1GYWN0b3IoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzTmV0d29ya0F2YWlsYWJsZScsICgpID0+IGNsaWVudD8uaXNOZXR3b3JrQXZhaWxhYmxlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc09mZmxpbmUnLCAoKSA9PiBjbGllbnQ/LmlzT2ZmbGluZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0NsaWVudFVybCcsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldENsaWVudFVybCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ3VycmVudEFwcFVybCcsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBVcmwoKSk7XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gaXNPblByZW1pc2VzIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0lzT25QcmVtaXNlcycsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmlzT25QcmVtaXNlcygpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZScsICgpID0+IGdldFV0aWxpdHk/LmdldExlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ09yZ2FuaXphdGlvblNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3Qgb3JnYW5pemF0aW9uU2V0dGluZ3MgPSBnZXRHbG9iYWxDb250ZXh0Py5vcmdhbml6YXRpb25TZXR0aW5ncztcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gYXR0cmlidXRlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdBdHRyaWJ1dGVzJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdCYXNlQ3VycmVuY3knLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYmFzZUN1cnJlbmN5KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5SWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYmFzZUN1cnJlbmN5SWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEZWZhdWx0Q291bnRyeUNvZGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uZGVmYXVsdENvdW50cnlDb2RlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gZnVsbE5hbWVDb252ZW50aW9uQ29kZSBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdGdWxsTmFtZUNvbnZlbnRpb25Db2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmZ1bGxOYW1lQ29udmVudGlvbkNvZGUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0F1dG9TYXZlRW5hYmxlZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5pc0F1dG9TYXZlRW5hYmxlZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGlzVHJpYWxPcmdhbml6YXRpb24gbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNUcmlhbE9yZ2FuaXphdGlvbicsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5pc1RyaWFsT3JnYW5pemF0aW9uKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5sYW5ndWFnZUlkKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gb3JnYW5pemF0aW9uRXhwaXJ5RGF0ZSBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdPcmdhbml6YXRpb25FeHBpcnlEYXRlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lm9yZ2FuaXphdGlvbkV4cGlyeURhdGUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdPcmdhbml6YXRpb25JZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25JZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VuaXF1ZU5hbWUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8udW5pcXVlTmFtZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZVNreXBlUHJvdG9jb2wnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8udXNlU2t5cGVQcm90b2NvbCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdQYWdlQ29udGV4dCcsICgpID0+IGdldFV0aWxpdHk/LmdldFBhZ2VDb250ZXh0KCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdVc2VyU2V0dGluZ3MnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSBnZXRHbG9iYWxDb250ZXh0Py51c2VyU2V0dGluZ3M7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RhdGVGb3JtYXR0aW5nSW5mbycsICgpID0+IHVzZXJTZXR0aW5ncz8uZGF0ZUZvcm1hdHRpbmdJbmZvKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdERhc2hib2FyZElkJywgKCkgPT4gdXNlclNldHRpbmdzPy5kZWZhdWx0RGFzaGJvYXJkSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0d1aWRlZEhlbHBFbmFibGVkJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc0d1aWRlZEhlbHBFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNIaWdoQ29udHJhc3RFbmFibGVkJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc0hpZ2hDb250cmFzdEVuYWJsZWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc1JUTCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNSVEwpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYW5ndWFnZUlkJywgKCkgPT4gdXNlclNldHRpbmdzPy5sYW5ndWFnZUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUm9sZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU2VjdXJpdHlSb2xlUHJpdmlsZWdlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uc2VjdXJpdHlSb2xlUHJpdmlsZWdlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUaW1lWm9uZU9mZnNldE1pbnV0ZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmdldFRpbWVab25lT2Zmc2V0TWludXRlcygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVHJhbnNhY3Rpb25DdXJyZW5jeScsICgpID0+IHVzZXJTZXR0aW5ncz8udHJhbnNhY3Rpb25DdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3lJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udHJhbnNhY3Rpb25DdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlcklkJywgKCkgPT4gdXNlclNldHRpbmdzPy51c2VySWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VyTmFtZScsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlck5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVmVyc2lvbicsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldFZlcnNpb24oKSk7XHJcbiAgICB1dGlsaXR5LkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb246IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5hZGRHbG9iYWxOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkFkdmFuY2VkQ29uZmlnU2V0dGluZyA9IChzZXR0aW5nOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldEFkdmFuY2VkQ29uZmlnU2V0dGluZyhzZXR0aW5nIGFzIFwiTWF4Q2hpbGRJbmNpZGVudE51bWJlclwiIHwgXCJNYXhJbmNpZGVudE1lcmdlTnVtYmVyXCIpO1xyXG4gICAgdXRpbGl0eS5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoZW50aXR5TmFtZTogc3RyaW5nLCBzdGF0ZUNvZGU6IG51bWJlciwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0QWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zKGVudGl0eU5hbWUsIHN0YXRlQ29kZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5CYXJjb2RlVmFsdWUgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5nZXRCYXJjb2RlVmFsdWUoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVBdWRpbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVBdWRpbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZUltYWdlID0gZnVuY3Rpb24gKGltYWdlT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVJbWFnZShpbWFnZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZVZpZGVvID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZVZpZGVvKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbGVhckdsb2JhbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uICh1bmlxdWVJZDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRBcHA/LmNsZWFyR2xvYmFsTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPSAoKSA9PiBnZXRVdGlsaXR5Py5jbG9zZVByb2dyZXNzSW5kaWNhdG9yKCk7XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRBcHBOYW1lID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBOYW1lKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwUHJvcGVydGllcyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwUHJvcGVydGllcygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgdXRpbGl0eS5FbnRpdHlNYWluRm9ybURlc2NyaXB0b3IgPSAoZW50aXR5TmFtZTogc3RyaW5nLCBmb3JtSWQ6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yKGVudGl0eU5hbWUsIGZvcm1JZCk7XHJcbiAgICB1dGlsaXR5LkVudGl0eU1ldGFkYXRhID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IHN0cmluZ1tdLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5nZXRFbnRpdHlNZXRhZGF0YShlbnRpdHlOYW1lLCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lkh0bWxBdHRyaWJ1dGVFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkh0bWxEZWNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sRGVjb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkh0bWxFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkludm9rZVByb2Nlc3NBY3Rpb24gPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/Lmludm9rZVByb2Nlc3NBY3Rpb24obmFtZSwgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5Mb2FkUGFuZWwgPSAodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IGdldFBhbmVsPy5sb2FkUGFuZWwodXJsLCB0aXRsZSk7XHJcbiAgICB1dGlsaXR5Lkxvb2t1cE9iamVjdHMgPSBmdW5jdGlvbiAobG9va3VwT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5sb29rdXBPYmplY3RzKGxvb2t1cE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTmF2aWdhdGVUbyA9IGZ1bmN0aW9uIChwYWdlSW5wdXQ6IGFueSwgbmF2aWdhdGlvbk9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ubmF2aWdhdGVUbyhwYWdlSW5wdXQsIG5hdmlnYXRpb25PcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5BbGVydERpYWxvZyA9IGZ1bmN0aW9uIChhbGVydFN0cmluZ3M6IGFueSwgYWxlcnRPcHRpb25zOiBhbnksIGNsb3NlQ2FsbGJhY2s/OiAoKSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkFsZXJ0RGlhbG9nKGFsZXJ0U3RyaW5ncywgYWxlcnRPcHRpb25zKTtcclxuICAgICAgICBpZiAoY2xvc2VDYWxsYmFjaykgcHJvbWlzZT8udGhlbihjbG9zZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkNvbmZpcm1EaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlybVN0cmluZ3M6IGFueSwgY29uZmlybU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkNvbmZpcm1EaWFsb2coY29uZmlybVN0cmluZ3MsIGNvbmZpcm1PcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5FcnJvckRpYWxvZyA9IGZ1bmN0aW9uIChlcnJvck9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkVycm9yRGlhbG9nKGVycm9yT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRmlsZSA9IChmaWxlOiBhbnksIG9wZW5GaWxlT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlbkZpbGUoZmlsZSwgb3BlbkZpbGVPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbkZvcm0gPSBmdW5jdGlvbiAoZW50aXR5Rm9ybU9wdGlvbnM6IGFueSwgZm9ybVBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkZvcm0oZW50aXR5Rm9ybU9wdGlvbnMsIGZvcm1QYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5VcmwgPSAodXJsOiBzdHJpbmcsIG9wZW5VcmxPcHRpb25zPzogYW55KSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuVXJsKHVybCwgb3BlblVybE9wdGlvbnMpO1xyXG4gICAgdXRpbGl0eS5PcGVuV2ViUmVzb3VyY2UgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcsIHdpbmRvd09wdGlvbnM/OiBhbnksIGRhdGE/OiBzdHJpbmcpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5XZWJSZXNvdXJjZSh3ZWJSZXNvdXJjZU5hbWUsIHdpbmRvd09wdGlvbnMsIGRhdGEpO1xyXG4gICAgdXRpbGl0eS5QaWNrRmlsZSA9IGZ1bmN0aW9uIChwaWNrRmlsZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5waWNrRmlsZShwaWNrRmlsZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuUHJlcGVuZE9yZ05hbWUgPSAoc1BhdGg6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8ucHJlcGVuZE9yZ05hbWUoc1BhdGgpO1xyXG4gICAgdXRpbGl0eS5SZWZyZXNoUGFyZW50R3JpZCA9IChsb29rdXBPcHRpb25zOiBhbnkpID0+IGdldFV0aWxpdHk/LnJlZnJlc2hQYXJlbnRHcmlkKGxvb2t1cE9wdGlvbnMpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgbWF5IGJlIHVuZGVmaW5lZFxyXG4gICAgdXRpbGl0eS5SZXNvdXJjZSA9IChrZXk6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0UmVzb3VyY2VTdHJpbmcoZGVmYXVsdFdlYlJlc291cmNlTmFtZSEsIGtleSk7XHJcbiAgICB1dGlsaXR5LlJlc291cmNlU3RyaW5nID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0UmVzb3VyY2VTdHJpbmcod2ViUmVzb3VyY2VOYW1lLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IobWVzc2FnZSk7XHJcbiAgICB1dGlsaXR5LldlYlJlc291cmNlVXJsID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRXZWJSZXNvdXJjZVVybCh3ZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgdXRpbGl0eS5YbWxBdHRyaWJ1dGVFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy54bWxBdHRyaWJ1dGVFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuWG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sRW5jb2RlKGFyZyk7XHJcbiAgICByZXR1cm4gdXRpbGl0eTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQ6IGFueSwgZmllbGRzOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGZpZWxkc0xlbmd0aCA9IGZpZWxkcz8ubGVuZ3RoIHx8IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkc0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2ldO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChmaWVsZE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZE5hbWUpO1xyXG4gICAgICAgIGZvcm1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgZm9ybVtmaWVsZE5hbWVdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGZvcm1Db250ZXh0Py51aT8uY2xvc2UoKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmNvbnN0IEdsb2JhbE9wdGlvblNldFZhbHVlcyA9IHtcclxuICAgIEFkdmFuY2VkQ29uZmlnU2V0dGluZzogT2JqZWN0LmZyZWV6ZSh7IE1heENoaWxkSW5jaWRlbnROdW1iZXI6ICdNYXhDaGlsZEluY2lkZW50TnVtYmVyJywgTWF4SW5jaWRlbnRNZXJnZU51bWJlcjogJ01heEluY2lkZW50TWVyZ2VOdW1iZXInIH0pLFxyXG4gICAgQ2xpZW50TmFtZTogT2JqZWN0LmZyZWV6ZSh7IFdlYjogJ1dlYicsIE91dGxvb2s6ICdPdXRsb29rJywgTW9iaWxlOiAnTW9iaWxlJyB9KSxcclxuICAgIENsaWVudFN0YXRlOiBPYmplY3QuZnJlZXplKHsgT25saW5lOiAnT25saW5lJywgT2ZmbGluZTogJ09mZmxpbmUnIH0pLFxyXG4gICAgRmllbGRBdHRyaWJ1dGVUeXBlOiBPYmplY3QuZnJlZXplKHsgQm9vbGVhbjogJ2Jvb2xlYW4nLCBEYXRlVGltZTogJ2RhdGV0aW1lJywgRGVjaW1hbDogJ2RlY2ltYWwnLCBEb3VibGU6ICdkb3VibGUnLCBJbnRlZ2VyOiAnaW50ZWdlcicsIExvb2t1cDogJ2xvb2t1cCcsIE1lbW86ICdtZW1vJywgTW9uZXk6ICdtb25leScsIE11bHRpT3B0aW9uU2V0OiAnbXVsdGlvcHRpb25zZXQnLCBPcHRpb25TZXQ6ICdvcHRpb25zZXQnLCBTdHJpbmc6ICdzdHJpbmcnIH0pLFxyXG4gICAgRmllbGRDb250cm9sVHlwZTogT2JqZWN0LmZyZWV6ZSh7IFN0YW5kYXJkOiAnc3RhbmRhcmQnLCBJZnJhbWU6ICdpZnJhbWUnLCBLYlNlYXJjaDogJ2tic2VhcmNoJywgTG9va3VwOiAnbG9va3VwJywgTXVsdGlTZWxlY3RPcHRpb25zZXQ6ICdtdWx0aXNlbGVjdG9wdGlvbnNldCcsIE5vdGVzOiAnbm90ZXMnLCBPcHRpb25TZXQ6ICdvcHRpb25zZXQnLCBRdWlja0Zvcm06ICdxdWlja2Zvcm0nLCBTdWJHcmlkOiAnc3ViZ3JpZCcsIFRpbWVyQ29udHJvbDogJ3RpbWVyY29udHJvbCcsIFRpbWVsaW5lV2FsbDogJ3RpbWVsaW5ld2FsbCcsIFdlYlJlc291cmNlOiAnd2VicmVzb3VyY2UnIH0pLFxyXG4gICAgRmllbGRGb3JtYXQ6IE9iamVjdC5mcmVlemUoeyBEYXRlOiAnZGF0ZScsIERhdGVUaW1lOiAnZGF0ZXRpbWUnLCBEdXJhdGlvbjogJ2R1cmF0aW9uJywgRW1haWw6ICdlbWFpbCcsIExhbmd1YWdlOiAnbGFuZ3VhZ2UnLCBOb25lOiAnbm9uZScsIFRleHRBcmVhOiAndGV4dGFyZWEnLCBUZXh0OiAndGV4dCcsIFRpY2tlclN5bWJvbDogJ3RpY2tlcnN5bWJvbCcsIFBob25lOiAncGhvbmUnLCBUaW1lWm9uZTogJ3RpbWV6b25lJywgVXJsOiAndXJsJyB9KSxcclxuICAgIEZpZWxkTm90aWZpY2F0aW9uTGV2ZWw6IE9iamVjdC5mcmVlemUoeyBFcnJvcjogJ0VSUk9SJywgUmVjb21tZW5kYXRpb246ICdSRUNPTU1FTkRBVElPTicgfSksXHJcbiAgICBGaWVsZFJlcXVpcmVkTGV2ZWw6IE9iamVjdC5mcmVlemUoeyBOb25lOiAnbm9uZScsIFJlcXVpcmVkOiAncmVxdWlyZWQnLCBSZWNvbW1lbmRlZDogJ3JlY29tbWVuZGVkJyB9KSxcclxuICAgIEZpZWxkU3VibWl0TW9kZTogT2JqZWN0LmZyZWV6ZSh7IEFsd2F5czogJ2Fsd2F5cycsIE5ldmVyOiAnbmV2ZXInLCBEaXJ0eTogJ2RpcnR5JyB9KSxcclxuICAgIEZvcm1GYWN0b3I6IE9iamVjdC5mcmVlemUoeyBVbmtub3duOiAwLCBEZXNrdG9wOiAxLCBUYWJsZXQ6IDIsIFBob25lOiAzIH0pLFxyXG4gICAgRm9ybU5vdGlmaWNhdGlvbkxldmVsOiBPYmplY3QuZnJlZXplKHsgRXJyb3I6ICdFUlJPUicsIFdhcm5pbmc6ICdXQVJOSU5HJywgSW5mbzogJ0lORk8nIH0pLFxyXG4gICAgRm9ybVR5cGU6IE9iamVjdC5mcmVlemUoeyBVbmRlZmluZWQ6IDAsIENyZWF0ZTogMSwgVXBkYXRlOiAyLCBSZWFkT25seTogMywgRGlzYWJsZWQ6IDQsIEJ1bGtFZGl0OiA1IH0pLFxyXG4gICAgRnVsbE5hbWVDb252ZW50aW9uQ29kZTogT2JqZWN0LmZyZWV6ZSh7IExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZTogMCwgRmlyc3ROYW1lX0xhc3ROYW1lOiAxLCBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWVfTWlkZGxlSW5pdGlhbDogMiwgRmlyc3ROYW1lX01pZGRsZUluaXRpYWxfTGFzdE5hbWU6IDMsIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZV9NaWRkbGVOYW1lOiA0LCBGaXJzdE5hbWVfTWlkZGxlTmFtZV9MYXN0TmFtZTogNSwgTGFzdE5hbWVfRmlyc3ROYW1lOiA2LCBMYXN0TmFtZUZpcnN0TmFtZTogNyB9KSxcclxuICAgIEdyaWRUeXBlOiBPYmplY3QuZnJlZXplKHsgSG9tZVBhZ2VHcmlkOiAxLCBTdWJncmlkOiAyIH0pLFxyXG4gICAgT3BlbkZpbGVPcHRpb246IE9iamVjdC5mcmVlemUoeyBPcGVuOiAxLCBTYXZlOiAyIH0pLFxyXG4gICAgUHJvY2Vzc0NhdGVnb3J5OiBPYmplY3QuZnJlZXplKHsgUXVhbGlmeTogMCwgRGV2ZWxvcDogMSwgUHJvcG9zZTogMiwgQ2xvc2U6IDMsIElkZW50aWZ5OiA0LCBSZXNlYXJjaDogNSwgUmVzb2x2ZTogNiB9KSxcclxuICAgIFByb2Nlc3NEaXNwbGF5U3RhdGU6IE9iamVjdC5mcmVlemUoeyBFeHBhbmRlZDogJ2V4cGFuZGVkJywgQ29sbGFwc2VkOiAnY29sbGFwc2VkJywgRmxvYXRpbmc6ICdmbG9hdGluZycgfSksXHJcbiAgICBQcm9jZXNzU3RhdHVzOiBPYmplY3QuZnJlZXplKHsgQWN0aXZlOiAnYWN0aXZlJywgQWJvcnRlZDogJ2Fib3J0ZWQnLCBGaW5pc2hlZDogJ2ZpbmlzaGVkJyB9KSxcclxuICAgIFNhdmVNb2RlOiBPYmplY3QuZnJlZXplKHsgU2F2ZTogMSwgU2F2ZUFuZENsb3NlOiAyLCBEZWFjdGl2YXRlOiA1LCBSZWFjdGl2YXRlOiA2LCBFbWFpbDogNywgRGlzcXVhbGlmeTogMTUsIFF1YWxpZnk6IDE2LCBBc3NpZ246IDQ3LCBTYXZlQXNDb21wbGV0ZWQ6IDU4LCBTYXZlQW5kTmV3OiA1OSwgQXV0b1NhdmU6IDcwIH0pLFxyXG4gICAgU2F2ZU9wdGlvbjogT2JqZWN0LmZyZWV6ZSh7IFNhdmVBbmRDbG9zZTogJ3NhdmVhbmRjbG9zZScsIFNhdmVBbmROZXc6ICdzYXZlYW5kbmV3JyB9KSxcclxuICAgIFNpZGVQYW5lU3RhdGU6IE9iamVjdC5mcmVlemUoeyBDb2xsYXBzZWQ6IDAsIEV4cGFuZGVkOiAxIH0pLFxyXG4gICAgVGFiQ29udGVudFR5cGU6IE9iamVjdC5mcmVlemUoeyBDYXJkU2VjdGlvbnM6ICdjYXJkU2VjdGlvbnMnLCBTaW5nbGVDb21wb25lbnQ6ICdzaW5nbGVDb21wb25lbnQnIH0pLFxyXG4gICAgVGFiRGlzcGxheVN0YXRlOiBPYmplY3QuZnJlZXplKHsgRXhwYW5kZWQ6ICdleHBhbmRlZCcsIENvbGxhcHNlZDogJ2NvbGxhcHNlZCcgfSksXHJcbiAgICBUaW1lclN0YXRlOiBPYmplY3QuZnJlZXplKHsgTm90U2V0OiAxLCBJblByb2dyZXNzOiAyLCBXYXJuaW5nOiAzLCBWaW9sYXRlZDogNCwgU3VjY2VzczogNSwgRXhwaXJlZDogNiwgQ2FuY2VsZWQ6IDcsIFBhdXNlZDogOCB9KSxcclxufSBhcyBjb25zdDtcclxuKGdsb2JhbFRoaXMgYXMgYW55KS5PcHRpb25TZXQgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLk9wdGlvblNldCB8fCB7fTtcclxuT2JqZWN0LmFzc2lnbigoZ2xvYmFsVGhpcyBhcyBhbnkpLk9wdGlvblNldCwgR2xvYmFsT3B0aW9uU2V0VmFsdWVzKTtcclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgbmFtZXNwYWNlIE9wdGlvblNldCB7XHJcbiAgICAgICAgY29uc3QgQWR2YW5jZWRDb25maWdTZXR0aW5nOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkFkdmFuY2VkQ29uZmlnU2V0dGluZztcclxuICAgICAgICBjb25zdCBDbGllbnROYW1lOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkNsaWVudE5hbWU7XHJcbiAgICAgICAgY29uc3QgQ2xpZW50U3RhdGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuQ2xpZW50U3RhdGU7XHJcbiAgICAgICAgY29uc3QgRmllbGRBdHRyaWJ1dGVUeXBlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZpZWxkQXR0cmlidXRlVHlwZTtcclxuICAgICAgICBjb25zdCBGaWVsZENvbnRyb2xUeXBlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZpZWxkQ29udHJvbFR5cGU7XHJcbiAgICAgICAgY29uc3QgRmllbGRGb3JtYXQ6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuRmllbGRGb3JtYXQ7XHJcbiAgICAgICAgY29uc3QgRmllbGROb3RpZmljYXRpb25MZXZlbDogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GaWVsZE5vdGlmaWNhdGlvbkxldmVsO1xyXG4gICAgICAgIGNvbnN0IEZpZWxkUmVxdWlyZWRMZXZlbDogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5GaWVsZFJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29uc3QgRmllbGRTdWJtaXRNb2RlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZpZWxkU3VibWl0TW9kZTtcclxuICAgICAgICBjb25zdCBGb3JtRmFjdG9yOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZvcm1GYWN0b3I7XHJcbiAgICAgICAgY29uc3QgRm9ybU5vdGlmaWNhdGlvbkxldmVsOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZvcm1Ob3RpZmljYXRpb25MZXZlbDtcclxuICAgICAgICBjb25zdCBGb3JtVHlwZTogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5Gb3JtVHlwZTtcclxuICAgICAgICBjb25zdCBGdWxsTmFtZUNvbnZlbnRpb25Db2RlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLkZ1bGxOYW1lQ29udmVudGlvbkNvZGU7XHJcbiAgICAgICAgY29uc3QgR3JpZFR5cGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuR3JpZFR5cGU7XHJcbiAgICAgICAgY29uc3QgT3BlbkZpbGVPcHRpb246IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuT3BlbkZpbGVPcHRpb247XHJcbiAgICAgICAgY29uc3QgUHJvY2Vzc0NhdGVnb3J5OiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlByb2Nlc3NDYXRlZ29yeTtcclxuICAgICAgICBjb25zdCBQcm9jZXNzRGlzcGxheVN0YXRlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlByb2Nlc3NEaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgY29uc3QgUHJvY2Vzc1N0YXR1czogdHlwZW9mIEdsb2JhbE9wdGlvblNldFZhbHVlcy5Qcm9jZXNzU3RhdHVzO1xyXG4gICAgICAgIGNvbnN0IFNhdmVNb2RlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlNhdmVNb2RlO1xyXG4gICAgICAgIGNvbnN0IFNhdmVPcHRpb246IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuU2F2ZU9wdGlvbjtcclxuICAgICAgICBjb25zdCBTaWRlUGFuZVN0YXRlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlNpZGVQYW5lU3RhdGU7XHJcbiAgICAgICAgY29uc3QgVGFiQ29udGVudFR5cGU6IHR5cGVvZiBHbG9iYWxPcHRpb25TZXRWYWx1ZXMuVGFiQ29udGVudFR5cGU7XHJcbiAgICAgICAgY29uc3QgVGFiRGlzcGxheVN0YXRlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlRhYkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICBjb25zdCBUaW1lclN0YXRlOiB0eXBlb2YgR2xvYmFsT3B0aW9uU2V0VmFsdWVzLlRpbWVyU3RhdGU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgR2xvYmFsT3B0aW9uU2V0VmFsdWVzIGFzIE9wdGlvblNldCB9OyIsICIvKipcclxuICogQWNjb3VudCBGb3JtIC0gVHlwZVNjcmlwdCBJbXBsZW1lbnRhdGlvblxyXG4gKiBAZGVzY3JpcHRpb24gQWNjb3VudEZvcm0gd2l0aCBzaGFyZWQgT3B0aW9uU2V0c1xyXG4gKiBVc2VzIG5hbWVzcGFjZSBwYXR0ZXJuIGZvciBiZXR0ZXIgb3JnYW5pemF0aW9uIGFuZCBtYWludGFpbmFiaWxpdHlcclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL2RldmtpdC5kLnRzXCIgLz5cclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi8uLi9saWIvZGV2a2l0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTkFNRVNQQUNFOiBBY2NvdW50Rm9ybSAtIE1haW4gQWNjb3VudCBGb3JtXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IG5hbWVzcGFjZSBBY2NvdW50Rm9ybSB7XHJcbiAgICAvLyBCb2R5IEludGVyZmFjZSAtIEFMTCBEZXZLaXQgY29udHJvbCB0eXBlc1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQm9keSB7XHJcbiAgICAgICAgLy8gPT09PT09PT09PSBTdGFuZGFyZCBGaWVsZCBDb250cm9scyA9PT09PT09PT09XHJcbiAgICAgICAgLyoqIFN0cmluZzogQWNjb3VudCBOYW1lICovXHJcbiAgICAgICAgTmFtZTogRGV2S2l0LkNvbnRyb2xzLlN0cmluZztcclxuICAgICAgICAvKiogTWVtbzogRGVzY3JpcHRpb24gKi9cclxuICAgICAgICBEZXNjcmlwdGlvbjogRGV2S2l0LkNvbnRyb2xzLk1lbW87XHJcbiAgICAgICAgLyoqIEludGVnZXI6IE51bWJlciBvZiBFbXBsb3llZXMgKi9cclxuICAgICAgICBOdW1iZXJPZkVtcGxveWVlczogRGV2S2l0LkNvbnRyb2xzLkludGVnZXI7XHJcbiAgICAgICAgLyoqIE1vbmV5OiBBbm51YWwgUmV2ZW51ZSAqL1xyXG4gICAgICAgIFJldmVudWU6IERldktpdC5Db250cm9scy5Nb25leTtcclxuICAgICAgICAvKiogQm9vbGVhbjogQ3JlZGl0IE9uIEhvbGQgKi9cclxuICAgICAgICBDcmVkaXRPbkhvbGQ6IERldktpdC5Db250cm9scy5Cb29sZWFuO1xyXG4gICAgICAgIC8qKiBPcHRpb25TZXQ6IEluZHVzdHJ5IENvZGUgKi9cclxuICAgICAgICBJbmR1c3RyeUNvZGU6IERldktpdC5Db250cm9scy5PcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIExvb2t1cDogUHJpbWFyeSBDb250YWN0ICovXHJcbiAgICAgICAgUHJpbWFyeUNvbnRhY3RJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PSBDdXN0b20gdjRfIEZpZWxkIENvbnRyb2xzID09PT09PT09PT1cclxuICAgICAgICAvKiogRGF0ZSAoRGF0ZU9ubHkpOiBDdXN0b20gQmlydGhkYXkgZmllbGQgKi9cclxuICAgICAgICB2NF9CaXJ0aGRheTogRGV2S2l0LkNvbnRyb2xzLkRhdGVPbmx5O1xyXG4gICAgICAgIC8qKiBEYXRlVGltZTogQ3VzdG9tIEFwcG9pbnRtZW50IFRpbWUgZmllbGQgKi9cclxuICAgICAgICB2NF9BcHBvaW50bWVudFRpbWU6IERldktpdC5Db250cm9scy5EYXRlVGltZTtcclxuICAgICAgICAvKiogRGVjaW1hbDogQ3VzdG9tIExhdGl0dWRlIGZpZWxkICovXHJcbiAgICAgICAgdjRfTGF0aXR1ZGU6IERldktpdC5Db250cm9scy5EZWNpbWFsO1xyXG4gICAgICAgIC8qKiBEb3VibGU6IEN1c3RvbSBEaXNjb3VudCBQZXJjZW50YWdlIGZpZWxkICovXHJcbiAgICAgICAgdjRfRGlzY291bnRQZXJjZW50YWdlOiBEZXZLaXQuQ29udHJvbHMuRG91YmxlO1xyXG4gICAgICAgIC8qKiBNdWx0aU9wdGlvblNldDogQ3VzdG9tIENhdGVnb3JpZXMgZmllbGQgKi9cclxuICAgICAgICB2NF9DYXRlZ29yaWVzOiBEZXZLaXQuQ29udHJvbHMuTXVsdGlPcHRpb25TZXQ7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT0gU3BlY2lhbHR5IENvbnRyb2xzID09PT09PT09PT1cclxuICAgICAgICAvKiogV2ViUmVzb3VyY2U6IEN1c3RvbSBIZWxwIFdlYiBSZXNvdXJjZSAqL1xyXG4gICAgICAgIHY0X1dlYlJlc291cmNlSGVscDogRGV2S2l0LkNvbnRyb2xzLldlYlJlc291cmNlO1xyXG4gICAgICAgIC8qKiBJRnJhbWU6IEN1c3RvbSBFeHRlcm5hbCBQYWdlICovXHJcbiAgICAgICAgdjRfSUZyYW1lRXh0ZXJuYWw6IERldktpdC5Db250cm9scy5JRnJhbWU7XHJcbiAgICAgICAgLyoqIFRpbWVyOiBDdXN0b20gU0xBIFRpbWVyICovXHJcbiAgICAgICAgdjRfVGltZXJTTEE6IERldktpdC5Db250cm9scy5UaW1lcjtcclxuICAgICAgICAvKiogS25vd2xlZGdlOiBLbm93bGVkZ2UgQmFzZSBTZWFyY2ggKi9cclxuICAgICAgICB2NF9Lbm93bGVkZ2VTZWFyY2g6IERldktpdC5Db250cm9scy5Lbm93bGVkZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGVhZGVyIEludGVyZmFjZVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyIHtcclxuICAgICAgICAvKiogTG9va3VwOiBPd25lciAqL1xyXG4gICAgICAgIE93bmVySWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICAgICAgLyoqIEludGVnZXI6IE51bWJlciBvZiBFbXBsb3llZXMgKi9cclxuICAgICAgICBOdW1iZXJPZkVtcGxveWVlczogRGV2S2l0LkNvbnRyb2xzLkludGVnZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGFiIGFuZCBTZWN0aW9uIEludGVyZmFjZXNcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSURldGFpbHNUYWJTZWN0aW9ucyB7XHJcbiAgICAgICAgQklMTElORzogRGV2S2l0LkNvbnRyb2xzLlNlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJRGV0YWlsc1RhYiBleHRlbmRzIERldktpdC5Db250cm9scy5JVGFiIHtcclxuICAgICAgICBTZWN0aW9uOiBJRGV0YWlsc1RhYlNlY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRhYnMge1xyXG4gICAgICAgIERFVEFJTFNfVEFCOiBJRGV0YWlsc1RhYjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHcmlkIEludGVyZmFjZVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJR3JpZCB7XHJcbiAgICAgICAgQ29udGFjdHM6IERldktpdC5Db250cm9scy5HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5hdmlnYXRpb24gSW50ZXJmYWNlXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElOYXZpZ2F0aW9uIHtcclxuICAgICAgICBBY2NvdW50X1Rhc2tzOiBEZXZLaXQuQ29udHJvbHMuTmF2aWdhdGlvbkl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUXVpY2tGb3JtIEludGVyZmFjZVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVpY2tGb3JtIHtcclxuICAgICAgICBjb250YWN0cXVpY2tmb3JtOiBEZXZLaXQuQ29udHJvbHMuSVF1aWNrVmlldyAmIHtcclxuICAgICAgICAgICAgQm9keToge1xyXG4gICAgICAgICAgICAgICAgRU1haWxBZGRyZXNzMTogRGV2S2l0LkNvbnRyb2xzLlF1aWNrVmlldztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1c2luZXNzIFByb2Nlc3MgRmxvdyBJbnRlcmZhY2VcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJQRiB7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogQWNjb3VudCBOYW1lIChTdGFnZSAxOiBRdWFsaWZ5KSAqL1xyXG4gICAgICAgIE5hbWU6IERldktpdC5Db250cm9scy5TdHJpbmc7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogSW5kdXN0cnkgQ29kZSAoU3RhZ2UgMTogUXVhbGlmeSkgKi9cclxuICAgICAgICBJbmR1c3RyeUNvZGU6IERldktpdC5Db250cm9scy5PcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogUmV2ZW51ZSAoU3RhZ2UgMjogRGV2ZWxvcCkgKi9cclxuICAgICAgICBSZXZlbnVlOiBEZXZLaXQuQ29udHJvbHMuTW9uZXk7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogUHJpbWFyeSBDb250YWN0IChTdGFnZSAyOiBEZXZlbG9wKSAqL1xyXG4gICAgICAgIFByaW1hcnlDb250YWN0SWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvY2VzcyBJbnRlcmZhY2VcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVByb2Nlc3MgZXh0ZW5kcyBEZXZLaXQuQ29udHJvbHMuSVByb2Nlc3Mge1xyXG4gICAgICAgIC8qKiB2NF9BY2NvdW50QlBGIC0gQ3VzdG9tIEFjY291bnQgQnVzaW5lc3MgUHJvY2VzcyBGbG93ICovXHJcbiAgICAgICAgdjRfQWNjb3VudEJQRjogSUJQRjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3JtIENsYXNzXHJcbiAgICBleHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIEZvcm1CYXNlPElCb2R5LCBJSGVhZGVyLCBJVGFicywgSUdyaWQsIElOYXZpZ2F0aW9uLCBJUXVpY2tGb3JtLCBJUHJvY2Vzcz4ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihleGVjdXRpb25Db250ZXh0LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOYW1lXCIsIFwiRGVzY3JpcHRpb25cIiwgXCJOdW1iZXJPZkVtcGxveWVlc1wiLCBcIlJldmVudWVcIiwgXCJDcmVkaXRPbkhvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkluZHVzdHJ5Q29kZVwiLCBcIlByaW1hcnlDb250YWN0SWRcIiwgXCJ2NF9CaXJ0aGRheVwiLCBcInY0X0FwcG9pbnRtZW50VGltZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwidjRfTGF0aXR1ZGVcIiwgXCJ2NF9EaXNjb3VudFBlcmNlbnRhZ2VcIiwgXCJ2NF9DYXRlZ29yaWVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2NF9XZWJSZXNvdXJjZUhlbHBcIiwgXCJ2NF9JRnJhbWVFeHRlcm5hbFwiLCBcInY0X1RpbWVyU0xBXCIsIFwidjRfS25vd2xlZGdlU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFtcIk93bmVySWRcIiwgXCJOdW1iZXJPZkVtcGxveWVlc1wiXSxcclxuICAgICAgICAgICAgICAgIHRhYjogW1wiREVUQUlMU19UQUJfX19CSUxMSU5HXCJdLFxyXG4gICAgICAgICAgICAgICAgZ3JpZDogW1wiQ29udGFjdHNcIl0sXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiBbXCJBY2NvdW50X1Rhc2tzXCJdLFxyXG4gICAgICAgICAgICAgICAgcXVpY2s6IFtcImNvbnRhY3RxdWlja2Zvcm1fX19FTWFpbEFkZHJlc3MxXCJdLFxyXG4gICAgICAgICAgICAgICAgYnBmOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2NF9BY2NvdW50QlBGX19fTmFtZVwiLCBcInY0X0FjY291bnRCUEZfX19JbmR1c3RyeUNvZGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInY0X0FjY291bnRCUEZfX19SZXZlbnVlXCIsIFwidjRfQWNjb3VudEJQRl9fX1ByaW1hcnlDb250YWN0SWRcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTkFNRVNQQUNFOiBBY2NvdW50Lk9wdGlvblNldCAtIFNoYXJlZCBPcHRpb25TZXRzIGZvciBBY2NvdW50IEZvcm1zXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IG5hbWVzcGFjZSBBY2NvdW50IHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgT3B0aW9uU2V0IHtcclxuICAgICAgICAvKiogSW5kdXN0cnkgQ29kZSBPcHRpb25TZXQgKi9cclxuICAgICAgICBleHBvcnQgY29uc3QgSW5kdXN0cnlDb2RlID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIEFjY291bnRpbmc6IDEsXHJcbiAgICAgICAgICAgIENvbnN1bHRpbmc6IDcsXHJcbiAgICAgICAgICAgIEZpbmFuY2lhbDogMTYsXHJcbiAgICAgICAgICAgIEluc3VyYW5jZTogMjAsXHJcbiAgICAgICAgICAgIFRlY2hub2xvZ3k6IDEyXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qKiBDdXN0b20gTXVsdGlPcHRpb25TZXQgLSB2NF9DYXRlZ29yaWVzICovXHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHY0X0NhdGVnb3JpZXMgPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnlfQTogMTAwMDAwMDAwLFxyXG4gICAgICAgICAgICBDYXRlZ29yeV9COiAxMDAwMDAwMDEsXHJcbiAgICAgICAgICAgIENhdGVnb3J5X0M6IDEwMDAwMDAwMixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlfRDogMTAwMDAwMDAzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFBvcHVsYXRlIGdsb2JhbCBPcHRpb25TZXQuQWNjb3VudCBhdCBydW50aW1lIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbihnbG9iYWxUaGlzIGFzIGFueSkuT3B0aW9uU2V0ID0gKGdsb2JhbFRoaXMgYXMgYW55KS5PcHRpb25TZXQgfHwge307XHJcbihnbG9iYWxUaGlzIGFzIGFueSkuT3B0aW9uU2V0LkFjY291bnQgPSBBY2NvdW50Lk9wdGlvblNldDtcclxuXHJcbi8vIERlY2xhcmUgZ2xvYmFsIG5hbWVzcGFjZSBleHRlbnNpb24gZm9yIFR5cGVTY3JpcHQgSW50ZWxsaVNlbnNlXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIG5hbWVzcGFjZSBPcHRpb25TZXQge1xyXG4gICAgICAgIG5hbWVzcGFjZSBBY2NvdW50IHtcclxuICAgICAgICAgICAgY29uc3QgSW5kdXN0cnlDb2RlOiB7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBBY2NvdW50aW5nOiAxO1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgQ29uc3VsdGluZzogNztcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IEZpbmFuY2lhbDogMTY7XHJcbiAgICAgICAgICAgICAgICByZWFkb25seSBJbnN1cmFuY2U6IDIwO1xyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHkgVGVjaG5vbG9neTogMTI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHY0X0NhdGVnb3JpZXM6IHtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IENhdGVnb3J5X0E6IDEwMDAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IENhdGVnb3J5X0I6IDEwMDAwMDAwMTtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IENhdGVnb3J5X0M6IDEwMDAwMDAwMjtcclxuICAgICAgICAgICAgICAgIHJlYWRvbmx5IENhdGVnb3J5X0Q6IDEwMDAwMDAwMztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgLSBOYW1lIEZpZWxkIChTdHJpbmcpXHJcbiAqIFRoaXMgdGVzdHMgdGhlIGJhc2UgSUNvbnRyb2wgaW50ZXJmYWNlIHRoYXQgYWxsIGNvbnRyb2xzIGluaGVyaXQgZnJvbVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdENvbnRyb2woZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBjb250cm9sID0gZm9ybS5Cb2R5Lk5hbWU7IC8vIFN0cmluZyBjb250cm9sIGluaGVyaXRzIGZyb20gSUNvbnRyb2xcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gY29udHJvbC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUFJPUEVSVElFUyAocmVhZG9ubHkpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlAxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlAyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlTmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZU5hbWUgPT09IFwibmFtZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJQM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZVR5cGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGVUeXBlID09PSBcInN0cmluZ1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJQNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogY29udHJvbC5Db250cm9sTmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUDVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGNvbnRyb2wuQ29udHJvbFR5cGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlA2XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkZvcm1hdFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogY29udHJvbC5Gb3JtYXQsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlA3XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIklzRGlydHlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGNvbnRyb2wuSXNEaXJ0eSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUDhcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiSXNWYWxpZFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogY29udHJvbC5Jc1ZhbGlkLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcGVydGllcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBQUk9QRVJUSUVTIChnZXR0ZXIvc2V0dGVyKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNldHRlclJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUmVxdWlyZWRMZXZlbFxyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGNvbnRyb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb250cm9sLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgbmV3UmVxdWlyZWQgPSBjb250cm9sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29udHJvbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYCR7b3JpZ1JlcXVpcmVkfVx1MjE5MnJlcXVpcmVkXHUyMTkycmVzdG9yZWRgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IG5ld1JlcXVpcmVkID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFN1Ym1pdE1vZGVcclxuICAgICAgICBjb25zdCBvcmlnU3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IFwiYWx3YXlzXCI7XHJcbiAgICAgICAgY29uc3QgbmV3U3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IG9yaWdTdWJtaXQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgJHtvcmlnU3VibWl0fVx1MjE5MmFsd2F5c1x1MjE5MnJlc3RvcmVkYCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdTdWJtaXQgPT09IFwiYWx3YXlzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERpc2FibGVkXHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gY29udHJvbC5EaXNhYmxlZDtcclxuICAgICAgICBjb250cm9sLkRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBuZXdEaXNhYmxlZCA9IGNvbnRyb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgY29udHJvbC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgJHtvcmlnRGlzYWJsZWR9XHUyMTkydHJ1ZVx1MjE5MnJlc3RvcmVkYCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdEaXNhYmxlZCA9PT0gdHJ1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIExhYmVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gY29udHJvbC5MYWJlbDtcclxuICAgICAgICBjb250cm9sLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3TGFiZWwgPSBjb250cm9sLkxhYmVsO1xyXG4gICAgICAgIGNvbnRyb2wuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJMYWJlbFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYFwiJHtvcmlnTGFiZWx9XCJcdTIxOTJtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdMYWJlbC5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFZpc2libGVcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGNvbnRyb2wuVmlzaWJsZTtcclxuICAgICAgICBjb250cm9sLlZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBuZXdWaXNpYmxlID0gY29udHJvbC5WaXNpYmxlO1xyXG4gICAgICAgIGNvbnRyb2wuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiVmlzaWJsZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYCR7b3JpZ1Zpc2libGV9XHUyMTkyZmFsc2VcdTIxOTJyZXN0b3JlZGAsXHJcbiAgICAgICAgICAgIFN0YXR1czogbmV3VmlzaWJsZSA9PT0gZmFsc2UgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFZhbHVlXHJcbiAgICAgICAgY29udHJvbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWUgKyBcIiAoTU9ESUZJRUQpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb250cm9sLlZhbHVlO1xyXG4gICAgICAgIGNvbnRyb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiVmFsdWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCIoTU9ESUZJRUQpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNRVRIT0RTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgLy8gT25DaGFuZ2UgaGFuZGxlcnNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT25DaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNMVwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTFcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk0yXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25PdXRwdXRDaGFuZ2UgaGFuZGxlcnMgKGZvciBtb2Rlcm4gY29udHJvbHMpXHJcbiAgICBjb25zdCBvdXRwdXRDaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPdXRwdXRDaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkT25PdXRwdXRDaGFuZ2Uob3V0cHV0Q2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTNcIiwgUHJvcGVydHk6IFwiQWRkT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk0zXCIsIFByb3BlcnR5OiBcIkFkZE9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuUmVtb3ZlT25PdXRwdXRDaGFuZ2Uob3V0cHV0Q2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk00XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaXJlT25DaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk01XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk01XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTZcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNNlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTm90aWZpY2F0aW9uc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlNldE5vdGlmaWNhdGlvbihcIlRlc3Qgbm90aWZpY2F0aW9uIGZyb20gSUNvbnRyb2xcIiwgXCJDVFJMX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJDVFJMX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNN1wiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTdcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNsZWFyZWQgPSBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiTk9ORVhJU1RFTlRcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNOFwiLCBQcm9wZXJ0eTogXCJDbGVhck5vdGlmaWNhdGlvblwiLCBWYWx1ZTogYFJlc3VsdDogJHtjbGVhcmVkfWAsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTThcIiwgUHJvcGVydHk6IFwiQ2xlYXJOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZE5vdGlmaWNhdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXCJSZWNvbW1lbmRhdGlvbiBmcm9tIHRlc3RcIl0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkxldmVsOiBcIlJFQ09NTUVOREFUSU9OXCIsXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBcIkNUUkxfVEVTVF8yXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJDVFJMX1RFU1RfMlwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNOVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiQWRkZWQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNOVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldElzVmFsaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZCBtZXNzYWdlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk0xMFwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNMTBcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnNvbGUuZ3JvdXAoYFx1RDgzQ1x1REY5Qlx1RkUwRiBURVNUIDA6IElDb250cm9sIEludGVyZmFjZSBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOYW1lIGZpZWxkYCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBQcm9wZXJ0aWVzIChyZWFkb25seSkgLSA4IGl0ZW1zXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVERDA0IFByb3BlcnRpZXMgKGdldHRlci9zZXR0ZXIpIC0gNiBpdGVtc1wiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjRkY5ODAwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUoc2V0dGVyUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBNZXRob2RzIC0gMTAgaXRlbXNcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIC8vIFN1bW1hcnlcclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4uc2V0dGVyUmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUOiBMb29rdXAgQ29udHJvbCAtIFByaW1hcnlDb250YWN0SWQgRmllbGRcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RMb29rdXAoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBsb29rdXAgPSBmb3JtLkJvZHkuUHJpbWFyeUNvbnRhY3RJZDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbERlZmF1bHRWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3OyAvLyBTdG9yZSBmb3IgbGF0ZXIgdXNlIGluIHNldHRlciB0ZXN0c1xyXG5cclxuICAgIC8vIENvbGxlY3QgYWxsIHRlc3QgcmVzdWx0c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBUZXN0IDE6IFZhbHVlXHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gbG9va3VwLlZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJWYWx1ZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogaGFzVmFsdWUgPyBgJHtjdXJyZW50VmFsdWVbMF0ubmFtZX0gKCR7Y3VycmVudFZhbHVlWzBdLmVudGl0eVR5cGV9KWAgOiBcIihlbXB0eSlcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRlc3QgMjogSXNQYXJ0eUxpc3RcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIjJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiSXNQYXJ0eUxpc3RcIixcclxuICAgICAgICAgICAgVmFsdWU6IGxvb2t1cC5Jc1BhcnR5TGlzdCxcclxuICAgICAgICAgICAgU3RhdHVzOiBsb29rdXAuSXNQYXJ0eUxpc3QgPT09IGZhbHNlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCAzOiBFbnRpdHlUeXBlc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlc1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogSlNPTi5zdHJpbmdpZnkobG9va3VwLkVudGl0eVR5cGVzKSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRlc3QgNDogRGVmYXVsdFZpZXcgKGdldHRlcilcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIjRcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXdcIixcclxuICAgICAgICAgICAgVmFsdWU6IG9yaWdpbmFsRGVmYXVsdFZpZXcsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUZXN0IDU6IFZpc2libGVcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIjVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiVmlzaWJsZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLlZpc2libGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUZXN0IDY6IERpc2FibGVkXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI2XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuRGlzYWJsZWQsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUZXN0IDc6IENvbnRyb2xUeXBlXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI3XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuQ29udHJvbFR5cGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogbG9va3VwLkNvbnRyb2xUeXBlID09PSBcImxvb2t1cFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGVzdCA4OiBDb250cm9sTmFtZSAmIEF0dHJpYnV0ZU5hbWVcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIjhhXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuQ29udHJvbE5hbWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOGJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZU5hbWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUZXN0IDk6IEF0dHJpYnV0ZSBQcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI5YVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlVHlwZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI5YlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuUmVxdWlyZWRMZXZlbCxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI5Y1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuU3VibWl0TW9kZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI5ZFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuSXNWYWxpZCxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI5ZVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuSXNEaXJ0eSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCI5ZlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJGb3JtYXRcIixcclxuICAgICAgICAgICAgVmFsdWU6IGxvb2t1cC5Gb3JtYXQsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiOWdcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGxvb2t1cC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIkVSUlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFcnJvclwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCAxMC0xNzogTWV0aG9kcyAodGhlc2UgaGF2ZSBzaWRlIGVmZmVjdHMsIGxvZyBzZXBhcmF0ZWx5KVxyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgLy8gU3RvcmUgY2FsbGJhY2sgcmVmZXJlbmNlcyBmb3IgcmVtb3ZhbCB0ZXN0c1xyXG4gICAgY29uc3QgcHJlU2VhcmNoQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJYbWwgPSBcIjxmaWx0ZXIgdHlwZT0nYW5kJz48Y29uZGl0aW9uIGF0dHJpYnV0ZT0nc3RhdGVjb2RlJyBvcGVyYXRvcj0nZXEnIHZhbHVlPScwJyAvPjwvZmlsdGVyPlwiO1xyXG4gICAgICAgIGxvb2t1cC5BZGRDdXN0b21GaWx0ZXIoZmlsdGVyWG1sLCBcImNvbnRhY3RcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBQcmVTZWFyY2ggZmlyZWQgLSBmaWx0ZXIgYXBwbGllZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFnQ2xpY2tDYWxsYmFjayA9IChjdHg6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTG9va3VwVGFnQ2xpY2sgZmlyZWQgLSB0YWcgd2FzIGNsaWNrZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRlc3QgMTA6IEFkZFByZVNlYXJjaFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkUHJlU2VhcmNoKHByZVNlYXJjaENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjEwXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTBcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IDExOiBSZW1vdmVQcmVTZWFyY2hcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlJlbW92ZVByZVNlYXJjaChwcmVTZWFyY2hDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCIxMVwiLCBQcm9wZXJ0eTogXCJSZW1vdmVQcmVTZWFyY2hcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjExXCIsIFByb3BlcnR5OiBcIlJlbW92ZVByZVNlYXJjaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCAxMjogQWRkTG9va3VwVGFnQ2xpY2tcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZExvb2t1cFRhZ0NsaWNrKHRhZ0NsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTJcIiwgUHJvcGVydHk6IFwiQWRkTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjEyXCIsIFByb3BlcnR5OiBcIkFkZExvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IDEzOiBSZW1vdmVMb29rdXBUYWdDbGlja1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuUmVtb3ZlTG9va3VwVGFnQ2xpY2sodGFnQ2xpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCIxM1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTNcIiwgUHJvcGVydHk6IFwiUmVtb3ZlTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlc3QgMTQ6IEFkZEN1c3RvbVZpZXdcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZEN1c3RvbVZpZXcoXHJcbiAgICAgICAgICAgIFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiLFxyXG4gICAgICAgICAgICBcIkFjdGl2ZSBDb250YWN0cyAoQ3VzdG9tIFZpZXcpXCIsXHJcbiAgICAgICAgICAgIFwiPGZldGNoPjxlbnRpdHkgbmFtZT0nY29udGFjdCc+PGF0dHJpYnV0ZSBuYW1lPSdmdWxsbmFtZScvPjwvZW50aXR5PjwvZmV0Y2g+XCIsXHJcbiAgICAgICAgICAgIFwiPGdyaWQgbmFtZT0ncmVzdWx0c2V0Jz48cm93IG5hbWU9J3Jlc3VsdCcgaWQ9J2NvbnRhY3RpZCc+PGNlbGwgbmFtZT0nZnVsbG5hbWUnIHdpZHRoPScyMDAnLz48L3Jvdz48L2dyaWQ+XCIsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE0XCIsIFByb3BlcnR5OiBcIkFkZEN1c3RvbVZpZXdcIiwgVmFsdWU6IFwiQWRkZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCIxNFwiLCBQcm9wZXJ0eTogXCJBZGRDdXN0b21WaWV3XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IDE1OiBTZXROb3RpZmljYXRpb24gLyBDbGVhck5vdGlmaWNhdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb25cIiwgXCJURVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuQ2xlYXJOb3RpZmljYXRpb24oXCJURVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiMTVcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIGluIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE1XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCAxNjogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuRm9jdXMoKSwgNDAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCIxNlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDRzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE2XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IDE3OiBEZWZhdWx0VmlldyAoc2V0dGVyKSAtIHRlc3Qgc2V0IGFuZCByZXN0b3JlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWaWV3SWQgPSBcInswMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDJ9XCI7XHJcbiAgICAgICAgbG9va3VwLkRlZmF1bHRWaWV3ID0gdGVzdFZpZXdJZDtcclxuICAgICAgICBjb25zdCBuZXdWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3O1xyXG4gICAgICAgIGxvb2t1cC5EZWZhdWx0VmlldyA9IG9yaWdpbmFsRGVmYXVsdFZpZXc7IC8vIHJlc3RvcmVcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE3XCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBgU2V0XHUyMTkyUmVzdG9yZWRgLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE3XCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IDE4OiBFbnRpdHlUeXBlcyAoc2V0dGVyKSAtIHRlc3Qgc2V0IGFuZCByZXN0b3JlICBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUeXBlcyA9IGxvb2t1cC5FbnRpdHlUeXBlcztcclxuICAgICAgICBsb29rdXAuRW50aXR5VHlwZXMgPSBbXCJjb250YWN0XCJdO1xyXG4gICAgICAgIGNvbnN0IG5ld1R5cGVzID0gbG9va3VwLkVudGl0eVR5cGVzO1xyXG4gICAgICAgIGxvb2t1cC5FbnRpdHlUeXBlcyA9IG9yaWdpbmFsVHlwZXM7IC8vIHJlc3RvcmVcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE4XCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzIChzZXQpXCIsIFZhbHVlOiBgU2V0XHUyMTkyUmVzdG9yZWRgLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIjE4XCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT0gT1VUUFVUOiBTaW5nbGUgZ3JvdXBlZCBsb2cgPT09XHJcbiAgICBjb25zb2xlLmdyb3VwKGBcdUQ4M0RcdUREMEQgTE9PS1VQIFRFU1Q6IFByaW1hcnlDb250YWN0SWQgWyR7c3RhcnRUaW1lfV1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFByb3BlcnRpZXMgKDE2IGl0ZW1zKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBNZXRob2RzICg5IGl0ZW1zKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgLy8gU3VtbWFyeVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMzogTWVtbyBDb250cm9sIC0gRGVzY3JpcHRpb24gRmllbGRcclxuICogTWVtbyBleHRlbmRzIElDb250cm9sIHdpdGggTWF4TGVuZ3RoIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TWVtbyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWVtbyA9IGZvcm0uQm9keS5EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbWVtby5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTUVNTy1TUEVDSUZJQyBQUk9QRVJUSUVTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNYXhMZW5ndGggKE1lbW8tc3BlY2lmaWMsIHJlYWRvbmx5KVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiTTFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBtZW1vLk1heExlbmd0aCxcclxuICAgICAgICAgICAgU3RhdHVzOiB0eXBlb2YgbWVtby5NYXhMZW5ndGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBWYWx1ZSAoc3RyaW5nIHwgbnVsbClcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIk0yXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlZhbHVlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBvcmlnaW5hbFZhbHVlID8gYFwiJHtvcmlnaW5hbFZhbHVlLnN1YnN0cmluZygwLCA1MCl9JHtvcmlnaW5hbFZhbHVlLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31cImAgOiBcIihlbXB0eSlcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIk1lbW8gUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gSU5IRVJJVEVEIEZST00gSUNvbnRyb2wgLSBQcm9wZXJ0aWVzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkkxXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbWVtby5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkkyXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZU5hbWUgPT09IFwiZGVzY3JpcHRpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiSTNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlVHlwZSA9PT0gXCJtZW1vXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkk0XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtZW1vLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJJNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbWVtby5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiSTZcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtZW1vLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiSTdcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbWVtby5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJJOFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBtZW1vLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkk5XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1lbW8uUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiSTEwXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1lbW8uU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiSTExXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtZW1vLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJJMTJcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1lbW8uTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkkxM1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtZW1vLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiSUNvbnRyb2wgUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gSU5IRVJJVEVEIEZST00gSUNvbnRyb2wgLSBTZXR0ZXIgVGVzdHNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFZhbHVlIHNldHRlclxyXG4gICAgICAgIG1lbW8uVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbWVtby5WYWx1ZTtcclxuICAgICAgICBtZW1vLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtZW1vLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbWVtby5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1lbW8uUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBtZW1vLkRpc2FibGVkO1xyXG4gICAgICAgIG1lbW8uRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5EaXNhYmxlZDtcclxuICAgICAgICBtZW1vLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBtZW1vLkxhYmVsO1xyXG4gICAgICAgIG1lbW8uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uTGFiZWw7XHJcbiAgICAgICAgbWVtby5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBtZW1vLlZpc2libGU7XHJcbiAgICAgICAgbWVtby5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5WaXNpYmxlO1xyXG4gICAgICAgIG1lbW8uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBJTkhFUklURUQgRlJPTSBJQ29udHJvbCAtIE1ldGhvZHNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE1lbW8gT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTFcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk0xXCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiTTJcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk0zXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk0zXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNNFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk00XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNZW1vIG5vdGlmaWNhdGlvblwiLCBcIk1FTU9fVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5DbGVhck5vdGlmaWNhdGlvbihcIk1FTU9fVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIk01XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNNVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJNNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc29sZS5ncm91cChgXHVEODNEXHVEQ0REIFRFU1QgMzogTWVtbyBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IERlc2NyaXB0aW9uIGZpZWxkYCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBQcm9wZXJ0aWVzICgxNSBpdGVtcylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKDExIGl0ZW1zKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgLy8gU3VtbWFyeVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsV0FBUyxTQUFpQztBQUN0QyxRQUFJLE9BQU8sV0FBVyxlQUFnQixPQUFlLFFBQVEsUUFBVztBQUNwRSxhQUFRLE9BQWU7QUFBQSxJQUMzQjtBQUNBLFFBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLFdBQVcsZUFBZ0IsT0FBTyxPQUFlLFFBQVEsUUFBVztBQUNuSCxhQUFRLE9BQU8sT0FBZTtBQUFBLElBQ2xDO0FBQ0EsUUFBSSxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxPQUFPLFdBQVcs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QVEsTUFBTSxZQUFZO0FBQUEsTUFDeEM7QUFBQSxJQUFxRDtBQUV6RCxZQUFRLFNBQVM7QUFBQSxFQUNyQjs7O0FMNUxBLE1BQU0sY0FBZSxXQUFZO0FBQzdCO0FBRUEsUUFBSTtBQUVKLG1CQUFlLE9BQU8sa0JBQXNDO0FBQ3hELGFBQU8sSUFBSSxZQUFZLEtBQUssZ0JBQWdCO0FBQzVDLHFCQUFlO0FBQ2YsV0FBSyxZQUFZLFdBQVc7QUFBQSxJQUNoQztBQUVBLGFBQVMsaUJBQXVCO0FBQzVCLFVBQUksS0FBSyxpQkFBaUIsY0FBYyxHQUFHO0FBQUEsTUFDM0M7QUFBQSxJQUNKO0FBTUEsbUJBQWUsWUFBWSxrQkFBc0M7QUFLN0QsaUJBQVcsTUFBTTtBQUNiLGdCQUFRLE1BQU07QUFHZCxvQkFBWSxJQUFJO0FBR2hCLG1CQUFXLElBQUk7QUFHZixpQkFBUyxJQUFJO0FBQUEsTUFFakIsR0FBRyxHQUFLO0FBQUEsSUFHWjtBQTJCQSxXQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsSUFDWjtBQUFBLEVBQ0osRUFBRztBQUVILE1BQU8sa0JBQVE7IiwKICAibmFtZXMiOiBbImZvcm1Db250ZXh0IiwgInRhYnMiLCAibmF2aWdhdGlvbnMiLCAicXVpY2tGb3JtcyIsICJncmlkcyIsICJBY2NvdW50Rm9ybSIsICJBY2NvdW50IiwgIk9wdGlvblNldCJdCn0K
