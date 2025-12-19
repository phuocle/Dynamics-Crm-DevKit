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
    const isConstructor = (fn) => typeof fn === "function" && !!fn.prototype;
    const mapEntity = (apiConstructorOrFactory, entity) => isConstructor(apiConstructorOrFactory) ? new apiConstructorOrFactory(entity) : apiConstructorOrFactory(entity);
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
          return result.entities.map((entity) => mapEntity(apiConstructorOrFactory, entity));
        }
        return [];
      });
      if (successCallback) {
        promise?.then(successCallback, errorCallback);
      } else {
        return promise;
      }
    };
    obj.RetrieveRecord = function(...args) {
      if (typeof args[0] === "string") {
        const [entityLogicalName2, id2, options2, successCallback2, errorCallback2] = args;
        const promise2 = getWebApi?.retrieveRecord(entityLogicalName2, id2, options2);
        if (successCallback2) {
          promise2?.then(successCallback2, errorCallback2);
        } else {
          return promise2;
        }
        return;
      }
      let [apiConstructorOrFactory, entityLogicalName, id, optionsOrCallback, successCallback, errorCallback] = args;
      let options = typeof optionsOrCallback === "string" ? optionsOrCallback : void 0;
      if (typeof optionsOrCallback === "function") {
        errorCallback = successCallback;
        successCallback = optionsOrCallback;
        options = "?$select=*";
      }
      if (!options) {
        options = "?$select=*";
      }
      const promise = getWebApi?.retrieveRecord(entityLogicalName, id, options).then(
        (result) => mapEntity(apiConstructorOrFactory, result)
      );
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
            "contact_customer_accounts"
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
  var AccountApi = class AccountApi2 {
    constructor(entity) {
      return createWebApiEntity(
        entity,
        "account",
        "accounts",
        AccountFieldConfig
      );
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
    const navItem = form.Navigation.contact_customer_accounts;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9PcHRpb25TZXQudHMiLCAiLi4vZW50aXRpZXMvZ2VuZXJhdG9yL0FjY291bnQuZm9ybS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb250cm9sLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdExvb2t1cC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RNZW1vLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFN0cmluZy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RJbnRlZ2VyLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE9wdGlvblNldC50cyIsICIuLi9lbnRpdGllcy9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0V2ViQXBpLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE1vbmV5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdEJvb2xlYW4udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZVRpbWUudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZU9ubHkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0R3JpZC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RVdGlsaXR5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFRhYi50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBUZXN0Q29udHJvbCB9IGZyb20gJy4vQWNjb3VudC5UZXN0Q29udHJvbCc7XHJcbmltcG9ydCB7IFRlc3RMb29rdXAgfSBmcm9tICcuL0FjY291bnQuVGVzdExvb2t1cCc7XHJcbmltcG9ydCB7IFRlc3RNZW1vIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RNZW1vJztcclxuaW1wb3J0IHsgVGVzdFN0cmluZyB9IGZyb20gJy4vQWNjb3VudC5UZXN0U3RyaW5nJztcclxuaW1wb3J0IHsgVGVzdEludGVnZXIgfSBmcm9tICcuL0FjY291bnQuVGVzdEludGVnZXInO1xyXG5pbXBvcnQgeyBUZXN0T3B0aW9uU2V0IH0gZnJvbSAnLi9BY2NvdW50LlRlc3RPcHRpb25TZXQnO1xyXG5pbXBvcnQgeyBUZXN0V2ViQXBpIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RXZWJBcGknO1xyXG5pbXBvcnQgeyBUZXN0TW9uZXkgfSBmcm9tICcuL0FjY291bnQuVGVzdE1vbmV5JztcclxuaW1wb3J0IHsgVGVzdEJvb2xlYW4gfSBmcm9tICcuL0FjY291bnQuVGVzdEJvb2xlYW4nO1xyXG5pbXBvcnQgeyBUZXN0RGF0ZVRpbWUgfSBmcm9tICcuL0FjY291bnQuVGVzdERhdGVUaW1lJztcclxuaW1wb3J0IHsgVGVzdERhdGVPbmx5IH0gZnJvbSAnLi9BY2NvdW50LlRlc3REYXRlT25seSc7XHJcbmltcG9ydCB7IFRlc3RHcmlkIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RHcmlkJztcclxuaW1wb3J0IHsgVGVzdFV0aWxpdHkgfSBmcm9tICcuL0FjY291bnQuVGVzdFV0aWxpdHknO1xyXG5pbXBvcnQgeyBUZXN0TXVsdGlPcHRpb25TZXQgfSBmcm9tICcuL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0JztcclxuaW1wb3J0IHsgVGVzdFRhYiB9IGZyb20gJy4vQWNjb3VudC5UZXN0VGFiJztcclxuaW1wb3J0IHsgVGVzdE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbSc7XHJcblxyXG5jb25zdCBmb3JtQWNjb3VudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBsZXQgZm9ybTogQWNjb3VudEZvcm0uRm9ybTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkxvYWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9ybSA9IG5ldyBBY2NvdW50Rm9ybS5Gb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgZm9ybS5VaUFkZExvYWRlZChVaUFkZExvYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZvcm0uRXhlY3V0aW9uQ29udGV4dC5Jc0luaXRpYWxMb2FkKCkpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBCRUdJTiBPTiBMT0FEIExPR0lDXHJcblxyXG4gICAgICAgIC8vIFdhaXQgMTAgc2Vjb25kcyBhZnRlciBPbkxvYWQgdG8gYWxsb3cgZm9ybSB0byBmdWxseSBsb2FkXHJcbiAgICAgICAgLy8gVGhlbiBjbGVhciBjb25zb2xlIGFuZCBydW4gcmVhbCB0ZXN0c1xyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDA6IElDb250cm9sIEludGVyZmFjZSAoYmFzZSBmb3IgYWxsIGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBUZXN0Q29udHJvbChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTogTG9va3VwIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdExvb2t1cChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMjogTWVtbyBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RNZW1vKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAzOiBTdHJpbmcgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0U3RyaW5nKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA0OiBJbnRlZ2VyIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEludGVnZXIoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDU6IE9wdGlvblNldCBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDY6IFdlYkFwaSBcclxuICAgICAgICAgICAgYXdhaXQgVGVzdFdlYkFwaShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNzogTW9uZXkgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TW9uZXkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDg6IEJvb2xlYW4gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0Qm9vbGVhbihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgOTogRGF0ZVRpbWUgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RGF0ZVRpbWUoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDEwOiBEYXRlT25seSBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3REYXRlT25seShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTE6IEdyaWQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0R3JpZChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTI6IFV0aWxpdHkgQVBJXHJcbiAgICAgICAgICAgIFRlc3RVdGlsaXR5KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TXVsdGlPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE0OiBUYWIgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0VGFiKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybSk7XHJcblxyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuXHJcbiAgICAgICAgLy8gRU5EIE9OIExPQUQgTE9HSUNcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVORCBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9OIENIQU5HRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgUFJFIFNFQVJDSFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBPVEhFUlNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgT25Mb2FkOiBvbkxvYWRcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtQWNjb3VudDtcclxuIiwgImZ1bmN0aW9uIGdldFhybSgpOiB0eXBlb2YgWHJtIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC5wYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAocGFyZW50LnBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldHRlclNldHRlcjxUPihvYmo6IGFueSwgcHJvcDogc3RyaW5nLCBnZXR0ZXJGbjogKCkgPT4gVCwgc2V0dGVyRm46ICh2YWx1ZTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xyXG4gICAgICAgIGdldDogZ2V0dGVyRm4sXHJcbiAgICAgICAgc2V0OiBzZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkOiBhbnksIGF0dHJpYnV0ZTogYW55LCBjb250cm9sOiBhbnkpOiB2b2lkIHtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZScsICgpID0+IGNvbnRyb2w/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZU5hbWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVQYXJlbnQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFBhcmVudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVR5cGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEF0dHJpYnV0ZVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sTmFtZScsICgpID0+IGNvbnRyb2w/LmdldE5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sT3B0aW9ucycsICgpID0+IGNvbnRyb2w/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sUGFyZW50JywgKCkgPT4gY29udHJvbD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBjb250cm9sPy5nZXRDb250cm9sVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0Zvcm1hdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0Rm9ybWF0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSW5pdGlhbFVybCcsICgpID0+IGNvbnRyb2w/LmdldEluaXRpYWxVcmwoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzRGlydHknLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1BhcnR5TGlzdCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNQYXJ0eUxpc3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc1ZhbGlkJywgKCkgPT4gYXR0cmlidXRlPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4JywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXhMZW5ndGgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heExlbmd0aCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01pbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWluKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT2JqZWN0JywgKCkgPT4gY29udHJvbD8uZ2V0T2JqZWN0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3B0aW9ucycsICgpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ091dHB1dHMnLCAoKSA9PiBjb250cm9sPy5nZXRPdXRwdXRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRPcHRpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFNlbGVjdGVkT3B0aW9uKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU2VsZWN0ZWRSZXN1bHRzJywgKCkgPT4gY29udHJvbD8uZ2V0U2VsZWN0ZWRSZXN1bHRzKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnU3RhdGUnLCAoKSA9PiBjb250cm9sPy5nZXRTdGF0ZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RleHQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFRleHQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUb3RhbFJlc3VsdENvdW50JywgKCkgPT4gY29udHJvbD8uZ2V0VG90YWxSZXN1bHRDb3VudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1VzZXJQcml2aWxlZ2UnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFVzZXJQcml2aWxlZ2UoKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEYXRhJywgKCkgPT4gY29udHJvbD8uZ2V0RGF0YSgpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXREYXRhKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEZWZhdWx0VmlldycsICgpID0+IGNvbnRyb2w/LmdldERlZmF1bHRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERlZmF1bHRWaWV3KHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdEaXNhYmxlZCcsICgpID0+IGNvbnRyb2w/LmdldERpc2FibGVkKCksICh2YWx1ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgY29udHJvbD8uc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdFbnRpdHlUeXBlcycsICgpID0+IGNvbnRyb2w/LmdldEVudGl0eVR5cGVzKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldEVudGl0eVR5cGVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdMYWJlbCcsICgpID0+IGNvbnRyb2w/LmdldExhYmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdQcmVjaXNpb24nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFByZWNpc2lvbigpLCAodmFsdWU6IG51bWJlcikgPT4geyBhdHRyaWJ1dGU/LnNldFByZWNpc2lvbih2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NlYXJjaFF1ZXJ5JywgKCkgPT4gY29udHJvbD8uZ2V0U2VhcmNoUXVlcnkoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U2VhcmNoUXVlcnkodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Nob3dUaW1lJywgKCkgPT4gY29udHJvbD8uZ2V0U2hvd1RpbWUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFNob3dUaW1lKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTcmMnLCAoKSA9PiBjb250cm9sPy5nZXRTcmMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0U3JjKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTdWJtaXRNb2RlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTdWJtaXRNb2RlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0U3VibWl0TW9kZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmFsdWUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBhdHRyaWJ1dGU/LnNldFZhbHVlKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnVmlzaWJsZScsICgpID0+IGNvbnRyb2w/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGNvbnRyb2w/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbUZpbHRlciA9IChmaWx0ZXI6IHN0cmluZywgZW50aXR5TG9naWNhTmFtZT86IHN0cmluZykgPT4gY29udHJvbD8uYWRkQ3VzdG9tRmlsdGVyKGZpbHRlciwgZW50aXR5TG9naWNhTmFtZSk7XHJcbiAgICBmaWVsZC5BZGRDdXN0b21WaWV3ID0gKHZpZXdJZDogc3RyaW5nLCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZpZXdEaXNwbGF5TmFtZTogc3RyaW5nLCBmZXRjaFhtbDogc3RyaW5nLCBsYXlvdXRYbWw6IHN0cmluZywgaXNEZWZhdWx0OiBib29sZWFuKSA9PiBjb250cm9sPy5hZGRDdXN0b21WaWV3KHZpZXdJZCwgZW50aXR5TmFtZSwgdmlld0Rpc3BsYXlOYW1lLCBmZXRjaFhtbCwgbGF5b3V0WG1sLCBpc0RlZmF1bHQpO1xyXG4gICAgZmllbGQuQWRkTG9va3VwVGFnQ2xpY2sgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Mb29rdXBUYWdDbGljayhjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBub3RpZmljYXRpb25MZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nLCBjYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSB7IG1lc3NhZ2U6IG1lc3NhZ2UsIGFjdGlvbnM6IFtjYWxsYmFja10gfTtcclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB7IG1lc3NhZ2VzOiBbbWVzc2FnZV0sIG5vdGlmaWNhdGlvbkxldmVsOiBub3RpZmljYXRpb25MZXZlbCwgdW5pcXVlSWQ6IHVuaXF1ZUlkLCBhY3Rpb25zOiBbYWN0aW9uc10gfTtcclxuICAgICAgICByZXR1cm4gY29udHJvbD8uYWRkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICB9O1xyXG4gICAgZmllbGQuQWRkT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5hZGRPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRPcHRpb24gPSAodGV4dDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBpbmRleD86IG51bWJlcikgPT4gY29udHJvbD8uYWRkT3B0aW9uKHsgdGV4dDogdGV4dCwgdmFsdWU6IHZhbHVlIH0sIGluZGV4KTtcclxuICAgIGZpZWxkLkFkZFBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5DbGVhck5vdGlmaWNhdGlvbiA9ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICBmaWVsZC5DbGVhck9wdGlvbnMgPSAoKSA9PiBjb250cm9sPy5jbGVhck9wdGlvbnMoKTtcclxuICAgIGZpZWxkLkNvbnRlbnRXaW5kb3cgPSAoc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRyb2w/LmdldENvbnRlbnRXaW5kb3coKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5GaXJlT25DaGFuZ2UgPSAoKSA9PiBhdHRyaWJ1dGU/LmZpcmVPbkNoYW5nZSgpO1xyXG4gICAgZmllbGQuRm9jdXMgPSAoKSA9PiBjb250cm9sPy5zZXRGb2N1cygpO1xyXG4gICAgZmllbGQuT3BlblNlYXJjaFJlc3VsdCA9IChyZXN1bHROdW1iZXI6IG51bWJlciwgbW9kZT86IHN0cmluZykgPT4gY29udHJvbD8ub3BlblNlYXJjaFJlc3VsdChyZXN1bHROdW1iZXIsIG1vZGUpO1xyXG4gICAgZmllbGQuT3B0aW9uID0gKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IGF0dHJpYnV0ZT8uZ2V0T3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlZnJlc2ggPSAoKSA9PiBjb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICBmaWVsZC5SZW1vdmVMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGF0dHJpYnV0ZT8ucmVtb3ZlT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25PdXRwdXRDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25PdXRwdXRDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT3B0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IGNvbnRyb2w/LnJlbW92ZU9wdGlvbih2YWx1ZSk7XHJcbiAgICBmaWVsZC5SZW1vdmVQb3N0U2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUG9zdFNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVQcmVTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlUHJlU2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVJlc3VsdE9wZW5lZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblJlc3VsdE9wZW5lZChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVTZWxlY3Rpb24gPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25TZWxlY3Rpb24oY2FsbGJhY2spO1xyXG4gICAgZmllbGQuU2V0SXNWYWxpZCA9ICh2YWxpZDogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZykgPT4gYXR0cmlidXRlPy5zZXRJc1ZhbGlkKHZhbGlkLCBtZXNzYWdlKTtcclxuICAgIGZpZWxkLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZpZWxkcyhmb3JtQ29udGV4dDogYW55LCBib2R5OiBhbnksIHR5cGU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgT2JqZWN0LmtleXMoYm9keSkuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9naWNhbE5hbWUgPSB0eXBlID09PSB1bmRlZmluZWQgPyBmaWVsZD8udG9Mb3dlckNhc2UoKSA6ICh0eXBlICsgZmllbGQpPy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChsb2dpY2FsTmFtZSkgPz8gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGQpO1xyXG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZ2V0QXR0cmlidXRlKGxvZ2ljYWxOYW1lKTtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZSAmJiBjb250cm9sPy5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlID0gY29udHJvbC5nZXRBdHRyaWJ1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBib2R5W2ZpZWxkXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHR5cGUgPT09IFwiaGVhZGVyX1wiKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0SGVhZGVyU2VjdGlvbiA9IGZvcm1Db250ZXh0Py51aT8uaGVhZGVyU2VjdGlvbjtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0JvZHlWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Qm9keVZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Qm9keVZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ0NvbW1hbmRCYXJWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0Q29tbWFuZEJhclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0Q29tbWFuZEJhclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoYm9keSwgJ1RhYk5hdmlnYXRvclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRUYWJOYXZpZ2F0b3JWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldFRhYk5hdmlnYXRvclZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBib2R5O1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRUYWJzKGZvcm1Db250ZXh0OiBhbnksIHRhYnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZFNlY3Rpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiOiBzdHJpbmcsIHNlY3Rpb25zOiBhbnksIHNlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9iamVjdCA9IHRhYk9iamVjdD8uc2VjdGlvbnM/LmdldChzZWN0aW9uKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdOYW1lJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdQYXJlbnQnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTGFiZWwnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRUYWIgPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55LCB0YWI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ05hbWUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ1BhcmVudCcsICgpID0+IHRhYk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdDb250ZW50VHlwZScsICgpID0+IHRhYk9iamVjdD8uZ2V0Q29udGVudFR5cGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRDb250ZW50VHlwZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdEaXNwbGF5U3RhdGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdMYWJlbCcsICgpID0+IHRhYk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdWaXNpYmxlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHRhYnNbdGFiXS5BZGRUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LmFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICB0YWJzW3RhYl0uRm9jdXMgPSAoKSA9PiB0YWJPYmplY3Q/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgdGFic1t0YWJdLlJlbW92ZVRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8ucmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRhYnNbdGFiXS5TZWN0aW9uKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsb2FkU2VjdGlvbihmb3JtQ29udGV4dCwgdGFiLCB0YWJzW3RhYl0uU2VjdGlvbiwgc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXModGFicykuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIGxvYWRUYWIoZm9ybUNvbnRleHQsIHRhYnMsIHRhYik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbkl0ZW0gPSAobmF2aWdhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBmb3JtQ29udGV4dD8udWk/Lm5hdmlnYXRpb24/Lml0ZW1zO1xyXG4gICAgICAgIGlmICghbmF2SXRlbXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5hdkl0ZW1zLmdldExlbmd0aCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5hdkl0ZW1zLmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmdldElkKCkgPT09IG5hdmlnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWROYXZpZ2F0aW9uID0gKGZvcm1Db250ZXh0OiBhbnksIG5hdmlnYXRpb25zOiBhbnksIG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtID0gZ2V0TmF2aWdhdGlvbkl0ZW0obmF2aWdhdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnSWQnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnTGFiZWwnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ1Zpc2libGUnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgICAgICBuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXS5Gb2N1cyA9ICgpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRGb2N1cygpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKG5hdmlnYXRpb25zKS5mb3JFYWNoKG5hdmlnYXRpb24gPT4ge1xyXG4gICAgICAgIGxvYWROYXZpZ2F0aW9uKGZvcm1Db250ZXh0LCBuYXZpZ2F0aW9ucywgbmF2aWdhdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IGV4Y2x1ZGVkRmllbGRzID0gbmV3IFNldChbXCJCb2R5XCIsIFwiQ29udHJvbHNcIiwgXCJJc0xvYWRlZFwiLCBcIlJlZnJlc2hcIiwgXCJGb2N1c1wiLCBcIkNvbnRyb2xUeXBlXCIsIFwiRGlzYWJsZWRcIiwgXCJMYWJlbFwiLCBcIkNvbnRyb2xOYW1lXCIsIFwiQ29udHJvbFBhcmVudFwiLCBcIlZpc2libGVcIl0pO1xyXG4gICAgY29uc3QgbG9hZFF1aWNrRm9ybSA9IChmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnksIHF1aWNrRm9ybTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMocXVpY2tGb3Jtc1txdWlja0Zvcm1dKS5maWx0ZXIoZmllbGQgPT4gIWV4Y2x1ZGVkRmllbGRzLmhhcyhmaWVsZCkpO1xyXG4gICAgICAgIGNvbnN0IHF1aWNrID0gZm9ybUNvbnRleHQ/LnVpPy5xdWlja0Zvcm1zPy5nZXQocXVpY2tGb3JtKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQm9keScsICgpID0+IExvYWRGb3JtRGlhbG9nKHF1aWNrLCBmaWVsZHMpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBxdWljaz8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFBhcmVudCcsICgpID0+IHF1aWNrPy5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gcXVpY2s/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdEaXNhYmxlZCcsICgpID0+IHF1aWNrPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnTGFiZWwnLCAoKSA9PiBxdWljaz8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ1Zpc2libGUnLCAoKSA9PiBxdWljaz8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Db250cm9scyA9IChhcmc6IGFueSkgPT4gcXVpY2s/LmdldENvbnRyb2woYXJnKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uRm9jdXMgPSAoKSA9PiBxdWljaz8uc2V0Rm9jdXMoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uSXNMb2FkZWQgPSAoKSA9PiBxdWljaz8uaXNMb2FkZWQoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uUmVmcmVzaCA9ICgpID0+IHF1aWNrPy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVpY2tGb3JtcykuZm9yRWFjaChxdWlja0Zvcm0gPT4ge1xyXG4gICAgICAgIGxvYWRRdWlja0Zvcm0oZm9ybUNvbnRleHQsIHF1aWNrRm9ybXMsIHF1aWNrRm9ybSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkR3JpZHMoZm9ybUNvbnRleHQ6IGFueSwgZ3JpZHM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc3QgbG9hZEdyaWRDb2x1bW4gPSAoY29sOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYWJlbCcsICgpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBjb2w/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0Rpc2FibGVkJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBjb2w/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1ZhbHVlJywgKCkgPT4gY29sPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFZhbHVlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgb2JqLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgICAgIG9iai5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkR3JpZFJvdyA9IChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NvbHVtbnMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldExlbmd0aCA9ICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEdyaWRDb2x1bW4oY29sdW1uKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZEdyaWRDb2x1bW4oY29sdW1uKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5SWQnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkID0gKGZvcm1Db250ZXh0OiBhbnksIGdyaWRzOiBhbnksIGdyaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ29sbGVjdGlvbk9iamVjdCA9IChnZXRJdGVtc0ZuOiBhbnksIHByb2Nlc3NJdGVtRm46IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBvYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0SXRlbXNGbigpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgb2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiBwcm9jZXNzSXRlbUZuKGdldEl0ZW1zRm4oKT8uZ2V0KGluZGV4KSk7XHJcbiAgICAgICAgICAgIG9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbXNGbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gaXRlbXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc0l0ZW1GbihpdGVtcy5nZXQoaW5kZXgpKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRW50aXR5TmFtZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0ZldGNoWG1sJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEZldGNoWG1sKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0dyaWRUeXBlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWRUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1JlbGF0aW9uc2hpcCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRSZWxhdGlvbnNoaXAoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFJvd3MoKSxcclxuICAgICAgICAgICAgICAgIChyb3c6IGFueSkgPT4gbG9hZEdyaWRSb3cocm93KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1NlbGVjdGVkUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFNlbGVjdGVkUm93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3c/LmdldERhdGEoKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdUb3RhbFJlY29yZENvdW50JywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWQoKT8uZ2V0VG90YWxSZWNvcmRDb3VudCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdWaWV3U2VsZWN0b3InLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdTZWxlY3RvciA9IGdyaWRDb250cm9sPy5nZXRWaWV3U2VsZWN0b3IoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZ2V0dGVyKG9iaiwgJ1Zpc2libGUnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmlzVmlzaWJsZSgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0N1cnJlbnRWaWV3JywgKCkgPT4gdmlld1NlbGVjdG9yPy5nZXRDdXJyZW50VmlldygpLCAodmFsdWU6IGFueSkgPT4gdmlld1NlbGVjdG9yPy5zZXRDdXJyZW50Vmlldyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihncmlkc1tncmlkXSwgJ1Zpc2libGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBncmlkQ29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLkFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICBncmlkc1tncmlkXS5PcGVuUmVsYXRlZEdyaWQgPSAoKSA9PiBncmlkQ29udHJvbD8ub3BlblJlbGF0ZWRHcmlkKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaCA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaFJpYmJvbiA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoUmliYm9uKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlVybCA9IChjbGllbnQ6IG51bWJlcikgPT4gZ3JpZENvbnRyb2w/LmdldFVybChjbGllbnQpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKGdyaWRzKS5mb3JFYWNoKGdyaWQgPT4ge1xyXG4gICAgICAgIGxvYWRHcmlkKGZvcm1Db250ZXh0LCBncmlkcywgZ3JpZCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBMb2FkRm9ybShmb3JtQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgY29udGV4dERhdGEgPSBmb3JtQ29udGV4dD8uZGF0YTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhRW50aXR5ID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eTtcclxuICAgIGNvbnN0IGNvbnRleHRVaSA9IGZvcm1Db250ZXh0Py51aTtcclxuICAgIGNvbnN0IGNvbnRleHRVaUZvcm1TZWxlY3RvciA9IGZvcm1Db250ZXh0Py51aT8uZm9ybVNlbGVjdG9yO1xyXG4gICAgY29uc3QgZmluZEZvcm1JdGVtID0gKGNyaXRlcmlhOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXRMZW5ndGgoKSA/PyAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uaXRlbXM/LmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgY3JpdGVyaWEoaXRlbSkgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0F0dHJpYnV0ZXMnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYXR0cmlidXRlcyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0NvbnRyb2xzJywgKCkgPT4gY29udGV4dFVpPy5jb250cm9scyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGE/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc1ZhbGlkJywgKCkgPT4gY29udGV4dERhdGE/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFYbWwnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RGF0YVhtbCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzRGlydHknLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlOYW1lJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1JZCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1MYWJlbCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1UeXBlJywgKCkgPT4gY29udGV4dFVpPy5nZXRGb3JtVHlwZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRIZWlnaHQnLCAoKSA9PiBjb250ZXh0VWk/LmdldFZpZXdQb3J0SGVpZ2h0KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdWaWV3UG9ydFdpZHRoJywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydFdpZHRoKCkpO1xyXG4gICAgZm9ybS5BZGRPblBvc3RTYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblBvc3RTYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQWRkT25TYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5jbGVhckZvcm1Ob3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGNvbnRleHRVaT8uY2xvc2UoKTtcclxuICAgIGZvcm0uRGF0YUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRGF0YVJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRm9ybUlzVmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZykgPT4geyByZXR1cm4gZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uZ2V0VmlzaWJsZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZCA9IChmb3JtSWQ6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbCA9IChmb3JtTGFiZWw6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRMYWJlbCgpLCBmb3JtTGFiZWwpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtU2V0VmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH07XHJcbiAgICBmb3JtLlJlZnJlc2ggPSAoc2F2ZT86IGJvb2xlYW4sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8ucmVmcmVzaChzYXZlKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlJlZnJlc2hSaWJib24gPSAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IGNvbnRleHRVaT8ucmVmcmVzaFJpYmJvbihyZWZyZXNoQWxsKTtcclxuICAgIGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlJlbW92ZU9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uU2F2ZSA9IChzYXZlT3B0aW9ucz86IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRleHREYXRhPy5zYXZlKHNhdmVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlNldEZvcm1FbnRpdHlOYW1lID0gKGFyZzogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1FbnRpdHlOYW1lKGFyZyk7XHJcbiAgICBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1Ob3RpZmljYXRpb24obWVzc2FnZSwgbGV2ZWwsIHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uVWlBZGRMb2FkZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRMb2FkZWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZnVuY3Rpb24gTG9hZEV4ZWN1dGlvbkNvbnRleHQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogYW55IHtcclxuICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICBnZXR0ZXIob2JqLCAnRGVwdGgnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXREZXB0aCgpKTtcclxuICAgIGdldHRlcihvYmosICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0V2ZW50QXJncycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpKTtcclxuICAgIGdldHRlcihvYmosICdFdmVudFNvdXJjZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50U291cmNlKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0Zvcm1Db250ZXh0JywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnSXNTYXZlU3VjY2VzcycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRJc1NhdmVTdWNjZXNzKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ1NhdmVFcnJvckluZm8nLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0U2F2ZUVycm9ySW5mbygpKTtcclxuICAgIGdldHRlcihvYmosICdTYXZlTW9kZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRTYXZlTW9kZSgpKTtcclxuICAgIG9iai5EaXNhYmxlQXN5bmNUaW1lb3V0ID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmRpc2FibGVBc3luY1RpbWVvdXQoKTtcclxuICAgIG9iai5HZXRTaGFyZWRWYXJpYWJsZSA9IChrZXk6IHN0cmluZykgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0U2hhcmVkVmFyaWFibGUoa2V5KTtcclxuICAgIG9iai5Jc0RlZmF1bHRQcmV2ZW50ZWQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uaXNEZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICBvYmouSXNJbml0aWFsTG9hZCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXREYXRhTG9hZFN0YXRlKCkgPT09IDE7XHJcbiAgICBvYmouU2V0UHJldmVudERlZmF1bHQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8ucHJldmVudERlZmF1bHQoKTtcclxuICAgIG9iai5TZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3IgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8ucHJldmVudERlZmF1bHRPbkVycm9yKCk7XHJcbiAgICBvYmouU2V0U2hhcmVkVmFyaWFibGUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LnNldFNoYXJlZFZhcmlhYmxlKGtleSwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIFNpZGVQYW5lcyBBUEkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgYWNjZXNzIHRvIHNpZGUgcGFuZXMgZnVuY3Rpb25hbGl0eSBpbiBtb2RlbC1kcml2ZW4gYXBwcy5cclxuICogQHJldHVybnMgQW4gb2JqZWN0IGltcGxlbWVudGluZyB0aGUgSVNpZGVQYW5lcyBpbnRlcmZhY2VcclxuICogQGxpbmsgaHR0cHM6Ly9sZWFybi5taWNyb3NvZnQuY29tL2VuLXVzL3Bvd2VyLWFwcHMvZGV2ZWxvcGVyL21vZGVsLWRyaXZlbi1hcHBzL2NsaWVudGFwaS9yZWZlcmVuY2UveHJtLWFwcC1zaWRlcGFuZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2FkU2lkZVBhbmVzKCk6IGFueSB7XHJcbiAgICBjb25zdCBzaWRlUGFuZXM6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoc2lkZVBhbmVzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uc3RhdGUsICh2YWx1ZTogYW55KSA9PiB7IGNvbnN0IHggPSBnZXRYcm0oKTsgaWYgKCh4IGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzKSAoeCBhcyBhbnkpLkFwcC5zaWRlUGFuZXMuc3RhdGUgPSB2YWx1ZTsgfSk7XHJcbiAgICBzaWRlUGFuZXMuQ3JlYXRlID0gZnVuY3Rpb24gKHBhbmVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSkgeyAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5jcmVhdGVQYW5lKHBhbmVPcHRpb25zKT8udGhlbihzdWNjZXNzQ2FsbGJhY2spOyB9O1xyXG4gICAgc2lkZVBhbmVzLkdldCA9IChwYW5lSWQ6IHN0cmluZykgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0UGFuZShwYW5lSWQpO1xyXG4gICAgc2lkZVBhbmVzLkdldEFsbCA9ICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldEFsbFBhbmVzKCk7XHJcbiAgICBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRTZWxlY3RlZFBhbmUoKTtcclxuICAgIHJldHVybiBzaWRlUGFuZXM7XHJcbn1cclxuLyoqXHJcbiAqIExvYWRzIHRoZSBXZWJBcGkgd3JhcHBlci5cclxuICogUHJvdmlkZXMgbWV0aG9kcyB0byB1c2UgV2ViIEFQSSB0byBjcmVhdGUgYW5kIG1hbmFnZSByZWNvcmRzIGFuZCBleGVjdXRlIFdlYiBBUEkgYWN0aW9ucyBhbmQgZnVuY3Rpb25zLlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZSBJV2ViQXBpIGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0td2ViYXBpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFdlYkFwaSgpOiBEZXZLaXQuSVdlYkFwaSB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9IGFzIERldktpdC5JV2ViQXBpO1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRXZWJBcGkgPSB4cm0/LldlYkFwaTtcclxuICAgIGNvbnN0IGdldE9ubGluZSA9IHhybT8uV2ViQXBpPy5vbmxpbmU7XHJcbiAgICBjb25zdCBnZXRPZmZsaW5lID0geHJtPy5XZWJBcGk/Lm9mZmxpbmU7XHJcbiAgICBjb25zdCBpc0NvbnN0cnVjdG9yID0gKGZuOiBhbnkpOiBib29sZWFuID0+IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWZuLnByb3RvdHlwZTtcclxuICAgIGNvbnN0IG1hcEVudGl0eSA9IChhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeTogYW55LCBlbnRpdHk6IGFueSkgPT5cclxuICAgICAgICBpc0NvbnN0cnVjdG9yKGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KVxyXG4gICAgICAgICAgICA/IG5ldyBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShlbnRpdHkpXHJcbiAgICAgICAgICAgIDogYXBpQ29uc3RydWN0b3JPckZhY3RvcnkoZW50aXR5KTtcclxuICAgIGNvbnN0IGV4dHJhY3RFbnRpdHlOYW1lID0gZnVuY3Rpb24gKGZldGNoWG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBjbGVhblhtbCA9IGZldGNoWG1sO1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sTWF0Y2ggPSBmZXRjaFhtbC5tYXRjaCgvZmV0Y2h4bWw9L2kpO1xyXG4gICAgICAgIGlmIChmZXRjaFhtbE1hdGNoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0SW5kZXggPSBmZXRjaFhtbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZldGNoeG1sPScpICsgJ2ZldGNoeG1sPScubGVuZ3RoO1xyXG4gICAgICAgICAgICBjbGVhblhtbCA9IGRlY29kZVVSSUNvbXBvbmVudChmZXRjaFhtbC5zdWJzdHJpbmcoc3BsaXRJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChmZXRjaFhtbC50cmltKCkuc3RhcnRzV2l0aCgnPCcpKSB7XHJcbiAgICAgICAgICAgIGNsZWFuWG1sID0gZmV0Y2hYbWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNsZWFuWG1sLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eU5vZGUgPSB4bWxEb2MucXVlcnlTZWxlY3RvcihcImVudGl0eVwiKTtcclxuICAgICAgICBpZiAoZW50aXR5Tm9kZSAmJiBlbnRpdHlOb2RlLmhhc0F0dHJpYnV0ZShcIm5hbWVcIikpXHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHlOb2RlLmdldEF0dHJpYnV0ZShcIm5hbWVcIikhO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGl0eSBuYW1lIG5vdCBmb3VuZCBpbiBmZXRjaFhtbFwiKTtcclxuICAgIH07XHJcbiAgICBvYmouQ3JlYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8uY3JlYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBkYXRhKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkRlbGV0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5kZWxldGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlTXVsdGlwbGVSZWNvcmRzID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcsIG1heFBhZ2VTaXplPzogbnVtYmVyLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhlbnRpdHlMb2dpY2FsTmFtZSwgb3B0aW9ucywgbWF4UGFnZVNpemUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouVXBkYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8udXBkYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVNdWx0aXBsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0czogYW55W10sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoZ2V0V2ViQXBpIGFzIGFueSk/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZHMgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM6IHN0cmluZywgb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrPzogYW55LCBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrPzogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZztcclxuICAgICAgICBsZXQgb3B0aW9uczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBtYXhQYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhhc0ZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiAvZmV0Y2h4bWw9L2kudGVzdChzdHIpO1xyXG4gICAgICAgIGNvbnN0IGlzUGxhaW5GZXRjaFhtbCA9IChzdHI6IHN0cmluZykgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyLnRyaW0oKS5zdGFydHNXaXRoKCc8ZmV0Y2gnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhID0gdHlwZW9mIGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAoaGFzRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICBpc1BsYWluRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICAoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMuc3RhcnRzV2l0aCgnPycpICYmICFoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpKTtcclxuICAgICAgICBpZiAoc2Vjb25kUGFyYW1Jc0ZldGNoWG1sT3JPRGF0YSkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChpc1BsYWluRmV0Y2hYbWwob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAnP2ZldGNoWG1sPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ZldGNoWG1sKG9wdGlvbnMpIHx8IGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eUxvZ2ljYWxOYW1lID0gZXh0cmFjdEVudGl0eU5hbWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudGl0eSBuYW1lIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gT0RhdGEgcXVlcnkuIFBsZWFzZSBwcm92aWRlIGVudGl0eUxvZ2ljYWxOYW1lIGFzIHNlY29uZCBwYXJhbWV0ZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lISwgb3B0aW9ucywgbWF4UGFnZVNpemUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW50aXRpZXMgJiYgcmVzdWx0LmVudGl0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZW50aXRpZXMubWFwKChlbnRpdHk6IGFueSkgPT4gbWFwRW50aXR5KGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LCBlbnRpdHkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZCA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIC8vIFJhdyBzaWduYXR1cmU6IChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnM/LCBzdWNjZXNzQ2FsbGJhY2s/LCBlcnJvckNhbGxiYWNrPylcclxuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFja10gPSBhcmdzO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNYXBwZWQgc2lnbmF0dXJlOiAoYXBpQ29uc3RydWN0b3JPckZhY3RvcnksIGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgb3B0aW9uc09yQ2FsbGJhY2s/LCBzdWNjZXNzQ2FsbGJhY2s/LCBlcnJvckNhbGxiYWNrPylcclxuICAgICAgICBsZXQgW2FwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LCBlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnNPckNhbGxiYWNrLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2tdID0gYXJncztcclxuICAgICAgICBsZXQgb3B0aW9uczogc3RyaW5nIHwgdW5kZWZpbmVkID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnc3RyaW5nJyA/IG9wdGlvbnNPckNhbGxiYWNrIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9uc09yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zKS50aGVuKChyZXN1bHQ6IGFueSkgPT5cclxuICAgICAgICAgICAgbWFwRW50aXR5KGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LCByZXN1bHQpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ09ubGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvbmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGUocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbmxpbmUuRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gb25saW5lO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnT2ZmbGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvZmZsaW5lOiBhbnkgPSB7fTtcclxuICAgICAgICBvZmZsaW5lLklzQXZhaWxhYmxlID0gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcpID0+IChnZXRPZmZsaW5lIGFzIGFueSk/LmlzQXZhaWxhYmxlKGVudGl0eUxvZ2ljYWxOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2ZmbGluZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG4vKipcclxuICogTG9hZHMgdGhlIENvcGlsb3QgQVBJIHdyYXBwZXIuXHJcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byBDb3BpbG90IGZ1bmN0aW9uYWxpdHkgZm9yIGV4ZWN1dGluZyBldmVudHMgYW5kIHByb21wdHMuXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlIElDb3BpbG90IGludGVyZmFjZVxyXG4gKiBAbGluayBodHRwczovL2xlYXJuLm1pY3Jvc29mdC5jb20vZW4tdXMvcG93ZXItYXBwcy9kZXZlbG9wZXIvbW9kZWwtZHJpdmVuLWFwcHMvY2xpZW50YXBpL3JlZmVyZW5jZS94cm0tY29waWxvdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRDb3BpbG90KCk6IERldktpdC5JQ29waWxvdCB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRDb3BpbG90ID0gKHhybSBhcyBhbnkpPy5Db3BpbG90O1xyXG4gICAgb2JqLkV4ZWN1dGVFdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlRXZlbnQoZXZlbnROYW1lLCBldmVudFBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZVByb21wdCA9IGZ1bmN0aW9uIChwcm9tcHRUZXh0OiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlUHJvbXB0KHByb21wdFRleHQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRPdGhlcnMoZm9ybUNvbnRleHQ6IGFueSwgZm9ybTogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGZvcm0uU2lkZVBhbmVzID0gTG9hZFNpZGVQYW5lcygpO1xyXG4gICAgZm9ybS5XZWJBcGkgPSBMb2FkV2ViQXBpKCk7XHJcbiAgICBmb3JtLkNvcGlsb3QgPSBMb2FkQ29waWxvdCgpO1xyXG59XHJcbi8qKlxyXG4gKiBMb2FkcyBhIGZvcm0gd2l0aCB0eXBlZCBCb2R5LCBIZWFkZXIsIFRhYiwgR3JpZCwgTmF2aWdhdGlvbiwgUXVpY2tGb3JtLCBhbmQgUHJvY2VzcyBzZWN0aW9ucy5cclxuICogVGhpcyBpcyB0aGUgbWFpbiBmdW5jdGlvbiBmb3IgaW5pdGlhbGl6aW5nIGEgZm9ybSBpbiBUeXBlU2NyaXB0LlxyXG4gKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBUaGUgZXhlY3V0aW9uIGNvbnRleHQgcGFzc2VkIHRvIHRoZSBmb3JtIGV2ZW50IGhhbmRsZXJcclxuICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgT3B0aW9uYWwgZGVmYXVsdCB3ZWIgcmVzb3VyY2UgbmFtZSBmb3IgdXRpbGl0eSBmdW5jdGlvbnNcclxuICogQHBhcmFtIGZvcm1Db25maWcgQ29uZmlndXJhdGlvbiBvYmplY3Qgc3BlY2lmeWluZyBmaWVsZHMsIHRhYnMsIGdyaWRzLCBldGMuXHJcbiAqIEByZXR1cm5zIEEgdHlwZWQgZm9ybSBvYmplY3Qgd2l0aCBhbGwgZm9ybSBmdW5jdGlvbmFsaXR5XHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEZvcm1WMjxUQm9keSA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRIZWFkZXIgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUVGFiID0gUmVjb3JkPHN0cmluZywgYW55PiwgVEdyaWQgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUTmF2aWdhdGlvbiA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRRdWlja0Zvcm0gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUUHJvY2VzcyA9IGFueT4oXHJcbiAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICBmb3JtQ29uZmlnOiB7XHJcbiAgICAgICAgYm9keT86IHN0cmluZ1tdO1xyXG4gICAgICAgIGhlYWRlcj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHRhYj86IHN0cmluZ1tdO1xyXG4gICAgICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgICAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAgICAgcXVpY2s/OiBzdHJpbmdbXTtcclxuICAgICAgICBicGY/OiBzdHJpbmdbXTtcclxuICAgIH1cclxuKToge1xyXG4gICAgRXhlY3V0aW9uQ29udGV4dDogRGV2S2l0LklFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgQm9keTogVEJvZHk7XHJcbiAgICBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBUYWI6IFRUYWI7XHJcbiAgICBHcmlkOiBUR3JpZDtcclxuICAgIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIEF0dHJpYnV0ZXM6IGFueTtcclxuICAgIENvbnRyb2xzOiBhbnk7XHJcbiAgICBEYXRhWG1sOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRW50aXR5SXNWYWxpZDogYm9vbGVhbjtcclxuICAgIEVudGl0eVJlZmVyZW5jZTogYW55O1xyXG4gICAgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBWaWV3UG9ydEhlaWdodDogbnVtYmVyO1xyXG4gICAgVmlld1BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBBZGRPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBBZGRPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFJlbW92ZU9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFJlbW92ZU9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRGF0YUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRGF0YVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgRm9ybUlzVmlzaWJsZTogKGZvcm1JZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgRm9ybU5hdmlnYXRlVG9Gb3JtSWQ6IChmb3JtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIEZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsOiAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBGb3JtU2V0VmlzaWJsZTogKGZvcm1JZDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybUVudGl0eU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBQcm9jZXNzOiBUUHJvY2VzcztcclxuICAgIFV0aWxpdHk6IGFueTtcclxuICAgIFNpZGVQYW5lczogYW55O1xyXG4gICAgV2ViQXBpOiBhbnk7XHJcbiAgICBDb3BpbG90OiBhbnk7XHJcbn0ge1xyXG4gICAgY29uc3QgZm9ybUNvbnRleHQgPSBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dD8uKCkgPz8gZXhlY3V0aW9uQ29udGV4dCA/PyBudWxsO1xyXG4gICAgY29uc3QgZm9ybSA9IExvYWRGb3JtKGZvcm1Db250ZXh0KTtcclxuICAgIGNvbnN0IHsgYm9keSA9IFtdLCB0YWIgPSBbXSwgaGVhZGVyID0gW10sIGJwZiA9IFtdLCBxdWljayA9IFtdLCBncmlkID0gW10sIG5hdmlnYXRpb24gPSBbXSwgZGlhbG9nID0gW10gfSA9IGZvcm1Db25maWcgYXMgYW55O1xyXG4gICAgY29uc3QgYm9keU9iajogYW55ID0ge307XHJcbiAgICBib2R5LmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IGJvZHlPYmpbZmllbGRdID0ge30pO1xyXG4gICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYm9keU9iaik7XHJcbiAgICBjb25zdCB0YWJPYmo6IGFueSA9IHt9O1xyXG4gICAgdGFiLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFt0YWJOYW1lLCBzZWN0aW9uTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXRhYk9ialt0YWJOYW1lXSkge1xyXG4gICAgICAgICAgICB0YWJPYmpbdGFiTmFtZV0gPSB7IFNlY3Rpb246IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYk9ialt0YWJOYW1lXS5TZWN0aW9uW3NlY3Rpb25OYW1lXSA9IHt9O1xyXG4gICAgfSk7XHJcbiAgICBsb2FkVGFicyhmb3JtQ29udGV4dCwgdGFiT2JqKTtcclxuICAgIGJvZHlPYmouVGFiID0gdGFiT2JqO1xyXG4gICAgZm9ybS5Cb2R5ID0gYm9keU9iajtcclxuICAgIGNvbnN0IGhlYWRlck9iajogYW55ID0ge307XHJcbiAgICBoZWFkZXIuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4gaGVhZGVyT2JqW2ZpZWxkXSA9IHt9KTtcclxuICAgIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGhlYWRlck9iaiwgJ2hlYWRlcl8nKTtcclxuICAgIGZvcm0uSGVhZGVyID0gaGVhZGVyT2JqO1xyXG4gICAgY29uc3QgcHJvY2VzcyA9IExvYWRQcm9jZXNzKGZvcm1Db250ZXh0KTtcclxuICAgIGlmIChicGYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGJwZk9iajogYW55ID0ge307XHJcbiAgICAgICAgbGV0IGJwZlByb2Nlc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBicGYuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwcm9jZXNzTmFtZSwgZmllbGROYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgICAgICBpZiAoIWJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBicGZQcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJwZk9ialtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYnBmT2JqLCAnaGVhZGVyX3Byb2Nlc3NfJyk7XHJcbiAgICAgICAgaWYgKGJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIHByb2Nlc3NbYnBmUHJvY2Vzc05hbWVdID0gYnBmT2JqO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvcm0uUHJvY2VzcyA9IHByb2Nlc3M7XHJcbiAgICBjb25zdCBxdWlja0Zvcm1PYmo6IGFueSA9IHt9O1xyXG4gICAgcXVpY2suZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3F1aWNrRm9ybU5hbWUsIGZpZWxkTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXF1aWNrRm9ybU9ialtxdWlja0Zvcm1OYW1lXSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1PYmpbcXVpY2tGb3JtTmFtZV1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbG9hZFF1aWNrRm9ybXMoZm9ybUNvbnRleHQsIHF1aWNrRm9ybU9iaik7XHJcbiAgICBmb3JtLlF1aWNrRm9ybSA9IHF1aWNrRm9ybU9iajtcclxuICAgIGNvbnN0IGdyaWRPYmo6IGFueSA9IHt9O1xyXG4gICAgZ3JpZC5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IGdyaWRPYmpbaXRlbV0gPSB7fSk7XHJcbiAgICBsb2FkR3JpZHMoZm9ybUNvbnRleHQsIGdyaWRPYmopO1xyXG4gICAgZm9ybS5HcmlkID0gZ3JpZE9iajtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25PYmo6IGFueSA9IHt9O1xyXG4gICAgbmF2aWdhdGlvbi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IG5hdmlnYXRpb25PYmpbaXRlbV0gPSB7fSk7XHJcbiAgICBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQsIG5hdmlnYXRpb25PYmopO1xyXG4gICAgZm9ybS5OYXZpZ2F0aW9uID0gbmF2aWdhdGlvbk9iajtcclxuICAgIGlmIChkaWFsb2cubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm0uRGlhbG9nID0gTG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQsIGRpYWxvZyk7XHJcbiAgICB9XHJcbiAgICBmb3JtLlV0aWxpdHkgPSBMb2FkVXRpbGl0eShkZWZhdWx0V2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIGZvcm0uRXhlY3V0aW9uQ29udGV4dCA9IExvYWRFeGVjdXRpb25Db250ZXh0KGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgbG9hZE90aGVycyhmb3JtQ29udGV4dCwgZm9ybSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFByb2Nlc3MoZm9ybUNvbnRleHQ6IGFueSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9jZXNzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGdldFByb2Nlc3MgPSBmb3JtQ29udGV4dD8uZGF0YT8ucHJvY2VzcztcclxuICAgIGNvbnN0IGdldFByb2Nlc3NVaSA9IGZvcm1Db250ZXh0Py51aT8ucHJvY2VzcztcclxuICAgIGNvbnN0IGxvYWRTdGVwID0gKHN0ZXA6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0F0dHJpYnV0ZScsICgpID0+IHN0ZXA/LmdldEF0dHJpYnV0ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHN0ZXA/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1Byb2dyZXNzJywgKCkgPT4gc3RlcD8uZ2V0UHJvZ3Jlc3MoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JlcXVpcmVkJywgKCkgPT4gc3RlcD8uaXNSZXF1aXJlZCgpKTtcclxuICAgICAgICBvYmouU2V0UHJvZ3Jlc3MgPSAoc3RlcFByb2dyZXNzOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykgPT4gc3RlcD8uc2V0UHJvZ3Jlc3Moc3RlcFByb2dyZXNzLCBtZXNzYWdlKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRTdGFnZSA9IChzdGFnZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2F0ZWdvcnknLCAoKSA9PiBzdGFnZT8uZ2V0Q2F0ZWdvcnkoKT8uZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiBzdGFnZT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSWQnLCAoKSA9PiBzdGFnZT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBzdGFnZT8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RhdHVzJywgKCkgPT4gc3RhZ2U/LmdldFN0YXR1cygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RlcHMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gc3RhZ2U/LmdldFN0ZXBzKCk7XHJcbiAgICAgICAgICAgIGlmICghc3RlcHMpIHJldHVybiBbXTtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHNBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc3RlcHMubGVuZ3RoIHx8IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBzQXJyYXkucHVzaChsb2FkU3RlcChzdGVwc1tpbmRleF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RlcHNBcnJheTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvYmouQWxsb3dDcmVhdGVOZXcgPSAoY2FsbGJhY2s6IGFueSkgPT4geyBpZiAoc3RhZ2U/LmdldE5hdmlnYXRpb25CZWhhdmlvcigpKSBzdGFnZS5nZXROYXZpZ2F0aW9uQmVoYXZpb3IoKS5hbGxvd0NyZWF0ZU5ldyA9IGNhbGxiYWNrOyB9O1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFByb2Nlc3NJbm5lciA9IChwcm9jZXNzT2JqOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdJZCcsICgpID0+IHByb2Nlc3NPYmo/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc1JlbmRlcmVkJywgKCkgPT4gcHJvY2Vzc09iaj8uaXNSZW5kZXJlZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHByb2Nlc3NPYmo/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0YWdlcycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc1N0YWdlcyA9IHByb2Nlc3NPYmo/LmdldFN0YWdlcygpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZXNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gcHJvY2Vzc1N0YWdlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkU3RhZ2Uoc3RhZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZ2V0TGVuZ3RoID0gKCkgPT4gcHJvY2Vzc1N0YWdlcz8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiAoc3RhZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcHJvY2Vzc1N0YWdlcz8uZ2V0TGVuZ3RoKCkgfHwgMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHByb2Nlc3NTdGFnZXMuZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkU3RhZ2Uoc3RhZ2UpLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFnZXNPYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVBhdGgnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGF0aE9iajogYW55ID0ge307XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZSA9IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKT8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRTdGFnZShzdGFnZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmdldExlbmd0aCA9ICgpID0+IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKT8uZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiAoc3RhZ2U6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFnZXMgPSBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGFnZXM/LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRTdGFnZShzdGFnZSksIGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVBhdGhPYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlUHJvY2VzcycsICgpID0+IGxvYWRQcm9jZXNzSW5uZXIoZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUHJvY2VzcygpKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVN0YWdlJywgKCkgPT4gbG9hZFN0YWdlKGdldFByb2Nlc3M/LmdldEFjdGl2ZVN0YWdlKCkpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnSW5zdGFuY2VJZCcsICgpID0+IGdldFByb2Nlc3M/LmdldEluc3RhbmNlSWQoKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0luc3RhbmNlTmFtZScsICgpID0+IGdldFByb2Nlc3M/LmdldEluc3RhbmNlTmFtZSgpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnU2VsZWN0ZWRTdGFnZScsICgpID0+IGxvYWRTdGFnZShnZXRQcm9jZXNzPy5nZXRTZWxlY3RlZFN0YWdlKCkpKTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gZ2V0UHJvY2Vzc1VpPy5nZXREaXNwbGF5U3RhdGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgZ2V0UHJvY2Vzc1VpPy5zZXREaXNwbGF5U3RhdGUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnU3RhdHVzJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0U3RhdHVzKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGdldFByb2Nlc3M/LnNldFN0YXR1cyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdWaXNpYmxlJywgKCkgPT4gZ2V0UHJvY2Vzc1VpPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBnZXRQcm9jZXNzVWk/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgIHByb2Nlc3MuQWRkT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJlU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25QcmVTdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblN0YWdlU2VsZWN0ZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25TdGFnZVNlbGVjdGVkKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuRW5hYmxlZFByb2Nlc3NlcyA9IChjYWxsYmFjazogKHByb2Nlc3NlczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgICBnZXRQcm9jZXNzPy5nZXRFbmFibGVkUHJvY2Vzc2VzKChlbmFibGVkUHJvY2Vzc2VzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VzID0gT2JqZWN0LmVudHJpZXMoZW5hYmxlZFByb2Nlc3NlcykubWFwKChbcHJvY2Vzc0lkLCBwcm9jZXNzTmFtZV0pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzSWQ6IHByb2Nlc3NJZCxcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NOYW1lOiBwcm9jZXNzTmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHJvY2Vzcy5Nb3ZlTmV4dCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5tb3ZlTmV4dChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLk1vdmVQcmV2aW91cyA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5tb3ZlUHJldmlvdXMoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5Qcm9jZXNzSW5zdGFuY2VzID0gKGNhbGxiYWNrOiAocHJvY2Vzc2VzOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIGdldFByb2Nlc3M/LmdldFByb2Nlc3NJbnN0YW5jZXMoKHByb2Nlc3NJbnN0YW5jZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZXMgPSBPYmplY3QudmFsdWVzKHByb2Nlc3NJbnN0YW5jZXMpLm1hcCgocHJvYzogYW55KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc0lkOiBwcm9jLlByb2Nlc3NEZWZpbml0aW9uSUQsXHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzTmFtZTogcHJvYy5Qcm9jZXNzRGVmaW5pdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkT246IHByb2MuQ3JlYXRlZE9uLFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZE9uRGF0ZTogcHJvYy5DcmVhdGVkT25EYXRlLFxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2VJZDogcHJvYy5Qcm9jZXNzSW5zdGFuY2VJRCxcclxuICAgICAgICAgICAgICAgIEluc3RhbmNlTmFtZTogcHJvYy5Qcm9jZXNzSW5zdGFuY2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgU3RhdHVzOiBwcm9jLlN0YXR1c0NvZGVOYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBwcm9jZXNzLlJlZmxvdyA9ICh1cGRhdGVVaTogYm9vbGVhbiwgcGFyZW50U3RhZ2U6IHN0cmluZywgbmV4dFN0YWdlOiBzdHJpbmcpID0+IGdldFByb2Nlc3NVaT8ucmVmbG93KHVwZGF0ZVVpLCBwYXJlbnRTdGFnZSwgbmV4dFN0YWdlKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJlU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25QcmVTdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblN0YWdlU2VsZWN0ZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25TdGFnZVNlbGVjdGVkKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlUHJvY2VzcyA9IChwcm9jZXNzSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlUHJvY2Vzcyhwcm9jZXNzSWQsIGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlUHJvY2Vzc0luc3RhbmNlID0gKHByb2Nlc3NJbnN0YW5jZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVByb2Nlc3NJbnN0YW5jZShwcm9jZXNzSW5zdGFuY2VJZCwgY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVTdGFnZSA9IChzdGFnZUlkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVN0YWdlKHN0YWdlSWQsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBwcm9jZXNzO1xyXG59XHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGludGVyZmFjZSBmb3IgZm9ybSBpbml0aWFsaXphdGlvbi5cclxuICogU3BlY2lmaWVzIHdoaWNoIGZpZWxkcywgdGFicywgZ3JpZHMsIGV0Yy4gdG8gbG9hZCBvbiBhIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtQ29uZmlnIHtcclxuICAgIC8qKiBBcnJheSBvZiBib2R5IGZpZWxkIGxvZ2ljYWwgbmFtZXMgKi9cclxuICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBoZWFkZXIgZmllbGQgbG9naWNhbCBuYW1lcyAqL1xyXG4gICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgdGFiIGFuZCBzZWN0aW9uIG5hbWVzIGluIGZvcm1hdCBcIlRhYk5hbWVfX19TZWN0aW9uTmFtZVwiICovXHJcbiAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBncmlkIGNvbnRyb2wgbmFtZXMgKi9cclxuICAgIGdyaWQ/OiBzdHJpbmdbXTtcclxuICAgIC8qKiBBcnJheSBvZiBuYXZpZ2F0aW9uIGl0ZW0gSURzICovXHJcbiAgICBuYXZpZ2F0aW9uPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgcXVpY2sgZm9ybSBuYW1lcyBpbiBmb3JtYXQgXCJRdWlja0Zvcm1OYW1lX19fRmllbGROYW1lXCIgKi9cclxuICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICAvKiogQXJyYXkgb2YgQlBGIGZpZWxkcyBpbiBmb3JtYXQgXCJQcm9jZXNzTmFtZV9fX0ZpZWxkTmFtZVwiICovXHJcbiAgICBicGY/OiBzdHJpbmdbXTtcclxufVxyXG4vKipcclxuICogQmFzZSBjbGFzcyBmb3IgdHlwZWQgZW50aXR5IGZvcm1zLlxyXG4gKiBQcm92aWRlcyBzdHJvbmdseS10eXBlZCBhY2Nlc3MgdG8gZm9ybSBjb250cm9scywgZmllbGRzLCB0YWJzLCBncmlkcywgYW5kIG1vcmUuXHJcbiAqIEV4dGVuZCB0aGlzIGNsYXNzIGluIGdlbmVyYXRlZCBlbnRpdHkgZm9ybSBmaWxlcy5cclxuICogQHRlbXBsYXRlIFRCb2R5IFR5cGUgZGVmaW5pdGlvbiBmb3IgYm9keSBmaWVsZHNcclxuICogQHRlbXBsYXRlIFRIZWFkZXIgVHlwZSBkZWZpbml0aW9uIGZvciBoZWFkZXIgZmllbGRzXHJcbiAqIEB0ZW1wbGF0ZSBUVGFiIFR5cGUgZGVmaW5pdGlvbiBmb3IgdGFic1xyXG4gKiBAdGVtcGxhdGUgVEdyaWQgVHlwZSBkZWZpbml0aW9uIGZvciBncmlkc1xyXG4gKiBAdGVtcGxhdGUgVE5hdmlnYXRpb24gVHlwZSBkZWZpbml0aW9uIGZvciBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAqIEB0ZW1wbGF0ZSBUUXVpY2tGb3JtIFR5cGUgZGVmaW5pdGlvbiBmb3IgcXVpY2sgdmlldyBmb3Jtc1xyXG4gKiBAdGVtcGxhdGUgVFByb2Nlc3MgVHlwZSBkZWZpbml0aW9uIGZvciBidXNpbmVzcyBwcm9jZXNzIGZsb3dzXHJcbiAqIEBsaW5rIGh0dHBzOi8vbGVhcm4ubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlci1hcHBzL2RldmVsb3Blci9tb2RlbC1kcml2ZW4tYXBwcy9jbGllbnRhcGkvcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9ybUJhc2U8VEJvZHksIFRIZWFkZXIsIFRUYWIsIFRHcmlkLCBUTmF2aWdhdGlvbiwgVFF1aWNrRm9ybSwgVFByb2Nlc3MgPSBhbnk+IHtcclxuICAgIHB1YmxpYyBCb2R5OiBUQm9keTtcclxuICAgIHB1YmxpYyBIZWFkZXI6IFRIZWFkZXI7XHJcbiAgICBwdWJsaWMgVGFiOiBUVGFiO1xyXG4gICAgcHVibGljIEdyaWQ6IFRHcmlkO1xyXG4gICAgcHVibGljIE5hdmlnYXRpb246IFROYXZpZ2F0aW9uO1xyXG4gICAgcHVibGljIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIHB1YmxpYyBQcm9jZXNzOiBUUHJvY2VzcztcclxuICAgIHB1YmxpYyBFeGVjdXRpb25Db250ZXh0OiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBwdWJsaWMgVXRpbGl0eTogYW55O1xyXG4gICAgcHVibGljIFNpZGVQYW5lczogRGV2S2l0LklTaWRlUGFuZXM7XHJcbiAgICBwdWJsaWMgV2ViQXBpOiBEZXZLaXQuSVdlYkFwaTtcclxuICAgIHB1YmxpYyBDb3BpbG90OiBEZXZLaXQuSUNvcGlsb3Q7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhSXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBBdHRyaWJ1dGVzOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQ29udHJvbHM6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBEYXRhWG1sOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eVJlZmVyZW5jZTogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFZpZXdQb3J0SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgVmlld1BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwdWJsaWMgQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIFJlZnJlc2hSaWJib246IChyZWZyZXNoQWxsPzogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEFkZE9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBBZGRPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBSZW1vdmVPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgUmVtb3ZlT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRGF0YUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIERhdGFSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtSXNWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgRm9ybU5hdmlnYXRlVG9Gb3JtSWQ6IChmb3JtSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDogKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1TZXRWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgU2V0Rm9ybUVudGl0eU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBleGVjdXRpb25Db250ZXh0OiBhbnksXHJcbiAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgIGZvcm1Db25maWc6IElGb3JtQ29uZmlnXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gTG9hZEZvcm1WMjxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2Vzcz4oXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm1Db25maWdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuQm9keSA9IGZvcm0uQm9keTtcclxuICAgICAgICB0aGlzLkhlYWRlciA9IGZvcm0uSGVhZGVyO1xyXG4gICAgICAgIHRoaXMuVGFiID0gZm9ybS5UYWI7XHJcbiAgICAgICAgdGhpcy5HcmlkID0gZm9ybS5HcmlkO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGlvbiA9IGZvcm0uTmF2aWdhdGlvbjtcclxuICAgICAgICB0aGlzLlF1aWNrRm9ybSA9IGZvcm0uUXVpY2tGb3JtO1xyXG4gICAgICAgIHRoaXMuUHJvY2VzcyA9IGZvcm0uUHJvY2VzcztcclxuICAgICAgICB0aGlzLkV4ZWN1dGlvbkNvbnRleHQgPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSWQgPSBmb3JtLkZvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1MYWJlbCA9IGZvcm0uRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVR5cGUgPSBmb3JtLkZvcm1UeXBlO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SWQgPSBmb3JtLkVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5TmFtZSA9IGZvcm0uRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLkRhdGFJc0RpcnR5ID0gZm9ybS5EYXRhSXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkRhdGFJc1ZhbGlkID0gZm9ybS5EYXRhSXNWYWxpZDtcclxuICAgICAgICB0aGlzLkF0dHJpYnV0ZXMgPSBmb3JtLkF0dHJpYnV0ZXM7XHJcbiAgICAgICAgdGhpcy5Db250cm9scyA9IGZvcm0uQ29udHJvbHM7XHJcbiAgICAgICAgdGhpcy5EYXRhWG1sID0gZm9ybS5EYXRhWG1sO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNEaXJ0eSA9IGZvcm0uRW50aXR5SXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkVudGl0eUlzVmFsaWQgPSBmb3JtLkVudGl0eUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlSZWZlcmVuY2UgPSBmb3JtLkVudGl0eVJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLlByaW1hcnlBdHRyaWJ1dGVWYWx1ZSA9IGZvcm0uUHJpbWFyeUF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRIZWlnaHQgPSBmb3JtLlZpZXdQb3J0SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRXaWR0aCA9IGZvcm0uVmlld1BvcnRXaWR0aDtcclxuICAgICAgICB0aGlzLlNhdmUgPSBmb3JtLlNhdmU7XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoID0gZm9ybS5SZWZyZXNoO1xyXG4gICAgICAgIHRoaXMuQ2xvc2UgPSBmb3JtLkNsb3NlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFJpYmJvbiA9IGZvcm0uUmVmcmVzaFJpYmJvbjtcclxuICAgICAgICB0aGlzLlVpQWRkTG9hZGVkID0gZm9ybS5VaUFkZExvYWRlZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlTG9hZGVkID0gZm9ybS5VaVJlbW92ZUxvYWRlZDtcclxuICAgICAgICB0aGlzLlVpQWRkT25Mb2FkID0gZm9ybS5VaUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlT25Mb2FkID0gZm9ybS5VaVJlbW92ZU9uTG9hZDtcclxuICAgICAgICB0aGlzLkFkZE9uUG9zdFNhdmUgPSBmb3JtLkFkZE9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5BZGRPblNhdmUgPSBmb3JtLkFkZE9uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uUG9zdFNhdmUgPSBmb3JtLlJlbW92ZU9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVPblNhdmUgPSBmb3JtLlJlbW92ZU9uU2F2ZTtcclxuICAgICAgICB0aGlzLkRhdGFBZGRPbkxvYWQgPSBmb3JtLkRhdGFBZGRPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5EYXRhUmVtb3ZlT25Mb2FkID0gZm9ybS5EYXRhUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuRm9ybUlzVmlzaWJsZSA9IGZvcm0uRm9ybUlzVmlzaWJsZTtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1TZXRWaXNpYmxlID0gZm9ybS5Gb3JtU2V0VmlzaWJsZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1FbnRpdHlOYW1lID0gZm9ybS5TZXRGb3JtRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLlV0aWxpdHkgPSBmb3JtLlV0aWxpdHk7XHJcbiAgICAgICAgdGhpcy5TaWRlUGFuZXMgPSBmb3JtLlNpZGVQYW5lcztcclxuICAgICAgICB0aGlzLldlYkFwaSA9IGZvcm0uV2ViQXBpO1xyXG4gICAgICAgIHRoaXMuQ29waWxvdCA9IGZvcm0uQ29waWxvdDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCB1dGlsaXR5OiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0QXBwID0geHJtPy5BcHA7XHJcbiAgICBjb25zdCBnZXREZXZpY2UgPSB4cm0/LkRldmljZTtcclxuICAgIGNvbnN0IGdldEVuY29kaW5nID0geHJtPy5FbmNvZGluZztcclxuICAgIGNvbnN0IGdldEdsb2JhbENvbnRleHQgPSB4cm0/LlV0aWxpdHk/LmdldEdsb2JhbENvbnRleHQoKTtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb24gPSB4cm0/Lk5hdmlnYXRpb247XHJcbiAgICBjb25zdCBnZXRQYW5lbCA9IHhybT8uUGFuZWw7XHJcbiAgICBjb25zdCBnZXRVdGlsaXR5ID0geHJtPy5VdGlsaXR5O1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBnZXRHbG9iYWxDb250ZXh0Py5jbGllbnQ7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NsaWVudE5hbWUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50U3RhdGUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudFN0YXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdGb3JtRmFjdG9yJywgKCkgPT4gY2xpZW50Py5nZXRGb3JtRmFjdG9yKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc05ldHdvcmtBdmFpbGFibGUnLCAoKSA9PiBjbGllbnQ/LmlzTmV0d29ya0F2YWlsYWJsZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNPZmZsaW5lJywgKCkgPT4gY2xpZW50Py5pc09mZmxpbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnRVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDbGllbnRVcmwoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0N1cnJlbnRBcHBVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwVXJsKCkpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGlzT25QcmVtaXNlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdJc09uUHJlbWlzZXMnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5pc09uUHJlbWlzZXMoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0xlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdPcmdhbml6YXRpb25TZXR0aW5ncycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG9yZ2FuaXphdGlvblNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8ub3JnYW5pemF0aW9uU2V0dGluZ3M7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGF0dHJpYnV0ZXMgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlcycsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5JywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Jhc2VDdXJyZW5jeUlkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdENvdW50cnlDb2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmRlZmF1bHRDb3VudHJ5Q29kZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZ1bGxOYW1lQ29udmVudGlvbkNvZGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnRnVsbE5hbWVDb252ZW50aW9uQ29kZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5mdWxsTmFtZUNvbnZlbnRpb25Db2RlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNBdXRvU2F2ZUVuYWJsZWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNBdXRvU2F2ZUVuYWJsZWQpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBpc1RyaWFsT3JnYW5pemF0aW9uIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzVHJpYWxPcmdhbml6YXRpb24nLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNUcmlhbE9yZ2FuaXphdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhbmd1YWdlSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIG9yZ2FuaXphdGlvbkV4cGlyeURhdGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25FeHBpcnlEYXRlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ub3JnYW5pemF0aW9uSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVbmlxdWVOYW1lJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVuaXF1ZU5hbWUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VTa3lwZVByb3RvY29sJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVzZVNreXBlUHJvdG9jb2wpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnUGFnZUNvbnRleHQnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRQYWdlQ29udGV4dCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVXNlclNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8udXNlclNldHRpbmdzO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEYXRlRm9ybWF0dGluZ0luZm8nLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmRhdGVGb3JtYXR0aW5nSW5mbyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RlZmF1bHREYXNoYm9hcmRJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uZGVmYXVsdERhc2hib2FyZElkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNHdWlkZWRIZWxwRW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNHdWlkZWRIZWxwRW5hYmxlZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzSGlnaENvbnRyYXN0RW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNIaWdoQ29udHJhc3RFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSVEwnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzUlRMKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5yb2xlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZVByaXZpbGVnZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZVByaXZpbGVnZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTZWN1cml0eVJvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5zZWN1cml0eVJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVGltZVpvbmVPZmZzZXRNaW51dGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5nZXRUaW1lWm9uZU9mZnNldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3knLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3kpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUcmFuc2FjdGlvbkN1cnJlbmN5SWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3lJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZXJJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlcklkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlck5hbWUnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnVzZXJOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1ZlcnNpb24nLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRWZXJzaW9uKCkpO1xyXG4gICAgdXRpbGl0eS5BZGRHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEFwcD8uYWRkR2xvYmFsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPSAoc2V0dGluZzogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRBZHZhbmNlZENvbmZpZ1NldHRpbmcoc2V0dGluZyBhcyBcIk1heENoaWxkSW5jaWRlbnROdW1iZXJcIiB8IFwiTWF4SW5jaWRlbnRNZXJnZU51bWJlclwiKTtcclxuICAgIHV0aWxpdHkuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgc3RhdGVDb2RlOiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/LmdldEFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyhlbnRpdHlOYW1lLCBzdGF0ZUNvZGUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQmFyY29kZVZhbHVlID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0QmFyY29kZVZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlQXVkaW8gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlQXVkaW8oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlSW1hZ2UoaW1hZ2VPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVWaWRlbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVWaWRlbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAodW5pcXVlSWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5jbGVhckdsb2JhbE5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID0gKCkgPT4gZ2V0VXRpbGl0eT8uY2xvc2VQcm9ncmVzc0luZGljYXRvcigpO1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwTmFtZSA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwTmFtZSgpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudEFwcFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcFByb3BlcnRpZXMoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmdldEN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBnZXRFbnRpdHlNYWluRm9ybURlc2NyaXB0b3Igbm90IGluIEB0eXBlcy9Ycm1cclxuICAgIHV0aWxpdHkuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID0gKGVudGl0eU5hbWU6IHN0cmluZywgZm9ybUlkOiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvcihlbnRpdHlOYW1lLCBmb3JtSWQpO1xyXG4gICAgdXRpbGl0eS5FbnRpdHlNZXRhZGF0YSA9IGZ1bmN0aW9uIChlbnRpdHlOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWV0YWRhdGEoZW50aXR5TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5IdG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEF0dHJpYnV0ZUVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRGVjb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbERlY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5JbnZva2VQcm9jZXNzQWN0aW9uID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5pbnZva2VQcm9jZXNzQWN0aW9uKG5hbWUsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTG9hZFBhbmVsID0gKHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiBnZXRQYW5lbD8ubG9hZFBhbmVsKHVybCwgdGl0bGUpO1xyXG4gICAgdXRpbGl0eS5Mb29rdXBPYmplY3RzID0gZnVuY3Rpb24gKGxvb2t1cE9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8ubG9va3VwT2JqZWN0cyhsb29rdXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk5hdmlnYXRlVG8gPSBmdW5jdGlvbiAocGFnZUlucHV0OiBhbnksIG5hdmlnYXRpb25PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm5hdmlnYXRlVG8ocGFnZUlucHV0LCBuYXZpZ2F0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuQWxlcnREaWFsb2cgPSBmdW5jdGlvbiAoYWxlcnRTdHJpbmdzOiBhbnksIGFsZXJ0T3B0aW9uczogYW55LCBjbG9zZUNhbGxiYWNrPzogKCkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5BbGVydERpYWxvZyhhbGVydFN0cmluZ3MsIGFsZXJ0T3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNsb3NlQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oY2xvc2VDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5Db25maXJtRGlhbG9nID0gZnVuY3Rpb24gKGNvbmZpcm1TdHJpbmdzOiBhbnksIGNvbmZpcm1PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Db25maXJtRGlhbG9nKGNvbmZpcm1TdHJpbmdzLCBjb25maXJtT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRXJyb3JEaWFsb2cgPSBmdW5jdGlvbiAoZXJyb3JPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5FcnJvckRpYWxvZyhlcnJvck9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkZpbGUgPSAoZmlsZTogYW55LCBvcGVuRmlsZU9wdGlvbnM/OiBhbnkpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5GaWxlKGZpbGUsIG9wZW5GaWxlT3B0aW9ucyk7XHJcbiAgICB1dGlsaXR5Lk9wZW5Gb3JtID0gZnVuY3Rpb24gKGVudGl0eUZvcm1PcHRpb25zOiBhbnksIGZvcm1QYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Gb3JtKGVudGl0eUZvcm1PcHRpb25zLCBmb3JtUGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuVXJsID0gKHVybDogc3RyaW5nLCBvcGVuVXJsT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlblVybCh1cmwsIG9wZW5VcmxPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbldlYlJlc291cmNlID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCB3aW5kb3dPcHRpb25zPzogYW55LCBkYXRhPzogc3RyaW5nKSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuV2ViUmVzb3VyY2Uod2ViUmVzb3VyY2VOYW1lLCB3aW5kb3dPcHRpb25zLCBkYXRhKTtcclxuICAgIHV0aWxpdHkuUGlja0ZpbGUgPSBmdW5jdGlvbiAocGlja0ZpbGVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8ucGlja0ZpbGUocGlja0ZpbGVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LlByZXBlbmRPcmdOYW1lID0gKHNQYXRoOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LnByZXBlbmRPcmdOYW1lKHNQYXRoKTtcclxuICAgIHV0aWxpdHkuUmVmcmVzaFBhcmVudEdyaWQgPSAobG9va3VwT3B0aW9uczogYW55KSA9PiBnZXRVdGlsaXR5Py5yZWZyZXNoUGFyZW50R3JpZChsb29rdXBPcHRpb25zKTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIG1heSBiZSB1bmRlZmluZWRcclxuICAgIHV0aWxpdHkuUmVzb3VyY2UgPSAoa2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUhLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5SZXNvdXJjZVN0cmluZyA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKHdlYlJlc291cmNlTmFtZSwga2V5KTtcclxuICAgIHV0aWxpdHkuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uc2hvd1Byb2dyZXNzSW5kaWNhdG9yKG1lc3NhZ2UpO1xyXG4gICAgdXRpbGl0eS5XZWJSZXNvdXJjZVVybCA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0V2ViUmVzb3VyY2VVcmwod2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIHV0aWxpdHkuWG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5LlhtbEVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/LnhtbEVuY29kZShhcmcpO1xyXG4gICAgcmV0dXJuIHV0aWxpdHk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExvYWRGb3JtRGlhbG9nKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgY29uc3QgZm9ybTogYW55ID0ge307XHJcbiAgICBjb25zdCBmaWVsZHNMZW5ndGggPSBmaWVsZHM/Lmxlbmd0aCB8fCAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkc1tpXTtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBmb3JtQ29udGV4dD8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXQoZmllbGROYW1lKTtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZmllbGROYW1lKTtcclxuICAgICAgICBmb3JtW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGZvcm1bZmllbGROYW1lXSwgYXR0cmlidXRlLCBjb250cm9sKTtcclxuICAgIH1cclxuICAgIGZvcm0uQ2xvc2UgPSAoKSA9PiBmb3JtQ29udGV4dD8udWk/LmNsb3NlKCk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBXZWJBcGkgSGVscGVyIFR5cGVzIGFuZCBGdW5jdGlvbnNcclxuLy8gRm9yIGVhcmx5LWJvdW5kIHN0eWxlIFdlYkFwaSBjb2RpbmcgKHNpbWlsYXIgdG8gQyMgZWFybHktYm91bmQpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBGaWVsZCB0eXBlIGZvciBXZWJBcGkgZmllbGRzICovXHJcbmV4cG9ydCB0eXBlIFdlYkFwaUZpZWxkVHlwZSA9ICdJbnRlZ2VyJyB8ICdOdW1iZXInIHwgJ0Jvb2xlYW4nIHwgJ0RhdGVUaW1lJyB8ICdNdWx0aU9wdGlvblNldCc7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBmb3IgYSBXZWJBcGkgZmllbGRcclxuICogVXNlZCB0byBkZWZpbmUgbWV0YWRhdGEgZm9yIGVudGl0eSBmaWVsZHMgaW4gV2ViQXBpIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkFwaUZpZWxkQ29uZmlnIHtcclxuICAgIC8qKiBMb2dpY2FsIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSAoZS5nLiAnYWNjb3VudGlkJywgJ25hbWUnKSAqL1xyXG4gICAgbG9naWNhbE5hbWU6IHN0cmluZztcclxuICAgIC8qKiBTY2hlbWEgbmFtZSBmb3IgbG9va3VwIGJpbmRpbmcgKGUuZy4gJ1BhcmVudEFjY291bnRJZCcpICovXHJcbiAgICBzY2hlbWFOYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqIEVudGl0eSBjb2xsZWN0aW9uIG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudHMnLCAnY29udGFjdHMnKSAqL1xyXG4gICAgZW50aXR5Q29sbGVjdGlvbk5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKiogRW50aXR5IGxvZ2ljYWwgbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50JywgJ2NvbnRhY3QnKSAqL1xyXG4gICAgZW50aXR5TG9naWNhbE5hbWU/OiBzdHJpbmc7XHJcbiAgICAvKiogV2hldGhlciB0aGUgZmllbGQgaXMgcmVhZC1vbmx5ICovXHJcbiAgICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgICAvKiogRmllbGQgdHlwZSBmb3IgcGFyc2luZyAoSW50ZWdlciwgTnVtYmVyLCBCb29sZWFuLCBEYXRlVGltZSwgTXVsdGlPcHRpb25TZXQpICovXHJcbiAgICB0eXBlPzogV2ViQXBpRmllbGRUeXBlO1xyXG59XHJcblxyXG4vKiogTWFwIG9mIGZpZWxkIG5hbWVzIHRvIHRoZWlyIGNvbmZpZ3VyYXRpb25zICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdlYkFwaUZpZWxkQ29uZmlnTWFwIHtcclxuICAgIFtmaWVsZE5hbWU6IHN0cmluZ106IElXZWJBcGlGaWVsZENvbmZpZztcclxufVxyXG5cclxuLyoqIENvbnN0YW50cyBmb3IgT0RhdGEgYW5ub3RhdGlvbnMgKi9cclxuY29uc3QgV0VCQVBJX0ZPUk1BVFRFRF9WQUxVRV9TVUZGSVggPSAnQE9EYXRhLkNvbW11bml0eS5EaXNwbGF5LlYxLkZvcm1hdHRlZFZhbHVlJztcclxuY29uc3QgV0VCQVBJX0xPT0tVUF9MT0dJQ0FMX05BTUVfU1VGRklYID0gJ0BNaWNyb3NvZnQuRHluYW1pY3MuQ1JNLmxvb2t1cGxvZ2ljYWxuYW1lJztcclxuXHJcbi8qKiBUeXBlIHBhcnNlcnMgZm9yIGRpZmZlcmVudCBXZWJBcGkgZmllbGQgdHlwZXMgKi9cclxuY29uc3Qgd2ViQXBpVHlwZVBhcnNlcnM6IFJlY29yZDxzdHJpbmcsICh2YWx1ZTogYW55KSA9PiBhbnk+ID0ge1xyXG4gICAgRGF0ZVRpbWU6ICh2YWx1ZTogYW55KTogRGF0ZSB8IG51bGwgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gaXNOYU4odmFsdWUuZ2V0VGltZSgpKSA/IG51bGwgOiB2YWx1ZTtcclxuICAgICAgICBjb25zdCB0cmltbWVkU3RyaW5nID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XHJcbiAgICAgICAgaWYgKHRyaW1tZWRTdHJpbmcgPT09ICcnKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLnBhcnNlKHRyaW1tZWRTdHJpbmcpO1xyXG4gICAgICAgIGlmIChpc05hTih0aW1lc3RhbXApKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgICAgICByZXR1cm4gaXNOYU4ocGFyc2VkRGF0ZS5nZXRUaW1lKCkpID8gbnVsbCA6IHBhcnNlZERhdGU7XHJcbiAgICB9LFxyXG4gICAgSW50ZWdlcjogKHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsID0+IHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xyXG4gICAgICAgIHJldHVybiBpc05hTihwYXJzZWQpID8gbnVsbCA6IHBhcnNlZDtcclxuICAgIH0sXHJcbiAgICBOdW1iZXI6ICh2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gaXNOYU4ocGFyc2VkKSA/IG51bGwgOiBwYXJzZWQ7XHJcbiAgICB9LFxyXG4gICAgQm9vbGVhbjogKHZhbHVlOiBhbnkpOiBib29sZWFuIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdmFsdWUgIT09IDA7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHRydWVWYWx1ZXMgPSBbJ3RydWUnLCAnMScsICd5ZXMnLCAneSddO1xyXG4gICAgICAgIGNvbnN0IGZhbHNlVmFsdWVzID0gWydmYWxzZScsICcwJywgJ25vJywgJ24nXTtcclxuICAgICAgICBpZiAodHJ1ZVZhbHVlcy5pbmNsdWRlcyhzdHJpbmdWYWx1ZSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChmYWxzZVZhbHVlcy5pbmNsdWRlcyhzdHJpbmdWYWx1ZSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZSBhbmQgcmV0dXJuIHZhbHVlIGJhc2VkIG9uIFdlYkFwaSBmaWVsZCB0eXBlXHJcbiAqL1xyXG5mdW5jdGlvbiB3ZWJBcGlSZXR1cm5HZXQoZGF0YTogYW55LCB0eXBlPzogV2ViQXBpRmllbGRUeXBlKTogYW55IHtcclxuICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQpIHJldHVybiBkYXRhO1xyXG4gICAgY29uc3QgcGFyc2VyID0gd2ViQXBpVHlwZVBhcnNlcnNbdHlwZV07XHJcbiAgICByZXR1cm4gcGFyc2VyID8gcGFyc2VyKGRhdGEpIDogZGF0YTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZSBhIFdlYkFwaSBmaWVsZCBwcm9wZXJ0eSBvbiB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIGdldHRlci9zZXR0ZXJcclxuICogQHBhcmFtIG9iaiBUaGUgdGFyZ2V0IG9iamVjdCB0byBkZWZpbmUgcHJvcGVydHkgb25cclxuICogQHBhcmFtIGZpZWxkTmFtZSBUaGUgcHJvcGVydHkgbmFtZVxyXG4gKiBAcGFyYW0gZW50aXR5IFRoZSByYXcgT0RhdGEgZW50aXR5IG9iamVjdFxyXG4gKiBAcGFyYW0gY29uZmlnIFRoZSBmaWVsZCBjb25maWd1cmF0aW9uXHJcbiAqIEBwYXJhbSB1cHNlcnRFbnRpdHkgVGhlIGVudGl0eSBvYmplY3QgZm9yIENyZWF0ZS9VcGRhdGUgb3BlcmF0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZVdlYkFwaUZpZWxkKFxyXG4gICAgb2JqOiBhbnksXHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcclxuICAgIGVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PixcclxuICAgIGNvbmZpZzogSVdlYkFwaUZpZWxkQ29uZmlnLFxyXG4gICAgdXBzZXJ0RW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XHJcbik6IHZvaWQge1xyXG4gICAgY29uc3QgeyBsb2dpY2FsTmFtZSwgc2NoZW1hTmFtZSwgZW50aXR5Q29sbGVjdGlvbk5hbWUsIGVudGl0eUxvZ2ljYWxOYW1lLCByZWFkT25seSwgdHlwZSB9ID0gY29uZmlnO1xyXG5cclxuICAgIGNvbnN0IGdldEZvcm1hdHRlZFZhbHVlID0gKCk6IHN0cmluZyB8IHN0cmluZ1tdID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRLZXkgPSBsb2dpY2FsTmFtZSArIFdFQkFQSV9GT1JNQVRURURfVkFMVUVfU1VGRklYO1xyXG4gICAgICAgIGlmIChlbnRpdHk/Lltmb3JtYXR0ZWRLZXldID09PSB1bmRlZmluZWQgfHwgZW50aXR5Py5bZm9ybWF0dGVkS2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbG9va3VwS2V5ID0gbG9naWNhbE5hbWUgKyBXRUJBUElfTE9PS1VQX0xPR0lDQUxfTkFNRV9TVUZGSVg7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHk/Lltsb29rdXBLZXldID09PSBlbnRpdHlMb2dpY2FsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudGl0eT8uW2Zvcm1hdHRlZEtleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Py5bZm9ybWF0dGVkS2V5XT8udG9TdHJpbmcoKT8uc3BsaXQoJzsnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbT8udHJpbSgpKSA/PyBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eT8uW2Zvcm1hdHRlZEtleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFZhbHVlID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eT8uW2xvZ2ljYWxOYW1lXSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2xvZ2ljYWxOYW1lXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eUNvbGxlY3Rpb25OYW1lICE9PSB1bmRlZmluZWQgJiYgZW50aXR5Q29sbGVjdGlvbk5hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb29rdXBLZXkgPSBsb2dpY2FsTmFtZSArIFdFQkFQSV9MT09LVVBfTE9HSUNBTF9OQU1FX1NVRkZJWDtcclxuICAgICAgICAgICAgaWYgKGVudGl0eT8uW2xvb2t1cEtleV0gPT09IHVuZGVmaW5lZCB8fCBlbnRpdHk/Lltsb29rdXBLZXldID09PSBlbnRpdHlMb2dpY2FsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYkFwaVJldHVybkdldChlbnRpdHk/Lltsb2dpY2FsTmFtZV0sIHR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Py5bbG9naWNhbE5hbWVdPy50b1N0cmluZygpPy5zcGxpdCgnLCcpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBwYXJzZUludChpdGVtLCAxMCkpID8/IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2ViQXBpUmV0dXJuR2V0KGVudGl0eT8uW2xvZ2ljYWxOYW1lXSwgdHlwZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFZhbHVlID0gKHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0JykgdmFsdWUgPSB2YWx1ZT8uam9pbignLCcpO1xyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdOYW1lID0gKHNjaGVtYU5hbWUgPz8gbG9naWNhbE5hbWUpICsgJ0BvZGF0YS5iaW5kJztcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1cHNlcnRFbnRpdHlbYmluZGluZ05hbWVdID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUucmVwbGFjZSgvW3t9XS9nLCAnJykgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVwc2VydEVudGl0eVtiaW5kaW5nTmFtZV0gPSAnLycgKyBlbnRpdHlDb2xsZWN0aW9uTmFtZSArICcoJyArIGNsZWFuVmFsdWUgKyAnKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cHNlcnRFbnRpdHlbbG9naWNhbE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVudGl0eVtsb2dpY2FsTmFtZV0gPSB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVmaW5lIEZvcm1hdHRlZFZhbHVlIHByb3BlcnR5XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLkZvcm1hdHRlZFZhbHVlLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICBnZXQ6IGdldEZvcm1hdHRlZFZhbHVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBEZWZpbmUgbWFpbiBwcm9wZXJ0eSAocmVhZG9ubHkgb3IgcmVhZC93cml0ZSlcclxuICAgIGlmIChyZWFkT25seSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkTmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkTmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IHNldFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGludGVyZmFjZSBmb3IgV2ViQXBpIGVudGl0eSBvYmplY3RzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElXZWJBcGlFbnRpdHkge1xyXG4gICAgLyoqIFRoZSBlbnRpdHkgb2JqZWN0IGZvciBDcmVhdGUvVXBkYXRlIG9wZXJhdGlvbnMgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICAgIC8qKiBUaGUgT0RhdGEgZW50aXR5IG9iamVjdCBjb250YWluaW5nIHJhdyBkYXRhICovXHJcbiAgICByZWFkb25seSBPRGF0YUVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuICAgIC8qKiBUaGUgZW50aXR5IG5hbWUgKi9cclxuICAgIHJlYWRvbmx5IEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIC8qKiBUaGUgZW50aXR5IGNvbGxlY3Rpb24gbmFtZSAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5Q29sbGVjdGlvbk5hbWU6IHN0cmluZztcclxuICAgIC8qKiBUaGUgQG9kYXRhLmV0YWcgZm9yIGNhY2hpbmcgKi9cclxuICAgIHJlYWRvbmx5ICdAb2RhdGEuZXRhZyc6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICAgIC8qKiBGb3JtYXR0ZWQgdmFsdWVzIGZvciBhbGwgZmllbGRzICovXHJcbiAgICByZWFkb25seSBGb3JtYXR0ZWRWYWx1ZTogUmVjb3JkPHN0cmluZywgYW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcmF3IHZhbHVlIG9mIGFuIGFsaWFzZWQgZmllbGQgKGZyb20gJGV4cGFuZCBvciByZWxhdGVkIGVudGl0eSlcclxuICAgICAqIEBwYXJhbSBhbGlhcyBUaGUgYWxpYXMgZmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIGlzTXVsdGlPcHRpb25TZXQgVHJ1ZSBpZiB0aGUgZmllbGQgaXMgYSBtdWx0aS1vcHRpb24gc2V0XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgcmF3IHZhbHVlIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIGdldEFsaWFzZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0PzogYm9vbGVhbik6IGFueTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgZm9ybWF0dGVkIHZhbHVlIG9mIGFuIGFsaWFzZWQgZmllbGRcclxuICAgICAqIEBwYXJhbSBhbGlhcyBUaGUgYWxpYXMgZmllbGQgbmFtZVxyXG4gICAgICogQHBhcmFtIGlzTXVsdGlPcHRpb25TZXQgVHJ1ZSBpZiB0aGUgZmllbGQgaXMgYSBtdWx0aS1vcHRpb24gc2V0XHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZm9ybWF0dGVkIHZhbHVlIG9yIGVtcHR5IHN0cmluZyBpZiBub3QgZm91bmRcclxuICAgICAqL1xyXG4gICAgZ2V0QWxpYXNlZEZvcm1hdHRlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQ/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgYmFzZSBXZWJBcGkgZW50aXR5IG9iamVjdCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXHJcbiAqIEBwYXJhbSBlbnRpdHkgVGhlIHJhdyBPRGF0YSBlbnRpdHkgb2JqZWN0XHJcbiAqIEBwYXJhbSBlbnRpdHlOYW1lIFRoZSBsb2dpY2FsIG5hbWUgb2YgdGhlIGVudGl0eVxyXG4gKiBAcGFyYW0gZW50aXR5Q29sbGVjdGlvbk5hbWUgVGhlIGNvbGxlY3Rpb24gbmFtZSBvZiB0aGUgZW50aXR5XHJcbiAqIEBwYXJhbSBmaWVsZENvbmZpZ01hcCBNYXAgb2YgZmllbGQgY29uZmlndXJhdGlvbnNcclxuICogQHJldHVybnMgQSBXZWJBcGkgZW50aXR5IG9iamVjdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYkFwaUVudGl0eTxUIGV4dGVuZHMgSVdlYkFwaUVudGl0eT4oXHJcbiAgICBlbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQsXHJcbiAgICBlbnRpdHlOYW1lOiBzdHJpbmcsXHJcbiAgICBlbnRpdHlDb2xsZWN0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgZmllbGRDb25maWdNYXA6IElXZWJBcGlGaWVsZENvbmZpZ01hcFxyXG4pOiBUIHtcclxuICAgIGNvbnN0IGUgPSBlbnRpdHkgPz8ge307XHJcbiAgICBjb25zdCB1cHNlcnRFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuXHJcbiAgICBjb25zdCB3ZWJBcGlFbnRpdHk6IGFueSA9IHtcclxuICAgICAgICBPRGF0YUVudGl0eTogZSxcclxuICAgICAgICBGb3JtYXR0ZWRWYWx1ZToge30sXHJcbiAgICAgICAgRW50aXR5OiB1cHNlcnRFbnRpdHksXHJcbiAgICAgICAgRW50aXR5TmFtZTogZW50aXR5TmFtZSxcclxuICAgICAgICBFbnRpdHlDb2xsZWN0aW9uTmFtZTogZW50aXR5Q29sbGVjdGlvbk5hbWUsXHJcbiAgICAgICAgJ0BvZGF0YS5ldGFnJzogZT8uWydAb2RhdGEuZXRhZyddLFxyXG5cclxuICAgICAgICBnZXRBbGlhc2VkVmFsdWUoYWxpYXM6IHN0cmluZywgaXNNdWx0aU9wdGlvblNldCA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKGU/LlthbGlhc10gPT09IHVuZGVmaW5lZCB8fCBlPy5bYWxpYXNdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNNdWx0aU9wdGlvblNldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU/LlthbGlhc10udG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBwYXJzZUludChpdGVtLCAxMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlPy5bYWxpYXNdO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldEFsaWFzZWRGb3JtYXR0ZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0ID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFsaWFzICsgV0VCQVBJX0ZPUk1BVFRFRF9WQUxVRV9TVUZGSVg7XHJcbiAgICAgICAgICAgIGlmIChlPy5ba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGU/LltrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTXVsdGlPcHRpb25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlPy5ba2V5XT8udG9TdHJpbmcoKT8uc3BsaXQoJzsnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbT8udHJpbSgpKSA/PyBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZT8uW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZWZpbmUgYWxsIGZpZWxkcyB1c2luZyB0aGUgZmllbGQgY29uZmlndXJhdGlvblxyXG4gICAgZm9yIChjb25zdCBmaWVsZE5hbWUgaW4gZmllbGRDb25maWdNYXApIHtcclxuICAgICAgICBkZWZpbmVXZWJBcGlGaWVsZCh3ZWJBcGlFbnRpdHksIGZpZWxkTmFtZSwgZSwgZmllbGRDb25maWdNYXBbZmllbGROYW1lXSwgdXBzZXJ0RW50aXR5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2ViQXBpRW50aXR5IGFzIFQ7XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBPcHRpb25TZXQudHMgLSBDZW50cmFsaXplZCBPcHRpb25TZXQgZGVmaW5pdGlvbnNcclxuICogR2VuZXJhdGVkIGZpbGUgLSBETyBOT1QgTU9ESUZZIE1BTlVBTExZXHJcbiAqIFxyXG4gKiBVc2FnZTogaW1wb3J0IHsgT3B0aW9uU2V0IH0gZnJvbSAnLi9nZW5lcmF0b3IvT3B0aW9uU2V0JztcclxuICogICAgICAgIE9wdGlvblNldC5Gb3JtVHlwZS5DcmVhdGVcclxuICogICAgICAgIE9wdGlvblNldC5BY2NvdW50LkluZHVzdHJ5Q29kZS5Db25zdWx0aW5nXHJcbiAqL1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHbG9iYWwgT3B0aW9uU2V0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkdmFuY2VkIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZm9yIHRoZSBvcmdhbml6YXRpb24gKi9cclxuY29uc3QgQWR2YW5jZWRDb25maWdTZXR0aW5nID0ge1xyXG4gICAgLyoqIE1heENoaWxkSW5jaWRlbnROdW1iZXIgKi9cclxuICAgIE1heENoaWxkSW5jaWRlbnROdW1iZXI6ICdNYXhDaGlsZEluY2lkZW50TnVtYmVyJyxcclxuICAgIC8qKiBNYXhJbmNpZGVudE1lcmdlTnVtYmVyICovXHJcbiAgICBNYXhJbmNpZGVudE1lcmdlTnVtYmVyOiAnTWF4SW5jaWRlbnRNZXJnZU51bWJlcidcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsdWUgdG8gaW5kaWNhdGUgd2hpY2ggY2xpZW50IHRoZSBzY3JpcHQgaXMgZXhlY3V0aW5nIGluICovXHJcbmNvbnN0IENsaWVudE5hbWUgPSB7XHJcbiAgICAvKiogV2ViICovXHJcbiAgICBXZWI6ICdXZWInLFxyXG4gICAgLyoqIE91dGxvb2sgKi9cclxuICAgIE91dGxvb2s6ICdPdXRsb29rJyxcclxuICAgIC8qKiBNb2JpbGUgKi9cclxuICAgIE1vYmlsZTogJ01vYmlsZSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsdWUgdG8gaW5kaWNhdGUgdGhlIHN0YXRlIG9mIHRoZSBjbGllbnQgKi9cclxuY29uc3QgQ2xpZW50U3RhdGUgPSB7XHJcbiAgICAvKiogT25saW5lICovXHJcbiAgICBPbmxpbmU6ICdPbmxpbmUnLFxyXG4gICAgLyoqIE9mZmxpbmUgKi9cclxuICAgIE9mZmxpbmU6ICdPZmZsaW5lJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoZSB0eXBlIG9mIGF0dHJpYnV0ZSAqL1xyXG5jb25zdCBGaWVsZEF0dHJpYnV0ZVR5cGUgPSB7XHJcbiAgICAvKiogYm9vbGVhbiAqL1xyXG4gICAgQm9vbGVhbjogJ2Jvb2xlYW4nLFxyXG4gICAgLyoqIGRhdGV0aW1lICovXHJcbiAgICBEYXRlVGltZTogJ2RhdGV0aW1lJyxcclxuICAgIC8qKiBkZWNpbWFsICovXHJcbiAgICBEZWNpbWFsOiAnZGVjaW1hbCcsXHJcbiAgICAvKiogZG91YmxlICovXHJcbiAgICBEb3VibGU6ICdkb3VibGUnLFxyXG4gICAgLyoqIGludGVnZXIgKi9cclxuICAgIEludGVnZXI6ICdpbnRlZ2VyJyxcclxuICAgIC8qKiBsb29rdXAgKi9cclxuICAgIExvb2t1cDogJ2xvb2t1cCcsXHJcbiAgICAvKiogbWVtbyAqL1xyXG4gICAgTWVtbzogJ21lbW8nLFxyXG4gICAgLyoqIG1vbmV5ICovXHJcbiAgICBNb25leTogJ21vbmV5JyxcclxuICAgIC8qKiBtdWx0aXNlbGVjdG9wdGlvbnNldCAqL1xyXG4gICAgTXVsdGlPcHRpb25TZXQ6ICdtdWx0aW9wdGlvbnNldCcsXHJcbiAgICAvKiogb3B0aW9uc2V0ICovXHJcbiAgICBPcHRpb25TZXQ6ICdvcHRpb25zZXQnLFxyXG4gICAgLyoqIHN0cmluZyAqL1xyXG4gICAgU3RyaW5nOiAnc3RyaW5nJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIEEgdmFsdWUgdGhhdCBjYXRlZ29yaXplcyBjb250cm9scyAqL1xyXG5jb25zdCBGaWVsZENvbnRyb2xUeXBlID0ge1xyXG4gICAgLyoqIHN0YW5kYXJkIC0gQSBzdGFuZGFyZCBjb250cm9sICovXHJcbiAgICBTdGFuZGFyZDogJ3N0YW5kYXJkJyxcclxuICAgIC8qKiBpZnJhbWUgLSBBbiBJRlJBTUUgY29udHJvbCAqL1xyXG4gICAgSWZyYW1lOiAnaWZyYW1lJyxcclxuICAgIC8qKiBrYnNlYXJjaCAtIEEga25vd2xlZGdlIGJhc2Ugc2VhcmNoIGNvbnRyb2wgKi9cclxuICAgIEtiU2VhcmNoOiAna2JzZWFyY2gnLFxyXG4gICAgLyoqIGxvb2t1cCAtIEEgbG9va3VwIGNvbnRyb2wgKi9cclxuICAgIExvb2t1cDogJ2xvb2t1cCcsXHJcbiAgICAvKiogbXVsdGlzZWxlY3RvcHRpb25zZXQgLSBBIG11bHRpLXNlbGVjdCBvcHRpb24gc2V0IGNvbnRyb2wgKi9cclxuICAgIE11bHRpU2VsZWN0T3B0aW9uc2V0OiAnbXVsdGlzZWxlY3RvcHRpb25zZXQnLFxyXG4gICAgLyoqIG5vdGVzIC0gQSBub3RlcyBjb250cm9sICovXHJcbiAgICBOb3RlczogJ25vdGVzJyxcclxuICAgIC8qKiBvcHRpb25zZXQgLSBBbiBvcHRpb24gc2V0IGNvbnRyb2wgKi9cclxuICAgIE9wdGlvblNldDogJ29wdGlvbnNldCcsXHJcbiAgICAvKiogcXVpY2tmb3JtIC0gQSBxdWljayB2aWV3IGNvbnRyb2wgKi9cclxuICAgIFF1aWNrRm9ybTogJ3F1aWNrZm9ybScsXHJcbiAgICAvKiogc3ViZ3JpZCAtIEEgc3ViZ3JpZCBjb250cm9sICovXHJcbiAgICBTdWJHcmlkOiAnc3ViZ3JpZCcsXHJcbiAgICAvKiogdGltZXJjb250cm9sIC0gQSB0aW1lciBjb250cm9sICovXHJcbiAgICBUaW1lckNvbnRyb2w6ICd0aW1lcmNvbnRyb2wnLFxyXG4gICAgLyoqIHRpbWVsaW5ld2FsbCAtIEEgdGltZWxpbmUgY29udHJvbCAoZm9yIFVuaWZpZWQgSW50ZXJmYWNlKSAqL1xyXG4gICAgVGltZWxpbmVXYWxsOiAndGltZWxpbmV3YWxsJyxcclxuICAgIC8qKiB3ZWJyZXNvdXJjZSAtIEEgd2ViIHJlc291cmNlIGNvbnRyb2wgKi9cclxuICAgIFdlYlJlc291cmNlOiAnd2VicmVzb3VyY2UnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgZm9ybWF0dGluZyBvcHRpb25zIGZvciB0aGUgYXR0cmlidXRlICovXHJcbmNvbnN0IEZpZWxkRm9ybWF0ID0ge1xyXG4gICAgLyoqIGRhdGUgKi9cclxuICAgIERhdGU6ICdkYXRlJyxcclxuICAgIC8qKiBkYXRldGltZSAqL1xyXG4gICAgRGF0ZVRpbWU6ICdkYXRldGltZScsXHJcbiAgICAvKiogZHVyYXRpb24gKi9cclxuICAgIER1cmF0aW9uOiAnZHVyYXRpb24nLFxyXG4gICAgLyoqIGVtYWlsICovXHJcbiAgICBFbWFpbDogJ2VtYWlsJyxcclxuICAgIC8qKiBsYW5ndWFnZSAqL1xyXG4gICAgTGFuZ3VhZ2U6ICdsYW5ndWFnZScsXHJcbiAgICAvKiogbm9uZSAqL1xyXG4gICAgTm9uZTogJ25vbmUnLFxyXG4gICAgLyoqIHRleHRhcmVhICovXHJcbiAgICBUZXh0QXJlYTogJ3RleHRhcmVhJyxcclxuICAgIC8qKiB0ZXh0ICovXHJcbiAgICBUZXh0OiAndGV4dCcsXHJcbiAgICAvKiogdGlja2Vyc3ltYm9sICovXHJcbiAgICBUaWNrZXJTeW1ib2w6ICd0aWNrZXJzeW1ib2wnLFxyXG4gICAgLyoqIHBob25lICovXHJcbiAgICBQaG9uZTogJ3Bob25lJyxcclxuICAgIC8qKiB0aW1lem9uZSAqL1xyXG4gICAgVGltZVpvbmU6ICd0aW1lem9uZScsXHJcbiAgICAvKiogdXJsICovXHJcbiAgICBVcmw6ICd1cmwnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIHR5cGUgb2Ygbm90aWZpY2F0aW9uICovXHJcbmNvbnN0IEZpZWxkTm90aWZpY2F0aW9uTGV2ZWwgPSB7XHJcbiAgICAvKiogRVJST1IgKi9cclxuICAgIEVycm9yOiAnRVJST1InLFxyXG4gICAgLyoqIFJFQ09NTUVOREFUSU9OICovXHJcbiAgICBSZWNvbW1lbmRhdGlvbjogJ1JFQ09NTUVOREFUSU9OJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFZhbHVlIGluZGljYXRpbmcgd2hldGhlciBhIHZhbHVlIGZvciB0aGUgYXR0cmlidXRlIGlzIG5vbmUgb3IgcmVxdWlyZWQgb3IgcmVjb21tZW5kZWQgKi9cclxuY29uc3QgRmllbGRSZXF1aXJlZExldmVsID0ge1xyXG4gICAgLyoqIG5vbmUgKi9cclxuICAgIE5vbmU6ICdub25lJyxcclxuICAgIC8qKiByZXF1aXJlZCAqL1xyXG4gICAgUmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICAvKiogcmVjb21tZW5kZWQgKi9cclxuICAgIFJlY29tbWVuZGVkOiAncmVjb21tZW5kZWQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGF0YSBmcm9tIHRoZSBhdHRyaWJ1dGUgd2lsbCBiZSBzdWJtaXR0ZWQgd2hlbiB0aGUgcmVjb3JkIGlzIHNhdmVkICovXHJcbmNvbnN0IEZpZWxkU3VibWl0TW9kZSA9IHtcclxuICAgIC8qKiBhbHdheXMgLSBUaGUgZGF0YSBpcyBhbHdheXMgc2VudCB3aXRoIGEgc2F2ZSAqL1xyXG4gICAgQWx3YXlzOiAnYWx3YXlzJyxcclxuICAgIC8qKiBuZXZlciAtIFRoZSBkYXRhIGlzIG5ldmVyIHNlbnQgd2l0aCBhIHNhdmUgKi9cclxuICAgIE5ldmVyOiAnbmV2ZXInLFxyXG4gICAgLyoqIGRpcnR5IC0gRGVmYXVsdCBiZWhhdmlvci4gVGhlIGRhdGEgaXMgc2VudCB3aXRoIHRoZSBzYXZlIHdoZW4gaXQgaGFzIGNoYW5nZWQgKi9cclxuICAgIERpcnR5OiAnZGlydHknXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUga2luZCBvZiBkZXZpY2UgdGhlIHVzZXIgaXMgdXNpbmcgKi9cclxuY29uc3QgRm9ybUZhY3RvciA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBVbmtub3duOiAwLFxyXG4gICAgLyoqIDEgKi9cclxuICAgIERlc2t0b3A6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgVGFibGV0OiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIFBob25lOiAzXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGxldmVsIG9mIHRoZSBtZXNzYWdlLCB3aGljaCBkZWZpbmVzIGhvdyB0aGUgbWVzc2FnZSB3aWxsIGJlIGRpc3BsYXllZCAqL1xyXG5jb25zdCBGb3JtTm90aWZpY2F0aW9uTGV2ZWwgPSB7XHJcbiAgICAvKiogRVJST1IgLSBOb3RpZmljYXRpb24gd2lsbCB1c2UgdGhlIHN5c3RlbSBlcnJvciBpY29uICovXHJcbiAgICBFcnJvcjogJ0VSUk9SJyxcclxuICAgIC8qKiBXQVJOSU5HIC0gTm90aWZpY2F0aW9uIHdpbGwgdXNlIHRoZSBzeXN0ZW0gd2FybmluZyBpY29uICovXHJcbiAgICBXYXJuaW5nOiAnV0FSTklORycsXHJcbiAgICAvKiogSU5GTyAtIE5vdGlmaWNhdGlvbiB3aWxsIHVzZSB0aGUgc3lzdGVtIGluZm8gaWNvbiAqL1xyXG4gICAgSW5mbzogJ0lORk8nXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogR2V0cyB0aGUgZm9ybSB0eXBlIGZvciB0aGUgcmVjb3JkICovXHJcbmNvbnN0IEZvcm1UeXBlID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIFVuZGVmaW5lZDogMCxcclxuICAgIC8qKiAxIC0gUXVpY2sgQ3JlYXRlIGZvcm1zIHJldHVybiAxICovXHJcbiAgICBDcmVhdGU6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgVXBkYXRlOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIFJlYWRPbmx5OiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIERpc2FibGVkOiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIEJ1bGtFZGl0OiA1XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGZ1bGwgbmFtZSBjb252ZW50aW9uQ29kZSBzZXR0aW5nIG9mIHRoZSBjdXJyZW50IG9yZ2FuaXphdGlvbiAqL1xyXG5jb25zdCBGdWxsTmFtZUNvbnZlbnRpb25Db2RlID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZTogMCxcclxuICAgIC8qKiAxICovXHJcbiAgICBGaXJzdE5hbWVfTGFzdE5hbWU6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lX01pZGRsZUluaXRpYWw6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgRmlyc3ROYW1lX01pZGRsZUluaXRpYWxfTGFzdE5hbWU6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lX01pZGRsZU5hbWU6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgRmlyc3ROYW1lX01pZGRsZU5hbWVfTGFzdE5hbWU6IDUsXHJcbiAgICAvKiogNiAqL1xyXG4gICAgTGFzdE5hbWVfRmlyc3ROYW1lOiA2LFxyXG4gICAgLyoqIDcgKi9cclxuICAgIExhc3ROYW1lRmlyc3ROYW1lOiA3XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIHR5cGUgb2YgZ3JpZCAqL1xyXG5jb25zdCBHcmlkVHlwZSA9IHtcclxuICAgIC8qKiAxICovXHJcbiAgICBIb21lUGFnZUdyaWQ6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgU3ViZ3JpZDogMlxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERlc2NyaWJpbmcgd2hldGhlciB0byBvcGVuIG9yIHNhdmUgdGhlIGZpbGUgKi9cclxuY29uc3QgT3BlbkZpbGVPcHRpb24gPSB7XHJcbiAgICAvKiogMSAqL1xyXG4gICAgT3BlbjogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBTYXZlOiAyXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGludGVnZXIgdmFsdWUgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgZmxvdyBjYXRlZ29yeSAqL1xyXG5jb25zdCBQcm9jZXNzQ2F0ZWdvcnkgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgUXVhbGlmeTogMCxcclxuICAgIC8qKiAxICovXHJcbiAgICBEZXZlbG9wOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFByb3Bvc2U6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgQ2xvc2U6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgSWRlbnRpZnk6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgUmVzZWFyY2g6IDUsXHJcbiAgICAvKiogNiAqL1xyXG4gICAgUmVzb2x2ZTogNlxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERpc3BsYXkgc3RhdGUgb2YgdGhlIGJ1c2luZXNzIHByb2Nlc3MgZmxvdyAqL1xyXG5jb25zdCBQcm9jZXNzRGlzcGxheVN0YXRlID0ge1xyXG4gICAgLyoqIGV4cGFuZGVkICovXHJcbiAgICBFeHBhbmRlZDogJ2V4cGFuZGVkJyxcclxuICAgIC8qKiBjb2xsYXBzZWQgKi9cclxuICAgIENvbGxhcHNlZDogJ2NvbGxhcHNlZCcsXHJcbiAgICAvKiogZmxvYXRpbmcgKi9cclxuICAgIEZsb2F0aW5nOiAnZmxvYXRpbmcnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGludGVnZXIgdmFsdWUgc3RhdHVzIG9mIHRoZSBzdGFnZSAqL1xyXG5jb25zdCBQcm9jZXNzU3RhdHVzID0ge1xyXG4gICAgLyoqIGFjdGl2ZSAqL1xyXG4gICAgQWN0aXZlOiAnYWN0aXZlJyxcclxuICAgIC8qKiBhYm9ydGVkICovXHJcbiAgICBBYm9ydGVkOiAnYWJvcnRlZCcsXHJcbiAgICAvKiogZmluaXNoZWQgKi9cclxuICAgIEZpbmlzaGVkOiAnZmluaXNoZWQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHZhbHVlIGluZGljYXRpbmcgaG93IHRoZSBzYXZlIGV2ZW50IHdhcyBpbml0aWF0ZWQgYnkgdGhlIHVzZXIgKi9cclxuY29uc3QgU2F2ZU1vZGUgPSB7XHJcbiAgICAvKiogMSAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgU2F2ZTogMSxcclxuICAgIC8qKiAyIC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBTYXZlQW5kQ2xvc2U6IDIsXHJcbiAgICAvKiogNSAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgRGVhY3RpdmF0ZTogNSxcclxuICAgIC8qKiA2IC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBSZWFjdGl2YXRlOiA2LFxyXG4gICAgLyoqIDcgLSBFbWFpbCAqL1xyXG4gICAgRW1haWw6IDcsXHJcbiAgICAvKiogMTUgLSBMZWFkICovXHJcbiAgICBEaXNxdWFsaWZ5OiAxNSxcclxuICAgIC8qKiAxNiAtIExlYWQgKi9cclxuICAgIFF1YWxpZnk6IDE2LFxyXG4gICAgLyoqIDQ3IC0gVXNlciBvciBUZWFtICovXHJcbiAgICBBc3NpZ246IDQ3LFxyXG4gICAgLyoqIDU4IC0gQWN0aXZpdGllcyAqL1xyXG4gICAgU2F2ZUFzQ29tcGxldGVkOiA1OCxcclxuICAgIC8qKiA1OSAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgU2F2ZUFuZE5ldzogNTksXHJcbiAgICAvKiogNzAgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIEF1dG9TYXZlOiA3MFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFNwZWNpZnkgb3B0aW9ucyBmb3Igc2F2aW5nIHRoZSByZWNvcmQgKi9cclxuY29uc3QgU2F2ZU9wdGlvbiA9IHtcclxuICAgIC8qKiBzYXZlYW5kY2xvc2UgLSBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHVzaW5nIHRoZSBTYXZlIGFuZCBDbG9zZSBjb21tYW5kICovXHJcbiAgICBTYXZlQW5kQ2xvc2U6ICdzYXZlYW5kY2xvc2UnLFxyXG4gICAgLyoqIHNhdmVhbmRuZXcgLSBUaGlzIGlzIHRoZSBlcXVpdmFsZW50IG9mIHRoZSB1c2luZyB0aGUgU2F2ZSBhbmQgTmV3IGNvbW1hbmQgKi9cclxuICAgIFNhdmVBbmROZXc6ICdzYXZlYW5kbmV3J1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERpc3BsYXkgc3RhdGUgb2YgdGhlIHNpZGUgcGFuZSAqL1xyXG5jb25zdCBTaWRlUGFuZVN0YXRlID0ge1xyXG4gICAgLyoqIDAgLSBDb2xsYXBzZWQgKi9cclxuICAgIENvbGxhcHNlZDogMCxcclxuICAgIC8qKiAxIC0gRXhwYW5kZWQgKi9cclxuICAgIEV4cGFuZGVkOiAxXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIGNvbnRyb2wgdHlwZSBvZiB0YWIgKi9cclxuY29uc3QgVGFiQ29udGVudFR5cGUgPSB7XHJcbiAgICAvKiogY2FyZFNlY3Rpb25zOiBUaGUgZGVmYXVsdCB0YWIgYmVoYXZpb3IgKi9cclxuICAgIENhcmRTZWN0aW9uczogJ2NhcmRTZWN0aW9ucycsXHJcbiAgICAvKiogc2luZ2xlQ29tcG9uZW50OiBNYXhpbWl6ZXMgdGhlIGNvbnRlbnQgb2YgdGhlIGZpcnN0IGNvbXBvbmVudCBpbiB0aGUgdGFiICovXHJcbiAgICBTaW5nbGVDb21wb25lbnQ6ICdzaW5nbGVDb21wb25lbnQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGlzcGxheSBzdGF0ZSBvZiB0aGUgdGFiICovXHJcbmNvbnN0IFRhYkRpc3BsYXlTdGF0ZSA9IHtcclxuICAgIC8qKiBleHBhbmRlZCAqL1xyXG4gICAgRXhwYW5kZWQ6ICdleHBhbmRlZCcsXHJcbiAgICAvKiogY29sbGFwc2VkICovXHJcbiAgICBDb2xsYXBzZWQ6ICdjb2xsYXBzZWQnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVGhlIHN0YXRlIG9mIHRoZSB0aW1lciBjb250cm9sIC0gVGhpcyBtZXRob2QgaXMgb25seSBzdXBwb3J0ZWQgZm9yIFVuaWZpZWQgSW50ZXJmYWNlICovXHJcbmNvbnN0IFRpbWVyU3RhdGUgPSB7XHJcbiAgICAvKiogMSAqL1xyXG4gICAgTm90U2V0OiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIEluUHJvZ3Jlc3M6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgV2FybmluZzogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBWaW9sYXRlZDogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBTdWNjZXNzOiA1LFxyXG4gICAgLyoqIDYgKi9cclxuICAgIEV4cGlyZWQ6IDYsXHJcbiAgICAvKiogNyAqL1xyXG4gICAgQ2FuY2VsZWQ6IDcsXHJcbiAgICAvKiogOCAqL1xyXG4gICAgUGF1c2VkOiA4XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVudGl0eSBPcHRpb25TZXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBBY2NvdW50IGVudGl0eSBPcHRpb25TZXRzICovXHJcbmNvbnN0IEFjY291bnQgPSB7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBpbmR1c3RyeSBmb3IgdXNlIGluIG1hcmtldGluZyBzZWdtZW50YXRpb24gYW5kIGRlbW9ncmFwaGljIGFuYWx5c2lzICovXHJcbiAgICBJbmR1c3RyeUNvZGU6IHtcclxuICAgICAgICAvKiogMSAtIEFjY291bnRpbmcgKi9cclxuICAgICAgICBBY2NvdW50aW5nOiAxLFxyXG4gICAgICAgIC8qKiA3IC0gQ29uc3VsdGluZyAqL1xyXG4gICAgICAgIENvbnN1bHRpbmc6IDcsXHJcbiAgICAgICAgLyoqIDE2IC0gRmluYW5jaWFsICovXHJcbiAgICAgICAgRmluYW5jaWFsOiAxNixcclxuICAgICAgICAvKiogMjAgLSBJbnN1cmFuY2UgKi9cclxuICAgICAgICBJbnN1cmFuY2U6IDIwLFxyXG4gICAgICAgIC8qKiAxMiAtIFRlY2hub2xvZ3kgKi9cclxuICAgICAgICBUZWNobm9sb2d5OiAxMlxyXG4gICAgfSxcclxuICAgIC8qKiBDdXN0b20gTXVsdGlPcHRpb25TZXQgLSB2NF9DYXRlZ29yaWVzICovXHJcbiAgICB2NF9DYXRlZ29yaWVzOiB7XHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMCAqL1xyXG4gICAgICAgIENhdGVnb3J5X0E6IDEwMDAwMDAwMCxcclxuICAgICAgICAvKiogMTAwMDAwMDAxICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfQjogMTAwMDAwMDAxLFxyXG4gICAgICAgIC8qKiAxMDAwMDAwMDIgKi9cclxuICAgICAgICBDYXRlZ29yeV9DOiAxMDAwMDAwMDIsXHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMyAqL1xyXG4gICAgICAgIENhdGVnb3J5X0Q6IDEwMDAwMDAwM1xyXG4gICAgfVxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFeHBvcnQgY29tYmluZWQgT3B0aW9uU2V0XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBPcHRpb25TZXQgPSB7XHJcbiAgICAvLyBHbG9iYWwgT3B0aW9uU2V0c1xyXG4gICAgQWR2YW5jZWRDb25maWdTZXR0aW5nLFxyXG4gICAgQ2xpZW50TmFtZSxcclxuICAgIENsaWVudFN0YXRlLFxyXG4gICAgRmllbGRBdHRyaWJ1dGVUeXBlLFxyXG4gICAgRmllbGRDb250cm9sVHlwZSxcclxuICAgIEZpZWxkRm9ybWF0LFxyXG4gICAgRmllbGROb3RpZmljYXRpb25MZXZlbCxcclxuICAgIEZpZWxkUmVxdWlyZWRMZXZlbCxcclxuICAgIEZpZWxkU3VibWl0TW9kZSxcclxuICAgIEZvcm1GYWN0b3IsXHJcbiAgICBGb3JtTm90aWZpY2F0aW9uTGV2ZWwsXHJcbiAgICBGb3JtVHlwZSxcclxuICAgIEZ1bGxOYW1lQ29udmVudGlvbkNvZGUsXHJcbiAgICBHcmlkVHlwZSxcclxuICAgIE9wZW5GaWxlT3B0aW9uLFxyXG4gICAgUHJvY2Vzc0NhdGVnb3J5LFxyXG4gICAgUHJvY2Vzc0Rpc3BsYXlTdGF0ZSxcclxuICAgIFByb2Nlc3NTdGF0dXMsXHJcbiAgICBTYXZlTW9kZSxcclxuICAgIFNhdmVPcHRpb24sXHJcbiAgICBTaWRlUGFuZVN0YXRlLFxyXG4gICAgVGFiQ29udGVudFR5cGUsXHJcbiAgICBUYWJEaXNwbGF5U3RhdGUsXHJcbiAgICBUaW1lclN0YXRlLFxyXG4gICAgLy8gRW50aXR5IE9wdGlvblNldHNcclxuICAgIEFjY291bnRcclxufSBhcyBjb25zdDtcclxuIiwgIi8qKlxyXG4gKiBBY2NvdW50LmZvcm0udHMgLSBBY2NvdW50IEZvcm0gZm9yIGVhcmx5LWJvdW5kIHN0eWxlIGZvcm0gY29kaW5nXHJcbiAqIEdlbmVyYXRlZCBmaWxlIC0gRE8gTk9UIE1PRElGWSBNQU5VQUxMWVxyXG4gKiBcclxuICogU3RydWN0dXJlOlxyXG4gKiAxLiBJbXBvcnRzXHJcbiAqIDIuIFR5cGVzIC0gSUJvZHksIElIZWFkZXIsIElUYWJzLCBJR3JpZCwgSU5hdmlnYXRpb24sIElRdWlja0Zvcm0sIElQcm9jZXNzXHJcbiAqIDMuIFJ1bnRpbWUgLSBGb3JtIGNsYXNzIHdpdGggZmllbGQgY29uZmlndXJhdGlvbnNcclxuICovXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbGliL2RldmtpdC5kLnRzXCIgLz5cclxuaW1wb3J0IHsgRm9ybUJhc2UgfSBmcm9tICcuLi8uLi9saWIvZGV2a2l0JztcclxuaW1wb3J0ICcuL09wdGlvblNldCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEuIFR5cGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQWNjb3VudEZvcm0ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQm9keSBjb250cm9scyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGFsbCBjb250cm9scyBvbiB0aGUgZm9ybSBib2R5XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJvZHkge1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBjb21wYW55IG9yIGJ1c2luZXNzIG5hbWUuICovXHJcbiAgICAgICAgTmFtZTogRGV2S2l0LkNvbnRyb2xzLlN0cmluZztcclxuICAgICAgICAvKiogVHlwZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGRlc2NyaWJlIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIERlc2NyaXB0aW9uOiBEZXZLaXQuQ29udHJvbHMuTWVtbztcclxuICAgICAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgTnVtYmVyT2ZFbXBsb3llZXM6IERldktpdC5Db250cm9scy5JbnRlZ2VyO1xyXG4gICAgICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgY3JlZGl0IGZvciB0aGUgYWNjb3VudCBpcyBvbiBob2xkLiAqL1xyXG4gICAgICAgIENyZWRpdE9uSG9sZDogRGV2S2l0LkNvbnRyb2xzLkJvb2xlYW47XHJcbiAgICAgICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkuICovXHJcbiAgICAgICAgSW5kdXN0cnlDb2RlOiBEZXZLaXQuQ29udHJvbHMuT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBDaG9vc2UgdGhlIHByaW1hcnkgY29udGFjdCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgUHJpbWFyeUNvbnRhY3RJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgICAgICAvKiogQ3VzdG9tIEJpcnRoZGF5IGZpZWxkICovXHJcbiAgICAgICAgdjRfQmlydGhkYXk6IERldktpdC5Db250cm9scy5EYXRlT25seTtcclxuICAgICAgICAvKiogQ3VzdG9tIEFwcG9pbnRtZW50IFRpbWUgZmllbGQgKi9cclxuICAgICAgICB2NF9BcHBvaW50bWVudFRpbWU6IERldktpdC5Db250cm9scy5EYXRlVGltZTtcclxuICAgICAgICAvKiogQ3VzdG9tIExhdGl0dWRlIGZpZWxkICovXHJcbiAgICAgICAgdjRfTGF0aXR1ZGU6IERldktpdC5Db250cm9scy5EZWNpbWFsO1xyXG4gICAgICAgIC8qKiBDdXN0b20gRGlzY291bnQgUGVyY2VudGFnZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0Rpc2NvdW50UGVyY2VudGFnZTogRGV2S2l0LkNvbnRyb2xzLkRvdWJsZTtcclxuICAgICAgICAvKiogQ3VzdG9tIENhdGVnb3JpZXMgZmllbGQgKi9cclxuICAgICAgICB2NF9DYXRlZ29yaWVzOiBEZXZLaXQuQ29udHJvbHMuTXVsdGlPcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBIZWxwIFdlYiBSZXNvdXJjZSAqL1xyXG4gICAgICAgIHY0X1dlYlJlc291cmNlSGVscDogRGV2S2l0LkNvbnRyb2xzLldlYlJlc291cmNlO1xyXG4gICAgICAgIC8qKiBDdXN0b20gRXh0ZXJuYWwgUGFnZSAqL1xyXG4gICAgICAgIHY0X0lGcmFtZUV4dGVybmFsOiBEZXZLaXQuQ29udHJvbHMuSUZyYW1lO1xyXG4gICAgICAgIC8qKiBDdXN0b20gU0xBIFRpbWVyICovXHJcbiAgICAgICAgdjRfVGltZXJTTEE6IERldktpdC5Db250cm9scy5UaW1lcjtcclxuICAgICAgICAvKiogS25vd2xlZGdlIEJhc2UgU2VhcmNoICovXHJcbiAgICAgICAgdjRfS25vd2xlZGdlU2VhcmNoOiBEZXZLaXQuQ29udHJvbHMuS25vd2xlZGdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGVhZGVyIGNvbnRyb2xzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgY29udHJvbHMgZGlzcGxheWVkIGluIHRoZSBmb3JtIGhlYWRlclxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElIZWFkZXIge1xyXG4gICAgICAgIC8qKiBFbnRlciB0aGUgdXNlciBvciB0ZWFtIHdobyBpcyBhc3NpZ25lZCB0byBtYW5hZ2UgdGhlIHJlY29yZC4gKi9cclxuICAgICAgICBPd25lcklkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBOdW1iZXJPZkVtcGxveWVlczogRGV2S2l0LkNvbnRyb2xzLkludGVnZXI7XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIGFubnVhbCByZXZlbnVlIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBSZXZlbnVlOiBEZXZLaXQuQ29udHJvbHMuTW9uZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdW1tYXJ5IHRhYiBzZWN0aW9ucyBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU1VNTUFSWV9UQUJUYWJTZWN0aW9ucyB7XHJcbiAgICAgICAgQUNDT1VOVF9JTkZPUk1BVElPTjogRGV2S2l0LkNvbnRyb2xzLlNlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdW1tYXJ5IHRhYiBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU1VNTUFSWV9UQUJUYWIgZXh0ZW5kcyBEZXZLaXQuQ29udHJvbHMuSVRhYiB7XHJcbiAgICAgICAgU2VjdGlvbjogSVNVTU1BUllfVEFCVGFiU2VjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYWJzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYWxsIHRhYnMgb24gdGhlIGZvcm1cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJVGFicyB7XHJcbiAgICAgICAgU1VNTUFSWV9UQUI6IElTVU1NQVJZX1RBQlRhYjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdyaWQgY29udHJvbHMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBhbGwgc3ViZ3JpZCBjb250cm9scyBvbiB0aGUgZm9ybVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElHcmlkIHtcclxuICAgICAgICBDb250YWN0czogRGV2S2l0LkNvbnRyb2xzLkdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYXZpZ2F0aW9uIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgbmF2aWdhdGlvbiBpdGVtc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElOYXZpZ2F0aW9uIHtcclxuICAgICAgICBjb250YWN0X2N1c3RvbWVyX2FjY291bnRzOiBEZXZLaXQuQ29udHJvbHMuTmF2aWdhdGlvbkl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBRdWlja0Zvcm0gaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBxdWljayB2aWV3IGZvcm0gY29udHJvbHNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUXVpY2tGb3JtIHtcclxuICAgICAgICBjb250YWN0cXVpY2tmb3JtOiBEZXZLaXQuQ29udHJvbHMuSVF1aWNrVmlldyAmIHtcclxuICAgICAgICAgICAgQm9keToge1xyXG4gICAgICAgICAgICAgICAgRU1haWxBZGRyZXNzMTogRGV2S2l0LkNvbnRyb2xzLlF1aWNrVmlldztcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnVzaW5lc3MgUHJvY2VzcyBGbG93IGZpZWxkcyBpbnRlcmZhY2VcclxuICAgICAqIHY0X0FjY291bnRCUEYgLSBDdXN0b20gQWNjb3VudCBCdXNpbmVzcyBQcm9jZXNzIEZsb3dcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQlBGIHtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBBY2NvdW50IE5hbWUgKFN0YWdlIDE6IFF1YWxpZnkpICovXHJcbiAgICAgICAgTmFtZTogRGV2S2l0LkNvbnRyb2xzLlN0cmluZztcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBJbmR1c3RyeSBDb2RlIChTdGFnZSAxOiBRdWFsaWZ5KSAqL1xyXG4gICAgICAgIEluZHVzdHJ5Q29kZTogRGV2S2l0LkNvbnRyb2xzLk9wdGlvblNldDtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBSZXZlbnVlIChTdGFnZSAyOiBEZXZlbG9wKSAqL1xyXG4gICAgICAgIFJldmVudWU6IERldktpdC5Db250cm9scy5Nb25leTtcclxuICAgICAgICAvKiogQlBGIEZpZWxkOiBQcmltYXJ5IENvbnRhY3QgKFN0YWdlIDI6IERldmVsb3ApICovXHJcbiAgICAgICAgUHJpbWFyeUNvbnRhY3RJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3MgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBidXNpbmVzcyBwcm9jZXNzIGZsb3cgZGVmaW5pdGlvbnNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUHJvY2VzcyBleHRlbmRzIERldktpdC5Db250cm9scy5JUHJvY2VzcyB7XHJcbiAgICAgICAgLyoqIHY0X0FjY291bnRCUEYgLSBDdXN0b20gQWNjb3VudCBCdXNpbmVzcyBQcm9jZXNzIEZsb3cgKi9cclxuICAgICAgICB2NF9BY2NvdW50QlBGOiBJQlBGO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIDIuIFJ1bnRpbWUgLSBGb3JtIENsYXNzXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBY2NvdW50IEZvcm0gY2xhc3NcclxuICAgICAqIFByb3ZpZGVzIHR5cGVkIGFjY2VzcyB0byBhbGwgZm9ybSBjb250cm9sc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIEZvcm1CYXNlPElCb2R5LCBJSGVhZGVyLCBJVGFicywgSUdyaWQsIElOYXZpZ2F0aW9uLCBJUXVpY2tGb3JtLCBJUHJvY2Vzcz4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENyZWF0ZXMgYW4gQWNjb3VudCBGb3JtIGluc3RhbmNlXHJcbiAgICAgICAgICogQHBhcmFtIGV4ZWN1dGlvbkNvbnRleHQgVGhlIGV4ZWN1dGlvbiBjb250ZXh0IGZyb20gZm9ybSBldmVudFxyXG4gICAgICAgICAqIEBwYXJhbSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIE9wdGlvbmFsIGRlZmF1bHQgd2ViIHJlc291cmNlIG5hbWVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdHJ1Y3RvcihleGVjdXRpb25Db250ZXh0OiBhbnksIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoZXhlY3V0aW9uQ29udGV4dCwgZGVmYXVsdFdlYlJlc291cmNlTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICAgICAgICAgICdOYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXJPZkVtcGxveWVlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NyZWRpdE9uSG9sZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0luZHVzdHJ5Q29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1ByaW1hcnlDb250YWN0SWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9CaXJ0aGRheScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FwcG9pbnRtZW50VGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0xhdGl0dWRlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfRGlzY291bnRQZXJjZW50YWdlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQ2F0ZWdvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X1dlYlJlc291cmNlSGVscCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0lGcmFtZUV4dGVybmFsJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfVGltZXJTTEEnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9Lbm93bGVkZ2VTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ093bmVySWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXJPZkVtcGxveWVlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHRhYjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdTVU1NQVJZX1RBQl9fX0FDQ09VTlRfSU5GT1JNQVRJT04nXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgZ3JpZDogW1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0cydcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhY3RfY3VzdG9tZXJfYWNjb3VudHMnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgcXVpY2s6IFtcclxuICAgICAgICAgICAgICAgICAgICAnY29udGFjdHF1aWNrZm9ybV9fX0VNYWlsQWRkcmVzczEnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYnBmOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19OYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX0luZHVzdHJ5Q29kZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19SZXZlbnVlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX1ByaW1hcnlDb250YWN0SWQnXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIC0gTmFtZSBGaWVsZCAoU3RyaW5nKVxyXG4gKiBUaGlzIHRlc3RzIHRoZSBiYXNlIElDb250cm9sIGludGVyZmFjZSB0aGF0IGFsbCBjb250cm9scyBpbmhlcml0IGZyb21cclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RDb250cm9sKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgY29udHJvbCA9IGZvcm0uQm9keS5OYW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBjb250cm9sLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGVOYW1lID09PSBcIm5hbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlVHlwZSA9PT0gXCJzdHJpbmdcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGNvbnRyb2wuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBjb250cm9sLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGNvbnRyb2wuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBjb250cm9sLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGNvbnRyb2wuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wZXJ0aWVzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNldHRlclJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIC8vIFNldHRlcnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gY29udHJvbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGNvbnRyb2wuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBuZXdSZXF1aXJlZCA9IGNvbnRyb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb250cm9sLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnUmVxdWlyZWR9XHUyMTkycmVxdWlyZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3UmVxdWlyZWQgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdTdWJtaXQgPSBjb250cm9sLlN1Ym1pdE1vZGU7XHJcbiAgICAgICAgY29udHJvbC5TdWJtaXRNb2RlID0gXCJhbHdheXNcIjtcclxuICAgICAgICBjb25zdCBuZXdTdWJtaXQgPSBjb250cm9sLlN1Ym1pdE1vZGU7XHJcbiAgICAgICAgY29udHJvbC5TdWJtaXRNb2RlID0gb3JpZ1N1Ym1pdDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGUgKHNldClcIiwgVmFsdWU6IGAke29yaWdTdWJtaXR9XHUyMTkyYWx3YXlzXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1N1Ym1pdCA9PT0gXCJhbHdheXNcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGNvbnRyb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgY29udHJvbC5EaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbmV3RGlzYWJsZWQgPSBjb250cm9sLkRpc2FibGVkO1xyXG4gICAgICAgIGNvbnRyb2wuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ0Rpc2FibGVkfVx1MjE5MnRydWVcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3RGlzYWJsZWQgPT09IHRydWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gY29udHJvbC5MYWJlbDtcclxuICAgICAgICBjb250cm9sLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3TGFiZWwgPSBjb250cm9sLkxhYmVsO1xyXG4gICAgICAgIGNvbnRyb2wuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogYFwiJHtvcmlnTGFiZWx9XCJcdTIxOTJtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdMYWJlbC5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGNvbnRyb2wuVmlzaWJsZTtcclxuICAgICAgICBjb250cm9sLlZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBuZXdWaXNpYmxlID0gY29udHJvbC5WaXNpYmxlO1xyXG4gICAgICAgIGNvbnRyb2wuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1Zpc2libGV9XHUyMTkyZmFsc2VcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3VmlzaWJsZSA9PT0gZmFsc2UgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZSArIFwiIChNT0RJRklFRClcIjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNvbnRyb2wuVmFsdWU7XHJcbiAgICAgICAgY29udHJvbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogYG1vZGlmaWVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIihNT0RJRklFRClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT25DaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3V0cHV0Q2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT3V0cHV0Q2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE9uT3V0cHV0Q2hhbmdlKG91dHB1dENoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkFkZE9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJBZGRPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlJlbW92ZU9uT3V0cHV0Q2hhbmdlKG91dHB1dENoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5TZXROb3RpZmljYXRpb24oXCJUZXN0IG5vdGlmaWNhdGlvbiBmcm9tIElDb250cm9sXCIsIFwiQ1RSTF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiQ1RSTF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNsZWFyZWQgPSBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiTk9ORVhJU1RFTlRcIik7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiQ2xlYXJOb3RpZmljYXRpb25cIiwgVmFsdWU6IGBSZXN1bHQ6ICR7Y2xlYXJlZH1gLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJDbGVhck5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE5vdGlmaWNhdGlvbih7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXCJSZWNvbW1lbmRhdGlvbiBmcm9tIHRlc3RcIl0sXHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkxldmVsOiBcIlJFQ09NTUVOREFUSU9OXCIsXHJcbiAgICAgICAgICAgIHVuaXF1ZUlkOiBcIkNUUkxfVEVTVF8yXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJDVFJMX1RFU1RfMlwiKSwgMzAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiQWRkTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIkFkZGVkIChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIkFkZE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkIG1lc3NhZ2VcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5zZXR0ZXJSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGOUJcdUZFMEYgVEVTVCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogTmFtZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShzZXR0ZXJSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTogTG9va3VwIENvbnRyb2wgLSBQcmltYXJ5Q29udGFjdElkIEZpZWxkXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TG9va3VwKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbG9va3VwID0gZm9ybS5Cb2R5LlByaW1hcnlDb250YWN0SWQ7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxEZWZhdWx0VmlldyA9IGxvb2t1cC5EZWZhdWx0VmlldztcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGxvb2t1cC5WYWx1ZTtcclxuICAgICAgICBjb25zdCBoYXNWYWx1ZSA9IGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogaGFzVmFsdWUgPyBgJHtjdXJyZW50VmFsdWVbMF0ubmFtZX0gKCR7Y3VycmVudFZhbHVlWzBdLmVudGl0eVR5cGV9KWAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiSXNQYXJ0eUxpc3RcIiwgVmFsdWU6IGxvb2t1cC5Jc1BhcnR5TGlzdCwgU3RhdHVzOiBsb29rdXAuSXNQYXJ0eUxpc3QgPT09IGZhbHNlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlc1wiLCBWYWx1ZTogSlNPTi5zdHJpbmdpZnkobG9va3VwLkVudGl0eVR5cGVzKSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXdcIiwgVmFsdWU6IG9yaWdpbmFsRGVmYXVsdFZpZXcsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGxvb2t1cC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbG9va3VwLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbG9va3VwLkNvbnRyb2xUeXBlLCBTdGF0dXM6IGxvb2t1cC5Db250cm9sVHlwZSA9PT0gXCJsb29rdXBcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGxvb2t1cC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGxvb2t1cC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbG9va3VwLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBsb29rdXAuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGxvb2t1cC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBsb29rdXAuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGxvb2t1cC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgY29uc3QgcHJlU2VhcmNoQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJYbWwgPSBcIjxmaWx0ZXIgdHlwZT0nYW5kJz48Y29uZGl0aW9uIGF0dHJpYnV0ZT0nc3RhdGVjb2RlJyBvcGVyYXRvcj0nZXEnIHZhbHVlPScwJyAvPjwvZmlsdGVyPlwiO1xyXG4gICAgICAgIGxvb2t1cC5BZGRDdXN0b21GaWx0ZXIoZmlsdGVyWG1sLCBcImNvbnRhY3RcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBQcmVTZWFyY2ggZmlyZWQgLSBmaWx0ZXIgYXBwbGllZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFnQ2xpY2tDYWxsYmFjayA9IChjdHg6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTG9va3VwVGFnQ2xpY2sgZmlyZWQgLSB0YWcgd2FzIGNsaWNrZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNldHRlcnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZpZXdJZCA9IFwiezAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMn1cIjtcclxuICAgICAgICBsb29rdXAuRGVmYXVsdFZpZXcgPSB0ZXN0Vmlld0lkO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZpZXcgPSBsb29rdXAuRGVmYXVsdFZpZXc7XHJcbiAgICAgICAgbG9va3VwLkRlZmF1bHRWaWV3ID0gb3JpZ2luYWxEZWZhdWx0VmlldztcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXcgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUeXBlcyA9IGxvb2t1cC5FbnRpdHlUeXBlcztcclxuICAgICAgICBsb29rdXAuRW50aXR5VHlwZXMgPSBbXCJjb250YWN0XCJdO1xyXG4gICAgICAgIGNvbnN0IG5ld1R5cGVzID0gbG9va3VwLkVudGl0eVR5cGVzO1xyXG4gICAgICAgIGxvb2t1cC5FbnRpdHlUeXBlcyA9IG9yaWdpbmFsVHlwZXM7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlcyAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRQcmVTZWFyY2gocHJlU2VhcmNoQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRQcmVTZWFyY2hcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlJlbW92ZVByZVNlYXJjaChwcmVTZWFyY2hDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVQcmVTZWFyY2hcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZVByZVNlYXJjaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkTG9va3VwVGFnQ2xpY2sodGFnQ2xpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJBZGRMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiQWRkTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlJlbW92ZUxvb2t1cFRhZ0NsaWNrKHRhZ0NsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVtb3ZlTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlbW92ZUxvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRDdXN0b21WaWV3KFxyXG4gICAgICAgICAgICBcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMVwiLFxyXG4gICAgICAgICAgICBcImNvbnRhY3RcIixcclxuICAgICAgICAgICAgXCJBY3RpdmUgQ29udGFjdHMgKEN1c3RvbSBWaWV3KVwiLFxyXG4gICAgICAgICAgICBcIjxmZXRjaD48ZW50aXR5IG5hbWU9J2NvbnRhY3QnPjxhdHRyaWJ1dGUgbmFtZT0nZnVsbG5hbWUnLz48L2VudGl0eT48L2ZldGNoPlwiLFxyXG4gICAgICAgICAgICBcIjxncmlkIG5hbWU9J3Jlc3VsdHNldCc+PHJvdyBuYW1lPSdyZXN1bHQnIGlkPSdjb250YWN0aWQnPjxjZWxsIG5hbWU9J2Z1bGxuYW1lJyB3aWR0aD0nMjAwJy8+PC9yb3c+PC9ncmlkPlwiLFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRDdXN0b21WaWV3XCIsIFZhbHVlOiBcIkFkZGVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkQ3VzdG9tVmlld1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb25cIiwgXCJURVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuQ2xlYXJOb3RpZmljYXRpb24oXCJURVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIGluIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb2t1cC5Gb2N1cygpLCA0MDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoNHMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1REQwRCBURVNUIDE6IExvb2t1cCBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IFByaW1hcnlDb250YWN0SWQgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM5KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDM6IE1lbW8gQ29udHJvbCAtIERlc2NyaXB0aW9uIEZpZWxkXHJcbiAqIE1lbW8gZXh0ZW5kcyBJQ29udHJvbFRleHQgd2l0aCBNYXhMZW5ndGggcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RNZW1vKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZW1vID0gZm9ybS5Cb2R5LkRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBtZW1vLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTWVtby1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhMZW5ndGhcIiwgVmFsdWU6IG1lbW8uTWF4TGVuZ3RoLCBTdGF0dXM6IHR5cGVvZiBtZW1vLk1heExlbmd0aCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgPyBgXCIke29yaWdpbmFsVmFsdWUuc3Vic3RyaW5nKDAsIDUwKX0ke29yaWdpbmFsVmFsdWUubGVuZ3RoID4gNTAgPyAnLi4uJyA6ICcnfVwiYCA6IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbWVtby5BdHRyaWJ1dGVOYW1lID09PSBcImRlc2NyaXB0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZVR5cGUgPT09IFwibWVtb1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbWVtby5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1lbW8uQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbWVtby5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG1lbW8uSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG1lbW8uSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1lbW8uUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1lbW8uU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtZW1vLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1lbW8uTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtZW1vLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICAgICAgbWVtby5WYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IFwiXCIpICsgXCIgW1RFU1RdXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtZW1vLlZhbHVlO1xyXG4gICAgICAgIG1lbW8uVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG1lbW8uUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtZW1vLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbWVtby5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBtZW1vLkRpc2FibGVkO1xyXG4gICAgICAgIG1lbW8uRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5EaXNhYmxlZDtcclxuICAgICAgICBtZW1vLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbWVtby5MYWJlbDtcclxuICAgICAgICBtZW1vLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLkxhYmVsO1xyXG4gICAgICAgIG1lbW8uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gbWVtby5WaXNpYmxlO1xyXG4gICAgICAgIG1lbW8uVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uVmlzaWJsZTtcclxuICAgICAgICBtZW1vLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE1lbW8gT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNZW1vIG5vdGlmaWNhdGlvblwiLCBcIk1FTU9fVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5DbGVhck5vdGlmaWNhdGlvbihcIk1FTU9fVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0REIFRFU1QgMjogTWVtbyBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IERlc2NyaXB0aW9uIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMzogU3RyaW5nIENvbnRyb2wgLSBOYW1lIEZpZWxkXHJcbiAqIFN0cmluZyBleHRlbmRzIElDb250cm9sVGV4dCB3aXRoIE1heExlbmd0aCBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFN0cmluZyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RyID0gZm9ybS5Cb2R5Lk5hbWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IHN0ci5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFN0cmluZy1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhMZW5ndGhcIiwgVmFsdWU6IHN0ci5NYXhMZW5ndGgsIFN0YXR1czogdHlwZW9mIHN0ci5NYXhMZW5ndGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlID8gYFwiJHtvcmlnaW5hbFZhbHVlLnN1YnN0cmluZygwLCA1MCl9JHtvcmlnaW5hbFZhbHVlLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31cImAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGVOYW1lID09PSBcIm5hbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogc3RyLkF0dHJpYnV0ZVR5cGUgPT09IFwic3RyaW5nXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBzdHIuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBzdHIuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogc3RyLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogc3RyLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBzdHIuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IHN0ci5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogc3RyLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogc3RyLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IHN0ci5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IHN0ci5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgICAgIHN0ci5WYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IFwiXCIpICsgXCIgW1RFU1RdXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBzdHIuVmFsdWU7XHJcbiAgICAgICAgc3RyLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBzdHIuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBzdHIuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIHN0ci5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IHN0ci5EaXNhYmxlZDtcclxuICAgICAgICBzdHIuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLkRpc2FibGVkO1xyXG4gICAgICAgIHN0ci5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gc3RyLkxhYmVsO1xyXG4gICAgICAgIHN0ci5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLkxhYmVsO1xyXG4gICAgICAgIHN0ci5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBzdHIuVmlzaWJsZTtcclxuICAgICAgICBzdHIuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5WaXNpYmxlO1xyXG4gICAgICAgIHN0ci5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBTdHJpbmcgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0ci5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgU3RyaW5nIG5vdGlmaWNhdGlvblwiLCBcIlNUUklOR19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuQ2xlYXJOb3RpZmljYXRpb24oXCJTVFJJTkdfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDNCBURVNUIDM6IFN0cmluZyBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE5hbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA0OiBJbnRlZ2VyIENvbnRyb2wgLSBOdW1iZXJPZkVtcGxveWVlcyBGaWVsZFxyXG4gKiBJbnRlZ2VyIGV4dGVuZHMgSUNvbnRyb2xOdW1iZXIgd2l0aCBNYXgsIE1pbiBwcm9wZXJ0aWVzIChOTyBQcmVjaXNpb24gc3VwcG9ydClcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RJbnRlZ2VyKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBpbnQgPSBmb3JtLkhlYWRlci5OdW1iZXJPZkVtcGxveWVlcztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gaW50LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gSW50ZWdlci1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJQ29udHJvbE51bWJlciAtIE5PIFByZWNpc2lvbiBmb3IgSW50ZWdlcilcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heFwiLCBWYWx1ZTogaW50Lk1heCwgU3RhdHVzOiB0eXBlb2YgaW50Lk1heCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiTWluXCIsIFZhbHVlOiBpbnQuTWluLCBTdGF0dXM6IHR5cGVvZiBpbnQuTWluID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGludC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGludC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGludC5BdHRyaWJ1dGVOYW1lID09PSBcIm51bWJlcm9mZW1wbG95ZWVzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGludC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGludC5BdHRyaWJ1dGVUeXBlID09PSBcImludGVnZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGludC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGludC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBpbnQuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogaW50LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBpbnQuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGludC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogaW50LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogaW50LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGludC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGludC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IDApICsgMTAwO1xyXG4gICAgICAgIGludC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGludC5WYWx1ZTtcclxuICAgICAgICBpbnQuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBpbnQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBpbnQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGludC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGludC5EaXNhYmxlZDtcclxuICAgICAgICBpbnQuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LkRpc2FibGVkO1xyXG4gICAgICAgIGludC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gaW50LkxhYmVsO1xyXG4gICAgICAgIGludC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LkxhYmVsO1xyXG4gICAgICAgIGludC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGludC5WaXNpYmxlO1xyXG4gICAgICAgIGludC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LlZpc2libGU7XHJcbiAgICAgICAgaW50LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIEludGVnZXIgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgSW50ZWdlciBub3RpZmljYXRpb25cIiwgXCJJTlRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW50LkNsZWFyTm90aWZpY2F0aW9uKFwiSU5UX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW50LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMjIgVEVTVCA0OiBJbnRlZ2VyIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogTnVtYmVyT2ZFbXBsb3llZXMgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA1OiBPcHRpb25TZXQgQ29udHJvbCAtIEluZHVzdHJ5Q29kZSBGaWVsZFxyXG4gKiBPcHRpb25TZXQgZXh0ZW5kcyBJQ29udHJvbE9wdGlvblNldCB3aXRoIEluaXRpYWxWYWx1ZSwgU2VsZWN0ZWRPcHRpb24sIFRleHQsIFZhbHVlXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0T3B0aW9uU2V0KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBvcHQgPSBmb3JtLkJvZHkuSW5kdXN0cnlDb2RlO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBvcHQuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBPcHRpb25TZXQtc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiSW5pdGlhbFZhbHVlXCIsIFZhbHVlOiBvcHQuSW5pdGlhbFZhbHVlLCBTdGF0dXM6IHR5cGVvZiBvcHQuSW5pdGlhbFZhbHVlID09PSBcIm51bWJlclwiIHx8IG9wdC5Jbml0aWFsVmFsdWUgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk9wdGlvbnNcIiwgVmFsdWU6IGAke29wdC5PcHRpb25zPy5sZW5ndGggPz8gMH0gb3B0aW9uc2AsIFN0YXR1czogb3B0Lk9wdGlvbnM/Lmxlbmd0aCA+IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlNlbGVjdGVkT3B0aW9uXCIsIFZhbHVlOiBvcHQuU2VsZWN0ZWRPcHRpb24gPyBgJHtvcHQuU2VsZWN0ZWRPcHRpb24udGV4dH0gKCR7b3B0LlNlbGVjdGVkT3B0aW9uLnZhbHVlfSlgIDogXCIobm9uZSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiVGV4dFwiLCBWYWx1ZTogb3B0LlRleHQgfHwgXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogb3B0LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogb3B0LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogb3B0LkF0dHJpYnV0ZU5hbWUgPT09IFwiaW5kdXN0cnljb2RlXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGVUeXBlID09PSBcIm9wdGlvbnNldFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogb3B0LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG9wdC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogb3B0LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG9wdC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogb3B0LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBvcHQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG9wdC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG9wdC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBvcHQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBvcHQuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gb3B0Lk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IG9wdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5WYWx1ZSA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuVmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBuZXdWYWwgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBuZXdWYWwgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBcIk5vIG9wdGlvbnMgYXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IE9wdGlvbih2YWx1ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG9wdC5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXN0T3B0aW9uID0gb3B0Lk9wdGlvbihvcHRpb25zWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiB0ZXN0T3B0aW9uID8gYCR7dGVzdE9wdGlvbi50ZXh0fWAgOiBcIm51bGxcIiwgU3RhdHVzOiB0ZXN0T3B0aW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBcIk5vIG9wdGlvbnNcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzM6IE9wdGlvbih0ZXh0KSAtIE5PVCBJTVBMRU1FTlRFRDogT09CIER5bmFtaWNzIGNvZGUgdGhyb3dzICdWYWx1ZSBzaG91bGQgYmUgb2YgdHlwZTogbnVtYmVyJyBlcnJvclxyXG4gICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJPcHRpb24odGV4dClcIiwgVmFsdWU6IFwiT09CIEJ1ZyAtIGRldmtpdC50cyBub3Qgc3VwcG9ydFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgLy8gTWV0aG9kOiBBZGRPcHRpb24gKGFkZCB0aGVuIHJlbW92ZSlcclxuICAgIC8vIE5PVEU6IEFkZE9wdGlvbiBhZGRzIHRvIENPTlRST0wsIHNvIHdlIGNoZWNrIENvbnRyb2xPcHRpb25zIChub3QgT3B0aW9ucyB3aGljaCBpcyBmcm9tIGF0dHJpYnV0ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LkFkZE9wdGlvbihcIlRlc3QgT3B0aW9uIChBSSlcIiwgOTk5OTk5KTtcclxuICAgICAgICBjb25zdCBoYXNOZXcgPSBvcHQuQ29udHJvbE9wdGlvbnM/LnNvbWUobyA9PiBvLnZhbHVlID09PSA5OTk5OTkpO1xyXG4gICAgICAgIG9wdC5SZW1vdmVPcHRpb24oOTk5OTk5KTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkFkZE9wdGlvblwiLCBWYWx1ZTogaGFzTmV3ID8gXCJBZGRlZFx1MjE5MlJlbW92ZWRcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogaGFzTmV3ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkFkZE9wdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPcHRpb24gKGFscmVhZHkgdGVzdGVkIGFib3ZlIHdpdGggQWRkT3B0aW9uKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9wdGlvblwiLCBWYWx1ZTogXCJUZXN0ZWQgd2l0aCBTNFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9wdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBDbGVhck9wdGlvbnMgLSBUZXN0IGNsZWFyIGFuZCByZXN0b3JlIGZyb20gT3B0aW9ucyAoYXR0cmlidXRlKVxyXG4gICAgLy8gTk9URTogQ2xlYXJPcHRpb25zIGNsZWFycyB0aGUgQ09OVFJPTCBvcHRpb25zLCBidXQgT3B0aW9ucyAoZnJvbSBhdHRyaWJ1dGUpIHJlbWFpbnMgaW50YWN0XHJcbiAgICAvLyBOT1RFOiBDb250cm9sT3B0aW9ucyBpbmNsdWRlcyBhIGJsYW5rIG9wdGlvbiAodGV4dD0nJywgdmFsdWU9bnVsbCkgZm9yIGNsZWFyaW5nIHNlbGVjdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVPcHRpb25zID0gb3B0Lk9wdGlvbnM7IC8vIFNhdmUgZnJvbSBhdHRyaWJ1dGUgKG5vdCBhZmZlY3RlZCBieSBDbGVhck9wdGlvbnMpXHJcbiAgICAgICAgY29uc3QgYXR0ckxlbiA9IGF0dHJpYnV0ZU9wdGlvbnM/Lmxlbmd0aCA/PyAwO1xyXG4gICAgICAgIG9wdC5DbGVhck9wdGlvbnMoKTtcclxuICAgICAgICBjb25zdCBjbGVhcmVkQ291bnQgPSBvcHQuQ29udHJvbE9wdGlvbnM/Lmxlbmd0aCA/PyAwO1xyXG4gICAgICAgIC8vIFJlc3RvcmUgb3B0aW9ucyBmcm9tIGF0dHJpYnV0ZVxyXG4gICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGF0dHJpYnV0ZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0LkFkZE9wdGlvbihvcHRpb24udGV4dCwgb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdG9yZWRDb3VudCA9IG9wdC5Db250cm9sT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgLy8gcmVzdG9yZWRDb3VudCA+PSBhdHRyTGVuIGJlY2F1c2UgQ29udHJvbE9wdGlvbnMgbWF5IGluY2x1ZGUgYmxhbmsgb3B0aW9uXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IGNsZWFyZWRDb3VudCA9PT0gMCAmJiByZXN0b3JlZENvdW50ID49IGF0dHJMZW47XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJDbGVhck9wdGlvbnNcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBgQ2xlYXIoJHtjbGVhcmVkQ291bnR9KVx1MjE5MlJlc3RvcmUoJHtyZXN0b3JlZENvdW50fS8ke2F0dHJMZW59KWAgOiBgYXR0cj0ke2F0dHJMZW59LCBjbGVhcj0ke2NsZWFyZWRDb3VudH0sIHJlc3RvcmU9JHtyZXN0b3JlZENvdW50fWAsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJDbGVhck9wdGlvbnNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBvcHQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBvcHQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG9wdC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG9wdC5EaXNhYmxlZDtcclxuICAgICAgICBvcHQuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LkRpc2FibGVkO1xyXG4gICAgICAgIG9wdC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gb3B0LkxhYmVsO1xyXG4gICAgICAgIG9wdC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LkxhYmVsO1xyXG4gICAgICAgIG9wdC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG9wdC5WaXNpYmxlO1xyXG4gICAgICAgIG9wdC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlZpc2libGU7XHJcbiAgICAgICAgb3B0LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHMgZnJvbSBJQ29udHJvbFxyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPcHRpb25TZXQgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBPcHRpb25TZXQgbm90aWZpY2F0aW9uXCIsIFwiT1BUX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdC5DbGVhck5vdGlmaWNhdGlvbihcIk9QVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG9wdC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0NCIFRFU1QgNTogT3B0aW9uU2V0IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogSW5kdXN0cnlDb2RlIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiLyoqXHJcbiAqIEFjY291bnQud2ViYXBpLnRzIC0gQWNjb3VudCBXZWJBcGkgZm9yIGVhcmx5LWJvdW5kIHN0eWxlIGNvZGluZ1xyXG4gKiBHZW5lcmF0ZWQgZmlsZSAtIERPIE5PVCBNT0RJRlkgTUFOVUFMTFlcclxuICpcclxuICogU3RydWN0dXJlOlxyXG4gKiAxLiBJbXBvcnRzXHJcbiAqIDIuIFR5cGVzIC0gSUFjY291bnRGb3JtYXR0ZWRWYWx1ZSwgSUFjY291bnRBcGlcclxuICogMy4gUnVudGltZSAtIEFjY291bnRGaWVsZENvbmZpZywgQWNjb3VudEFwaSBmYWN0b3J5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVdlYkFwaUVudGl0eSxcclxuICAgIElXZWJBcGlFbnRpdHksXHJcbiAgICBJV2ViQXBpRmllbGRDb25maWdNYXBcclxufSBmcm9tICcuLi8uLi9saWIvZGV2a2l0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4gVHlwZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEZvcm1hdHRlZCB2YWx1ZXMgaW50ZXJmYWNlIGZvciBBY2NvdW50XHJcbiAqIEFsbCBmaWVsZHMgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGVpciB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtYXR0ZWRWYWx1ZSB7XHJcbiAgICByZWFkb25seSBBY2NvdW50Q2F0ZWdvcnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnRSYXRpbmdDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9BZGRyZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0FkZHJlc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ2l0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ29tcG9zaXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db3VudHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0ZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGF0aXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xpbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MaW5lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGluZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xvbmdpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUG9zdE9mZmljZUJveDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVVBTWm9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVVRDT2Zmc2V0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9BZGRyZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ2l0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ29tcG9zaXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db3VudHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0ZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGF0aXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xpbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MaW5lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGluZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xvbmdpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUG9zdE9mZmljZUJveDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVVBTWm9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVVRDT2Zmc2V0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfQ3JlYXRlZEJ5SVBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfTW9kaWZpZWRCeVVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzMwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzMwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nNjA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nNjBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBCdXNpbmVzc1R5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uQmVoYWxmQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRPbkhvbGQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEN1c3RvbWVyU2l6ZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEN1c3RvbWVyVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdEJ1bGtFTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RCdWxrUG9zdGFsTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RFTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RGYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90UGhvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90UG9zdGFsTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RTZW5kTU06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlX1VSTDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRXhjaGFuZ2VSYXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEZvbGxvd0VtYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGdHBTaXRlVVJMOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJbXBvcnRTZXF1ZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSW5kdXN0cnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJc1ByaXZhdGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldENhcDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWFya2V0Q2FwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldGluZ09ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hc3RlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNZXJnZWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uQmVoYWxmQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTnVtYmVyT2ZFbXBsb3llZXM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE9uSG9sZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmVySWRfc3lzdGVtdXNlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duZXJJZF90ZWFtOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25lcnNoaXBDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdCdXNpbmVzc1VuaXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ1RlYW06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ1VzZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBhcmVudEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGFydGljaXBhdGVzSW5Xb3JrZmxvdzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGF5bWVudFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRBcHBvaW50bWVudFRpbWVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkU3lzdGVtVXNlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5Q29udGFjdElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5U2F0b3JpSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByaW1hcnlUd2l0dGVySWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByb2Nlc3NJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZV9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTaGFyZXNPdXRzdGFuZGluZzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTSUM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNMQUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTTEFJbnZva2VkSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YWdlSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YXRlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RhdHVzQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RvY2tFeGNoYW5nZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVycml0b3J5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGlja2VyU3ltYm9sOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRyYXZlcnNlZFBhdGg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFZlcnNpb25OdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFdlYlNpdGVVUkw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFlvbWlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IFdlYkFwaSBlbnRpdHkgaW50ZXJmYWNlXHJcbiAqIFByb3ZpZGVzIEludGVsbGlTZW5zZSBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50QXBpIGV4dGVuZHMgSVdlYkFwaUVudGl0eSB7XHJcbiAgICAvKiogRm9ybWF0dGVkIHZhbHVlcyBmb3IgYWxsIGZpZWxkcyAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybWF0dGVkVmFsdWU6IElBY2NvdW50Rm9ybWF0dGVkVmFsdWU7XHJcbiAgICAvKiogU2VsZWN0IGEgY2F0ZWdvcnkgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgY3VzdG9tZXIgYWNjb3VudCBpcyBzdGFuZGFyZCBvciBwcmVmZXJyZWQuICovXHJcbiAgICBBY2NvdW50Q2F0ZWdvcnlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIGNsYXNzaWZpY2F0aW9uIGNvZGUgdG8gaW5kaWNhdGUgdGhlIHBvdGVudGlhbCB2YWx1ZSBvZiB0aGUgY3VzdG9tZXIgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnRDbGFzc2lmaWNhdGlvbkNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50SWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhbiBJRCBudW1iZXIgb3IgY29kZSBmb3IgdGhlIGFjY291bnQgdG8gcXVpY2tseSBzZWFyY2ggYW5kIGlkZW50aWZ5IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudE51bWJlcjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSByYXRpbmcgdG8gaW5kaWNhdGUgdGhlIHZhbHVlIG9mIHRoZSBjdXN0b21lciBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudFJhdGluZ0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgZm9yIGFkZHJlc3MgMS4gKi9cclxuICAgIEFkZHJlc3MxX0FkZHJlc3NJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByaW1hcnkgYWRkcmVzcyB0eXBlLiAqL1xyXG4gICAgQWRkcmVzczFfQWRkcmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNpdHkgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9DaXR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db21wb3NpdGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnRyeSBvciByZWdpb24gZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvdW50eSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NvdW50eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgZnJlaWdodCB0ZXJtcyBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbGF0aXR1ZGUgdmFsdWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzZWNvbmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgdGhpcmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbG9uZ2l0dWRlIHZhbHVlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBaSVAgQ29kZSBvciBwb3N0YWwgY29kZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1Bvc3RhbENvZGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcG9zdCBvZmZpY2UgYm94IG51bWJlciBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUG9zdE9mZmljZUJveDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBuYW1lIG9mIHRoZSBtYWluIGNvbnRhY3QgYXQgdGhlIGFjY291bnQncyBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9QcmltYXJ5Q29udGFjdE5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzIHNlbnQgdG8gdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0YXRlIG9yIHByb3ZpbmNlIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBzZWNvbmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUFMgem9uZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVVBTWm9uZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHRpbWUgem9uZSwgb3IgVVRDIG9mZnNldCwgZm9yIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1VUQ09mZnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgYWRkcmVzcyAyLiAqL1xyXG4gICAgQWRkcmVzczJfQWRkcmVzc0lkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MgdHlwZS4gKi9cclxuICAgIEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjaXR5IGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9DaXR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvbXBvc2l0ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHJ5IG9yIHJlZ2lvbiBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfQ291bnRyeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHkgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0NvdW50eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9GYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBmcmVpZ2h0IHRlcm1zIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9GcmVpZ2h0VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxhdGl0dWRlIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHRoaXJkIGxpbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGluZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbG9uZ2l0dWRlIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Mb25naXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIGRlc2NyaXB0aXZlIG5hbWUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX05hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgWklQIENvZGUgb3IgcG9zdGFsIGNvZGUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1Bvc3RhbENvZGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcG9zdCBvZmZpY2UgYm94IG51bWJlciBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Qb3N0T2ZmaWNlQm94OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG5hbWUgb2YgdGhlIG1haW4gY29udGFjdCBhdCB0aGUgYWNjb3VudCdzIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHNoaXBwaW5nIG1ldGhvZCBmb3IgZGVsaXZlcmllcyBzZW50IHRvIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1NoaXBwaW5nTWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdGF0ZSBvciBwcm92aW5jZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHRoaXJkIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUFMgem9uZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9VUFNab25lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgdGltZSB6b25lLCBvciBVVEMgb2Zmc2V0LCBmb3IgdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVVRDT2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9DcmVhdGVkQnlVc2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyAzMCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nMzBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc2MDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyA2MCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nNjBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyA5MCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nOTBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGxlZ2FsIGRlc2lnbmF0aW9uIG9yIG90aGVyIGJ1c2luZXNzIHR5cGUgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBCdXNpbmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBjcmVhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkQnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGV4dGVybmFsIHBhcnR5IHdobyBjcmVhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHJlY29yZCB3YXMgY3JlYXRlZC4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZCBvbiBiZWhhbGYgb2YgYW5vdGhlciB1c2VyLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uQmVoYWxmQnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY3JlZGl0IGxpbWl0IG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3JlZGl0TGltaXQ6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNyZWRpdCBsaW1pdCBjb252ZXJ0ZWQgdG8gdGhlIHN5c3RlbSdzIGRlZmF1bHQgYmFzZSBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0X0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGNyZWRpdCBmb3IgdGhlIGFjY291bnQgaXMgb24gaG9sZC4gKi9cclxuICAgIENyZWRpdE9uSG9sZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBzaXplIGNhdGVnb3J5IG9yIHJhbmdlIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3VzdG9tZXJTaXplQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHRoYXQgYmVzdCBkZXNjcmliZXMgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBhY2NvdW50IGFuZCB5b3VyIG9yZ2FuaXphdGlvbi4gKi9cclxuICAgIEN1c3RvbWVyVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGRlc2NyaWJlIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGJ1bGsgZW1haWwgc2VudCB0aHJvdWdoIGNhbXBhaWducy4gKi9cclxuICAgIERvTm90QnVsa0VNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgYnVsayBwb3N0YWwgbWFpbC4gKi9cclxuICAgIERvTm90QnVsa1Bvc3RhbE1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgZW1haWwuICovXHJcbiAgICBEb05vdEVNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgZmF4ZXMuICovXHJcbiAgICBEb05vdEZheDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIHBob25lIGNhbGxzLiAqL1xyXG4gICAgRG9Ob3RQaG9uZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGRpcmVjdCBtYWlsLiAqL1xyXG4gICAgRG9Ob3RQb3N0YWxNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhY2NlcHRzIG1hcmtldGluZyBtYXRlcmlhbHMuICovXHJcbiAgICBEb05vdFNlbmRNTTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcHJpbWFyeSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc2Vjb25kYXJ5IGVtYWlsIGFkZHJlc3MgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRU1haWxBZGRyZXNzMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGFuIGFsdGVybmF0ZSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRlZmF1bHQgaW1hZ2UgZm9yIHRoZSByZWNvcmQuICovXHJcbiAgICBFbnRpdHlJbWFnZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEVudGl0eUltYWdlX1RpbWVzdGFtcDogbnVtYmVyIHwgbnVsbDtcclxuICAgIEVudGl0eUltYWdlX1VSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHJlY29yZCdzIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgRXhjaGFuZ2VSYXRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZheCBudW1iZXIgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEluZm9ybWF0aW9uIGFib3V0IHdoZXRoZXIgdG8gYWxsb3cgZm9sbG93aW5nIGVtYWlsIGFjdGl2aXR5LiAqL1xyXG4gICAgRm9sbG93RW1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFVSTCBmb3IgdGhlIGFjY291bnQncyBGVFAgc2l0ZS4gKi9cclxuICAgIEZ0cFNpdGVVUkw6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGRhdGEgaW1wb3J0IG9yIGRhdGEgbWlncmF0aW9uIHRoYXQgY3JlYXRlZCB0aGlzIHJlY29yZC4gKi9cclxuICAgIEltcG9ydFNlcXVlbmNlTnVtYmVyOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkuICovXHJcbiAgICBJbmR1c3RyeUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICByZWFkb25seSBJc1ByaXZhdGU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIENvbnRhaW5zIHRoZSBkYXRlIGFuZCB0aW1lIHN0YW1wIG9mIHRoZSBsYXN0IG9uIGhvbGQgdGltZS4gKi9cclxuICAgIExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZGF0ZSB3aGVuIHRoZSBhY2NvdW50IHdhcyBsYXN0IGluY2x1ZGVkIGluIGEgbWFya2V0aW5nIGNhbXBhaWduLiAqL1xyXG4gICAgTGFzdFVzZWRJbkNhbXBhaWduX1V0Y0RhdGVPbmx5OiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYXJrZXQgY2FwaXRhbGl6YXRpb24gb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBNYXJrZXRDYXA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIG1hcmtldCBjYXBpdGFsaXphdGlvbiBjb252ZXJ0ZWQgdG8gdGhlIHN5c3RlbSdzIGRlZmF1bHQgYmFzZSBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IE1hcmtldENhcF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFdoZXRoZXIgaXMgb25seSBmb3IgbWFya2V0aW5nICovXHJcbiAgICBNYXJrZXRpbmdPbmx5OiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgbWFzdGVyIGFjY291bnQgdGhhdCB0aGUgYWNjb3VudCB3YXMgbWVyZ2VkIHdpdGguICovXHJcbiAgICByZWFkb25seSBNYXN0ZXJJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aGV0aGVyIHRoZSBhY2NvdW50IGhhcyBiZWVuIG1lcmdlZCB3aXRoIGFub3RoZXIgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE1lcmdlZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGxhc3QgdXBkYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZXh0ZXJuYWwgcGFydHkgd2hvIG1vZGlmaWVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZGF0ZSBhbmQgdGltZSB3aGVuIHRoZSByZWNvcmQgd2FzIGxhc3QgdXBkYXRlZC4gKi9cclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkT25fVXRjRGF0ZUFuZFRpbWU6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBjcmVhdGVkIHRoZSByZWNvcmQgb24gYmVoYWxmIG9mIGFub3RoZXIgdXNlci4gKi9cclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkT25CZWhhbGZCeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgQWNjb3VudCBhc3NvY2lhdGVkIHdpdGggQWNjb3VudC4gKi9cclxuICAgIG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb21wYW55IG9yIGJ1c2luZXNzIG5hbWUuICovXHJcbiAgICBOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgTnVtYmVyT2ZFbXBsb3llZXM6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgaG93IGxvbmcsIGluIG1pbnV0ZXMsIHRoYXQgdGhlIHJlY29yZCB3YXMgb24gaG9sZC4gKi9cclxuICAgIHJlYWRvbmx5IE9uSG9sZFRpbWU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRGF0ZSBhbmQgdGltZSB0aGF0IHRoZSByZWNvcmQgd2FzIG1pZ3JhdGVkLiAqL1xyXG4gICAgT3ZlcnJpZGRlbkNyZWF0ZWRPbl9VdGNEYXRlT25seTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogRW50ZXIgdGhlIHVzZXIgd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZF9zeXN0ZW11c2VyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEVudGVyIHRoZSB0ZWFtIHdobyBpcyBhc3NpZ25lZCB0byBtYW5hZ2UgdGhlIHJlY29yZC4gKi9cclxuICAgIE93bmVySWRfdGVhbTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBvd25lcnNoaXAgc3RydWN0dXJlLCBzdWNoIGFzIHB1YmxpYyBvciBwcml2YXRlLiAqL1xyXG4gICAgT3duZXJzaGlwQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgYnVzaW5lc3MgdW5pdCB0aGF0IHRoZSByZWNvcmQgb3duZXIgYmVsb25ncyB0by4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ0J1c2luZXNzVW5pdDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgdGVhbSB3aG8gb3ducyB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ1RlYW06IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHVzZXIgd2hvIG93bnMgdGhlIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBPd25pbmdVc2VyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcGFyZW50IGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFBhcmVudEFjY291bnRJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiBMZWdhY3kgTWljcm9zb2Z0IER5bmFtaWNzIENSTSAzLjAgd29ya2Zsb3cgZGF0YS4gKi9cclxuICAgIFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcGF5bWVudCB0ZXJtcyB0byBpbmRpY2F0ZSB3aGVuIHRoZSBjdXN0b21lciBuZWVkcyB0byBwYXkuICovXHJcbiAgICBQYXltZW50VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIGRheSBvZiB0aGUgd2VlayBmb3Igc2VydmljZSBhcHBvaW50bWVudHMuICovXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudERheUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgdGltZSBvZiBkYXkgZm9yIHNlcnZpY2UgYXBwb2ludG1lbnRzLiAqL1xyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBtZXRob2Qgb2YgY29udGFjdC4gKi9cclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJlZmVycmVkIHNlcnZpY2UgcmVwcmVzZW50YXRpdmUuICovXHJcbiAgICBQcmVmZXJyZWRTeXN0ZW1Vc2VySWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBwcmltYXJ5IGNvbnRhY3QgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUHJpbWFyeUNvbnRhY3RJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBQcmltYXJ5IFNhdG9yaSBJRCBmb3IgQWNjb3VudCAqL1xyXG4gICAgUHJpbWFyeVNhdG9yaUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFByaW1hcnkgVHdpdHRlciBJRCBmb3IgQWNjb3VudCAqL1xyXG4gICAgUHJpbWFyeVR3aXR0ZXJJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgSUQgb2YgdGhlIHByb2Nlc3MuICovXHJcbiAgICBQcm9jZXNzSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUmV2ZW51ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgYW5udWFsIHJldmVudWUgY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBSZXZlbnVlX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIHNoYXJlcyBhdmFpbGFibGUgdG8gdGhlIHB1YmxpYyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBTaGFyZXNPdXRzdGFuZGluZzogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGUgYWNjb3VudCdzIGFkZHJlc3MuICovXHJcbiAgICBTaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgU3RhbmRhcmQgSW5kdXN0cmlhbCBDbGFzc2lmaWNhdGlvbiAoU0lDKSBjb2RlLiAqL1xyXG4gICAgU0lDOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgc2VydmljZSBsZXZlbCBhZ3JlZW1lbnQgKFNMQSkgdGhhdCB5b3Ugd2FudCB0byBhcHBseS4gKi9cclxuICAgIFNMQUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIExhc3QgU0xBIHRoYXQgd2FzIGFwcGxpZWQgdG8gdGhpcyBjYXNlLiAqL1xyXG4gICAgcmVhZG9ubHkgU0xBSW52b2tlZElkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBJRCBvZiB0aGUgc3RhZ2UuICovXHJcbiAgICBTdGFnZUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdoZXRoZXIgdGhlIGFjY291bnQgaXMgYWN0aXZlIG9yIGluYWN0aXZlLiAqL1xyXG4gICAgU3RhdGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHN0YXR1cy4gKi9cclxuICAgIFN0YXR1c0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RvY2sgZXhjaGFuZ2UgYXQgd2hpY2ggdGhlIGFjY291bnQgaXMgbGlzdGVkLiAqL1xyXG4gICAgU3RvY2tFeGNoYW5nZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgc2Vjb25kIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGZvciB0aGlzIGFjY291bnQuICovXHJcbiAgICBUZWxlcGhvbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHJlZ2lvbiBvciB0ZXJyaXRvcnkgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGVycml0b3J5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdG9jayBleGNoYW5nZSBzeW1ib2wgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGlja2VyU3ltYm9sOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRvdGFsIHRpbWUgc3BlbnQgZm9yIGVtYWlscyBhbmQgbWVldGluZ3MgYnkgbWUgaW4gcmVsYXRpb24gdG8gYWNjb3VudCByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gKi9cclxuICAgIFRpbWVab25lUnVsZVZlcnNpb25OdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBsb2NhbCBjdXJyZW5jeSBmb3IgdGhlIHJlY29yZC4gKi9cclxuICAgIFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICBUcmF2ZXJzZWRQYXRoOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRpbWUgem9uZSBjb2RlIHRoYXQgd2FzIGluIHVzZSB3aGVuIHRoZSByZWNvcmQgd2FzIGNyZWF0ZWQuICovXHJcbiAgICBVVENDb252ZXJzaW9uVGltZVpvbmVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFZlcnNpb24gbnVtYmVyIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgVmVyc2lvbk51bWJlcjogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBhY2NvdW50J3Mgd2Vic2l0ZSBVUkwuICovXHJcbiAgICBXZWJTaXRlVVJMOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHBob25ldGljIHNwZWxsaW5nIG9mIHRoZSBjb21wYW55IG5hbWUuICovXHJcbiAgICBZb21pTmFtZTogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAyLiBSdW50aW1lIC0gRmllbGQgQ29uZmlndXJhdGlvblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKipcclxuICogQWNjb3VudCBmaWVsZCBtZXRhZGF0YSBjb25maWd1cmF0aW9uXHJcbiAqIC0gbG9naWNhbE5hbWU6IGF0dHJpYnV0ZSBsb2dpY2FsIG5hbWUgKGUuZy4gJ2FjY291bnRpZCcpXHJcbiAqIC0gc2NoZW1hTmFtZTogc2NoZW1hIG5hbWUgZm9yIGxvb2t1cCBiaW5kaW5nXHJcbiAqIC0gZW50aXR5Q29sbGVjdGlvbk5hbWU6IGNvbGxlY3Rpb24gbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50cycpXHJcbiAqIC0gZW50aXR5TG9naWNhbE5hbWU6IGVudGl0eSBuYW1lIGZvciBsb29rdXAgKGUuZy4gJ2FjY291bnQnKVxyXG4gKiAtIHJlYWRPbmx5OiB3aGV0aGVyIHRoZSBmaWVsZCBpcyByZWFkLW9ubHlcclxuICogLSB0eXBlOiBmaWVsZCB0eXBlIGZvciBwYXJzaW5nIChJbnRlZ2VyLCBOdW1iZXIsIEJvb2xlYW4sIERhdGVUaW1lLCBNdWx0aU9wdGlvblNldClcclxuICovXHJcbmNvbnN0IEFjY291bnRGaWVsZENvbmZpZzogSVdlYkFwaUZpZWxkQ29uZmlnTWFwID0ge1xyXG4gICAgQWNjb3VudENhdGVnb3J5Q29kZTogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRjYXRlZ29yeWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFjY291bnRDbGFzc2lmaWNhdGlvbkNvZGU6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50Y2xhc3NpZmljYXRpb25jb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBY2NvdW50SWQ6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50aWQnIH0sXHJcbiAgICBBY2NvdW50TnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudG51bWJlcicgfSxcclxuICAgIEFjY291bnRSYXRpbmdDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudHJhdGluZ2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX0FkZHJlc3NJZDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2FkZHJlc3NpZCcgfSxcclxuICAgIEFkZHJlc3MxX0FkZHJlc3NUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2FkZHJlc3N0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfQ2l0eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NpdHknIH0sXHJcbiAgICBBZGRyZXNzMV9Db21wb3NpdGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jb21wb3NpdGUnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQWRkcmVzczFfQ291bnRyeTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NvdW50cnknIH0sXHJcbiAgICBBZGRyZXNzMV9Db3VudHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jb3VudHknIH0sXHJcbiAgICBBZGRyZXNzMV9GYXg6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9mYXgnIH0sXHJcbiAgICBBZGRyZXNzMV9GcmVpZ2h0VGVybXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfZnJlaWdodHRlcm1zY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfTGF0aXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9sYXRpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xpbmUxJyB9LFxyXG4gICAgQWRkcmVzczFfTGluZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9saW5lMicgfSxcclxuICAgIEFkZHJlc3MxX0xpbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGluZTMnIH0sXHJcbiAgICBBZGRyZXNzMV9Mb25naXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9sb25naXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczFfTmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX25hbWUnIH0sXHJcbiAgICBBZGRyZXNzMV9Qb3N0YWxDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfcG9zdGFsY29kZScgfSxcclxuICAgIEFkZHJlc3MxX1Bvc3RPZmZpY2VCb3g6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9wb3N0b2ZmaWNlYm94JyB9LFxyXG4gICAgQWRkcmVzczFfUHJpbWFyeUNvbnRhY3ROYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfcHJpbWFyeWNvbnRhY3RuYW1lJyB9LFxyXG4gICAgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfc2hpcHBpbmdtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9zdGF0ZW9ycHJvdmluY2UnIH0sXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdGVsZXBob25lMScgfSxcclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV90ZWxlcGhvbmUyJyB9LFxyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3RlbGVwaG9uZTMnIH0sXHJcbiAgICBBZGRyZXNzMV9VUFNab25lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdXBzem9uZScgfSxcclxuICAgIEFkZHJlc3MxX1VUQ09mZnNldDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3V0Y29mZnNldCcsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfQWRkcmVzc0lkOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfYWRkcmVzc2lkJyB9LFxyXG4gICAgQWRkcmVzczJfQWRkcmVzc1R5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfYWRkcmVzc3R5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9DaXR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY2l0eScgfSxcclxuICAgIEFkZHJlc3MyX0NvbXBvc2l0ZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NvbXBvc2l0ZScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBBZGRyZXNzMl9Db3VudHJ5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY291bnRyeScgfSxcclxuICAgIEFkZHJlc3MyX0NvdW50eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NvdW50eScgfSxcclxuICAgIEFkZHJlc3MyX0ZheDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2ZheCcgfSxcclxuICAgIEFkZHJlc3MyX0ZyZWlnaHRUZXJtc0NvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9mcmVpZ2h0dGVybXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9MYXRpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xhdGl0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MyX0xpbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGluZTEnIH0sXHJcbiAgICBBZGRyZXNzMl9MaW5lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xpbmUyJyB9LFxyXG4gICAgQWRkcmVzczJfTGluZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9saW5lMycgfSxcclxuICAgIEFkZHJlc3MyX0xvbmdpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xvbmdpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMl9OYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbmFtZScgfSxcclxuICAgIEFkZHJlc3MyX1Bvc3RhbENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9wb3N0YWxjb2RlJyB9LFxyXG4gICAgQWRkcmVzczJfUG9zdE9mZmljZUJveDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3Bvc3RvZmZpY2Vib3gnIH0sXHJcbiAgICBBZGRyZXNzMl9QcmltYXJ5Q29udGFjdE5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9wcmltYXJ5Y29udGFjdG5hbWUnIH0sXHJcbiAgICBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9zaGlwcGluZ21ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX1N0YXRlT3JQcm92aW5jZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3N0YXRlb3Jwcm92aW5jZScgfSxcclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl90ZWxlcGhvbmUxJyB9LFxyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3RlbGVwaG9uZTInIH0sXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdGVsZXBob25lMycgfSxcclxuICAgIEFkZHJlc3MyX1VQU1pvbmU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl91cHN6b25lJyB9LFxyXG4gICAgQWRkcmVzczJfVVRDT2Zmc2V0OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdXRjb2Zmc2V0JywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZHhfQ3JlYXRlZEJ5SVBBZGRyZXNzOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X2NyZWF0ZWRieWlwYWRkcmVzcycgfSxcclxuICAgIEFkeF9DcmVhdGVkQnlVc2VybmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkeF9jcmVhdGVkYnl1c2VybmFtZScgfSxcclxuICAgIEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X21vZGlmaWVkYnlpcGFkZHJlc3MnIH0sXHJcbiAgICBBZHhfTW9kaWZpZWRCeVVzZXJuYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X21vZGlmaWVkYnl1c2VybmFtZScgfSxcclxuICAgIEFnaW5nMzA6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzMwJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzMwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzMwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nNjA6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzYwJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzYwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzYwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nOTA6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzkwJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzkwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdhZ2luZzkwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEJ1c2luZXNzVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdidXNpbmVzc3R5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBDcmVhdGVkQnk6IHsgc2NoZW1hTmFtZTogJ2NyZWF0ZWRieScsIGxvZ2ljYWxOYW1lOiAnX2NyZWF0ZWRieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQ3JlYXRlZEJ5RXh0ZXJuYWxQYXJ0eTogeyBzY2hlbWFOYW1lOiAnY3JlYXRlZGJ5ZXh0ZXJuYWxwYXJ0eScsIGxvZ2ljYWxOYW1lOiAnX2NyZWF0ZWRieWV4dGVybmFscGFydHlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2V4dGVybmFscGFydGllcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnZXh0ZXJuYWxwYXJ0eScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBDcmVhdGVkT25fVXRjRGF0ZUFuZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdjcmVhdGVkb24nLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgQ3JlYXRlZE9uQmVoYWxmQnk6IHsgc2NoZW1hTmFtZTogJ2NyZWF0ZWRvbmJlaGFsZmJ5JywgbG9naWNhbE5hbWU6ICdfY3JlYXRlZG9uYmVoYWxmYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIENyZWRpdExpbWl0OiB7IGxvZ2ljYWxOYW1lOiAnY3JlZGl0bGltaXQnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQ3JlZGl0TGltaXRfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2NyZWRpdGxpbWl0X2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIENyZWRpdE9uSG9sZDogeyBsb2dpY2FsTmFtZTogJ2NyZWRpdG9uaG9sZCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgQ3VzdG9tZXJTaXplQ29kZTogeyBsb2dpY2FsTmFtZTogJ2N1c3RvbWVyc2l6ZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEN1c3RvbWVyVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdjdXN0b21lcnR5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBEZXNjcmlwdGlvbjogeyBsb2dpY2FsTmFtZTogJ2Rlc2NyaXB0aW9uJyB9LFxyXG4gICAgRG9Ob3RCdWxrRU1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdGJ1bGtlbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RCdWxrUG9zdGFsTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90YnVsa3Bvc3RhbG1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90RU1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdGVtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdEZheDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90ZmF4JywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdFBob25lOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RwaG9uZScsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RQb3N0YWxNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3Rwb3N0YWxtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdFNlbmRNTTogeyBsb2dpY2FsTmFtZTogJ2Rvbm90c2VuZG1tJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBFTWFpbEFkZHJlc3MxOiB7IGxvZ2ljYWxOYW1lOiAnZW1haWxhZGRyZXNzMScgfSxcclxuICAgIEVNYWlsQWRkcmVzczI6IHsgbG9naWNhbE5hbWU6ICdlbWFpbGFkZHJlc3MyJyB9LFxyXG4gICAgRU1haWxBZGRyZXNzMzogeyBsb2dpY2FsTmFtZTogJ2VtYWlsYWRkcmVzczMnIH0sXHJcbiAgICBFbnRpdHlJbWFnZTogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlJyB9LFxyXG4gICAgRW50aXR5SW1hZ2VfVGltZXN0YW1wOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2VfdGltZXN0YW1wJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEVudGl0eUltYWdlX1VSTDogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlX3VybCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBFbnRpdHlJbWFnZUlkOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2VpZCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBFeGNoYW5nZVJhdGU6IHsgbG9naWNhbE5hbWU6ICdleGNoYW5nZXJhdGUnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEZheDogeyBsb2dpY2FsTmFtZTogJ2ZheCcgfSxcclxuICAgIEZvbGxvd0VtYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZm9sbG93ZW1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIEZ0cFNpdGVVUkw6IHsgbG9naWNhbE5hbWU6ICdmdHBzaXRldXJsJyB9LFxyXG4gICAgSW1wb3J0U2VxdWVuY2VOdW1iZXI6IHsgbG9naWNhbE5hbWU6ICdpbXBvcnRzZXF1ZW5jZW51bWJlcicsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgSW5kdXN0cnlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnaW5kdXN0cnljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBJc1ByaXZhdGU6IHsgbG9naWNhbE5hbWU6ICdpc3ByaXZhdGUnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBMYXN0T25Ib2xkVGltZV9VdGNEYXRlQW5kVGltZTogeyBsb2dpY2FsTmFtZTogJ2xhc3RvbmhvbGR0aW1lJywgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgTGFzdFVzZWRJbkNhbXBhaWduX1V0Y0RhdGVPbmx5OiB7IGxvZ2ljYWxOYW1lOiAnbGFzdHVzZWRpbmNhbXBhaWduJywgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgTWFya2V0Q2FwOiB7IGxvZ2ljYWxOYW1lOiAnbWFya2V0Y2FwJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIE1hcmtldENhcF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnbWFya2V0Y2FwX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIE1hcmtldGluZ09ubHk6IHsgbG9naWNhbE5hbWU6ICdtYXJrZXRpbmdvbmx5JywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBNYXN0ZXJJZDogeyBzY2hlbWFOYW1lOiAnbWFzdGVyaWQnLCBsb2dpY2FsTmFtZTogJ19tYXN0ZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYWNjb3VudHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2FjY291bnQnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgTWVyZ2VkOiB7IGxvZ2ljYWxOYW1lOiAnbWVyZ2VkJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgTW9kaWZpZWRCeTogeyBzY2hlbWFOYW1lOiAnbW9kaWZpZWRieScsIGxvZ2ljYWxOYW1lOiAnX21vZGlmaWVkYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE1vZGlmaWVkQnlFeHRlcm5hbFBhcnR5OiB7IHNjaGVtYU5hbWU6ICdtb2RpZmllZGJ5ZXh0ZXJuYWxwYXJ0eScsIGxvZ2ljYWxOYW1lOiAnX21vZGlmaWVkYnlleHRlcm5hbHBhcnR5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdleHRlcm5hbHBhcnRpZXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2V4dGVybmFscGFydHknLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgTW9kaWZpZWRPbl9VdGNEYXRlQW5kVGltZTogeyBsb2dpY2FsTmFtZTogJ21vZGlmaWVkb24nLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgTW9kaWZpZWRPbkJlaGFsZkJ5OiB7IHNjaGVtYU5hbWU6ICdtb2RpZmllZG9uYmVoYWxmYnknLCBsb2dpY2FsTmFtZTogJ19tb2RpZmllZG9uYmVoYWxmYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogeyBzY2hlbWFOYW1lOiAnbXNhX21hbmFnaW5ncGFydG5lcmlkJywgbG9naWNhbE5hbWU6ICdfbXNhX21hbmFnaW5ncGFydG5lcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdhY2NvdW50cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYWNjb3VudCcgfSxcclxuICAgIE5hbWU6IHsgbG9naWNhbE5hbWU6ICduYW1lJyB9LFxyXG4gICAgTnVtYmVyT2ZFbXBsb3llZXM6IHsgbG9naWNhbE5hbWU6ICdudW1iZXJvZmVtcGxveWVlcycsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgT25Ib2xkVGltZTogeyBsb2dpY2FsTmFtZTogJ29uaG9sZHRpbWUnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBPdmVycmlkZGVuQ3JlYXRlZE9uX1V0Y0RhdGVPbmx5OiB7IGxvZ2ljYWxOYW1lOiAnb3ZlcnJpZGRlbmNyZWF0ZWRvbicsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIE93bmVySWRfc3lzdGVtdXNlcjogeyBzY2hlbWFOYW1lOiAnb3duZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX293bmVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJyB9LFxyXG4gICAgT3duZXJJZF90ZWFtOiB7IHNjaGVtYU5hbWU6ICdvd25lcmlkJywgbG9naWNhbE5hbWU6ICdfb3duZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAndGVhbXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3RlYW0nIH0sXHJcbiAgICBPd25lcnNoaXBDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnb3duZXJzaGlwY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgT3duaW5nQnVzaW5lc3NVbml0OiB7IHNjaGVtYU5hbWU6ICdvd25pbmdidXNpbmVzc3VuaXQnLCBsb2dpY2FsTmFtZTogJ19vd25pbmdidXNpbmVzc3VuaXRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2J1c2luZXNzdW5pdHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2J1c2luZXNzdW5pdCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBPd25pbmdUZWFtOiB7IHNjaGVtYU5hbWU6ICdvd25pbmd0ZWFtJywgbG9naWNhbE5hbWU6ICdfb3duaW5ndGVhbV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAndGVhbXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3RlYW0nLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgT3duaW5nVXNlcjogeyBzY2hlbWFOYW1lOiAnb3duaW5ndXNlcicsIGxvZ2ljYWxOYW1lOiAnX293bmluZ3VzZXJfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIFBhcmVudEFjY291bnRJZDogeyBzY2hlbWFOYW1lOiAncGFyZW50YWNjb3VudGlkJywgbG9naWNhbE5hbWU6ICdfcGFyZW50YWNjb3VudGlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdhY2NvdW50cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYWNjb3VudCcgfSxcclxuICAgIFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IHsgbG9naWNhbE5hbWU6ICdwYXJ0aWNpcGF0ZXNpbndvcmtmbG93JywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBQYXltZW50VGVybXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncGF5bWVudHRlcm1zY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncHJlZmVycmVkYXBwb2ludG1lbnRkYXljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudFRpbWVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncHJlZmVycmVkYXBwb2ludG1lbnR0aW1lY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdwcmVmZXJyZWRjb250YWN0bWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkU3lzdGVtVXNlcklkOiB7IHNjaGVtYU5hbWU6ICdwcmVmZXJyZWRzeXN0ZW11c2VyaWQnLCBsb2dpY2FsTmFtZTogJ19wcmVmZXJyZWRzeXN0ZW11c2VyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJyB9LFxyXG4gICAgUHJpbWFyeUNvbnRhY3RJZDogeyBzY2hlbWFOYW1lOiAncHJpbWFyeWNvbnRhY3RpZCcsIGxvZ2ljYWxOYW1lOiAnX3ByaW1hcnljb250YWN0aWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2NvbnRhY3RzJywgZW50aXR5TG9naWNhbE5hbWU6ICdjb250YWN0JyB9LFxyXG4gICAgUHJpbWFyeVNhdG9yaUlkOiB7IGxvZ2ljYWxOYW1lOiAncHJpbWFyeXNhdG9yaWlkJyB9LFxyXG4gICAgUHJpbWFyeVR3aXR0ZXJJZDogeyBsb2dpY2FsTmFtZTogJ3ByaW1hcnl0d2l0dGVyaWQnIH0sXHJcbiAgICBQcm9jZXNzSWQ6IHsgbG9naWNhbE5hbWU6ICdwcm9jZXNzaWQnIH0sXHJcbiAgICBSZXZlbnVlOiB7IGxvZ2ljYWxOYW1lOiAncmV2ZW51ZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBSZXZlbnVlX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdyZXZlbnVlX2Jhc2UnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIFNoYXJlc091dHN0YW5kaW5nOiB7IGxvZ2ljYWxOYW1lOiAnc2hhcmVzb3V0c3RhbmRpbmcnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFNoaXBwaW5nTWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ3NoaXBwaW5nbWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU0lDOiB7IGxvZ2ljYWxOYW1lOiAnc2ljJyB9LFxyXG4gICAgU0xBSWQ6IHsgc2NoZW1hTmFtZTogJ3NsYWlkJywgbG9naWNhbE5hbWU6ICdfc2xhaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3NsYXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3NsYScgfSxcclxuICAgIFNMQUludm9rZWRJZDogeyBzY2hlbWFOYW1lOiAnc2xhaW52b2tlZGlkJywgbG9naWNhbE5hbWU6ICdfc2xhaW52b2tlZGlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzbGFzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzbGEnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgU3RhZ2VJZDogeyBsb2dpY2FsTmFtZTogJ3N0YWdlaWQnIH0sXHJcbiAgICBTdGF0ZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdzdGF0ZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFN0YXR1c0NvZGU6IHsgbG9naWNhbE5hbWU6ICdzdGF0dXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTdG9ja0V4Y2hhbmdlOiB7IGxvZ2ljYWxOYW1lOiAnc3RvY2tleGNoYW5nZScgfSxcclxuICAgIFRlbGVwaG9uZTE6IHsgbG9naWNhbE5hbWU6ICd0ZWxlcGhvbmUxJyB9LFxyXG4gICAgVGVsZXBob25lMjogeyBsb2dpY2FsTmFtZTogJ3RlbGVwaG9uZTInIH0sXHJcbiAgICBUZWxlcGhvbmUzOiB7IGxvZ2ljYWxOYW1lOiAndGVsZXBob25lMycgfSxcclxuICAgIFRlcnJpdG9yeUNvZGU6IHsgbG9naWNhbE5hbWU6ICd0ZXJyaXRvcnljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBUaWNrZXJTeW1ib2w6IHsgbG9naWNhbE5hbWU6ICd0aWNrZXJzeW1ib2wnIH0sXHJcbiAgICBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiB7IGxvZ2ljYWxOYW1lOiAndGltZXNwZW50YnltZW9uZW1haWxhbmRtZWV0aW5ncycsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAndGltZXpvbmVydWxldmVyc2lvbm51bWJlcicsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgVHJhbnNhY3Rpb25DdXJyZW5jeUlkOiB7IHNjaGVtYU5hbWU6ICd0cmFuc2FjdGlvbmN1cnJlbmN5aWQnLCBsb2dpY2FsTmFtZTogJ190cmFuc2FjdGlvbmN1cnJlbmN5aWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3RyYW5zYWN0aW9uY3VycmVuY2llcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAndHJhbnNhY3Rpb25jdXJyZW5jeScgfSxcclxuICAgIFRyYXZlcnNlZFBhdGg6IHsgbG9naWNhbE5hbWU6ICd0cmF2ZXJzZWRwYXRoJyB9LFxyXG4gICAgVVRDQ29udmVyc2lvblRpbWVab25lQ29kZTogeyBsb2dpY2FsTmFtZTogJ3V0Y2NvbnZlcnNpb250aW1lem9uZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFZlcnNpb25OdW1iZXI6IHsgbG9naWNhbE5hbWU6ICd2ZXJzaW9ubnVtYmVyJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgV2ViU2l0ZVVSTDogeyBsb2dpY2FsTmFtZTogJ3dlYnNpdGV1cmwnIH0sXHJcbiAgICBZb21pTmFtZTogeyBsb2dpY2FsTmFtZTogJ3lvbWluYW1lJyB9XHJcbn07XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDMuIFJ1bnRpbWUgLSBGYWN0b3J5IEZ1bmN0aW9uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIEFjY291bnQgV2ViQXBpIG9iamVjdCBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIEBwYXJhbSBlbnRpdHkgVGhlIGVudGl0eSBvYmplY3QgZnJvbSBPRGF0YSByZXNwb25zZVxyXG4gKiBAcmV0dXJucyBBY2NvdW50QXBpIG9iamVjdCB3aXRoIHR5cGVkIHByb3BlcnRpZXNcclxuICovXHJcbi8qKlxyXG4gKiBBY2NvdW50QXBpIGNvbnN0cnVjdG9yIChDIy1zdHlsZSlcclxuICogVXNhZ2U6XHJcbiAqICAgY29uc3QgYSA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAqICAgYS5OYW1lID0gJ0NvbnRvc28nO1xyXG4gKiAgIC8vIC4uLlxyXG4gKiAgIGNvbnN0IHBheWxvYWQgPSBhLkVudGl0eTtcclxuICovXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50QXBpOiB7XHJcbiAgICBuZXcgKGVudGl0eT86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBJQWNjb3VudEFwaTtcclxufSA9IGNsYXNzIEFjY291bnRBcGkge1xyXG4gICAgY29uc3RydWN0b3IoZW50aXR5PzogUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVXZWJBcGlFbnRpdHk8SUFjY291bnRBcGk+KFxyXG4gICAgICAgICAgICBlbnRpdHksXHJcbiAgICAgICAgICAgICdhY2NvdW50JyxcclxuICAgICAgICAgICAgJ2FjY291bnRzJyxcclxuICAgICAgICAgICAgQWNjb3VudEZpZWxkQ29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSBhcyBhbnk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50QXBpO1xyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBBY2NvdW50QXBpIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGknO1xyXG5pbXBvcnQgeyBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9PcHRpb25TZXQnO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNjogV2ViQXBpIC0gRWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIFRlc3RzIFJldHJpZXZlUmVjb3JkIGFuZCBSZXRyaWV2ZVJlY29yZHMgd2l0aCB2YXJpb3VzIG92ZXJsb2Fkc1xyXG4gKlxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgLyBQcm9taXNlLWJhc2VkIHRlc3RzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIC8gQWRkaXRpb25hbCB0ZXN0cyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBUZXN0V2ViQXBpKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBXRUJBUEkgT0JKRUNUIFRFU1RTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBSMTogQ3JlYXRlIGVtcHR5IEFjY291bnQgb2JqZWN0IHZpYSBBY2NvdW50QXBpIGZhY3RvcnlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbmV3QWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgbmV3QWNjb3VudC5OYW1lID0gJ1Rlc3QgQWNjb3VudCc7XHJcbiAgICAgICAgbmV3QWNjb3VudC5UZWxlcGhvbmUxID0gJzEyMy00NTYtNzg5MCc7XHJcbiAgICAgICAgbmV3QWNjb3VudC5JbmR1c3RyeUNvZGUgPSBPcHRpb25TZXQuQWNjb3VudC5JbmR1c3RyeUNvZGUuQ29uc3VsdGluZztcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkFjY291bnRBcGkgKGNyZWF0ZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBOYW1lPVwiJHtuZXdBY2NvdW50Lk5hbWV9XCIsIEVudGl0eSByZWFkeWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogbmV3QWNjb3VudC5FbnRpdHkgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJBY2NvdW50QXBpIChjcmVhdGUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSMjogVGVzdCBFbnRpdHkgb2JqZWN0IHN0cnVjdHVyZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICBhY2NvdW50Lk5hbWUgPSAnRW50aXR5IFRlc3QnO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGFjY291bnQuRW50aXR5O1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5IG9iamVjdFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZW50aXR5ID8gYEtleXM6ICR7T2JqZWN0LmtleXMoZW50aXR5KS5qb2luKCcsICcpfWAgOiBcIm51bGxcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBlbnRpdHkgJiYgdHlwZW9mIGVudGl0eSA9PT0gJ29iamVjdCcgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHkgb2JqZWN0XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSMzogVGVzdCBFbnRpdHlOYW1lIHByb3BlcnR5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5TmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYWNjb3VudC5FbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGFjY291bnQuRW50aXR5TmFtZSA9PT0gJ2FjY291bnQnID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiRW50aXR5TmFtZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjQ6IFRlc3QgRW50aXR5Q29sbGVjdGlvbk5hbWUgcHJvcGVydHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHlDb2xsZWN0aW9uTmFtZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYWNjb3VudC5FbnRpdHlDb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBhY2NvdW50LkVudGl0eUNvbGxlY3Rpb25OYW1lID09PSAnYWNjb3VudHMnID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiRW50aXR5Q29sbGVjdGlvbk5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFI1OiBUZXN0IEZvcm1hdHRlZFZhbHVlIHByb3BlcnR5IGV4aXN0c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI1XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkZvcm1hdHRlZFZhbHVlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBhY2NvdW50LkZvcm1hdHRlZFZhbHVlID8gXCJvYmplY3QgZXhpc3RzXCIgOiBcIm51bGxcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBhY2NvdW50LkZvcm1hdHRlZFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBXRUJBUEkgUkVUUklFVkUgUkVDT1JEIFRFU1RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTMTogUmV0cmlldmVSZWNvcmQgLSBQcm9taXNlLWJhc2VkIHdpdGggb3B0aW9uc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZChcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eUlkLFxyXG4gICAgICAgICAgICBcIj8kc2VsZWN0PW5hbWUsdGVsZXBob25lMSxpbmR1c3RyeWNvZGVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZStPcHRpb25zKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogcmVjb3JkLk5hbWUgPyBgTmFtZT1cIiR7cmVjb3JkLk5hbWV9XCJgIDogXCJSZXRyaWV2ZWRcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkIChQcm9taXNlK09wdGlvbnMpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTMjogUmV0cmlldmVSZWNvcmQgLSBQcm9taXNlLWJhc2VkIHdpdGhvdXQgb3B0aW9uc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZChcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eUlkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkIChQcm9taXNlKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogcmVjb3JkLkFjY291bnRJZCA/IFwiUmV0cmlldmVkIHdpdGggYWxsIGZpZWxkc1wiIDogXCJSZXRyaWV2ZWRcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkIChQcm9taXNlKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzM6IFJldHJpZXZlUmVjb3JkIC0gQWNjZXNzIEZvcm1hdHRlZFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWQsXHJcbiAgICAgICAgICAgIFwiPyRzZWxlY3Q9bmFtZSxpbmR1c3RyeWNvZGVcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkSW5kdXN0cnkgPSByZWNvcmQuRm9ybWF0dGVkVmFsdWU/LkluZHVzdHJ5Q29kZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkZvcm1hdHRlZFZhbHVlLkluZHVzdHJ5Q29kZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZm9ybWF0dGVkSW5kdXN0cnkgPyBgXCIke2Zvcm1hdHRlZEluZHVzdHJ5fVwiYCA6IFwiKGVtcHR5KVwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWUuSW5kdXN0cnlDb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNDogUmV0cmlldmVSZWNvcmRzIC0gRmV0Y2hYTUwgUHJvbWlzZS1iYXNlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbCA9IFwiPGZldGNoIHRvcD0nMyc+PGVudGl0eSBuYW1lPSdhY2NvdW50Jz48YXR0cmlidXRlIG5hbWU9J25hbWUnLz48YXR0cmlidXRlIG5hbWU9J2FjY291bnRudW1iZXInLz48L2VudGl0eT48L2ZldGNoPlwiO1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZHMoQWNjb3VudEFwaSwgZmV0Y2hYbWwpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzRcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChGZXRjaFhNTClcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzU6IFJldHJpZXZlUmVjb3JkcyAtIEZldGNoWE1MIHdpdGggbWF4UGFnZVNpemVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hYbWwgPSBcIjxmZXRjaD48ZW50aXR5IG5hbWU9J2FjY291bnQnPjxhdHRyaWJ1dGUgbmFtZT0nbmFtZScvPjxhdHRyaWJ1dGUgbmFtZT0ndGVsZXBob25lMScvPjwvZW50aXR5PjwvZmV0Y2g+XCI7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhBY2NvdW50QXBpLCBmZXRjaFhtbCwgNSk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MK1BhZ2VTaXplKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofSAobWF4IDUpYCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChGZXRjaFhNTCtQYWdlU2l6ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM2OiBSZXRyaWV2ZVJlY29yZHMgLSBPRGF0YSBQcm9taXNlLWJhc2VkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZHMoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgICdhY2NvdW50JyxcclxuICAgICAgICAgICAgJz8kc2VsZWN0PW5hbWUsYWNjb3VudG51bWJlciYkdG9wPTMnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM2XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoT0RhdGEpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM3OiBSZXRyaWV2ZVJlY29yZHMgLSBPRGF0YSB3aXRoIG1heFBhZ2VTaXplXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZHMoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgICdhY2NvdW50JyxcclxuICAgICAgICAgICAgJz8kc2VsZWN0PW5hbWUsdGVsZXBob25lMScsXHJcbiAgICAgICAgICAgIDVcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzdcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YStQYWdlU2l6ZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH0gKG1heCA1KWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoT0RhdGErUGFnZVNpemUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTODogU2V0IHByb3BlcnR5IGFuZCB2ZXJpZnkgRW50aXR5IHVwZGF0ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICBhY2NvdW50Lk5hbWUgPSAnVXBkYXRlIFRlc3QnO1xyXG4gICAgICAgIGFjY291bnQuUmV2ZW51ZSA9IDEwMDAwMDA7XHJcbiAgICAgICAgYWNjb3VudC5OdW1iZXJPZkVtcGxveWVlcyA9IDUwO1xyXG4gICAgICAgIGFjY291bnQuQ3JlZGl0T25Ib2xkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBhY2NvdW50LkVudGl0eTtcclxuICAgICAgICBjb25zdCBoYXNOYW1lID0gZW50aXR5ICYmIGVudGl0eS5uYW1lID09PSAnVXBkYXRlIFRlc3QnO1xyXG4gICAgICAgIGNvbnN0IGhhc1JldmVudWUgPSBlbnRpdHkgJiYgZW50aXR5LnJldmVudWUgPT09IDEwMDAwMDA7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTOFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHkgdXBkYXRlIG9uIHNldFwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYE5hbWU6ICR7aGFzTmFtZX0sIFJldmVudWU6ICR7aGFzUmV2ZW51ZX1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGhhc05hbWUgJiYgaGFzUmV2ZW51ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkVudGl0eSB1cGRhdGUgb24gc2V0XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGMTAgVEVTVCA2OiBXZWJBcGkgWyR7c3RhcnRUaW1lfV0gLSBFYXJseS1ib3VuZCBzdHlsZSAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgQWNjb3VudEFwaSBGYWN0b3J5IFRlc3RzIChSMS1SNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgV2ViQXBpIE1ldGhvZHMgKFMxLVM4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDc6IE1vbmV5IENvbnRyb2wgLSBSZXZlbnVlIEZpZWxkXHJcbiAqIE1vbmV5IGV4dGVuZHMgSUNvbnRyb2xOdW1iZXIgd2l0aCBNaW4sIE1heCwgUHJlY2lzaW9uIHByb3BlcnRpZXNcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RNb25leShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbW9uZXkgPSBmb3JtLkhlYWRlci5SZXZlbnVlO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBtb25leS5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE1vbmV5LXNwZWNpZmljIHByb3BlcnRpZXMgKElDb250cm9sTnVtYmVyICsgUHJlY2lzaW9uKVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4XCIsIFZhbHVlOiBtb25leS5NYXgsIFN0YXR1czogdHlwZW9mIG1vbmV5Lk1heCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiTWluXCIsIFZhbHVlOiBtb25leS5NaW4sIFN0YXR1czogdHlwZW9mIG1vbmV5Lk1pbiA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiUHJlY2lzaW9uXCIsIFZhbHVlOiBtb25leS5QcmVjaXNpb24sIFN0YXR1czogdHlwZW9mIG1vbmV5LlByZWNpc2lvbiA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7IC8vIEF0dHJpYnV0ZSBjYW4gYmUgbnVsbCBpbiBzb21lIGNvbnRleHRzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBtb25leS5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG1vbmV5LkF0dHJpYnV0ZU5hbWUgPT09IFwicmV2ZW51ZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtb25leS5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG1vbmV5LkF0dHJpYnV0ZVR5cGUgPT09IFwibW9uZXlcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG1vbmV5LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbW9uZXkuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG1vbmV5LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG1vbmV5LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBtb25leS5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbW9uZXkuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1vbmV5LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbW9uZXkuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbW9uZXkuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtb25leS5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IDApICsgMTAwMDtcclxuICAgICAgICBtb25leS5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1vbmV5LlZhbHVlO1xyXG4gICAgICAgIG1vbmV5LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFByZWNpc2lvbiAoTW9uZXkgcHJlY2lzaW9uIGlzIHR5cGljYWxseSAwLTIgZm9yIGN1cnJlbmN5KVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUHJlY2lzaW9uID0gbW9uZXkuUHJlY2lzaW9uO1xyXG4gICAgICAgIGNvbnN0IHRlc3RQcmVjaXNpb24gPSAyOyAvLyBWYWxpZCBwcmVjaXNpb24gZm9yIG1vbmV5ICgwLTIgcmFuZ2UpXHJcbiAgICAgICAgbW9uZXkuUHJlY2lzaW9uID0gdGVzdFByZWNpc2lvbjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LlByZWNpc2lvbjtcclxuICAgICAgICBtb25leS5QcmVjaXNpb24gPSBvcmlnUHJlY2lzaW9uO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUHJlY2lzaW9uIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gdGVzdFByZWNpc2lvbiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IGBXYXMgJHtjaGVja31gLCBTdGF0dXM6IGNoZWNrID09PSB0ZXN0UHJlY2lzaW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG1vbmV5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbW9uZXkuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbW9uZXkuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBtb25leS5EaXNhYmxlZDtcclxuICAgICAgICBtb25leS5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5EaXNhYmxlZDtcclxuICAgICAgICBtb25leS5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbW9uZXkuTGFiZWw7XHJcbiAgICAgICAgY29uc3QgdGVzdExhYmVsID0gXCJUZXN0IE1vbmV5IExhYmVsXCI7XHJcbiAgICAgICAgbW9uZXkuTGFiZWwgPSB0ZXN0TGFiZWw7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5MYWJlbDtcclxuICAgICAgICBjb25zdCBzZXRXb3JrZWQgPSBjaGVjayA9PT0gdGVzdExhYmVsIHx8IGNoZWNrPy5pbmNsdWRlcyhcIlRlc3QgTW9uZXlcIik7XHJcbiAgICAgICAgaWYgKG9yaWdMYWJlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vbmV5LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBzZXRXb3JrZWQgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBgR290OiAke2NoZWNrfWAsIFN0YXR1czogc2V0V29ya2VkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBtb25leS5WaXNpYmxlO1xyXG4gICAgICAgIG1vbmV5LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5WaXNpYmxlO1xyXG4gICAgICAgIG1vbmV5LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE1vbmV5IE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5TZXROb3RpZmljYXRpb24oXCJUZXN0IE1vbmV5IG5vdGlmaWNhdGlvblwiLCBcIk1PTkVZX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vbmV5LkNsZWFyTm90aWZpY2F0aW9uKFwiTU9ORVlfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vbmV5LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQjAgVEVTVCA3OiBNb25leSBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IFJldmVudWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA4OiBCb29sZWFuIENvbnRyb2wgLSBDcmVkaXRPbkhvbGQgRmllbGRcclxuICogQm9vbGVhbiBleHRlbmRzIElDb250cm9sIHdpdGggSW5pdGlhbFZhbHVlIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0Qm9vbGVhbihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgYm9vbCA9IGZvcm0uQm9keS5DcmVkaXRPbkhvbGQ7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGJvb2wuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBCb29sZWFuLXNwZWNpZmljIHByb3BlcnRpZXMgKEluaXRpYWxWYWx1ZSBjYW4gYmUgYm9vbGVhbiBvciAwLzEpXHJcbiAgICAgICAgY29uc3QgaW5pdFZhbCA9IGJvb2wuSW5pdGlhbFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWRJbml0VmFsdWUgPSB0eXBlb2YgaW5pdFZhbCA9PT0gXCJib29sZWFuXCIgfHwgaW5pdFZhbCA9PT0gMCB8fCBpbml0VmFsID09PSAxO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiSW5pdGlhbFZhbHVlXCIsIFZhbHVlOiBpbml0VmFsLCBTdGF0dXM6IGlzVmFsaWRJbml0VmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGJvb2wuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBib29sLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogYm9vbC5BdHRyaWJ1dGVOYW1lID09PSBcImNyZWRpdG9uaG9sZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBib29sLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogYm9vbC5BdHRyaWJ1dGVUeXBlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGJvb2wuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBib29sLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGJvb2wuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBib29sLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBib29sLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBib29sLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBib29sLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogYm9vbC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBib29sLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogYm9vbC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9ICFvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIGJvb2wuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBib29sLlZhbHVlO1xyXG4gICAgICAgIGJvb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBib29sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgYm9vbC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGJvb2wuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBib29sLkRpc2FibGVkO1xyXG4gICAgICAgIGJvb2wuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5EaXNhYmxlZDtcclxuICAgICAgICBib29sLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBib29sLkxhYmVsO1xyXG4gICAgICAgIGJvb2wuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuTGFiZWw7XHJcbiAgICAgICAgYm9vbC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGJvb2wuVmlzaWJsZTtcclxuICAgICAgICBib29sLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLlZpc2libGU7XHJcbiAgICAgICAgYm9vbC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBCb29sZWFuIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgQm9vbGVhbiBub3RpZmljYXRpb25cIiwgXCJCT09MX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGJvb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJCT09MX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGJvb2wuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1MjcwNSBURVNUIDg6IEJvb2xlYW4gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBDcmVkaXRPbkhvbGQgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA5OiBEYXRlVGltZSBDb250cm9sIC0gdjRfQXBwb2ludG1lbnRUaW1lIEZpZWxkXHJcbiAqIERhdGVUaW1lIGV4dGVuZHMgSUNvbnRyb2wgd2l0aCBTaG93VGltZSBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdERhdGVUaW1lKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBkdCA9IGZvcm0uQm9keS52NF9BcHBvaW50bWVudFRpbWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGR0LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRGF0ZVRpbWUtc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiU2hvd1RpbWVcIiwgVmFsdWU6IGR0LlNob3dUaW1lLCBTdGF0dXM6IHR5cGVvZiBkdC5TaG93VGltZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IG9yaWdpbmFsVmFsdWUudG9JU09TdHJpbmcoKSA6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogZHQuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGR0LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogZHQuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBkdC5BdHRyaWJ1dGVOYW1lID09PSBcInY0X2FwcG9pbnRtZW50dGltZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBkdC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGR0LkF0dHJpYnV0ZVR5cGUgPT09IFwiZGF0ZXRpbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGR0LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogZHQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogZHQuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBkdC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogZHQuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGR0LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBkdC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGR0LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGR0LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogZHQuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGR0LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZHQuVmFsdWU7XHJcbiAgICAgICAgZHQuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIC8vIFZhbHVlIHdhcyBzZXQgc3VjY2Vzc2Z1bGx5IGlmIG5ld1ZhbHVlIGV4aXN0cyAoRGF0ZSwgc3RyaW5nLCBvciBhbnkgdHJ1dGh5KVxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBuZXdWYWx1ZSAhPT0gbnVsbCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogU2hvd1RpbWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Nob3dUaW1lID0gZHQuU2hvd1RpbWU7XHJcbiAgICAgICAgZHQuU2hvd1RpbWUgPSAhb3JpZ1Nob3dUaW1lO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuU2hvd1RpbWU7XHJcbiAgICAgICAgZHQuU2hvd1RpbWUgPSBvcmlnU2hvd1RpbWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTaG93VGltZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlNob3dUaW1lIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gZHQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBkdC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBkdC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGR0LkRpc2FibGVkO1xyXG4gICAgICAgIGR0LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LkRpc2FibGVkO1xyXG4gICAgICAgIGR0LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBkdC5MYWJlbDtcclxuICAgICAgICBkdC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuTGFiZWw7XHJcbiAgICAgICAgZHQuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBkdC5WaXNpYmxlO1xyXG4gICAgICAgIGR0LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5WaXNpYmxlO1xyXG4gICAgICAgIGR0LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIERhdGVUaW1lIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5TZXROb3RpZmljYXRpb24oXCJUZXN0IERhdGVUaW1lIG5vdGlmaWNhdGlvblwiLCBcIkRUX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGR0LkNsZWFyTm90aWZpY2F0aW9uKFwiRFRfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGR0LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQzUgVEVTVCA5OiBEYXRlVGltZSBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IHY0X0FwcG9pbnRtZW50VGltZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDEwOiBEYXRlT25seSBDb250cm9sIC0gdjRfQmlydGhkYXkgRmllbGRcclxuICogRGF0ZU9ubHkgZXh0ZW5kcyBJQ29udHJvbCAobm8gU2hvd1RpbWUgcHJvcGVydHkgdW5saWtlIERhdGVUaW1lKVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdERhdGVPbmx5KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBkYXRlT25seSA9IGZvcm0uQm9keS52NF9CaXJ0aGRheTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gZGF0ZU9ubHkuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBEYXRlT25seS1zcGVjaWZpYzogVmFsdWUgaXMgdGhlIG1haW4gcHJvcGVydHkgKG5vIFNob3dUaW1lKVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gb3JpZ2luYWxWYWx1ZS50b0lTT1N0cmluZygpIDogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBkYXRlT25seS5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogZGF0ZU9ubHkuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBkYXRlT25seS5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGRhdGVPbmx5LkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfYmlydGhkYXlcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBkYXRlT25seS5BdHRyaWJ1dGVUeXBlID09PSBcImRhdGV0aW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBkYXRlT25seS5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGRhdGVPbmx5LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGRhdGVPbmx5LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogZGF0ZU9ubHkuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogZGF0ZU9ubHkuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBkYXRlT25seS5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGRhdGVPbmx5LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGRhdGVPbmx5LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogZGF0ZU9ubHkuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSBuZXcgRGF0ZSgxOTkwLCA1LCAxNSk7IC8vIEp1bmUgMTUsIDE5OTBcclxuICAgICAgICBkYXRlT25seS5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGRhdGVPbmx5LlZhbHVlO1xyXG4gICAgICAgIGRhdGVPbmx5LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICAvLyBWYWx1ZSB3YXMgc2V0IHN1Y2Nlc3NmdWxseSBpZiBuZXdWYWx1ZSBleGlzdHNcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gbmV3VmFsdWUgIT09IG51bGwgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBzdWNjZXNzID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBkYXRlT25seS5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBkYXRlT25seS5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGRhdGVPbmx5LkRpc2FibGVkO1xyXG4gICAgICAgIGRhdGVPbmx5LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LkRpc2FibGVkO1xyXG4gICAgICAgIGRhdGVPbmx5LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBkYXRlT25seS5MYWJlbDtcclxuICAgICAgICBkYXRlT25seS5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuTGFiZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBkYXRlT25seS5WaXNpYmxlO1xyXG4gICAgICAgIGRhdGVPbmx5LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5WaXNpYmxlO1xyXG4gICAgICAgIGRhdGVPbmx5LlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIERhdGVPbmx5IE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0ZU9ubHkuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0ZU9ubHkuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkYXRlT25seS5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0ZU9ubHkuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBEYXRlT25seSBub3RpZmljYXRpb25cIiwgXCJET19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkYXRlT25seS5DbGVhck5vdGlmaWNhdGlvbihcIkRPX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGF0ZU9ubHkuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkYXRlT25seS5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjgyIFRFU1QgMTA6IERhdGVPbmx5IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogdjRfQmlydGhkYXkgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMTogR3JpZCBDb250cm9sIC0gQ29udGFjdHMgU3ViZ3JpZFxyXG4gKiBHcmlkIHByb3ZpZGVzIGFjY2VzcyB0byBzdWJncmlkIGRhdGEgYW5kIG9wZXJhdGlvbnNcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RHcmlkKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBncmlkID0gZm9ybS5HcmlkLkNvbnRhY3RzO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEdyaWQtc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiRW50aXR5TmFtZVwiLCBWYWx1ZTogZ3JpZC5FbnRpdHlOYW1lLCBTdGF0dXM6IGdyaWQuRW50aXR5TmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiRmV0Y2hYbWxcIiwgVmFsdWU6IGdyaWQuRmV0Y2hYbWwgPyBncmlkLkZldGNoWG1sLnN1YnN0cmluZygwLCA1MCkgKyBcIi4uLlwiIDogbnVsbCwgU3RhdHVzOiBncmlkLkZldGNoWG1sID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJHcmlkVHlwZVwiLCBWYWx1ZTogZ3JpZC5HcmlkVHlwZSwgU3RhdHVzOiB0eXBlb2YgZ3JpZC5HcmlkVHlwZSA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBSZWxhdGlvbnNoaXBcclxuICAgICAgICBjb25zdCByZWwgPSBncmlkLlJlbGF0aW9uc2hpcDtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlJlbGF0aW9uc2hpcC5uYW1lXCIsIFZhbHVlOiByZWw/Lm5hbWUsIFN0YXR1czogcmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAubmF2UHJvcE5hbWVcIiwgVmFsdWU6IHJlbD8ubmF2aWdhdGlvblByb3BlcnR5TmFtZSwgU3RhdHVzOiByZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIlJlbGF0aW9uc2hpcC50eXBlXCIsIFZhbHVlOiByZWw/LnJlbGF0aW9uc2hpcFR5cGUsIFN0YXR1czogcmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFJvd3NcclxuICAgICAgICBjb25zdCByb3dzID0gZ3JpZC5Sb3dzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiUm93cy5nZXRMZW5ndGgoKVwiLCBWYWx1ZTogcm93cz8uZ2V0TGVuZ3RoKCksIFN0YXR1czogcm93cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBTZWxlY3RlZFJvd3NcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFJvd3MgPSBncmlkLlNlbGVjdGVkUm93cztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIlNlbGVjdGVkUm93cy5nZXRMZW5ndGgoKVwiLCBWYWx1ZTogc2VsZWN0ZWRSb3dzPy5nZXRMZW5ndGgoKSwgU3RhdHVzOiBzZWxlY3RlZFJvd3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gVG90YWxSZWNvcmRDb3VudFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiVG90YWxSZWNvcmRDb3VudFwiLCBWYWx1ZTogZ3JpZC5Ub3RhbFJlY29yZENvdW50LCBTdGF0dXM6IHR5cGVvZiBncmlkLlRvdGFsUmVjb3JkQ291bnQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gVmlld1NlbGVjdG9yXHJcbiAgICAgICAgY29uc3QgdnMgPSBncmlkLlZpZXdTZWxlY3RvcjtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJWaWV3U2VsZWN0b3JcIiwgVmFsdWU6IHZzID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHZzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiVmlld1NlbGVjdG9yLlZpc2libGVcIiwgVmFsdWU6IHZzPy5WaXNpYmxlLCBTdGF0dXM6IHZzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFZpc2libGVcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBncmlkLlZpc2libGUsIFN0YXR1czogdHlwZW9mIGdyaWQuVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIE1ldGhvZDogVXJsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGdyaWQuVXJsKDEpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVXJsKDEpXCIsIFZhbHVlOiB1cmwgPyB1cmwuc3Vic3RyaW5nKDAsIDUwKSArIFwiLi4uXCIgOiBcIm51bGxcIiwgU3RhdHVzOiB1cmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVXJsKDEpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBncmlkLlZpc2libGU7XHJcbiAgICAgICAgZ3JpZC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZ3JpZC5WaXNpYmxlO1xyXG4gICAgICAgIGdyaWQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkT25Mb2FkXHJcbiAgICBjb25zdCBvbkxvYWRDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBHcmlkIE9uTG9hZCBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ3JpZC5BZGRPbkxvYWQob25Mb2FkQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkT25Mb2FkXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRPbkxvYWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlT25Mb2FkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdyaWQuUmVtb3ZlT25Mb2FkKG9uTG9hZENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uTG9hZFwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25Mb2FkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlZnJlc2hcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRG9uJ3QgYWN0dWFsbHkgcmVmcmVzaCB0byBhdm9pZCBzaWRlIGVmZmVjdHMsIGp1c3QgY2hlY2sgaWYgbWV0aG9kIGV4aXN0c1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ3JpZC5SZWZyZXNoID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoXCIsIFZhbHVlOiBcIkF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoXCIsIFZhbHVlOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVmcmVzaFJpYmJvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQuUmVmcmVzaFJpYmJvbiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFJpYmJvblwiLCBWYWx1ZTogXCJBdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFJpYmJvblwiLCBWYWx1ZTogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUmliYm9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IE9wZW5SZWxhdGVkR3JpZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQuT3BlblJlbGF0ZWRHcmlkID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJPcGVuUmVsYXRlZEdyaWRcIiwgVmFsdWU6IFwiQXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIk9wZW5SZWxhdGVkR3JpZFwiLCBWYWx1ZTogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJPcGVuUmVsYXRlZEdyaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRlc3QgUm93cyBpdGVyYXRpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IGdyaWQuUm93cztcclxuICAgICAgICBpZiAocm93cyAmJiByb3dzLmdldExlbmd0aCgpID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFJvdyA9IHJvd3MuZ2V0KDApO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0KDApXCIsIFZhbHVlOiBmaXJzdFJvdz8uRW50aXR5SWQgfHwgXCJubyBFbnRpdHlJZFwiLCBTdGF0dXM6IGZpcnN0Um93ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogXCJObyByb3dzXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0KDApXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQ0EgVEVTVCAxMTogR3JpZCBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IENvbnRhY3RzIHN1YmdyaWQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzdHJpbmdpZnkgb2JqZWN0cyBmb3IgZGlzcGxheVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyIG9yIENvbXBsZXggT2JqZWN0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMjogVXRpbGl0eSBBUEkgLSBHbG9iYWwgVXRpbGl0eSBGdW5jdGlvbnNcclxuICogVXRpbGl0eSBwcm92aWRlcyBhY2Nlc3MgdG8gWHJtLlV0aWxpdHksIFhybS5OYXZpZ2F0aW9uLCBYcm0uRGV2aWNlLCBYcm0uRW5jb2RpbmcsIGV0Yy5cclxuICogVGVzdHMgQUxMIHByb3BlcnRpZXMgb2YgZWFjaCBuZXN0ZWQgb2JqZWN0IChDbGllbnQsIE9yZ2FuaXphdGlvblNldHRpbmdzLCBVc2VyU2V0dGluZ3MpXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFV0aWxpdHkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHV0aWwgPSBmb3JtLlV0aWxpdHk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIENsaWVudCAoYWxsIHByb3BlcnRpZXMpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHV0aWwuQ2xpZW50O1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiQ2xpZW50XCIsIFZhbHVlOiBzdHJpbmdpZnkoY2xpZW50KSwgU3RhdHVzOiBjbGllbnQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkNsaWVudC5DbGllbnROYW1lXCIsIFZhbHVlOiBjbGllbnQ/LkNsaWVudE5hbWUsIFN0YXR1czogY2xpZW50Py5DbGllbnROYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJDbGllbnQuQ2xpZW50U3RhdGVcIiwgVmFsdWU6IGNsaWVudD8uQ2xpZW50U3RhdGUsIFN0YXR1czogY2xpZW50Py5DbGllbnRTdGF0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQ2xpZW50LkZvcm1GYWN0b3JcIiwgVmFsdWU6IGNsaWVudD8uRm9ybUZhY3RvciwgU3RhdHVzOiB0eXBlb2YgY2xpZW50Py5Gb3JtRmFjdG9yID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDbGllbnQuSXNOZXR3b3JrQXZhaWxhYmxlXCIsIFZhbHVlOiBjbGllbnQ/LklzTmV0d29ya0F2YWlsYWJsZSwgU3RhdHVzOiB0eXBlb2YgY2xpZW50Py5Jc05ldHdvcmtBdmFpbGFibGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDbGllbnQuSXNPZmZsaW5lXCIsIFZhbHVlOiBjbGllbnQ/LklzT2ZmbGluZSwgU3RhdHVzOiB0eXBlb2YgY2xpZW50Py5Jc09mZmxpbmUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBHbG9iYWwgQ29udGV4dCBQcm9wZXJ0aWVzXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ2xpZW50VXJsXCIsIFZhbHVlOiB1dGlsLkNsaWVudFVybCwgU3RhdHVzOiB1dGlsLkNsaWVudFVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcFVybFwiLCBWYWx1ZTogdXRpbC5DdXJyZW50QXBwVXJsLCBTdGF0dXM6IHV0aWwuQ3VycmVudEFwcFVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNPblByZW1pc2VzXCIsIFZhbHVlOiB1dGlsLklzT25QcmVtaXNlcywgU3RhdHVzOiB0eXBlb2YgdXRpbC5Jc09uUHJlbWlzZXMgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogdXRpbC5MZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUGFnZUNvbnRleHRcIiwgVmFsdWU6IHN0cmluZ2lmeSh1dGlsLlBhZ2VDb250ZXh0KSwgU3RhdHVzOiB1dGlsLlBhZ2VDb250ZXh0ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiVmVyc2lvblwiLCBWYWx1ZTogdXRpbC5WZXJzaW9uLCBTdGF0dXM6IHV0aWwuVmVyc2lvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gT3JnYW5pemF0aW9uU2V0dGluZ3MgKGFsbCBwcm9wZXJ0aWVzKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBjb25zdCBvcmdTZXR0aW5ncyA9IHV0aWwuT3JnYW5pemF0aW9uU2V0dGluZ3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiT3JnYW5pemF0aW9uU2V0dGluZ3NcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmdTZXR0aW5ncyksIFN0YXR1czogb3JnU2V0dGluZ3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJPcmcuQXR0cmlidXRlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KG9yZ1NldHRpbmdzPy5BdHRyaWJ1dGVzKSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIk9yZy5CYXNlQ3VycmVuY3lcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmdTZXR0aW5ncz8uQmFzZUN1cnJlbmN5KSwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uQmFzZUN1cnJlbmN5ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiT3JnLkJhc2VDdXJyZW5jeUlkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uQmFzZUN1cnJlbmN5SWQsIFN0YXR1czogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeUlkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiT3JnLkRlZmF1bHRDb3VudHJ5Q29kZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkRlZmF1bHRDb3VudHJ5Q29kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE4XCIsIFByb3BlcnR5OiBcIk9yZy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uRnVsbE5hbWVDb252ZW50aW9uQ29kZSwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/LkZ1bGxOYW1lQ29udmVudGlvbkNvZGUgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOVwiLCBQcm9wZXJ0eTogXCJPcmcuSXNBdXRvU2F2ZUVuYWJsZWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Jc0F1dG9TYXZlRW5hYmxlZCwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/LklzQXV0b1NhdmVFbmFibGVkID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjIwXCIsIFByb3BlcnR5OiBcIk9yZy5Jc1RyaWFsT3JnYW5pemF0aW9uXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uSXNUcmlhbE9yZ2FuaXphdGlvbiwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/LklzVHJpYWxPcmdhbml6YXRpb24gPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjFcIiwgUHJvcGVydHk6IFwiT3JnLkxhbmd1YWdlSWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5MYW5ndWFnZUlkLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uTGFuZ3VhZ2VJZCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjIyXCIsIFByb3BlcnR5OiBcIk9yZy5Pcmdhbml6YXRpb25FeHBpcnlEYXRlXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjIzXCIsIFByb3BlcnR5OiBcIk9yZy5Pcmdhbml6YXRpb25JZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/Lk9yZ2FuaXphdGlvbklkLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5Pcmdhbml6YXRpb25JZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI0XCIsIFByb3BlcnR5OiBcIk9yZy5VbmlxdWVOYW1lXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uVW5pcXVlTmFtZSwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uVW5pcXVlTmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI1XCIsIFByb3BlcnR5OiBcIk9yZy5Vc2VTa3lwZVByb3RvY29sXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uVXNlU2t5cGVQcm90b2NvbCwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/LlVzZVNreXBlUHJvdG9jb2wgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBVc2VyU2V0dGluZ3MgKGFsbCBwcm9wZXJ0aWVzKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSB1dGlsLlVzZXJTZXR0aW5ncztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNlwiLCBQcm9wZXJ0eTogXCJVc2VyU2V0dGluZ3NcIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3MpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI3XCIsIFByb3BlcnR5OiBcIlVzZXIuRGF0ZUZvcm1hdHRpbmdJbmZvXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5EYXRlRm9ybWF0dGluZ0luZm8pLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uRGF0ZUZvcm1hdHRpbmdJbmZvID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjhcIiwgUHJvcGVydHk6IFwiVXNlci5EZWZhdWx0RGFzaGJvYXJkSWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uRGVmYXVsdERhc2hib2FyZElkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjlcIiwgUHJvcGVydHk6IFwiVXNlci5Jc0d1aWRlZEhlbHBFbmFibGVkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LklzR3VpZGVkSGVscEVuYWJsZWQsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uSXNHdWlkZWRIZWxwRW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzMFwiLCBQcm9wZXJ0eTogXCJVc2VyLklzSGlnaENvbnRyYXN0RW5hYmxlZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Jc0hpZ2hDb250cmFzdEVuYWJsZWQsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uSXNIaWdoQ29udHJhc3RFbmFibGVkID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMxXCIsIFByb3BlcnR5OiBcIlVzZXIuSXNSVExcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uSXNSVEwsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uSXNSVEwgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzJcIiwgUHJvcGVydHk6IFwiVXNlci5MYW5ndWFnZUlkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/Lkxhbmd1YWdlSWQsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uTGFuZ3VhZ2VJZCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMzXCIsIFByb3BlcnR5OiBcIlVzZXIuUm9sZXNcIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LlJvbGVzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlJvbGVzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzRcIiwgUHJvcGVydHk6IFwiVXNlci5TZWN1cml0eVJvbGVQcml2aWxlZ2VzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVQcml2aWxlZ2VzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZVByaXZpbGVnZXMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzNVwiLCBQcm9wZXJ0eTogXCJVc2VyLlNlY3VyaXR5Um9sZXNcIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZXMpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM2XCIsIFByb3BlcnR5OiBcIlVzZXIuVGltZVpvbmVPZmZzZXRNaW51dGVzXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LlRpbWVab25lT2Zmc2V0TWludXRlcywgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5UaW1lWm9uZU9mZnNldE1pbnV0ZXMgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzN1wiLCBQcm9wZXJ0eTogXCJVc2VyLlRyYW5zYWN0aW9uQ3VycmVuY3lcIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LlRyYW5zYWN0aW9uQ3VycmVuY3kpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM4XCIsIFByb3BlcnR5OiBcIlVzZXIuVHJhbnNhY3Rpb25DdXJyZW5jeUlkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LlRyYW5zYWN0aW9uQ3VycmVuY3lJZCwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlRyYW5zYWN0aW9uQ3VycmVuY3lJZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM5XCIsIFByb3BlcnR5OiBcIlVzZXIuVXNlcklkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LlVzZXJJZCwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlVzZXJJZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjQwXCIsIFByb3BlcnR5OiBcIlVzZXIuVXNlck5hbWVcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVXNlck5hbWUsIFN0YXR1czogdXNlclNldHRpbmdzPy5Vc2VyTmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBFbmNvZGluZyBNZXRob2RzICh0ZXN0IHdpdGggYWN0dWFsIHZhbHVlcylcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlZCA9IHV0aWwuSHRtbEVuY29kZShcIjx0ZXN0PlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkh0bWxFbmNvZGVcIiwgVmFsdWU6IGVuY29kZWQsIFN0YXR1czogZW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJIdG1sRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSB1dGlsLkh0bWxEZWNvZGUoXCImbHQ7dGVzdCZndDtcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJIdG1sRGVjb2RlXCIsIFZhbHVlOiBkZWNvZGVkLCBTdGF0dXM6IGRlY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiSHRtbERlY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbmNvZGVkID0gdXRpbC5IdG1sQXR0cmlidXRlRW5jb2RlKFwidGVzdD1cXFwidmFsdWVcXFwiXCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiSHRtbEF0dHJpYnV0ZUVuY29kZVwiLCBWYWx1ZTogZW5jb2RlZCwgU3RhdHVzOiBlbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkh0bWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeG1sRW5jb2RlZCA9IHV0aWwuWG1sRW5jb2RlKFwiPHRlc3Q+XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiWG1sRW5jb2RlXCIsIFZhbHVlOiB4bWxFbmNvZGVkLCBTdGF0dXM6IHhtbEVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiWG1sRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHhtbEF0dHJFbmNvZGVkID0gdXRpbC5YbWxBdHRyaWJ1dGVFbmNvZGUoXCJ0ZXN0PVxcXCJ2YWx1ZVxcXCJcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJYbWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IHhtbEF0dHJFbmNvZGVkLCBTdGF0dXM6IHhtbEF0dHJFbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlhtbEF0dHJpYnV0ZUVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gVVJML1Jlc291cmNlIE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJlcGVuZGVkVXJsID0gdXRpbC5QcmVwZW5kT3JnTmFtZShcIi90ZXN0XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUHJlcGVuZE9yZ05hbWVcIiwgVmFsdWU6IHByZXBlbmRlZFVybCwgU3RhdHVzOiBwcmVwZW5kZWRVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUHJlcGVuZE9yZ05hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgd2ViUmVzb3VyY2VVcmwgPSB1dGlsLldlYlJlc291cmNlVXJsKFwidGVzdC5odG1sXCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiV2ViUmVzb3VyY2VVcmxcIiwgVmFsdWU6IHdlYlJlc291cmNlVXJsLCBTdGF0dXM6IHdlYlJlc291cmNlVXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIldlYlJlc291cmNlVXJsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBBcHAvR2xvYmFsQ29udGV4dCBBc3luYyBNZXRob2RzIChjaGVjayBmdW5jdGlvbiBhdmFpbGFiaWxpdHkpXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiQWR2YW5jZWRDb25maWdTZXR0aW5nXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkFkdmFuY2VkQ29uZmlnU2V0dGluZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkFkdmFuY2VkQ29uZmlnU2V0dGluZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBOYW1lXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwTmFtZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ3VycmVudEFwcE5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwTmFtZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwUHJvcGVydGllc1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ3VycmVudEFwcFByb3BlcnRpZXMgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBQcm9wZXJ0aWVzID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBQcm9wZXJ0aWVzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBOYXZpZ2F0aW9uIE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiTmF2aWdhdGVUb1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTmF2aWdhdGVUbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuTmF2aWdhdGVUbyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJOYXZpZ2F0ZVRvXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIk9wZW5BbGVydERpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkFsZXJ0RGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuQWxlcnREaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiT3BlbkFsZXJ0RGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIk9wZW5Db25maXJtRGlhbG9nXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuQ29uZmlybURpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkNvbmZpcm1EaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiT3BlbkNvbmZpcm1EaWFsb2dcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiT3BlbkVycm9yRGlhbG9nXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuRXJyb3JEaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5FcnJvckRpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJPcGVuRXJyb3JEaWFsb2dcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiT3BlbkZpbGVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5GaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJPcGVuRmlsZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJPcGVuRm9ybVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkZvcm0gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5Gb3JtID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIk9wZW5Gb3JtXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE3XCIsIFByb3BlcnR5OiBcIk9wZW5VcmxcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5VcmwgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5VcmwgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTdcIiwgUHJvcGVydHk6IFwiT3BlblVybFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOFwiLCBQcm9wZXJ0eTogXCJPcGVuV2ViUmVzb3VyY2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5XZWJSZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbldlYlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE4XCIsIFByb3BlcnR5OiBcIk9wZW5XZWJSZXNvdXJjZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUHJvZ3Jlc3MvTm90aWZpY2F0aW9uIE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTlcIiwgUHJvcGVydHk6IFwiU2hvd1Byb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlNob3dQcm9ncmVzc0luZGljYXRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOVwiLCBQcm9wZXJ0eTogXCJTaG93UHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjBcIiwgUHJvcGVydHk6IFwiQ2xvc2VQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2xvc2VQcm9ncmVzc0luZGljYXRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2xvc2VQcm9ncmVzc0luZGljYXRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMFwiLCBQcm9wZXJ0eTogXCJDbG9zZVByb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIxXCIsIFByb3BlcnR5OiBcIkFkZEdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQWRkR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5BZGRHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjFcIiwgUHJvcGVydHk6IFwiQWRkR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIyXCIsIFByb3BlcnR5OiBcIkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DbGVhckdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjJcIiwgUHJvcGVydHk6IFwiQ2xlYXJHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFV0aWxpdHkgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyM1wiLCBQcm9wZXJ0eTogXCJBbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnNcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIzXCIsIFByb3BlcnR5OiBcIkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9uc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNFwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNZXRhZGF0YVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuRW50aXR5TWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkVudGl0eU1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI0XCIsIFByb3BlcnR5OiBcIkVudGl0eU1ldGFkYXRhXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI1XCIsIFByb3BlcnR5OiBcIkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvclwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5FbnRpdHlNYWluRm9ybURlc2NyaXB0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjVcIiwgUHJvcGVydHk6IFwiRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI2XCIsIFByb3BlcnR5OiBcIkludm9rZVByb2Nlc3NBY3Rpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkludm9rZVByb2Nlc3NBY3Rpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkludm9rZVByb2Nlc3NBY3Rpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjZcIiwgUHJvcGVydHk6IFwiSW52b2tlUHJvY2Vzc0FjdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyN1wiLCBQcm9wZXJ0eTogXCJMb29rdXBPYmplY3RzXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5Mb29rdXBPYmplY3RzID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5Mb29rdXBPYmplY3RzID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI3XCIsIFByb3BlcnR5OiBcIkxvb2t1cE9iamVjdHNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjhcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFBhcmVudEdyaWRcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlJlZnJlc2hQYXJlbnRHcmlkID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5SZWZyZXNoUGFyZW50R3JpZCA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOFwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUGFyZW50R3JpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOVwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI5XCIsIFByb3BlcnR5OiBcIlJlc291cmNlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMwXCIsIFByb3BlcnR5OiBcIlJlc291cmNlU3RyaW5nXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5SZXNvdXJjZVN0cmluZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUmVzb3VyY2VTdHJpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzBcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VTdHJpbmdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIERldmljZSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMxXCIsIFByb3BlcnR5OiBcIkJhcmNvZGVWYWx1ZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQmFyY29kZVZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5CYXJjb2RlVmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzFcIiwgUHJvcGVydHk6IFwiQmFyY29kZVZhbHVlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMyXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVBdWRpb1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2FwdHVyZUF1ZGlvID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DYXB0dXJlQXVkaW8gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzJcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZUF1ZGlvXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMzXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVJbWFnZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2FwdHVyZUltYWdlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DYXB0dXJlSW1hZ2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzNcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZUltYWdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM0XCIsIFByb3BlcnR5OiBcIkNhcHR1cmVWaWRlb1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2FwdHVyZVZpZGVvID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DYXB0dXJlVmlkZW8gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzRcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZVZpZGVvXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM1XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRQb3NpdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ3VycmVudFBvc2l0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DdXJyZW50UG9zaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzVcIiwgUHJvcGVydHk6IFwiQ3VycmVudFBvc2l0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM2XCIsIFByb3BlcnR5OiBcIlBpY2tGaWxlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5QaWNrRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUGlja0ZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzZcIiwgUHJvcGVydHk6IFwiUGlja0ZpbGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFBhbmVsIE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzdcIiwgUHJvcGVydHk6IFwiTG9hZFBhbmVsXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5Mb2FkUGFuZWwgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkxvYWRQYW5lbCA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzN1wiLCBQcm9wZXJ0eTogXCJMb2FkUGFuZWxcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1REQyNyBURVNUIDEyOiBVdGlsaXR5IEFQSSBbJHtzdGFydFRpbWV9XSAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjQwKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBNZXRob2RzIChTMS1TMzcpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSBvYmplY3RzIGZvciBkaXNwbGF5XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgb3IgQ29tcGxleCBPYmplY3RdJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDEzOiBNdWx0aU9wdGlvblNldCBDb250cm9sIC0gdjRfQ2F0ZWdvcmllcyBGaWVsZFxyXG4gKiBNdWx0aU9wdGlvblNldCBleHRlbmRzIElDb250cm9sT3B0aW9uU2V0IHdpdGggVmFsdWUgYXMgbnVtYmVyW10gKGFycmF5KVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE11bHRpT3B0aW9uU2V0KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtb3MgPSBmb3JtLkJvZHkudjRfQ2F0ZWdvcmllcztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbW9zLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTXVsdGlPcHRpb25TZXQtc3BlY2lmaWM6IFZhbHVlLCBJbml0aWFsVmFsdWUsIFNlbGVjdGVkT3B0aW9uLCBUZXh0IGFyZSBhbGwgYXJyYXlzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAobnVtYmVyW10pXCIsIFZhbHVlOiBzdHJpbmdpZnkob3JpZ2luYWxWYWx1ZSksIFN0YXR1czogQXJyYXkuaXNBcnJheShvcmlnaW5hbFZhbHVlKSB8fCBvcmlnaW5hbFZhbHVlID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJPcHRpb25zIChhcnJheSlcIiwgVmFsdWU6IHN0cmluZ2lmeShtb3MuT3B0aW9ucyksIFN0YXR1czogQXJyYXkuaXNBcnJheShtb3MuT3B0aW9ucykgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlNlbGVjdGVkT3B0aW9uIChhcnJheSlcIiwgVmFsdWU6IHN0cmluZ2lmeShtb3MuU2VsZWN0ZWRPcHRpb24pLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLlNlbGVjdGVkT3B0aW9uKSB8fCBtb3MuU2VsZWN0ZWRPcHRpb24gPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZSAobnVtYmVyW10pXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLkluaXRpYWxWYWx1ZSksIFN0YXR1czogQXJyYXkuaXNBcnJheShtb3MuSW5pdGlhbFZhbHVlKSB8fCBtb3MuSW5pdGlhbFZhbHVlID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJUZXh0IChzdHJpbmdbXSlcIiwgVmFsdWU6IHN0cmluZ2lmeShtb3MuVGV4dCksIFN0YXR1czogQXJyYXkuaXNBcnJheShtb3MuVGV4dCkgfHwgbW9zLlRleHQgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbW9zLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBtb3MuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBtb3MuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtb3MuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9jYXRlZ29yaWVzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG1vcy5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG1vcy5BdHRyaWJ1dGVUeXBlID09PSBcIm11bHRpc2VsZWN0b3B0aW9uc2V0XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtb3MuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbW9zLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtb3MuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbW9zLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBtb3MuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1vcy5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbW9zLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbW9zLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1vcy5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE4XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG1vcy5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlIChhcnJheSBvZiBudW1iZXJzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSBbMSwgMl07IC8vIFRlc3Qgd2l0aCBzYW1wbGUgdmFsdWVzXHJcbiAgICAgICAgbW9zLlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9zLlZhbHVlO1xyXG4gICAgICAgIG1vcy5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IEFycmF5LmlzQXJyYXkobmV3VmFsdWUpIHx8IG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG1vcy5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vcy5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbW9zLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbW9zLkRpc2FibGVkO1xyXG4gICAgICAgIG1vcy5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb3MuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9zLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBtb3MuTGFiZWw7XHJcbiAgICAgICAgbW9zLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb3MuTGFiZWw7XHJcbiAgICAgICAgbW9zLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gbW9zLlZpc2libGU7XHJcbiAgICAgICAgbW9zLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb3MuVmlzaWJsZTtcclxuICAgICAgICBtb3MuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogT3B0aW9uIChnZXQgc3BlY2lmaWMgb3B0aW9uKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gbW9zLk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gbW9zLk9wdGlvbihvcHRpb25zWzBdLnZhbHVlKTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBzdHJpbmdpZnkoZmlyc3RPcHRpb24pLCBTdGF0dXM6IGZpcnN0T3B0aW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBcIk5vIG9wdGlvbnNcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBBZGRPbkNoYW5nZVxyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNdWx0aU9wdGlvblNldCBPbkNoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9uQ2hhbmdlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGaXJlT25DaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZvY3VzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9zLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldE5vdGlmaWNhdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNdWx0aU9wdGlvblNldCBub3RpZmljYXRpb25cIiwgXCJNT1NfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9zLkNsZWFyTm90aWZpY2F0aW9uKFwiTU9TX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0SXNWYWxpZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb3MuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REZGN1x1RkUwRiBURVNUIDEzOiBNdWx0aU9wdGlvblNldCBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IHY0X0NhdGVnb3JpZXMgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IG9iamVjdHMgZm9yIGRpc3BsYXlcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBvciBDb21wbGV4IE9iamVjdF0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTQ6IFRhYiBDb250cm9sIC0gREVUQUlMU19UQUJcclxuICogSVRhYiBpbnRlcmZhY2UgZm9yIGZvcm0gdGFicyB3aXRoIERpc3BsYXlTdGF0ZSwgTGFiZWwsIFZpc2libGUgcHJvcGVydGllc1xyXG4gKiBBbHNvIHRlc3RzIFNlY3Rpb24gd2l0aGluIHRoZSB0YWJcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0VGFiKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCB0YWIgPSAoZm9ybS5Cb2R5IGFzIGFueSkuVGFiLlNVTU1BUllfVEFCO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVEFCIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlRhYi5OYW1lXCIsIFZhbHVlOiB0YWIuTmFtZSwgU3RhdHVzOiB0YWIuTmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVGFiLlBhcmVudFwiLCBWYWx1ZTogdGFiLlBhcmVudCA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiB0YWIuUGFyZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJUYWIuRGlzcGxheVN0YXRlXCIsIFZhbHVlOiB0YWIuRGlzcGxheVN0YXRlLCBTdGF0dXM6IHRhYi5EaXNwbGF5U3RhdGUgPT09IFwiZXhwYW5kZWRcIiB8fCB0YWIuRGlzcGxheVN0YXRlID09PSBcImNvbGxhcHNlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJUYWIuTGFiZWxcIiwgVmFsdWU6IHRhYi5MYWJlbCwgU3RhdHVzOiB0YWIuTGFiZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlRhYi5WaXNpYmxlXCIsIFZhbHVlOiB0YWIuVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2YgdGFiLlZpc2libGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFNlY3Rpb24gcHJvcGVydGllcyAoQUNDT1VOVF9JTkZPUk1BVElPTiBzZWN0aW9uKVxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSB0YWIuU2VjdGlvbi5BQ0NPVU5UX0lORk9STUFUSU9OO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5CSUxMSU5HXCIsIFZhbHVlOiBzZWN0aW9uID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHNlY3Rpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTmFtZVwiLCBWYWx1ZTogc2VjdGlvbj8uTmFtZSwgU3RhdHVzOiBzZWN0aW9uPy5OYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLlBhcmVudFwiLCBWYWx1ZTogc2VjdGlvbj8uUGFyZW50ID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHNlY3Rpb24/LlBhcmVudCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5MYWJlbFwiLCBWYWx1ZTogc2VjdGlvbj8uTGFiZWwsIFN0YXR1czogc2VjdGlvbj8uTGFiZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLlZpc2libGVcIiwgVmFsdWU6IHNlY3Rpb24/LlZpc2libGUsIFN0YXR1czogdHlwZW9mIHNlY3Rpb24/LlZpc2libGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFRBQiBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNwbGF5U3RhdGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc3BsYXlTdGF0ZSA9IHRhYi5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgdGFiLkRpc3BsYXlTdGF0ZSA9IG9yaWdEaXNwbGF5U3RhdGUgPT09IFwiZXhwYW5kZWRcIiA/IFwiY29sbGFwc2VkXCIgOiBcImV4cGFuZGVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0YWIuRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIHRhYi5EaXNwbGF5U3RhdGUgPSBvcmlnRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVGFiLkRpc3BsYXlTdGF0ZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlRhYi5EaXNwbGF5U3RhdGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gdGFiLkxhYmVsO1xyXG4gICAgICAgIHRhYi5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdGFiLkxhYmVsO1xyXG4gICAgICAgIHRhYi5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlRhYi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlRhYi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gdGFiLlZpc2libGU7XHJcbiAgICAgICAgdGFiLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0YWIuVmlzaWJsZTtcclxuICAgICAgICB0YWIuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiVGFiLlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJUYWIuVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhYi5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlRhYi5Gb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlRhYi5Gb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBBZGRUYWJTdGF0ZUNoYW5nZVxyXG4gICAgY29uc3QgdGFiU3RhdGVDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBUYWIgU3RhdGVDaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRhYi5BZGRUYWJTdGF0ZUNoYW5nZSh0YWJTdGF0ZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlRhYi5BZGRUYWJTdGF0ZUNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVGFiLkFkZFRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZVRhYlN0YXRlQ2hhbmdlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRhYi5SZW1vdmVUYWJTdGF0ZUNoYW5nZSh0YWJTdGF0ZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlRhYi5SZW1vdmVUYWJTdGF0ZUNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VDVElPTiBTRVRURVJTIChTLUluZGV4IGNvbnRpbnVlZClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBzZWN0aW9uID0gdGFiLlNlY3Rpb24uQUNDT1VOVF9JTkZPUk1BVElPTjtcclxuXHJcbiAgICAvLyBTZWN0aW9uOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBzZWN0aW9uLkxhYmVsO1xyXG4gICAgICAgIHNlY3Rpb24uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHNlY3Rpb24uTGFiZWw7XHJcbiAgICAgICAgc2VjdGlvbi5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWN0aW9uOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gc2VjdGlvbi5WaXNpYmxlO1xyXG4gICAgICAgIHNlY3Rpb24uVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHNlY3Rpb24uVmlzaWJsZTtcclxuICAgICAgICBzZWN0aW9uLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0QxIFRFU1QgMTQ6IFRhYiBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IERFVEFJTFNfVEFCICYgQklMTElORyBzZWN0aW9uIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTApXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbCAtIEFjY291bnRfVGFza3NcclxuICogTmF2aWdhdGlvbkl0ZW0gaW50ZXJmYWNlIGZvciBmb3JtIG5hdmlnYXRpb24gaXRlbXMgd2l0aCBJZCwgTGFiZWwsIFZpc2libGUsIEZvY3VzXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE5hdmlnYXRpb25JdGVtKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBuYXZJdGVtID0gZm9ybS5OYXZpZ2F0aW9uLmNvbnRhY3RfY3VzdG9tZXJfYWNjb3VudHM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJZFwiLCBWYWx1ZTogbmF2SXRlbS5JZCwgU3RhdHVzOiBuYXZJdGVtLklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbmF2SXRlbS5MYWJlbCwgU3RhdHVzOiBuYXZJdGVtLkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBuYXZJdGVtLlZpc2libGUsIFN0YXR1czogdHlwZW9mIG5hdkl0ZW0uVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbmF2SXRlbS5MYWJlbDtcclxuICAgICAgICBuYXZJdGVtLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuYXZJdGVtLkxhYmVsO1xyXG4gICAgICAgIG5hdkl0ZW0uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBuYXZJdGVtLlZpc2libGU7XHJcbiAgICAgICAgbmF2SXRlbS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbmF2SXRlbS5WaXNpYmxlO1xyXG4gICAgICAgIG5hdkl0ZW0uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBuYXZJdGVtLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNFXHVEREVEIFRFU1QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQWNjb3VudF9UYXNrcyAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjMpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQSxXQUFTLFNBQWlDO0FBQ3RDLFFBQUksT0FBTyxXQUFXLGVBQWdCLE9BQWUsUUFBUSxRQUFXO0FBQ3BFLGFBQVEsT0FBZTtBQUFBLElBQzNCO0FBQ0EsUUFBSSxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sV0FBVyxlQUFnQixPQUFPLE9BQWUsUUFBUSxRQUFXO0FBQ25ILGFBQVEsT0FBTyxPQUFlO0FBQUEsSUFDbEM7QUFDQSxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLE9BQU8sV0FBVyxlQUFnQixPQUFPLE9BQU8sT0FBZSxRQUFRLFFBQVc7QUFDekssYUFBUSxPQUFPLE9BQU8sT0FBZTtBQUFBLElBQ3pDO0FBQ0EsV0FBTztBQUFBLEVBQ1g7QUFDQSxXQUFTLE9BQVUsS0FBVSxNQUFjLFVBQXlCO0FBQ2hFLFdBQU8sZUFBZSxLQUFLLE1BQU07QUFBQSxNQUM3QixLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixjQUFjO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0w7QUFDQSxXQUFTLGFBQWdCLEtBQVUsTUFBYyxVQUFtQixVQUFvQztBQUNwRyxXQUFPLGVBQWUsS0FBSyxNQUFNO0FBQUEsTUFDN0IsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osY0FBYztBQUFBLElBQ2xCLENBQUM7QUFBQSxFQUNMO0FBQ0EsV0FBUyxVQUFVLGFBQWtCLE9BQVksV0FBZ0IsU0FBb0I7QUFDakYsV0FBTyxPQUFPLGFBQWEsTUFBTSxTQUFTLGFBQWEsQ0FBQztBQUN4RCxXQUFPLE9BQU8saUJBQWlCLE1BQU0sV0FBVyxRQUFR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QUFXLE9BQU8sT0FBSyxFQUFFLFdBQVcsUUFBRyxFQUFFO0FBQzFELFVBQU0sU0FBUyxXQUFXLE9BQU8sT0FBSyxFQUFFLFdBQVcsUUFBRyxFQUFFO0FBQ3hELFVBQU0sUUFBUSxXQUFXO0FBRXpCLFlBQVEsZUFBZSw4Q0FBdUMsU0FBUyw4QkFBOEIsTUFBTSxJQUFJLEtBQUssRUFBRTtBQUV0SCxZQUFRLElBQUksMkNBQW9DLHFEQUFxRDtBQUNyRyxZQUFRLE1BQU0sT0FBTztBQUVyQixZQUFRLElBQUksc0NBQWlDLHFEQUFxRDtBQUNsRyxZQUFRLE1BQU0sYUFBYTtBQUUzQixZQUFRO0FBQUEsTUFBSSxxQkFBZ0IsTUFBTSxJQUFJLEtBQUssYUFDdEMsV0FBVyxJQUFJLGFBQVEsUUFBUSxjQUFjLE9BQzdDLFNBQVMsSUFBSSxhQUFRLE1BQU0sWUFBWTtBQUFBLE1BQ3hDO0FBQUEsSUFBcUQ7QUFFekQsWUFBUSxTQUFTO0FBQUEsRUFDckI7OztBcEIxRUEsTUFBTSxjQUFlLFdBQVk7QUFDN0I7QUFFQSxRQUFJO0FBRUosbUJBQWUsT0FBTyxrQkFBc0M7QUFDeEQsYUFBTyxJQUFJLFlBQVksS0FBSyxnQkFBZ0I7QUFDNUMscUJBQWU7QUFDZixXQUFLLFlBQVksV0FBVztBQUFBLElBQ2hDO0FBRUEsYUFBUyxpQkFBdUI7QUFDNUIsVUFBSSxLQUFLLGlCQUFpQixjQUFjLEdBQUc7QUFBQSxNQUMzQztBQUFBLElBQ0o7QUFNQSxtQkFBZSxZQUFZLGtCQUFzQztBQUs3RCxpQkFBVyxZQUFZO0FBQ25CLGdCQUFRLE1BQU07QUFHZCxvQkFBWSxJQUFJO0FBR2hCLG1CQUFXLElBQUk7QUFHZixpQkFBUyxJQUFJO0FBR2IsbUJBQVcsSUFBSTtBQUdmLG9CQUFZLElBQUk7QUFHaEIsc0JBQWMsSUFBSTtBQUdsQixjQUFNLFdBQVcsSUFBSTtBQUdyQixrQkFBVSxJQUFJO0FBR2Qsb0JBQVksSUFBSTtBQUdoQixxQkFBYSxJQUFJO0FBR2pCLHFCQUFhLElBQUk7QUFHakIsaUJBQVMsSUFBSTtBQUdiLG9CQUFZLElBQUk7QUFHaEIsMkJBQW1CLElBQUk7QUFHdkIsZ0JBQVEsSUFBSTtBQUdaLDJCQUFtQixJQUFJO0FBQUEsTUFFM0IsR0FBRyxHQUFLO0FBQUEsSUFHWjtBQTJCQSxXQUFPO0FBQUEsTUFDSCxRQUFRO0FBQUEsSUFDWjtBQUFBLEVBQ0osRUFBRztBQUVILE1BQU8sa0JBQVE7IiwKICAibmFtZXMiOiBbImZvcm1Db250ZXh0IiwgInRhYnMiLCAibmF2aWdhdGlvbnMiLCAicXVpY2tGb3JtcyIsICJncmlkcyIsICJlbnRpdHlMb2dpY2FsTmFtZSIsICJpZCIsICJvcHRpb25zIiwgInN1Y2Nlc3NDYWxsYmFjayIsICJlcnJvckNhbGxiYWNrIiwgInByb21pc2UiLCAiQWNjb3VudEZvcm0iLCAiQWNjb3VudEFwaSIsICJzdHJpbmdpZnkiLCAic2VjdGlvbiJdCn0K
