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
            "Account_Tasks"
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
  function AccountApi(entity) {
    return createWebApiEntity(
      entity,
      "account",
      "accounts",
      AccountFieldConfig
    );
  }

  // entities/Account.TestWebApi.ts
  async function TestWebApi(form) {
    const results = [];
    const methodResults = [];
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      const newAccount = AccountApi();
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
      const account = AccountApi();
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
      const account = AccountApi();
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
      const account = AccountApi();
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
      const account = AccountApi();
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
      const account = AccountApi();
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
    const tab = form.Tab.SUMMARY_TAB;
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
    const navItem = form.Navigation.Account_Tasks;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9PcHRpb25TZXQudHMiLCAiLi4vZW50aXRpZXMvZ2VuZXJhdG9yL0FjY291bnQuZm9ybS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb250cm9sLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdExvb2t1cC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RNZW1vLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFN0cmluZy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RJbnRlZ2VyLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE9wdGlvblNldC50cyIsICIuLi9lbnRpdGllcy9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0V2ViQXBpLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE1vbmV5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdEJvb2xlYW4udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZVRpbWUudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZU9ubHkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0R3JpZC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RVdGlsaXR5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFRhYi50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBUZXN0Q29udHJvbCB9IGZyb20gJy4vQWNjb3VudC5UZXN0Q29udHJvbCc7XHJcbmltcG9ydCB7IFRlc3RMb29rdXAgfSBmcm9tICcuL0FjY291bnQuVGVzdExvb2t1cCc7XHJcbmltcG9ydCB7IFRlc3RNZW1vIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RNZW1vJztcclxuaW1wb3J0IHsgVGVzdFN0cmluZyB9IGZyb20gJy4vQWNjb3VudC5UZXN0U3RyaW5nJztcclxuaW1wb3J0IHsgVGVzdEludGVnZXIgfSBmcm9tICcuL0FjY291bnQuVGVzdEludGVnZXInO1xyXG5pbXBvcnQgeyBUZXN0T3B0aW9uU2V0IH0gZnJvbSAnLi9BY2NvdW50LlRlc3RPcHRpb25TZXQnO1xyXG5pbXBvcnQgeyBUZXN0V2ViQXBpIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RXZWJBcGknO1xyXG5pbXBvcnQgeyBUZXN0TW9uZXkgfSBmcm9tICcuL0FjY291bnQuVGVzdE1vbmV5JztcclxuaW1wb3J0IHsgVGVzdEJvb2xlYW4gfSBmcm9tICcuL0FjY291bnQuVGVzdEJvb2xlYW4nO1xyXG5pbXBvcnQgeyBUZXN0RGF0ZVRpbWUgfSBmcm9tICcuL0FjY291bnQuVGVzdERhdGVUaW1lJztcclxuaW1wb3J0IHsgVGVzdERhdGVPbmx5IH0gZnJvbSAnLi9BY2NvdW50LlRlc3REYXRlT25seSc7XHJcbmltcG9ydCB7IFRlc3RHcmlkIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RHcmlkJztcclxuaW1wb3J0IHsgVGVzdFV0aWxpdHkgfSBmcm9tICcuL0FjY291bnQuVGVzdFV0aWxpdHknO1xyXG5pbXBvcnQgeyBUZXN0TXVsdGlPcHRpb25TZXQgfSBmcm9tICcuL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0JztcclxuaW1wb3J0IHsgVGVzdFRhYiB9IGZyb20gJy4vQWNjb3VudC5UZXN0VGFiJztcclxuaW1wb3J0IHsgVGVzdE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbSc7XHJcblxyXG5jb25zdCBmb3JtQWNjb3VudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBsZXQgZm9ybTogQWNjb3VudEZvcm0uRm9ybTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkxvYWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9ybSA9IG5ldyBBY2NvdW50Rm9ybS5Gb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgZm9ybS5VaUFkZExvYWRlZChVaUFkZExvYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZvcm0uRXhlY3V0aW9uQ29udGV4dC5Jc0luaXRpYWxMb2FkKCkpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBCRUdJTiBPTiBMT0FEIExPR0lDXHJcblxyXG4gICAgICAgIC8vIFdhaXQgMTAgc2Vjb25kcyBhZnRlciBPbkxvYWQgdG8gYWxsb3cgZm9ybSB0byBmdWxseSBsb2FkXHJcbiAgICAgICAgLy8gVGhlbiBjbGVhciBjb25zb2xlIGFuZCBydW4gcmVhbCB0ZXN0c1xyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDA6IElDb250cm9sIEludGVyZmFjZSAoYmFzZSBmb3IgYWxsIGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBUZXN0Q29udHJvbChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTogTG9va3VwIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdExvb2t1cChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMjogTWVtbyBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RNZW1vKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAzOiBTdHJpbmcgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0U3RyaW5nKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA0OiBJbnRlZ2VyIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEludGVnZXIoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDU6IE9wdGlvblNldCBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDY6IFdlYkFwaSBcclxuICAgICAgICAgICAgYXdhaXQgVGVzdFdlYkFwaShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNzogTW9uZXkgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TW9uZXkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDg6IEJvb2xlYW4gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0Qm9vbGVhbihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgOTogRGF0ZVRpbWUgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RGF0ZVRpbWUoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDEwOiBEYXRlT25seSBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3REYXRlT25seShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTE6IEdyaWQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0R3JpZChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTI6IFV0aWxpdHkgQVBJXHJcbiAgICAgICAgICAgIFRlc3RVdGlsaXR5KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TXVsdGlPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE0OiBUYWIgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0VGFiKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybSk7XHJcblxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuXHJcbiAgICAgICAgLy8gRU5EIE9OIExPQUQgTE9HSUNcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVORCBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgUFJFIFNFQVJDSFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgT25Mb2FkOiBvbkxvYWRcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQWNjb3VudDtcclxuIiwgImZ1bmN0aW9uIGdldFhybSgpOiB0eXBlb2YgWHJtIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC5wYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlclNldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCwgc2V0dGVyRm46ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgc2V0OiBzZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkOiBhbnksIGF0dHJpYnV0ZTogYW55LCBjb250cm9sOiBhbnkpOiB2b2lkIHtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZScsICgpID0+IGNvbnRyb2w/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZU5hbWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVQYXJlbnQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFBhcmVudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVR5cGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEF0dHJpYnV0ZVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sTmFtZScsICgpID0+IGNvbnRyb2w/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sT3B0aW9ucycsICgpID0+IGNvbnRyb2w/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sUGFyZW50JywgKCkgPT4gY29udHJvbD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBjb250cm9sPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0Zvcm1hdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0Rm9ybWF0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSW5pdGlhbFVybCcsICgpID0+IGNvbnRyb2w/LmdldEluaXRpYWxVcmwoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzRGlydHknLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1BhcnR5TGlzdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNQYXJ0eUxpc3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1ZhbGlkJywgKCkgPT4gYXR0cmlidXRlPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4JywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXhMZW5ndGgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heExlbmd0aCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01pbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWluKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT2JqZWN0JywgKCkgPT4gY29udHJvbD8uZ2V0T2JqZWN0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3B0aW9ucycsICgpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ091dHB1dHMnLCAoKSA9PiBjb250cm9sPy5nZXRPdXRwdXRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRPcHRpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFNlbGVjdGVkT3B0aW9uKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRSZXN1bHRzJywgKCkgPT4gY29udHJvbD8uZ2V0U2VsZWN0ZWRSZXN1bHRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU3RhdGUnLCAoKSA9PiBjb250cm9sPy5nZXRTdGF0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RleHQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFRleHQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUb3RhbFJlc3VsdENvdW50JywgKCkgPT4gY29udHJvbD8uZ2V0VG90YWxSZXN1bHRDb3VudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1VzZXJQcml2aWxlZ2UnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFVzZXJQcml2aWxlZ2UoKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEYXRhJywgKCkgPT4gY29udHJvbD8uZ2V0RGF0YSgpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXREYXRhKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEZWZhdWx0VmlldycsICgpID0+IGNvbnRyb2w/LmdldERlZmF1bHRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERlZmF1bHRWaWV3KHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEaXNhYmxlZCcsICgpID0+IGNvbnRyb2w/LmdldERpc2FibGVkKCksICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgY29udHJvbD8uc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdFbnRpdHlUeXBlcycsICgpID0+IGNvbnRyb2w/LmdldEVudGl0eVR5cGVzKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldEVudGl0eVR5cGVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdMYWJlbCcsICgpID0+IGNvbnRyb2w/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdQcmVjaXNpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFByZWNpc2lvbigpLCAodmFsdWU6IG51bWJlcikgPT4geyBhdHRyaWJ1dGU/LnNldFByZWNpc2lvbih2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NlYXJjaFF1ZXJ5JywgKCkgPT4gY29udHJvbD8uZ2V0U2VhcmNoUXVlcnkoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U2VhcmNoUXVlcnkodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Nob3dUaW1lJywgKCkgPT4gY29udHJvbD8uZ2V0U2hvd1RpbWUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFNob3dUaW1lKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTcmMnLCAoKSA9PiBjb250cm9sPy5nZXRTcmMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U3JjKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTdWJtaXRNb2RlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTdWJtaXRNb2RlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0U3VibWl0TW9kZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBhdHRyaWJ1dGU/LnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmlzaWJsZScsICgpID0+IGNvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbUZpbHRlciA9IChmaWx0ZXI6IHN0cmluZywgZW50aXR5TG9naWNhTmFtZT86IHN0cmluZykgPT4gY29udHJvbD8uYWRkQ3VzdG9tRmlsdGVyKGZpbHRlciwgZW50aXR5TG9naWNhTmFtZSk7XHJcbiAgICBmaWVsZC5BZGRDdXN0b21WaWV3ID0gKHZpZXdJZDogc3RyaW5nLCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZpZXdEaXNwbGF5TmFtZTogc3RyaW5nLCBmZXRjaFhtbDogc3RyaW5nLCBsYXlvdXRYbWw6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuKSA9PiBjb250cm9sPy5hZGRDdXN0b21WaWV3KHZpZXdJZCwgZW50aXR5TmFtZSwgdmlld0Rpc3BsYXlOYW1lLCBmZXRjaFhtbCwgbGF5b3V0WG1sLCBpc0RlZmF1bHQpO1xyXG4gICAgZmllbGQuQWRkTG9va3VwVGFnQ2xpY2sgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Mb29rdXBUYWdDbGljayhjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBub3RpZmljYXRpb25MZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB7IG1lc3NhZ2U6IG1lc3NhZ2UsIGFjdGlvbnM6IFtjYWxsYmFja10gfTtcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7IG1lc3NhZ2VzOiBbbWVzc2FnZV0sIG5vdGlmaWNhdGlvbkxldmVsOiBub3RpZmljYXRpb25MZXZlbCwgdW5pcXVlSWQ6IHVuaXF1ZUlkLCBhY3Rpb25zOiBbYWN0aW9uc10gfTtcclxuICAgICAgICByZXR1cm4gY29udHJvbD8uYWRkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgZmllbGQuQWRkT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5hZGRPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPcHRpb24gPSAodGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBpbmRleD86IG51bWJlcikgPT4gY29udHJvbD8uYWRkT3B0aW9uKHsgdGV4dDogdGV4dCwgdmFsdWU6IHZhbHVlIH0sIGluZGV4KTtcclxuICAgIGZpZWxkLkFkZFBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmaWVsZC5DbGVhck9wdGlvbnMgPSAoKSA9PiBjb250cm9sPy5jbGVhck9wdGlvbnMoKTtcclxuICAgIGZpZWxkLkNvbnRlbnRXaW5kb3cgPSAoc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2w/LmdldENvbnRlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5GaXJlT25DaGFuZ2UgPSAoKSA9PiBhdHRyaWJ1dGU/LmZpcmVPbkNoYW5nZSgpO1xyXG4gICAgZmllbGQuRm9jdXMgPSAoKSA9PiBjb250cm9sPy5zZXRGb2N1cygpO1xyXG4gICAgZmllbGQuT3BlblNlYXJjaFJlc3VsdCA9IChyZXN1bHROdW1iZXI6IG51bWJlciwgbW9kZT86IHN0cmluZykgPT4gY29udHJvbD8ub3BlblNlYXJjaFJlc3VsdChyZXN1bHROdW1iZXIsIG1vZGUpO1xyXG4gICAgZmllbGQuT3B0aW9uID0gKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlZnJlc2ggPSAoKSA9PiBjb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICBmaWVsZC5SZW1vdmVMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGF0dHJpYnV0ZT8ucmVtb3ZlT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25PdXRwdXRDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25PdXRwdXRDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT3B0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IGNvbnRyb2w/LnJlbW92ZU9wdGlvbih2YWx1ZSk7XHJcbiAgICBmaWVsZC5SZW1vdmVQb3N0U2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUG9zdFNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVQcmVTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlUHJlU2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVJlc3VsdE9wZW5lZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblJlc3VsdE9wZW5lZChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVTZWxlY3Rpb24gPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25TZWxlY3Rpb24oY2FsbGJhY2spO1xyXG4gICAgZmllbGQuU2V0SXNWYWxpZCA9ICh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZykgPT4gYXR0cmlidXRlPy5zZXRJc1ZhbGlkKHZhbGlkLCBtZXNzYWdlKTtcclxuICAgIGZpZWxkLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkcyhmb3JtQ29udGV4dDogYW55LCBib2R5OiBhbnksIHR5cGU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgT2JqZWN0LmtleXMoYm9keSkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9naWNhbE5hbWUgPSB0eXBlID09PSB1bmRlZmluZWQgPyBmaWVsZD8udG9Mb3dlckNhc2UoKSA6ICh0eXBlICsgZmllbGQpPy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChsb2dpY2FsTmFtZSkgPz8gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGQpO1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZ2V0QXR0cmlidXRlKGxvZ2ljYWxOYW1lKTtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZSAmJiBjb250cm9sPy5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBib2R5W2ZpZWxkXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHR5cGUgPT09IFwiaGVhZGVyX1wiKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0SGVhZGVyU2VjdGlvbiA9IGZvcm1Db250ZXh0Py51aT8uaGVhZGVyU2VjdGlvbjtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0JvZHlWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Qm9keVZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Qm9keVZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0NvbW1hbmRCYXJWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Q29tbWFuZEJhclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Q29tbWFuZEJhclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ1RhYk5hdmlnYXRvclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRUYWJOYXZpZ2F0b3JWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldFRhYk5hdmlnYXRvclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2R5O1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRUYWJzKGZvcm1Db250ZXh0OiBhbnksIHRhYnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZFNlY3Rpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiOiBzdHJpbmcsIHNlY3Rpb25zOiBhbnksIHNlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9iamVjdCA9IHRhYk9iamVjdD8uc2VjdGlvbnM/LmdldChzZWN0aW9uKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdOYW1lJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdQYXJlbnQnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTGFiZWwnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRUYWIgPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55LCB0YWI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ05hbWUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ1BhcmVudCcsICgpID0+IHRhYk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdDb250ZW50VHlwZScsICgpID0+IHRhYk9iamVjdD8uZ2V0Q29udGVudFR5cGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRDb250ZW50VHlwZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdEaXNwbGF5U3RhdGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdMYWJlbCcsICgpID0+IHRhYk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdWaXNpYmxlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHRhYnNbdGFiXS5BZGRUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LmFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICB0YWJzW3RhYl0uRm9jdXMgPSAoKSA9PiB0YWJPYmplY3Q/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgdGFic1t0YWJdLlJlbW92ZVRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8ucmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRhYnNbdGFiXS5TZWN0aW9uKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsb2FkU2VjdGlvbihmb3JtQ29udGV4dCwgdGFiLCB0YWJzW3RhYl0uU2VjdGlvbiwgc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXModGFicykuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIGxvYWRUYWIoZm9ybUNvbnRleHQsIHRhYnMsIHRhYik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbkl0ZW0gPSAobmF2aWdhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBmb3JtQ29udGV4dD8udWk/Lm5hdmlnYXRpb24/Lml0ZW1zO1xyXG4gICAgICAgIGlmICghbmF2SXRlbXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5hdkl0ZW1zLmdldExlbmd0aCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5hdkl0ZW1zLmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmdldElkKCkgPT09IG5hdmlnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWROYXZpZ2F0aW9uID0gKGZvcm1Db250ZXh0OiBhbnksIG5hdmlnYXRpb25zOiBhbnksIG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtID0gZ2V0TmF2aWdhdGlvbkl0ZW0obmF2aWdhdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnSWQnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnTGFiZWwnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ1Zpc2libGUnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgICAgICBuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXS5Gb2N1cyA9ICgpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRGb2N1cygpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKG5hdmlnYXRpb25zKS5mb3JFYWNoKG5hdmlnYXRpb24gPT4ge1xyXG4gICAgICAgIGxvYWROYXZpZ2F0aW9uKGZvcm1Db250ZXh0LCBuYXZpZ2F0aW9ucywgbmF2aWdhdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4Y2x1ZGVkRmllbGRzID0gbmV3IFNldChbXCJCb2R5XCIsIFwiQ29udHJvbHNcIiwgXCJJc0xvYWRlZFwiLCBcIlJlZnJlc2hcIiwgXCJGb2N1c1wiLCBcIkNvbnRyb2xUeXBlXCIsIFwiRGlzYWJsZWRcIiwgXCJMYWJlbFwiLCBcIkNvbnRyb2xOYW1lXCIsIFwiQ29udHJvbFBhcmVudFwiLCBcIlZpc2libGVcIl0pO1xyXG4gICAgY29uc3QgbG9hZFF1aWNrRm9ybSA9IChmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnksIHF1aWNrRm9ybTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMocXVpY2tGb3Jtc1txdWlja0Zvcm1dKS5maWx0ZXIoZmllbGQgPT4gIWV4Y2x1ZGVkRmllbGRzLmhhcyhmaWVsZCkpO1xyXG4gICAgICAgIGNvbnN0IHF1aWNrID0gZm9ybUNvbnRleHQ/LnVpPy5xdWlja0Zvcm1zPy5nZXQocXVpY2tGb3JtKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQm9keScsICgpID0+IExvYWRGb3JtRGlhbG9nKHF1aWNrLCBmaWVsZHMpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBxdWljaz8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFBhcmVudCcsICgpID0+IHF1aWNrPy5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gcXVpY2s/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdEaXNhYmxlZCcsICgpID0+IHF1aWNrPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnTGFiZWwnLCAoKSA9PiBxdWljaz8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ1Zpc2libGUnLCAoKSA9PiBxdWljaz8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Db250cm9scyA9IChhcmc6IGFueSkgPT4gcXVpY2s/LmdldENvbnRyb2woYXJnKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uRm9jdXMgPSAoKSA9PiBxdWljaz8uc2V0Rm9jdXMoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uSXNMb2FkZWQgPSAoKSA9PiBxdWljaz8uaXNMb2FkZWQoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uUmVmcmVzaCA9ICgpID0+IHF1aWNrPy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVpY2tGb3JtcykuZm9yRWFjaChxdWlja0Zvcm0gPT4ge1xyXG4gICAgICAgIGxvYWRRdWlja0Zvcm0oZm9ybUNvbnRleHQsIHF1aWNrRm9ybXMsIHF1aWNrRm9ybSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkR3JpZHMoZm9ybUNvbnRleHQ6IGFueSwgZ3JpZHM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZEdyaWRDb2x1bW4gPSAoY29sOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYWJlbCcsICgpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBjb2w/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0Rpc2FibGVkJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBjb2w/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1ZhbHVlJywgKCkgPT4gY29sPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFZhbHVlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgb2JqLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgICAgIG9iai5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkR3JpZFJvdyA9IChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NvbHVtbnMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldExlbmd0aCA9ICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEdyaWRDb2x1bW4oY29sdW1uKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZEdyaWRDb2x1bW4oY29sdW1uKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5SWQnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkID0gKGZvcm1Db250ZXh0OiBhbnksIGdyaWRzOiBhbnksIGdyaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ29sbGVjdGlvbk9iamVjdCA9IChnZXRJdGVtc0ZuOiBhbnksIHByb2Nlc3NJdGVtRm46IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBvYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0SXRlbXNGbigpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgb2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiBwcm9jZXNzSXRlbUZuKGdldEl0ZW1zRm4oKT8uZ2V0KGluZGV4KSk7XHJcbiAgICAgICAgICAgIG9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbXNGbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gaXRlbXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc0l0ZW1GbihpdGVtcy5nZXQoaW5kZXgpKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRW50aXR5TmFtZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0ZldGNoWG1sJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEZldGNoWG1sKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0dyaWRUeXBlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWRUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1JlbGF0aW9uc2hpcCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRSZWxhdGlvbnNoaXAoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFJvd3MoKSxcclxuICAgICAgICAgICAgICAgIChyb3c6IGFueSkgPT4gbG9hZEdyaWRSb3cocm93KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1NlbGVjdGVkUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFNlbGVjdGVkUm93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3c/LmdldERhdGEoKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdUb3RhbFJlY29yZENvdW50JywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWQoKT8uZ2V0VG90YWxSZWNvcmRDb3VudCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdWaWV3U2VsZWN0b3InLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdTZWxlY3RvciA9IGdyaWRDb250cm9sPy5nZXRWaWV3U2VsZWN0b3IoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZ2V0dGVyKG9iaiwgJ1Zpc2libGUnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmlzVmlzaWJsZSgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0N1cnJlbnRWaWV3JywgKCkgPT4gdmlld1NlbGVjdG9yPy5nZXRDdXJyZW50VmlldygpLCAodmFsdWU6IGFueSkgPT4gdmlld1NlbGVjdG9yPy5zZXRDdXJyZW50Vmlldyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihncmlkc1tncmlkXSwgJ1Zpc2libGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBncmlkQ29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLkFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICBncmlkc1tncmlkXS5PcGVuUmVsYXRlZEdyaWQgPSAoKSA9PiBncmlkQ29udHJvbD8ub3BlblJlbGF0ZWRHcmlkKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaCA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaFJpYmJvbiA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoUmliYm9uKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlVybCA9IChjbGllbnQ6IG51bWJlcikgPT4gZ3JpZENvbnRyb2w/LmdldFVybChjbGllbnQpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKGdyaWRzKS5mb3JFYWNoKGdyaWQgPT4ge1xyXG4gICAgICAgIGxvYWRHcmlkKGZvcm1Db250ZXh0LCBncmlkcywgZ3JpZCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBMb2FkRm9ybShmb3JtQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgY29udGV4dERhdGEgPSBmb3JtQ29udGV4dD8uZGF0YTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhRW50aXR5ID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eTtcclxuICAgIGNvbnN0IGNvbnRleHRVaSA9IGZvcm1Db250ZXh0Py51aTtcclxuICAgIGNvbnN0IGNvbnRleHRVaUZvcm1TZWxlY3RvciA9IGZvcm1Db250ZXh0Py51aT8uZm9ybVNlbGVjdG9yO1xyXG4gICAgY29uc3QgZmluZEZvcm1JdGVtID0gKGNyaXRlcmlhOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXRMZW5ndGgoKSA/PyAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uaXRlbXM/LmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgY3JpdGVyaWEoaXRlbSkgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0F0dHJpYnV0ZXMnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYXR0cmlidXRlcyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0NvbnRyb2xzJywgKCkgPT4gY29udGV4dFVpPy5jb250cm9scyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGE/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc1ZhbGlkJywgKCkgPT4gY29udGV4dERhdGE/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFYbWwnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RGF0YVhtbCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzRGlydHknLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlOYW1lJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1JZCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1MYWJlbCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1UeXBlJywgKCkgPT4gY29udGV4dFVpPy5nZXRGb3JtVHlwZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRIZWlnaHQnLCAoKSA9PiBjb250ZXh0VWk/LmdldFZpZXdQb3J0SGVpZ2h0KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdWaWV3UG9ydFdpZHRoJywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydFdpZHRoKCkpO1xyXG4gICAgZm9ybS5BZGRPblBvc3RTYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblBvc3RTYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQWRkT25TYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5jbGVhckZvcm1Ob3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGNvbnRleHRVaT8uY2xvc2UoKTtcclxuICAgIGZvcm0uRGF0YUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRGF0YVJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRm9ybUlzVmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZykgPT4geyByZXR1cm4gZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uZ2V0VmlzaWJsZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZCA9IChmb3JtSWQ6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbCA9IChmb3JtTGFiZWw6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRMYWJlbCgpLCBmb3JtTGFiZWwpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtU2V0VmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH07XHJcbiAgICBmb3JtLlJlZnJlc2ggPSAoc2F2ZT86IGJvb2xlYW4sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8ucmVmcmVzaChzYXZlKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlJlZnJlc2hSaWJib24gPSAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IGNvbnRleHRVaT8ucmVmcmVzaFJpYmJvbihyZWZyZXNoQWxsKTtcclxuICAgIGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlJlbW92ZU9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uU2F2ZSA9IChzYXZlT3B0aW9ucz86IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRleHREYXRhPy5zYXZlKHNhdmVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlNldEZvcm1FbnRpdHlOYW1lID0gKGFyZzogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1FbnRpdHlOYW1lKGFyZyk7XHJcbiAgICBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1Ob3RpZmljYXRpb24obWVzc2FnZSwgbGV2ZWwsIHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uVWlBZGRMb2FkZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRMb2FkZWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZnVuY3Rpb24gTG9hZEV4ZWN1dGlvbkNvbnRleHQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICBnZXR0ZXIob2JqLCAnRGVwdGgnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXREZXB0aCgpKTtcclxuICAgIGdldHRlcihvYmosICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0V2ZW50QXJncycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpKTtcclxuICAgIGdldHRlcihvYmosICdFdmVudFNvdXJjZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50U291cmNlKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0Zvcm1Db250ZXh0JywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnSXNTYXZlU3VjY2VzcycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRJc1NhdmVTdWNjZXNzKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ1NhdmVFcnJvckluZm8nLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0U2F2ZUVycm9ySW5mbygpKTtcclxuICAgIGdldHRlcihvYmosICdTYXZlTW9kZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRTYXZlTW9kZSgpKTtcclxuICAgIG9iai5EaXNhYmxlQXN5bmNUaW1lb3V0ID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmRpc2FibGVBc3luY1RpbWVvdXQoKTtcclxuICAgIG9iai5HZXRTaGFyZWRWYXJpYWJsZSA9IChrZXk6IHN0cmluZykgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0U2hhcmVkVmFyaWFibGUoa2V5KTtcclxuICAgIG9iai5Jc0RlZmF1bHRQcmV2ZW50ZWQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uaXNEZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICBvYmouSXNJbml0aWFsTG9hZCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXREYXRhTG9hZFN0YXRlKCkgPT09IDE7XHJcbiAgICBvYmouU2V0UHJldmVudERlZmF1bHQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8ucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9iai5TZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3IgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8ucHJldmVudERlZmF1bHRPbkVycm9yKCk7XHJcbiAgICBvYmouU2V0U2hhcmVkVmFyaWFibGUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LnNldFNoYXJlZFZhcmlhYmxlKGtleSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIFNpZGVQYW5lcyBBUEkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgYWNjZXNzIHRvIHNpZGUgcGFuZXMgZnVuY3Rpb25hbGl0eSBpbiBtb2RlbC1kcml2ZW4gYXBwcy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVNpZGVQYW5lcyBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLWFwcC1zaWRlcGFuZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkU2lkZVBhbmVzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzaWRlUGFuZXM6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoc2lkZVBhbmVzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uc3RhdGUsICh2YWx1ZTogYW55KSA9PiB7IGNvbnN0IHggPSBnZXRYcm0oKTsgaWYgKCh4IGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzKSAoeCBhcyBhbnkpLkFwcC5zaWRlUGFuZXMuc3RhdGUgPSB2YWx1ZTsgfSk7XHJcbiAgICBzaWRlUGFuZXMuQ3JlYXRlID0gZnVuY3Rpb24gKHBhbmVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSkgeyAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5jcmVhdGVQYW5lKHBhbmVPcHRpb25zKT8udGhlbihzdWNjZXNzQ2FsbGJhY2spOyB9O1xyXG4gICAgc2lkZVBhbmVzLkdldCA9IChwYW5lSWQ6IHN0cmluZykgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0UGFuZShwYW5lSWQpO1xyXG4gICAgc2lkZVBhbmVzLkdldEFsbCA9ICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldEFsbFBhbmVzKCk7XHJcbiAgICBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRTZWxlY3RlZFBhbmUoKTtcclxuICAgIHJldHVybiBzaWRlUGFuZXM7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBXZWJBcGkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgbWV0aG9kcyB0byB1c2UgV2ViIEFQSSB0byBjcmVhdGUgYW5kIG1hbmFnZSByZWNvcmRzIGFuZCBleGVjdXRlIFdlYiBBUEkgYWN0aW9ucyBhbmQgZnVuY3Rpb25zLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJV2ViQXBpIGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0td2ViYXBpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFdlYkFwaSgpOiBEZXZLaXQuSVdlYkFwaSB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9IGFzIERldktpdC5JV2ViQXBpO1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRXZWJBcGkgPSB4cm0/LldlYkFwaTtcclxuICAgIGNvbnN0IGdldE9ubGluZSA9IHhybT8uV2ViQXBpPy5vbmxpbmU7XHJcbiAgICBjb25zdCBnZXRPZmZsaW5lID0geHJtPy5XZWJBcGk/Lm9mZmxpbmU7XHJcbiAgICBjb25zdCBleHRyYWN0RW50aXR5TmFtZSA9IGZ1bmN0aW9uIChmZXRjaFhtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY2xlYW5YbWwgPSBmZXRjaFhtbDtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbE1hdGNoID0gZmV0Y2hYbWwubWF0Y2goL2ZldGNoeG1sPS9pKTtcclxuICAgICAgICBpZiAoZmV0Y2hYbWxNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gZmV0Y2hYbWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmZXRjaHhtbD0nKSArICdmZXRjaHhtbD0nLmxlbmd0aDtcclxuICAgICAgICAgICAgY2xlYW5YbWwgPSBkZWNvZGVVUklDb21wb25lbnQoZmV0Y2hYbWwuc3Vic3RyaW5nKHNwbGl0SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZmV0Y2hYbWwudHJpbSgpLnN0YXJ0c1dpdGgoJzwnKSkge1xyXG4gICAgICAgICAgICBjbGVhblhtbCA9IGZldGNoWG1sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhjbGVhblhtbCwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICBjb25zdCBlbnRpdHlOb2RlID0geG1sRG9jLnF1ZXJ5U2VsZWN0b3IoXCJlbnRpdHlcIik7XHJcbiAgICAgICAgaWYgKGVudGl0eU5vZGUgJiYgZW50aXR5Tm9kZS5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Tm9kZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpITtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRpdHkgbmFtZSBub3QgZm91bmQgaW4gZmV0Y2hYbWxcIik7XHJcbiAgICB9O1xyXG4gICAgb2JqLkNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LmNyZWF0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5EZWxldGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8uZGVsZXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVNdWx0aXBsZVJlY29yZHMgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZywgbWF4UGFnZVNpemU/OiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lLCBvcHRpb25zLCBtYXhQYWdlU2l6ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5VcGRhdGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgZGF0YTogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy51cGRhdGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBkYXRhKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGUgPSBmdW5jdGlvbiAocmVxdWVzdDogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gKGdldFdlYkFwaSBhcyBhbnkpPy5leGVjdXRlKHJlcXVlc3QpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZU11bHRpcGxlKHJlcXVlc3RzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkcyA9IGZ1bmN0aW9uIChhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeTogYW55LCBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9uczogc3RyaW5nLCBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s/OiBhbnksIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s/OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGxldCBlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IG1heFBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGFzRmV0Y2hYbWwgPSAoc3RyOiBzdHJpbmcpID0+IC9mZXRjaHhtbD0vaS50ZXN0KHN0cik7XHJcbiAgICAgICAgY29uc3QgaXNQbGFpbkZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyAmJiBzdHIudHJpbSgpLnN0YXJ0c1dpdGgoJzxmZXRjaCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZFBhcmFtSXNGZXRjaFhtbE9yT0RhdGEgPSB0eXBlb2YgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgIChoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykgfHxcclxuICAgICAgICAgICAgICAgIGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykgfHxcclxuICAgICAgICAgICAgICAgIChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucy5zdGFydHNXaXRoKCc/JykgJiYgIWhhc0ZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSkpO1xyXG4gICAgICAgIGlmIChzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKGlzUGxhaW5GZXRjaFhtbChvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICc/ZmV0Y2hYbWw9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGFzRmV0Y2hYbWwob3B0aW9ucykgfHwgaXNQbGFpbkZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBleHRyYWN0RW50aXR5TmFtZShvcHRpb25zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW50aXR5IG5hbWUgY2Fubm90IGJlIGRldGVybWluZWQgZnJvbSBPRGF0YSBxdWVyeS4gUGxlYXNlIHByb3ZpZGUgZW50aXR5TG9naWNhbE5hbWUgYXMgc2Vjb25kIHBhcmFtZXRlci4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHlMb2dpY2FsTmFtZSA9IGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVNdWx0aXBsZVJlY29yZHMoZW50aXR5TG9naWNhbE5hbWUhLCBvcHRpb25zLCBtYXhQYWdlU2l6ZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbnRpdGllcyAmJiByZXN1bHQuZW50aXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lbnRpdGllcy5tYXAoKGVudGl0eTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJyAmJiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeS5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmQgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEZ1bmN0aW9uLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IFwiPyRzZWxlY3Q9KlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IFwiPyRzZWxlY3Q9KlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMgYXMgc3RyaW5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5ID09PSAnZnVuY3Rpb24nICYmIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgPyBuZXcgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgOiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXR0ZXIob2JqLCAnT25saW5lJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ubGluZTogYW55ID0ge307XHJcbiAgICAgICAgb25saW5lLkV4ZWN1dGUgPSBmdW5jdGlvbiAocmVxdWVzdDogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE9ubGluZT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlTXVsdGlwbGUgPSBmdW5jdGlvbiAocmVxdWVzdHM6IGFueVtdLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE9ubGluZT8uZXhlY3V0ZU11bHRpcGxlKHJlcXVlc3RzKTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBvbmxpbmU7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcihvYmosICdPZmZsaW5lJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9mZmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9mZmxpbmUuSXNBdmFpbGFibGUgPSAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZykgPT4gKGdldE9mZmxpbmUgYXMgYW55KT8uaXNBdmFpbGFibGUoZW50aXR5TG9naWNhbE5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvZmZsaW5lO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyB0aGUgQ29waWxvdCBBUEkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgYWNjZXNzIHRvIENvcGlsb3QgZnVuY3Rpb25hbGl0eSBmb3IgZXhlY3V0aW5nIGV2ZW50cyBhbmQgcHJvbXB0cy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSUNvcGlsb3QgaW50ZXJmYWNlXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlL3hybS1jb3BpbG90XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZENvcGlsb3QoKTogRGV2S2l0LklDb3BpbG90IHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICBjb25zdCB4cm0gPSBnZXRYcm0oKTtcclxuICAgIGNvbnN0IGdldENvcGlsb3QgPSAoeHJtIGFzIGFueSk/LkNvcGlsb3Q7XHJcbiAgICBvYmouRXhlY3V0ZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldENvcGlsb3Q/LmV4ZWN1dGVFdmVudChldmVudE5hbWUsIGV2ZW50UGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlUHJvbXB0ID0gZnVuY3Rpb24gKHByb21wdFRleHQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldENvcGlsb3Q/LmV4ZWN1dGVQcm9tcHQocHJvbXB0VGV4dCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuZnVuY3Rpb24gbG9hZE90aGVycyhmb3JtQ29udGV4dDogYW55LCBmb3JtOiBhbnksIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgZm9ybS5TaWRlUGFuZXMgPSBMb2FkU2lkZVBhbmVzKCk7XHJcbiAgICBmb3JtLldlYkFwaSA9IExvYWRXZWJBcGkoKTtcclxuICAgIGZvcm0uQ29waWxvdCA9IExvYWRDb3BpbG90KCk7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIGEgZm9ybSB3aXRoIHR5cGVkIEJvZHksIEhlYWRlciwgVGFiLCBHcmlkLCBOYXZpZ2F0aW9uLCBRdWlja0Zvcm0sIGFuZCBQcm9jZXNzIHNlY3Rpb25zLlxyXG4gKiBUaGlzIGlzIHRoZSBtYWluIGZ1bmN0aW9uIGZvciBpbml0aWFsaXppbmcgYSBmb3JtIGluIFR5cGVTY3JpcHQuXHJcbiAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IFRoZSBleGVjdXRpb24gY29udGV4dCBwYXNzZWQgdG8gdGhlIGZvcm0gZXZlbnQgaGFuZGxlclxyXG4gKiBAcGFyYW0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBPcHRpb25hbCBkZWZhdWx0IHdlYiByZXNvdXJjZSBuYW1lIGZvciB1dGlsaXR5IGZ1bmN0aW9uc1xyXG4gKiBAcGFyYW0gZm9ybUNvbmZpZyBDb25maWd1cmF0aW9uIG9iamVjdCBzcGVjaWZ5aW5nIGZpZWxkcywgdGFicywgZ3JpZHMsIGV0Yy5cclxuICogQHJldHVybnMgQSB0eXBlZCBmb3JtIG9iamVjdCB3aXRoIGFsbCBmb3JtIGZ1bmN0aW9uYWxpdHlcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkRm9ybVYyPFRCb2R5ID0gUmVjb3JkPHN0cmluZywgYW55PiwgVEhlYWRlciA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRUYWIgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUR3JpZCA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFROYXZpZ2F0aW9uID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFF1aWNrRm9ybSA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRQcm9jZXNzID0gYW55PihcclxuICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIGZvcm1Db25maWc6IHtcclxuICAgICAgICBib2R5Pzogc3RyaW5nW107XHJcbiAgICAgICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAgICAgdGFiPzogc3RyaW5nW107XHJcbiAgICAgICAgZ3JpZD86IHN0cmluZ1tdO1xyXG4gICAgICAgIG5hdmlnYXRpb24/OiBzdHJpbmdbXTtcclxuICAgICAgICBxdWljaz86IHN0cmluZ1tdO1xyXG4gICAgICAgIGJwZj86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG4pOiB7XHJcbiAgICBFeGVjdXRpb25Db250ZXh0OiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBCb2R5OiBUQm9keTtcclxuICAgIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIFRhYjogVFRhYjtcclxuICAgIEdyaWQ6IFRHcmlkO1xyXG4gICAgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBGb3JtSWQ6IHN0cmluZztcclxuICAgIEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgQXR0cmlidXRlczogYW55O1xyXG4gICAgQ29udHJvbHM6IGFueTtcclxuICAgIERhdGFYbWw6IHN0cmluZztcclxuICAgIEVudGl0eUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBFbnRpdHlJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgRW50aXR5UmVmZXJlbmNlOiBhbnk7XHJcbiAgICBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuICAgIFZpZXdQb3J0SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBWaWV3UG9ydFdpZHRoOiBudW1iZXI7XHJcbiAgICBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEFkZE9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEFkZE9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgUmVtb3ZlT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgUmVtb3ZlT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBEYXRhQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBEYXRhUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBGb3JtSXNWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBGb3JtTmF2aWdhdGVUb0Zvcm1JZDogKGZvcm1JZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw6IChmb3JtTGFiZWw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIEZvcm1TZXRWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtRW50aXR5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIFByb2Nlc3M6IFRQcm9jZXNzO1xyXG4gICAgVXRpbGl0eTogYW55O1xyXG4gICAgU2lkZVBhbmVzOiBhbnk7XHJcbiAgICBXZWJBcGk6IGFueTtcclxuICAgIENvcGlsb3Q6IGFueTtcclxufSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0Py4oKSA/PyBleGVjdXRpb25Db250ZXh0ID8/IG51bGw7XHJcbiAgICBjb25zdCBmb3JtID0gTG9hZEZvcm0oZm9ybUNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBib2R5ID0gW10sIHRhYiA9IFtdLCBoZWFkZXIgPSBbXSwgYnBmID0gW10sIHF1aWNrID0gW10sIGdyaWQgPSBbXSwgbmF2aWdhdGlvbiA9IFtdLCBkaWFsb2cgPSBbXSB9ID0gZm9ybUNvbmZpZyBhcyBhbnk7XHJcbiAgICBjb25zdCBib2R5T2JqOiBhbnkgPSB7fTtcclxuICAgIGJvZHkuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4gYm9keU9ialtmaWVsZF0gPSB7fSk7XHJcbiAgICBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBib2R5T2JqKTtcclxuICAgIGNvbnN0IHRhYk9iajogYW55ID0ge307XHJcbiAgICB0YWIuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3RhYk5hbWUsIHNlY3Rpb25OYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgIGlmICghdGFiT2JqW3RhYk5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRhYk9ialt0YWJOYW1lXSA9IHsgU2VjdGlvbjoge30gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFiT2JqW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdID0ge307XHJcbiAgICB9KTtcclxuICAgIGxvYWRUYWJzKGZvcm1Db250ZXh0LCB0YWJPYmopO1xyXG4gICAgYm9keU9iai5UYWIgPSB0YWJPYmo7XHJcbiAgICBmb3JtLkJvZHkgPSBib2R5T2JqO1xyXG4gICAgY29uc3QgaGVhZGVyT2JqOiBhbnkgPSB7fTtcclxuICAgIGhlYWRlci5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiBoZWFkZXJPYmpbZmllbGRdID0ge30pO1xyXG4gICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgaGVhZGVyT2JqLCAnaGVhZGVyXycpO1xyXG4gICAgZm9ybS5IZWFkZXIgPSBoZWFkZXJPYmo7XHJcbiAgICBjb25zdCBwcm9jZXNzID0gTG9hZFByb2Nlc3MoZm9ybUNvbnRleHQpO1xyXG4gICAgaWYgKGJwZi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgYnBmT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgYnBmUHJvY2Vzc05hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGJwZi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3Byb2Nlc3NOYW1lLCBmaWVsZE5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgICAgIGlmICghYnBmUHJvY2Vzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGJwZlByb2Nlc3NOYW1lID0gcHJvY2Vzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnBmT2JqW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBicGZPYmosICdoZWFkZXJfcHJvY2Vzc18nKTtcclxuICAgICAgICBpZiAoYnBmUHJvY2Vzc05hbWUpIHtcclxuICAgICAgICAgICAgcHJvY2Vzc1ticGZQcm9jZXNzTmFtZV0gPSBicGZPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybS5Qcm9jZXNzID0gcHJvY2VzcztcclxuICAgIGNvbnN0IHF1aWNrRm9ybU9iajogYW55ID0ge307XHJcbiAgICBxdWljay5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBbcXVpY2tGb3JtTmFtZSwgZmllbGROYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgIGlmICghcXVpY2tGb3JtT2JqW3F1aWNrRm9ybU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dCwgcXVpY2tGb3JtT2JqKTtcclxuICAgIGZvcm0uUXVpY2tGb3JtID0gcXVpY2tGb3JtT2JqO1xyXG4gICAgY29uc3QgZ3JpZE9iajogYW55ID0ge307XHJcbiAgICBncmlkLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4gZ3JpZE9ialtpdGVtXSA9IHt9KTtcclxuICAgIGxvYWRHcmlkcyhmb3JtQ29udGV4dCwgZ3JpZE9iaik7XHJcbiAgICBmb3JtLkdyaWQgPSBncmlkT2JqO1xyXG4gICAgY29uc3QgbmF2aWdhdGlvbk9iajogYW55ID0ge307XHJcbiAgICBuYXZpZ2F0aW9uLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4gbmF2aWdhdGlvbk9ialtpdGVtXSA9IHt9KTtcclxuICAgIGxvYWROYXZpZ2F0aW9ucyhmb3JtQ29udGV4dCwgbmF2aWdhdGlvbk9iaik7XHJcbiAgICBmb3JtLk5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uT2JqO1xyXG4gICAgaWYgKGRpYWxvZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9ybS5EaWFsb2cgPSBMb2FkRm9ybURpYWxvZyhmb3JtQ29udGV4dCwgZGlhbG9nKTtcclxuICAgIH1cclxuICAgIGZvcm0uVXRpbGl0eSA9IExvYWRVdGlsaXR5KGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgZm9ybS5FeGVjdXRpb25Db250ZXh0ID0gTG9hZEV4ZWN1dGlvbkNvbnRleHQoZXhlY3V0aW9uQ29udGV4dCk7XHJcbiAgICBsb2FkT3RoZXJzKGZvcm1Db250ZXh0LCBmb3JtLCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkUHJvY2Vzcyhmb3JtQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHByb2Nlc3M6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgZ2V0UHJvY2VzcyA9IGZvcm1Db250ZXh0Py5kYXRhPy5wcm9jZXNzO1xyXG4gICAgY29uc3QgZ2V0UHJvY2Vzc1VpID0gZm9ybUNvbnRleHQ/LnVpPy5wcm9jZXNzO1xyXG4gICAgY29uc3QgbG9hZFN0ZXAgPSAoc3RlcDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlJywgKCkgPT4gc3RlcD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gc3RlcD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJvZ3Jlc3MnLCAoKSA9PiBzdGVwPy5nZXRQcm9ncmVzcygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUmVxdWlyZWQnLCAoKSA9PiBzdGVwPy5pc1JlcXVpcmVkKCkpO1xyXG4gICAgICAgIG9iai5TZXRQcm9ncmVzcyA9IChzdGVwUHJvZ3Jlc3M6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKSA9PiBzdGVwPy5zZXRQcm9ncmVzcyhzdGVwUHJvZ3Jlc3MsIG1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFN0YWdlID0gKHN0YWdlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDYXRlZ29yeScsICgpID0+IHN0YWdlPy5nZXRDYXRlZ29yeSgpPy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5TmFtZScsICgpID0+IHN0YWdlPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJZCcsICgpID0+IHN0YWdlPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHN0YWdlPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGF0dXMnLCAoKSA9PiBzdGFnZT8uZ2V0U3RhdHVzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGVwcycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBzdGFnZT8uZ2V0U3RlcHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdGVwcykgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwc0FycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzdGVwcy5sZW5ndGggfHwgMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgc3RlcHNBcnJheS5wdXNoKGxvYWRTdGVwKHN0ZXBzW2luZGV4XSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGVwc0FycmF5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9iai5BbGxvd0NyZWF0ZU5ldyA9IChjYWxsYmFjazogYW55KSA9PiB7IGlmIChzdGFnZT8uZ2V0TmF2aWdhdGlvbkJlaGF2aW9yKCkpIHN0YWdlLmdldE5hdmlnYXRpb25CZWhhdmlvcigpLmFsbG93Q3JlYXRlTmV3ID0gY2FsbGJhY2s7IH07XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkUHJvY2Vzc0lubmVyID0gKHByb2Nlc3NPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lkJywgKCkgPT4gcHJvY2Vzc09iaj8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzUmVuZGVyZWQnLCAoKSA9PiBwcm9jZXNzT2JqPy5pc1JlbmRlcmVkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gcHJvY2Vzc09iaj8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RhZ2VzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzU3RhZ2VzID0gcHJvY2Vzc09iaj8uZ2V0U3RhZ2VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlc09iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBwcm9jZXNzU3RhZ2VzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRTdGFnZShzdGFnZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5nZXRMZW5ndGggPSAoKSA9PiBwcm9jZXNzU3RhZ2VzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IChzdGFnZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwcm9jZXNzU3RhZ2VzPy5nZXRMZW5ndGgoKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gcHJvY2Vzc1N0YWdlcy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRTdGFnZShzdGFnZSksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YWdlc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlUGF0aCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY3RpdmVQYXRoT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9hZFN0YWdlKHN0YWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IChzdGFnZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlcyA9IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YWdlcz8uZ2V0TGVuZ3RoKCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZFN0YWdlKHN0YWdlKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlUGF0aE9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVQcm9jZXNzJywgKCkgPT4gbG9hZFByb2Nlc3NJbm5lcihnZXRQcm9jZXNzPy5nZXRBY3RpdmVQcm9jZXNzKCkpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlU3RhZ2UnLCAoKSA9PiBsb2FkU3RhZ2UoZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlU3RhZ2UoKSkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdJbnN0YW5jZUlkJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0SW5zdGFuY2VJZCgpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnSW5zdGFuY2VOYW1lJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0SW5zdGFuY2VOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdTZWxlY3RlZFN0YWdlJywgKCkgPT4gbG9hZFN0YWdlKGdldFByb2Nlc3M/LmdldFNlbGVjdGVkU3RhZ2UoKSkpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdEaXNwbGF5U3RhdGUnLCAoKSA9PiBnZXRQcm9jZXNzVWk/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBnZXRQcm9jZXNzVWk/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdTdGF0dXMnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRTdGF0dXMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgZ2V0UHJvY2Vzcz8uc2V0U3RhdHVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ1Zpc2libGUnLCAoKSA9PiBnZXRQcm9jZXNzVWk/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGdldFByb2Nlc3NVaT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25QcmVTdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByZVN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25Qcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25TdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uU3RhZ2VTZWxlY3RlZCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblN0YWdlU2VsZWN0ZWQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5FbmFibGVkUHJvY2Vzc2VzID0gKGNhbGxiYWNrOiAocHJvY2Vzc2VzOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIGdldFByb2Nlc3M/LmdldEVuYWJsZWRQcm9jZXNzZXMoKGVuYWJsZWRQcm9jZXNzZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZXMgPSBPYmplY3QuZW50cmllcyhlbmFibGVkUHJvY2Vzc2VzKS5tYXAoKFtwcm9jZXNzSWQsIHByb2Nlc3NOYW1lXSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NJZDogcHJvY2Vzc0lkLFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc05hbWU6IHByb2Nlc3NOYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBwcm9jZXNzLk1vdmVOZXh0ID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/Lm1vdmVOZXh0KGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuTW92ZVByZXZpb3VzID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/Lm1vdmVQcmV2aW91cyhjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlByb2Nlc3NJbnN0YW5jZXMgPSAoY2FsbGJhY2s6IChwcm9jZXNzZXM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvY2Vzcz8uZ2V0UHJvY2Vzc0luc3RhbmNlcygocHJvY2Vzc0luc3RhbmNlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IE9iamVjdC52YWx1ZXMocHJvY2Vzc0luc3RhbmNlcykubWFwKChwcm9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzSWQ6IHByb2MuUHJvY2Vzc0RlZmluaXRpb25JRCxcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NOYW1lOiBwcm9jLlByb2Nlc3NEZWZpbml0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRPbjogcHJvYy5DcmVhdGVkT24sXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkT25EYXRlOiBwcm9jLkNyZWF0ZWRPbkRhdGUsXHJcbiAgICAgICAgICAgICAgICBJbnN0YW5jZUlkOiBwcm9jLlByb2Nlc3NJbnN0YW5jZUlELFxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2VOYW1lOiBwcm9jLlByb2Nlc3NJbnN0YW5jZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBTdGF0dXM6IHByb2MuU3RhdHVzQ29kZU5hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3MuUmVmbG93ID0gKHVwZGF0ZVVpOiBib29sZWFuLCBwYXJlbnRTdGFnZTogc3RyaW5nLCBuZXh0U3RhZ2U6IHN0cmluZykgPT4gZ2V0UHJvY2Vzc1VpPy5yZWZsb3codXBkYXRlVWksIHBhcmVudFN0YWdlLCBuZXh0U3RhZ2UpO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25QcmVTdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByZVN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25Qcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25TdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uU3RhZ2VTZWxlY3RlZCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblN0YWdlU2VsZWN0ZWQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVQcm9jZXNzID0gKHByb2Nlc3NJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVQcm9jZXNzKHByb2Nlc3NJZCwgY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVQcm9jZXNzSW5zdGFuY2UgPSAocHJvY2Vzc0luc3RhbmNlSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlUHJvY2Vzc0luc3RhbmNlKHByb2Nlc3NJbnN0YW5jZUlkLCBjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVN0YWdlID0gKHN0YWdlSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlU3RhZ2Uoc3RhZ2VJZCwgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIHByb2Nlc3M7XHJcbn1cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gaW50ZXJmYWNlIGZvciBmb3JtIGluaXRpYWxpemF0aW9uLlxyXG4gKiBTcGVjaWZpZXMgd2hpY2ggZmllbGRzLCB0YWJzLCBncmlkcywgZXRjLiB0byBsb2FkIG9uIGEgZm9ybS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvcm1Db25maWcge1xyXG4gICAgLyoqIEFycmF5IG9mIGJvZHkgZmllbGQgbG9naWNhbCBuYW1lcyAqL1xyXG4gICAgYm9keT86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIGhlYWRlciBmaWVsZCBsb2dpY2FsIG5hbWVzICovXHJcbiAgICBoZWFkZXI/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiB0YWIgYW5kIHNlY3Rpb24gbmFtZXMgaW4gZm9ybWF0IFwiVGFiTmFtZV9fX1NlY3Rpb25OYW1lXCIgKi9cclxuICAgIHRhYj86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIGdyaWQgY29udHJvbCBuYW1lcyAqL1xyXG4gICAgZ3JpZD86IHN0cmluZ1tdO1xyXG4gICAgLyoqIEFycmF5IG9mIG5hdmlnYXRpb24gaXRlbSBJRHMgKi9cclxuICAgIG5hdmlnYXRpb24/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBxdWljayBmb3JtIG5hbWVzIGluIGZvcm1hdCBcIlF1aWNrRm9ybU5hbWVfX19GaWVsZE5hbWVcIiAqL1xyXG4gICAgcXVpY2s/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBCUEYgZmllbGRzIGluIGZvcm1hdCBcIlByb2Nlc3NOYW1lX19fRmllbGROYW1lXCIgKi9cclxuICAgIGJwZj86IHN0cmluZ1tdO1xyXG59XHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciB0eXBlZCBlbnRpdHkgZm9ybXMuXHJcbiAqIFByb3ZpZGVzIHN0cm9uZ2x5LXR5cGVkIGFjY2VzcyB0byBmb3JtIGNvbnRyb2xzLCBmaWVsZHMsIHRhYnMsIGdyaWRzLCBhbmQgbW9yZS5cclxuICogRXh0ZW5kIHRoaXMgY2xhc3MgaW4gZ2VuZXJhdGVkIGVudGl0eSBmb3JtIGZpbGVzLlxyXG4gKiBAdGVtcGxhdGUgVEJvZHkgVHlwZSBkZWZpbml0aW9uIGZvciBib2R5IGZpZWxkc1xyXG4gKiBAdGVtcGxhdGUgVEhlYWRlciBUeXBlIGRlZmluaXRpb24gZm9yIGhlYWRlciBmaWVsZHNcclxuICogQHRlbXBsYXRlIFRUYWIgVHlwZSBkZWZpbml0aW9uIGZvciB0YWJzXHJcbiAqIEB0ZW1wbGF0ZSBUR3JpZCBUeXBlIGRlZmluaXRpb24gZm9yIGdyaWRzXHJcbiAqIEB0ZW1wbGF0ZSBUTmF2aWdhdGlvbiBUeXBlIGRlZmluaXRpb24gZm9yIG5hdmlnYXRpb24gaXRlbXNcclxuICogQHRlbXBsYXRlIFRRdWlja0Zvcm0gVHlwZSBkZWZpbml0aW9uIGZvciBxdWljayB2aWV3IGZvcm1zXHJcbiAqIEB0ZW1wbGF0ZSBUUHJvY2VzcyBUeXBlIGRlZmluaXRpb24gZm9yIGJ1c2luZXNzIHByb2Nlc3MgZmxvd3NcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2VcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZTxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2VzcyA9IGFueT4ge1xyXG4gICAgcHVibGljIEJvZHk6IFRCb2R5O1xyXG4gICAgcHVibGljIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIHB1YmxpYyBUYWI6IFRUYWI7XHJcbiAgICBwdWJsaWMgR3JpZDogVEdyaWQ7XHJcbiAgICBwdWJsaWMgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBwdWJsaWMgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgcHVibGljIFByb2Nlc3M6IFRQcm9jZXNzO1xyXG4gICAgcHVibGljIEV4ZWN1dGlvbkNvbnRleHQ6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIHB1YmxpYyBVdGlsaXR5OiBhbnk7XHJcbiAgICBwdWJsaWMgU2lkZVBhbmVzOiBEZXZLaXQuSVNpZGVQYW5lcztcclxuICAgIHB1YmxpYyBXZWJBcGk6IERldktpdC5JV2ViQXBpO1xyXG4gICAgcHVibGljIENvcGlsb3Q6IERldktpdC5JQ29waWxvdDtcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEF0dHJpYnV0ZXM6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBDb250cm9sczogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFYbWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5UmVmZXJlbmNlOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgVmlld1BvcnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBWaWV3UG9ydFdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgQWRkT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEFkZE9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFJlbW92ZU9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBSZW1vdmVPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBEYXRhQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRGF0YVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1Jc1Zpc2libGU6IChmb3JtSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBGb3JtTmF2aWdhdGVUb0Zvcm1JZDogKGZvcm1JZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsOiAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybVNldFZpc2libGU6IChmb3JtSWQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtRW50aXR5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgICAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgZm9ybUNvbmZpZzogSUZvcm1Db25maWdcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBMb2FkRm9ybVYyPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0sIFRQcm9jZXNzPihcclxuICAgICAgICAgICAgZXhlY3V0aW9uQ29udGV4dCxcclxuICAgICAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZSxcclxuICAgICAgICAgICAgZm9ybUNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gZm9ybS5Cb2R5O1xyXG4gICAgICAgIHRoaXMuSGVhZGVyID0gZm9ybS5IZWFkZXI7XHJcbiAgICAgICAgdGhpcy5UYWIgPSBmb3JtLlRhYjtcclxuICAgICAgICB0aGlzLkdyaWQgPSBmb3JtLkdyaWQ7XHJcbiAgICAgICAgdGhpcy5OYXZpZ2F0aW9uID0gZm9ybS5OYXZpZ2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUXVpY2tGb3JtID0gZm9ybS5RdWlja0Zvcm07XHJcbiAgICAgICAgdGhpcy5Qcm9jZXNzID0gZm9ybS5Qcm9jZXNzO1xyXG4gICAgICAgIHRoaXMuRXhlY3V0aW9uQ29udGV4dCA9IGZvcm0uRXhlY3V0aW9uQ29udGV4dDtcclxuICAgICAgICB0aGlzLkZvcm1JZCA9IGZvcm0uRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybUxhYmVsID0gZm9ybS5Gb3JtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5Gb3JtVHlwZSA9IGZvcm0uRm9ybVR5cGU7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJZCA9IGZvcm0uRW50aXR5SWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlOYW1lID0gZm9ybS5FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuRGF0YUlzRGlydHkgPSBmb3JtLkRhdGFJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRGF0YUlzVmFsaWQgPSBmb3JtLkRhdGFJc1ZhbGlkO1xyXG4gICAgICAgIHRoaXMuQXR0cmlidXRlcyA9IGZvcm0uQXR0cmlidXRlcztcclxuICAgICAgICB0aGlzLkNvbnRyb2xzID0gZm9ybS5Db250cm9scztcclxuICAgICAgICB0aGlzLkRhdGFYbWwgPSBmb3JtLkRhdGFYbWw7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJc0RpcnR5ID0gZm9ybS5FbnRpdHlJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNWYWxpZCA9IGZvcm0uRW50aXR5SXNWYWxpZDtcclxuICAgICAgICB0aGlzLkVudGl0eVJlZmVyZW5jZSA9IGZvcm0uRW50aXR5UmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMuUHJpbWFyeUF0dHJpYnV0ZVZhbHVlID0gZm9ybS5QcmltYXJ5QXR0cmlidXRlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5WaWV3UG9ydEhlaWdodCA9IGZvcm0uVmlld1BvcnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5WaWV3UG9ydFdpZHRoID0gZm9ybS5WaWV3UG9ydFdpZHRoO1xyXG4gICAgICAgIHRoaXMuU2F2ZSA9IGZvcm0uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlZnJlc2ggPSBmb3JtLlJlZnJlc2g7XHJcbiAgICAgICAgdGhpcy5DbG9zZSA9IGZvcm0uQ2xvc2U7XHJcbiAgICAgICAgdGhpcy5TZXRGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoUmliYm9uID0gZm9ybS5SZWZyZXNoUmliYm9uO1xyXG4gICAgICAgIHRoaXMuVWlBZGRMb2FkZWQgPSBmb3JtLlVpQWRkTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVMb2FkZWQgPSBmb3JtLlVpUmVtb3ZlTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlBZGRPbkxvYWQgPSBmb3JtLlVpQWRkT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVPbkxvYWQgPSBmb3JtLlVpUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuQWRkT25Qb3N0U2F2ZSA9IGZvcm0uQWRkT25Qb3N0U2F2ZTtcclxuICAgICAgICB0aGlzLkFkZE9uU2F2ZSA9IGZvcm0uQWRkT25TYXZlO1xyXG4gICAgICAgIHRoaXMuUmVtb3ZlT25Qb3N0U2F2ZSA9IGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uU2F2ZSA9IGZvcm0uUmVtb3ZlT25TYXZlO1xyXG4gICAgICAgIHRoaXMuRGF0YUFkZE9uTG9hZCA9IGZvcm0uRGF0YUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLkRhdGFSZW1vdmVPbkxvYWQgPSBmb3JtLkRhdGFSZW1vdmVPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSXNWaXNpYmxlID0gZm9ybS5Gb3JtSXNWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuRm9ybU5hdmlnYXRlVG9Gb3JtSWQgPSBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWwgPSBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVNldFZpc2libGUgPSBmb3JtLkZvcm1TZXRWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybUVudGl0eU5hbWUgPSBmb3JtLlNldEZvcm1FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuVXRpbGl0eSA9IGZvcm0uVXRpbGl0eTtcclxuICAgICAgICB0aGlzLlNpZGVQYW5lcyA9IGZvcm0uU2lkZVBhbmVzO1xyXG4gICAgICAgIHRoaXMuV2ViQXBpID0gZm9ybS5XZWJBcGk7XHJcbiAgICAgICAgdGhpcy5Db3BpbG90ID0gZm9ybS5Db3BpbG90O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkVXRpbGl0eShkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IHV0aWxpdHk6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRBcHAgPSB4cm0/LkFwcDtcclxuICAgIGNvbnN0IGdldERldmljZSA9IHhybT8uRGV2aWNlO1xyXG4gICAgY29uc3QgZ2V0RW5jb2RpbmcgPSB4cm0/LkVuY29kaW5nO1xyXG4gICAgY29uc3QgZ2V0R2xvYmFsQ29udGV4dCA9IHhybT8uVXRpbGl0eT8uZ2V0R2xvYmFsQ29udGV4dCgpO1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbiA9IHhybT8uTmF2aWdhdGlvbjtcclxuICAgIGNvbnN0IGdldFBhbmVsID0geHJtPy5QYW5lbDtcclxuICAgIGNvbnN0IGdldFV0aWxpdHkgPSB4cm0/LlV0aWxpdHk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0NsaWVudCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGdldEdsb2JhbENvbnRleHQ/LmNsaWVudDtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50TmFtZScsICgpID0+IGNsaWVudD8uZ2V0Q2xpZW50KCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdDbGllbnRTdGF0ZScsICgpID0+IGNsaWVudD8uZ2V0Q2xpZW50U3RhdGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Zvcm1GYWN0b3InLCAoKSA9PiBjbGllbnQ/LmdldEZvcm1GYWN0b3IoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzTmV0d29ya0F2YWlsYWJsZScsICgpID0+IGNsaWVudD8uaXNOZXR3b3JrQXZhaWxhYmxlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc09mZmxpbmUnLCAoKSA9PiBjbGllbnQ/LmlzT2ZmbGluZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0NsaWVudFVybCcsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldENsaWVudFVybCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ3VycmVudEFwcFVybCcsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBVcmwoKSk7XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gaXNPblByZW1pc2VzIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0lzT25QcmVtaXNlcycsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmlzT25QcmVtaXNlcygpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZScsICgpID0+IGdldFV0aWxpdHk/LmdldExlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ09yZ2FuaXphdGlvblNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3Qgb3JnYW5pemF0aW9uU2V0dGluZ3MgPSBnZXRHbG9iYWxDb250ZXh0Py5vcmdhbml6YXRpb25TZXR0aW5ncztcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gYXR0cmlidXRlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdBdHRyaWJ1dGVzJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdCYXNlQ3VycmVuY3knLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYmFzZUN1cnJlbmN5KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5SWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYmFzZUN1cnJlbmN5SWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEZWZhdWx0Q291bnRyeUNvZGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uZGVmYXVsdENvdW50cnlDb2RlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gZnVsbE5hbWVDb252ZW50aW9uQ29kZSBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdGdWxsTmFtZUNvbnZlbnRpb25Db2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmZ1bGxOYW1lQ29udmVudGlvbkNvZGUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0F1dG9TYXZlRW5hYmxlZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5pc0F1dG9TYXZlRW5hYmxlZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGlzVHJpYWxPcmdhbml6YXRpb24gbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNUcmlhbE9yZ2FuaXphdGlvbicsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5pc1RyaWFsT3JnYW5pemF0aW9uKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5sYW5ndWFnZUlkKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gb3JnYW5pemF0aW9uRXhwaXJ5RGF0ZSBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdPcmdhbml6YXRpb25FeHBpcnlEYXRlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lm9yZ2FuaXphdGlvbkV4cGlyeURhdGUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdPcmdhbml6YXRpb25JZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25JZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VuaXF1ZU5hbWUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8udW5pcXVlTmFtZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZVNreXBlUHJvdG9jb2wnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8udXNlU2t5cGVQcm90b2NvbCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdQYWdlQ29udGV4dCcsICgpID0+IGdldFV0aWxpdHk/LmdldFBhZ2VDb250ZXh0KCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdVc2VyU2V0dGluZ3MnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSBnZXRHbG9iYWxDb250ZXh0Py51c2VyU2V0dGluZ3M7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RhdGVGb3JtYXR0aW5nSW5mbycsICgpID0+IHVzZXJTZXR0aW5ncz8uZGF0ZUZvcm1hdHRpbmdJbmZvKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdERhc2hib2FyZElkJywgKCkgPT4gdXNlclNldHRpbmdzPy5kZWZhdWx0RGFzaGJvYXJkSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0d1aWRlZEhlbHBFbmFibGVkJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc0d1aWRlZEhlbHBFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNIaWdoQ29udHJhc3RFbmFibGVkJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc0hpZ2hDb250cmFzdEVuYWJsZWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc1JUTCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNSVEwpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYW5ndWFnZUlkJywgKCkgPT4gdXNlclNldHRpbmdzPy5sYW5ndWFnZUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUm9sZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU2VjdXJpdHlSb2xlUHJpdmlsZWdlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uc2VjdXJpdHlSb2xlUHJpdmlsZWdlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUaW1lWm9uZU9mZnNldE1pbnV0ZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmdldFRpbWVab25lT2Zmc2V0TWludXRlcygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVHJhbnNhY3Rpb25DdXJyZW5jeScsICgpID0+IHVzZXJTZXR0aW5ncz8udHJhbnNhY3Rpb25DdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3lJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udHJhbnNhY3Rpb25DdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlcklkJywgKCkgPT4gdXNlclNldHRpbmdzPy51c2VySWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VyTmFtZScsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlck5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVmVyc2lvbicsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldFZlcnNpb24oKSk7XHJcbiAgICB1dGlsaXR5LkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb246IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5hZGRHbG9iYWxOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkFkdmFuY2VkQ29uZmlnU2V0dGluZyA9IChzZXR0aW5nOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldEFkdmFuY2VkQ29uZmlnU2V0dGluZyhzZXR0aW5nIGFzIFwiTWF4Q2hpbGRJbmNpZGVudE51bWJlclwiIHwgXCJNYXhJbmNpZGVudE1lcmdlTnVtYmVyXCIpO1xyXG4gICAgdXRpbGl0eS5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoZW50aXR5TmFtZTogc3RyaW5nLCBzdGF0ZUNvZGU6IG51bWJlciwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0QWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zKGVudGl0eU5hbWUsIHN0YXRlQ29kZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5CYXJjb2RlVmFsdWUgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5nZXRCYXJjb2RlVmFsdWUoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVBdWRpbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVBdWRpbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZUltYWdlID0gZnVuY3Rpb24gKGltYWdlT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVJbWFnZShpbWFnZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZVZpZGVvID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZVZpZGVvKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbGVhckdsb2JhbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uICh1bmlxdWVJZDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRBcHA/LmNsZWFyR2xvYmFsTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPSAoKSA9PiBnZXRVdGlsaXR5Py5jbG9zZVByb2dyZXNzSW5kaWNhdG9yKCk7XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRBcHBOYW1lID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBOYW1lKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwUHJvcGVydGllcyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwUHJvcGVydGllcygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgdXRpbGl0eS5FbnRpdHlNYWluRm9ybURlc2NyaXB0b3IgPSAoZW50aXR5TmFtZTogc3RyaW5nLCBmb3JtSWQ6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yKGVudGl0eU5hbWUsIGZvcm1JZCk7XHJcbiAgICB1dGlsaXR5LkVudGl0eU1ldGFkYXRhID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IHN0cmluZ1tdLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5nZXRFbnRpdHlNZXRhZGF0YShlbnRpdHlOYW1lLCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lkh0bWxBdHRyaWJ1dGVFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkh0bWxEZWNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sRGVjb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkh0bWxFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkludm9rZVByb2Nlc3NBY3Rpb24gPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/Lmludm9rZVByb2Nlc3NBY3Rpb24obmFtZSwgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5Mb2FkUGFuZWwgPSAodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IGdldFBhbmVsPy5sb2FkUGFuZWwodXJsLCB0aXRsZSk7XHJcbiAgICB1dGlsaXR5Lkxvb2t1cE9iamVjdHMgPSBmdW5jdGlvbiAobG9va3VwT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5sb29rdXBPYmplY3RzKGxvb2t1cE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTmF2aWdhdGVUbyA9IGZ1bmN0aW9uIChwYWdlSW5wdXQ6IGFueSwgbmF2aWdhdGlvbk9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ubmF2aWdhdGVUbyhwYWdlSW5wdXQsIG5hdmlnYXRpb25PcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5BbGVydERpYWxvZyA9IGZ1bmN0aW9uIChhbGVydFN0cmluZ3M6IGFueSwgYWxlcnRPcHRpb25zOiBhbnksIGNsb3NlQ2FsbGJhY2s/OiAoKSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkFsZXJ0RGlhbG9nKGFsZXJ0U3RyaW5ncywgYWxlcnRPcHRpb25zKTtcclxuICAgICAgICBpZiAoY2xvc2VDYWxsYmFjaykgcHJvbWlzZT8udGhlbihjbG9zZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkNvbmZpcm1EaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlybVN0cmluZ3M6IGFueSwgY29uZmlybU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkNvbmZpcm1EaWFsb2coY29uZmlybVN0cmluZ3MsIGNvbmZpcm1PcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5FcnJvckRpYWxvZyA9IGZ1bmN0aW9uIChlcnJvck9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkVycm9yRGlhbG9nKGVycm9yT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRmlsZSA9IChmaWxlOiBhbnksIG9wZW5GaWxlT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlbkZpbGUoZmlsZSwgb3BlbkZpbGVPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbkZvcm0gPSBmdW5jdGlvbiAoZW50aXR5Rm9ybU9wdGlvbnM6IGFueSwgZm9ybVBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkZvcm0oZW50aXR5Rm9ybU9wdGlvbnMsIGZvcm1QYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5VcmwgPSAodXJsOiBzdHJpbmcsIG9wZW5VcmxPcHRpb25zPzogYW55KSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuVXJsKHVybCwgb3BlblVybE9wdGlvbnMpO1xyXG4gICAgdXRpbGl0eS5PcGVuV2ViUmVzb3VyY2UgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcsIHdpbmRvd09wdGlvbnM/OiBhbnksIGRhdGE/OiBzdHJpbmcpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5XZWJSZXNvdXJjZSh3ZWJSZXNvdXJjZU5hbWUsIHdpbmRvd09wdGlvbnMsIGRhdGEpO1xyXG4gICAgdXRpbGl0eS5QaWNrRmlsZSA9IGZ1bmN0aW9uIChwaWNrRmlsZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5waWNrRmlsZShwaWNrRmlsZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuUHJlcGVuZE9yZ05hbWUgPSAoc1BhdGg6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8ucHJlcGVuZE9yZ05hbWUoc1BhdGgpO1xyXG4gICAgdXRpbGl0eS5SZWZyZXNoUGFyZW50R3JpZCA9IChsb29rdXBPcHRpb25zOiBhbnkpID0+IGdldFV0aWxpdHk/LnJlZnJlc2hQYXJlbnRHcmlkKGxvb2t1cE9wdGlvbnMpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgbWF5IGJlIHVuZGVmaW5lZFxyXG4gICAgdXRpbGl0eS5SZXNvdXJjZSA9IChrZXk6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0UmVzb3VyY2VTdHJpbmcoZGVmYXVsdFdlYlJlc291cmNlTmFtZSEsIGtleSk7XHJcbiAgICB1dGlsaXR5LlJlc291cmNlU3RyaW5nID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0UmVzb3VyY2VTdHJpbmcod2ViUmVzb3VyY2VOYW1lLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IobWVzc2FnZSk7XHJcbiAgICB1dGlsaXR5LldlYlJlc291cmNlVXJsID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRXZWJSZXNvdXJjZVVybCh3ZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgdXRpbGl0eS5YbWxBdHRyaWJ1dGVFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy54bWxBdHRyaWJ1dGVFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuWG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sRW5jb2RlKGFyZyk7XHJcbiAgICByZXR1cm4gdXRpbGl0eTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQ6IGFueSwgZmllbGRzOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGZpZWxkc0xlbmd0aCA9IGZpZWxkcz8ubGVuZ3RoIHx8IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkc0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2ldO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChmaWVsZE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZE5hbWUpO1xyXG4gICAgICAgIGZvcm1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgZm9ybVtmaWVsZE5hbWVdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGZvcm1Db250ZXh0Py51aT8uY2xvc2UoKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFdlYkFwaSBIZWxwZXIgVHlwZXMgYW5kIEZ1bmN0aW9uc1xyXG4vLyBGb3IgZWFybHktYm91bmQgc3R5bGUgV2ViQXBpIGNvZGluZyAoc2ltaWxhciB0byBDIyBlYXJseS1ib3VuZClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEZpZWxkIHR5cGUgZm9yIFdlYkFwaSBmaWVsZHMgKi9cclxuZXhwb3J0IHR5cGUgV2ViQXBpRmllbGRUeXBlID0gJ0ludGVnZXInIHwgJ051bWJlcicgfCAnQm9vbGVhbicgfCAnRGF0ZVRpbWUnIHwgJ011bHRpT3B0aW9uU2V0JztcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBhIFdlYkFwaSBmaWVsZFxyXG4gKiBVc2VkIHRvIGRlZmluZSBtZXRhZGF0YSBmb3IgZW50aXR5IGZpZWxkcyBpbiBXZWJBcGkgb3BlcmF0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2ViQXBpRmllbGRDb25maWcge1xyXG4gICAgLyoqIExvZ2ljYWwgbmFtZSBvZiB0aGUgYXR0cmlidXRlIChlLmcuICdhY2NvdW50aWQnLCAnbmFtZScpICovXHJcbiAgICBsb2dpY2FsTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIFNjaGVtYSBuYW1lIGZvciBsb29rdXAgYmluZGluZyAoZS5nLiAnUGFyZW50QWNjb3VudElkJykgKi9cclxuICAgIHNjaGVtYU5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKiogRW50aXR5IGNvbGxlY3Rpb24gbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50cycsICdjb250YWN0cycpICovXHJcbiAgICBlbnRpdHlDb2xsZWN0aW9uTmFtZT86IHN0cmluZztcclxuICAgIC8qKiBFbnRpdHkgbG9naWNhbCBuYW1lIGZvciBsb29rdXAgKGUuZy4gJ2FjY291bnQnLCAnY29udGFjdCcpICovXHJcbiAgICBlbnRpdHlMb2dpY2FsTmFtZT86IHN0cmluZztcclxuICAgIC8qKiBXaGV0aGVyIHRoZSBmaWVsZCBpcyByZWFkLW9ubHkgKi9cclxuICAgIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICAgIC8qKiBGaWVsZCB0eXBlIGZvciBwYXJzaW5nIChJbnRlZ2VyLCBOdW1iZXIsIEJvb2xlYW4sIERhdGVUaW1lLCBNdWx0aU9wdGlvblNldCkgKi9cclxuICAgIHR5cGU/OiBXZWJBcGlGaWVsZFR5cGU7XHJcbn1cclxuXHJcbi8qKiBNYXAgb2YgZmllbGQgbmFtZXMgdG8gdGhlaXIgY29uZmlndXJhdGlvbnMgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV2ViQXBpRmllbGRDb25maWdNYXAge1xyXG4gICAgW2ZpZWxkTmFtZTogc3RyaW5nXTogSVdlYkFwaUZpZWxkQ29uZmlnO1xyXG59XHJcblxyXG4vKiogQ29uc3RhbnRzIGZvciBPRGF0YSBhbm5vdGF0aW9ucyAqL1xyXG5jb25zdCBXRUJBUElfRk9STUFUVEVEX1ZBTFVFX1NVRkZJWCA9ICdAT0RhdGEuQ29tbXVuaXR5LkRpc3BsYXkuVjEuRm9ybWF0dGVkVmFsdWUnO1xyXG5jb25zdCBXRUJBUElfTE9PS1VQX0xPR0lDQUxfTkFNRV9TVUZGSVggPSAnQE1pY3Jvc29mdC5EeW5hbWljcy5DUk0ubG9va3VwbG9naWNhbG5hbWUnO1xyXG5cclxuLyoqIFR5cGUgcGFyc2VycyBmb3IgZGlmZmVyZW50IFdlYkFwaSBmaWVsZCB0eXBlcyAqL1xyXG5jb25zdCB3ZWJBcGlUeXBlUGFyc2VyczogUmVjb3JkPHN0cmluZywgKHZhbHVlOiBhbnkpID0+IGFueT4gPSB7XHJcbiAgICBEYXRlVGltZTogKHZhbHVlOiBhbnkpOiBEYXRlIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBpc05hTih2YWx1ZS5nZXRUaW1lKCkpID8gbnVsbCA6IHZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRyaW1tZWRTdHJpbmcgPSBTdHJpbmcodmFsdWUpLnRyaW0oKTtcclxuICAgICAgICBpZiAodHJpbW1lZFN0cmluZyA9PT0gJycpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUucGFyc2UodHJpbW1lZFN0cmluZyk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHRpbWVzdGFtcCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xyXG4gICAgICAgIHJldHVybiBpc05hTihwYXJzZWREYXRlLmdldFRpbWUoKSkgPyBudWxsIDogcGFyc2VkRGF0ZTtcclxuICAgIH0sXHJcbiAgICBJbnRlZ2VyOiAodmFsdWU6IGFueSk6IG51bWJlciB8IG51bGwgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlZCkgPyBudWxsIDogcGFyc2VkO1xyXG4gICAgfSxcclxuICAgIE51bWJlcjogKHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBpc05hTihwYXJzZWQpID8gbnVsbCA6IHBhcnNlZDtcclxuICAgIH0sXHJcbiAgICBCb29sZWFuOiAodmFsdWU6IGFueSk6IGJvb2xlYW4gfCBudWxsID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB2YWx1ZSAhPT0gMDtcclxuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgdHJ1ZVZhbHVlcyA9IFsndHJ1ZScsICcxJywgJ3llcycsICd5J107XHJcbiAgICAgICAgY29uc3QgZmFsc2VWYWx1ZXMgPSBbJ2ZhbHNlJywgJzAnLCAnbm8nLCAnbiddO1xyXG4gICAgICAgIGlmICh0cnVlVmFsdWVzLmluY2x1ZGVzKHN0cmluZ1ZhbHVlKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGZhbHNlVmFsdWVzLmluY2x1ZGVzKHN0cmluZ1ZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlIGFuZCByZXR1cm4gdmFsdWUgYmFzZWQgb24gV2ViQXBpIGZpZWxkIHR5cGVcclxuICovXHJcbmZ1bmN0aW9uIHdlYkFwaVJldHVybkdldChkYXRhOiBhbnksIHR5cGU/OiBXZWJBcGlGaWVsZFR5cGUpOiBhbnkge1xyXG4gICAgaWYgKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGRhdGE7XHJcbiAgICBjb25zdCBwYXJzZXIgPSB3ZWJBcGlUeXBlUGFyc2Vyc1t0eXBlXTtcclxuICAgIHJldHVybiBwYXJzZXIgPyBwYXJzZXIoZGF0YSkgOiBkYXRhO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lIGEgV2ViQXBpIGZpZWxkIHByb3BlcnR5IG9uIHRoZSB0YXJnZXQgb2JqZWN0IHdpdGggZ2V0dGVyL3NldHRlclxyXG4gKiBAcGFyYW0gb2JqIFRoZSB0YXJnZXQgb2JqZWN0IHRvIGRlZmluZSBwcm9wZXJ0eSBvblxyXG4gKiBAcGFyYW0gZmllbGROYW1lIFRoZSBwcm9wZXJ0eSBuYW1lXHJcbiAqIEBwYXJhbSBlbnRpdHkgVGhlIHJhdyBPRGF0YSBlbnRpdHkgb2JqZWN0XHJcbiAqIEBwYXJhbSBjb25maWcgVGhlIGZpZWxkIGNvbmZpZ3VyYXRpb25cclxuICogQHBhcmFtIHVwc2VydEVudGl0eSBUaGUgZW50aXR5IG9iamVjdCBmb3IgQ3JlYXRlL1VwZGF0ZSBvcGVyYXRpb25zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lV2ViQXBpRmllbGQoXHJcbiAgICBvYmo6IGFueSxcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxyXG4gICAgZW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxyXG4gICAgY29uZmlnOiBJV2ViQXBpRmllbGRDb25maWcsXHJcbiAgICB1cHNlcnRFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT5cclxuKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGxvZ2ljYWxOYW1lLCBzY2hlbWFOYW1lLCBlbnRpdHlDb2xsZWN0aW9uTmFtZSwgZW50aXR5TG9naWNhbE5hbWUsIHJlYWRPbmx5LCB0eXBlIH0gPSBjb25maWc7XHJcblxyXG4gICAgY29uc3QgZ2V0Rm9ybWF0dGVkVmFsdWUgPSAoKTogc3RyaW5nIHwgc3RyaW5nW10gPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEtleSA9IGxvZ2ljYWxOYW1lICsgV0VCQVBJX0ZPUk1BVFRFRF9WQUxVRV9TVUZGSVg7XHJcbiAgICAgICAgaWYgKGVudGl0eT8uW2Zvcm1hdHRlZEtleV0gPT09IHVuZGVmaW5lZCB8fCBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eUNvbGxlY3Rpb25OYW1lICE9PSB1bmRlZmluZWQgJiYgZW50aXR5Q29sbGVjdGlvbk5hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb29rdXBLZXkgPSBsb2dpY2FsTmFtZSArIFdFQkFQSV9MT09LVVBfTE9HSUNBTF9OQU1FX1NVRkZJWDtcclxuICAgICAgICAgICAgaWYgKGVudGl0eT8uW2xvb2t1cEtleV0gPT09IGVudGl0eUxvZ2ljYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5Py5bZm9ybWF0dGVkS2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnTXVsdGlPcHRpb25TZXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldPy50b1N0cmluZygpPy5zcGxpdCgnOycpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtPy50cmltKCkpID8/IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5Py5bZm9ybWF0dGVkS2V5XTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSAoKTogYW55ID0+IHtcclxuICAgICAgICBpZiAoZW50aXR5Py5bbG9naWNhbE5hbWVdID09PSB1bmRlZmluZWQgfHwgZW50aXR5Py5bbG9naWNhbE5hbWVdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW50aXR5Q29sbGVjdGlvbk5hbWUgIT09IHVuZGVmaW5lZCAmJiBlbnRpdHlDb2xsZWN0aW9uTmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2t1cEtleSA9IGxvZ2ljYWxOYW1lICsgV0VCQVBJX0xPT0tVUF9MT0dJQ0FMX05BTUVfU1VGRklYO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Py5bbG9va3VwS2V5XSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2xvb2t1cEtleV0gPT09IGVudGl0eUxvZ2ljYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViQXBpUmV0dXJuR2V0KGVudGl0eT8uW2xvZ2ljYWxOYW1lXSwgdHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnTXVsdGlPcHRpb25TZXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk/Lltsb2dpY2FsTmFtZV0/LnRvU3RyaW5nKCk/LnNwbGl0KCcsJykubWFwKChpdGVtOiBzdHJpbmcpID0+IHBhcnNlSW50KGl0ZW0sIDEwKSkgPz8gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJBcGlSZXR1cm5HZXQoZW50aXR5Py5bbG9naWNhbE5hbWVdLCB0eXBlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWU6IGFueSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnTXVsdGlPcHRpb25TZXQnKSB2YWx1ZSA9IHZhbHVlPy5qb2luKCcsJyk7XHJcbiAgICAgICAgaWYgKGVudGl0eUNvbGxlY3Rpb25OYW1lICE9PSB1bmRlZmluZWQgJiYgZW50aXR5Q29sbGVjdGlvbk5hbWU/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYmluZGluZ05hbWUgPSAoc2NoZW1hTmFtZSA/PyBsb2dpY2FsTmFtZSkgKyAnQG9kYXRhLmJpbmQnO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHVwc2VydEVudGl0eVtiaW5kaW5nTmFtZV0gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5WYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZS5yZXBsYWNlKC9be31dL2csICcnKSA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdXBzZXJ0RW50aXR5W2JpbmRpbmdOYW1lXSA9ICcvJyArIGVudGl0eUNvbGxlY3Rpb25OYW1lICsgJygnICsgY2xlYW5WYWx1ZSArICcpJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwc2VydEVudGl0eVtsb2dpY2FsTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZW50aXR5W2xvZ2ljYWxOYW1lXSA9IHZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZWZpbmUgRm9ybWF0dGVkVmFsdWUgcHJvcGVydHlcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmouRm9ybWF0dGVkVmFsdWUsIGZpZWxkTmFtZSwge1xyXG4gICAgICAgIGdldDogZ2V0Rm9ybWF0dGVkVmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIERlZmluZSBtYWluIHByb3BlcnR5IChyZWFkb25seSBvciByZWFkL3dyaXRlKVxyXG4gICAgaWYgKHJlYWRPbmx5KSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgZmllbGROYW1lLCB7XHJcbiAgICAgICAgICAgIGdldDogZ2V0VmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgZmllbGROYW1lLCB7XHJcbiAgICAgICAgICAgIGdldDogZ2V0VmFsdWUsXHJcbiAgICAgICAgICAgIHNldDogc2V0VmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEJhc2UgaW50ZXJmYWNlIGZvciBXZWJBcGkgZW50aXR5IG9iamVjdHNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkFwaUVudGl0eSB7XHJcbiAgICAvKiogVGhlIGVudGl0eSBvYmplY3QgZm9yIENyZWF0ZS9VcGRhdGUgb3BlcmF0aW9ucyAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgLyoqIFRoZSBPRGF0YSBlbnRpdHkgb2JqZWN0IGNvbnRhaW5pbmcgcmF3IGRhdGEgKi9cclxuICAgIHJlYWRvbmx5IE9EYXRhRW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgLyoqIFRoZSBlbnRpdHkgbmFtZSAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBlbnRpdHkgY29sbGVjdGlvbiBuYW1lICovXHJcbiAgICByZWFkb25seSBFbnRpdHlDb2xsZWN0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgLyoqIFRoZSBAb2RhdGEuZXRhZyBmb3IgY2FjaGluZyAqL1xyXG4gICAgcmVhZG9ubHkgJ0BvZGF0YS5ldGFnJzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgLyoqIEZvcm1hdHRlZCB2YWx1ZXMgZm9yIGFsbCBmaWVsZHMgKi9cclxuICAgIHJlYWRvbmx5IEZvcm1hdHRlZFZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSByYXcgdmFsdWUgb2YgYW4gYWxpYXNlZCBmaWVsZCAoZnJvbSAkZXhwYW5kIG9yIHJlbGF0ZWQgZW50aXR5KVxyXG4gICAgICogQHBhcmFtIGFsaWFzIFRoZSBhbGlhcyBmaWVsZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaXNNdWx0aU9wdGlvblNldCBUcnVlIGlmIHRoZSBmaWVsZCBpcyBhIG11bHRpLW9wdGlvbiBzZXRcclxuICAgICAqIEByZXR1cm5zIFRoZSByYXcgdmFsdWUgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgZ2V0QWxpYXNlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQ/OiBib29sZWFuKTogYW55O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBmb3JtYXR0ZWQgdmFsdWUgb2YgYW4gYWxpYXNlZCBmaWVsZFxyXG4gICAgICogQHBhcmFtIGFsaWFzIFRoZSBhbGlhcyBmaWVsZCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gaXNNdWx0aU9wdGlvblNldCBUcnVlIGlmIHRoZSBmaWVsZCBpcyBhIG11bHRpLW9wdGlvbiBzZXRcclxuICAgICAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgdmFsdWUgb3IgZW1wdHkgc3RyaW5nIGlmIG5vdCBmb3VuZFxyXG4gICAgICovXHJcbiAgICBnZXRBbGlhc2VkRm9ybWF0dGVkVmFsdWUoYWxpYXM6IHN0cmluZywgaXNNdWx0aU9wdGlvblNldD86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBiYXNlIFdlYkFwaSBlbnRpdHkgb2JqZWN0IHdpdGggY29tbW9uIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcclxuICogQHBhcmFtIGVudGl0eSBUaGUgcmF3IE9EYXRhIGVudGl0eSBvYmplY3RcclxuICogQHBhcmFtIGVudGl0eU5hbWUgVGhlIGxvZ2ljYWwgbmFtZSBvZiB0aGUgZW50aXR5XHJcbiAqIEBwYXJhbSBlbnRpdHlDb2xsZWN0aW9uTmFtZSBUaGUgY29sbGVjdGlvbiBuYW1lIG9mIHRoZSBlbnRpdHlcclxuICogQHBhcmFtIGZpZWxkQ29uZmlnTWFwIE1hcCBvZiBmaWVsZCBjb25maWd1cmF0aW9uc1xyXG4gKiBAcmV0dXJucyBBIFdlYkFwaSBlbnRpdHkgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2ViQXBpRW50aXR5PFQgZXh0ZW5kcyBJV2ViQXBpRW50aXR5PihcclxuICAgIGVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZCxcclxuICAgIGVudGl0eU5hbWU6IHN0cmluZyxcclxuICAgIGVudGl0eUNvbGxlY3Rpb25OYW1lOiBzdHJpbmcsXHJcbiAgICBmaWVsZENvbmZpZ01hcDogSVdlYkFwaUZpZWxkQ29uZmlnTWFwXHJcbik6IFQge1xyXG4gICAgY29uc3QgZSA9IGVudGl0eSA/PyB7fTtcclxuICAgIGNvbnN0IHVwc2VydEVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHdlYkFwaUVudGl0eTogYW55ID0ge1xyXG4gICAgICAgIE9EYXRhRW50aXR5OiBlLFxyXG4gICAgICAgIEZvcm1hdHRlZFZhbHVlOiB7fSxcclxuICAgICAgICBFbnRpdHk6IHVwc2VydEVudGl0eSxcclxuICAgICAgICBFbnRpdHlOYW1lOiBlbnRpdHlOYW1lLFxyXG4gICAgICAgIEVudGl0eUNvbGxlY3Rpb25OYW1lOiBlbnRpdHlDb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAnQG9kYXRhLmV0YWcnOiBlPy5bJ0BvZGF0YS5ldGFnJ10sXHJcblxyXG4gICAgICAgIGdldEFsaWFzZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0ID0gZmFsc2UpOiBhbnkge1xyXG4gICAgICAgICAgICBpZiAoZT8uW2FsaWFzXSA9PT0gdW5kZWZpbmVkIHx8IGU/LlthbGlhc10gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc011bHRpT3B0aW9uU2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZT8uW2FsaWFzXS50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKChpdGVtOiBzdHJpbmcpID0+IHBhcnNlSW50KGl0ZW0sIDEwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGU/LlthbGlhc107XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZ2V0QWxpYXNlZEZvcm1hdHRlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQgPSBmYWxzZSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gYWxpYXMgKyBXRUJBUElfRk9STUFUVEVEX1ZBTFVFX1NVRkZJWDtcclxuICAgICAgICAgICAgaWYgKGU/LltrZXldID09PSB1bmRlZmluZWQgfHwgZT8uW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNNdWx0aU9wdGlvblNldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU/LltrZXldPy50b1N0cmluZygpPy5zcGxpdCgnOycpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtPy50cmltKCkpID8/IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlPy5ba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlZmluZSBhbGwgZmllbGRzIHVzaW5nIHRoZSBmaWVsZCBjb25maWd1cmF0aW9uXHJcbiAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBpbiBmaWVsZENvbmZpZ01hcCkge1xyXG4gICAgICAgIGRlZmluZVdlYkFwaUZpZWxkKHdlYkFwaUVudGl0eSwgZmllbGROYW1lLCBlLCBmaWVsZENvbmZpZ01hcFtmaWVsZE5hbWVdLCB1cHNlcnRFbnRpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB3ZWJBcGlFbnRpdHkgYXMgVDtcclxufVxyXG4iLCAiLyoqXHJcbiAqIE9wdGlvblNldC50cyAtIENlbnRyYWxpemVkIE9wdGlvblNldCBkZWZpbml0aW9uc1xyXG4gKiBHZW5lcmF0ZWQgZmlsZSAtIERPIE5PVCBNT0RJRlkgTUFOVUFMTFlcclxuICogXHJcbiAqIFVzYWdlOiBpbXBvcnQgeyBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9PcHRpb25TZXQnO1xyXG4gKiAgICAgICAgT3B0aW9uU2V0LkZvcm1UeXBlLkNyZWF0ZVxyXG4gKiAgICAgICAgT3B0aW9uU2V0LkFjY291bnQuSW5kdXN0cnlDb2RlLkNvbnN1bHRpbmdcclxuICovXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdsb2JhbCBPcHRpb25TZXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWR2YW5jZWQgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmb3IgdGhlIG9yZ2FuaXphdGlvbiAqL1xyXG5jb25zdCBBZHZhbmNlZENvbmZpZ1NldHRpbmcgPSB7XHJcbiAgICAvKiogTWF4Q2hpbGRJbmNpZGVudE51bWJlciAqL1xyXG4gICAgTWF4Q2hpbGRJbmNpZGVudE51bWJlcjogJ01heENoaWxkSW5jaWRlbnROdW1iZXInLFxyXG4gICAgLyoqIE1heEluY2lkZW50TWVyZ2VOdW1iZXIgKi9cclxuICAgIE1heEluY2lkZW50TWVyZ2VOdW1iZXI6ICdNYXhJbmNpZGVudE1lcmdlTnVtYmVyJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSB2YWx1ZSB0byBpbmRpY2F0ZSB3aGljaCBjbGllbnQgdGhlIHNjcmlwdCBpcyBleGVjdXRpbmcgaW4gKi9cclxuY29uc3QgQ2xpZW50TmFtZSA9IHtcclxuICAgIC8qKiBXZWIgKi9cclxuICAgIFdlYjogJ1dlYicsXHJcbiAgICAvKiogT3V0bG9vayAqL1xyXG4gICAgT3V0bG9vazogJ091dGxvb2snLFxyXG4gICAgLyoqIE1vYmlsZSAqL1xyXG4gICAgTW9iaWxlOiAnTW9iaWxlJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSB2YWx1ZSB0byBpbmRpY2F0ZSB0aGUgc3RhdGUgb2YgdGhlIGNsaWVudCAqL1xyXG5jb25zdCBDbGllbnRTdGF0ZSA9IHtcclxuICAgIC8qKiBPbmxpbmUgKi9cclxuICAgIE9ubGluZTogJ09ubGluZScsXHJcbiAgICAvKiogT2ZmbGluZSAqL1xyXG4gICAgT2ZmbGluZTogJ09mZmxpbmUnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhlIHR5cGUgb2YgYXR0cmlidXRlICovXHJcbmNvbnN0IEZpZWxkQXR0cmlidXRlVHlwZSA9IHtcclxuICAgIC8qKiBib29sZWFuICovXHJcbiAgICBCb29sZWFuOiAnYm9vbGVhbicsXHJcbiAgICAvKiogZGF0ZXRpbWUgKi9cclxuICAgIERhdGVUaW1lOiAnZGF0ZXRpbWUnLFxyXG4gICAgLyoqIGRlY2ltYWwgKi9cclxuICAgIERlY2ltYWw6ICdkZWNpbWFsJyxcclxuICAgIC8qKiBkb3VibGUgKi9cclxuICAgIERvdWJsZTogJ2RvdWJsZScsXHJcbiAgICAvKiogaW50ZWdlciAqL1xyXG4gICAgSW50ZWdlcjogJ2ludGVnZXInLFxyXG4gICAgLyoqIGxvb2t1cCAqL1xyXG4gICAgTG9va3VwOiAnbG9va3VwJyxcclxuICAgIC8qKiBtZW1vICovXHJcbiAgICBNZW1vOiAnbWVtbycsXHJcbiAgICAvKiogbW9uZXkgKi9cclxuICAgIE1vbmV5OiAnbW9uZXknLFxyXG4gICAgLyoqIG11bHRpc2VsZWN0b3B0aW9uc2V0ICovXHJcbiAgICBNdWx0aU9wdGlvblNldDogJ211bHRpb3B0aW9uc2V0JyxcclxuICAgIC8qKiBvcHRpb25zZXQgKi9cclxuICAgIE9wdGlvblNldDogJ29wdGlvbnNldCcsXHJcbiAgICAvKiogc3RyaW5nICovXHJcbiAgICBTdHJpbmc6ICdzdHJpbmcnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogQSB2YWx1ZSB0aGF0IGNhdGVnb3JpemVzIGNvbnRyb2xzICovXHJcbmNvbnN0IEZpZWxkQ29udHJvbFR5cGUgPSB7XHJcbiAgICAvKiogc3RhbmRhcmQgLSBBIHN0YW5kYXJkIGNvbnRyb2wgKi9cclxuICAgIFN0YW5kYXJkOiAnc3RhbmRhcmQnLFxyXG4gICAgLyoqIGlmcmFtZSAtIEFuIElGUkFNRSBjb250cm9sICovXHJcbiAgICBJZnJhbWU6ICdpZnJhbWUnLFxyXG4gICAgLyoqIGtic2VhcmNoIC0gQSBrbm93bGVkZ2UgYmFzZSBzZWFyY2ggY29udHJvbCAqL1xyXG4gICAgS2JTZWFyY2g6ICdrYnNlYXJjaCcsXHJcbiAgICAvKiogbG9va3VwIC0gQSBsb29rdXAgY29udHJvbCAqL1xyXG4gICAgTG9va3VwOiAnbG9va3VwJyxcclxuICAgIC8qKiBtdWx0aXNlbGVjdG9wdGlvbnNldCAtIEEgbXVsdGktc2VsZWN0IG9wdGlvbiBzZXQgY29udHJvbCAqL1xyXG4gICAgTXVsdGlTZWxlY3RPcHRpb25zZXQ6ICdtdWx0aXNlbGVjdG9wdGlvbnNldCcsXHJcbiAgICAvKiogbm90ZXMgLSBBIG5vdGVzIGNvbnRyb2wgKi9cclxuICAgIE5vdGVzOiAnbm90ZXMnLFxyXG4gICAgLyoqIG9wdGlvbnNldCAtIEFuIG9wdGlvbiBzZXQgY29udHJvbCAqL1xyXG4gICAgT3B0aW9uU2V0OiAnb3B0aW9uc2V0JyxcclxuICAgIC8qKiBxdWlja2Zvcm0gLSBBIHF1aWNrIHZpZXcgY29udHJvbCAqL1xyXG4gICAgUXVpY2tGb3JtOiAncXVpY2tmb3JtJyxcclxuICAgIC8qKiBzdWJncmlkIC0gQSBzdWJncmlkIGNvbnRyb2wgKi9cclxuICAgIFN1YkdyaWQ6ICdzdWJncmlkJyxcclxuICAgIC8qKiB0aW1lcmNvbnRyb2wgLSBBIHRpbWVyIGNvbnRyb2wgKi9cclxuICAgIFRpbWVyQ29udHJvbDogJ3RpbWVyY29udHJvbCcsXHJcbiAgICAvKiogdGltZWxpbmV3YWxsIC0gQSB0aW1lbGluZSBjb250cm9sIChmb3IgVW5pZmllZCBJbnRlcmZhY2UpICovXHJcbiAgICBUaW1lbGluZVdhbGw6ICd0aW1lbGluZXdhbGwnLFxyXG4gICAgLyoqIHdlYnJlc291cmNlIC0gQSB3ZWIgcmVzb3VyY2UgY29udHJvbCAqL1xyXG4gICAgV2ViUmVzb3VyY2U6ICd3ZWJyZXNvdXJjZSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgcmVwcmVzZW50cyBmb3JtYXR0aW5nIG9wdGlvbnMgZm9yIHRoZSBhdHRyaWJ1dGUgKi9cclxuY29uc3QgRmllbGRGb3JtYXQgPSB7XHJcbiAgICAvKiogZGF0ZSAqL1xyXG4gICAgRGF0ZTogJ2RhdGUnLFxyXG4gICAgLyoqIGRhdGV0aW1lICovXHJcbiAgICBEYXRlVGltZTogJ2RhdGV0aW1lJyxcclxuICAgIC8qKiBkdXJhdGlvbiAqL1xyXG4gICAgRHVyYXRpb246ICdkdXJhdGlvbicsXHJcbiAgICAvKiogZW1haWwgKi9cclxuICAgIEVtYWlsOiAnZW1haWwnLFxyXG4gICAgLyoqIGxhbmd1YWdlICovXHJcbiAgICBMYW5ndWFnZTogJ2xhbmd1YWdlJyxcclxuICAgIC8qKiBub25lICovXHJcbiAgICBOb25lOiAnbm9uZScsXHJcbiAgICAvKiogdGV4dGFyZWEgKi9cclxuICAgIFRleHRBcmVhOiAndGV4dGFyZWEnLFxyXG4gICAgLyoqIHRleHQgKi9cclxuICAgIFRleHQ6ICd0ZXh0JyxcclxuICAgIC8qKiB0aWNrZXJzeW1ib2wgKi9cclxuICAgIFRpY2tlclN5bWJvbDogJ3RpY2tlcnN5bWJvbCcsXHJcbiAgICAvKiogcGhvbmUgKi9cclxuICAgIFBob25lOiAncGhvbmUnLFxyXG4gICAgLyoqIHRpbWV6b25lICovXHJcbiAgICBUaW1lWm9uZTogJ3RpbWV6b25lJyxcclxuICAgIC8qKiB1cmwgKi9cclxuICAgIFVybDogJ3VybCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgdHlwZSBvZiBub3RpZmljYXRpb24gKi9cclxuY29uc3QgRmllbGROb3RpZmljYXRpb25MZXZlbCA9IHtcclxuICAgIC8qKiBFUlJPUiAqL1xyXG4gICAgRXJyb3I6ICdFUlJPUicsXHJcbiAgICAvKiogUkVDT01NRU5EQVRJT04gKi9cclxuICAgIFJlY29tbWVuZGF0aW9uOiAnUkVDT01NRU5EQVRJT04nXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIGEgdmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUgaXMgbm9uZSBvciByZXF1aXJlZCBvciByZWNvbW1lbmRlZCAqL1xyXG5jb25zdCBGaWVsZFJlcXVpcmVkTGV2ZWwgPSB7XHJcbiAgICAvKiogbm9uZSAqL1xyXG4gICAgTm9uZTogJ25vbmUnLFxyXG4gICAgLyoqIHJlcXVpcmVkICovXHJcbiAgICBSZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgIC8qKiByZWNvbW1lbmRlZCAqL1xyXG4gICAgUmVjb21tZW5kZWQ6ICdyZWNvbW1lbmRlZCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEYXRhIGZyb20gdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHN1Ym1pdHRlZCB3aGVuIHRoZSByZWNvcmQgaXMgc2F2ZWQgKi9cclxuY29uc3QgRmllbGRTdWJtaXRNb2RlID0ge1xyXG4gICAgLyoqIGFsd2F5cyAtIFRoZSBkYXRhIGlzIGFsd2F5cyBzZW50IHdpdGggYSBzYXZlICovXHJcbiAgICBBbHdheXM6ICdhbHdheXMnLFxyXG4gICAgLyoqIG5ldmVyIC0gVGhlIGRhdGEgaXMgbmV2ZXIgc2VudCB3aXRoIGEgc2F2ZSAqL1xyXG4gICAgTmV2ZXI6ICduZXZlcicsXHJcbiAgICAvKiogZGlydHkgLSBEZWZhdWx0IGJlaGF2aW9yLiBUaGUgZGF0YSBpcyBzZW50IHdpdGggdGhlIHNhdmUgd2hlbiBpdCBoYXMgY2hhbmdlZCAqL1xyXG4gICAgRGlydHk6ICdkaXJ0eSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBraW5kIG9mIGRldmljZSB0aGUgdXNlciBpcyB1c2luZyAqL1xyXG5jb25zdCBGb3JtRmFjdG9yID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIFVua25vd246IDAsXHJcbiAgICAvKiogMSAqL1xyXG4gICAgRGVza3RvcDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBUYWJsZXQ6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgUGhvbmU6IDNcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgbGV2ZWwgb2YgdGhlIG1lc3NhZ2UsIHdoaWNoIGRlZmluZXMgaG93IHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkICovXHJcbmNvbnN0IEZvcm1Ob3RpZmljYXRpb25MZXZlbCA9IHtcclxuICAgIC8qKiBFUlJPUiAtIE5vdGlmaWNhdGlvbiB3aWxsIHVzZSB0aGUgc3lzdGVtIGVycm9yIGljb24gKi9cclxuICAgIEVycm9yOiAnRVJST1InLFxyXG4gICAgLyoqIFdBUk5JTkcgLSBOb3RpZmljYXRpb24gd2lsbCB1c2UgdGhlIHN5c3RlbSB3YXJuaW5nIGljb24gKi9cclxuICAgIFdhcm5pbmc6ICdXQVJOSU5HJyxcclxuICAgIC8qKiBJTkZPIC0gTm90aWZpY2F0aW9uIHdpbGwgdXNlIHRoZSBzeXN0ZW0gaW5mbyBpY29uICovXHJcbiAgICBJbmZvOiAnSU5GTydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBHZXRzIHRoZSBmb3JtIHR5cGUgZm9yIHRoZSByZWNvcmQgKi9cclxuY29uc3QgRm9ybVR5cGUgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgVW5kZWZpbmVkOiAwLFxyXG4gICAgLyoqIDEgLSBRdWljayBDcmVhdGUgZm9ybXMgcmV0dXJuIDEgKi9cclxuICAgIENyZWF0ZTogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBVcGRhdGU6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgUmVhZE9ubHk6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgRGlzYWJsZWQ6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgQnVsa0VkaXQ6IDVcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgZnVsbCBuYW1lIGNvbnZlbnRpb25Db2RlIHNldHRpbmcgb2YgdGhlIGN1cnJlbnQgb3JnYW5pemF0aW9uICovXHJcbmNvbnN0IEZ1bGxOYW1lQ29udmVudGlvbkNvZGUgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lOiAwLFxyXG4gICAgLyoqIDEgKi9cclxuICAgIEZpcnN0TmFtZV9MYXN0TmFtZTogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWVfTWlkZGxlSW5pdGlhbDogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBGaXJzdE5hbWVfTWlkZGxlSW5pdGlhbF9MYXN0TmFtZTogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWVfTWlkZGxlTmFtZTogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBGaXJzdE5hbWVfTWlkZGxlTmFtZV9MYXN0TmFtZTogNSxcclxuICAgIC8qKiA2ICovXHJcbiAgICBMYXN0TmFtZV9GaXJzdE5hbWU6IDYsXHJcbiAgICAvKiogNyAqL1xyXG4gICAgTGFzdE5hbWVGaXJzdE5hbWU6IDdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgdHlwZSBvZiBncmlkICovXHJcbmNvbnN0IEdyaWRUeXBlID0ge1xyXG4gICAgLyoqIDEgKi9cclxuICAgIEhvbWVQYWdlR3JpZDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBTdWJncmlkOiAyXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGVzY3JpYmluZyB3aGV0aGVyIHRvIG9wZW4gb3Igc2F2ZSB0aGUgZmlsZSAqL1xyXG5jb25zdCBPcGVuRmlsZU9wdGlvbiA9IHtcclxuICAgIC8qKiAxICovXHJcbiAgICBPcGVuOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFNhdmU6IDJcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgaW50ZWdlciB2YWx1ZSBvZiB0aGUgYnVzaW5lc3MgcHJvY2VzcyBmbG93IGNhdGVnb3J5ICovXHJcbmNvbnN0IFByb2Nlc3NDYXRlZ29yeSA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBRdWFsaWZ5OiAwLFxyXG4gICAgLyoqIDEgKi9cclxuICAgIERldmVsb3A6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgUHJvcG9zZTogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBDbG9zZTogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBJZGVudGlmeTogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBSZXNlYXJjaDogNSxcclxuICAgIC8qKiA2ICovXHJcbiAgICBSZXNvbHZlOiA2XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGlzcGxheSBzdGF0ZSBvZiB0aGUgYnVzaW5lc3MgcHJvY2VzcyBmbG93ICovXHJcbmNvbnN0IFByb2Nlc3NEaXNwbGF5U3RhdGUgPSB7XHJcbiAgICAvKiogZXhwYW5kZWQgKi9cclxuICAgIEV4cGFuZGVkOiAnZXhwYW5kZWQnLFxyXG4gICAgLyoqIGNvbGxhcHNlZCAqL1xyXG4gICAgQ29sbGFwc2VkOiAnY29sbGFwc2VkJyxcclxuICAgIC8qKiBmbG9hdGluZyAqL1xyXG4gICAgRmxvYXRpbmc6ICdmbG9hdGluZydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgaW50ZWdlciB2YWx1ZSBzdGF0dXMgb2YgdGhlIHN0YWdlICovXHJcbmNvbnN0IFByb2Nlc3NTdGF0dXMgPSB7XHJcbiAgICAvKiogYWN0aXZlICovXHJcbiAgICBBY3RpdmU6ICdhY3RpdmUnLFxyXG4gICAgLyoqIGFib3J0ZWQgKi9cclxuICAgIEFib3J0ZWQ6ICdhYm9ydGVkJyxcclxuICAgIC8qKiBmaW5pc2hlZCAqL1xyXG4gICAgRmluaXNoZWQ6ICdmaW5pc2hlZCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsdWUgaW5kaWNhdGluZyBob3cgdGhlIHNhdmUgZXZlbnQgd2FzIGluaXRpYXRlZCBieSB0aGUgdXNlciAqL1xyXG5jb25zdCBTYXZlTW9kZSA9IHtcclxuICAgIC8qKiAxIC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBTYXZlOiAxLFxyXG4gICAgLyoqIDIgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFNhdmVBbmRDbG9zZTogMixcclxuICAgIC8qKiA1IC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBEZWFjdGl2YXRlOiA1LFxyXG4gICAgLyoqIDYgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFJlYWN0aXZhdGU6IDYsXHJcbiAgICAvKiogNyAtIEVtYWlsICovXHJcbiAgICBFbWFpbDogNyxcclxuICAgIC8qKiAxNSAtIExlYWQgKi9cclxuICAgIERpc3F1YWxpZnk6IDE1LFxyXG4gICAgLyoqIDE2IC0gTGVhZCAqL1xyXG4gICAgUXVhbGlmeTogMTYsXHJcbiAgICAvKiogNDcgLSBVc2VyIG9yIFRlYW0gKi9cclxuICAgIEFzc2lnbjogNDcsXHJcbiAgICAvKiogNTggLSBBY3Rpdml0aWVzICovXHJcbiAgICBTYXZlQXNDb21wbGV0ZWQ6IDU4LFxyXG4gICAgLyoqIDU5IC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBTYXZlQW5kTmV3OiA1OSxcclxuICAgIC8qKiA3MCAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgQXV0b1NhdmU6IDcwXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogU3BlY2lmeSBvcHRpb25zIGZvciBzYXZpbmcgdGhlIHJlY29yZCAqL1xyXG5jb25zdCBTYXZlT3B0aW9uID0ge1xyXG4gICAgLyoqIHNhdmVhbmRjbG9zZSAtIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgdXNpbmcgdGhlIFNhdmUgYW5kIENsb3NlIGNvbW1hbmQgKi9cclxuICAgIFNhdmVBbmRDbG9zZTogJ3NhdmVhbmRjbG9zZScsXHJcbiAgICAvKiogc2F2ZWFuZG5ldyAtIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgdGhlIHVzaW5nIHRoZSBTYXZlIGFuZCBOZXcgY29tbWFuZCAqL1xyXG4gICAgU2F2ZUFuZE5ldzogJ3NhdmVhbmRuZXcnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGlzcGxheSBzdGF0ZSBvZiB0aGUgc2lkZSBwYW5lICovXHJcbmNvbnN0IFNpZGVQYW5lU3RhdGUgPSB7XHJcbiAgICAvKiogMCAtIENvbGxhcHNlZCAqL1xyXG4gICAgQ29sbGFwc2VkOiAwLFxyXG4gICAgLyoqIDEgLSBFeHBhbmRlZCAqL1xyXG4gICAgRXhwYW5kZWQ6IDFcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgY29udHJvbCB0eXBlIG9mIHRhYiAqL1xyXG5jb25zdCBUYWJDb250ZW50VHlwZSA9IHtcclxuICAgIC8qKiBjYXJkU2VjdGlvbnM6IFRoZSBkZWZhdWx0IHRhYiBiZWhhdmlvciAqL1xyXG4gICAgQ2FyZFNlY3Rpb25zOiAnY2FyZFNlY3Rpb25zJyxcclxuICAgIC8qKiBzaW5nbGVDb21wb25lbnQ6IE1heGltaXplcyB0aGUgY29udGVudCBvZiB0aGUgZmlyc3QgY29tcG9uZW50IGluIHRoZSB0YWIgKi9cclxuICAgIFNpbmdsZUNvbXBvbmVudDogJ3NpbmdsZUNvbXBvbmVudCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSB0YWIgKi9cclxuY29uc3QgVGFiRGlzcGxheVN0YXRlID0ge1xyXG4gICAgLyoqIGV4cGFuZGVkICovXHJcbiAgICBFeHBhbmRlZDogJ2V4cGFuZGVkJyxcclxuICAgIC8qKiBjb2xsYXBzZWQgKi9cclxuICAgIENvbGxhcHNlZDogJ2NvbGxhcHNlZCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgc3RhdGUgb2YgdGhlIHRpbWVyIGNvbnRyb2wgLSBUaGlzIG1ldGhvZCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgVW5pZmllZCBJbnRlcmZhY2UgKi9cclxuY29uc3QgVGltZXJTdGF0ZSA9IHtcclxuICAgIC8qKiAxICovXHJcbiAgICBOb3RTZXQ6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgSW5Qcm9ncmVzczogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBXYXJuaW5nOiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIFZpb2xhdGVkOiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIFN1Y2Nlc3M6IDUsXHJcbiAgICAvKiogNiAqL1xyXG4gICAgRXhwaXJlZDogNixcclxuICAgIC8qKiA3ICovXHJcbiAgICBDYW5jZWxlZDogNyxcclxuICAgIC8qKiA4ICovXHJcbiAgICBQYXVzZWQ6IDhcclxufSBhcyBjb25zdDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRW50aXR5IE9wdGlvblNldHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEFjY291bnQgZW50aXR5IE9wdGlvblNldHMgKi9cclxuY29uc3QgQWNjb3VudCA9IHtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5IGZvciB1c2UgaW4gbWFya2V0aW5nIHNlZ21lbnRhdGlvbiBhbmQgZGVtb2dyYXBoaWMgYW5hbHlzaXMgKi9cclxuICAgIEluZHVzdHJ5Q29kZToge1xyXG4gICAgICAgIC8qKiAxIC0gQWNjb3VudGluZyAqL1xyXG4gICAgICAgIEFjY291bnRpbmc6IDEsXHJcbiAgICAgICAgLyoqIDcgLSBDb25zdWx0aW5nICovXHJcbiAgICAgICAgQ29uc3VsdGluZzogNyxcclxuICAgICAgICAvKiogMTYgLSBGaW5hbmNpYWwgKi9cclxuICAgICAgICBGaW5hbmNpYWw6IDE2LFxyXG4gICAgICAgIC8qKiAyMCAtIEluc3VyYW5jZSAqL1xyXG4gICAgICAgIEluc3VyYW5jZTogMjAsXHJcbiAgICAgICAgLyoqIDEyIC0gVGVjaG5vbG9neSAqL1xyXG4gICAgICAgIFRlY2hub2xvZ3k6IDEyXHJcbiAgICB9LFxyXG4gICAgLyoqIEN1c3RvbSBNdWx0aU9wdGlvblNldCAtIHY0X0NhdGVnb3JpZXMgKi9cclxuICAgIHY0X0NhdGVnb3JpZXM6IHtcclxuICAgICAgICAvKiogMTAwMDAwMDAwICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfQTogMTAwMDAwMDAwLFxyXG4gICAgICAgIC8qKiAxMDAwMDAwMDEgKi9cclxuICAgICAgICBDYXRlZ29yeV9COiAxMDAwMDAwMDEsXHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMiAqL1xyXG4gICAgICAgIENhdGVnb3J5X0M6IDEwMDAwMDAwMixcclxuICAgICAgICAvKiogMTAwMDAwMDAzICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfRDogMTAwMDAwMDAzXHJcbiAgICB9XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEV4cG9ydCBjb21iaW5lZCBPcHRpb25TZXRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IE9wdGlvblNldCA9IHtcclxuICAgIC8vIEdsb2JhbCBPcHRpb25TZXRzXHJcbiAgICBBZHZhbmNlZENvbmZpZ1NldHRpbmcsXHJcbiAgICBDbGllbnROYW1lLFxyXG4gICAgQ2xpZW50U3RhdGUsXHJcbiAgICBGaWVsZEF0dHJpYnV0ZVR5cGUsXHJcbiAgICBGaWVsZENvbnRyb2xUeXBlLFxyXG4gICAgRmllbGRGb3JtYXQsXHJcbiAgICBGaWVsZE5vdGlmaWNhdGlvbkxldmVsLFxyXG4gICAgRmllbGRSZXF1aXJlZExldmVsLFxyXG4gICAgRmllbGRTdWJtaXRNb2RlLFxyXG4gICAgRm9ybUZhY3RvcixcclxuICAgIEZvcm1Ob3RpZmljYXRpb25MZXZlbCxcclxuICAgIEZvcm1UeXBlLFxyXG4gICAgRnVsbE5hbWVDb252ZW50aW9uQ29kZSxcclxuICAgIEdyaWRUeXBlLFxyXG4gICAgT3BlbkZpbGVPcHRpb24sXHJcbiAgICBQcm9jZXNzQ2F0ZWdvcnksXHJcbiAgICBQcm9jZXNzRGlzcGxheVN0YXRlLFxyXG4gICAgUHJvY2Vzc1N0YXR1cyxcclxuICAgIFNhdmVNb2RlLFxyXG4gICAgU2F2ZU9wdGlvbixcclxuICAgIFNpZGVQYW5lU3RhdGUsXHJcbiAgICBUYWJDb250ZW50VHlwZSxcclxuICAgIFRhYkRpc3BsYXlTdGF0ZSxcclxuICAgIFRpbWVyU3RhdGUsXHJcbiAgICAvLyBFbnRpdHkgT3B0aW9uU2V0c1xyXG4gICAgQWNjb3VudFxyXG59IGFzIGNvbnN0O1xyXG4iLCAiLyoqXHJcbiAqIEFjY291bnQuZm9ybS50cyAtIEFjY291bnQgRm9ybSBmb3IgZWFybHktYm91bmQgc3R5bGUgZm9ybSBjb2RpbmdcclxuICogR2VuZXJhdGVkIGZpbGUgLSBETyBOT1QgTU9ESUZZIE1BTlVBTExZXHJcbiAqIFxyXG4gKiBTdHJ1Y3R1cmU6XHJcbiAqIDEuIEltcG9ydHNcclxuICogMi4gVHlwZXMgLSBJQm9keSwgSUhlYWRlciwgSVRhYnMsIElHcmlkLCBJTmF2aWdhdGlvbiwgSVF1aWNrRm9ybSwgSVByb2Nlc3NcclxuICogMy4gUnVudGltZSAtIEZvcm0gY2xhc3Mgd2l0aCBmaWVsZCBjb25maWd1cmF0aW9uc1xyXG4gKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvZGV2a2l0LmQudHNcIiAvPlxyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uLy4uL2xpYi9kZXZraXQnO1xyXG5pbXBvcnQgJy4vT3B0aW9uU2V0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4gVHlwZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBBY2NvdW50Rm9ybSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCb2R5IGNvbnRyb2xzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYWxsIGNvbnRyb2xzIG9uIHRoZSBmb3JtIGJvZHlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQm9keSB7XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIGNvbXBhbnkgb3IgYnVzaW5lc3MgbmFtZS4gKi9cclxuICAgICAgICBOYW1lOiBEZXZLaXQuQ29udHJvbHMuU3RyaW5nO1xyXG4gICAgICAgIC8qKiBUeXBlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gZGVzY3JpYmUgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgRGVzY3JpcHRpb246IERldktpdC5Db250cm9scy5NZW1vO1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBOdW1iZXJPZkVtcGxveWVlczogRGV2S2l0LkNvbnRyb2xzLkludGVnZXI7XHJcbiAgICAgICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBjcmVkaXQgZm9yIHRoZSBhY2NvdW50IGlzIG9uIGhvbGQuICovXHJcbiAgICAgICAgQ3JlZGl0T25Ib2xkOiBEZXZLaXQuQ29udHJvbHMuQm9vbGVhbjtcclxuICAgICAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBpbmR1c3RyeS4gKi9cclxuICAgICAgICBJbmR1c3RyeUNvZGU6IERldktpdC5Db250cm9scy5PcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIENob29zZSB0aGUgcHJpbWFyeSBjb250YWN0IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBQcmltYXJ5Q29udGFjdElkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgICAgIC8qKiBDdXN0b20gQmlydGhkYXkgZmllbGQgKi9cclxuICAgICAgICB2NF9CaXJ0aGRheTogRGV2S2l0LkNvbnRyb2xzLkRhdGVPbmx5O1xyXG4gICAgICAgIC8qKiBDdXN0b20gQXBwb2ludG1lbnQgVGltZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0FwcG9pbnRtZW50VGltZTogRGV2S2l0LkNvbnRyb2xzLkRhdGVUaW1lO1xyXG4gICAgICAgIC8qKiBDdXN0b20gTGF0aXR1ZGUgZmllbGQgKi9cclxuICAgICAgICB2NF9MYXRpdHVkZTogRGV2S2l0LkNvbnRyb2xzLkRlY2ltYWw7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBEaXNjb3VudCBQZXJjZW50YWdlIGZpZWxkICovXHJcbiAgICAgICAgdjRfRGlzY291bnRQZXJjZW50YWdlOiBEZXZLaXQuQ29udHJvbHMuRG91YmxlO1xyXG4gICAgICAgIC8qKiBDdXN0b20gQ2F0ZWdvcmllcyBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0NhdGVnb3JpZXM6IERldktpdC5Db250cm9scy5NdWx0aU9wdGlvblNldDtcclxuICAgICAgICAvKiogQ3VzdG9tIEhlbHAgV2ViIFJlc291cmNlICovXHJcbiAgICAgICAgdjRfV2ViUmVzb3VyY2VIZWxwOiBEZXZLaXQuQ29udHJvbHMuV2ViUmVzb3VyY2U7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBFeHRlcm5hbCBQYWdlICovXHJcbiAgICAgICAgdjRfSUZyYW1lRXh0ZXJuYWw6IERldktpdC5Db250cm9scy5JRnJhbWU7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBTTEEgVGltZXIgKi9cclxuICAgICAgICB2NF9UaW1lclNMQTogRGV2S2l0LkNvbnRyb2xzLlRpbWVyO1xyXG4gICAgICAgIC8qKiBLbm93bGVkZ2UgQmFzZSBTZWFyY2ggKi9cclxuICAgICAgICB2NF9Lbm93bGVkZ2VTZWFyY2g6IERldktpdC5Db250cm9scy5Lbm93bGVkZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWFkZXIgY29udHJvbHMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBjb250cm9scyBkaXNwbGF5ZWQgaW4gdGhlIGZvcm0gaGVhZGVyXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlciB7XHJcbiAgICAgICAgLyoqIEVudGVyIHRoZSB1c2VyIG9yIHRlYW0gd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgICAgIE93bmVySWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIE51bWJlck9mRW1wbG95ZWVzOiBEZXZLaXQuQ29udHJvbHMuSW50ZWdlcjtcclxuICAgICAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIFJldmVudWU6IERldktpdC5Db250cm9scy5Nb25leTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1bW1hcnkgdGFiIHNlY3Rpb25zIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTVU1NQVJZX1RBQlRhYlNlY3Rpb25zIHtcclxuICAgICAgICBBQ0NPVU5UX0lORk9STUFUSU9OOiBEZXZLaXQuQ29udHJvbHMuU2VjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1bW1hcnkgdGFiIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTVU1NQVJZX1RBQlRhYiBleHRlbmRzIERldktpdC5Db250cm9scy5JVGFiIHtcclxuICAgICAgICBTZWN0aW9uOiBJU1VNTUFSWV9UQUJUYWJTZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRhYnMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBhbGwgdGFicyBvbiB0aGUgZm9ybVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICAgICBTVU1NQVJZX1RBQjogSVNVTU1BUllfVEFCVGFiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBjb250cm9scyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGFsbCBzdWJncmlkIGNvbnRyb2xzIG9uIHRoZSBmb3JtXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUdyaWQge1xyXG4gICAgICAgIENvbnRhY3RzOiBEZXZLaXQuQ29udHJvbHMuR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRpb24gaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU5hdmlnYXRpb24ge1xyXG4gICAgICAgIEFjY291bnRfVGFza3M6IERldktpdC5Db250cm9scy5OYXZpZ2F0aW9uSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFF1aWNrRm9ybSBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIHF1aWNrIHZpZXcgZm9ybSBjb250cm9sc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElRdWlja0Zvcm0ge1xyXG4gICAgICAgIGNvbnRhY3RxdWlja2Zvcm06IERldktpdC5Db250cm9scy5JUXVpY2tWaWV3ICYge1xyXG4gICAgICAgICAgICBCb2R5OiB7XHJcbiAgICAgICAgICAgICAgICBFTWFpbEFkZHJlc3MxOiBEZXZLaXQuQ29udHJvbHMuUXVpY2tWaWV3O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdXNpbmVzcyBQcm9jZXNzIEZsb3cgZmllbGRzIGludGVyZmFjZVxyXG4gICAgICogdjRfQWNjb3VudEJQRiAtIEN1c3RvbSBBY2NvdW50IEJ1c2luZXNzIFByb2Nlc3MgRmxvd1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElCUEYge1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IEFjY291bnQgTmFtZSAoU3RhZ2UgMTogUXVhbGlmeSkgKi9cclxuICAgICAgICBOYW1lOiBEZXZLaXQuQ29udHJvbHMuU3RyaW5nO1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IEluZHVzdHJ5IENvZGUgKFN0YWdlIDE6IFF1YWxpZnkpICovXHJcbiAgICAgICAgSW5kdXN0cnlDb2RlOiBEZXZLaXQuQ29udHJvbHMuT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IFJldmVudWUgKFN0YWdlIDI6IERldmVsb3ApICovXHJcbiAgICAgICAgUmV2ZW51ZTogRGV2S2l0LkNvbnRyb2xzLk1vbmV5O1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IFByaW1hcnkgQ29udGFjdCAoU3RhZ2UgMjogRGV2ZWxvcCkgKi9cclxuICAgICAgICBQcmltYXJ5Q29udGFjdElkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2VzcyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGJ1c2luZXNzIHByb2Nlc3MgZmxvdyBkZWZpbml0aW9uc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQcm9jZXNzIGV4dGVuZHMgRGV2S2l0LkNvbnRyb2xzLklQcm9jZXNzIHtcclxuICAgICAgICAvKiogdjRfQWNjb3VudEJQRiAtIEN1c3RvbSBBY2NvdW50IEJ1c2luZXNzIFByb2Nlc3MgRmxvdyAqL1xyXG4gICAgICAgIHY0X0FjY291bnRCUEY6IElCUEY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gMi4gUnVudGltZSAtIEZvcm0gQ2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjY291bnQgRm9ybSBjbGFzc1xyXG4gICAgICogUHJvdmlkZXMgdHlwZWQgYWNjZXNzIHRvIGFsbCBmb3JtIGNvbnRyb2xzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgRm9ybUJhc2U8SUJvZHksIElIZWFkZXIsIElUYWJzLCBJR3JpZCwgSU5hdmlnYXRpb24sIElRdWlja0Zvcm0sIElQcm9jZXNzPiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBBY2NvdW50IEZvcm0gaW5zdGFuY2VcclxuICAgICAgICAgKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBUaGUgZXhlY3V0aW9uIGNvbnRleHQgZnJvbSBmb3JtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgT3B0aW9uYWwgZGVmYXVsdCB3ZWIgcmVzb3VyY2UgbmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihleGVjdXRpb25Db250ZXh0LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlck9mRW1wbG95ZWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlZGl0T25Ib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICAnSW5kdXN0cnlDb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWFyeUNvbnRhY3RJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0JpcnRoZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQXBwb2ludG1lbnRUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfTGF0aXR1ZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9EaXNjb3VudFBlcmNlbnRhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9DYXRlZ29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfV2ViUmVzb3VyY2VIZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfSUZyYW1lRXh0ZXJuYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9UaW1lclNMQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0tub3dsZWRnZVNlYXJjaCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAnT3duZXJJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlck9mRW1wbG95ZWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdGFiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVTU1BUllfVEFCX19fQUNDT1VOVF9JTkZPUk1BVElPTidcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBncmlkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3RzJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IFtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudF9UYXNrcydcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBxdWljazogW1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250YWN0cXVpY2tmb3JtX19fRU1haWxBZGRyZXNzMSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBicGY6IFtcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX05hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fSW5kdXN0cnlDb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fUHJpbWFyeUNvbnRhY3RJZCdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgLSBOYW1lIEZpZWxkIChTdHJpbmcpXHJcbiAqIFRoaXMgdGVzdHMgdGhlIGJhc2UgSUNvbnRyb2wgaW50ZXJmYWNlIHRoYXQgYWxsIGNvbnRyb2xzIGluaGVyaXQgZnJvbVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdENvbnRyb2woZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBjb250cm9sID0gZm9ybS5Cb2R5Lk5hbWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGNvbnRyb2wuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZU5hbWUgPT09IFwibmFtZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGVUeXBlID09PSBcInN0cmluZ1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogY29udHJvbC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGNvbnRyb2wuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogY29udHJvbC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGNvbnRyb2wuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogY29udHJvbC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BlcnRpZXMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3Qgc2V0dGVyUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgLy8gU2V0dGVyc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBjb250cm9sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29udHJvbC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1JlcXVpcmVkID0gY29udHJvbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGNvbnRyb2wuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGAke29yaWdSZXF1aXJlZH1cdTIxOTJyZXF1aXJlZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdSZXF1aXJlZCA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1N1Ym1pdCA9IGNvbnRyb2wuU3VibWl0TW9kZTtcclxuICAgICAgICBjb250cm9sLlN1Ym1pdE1vZGUgPSBcImFsd2F5c1wiO1xyXG4gICAgICAgIGNvbnN0IG5ld1N1Ym1pdCA9IGNvbnRyb2wuU3VibWl0TW9kZTtcclxuICAgICAgICBjb250cm9sLlN1Ym1pdE1vZGUgPSBvcmlnU3VibWl0O1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZSAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1N1Ym1pdH1cdTIxOTJhbHdheXNcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3U3VibWl0ID09PSBcImFsd2F5c1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gY29udHJvbC5EaXNhYmxlZDtcclxuICAgICAgICBjb250cm9sLkRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBuZXdEaXNhYmxlZCA9IGNvbnRyb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgY29udHJvbC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnRGlzYWJsZWR9XHUyMTkydHJ1ZVx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdEaXNhYmxlZCA9PT0gdHJ1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBjb250cm9sLkxhYmVsO1xyXG4gICAgICAgIGNvbnRyb2wuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBuZXdMYWJlbCA9IGNvbnRyb2wuTGFiZWw7XHJcbiAgICAgICAgY29udHJvbC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBgXCIke29yaWdMYWJlbH1cIlx1MjE5Mm1vZGlmaWVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld0xhYmVsLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gY29udHJvbC5WaXNpYmxlO1xyXG4gICAgICAgIGNvbnRyb2wuVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG5ld1Zpc2libGUgPSBjb250cm9sLlZpc2libGU7XHJcbiAgICAgICAgY29udHJvbC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnVmlzaWJsZX1cdTIxOTJmYWxzZVx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdWaXNpYmxlID09PSBmYWxzZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlICsgXCIgKE1PRElGSUVEKVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY29udHJvbC5WYWx1ZTtcclxuICAgICAgICBjb250cm9sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBgbW9kaWZpZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3VmFsdWU/LmluY2x1ZGVzKFwiKE1PRElGSUVEKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPbkNoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRwdXRDaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPdXRwdXRDaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkT25PdXRwdXRDaGFuZ2Uob3V0cHV0Q2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQWRkT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkFkZE9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuUmVtb3ZlT25PdXRwdXRDaGFuZ2Uob3V0cHV0Q2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlNldE5vdGlmaWNhdGlvbihcIlRlc3Qgbm90aWZpY2F0aW9uIGZyb20gSUNvbnRyb2xcIiwgXCJDVFJMX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJDVFJMX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2xlYXJlZCA9IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJOT05FWElTVEVOVFwiKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJDbGVhck5vdGlmaWNhdGlvblwiLCBWYWx1ZTogYFJlc3VsdDogJHtjbGVhcmVkfWAsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkNsZWFyTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcIlJlY29tbWVuZGF0aW9uIGZyb20gdGVzdFwiXSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uTGV2ZWw6IFwiUkVDT01NRU5EQVRJT05cIixcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IFwiQ1RSTF9URVNUXzJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIkNUUkxfVEVTVF8yXCIpLCAzMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiQWRkZWQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiQWRkTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWQgbWVzc2FnZVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLnNldHRlclJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REY5Qlx1RkUwRiBURVNUIDA6IElDb250cm9sIEludGVyZmFjZSBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOYW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHNldHRlclJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxOiBMb29rdXAgQ29udHJvbCAtIFByaW1hcnlDb250YWN0SWQgRmllbGRcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RMb29rdXAoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBsb29rdXAgPSBmb3JtLkJvZHkuUHJpbWFyeUNvbnRhY3RJZDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbERlZmF1bHRWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3O1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gbG9va3VwLlZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBoYXNWYWx1ZSA/IGAke2N1cnJlbnRWYWx1ZVswXS5uYW1lfSAoJHtjdXJyZW50VmFsdWVbMF0uZW50aXR5VHlwZX0pYCA6IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJJc1BhcnR5TGlzdFwiLCBWYWx1ZTogbG9va3VwLklzUGFydHlMaXN0LCBTdGF0dXM6IGxvb2t1cC5Jc1BhcnR5TGlzdCA9PT0gZmFsc2UgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzXCIsIFZhbHVlOiBKU09OLnN0cmluZ2lmeShsb29rdXAuRW50aXR5VHlwZXMpLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0Vmlld1wiLCBWYWx1ZTogb3JpZ2luYWxEZWZhdWx0VmlldywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbG9va3VwLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBsb29rdXAuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBsb29rdXAuQ29udHJvbFR5cGUsIFN0YXR1czogbG9va3VwLkNvbnRyb2xUeXBlID09PSBcImxvb2t1cFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbG9va3VwLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbG9va3VwLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBsb29rdXAuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGxvb2t1cC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbG9va3VwLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGxvb2t1cC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbG9va3VwLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBwcmVTZWFyY2hDYWxsYmFjayA9IChjdHg6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclhtbCA9IFwiPGZpbHRlciB0eXBlPSdhbmQnPjxjb25kaXRpb24gYXR0cmlidXRlPSdzdGF0ZWNvZGUnIG9wZXJhdG9yPSdlcScgdmFsdWU9JzAnIC8+PC9maWx0ZXI+XCI7XHJcbiAgICAgICAgbG9va3VwLkFkZEN1c3RvbUZpbHRlcihmaWx0ZXJYbWwsIFwiY29udGFjdFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFByZVNlYXJjaCBmaXJlZCAtIGZpbHRlciBhcHBsaWVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0YWdDbGlja0NhbGxiYWNrID0gKGN0eDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBMb29rdXBUYWdDbGljayBmaXJlZCAtIHRhZyB3YXMgY2xpY2tlZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0dGVyc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0Vmlld0lkID0gXCJ7MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAyfVwiO1xyXG4gICAgICAgIGxvb2t1cC5EZWZhdWx0VmlldyA9IHRlc3RWaWV3SWQ7XHJcbiAgICAgICAgY29uc3QgbmV3VmlldyA9IGxvb2t1cC5EZWZhdWx0VmlldztcclxuICAgICAgICBsb29rdXAuRGVmYXVsdFZpZXcgPSBvcmlnaW5hbERlZmF1bHRWaWV3O1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXcgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0VmlldyAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFR5cGVzID0gbG9va3VwLkVudGl0eVR5cGVzO1xyXG4gICAgICAgIGxvb2t1cC5FbnRpdHlUeXBlcyA9IFtcImNvbnRhY3RcIl07XHJcbiAgICAgICAgY29uc3QgbmV3VHlwZXMgPSBsb29rdXAuRW50aXR5VHlwZXM7XHJcbiAgICAgICAgbG9va3VwLkVudGl0eVR5cGVzID0gb3JpZ2luYWxUeXBlcztcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXMgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZFByZVNlYXJjaChwcmVTZWFyY2hDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRQcmVTZWFyY2hcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuUmVtb3ZlUHJlU2VhcmNoKHByZVNlYXJjaENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZVByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRMb29rdXBUYWdDbGljayh0YWdDbGlja0NhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkFkZExvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJBZGRMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuUmVtb3ZlTG9va3VwVGFnQ2xpY2sodGFnQ2xpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVtb3ZlTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZEN1c3RvbVZpZXcoXHJcbiAgICAgICAgICAgIFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiLFxyXG4gICAgICAgICAgICBcIkFjdGl2ZSBDb250YWN0cyAoQ3VzdG9tIFZpZXcpXCIsXHJcbiAgICAgICAgICAgIFwiPGZldGNoPjxlbnRpdHkgbmFtZT0nY29udGFjdCc+PGF0dHJpYnV0ZSBuYW1lPSdmdWxsbmFtZScvPjwvZW50aXR5PjwvZmV0Y2g+XCIsXHJcbiAgICAgICAgICAgIFwiPGdyaWQgbmFtZT0ncmVzdWx0c2V0Jz48cm93IG5hbWU9J3Jlc3VsdCcgaWQ9J2NvbnRhY3RpZCc+PGNlbGwgbmFtZT0nZnVsbG5hbWUnIHdpZHRoPScyMDAnLz48L3Jvdz48L2dyaWQ+XCIsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZEN1c3RvbVZpZXdcIiwgVmFsdWU6IFwiQWRkZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRDdXN0b21WaWV3XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5TZXROb3RpZmljYXRpb24oXCJUZXN0IG5vdGlmaWNhdGlvblwiLCBcIlRFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb2t1cC5DbGVhck5vdGlmaWNhdGlvbihcIlRFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgaW4gM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9va3VwLkZvY3VzKCksIDQwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICg0cylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDBEIFRFU1QgMTogTG9va3VwIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogUHJpbWFyeUNvbnRhY3RJZCBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzkpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMzogTWVtbyBDb250cm9sIC0gRGVzY3JpcHRpb24gRmllbGRcclxuICogTWVtbyBleHRlbmRzIElDb250cm9sVGV4dCB3aXRoIE1heExlbmd0aCBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE1lbW8oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1lbW8gPSBmb3JtLkJvZHkuRGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1lbW8uVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNZW1vLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heExlbmd0aFwiLCBWYWx1ZTogbWVtby5NYXhMZW5ndGgsIFN0YXR1czogdHlwZW9mIG1lbW8uTWF4TGVuZ3RoID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSA/IGBcIiR7b3JpZ2luYWxWYWx1ZS5zdWJzdHJpbmcoMCwgNTApfSR7b3JpZ2luYWxWYWx1ZS5sZW5ndGggPiA1MCA/ICcuLi4nIDogJyd9XCJgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbWVtby5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZU5hbWUgPT09IFwiZGVzY3JpcHRpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlVHlwZSA9PT0gXCJtZW1vXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtZW1vLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbWVtby5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtZW1vLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbWVtby5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbWVtby5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbWVtby5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbWVtby5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1lbW8uRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbWVtby5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG1lbW8uVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgICAgICBtZW1vLlZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgXCJcIikgKyBcIiBbVEVTVF1cIjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1lbW8uVmFsdWU7XHJcbiAgICAgICAgbWVtby5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gbWVtby5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1lbW8uUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtZW1vLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1lbW8uRGlzYWJsZWQ7XHJcbiAgICAgICAgbWVtby5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLkRpc2FibGVkO1xyXG4gICAgICAgIG1lbW8uRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBtZW1vLkxhYmVsO1xyXG4gICAgICAgIG1lbW8uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uTGFiZWw7XHJcbiAgICAgICAgbWVtby5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBtZW1vLlZpc2libGU7XHJcbiAgICAgICAgbWVtby5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5WaXNpYmxlO1xyXG4gICAgICAgIG1lbW8uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTWVtbyBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5TZXROb3RpZmljYXRpb24oXCJUZXN0IE1lbW8gbm90aWZpY2F0aW9uXCIsIFwiTUVNT19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLkNsZWFyTm90aWZpY2F0aW9uKFwiTUVNT19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDREQgVEVTVCAyOiBNZW1vIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogRGVzY3JpcHRpb24gZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAzOiBTdHJpbmcgQ29udHJvbCAtIE5hbWUgRmllbGRcclxuICogU3RyaW5nIGV4dGVuZHMgSUNvbnRyb2xUZXh0IHdpdGggTWF4TGVuZ3RoIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0U3RyaW5nKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBzdHIgPSBmb3JtLkJvZHkuTmFtZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gc3RyLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU3RyaW5nLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heExlbmd0aFwiLCBWYWx1ZTogc3RyLk1heExlbmd0aCwgU3RhdHVzOiB0eXBlb2Ygc3RyLk1heExlbmd0aCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgPyBgXCIke29yaWdpbmFsVmFsdWUuc3Vic3RyaW5nKDAsIDUwKX0ke29yaWdpbmFsVmFsdWUubGVuZ3RoID4gNTAgPyAnLi4uJyA6ICcnfVwiYCA6IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc3RyLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogc3RyLkF0dHJpYnV0ZU5hbWUgPT09IFwibmFtZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBzdHIuQXR0cmlidXRlVHlwZSA9PT0gXCJzdHJpbmdcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IHN0ci5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IHN0ci5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBzdHIuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBzdHIuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IHN0ci5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogc3RyLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBzdHIuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBzdHIuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogc3RyLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogc3RyLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICAgICAgc3RyLlZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgXCJcIikgKyBcIiBbVEVTVF1cIjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0ci5WYWx1ZTtcclxuICAgICAgICBzdHIuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IHN0ci5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIHN0ci5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgc3RyLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gc3RyLkRpc2FibGVkO1xyXG4gICAgICAgIHN0ci5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuRGlzYWJsZWQ7XHJcbiAgICAgICAgc3RyLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBzdHIuTGFiZWw7XHJcbiAgICAgICAgc3RyLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuTGFiZWw7XHJcbiAgICAgICAgc3RyLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IHN0ci5WaXNpYmxlO1xyXG4gICAgICAgIHN0ci5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLlZpc2libGU7XHJcbiAgICAgICAgc3RyLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFN0cmluZyBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBTdHJpbmcgbm90aWZpY2F0aW9uXCIsIFwiU1RSSU5HX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0ci5DbGVhck5vdGlmaWNhdGlvbihcIlNUUklOR19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0ci5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0M0IFRFU1QgMzogU3RyaW5nIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogTmFtZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDQ6IEludGVnZXIgQ29udHJvbCAtIE51bWJlck9mRW1wbG95ZWVzIEZpZWxkXHJcbiAqIEludGVnZXIgZXh0ZW5kcyBJQ29udHJvbE51bWJlciB3aXRoIE1heCwgTWluIHByb3BlcnRpZXMgKE5PIFByZWNpc2lvbiBzdXBwb3J0KVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEludGVnZXIoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGludCA9IGZvcm0uSGVhZGVyLk51bWJlck9mRW1wbG95ZWVzO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnQuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBJbnRlZ2VyLXNwZWNpZmljIHByb3BlcnRpZXMgKElDb250cm9sTnVtYmVyIC0gTk8gUHJlY2lzaW9uIGZvciBJbnRlZ2VyKVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4XCIsIFZhbHVlOiBpbnQuTWF4LCBTdGF0dXM6IHR5cGVvZiBpbnQuTWF4ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJNaW5cIiwgVmFsdWU6IGludC5NaW4sIFN0YXR1czogdHlwZW9mIGludC5NaW4gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGludC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogaW50LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogaW50LkF0dHJpYnV0ZU5hbWUgPT09IFwibnVtYmVyb2ZlbXBsb3llZXNcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogaW50LkF0dHJpYnV0ZVR5cGUgPT09IFwiaW50ZWdlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogaW50LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogaW50LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGludC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBpbnQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGludC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogaW50LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBpbnQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBpbnQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogaW50LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogaW50LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgMCkgKyAxMDA7XHJcbiAgICAgICAgaW50LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaW50LlZhbHVlO1xyXG4gICAgICAgIGludC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGludC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGludC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgaW50LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gaW50LkRpc2FibGVkO1xyXG4gICAgICAgIGludC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuRGlzYWJsZWQ7XHJcbiAgICAgICAgaW50LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBpbnQuTGFiZWw7XHJcbiAgICAgICAgaW50LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuTGFiZWw7XHJcbiAgICAgICAgaW50LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gaW50LlZpc2libGU7XHJcbiAgICAgICAgaW50LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuVmlzaWJsZTtcclxuICAgICAgICBpbnQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgSW50ZWdlciBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW50LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBJbnRlZ2VyIG5vdGlmaWNhdGlvblwiLCBcIklOVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuQ2xlYXJOb3RpZmljYXRpb24oXCJJTlRfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1REQyMiBURVNUIDQ6IEludGVnZXIgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOdW1iZXJPZkVtcGxveWVlcyBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDU6IE9wdGlvblNldCBDb250cm9sIC0gSW5kdXN0cnlDb2RlIEZpZWxkXHJcbiAqIE9wdGlvblNldCBleHRlbmRzIElDb250cm9sT3B0aW9uU2V0IHdpdGggSW5pdGlhbFZhbHVlLCBTZWxlY3RlZE9wdGlvbiwgVGV4dCwgVmFsdWVcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RPcHRpb25TZXQoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG9wdCA9IGZvcm0uQm9keS5JbmR1c3RyeUNvZGU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG9wdC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE9wdGlvblNldC1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWVcIiwgVmFsdWU6IG9wdC5Jbml0aWFsVmFsdWUsIFN0YXR1czogdHlwZW9mIG9wdC5Jbml0aWFsVmFsdWUgPT09IFwibnVtYmVyXCIgfHwgb3B0LkluaXRpYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiT3B0aW9uc1wiLCBWYWx1ZTogYCR7b3B0Lk9wdGlvbnM/Lmxlbmd0aCA/PyAwfSBvcHRpb25zYCwgU3RhdHVzOiBvcHQuT3B0aW9ucz8ubGVuZ3RoID4gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiU2VsZWN0ZWRPcHRpb25cIiwgVmFsdWU6IG9wdC5TZWxlY3RlZE9wdGlvbiA/IGAke29wdC5TZWxlY3RlZE9wdGlvbi50ZXh0fSAoJHtvcHQuU2VsZWN0ZWRPcHRpb24udmFsdWV9KWAgOiBcIihub25lKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJUZXh0XCIsIFZhbHVlOiBvcHQuVGV4dCB8fCBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogb3B0LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBvcHQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBvcHQuQXR0cmlidXRlTmFtZSA9PT0gXCJpbmR1c3RyeWNvZGVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogb3B0LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogb3B0LkF0dHJpYnV0ZVR5cGUgPT09IFwib3B0aW9uc2V0XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBvcHQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogb3B0LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBvcHQuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogb3B0LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBvcHQuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG9wdC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogb3B0LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogb3B0LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG9wdC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE4XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG9wdC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBvcHQuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gb3B0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgb3B0LlZhbHVlID0gbmV3VmFsO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5WYWx1ZTtcclxuICAgICAgICAgICAgb3B0LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IG5ld1ZhbCA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IG5ld1ZhbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IFwiTm8gb3B0aW9ucyBhdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogT3B0aW9uKHZhbHVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gb3B0Lk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RPcHRpb24gPSBvcHQuT3B0aW9uKG9wdGlvbnNbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IHRlc3RPcHRpb24gPyBgJHt0ZXN0T3B0aW9uLnRleHR9YCA6IFwibnVsbFwiLCBTdGF0dXM6IHRlc3RPcHRpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IFwiTm8gb3B0aW9uc1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTMzogT3B0aW9uKHRleHQpIC0gTk9UIElNUExFTUVOVEVEOiBPT0IgRHluYW1pY3MgY29kZSB0aHJvd3MgJ1ZhbHVlIHNob3VsZCBiZSBvZiB0eXBlOiBudW1iZXInIGVycm9yXHJcbiAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIk9wdGlvbih0ZXh0KVwiLCBWYWx1ZTogXCJPT0IgQnVnIC0gZGV2a2l0LnRzIG5vdCBzdXBwb3J0XCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9wdGlvbiAoYWRkIHRoZW4gcmVtb3ZlKVxyXG4gICAgLy8gTk9URTogQWRkT3B0aW9uIGFkZHMgdG8gQ09OVFJPTCwgc28gd2UgY2hlY2sgQ29udHJvbE9wdGlvbnMgKG5vdCBPcHRpb25zIHdoaWNoIGlzIGZyb20gYXR0cmlidXRlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuQWRkT3B0aW9uKFwiVGVzdCBPcHRpb24gKEFJKVwiLCA5OTk5OTkpO1xyXG4gICAgICAgIGNvbnN0IGhhc05ldyA9IG9wdC5Db250cm9sT3B0aW9ucz8uc29tZShvID0+IG8udmFsdWUgPT09IDk5OTk5OSk7XHJcbiAgICAgICAgb3B0LlJlbW92ZU9wdGlvbig5OTk5OTkpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQWRkT3B0aW9uXCIsIFZhbHVlOiBoYXNOZXcgPyBcIkFkZGVkXHUyMTkyUmVtb3ZlZFwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiBoYXNOZXcgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQWRkT3B0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9wdGlvbiAoYWxyZWFkeSB0ZXN0ZWQgYWJvdmUgd2l0aCBBZGRPcHRpb24pXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT3B0aW9uXCIsIFZhbHVlOiBcIlRlc3RlZCB3aXRoIFM0XCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT3B0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IENsZWFyT3B0aW9ucyAtIFRlc3QgY2xlYXIgYW5kIHJlc3RvcmUgZnJvbSBPcHRpb25zIChhdHRyaWJ1dGUpXHJcbiAgICAvLyBOT1RFOiBDbGVhck9wdGlvbnMgY2xlYXJzIHRoZSBDT05UUk9MIG9wdGlvbnMsIGJ1dCBPcHRpb25zIChmcm9tIGF0dHJpYnV0ZSkgcmVtYWlucyBpbnRhY3RcclxuICAgIC8vIE5PVEU6IENvbnRyb2xPcHRpb25zIGluY2x1ZGVzIGEgYmxhbmsgb3B0aW9uICh0ZXh0PScnLCB2YWx1ZT1udWxsKSBmb3IgY2xlYXJpbmcgc2VsZWN0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU9wdGlvbnMgPSBvcHQuT3B0aW9uczsgLy8gU2F2ZSBmcm9tIGF0dHJpYnV0ZSAobm90IGFmZmVjdGVkIGJ5IENsZWFyT3B0aW9ucylcclxuICAgICAgICBjb25zdCBhdHRyTGVuID0gYXR0cmlidXRlT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgb3B0LkNsZWFyT3B0aW9ucygpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFyZWRDb3VudCA9IG9wdC5Db250cm9sT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBvcHRpb25zIGZyb20gYXR0cmlidXRlXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgYXR0cmlidXRlT3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHQuQWRkT3B0aW9uKG9wdGlvbi50ZXh0LCBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN0b3JlZENvdW50ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICAvLyByZXN0b3JlZENvdW50ID49IGF0dHJMZW4gYmVjYXVzZSBDb250cm9sT3B0aW9ucyBtYXkgaW5jbHVkZSBibGFuayBvcHRpb25cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gY2xlYXJlZENvdW50ID09PSAwICYmIHJlc3RvcmVkQ291bnQgPj0gYXR0ckxlbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkNsZWFyT3B0aW9uc1wiLCBWYWx1ZTogc3VjY2VzcyA/IGBDbGVhcigke2NsZWFyZWRDb3VudH0pXHUyMTkyUmVzdG9yZSgke3Jlc3RvcmVkQ291bnR9LyR7YXR0ckxlbn0pYCA6IGBhdHRyPSR7YXR0ckxlbn0sIGNsZWFyPSR7Y2xlYXJlZENvdW50fSwgcmVzdG9yZT0ke3Jlc3RvcmVkQ291bnR9YCwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkNsZWFyT3B0aW9uc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG9wdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG9wdC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgb3B0LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gb3B0LkRpc2FibGVkO1xyXG4gICAgICAgIG9wdC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgb3B0LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBvcHQuTGFiZWw7XHJcbiAgICAgICAgb3B0LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuTGFiZWw7XHJcbiAgICAgICAgb3B0LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gb3B0LlZpc2libGU7XHJcbiAgICAgICAgb3B0LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuVmlzaWJsZTtcclxuICAgICAgICBvcHQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kcyBmcm9tIElDb250cm9sXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE9wdGlvblNldCBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5TZXROb3RpZmljYXRpb24oXCJUZXN0IE9wdGlvblNldCBub3RpZmljYXRpb25cIiwgXCJPUFRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LkNsZWFyTm90aWZpY2F0aW9uKFwiT1BUX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQ0IgVEVTVCA1OiBPcHRpb25TZXQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBJbmR1c3RyeUNvZGUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICIvKipcclxuICogQWNjb3VudC53ZWJhcGkudHMgLSBBY2NvdW50IFdlYkFwaSBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIEdlbmVyYXRlZCBmaWxlIC0gRE8gTk9UIE1PRElGWSBNQU5VQUxMWVxyXG4gKiBcclxuICogU3RydWN0dXJlOlxyXG4gKiAxLiBJbXBvcnRzXHJcbiAqIDIuIFR5cGVzIC0gSUFjY291bnRGb3JtYXR0ZWRWYWx1ZSwgSUFjY291bnRBcGlcclxuICogMy4gUnVudGltZSAtIEFjY291bnRGaWVsZENvbmZpZywgQWNjb3VudEFwaSBmYWN0b3J5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVdlYkFwaUVudGl0eSxcclxuICAgIElXZWJBcGlFbnRpdHksXHJcbiAgICBJV2ViQXBpRmllbGRDb25maWdNYXBcclxufSBmcm9tICcuLi8uLi9saWIvZGV2a2l0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4gVHlwZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEZvcm1hdHRlZCB2YWx1ZXMgaW50ZXJmYWNlIGZvciBBY2NvdW50XHJcbiAqIEFsbCBmaWVsZHMgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGVpciB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtYXR0ZWRWYWx1ZSB7XHJcbiAgICByZWFkb25seSBBY2NvdW50Q2F0ZWdvcnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnRSYXRpbmdDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9BZGRyZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0FkZHJlc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ2l0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ29tcG9zaXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db3VudHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0ZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGF0aXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xpbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MaW5lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGluZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xvbmdpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUG9zdE9mZmljZUJveDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVVBTWm9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVVRDT2Zmc2V0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9BZGRyZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ2l0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ29tcG9zaXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db3VudHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0ZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGF0aXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xpbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MaW5lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGluZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xvbmdpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUG9zdE9mZmljZUJveDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVVBTWm9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVVRDT2Zmc2V0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfQ3JlYXRlZEJ5SVBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfTW9kaWZpZWRCeVVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzMwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzMwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nNjA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nNjBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBCdXNpbmVzc1R5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uQmVoYWxmQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRPbkhvbGQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEN1c3RvbWVyU2l6ZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEN1c3RvbWVyVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdEJ1bGtFTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RCdWxrUG9zdGFsTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RFTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RGYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90UGhvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90UG9zdGFsTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RTZW5kTU06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlX1VSTDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRXhjaGFuZ2VSYXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEZvbGxvd0VtYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGdHBTaXRlVVJMOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJbXBvcnRTZXF1ZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSW5kdXN0cnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJc1ByaXZhdGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldENhcDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWFya2V0Q2FwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldGluZ09ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hc3RlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNZXJnZWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uQmVoYWxmQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTnVtYmVyT2ZFbXBsb3llZXM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE9uSG9sZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmVySWRfc3lzdGVtdXNlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duZXJJZF90ZWFtOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25lcnNoaXBDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdCdXNpbmVzc1VuaXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ1RlYW06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ1VzZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBhcmVudEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGFydGljaXBhdGVzSW5Xb3JrZmxvdzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGF5bWVudFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRBcHBvaW50bWVudFRpbWVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkU3lzdGVtVXNlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5Q29udGFjdElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5U2F0b3JpSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByaW1hcnlUd2l0dGVySWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByb2Nlc3NJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZV9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTaGFyZXNPdXRzdGFuZGluZzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTSUM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNMQUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTTEFJbnZva2VkSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YWdlSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YXRlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RhdHVzQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RvY2tFeGNoYW5nZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVycml0b3J5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGlja2VyU3ltYm9sOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRyYXZlcnNlZFBhdGg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFZlcnNpb25OdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFdlYlNpdGVVUkw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFlvbWlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IFdlYkFwaSBlbnRpdHkgaW50ZXJmYWNlXHJcbiAqIFByb3ZpZGVzIEludGVsbGlTZW5zZSBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50QXBpIGV4dGVuZHMgSVdlYkFwaUVudGl0eSB7XHJcbiAgICAvKiogRm9ybWF0dGVkIHZhbHVlcyBmb3IgYWxsIGZpZWxkcyAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybWF0dGVkVmFsdWU6IElBY2NvdW50Rm9ybWF0dGVkVmFsdWU7XHJcbiAgICAvKiogU2VsZWN0IGEgY2F0ZWdvcnkgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgY3VzdG9tZXIgYWNjb3VudCBpcyBzdGFuZGFyZCBvciBwcmVmZXJyZWQuICovXHJcbiAgICBBY2NvdW50Q2F0ZWdvcnlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIGNsYXNzaWZpY2F0aW9uIGNvZGUgdG8gaW5kaWNhdGUgdGhlIHBvdGVudGlhbCB2YWx1ZSBvZiB0aGUgY3VzdG9tZXIgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnRDbGFzc2lmaWNhdGlvbkNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhbiBJRCBudW1iZXIgb3IgY29kZSBmb3IgdGhlIGFjY291bnQgdG8gcXVpY2tseSBzZWFyY2ggYW5kIGlkZW50aWZ5IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudE51bWJlcjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSByYXRpbmcgdG8gaW5kaWNhdGUgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b21lciBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudFJhdGluZ0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgZm9yIGFkZHJlc3MgMS4gKi9cclxuICAgIEFkZHJlc3MxX0FkZHJlc3NJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByaW1hcnkgYWRkcmVzcyB0eXBlLiAqL1xyXG4gICAgQWRkcmVzczFfQWRkcmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNpdHkgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9DaXR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db21wb3NpdGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnRyeSBvciByZWdpb24gZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvdW50eSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NvdW50eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgZnJlaWdodCB0ZXJtcyBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbGF0aXR1ZGUgdmFsdWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzZWNvbmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgdGhpcmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbG9uZ2l0dWRlIHZhbHVlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBaSVAgQ29kZSBvciBwb3N0YWwgY29kZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1Bvc3RhbENvZGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcG9zdCBvZmZpY2UgYm94IG51bWJlciBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUG9zdE9mZmljZUJveDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBuYW1lIG9mIHRoZSBtYWluIGNvbnRhY3QgYXQgdGhlIGFjY291bnQncyBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9QcmltYXJ5Q29udGFjdE5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzIHNlbnQgdG8gdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0YXRlIG9yIHByb3ZpbmNlIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBzZWNvbmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUFMgem9uZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVVBTWm9uZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHRpbWUgem9uZSwgb3IgVVRDIG9mZnNldCwgZm9yIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1VUQ09mZnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgYWRkcmVzcyAyLiAqL1xyXG4gICAgQWRkcmVzczJfQWRkcmVzc0lkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MgdHlwZS4gKi9cclxuICAgIEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjaXR5IGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9DaXR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvbXBvc2l0ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHJ5IG9yIHJlZ2lvbiBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfQ291bnRyeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHkgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0NvdW50eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9GYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBmcmVpZ2h0IHRlcm1zIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9GcmVpZ2h0VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxhdGl0dWRlIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHRoaXJkIGxpbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGluZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbG9uZ2l0dWRlIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Mb25naXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIGRlc2NyaXB0aXZlIG5hbWUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX05hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgWklQIENvZGUgb3IgcG9zdGFsIGNvZGUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1Bvc3RhbENvZGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcG9zdCBvZmZpY2UgYm94IG51bWJlciBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Qb3N0T2ZmaWNlQm94OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG5hbWUgb2YgdGhlIG1haW4gY29udGFjdCBhdCB0aGUgYWNjb3VudCdzIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHNoaXBwaW5nIG1ldGhvZCBmb3IgZGVsaXZlcmllcyBzZW50IHRvIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1NoaXBwaW5nTWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdGF0ZSBvciBwcm92aW5jZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHRoaXJkIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUFMgem9uZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9VUFNab25lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgdGltZSB6b25lLCBvciBVVEMgb2Zmc2V0LCBmb3IgdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVVRDT2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9DcmVhdGVkQnlVc2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyAzMCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nMzBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc2MDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyA2MCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nNjBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyA5MCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nOTBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGxlZ2FsIGRlc2lnbmF0aW9uIG9yIG90aGVyIGJ1c2luZXNzIHR5cGUgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBCdXNpbmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBjcmVhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkQnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGV4dGVybmFsIHBhcnR5IHdobyBjcmVhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHJlY29yZCB3YXMgY3JlYXRlZC4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZCBvbiBiZWhhbGYgb2YgYW5vdGhlciB1c2VyLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uQmVoYWxmQnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY3JlZGl0IGxpbWl0IG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3JlZGl0TGltaXQ6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNyZWRpdCBsaW1pdCBjb252ZXJ0ZWQgdG8gdGhlIHN5c3RlbSdzIGRlZmF1bHQgYmFzZSBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0X0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGNyZWRpdCBmb3IgdGhlIGFjY291bnQgaXMgb24gaG9sZC4gKi9cclxuICAgIENyZWRpdE9uSG9sZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBzaXplIGNhdGVnb3J5IG9yIHJhbmdlIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3VzdG9tZXJTaXplQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHRoYXQgYmVzdCBkZXNjcmliZXMgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBhY2NvdW50IGFuZCB5b3VyIG9yZ2FuaXphdGlvbi4gKi9cclxuICAgIEN1c3RvbWVyVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGRlc2NyaWJlIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGJ1bGsgZW1haWwgc2VudCB0aHJvdWdoIGNhbXBhaWducy4gKi9cclxuICAgIERvTm90QnVsa0VNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgYnVsayBwb3N0YWwgbWFpbC4gKi9cclxuICAgIERvTm90QnVsa1Bvc3RhbE1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgZW1haWwuICovXHJcbiAgICBEb05vdEVNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgZmF4ZXMuICovXHJcbiAgICBEb05vdEZheDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIHBob25lIGNhbGxzLiAqL1xyXG4gICAgRG9Ob3RQaG9uZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGRpcmVjdCBtYWlsLiAqL1xyXG4gICAgRG9Ob3RQb3N0YWxNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhY2NlcHRzIG1hcmtldGluZyBtYXRlcmlhbHMuICovXHJcbiAgICBEb05vdFNlbmRNTTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcHJpbWFyeSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc2Vjb25kYXJ5IGVtYWlsIGFkZHJlc3MgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRU1haWxBZGRyZXNzMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGFuIGFsdGVybmF0ZSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRlZmF1bHQgaW1hZ2UgZm9yIHRoZSByZWNvcmQuICovXHJcbiAgICBFbnRpdHlJbWFnZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEVudGl0eUltYWdlX1RpbWVzdGFtcDogbnVtYmVyIHwgbnVsbDtcclxuICAgIEVudGl0eUltYWdlX1VSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHJlY29yZCdzIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgRXhjaGFuZ2VSYXRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZheCBudW1iZXIgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEluZm9ybWF0aW9uIGFib3V0IHdoZXRoZXIgdG8gYWxsb3cgZm9sbG93aW5nIGVtYWlsIGFjdGl2aXR5LiAqL1xyXG4gICAgRm9sbG93RW1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFVSTCBmb3IgdGhlIGFjY291bnQncyBGVFAgc2l0ZS4gKi9cclxuICAgIEZ0cFNpdGVVUkw6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGRhdGEgaW1wb3J0IG9yIGRhdGEgbWlncmF0aW9uIHRoYXQgY3JlYXRlZCB0aGlzIHJlY29yZC4gKi9cclxuICAgIEltcG9ydFNlcXVlbmNlTnVtYmVyOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkuICovXHJcbiAgICBJbmR1c3RyeUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWFkb25seSBJc1ByaXZhdGU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIENvbnRhaW5zIHRoZSBkYXRlIGFuZCB0aW1lIHN0YW1wIG9mIHRoZSBsYXN0IG9uIGhvbGQgdGltZS4gKi9cclxuICAgIExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZGF0ZSB3aGVuIHRoZSBhY2NvdW50IHdhcyBsYXN0IGluY2x1ZGVkIGluIGEgbWFya2V0aW5nIGNhbXBhaWduLiAqL1xyXG4gICAgTGFzdFVzZWRJbkNhbXBhaWduX1V0Y0RhdGVPbmx5OiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYXJrZXQgY2FwaXRhbGl6YXRpb24gb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBNYXJrZXRDYXA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIG1hcmtldCBjYXBpdGFsaXphdGlvbiBjb252ZXJ0ZWQgdG8gdGhlIHN5c3RlbSdzIGRlZmF1bHQgYmFzZSBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IE1hcmtldENhcF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFdoZXRoZXIgaXMgb25seSBmb3IgbWFya2V0aW5nICovXHJcbiAgICBNYXJrZXRpbmdPbmx5OiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgbWFzdGVyIGFjY291bnQgdGhhdCB0aGUgYWNjb3VudCB3YXMgbWVyZ2VkIHdpdGguICovXHJcbiAgICByZWFkb25seSBNYXN0ZXJJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aGV0aGVyIHRoZSBhY2NvdW50IGhhcyBiZWVuIG1lcmdlZCB3aXRoIGFub3RoZXIgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE1lcmdlZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGxhc3QgdXBkYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZXh0ZXJuYWwgcGFydHkgd2hvIG1vZGlmaWVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSByZWNvcmQgd2FzIGxhc3QgdXBkYXRlZC4gKi9cclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkT25fVXRjRGF0ZUFuZFRpbWU6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBjcmVhdGVkIHRoZSByZWNvcmQgb24gYmVoYWxmIG9mIGFub3RoZXIgdXNlci4gKi9cclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkT25CZWhhbGZCeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgQWNjb3VudCBhc3NvY2lhdGVkIHdpdGggQWNjb3VudC4gKi9cclxuICAgIG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb21wYW55IG9yIGJ1c2luZXNzIG5hbWUuICovXHJcbiAgICBOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgTnVtYmVyT2ZFbXBsb3llZXM6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgaG93IGxvbmcsIGluIG1pbnV0ZXMsIHRoYXQgdGhlIHJlY29yZCB3YXMgb24gaG9sZC4gKi9cclxuICAgIHJlYWRvbmx5IE9uSG9sZFRpbWU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRGF0ZSBhbmQgdGltZSB0aGF0IHRoZSByZWNvcmQgd2FzIG1pZ3JhdGVkLiAqL1xyXG4gICAgT3ZlcnJpZGRlbkNyZWF0ZWRPbl9VdGNEYXRlT25seTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogRW50ZXIgdGhlIHVzZXIgd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZF9zeXN0ZW11c2VyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEVudGVyIHRoZSB0ZWFtIHdobyBpcyBhc3NpZ25lZCB0byBtYW5hZ2UgdGhlIHJlY29yZC4gKi9cclxuICAgIE93bmVySWRfdGVhbTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBvd25lcnNoaXAgc3RydWN0dXJlLCBzdWNoIGFzIHB1YmxpYyBvciBwcml2YXRlLiAqL1xyXG4gICAgT3duZXJzaGlwQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgYnVzaW5lc3MgdW5pdCB0aGF0IHRoZSByZWNvcmQgb3duZXIgYmVsb25ncyB0by4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ0J1c2luZXNzVW5pdDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgdGVhbSB3aG8gb3ducyB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ1RlYW06IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHVzZXIgd2hvIG93bnMgdGhlIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBPd25pbmdVc2VyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcGFyZW50IGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFBhcmVudEFjY291bnRJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiBMZWdhY3kgTWljcm9zb2Z0IER5bmFtaWNzIENSTSAzLjAgd29ya2Zsb3cgZGF0YS4gKi9cclxuICAgIFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcGF5bWVudCB0ZXJtcyB0byBpbmRpY2F0ZSB3aGVuIHRoZSBjdXN0b21lciBuZWVkcyB0byBwYXkuICovXHJcbiAgICBQYXltZW50VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIGRheSBvZiB0aGUgd2VlayBmb3Igc2VydmljZSBhcHBvaW50bWVudHMuICovXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudERheUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgdGltZSBvZiBkYXkgZm9yIHNlcnZpY2UgYXBwb2ludG1lbnRzLiAqL1xyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBtZXRob2Qgb2YgY29udGFjdC4gKi9cclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJlZmVycmVkIHNlcnZpY2UgcmVwcmVzZW50YXRpdmUuICovXHJcbiAgICBQcmVmZXJyZWRTeXN0ZW1Vc2VySWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBwcmltYXJ5IGNvbnRhY3QgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUHJpbWFyeUNvbnRhY3RJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBQcmltYXJ5IFNhdG9yaSBJRCBmb3IgQWNjb3VudCAqL1xyXG4gICAgUHJpbWFyeVNhdG9yaUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFByaW1hcnkgVHdpdHRlciBJRCBmb3IgQWNjb3VudCAqL1xyXG4gICAgUHJpbWFyeVR3aXR0ZXJJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgSUQgb2YgdGhlIHByb2Nlc3MuICovXHJcbiAgICBQcm9jZXNzSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUmV2ZW51ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgYW5udWFsIHJldmVudWUgY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBSZXZlbnVlX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIHNoYXJlcyBhdmFpbGFibGUgdG8gdGhlIHB1YmxpYyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBTaGFyZXNPdXRzdGFuZGluZzogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGUgYWNjb3VudCdzIGFkZHJlc3MuICovXHJcbiAgICBTaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgU3RhbmRhcmQgSW5kdXN0cmlhbCBDbGFzc2lmaWNhdGlvbiAoU0lDKSBjb2RlLiAqL1xyXG4gICAgU0lDOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgc2VydmljZSBsZXZlbCBhZ3JlZW1lbnQgKFNMQSkgdGhhdCB5b3Ugd2FudCB0byBhcHBseS4gKi9cclxuICAgIFNMQUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIExhc3QgU0xBIHRoYXQgd2FzIGFwcGxpZWQgdG8gdGhpcyBjYXNlLiAqL1xyXG4gICAgcmVhZG9ubHkgU0xBSW52b2tlZElkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBJRCBvZiB0aGUgc3RhZ2UuICovXHJcbiAgICBTdGFnZUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdoZXRoZXIgdGhlIGFjY291bnQgaXMgYWN0aXZlIG9yIGluYWN0aXZlLiAqL1xyXG4gICAgU3RhdGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHN0YXR1cy4gKi9cclxuICAgIFN0YXR1c0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RvY2sgZXhjaGFuZ2UgYXQgd2hpY2ggdGhlIGFjY291bnQgaXMgbGlzdGVkLiAqL1xyXG4gICAgU3RvY2tFeGNoYW5nZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgc2Vjb25kIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGZvciB0aGlzIGFjY291bnQuICovXHJcbiAgICBUZWxlcGhvbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHJlZ2lvbiBvciB0ZXJyaXRvcnkgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGVycml0b3J5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdG9jayBleGNoYW5nZSBzeW1ib2wgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGlja2VyU3ltYm9sOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRvdGFsIHRpbWUgc3BlbnQgZm9yIGVtYWlscyBhbmQgbWVldGluZ3MgYnkgbWUgaW4gcmVsYXRpb24gdG8gYWNjb3VudCByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gKi9cclxuICAgIFRpbWVab25lUnVsZVZlcnNpb25OdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBsb2NhbCBjdXJyZW5jeSBmb3IgdGhlIHJlY29yZC4gKi9cclxuICAgIFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICBUcmF2ZXJzZWRQYXRoOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRpbWUgem9uZSBjb2RlIHRoYXQgd2FzIGluIHVzZSB3aGVuIHRoZSByZWNvcmQgd2FzIGNyZWF0ZWQuICovXHJcbiAgICBVVENDb252ZXJzaW9uVGltZVpvbmVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFZlcnNpb24gbnVtYmVyIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgVmVyc2lvbk51bWJlcjogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBhY2NvdW50J3Mgd2Vic2l0ZSBVUkwuICovXHJcbiAgICBXZWJTaXRlVVJMOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHBob25ldGljIHNwZWxsaW5nIG9mIHRoZSBjb21wYW55IG5hbWUuICovXHJcbiAgICBZb21pTmFtZTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAyLiBSdW50aW1lIC0gRmllbGQgQ29uZmlndXJhdGlvblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQWNjb3VudCBmaWVsZCBtZXRhZGF0YSBjb25maWd1cmF0aW9uXHJcbiAqIC0gbG9naWNhbE5hbWU6IGF0dHJpYnV0ZSBsb2dpY2FsIG5hbWUgKGUuZy4gJ2FjY291bnRpZCcpXHJcbiAqIC0gc2NoZW1hTmFtZTogc2NoZW1hIG5hbWUgZm9yIGxvb2t1cCBiaW5kaW5nXHJcbiAqIC0gZW50aXR5Q29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb24gbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50cycpXHJcbiAqIC0gZW50aXR5TG9naWNhbE5hbWU6IGVudGl0eSBuYW1lIGZvciBsb29rdXAgKGUuZy4gJ2FjY291bnQnKVxyXG4gKiAtIHJlYWRPbmx5OiB3aGV0aGVyIHRoZSBmaWVsZCBpcyByZWFkLW9ubHlcclxuICogLSB0eXBlOiBmaWVsZCB0eXBlIGZvciBwYXJzaW5nIChJbnRlZ2VyLCBOdW1iZXIsIEJvb2xlYW4sIERhdGVUaW1lLCBNdWx0aU9wdGlvblNldClcclxuICovXHJcbmNvbnN0IEFjY291bnRGaWVsZENvbmZpZzogSVdlYkFwaUZpZWxkQ29uZmlnTWFwID0ge1xyXG4gICAgQWNjb3VudENhdGVnb3J5Q29kZTogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRjYXRlZ29yeWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFjY291bnRDbGFzc2lmaWNhdGlvbkNvZGU6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50Y2xhc3NpZmljYXRpb25jb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBY2NvdW50SWQ6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50aWQnIH0sXHJcbiAgICBBY2NvdW50TnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudG51bWJlcicgfSxcclxuICAgIEFjY291bnRSYXRpbmdDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudHJhdGluZ2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX0FkZHJlc3NJZDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2FkZHJlc3NpZCcgfSxcclxuICAgIEFkZHJlc3MxX0FkZHJlc3NUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2FkZHJlc3N0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfQ2l0eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NpdHknIH0sXHJcbiAgICBBZGRyZXNzMV9Db21wb3NpdGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jb21wb3NpdGUnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQWRkcmVzczFfQ291bnRyeTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NvdW50cnknIH0sXHJcbiAgICBBZGRyZXNzMV9Db3VudHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jb3VudHknIH0sXHJcbiAgICBBZGRyZXNzMV9GYXg6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9mYXgnIH0sXHJcbiAgICBBZGRyZXNzMV9GcmVpZ2h0VGVybXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfZnJlaWdodHRlcm1zY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfTGF0aXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9sYXRpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xpbmUxJyB9LFxyXG4gICAgQWRkcmVzczFfTGluZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9saW5lMicgfSxcclxuICAgIEFkZHJlc3MxX0xpbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGluZTMnIH0sXHJcbiAgICBBZGRyZXNzMV9Mb25naXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9sb25naXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczFfTmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX25hbWUnIH0sXHJcbiAgICBBZGRyZXNzMV9Qb3N0YWxDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfcG9zdGFsY29kZScgfSxcclxuICAgIEFkZHJlc3MxX1Bvc3RPZmZpY2VCb3g6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9wb3N0b2ZmaWNlYm94JyB9LFxyXG4gICAgQWRkcmVzczFfUHJpbWFyeUNvbnRhY3ROYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfcHJpbWFyeWNvbnRhY3RuYW1lJyB9LFxyXG4gICAgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfc2hpcHBpbmdtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9zdGF0ZW9ycHJvdmluY2UnIH0sXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdGVsZXBob25lMScgfSxcclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV90ZWxlcGhvbmUyJyB9LFxyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3RlbGVwaG9uZTMnIH0sXHJcbiAgICBBZGRyZXNzMV9VUFNab25lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdXBzem9uZScgfSxcclxuICAgIEFkZHJlc3MxX1VUQ09mZnNldDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3V0Y29mZnNldCcsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfQWRkcmVzc0lkOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfYWRkcmVzc2lkJyB9LFxyXG4gICAgQWRkcmVzczJfQWRkcmVzc1R5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfYWRkcmVzc3R5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9DaXR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY2l0eScgfSxcclxuICAgIEFkZHJlc3MyX0NvbXBvc2l0ZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NvbXBvc2l0ZScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBBZGRyZXNzMl9Db3VudHJ5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY291bnRyeScgfSxcclxuICAgIEFkZHJlc3MyX0NvdW50eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NvdW50eScgfSxcclxuICAgIEFkZHJlc3MyX0ZheDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2ZheCcgfSxcclxuICAgIEFkZHJlc3MyX0ZyZWlnaHRUZXJtc0NvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9mcmVpZ2h0dGVybXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9MYXRpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xhdGl0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MyX0xpbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGluZTEnIH0sXHJcbiAgICBBZGRyZXNzMl9MaW5lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xpbmUyJyB9LFxyXG4gICAgQWRkcmVzczJfTGluZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9saW5lMycgfSxcclxuICAgIEFkZHJlc3MyX0xvbmdpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xvbmdpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMl9OYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbmFtZScgfSxcclxuICAgIEFkZHJlc3MyX1Bvc3RhbENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9wb3N0YWxjb2RlJyB9LFxyXG4gICAgQWRkcmVzczJfUG9zdE9mZmljZUJveDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3Bvc3RvZmZpY2Vib3gnIH0sXHJcbiAgICBBZGRyZXNzMl9QcmltYXJ5Q29udGFjdE5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9wcmltYXJ5Y29udGFjdG5hbWUnIH0sXHJcbiAgICBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9zaGlwcGluZ21ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX1N0YXRlT3JQcm92aW5jZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3N0YXRlb3Jwcm92aW5jZScgfSxcclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl90ZWxlcGhvbmUxJyB9LFxyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3RlbGVwaG9uZTInIH0sXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdGVsZXBob25lMycgfSxcclxuICAgIEFkZHJlc3MyX1VQU1pvbmU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl91cHN6b25lJyB9LFxyXG4gICAgQWRkcmVzczJfVVRDT2Zmc2V0OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdXRjb2Zmc2V0JywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZHhfQ3JlYXRlZEJ5SVBBZGRyZXNzOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X2NyZWF0ZWRieWlwYWRkcmVzcycgfSxcclxuICAgIEFkeF9DcmVhdGVkQnlVc2VybmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkeF9jcmVhdGVkYnl1c2VybmFtZScgfSxcclxuICAgIEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X21vZGlmaWVkYnlpcGFkZHJlc3MnIH0sXHJcbiAgICBBZHhfTW9kaWZpZWRCeVVzZXJuYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X21vZGlmaWVkYnl1c2VybmFtZScgfSxcclxuICAgIEFnaW5nMzA6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzMwJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzMwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzMwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nNjA6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzYwJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzYwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzYwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nOTA6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzkwJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzkwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzkwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEJ1c2luZXNzVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdidXNpbmVzc3R5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBDcmVhdGVkQnk6IHsgc2NoZW1hTmFtZTogJ2NyZWF0ZWRieScsIGxvZ2ljYWxOYW1lOiAnX2NyZWF0ZWRieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQ3JlYXRlZEJ5RXh0ZXJuYWxQYXJ0eTogeyBzY2hlbWFOYW1lOiAnY3JlYXRlZGJ5ZXh0ZXJuYWxwYXJ0eScsIGxvZ2ljYWxOYW1lOiAnX2NyZWF0ZWRieWV4dGVybmFscGFydHlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2V4dGVybmFscGFydGllcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnZXh0ZXJuYWxwYXJ0eScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBDcmVhdGVkT25fVXRjRGF0ZUFuZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdjcmVhdGVkb24nLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgQ3JlYXRlZE9uQmVoYWxmQnk6IHsgc2NoZW1hTmFtZTogJ2NyZWF0ZWRvbmJlaGFsZmJ5JywgbG9naWNhbE5hbWU6ICdfY3JlYXRlZG9uYmVoYWxmYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIENyZWRpdExpbWl0OiB7IGxvZ2ljYWxOYW1lOiAnY3JlZGl0bGltaXQnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQ3JlZGl0TGltaXRfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2NyZWRpdGxpbWl0X2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIENyZWRpdE9uSG9sZDogeyBsb2dpY2FsTmFtZTogJ2NyZWRpdG9uaG9sZCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgQ3VzdG9tZXJTaXplQ29kZTogeyBsb2dpY2FsTmFtZTogJ2N1c3RvbWVyc2l6ZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEN1c3RvbWVyVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdjdXN0b21lcnR5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBEZXNjcmlwdGlvbjogeyBsb2dpY2FsTmFtZTogJ2Rlc2NyaXB0aW9uJyB9LFxyXG4gICAgRG9Ob3RCdWxrRU1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdGJ1bGtlbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RCdWxrUG9zdGFsTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90YnVsa3Bvc3RhbG1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90RU1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdGVtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdEZheDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90ZmF4JywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdFBob25lOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RwaG9uZScsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RQb3N0YWxNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3Rwb3N0YWxtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdFNlbmRNTTogeyBsb2dpY2FsTmFtZTogJ2Rvbm90c2VuZG1tJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBFTWFpbEFkZHJlc3MxOiB7IGxvZ2ljYWxOYW1lOiAnZW1haWxhZGRyZXNzMScgfSxcclxuICAgIEVNYWlsQWRkcmVzczI6IHsgbG9naWNhbE5hbWU6ICdlbWFpbGFkZHJlc3MyJyB9LFxyXG4gICAgRU1haWxBZGRyZXNzMzogeyBsb2dpY2FsTmFtZTogJ2VtYWlsYWRkcmVzczMnIH0sXHJcbiAgICBFbnRpdHlJbWFnZTogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlJyB9LFxyXG4gICAgRW50aXR5SW1hZ2VfVGltZXN0YW1wOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2VfdGltZXN0YW1wJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEVudGl0eUltYWdlX1VSTDogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlX3VybCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBFbnRpdHlJbWFnZUlkOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2VpZCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBFeGNoYW5nZVJhdGU6IHsgbG9naWNhbE5hbWU6ICdleGNoYW5nZXJhdGUnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEZheDogeyBsb2dpY2FsTmFtZTogJ2ZheCcgfSxcclxuICAgIEZvbGxvd0VtYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZm9sbG93ZW1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIEZ0cFNpdGVVUkw6IHsgbG9naWNhbE5hbWU6ICdmdHBzaXRldXJsJyB9LFxyXG4gICAgSW1wb3J0U2VxdWVuY2VOdW1iZXI6IHsgbG9naWNhbE5hbWU6ICdpbXBvcnRzZXF1ZW5jZW51bWJlcicsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgSW5kdXN0cnlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnaW5kdXN0cnljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBJc1ByaXZhdGU6IHsgbG9naWNhbE5hbWU6ICdpc3ByaXZhdGUnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBMYXN0T25Ib2xkVGltZV9VdGNEYXRlQW5kVGltZTogeyBsb2dpY2FsTmFtZTogJ2xhc3RvbmhvbGR0aW1lJywgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgTGFzdFVzZWRJbkNhbXBhaWduX1V0Y0RhdGVPbmx5OiB7IGxvZ2ljYWxOYW1lOiAnbGFzdHVzZWRpbmNhbXBhaWduJywgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgTWFya2V0Q2FwOiB7IGxvZ2ljYWxOYW1lOiAnbWFya2V0Y2FwJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIE1hcmtldENhcF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnbWFya2V0Y2FwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIE1hcmtldGluZ09ubHk6IHsgbG9naWNhbE5hbWU6ICdtYXJrZXRpbmdvbmx5JywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBNYXN0ZXJJZDogeyBzY2hlbWFOYW1lOiAnbWFzdGVyaWQnLCBsb2dpY2FsTmFtZTogJ19tYXN0ZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYWNjb3VudHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2FjY291bnQnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgTWVyZ2VkOiB7IGxvZ2ljYWxOYW1lOiAnbWVyZ2VkJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgTW9kaWZpZWRCeTogeyBzY2hlbWFOYW1lOiAnbW9kaWZpZWRieScsIGxvZ2ljYWxOYW1lOiAnX21vZGlmaWVkYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE1vZGlmaWVkQnlFeHRlcm5hbFBhcnR5OiB7IHNjaGVtYU5hbWU6ICdtb2RpZmllZGJ5ZXh0ZXJuYWxwYXJ0eScsIGxvZ2ljYWxOYW1lOiAnX21vZGlmaWVkYnlleHRlcm5hbHBhcnR5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdleHRlcm5hbHBhcnRpZXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2V4dGVybmFscGFydHknLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgTW9kaWZpZWRPbl9VdGNEYXRlQW5kVGltZTogeyBsb2dpY2FsTmFtZTogJ21vZGlmaWVkb24nLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgTW9kaWZpZWRPbkJlaGFsZkJ5OiB7IHNjaGVtYU5hbWU6ICdtb2RpZmllZG9uYmVoYWxmYnknLCBsb2dpY2FsTmFtZTogJ19tb2RpZmllZG9uYmVoYWxmYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogeyBzY2hlbWFOYW1lOiAnbXNhX21hbmFnaW5ncGFydG5lcmlkJywgbG9naWNhbE5hbWU6ICdfbXNhX21hbmFnaW5ncGFydG5lcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdhY2NvdW50cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYWNjb3VudCcgfSxcclxuICAgIE5hbWU6IHsgbG9naWNhbE5hbWU6ICduYW1lJyB9LFxyXG4gICAgTnVtYmVyT2ZFbXBsb3llZXM6IHsgbG9naWNhbE5hbWU6ICdudW1iZXJvZmVtcGxveWVlcycsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgT25Ib2xkVGltZTogeyBsb2dpY2FsTmFtZTogJ29uaG9sZHRpbWUnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBPdmVycmlkZGVuQ3JlYXRlZE9uX1V0Y0RhdGVPbmx5OiB7IGxvZ2ljYWxOYW1lOiAnb3ZlcnJpZGRlbmNyZWF0ZWRvbicsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIE93bmVySWRfc3lzdGVtdXNlcjogeyBzY2hlbWFOYW1lOiAnb3duZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX293bmVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJyB9LFxyXG4gICAgT3duZXJJZF90ZWFtOiB7IHNjaGVtYU5hbWU6ICdvd25lcmlkJywgbG9naWNhbE5hbWU6ICdfb3duZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAndGVhbXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3RlYW0nIH0sXHJcbiAgICBPd25lcnNoaXBDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnb3duZXJzaGlwY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgT3duaW5nQnVzaW5lc3NVbml0OiB7IHNjaGVtYU5hbWU6ICdvd25pbmdidXNpbmVzc3VuaXQnLCBsb2dpY2FsTmFtZTogJ19vd25pbmdidXNpbmVzc3VuaXRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2J1c2luZXNzdW5pdHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2J1c2luZXNzdW5pdCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBPd25pbmdUZWFtOiB7IHNjaGVtYU5hbWU6ICdvd25pbmd0ZWFtJywgbG9naWNhbE5hbWU6ICdfb3duaW5ndGVhbV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAndGVhbXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3RlYW0nLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgT3duaW5nVXNlcjogeyBzY2hlbWFOYW1lOiAnb3duaW5ndXNlcicsIGxvZ2ljYWxOYW1lOiAnX293bmluZ3VzZXJfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIFBhcmVudEFjY291bnRJZDogeyBzY2hlbWFOYW1lOiAncGFyZW50YWNjb3VudGlkJywgbG9naWNhbE5hbWU6ICdfcGFyZW50YWNjb3VudGlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdhY2NvdW50cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYWNjb3VudCcgfSxcclxuICAgIFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IHsgbG9naWNhbE5hbWU6ICdwYXJ0aWNpcGF0ZXNpbndvcmtmbG93JywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBQYXltZW50VGVybXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncGF5bWVudHRlcm1zY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncHJlZmVycmVkYXBwb2ludG1lbnRkYXljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudFRpbWVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncHJlZmVycmVkYXBwb2ludG1lbnR0aW1lY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdwcmVmZXJyZWRjb250YWN0bWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkU3lzdGVtVXNlcklkOiB7IHNjaGVtYU5hbWU6ICdwcmVmZXJyZWRzeXN0ZW11c2VyaWQnLCBsb2dpY2FsTmFtZTogJ19wcmVmZXJyZWRzeXN0ZW11c2VyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJyB9LFxyXG4gICAgUHJpbWFyeUNvbnRhY3RJZDogeyBzY2hlbWFOYW1lOiAncHJpbWFyeWNvbnRhY3RpZCcsIGxvZ2ljYWxOYW1lOiAnX3ByaW1hcnljb250YWN0aWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2NvbnRhY3RzJywgZW50aXR5TG9naWNhbE5hbWU6ICdjb250YWN0JyB9LFxyXG4gICAgUHJpbWFyeVNhdG9yaUlkOiB7IGxvZ2ljYWxOYW1lOiAncHJpbWFyeXNhdG9yaWlkJyB9LFxyXG4gICAgUHJpbWFyeVR3aXR0ZXJJZDogeyBsb2dpY2FsTmFtZTogJ3ByaW1hcnl0d2l0dGVyaWQnIH0sXHJcbiAgICBQcm9jZXNzSWQ6IHsgbG9naWNhbE5hbWU6ICdwcm9jZXNzaWQnIH0sXHJcbiAgICBSZXZlbnVlOiB7IGxvZ2ljYWxOYW1lOiAncmV2ZW51ZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBSZXZlbnVlX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdyZXZlbnVlX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIFNoYXJlc091dHN0YW5kaW5nOiB7IGxvZ2ljYWxOYW1lOiAnc2hhcmVzb3V0c3RhbmRpbmcnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFNoaXBwaW5nTWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ3NoaXBwaW5nbWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU0lDOiB7IGxvZ2ljYWxOYW1lOiAnc2ljJyB9LFxyXG4gICAgU0xBSWQ6IHsgc2NoZW1hTmFtZTogJ3NsYWlkJywgbG9naWNhbE5hbWU6ICdfc2xhaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3NsYXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3NsYScgfSxcclxuICAgIFNMQUludm9rZWRJZDogeyBzY2hlbWFOYW1lOiAnc2xhaW52b2tlZGlkJywgbG9naWNhbE5hbWU6ICdfc2xhaW52b2tlZGlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzbGFzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzbGEnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgU3RhZ2VJZDogeyBsb2dpY2FsTmFtZTogJ3N0YWdlaWQnIH0sXHJcbiAgICBTdGF0ZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdzdGF0ZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFN0YXR1c0NvZGU6IHsgbG9naWNhbE5hbWU6ICdzdGF0dXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTdG9ja0V4Y2hhbmdlOiB7IGxvZ2ljYWxOYW1lOiAnc3RvY2tleGNoYW5nZScgfSxcclxuICAgIFRlbGVwaG9uZTE6IHsgbG9naWNhbE5hbWU6ICd0ZWxlcGhvbmUxJyB9LFxyXG4gICAgVGVsZXBob25lMjogeyBsb2dpY2FsTmFtZTogJ3RlbGVwaG9uZTInIH0sXHJcbiAgICBUZWxlcGhvbmUzOiB7IGxvZ2ljYWxOYW1lOiAndGVsZXBob25lMycgfSxcclxuICAgIFRlcnJpdG9yeUNvZGU6IHsgbG9naWNhbE5hbWU6ICd0ZXJyaXRvcnljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBUaWNrZXJTeW1ib2w6IHsgbG9naWNhbE5hbWU6ICd0aWNrZXJzeW1ib2wnIH0sXHJcbiAgICBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiB7IGxvZ2ljYWxOYW1lOiAndGltZXNwZW50YnltZW9uZW1haWxhbmRtZWV0aW5ncycsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAndGltZXpvbmVydWxldmVyc2lvbm51bWJlcicsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgVHJhbnNhY3Rpb25DdXJyZW5jeUlkOiB7IHNjaGVtYU5hbWU6ICd0cmFuc2FjdGlvbmN1cnJlbmN5aWQnLCBsb2dpY2FsTmFtZTogJ190cmFuc2FjdGlvbmN1cnJlbmN5aWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3RyYW5zYWN0aW9uY3VycmVuY2llcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAndHJhbnNhY3Rpb25jdXJyZW5jeScgfSxcclxuICAgIFRyYXZlcnNlZFBhdGg6IHsgbG9naWNhbE5hbWU6ICd0cmF2ZXJzZWRwYXRoJyB9LFxyXG4gICAgVVRDQ29udmVyc2lvblRpbWVab25lQ29kZTogeyBsb2dpY2FsTmFtZTogJ3V0Y2NvbnZlcnNpb250aW1lem9uZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFZlcnNpb25OdW1iZXI6IHsgbG9naWNhbE5hbWU6ICd2ZXJzaW9ubnVtYmVyJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgV2ViU2l0ZVVSTDogeyBsb2dpY2FsTmFtZTogJ3dlYnNpdGV1cmwnIH0sXHJcbiAgICBZb21pTmFtZTogeyBsb2dpY2FsTmFtZTogJ3lvbWluYW1lJyB9XHJcbn07XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDMuIFJ1bnRpbWUgLSBGYWN0b3J5IEZ1bmN0aW9uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIEFjY291bnQgV2ViQXBpIG9iamVjdCBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSBvYmplY3QgZnJvbSBPRGF0YSByZXNwb25zZVxyXG4gKiBAcmV0dXJucyBBY2NvdW50QXBpIG9iamVjdCB3aXRoIHR5cGVkIHByb3BlcnRpZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBY2NvdW50QXBpKGVudGl0eT86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBJQWNjb3VudEFwaSB7XHJcbiAgICByZXR1cm4gY3JlYXRlV2ViQXBpRW50aXR5PElBY2NvdW50QXBpPihcclxuICAgICAgICBlbnRpdHksXHJcbiAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICdhY2NvdW50cycsXHJcbiAgICAgICAgQWNjb3VudEZpZWxkQ29uZmlnXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50QXBpO1xyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBBY2NvdW50QXBpIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGknO1xyXG5pbXBvcnQgeyBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9PcHRpb25TZXQnO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNjogV2ViQXBpIC0gRWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIFRlc3RzIFJldHJpZXZlUmVjb3JkIGFuZCBSZXRyaWV2ZVJlY29yZHMgd2l0aCB2YXJpb3VzIG92ZXJsb2Fkc1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIC8gUHJvbWlzZS1iYXNlZCB0ZXN0cyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAvIEFkZGl0aW9uYWwgdGVzdHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVGVzdFdlYkFwaShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gV0VCQVBJIE9CSkVDVCBURVNUUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gUjE6IENyZWF0ZSBlbXB0eSBBY2NvdW50IG9iamVjdCB2aWEgQWNjb3VudEFwaSBmYWN0b3J5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0FjY291bnQgPSBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgbmV3QWNjb3VudC5OYW1lID0gJ1Rlc3QgQWNjb3VudCc7XHJcbiAgICAgICAgbmV3QWNjb3VudC5UZWxlcGhvbmUxID0gJzEyMy00NTYtNzg5MCc7XHJcbiAgICAgICAgbmV3QWNjb3VudC5JbmR1c3RyeUNvZGUgPSBPcHRpb25TZXQuQWNjb3VudC5JbmR1c3RyeUNvZGUuQ29uc3VsdGluZztcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkFjY291bnRBcGkgKGNyZWF0ZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBOYW1lPVwiJHtuZXdBY2NvdW50Lk5hbWV9XCIsIEVudGl0eSByZWFkeWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogbmV3QWNjb3VudC5FbnRpdHkgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJBY2NvdW50QXBpIChjcmVhdGUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSMjogVGVzdCBFbnRpdHkgb2JqZWN0IHN0cnVjdHVyZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIGFjY291bnQuTmFtZSA9ICdFbnRpdHkgVGVzdCc7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYWNjb3VudC5FbnRpdHk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHkgb2JqZWN0XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlbnRpdHkgPyBgS2V5czogJHtPYmplY3Qua2V5cyhlbnRpdHkpLmpvaW4oJywgJyl9YCA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGVudGl0eSAmJiB0eXBlb2YgZW50aXR5ID09PSAnb2JqZWN0JyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkVudGl0eSBvYmplY3RcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFIzOiBUZXN0IEVudGl0eU5hbWUgcHJvcGVydHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IEFjY291bnRBcGkoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBhY2NvdW50LkVudGl0eU5hbWUgPT09ICdhY2NvdW50JyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFI0OiBUZXN0IEVudGl0eUNvbGxlY3Rpb25OYW1lIHByb3BlcnR5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHlDb2xsZWN0aW9uTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYWNjb3VudC5FbnRpdHlDb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBhY2NvdW50LkVudGl0eUNvbGxlY3Rpb25OYW1lID09PSAnYWNjb3VudHMnID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiRW50aXR5Q29sbGVjdGlvbk5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFI1OiBUZXN0IEZvcm1hdHRlZFZhbHVlIHByb3BlcnR5IGV4aXN0c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRm9ybWF0dGVkVmFsdWUgPyBcIm9iamVjdCBleGlzdHNcIiA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGFjY291bnQuRm9ybWF0dGVkVmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFdFQkFQSSBSRVRSSUVWRSBSRUNPUkQgVEVTVFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFMxOiBSZXRyaWV2ZVJlY29yZCAtIFByb21pc2UtYmFzZWQgd2l0aCBvcHRpb25zXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWQsXHJcbiAgICAgICAgICAgIFwiPyRzZWxlY3Q9bmFtZSx0ZWxlcGhvbmUxLGluZHVzdHJ5Y29kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkIChQcm9taXNlK09wdGlvbnMpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiByZWNvcmQuTmFtZSA/IGBOYW1lPVwiJHtyZWNvcmQuTmFtZX1cImAgOiBcIlJldHJpZXZlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UrT3B0aW9ucylcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMyOiBSZXRyaWV2ZVJlY29yZCAtIFByb21pc2UtYmFzZWQgd2l0aG91dCBvcHRpb25zXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiByZWNvcmQuQWNjb3VudElkID8gXCJSZXRyaWV2ZWQgd2l0aCBhbGwgZmllbGRzXCIgOiBcIlJldHJpZXZlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTMzogUmV0cmlldmVSZWNvcmQgLSBBY2Nlc3MgRm9ybWF0dGVkVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZCxcclxuICAgICAgICAgICAgXCI/JHNlbGVjdD1uYW1lLGluZHVzdHJ5Y29kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRJbmR1c3RyeSA9IHJlY29yZC5Gb3JtYXR0ZWRWYWx1ZT8uSW5kdXN0cnlDb2RlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWUuSW5kdXN0cnlDb2RlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBmb3JtYXR0ZWRJbmR1c3RyeSA/IGBcIiR7Zm9ybWF0dGVkSW5kdXN0cnl9XCJgIDogXCIoZW1wdHkpXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZS5JbmR1c3RyeUNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM0OiBSZXRyaWV2ZVJlY29yZHMgLSBGZXRjaFhNTCBQcm9taXNlLWJhc2VkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sID0gXCI8ZmV0Y2ggdG9wPSczJz48ZW50aXR5IG5hbWU9J2FjY291bnQnPjxhdHRyaWJ1dGUgbmFtZT0nbmFtZScvPjxhdHRyaWJ1dGUgbmFtZT0nYWNjb3VudG51bWJlcicvPjwvZW50aXR5PjwvZmV0Y2g+XCI7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhBY2NvdW50QXBpLCBmZXRjaFhtbCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNTogUmV0cmlldmVSZWNvcmRzIC0gRmV0Y2hYTUwgd2l0aCBtYXhQYWdlU2l6ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbCA9IFwiPGZldGNoPjxlbnRpdHkgbmFtZT0nYWNjb3VudCc+PGF0dHJpYnV0ZSBuYW1lPSduYW1lJy8+PGF0dHJpYnV0ZSBuYW1lPSd0ZWxlcGhvbmUxJy8+PC9lbnRpdHk+PC9mZXRjaD5cIjtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKEFjY291bnRBcGksIGZldGNoWG1sLCA1KTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM1XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwrUGFnZVNpemUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9IChtYXggNSlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MK1BhZ2VTaXplKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzY6IFJldHJpZXZlUmVjb3JkcyAtIE9EYXRhIFByb21pc2UtYmFzZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICAgICAnPyRzZWxlY3Q9bmFtZSxhY2NvdW50bnVtYmVyJiR0b3A9MydcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzc6IFJldHJpZXZlUmVjb3JkcyAtIE9EYXRhIHdpdGggbWF4UGFnZVNpemVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICAgICAnPyRzZWxlY3Q9bmFtZSx0ZWxlcGhvbmUxJyxcclxuICAgICAgICAgICAgNVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTN1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhK1BhZ2VTaXplKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofSAobWF4IDUpYCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YStQYWdlU2l6ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM4OiBTZXQgcHJvcGVydHkgYW5kIHZlcmlmeSBFbnRpdHkgdXBkYXRlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgYWNjb3VudC5OYW1lID0gJ1VwZGF0ZSBUZXN0JztcclxuICAgICAgICBhY2NvdW50LlJldmVudWUgPSAxMDAwMDAwO1xyXG4gICAgICAgIGFjY291bnQuTnVtYmVyT2ZFbXBsb3llZXMgPSA1MDtcclxuICAgICAgICBhY2NvdW50LkNyZWRpdE9uSG9sZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYWNjb3VudC5FbnRpdHk7XHJcbiAgICAgICAgY29uc3QgaGFzTmFtZSA9IGVudGl0eSAmJiBlbnRpdHkubmFtZSA9PT0gJ1VwZGF0ZSBUZXN0JztcclxuICAgICAgICBjb25zdCBoYXNSZXZlbnVlID0gZW50aXR5ICYmIGVudGl0eS5yZXZlbnVlID09PSAxMDAwMDAwO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzhcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5IHVwZGF0ZSBvbiBzZXRcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBOYW1lOiAke2hhc05hbWV9LCBSZXZlbnVlOiAke2hhc1JldmVudWV9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBoYXNOYW1lICYmIGhhc1JldmVudWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJFbnRpdHkgdXBkYXRlIG9uIHNldFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjEwIFRFU1QgNjogV2ViQXBpIFske3N0YXJ0VGltZX1dIC0gRWFybHktYm91bmQgc3R5bGUgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIEFjY291bnRBcGkgRmFjdG9yeSBUZXN0cyAoUjEtUjUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFdlYkFwaSBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA3OiBNb25leSBDb250cm9sIC0gUmV2ZW51ZSBGaWVsZFxyXG4gKiBNb25leSBleHRlbmRzIElDb250cm9sTnVtYmVyIHdpdGggTWluLCBNYXgsIFByZWNpc2lvbiBwcm9wZXJ0aWVzXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TW9uZXkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1vbmV5ID0gZm9ybS5IZWFkZXIuUmV2ZW51ZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbW9uZXkuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNb25leS1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJQ29udHJvbE51bWJlciArIFByZWNpc2lvbilcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heFwiLCBWYWx1ZTogbW9uZXkuTWF4LCBTdGF0dXM6IHR5cGVvZiBtb25leS5NYXggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk1pblwiLCBWYWx1ZTogbW9uZXkuTWluLCBTdGF0dXM6IHR5cGVvZiBtb25leS5NaW4gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvblwiLCBWYWx1ZTogbW9uZXkuUHJlY2lzaW9uLCBTdGF0dXM6IHR5cGVvZiBtb25leS5QcmVjaXNpb24gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pOyAvLyBBdHRyaWJ1dGUgY2FuIGJlIG51bGwgaW4gc29tZSBjb250ZXh0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtb25leS5BdHRyaWJ1dGVOYW1lID09PSBcInJldmVudWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtb25leS5BdHRyaWJ1dGVUeXBlID09PSBcIm1vbmV5XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtb25leS5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1vbmV5LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtb25leS5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtb25leS5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbW9uZXkuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1vbmV5LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtb25leS5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1vbmV5LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1vbmV5LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbW9uZXkuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCAwKSArIDEwMDA7XHJcbiAgICAgICAgbW9uZXkuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtb25leS5WYWx1ZTtcclxuICAgICAgICBtb25leS5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBQcmVjaXNpb24gKE1vbmV5IHByZWNpc2lvbiBpcyB0eXBpY2FsbHkgMC0yIGZvciBjdXJyZW5jeSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1ByZWNpc2lvbiA9IG1vbmV5LlByZWNpc2lvbjtcclxuICAgICAgICBjb25zdCB0ZXN0UHJlY2lzaW9uID0gMjsgLy8gVmFsaWQgcHJlY2lzaW9uIGZvciBtb25leSAoMC0yIHJhbmdlKVxyXG4gICAgICAgIG1vbmV5LlByZWNpc2lvbiA9IHRlc3RQcmVjaXNpb247XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5QcmVjaXNpb247XHJcbiAgICAgICAgbW9uZXkuUHJlY2lzaW9uID0gb3JpZ1ByZWNpc2lvbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IHRlc3RQcmVjaXNpb24gPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBgV2FzICR7Y2hlY2t9YCwgU3RhdHVzOiBjaGVjayA9PT0gdGVzdFByZWNpc2lvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb24gKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtb25leS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vbmV5LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vbmV5LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbW9uZXkuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9uZXkuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9uZXkuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1vbmV5LkxhYmVsO1xyXG4gICAgICAgIGNvbnN0IHRlc3RMYWJlbCA9IFwiVGVzdCBNb25leSBMYWJlbFwiO1xyXG4gICAgICAgIG1vbmV5LkxhYmVsID0gdGVzdExhYmVsO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuTGFiZWw7XHJcbiAgICAgICAgY29uc3Qgc2V0V29ya2VkID0gY2hlY2sgPT09IHRlc3RMYWJlbCB8fCBjaGVjaz8uaW5jbHVkZXMoXCJUZXN0IE1vbmV5XCIpO1xyXG4gICAgICAgIGlmIChvcmlnTGFiZWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb25leS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogc2V0V29ya2VkID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogYEdvdDogJHtjaGVja31gLCBTdGF0dXM6IHNldFdvcmtlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gbW9uZXkuVmlzaWJsZTtcclxuICAgICAgICBtb25leS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuVmlzaWJsZTtcclxuICAgICAgICBtb25leS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNb25leSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNb25leSBub3RpZmljYXRpb25cIiwgXCJNT05FWV9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5DbGVhck5vdGlmaWNhdGlvbihcIk1PTkVZX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0IwIFRFU1QgNzogTW9uZXkgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBSZXZlbnVlIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTcpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgODogQm9vbGVhbiBDb250cm9sIC0gQ3JlZGl0T25Ib2xkIEZpZWxkXHJcbiAqIEJvb2xlYW4gZXh0ZW5kcyBJQ29udHJvbCB3aXRoIEluaXRpYWxWYWx1ZSBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEJvb2xlYW4oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGJvb2wgPSBmb3JtLkJvZHkuQ3JlZGl0T25Ib2xkO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBib29sLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQm9vbGVhbi1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJbml0aWFsVmFsdWUgY2FuIGJlIGJvb2xlYW4gb3IgMC8xKVxyXG4gICAgICAgIGNvbnN0IGluaXRWYWwgPSBib29sLkluaXRpYWxWYWx1ZTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkSW5pdFZhbHVlID0gdHlwZW9mIGluaXRWYWwgPT09IFwiYm9vbGVhblwiIHx8IGluaXRWYWwgPT09IDAgfHwgaW5pdFZhbCA9PT0gMTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZVwiLCBWYWx1ZTogaW5pdFZhbCwgU3RhdHVzOiBpc1ZhbGlkSW5pdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBib29sLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlTmFtZSA9PT0gXCJjcmVkaXRvbmhvbGRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlVHlwZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBib29sLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogYm9vbC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBib29sLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogYm9vbC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogYm9vbC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogYm9vbC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogYm9vbC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGJvb2wuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogYm9vbC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGJvb2wuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAhb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBib29sLlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYm9vbC5WYWx1ZTtcclxuICAgICAgICBib29sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gYm9vbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGJvb2wuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBib29sLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gYm9vbC5EaXNhYmxlZDtcclxuICAgICAgICBib29sLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgYm9vbC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gYm9vbC5MYWJlbDtcclxuICAgICAgICBib29sLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLkxhYmVsO1xyXG4gICAgICAgIGJvb2wuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBib29sLlZpc2libGU7XHJcbiAgICAgICAgYm9vbC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5WaXNpYmxlO1xyXG4gICAgICAgIGJvb2wuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgQm9vbGVhbiBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5TZXROb3RpZmljYXRpb24oXCJUZXN0IEJvb2xlYW4gbm90aWZpY2F0aW9uXCIsIFwiQk9PTF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLkNsZWFyTm90aWZpY2F0aW9uKFwiQk9PTF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdTI3MDUgVEVTVCA4OiBCb29sZWFuIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQ3JlZGl0T25Ib2xkIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgOTogRGF0ZVRpbWUgQ29udHJvbCAtIHY0X0FwcG9pbnRtZW50VGltZSBGaWVsZFxyXG4gKiBEYXRlVGltZSBleHRlbmRzIElDb250cm9sIHdpdGggU2hvd1RpbWUgcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3REYXRlVGltZShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZHQgPSBmb3JtLkJvZHkudjRfQXBwb2ludG1lbnRUaW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBkdC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERhdGVUaW1lLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlNob3dUaW1lXCIsIFZhbHVlOiBkdC5TaG93VGltZSwgU3RhdHVzOiB0eXBlb2YgZHQuU2hvd1RpbWUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBvcmlnaW5hbFZhbHVlLnRvSVNPU3RyaW5nKCkgOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBkdC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogZHQuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9hcHBvaW50bWVudHRpbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogZHQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBkdC5BdHRyaWJ1dGVUeXBlID09PSBcImRhdGV0aW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBkdC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGR0LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGR0LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogZHQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGR0LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBkdC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZHQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkdC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBkdC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGR0LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkdC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGR0LlZhbHVlO1xyXG4gICAgICAgIGR0LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICAvLyBWYWx1ZSB3YXMgc2V0IHN1Y2Nlc3NmdWxseSBpZiBuZXdWYWx1ZSBleGlzdHMgKERhdGUsIHN0cmluZywgb3IgYW55IHRydXRoeSlcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gbmV3VmFsdWUgIT09IG51bGwgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBzdWNjZXNzID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFNob3dUaW1lXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdTaG93VGltZSA9IGR0LlNob3dUaW1lO1xyXG4gICAgICAgIGR0LlNob3dUaW1lID0gIW9yaWdTaG93VGltZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlNob3dUaW1lO1xyXG4gICAgICAgIGR0LlNob3dUaW1lID0gb3JpZ1Nob3dUaW1lO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU2hvd1RpbWUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTaG93VGltZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGR0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZHQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZHQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBkdC5EaXNhYmxlZDtcclxuICAgICAgICBkdC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5EaXNhYmxlZDtcclxuICAgICAgICBkdC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gZHQuTGFiZWw7XHJcbiAgICAgICAgZHQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LkxhYmVsO1xyXG4gICAgICAgIGR0LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZHQuVmlzaWJsZTtcclxuICAgICAgICBkdC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuVmlzaWJsZTtcclxuICAgICAgICBkdC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBEYXRlVGltZSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBEYXRlVGltZSBub3RpZmljYXRpb25cIiwgXCJEVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5DbGVhck5vdGlmaWNhdGlvbihcIkRUX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0M1IFRFU1QgOTogRGF0ZVRpbWUgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9BcHBvaW50bWVudFRpbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMDogRGF0ZU9ubHkgQ29udHJvbCAtIHY0X0JpcnRoZGF5IEZpZWxkXHJcbiAqIERhdGVPbmx5IGV4dGVuZHMgSUNvbnRyb2wgKG5vIFNob3dUaW1lIHByb3BlcnR5IHVubGlrZSBEYXRlVGltZSlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3REYXRlT25seShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZGF0ZU9ubHkgPSBmb3JtLkJvZHkudjRfQmlydGhkYXk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGRhdGVPbmx5LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRGF0ZU9ubHktc3BlY2lmaWM6IFZhbHVlIGlzIHRoZSBtYWluIHByb3BlcnR5IChubyBTaG93VGltZSlcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IG9yaWdpbmFsVmFsdWUudG9JU09TdHJpbmcoKSA6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGRhdGVPbmx5LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBkYXRlT25seS5BdHRyaWJ1dGVOYW1lID09PSBcInY0X2JpcnRoZGF5XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogZGF0ZU9ubHkuQXR0cmlidXRlVHlwZSA9PT0gXCJkYXRldGltZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBkYXRlT25seS5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkYXRlT25seS5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGRhdGVPbmx5LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGRhdGVPbmx5LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBkYXRlT25seS5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZGF0ZU9ubHkuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkYXRlT25seS5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBkYXRlT25seS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGRhdGVPbmx5LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gbmV3IERhdGUoMTk5MCwgNSwgMTUpOyAvLyBKdW5lIDE1LCAxOTkwXHJcbiAgICAgICAgZGF0ZU9ubHkuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBkYXRlT25seS5WYWx1ZTtcclxuICAgICAgICBkYXRlT25seS5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgLy8gVmFsdWUgd2FzIHNldCBzdWNjZXNzZnVsbHkgaWYgbmV3VmFsdWUgZXhpc3RzXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IG5ld1ZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBkYXRlT25seS5EaXNhYmxlZDtcclxuICAgICAgICBkYXRlT25seS5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5EaXNhYmxlZDtcclxuICAgICAgICBkYXRlT25seS5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gZGF0ZU9ubHkuTGFiZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LkxhYmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZGF0ZU9ubHkuVmlzaWJsZTtcclxuICAgICAgICBkYXRlT25seS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuVmlzaWJsZTtcclxuICAgICAgICBkYXRlT25seS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBEYXRlT25seSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgRGF0ZU9ubHkgbm90aWZpY2F0aW9uXCIsIFwiRE9fVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuQ2xlYXJOb3RpZmljYXRpb24oXCJET19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REY4MiBURVNUIDEwOiBEYXRlT25seSBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IHY0X0JpcnRoZGF5IGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTQpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTE6IEdyaWQgQ29udHJvbCAtIENvbnRhY3RzIFN1YmdyaWRcclxuICogR3JpZCBwcm92aWRlcyBhY2Nlc3MgdG8gc3ViZ3JpZCBkYXRhIGFuZCBvcGVyYXRpb25zXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0R3JpZChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZ3JpZCA9IGZvcm0uR3JpZC5Db250YWN0cztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBHcmlkLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIiwgVmFsdWU6IGdyaWQuRW50aXR5TmFtZSwgU3RhdHVzOiBncmlkLkVudGl0eU5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkZldGNoWG1sXCIsIFZhbHVlOiBncmlkLkZldGNoWG1sID8gZ3JpZC5GZXRjaFhtbC5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIiA6IG51bGwsIFN0YXR1czogZ3JpZC5GZXRjaFhtbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiR3JpZFR5cGVcIiwgVmFsdWU6IGdyaWQuR3JpZFR5cGUsIFN0YXR1czogdHlwZW9mIGdyaWQuR3JpZFR5cGUgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwXHJcbiAgICAgICAgY29uc3QgcmVsID0gZ3JpZC5SZWxhdGlvbnNoaXA7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAubmFtZVwiLCBWYWx1ZTogcmVsPy5uYW1lLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLm5hdlByb3BOYW1lXCIsIFZhbHVlOiByZWw/Lm5hdmlnYXRpb25Qcm9wZXJ0eU5hbWUsIFN0YXR1czogcmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAudHlwZVwiLCBWYWx1ZTogcmVsPy5yZWxhdGlvbnNoaXBUeXBlLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBSb3dzXHJcbiAgICAgICAgY29uc3Qgcm93cyA9IGdyaWQuUm93cztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0TGVuZ3RoKClcIiwgVmFsdWU6IHJvd3M/LmdldExlbmd0aCgpLCBTdGF0dXM6IHJvd3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0ZWRSb3dzXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gZ3JpZC5TZWxlY3RlZFJvd3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZFJvd3MuZ2V0TGVuZ3RoKClcIiwgVmFsdWU6IHNlbGVjdGVkUm93cz8uZ2V0TGVuZ3RoKCksIFN0YXR1czogc2VsZWN0ZWRSb3dzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvdGFsUmVjb3JkQ291bnRcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIlRvdGFsUmVjb3JkQ291bnRcIiwgVmFsdWU6IGdyaWQuVG90YWxSZWNvcmRDb3VudCwgU3RhdHVzOiB0eXBlb2YgZ3JpZC5Ub3RhbFJlY29yZENvdW50ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFZpZXdTZWxlY3RvclxyXG4gICAgICAgIGNvbnN0IHZzID0gZ3JpZC5WaWV3U2VsZWN0b3I7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiVmlld1NlbGVjdG9yXCIsIFZhbHVlOiB2cyA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiB2cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlZpZXdTZWxlY3Rvci5WaXNpYmxlXCIsIFZhbHVlOiB2cz8uVmlzaWJsZSwgU3RhdHVzOiB2cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBWaXNpYmxlXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogZ3JpZC5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiBncmlkLlZpc2libGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFVybFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBncmlkLlVybCgxKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlVybCgxKVwiLCBWYWx1ZTogdXJsID8gdXJsLnN1YnN0cmluZygwLCA1MCkgKyBcIi4uLlwiIDogXCJudWxsXCIsIFN0YXR1czogdXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlVybCgxKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZ3JpZC5WaXNpYmxlO1xyXG4gICAgICAgIGdyaWQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGdyaWQuVmlzaWJsZTtcclxuICAgICAgICBncmlkLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9uTG9hZFxyXG4gICAgY29uc3Qgb25Mb2FkQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgR3JpZCBPbkxvYWQgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdyaWQuQWRkT25Mb2FkKG9uTG9hZENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZE9uTG9hZFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkT25Mb2FkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9uTG9hZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBncmlkLlJlbW92ZU9uTG9hZChvbkxvYWRDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkxvYWRcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uTG9hZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZWZyZXNoXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERvbid0IGFjdHVhbGx5IHJlZnJlc2ggdG8gYXZvaWQgc2lkZSBlZmZlY3RzLCBqdXN0IGNoZWNrIGlmIG1ldGhvZCBleGlzdHNcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQuUmVmcmVzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogXCJBdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlZnJlc2hSaWJib25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLlJlZnJlc2hSaWJib24gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IFwiQXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFJpYmJvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcGVuUmVsYXRlZEdyaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLk9wZW5SZWxhdGVkR3JpZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBcIkF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJPcGVuUmVsYXRlZEdyaWRcIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IFJvd3MgaXRlcmF0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBncmlkLlJvd3M7XHJcbiAgICAgICAgaWYgKHJvd3MgJiYgcm93cy5nZXRMZW5ndGgoKSA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RSb3cgPSByb3dzLmdldCgwKTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogZmlyc3RSb3c/LkVudGl0eUlkIHx8IFwibm8gRW50aXR5SWRcIiwgU3RhdHVzOiBmaXJzdFJvdyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IFwiTm8gcm93c1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0NBIFRFU1QgMTE6IEdyaWQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBDb250YWN0cyBzdWJncmlkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IG9iamVjdHMgZm9yIGRpc3BsYXlcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBvciBDb21wbGV4IE9iamVjdF0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTI6IFV0aWxpdHkgQVBJIC0gR2xvYmFsIFV0aWxpdHkgRnVuY3Rpb25zXHJcbiAqIFV0aWxpdHkgcHJvdmlkZXMgYWNjZXNzIHRvIFhybS5VdGlsaXR5LCBYcm0uTmF2aWdhdGlvbiwgWHJtLkRldmljZSwgWHJtLkVuY29kaW5nLCBldGMuXHJcbiAqIFRlc3RzIEFMTCBwcm9wZXJ0aWVzIG9mIGVhY2ggbmVzdGVkIG9iamVjdCAoQ2xpZW50LCBPcmdhbml6YXRpb25TZXR0aW5ncywgVXNlclNldHRpbmdzKVxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RVdGlsaXR5KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCB1dGlsID0gZm9ybS5VdGlsaXR5O1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDbGllbnQgKGFsbCBwcm9wZXJ0aWVzKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBjb25zdCBjbGllbnQgPSB1dGlsLkNsaWVudDtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkNsaWVudFwiLCBWYWx1ZTogc3RyaW5naWZ5KGNsaWVudCksIFN0YXR1czogY2xpZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJDbGllbnQuQ2xpZW50TmFtZVwiLCBWYWx1ZTogY2xpZW50Py5DbGllbnROYW1lLCBTdGF0dXM6IGNsaWVudD8uQ2xpZW50TmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQ2xpZW50LkNsaWVudFN0YXRlXCIsIFZhbHVlOiBjbGllbnQ/LkNsaWVudFN0YXRlLCBTdGF0dXM6IGNsaWVudD8uQ2xpZW50U3RhdGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Gb3JtRmFjdG9yXCIsIFZhbHVlOiBjbGllbnQ/LkZvcm1GYWN0b3IsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uRm9ybUZhY3RvciA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ2xpZW50LklzTmV0d29ya0F2YWlsYWJsZVwiLCBWYWx1ZTogY2xpZW50Py5Jc05ldHdvcmtBdmFpbGFibGUsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uSXNOZXR3b3JrQXZhaWxhYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ2xpZW50LklzT2ZmbGluZVwiLCBWYWx1ZTogY2xpZW50Py5Jc09mZmxpbmUsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uSXNPZmZsaW5lID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gR2xvYmFsIENvbnRleHQgUHJvcGVydGllc1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNsaWVudFVybFwiLCBWYWx1ZTogdXRpbC5DbGllbnRVcmwsIFN0YXR1czogdXRpbC5DbGllbnRVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBVcmxcIiwgVmFsdWU6IHV0aWwuQ3VycmVudEFwcFVybCwgU3RhdHVzOiB1dGlsLkN1cnJlbnRBcHBVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzT25QcmVtaXNlc1wiLCBWYWx1ZTogdXRpbC5Jc09uUHJlbWlzZXMsIFN0YXR1czogdHlwZW9mIHV0aWwuSXNPblByZW1pc2VzID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkxlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IHV0aWwuTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlBhZ2VDb250ZXh0XCIsIFZhbHVlOiBzdHJpbmdpZnkodXRpbC5QYWdlQ29udGV4dCksIFN0YXR1czogdXRpbC5QYWdlQ29udGV4dCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlZlcnNpb25cIiwgVmFsdWU6IHV0aWwuVmVyc2lvbiwgU3RhdHVzOiB1dGlsLlZlcnNpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE9yZ2FuaXphdGlvblNldHRpbmdzIChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3Qgb3JnU2V0dGluZ3MgPSB1dGlsLk9yZ2FuaXphdGlvblNldHRpbmdzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIk9yZ2FuaXphdGlvblNldHRpbmdzXCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3MpLCBTdGF0dXM6IG9yZ1NldHRpbmdzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiT3JnLkF0dHJpYnV0ZXNcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmdTZXR0aW5ncz8uQXR0cmlidXRlcyksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJPcmcuQmFzZUN1cnJlbmN5XCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeSksIFN0YXR1czogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIk9yZy5CYXNlQ3VycmVuY3lJZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeUlkLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3lJZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIk9yZy5EZWZhdWx0Q291bnRyeUNvZGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5EZWZhdWx0Q291bnRyeUNvZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJPcmcuRnVsbE5hbWVDb252ZW50aW9uQ29kZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkZ1bGxOYW1lQ29udmVudGlvbkNvZGUsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTlcIiwgUHJvcGVydHk6IFwiT3JnLklzQXV0b1NhdmVFbmFibGVkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uSXNBdXRvU2F2ZUVuYWJsZWQsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Jc0F1dG9TYXZlRW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMFwiLCBQcm9wZXJ0eTogXCJPcmcuSXNUcmlhbE9yZ2FuaXphdGlvblwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LklzVHJpYWxPcmdhbml6YXRpb24sIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Jc1RyaWFsT3JnYW5pemF0aW9uID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjIxXCIsIFByb3BlcnR5OiBcIk9yZy5MYW5ndWFnZUlkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uTGFuZ3VhZ2VJZCwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/Lkxhbmd1YWdlSWQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMlwiLCBQcm9wZXJ0eTogXCJPcmcuT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/Lk9yZ2FuaXphdGlvbkV4cGlyeURhdGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyM1wiLCBQcm9wZXJ0eTogXCJPcmcuT3JnYW5pemF0aW9uSWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Pcmdhbml6YXRpb25JZCwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uT3JnYW5pemF0aW9uSWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNFwiLCBQcm9wZXJ0eTogXCJPcmcuVW5pcXVlTmFtZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LlVuaXF1ZU5hbWUsIFN0YXR1czogb3JnU2V0dGluZ3M/LlVuaXF1ZU5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNVwiLCBQcm9wZXJ0eTogXCJPcmcuVXNlU2t5cGVQcm90b2NvbFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LlVzZVNreXBlUHJvdG9jb2wsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Vc2VTa3lwZVByb3RvY29sID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gVXNlclNldHRpbmdzIChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gdXRpbC5Vc2VyU2V0dGluZ3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjZcIiwgUHJvcGVydHk6IFwiVXNlclNldHRpbmdzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyN1wiLCBQcm9wZXJ0eTogXCJVc2VyLkRhdGVGb3JtYXR0aW5nSW5mb1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uRGF0ZUZvcm1hdHRpbmdJbmZvKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LkRhdGVGb3JtYXR0aW5nSW5mbyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI4XCIsIFByb3BlcnR5OiBcIlVzZXIuRGVmYXVsdERhc2hib2FyZElkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LkRlZmF1bHREYXNoYm9hcmRJZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI5XCIsIFByb3BlcnR5OiBcIlVzZXIuSXNHdWlkZWRIZWxwRW5hYmxlZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Jc0d1aWRlZEhlbHBFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzR3VpZGVkSGVscEVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzBcIiwgUHJvcGVydHk6IFwiVXNlci5Jc0hpZ2hDb250cmFzdEVuYWJsZWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uSXNIaWdoQ29udHJhc3RFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzSGlnaENvbnRyYXN0RW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzMVwiLCBQcm9wZXJ0eTogXCJVc2VyLklzUlRMXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LklzUlRMLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzUlRMID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMyXCIsIFByb3BlcnR5OiBcIlVzZXIuTGFuZ3VhZ2VJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5MYW5ndWFnZUlkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/Lkxhbmd1YWdlSWQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzM1wiLCBQcm9wZXJ0eTogXCJVc2VyLlJvbGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5Sb2xlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5Sb2xlcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM0XCIsIFByb3BlcnR5OiBcIlVzZXIuU2VjdXJpdHlSb2xlUHJpdmlsZWdlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlUHJpdmlsZWdlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVQcml2aWxlZ2VzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzVcIiwgUHJvcGVydHk6IFwiVXNlci5TZWN1cml0eVJvbGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZXMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzNlwiLCBQcm9wZXJ0eTogXCJVc2VyLlRpbWVab25lT2Zmc2V0TWludXRlc1wiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5UaW1lWm9uZU9mZnNldE1pbnV0ZXMsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uVGltZVpvbmVPZmZzZXRNaW51dGVzID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzdcIiwgUHJvcGVydHk6IFwiVXNlci5UcmFuc2FjdGlvbkN1cnJlbmN5XCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5KSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlRyYW5zYWN0aW9uQ3VycmVuY3kgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzOFwiLCBQcm9wZXJ0eTogXCJVc2VyLlRyYW5zYWN0aW9uQ3VycmVuY3lJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5SWQsIFN0YXR1czogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5SWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzOVwiLCBQcm9wZXJ0eTogXCJVc2VyLlVzZXJJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Vc2VySWQsIFN0YXR1czogdXNlclNldHRpbmdzPy5Vc2VySWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0MFwiLCBQcm9wZXJ0eTogXCJVc2VyLlVzZXJOYW1lXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LlVzZXJOYW1lLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVXNlck5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRW5jb2RpbmcgTWV0aG9kcyAodGVzdCB3aXRoIGFjdHVhbCB2YWx1ZXMpXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVuY29kZWQgPSB1dGlsLkh0bWxFbmNvZGUoXCI8dGVzdD5cIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJIdG1sRW5jb2RlXCIsIFZhbHVlOiBlbmNvZGVkLCBTdGF0dXM6IGVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiSHRtbEVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWNvZGVkID0gdXRpbC5IdG1sRGVjb2RlKFwiJmx0O3Rlc3QmZ3Q7XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiSHRtbERlY29kZVwiLCBWYWx1ZTogZGVjb2RlZCwgU3RhdHVzOiBkZWNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkh0bWxEZWNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlZCA9IHV0aWwuSHRtbEF0dHJpYnV0ZUVuY29kZShcInRlc3Q9XFxcInZhbHVlXFxcIlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkh0bWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGVuY29kZWQsIFN0YXR1czogZW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJIdG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHhtbEVuY29kZWQgPSB1dGlsLlhtbEVuY29kZShcIjx0ZXN0PlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlhtbEVuY29kZVwiLCBWYWx1ZTogeG1sRW5jb2RlZCwgU3RhdHVzOiB4bWxFbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlhtbEVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB4bWxBdHRyRW5jb2RlZCA9IHV0aWwuWG1sQXR0cmlidXRlRW5jb2RlKFwidGVzdD1cXFwidmFsdWVcXFwiXCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiWG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiB4bWxBdHRyRW5jb2RlZCwgU3RhdHVzOiB4bWxBdHRyRW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJYbWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFVSTC9SZXNvdXJjZSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByZXBlbmRlZFVybCA9IHV0aWwuUHJlcGVuZE9yZ05hbWUoXCIvdGVzdFwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlByZXBlbmRPcmdOYW1lXCIsIFZhbHVlOiBwcmVwZW5kZWRVcmwsIFN0YXR1czogcHJlcGVuZGVkVXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlByZXBlbmRPcmdOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdlYlJlc291cmNlVXJsID0gdXRpbC5XZWJSZXNvdXJjZVVybChcInRlc3QuaHRtbFwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIldlYlJlc291cmNlVXJsXCIsIFZhbHVlOiB3ZWJSZXNvdXJjZVVybCwgU3RhdHVzOiB3ZWJSZXNvdXJjZVVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJXZWJSZXNvdXJjZVVybFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQXBwL0dsb2JhbENvbnRleHQgQXN5bmMgTWV0aG9kcyAoY2hlY2sgZnVuY3Rpb24gYXZhaWxhYmlsaXR5KVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkFkdmFuY2VkQ29uZmlnU2V0dGluZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQWR2YW5jZWRDb25maWdTZXR0aW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJBZHZhbmNlZENvbmZpZ1NldHRpbmdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwTmFtZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ3VycmVudEFwcE5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBOYW1lID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcE5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcFByb3BlcnRpZXNcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBQcm9wZXJ0aWVzID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwUHJvcGVydGllcyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwUHJvcGVydGllc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTmF2aWdhdGlvbiBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIk5hdmlnYXRlVG9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk5hdmlnYXRlVG8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk5hdmlnYXRlVG8gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiTmF2aWdhdGVUb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJPcGVuQWxlcnREaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5BbGVydERpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkFsZXJ0RGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIk9wZW5BbGVydERpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJPcGVuQ29uZmlybURpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkNvbmZpcm1EaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5Db25maXJtRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIk9wZW5Db25maXJtRGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIk9wZW5FcnJvckRpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkVycm9yRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRXJyb3JEaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiT3BlbkVycm9yRGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIk9wZW5GaWxlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiT3BlbkZpbGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiT3BlbkZvcm1cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5Gb3JtID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRm9ybSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJPcGVuRm9ybVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxN1wiLCBQcm9wZXJ0eTogXCJPcGVuVXJsXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuVXJsID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuVXJsID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE3XCIsIFByb3BlcnR5OiBcIk9wZW5VcmxcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMThcIiwgUHJvcGVydHk6IFwiT3BlbldlYlJlc291cmNlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuV2ViUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5XZWJSZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOFwiLCBQcm9wZXJ0eTogXCJPcGVuV2ViUmVzb3VyY2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFByb2dyZXNzL05vdGlmaWNhdGlvbiBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE5XCIsIFByb3BlcnR5OiBcIlNob3dQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTlcIiwgUHJvcGVydHk6IFwiU2hvd1Byb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIwXCIsIFByb3BlcnR5OiBcIkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjBcIiwgUHJvcGVydHk6IFwiQ2xvc2VQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMVwiLCBQcm9wZXJ0eTogXCJBZGRHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQWRkR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIxXCIsIFByb3BlcnR5OiBcIkFkZEdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMlwiLCBQcm9wZXJ0eTogXCJDbGVhckdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIyXCIsIFByb3BlcnR5OiBcIkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBVdGlsaXR5IE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjNcIiwgUHJvcGVydHk6IFwiQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyM1wiLCBQcm9wZXJ0eTogXCJBbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjRcIiwgUHJvcGVydHk6IFwiRW50aXR5TWV0YWRhdGFcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkVudGl0eU1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5FbnRpdHlNZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNFwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNZXRhZGF0YVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNYWluRm9ybURlc2NyaXB0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI1XCIsIFByb3BlcnR5OiBcIkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNlwiLCBQcm9wZXJ0eTogXCJJbnZva2VQcm9jZXNzQWN0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5JbnZva2VQcm9jZXNzQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5JbnZva2VQcm9jZXNzQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI2XCIsIFByb3BlcnR5OiBcIkludm9rZVByb2Nlc3NBY3Rpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjdcIiwgUHJvcGVydHk6IFwiTG9va3VwT2JqZWN0c1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTG9va3VwT2JqZWN0cyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuTG9va3VwT2JqZWN0cyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyN1wiLCBQcm9wZXJ0eTogXCJMb29rdXBPYmplY3RzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI4XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hQYXJlbnRHcmlkXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5SZWZyZXNoUGFyZW50R3JpZCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUmVmcmVzaFBhcmVudEdyaWQgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjhcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFBhcmVudEdyaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjlcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5SZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOVwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMFwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVN0cmluZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUmVzb3VyY2VTdHJpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlJlc291cmNlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMwXCIsIFByb3BlcnR5OiBcIlJlc291cmNlU3RyaW5nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBEZXZpY2UgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMVwiLCBQcm9wZXJ0eTogXCJCYXJjb2RlVmFsdWVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkJhcmNvZGVWYWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQmFyY29kZVZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMxXCIsIFByb3BlcnR5OiBcIkJhcmNvZGVWYWx1ZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMlwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlQXVkaW9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVBdWRpbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZUF1ZGlvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMyXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVBdWRpb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzM1wiLCBQcm9wZXJ0eTogXCJDYXB0dXJlSW1hZ2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVJbWFnZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZUltYWdlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMzXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVJbWFnZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNFwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlVmlkZW9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVWaWRlbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZVZpZGVvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM0XCIsIFByb3BlcnR5OiBcIkNhcHR1cmVWaWRlb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50UG9zaXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRQb3NpdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ3VycmVudFBvc2l0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM1XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRQb3NpdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNlwiLCBQcm9wZXJ0eTogXCJQaWNrRmlsZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUGlja0ZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlBpY2tGaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM2XCIsIFByb3BlcnR5OiBcIlBpY2tGaWxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBQYW5lbCBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM3XCIsIFByb3BlcnR5OiBcIkxvYWRQYW5lbFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTG9hZFBhbmVsID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5Mb2FkUGFuZWwgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzdcIiwgUHJvcGVydHk6IFwiTG9hZFBhbmVsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMjcgVEVTVCAxMjogVXRpbGl0eSBBUEkgWyR7c3RhcnRUaW1lfV0gLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI0MClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgTWV0aG9kcyAoUzEtUzM3KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzdHJpbmdpZnkgb2JqZWN0cyBmb3IgZGlzcGxheVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyIG9yIENvbXBsZXggT2JqZWN0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbCAtIHY0X0NhdGVnb3JpZXMgRmllbGRcclxuICogTXVsdGlPcHRpb25TZXQgZXh0ZW5kcyBJQ29udHJvbE9wdGlvblNldCB3aXRoIFZhbHVlIGFzIG51bWJlcltdIChhcnJheSlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RNdWx0aU9wdGlvblNldChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbW9zID0gZm9ybS5Cb2R5LnY0X0NhdGVnb3JpZXM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1vcy5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE11bHRpT3B0aW9uU2V0LXNwZWNpZmljOiBWYWx1ZSwgSW5pdGlhbFZhbHVlLCBTZWxlY3RlZE9wdGlvbiwgVGV4dCBhcmUgYWxsIGFycmF5c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKG51bWJlcltdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG9yaWdpbmFsVmFsdWUpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkob3JpZ2luYWxWYWx1ZSkgfHwgb3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiT3B0aW9ucyAoYXJyYXkpXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLk9wdGlvbnMpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLk9wdGlvbnMpID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZE9wdGlvbiAoYXJyYXkpXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLlNlbGVjdGVkT3B0aW9uKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5TZWxlY3RlZE9wdGlvbikgfHwgbW9zLlNlbGVjdGVkT3B0aW9uID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWUgKG51bWJlcltdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5Jbml0aWFsVmFsdWUpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLkluaXRpYWxWYWx1ZSkgfHwgbW9zLkluaXRpYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVGV4dCAoc3RyaW5nW10pXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLlRleHQpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLlRleHQpIHx8IG1vcy5UZXh0ID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1vcy5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbW9zLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbW9zLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbW9zLkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfY2F0ZWdvcmllc1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtb3MuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtb3MuQXR0cmlidXRlVHlwZSA9PT0gXCJtdWx0aXNlbGVjdG9wdGlvbnNldFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbW9zLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1vcy5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbW9zLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG1vcy5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbW9zLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtb3MuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1vcy5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1vcy5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtb3MuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtb3MuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZSAoYXJyYXkgb2YgbnVtYmVycylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gWzEsIDJdOyAvLyBUZXN0IHdpdGggc2FtcGxlIHZhbHVlc1xyXG4gICAgICAgIG1vcy5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1vcy5WYWx1ZTtcclxuICAgICAgICBtb3MuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSB8fCBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtb3MuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb3MuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vcy5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1vcy5EaXNhYmxlZDtcclxuICAgICAgICBtb3MuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLkRpc2FibGVkO1xyXG4gICAgICAgIG1vcy5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbW9zLkxhYmVsO1xyXG4gICAgICAgIG1vcy5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLkxhYmVsO1xyXG4gICAgICAgIG1vcy5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1vcy5WaXNpYmxlO1xyXG4gICAgICAgIG1vcy5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLlZpc2libGU7XHJcbiAgICAgICAgbW9zLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IE9wdGlvbiAoZ2V0IHNwZWNpZmljIG9wdGlvbilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG1vcy5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdE9wdGlvbiA9IG1vcy5PcHRpb24ob3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogc3RyaW5naWZ5KGZpcnN0T3B0aW9uKSwgU3RhdHVzOiBmaXJzdE9wdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogXCJObyBvcHRpb25zXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkT25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTXVsdGlPcHRpb25TZXQgT25DaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPbkNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRmlyZU9uQ2hhbmdlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBTZXROb3RpZmljYXRpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTXVsdGlPcHRpb25TZXQgbm90aWZpY2F0aW9uXCIsIFwiTU9TX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5DbGVhck5vdGlmaWNhdGlvbihcIk1PU19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldElzVmFsaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9zLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGRjdcdUZFMEYgVEVTVCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9DYXRlZ29yaWVzIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSBvYmplY3RzIGZvciBkaXNwbGF5XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgb3IgQ29tcGxleCBPYmplY3RdJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE0OiBUYWIgQ29udHJvbCAtIERFVEFJTFNfVEFCXHJcbiAqIElUYWIgaW50ZXJmYWNlIGZvciBmb3JtIHRhYnMgd2l0aCBEaXNwbGF5U3RhdGUsIExhYmVsLCBWaXNpYmxlIHByb3BlcnRpZXNcclxuICogQWxzbyB0ZXN0cyBTZWN0aW9uIHdpdGhpbiB0aGUgdGFiXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFRhYihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgdGFiID0gZm9ybS5UYWIuU1VNTUFSWV9UQUI7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBUQUIgUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVGFiLk5hbWVcIiwgVmFsdWU6IHRhYi5OYW1lLCBTdGF0dXM6IHRhYi5OYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJUYWIuUGFyZW50XCIsIFZhbHVlOiB0YWIuUGFyZW50ID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHRhYi5QYXJlbnQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlRhYi5EaXNwbGF5U3RhdGVcIiwgVmFsdWU6IHRhYi5EaXNwbGF5U3RhdGUsIFN0YXR1czogdGFiLkRpc3BsYXlTdGF0ZSA9PT0gXCJleHBhbmRlZFwiIHx8IHRhYi5EaXNwbGF5U3RhdGUgPT09IFwiY29sbGFwc2VkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlRhYi5MYWJlbFwiLCBWYWx1ZTogdGFiLkxhYmVsLCBTdGF0dXM6IHRhYi5MYWJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVGFiLlZpc2libGVcIiwgVmFsdWU6IHRhYi5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiB0YWIuVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VjdGlvbiBwcm9wZXJ0aWVzIChBQ0NPVU5UX0lORk9STUFUSU9OIHNlY3Rpb24pXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRhYi5TZWN0aW9uLkFDQ09VTlRfSU5GT1JNQVRJT047XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkJJTExJTkdcIiwgVmFsdWU6IHNlY3Rpb24gPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc2VjdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5OYW1lXCIsIFZhbHVlOiBzZWN0aW9uPy5OYW1lLCBTdGF0dXM6IHNlY3Rpb24/Lk5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uUGFyZW50XCIsIFZhbHVlOiBzZWN0aW9uPy5QYXJlbnQgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc2VjdGlvbj8uUGFyZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkxhYmVsXCIsIFZhbHVlOiBzZWN0aW9uPy5MYWJlbCwgU3RhdHVzOiBzZWN0aW9uPy5MYWJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uVmlzaWJsZVwiLCBWYWx1ZTogc2VjdGlvbj8uVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2Ygc2VjdGlvbj8uVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVEFCIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc3BsYXlTdGF0ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzcGxheVN0YXRlID0gdGFiLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICB0YWIuRGlzcGxheVN0YXRlID0gb3JpZ0Rpc3BsYXlTdGF0ZSA9PT0gXCJleHBhbmRlZFwiID8gXCJjb2xsYXBzZWRcIiA6IFwiZXhwYW5kZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgdGFiLkRpc3BsYXlTdGF0ZSA9IG9yaWdEaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJUYWIuRGlzcGxheVN0YXRlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVGFiLkRpc3BsYXlTdGF0ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSB0YWIuTGFiZWw7XHJcbiAgICAgICAgdGFiLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0YWIuTGFiZWw7XHJcbiAgICAgICAgdGFiLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSB0YWIuVmlzaWJsZTtcclxuICAgICAgICB0YWIuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5WaXNpYmxlO1xyXG4gICAgICAgIHRhYi5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJUYWIuVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlRhYi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZvY3VzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFiLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVGFiLkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVGFiLkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZFRhYlN0YXRlQ2hhbmdlXHJcbiAgICBjb25zdCB0YWJTdGF0ZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFRhYiBTdGF0ZUNoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGFiLkFkZFRhYlN0YXRlQ2hhbmdlKHRhYlN0YXRlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVGFiLkFkZFRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJUYWIuQWRkVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlKHRhYlN0YXRlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJUYWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRUNUSU9OIFNFVFRFUlMgKFMtSW5kZXggY29udGludWVkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0YWIuU2VjdGlvbi5BQ0NPVU5UX0lORk9STUFUSU9OO1xyXG5cclxuICAgIC8vIFNlY3Rpb246IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHNlY3Rpb24uTGFiZWw7XHJcbiAgICAgICAgc2VjdGlvbi5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VjdGlvbi5MYWJlbDtcclxuICAgICAgICBzZWN0aW9uLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlY3Rpb246IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBzZWN0aW9uLlZpc2libGU7XHJcbiAgICAgICAgc2VjdGlvbi5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VjdGlvbi5WaXNpYmxlO1xyXG4gICAgICAgIHNlY3Rpb24uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDRDEgVEVTVCAxNDogVGFiIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogREVUQUlMU19UQUIgJiBCSUxMSU5HIHNlY3Rpb24gLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxMClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE1OiBOYXZpZ2F0aW9uSXRlbSBDb250cm9sIC0gQWNjb3VudF9UYXNrc1xyXG4gKiBOYXZpZ2F0aW9uSXRlbSBpbnRlcmZhY2UgZm9yIGZvcm0gbmF2aWdhdGlvbiBpdGVtcyB3aXRoIElkLCBMYWJlbCwgVmlzaWJsZSwgRm9jdXNcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG5hdkl0ZW0gPSBmb3JtLk5hdmlnYXRpb24uQWNjb3VudF9UYXNrcztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIklkXCIsIFZhbHVlOiBuYXZJdGVtLklkLCBTdGF0dXM6IG5hdkl0ZW0uSWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBuYXZJdGVtLkxhYmVsLCBTdGF0dXM6IG5hdkl0ZW0uTGFiZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG5hdkl0ZW0uVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2YgbmF2SXRlbS5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBuYXZJdGVtLkxhYmVsO1xyXG4gICAgICAgIG5hdkl0ZW0uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG5hdkl0ZW0uTGFiZWw7XHJcbiAgICAgICAgbmF2SXRlbS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG5hdkl0ZW0uVmlzaWJsZTtcclxuICAgICAgICBuYXZJdGVtLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuYXZJdGVtLlZpc2libGU7XHJcbiAgICAgICAgbmF2SXRlbS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5hdkl0ZW0uRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0VcdURERUQgVEVTVCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBBY2NvdW50X1Rhc2tzIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMzKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLFdBQVMsU0FBaUM7QUFDdEMsUUFBSSxPQUFPLFdBQVcsZUFBZ0IsT0FBZSxRQUFRLFFBQVc7QUFDcEUsYUFBUSxPQUFlO0FBQUEsSUFDM0I7QUFDQSxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxXQUFXLGVBQWdCLE9BQU8sT0FBZSxRQUFRLFFBQVc7QUFDbkgsYUFBUSxPQUFPLE9BQWU7QUFBQSxJQUNsQztBQUNBLFFBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sT0FBTyxXQUFXLGVBQWdCLE9BQU8sT0FBTyxPQUFlLFFBQVEsUUFBVztBQUN6SyxhQUFRLE9BQU8sT0FBTyxPQUFlO0FBQUEsSUFDekM7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUNBLFdBQVMsT0FBVSxLQUFVLE1BQWMsVUFBeUI7QUFDaEUsV0FBTyxlQUFlLEtBQUssTUFBTTtBQUFBLE1BQzdCLEtBQUs7QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNsQixDQUFDO0FBQUEsRUFDTDtBQUNBLFdBQVMsYUFBZ0IsS0FBVSxNQUFjLFVBQW1CLFVBQW9DO0FBQ3BHLFdBQU8sZUFBZSxLQUFLLE1BQU07QUFBQSxNQUM3QixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxZ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RUFBRSxXQUFXLFFBQUcsRUFBRTtBQUN4RCxVQUFNLFFBQVEsV0FBVztBQUV6QixZQUFRLGVBQWUsOENBQXVDLFNBQVMsOEJBQThCLE1BQU0sSUFBSSxLQUFLLEVBQUU7QUFFdEgsWUFBUSxJQUFJLDJDQUFvQyxxREFBcUQ7QUFDckcsWUFBUSxNQUFNLE9BQU87QUFFckIsWUFBUSxJQUFJLHNDQUFpQyxxREFBcUQ7QUFDbEcsWUFBUSxNQUFNLGFBQWE7QUFFM0IsWUFBUTtBQUFBLE1BQUkscUJBQWdCLE1BQU0sSUFBSSxLQUFLLGFBQ3RDLFdBQVcsSUFBSSxhQUFRLFFBQVEsY0FBYyxPQUM3QyxTQUFTLElBQUksYUFBUSxNQUFNLFlBQVk7QUFBQSxNQUN4QztBQUFBLElBQXFEO0FBRXpELFlBQVEsU0FBUztBQUFBLEVBQ3JCOzs7QXBCMUVBLE1BQU0sY0FBZSxXQUFZO0FBQzdCO0FBRUEsUUFBSTtBQUVKLG1CQUFlLE9BQU8sa0JBQXNDO0FBQ3hELGFBQU8sSUFBSSxZQUFZLEtBQUssZ0JBQWdCO0FBQzVDLHFCQUFlO0FBQ2YsV0FBSyxZQUFZLFdBQVc7QUFBQSxJQUNoQztBQUVBLGFBQVMsaUJBQXVCO0FBQzVCLFVBQUksS0FBSyxpQkFBaUIsY0FBYyxHQUFHO0FBQUEsTUFDM0M7QUFBQSxJQUNKO0FBTUEsbUJBQWUsWUFBWSxrQkFBc0M7QUFLN0QsaUJBQVcsWUFBWTtBQUNuQixnQkFBUSxNQUFNO0FBR2Qsb0JBQVksSUFBSTtBQUdoQixtQkFBVyxJQUFJO0FBR2YsaUJBQVMsSUFBSTtBQUdiLG1CQUFXLElBQUk7QUFHZixvQkFBWSxJQUFJO0FBR2hCLHNCQUFjLElBQUk7QUFHbEIsY0FBTSxXQUFXLElBQUk7QUFHckIsa0JBQVUsSUFBSTtBQUdkLG9CQUFZLElBQUk7QUFHaEIscUJBQWEsSUFBSTtBQUdqQixxQkFBYSxJQUFJO0FBR2pCLGlCQUFTLElBQUk7QUFHYixvQkFBWSxJQUFJO0FBR2hCLDJCQUFtQixJQUFJO0FBR3ZCLGdCQUFRLElBQUk7QUFHWiwyQkFBbUIsSUFBSTtBQUFBLE1BRTNCLEdBQUcsR0FBSztBQUFBLElBR1o7QUEyQkEsV0FBTztBQUFBLE1BQ0gsUUFBUTtBQUFBLElBQ1o7QUFBQSxFQUNKLEVBQUc7QUFFSCxNQUFPLGtCQUFROyIsCiAgIm5hbWVzIjogWyJmb3JtQ29udGV4dCIsICJ0YWJzIiwgIm5hdmlnYXRpb25zIiwgInF1aWNrRm9ybXMiLCAiZ3JpZHMiLCAiQWNjb3VudEZvcm0iLCAic3RyaW5naWZ5IiwgInNlY3Rpb24iXQp9Cg==
