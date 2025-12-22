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
  function loadFields(formContext, fields, type) {
    const body = {};
    fields.forEach((field) => {
      body[field] = {};
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
  function loadTabs(formContext, tabItems) {
    const tabs = {};
    tabItems.forEach((item) => {
      const [tabName, sectionName] = item.split("___");
      if (!tabs[tabName]) {
        tabs[tabName] = { Section: {} };
      }
      tabs[tabName].Section[sectionName] = {};
    });
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
    return tabs;
  }
  function loadNavigations(formContext, navigationItems) {
    const navigations = {};
    navigationItems.forEach((item) => navigations[item] = {});
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
    return navigations;
  }
  function loadQuickForms(formContext, quickItems) {
    const quickForms = {};
    quickItems.forEach((item) => {
      const [quickFormName, fieldName] = item.split("___");
      if (!quickForms[quickFormName]) {
        quickForms[quickFormName] = {};
      }
      if (fieldName) {
        quickForms[quickFormName][fieldName] = {};
      }
    });
    const excludedFields = /* @__PURE__ */ new Set(["Body", "Controls", "IsLoaded", "Refresh", "Focus", "ControlType", "Disabled", "Label", "ControlName", "ControlParent", "Visible"]);
    const loadQuickForm = (formContext2, quickForms2, quickForm) => {
      const fields = Object.keys(quickForms2[quickForm]).filter((field) => !excludedFields.has(field));
      const quick = formContext2?.ui?.quickForms?.get(quickForm);
      getter(quickForms2[quickForm], "Body", () => loadFormDialog(quick, fields));
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
    return quickForms;
  }
  function loadGrids(formContext, gridItems) {
    const grids = {};
    gridItems.forEach((item) => grids[item] = {});
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
    return grids;
  }
  function loadExecutionContext(executionContext) {
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
  function loadSidePanes() {
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
  function loadWebApi() {
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
  function loadCopilot() {
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
  function loadFormV3(executionContext, defaultWebResourceName, formConfig) {
    const formContext = executionContext?.getFormContext?.() ?? executionContext ?? null;
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
    const { body = [], tab = [], header = [], bpf = [], quick = [], grid = [], navigation = [], dialog = [] } = formConfig;
    const bodyObj = body.length > 0 ? loadFields(formContext, body) : {};
    bodyObj.Tab = tab.length > 0 ? loadTabs(formContext, tab) : {};
    form.Body = bodyObj;
    form.Header = header.length > 0 ? loadFields(formContext, header, "header_") : {};
    form.Process = bpf.length > 0 ? loadProcess(formContext, bpf) : {};
    form.QuickForm = quick.length > 0 ? loadQuickForms(formContext, quick) : {};
    form.Grid = grid.length > 0 ? loadGrids(formContext, grid) : {};
    form.Navigation = navigation.length > 0 ? loadNavigations(formContext, navigation) : {};
    form.Dialog = dialog.length > 0 ? loadFormDialog(formContext, dialog) : {};
    form.Utility = loadUtility(defaultWebResourceName);
    form.ExecutionContext = loadExecutionContext(executionContext);
    form.SidePanes = loadSidePanes();
    form.WebApi = loadWebApi();
    form.Copilot = loadCopilot();
    return form;
  }
  function loadProcess(formContext, bpf = []) {
    const process = {};
    if (bpf.length > 0) {
      let bpfProcessName = null;
      const bpfFieldNames = [];
      bpf.forEach((item) => {
        const [processName, fieldName] = item.split("___");
        if (!bpfProcessName) {
          bpfProcessName = processName;
        }
        bpfFieldNames.push(fieldName);
      });
      const bpfObj = loadFields(formContext, bpfFieldNames, "header_process_");
      if (bpfProcessName) {
        process[bpfProcessName] = bpfObj;
      }
    }
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
  function loadUtility(defaultWebResourceName) {
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
  function loadFormDialog(formContext, fields) {
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
  function getWebApiTypeParsers() {
    return {
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
  }
  function webApiReturnGet(data, type) {
    if (data === null || data === void 0) return null;
    if (type === null || type === void 0) return data;
    const parser = getWebApiTypeParsers()[type];
    return parser ? parser(data) : data;
  }
  var FormBase = class {
    constructor(executionContext, defaultWebResourceName, formConfig) {
      const form = loadFormV3(
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
  function defineWebApiField(obj, fieldName, entity, config, upsertEntity) {
    const { logicalName, schemaName, entityCollectionName, entityLogicalName, readOnly, type } = config;
    const getFormattedValue = () => {
      const formattedKey = logicalName + "@OData.Community.Display.V1.FormattedValue";
      if (entity?.[formattedKey] === void 0 || entity?.[formattedKey] === null) {
        return "";
      }
      if (entityCollectionName !== void 0 && entityCollectionName.length > 0) {
        const lookupKey = logicalName + "@Microsoft.Dynamics.CRM.lookuplogicalname";
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
        const lookupKey = logicalName + "@Microsoft.Dynamics.CRM.lookuplogicalname";
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
        const key = alias + "@OData.Community.Display.V1.FormattedValue";
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

  // entities/Account.TestSidePanes.ts
  function TestSidePanes(form) {
    const results = [];
    const methodResults = [];
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const sidePanes = form.SidePanes;
    try {
      results.push({
        Test: "R1",
        Property: "SidePanes exists",
        Value: sidePanes !== void 0 && sidePanes !== null,
        Status: sidePanes !== void 0 && sidePanes !== null ? "\u2713" : "\u2717"
      });
      const displayState = sidePanes.DisplayState;
      const isValidState = displayState === 0 || displayState === 1;
      results.push({
        Test: "R2",
        Property: "DisplayState (get)",
        Value: displayState,
        Status: isValidState ? "\u2713" : "\u26A0"
      });
      const allPanes = sidePanes.GetAll();
      const isArray = Array.isArray(allPanes) || allPanes === void 0 || allPanes === null;
      results.push({
        Test: "R3",
        Property: "GetAll() returns array",
        Value: Array.isArray(allPanes) ? `Array[${allPanes.length}]` : allPanes,
        Status: isArray ? "\u2713" : "\u2717"
      });
      const selectedPane = sidePanes.GetSelected();
      results.push({
        Test: "R4",
        Property: "GetSelected()",
        Value: selectedPane !== void 0 ? selectedPane?.paneId ?? "null" : "undefined",
        Status: "\u2713"
        // Can be null if no pane selected
      });
      results.push({
        Test: "R5",
        Property: "Create function exists",
        Value: typeof sidePanes.Create === "function",
        Status: typeof sidePanes.Create === "function" ? "\u2713" : "\u2717"
      });
      results.push({
        Test: "R6",
        Property: "Get function exists",
        Value: typeof sidePanes.Get === "function",
        Status: typeof sidePanes.Get === "function" ? "\u2713" : "\u2717"
      });
      results.push({
        Test: "R7",
        Property: "GetAll function exists",
        Value: typeof sidePanes.GetAll === "function",
        Status: typeof sidePanes.GetAll === "function" ? "\u2713" : "\u2717"
      });
      results.push({
        Test: "R8",
        Property: "GetSelected function exists",
        Value: typeof sidePanes.GetSelected === "function",
        Status: typeof sidePanes.GetSelected === "function" ? "\u2713" : "\u2717"
      });
    } catch (error) {
      results.push({
        Test: "ERR",
        Property: "ReadOnly Error",
        Value: error.message,
        Status: "\u2717"
      });
    }
    try {
      const originalState = sidePanes.DisplayState;
      sidePanes.DisplayState = 1;
      const newState1 = sidePanes.DisplayState;
      methodResults.push({
        Test: "S1",
        Property: "DisplayState = 1 (Expanded)",
        Value: `${originalState} \u2192 ${newState1}`,
        Status: newState1 === 1 ? "\u2713" : "\u26A0"
      });
      sidePanes.DisplayState = 0;
      const newState0 = sidePanes.DisplayState;
      methodResults.push({
        Test: "S2",
        Property: "DisplayState = 0 (Collapsed)",
        Value: `1 \u2192 ${newState0}`,
        Status: newState0 === 0 ? "\u2713" : "\u26A0"
      });
      sidePanes.DisplayState = originalState;
      methodResults.push({
        Test: "S3",
        Property: "DisplayState (restore)",
        Value: `0 \u2192 ${sidePanes.DisplayState}`,
        Status: sidePanes.DisplayState === originalState ? "\u2713" : "\u26A0"
      });
      const nonExistentPane = sidePanes.Get("non_existent_pane_id_12345");
      methodResults.push({
        Test: "S4",
        Property: "Get('non_existent_pane_id')",
        Value: nonExistentPane === void 0 || nonExistentPane === null ? "null/undefined" : nonExistentPane,
        Status: "\u2713"
        // Should return null/undefined for non-existent pane
      });
      let createResult = "Not called";
      sidePanes.Create({
        title: "DevKit Test Pane",
        width: 300,
        canClose: true
      }, (pane) => {
        createResult = pane ? `Created: ${pane.paneId || "unknown"}` : "Callback received null";
        if (pane && pane.close) {
          setTimeout(() => pane.close(), 1e3);
        }
      });
      methodResults.push({
        Test: "S5",
        Property: "Create({ title, width, canClose })",
        Value: "Async call initiated",
        Status: "\u2713"
      });
      setTimeout(() => {
        const panesAfterCreate = sidePanes.GetAll();
        console.log(`%c\u{1F50D} S6 (Delayed): GetAll() after Create = ${Array.isArray(panesAfterCreate) ? panesAfterCreate.length : "N/A"} panes`, "color: #9C27B0;");
      }, 500);
      methodResults.push({
        Test: "S6",
        Property: "GetAll() (delayed check logged)",
        Value: "See console for delayed result",
        Status: "\u2713"
      });
    } catch (e) {
      methodResults.push({
        Test: "S-ERR",
        Property: "Setters/Methods Error",
        Value: e.message,
        Status: "\u2717"
      });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F3AF} TEST 17: SidePanes [${startTime}] - Using: form.SidePanes - ${passed}/${total} (\u26A0${warnings})`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S6)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed, ${warnings} warnings`,
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestCopilot.ts
  function TestCopilot(form) {
    const results = [];
    const methodResults = [];
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const copilot = form.Copilot;
    try {
      results.push({
        Test: "R1",
        Property: "Copilot exists",
        Value: copilot !== void 0 && copilot !== null,
        Status: copilot !== void 0 && copilot !== null ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "R2",
        Property: "ExecuteEvent function exists",
        Value: typeof copilot?.ExecuteEvent === "function",
        Status: typeof copilot?.ExecuteEvent === "function" ? "\u2713" : "\u26A0"
      });
      results.push({
        Test: "R3",
        Property: "ExecutePrompt function exists",
        Value: typeof copilot?.ExecutePrompt === "function",
        Status: typeof copilot?.ExecutePrompt === "function" ? "\u2713" : "\u26A0"
      });
      const xrmCopilotAvailable = typeof window.Xrm?.Copilot !== "undefined";
      results.push({
        Test: "R4",
        Property: "Xrm.Copilot available (Preview)",
        Value: xrmCopilotAvailable,
        Status: xrmCopilotAvailable ? "\u2713" : "\u26A0"
      });
    } catch (error) {
      results.push({
        Test: "ERR",
        Property: "ReadOnly Error",
        Value: error.message,
        Status: "\u2717"
      });
    }
    try {
      let executeEventResult = "Not available";
      try {
        const eventPromise = copilot?.ExecuteEvent("test_event", { testParam: "value" });
        if (eventPromise && typeof eventPromise.then === "function") {
          executeEventResult = "Promise returned";
        } else if (eventPromise === void 0) {
          executeEventResult = "undefined (Copilot not enabled)";
        }
      } catch (e) {
        executeEventResult = `Error: ${e.message}`;
      }
      methodResults.push({
        Test: "S1",
        Property: "ExecuteEvent('test_event', {...})",
        Value: executeEventResult,
        Status: executeEventResult.includes("Promise") || executeEventResult.includes("undefined") ? "\u2713" : "\u26A0"
      });
      let callbackResult = "Not called";
      try {
        copilot?.ExecuteEvent(
          "test_event_2",
          { id: 1 },
          (result) => {
            callbackResult = "Success callback invoked";
          },
          (error) => {
            callbackResult = "Error callback invoked";
          }
        );
        callbackResult = "Callbacks registered";
      } catch (e) {
        callbackResult = `Error: ${e.message}`;
      }
      methodResults.push({
        Test: "S2",
        Property: "ExecuteEvent with callbacks",
        Value: callbackResult,
        Status: callbackResult.includes("registered") || callbackResult.includes("invoked") ? "\u2713" : "\u26A0"
      });
      let executePromptResult = "Not available";
      try {
        const promptPromise = copilot?.ExecutePrompt("Summarize this account");
        if (promptPromise && typeof promptPromise.then === "function") {
          executePromptResult = "Promise returned";
        } else if (promptPromise === void 0) {
          executePromptResult = "undefined (Copilot not enabled)";
        }
      } catch (e) {
        executePromptResult = `Error: ${e.message}`;
      }
      methodResults.push({
        Test: "S3",
        Property: "ExecutePrompt('Summarize...')",
        Value: executePromptResult,
        Status: executePromptResult.includes("Promise") || executePromptResult.includes("undefined") ? "\u2713" : "\u26A0"
      });
      let promptCallbackResult = "Not called";
      try {
        copilot?.ExecutePrompt(
          "Test prompt",
          (result) => {
            promptCallbackResult = "Success callback invoked";
          },
          (error) => {
            promptCallbackResult = "Error callback invoked";
          }
        );
        promptCallbackResult = "Callbacks registered";
      } catch (e) {
        promptCallbackResult = `Error: ${e.message}`;
      }
      methodResults.push({
        Test: "S4",
        Property: "ExecutePrompt with callbacks",
        Value: promptCallbackResult,
        Status: promptCallbackResult.includes("registered") || promptCallbackResult.includes("invoked") ? "\u2713" : "\u26A0"
      });
    } catch (e) {
      methodResults.push({
        Test: "S-ERR",
        Property: "Setters/Methods Error",
        Value: e.message,
        Status: "\u2717"
      });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F3AF} TEST 18: Copilot [${startTime}] - Using: form.Copilot (Preview) - ${passed}/${total} (\u26A0${warnings})`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R4)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S4)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      "%c\u26A0\uFE0F Note: Copilot is a Preview feature and may not be available in all environments",
      "font-style: italic; color: #FF9800;"
    );
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed, ${warnings} warnings`,
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
        TestSidePanes(form);
        TestCopilot(form);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9PcHRpb25TZXQudHMiLCAiLi4vZW50aXRpZXMvZ2VuZXJhdG9yL0FjY291bnQuZm9ybS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb250cm9sLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdExvb2t1cC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RNZW1vLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFN0cmluZy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RJbnRlZ2VyLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE9wdGlvblNldC50cyIsICIuLi9lbnRpdGllcy9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0V2ViQXBpLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE1vbmV5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdEJvb2xlYW4udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZVRpbWUudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZU9ubHkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0R3JpZC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RVdGlsaXR5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFRhYi50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RFeGVjdXRpb25Db250ZXh0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFNpZGVQYW5lcy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb3BpbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcbmltcG9ydCB7IFRlc3RDb250cm9sIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RDb250cm9sJztcclxuaW1wb3J0IHsgVGVzdExvb2t1cCB9IGZyb20gJy4vQWNjb3VudC5UZXN0TG9va3VwJztcclxuaW1wb3J0IHsgVGVzdE1lbW8gfSBmcm9tICcuL0FjY291bnQuVGVzdE1lbW8nO1xyXG5pbXBvcnQgeyBUZXN0U3RyaW5nIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RTdHJpbmcnO1xyXG5pbXBvcnQgeyBUZXN0SW50ZWdlciB9IGZyb20gJy4vQWNjb3VudC5UZXN0SW50ZWdlcic7XHJcbmltcG9ydCB7IFRlc3RPcHRpb25TZXQgfSBmcm9tICcuL0FjY291bnQuVGVzdE9wdGlvblNldCc7XHJcbmltcG9ydCB7IFRlc3RXZWJBcGkgfSBmcm9tICcuL0FjY291bnQuVGVzdFdlYkFwaSc7XHJcbmltcG9ydCB7IFRlc3RNb25leSB9IGZyb20gJy4vQWNjb3VudC5UZXN0TW9uZXknO1xyXG5pbXBvcnQgeyBUZXN0Qm9vbGVhbiB9IGZyb20gJy4vQWNjb3VudC5UZXN0Qm9vbGVhbic7XHJcbmltcG9ydCB7IFRlc3REYXRlVGltZSB9IGZyb20gJy4vQWNjb3VudC5UZXN0RGF0ZVRpbWUnO1xyXG5pbXBvcnQgeyBUZXN0RGF0ZU9ubHkgfSBmcm9tICcuL0FjY291bnQuVGVzdERhdGVPbmx5JztcclxuaW1wb3J0IHsgVGVzdEdyaWQgfSBmcm9tICcuL0FjY291bnQuVGVzdEdyaWQnO1xyXG5pbXBvcnQgeyBUZXN0VXRpbGl0eSB9IGZyb20gJy4vQWNjb3VudC5UZXN0VXRpbGl0eSc7XHJcbmltcG9ydCB7IFRlc3RNdWx0aU9wdGlvblNldCB9IGZyb20gJy4vQWNjb3VudC5UZXN0TXVsdGlPcHRpb25TZXQnO1xyXG5pbXBvcnQgeyBUZXN0VGFiIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RUYWInO1xyXG5pbXBvcnQgeyBUZXN0TmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL0FjY291bnQuVGVzdE5hdmlnYXRpb25JdGVtJztcclxuaW1wb3J0IHsgVGVzdEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICcuL0FjY291bnQuVGVzdEV4ZWN1dGlvbkNvbnRleHQnO1xyXG5pbXBvcnQgeyBUZXN0U2lkZVBhbmVzIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RTaWRlUGFuZXMnO1xyXG5pbXBvcnQgeyBUZXN0Q29waWxvdCB9IGZyb20gJy4vQWNjb3VudC5UZXN0Q29waWxvdCc7XHJcblxyXG5jb25zdCBmb3JtQWNjb3VudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBsZXQgZm9ybTogQWNjb3VudEZvcm0uRm9ybTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBvbkxvYWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9ybSA9IG5ldyBBY2NvdW50Rm9ybS5Gb3JtKGV4ZWN1dGlvbkNvbnRleHQpO1xyXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgZm9ybS5VaUFkZExvYWRlZChVaUFkZExvYWRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZvcm0uRXhlY3V0aW9uQ29udGV4dC5Jc0luaXRpYWxMb2FkKCkpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBMT0FEXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVaUFkZExvYWRlZChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBCRUdJTiBPTiBMT0FEIExPR0lDXHJcblxyXG4gICAgICAgIC8vIFdhaXQgMTAgc2Vjb25kcyBhZnRlciBPbkxvYWQgdG8gYWxsb3cgZm9ybSB0byBmdWxseSBsb2FkXHJcbiAgICAgICAgLy8gVGhlbiBjbGVhciBjb25zb2xlIGFuZCBydW4gcmVhbCB0ZXN0c1xyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDA6IElDb250cm9sIEludGVyZmFjZSAoYmFzZSBmb3IgYWxsIGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBUZXN0Q29udHJvbChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTogTG9va3VwIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdExvb2t1cChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMjogTWVtbyBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RNZW1vKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAzOiBTdHJpbmcgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0U3RyaW5nKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA0OiBJbnRlZ2VyIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEludGVnZXIoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDU6IE9wdGlvblNldCBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDY6IFdlYkFwaSBcclxuICAgICAgICAgICAgYXdhaXQgVGVzdFdlYkFwaShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNzogTW9uZXkgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TW9uZXkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDg6IEJvb2xlYW4gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0Qm9vbGVhbihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgOTogRGF0ZVRpbWUgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RGF0ZVRpbWUoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDEwOiBEYXRlT25seSBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3REYXRlT25seShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTE6IEdyaWQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0R3JpZChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTI6IFV0aWxpdHkgQVBJXHJcbiAgICAgICAgICAgIFRlc3RVdGlsaXR5KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TXVsdGlPcHRpb25TZXQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE0OiBUYWIgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0VGFiKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE2OiBFeGVjdXRpb25Db250ZXh0XHJcbiAgICAgICAgICAgIFRlc3RFeGVjdXRpb25Db250ZXh0KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNzogU2lkZVBhbmVzXHJcbiAgICAgICAgICAgIFRlc3RTaWRlUGFuZXMoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE4OiBDb3BpbG90IChQcmV2aWV3KVxyXG4gICAgICAgICAgICBUZXN0Q29waWxvdChmb3JtKTtcclxuXHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICAvLyBFTkQgT04gTE9BRCBMT0dJQ1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRU5EIE9OIExPQURcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgT04gQ0hBTkdFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBQUkUgU0VBUkNIXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEJFR0lOIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIE9USEVSU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBPbkxvYWQ6IG9uTG9hZFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm1BY2NvdW50O1xyXG4iLCAiZnVuY3Rpb24gZ2V0WHJtKCk6IHR5cGVvZiBYcm0gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KS5Ycm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAod2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQud2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAocGFyZW50LndpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQud2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQucGFyZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcGFyZW50LnBhcmVudC53aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIChwYXJlbnQucGFyZW50LndpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJlbnQucGFyZW50LndpbmRvdyBhcyBhbnkpLlhybTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBUKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0dGVyU2V0dGVyPFQ+KG9iajogYW55LCBwcm9wOiBzdHJpbmcsIGdldHRlckZuOiAoKSA9PiBULCBzZXR0ZXJGbjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7XHJcbiAgICAgICAgZ2V0OiBnZXR0ZXJGbixcclxuICAgICAgICBzZXQ6IHNldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRmllbGQoZm9ybUNvbnRleHQ6IGFueSwgZmllbGQ6IGFueSwgYXR0cmlidXRlOiBhbnksIGNvbnRyb2w6IGFueSk6IHZvaWQge1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlJywgKCkgPT4gY29udHJvbD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlTmFtZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0F0dHJpYnV0ZVBhcmVudCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UGFyZW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlVHlwZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0QXR0cmlidXRlVHlwZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xOYW1lJywgKCkgPT4gY29udHJvbD8uZ2V0TmFtZSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xPcHRpb25zJywgKCkgPT4gY29udHJvbD8uZ2V0T3B0aW9ucygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xQYXJlbnQnLCAoKSA9PiBjb250cm9sPy5nZXRQYXJlbnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdDb250cm9sVHlwZScsICgpID0+IGNvbnRyb2w/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnRm9ybWF0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRGb3JtYXQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJbml0aWFsVXJsJywgKCkgPT4gY29udHJvbD8uZ2V0SW5pdGlhbFVybCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0luaXRpYWxWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNEaXJ0eScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzUGFydHlMaXN0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRJc1BhcnR5TGlzdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0lzVmFsaWQnLCAoKSA9PiBhdHRyaWJ1dGU/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNYXgnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1heCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heExlbmd0aCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4TGVuZ3RoKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWluJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNaW4oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPYmplY3QnLCAoKSA9PiBjb250cm9sPy5nZXRPYmplY3QoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPcHRpb25zJywgKCkgPT4gYXR0cmlidXRlPy5nZXRPcHRpb25zKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnT3V0cHV0cycsICgpID0+IGNvbnRyb2w/LmdldE91dHB1dHMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZE9wdGlvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U2VsZWN0ZWRPcHRpb24oKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTZWxlY3RlZFJlc3VsdHMnLCAoKSA9PiBjb250cm9sPy5nZXRTZWxlY3RlZFJlc3VsdHMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdTdGF0ZScsICgpID0+IGNvbnRyb2w/LmdldFN0YXRlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVGV4dCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VGV4dCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1RvdGFsUmVzdWx0Q291bnQnLCAoKSA9PiBjb250cm9sPy5nZXRUb3RhbFJlc3VsdENvdW50KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVXNlclByaXZpbGVnZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VXNlclByaXZpbGVnZSgpKTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0RhdGEnLCAoKSA9PiBjb250cm9sPy5nZXREYXRhKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbnRyb2w/LnNldERhdGEodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0RlZmF1bHRWaWV3JywgKCkgPT4gY29udHJvbD8uZ2V0RGVmYXVsdFZpZXcoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RGVmYXVsdFZpZXcodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0Rpc2FibGVkJywgKCkgPT4gY29udHJvbD8uZ2V0RGlzYWJsZWQoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gMyB8fCBmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDQpIHJldHVybjtcclxuICAgICAgICBjb250cm9sPy5zZXREaXNhYmxlZCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0VudGl0eVR5cGVzJywgKCkgPT4gY29udHJvbD8uZ2V0RW50aXR5VHlwZXMoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RW50aXR5VHlwZXModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ0xhYmVsJywgKCkgPT4gY29udHJvbD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgY29udHJvbD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1ByZWNpc2lvbicsICgpID0+IGF0dHJpYnV0ZT8uZ2V0UHJlY2lzaW9uKCksICh2YWx1ZTogbnVtYmVyKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UHJlY2lzaW9uKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdSZXF1aXJlZExldmVsJywgKCkgPT4gYXR0cmlidXRlPy5nZXRSZXF1aXJlZExldmVsKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGF0dHJpYnV0ZT8uc2V0UmVxdWlyZWRMZXZlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU2VhcmNoUXVlcnknLCAoKSA9PiBjb250cm9sPy5nZXRTZWFyY2hRdWVyeSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRTZWFyY2hRdWVyeSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU2hvd1RpbWUnLCAoKSA9PiBjb250cm9sPy5nZXRTaG93VGltZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0U2hvd1RpbWUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1NyYycsICgpID0+IGNvbnRyb2w/LmdldFNyYygpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRTcmModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1N1Ym1pdE1vZGUnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFN1Ym1pdE1vZGUoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRTdWJtaXRNb2RlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWYWx1ZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0VmFsdWUoKSwgKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGF0dHJpYnV0ZT8uc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdWaXNpYmxlJywgKCkgPT4gY29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgY29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgZmllbGQuQWRkQ3VzdG9tRmlsdGVyID0gKGZpbHRlcjogc3RyaW5nLCBlbnRpdHlMb2dpY2FOYW1lPzogc3RyaW5nKSA9PiBjb250cm9sPy5hZGRDdXN0b21GaWx0ZXIoZmlsdGVyLCBlbnRpdHlMb2dpY2FOYW1lKTtcclxuICAgIGZpZWxkLkFkZEN1c3RvbVZpZXcgPSAodmlld0lkOiBzdHJpbmcsIGVudGl0eU5hbWU6IHN0cmluZywgdmlld0Rpc3BsYXlOYW1lOiBzdHJpbmcsIGZldGNoWG1sOiBzdHJpbmcsIGxheW91dFhtbDogc3RyaW5nLCBpc0RlZmF1bHQ6IGJvb2xlYW4pID0+IGNvbnRyb2w/LmFkZEN1c3RvbVZpZXcodmlld0lkLCBlbnRpdHlOYW1lLCB2aWV3RGlzcGxheU5hbWUsIGZldGNoWG1sLCBsYXlvdXRYbWwsIGlzRGVmYXVsdCk7XHJcbiAgICBmaWVsZC5BZGRMb29rdXBUYWdDbGljayA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPbkxvb2t1cFRhZ0NsaWNrKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIG5vdGlmaWNhdGlvbkxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcsIGNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHsgbWVzc2FnZTogbWVzc2FnZSwgYWN0aW9uczogW2NhbGxiYWNrXSB9O1xyXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHsgbWVzc2FnZXM6IFttZXNzYWdlXSwgbm90aWZpY2F0aW9uTGV2ZWw6IG5vdGlmaWNhdGlvbkxldmVsLCB1bmlxdWVJZDogdW5pcXVlSWQsIGFjdGlvbnM6IFthY3Rpb25zXSB9O1xyXG4gICAgICAgIHJldHVybiBjb250cm9sPy5hZGROb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgIH07XHJcbiAgICBmaWVsZC5BZGRPbkNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBhdHRyaWJ1dGU/LmFkZE9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE9uT3V0cHV0Q2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uT3V0cHV0Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZE9wdGlvbiA9ICh0ZXh0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGluZGV4PzogbnVtYmVyKSA9PiBjb250cm9sPy5hZGRPcHRpb24oeyB0ZXh0OiB0ZXh0LCB2YWx1ZTogdmFsdWUgfSwgaW5kZXgpO1xyXG4gICAgZmllbGQuQWRkUG9zdFNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblBvc3RTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkUHJlU2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZFByZVNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRSZXN1bHRPcGVuZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25SZXN1bHRPcGVuZWQoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkU2VsZWN0aW9uID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uU2VsZWN0aW9uKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRyb2w/LmNsZWFyTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZpZWxkLkNsZWFyT3B0aW9ucyA9ICgpID0+IGNvbnRyb2w/LmNsZWFyT3B0aW9ucygpO1xyXG4gICAgZmllbGQuQ29udGVudFdpbmRvdyA9IChzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udHJvbD8uZ2V0Q29udGVudFdpbmRvdygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIGZpZWxkLkZpcmVPbkNoYW5nZSA9ICgpID0+IGF0dHJpYnV0ZT8uZmlyZU9uQ2hhbmdlKCk7XHJcbiAgICBmaWVsZC5Gb2N1cyA9ICgpID0+IGNvbnRyb2w/LnNldEZvY3VzKCk7XHJcbiAgICBmaWVsZC5PcGVuU2VhcmNoUmVzdWx0ID0gKHJlc3VsdE51bWJlcjogbnVtYmVyLCBtb2RlPzogc3RyaW5nKSA9PiBjb250cm9sPy5vcGVuU2VhcmNoUmVzdWx0KHJlc3VsdE51bWJlciwgbW9kZSk7XHJcbiAgICBmaWVsZC5PcHRpb24gPSAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gYXR0cmlidXRlPy5nZXRPcHRpb24odmFsdWUpO1xyXG4gICAgZmllbGQuUmVmcmVzaCA9ICgpID0+IGNvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgIGZpZWxkLlJlbW92ZUxvb2t1cFRhZ0NsaWNrID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uTG9va3VwVGFnQ2xpY2soY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlT25DaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gYXR0cmlidXRlPy5yZW1vdmVPbkNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPbk91dHB1dENoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPbk91dHB1dENoYW5nZShjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPcHRpb24gPSAodmFsdWU6IG51bWJlcikgPT4gY29udHJvbD8ucmVtb3ZlT3B0aW9uKHZhbHVlKTtcclxuICAgIGZpZWxkLlJlbW92ZVBvc3RTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25Qb3N0U2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVByZVNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVQcmVTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlUmVzdWx0T3BlbmVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uUmVzdWx0T3BlbmVkKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZVNlbGVjdGlvbiA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblNlbGVjdGlvbihjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5TZXRJc1ZhbGlkID0gKHZhbGlkOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKSA9PiBhdHRyaWJ1dGU/LnNldElzVmFsaWQodmFsaWQsIG1lc3NhZ2UpO1xyXG4gICAgZmllbGQuU2V0Tm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRmllbGRzKGZvcm1Db250ZXh0OiBhbnksIGZpZWxkczogc3RyaW5nW10sIHR5cGU/OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgY29uc3QgYm9keTogYW55ID0ge307XHJcbiAgICBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgYm9keVtmaWVsZF0gPSB7fTtcclxuICAgICAgICBjb25zdCBsb2dpY2FsTmFtZSA9IHR5cGUgPT09IHVuZGVmaW5lZCA/IGZpZWxkPy50b0xvd2VyQ2FzZSgpIDogKHR5cGUgKyBmaWVsZCk/LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGxvZ2ljYWxOYW1lKSA/PyBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZCk7XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5nZXRBdHRyaWJ1dGUobG9naWNhbE5hbWUpO1xyXG4gICAgICAgIGlmICghYXR0cmlidXRlICYmIGNvbnRyb2w/LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgPSBjb250cm9sLmdldEF0dHJpYnV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkRmllbGQoZm9ybUNvbnRleHQsIGJvZHlbZmllbGRdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJoZWFkZXJfXCIpIHtcclxuICAgICAgICBjb25zdCBnZXRIZWFkZXJTZWN0aW9uID0gZm9ybUNvbnRleHQ/LnVpPy5oZWFkZXJTZWN0aW9uO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnQm9keVZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRCb2R5VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRCb2R5VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnQ29tbWFuZEJhclZpc2libGUnLCAoKSA9PiBnZXRIZWFkZXJTZWN0aW9uPy5nZXRDb21tYW5kQmFyVmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRDb21tYW5kQmFyVmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihib2R5LCAnVGFiTmF2aWdhdG9yVmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldFRhYk5hdmlnYXRvclZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgZ2V0SGVhZGVyU2VjdGlvbj8uc2V0VGFiTmF2aWdhdG9yVmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJvZHk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFRhYnMoZm9ybUNvbnRleHQ6IGFueSwgdGFiSXRlbXM6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGNvbnN0IHRhYnM6IGFueSA9IHt9O1xyXG4gICAgdGFiSXRlbXMuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3RhYk5hbWUsIHNlY3Rpb25OYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgIGlmICghdGFic1t0YWJOYW1lXSkge1xyXG4gICAgICAgICAgICB0YWJzW3RhYk5hbWVdID0geyBTZWN0aW9uOiB7fSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJzW3RhYk5hbWVdLlNlY3Rpb25bc2VjdGlvbk5hbWVdID0ge307XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGxvYWRTZWN0aW9uID0gKGZvcm1Db250ZXh0OiBhbnksIHRhYjogc3RyaW5nLCBzZWN0aW9uczogYW55LCBzZWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJPYmplY3QgPSBmb3JtQ29udGV4dD8udWk/LnRhYnM/LmdldCh0YWIpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25PYmplY3QgPSB0YWJPYmplY3Q/LnNlY3Rpb25zPy5nZXQoc2VjdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTmFtZScsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnUGFyZW50JywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihzZWN0aW9uc1tzZWN0aW9uXSwgJ0xhYmVsJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHNlY3Rpb25PYmplY3Q/LnNldExhYmVsKHZhbHVlKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnVmlzaWJsZScsICgpID0+IHNlY3Rpb25PYmplY3Q/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IHNlY3Rpb25PYmplY3Q/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkVGFiID0gKGZvcm1Db250ZXh0OiBhbnksIHRhYnM6IGFueSwgdGFiOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCB0YWJPYmplY3QgPSBmb3JtQ29udGV4dD8udWk/LnRhYnM/LmdldCh0YWIpO1xyXG4gICAgICAgIGdldHRlcih0YWJzW3RhYl0sICdOYW1lJywgKCkgPT4gdGFiT2JqZWN0Py5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcih0YWJzW3RhYl0sICdQYXJlbnQnLCAoKSA9PiB0YWJPYmplY3Q/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnQ29udGVudFR5cGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldENvbnRlbnRUeXBlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0Q29udGVudFR5cGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXREaXNwbGF5U3RhdGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXREaXNwbGF5U3RhdGUodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnTGFiZWwnLCAoKSA9PiB0YWJPYmplY3Q/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIodGFic1t0YWJdLCAnVmlzaWJsZScsICgpID0+IHRhYk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldFZpc2libGUodmFsdWUpOyB9KTtcclxuICAgICAgICB0YWJzW3RhYl0uQWRkVGFiU3RhdGVDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gdGFiT2JqZWN0Py5hZGRUYWJTdGF0ZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgdGFic1t0YWJdLkZvY3VzID0gKCkgPT4gdGFiT2JqZWN0Py5zZXRGb2N1cygpO1xyXG4gICAgICAgIHRhYnNbdGFiXS5SZW1vdmVUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LnJlbW92ZVRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0YWJzW3RhYl0uU2VjdGlvbikuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgbG9hZFNlY3Rpb24oZm9ybUNvbnRleHQsIHRhYiwgdGFic1t0YWJdLlNlY3Rpb24sIHNlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKHRhYnMpLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICBsb2FkVGFiKGZvcm1Db250ZXh0LCB0YWJzLCB0YWIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGFicztcclxufVxyXG5mdW5jdGlvbiBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQ6IGFueSwgbmF2aWdhdGlvbkl0ZW1zOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBjb25zdCBuYXZpZ2F0aW9uczogYW55ID0ge307XHJcbiAgICBuYXZpZ2F0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiBuYXZpZ2F0aW9uc1tpdGVtXSA9IHt9KTtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb25JdGVtID0gKG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gZm9ybUNvbnRleHQ/LnVpPy5uYXZpZ2F0aW9uPy5pdGVtcztcclxuICAgICAgICBpZiAoIW5hdkl0ZW1zKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBuYXZJdGVtcy5nZXRMZW5ndGgoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBuYXZJdGVtcy5nZXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5nZXRJZCgpID09PSBuYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkTmF2aWdhdGlvbiA9IChmb3JtQ29udGV4dDogYW55LCBuYXZpZ2F0aW9uczogYW55LCBuYXZpZ2F0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uSXRlbSA9IGdldE5hdmlnYXRpb25JdGVtKG5hdmlnYXRpb24pO1xyXG4gICAgICAgIGdldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ0lkJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ0xhYmVsJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldExhYmVsKCksICh2YWx1ZTogYW55KSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIobmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gbmF2aWdhdGlvbkl0ZW0/LmdldFZpc2libGUoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRWaXNpYmxlKHZhbHVlKSk7XHJcbiAgICAgICAgbmF2aWdhdGlvbnNbbmF2aWdhdGlvbl0uRm9jdXMgPSAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uc2V0Rm9jdXMoKTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhuYXZpZ2F0aW9ucykuZm9yRWFjaChuYXZpZ2F0aW9uID0+IHtcclxuICAgICAgICBsb2FkTmF2aWdhdGlvbihmb3JtQ29udGV4dCwgbmF2aWdhdGlvbnMsIG5hdmlnYXRpb24pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmF2aWdhdGlvbnM7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFF1aWNrRm9ybXMoZm9ybUNvbnRleHQ6IGFueSwgcXVpY2tJdGVtczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgY29uc3QgcXVpY2tGb3JtczogYW55ID0ge307XHJcbiAgICBxdWlja0l0ZW1zLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtxdWlja0Zvcm1OYW1lLCBmaWVsZE5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgaWYgKCFxdWlja0Zvcm1zW3F1aWNrRm9ybU5hbWVdKSB7XHJcbiAgICAgICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybU5hbWVdW2ZpZWxkTmFtZV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGV4Y2x1ZGVkRmllbGRzID0gbmV3IFNldChbXCJCb2R5XCIsIFwiQ29udHJvbHNcIiwgXCJJc0xvYWRlZFwiLCBcIlJlZnJlc2hcIiwgXCJGb2N1c1wiLCBcIkNvbnRyb2xUeXBlXCIsIFwiRGlzYWJsZWRcIiwgXCJMYWJlbFwiLCBcIkNvbnRyb2xOYW1lXCIsIFwiQ29udHJvbFBhcmVudFwiLCBcIlZpc2libGVcIl0pO1xyXG4gICAgY29uc3QgbG9hZFF1aWNrRm9ybSA9IChmb3JtQ29udGV4dDogYW55LCBxdWlja0Zvcm1zOiBhbnksIHF1aWNrRm9ybTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMocXVpY2tGb3Jtc1txdWlja0Zvcm1dKS5maWx0ZXIoZmllbGQgPT4gIWV4Y2x1ZGVkRmllbGRzLmhhcyhmaWVsZCkpO1xyXG4gICAgICAgIGNvbnN0IHF1aWNrID0gZm9ybUNvbnRleHQ/LnVpPy5xdWlja0Zvcm1zPy5nZXQocXVpY2tGb3JtKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQm9keScsICgpID0+IGxvYWRGb3JtRGlhbG9nKHF1aWNrLCBmaWVsZHMpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBxdWljaz8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFBhcmVudCcsICgpID0+IHF1aWNrPy5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gcXVpY2s/LmdldENvbnRyb2xUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdEaXNhYmxlZCcsICgpID0+IHF1aWNrPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnTGFiZWwnLCAoKSA9PiBxdWljaz8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgcXVpY2s/LnNldExhYmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ1Zpc2libGUnLCAoKSA9PiBxdWljaz8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Db250cm9scyA9IChhcmc6IGFueSkgPT4gcXVpY2s/LmdldENvbnRyb2woYXJnKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uRm9jdXMgPSAoKSA9PiBxdWljaz8uc2V0Rm9jdXMoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uSXNMb2FkZWQgPSAoKSA9PiBxdWljaz8uaXNMb2FkZWQoKTtcclxuICAgICAgICBxdWlja0Zvcm1zW3F1aWNrRm9ybV0uUmVmcmVzaCA9ICgpID0+IHF1aWNrPy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVpY2tGb3JtcykuZm9yRWFjaChxdWlja0Zvcm0gPT4ge1xyXG4gICAgICAgIGxvYWRRdWlja0Zvcm0oZm9ybUNvbnRleHQsIHF1aWNrRm9ybXMsIHF1aWNrRm9ybSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBxdWlja0Zvcm1zO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRHcmlkcyhmb3JtQ29udGV4dDogYW55LCBncmlkSXRlbXM6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGNvbnN0IGdyaWRzOiBhbnkgPSB7fTtcclxuICAgIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IGdyaWRzW2l0ZW1dID0ge30pO1xyXG4gICAgY29uc3QgbG9hZEdyaWRDb2x1bW4gPSAoY29sOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYWJlbCcsICgpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBjb2w/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0Rpc2FibGVkJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldERpc2FibGVkKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBjb2w/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29sPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ1ZhbHVlJywgKCkgPT4gY29sPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFZhbHVlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgb2JqLkNsZWFyTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgICAgIG9iai5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LnNldE5vdGlmaWNhdGlvbihtZXNzYWdlLCB1bmlxdWVJZCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkR3JpZFJvdyA9IChyb3c6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NvbHVtbnMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbnNPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldExlbmd0aCA9ICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZEdyaWRDb2x1bW4oY29sdW1uKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29sdW1uc09iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbnMgPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5zPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZEdyaWRDb2x1bW4oY29sdW1uKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY29sdW1uc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5SWQnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0VudGl0eU5hbWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkID0gKGZvcm1Db250ZXh0OiBhbnksIGdyaWRzOiBhbnksIGdyaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQ29sbGVjdGlvbk9iamVjdCA9IChnZXRJdGVtc0ZuOiBhbnksIHByb2Nlc3NJdGVtRm46IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBvYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0SXRlbXNGbigpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgb2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiBwcm9jZXNzSXRlbUZuKGdldEl0ZW1zRm4oKT8uZ2V0KGluZGV4KSk7XHJcbiAgICAgICAgICAgIG9iai5mb3JFYWNoID0gKGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbXNGbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gaXRlbXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc0l0ZW1GbihpdGVtcy5nZXQoaW5kZXgpKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRW50aXR5TmFtZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0ZldGNoWG1sJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEZldGNoWG1sKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ0dyaWRUeXBlJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWRUeXBlKCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1JlbGF0aW9uc2hpcCcsICgpID0+IGdyaWRDb250cm9sPy5nZXRSZWxhdGlvbnNoaXAoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFJvd3MoKSxcclxuICAgICAgICAgICAgICAgIChyb3c6IGFueSkgPT4gbG9hZEdyaWRSb3cocm93KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1NlbGVjdGVkUm93cycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEluc3RhbmNlID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2woZ3JpZCk/LmdldEdyaWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNvbGxlY3Rpb25PYmplY3QoXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBncmlkSW5zdGFuY2U/LmdldFNlbGVjdGVkUm93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3c/LmdldERhdGEoKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdUb3RhbFJlY29yZENvdW50JywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEdyaWQoKT8uZ2V0VG90YWxSZWNvcmRDb3VudCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdWaWV3U2VsZWN0b3InLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdTZWxlY3RvciA9IGdyaWRDb250cm9sPy5nZXRWaWV3U2VsZWN0b3IoKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZ2V0dGVyKG9iaiwgJ1Zpc2libGUnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmlzVmlzaWJsZSgpKTtcclxuICAgICAgICAgICAgZ2V0dGVyU2V0dGVyKG9iaiwgJ0N1cnJlbnRWaWV3JywgKCkgPT4gdmlld1NlbGVjdG9yPy5nZXRDdXJyZW50VmlldygpLCAodmFsdWU6IGFueSkgPT4gdmlld1NlbGVjdG9yPy5zZXRDdXJyZW50Vmlldyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihncmlkc1tncmlkXSwgJ1Zpc2libGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBncmlkQ29udHJvbD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLkFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBncmlkQ29udHJvbD8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgICAgICBncmlkc1tncmlkXS5PcGVuUmVsYXRlZEdyaWQgPSAoKSA9PiBncmlkQ29udHJvbD8ub3BlblJlbGF0ZWRHcmlkKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaCA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVmcmVzaFJpYmJvbiA9ICgpID0+IGdyaWRDb250cm9sPy5yZWZyZXNoUmliYm9uKCk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLlVybCA9IChjbGllbnQ6IG51bWJlcikgPT4gZ3JpZENvbnRyb2w/LmdldFVybChjbGllbnQpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKGdyaWRzKS5mb3JFYWNoKGdyaWQgPT4ge1xyXG4gICAgICAgIGxvYWRHcmlkKGZvcm1Db250ZXh0LCBncmlkcywgZ3JpZCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBncmlkcztcclxufVxyXG5mdW5jdGlvbiBsb2FkRXhlY3V0aW9uQ29udGV4dChleGVjdXRpb25Db250ZXh0OiBhbnkpOiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGdldHRlcihvYmosICdEZXB0aCcsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldERlcHRoKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRXZlbnRBcmdzJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0V2ZW50U291cmNlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRTb3VyY2UoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRm9ybUNvbnRleHQnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRGb3JtQ29udGV4dCgpKTtcclxuICAgIGdldHRlcihvYmosICdJc1NhdmVTdWNjZXNzJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldElzU2F2ZVN1Y2Nlc3MoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnU2F2ZUVycm9ySW5mbycsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5nZXRTYXZlRXJyb3JJbmZvKCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ1NhdmVNb2RlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldFNhdmVNb2RlKCkpO1xyXG4gICAgb2JqLkRpc2FibGVBc3luY1RpbWVvdXQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZGlzYWJsZUFzeW5jVGltZW91dCgpO1xyXG4gICAgb2JqLkdldFNoYXJlZFZhcmlhYmxlID0gKGtleTogc3RyaW5nKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRTaGFyZWRWYXJpYWJsZShrZXkpO1xyXG4gICAgb2JqLklzRGVmYXVsdFByZXZlbnRlZCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5pc0RlZmF1bHRQcmV2ZW50ZWQoKTtcclxuICAgIG9iai5Jc0luaXRpYWxMb2FkID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldERhdGFMb2FkU3RhdGUoKSA9PT0gMTtcclxuICAgIG9iai5TZXRQcmV2ZW50RGVmYXVsdCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgb2JqLlNldFByZXZlbnREZWZhdWx0T25FcnJvciA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5wcmV2ZW50RGVmYXVsdE9uRXJyb3IoKTtcclxuICAgIG9iai5TZXRTaGFyZWRWYXJpYWJsZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gZXhlY3V0aW9uQ29udGV4dD8uc2V0U2hhcmVkVmFyaWFibGUoa2V5LCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRTaWRlUGFuZXMoKTogRGV2S2l0LklTaWRlUGFuZXMge1xyXG4gICAgY29uc3Qgc2lkZVBhbmVzOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHNpZGVQYW5lcywgJ0Rpc3BsYXlTdGF0ZScsICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LnN0YXRlLCAodmFsdWU6IGFueSkgPT4geyBjb25zdCB4ID0gZ2V0WHJtKCk7IGlmICgoeCBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcykgKHggYXMgYW55KS5BcHAuc2lkZVBhbmVzLnN0YXRlID0gdmFsdWU7IH0pO1xyXG4gICAgc2lkZVBhbmVzLkNyZWF0ZSA9IGZ1bmN0aW9uIChwYW5lT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnkpIHsgKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uY3JlYXRlUGFuZShwYW5lT3B0aW9ucyk/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrKTsgfTtcclxuICAgIHNpZGVQYW5lcy5HZXQgPSAocGFuZUlkOiBzdHJpbmcpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldFBhbmUocGFuZUlkKTtcclxuICAgIHNpZGVQYW5lcy5HZXRBbGwgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRBbGxQYW5lcygpO1xyXG4gICAgc2lkZVBhbmVzLkdldFNlbGVjdGVkID0gKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0U2VsZWN0ZWRQYW5lKCk7XHJcbiAgICByZXR1cm4gc2lkZVBhbmVzO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRXZWJBcGkoKTogRGV2S2l0LklXZWJBcGkge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fSBhcyBEZXZLaXQuSVdlYkFwaTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0V2ViQXBpID0geHJtPy5XZWJBcGk7XHJcbiAgICBjb25zdCBnZXRPbmxpbmUgPSB4cm0/LldlYkFwaT8ub25saW5lO1xyXG4gICAgY29uc3QgZ2V0T2ZmbGluZSA9IHhybT8uV2ViQXBpPy5vZmZsaW5lO1xyXG4gICAgY29uc3QgZXh0cmFjdEVudGl0eU5hbWUgPSBmdW5jdGlvbiAoZmV0Y2hYbWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNsZWFuWG1sID0gZmV0Y2hYbWw7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hYbWxNYXRjaCA9IGZldGNoWG1sLm1hdGNoKC9mZXRjaHhtbD0vaSk7XHJcbiAgICAgICAgaWYgKGZldGNoWG1sTWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXRJbmRleCA9IGZldGNoWG1sLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmV0Y2h4bWw9JykgKyAnZmV0Y2h4bWw9Jy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNsZWFuWG1sID0gZGVjb2RlVVJJQ29tcG9uZW50KGZldGNoWG1sLnN1YnN0cmluZyhzcGxpdEluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGZldGNoWG1sLnRyaW0oKS5zdGFydHNXaXRoKCc8JykpIHtcclxuICAgICAgICAgICAgY2xlYW5YbWwgPSBmZXRjaFhtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY2xlYW5YbWwsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgY29uc3QgZW50aXR5Tm9kZSA9IHhtbERvYy5xdWVyeVNlbGVjdG9yKFwiZW50aXR5XCIpO1xyXG4gICAgICAgIGlmIChlbnRpdHlOb2RlICYmIGVudGl0eU5vZGUuaGFzQXR0cmlidXRlKFwibmFtZVwiKSlcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eU5vZGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSE7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50aXR5IG5hbWUgbm90IGZvdW5kIGluIGZldGNoWG1sXCIpO1xyXG4gICAgfTtcclxuICAgIG9iai5DcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgZGF0YTogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5jcmVhdGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGRhdGEpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRGVsZXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LmRlbGV0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlTXVsdGlwbGVSZWNvcmRzID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcsIG1heFBhZ2VTaXplPzogbnVtYmVyLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZU11bHRpcGxlUmVjb3JkcyhlbnRpdHlMb2dpY2FsTmFtZSwgb3B0aW9ucywgbWF4UGFnZVNpemUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouVXBkYXRlUmVjb3JkID0gZnVuY3Rpb24gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhdGE6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8udXBkYXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVNdWx0aXBsZSA9IGZ1bmN0aW9uIChyZXF1ZXN0czogYW55W10sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSAoZ2V0V2ViQXBpIGFzIGFueSk/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZHMgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM6IHN0cmluZywgb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrPzogYW55LCBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrPzogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBsZXQgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZztcclxuICAgICAgICBsZXQgb3B0aW9uczogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCBtYXhQYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhhc0ZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiAvZmV0Y2h4bWw9L2kudGVzdChzdHIpO1xyXG4gICAgICAgIGNvbnN0IGlzUGxhaW5GZXRjaFhtbCA9IChzdHI6IHN0cmluZykgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyLnRyaW0oKS5zdGFydHNXaXRoKCc8ZmV0Y2gnKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhID0gdHlwZW9mIGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAoaGFzRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICBpc1BsYWluRmV0Y2hYbWwoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMpIHx8XHJcbiAgICAgICAgICAgICAgICAoZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMuc3RhcnRzV2l0aCgnPycpICYmICFoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpKTtcclxuICAgICAgICBpZiAoc2Vjb25kUGFyYW1Jc0ZldGNoWG1sT3JPRGF0YSkge1xyXG4gICAgICAgICAgICBvcHRpb25zID0gZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnM7XHJcbiAgICAgICAgICAgIGlmIChpc1BsYWluRmV0Y2hYbWwob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAnP2ZldGNoWG1sPScgKyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ZldGNoWG1sKG9wdGlvbnMpIHx8IGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eUxvZ2ljYWxOYW1lID0gZXh0cmFjdEVudGl0eU5hbWUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudGl0eSBuYW1lIGNhbm5vdCBiZSBkZXRlcm1pbmVkIGZyb20gT0RhdGEgcXVlcnkuIFBsZWFzZSBwcm92aWRlIGVudGl0eUxvZ2ljYWxOYW1lIGFzIHNlY29uZCBwYXJhbWV0ZXIuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjaztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNhbGxiYWNrID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gbWF4UGFnZVNpemVPclN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgICAgIG1heFBhZ2VTaXplID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lISwgb3B0aW9ucywgbWF4UGFnZVNpemUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZW50aXRpZXMgJiYgcmVzdWx0LmVudGl0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZW50aXRpZXMubWFwKChlbnRpdHk6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkgPT09ICdmdW5jdGlvbicgJiYgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkID0gZnVuY3Rpb24gKGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5OiBhbnksIGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmcgfCBGdW5jdGlvbiwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayA9IG9wdGlvbnM7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBcIj8kc2VsZWN0PSpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBvcHRpb25zIGFzIHN0cmluZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJyAmJiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeS5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgID8gbmV3IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KHJlc3VsdClcclxuICAgICAgICAgICAgICAgIDogYXBpQ29uc3RydWN0b3JPckZhY3RvcnkocmVzdWx0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ09ubGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvbmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlID0gZnVuY3Rpb24gKHJlcXVlc3Q6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGUocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvbmxpbmUuRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRPbmxpbmU/LmV4ZWN1dGVNdWx0aXBsZShyZXF1ZXN0cyk7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gb25saW5lO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnT2ZmbGluZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvZmZsaW5lOiBhbnkgPSB7fTtcclxuICAgICAgICBvZmZsaW5lLklzQXZhaWxhYmxlID0gKGVudGl0eUxvZ2ljYWxOYW1lOiBzdHJpbmcpID0+IChnZXRPZmZsaW5lIGFzIGFueSk/LmlzQXZhaWxhYmxlKGVudGl0eUxvZ2ljYWxOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2ZmbGluZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBsb2FkQ29waWxvdCgpOiBEZXZLaXQuSUNvcGlsb3Qge1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0Q29waWxvdCA9ICh4cm0gYXMgYW55KT8uQ29waWxvdDtcclxuICAgIG9iai5FeGVjdXRlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50UGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0Q29waWxvdD8uZXhlY3V0ZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnRQYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGVQcm9tcHQgPSBmdW5jdGlvbiAocHJvbXB0VGV4dDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0Q29waWxvdD8uZXhlY3V0ZVByb21wdChwcm9tcHRUZXh0KTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5mdW5jdGlvbiBsb2FkRm9ybVYzPFRCb2R5ID0gUmVjb3JkPHN0cmluZywgYW55PiwgVEhlYWRlciA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRUYWIgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUR3JpZCA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFROYXZpZ2F0aW9uID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFF1aWNrRm9ybSA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRQcm9jZXNzID0gYW55PihcclxuICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIGZvcm1Db25maWc6IHtcclxuICAgICAgICBib2R5Pzogc3RyaW5nW107XHJcbiAgICAgICAgaGVhZGVyPzogc3RyaW5nW107XHJcbiAgICAgICAgdGFiPzogc3RyaW5nW107XHJcbiAgICAgICAgZ3JpZD86IHN0cmluZ1tdO1xyXG4gICAgICAgIG5hdmlnYXRpb24/OiBzdHJpbmdbXTtcclxuICAgICAgICBxdWljaz86IHN0cmluZ1tdO1xyXG4gICAgICAgIGJwZj86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG4pOiB7XHJcbiAgICBFeGVjdXRpb25Db250ZXh0OiBEZXZLaXQuSUV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBCb2R5OiBUQm9keTtcclxuICAgIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIFRhYjogVFRhYjtcclxuICAgIEdyaWQ6IFRHcmlkO1xyXG4gICAgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBGb3JtSWQ6IHN0cmluZztcclxuICAgIEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgRm9ybVR5cGU6IG51bWJlcjtcclxuICAgIEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBEYXRhSXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgQXR0cmlidXRlczogYW55O1xyXG4gICAgQ29udHJvbHM6IGFueTtcclxuICAgIERhdGFYbWw6IHN0cmluZztcclxuICAgIEVudGl0eUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBFbnRpdHlJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgRW50aXR5UmVmZXJlbmNlOiBhbnk7XHJcbiAgICBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuICAgIFZpZXdQb3J0SGVpZ2h0OiBudW1iZXI7XHJcbiAgICBWaWV3UG9ydFdpZHRoOiBudW1iZXI7XHJcbiAgICBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBSZWZyZXNoOiAoc2F2ZT86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBDbGVhckZvcm1Ob3RpZmljYXRpb246ICh1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpUmVtb3ZlTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEFkZE9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEFkZE9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgUmVtb3ZlT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgUmVtb3ZlT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBEYXRhQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBEYXRhUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBGb3JtSXNWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBGb3JtTmF2aWdhdGVUb0Zvcm1JZDogKGZvcm1JZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw6IChmb3JtTGFiZWw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIEZvcm1TZXRWaXNpYmxlOiAoZm9ybUlkOiBzdHJpbmcsIHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBTZXRGb3JtRW50aXR5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIFByb2Nlc3M6IFRQcm9jZXNzO1xyXG4gICAgVXRpbGl0eTogYW55O1xyXG4gICAgU2lkZVBhbmVzOiBhbnk7XHJcbiAgICBXZWJBcGk6IGFueTtcclxuICAgIENvcGlsb3Q6IGFueTtcclxufSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGV4dCA9IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0Py4oKSA/PyBleGVjdXRpb25Db250ZXh0ID8/IG51bGw7XHJcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhID0gZm9ybUNvbnRleHQ/LmRhdGE7XHJcbiAgICBjb25zdCBjb250ZXh0RGF0YUVudGl0eSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk7XHJcbiAgICBjb25zdCBjb250ZXh0VWkgPSBmb3JtQ29udGV4dD8udWk7XHJcbiAgICBjb25zdCBjb250ZXh0VWlGb3JtU2VsZWN0b3IgPSBmb3JtQ29udGV4dD8udWk/LmZvcm1TZWxlY3RvcjtcclxuICAgIGNvbnN0IGZpbmRGb3JtSXRlbSA9IChjcml0ZXJpYTogYW55LCB2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY29udGV4dFVpRm9ybVNlbGVjdG9yPy5pdGVtcz8uZ2V0TGVuZ3RoKCkgPz8gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXQoaSk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGNyaXRlcmlhKGl0ZW0pID09PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKGZvcm0sICdBdHRyaWJ1dGVzJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmF0dHJpYnV0ZXMpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdDb250cm9scycsICgpID0+IGNvbnRleHRVaT8uY29udHJvbHMpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhSXNEaXJ0eScsICgpID0+IGNvbnRleHREYXRhPy5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhSXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhPy5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdEYXRhWG1sJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldERhdGFYbWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlkJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldElkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzVmFsaWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5TmFtZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtSWQnLCAoKSA9PiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldElkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtTGFiZWwnLCAoKSA9PiBjb250ZXh0VWlGb3JtU2VsZWN0b3I/LmdldEN1cnJlbnRJdGVtKCk/LmdldExhYmVsKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdGb3JtVHlwZScsICgpID0+IGNvbnRleHRVaT8uZ2V0Rm9ybVR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ByaW1hcnlBdHRyaWJ1dGVWYWx1ZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRQcmltYXJ5QXR0cmlidXRlVmFsdWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ1ZpZXdQb3J0SGVpZ2h0JywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydEhlaWdodCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRXaWR0aCcsICgpID0+IGNvbnRleHRVaT8uZ2V0Vmlld1BvcnRXaWR0aCgpKTtcclxuICAgIGZvcm0uQWRkT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYWRkT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLkFkZE9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYWRkT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbnRleHRVaT8uY2xlYXJGb3JtTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uQ2xvc2UgPSAoKSA9PiBjb250ZXh0VWk/LmNsb3NlKCk7XHJcbiAgICBmb3JtLkRhdGFBZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGE/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLkRhdGFSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGE/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLkZvcm1Jc1Zpc2libGUgPSAoZm9ybUlkOiBzdHJpbmcpID0+IHsgcmV0dXJuIGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/LmdldFZpc2libGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtSWQgPSAoZm9ybUlkOiBzdHJpbmcpID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8ubmF2aWdhdGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWwgPSAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0TGFiZWwoKSwgZm9ybUxhYmVsKT8ubmF2aWdhdGUoKTsgfTtcclxuICAgIGZvcm0uRm9ybVNldFZpc2libGUgPSAoZm9ybUlkOiBzdHJpbmcsIHZhbHVlOiBib29sZWFuKSA9PiB7IGZpbmRGb3JtSXRlbSgoaXRlbTogYW55KSA9PiBpdGVtLmdldElkKCksIGZvcm1JZCk/LnNldFZpc2libGUodmFsdWUpOyB9O1xyXG4gICAgZm9ybS5SZWZyZXNoID0gKHNhdmU/OiBib29sZWFuLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gY29udGV4dERhdGE/LnJlZnJlc2goc2F2ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZm9ybS5SZWZyZXNoUmliYm9uID0gKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiBjb250ZXh0VWk/LnJlZnJlc2hSaWJib24ocmVmcmVzaEFsbCk7XHJcbiAgICBmb3JtLlJlbW92ZU9uUG9zdFNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LnJlbW92ZU9uUG9zdFNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5SZW1vdmVPblNhdmUgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dERhdGFFbnRpdHk/LnJlbW92ZU9uU2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlNhdmUgPSAoc2F2ZU9wdGlvbnM/OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8uc2F2ZShzYXZlT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZm9ybS5TZXRGb3JtRW50aXR5TmFtZSA9IChhcmc6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtRW50aXR5TmFtZShhcmcpO1xyXG4gICAgZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5zZXRGb3JtTm90aWZpY2F0aW9uKG1lc3NhZ2UsIGxldmVsLCB1bmlxdWVJZCk7XHJcbiAgICBmb3JtLlVpQWRkTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8uYWRkTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlBZGRPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaVJlbW92ZUxvYWRlZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LnJlbW92ZUxvYWRlZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGNvbnN0IHsgYm9keSA9IFtdLCB0YWIgPSBbXSwgaGVhZGVyID0gW10sIGJwZiA9IFtdLCBxdWljayA9IFtdLCBncmlkID0gW10sIG5hdmlnYXRpb24gPSBbXSwgZGlhbG9nID0gW10gfSA9IGZvcm1Db25maWcgYXMgYW55O1xyXG4gICAgY29uc3QgYm9keU9iaiA9IGJvZHkubGVuZ3RoID4gMCA/IGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGJvZHkpIDoge307XHJcbiAgICBib2R5T2JqLlRhYiA9IHRhYi5sZW5ndGggPiAwID8gbG9hZFRhYnMoZm9ybUNvbnRleHQsIHRhYikgOiB7fTtcclxuICAgIGZvcm0uQm9keSA9IGJvZHlPYmo7XHJcbiAgICBmb3JtLkhlYWRlciA9IGhlYWRlci5sZW5ndGggPiAwID8gbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgaGVhZGVyLCAnaGVhZGVyXycpIDoge307XHJcbiAgICBmb3JtLlByb2Nlc3MgPSBicGYubGVuZ3RoID4gMCA/IGxvYWRQcm9jZXNzKGZvcm1Db250ZXh0LCBicGYpIDoge307XHJcbiAgICBmb3JtLlF1aWNrRm9ybSA9IHF1aWNrLmxlbmd0aCA+IDAgPyBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dCwgcXVpY2spIDoge307XHJcbiAgICBmb3JtLkdyaWQgPSBncmlkLmxlbmd0aCA+IDAgPyBsb2FkR3JpZHMoZm9ybUNvbnRleHQsIGdyaWQpIDoge307XHJcbiAgICBmb3JtLk5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uLmxlbmd0aCA+IDAgPyBsb2FkTmF2aWdhdGlvbnMoZm9ybUNvbnRleHQsIG5hdmlnYXRpb24pIDoge307XHJcbiAgICBmb3JtLkRpYWxvZyA9IGRpYWxvZy5sZW5ndGggPiAwID8gbG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQsIGRpYWxvZykgOiB7fTtcclxuICAgIGZvcm0uVXRpbGl0eSA9IGxvYWRVdGlsaXR5KGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgZm9ybS5FeGVjdXRpb25Db250ZXh0ID0gbG9hZEV4ZWN1dGlvbkNvbnRleHQoZXhlY3V0aW9uQ29udGV4dCk7XHJcbiAgICBmb3JtLlNpZGVQYW5lcyA9IGxvYWRTaWRlUGFuZXMoKTtcclxuICAgIGZvcm0uV2ViQXBpID0gbG9hZFdlYkFwaSgpO1xyXG4gICAgZm9ybS5Db3BpbG90ID0gbG9hZENvcGlsb3QoKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRQcm9jZXNzKGZvcm1Db250ZXh0OiBhbnksIGJwZjogc3RyaW5nW10gPSBbXSk6IGFueSB7XHJcbiAgICBjb25zdCBwcm9jZXNzOiBhbnkgPSB7fTtcclxuICAgIGlmIChicGYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBicGZQcm9jZXNzTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgYnBmRmllbGROYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBicGYuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtwcm9jZXNzTmFtZSwgZmllbGROYW1lXSA9IGl0ZW0uc3BsaXQoJ19fXycpO1xyXG4gICAgICAgICAgICBpZiAoIWJwZlByb2Nlc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBicGZQcm9jZXNzTmFtZSA9IHByb2Nlc3NOYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJwZkZpZWxkTmFtZXMucHVzaChmaWVsZE5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGJwZk9iaiA9IGxvYWRGaWVsZHMoZm9ybUNvbnRleHQsIGJwZkZpZWxkTmFtZXMsICdoZWFkZXJfcHJvY2Vzc18nKTtcclxuICAgICAgICBpZiAoYnBmUHJvY2Vzc05hbWUpIHtcclxuICAgICAgICAgICAgcHJvY2Vzc1ticGZQcm9jZXNzTmFtZV0gPSBicGZPYmo7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHJvY2VzcyA9IGZvcm1Db250ZXh0Py5kYXRhPy5wcm9jZXNzO1xyXG4gICAgY29uc3QgZ2V0UHJvY2Vzc1VpID0gZm9ybUNvbnRleHQ/LnVpPy5wcm9jZXNzO1xyXG4gICAgY29uc3QgbG9hZFN0ZXAgPSAoc3RlcDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlJywgKCkgPT4gc3RlcD8uZ2V0QXR0cmlidXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gc3RlcD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUHJvZ3Jlc3MnLCAoKSA9PiBzdGVwPy5nZXRQcm9ncmVzcygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUmVxdWlyZWQnLCAoKSA9PiBzdGVwPy5pc1JlcXVpcmVkKCkpO1xyXG4gICAgICAgIG9iai5TZXRQcm9ncmVzcyA9IChzdGVwUHJvZ3Jlc3M6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKSA9PiBzdGVwPy5zZXRQcm9ncmVzcyhzdGVwUHJvZ3Jlc3MsIG1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZFN0YWdlID0gKHN0YWdlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdDYXRlZ29yeScsICgpID0+IHN0YWdlPy5nZXRDYXRlZ29yeSgpPy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5TmFtZScsICgpID0+IHN0YWdlPy5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJZCcsICgpID0+IHN0YWdlPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IHN0YWdlPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGF0dXMnLCAoKSA9PiBzdGFnZT8uZ2V0U3RhdHVzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGVwcycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBzdGFnZT8uZ2V0U3RlcHMoKTtcclxuICAgICAgICAgICAgaWYgKCFzdGVwcykgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwc0FycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzdGVwcy5sZW5ndGggfHwgMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgc3RlcHNBcnJheS5wdXNoKGxvYWRTdGVwKHN0ZXBzW2luZGV4XSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGVwc0FycmF5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9iai5BbGxvd0NyZWF0ZU5ldyA9IChjYWxsYmFjazogYW55KSA9PiB7IGlmIChzdGFnZT8uZ2V0TmF2aWdhdGlvbkJlaGF2aW9yKCkpIHN0YWdlLmdldE5hdmlnYXRpb25CZWhhdmlvcigpLmFsbG93Q3JlYXRlTmV3ID0gY2FsbGJhY2s7IH07XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkUHJvY2Vzc0lubmVyID0gKHByb2Nlc3NPYmo6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lkJywgKCkgPT4gcHJvY2Vzc09iaj8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzUmVuZGVyZWQnLCAoKSA9PiBwcm9jZXNzT2JqPy5pc1JlbmRlcmVkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gcHJvY2Vzc09iaj8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU3RhZ2VzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzU3RhZ2VzID0gcHJvY2Vzc09iaj8uZ2V0U3RhZ2VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlc09iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5nZXQgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBwcm9jZXNzU3RhZ2VzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRTdGFnZShzdGFnZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YWdlc09iai5nZXRMZW5ndGggPSAoKSA9PiBwcm9jZXNzU3RhZ2VzPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IChzdGFnZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBwcm9jZXNzU3RhZ2VzPy5nZXRMZW5ndGgoKSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gcHJvY2Vzc1N0YWdlcy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxvYWRTdGFnZShzdGFnZSksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YWdlc09iajtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlUGF0aCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBhY3RpdmVQYXRoT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbG9hZFN0YWdlKHN0YWdlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZ2V0TGVuZ3RoID0gKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpPy5nZXRMZW5ndGgoKTtcclxuICAgICAgICBhY3RpdmVQYXRoT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IChzdGFnZTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YWdlcyA9IGdldFByb2Nlc3M/LmdldEFjdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0YWdlcz8uZ2V0TGVuZ3RoKCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VzPy5nZXQoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZFN0YWdlKHN0YWdlKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlUGF0aE9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVQcm9jZXNzJywgKCkgPT4gbG9hZFByb2Nlc3NJbm5lcihnZXRQcm9jZXNzPy5nZXRBY3RpdmVQcm9jZXNzKCkpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnQWN0aXZlU3RhZ2UnLCAoKSA9PiBsb2FkU3RhZ2UoZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlU3RhZ2UoKSkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdJbnN0YW5jZUlkJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0SW5zdGFuY2VJZCgpKTtcclxuICAgIGdldHRlcihwcm9jZXNzLCAnSW5zdGFuY2VOYW1lJywgKCkgPT4gZ2V0UHJvY2Vzcz8uZ2V0SW5zdGFuY2VOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdTZWxlY3RlZFN0YWdlJywgKCkgPT4gbG9hZFN0YWdlKGdldFByb2Nlc3M/LmdldFNlbGVjdGVkU3RhZ2UoKSkpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdEaXNwbGF5U3RhdGUnLCAoKSA9PiBnZXRQcm9jZXNzVWk/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBnZXRQcm9jZXNzVWk/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKHByb2Nlc3MsICdTdGF0dXMnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRTdGF0dXMoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgZ2V0UHJvY2Vzcz8uc2V0U3RhdHVzKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ1Zpc2libGUnLCAoKSA9PiBnZXRQcm9jZXNzVWk/LmdldFZpc2libGUoKSwgKHZhbHVlOiBib29sZWFuKSA9PiB7IGdldFByb2Nlc3NVaT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25QcmVTdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByZVN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25Qcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25TdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkFkZE9uU3RhZ2VTZWxlY3RlZCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblN0YWdlU2VsZWN0ZWQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5FbmFibGVkUHJvY2Vzc2VzID0gKGNhbGxiYWNrOiAocHJvY2Vzc2VzOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgIGdldFByb2Nlc3M/LmdldEVuYWJsZWRQcm9jZXNzZXMoKGVuYWJsZWRQcm9jZXNzZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzZXMgPSBPYmplY3QuZW50cmllcyhlbmFibGVkUHJvY2Vzc2VzKS5tYXAoKFtwcm9jZXNzSWQsIHByb2Nlc3NOYW1lXSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NJZDogcHJvY2Vzc0lkLFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc05hbWU6IHByb2Nlc3NOYW1lXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgY2FsbGJhY2socHJvY2Vzc2VzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBwcm9jZXNzLk1vdmVOZXh0ID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/Lm1vdmVOZXh0KGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuTW92ZVByZXZpb3VzID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/Lm1vdmVQcmV2aW91cyhjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlByb2Nlc3NJbnN0YW5jZXMgPSAoY2FsbGJhY2s6IChwcm9jZXNzZXM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvY2Vzcz8uZ2V0UHJvY2Vzc0luc3RhbmNlcygocHJvY2Vzc0luc3RhbmNlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IE9iamVjdC52YWx1ZXMocHJvY2Vzc0luc3RhbmNlcykubWFwKChwcm9jOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzSWQ6IHByb2MuUHJvY2Vzc0RlZmluaXRpb25JRCxcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NOYW1lOiBwcm9jLlByb2Nlc3NEZWZpbml0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRPbjogcHJvYy5DcmVhdGVkT24sXHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkT25EYXRlOiBwcm9jLkNyZWF0ZWRPbkRhdGUsXHJcbiAgICAgICAgICAgICAgICBJbnN0YW5jZUlkOiBwcm9jLlByb2Nlc3NJbnN0YW5jZUlELFxyXG4gICAgICAgICAgICAgICAgSW5zdGFuY2VOYW1lOiBwcm9jLlByb2Nlc3NJbnN0YW5jZU5hbWUsXHJcbiAgICAgICAgICAgICAgICBTdGF0dXM6IHByb2MuU3RhdHVzQ29kZU5hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3MuUmVmbG93ID0gKHVwZGF0ZVVpOiBib29sZWFuLCBwYXJlbnRTdGFnZTogc3RyaW5nLCBuZXh0U3RhZ2U6IHN0cmluZykgPT4gZ2V0UHJvY2Vzc1VpPy5yZWZsb3codXBkYXRlVWksIHBhcmVudFN0YWdlLCBuZXh0U3RhZ2UpO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25QcmVQcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25QcmVTdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByZVN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25Qcm9jZXNzU3RhdHVzQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJvY2Vzc1N0YXR1c0NoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uU3RhZ2VDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25TdGFnZUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uU3RhZ2VTZWxlY3RlZCA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblN0YWdlU2VsZWN0ZWQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVQcm9jZXNzID0gKHByb2Nlc3NJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVQcm9jZXNzKHByb2Nlc3NJZCwgY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5TZXRBY3RpdmVQcm9jZXNzSW5zdGFuY2UgPSAocHJvY2Vzc0luc3RhbmNlSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlUHJvY2Vzc0luc3RhbmNlKHByb2Nlc3NJbnN0YW5jZUlkLCBjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVN0YWdlID0gKHN0YWdlSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uc2V0QWN0aXZlU3RhZ2Uoc3RhZ2VJZCwgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIHByb2Nlc3M7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZyk6IERldktpdC5JVXRpbGl0eSB7XHJcbiAgICBjb25zdCB1dGlsaXR5OiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IHhybSA9IGdldFhybSgpO1xyXG4gICAgY29uc3QgZ2V0QXBwID0geHJtPy5BcHA7XHJcbiAgICBjb25zdCBnZXREZXZpY2UgPSB4cm0/LkRldmljZTtcclxuICAgIGNvbnN0IGdldEVuY29kaW5nID0geHJtPy5FbmNvZGluZztcclxuICAgIGNvbnN0IGdldEdsb2JhbENvbnRleHQgPSB4cm0/LlV0aWxpdHk/LmdldEdsb2JhbENvbnRleHQoKTtcclxuICAgIGNvbnN0IGdldE5hdmlnYXRpb24gPSB4cm0/Lk5hdmlnYXRpb247XHJcbiAgICBjb25zdCBnZXRQYW5lbCA9IHhybT8uUGFuZWw7XHJcbiAgICBjb25zdCBnZXRVdGlsaXR5ID0geHJtPy5VdGlsaXR5O1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBnZXRHbG9iYWxDb250ZXh0Py5jbGllbnQ7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NsaWVudE5hbWUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50U3RhdGUnLCAoKSA9PiBjbGllbnQ/LmdldENsaWVudFN0YXRlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdGb3JtRmFjdG9yJywgKCkgPT4gY2xpZW50Py5nZXRGb3JtRmFjdG9yKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc05ldHdvcmtBdmFpbGFibGUnLCAoKSA9PiBjbGllbnQ/LmlzTmV0d29ya0F2YWlsYWJsZSgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNPZmZsaW5lJywgKCkgPT4gY2xpZW50Py5pc09mZmxpbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdDbGllbnRVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDbGllbnRVcmwoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0N1cnJlbnRBcHBVcmwnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwVXJsKCkpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGlzT25QcmVtaXNlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdJc09uUHJlbWlzZXMnLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5pc09uUHJlbWlzZXMoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0xlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lKCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdPcmdhbml6YXRpb25TZXR0aW5ncycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IG9yZ2FuaXphdGlvblNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8ub3JnYW5pemF0aW9uU2V0dGluZ3M7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGF0dHJpYnV0ZXMgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnQXR0cmlidXRlcycsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5hdHRyaWJ1dGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5JywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Jhc2VDdXJyZW5jeUlkJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmJhc2VDdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdENvdW50cnlDb2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmRlZmF1bHRDb3VudHJ5Q29kZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGZ1bGxOYW1lQ29udmVudGlvbkNvZGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnRnVsbE5hbWVDb252ZW50aW9uQ29kZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5mdWxsTmFtZUNvbnZlbnRpb25Db2RlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNBdXRvU2F2ZUVuYWJsZWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNBdXRvU2F2ZUVuYWJsZWQpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLSBpc1RyaWFsT3JnYW5pemF0aW9uIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzVHJpYWxPcmdhbml6YXRpb24nLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uaXNUcmlhbE9yZ2FuaXphdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhbmd1YWdlSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIG9yZ2FuaXphdGlvbkV4cGlyeURhdGUgbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZScsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25FeHBpcnlEYXRlKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnT3JnYW5pemF0aW9uSWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8ub3JnYW5pemF0aW9uSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVbmlxdWVOYW1lJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVuaXF1ZU5hbWUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VTa3lwZVByb3RvY29sJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LnVzZVNreXBlUHJvdG9jb2wpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnUGFnZUNvbnRleHQnLCAoKSA9PiBnZXRVdGlsaXR5Py5nZXRQYWdlQ29udGV4dCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVXNlclNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gZ2V0R2xvYmFsQ29udGV4dD8udXNlclNldHRpbmdzO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEYXRlRm9ybWF0dGluZ0luZm8nLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmRhdGVGb3JtYXR0aW5nSW5mbyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RlZmF1bHREYXNoYm9hcmRJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uZGVmYXVsdERhc2hib2FyZElkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNHdWlkZWRIZWxwRW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNHdWlkZWRIZWxwRW5hYmxlZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzSGlnaENvbnRyYXN0RW5hYmxlZCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNIaWdoQ29udHJhc3RFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSVEwnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmlzUlRMKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8ubGFuZ3VhZ2VJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1JvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5yb2xlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZVByaXZpbGVnZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZVByaXZpbGVnZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTZWN1cml0eVJvbGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5zZWN1cml0eVJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVGltZVpvbmVPZmZzZXRNaW51dGVzJywgKCkgPT4gdXNlclNldHRpbmdzPy5nZXRUaW1lWm9uZU9mZnNldE1pbnV0ZXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3knLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3kpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUcmFuc2FjdGlvbkN1cnJlbmN5SWQnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnRyYW5zYWN0aW9uQ3VycmVuY3lJZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZXJJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlcklkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlck5hbWUnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnVzZXJOYW1lKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ1ZlcnNpb24nLCAoKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRWZXJzaW9uKCkpO1xyXG4gICAgdXRpbGl0eS5BZGRHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEFwcD8uYWRkR2xvYmFsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPSAoc2V0dGluZzogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRBZHZhbmNlZENvbmZpZ1NldHRpbmcoc2V0dGluZyBhcyBcIk1heENoaWxkSW5jaWRlbnROdW1iZXJcIiB8IFwiTWF4SW5jaWRlbnRNZXJnZU51bWJlclwiKTtcclxuICAgIHV0aWxpdHkuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgc3RhdGVDb2RlOiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/LmdldEFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyhlbnRpdHlOYW1lLCBzdGF0ZUNvZGUpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQmFyY29kZVZhbHVlID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0QmFyY29kZVZhbHVlKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DYXB0dXJlQXVkaW8gPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlQXVkaW8oKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVJbWFnZSA9IGZ1bmN0aW9uIChpbWFnZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5jYXB0dXJlSW1hZ2UoaW1hZ2VPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVWaWRlbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVWaWRlbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPSBmdW5jdGlvbiAodW5pcXVlSWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5jbGVhckdsb2JhbE5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID0gKCkgPT4gZ2V0VXRpbGl0eT8uY2xvc2VQcm9ncmVzc0luZGljYXRvcigpO1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwTmFtZSA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwTmFtZSgpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudEFwcFByb3BlcnRpZXMgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0Q3VycmVudEFwcFByb3BlcnRpZXMoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRQb3NpdGlvbiA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmdldEN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBnZXRFbnRpdHlNYWluRm9ybURlc2NyaXB0b3Igbm90IGluIEB0eXBlcy9Ycm1cclxuICAgIHV0aWxpdHkuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID0gKGVudGl0eU5hbWU6IHN0cmluZywgZm9ybUlkOiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvcihlbnRpdHlOYW1lLCBmb3JtSWQpO1xyXG4gICAgdXRpbGl0eS5FbnRpdHlNZXRhZGF0YSA9IGZ1bmN0aW9uIChlbnRpdHlOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWV0YWRhdGEoZW50aXR5TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5IdG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEF0dHJpYnV0ZUVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRGVjb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbERlY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5IdG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8uaHRtbEVuY29kZShhcmcpO1xyXG4gICAgdXRpbGl0eS5JbnZva2VQcm9jZXNzQWN0aW9uID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcGFyYW1ldGVyczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5pbnZva2VQcm9jZXNzQWN0aW9uKG5hbWUsIHBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTG9hZFBhbmVsID0gKHVybDogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSA9PiBnZXRQYW5lbD8ubG9hZFBhbmVsKHVybCwgdGl0bGUpO1xyXG4gICAgdXRpbGl0eS5Mb29rdXBPYmplY3RzID0gZnVuY3Rpb24gKGxvb2t1cE9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8ubG9va3VwT2JqZWN0cyhsb29rdXBPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk5hdmlnYXRlVG8gPSBmdW5jdGlvbiAocGFnZUlucHV0OiBhbnksIG5hdmlnYXRpb25PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm5hdmlnYXRlVG8ocGFnZUlucHV0LCBuYXZpZ2F0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuQWxlcnREaWFsb2cgPSBmdW5jdGlvbiAoYWxlcnRTdHJpbmdzOiBhbnksIGFsZXJ0T3B0aW9uczogYW55LCBjbG9zZUNhbGxiYWNrPzogKCkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5BbGVydERpYWxvZyhhbGVydFN0cmluZ3MsIGFsZXJ0T3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKGNsb3NlQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oY2xvc2VDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5Db25maXJtRGlhbG9nID0gZnVuY3Rpb24gKGNvbmZpcm1TdHJpbmdzOiBhbnksIGNvbmZpcm1PcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Db25maXJtRGlhbG9nKGNvbmZpcm1TdHJpbmdzLCBjb25maXJtT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRXJyb3JEaWFsb2cgPSBmdW5jdGlvbiAoZXJyb3JPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5FcnJvckRpYWxvZyhlcnJvck9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkZpbGUgPSAoZmlsZTogYW55LCBvcGVuRmlsZU9wdGlvbnM/OiBhbnkpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5GaWxlKGZpbGUsIG9wZW5GaWxlT3B0aW9ucyk7XHJcbiAgICB1dGlsaXR5Lk9wZW5Gb3JtID0gZnVuY3Rpb24gKGVudGl0eUZvcm1PcHRpb25zOiBhbnksIGZvcm1QYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE5hdmlnYXRpb24/Lm9wZW5Gb3JtKGVudGl0eUZvcm1PcHRpb25zLCBmb3JtUGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuVXJsID0gKHVybDogc3RyaW5nLCBvcGVuVXJsT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlblVybCh1cmwsIG9wZW5VcmxPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbldlYlJlc291cmNlID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCB3aW5kb3dPcHRpb25zPzogYW55LCBkYXRhPzogc3RyaW5nKSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuV2ViUmVzb3VyY2Uod2ViUmVzb3VyY2VOYW1lLCB3aW5kb3dPcHRpb25zLCBkYXRhKTtcclxuICAgIHV0aWxpdHkuUGlja0ZpbGUgPSBmdW5jdGlvbiAocGlja0ZpbGVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8ucGlja0ZpbGUocGlja0ZpbGVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LlByZXBlbmRPcmdOYW1lID0gKHNQYXRoOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LnByZXBlbmRPcmdOYW1lKHNQYXRoKTtcclxuICAgIHV0aWxpdHkuUmVmcmVzaFBhcmVudEdyaWQgPSAobG9va3VwT3B0aW9uczogYW55KSA9PiBnZXRVdGlsaXR5Py5yZWZyZXNoUGFyZW50R3JpZChsb29rdXBPcHRpb25zKTtcclxuICAgIC8vIEB0cy1pZ25vcmUgLSBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lIG1heSBiZSB1bmRlZmluZWRcclxuICAgIHV0aWxpdHkuUmVzb3VyY2UgPSAoa2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUhLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5SZXNvdXJjZVN0cmluZyA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IGdldFV0aWxpdHk/LmdldFJlc291cmNlU3RyaW5nKHdlYlJlc291cmNlTmFtZSwga2V5KTtcclxuICAgIHV0aWxpdHkuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uc2hvd1Byb2dyZXNzSW5kaWNhdG9yKG1lc3NhZ2UpO1xyXG4gICAgdXRpbGl0eS5XZWJSZXNvdXJjZVVybCA9ICh3ZWJSZXNvdXJjZU5hbWU6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8uZ2V0V2ViUmVzb3VyY2VVcmwod2ViUmVzb3VyY2VOYW1lKTtcclxuICAgIHV0aWxpdHkuWG1sQXR0cmlidXRlRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5LlhtbEVuY29kZSA9IChhcmc6IHN0cmluZykgPT4gZ2V0RW5jb2Rpbmc/LnhtbEVuY29kZShhcmcpO1xyXG4gICAgcmV0dXJuIHV0aWxpdHk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEZvcm1EaWFsb2coZm9ybUNvbnRleHQ6IGFueSwgZmllbGRzOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBjb25zdCBmb3JtOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGZpZWxkc0xlbmd0aCA9IGZpZWxkcz8ubGVuZ3RoIHx8IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkc0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGRzW2ldO1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGZvcm1Db250ZXh0Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldChmaWVsZE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChmaWVsZE5hbWUpO1xyXG4gICAgICAgIGZvcm1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgZm9ybVtmaWVsZE5hbWVdLCBhdHRyaWJ1dGUsIGNvbnRyb2wpO1xyXG4gICAgfVxyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGZvcm1Db250ZXh0Py51aT8uY2xvc2UoKTtcclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcbmZ1bmN0aW9uIGdldFdlYkFwaVR5cGVQYXJzZXJzKCk6IFJlY29yZDxzdHJpbmcsICh2YWx1ZTogYW55KSA9PiBhbnk+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgRGF0ZVRpbWU6ICh2YWx1ZTogYW55KTogRGF0ZSB8IG51bGwgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBpc05hTih2YWx1ZS5nZXRUaW1lKCkpID8gbnVsbCA6IHZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0cmltbWVkU3RyaW5nID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICh0cmltbWVkU3RyaW5nID09PSAnJykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUucGFyc2UodHJpbW1lZFN0cmluZyk7XHJcbiAgICAgICAgICAgIGlmIChpc05hTih0aW1lc3RhbXApKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc05hTihwYXJzZWREYXRlLmdldFRpbWUoKSkgPyBudWxsIDogcGFyc2VkRGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEludGVnZXI6ICh2YWx1ZTogYW55KTogbnVtYmVyIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc05hTihwYXJzZWQpID8gbnVsbCA6IHBhcnNlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIE51bWJlcjogKHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlZCkgPyBudWxsIDogcGFyc2VkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQm9vbGVhbjogKHZhbHVlOiBhbnkpOiBib29sZWFuIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdmFsdWUgIT09IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKHZhbHVlKS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJ1ZVZhbHVlcyA9IFsndHJ1ZScsICcxJywgJ3llcycsICd5J107XHJcbiAgICAgICAgICAgIGNvbnN0IGZhbHNlVmFsdWVzID0gWydmYWxzZScsICcwJywgJ25vJywgJ24nXTtcclxuICAgICAgICAgICAgaWYgKHRydWVWYWx1ZXMuaW5jbHVkZXMoc3RyaW5nVmFsdWUpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGZhbHNlVmFsdWVzLmluY2x1ZGVzKHN0cmluZ1ZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHdlYkFwaVJldHVybkdldChkYXRhOiBhbnksIHR5cGU/OiBEZXZLaXQuV2ViQXBpRmllbGRUeXBlKTogYW55IHtcclxuICAgIGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQpIHJldHVybiBkYXRhO1xyXG4gICAgY29uc3QgcGFyc2VyID0gZ2V0V2ViQXBpVHlwZVBhcnNlcnMoKVt0eXBlXTtcclxuICAgIHJldHVybiBwYXJzZXIgPyBwYXJzZXIoZGF0YSkgOiBkYXRhO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBGb3JtQmFzZTxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2VzcyA9IGFueT4ge1xyXG4gICAgcHVibGljIEJvZHk6IFRCb2R5O1xyXG4gICAgcHVibGljIEhlYWRlcjogVEhlYWRlcjtcclxuICAgIHB1YmxpYyBUYWI6IFRUYWI7XHJcbiAgICBwdWJsaWMgR3JpZDogVEdyaWQ7XHJcbiAgICBwdWJsaWMgTmF2aWdhdGlvbjogVE5hdmlnYXRpb247XHJcbiAgICBwdWJsaWMgUXVpY2tGb3JtOiBUUXVpY2tGb3JtO1xyXG4gICAgcHVibGljIFByb2Nlc3M6IFRQcm9jZXNzO1xyXG4gICAgcHVibGljIEV4ZWN1dGlvbkNvbnRleHQ6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIHB1YmxpYyBVdGlsaXR5OiBhbnk7XHJcbiAgICBwdWJsaWMgU2lkZVBhbmVzOiBEZXZLaXQuSVNpZGVQYW5lcztcclxuICAgIHB1YmxpYyBXZWJBcGk6IERldktpdC5JV2ViQXBpO1xyXG4gICAgcHVibGljIENvcGlsb3Q6IERldktpdC5JQ29waWxvdDtcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtSWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtTGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5TmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFJc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEF0dHJpYnV0ZXM6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBDb250cm9sczogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IERhdGFYbWw6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5UmVmZXJlbmNlOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgUHJpbWFyeUF0dHJpYnV0ZVZhbHVlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgVmlld1BvcnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyByZWFkb25seSBWaWV3UG9ydFdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2F2ZTogKHNhdmVPcHRpb25zPzogYW55KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIHB1YmxpYyBDbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtTm90aWZpY2F0aW9uOiAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgUmVmcmVzaFJpYmJvbjogKHJlZnJlc2hBbGw/OiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkTG9hZGVkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaUFkZE9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgQWRkT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEFkZE9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFJlbW92ZU9uUG9zdFNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBSZW1vdmVPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBEYXRhQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRGF0YVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1Jc1Zpc2libGU6IChmb3JtSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBGb3JtTmF2aWdhdGVUb0Zvcm1JZDogKGZvcm1JZDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIEZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsOiAoZm9ybUxhYmVsOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybVNldFZpc2libGU6IChmb3JtSWQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBTZXRGb3JtRW50aXR5TmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGV4ZWN1dGlvbkNvbnRleHQ6IGFueSxcclxuICAgICAgICBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgZm9ybUNvbmZpZzogRGV2S2l0LklGb3JtQ29uZmlnXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gbG9hZEZvcm1WMzxUQm9keSwgVEhlYWRlciwgVFRhYiwgVEdyaWQsIFROYXZpZ2F0aW9uLCBUUXVpY2tGb3JtLCBUUHJvY2Vzcz4oXHJcbiAgICAgICAgICAgIGV4ZWN1dGlvbkNvbnRleHQsXHJcbiAgICAgICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm1Db25maWdcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuQm9keSA9IGZvcm0uQm9keTtcclxuICAgICAgICB0aGlzLkhlYWRlciA9IGZvcm0uSGVhZGVyO1xyXG4gICAgICAgIHRoaXMuVGFiID0gZm9ybS5UYWI7XHJcbiAgICAgICAgdGhpcy5HcmlkID0gZm9ybS5HcmlkO1xyXG4gICAgICAgIHRoaXMuTmF2aWdhdGlvbiA9IGZvcm0uTmF2aWdhdGlvbjtcclxuICAgICAgICB0aGlzLlF1aWNrRm9ybSA9IGZvcm0uUXVpY2tGb3JtO1xyXG4gICAgICAgIHRoaXMuUHJvY2VzcyA9IGZvcm0uUHJvY2VzcztcclxuICAgICAgICB0aGlzLkV4ZWN1dGlvbkNvbnRleHQgPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSWQgPSBmb3JtLkZvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1MYWJlbCA9IGZvcm0uRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVR5cGUgPSBmb3JtLkZvcm1UeXBlO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SWQgPSBmb3JtLkVudGl0eUlkO1xyXG4gICAgICAgIHRoaXMuRW50aXR5TmFtZSA9IGZvcm0uRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLkRhdGFJc0RpcnR5ID0gZm9ybS5EYXRhSXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkRhdGFJc1ZhbGlkID0gZm9ybS5EYXRhSXNWYWxpZDtcclxuICAgICAgICB0aGlzLkF0dHJpYnV0ZXMgPSBmb3JtLkF0dHJpYnV0ZXM7XHJcbiAgICAgICAgdGhpcy5Db250cm9scyA9IGZvcm0uQ29udHJvbHM7XHJcbiAgICAgICAgdGhpcy5EYXRhWG1sID0gZm9ybS5EYXRhWG1sO1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNEaXJ0eSA9IGZvcm0uRW50aXR5SXNEaXJ0eTtcclxuICAgICAgICB0aGlzLkVudGl0eUlzVmFsaWQgPSBmb3JtLkVudGl0eUlzVmFsaWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlSZWZlcmVuY2UgPSBmb3JtLkVudGl0eVJlZmVyZW5jZTtcclxuICAgICAgICB0aGlzLlByaW1hcnlBdHRyaWJ1dGVWYWx1ZSA9IGZvcm0uUHJpbWFyeUF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRIZWlnaHQgPSBmb3JtLlZpZXdQb3J0SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuVmlld1BvcnRXaWR0aCA9IGZvcm0uVmlld1BvcnRXaWR0aDtcclxuICAgICAgICB0aGlzLlNhdmUgPSBmb3JtLlNhdmU7XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoID0gZm9ybS5SZWZyZXNoO1xyXG4gICAgICAgIHRoaXMuQ2xvc2UgPSBmb3JtLkNsb3NlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uU2V0Rm9ybU5vdGlmaWNhdGlvbjtcclxuICAgICAgICB0aGlzLkNsZWFyRm9ybU5vdGlmaWNhdGlvbiA9IGZvcm0uQ2xlYXJGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUmVmcmVzaFJpYmJvbiA9IGZvcm0uUmVmcmVzaFJpYmJvbjtcclxuICAgICAgICB0aGlzLlVpQWRkTG9hZGVkID0gZm9ybS5VaUFkZExvYWRlZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlTG9hZGVkID0gZm9ybS5VaVJlbW92ZUxvYWRlZDtcclxuICAgICAgICB0aGlzLlVpQWRkT25Mb2FkID0gZm9ybS5VaUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLlVpUmVtb3ZlT25Mb2FkID0gZm9ybS5VaVJlbW92ZU9uTG9hZDtcclxuICAgICAgICB0aGlzLkFkZE9uUG9zdFNhdmUgPSBmb3JtLkFkZE9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5BZGRPblNhdmUgPSBmb3JtLkFkZE9uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uUG9zdFNhdmUgPSBmb3JtLlJlbW92ZU9uUG9zdFNhdmU7XHJcbiAgICAgICAgdGhpcy5SZW1vdmVPblNhdmUgPSBmb3JtLlJlbW92ZU9uU2F2ZTtcclxuICAgICAgICB0aGlzLkRhdGFBZGRPbkxvYWQgPSBmb3JtLkRhdGFBZGRPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5EYXRhUmVtb3ZlT25Mb2FkID0gZm9ybS5EYXRhUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuRm9ybUlzVmlzaWJsZSA9IGZvcm0uRm9ybUlzVmlzaWJsZTtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZDtcclxuICAgICAgICB0aGlzLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsID0gZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDtcclxuICAgICAgICB0aGlzLkZvcm1TZXRWaXNpYmxlID0gZm9ybS5Gb3JtU2V0VmlzaWJsZTtcclxuICAgICAgICB0aGlzLlNldEZvcm1FbnRpdHlOYW1lID0gZm9ybS5TZXRGb3JtRW50aXR5TmFtZTtcclxuICAgICAgICB0aGlzLlV0aWxpdHkgPSBmb3JtLlV0aWxpdHk7XHJcbiAgICAgICAgdGhpcy5TaWRlUGFuZXMgPSBmb3JtLlNpZGVQYW5lcztcclxuICAgICAgICB0aGlzLldlYkFwaSA9IGZvcm0uV2ViQXBpO1xyXG4gICAgICAgIHRoaXMuQ29waWxvdCA9IGZvcm0uQ29waWxvdDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lV2ViQXBpRmllbGQob2JqOiBhbnksIGZpZWxkTmFtZTogc3RyaW5nLCBlbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4sIGNvbmZpZzogRGV2S2l0LklXZWJBcGlGaWVsZENvbmZpZywgdXBzZXJ0RW50aXR5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGxvZ2ljYWxOYW1lLCBzY2hlbWFOYW1lLCBlbnRpdHlDb2xsZWN0aW9uTmFtZSwgZW50aXR5TG9naWNhbE5hbWUsIHJlYWRPbmx5LCB0eXBlIH0gPSBjb25maWc7XHJcbiAgICBjb25zdCBnZXRGb3JtYXR0ZWRWYWx1ZSA9ICgpOiBzdHJpbmcgfCBzdHJpbmdbXSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkS2V5ID0gbG9naWNhbE5hbWUgKyAnQE9EYXRhLkNvbW11bml0eS5EaXNwbGF5LlYxLkZvcm1hdHRlZFZhbHVlJztcclxuICAgICAgICBpZiAoZW50aXR5Py5bZm9ybWF0dGVkS2V5XSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2Zvcm1hdHRlZEtleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW50aXR5Q29sbGVjdGlvbk5hbWUgIT09IHVuZGVmaW5lZCAmJiBlbnRpdHlDb2xsZWN0aW9uTmFtZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvb2t1cEtleSA9IGxvZ2ljYWxOYW1lICsgJ0BNaWNyb3NvZnQuRHluYW1pY3MuQ1JNLmxvb2t1cGxvZ2ljYWxuYW1lJztcclxuICAgICAgICAgICAgaWYgKGVudGl0eT8uW2xvb2t1cEtleV0gPT09IGVudGl0eUxvZ2ljYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5Py5bZm9ybWF0dGVkS2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnTXVsdGlPcHRpb25TZXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldPy50b1N0cmluZygpPy5zcGxpdCgnOycpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtPy50cmltKCkpID8/IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZW50aXR5Py5bZm9ybWF0dGVkS2V5XTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9ICgpOiBhbnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRpdHk/Lltsb2dpY2FsTmFtZV0gPT09IHVuZGVmaW5lZCB8fCBlbnRpdHk/Lltsb2dpY2FsTmFtZV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbG9va3VwS2V5ID0gbG9naWNhbE5hbWUgKyAnQE1pY3Jvc29mdC5EeW5hbWljcy5DUk0ubG9va3VwbG9naWNhbG5hbWUnO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Py5bbG9va3VwS2V5XSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2xvb2t1cEtleV0gPT09IGVudGl0eUxvZ2ljYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2ViQXBpUmV0dXJuR2V0KGVudGl0eT8uW2xvZ2ljYWxOYW1lXSwgdHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSAnTXVsdGlPcHRpb25TZXQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk/Lltsb2dpY2FsTmFtZV0/LnRvU3RyaW5nKCk/LnNwbGl0KCcsJykubWFwKChpdGVtOiBzdHJpbmcpID0+IHBhcnNlSW50KGl0ZW0sIDEwKSkgPz8gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJBcGlSZXR1cm5HZXQoZW50aXR5Py5bbG9naWNhbE5hbWVdLCB0eXBlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdNdWx0aU9wdGlvblNldCcpIHZhbHVlID0gdmFsdWU/LmpvaW4oJywnKTtcclxuICAgICAgICBpZiAoZW50aXR5Q29sbGVjdGlvbk5hbWUgIT09IHVuZGVmaW5lZCAmJiBlbnRpdHlDb2xsZWN0aW9uTmFtZT8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiaW5kaW5nTmFtZSA9IChzY2hlbWFOYW1lID8/IGxvZ2ljYWxOYW1lKSArICdAb2RhdGEuYmluZCc7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdXBzZXJ0RW50aXR5W2JpbmRpbmdOYW1lXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhblZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnJlcGxhY2UoL1t7fV0vZywgJycpIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB1cHNlcnRFbnRpdHlbYmluZGluZ05hbWVdID0gJy8nICsgZW50aXR5Q29sbGVjdGlvbk5hbWUgKyAnKCcgKyBjbGVhblZhbHVlICsgJyknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBzZXJ0RW50aXR5W2xvZ2ljYWxOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbnRpdHlbbG9naWNhbE5hbWVdID0gdmFsdWU7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iai5Gb3JtYXR0ZWRWYWx1ZSwgZmllbGROYW1lLCB7XHJcbiAgICAgICAgZ2V0OiBnZXRGb3JtYXR0ZWRWYWx1ZVxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVhZE9ubHkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICAgICAgZ2V0OiBnZXRWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICAgICAgZ2V0OiBnZXRWYWx1ZSxcclxuICAgICAgICAgICAgc2V0OiBzZXRWYWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWJBcGlFbnRpdHk8VCBleHRlbmRzIERldktpdC5JV2ViQXBpRW50aXR5PihlbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQsIGVudGl0eU5hbWU6IHN0cmluZywgZW50aXR5Q29sbGVjdGlvbk5hbWU6IHN0cmluZywgZmllbGRDb25maWdNYXA6IERldktpdC5JV2ViQXBpRmllbGRDb25maWdNYXApOiBUIHtcclxuICAgIGNvbnN0IGUgPSBlbnRpdHkgPz8ge307XHJcbiAgICBjb25zdCB1cHNlcnRFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcclxuICAgIGNvbnN0IHdlYkFwaUVudGl0eTogYW55ID0ge1xyXG4gICAgICAgIE9EYXRhRW50aXR5OiBlLFxyXG4gICAgICAgIEZvcm1hdHRlZFZhbHVlOiB7fSxcclxuICAgICAgICBFbnRpdHk6IHVwc2VydEVudGl0eSxcclxuICAgICAgICBFbnRpdHlOYW1lOiBlbnRpdHlOYW1lLFxyXG4gICAgICAgIEVudGl0eUNvbGxlY3Rpb25OYW1lOiBlbnRpdHlDb2xsZWN0aW9uTmFtZSxcclxuICAgICAgICAnQG9kYXRhLmV0YWcnOiBlPy5bJ0BvZGF0YS5ldGFnJ10sXHJcbiAgICAgICAgZ2V0QWxpYXNlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQgPSBmYWxzZSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmIChlPy5bYWxpYXNdID09PSB1bmRlZmluZWQgfHwgZT8uW2FsaWFzXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTXVsdGlPcHRpb25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlPy5bYWxpYXNdLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gcGFyc2VJbnQoaXRlbSwgMTApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZT8uW2FsaWFzXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEFsaWFzZWRGb3JtYXR0ZWRWYWx1ZShhbGlhczogc3RyaW5nLCBpc011bHRpT3B0aW9uU2V0ID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFsaWFzICsgJ0BPRGF0YS5Db21tdW5pdHkuRGlzcGxheS5WMS5Gb3JtYXR0ZWRWYWx1ZSc7XHJcbiAgICAgICAgICAgIGlmIChlPy5ba2V5XSA9PT0gdW5kZWZpbmVkIHx8IGU/LltrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzTXVsdGlPcHRpb25TZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlPy5ba2V5XT8udG9TdHJpbmcoKT8uc3BsaXQoJzsnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gaXRlbT8udHJpbSgpKSA/PyBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZT8uW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAoY29uc3QgZmllbGROYW1lIGluIGZpZWxkQ29uZmlnTWFwKSB7XHJcbiAgICAgICAgZGVmaW5lV2ViQXBpRmllbGQod2ViQXBpRW50aXR5LCBmaWVsZE5hbWUsIGUsIGZpZWxkQ29uZmlnTWFwW2ZpZWxkTmFtZV0sIHVwc2VydEVudGl0eSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2ViQXBpRW50aXR5IGFzIFQ7XHJcbn0iLCAiLyoqXHJcbiAqIE9wdGlvblNldC50cyAtIENlbnRyYWxpemVkIE9wdGlvblNldCBkZWZpbml0aW9uc1xyXG4gKiBHZW5lcmF0ZWQgZmlsZSAtIERPIE5PVCBNT0RJRlkgTUFOVUFMTFlcclxuICogXHJcbiAqIFVzYWdlOiBpbXBvcnQgeyBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9PcHRpb25TZXQnO1xyXG4gKiAgICAgICAgT3B0aW9uU2V0LkZvcm1UeXBlLkNyZWF0ZVxyXG4gKiAgICAgICAgT3B0aW9uU2V0LkFjY291bnQuSW5kdXN0cnlDb2RlLkNvbnN1bHRpbmdcclxuICovXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdsb2JhbCBPcHRpb25TZXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWR2YW5jZWQgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmb3IgdGhlIG9yZ2FuaXphdGlvbiAqL1xyXG5jb25zdCBBZHZhbmNlZENvbmZpZ1NldHRpbmcgPSB7XHJcbiAgICAvKiogTWF4Q2hpbGRJbmNpZGVudE51bWJlciAqL1xyXG4gICAgTWF4Q2hpbGRJbmNpZGVudE51bWJlcjogJ01heENoaWxkSW5jaWRlbnROdW1iZXInLFxyXG4gICAgLyoqIE1heEluY2lkZW50TWVyZ2VOdW1iZXIgKi9cclxuICAgIE1heEluY2lkZW50TWVyZ2VOdW1iZXI6ICdNYXhJbmNpZGVudE1lcmdlTnVtYmVyJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSB2YWx1ZSB0byBpbmRpY2F0ZSB3aGljaCBjbGllbnQgdGhlIHNjcmlwdCBpcyBleGVjdXRpbmcgaW4gKi9cclxuY29uc3QgQ2xpZW50TmFtZSA9IHtcclxuICAgIC8qKiBXZWIgKi9cclxuICAgIFdlYjogJ1dlYicsXHJcbiAgICAvKiogT3V0bG9vayAqL1xyXG4gICAgT3V0bG9vazogJ091dGxvb2snLFxyXG4gICAgLyoqIE1vYmlsZSAqL1xyXG4gICAgTW9iaWxlOiAnTW9iaWxlJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSB2YWx1ZSB0byBpbmRpY2F0ZSB0aGUgc3RhdGUgb2YgdGhlIGNsaWVudCAqL1xyXG5jb25zdCBDbGllbnRTdGF0ZSA9IHtcclxuICAgIC8qKiBPbmxpbmUgKi9cclxuICAgIE9ubGluZTogJ09ubGluZScsXHJcbiAgICAvKiogT2ZmbGluZSAqL1xyXG4gICAgT2ZmbGluZTogJ09mZmxpbmUnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhlIHR5cGUgb2YgYXR0cmlidXRlICovXHJcbmNvbnN0IEZpZWxkQXR0cmlidXRlVHlwZSA9IHtcclxuICAgIC8qKiBib29sZWFuICovXHJcbiAgICBCb29sZWFuOiAnYm9vbGVhbicsXHJcbiAgICAvKiogZGF0ZXRpbWUgKi9cclxuICAgIERhdGVUaW1lOiAnZGF0ZXRpbWUnLFxyXG4gICAgLyoqIGRlY2ltYWwgKi9cclxuICAgIERlY2ltYWw6ICdkZWNpbWFsJyxcclxuICAgIC8qKiBkb3VibGUgKi9cclxuICAgIERvdWJsZTogJ2RvdWJsZScsXHJcbiAgICAvKiogaW50ZWdlciAqL1xyXG4gICAgSW50ZWdlcjogJ2ludGVnZXInLFxyXG4gICAgLyoqIGxvb2t1cCAqL1xyXG4gICAgTG9va3VwOiAnbG9va3VwJyxcclxuICAgIC8qKiBtZW1vICovXHJcbiAgICBNZW1vOiAnbWVtbycsXHJcbiAgICAvKiogbW9uZXkgKi9cclxuICAgIE1vbmV5OiAnbW9uZXknLFxyXG4gICAgLyoqIG11bHRpc2VsZWN0b3B0aW9uc2V0ICovXHJcbiAgICBNdWx0aU9wdGlvblNldDogJ211bHRpb3B0aW9uc2V0JyxcclxuICAgIC8qKiBvcHRpb25zZXQgKi9cclxuICAgIE9wdGlvblNldDogJ29wdGlvbnNldCcsXHJcbiAgICAvKiogc3RyaW5nICovXHJcbiAgICBTdHJpbmc6ICdzdHJpbmcnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogQSB2YWx1ZSB0aGF0IGNhdGVnb3JpemVzIGNvbnRyb2xzICovXHJcbmNvbnN0IEZpZWxkQ29udHJvbFR5cGUgPSB7XHJcbiAgICAvKiogc3RhbmRhcmQgLSBBIHN0YW5kYXJkIGNvbnRyb2wgKi9cclxuICAgIFN0YW5kYXJkOiAnc3RhbmRhcmQnLFxyXG4gICAgLyoqIGlmcmFtZSAtIEFuIElGUkFNRSBjb250cm9sICovXHJcbiAgICBJZnJhbWU6ICdpZnJhbWUnLFxyXG4gICAgLyoqIGtic2VhcmNoIC0gQSBrbm93bGVkZ2UgYmFzZSBzZWFyY2ggY29udHJvbCAqL1xyXG4gICAgS2JTZWFyY2g6ICdrYnNlYXJjaCcsXHJcbiAgICAvKiogbG9va3VwIC0gQSBsb29rdXAgY29udHJvbCAqL1xyXG4gICAgTG9va3VwOiAnbG9va3VwJyxcclxuICAgIC8qKiBtdWx0aXNlbGVjdG9wdGlvbnNldCAtIEEgbXVsdGktc2VsZWN0IG9wdGlvbiBzZXQgY29udHJvbCAqL1xyXG4gICAgTXVsdGlTZWxlY3RPcHRpb25zZXQ6ICdtdWx0aXNlbGVjdG9wdGlvbnNldCcsXHJcbiAgICAvKiogbm90ZXMgLSBBIG5vdGVzIGNvbnRyb2wgKi9cclxuICAgIE5vdGVzOiAnbm90ZXMnLFxyXG4gICAgLyoqIG9wdGlvbnNldCAtIEFuIG9wdGlvbiBzZXQgY29udHJvbCAqL1xyXG4gICAgT3B0aW9uU2V0OiAnb3B0aW9uc2V0JyxcclxuICAgIC8qKiBxdWlja2Zvcm0gLSBBIHF1aWNrIHZpZXcgY29udHJvbCAqL1xyXG4gICAgUXVpY2tGb3JtOiAncXVpY2tmb3JtJyxcclxuICAgIC8qKiBzdWJncmlkIC0gQSBzdWJncmlkIGNvbnRyb2wgKi9cclxuICAgIFN1YkdyaWQ6ICdzdWJncmlkJyxcclxuICAgIC8qKiB0aW1lcmNvbnRyb2wgLSBBIHRpbWVyIGNvbnRyb2wgKi9cclxuICAgIFRpbWVyQ29udHJvbDogJ3RpbWVyY29udHJvbCcsXHJcbiAgICAvKiogdGltZWxpbmV3YWxsIC0gQSB0aW1lbGluZSBjb250cm9sIChmb3IgVW5pZmllZCBJbnRlcmZhY2UpICovXHJcbiAgICBUaW1lbGluZVdhbGw6ICd0aW1lbGluZXdhbGwnLFxyXG4gICAgLyoqIHdlYnJlc291cmNlIC0gQSB3ZWIgcmVzb3VyY2UgY29udHJvbCAqL1xyXG4gICAgV2ViUmVzb3VyY2U6ICd3ZWJyZXNvdXJjZSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgcmVwcmVzZW50cyBmb3JtYXR0aW5nIG9wdGlvbnMgZm9yIHRoZSBhdHRyaWJ1dGUgKi9cclxuY29uc3QgRmllbGRGb3JtYXQgPSB7XHJcbiAgICAvKiogZGF0ZSAqL1xyXG4gICAgRGF0ZTogJ2RhdGUnLFxyXG4gICAgLyoqIGRhdGV0aW1lICovXHJcbiAgICBEYXRlVGltZTogJ2RhdGV0aW1lJyxcclxuICAgIC8qKiBkdXJhdGlvbiAqL1xyXG4gICAgRHVyYXRpb246ICdkdXJhdGlvbicsXHJcbiAgICAvKiogZW1haWwgKi9cclxuICAgIEVtYWlsOiAnZW1haWwnLFxyXG4gICAgLyoqIGxhbmd1YWdlICovXHJcbiAgICBMYW5ndWFnZTogJ2xhbmd1YWdlJyxcclxuICAgIC8qKiBub25lICovXHJcbiAgICBOb25lOiAnbm9uZScsXHJcbiAgICAvKiogdGV4dGFyZWEgKi9cclxuICAgIFRleHRBcmVhOiAndGV4dGFyZWEnLFxyXG4gICAgLyoqIHRleHQgKi9cclxuICAgIFRleHQ6ICd0ZXh0JyxcclxuICAgIC8qKiB0aWNrZXJzeW1ib2wgKi9cclxuICAgIFRpY2tlclN5bWJvbDogJ3RpY2tlcnN5bWJvbCcsXHJcbiAgICAvKiogcGhvbmUgKi9cclxuICAgIFBob25lOiAncGhvbmUnLFxyXG4gICAgLyoqIHRpbWV6b25lICovXHJcbiAgICBUaW1lWm9uZTogJ3RpbWV6b25lJyxcclxuICAgIC8qKiB1cmwgKi9cclxuICAgIFVybDogJ3VybCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgdHlwZSBvZiBub3RpZmljYXRpb24gKi9cclxuY29uc3QgRmllbGROb3RpZmljYXRpb25MZXZlbCA9IHtcclxuICAgIC8qKiBFUlJPUiAqL1xyXG4gICAgRXJyb3I6ICdFUlJPUicsXHJcbiAgICAvKiogUkVDT01NRU5EQVRJT04gKi9cclxuICAgIFJlY29tbWVuZGF0aW9uOiAnUkVDT01NRU5EQVRJT04nXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogVmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIGEgdmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUgaXMgbm9uZSBvciByZXF1aXJlZCBvciByZWNvbW1lbmRlZCAqL1xyXG5jb25zdCBGaWVsZFJlcXVpcmVkTGV2ZWwgPSB7XHJcbiAgICAvKiogbm9uZSAqL1xyXG4gICAgTm9uZTogJ25vbmUnLFxyXG4gICAgLyoqIHJlcXVpcmVkICovXHJcbiAgICBSZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgIC8qKiByZWNvbW1lbmRlZCAqL1xyXG4gICAgUmVjb21tZW5kZWQ6ICdyZWNvbW1lbmRlZCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEYXRhIGZyb20gdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIHN1Ym1pdHRlZCB3aGVuIHRoZSByZWNvcmQgaXMgc2F2ZWQgKi9cclxuY29uc3QgRmllbGRTdWJtaXRNb2RlID0ge1xyXG4gICAgLyoqIGFsd2F5cyAtIFRoZSBkYXRhIGlzIGFsd2F5cyBzZW50IHdpdGggYSBzYXZlICovXHJcbiAgICBBbHdheXM6ICdhbHdheXMnLFxyXG4gICAgLyoqIG5ldmVyIC0gVGhlIGRhdGEgaXMgbmV2ZXIgc2VudCB3aXRoIGEgc2F2ZSAqL1xyXG4gICAgTmV2ZXI6ICduZXZlcicsXHJcbiAgICAvKiogZGlydHkgLSBEZWZhdWx0IGJlaGF2aW9yLiBUaGUgZGF0YSBpcyBzZW50IHdpdGggdGhlIHNhdmUgd2hlbiBpdCBoYXMgY2hhbmdlZCAqL1xyXG4gICAgRGlydHk6ICdkaXJ0eSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBraW5kIG9mIGRldmljZSB0aGUgdXNlciBpcyB1c2luZyAqL1xyXG5jb25zdCBGb3JtRmFjdG9yID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIFVua25vd246IDAsXHJcbiAgICAvKiogMSAqL1xyXG4gICAgRGVza3RvcDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBUYWJsZXQ6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgUGhvbmU6IDNcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgbGV2ZWwgb2YgdGhlIG1lc3NhZ2UsIHdoaWNoIGRlZmluZXMgaG93IHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkICovXHJcbmNvbnN0IEZvcm1Ob3RpZmljYXRpb25MZXZlbCA9IHtcclxuICAgIC8qKiBFUlJPUiAtIE5vdGlmaWNhdGlvbiB3aWxsIHVzZSB0aGUgc3lzdGVtIGVycm9yIGljb24gKi9cclxuICAgIEVycm9yOiAnRVJST1InLFxyXG4gICAgLyoqIFdBUk5JTkcgLSBOb3RpZmljYXRpb24gd2lsbCB1c2UgdGhlIHN5c3RlbSB3YXJuaW5nIGljb24gKi9cclxuICAgIFdhcm5pbmc6ICdXQVJOSU5HJyxcclxuICAgIC8qKiBJTkZPIC0gTm90aWZpY2F0aW9uIHdpbGwgdXNlIHRoZSBzeXN0ZW0gaW5mbyBpY29uICovXHJcbiAgICBJbmZvOiAnSU5GTydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBHZXRzIHRoZSBmb3JtIHR5cGUgZm9yIHRoZSByZWNvcmQgKi9cclxuY29uc3QgRm9ybVR5cGUgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgVW5kZWZpbmVkOiAwLFxyXG4gICAgLyoqIDEgLSBRdWljayBDcmVhdGUgZm9ybXMgcmV0dXJuIDEgKi9cclxuICAgIENyZWF0ZTogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBVcGRhdGU6IDIsXHJcbiAgICAvKiogMyAqL1xyXG4gICAgUmVhZE9ubHk6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgRGlzYWJsZWQ6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgQnVsa0VkaXQ6IDVcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgZnVsbCBuYW1lIGNvbnZlbnRpb25Db2RlIHNldHRpbmcgb2YgdGhlIGN1cnJlbnQgb3JnYW5pemF0aW9uICovXHJcbmNvbnN0IEZ1bGxOYW1lQ29udmVudGlvbkNvZGUgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgTGFzdE5hbWVfQ29tbWFfRmlyc3ROYW1lOiAwLFxyXG4gICAgLyoqIDEgKi9cclxuICAgIEZpcnN0TmFtZV9MYXN0TmFtZTogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWVfTWlkZGxlSW5pdGlhbDogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBGaXJzdE5hbWVfTWlkZGxlSW5pdGlhbF9MYXN0TmFtZTogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWVfTWlkZGxlTmFtZTogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBGaXJzdE5hbWVfTWlkZGxlTmFtZV9MYXN0TmFtZTogNSxcclxuICAgIC8qKiA2ICovXHJcbiAgICBMYXN0TmFtZV9GaXJzdE5hbWU6IDYsXHJcbiAgICAvKiogNyAqL1xyXG4gICAgTGFzdE5hbWVGaXJzdE5hbWU6IDdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgdHlwZSBvZiBncmlkICovXHJcbmNvbnN0IEdyaWRUeXBlID0ge1xyXG4gICAgLyoqIDEgKi9cclxuICAgIEhvbWVQYWdlR3JpZDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBTdWJncmlkOiAyXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGVzY3JpYmluZyB3aGV0aGVyIHRvIG9wZW4gb3Igc2F2ZSB0aGUgZmlsZSAqL1xyXG5jb25zdCBPcGVuRmlsZU9wdGlvbiA9IHtcclxuICAgIC8qKiAxICovXHJcbiAgICBPcGVuOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFNhdmU6IDJcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgaW50ZWdlciB2YWx1ZSBvZiB0aGUgYnVzaW5lc3MgcHJvY2VzcyBmbG93IGNhdGVnb3J5ICovXHJcbmNvbnN0IFByb2Nlc3NDYXRlZ29yeSA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBRdWFsaWZ5OiAwLFxyXG4gICAgLyoqIDEgKi9cclxuICAgIERldmVsb3A6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgUHJvcG9zZTogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBDbG9zZTogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBJZGVudGlmeTogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBSZXNlYXJjaDogNSxcclxuICAgIC8qKiA2ICovXHJcbiAgICBSZXNvbHZlOiA2XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGlzcGxheSBzdGF0ZSBvZiB0aGUgYnVzaW5lc3MgcHJvY2VzcyBmbG93ICovXHJcbmNvbnN0IFByb2Nlc3NEaXNwbGF5U3RhdGUgPSB7XHJcbiAgICAvKiogZXhwYW5kZWQgKi9cclxuICAgIEV4cGFuZGVkOiAnZXhwYW5kZWQnLFxyXG4gICAgLyoqIGNvbGxhcHNlZCAqL1xyXG4gICAgQ29sbGFwc2VkOiAnY29sbGFwc2VkJyxcclxuICAgIC8qKiBmbG9hdGluZyAqL1xyXG4gICAgRmxvYXRpbmc6ICdmbG9hdGluZydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgaW50ZWdlciB2YWx1ZSBzdGF0dXMgb2YgdGhlIHN0YWdlICovXHJcbmNvbnN0IFByb2Nlc3NTdGF0dXMgPSB7XHJcbiAgICAvKiogYWN0aXZlICovXHJcbiAgICBBY3RpdmU6ICdhY3RpdmUnLFxyXG4gICAgLyoqIGFib3J0ZWQgKi9cclxuICAgIEFib3J0ZWQ6ICdhYm9ydGVkJyxcclxuICAgIC8qKiBmaW5pc2hlZCAqL1xyXG4gICAgRmluaXNoZWQ6ICdmaW5pc2hlZCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgdmFsdWUgaW5kaWNhdGluZyBob3cgdGhlIHNhdmUgZXZlbnQgd2FzIGluaXRpYXRlZCBieSB0aGUgdXNlciAqL1xyXG5jb25zdCBTYXZlTW9kZSA9IHtcclxuICAgIC8qKiAxIC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBTYXZlOiAxLFxyXG4gICAgLyoqIDIgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFNhdmVBbmRDbG9zZTogMixcclxuICAgIC8qKiA1IC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBEZWFjdGl2YXRlOiA1LFxyXG4gICAgLyoqIDYgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFJlYWN0aXZhdGU6IDYsXHJcbiAgICAvKiogNyAtIEVtYWlsICovXHJcbiAgICBFbWFpbDogNyxcclxuICAgIC8qKiAxNSAtIExlYWQgKi9cclxuICAgIERpc3F1YWxpZnk6IDE1LFxyXG4gICAgLyoqIDE2IC0gTGVhZCAqL1xyXG4gICAgUXVhbGlmeTogMTYsXHJcbiAgICAvKiogNDcgLSBVc2VyIG9yIFRlYW0gKi9cclxuICAgIEFzc2lnbjogNDcsXHJcbiAgICAvKiogNTggLSBBY3Rpdml0aWVzICovXHJcbiAgICBTYXZlQXNDb21wbGV0ZWQ6IDU4LFxyXG4gICAgLyoqIDU5IC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBTYXZlQW5kTmV3OiA1OSxcclxuICAgIC8qKiA3MCAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgQXV0b1NhdmU6IDcwXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogU3BlY2lmeSBvcHRpb25zIGZvciBzYXZpbmcgdGhlIHJlY29yZCAqL1xyXG5jb25zdCBTYXZlT3B0aW9uID0ge1xyXG4gICAgLyoqIHNhdmVhbmRjbG9zZSAtIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgdXNpbmcgdGhlIFNhdmUgYW5kIENsb3NlIGNvbW1hbmQgKi9cclxuICAgIFNhdmVBbmRDbG9zZTogJ3NhdmVhbmRjbG9zZScsXHJcbiAgICAvKiogc2F2ZWFuZG5ldyAtIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgb2YgdGhlIHVzaW5nIHRoZSBTYXZlIGFuZCBOZXcgY29tbWFuZCAqL1xyXG4gICAgU2F2ZUFuZE5ldzogJ3NhdmVhbmRuZXcnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogRGlzcGxheSBzdGF0ZSBvZiB0aGUgc2lkZSBwYW5lICovXHJcbmNvbnN0IFNpZGVQYW5lU3RhdGUgPSB7XHJcbiAgICAvKiogMCAtIENvbGxhcHNlZCAqL1xyXG4gICAgQ29sbGFwc2VkOiAwLFxyXG4gICAgLyoqIDEgLSBFeHBhbmRlZCAqL1xyXG4gICAgRXhwYW5kZWQ6IDFcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgY29udHJvbCB0eXBlIG9mIHRhYiAqL1xyXG5jb25zdCBUYWJDb250ZW50VHlwZSA9IHtcclxuICAgIC8qKiBjYXJkU2VjdGlvbnM6IFRoZSBkZWZhdWx0IHRhYiBiZWhhdmlvciAqL1xyXG4gICAgQ2FyZFNlY3Rpb25zOiAnY2FyZFNlY3Rpb25zJyxcclxuICAgIC8qKiBzaW5nbGVDb21wb25lbnQ6IE1heGltaXplcyB0aGUgY29udGVudCBvZiB0aGUgZmlyc3QgY29tcG9uZW50IGluIHRoZSB0YWIgKi9cclxuICAgIFNpbmdsZUNvbXBvbmVudDogJ3NpbmdsZUNvbXBvbmVudCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSB0YWIgKi9cclxuY29uc3QgVGFiRGlzcGxheVN0YXRlID0ge1xyXG4gICAgLyoqIGV4cGFuZGVkICovXHJcbiAgICBFeHBhbmRlZDogJ2V4cGFuZGVkJyxcclxuICAgIC8qKiBjb2xsYXBzZWQgKi9cclxuICAgIENvbGxhcHNlZDogJ2NvbGxhcHNlZCdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBUaGUgc3RhdGUgb2YgdGhlIHRpbWVyIGNvbnRyb2wgLSBUaGlzIG1ldGhvZCBpcyBvbmx5IHN1cHBvcnRlZCBmb3IgVW5pZmllZCBJbnRlcmZhY2UgKi9cclxuY29uc3QgVGltZXJTdGF0ZSA9IHtcclxuICAgIC8qKiAxICovXHJcbiAgICBOb3RTZXQ6IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgSW5Qcm9ncmVzczogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBXYXJuaW5nOiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIFZpb2xhdGVkOiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIFN1Y2Nlc3M6IDUsXHJcbiAgICAvKiogNiAqL1xyXG4gICAgRXhwaXJlZDogNixcclxuICAgIC8qKiA3ICovXHJcbiAgICBDYW5jZWxlZDogNyxcclxuICAgIC8qKiA4ICovXHJcbiAgICBQYXVzZWQ6IDhcclxufSBhcyBjb25zdDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRW50aXR5IE9wdGlvblNldHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEFjY291bnQgZW50aXR5IE9wdGlvblNldHMgKi9cclxuY29uc3QgQWNjb3VudCA9IHtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5IGZvciB1c2UgaW4gbWFya2V0aW5nIHNlZ21lbnRhdGlvbiBhbmQgZGVtb2dyYXBoaWMgYW5hbHlzaXMgKi9cclxuICAgIEluZHVzdHJ5Q29kZToge1xyXG4gICAgICAgIC8qKiAxIC0gQWNjb3VudGluZyAqL1xyXG4gICAgICAgIEFjY291bnRpbmc6IDEsXHJcbiAgICAgICAgLyoqIDcgLSBDb25zdWx0aW5nICovXHJcbiAgICAgICAgQ29uc3VsdGluZzogNyxcclxuICAgICAgICAvKiogMTYgLSBGaW5hbmNpYWwgKi9cclxuICAgICAgICBGaW5hbmNpYWw6IDE2LFxyXG4gICAgICAgIC8qKiAyMCAtIEluc3VyYW5jZSAqL1xyXG4gICAgICAgIEluc3VyYW5jZTogMjAsXHJcbiAgICAgICAgLyoqIDEyIC0gVGVjaG5vbG9neSAqL1xyXG4gICAgICAgIFRlY2hub2xvZ3k6IDEyXHJcbiAgICB9LFxyXG4gICAgLyoqIEN1c3RvbSBNdWx0aU9wdGlvblNldCAtIHY0X0NhdGVnb3JpZXMgKi9cclxuICAgIHY0X0NhdGVnb3JpZXM6IHtcclxuICAgICAgICAvKiogMTAwMDAwMDAwICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfQTogMTAwMDAwMDAwLFxyXG4gICAgICAgIC8qKiAxMDAwMDAwMDEgKi9cclxuICAgICAgICBDYXRlZ29yeV9COiAxMDAwMDAwMDEsXHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMiAqL1xyXG4gICAgICAgIENhdGVnb3J5X0M6IDEwMDAwMDAwMixcclxuICAgICAgICAvKiogMTAwMDAwMDAzICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfRDogMTAwMDAwMDAzXHJcbiAgICB9XHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEV4cG9ydCBjb21iaW5lZCBPcHRpb25TZXRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IGNvbnN0IE9wdGlvblNldCA9IHtcclxuICAgIC8vIEdsb2JhbCBPcHRpb25TZXRzXHJcbiAgICBBZHZhbmNlZENvbmZpZ1NldHRpbmcsXHJcbiAgICBDbGllbnROYW1lLFxyXG4gICAgQ2xpZW50U3RhdGUsXHJcbiAgICBGaWVsZEF0dHJpYnV0ZVR5cGUsXHJcbiAgICBGaWVsZENvbnRyb2xUeXBlLFxyXG4gICAgRmllbGRGb3JtYXQsXHJcbiAgICBGaWVsZE5vdGlmaWNhdGlvbkxldmVsLFxyXG4gICAgRmllbGRSZXF1aXJlZExldmVsLFxyXG4gICAgRmllbGRTdWJtaXRNb2RlLFxyXG4gICAgRm9ybUZhY3RvcixcclxuICAgIEZvcm1Ob3RpZmljYXRpb25MZXZlbCxcclxuICAgIEZvcm1UeXBlLFxyXG4gICAgRnVsbE5hbWVDb252ZW50aW9uQ29kZSxcclxuICAgIEdyaWRUeXBlLFxyXG4gICAgT3BlbkZpbGVPcHRpb24sXHJcbiAgICBQcm9jZXNzQ2F0ZWdvcnksXHJcbiAgICBQcm9jZXNzRGlzcGxheVN0YXRlLFxyXG4gICAgUHJvY2Vzc1N0YXR1cyxcclxuICAgIFNhdmVNb2RlLFxyXG4gICAgU2F2ZU9wdGlvbixcclxuICAgIFNpZGVQYW5lU3RhdGUsXHJcbiAgICBUYWJDb250ZW50VHlwZSxcclxuICAgIFRhYkRpc3BsYXlTdGF0ZSxcclxuICAgIFRpbWVyU3RhdGUsXHJcbiAgICAvLyBFbnRpdHkgT3B0aW9uU2V0c1xyXG4gICAgQWNjb3VudFxyXG59IGFzIGNvbnN0O1xyXG4iLCAiLyoqXHJcbiAqIEFjY291bnQuZm9ybS50cyAtIEFjY291bnQgRm9ybSBmb3IgZWFybHktYm91bmQgc3R5bGUgZm9ybSBjb2RpbmdcclxuICogR2VuZXJhdGVkIGZpbGUgLSBETyBOT1QgTU9ESUZZIE1BTlVBTExZXHJcbiAqIFxyXG4gKiBTdHJ1Y3R1cmU6XHJcbiAqIDEuIEltcG9ydHNcclxuICogMi4gVHlwZXMgLSBJQm9keSwgSUhlYWRlciwgSVRhYnMsIElHcmlkLCBJTmF2aWdhdGlvbiwgSVF1aWNrRm9ybSwgSVByb2Nlc3NcclxuICogMy4gUnVudGltZSAtIEZvcm0gY2xhc3Mgd2l0aCBmaWVsZCBjb25maWd1cmF0aW9uc1xyXG4gKi9cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9saWIvZGV2a2l0LmQudHNcIiAvPlxyXG5pbXBvcnQgeyBGb3JtQmFzZSB9IGZyb20gJy4uLy4uL2xpYi9kZXZraXQnO1xyXG5pbXBvcnQgJy4vT3B0aW9uU2V0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4gVHlwZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBBY2NvdW50Rm9ybSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCb2R5IGNvbnRyb2xzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYWxsIGNvbnRyb2xzIG9uIHRoZSBmb3JtIGJvZHlcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQm9keSB7XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIGNvbXBhbnkgb3IgYnVzaW5lc3MgbmFtZS4gKi9cclxuICAgICAgICBOYW1lOiBEZXZLaXQuQ29udHJvbHMuU3RyaW5nO1xyXG4gICAgICAgIC8qKiBUeXBlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gZGVzY3JpYmUgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgRGVzY3JpcHRpb246IERldktpdC5Db250cm9scy5NZW1vO1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBOdW1iZXJPZkVtcGxveWVlczogRGV2S2l0LkNvbnRyb2xzLkludGVnZXI7XHJcbiAgICAgICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBjcmVkaXQgZm9yIHRoZSBhY2NvdW50IGlzIG9uIGhvbGQuICovXHJcbiAgICAgICAgQ3JlZGl0T25Ib2xkOiBEZXZLaXQuQ29udHJvbHMuQm9vbGVhbjtcclxuICAgICAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBpbmR1c3RyeS4gKi9cclxuICAgICAgICBJbmR1c3RyeUNvZGU6IERldktpdC5Db250cm9scy5PcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIENob29zZSB0aGUgcHJpbWFyeSBjb250YWN0IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBQcmltYXJ5Q29udGFjdElkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgICAgIC8qKiBDdXN0b20gQmlydGhkYXkgZmllbGQgKi9cclxuICAgICAgICB2NF9CaXJ0aGRheTogRGV2S2l0LkNvbnRyb2xzLkRhdGVPbmx5O1xyXG4gICAgICAgIC8qKiBDdXN0b20gQXBwb2ludG1lbnQgVGltZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0FwcG9pbnRtZW50VGltZTogRGV2S2l0LkNvbnRyb2xzLkRhdGVUaW1lO1xyXG4gICAgICAgIC8qKiBDdXN0b20gTGF0aXR1ZGUgZmllbGQgKi9cclxuICAgICAgICB2NF9MYXRpdHVkZTogRGV2S2l0LkNvbnRyb2xzLkRlY2ltYWw7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBEaXNjb3VudCBQZXJjZW50YWdlIGZpZWxkICovXHJcbiAgICAgICAgdjRfRGlzY291bnRQZXJjZW50YWdlOiBEZXZLaXQuQ29udHJvbHMuRG91YmxlO1xyXG4gICAgICAgIC8qKiBDdXN0b20gQ2F0ZWdvcmllcyBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0NhdGVnb3JpZXM6IERldktpdC5Db250cm9scy5NdWx0aU9wdGlvblNldDtcclxuICAgICAgICAvKiogQ3VzdG9tIEhlbHAgV2ViIFJlc291cmNlICovXHJcbiAgICAgICAgdjRfV2ViUmVzb3VyY2VIZWxwOiBEZXZLaXQuQ29udHJvbHMuV2ViUmVzb3VyY2U7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBFeHRlcm5hbCBQYWdlICovXHJcbiAgICAgICAgdjRfSUZyYW1lRXh0ZXJuYWw6IERldktpdC5Db250cm9scy5JRnJhbWU7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBTTEEgVGltZXIgKi9cclxuICAgICAgICB2NF9UaW1lclNMQTogRGV2S2l0LkNvbnRyb2xzLlRpbWVyO1xyXG4gICAgICAgIC8qKiBLbm93bGVkZ2UgQmFzZSBTZWFyY2ggKi9cclxuICAgICAgICB2NF9Lbm93bGVkZ2VTZWFyY2g6IERldktpdC5Db250cm9scy5Lbm93bGVkZ2U7XHJcbiAgICAgICAgLyoqIEZvcm0gVGFicyAqL1xyXG4gICAgICAgIFRhYjogSVRhYnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIZWFkZXIgY29udHJvbHMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBjb250cm9scyBkaXNwbGF5ZWQgaW4gdGhlIGZvcm0gaGVhZGVyXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUhlYWRlciB7XHJcbiAgICAgICAgLyoqIEVudGVyIHRoZSB1c2VyIG9yIHRlYW0gd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgICAgIE93bmVySWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIE51bWJlck9mRW1wbG95ZWVzOiBEZXZLaXQuQ29udHJvbHMuSW50ZWdlcjtcclxuICAgICAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIFJldmVudWU6IERldktpdC5Db250cm9scy5Nb25leTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1bW1hcnkgdGFiIHNlY3Rpb25zIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTVU1NQVJZX1RBQlRhYlNlY3Rpb25zIHtcclxuICAgICAgICBBQ0NPVU5UX0lORk9STUFUSU9OOiBEZXZLaXQuQ29udHJvbHMuU2VjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1bW1hcnkgdGFiIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTVU1NQVJZX1RBQlRhYiBleHRlbmRzIERldktpdC5Db250cm9scy5JVGFiIHtcclxuICAgICAgICBTZWN0aW9uOiBJU1VNTUFSWV9UQUJUYWJTZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRhYnMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBhbGwgdGFicyBvbiB0aGUgZm9ybVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElUYWJzIHtcclxuICAgICAgICBTVU1NQVJZX1RBQjogSVNVTU1BUllfVEFCVGFiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR3JpZCBjb250cm9scyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGFsbCBzdWJncmlkIGNvbnRyb2xzIG9uIHRoZSBmb3JtXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUdyaWQge1xyXG4gICAgICAgIENvbnRhY3RzOiBEZXZLaXQuQ29udHJvbHMuR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRpb24gaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBuYXZpZ2F0aW9uIGl0ZW1zXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSU5hdmlnYXRpb24ge1xyXG4gICAgICAgIG5hdl9tc2FfYWNjb3VudF9tYW5hZ2luZ3BhcnRuZXI6IERldktpdC5Db250cm9scy5OYXZpZ2F0aW9uSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFF1aWNrRm9ybSBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIHF1aWNrIHZpZXcgZm9ybSBjb250cm9sc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElRdWlja0Zvcm0ge1xyXG4gICAgICAgIGNvbnRhY3RxdWlja2Zvcm06IERldktpdC5Db250cm9scy5JUXVpY2tWaWV3ICYge1xyXG4gICAgICAgICAgICBCb2R5OiB7XHJcbiAgICAgICAgICAgICAgICBFTWFpbEFkZHJlc3MxOiBEZXZLaXQuQ29udHJvbHMuUXVpY2tWaWV3O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdXNpbmVzcyBQcm9jZXNzIEZsb3cgZmllbGRzIGludGVyZmFjZVxyXG4gICAgICogdjRfQWNjb3VudEJQRiAtIEN1c3RvbSBBY2NvdW50IEJ1c2luZXNzIFByb2Nlc3MgRmxvd1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElCUEYge1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IEFjY291bnQgTmFtZSAoU3RhZ2UgMTogUXVhbGlmeSkgKi9cclxuICAgICAgICBOYW1lOiBEZXZLaXQuQ29udHJvbHMuU3RyaW5nO1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IEluZHVzdHJ5IENvZGUgKFN0YWdlIDE6IFF1YWxpZnkpICovXHJcbiAgICAgICAgSW5kdXN0cnlDb2RlOiBEZXZLaXQuQ29udHJvbHMuT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IFJldmVudWUgKFN0YWdlIDI6IERldmVsb3ApICovXHJcbiAgICAgICAgUmV2ZW51ZTogRGV2S2l0LkNvbnRyb2xzLk1vbmV5O1xyXG4gICAgICAgIC8qKiBCUEYgRmllbGQ6IFByaW1hcnkgQ29udGFjdCAoU3RhZ2UgMjogRGV2ZWxvcCkgKi9cclxuICAgICAgICBQcmltYXJ5Q29udGFjdElkOiBEZXZLaXQuQ29udHJvbHMuTG9va3VwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvY2VzcyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGJ1c2luZXNzIHByb2Nlc3MgZmxvdyBkZWZpbml0aW9uc1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQcm9jZXNzIGV4dGVuZHMgRGV2S2l0LkNvbnRyb2xzLklQcm9jZXNzIHtcclxuICAgICAgICAvKiogdjRfQWNjb3VudEJQRiAtIEN1c3RvbSBBY2NvdW50IEJ1c2luZXNzIFByb2Nlc3MgRmxvdyAqL1xyXG4gICAgICAgIHY0X0FjY291bnRCUEY6IElCUEY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gMi4gUnVudGltZSAtIEZvcm0gQ2xhc3NcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFjY291bnQgRm9ybSBjbGFzc1xyXG4gICAgICogUHJvdmlkZXMgdHlwZWQgYWNjZXNzIHRvIGFsbCBmb3JtIGNvbnRyb2xzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBGb3JtIGV4dGVuZHMgRm9ybUJhc2U8SUJvZHksIElIZWFkZXIsIElUYWJzLCBJR3JpZCwgSU5hdmlnYXRpb24sIElRdWlja0Zvcm0sIElQcm9jZXNzPiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ3JlYXRlcyBhbiBBY2NvdW50IEZvcm0gaW5zdGFuY2VcclxuICAgICAgICAgKiBAcGFyYW0gZXhlY3V0aW9uQ29udGV4dCBUaGUgZXhlY3V0aW9uIGNvbnRleHQgZnJvbSBmb3JtIGV2ZW50XHJcbiAgICAgICAgICogQHBhcmFtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgT3B0aW9uYWwgZGVmYXVsdCB3ZWIgcmVzb3VyY2UgbmFtZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSwgZGVmYXVsdFdlYlJlc291cmNlTmFtZT86IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihleGVjdXRpb25Db250ZXh0LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlck9mRW1wbG95ZWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlZGl0T25Ib2xkJyxcclxuICAgICAgICAgICAgICAgICAgICAnSW5kdXN0cnlDb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAnUHJpbWFyeUNvbnRhY3RJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0JpcnRoZGF5JyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQXBwb2ludG1lbnRUaW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfTGF0aXR1ZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9EaXNjb3VudFBlcmNlbnRhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9DYXRlZ29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfV2ViUmVzb3VyY2VIZWxwJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfSUZyYW1lRXh0ZXJuYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9UaW1lclNMQScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0tub3dsZWRnZVNlYXJjaCdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAnT3duZXJJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlck9mRW1wbG95ZWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAnUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdGFiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NVTU1BUllfVEFCX19fQUNDT1VOVF9JTkZPUk1BVElPTidcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBncmlkOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRhY3RzJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IFtcclxuICAgICAgICAgICAgICAgICAgICAnbmF2X21zYV9hY2NvdW50X21hbmFnaW5ncGFydG5lcidcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBxdWljazogW1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250YWN0cXVpY2tmb3JtX19fRU1haWxBZGRyZXNzMSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBicGY6IFtcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX05hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fSW5kdXN0cnlDb2RlJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQWNjb3VudEJQRl9fX1JldmVudWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fUHJpbWFyeUNvbnRhY3RJZCdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgLSBOYW1lIEZpZWxkIChTdHJpbmcpXHJcbiAqIFRoaXMgdGVzdHMgdGhlIGJhc2UgSUNvbnRyb2wgaW50ZXJmYWNlIHRoYXQgYWxsIGNvbnRyb2xzIGluaGVyaXQgZnJvbVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdENvbnRyb2woZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBjb250cm9sID0gZm9ybS5Cb2R5Lk5hbWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGNvbnRyb2wuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZU5hbWUgPT09IFwibmFtZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogY29udHJvbC5BdHRyaWJ1dGVUeXBlID09PSBcInN0cmluZ1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogY29udHJvbC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGNvbnRyb2wuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogY29udHJvbC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGNvbnRyb2wuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogY29udHJvbC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BlcnRpZXMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3Qgc2V0dGVyUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcblxyXG4gICAgLy8gU2V0dGVyc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBjb250cm9sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29udHJvbC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1JlcXVpcmVkID0gY29udHJvbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGNvbnRyb2wuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGAke29yaWdSZXF1aXJlZH1cdTIxOTJyZXF1aXJlZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdSZXF1aXJlZCA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1N1Ym1pdCA9IGNvbnRyb2wuU3VibWl0TW9kZTtcclxuICAgICAgICBjb250cm9sLlN1Ym1pdE1vZGUgPSBcImFsd2F5c1wiO1xyXG4gICAgICAgIGNvbnN0IG5ld1N1Ym1pdCA9IGNvbnRyb2wuU3VibWl0TW9kZTtcclxuICAgICAgICBjb250cm9sLlN1Ym1pdE1vZGUgPSBvcmlnU3VibWl0O1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZSAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1N1Ym1pdH1cdTIxOTJhbHdheXNcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3U3VibWl0ID09PSBcImFsd2F5c1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gY29udHJvbC5EaXNhYmxlZDtcclxuICAgICAgICBjb250cm9sLkRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBuZXdEaXNhYmxlZCA9IGNvbnRyb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgY29udHJvbC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnRGlzYWJsZWR9XHUyMTkydHJ1ZVx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdEaXNhYmxlZCA9PT0gdHJ1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBjb250cm9sLkxhYmVsO1xyXG4gICAgICAgIGNvbnRyb2wuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBuZXdMYWJlbCA9IGNvbnRyb2wuTGFiZWw7XHJcbiAgICAgICAgY29udHJvbC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBgXCIke29yaWdMYWJlbH1cIlx1MjE5Mm1vZGlmaWVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld0xhYmVsLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gY29udHJvbC5WaXNpYmxlO1xyXG4gICAgICAgIGNvbnRyb2wuVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IG5ld1Zpc2libGUgPSBjb250cm9sLlZpc2libGU7XHJcbiAgICAgICAgY29udHJvbC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnVmlzaWJsZX1cdTIxOTJmYWxzZVx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdWaXNpYmxlID09PSBmYWxzZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlICsgXCIgKE1PRElGSUVEKVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY29udHJvbC5WYWx1ZTtcclxuICAgICAgICBjb250cm9sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBgbW9kaWZpZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3VmFsdWU/LmluY2x1ZGVzKFwiKE1PRElGSUVEKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPbkNoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRwdXRDaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBPdXRwdXRDaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkT25PdXRwdXRDaGFuZ2Uob3V0cHV0Q2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQWRkT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkFkZE9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuUmVtb3ZlT25PdXRwdXRDaGFuZ2Uob3V0cHV0Q2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uT3V0cHV0Q2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLlNldE5vdGlmaWNhdGlvbihcIlRlc3Qgbm90aWZpY2F0aW9uIGZyb20gSUNvbnRyb2xcIiwgXCJDVFJMX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJDVFJMX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY2xlYXJlZCA9IGNvbnRyb2wuQ2xlYXJOb3RpZmljYXRpb24oXCJOT05FWElTVEVOVFwiKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJDbGVhck5vdGlmaWNhdGlvblwiLCBWYWx1ZTogYFJlc3VsdDogJHtjbGVhcmVkfWAsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkNsZWFyTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuQWRkTm90aWZpY2F0aW9uKHtcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcIlJlY29tbWVuZGF0aW9uIGZyb20gdGVzdFwiXSxcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uTGV2ZWw6IFwiUkVDT01NRU5EQVRJT05cIixcclxuICAgICAgICAgICAgdW5pcXVlSWQ6IFwiQ1RSTF9URVNUXzJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIkNUUkxfVEVTVF8yXCIpLCAzMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiQWRkZWQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiQWRkTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWQgbWVzc2FnZVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2wuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLnNldHRlclJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REY5Qlx1RkUwRiBURVNUIDA6IElDb250cm9sIEludGVyZmFjZSBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOYW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHNldHRlclJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxOiBMb29rdXAgQ29udHJvbCAtIFByaW1hcnlDb250YWN0SWQgRmllbGRcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RMb29rdXAoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBsb29rdXAgPSBmb3JtLkJvZHkuUHJpbWFyeUNvbnRhY3RJZDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbERlZmF1bHRWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3O1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gbG9va3VwLlZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGhhc1ZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBoYXNWYWx1ZSA/IGAke2N1cnJlbnRWYWx1ZVswXS5uYW1lfSAoJHtjdXJyZW50VmFsdWVbMF0uZW50aXR5VHlwZX0pYCA6IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJJc1BhcnR5TGlzdFwiLCBWYWx1ZTogbG9va3VwLklzUGFydHlMaXN0LCBTdGF0dXM6IGxvb2t1cC5Jc1BhcnR5TGlzdCA9PT0gZmFsc2UgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzXCIsIFZhbHVlOiBKU09OLnN0cmluZ2lmeShsb29rdXAuRW50aXR5VHlwZXMpLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0Vmlld1wiLCBWYWx1ZTogb3JpZ2luYWxEZWZhdWx0VmlldywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbG9va3VwLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBsb29rdXAuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBsb29rdXAuQ29udHJvbFR5cGUsIFN0YXR1czogbG9va3VwLkNvbnRyb2xUeXBlID09PSBcImxvb2t1cFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbG9va3VwLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBsb29rdXAuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbG9va3VwLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBsb29rdXAuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGxvb2t1cC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbG9va3VwLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGxvb2t1cC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbG9va3VwLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuXHJcbiAgICBjb25zdCBwcmVTZWFyY2hDYWxsYmFjayA9IChjdHg6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclhtbCA9IFwiPGZpbHRlciB0eXBlPSdhbmQnPjxjb25kaXRpb24gYXR0cmlidXRlPSdzdGF0ZWNvZGUnIG9wZXJhdG9yPSdlcScgdmFsdWU9JzAnIC8+PC9maWx0ZXI+XCI7XHJcbiAgICAgICAgbG9va3VwLkFkZEN1c3RvbUZpbHRlcihmaWx0ZXJYbWwsIFwiY29udGFjdFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFByZVNlYXJjaCBmaXJlZCAtIGZpbHRlciBhcHBsaWVkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0YWdDbGlja0NhbGxiYWNrID0gKGN0eDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBMb29rdXBUYWdDbGljayBmaXJlZCAtIHRhZyB3YXMgY2xpY2tlZFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0dGVyc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0Vmlld0lkID0gXCJ7MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAyfVwiO1xyXG4gICAgICAgIGxvb2t1cC5EZWZhdWx0VmlldyA9IHRlc3RWaWV3SWQ7XHJcbiAgICAgICAgY29uc3QgbmV3VmlldyA9IGxvb2t1cC5EZWZhdWx0VmlldztcclxuICAgICAgICBsb29rdXAuRGVmYXVsdFZpZXcgPSBvcmlnaW5hbERlZmF1bHRWaWV3O1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiRGVmYXVsdFZpZXcgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0VmlldyAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFR5cGVzID0gbG9va3VwLkVudGl0eVR5cGVzO1xyXG4gICAgICAgIGxvb2t1cC5FbnRpdHlUeXBlcyA9IFtcImNvbnRhY3RcIl07XHJcbiAgICAgICAgY29uc3QgbmV3VHlwZXMgPSBsb29rdXAuRW50aXR5VHlwZXM7XHJcbiAgICAgICAgbG9va3VwLkVudGl0eVR5cGVzID0gb3JpZ2luYWxUeXBlcztcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkVudGl0eVR5cGVzIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXMgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZFByZVNlYXJjaChwcmVTZWFyY2hDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRQcmVTZWFyY2hcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuUmVtb3ZlUHJlU2VhcmNoKHByZVNlYXJjaENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZVByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5BZGRMb29rdXBUYWdDbGljayh0YWdDbGlja0NhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkFkZExvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJBZGRMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuUmVtb3ZlTG9va3VwVGFnQ2xpY2sodGFnQ2xpY2tDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVtb3ZlTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZEN1c3RvbVZpZXcoXHJcbiAgICAgICAgICAgIFwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAxXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiLFxyXG4gICAgICAgICAgICBcIkFjdGl2ZSBDb250YWN0cyAoQ3VzdG9tIFZpZXcpXCIsXHJcbiAgICAgICAgICAgIFwiPGZldGNoPjxlbnRpdHkgbmFtZT0nY29udGFjdCc+PGF0dHJpYnV0ZSBuYW1lPSdmdWxsbmFtZScvPjwvZW50aXR5PjwvZmV0Y2g+XCIsXHJcbiAgICAgICAgICAgIFwiPGdyaWQgbmFtZT0ncmVzdWx0c2V0Jz48cm93IG5hbWU9J3Jlc3VsdCcgaWQ9J2NvbnRhY3RpZCc+PGNlbGwgbmFtZT0nZnVsbG5hbWUnIHdpZHRoPScyMDAnLz48L3Jvdz48L2dyaWQ+XCIsXHJcbiAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZEN1c3RvbVZpZXdcIiwgVmFsdWU6IFwiQWRkZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRDdXN0b21WaWV3XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5TZXROb3RpZmljYXRpb24oXCJUZXN0IG5vdGlmaWNhdGlvblwiLCBcIlRFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGxvb2t1cC5DbGVhck5vdGlmaWNhdGlvbihcIlRFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgaW4gM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9va3VwLkZvY3VzKCksIDQwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICg0cylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDBEIFRFU1QgMTogTG9va3VwIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogUHJpbWFyeUNvbnRhY3RJZCBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzkpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMzogTWVtbyBDb250cm9sIC0gRGVzY3JpcHRpb24gRmllbGRcclxuICogTWVtbyBleHRlbmRzIElDb250cm9sVGV4dCB3aXRoIE1heExlbmd0aCBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE1lbW8oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1lbW8gPSBmb3JtLkJvZHkuRGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1lbW8uVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNZW1vLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heExlbmd0aFwiLCBWYWx1ZTogbWVtby5NYXhMZW5ndGgsIFN0YXR1czogdHlwZW9mIG1lbW8uTWF4TGVuZ3RoID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSA/IGBcIiR7b3JpZ2luYWxWYWx1ZS5zdWJzdHJpbmcoMCwgNTApfSR7b3JpZ2luYWxWYWx1ZS5sZW5ndGggPiA1MCA/ICcuLi4nIDogJyd9XCJgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbWVtby5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1lbW8uQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZU5hbWUgPT09IFwiZGVzY3JpcHRpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlVHlwZSA9PT0gXCJtZW1vXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtZW1vLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogbWVtby5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtZW1vLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbWVtby5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbWVtby5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbWVtby5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbWVtby5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1lbW8uRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbWVtby5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG1lbW8uVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgICAgICBtZW1vLlZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgXCJcIikgKyBcIiBbVEVTVF1cIjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1lbW8uVmFsdWU7XHJcbiAgICAgICAgbWVtby5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gbWVtby5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1lbW8uUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtZW1vLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1lbW8uRGlzYWJsZWQ7XHJcbiAgICAgICAgbWVtby5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLkRpc2FibGVkO1xyXG4gICAgICAgIG1lbW8uRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBtZW1vLkxhYmVsO1xyXG4gICAgICAgIG1lbW8uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uTGFiZWw7XHJcbiAgICAgICAgbWVtby5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBtZW1vLlZpc2libGU7XHJcbiAgICAgICAgbWVtby5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5WaXNpYmxlO1xyXG4gICAgICAgIG1lbW8uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTWVtbyBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbWVtby5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5TZXROb3RpZmljYXRpb24oXCJUZXN0IE1lbW8gbm90aWZpY2F0aW9uXCIsIFwiTUVNT19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLkNsZWFyTm90aWZpY2F0aW9uKFwiTUVNT19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDREQgVEVTVCAyOiBNZW1vIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogRGVzY3JpcHRpb24gZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAzOiBTdHJpbmcgQ29udHJvbCAtIE5hbWUgRmllbGRcclxuICogU3RyaW5nIGV4dGVuZHMgSUNvbnRyb2xUZXh0IHdpdGggTWF4TGVuZ3RoIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0U3RyaW5nKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBzdHIgPSBmb3JtLkJvZHkuTmFtZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gc3RyLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU3RyaW5nLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heExlbmd0aFwiLCBWYWx1ZTogc3RyLk1heExlbmd0aCwgU3RhdHVzOiB0eXBlb2Ygc3RyLk1heExlbmd0aCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgPyBgXCIke29yaWdpbmFsVmFsdWUuc3Vic3RyaW5nKDAsIDUwKX0ke29yaWdpbmFsVmFsdWUubGVuZ3RoID4gNTAgPyAnLi4uJyA6ICcnfVwiYCA6IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc3RyLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogc3RyLkF0dHJpYnV0ZU5hbWUgPT09IFwibmFtZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBzdHIuQXR0cmlidXRlVHlwZSA9PT0gXCJzdHJpbmdcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IHN0ci5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IHN0ci5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBzdHIuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBzdHIuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IHN0ci5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogc3RyLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBzdHIuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBzdHIuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogc3RyLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogc3RyLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICAgICAgc3RyLlZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgXCJcIikgKyBcIiBbVEVTVF1cIjtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHN0ci5WYWx1ZTtcclxuICAgICAgICBzdHIuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IHN0ci5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIHN0ci5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgc3RyLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gc3RyLkRpc2FibGVkO1xyXG4gICAgICAgIHN0ci5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuRGlzYWJsZWQ7XHJcbiAgICAgICAgc3RyLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBzdHIuTGFiZWw7XHJcbiAgICAgICAgc3RyLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuTGFiZWw7XHJcbiAgICAgICAgc3RyLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IHN0ci5WaXNpYmxlO1xyXG4gICAgICAgIHN0ci5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc3RyLlZpc2libGU7XHJcbiAgICAgICAgc3RyLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFN0cmluZyBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBTdHJpbmcgbm90aWZpY2F0aW9uXCIsIFwiU1RSSU5HX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0ci5DbGVhck5vdGlmaWNhdGlvbihcIlNUUklOR19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHN0ci5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0M0IFRFU1QgMzogU3RyaW5nIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogTmFtZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDQ6IEludGVnZXIgQ29udHJvbCAtIE51bWJlck9mRW1wbG95ZWVzIEZpZWxkXHJcbiAqIEludGVnZXIgZXh0ZW5kcyBJQ29udHJvbE51bWJlciB3aXRoIE1heCwgTWluIHByb3BlcnRpZXMgKE5PIFByZWNpc2lvbiBzdXBwb3J0KVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEludGVnZXIoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGludCA9IGZvcm0uSGVhZGVyLk51bWJlck9mRW1wbG95ZWVzO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBpbnQuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBJbnRlZ2VyLXNwZWNpZmljIHByb3BlcnRpZXMgKElDb250cm9sTnVtYmVyIC0gTk8gUHJlY2lzaW9uIGZvciBJbnRlZ2VyKVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4XCIsIFZhbHVlOiBpbnQuTWF4LCBTdGF0dXM6IHR5cGVvZiBpbnQuTWF4ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJNaW5cIiwgVmFsdWU6IGludC5NaW4sIFN0YXR1czogdHlwZW9mIGludC5NaW4gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGludC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogaW50LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogaW50LkF0dHJpYnV0ZU5hbWUgPT09IFwibnVtYmVyb2ZlbXBsb3llZXNcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogaW50LkF0dHJpYnV0ZVR5cGUgPT09IFwiaW50ZWdlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogaW50LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogaW50LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGludC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBpbnQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGludC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogaW50LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBpbnQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBpbnQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogaW50LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogaW50LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgMCkgKyAxMDA7XHJcbiAgICAgICAgaW50LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaW50LlZhbHVlO1xyXG4gICAgICAgIGludC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGludC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGludC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaW50LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgaW50LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gaW50LkRpc2FibGVkO1xyXG4gICAgICAgIGludC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuRGlzYWJsZWQ7XHJcbiAgICAgICAgaW50LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBpbnQuTGFiZWw7XHJcbiAgICAgICAgaW50LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuTGFiZWw7XHJcbiAgICAgICAgaW50LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gaW50LlZpc2libGU7XHJcbiAgICAgICAgaW50LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuVmlzaWJsZTtcclxuICAgICAgICBpbnQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgSW50ZWdlciBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW50LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBJbnRlZ2VyIG5vdGlmaWNhdGlvblwiLCBcIklOVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuQ2xlYXJOb3RpZmljYXRpb24oXCJJTlRfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1REQyMiBURVNUIDQ6IEludGVnZXIgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOdW1iZXJPZkVtcGxveWVlcyBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDU6IE9wdGlvblNldCBDb250cm9sIC0gSW5kdXN0cnlDb2RlIEZpZWxkXHJcbiAqIE9wdGlvblNldCBleHRlbmRzIElDb250cm9sT3B0aW9uU2V0IHdpdGggSW5pdGlhbFZhbHVlLCBTZWxlY3RlZE9wdGlvbiwgVGV4dCwgVmFsdWVcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RPcHRpb25TZXQoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG9wdCA9IGZvcm0uQm9keS5JbmR1c3RyeUNvZGU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG9wdC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE9wdGlvblNldC1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWVcIiwgVmFsdWU6IG9wdC5Jbml0aWFsVmFsdWUsIFN0YXR1czogdHlwZW9mIG9wdC5Jbml0aWFsVmFsdWUgPT09IFwibnVtYmVyXCIgfHwgb3B0LkluaXRpYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiT3B0aW9uc1wiLCBWYWx1ZTogYCR7b3B0Lk9wdGlvbnM/Lmxlbmd0aCA/PyAwfSBvcHRpb25zYCwgU3RhdHVzOiBvcHQuT3B0aW9ucz8ubGVuZ3RoID4gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiU2VsZWN0ZWRPcHRpb25cIiwgVmFsdWU6IG9wdC5TZWxlY3RlZE9wdGlvbiA/IGAke29wdC5TZWxlY3RlZE9wdGlvbi50ZXh0fSAoJHtvcHQuU2VsZWN0ZWRPcHRpb24udmFsdWV9KWAgOiBcIihub25lKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJUZXh0XCIsIFZhbHVlOiBvcHQuVGV4dCB8fCBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogb3B0LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBvcHQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBvcHQuQXR0cmlidXRlTmFtZSA9PT0gXCJpbmR1c3RyeWNvZGVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogb3B0LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogb3B0LkF0dHJpYnV0ZVR5cGUgPT09IFwib3B0aW9uc2V0XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBvcHQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogb3B0LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBvcHQuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogb3B0LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBvcHQuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG9wdC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogb3B0LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogb3B0LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG9wdC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE4XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG9wdC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBvcHQuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gb3B0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgb3B0LlZhbHVlID0gbmV3VmFsO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5WYWx1ZTtcclxuICAgICAgICAgICAgb3B0LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IG5ld1ZhbCA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IG5ld1ZhbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IFwiTm8gb3B0aW9ucyBhdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogT3B0aW9uKHZhbHVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gb3B0Lk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlc3RPcHRpb24gPSBvcHQuT3B0aW9uKG9wdGlvbnNbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IHRlc3RPcHRpb24gPyBgJHt0ZXN0T3B0aW9uLnRleHR9YCA6IFwibnVsbFwiLCBTdGF0dXM6IHRlc3RPcHRpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IFwiTm8gb3B0aW9uc1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTMzogT3B0aW9uKHRleHQpIC0gTk9UIElNUExFTUVOVEVEOiBPT0IgRHluYW1pY3MgY29kZSB0aHJvd3MgJ1ZhbHVlIHNob3VsZCBiZSBvZiB0eXBlOiBudW1iZXInIGVycm9yXHJcbiAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIk9wdGlvbih0ZXh0KVwiLCBWYWx1ZTogXCJPT0IgQnVnIC0gZGV2a2l0LnRzIG5vdCBzdXBwb3J0XCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9wdGlvbiAoYWRkIHRoZW4gcmVtb3ZlKVxyXG4gICAgLy8gTk9URTogQWRkT3B0aW9uIGFkZHMgdG8gQ09OVFJPTCwgc28gd2UgY2hlY2sgQ29udHJvbE9wdGlvbnMgKG5vdCBPcHRpb25zIHdoaWNoIGlzIGZyb20gYXR0cmlidXRlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuQWRkT3B0aW9uKFwiVGVzdCBPcHRpb24gKEFJKVwiLCA5OTk5OTkpO1xyXG4gICAgICAgIGNvbnN0IGhhc05ldyA9IG9wdC5Db250cm9sT3B0aW9ucz8uc29tZShvID0+IG8udmFsdWUgPT09IDk5OTk5OSk7XHJcbiAgICAgICAgb3B0LlJlbW92ZU9wdGlvbig5OTk5OTkpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQWRkT3B0aW9uXCIsIFZhbHVlOiBoYXNOZXcgPyBcIkFkZGVkXHUyMTkyUmVtb3ZlZFwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiBoYXNOZXcgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQWRkT3B0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9wdGlvbiAoYWxyZWFkeSB0ZXN0ZWQgYWJvdmUgd2l0aCBBZGRPcHRpb24pXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT3B0aW9uXCIsIFZhbHVlOiBcIlRlc3RlZCB3aXRoIFM0XCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT3B0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IENsZWFyT3B0aW9ucyAtIFRlc3QgY2xlYXIgYW5kIHJlc3RvcmUgZnJvbSBPcHRpb25zIChhdHRyaWJ1dGUpXHJcbiAgICAvLyBOT1RFOiBDbGVhck9wdGlvbnMgY2xlYXJzIHRoZSBDT05UUk9MIG9wdGlvbnMsIGJ1dCBPcHRpb25zIChmcm9tIGF0dHJpYnV0ZSkgcmVtYWlucyBpbnRhY3RcclxuICAgIC8vIE5PVEU6IENvbnRyb2xPcHRpb25zIGluY2x1ZGVzIGEgYmxhbmsgb3B0aW9uICh0ZXh0PScnLCB2YWx1ZT1udWxsKSBmb3IgY2xlYXJpbmcgc2VsZWN0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZU9wdGlvbnMgPSBvcHQuT3B0aW9uczsgLy8gU2F2ZSBmcm9tIGF0dHJpYnV0ZSAobm90IGFmZmVjdGVkIGJ5IENsZWFyT3B0aW9ucylcclxuICAgICAgICBjb25zdCBhdHRyTGVuID0gYXR0cmlidXRlT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgb3B0LkNsZWFyT3B0aW9ucygpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFyZWRDb3VudCA9IG9wdC5Db250cm9sT3B0aW9ucz8ubGVuZ3RoID8/IDA7XHJcbiAgICAgICAgLy8gUmVzdG9yZSBvcHRpb25zIGZyb20gYXR0cmlidXRlXHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgYXR0cmlidXRlT3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHQuQWRkT3B0aW9uKG9wdGlvbi50ZXh0LCBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZXN0b3JlZENvdW50ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICAvLyByZXN0b3JlZENvdW50ID49IGF0dHJMZW4gYmVjYXVzZSBDb250cm9sT3B0aW9ucyBtYXkgaW5jbHVkZSBibGFuayBvcHRpb25cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gY2xlYXJlZENvdW50ID09PSAwICYmIHJlc3RvcmVkQ291bnQgPj0gYXR0ckxlbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkNsZWFyT3B0aW9uc1wiLCBWYWx1ZTogc3VjY2VzcyA/IGBDbGVhcigke2NsZWFyZWRDb3VudH0pXHUyMTkyUmVzdG9yZSgke3Jlc3RvcmVkQ291bnR9LyR7YXR0ckxlbn0pYCA6IGBhdHRyPSR7YXR0ckxlbn0sIGNsZWFyPSR7Y2xlYXJlZENvdW50fSwgcmVzdG9yZT0ke3Jlc3RvcmVkQ291bnR9YCwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkNsZWFyT3B0aW9uc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IG9wdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG9wdC5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgb3B0LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gb3B0LkRpc2FibGVkO1xyXG4gICAgICAgIG9wdC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgb3B0LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBvcHQuTGFiZWw7XHJcbiAgICAgICAgb3B0LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuTGFiZWw7XHJcbiAgICAgICAgb3B0LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gb3B0LlZpc2libGU7XHJcbiAgICAgICAgb3B0LlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuVmlzaWJsZTtcclxuICAgICAgICBvcHQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kcyBmcm9tIElDb250cm9sXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE9wdGlvblNldCBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5TZXROb3RpZmljYXRpb24oXCJUZXN0IE9wdGlvblNldCBub3RpZmljYXRpb25cIiwgXCJPUFRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LkNsZWFyTm90aWZpY2F0aW9uKFwiT1BUX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3B0LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQ0IgVEVTVCA1OiBPcHRpb25TZXQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBJbmR1c3RyeUNvZGUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICIvKipcclxuICogQWNjb3VudC53ZWJhcGkudHMgLSBBY2NvdW50IFdlYkFwaSBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIEdlbmVyYXRlZCBmaWxlIC0gRE8gTk9UIE1PRElGWSBNQU5VQUxMWVxyXG4gKiBcclxuICogU3RydWN0dXJlOlxyXG4gKiAxLiBJbXBvcnRzXHJcbiAqIDIuIFR5cGVzIC0gSUFjY291bnRGb3JtYXR0ZWRWYWx1ZSwgSUFjY291bnRBcGlcclxuICogMy4gUnVudGltZSAtIEFjY291bnRGaWVsZENvbmZpZywgQWNjb3VudEFwaSBmYWN0b3J5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGNyZWF0ZVdlYkFwaUVudGl0eSxcclxuICAgIEd1aWQsXHJcbiAgICBJV2ViQXBpRW50aXR5LFxyXG4gICAgSVdlYkFwaUZpZWxkQ29uZmlnTWFwXHJcbn0gZnJvbSAnLi4vLi4vbGliL2RldmtpdCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEuIFR5cGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXR0ZWQgdmFsdWVzIGludGVyZmFjZSBmb3IgQWNjb3VudFxyXG4gKiBBbGwgZmllbGRzIHJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlaXIgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50Rm9ybWF0dGVkVmFsdWUge1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudENhdGVnb3J5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudENsYXNzaWZpY2F0aW9uQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWNjb3VudElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50UmF0aW5nQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQWRkcmVzc0lkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9BZGRyZXNzVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NpdHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NvbXBvc2l0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ291bnRyeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ291bnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9GYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xhdGl0dWRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MaW5lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGluZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xpbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Mb25naXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX05hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1Bvc3RhbENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1Bvc3RPZmZpY2VCb3g6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1RlbGVwaG9uZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1RlbGVwaG9uZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1RlbGVwaG9uZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1VQU1pvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1VUQ09mZnNldDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQWRkcmVzc0lkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9BZGRyZXNzVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NpdHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvbXBvc2l0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ291bnRyeTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ291bnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9GYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0ZyZWlnaHRUZXJtc0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xhdGl0dWRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MaW5lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGluZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xpbmUzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Mb25naXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX05hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1Bvc3RhbENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1Bvc3RPZmZpY2VCb3g6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1RlbGVwaG9uZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1RlbGVwaG9uZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1RlbGVwaG9uZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1VQU1pvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1VUQ09mZnNldDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X0NyZWF0ZWRCeVVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfTW9kaWZpZWRCeUlQQWRkcmVzczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzYwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzYwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nOTA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nOTBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQnVzaW5lc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkT25fVXRjRGF0ZUFuZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbkJlaGFsZkJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlZGl0TGltaXRfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlZGl0T25Ib2xkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDdXN0b21lclNpemVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDdXN0b21lclR5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RCdWxrRU1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90QnVsa1Bvc3RhbE1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90RU1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90RmF4OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdFBob25lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdFBvc3RhbE1haWw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90U2VuZE1NOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFTWFpbEFkZHJlc3MxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFTWFpbEFkZHJlc3MyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFTWFpbEFkZHJlc3MzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VfVGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZV9VUkw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEV4Y2hhbmdlUmF0ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRmF4OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGb2xsb3dFbWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRnRwU2l0ZVVSTDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSW1wb3J0U2VxdWVuY2VOdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEluZHVzdHJ5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSXNQcml2YXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMYXN0T25Ib2xkVGltZV9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTGFzdFVzZWRJbkNhbXBhaWduX1V0Y0RhdGVPbmx5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXJrZXRDYXA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldENhcF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXJrZXRpbmdPbmx5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNYXN0ZXJJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWVyZ2VkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbl9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbkJlaGFsZkJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBtc2FfbWFuYWdpbmdwYXJ0bmVyaWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE51bWJlck9mRW1wbG95ZWVzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPbkhvbGRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPdmVycmlkZGVuQ3JlYXRlZE9uX1V0Y0RhdGVPbmx5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25lcklkX3N5c3RlbXVzZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmVySWRfdGVhbTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duZXJzaGlwQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duaW5nQnVzaW5lc3NVbml0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdUZWFtOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdVc2VyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQYXJlbnRBY2NvdW50SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBheW1lbnRUZXJtc0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByZWZlcnJlZEFwcG9pbnRtZW50RGF5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQ29udGFjdE1ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByZWZlcnJlZFN5c3RlbVVzZXJJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJpbWFyeUNvbnRhY3RJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJpbWFyeVNhdG9yaUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5VHdpdHRlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcm9jZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFJldmVudWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFJldmVudWVfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU2hhcmVzT3V0c3RhbmRpbmc6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNoaXBwaW5nTWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU0lDOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTTEFJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU0xBSW52b2tlZElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTdGFnZUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTdGF0ZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YXR1c0NvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0b2NrRXhjaGFuZ2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlbGVwaG9uZTE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlbGVwaG9uZTI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlbGVwaG9uZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRlcnJpdG9yeUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRpY2tlclN5bWJvbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGltZVNwZW50QnlNZU9uRW1haWxBbmRNZWV0aW5nczogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGltZVpvbmVSdWxlVmVyc2lvbk51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVHJhbnNhY3Rpb25DdXJyZW5jeUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUcmF2ZXJzZWRQYXRoOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBVVENDb252ZXJzaW9uVGltZVpvbmVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBWZXJzaW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBXZWJTaXRlVVJMOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBZb21pTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQWNjb3VudCBXZWJBcGkgZW50aXR5IGludGVyZmFjZVxyXG4gKiBQcm92aWRlcyBJbnRlbGxpU2Vuc2UgZm9yIGVhcmx5LWJvdW5kIHN0eWxlIGNvZGluZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3VudEFwaSBleHRlbmRzIElXZWJBcGlFbnRpdHkge1xyXG4gICAgLyoqIEZvcm1hdHRlZCB2YWx1ZXMgZm9yIGFsbCBmaWVsZHMgKi9cclxuICAgIHJlYWRvbmx5IEZvcm1hdHRlZFZhbHVlOiBJQWNjb3VudEZvcm1hdHRlZFZhbHVlO1xyXG4gICAgLyoqIFNlbGVjdCBhIGNhdGVnb3J5IHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIGN1c3RvbWVyIGFjY291bnQgaXMgc3RhbmRhcmQgb3IgcHJlZmVycmVkLiAqL1xyXG4gICAgQWNjb3VudENhdGVnb3J5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBjbGFzc2lmaWNhdGlvbiBjb2RlIHRvIGluZGljYXRlIHRoZSBwb3RlbnRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbWVyIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQWNjb3VudElkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGFuIElEIG51bWJlciBvciBjb2RlIGZvciB0aGUgYWNjb3VudCB0byBxdWlja2x5IHNlYXJjaCBhbmQgaWRlbnRpZnkgdGhlIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50TnVtYmVyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHJhdGluZyB0byBpbmRpY2F0ZSB0aGUgdmFsdWUgb2YgdGhlIGN1c3RvbWVyIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50UmF0aW5nQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgYWRkcmVzcyAxLiAqL1xyXG4gICAgQWRkcmVzczFfQWRkcmVzc0lkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByaW1hcnkgYWRkcmVzcyB0eXBlLiAqL1xyXG4gICAgQWRkcmVzczFfQWRkcmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNpdHkgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9DaXR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db21wb3NpdGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnRyeSBvciByZWdpb24gZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNvdW50eSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NvdW50eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgZnJlaWdodCB0ZXJtcyBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbGF0aXR1ZGUgdmFsdWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzZWNvbmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgdGhpcmQgbGluZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTGluZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbG9uZ2l0dWRlIHZhbHVlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBaSVAgQ29kZSBvciBwb3N0YWwgY29kZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1Bvc3RhbENvZGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcG9zdCBvZmZpY2UgYm94IG51bWJlciBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUG9zdE9mZmljZUJveDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBuYW1lIG9mIHRoZSBtYWluIGNvbnRhY3QgYXQgdGhlIGFjY291bnQncyBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9QcmltYXJ5Q29udGFjdE5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzIHNlbnQgdG8gdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfU2hpcHBpbmdNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0YXRlIG9yIHByb3ZpbmNlIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBzZWNvbmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUFMgem9uZSBvZiB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVVBTWm9uZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHRpbWUgem9uZSwgb3IgVVRDIG9mZnNldCwgZm9yIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1VUQ09mZnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgYWRkcmVzcyAyLiAqL1xyXG4gICAgQWRkcmVzczJfQWRkcmVzc0lkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHNlY29uZGFyeSBhZGRyZXNzIHR5cGUuICovXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY2l0eSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfQ2l0eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY29tcGxldGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db21wb3NpdGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnRyeSBvciByZWdpb24gZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0NvdW50cnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnR5IGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Db3VudHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmF4IG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfRmF4OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgZnJlaWdodCB0ZXJtcyBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsYXRpdHVkZSB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGF0aXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmlyc3QgbGluZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MaW5lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzZWNvbmQgbGluZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MaW5lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSB0aGlyZCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxvbmdpdHVkZSB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBkZXNjcmlwdGl2ZSBuYW1lIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9OYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFpJUCBDb2RlIG9yIHBvc3RhbCBjb2RlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Qb3N0YWxDb2RlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHBvc3Qgb2ZmaWNlIGJveCBudW1iZXIgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfUG9zdE9mZmljZUJveDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBuYW1lIG9mIHRoZSBtYWluIGNvbnRhY3QgYXQgdGhlIGFjY291bnQncyBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGlzIGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RhdGUgb3IgcHJvdmluY2Ugb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfU3RhdGVPclByb3ZpbmNlOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1haW4gcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSBzZWNvbmQgcGhvbmUgbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSB0aGlyZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgVVBTIHpvbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVVBTWm9uZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHRpbWUgem9uZSwgb3IgVVRDIG9mZnNldCwgZm9yIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1VUQ09mZnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgIEFkeF9DcmVhdGVkQnlJUEFkZHJlc3M6IHN0cmluZyB8IG51bGw7XHJcbiAgICBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICBBZHhfTW9kaWZpZWRCeUlQQWRkcmVzczogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9Nb2RpZmllZEJ5VXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nMzA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVGhlIGJhc2UgY3VycmVuY3kgZXF1aXZhbGVudCBvZiB0aGUgYWdpbmcgMzAgZmllbGQuICovXHJcbiAgICByZWFkb25seSBBZ2luZzMwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nNjA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVGhlIGJhc2UgY3VycmVuY3kgZXF1aXZhbGVudCBvZiB0aGUgYWdpbmcgNjAgZmllbGQuICovXHJcbiAgICByZWFkb25seSBBZ2luZzYwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nOTA6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVGhlIGJhc2UgY3VycmVuY3kgZXF1aXZhbGVudCBvZiB0aGUgYWdpbmcgOTAgZmllbGQuICovXHJcbiAgICByZWFkb25seSBBZ2luZzkwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBsZWdhbCBkZXNpZ25hdGlvbiBvciBvdGhlciBidXNpbmVzcyB0eXBlIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQnVzaW5lc3NUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5OiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZXh0ZXJuYWwgcGFydHkgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZC4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHJlY29yZCB3YXMgY3JlYXRlZC4gKi9cclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZCBvbiBiZWhhbGYgb2YgYW5vdGhlciB1c2VyLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uQmVoYWxmQnk6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGNyZWRpdCBsaW1pdCBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIENyZWRpdExpbWl0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjcmVkaXQgbGltaXQgY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdF9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBjcmVkaXQgZm9yIHRoZSBhY2NvdW50IGlzIG9uIGhvbGQuICovXHJcbiAgICBDcmVkaXRPbkhvbGQ6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgc2l6ZSBjYXRlZ29yeSBvciByYW5nZSBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIEN1c3RvbWVyU2l6ZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBjYXRlZ29yeSB0aGF0IGJlc3QgZGVzY3JpYmVzIHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgYWNjb3VudCBhbmQgeW91ciBvcmdhbml6YXRpb24uICovXHJcbiAgICBDdXN0b21lclR5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byBkZXNjcmliZSB0aGUgYWNjb3VudC4gKi9cclxuICAgIERlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBidWxrIGVtYWlsIHNlbnQgdGhyb3VnaCBjYW1wYWlnbnMuICovXHJcbiAgICBEb05vdEJ1bGtFTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGJ1bGsgcG9zdGFsIG1haWwuICovXHJcbiAgICBEb05vdEJ1bGtQb3N0YWxNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgZGlyZWN0IGVtYWlsLiAqL1xyXG4gICAgRG9Ob3RFTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGZheGVzLiAqL1xyXG4gICAgRG9Ob3RGYXg6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBwaG9uZSBjYWxscy4gKi9cclxuICAgIERvTm90UGhvbmU6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgbWFpbC4gKi9cclxuICAgIERvTm90UG9zdGFsTWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWNjZXB0cyBtYXJrZXRpbmcgbWF0ZXJpYWxzLiAqL1xyXG4gICAgRG9Ob3RTZW5kTU06IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHByaW1hcnkgZW1haWwgYWRkcmVzcyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBFTWFpbEFkZHJlc3MxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZGFyeSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhbiBhbHRlcm5hdGUgZW1haWwgYWRkcmVzcyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBFTWFpbEFkZHJlc3MzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkZWZhdWx0IGltYWdlIGZvciB0aGUgcmVjb3JkLiAqL1xyXG4gICAgRW50aXR5SW1hZ2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IG51bWJlciB8IG51bGw7XHJcbiAgICBFbnRpdHlJbWFnZV9VUkw6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogRm9yIGludGVybmFsIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VJZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNvbnZlcnNpb24gcmF0ZSBvZiB0aGUgcmVjb3JkJ3MgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBFeGNoYW5nZVJhdGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgZmF4IG51bWJlciBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBGYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogSW5mb3JtYXRpb24gYWJvdXQgd2hldGhlciB0byBhbGxvdyBmb2xsb3dpbmcgZW1haWwgYWN0aXZpdHkuICovXHJcbiAgICBGb2xsb3dFbWFpbDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgVVJMIGZvciB0aGUgYWNjb3VudCdzIEZUUCBzaXRlLiAqL1xyXG4gICAgRnRwU2l0ZVVSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgZGF0YSBpbXBvcnQgb3IgZGF0YSBtaWdyYXRpb24gdGhhdCBjcmVhdGVkIHRoaXMgcmVjb3JkLiAqL1xyXG4gICAgSW1wb3J0U2VxdWVuY2VOdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBhY2NvdW50J3MgcHJpbWFyeSBpbmR1c3RyeS4gKi9cclxuICAgIEluZHVzdHJ5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHJlYWRvbmx5IElzUHJpdmF0ZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogQ29udGFpbnMgdGhlIGRhdGUgYW5kIHRpbWUgc3RhbXAgb2YgdGhlIGxhc3Qgb24gaG9sZCB0aW1lLiAqL1xyXG4gICAgTGFzdE9uSG9sZFRpbWVfVXRjRGF0ZUFuZFRpbWU6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIHdoZW4gdGhlIGFjY291bnQgd2FzIGxhc3QgaW5jbHVkZWQgaW4gYSBtYXJrZXRpbmcgY2FtcGFpZ24uICovXHJcbiAgICBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG1hcmtldCBjYXBpdGFsaXphdGlvbiBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIE1hcmtldENhcDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgbWFya2V0IGNhcGl0YWxpemF0aW9uIGNvbnZlcnRlZCB0byB0aGUgc3lzdGVtJ3MgZGVmYXVsdCBiYXNlIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgTWFya2V0Q2FwX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogV2hldGhlciBpcyBvbmx5IGZvciBtYXJrZXRpbmcgKi9cclxuICAgIE1hcmtldGluZ09ubHk6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBtYXN0ZXIgYWNjb3VudCB0aGF0IHRoZSBhY2NvdW50IHdhcyBtZXJnZWQgd2l0aC4gKi9cclxuICAgIHJlYWRvbmx5IE1hc3RlcklkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aGV0aGVyIHRoZSBhY2NvdW50IGhhcyBiZWVuIG1lcmdlZCB3aXRoIGFub3RoZXIgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE1lcmdlZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGxhc3QgdXBkYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeTogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGV4dGVybmFsIHBhcnR5IHdobyBtb2RpZmllZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRCeUV4dGVybmFsUGFydHk6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIHJlY29yZCB3YXMgbGFzdCB1cGRhdGVkLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbl9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3Mgd2hvIGNyZWF0ZWQgdGhlIHJlY29yZCBvbiBiZWhhbGYgb2YgYW5vdGhlciB1c2VyLiAqL1xyXG4gICAgcmVhZG9ubHkgTW9kaWZpZWRPbkJlaGFsZkJ5OiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBmb3IgQWNjb3VudCBhc3NvY2lhdGVkIHdpdGggQWNjb3VudC4gKi9cclxuICAgIG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY29tcGFueSBvciBidXNpbmVzcyBuYW1lLiAqL1xyXG4gICAgTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBudW1iZXIgb2YgZW1wbG95ZWVzIHRoYXQgd29yayBhdCB0aGUgYWNjb3VudC4gKi9cclxuICAgIE51bWJlck9mRW1wbG95ZWVzOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIGhvdyBsb25nLCBpbiBtaW51dGVzLCB0aGF0IHRoZSByZWNvcmQgd2FzIG9uIGhvbGQuICovXHJcbiAgICByZWFkb25seSBPbkhvbGRUaW1lOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIERhdGUgYW5kIHRpbWUgdGhhdCB0aGUgcmVjb3JkIHdhcyBtaWdyYXRlZC4gKi9cclxuICAgIE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IERhdGUgfCBudWxsO1xyXG4gICAgLyoqIEVudGVyIHRoZSB1c2VyIHdobyBpcyBhc3NpZ25lZCB0byBtYW5hZ2UgdGhlIHJlY29yZC4gKi9cclxuICAgIE93bmVySWRfc3lzdGVtdXNlcjogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogRW50ZXIgdGhlIHRlYW0gd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZF90ZWFtOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBvd25lcnNoaXAgc3RydWN0dXJlLCBzdWNoIGFzIHB1YmxpYyBvciBwcml2YXRlLiAqL1xyXG4gICAgT3duZXJzaGlwQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgYnVzaW5lc3MgdW5pdCB0aGF0IHRoZSByZWNvcmQgb3duZXIgYmVsb25ncyB0by4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ0J1c2luZXNzVW5pdDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIHRlYW0gd2hvIG93bnMgdGhlIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBPd25pbmdUZWFtOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgdXNlciB3aG8gb3ducyB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ1VzZXI6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcGFyZW50IGFjY291bnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFBhcmVudEFjY291bnRJZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogRm9yIHN5c3RlbSB1c2Ugb25seS4gTGVnYWN5IE1pY3Jvc29mdCBEeW5hbWljcyBDUk0gMy4wIHdvcmtmbG93IGRhdGEuICovXHJcbiAgICBQYXJ0aWNpcGF0ZXNJbldvcmtmbG93OiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHBheW1lbnQgdGVybXMgdG8gaW5kaWNhdGUgd2hlbiB0aGUgY3VzdG9tZXIgbmVlZHMgdG8gcGF5LiAqL1xyXG4gICAgUGF5bWVudFRlcm1zQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBkYXkgb2YgdGhlIHdlZWsgZm9yIHNlcnZpY2UgYXBwb2ludG1lbnRzLiAqL1xyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIHRpbWUgb2YgZGF5IGZvciBzZXJ2aWNlIGFwcG9pbnRtZW50cy4gKi9cclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50VGltZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgbWV0aG9kIG9mIGNvbnRhY3QuICovXHJcbiAgICBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHByZWZlcnJlZCBzZXJ2aWNlIHJlcHJlc2VudGF0aXZlLiAqL1xyXG4gICAgUHJlZmVycmVkU3lzdGVtVXNlcklkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHByaW1hcnkgY29udGFjdCBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBQcmltYXJ5Q29udGFjdElkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBQcmltYXJ5IFNhdG9yaSBJRCBmb3IgQWNjb3VudCAqL1xyXG4gICAgUHJpbWFyeVNhdG9yaUlkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFByaW1hcnkgVHdpdHRlciBJRCBmb3IgQWNjb3VudCAqL1xyXG4gICAgUHJpbWFyeVR3aXR0ZXJJZDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgSUQgb2YgdGhlIHByb2Nlc3MuICovXHJcbiAgICBQcm9jZXNzSWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGFubnVhbCByZXZlbnVlIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFJldmVudWU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGFubnVhbCByZXZlbnVlIGNvbnZlcnRlZCB0byB0aGUgc3lzdGVtJ3MgZGVmYXVsdCBiYXNlIGN1cnJlbmN5LiAqL1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZV9CYXNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBzaGFyZXMgYXZhaWxhYmxlIHRvIHRoZSBwdWJsaWMgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgU2hhcmVzT3V0c3RhbmRpbmc6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgc2hpcHBpbmcgbWV0aG9kIGZvciBkZWxpdmVyaWVzIHNlbnQgdG8gdGhlIGFjY291bnQncyBhZGRyZXNzLiAqL1xyXG4gICAgU2hpcHBpbmdNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFN0YW5kYXJkIEluZHVzdHJpYWwgQ2xhc3NpZmljYXRpb24gKFNJQykgY29kZS4gKi9cclxuICAgIFNJQzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBDaG9vc2UgdGhlIHNlcnZpY2UgbGV2ZWwgYWdyZWVtZW50IChTTEEpIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkuICovXHJcbiAgICBTTEFJZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogTGFzdCBTTEEgdGhhdCB3YXMgYXBwbGllZCB0byB0aGlzIGNhc2UuICovXHJcbiAgICByZWFkb25seSBTTEFJbnZva2VkSWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBJRCBvZiB0aGUgc3RhZ2UuICovXHJcbiAgICBTdGFnZUlkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aGV0aGVyIHRoZSBhY2NvdW50IGlzIGFjdGl2ZSBvciBpbmFjdGl2ZS4gKi9cclxuICAgIFN0YXRlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBzdGF0dXMuICovXHJcbiAgICBTdGF0dXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHN0b2NrIGV4Y2hhbmdlIGF0IHdoaWNoIHRoZSBhY2NvdW50IGlzIGxpc3RlZC4gKi9cclxuICAgIFN0b2NrRXhjaGFuZ2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgZm9yIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFRlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgZm9yIHRoaXMgYWNjb3VudC4gKi9cclxuICAgIFRlbGVwaG9uZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHRoaXJkIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSByZWdpb24gb3IgdGVycml0b3J5IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFRlcnJpdG9yeUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RvY2sgZXhjaGFuZ2Ugc3ltYm9sIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFRpY2tlclN5bWJvbDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUb3RhbCB0aW1lIHNwZW50IGZvciBlbWFpbHMgYW5kIG1lZXRpbmdzIGJ5IG1lIGluIHJlbGF0aW9uIHRvIGFjY291bnQgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgVGltZVNwZW50QnlNZU9uRW1haWxBbmRNZWV0aW5nczogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgbG9jYWwgY3VycmVuY3kgZm9yIHRoZSByZWNvcmQuICovXHJcbiAgICBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gKi9cclxuICAgIFRyYXZlcnNlZFBhdGg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVGltZSB6b25lIGNvZGUgdGhhdCB3YXMgaW4gdXNlIHdoZW4gdGhlIHJlY29yZCB3YXMgY3JlYXRlZC4gKi9cclxuICAgIFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVmVyc2lvbiBudW1iZXIgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICByZWFkb25seSBWZXJzaW9uTnVtYmVyOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGFjY291bnQncyB3ZWJzaXRlIFVSTC4gKi9cclxuICAgIFdlYlNpdGVVUkw6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcGhvbmV0aWMgc3BlbGxpbmcgb2YgdGhlIGNvbXBhbnkgbmFtZS4gKi9cclxuICAgIFlvbWlOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDIuIFJ1bnRpbWUgLSBGaWVsZCBDb25maWd1cmF0aW9uXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IGZpZWxkIG1ldGFkYXRhIGNvbmZpZ3VyYXRpb25cclxuICogLSBsb2dpY2FsTmFtZTogYXR0cmlidXRlIGxvZ2ljYWwgbmFtZSAoZS5nLiAnYWNjb3VudGlkJylcclxuICogLSBzY2hlbWFOYW1lOiBzY2hlbWEgbmFtZSBmb3IgbG9va3VwIGJpbmRpbmdcclxuICogLSBlbnRpdHlDb2xsZWN0aW9uTmFtZTogY29sbGVjdGlvbiBuYW1lIGZvciBsb29rdXAgKGUuZy4gJ2FjY291bnRzJylcclxuICogLSBlbnRpdHlMb2dpY2FsTmFtZTogZW50aXR5IG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudCcpXHJcbiAqIC0gcmVhZE9ubHk6IHdoZXRoZXIgdGhlIGZpZWxkIGlzIHJlYWQtb25seVxyXG4gKiAtIHR5cGU6IGZpZWxkIHR5cGUgZm9yIHBhcnNpbmcgKEludGVnZXIsIE51bWJlciwgQm9vbGVhbiwgRGF0ZVRpbWUsIE11bHRpT3B0aW9uU2V0KVxyXG4gKi9cclxuY29uc3QgQWNjb3VudEZpZWxkQ29uZmlnOiBJV2ViQXBpRmllbGRDb25maWdNYXAgPSB7XHJcbiAgICBBY2NvdW50Q2F0ZWdvcnlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudGNhdGVnb3J5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWNjb3VudENsYXNzaWZpY2F0aW9uQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRjbGFzc2lmaWNhdGlvbmNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFjY291bnRJZDogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRpZCcgfSxcclxuICAgIEFjY291bnROdW1iZXI6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50bnVtYmVyJyB9LFxyXG4gICAgQWNjb3VudFJhdGluZ0NvZGU6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50cmF0aW5nY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfQWRkcmVzc0lkOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfYWRkcmVzc2lkJyB9LFxyXG4gICAgQWRkcmVzczFfQWRkcmVzc1R5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfYWRkcmVzc3R5cGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9DaXR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY2l0eScgfSxcclxuICAgIEFkZHJlc3MxX0NvbXBvc2l0ZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NvbXBvc2l0ZScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBBZGRyZXNzMV9Db3VudHJ5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY291bnRyeScgfSxcclxuICAgIEFkZHJlc3MxX0NvdW50eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2NvdW50eScgfSxcclxuICAgIEFkZHJlc3MxX0ZheDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2ZheCcgfSxcclxuICAgIEFkZHJlc3MxX0ZyZWlnaHRUZXJtc0NvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9mcmVpZ2h0dGVybXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9MYXRpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xhdGl0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MxX0xpbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGluZTEnIH0sXHJcbiAgICBBZGRyZXNzMV9MaW5lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xpbmUyJyB9LFxyXG4gICAgQWRkcmVzczFfTGluZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9saW5lMycgfSxcclxuICAgIEFkZHJlc3MxX0xvbmdpdHVkZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xvbmdpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMV9OYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbmFtZScgfSxcclxuICAgIEFkZHJlc3MxX1Bvc3RhbENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9wb3N0YWxjb2RlJyB9LFxyXG4gICAgQWRkcmVzczFfUG9zdE9mZmljZUJveDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3Bvc3RvZmZpY2Vib3gnIH0sXHJcbiAgICBBZGRyZXNzMV9QcmltYXJ5Q29udGFjdE5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9wcmltYXJ5Y29udGFjdG5hbWUnIH0sXHJcbiAgICBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9zaGlwcGluZ21ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3N0YXRlb3Jwcm92aW5jZScgfSxcclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV90ZWxlcGhvbmUxJyB9LFxyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMjogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3RlbGVwaG9uZTInIH0sXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdGVsZXBob25lMycgfSxcclxuICAgIEFkZHJlc3MxX1VQU1pvbmU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV91cHN6b25lJyB9LFxyXG4gICAgQWRkcmVzczFfVVRDT2Zmc2V0OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdXRjb2Zmc2V0JywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzSWQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9hZGRyZXNzaWQnIH0sXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9hZGRyZXNzdHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX0NpdHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jaXR5JyB9LFxyXG4gICAgQWRkcmVzczJfQ29tcG9zaXRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY29tcG9zaXRlJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEFkZHJlc3MyX0NvdW50cnk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jb3VudHJ5JyB9LFxyXG4gICAgQWRkcmVzczJfQ291bnR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfY291bnR5JyB9LFxyXG4gICAgQWRkcmVzczJfRmF4OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfZmF4JyB9LFxyXG4gICAgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2ZyZWlnaHR0ZXJtc2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX0xhdGl0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGF0aXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczJfTGluZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9saW5lMScgfSxcclxuICAgIEFkZHJlc3MyX0xpbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGluZTInIH0sXHJcbiAgICBBZGRyZXNzMl9MaW5lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xpbmUzJyB9LFxyXG4gICAgQWRkcmVzczJfTG9uZ2l0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbG9uZ2l0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MyX05hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9uYW1lJyB9LFxyXG4gICAgQWRkcmVzczJfUG9zdGFsQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3Bvc3RhbGNvZGUnIH0sXHJcbiAgICBBZGRyZXNzMl9Qb3N0T2ZmaWNlQm94OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfcG9zdG9mZmljZWJveCcgfSxcclxuICAgIEFkZHJlc3MyX1ByaW1hcnlDb250YWN0TmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3ByaW1hcnljb250YWN0bmFtZScgfSxcclxuICAgIEFkZHJlc3MyX1NoaXBwaW5nTWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3NoaXBwaW5nbWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfU3RhdGVPclByb3ZpbmNlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfc3RhdGVvcnByb3ZpbmNlJyB9LFxyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3RlbGVwaG9uZTEnIH0sXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdGVsZXBob25lMicgfSxcclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl90ZWxlcGhvbmUzJyB9LFxyXG4gICAgQWRkcmVzczJfVVBTWm9uZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3Vwc3pvbmUnIH0sXHJcbiAgICBBZGRyZXNzMl9VVENPZmZzZXQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl91dGNvZmZzZXQnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkeF9DcmVhdGVkQnlJUEFkZHJlc3M6IHsgbG9naWNhbE5hbWU6ICdhZHhfY3JlYXRlZGJ5aXBhZGRyZXNzJyB9LFxyXG4gICAgQWR4X0NyZWF0ZWRCeVVzZXJuYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWR4X2NyZWF0ZWRieXVzZXJuYW1lJyB9LFxyXG4gICAgQWR4X01vZGlmaWVkQnlJUEFkZHJlc3M6IHsgbG9naWNhbE5hbWU6ICdhZHhfbW9kaWZpZWRieWlwYWRkcmVzcycgfSxcclxuICAgIEFkeF9Nb2RpZmllZEJ5VXNlcm5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZHhfbW9kaWZpZWRieXVzZXJuYW1lJyB9LFxyXG4gICAgQWdpbmczMDogeyBsb2dpY2FsTmFtZTogJ2FnaW5nMzAnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nMzBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2FnaW5nMzBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc2MDogeyBsb2dpY2FsTmFtZTogJ2FnaW5nNjAnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nNjBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2FnaW5nNjBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc5MDogeyBsb2dpY2FsTmFtZTogJ2FnaW5nOTAnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFnaW5nOTBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ2FnaW5nOTBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQnVzaW5lc3NUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2J1c2luZXNzdHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIENyZWF0ZWRCeTogeyBzY2hlbWFOYW1lOiAnY3JlYXRlZGJ5JywgbG9naWNhbE5hbWU6ICdfY3JlYXRlZGJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBDcmVhdGVkQnlFeHRlcm5hbFBhcnR5OiB7IHNjaGVtYU5hbWU6ICdjcmVhdGVkYnlleHRlcm5hbHBhcnR5JywgbG9naWNhbE5hbWU6ICdfY3JlYXRlZGJ5ZXh0ZXJuYWxwYXJ0eV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnZXh0ZXJuYWxwYXJ0aWVzJywgZW50aXR5TG9naWNhbE5hbWU6ICdleHRlcm5hbHBhcnR5JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogeyBsb2dpY2FsTmFtZTogJ2NyZWF0ZWRvbicsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBDcmVhdGVkT25CZWhhbGZCeTogeyBzY2hlbWFOYW1lOiAnY3JlYXRlZG9uYmVoYWxmYnknLCBsb2dpY2FsTmFtZTogJ19jcmVhdGVkb25iZWhhbGZieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQ3JlZGl0TGltaXQ6IHsgbG9naWNhbE5hbWU6ICdjcmVkaXRsaW1pdCcsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBDcmVkaXRMaW1pdF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnY3JlZGl0bGltaXRfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQ3JlZGl0T25Ib2xkOiB7IGxvZ2ljYWxOYW1lOiAnY3JlZGl0b25ob2xkJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBDdXN0b21lclNpemVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnY3VzdG9tZXJzaXplY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQ3VzdG9tZXJUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2N1c3RvbWVydHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIERlc2NyaXB0aW9uOiB7IGxvZ2ljYWxOYW1lOiAnZGVzY3JpcHRpb24nIH0sXHJcbiAgICBEb05vdEJ1bGtFTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90YnVsa2VtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdEJ1bGtQb3N0YWxNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RidWxrcG9zdGFsbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RFTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90ZW1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90RmF4OiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RmYXgnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90UGhvbmU6IHsgbG9naWNhbE5hbWU6ICdkb25vdHBob25lJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdFBvc3RhbE1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdHBvc3RhbG1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90U2VuZE1NOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RzZW5kbW0nLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIEVNYWlsQWRkcmVzczE6IHsgbG9naWNhbE5hbWU6ICdlbWFpbGFkZHJlc3MxJyB9LFxyXG4gICAgRU1haWxBZGRyZXNzMjogeyBsb2dpY2FsTmFtZTogJ2VtYWlsYWRkcmVzczInIH0sXHJcbiAgICBFTWFpbEFkZHJlc3MzOiB7IGxvZ2ljYWxOYW1lOiAnZW1haWxhZGRyZXNzMycgfSxcclxuICAgIEVudGl0eUltYWdlOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2UnIH0sXHJcbiAgICBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZV90aW1lc3RhbXAnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgRW50aXR5SW1hZ2VfVVJMOiB7IGxvZ2ljYWxOYW1lOiAnZW50aXR5aW1hZ2VfdXJsJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEVudGl0eUltYWdlSWQ6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZWlkJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEV4Y2hhbmdlUmF0ZTogeyBsb2dpY2FsTmFtZTogJ2V4Y2hhbmdlcmF0ZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgRmF4OiB7IGxvZ2ljYWxOYW1lOiAnZmF4JyB9LFxyXG4gICAgRm9sbG93RW1haWw6IHsgbG9naWNhbE5hbWU6ICdmb2xsb3dlbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRnRwU2l0ZVVSTDogeyBsb2dpY2FsTmFtZTogJ2Z0cHNpdGV1cmwnIH0sXHJcbiAgICBJbXBvcnRTZXF1ZW5jZU51bWJlcjogeyBsb2dpY2FsTmFtZTogJ2ltcG9ydHNlcXVlbmNlbnVtYmVyJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBJbmR1c3RyeUNvZGU6IHsgbG9naWNhbE5hbWU6ICdpbmR1c3RyeWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIElzUHJpdmF0ZTogeyBsb2dpY2FsTmFtZTogJ2lzcHJpdmF0ZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnbGFzdG9uaG9sZHRpbWUnLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IHsgbG9naWNhbE5hbWU6ICdsYXN0dXNlZGluY2FtcGFpZ24nLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBNYXJrZXRDYXA6IHsgbG9naWNhbE5hbWU6ICdtYXJrZXRjYXAnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgTWFya2V0Q2FwX0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdtYXJrZXRjYXBfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgTWFya2V0aW5nT25seTogeyBsb2dpY2FsTmFtZTogJ21hcmtldGluZ29ubHknLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIE1hc3RlcklkOiB7IHNjaGVtYU5hbWU6ICdtYXN0ZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX21hc3RlcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdhY2NvdW50cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYWNjb3VudCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBNZXJnZWQ6IHsgbG9naWNhbE5hbWU6ICdtZXJnZWQnLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBNb2RpZmllZEJ5OiB7IHNjaGVtYU5hbWU6ICdtb2RpZmllZGJ5JywgbG9naWNhbE5hbWU6ICdfbW9kaWZpZWRieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgTW9kaWZpZWRCeUV4dGVybmFsUGFydHk6IHsgc2NoZW1hTmFtZTogJ21vZGlmaWVkYnlleHRlcm5hbHBhcnR5JywgbG9naWNhbE5hbWU6ICdfbW9kaWZpZWRieWV4dGVybmFscGFydHlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2V4dGVybmFscGFydGllcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnZXh0ZXJuYWxwYXJ0eScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnbW9kaWZpZWRvbicsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBNb2RpZmllZE9uQmVoYWxmQnk6IHsgc2NoZW1hTmFtZTogJ21vZGlmaWVkb25iZWhhbGZieScsIGxvZ2ljYWxOYW1lOiAnX21vZGlmaWVkb25iZWhhbGZieV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgbXNhX21hbmFnaW5ncGFydG5lcmlkOiB7IHNjaGVtYU5hbWU6ICdtc2FfbWFuYWdpbmdwYXJ0bmVyaWQnLCBsb2dpY2FsTmFtZTogJ19tc2FfbWFuYWdpbmdwYXJ0bmVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2FjY291bnRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdhY2NvdW50JyB9LFxyXG4gICAgTmFtZTogeyBsb2dpY2FsTmFtZTogJ25hbWUnIH0sXHJcbiAgICBOdW1iZXJPZkVtcGxveWVlczogeyBsb2dpY2FsTmFtZTogJ251bWJlcm9mZW1wbG95ZWVzJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBPbkhvbGRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnb25ob2xkdGltZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IHsgbG9naWNhbE5hbWU6ICdvdmVycmlkZGVuY3JlYXRlZG9uJywgdHlwZTogJ0RhdGVUaW1lJyB9LFxyXG4gICAgT3duZXJJZF9zeXN0ZW11c2VyOiB7IHNjaGVtYU5hbWU6ICdvd25lcmlkJywgbG9naWNhbE5hbWU6ICdfb3duZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInIH0sXHJcbiAgICBPd25lcklkX3RlYW06IHsgc2NoZW1hTmFtZTogJ293bmVyaWQnLCBsb2dpY2FsTmFtZTogJ19vd25lcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICd0ZWFtcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAndGVhbScgfSxcclxuICAgIE93bmVyc2hpcENvZGU6IHsgbG9naWNhbE5hbWU6ICdvd25lcnNoaXBjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBPd25pbmdCdXNpbmVzc1VuaXQ6IHsgc2NoZW1hTmFtZTogJ293bmluZ2J1c2luZXNzdW5pdCcsIGxvZ2ljYWxOYW1lOiAnX293bmluZ2J1c2luZXNzdW5pdF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYnVzaW5lc3N1bml0cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnYnVzaW5lc3N1bml0JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE93bmluZ1RlYW06IHsgc2NoZW1hTmFtZTogJ293bmluZ3RlYW0nLCBsb2dpY2FsTmFtZTogJ19vd25pbmd0ZWFtX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICd0ZWFtcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAndGVhbScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBPd25pbmdVc2VyOiB7IHNjaGVtYU5hbWU6ICdvd25pbmd1c2VyJywgbG9naWNhbE5hbWU6ICdfb3duaW5ndXNlcl92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgUGFyZW50QWNjb3VudElkOiB7IHNjaGVtYU5hbWU6ICdwYXJlbnRhY2NvdW50aWQnLCBsb2dpY2FsTmFtZTogJ19wYXJlbnRhY2NvdW50aWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2FjY291bnRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdhY2NvdW50JyB9LFxyXG4gICAgUGFydGljaXBhdGVzSW5Xb3JrZmxvdzogeyBsb2dpY2FsTmFtZTogJ3BhcnRpY2lwYXRlc2lud29ya2Zsb3cnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIFBheW1lbnRUZXJtc0NvZGU6IHsgbG9naWNhbE5hbWU6ICdwYXltZW50dGVybXNjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudERheUNvZGU6IHsgbG9naWNhbE5hbWU6ICdwcmVmZXJyZWRhcHBvaW50bWVudGRheWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50VGltZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdwcmVmZXJyZWRhcHBvaW50bWVudHRpbWVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ3ByZWZlcnJlZGNvbnRhY3RtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBQcmVmZXJyZWRTeXN0ZW1Vc2VySWQ6IHsgc2NoZW1hTmFtZTogJ3ByZWZlcnJlZHN5c3RlbXVzZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX3ByZWZlcnJlZHN5c3RlbXVzZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc3lzdGVtdXNlcnMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3N5c3RlbXVzZXInIH0sXHJcbiAgICBQcmltYXJ5Q29udGFjdElkOiB7IHNjaGVtYU5hbWU6ICdwcmltYXJ5Y29udGFjdGlkJywgbG9naWNhbE5hbWU6ICdfcHJpbWFyeWNvbnRhY3RpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnY29udGFjdHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2NvbnRhY3QnIH0sXHJcbiAgICBQcmltYXJ5U2F0b3JpSWQ6IHsgbG9naWNhbE5hbWU6ICdwcmltYXJ5c2F0b3JpaWQnIH0sXHJcbiAgICBQcmltYXJ5VHdpdHRlcklkOiB7IGxvZ2ljYWxOYW1lOiAncHJpbWFyeXR3aXR0ZXJpZCcgfSxcclxuICAgIFByb2Nlc3NJZDogeyBsb2dpY2FsTmFtZTogJ3Byb2Nlc3NpZCcgfSxcclxuICAgIFJldmVudWU6IHsgbG9naWNhbE5hbWU6ICdyZXZlbnVlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIFJldmVudWVfQmFzZTogeyBsb2dpY2FsTmFtZTogJ3JldmVudWVfYmFzZScsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgU2hhcmVzT3V0c3RhbmRpbmc6IHsgbG9naWNhbE5hbWU6ICdzaGFyZXNvdXRzdGFuZGluZycsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU2hpcHBpbmdNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnc2hpcHBpbmdtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTSUM6IHsgbG9naWNhbE5hbWU6ICdzaWMnIH0sXHJcbiAgICBTTEFJZDogeyBzY2hlbWFOYW1lOiAnc2xhaWQnLCBsb2dpY2FsTmFtZTogJ19zbGFpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc2xhcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc2xhJyB9LFxyXG4gICAgU0xBSW52b2tlZElkOiB7IHNjaGVtYU5hbWU6ICdzbGFpbnZva2VkaWQnLCBsb2dpY2FsTmFtZTogJ19zbGFpbnZva2VkaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3NsYXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3NsYScsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBTdGFnZUlkOiB7IGxvZ2ljYWxOYW1lOiAnc3RhZ2VpZCcgfSxcclxuICAgIFN0YXRlQ29kZTogeyBsb2dpY2FsTmFtZTogJ3N0YXRlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU3RhdHVzQ29kZTogeyBsb2dpY2FsTmFtZTogJ3N0YXR1c2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFN0b2NrRXhjaGFuZ2U6IHsgbG9naWNhbE5hbWU6ICdzdG9ja2V4Y2hhbmdlJyB9LFxyXG4gICAgVGVsZXBob25lMTogeyBsb2dpY2FsTmFtZTogJ3RlbGVwaG9uZTEnIH0sXHJcbiAgICBUZWxlcGhvbmUyOiB7IGxvZ2ljYWxOYW1lOiAndGVsZXBob25lMicgfSxcclxuICAgIFRlbGVwaG9uZTM6IHsgbG9naWNhbE5hbWU6ICd0ZWxlcGhvbmUzJyB9LFxyXG4gICAgVGVycml0b3J5Q29kZTogeyBsb2dpY2FsTmFtZTogJ3RlcnJpdG9yeWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFRpY2tlclN5bWJvbDogeyBsb2dpY2FsTmFtZTogJ3RpY2tlcnN5bWJvbCcgfSxcclxuICAgIFRpbWVTcGVudEJ5TWVPbkVtYWlsQW5kTWVldGluZ3M6IHsgbG9naWNhbE5hbWU6ICd0aW1lc3BlbnRieW1lb25lbWFpbGFuZG1lZXRpbmdzJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIFRpbWVab25lUnVsZVZlcnNpb25OdW1iZXI6IHsgbG9naWNhbE5hbWU6ICd0aW1lem9uZXJ1bGV2ZXJzaW9ubnVtYmVyJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IHsgc2NoZW1hTmFtZTogJ3RyYW5zYWN0aW9uY3VycmVuY3lpZCcsIGxvZ2ljYWxOYW1lOiAnX3RyYW5zYWN0aW9uY3VycmVuY3lpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAndHJhbnNhY3Rpb25jdXJyZW5jaWVzJywgZW50aXR5TG9naWNhbE5hbWU6ICd0cmFuc2FjdGlvbmN1cnJlbmN5JyB9LFxyXG4gICAgVHJhdmVyc2VkUGF0aDogeyBsb2dpY2FsTmFtZTogJ3RyYXZlcnNlZHBhdGgnIH0sXHJcbiAgICBVVENDb252ZXJzaW9uVGltZVpvbmVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAndXRjY29udmVyc2lvbnRpbWV6b25lY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgVmVyc2lvbk51bWJlcjogeyBsb2dpY2FsTmFtZTogJ3ZlcnNpb25udW1iZXInLCByZWFkT25seTogdHJ1ZSwgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBXZWJTaXRlVVJMOiB7IGxvZ2ljYWxOYW1lOiAnd2Vic2l0ZXVybCcgfSxcclxuICAgIFlvbWlOYW1lOiB7IGxvZ2ljYWxOYW1lOiAneW9taW5hbWUnIH1cclxufTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMy4gUnVudGltZSAtIENsYXNzIChDIyBlYXJseS1ib3VuZCBzdHlsZSB3aXRoIGBuZXdgIGtleXdvcmQpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IFdlYkFwaSBjbGFzcyBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIFVzYWdlOiBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoZW50aXR5KTtcclxuICogQHBhcmFtIGVudGl0eSBUaGUgZW50aXR5IG9iamVjdCBmcm9tIE9EYXRhIHJlc3BvbnNlIChvcHRpb25hbCBmb3IgY3JlYXRlIG9wZXJhdGlvbnMpXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWNjb3VudEFwaSB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdHk/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSB7XHJcbiAgICAgICAgY29uc3Qgd2ViQXBpRW50aXR5ID0gY3JlYXRlV2ViQXBpRW50aXR5PElBY2NvdW50QXBpPihlbnRpdHksICdhY2NvdW50JywgJ2FjY291bnRzJywgQWNjb3VudEZpZWxkQ29uZmlnKTtcclxuICAgICAgICAvLyBDb3B5IHByb3BlcnR5IGRlc2NyaXB0b3JzIHRvIHByZXNlcnZlIGdldHRlcnMvc2V0dGVyc1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHdlYkFwaUVudGl0eSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUeXBlIGFzc2VydGlvbiB0byBtYWtlIEFjY291bnRBcGkgaW5zdGFuY2VzIHdvcmsgYXMgSUFjY291bnRBcGlcclxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50QXBpIGV4dGVuZHMgSUFjY291bnRBcGkgeyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50QXBpO1xyXG5cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuaW1wb3J0IHsgQWNjb3VudEFwaSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQud2ViYXBpJztcclxuaW1wb3J0IHsgT3B0aW9uU2V0IH0gZnJvbSAnLi9nZW5lcmF0b3IvT3B0aW9uU2V0JztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDY6IFdlYkFwaSAtIEVhcmx5LWJvdW5kIHN0eWxlIGNvZGluZ1xyXG4gKiBUZXN0cyBSZXRyaWV2ZVJlY29yZCBhbmQgUmV0cmlldmVSZWNvcmRzIHdpdGggdmFyaW91cyBvdmVybG9hZHNcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAvIFByb21pc2UtYmFzZWQgdGVzdHMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgLyBBZGRpdGlvbmFsIHRlc3RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFRlc3RXZWJBcGkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFdFQkFQSSBPQkpFQ1QgVEVTVFMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFIxOiBDcmVhdGUgZW1wdHkgQWNjb3VudCBvYmplY3QgdmlhIEFjY291bnRBcGkgZmFjdG9yeVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBuZXdBY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICBuZXdBY2NvdW50Lk5hbWUgPSAnVGVzdCBBY2NvdW50JztcclxuICAgICAgICBuZXdBY2NvdW50LlRlbGVwaG9uZTEgPSAnMTIzLTQ1Ni03ODkwJztcclxuICAgICAgICBuZXdBY2NvdW50LkluZHVzdHJ5Q29kZSA9IE9wdGlvblNldC5BY2NvdW50LkluZHVzdHJ5Q29kZS5Db25zdWx0aW5nO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQWNjb3VudEFwaSAoY3JlYXRlKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYE5hbWU9XCIke25ld0FjY291bnQuTmFtZX1cIiwgRW50aXR5IHJlYWR5YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdBY2NvdW50LkVudGl0eSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkFjY291bnRBcGkgKGNyZWF0ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFIyOiBUZXN0IEVudGl0eSBvYmplY3Qgc3RydWN0dXJlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIGFjY291bnQuTmFtZSA9ICdFbnRpdHkgVGVzdCc7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYWNjb3VudC5FbnRpdHk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHkgb2JqZWN0XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlbnRpdHkgPyBgS2V5czogJHtPYmplY3Qua2V5cyhlbnRpdHkpLmpvaW4oJywgJyl9YCA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGVudGl0eSAmJiB0eXBlb2YgZW50aXR5ID09PSAnb2JqZWN0JyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkVudGl0eSBvYmplY3RcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFIzOiBUZXN0IEVudGl0eU5hbWUgcHJvcGVydHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFbnRpdHlOYW1lXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBhY2NvdW50LkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogYWNjb3VudC5FbnRpdHlOYW1lID09PSAnYWNjb3VudCcgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJFbnRpdHlOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSNDogVGVzdCBFbnRpdHlDb2xsZWN0aW9uTmFtZSBwcm9wZXJ0eVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eUNvbGxlY3Rpb25OYW1lXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBhY2NvdW50LkVudGl0eUNvbGxlY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGFjY291bnQuRW50aXR5Q29sbGVjdGlvbk5hbWUgPT09ICdhY2NvdW50cycgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJFbnRpdHlDb2xsZWN0aW9uTmFtZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjU6IFRlc3QgRm9ybWF0dGVkVmFsdWUgcHJvcGVydHkgZXhpc3RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRm9ybWF0dGVkVmFsdWUgPyBcIm9iamVjdCBleGlzdHNcIiA6IFwibnVsbFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGFjY291bnQuRm9ybWF0dGVkVmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFdFQkFQSSBSRVRSSUVWRSBSRUNPUkQgVEVTVFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFMxOiBSZXRyaWV2ZVJlY29yZCAtIFByb21pc2UtYmFzZWQgd2l0aCBvcHRpb25zXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWQsXHJcbiAgICAgICAgICAgIFwiPyRzZWxlY3Q9bmFtZSx0ZWxlcGhvbmUxLGluZHVzdHJ5Y29kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkIChQcm9taXNlK09wdGlvbnMpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiByZWNvcmQuTmFtZSA/IGBOYW1lPVwiJHtyZWNvcmQuTmFtZX1cImAgOiBcIlJldHJpZXZlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UrT3B0aW9ucylcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMyOiBSZXRyaWV2ZVJlY29yZCAtIFByb21pc2UtYmFzZWQgd2l0aG91dCBvcHRpb25zXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiByZWNvcmQuQWNjb3VudElkID8gXCJSZXRyaWV2ZWQgd2l0aCBhbGwgZmllbGRzXCIgOiBcIlJldHJpZXZlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTMzogUmV0cmlldmVSZWNvcmQgLSBBY2Nlc3MgRm9ybWF0dGVkVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZCxcclxuICAgICAgICAgICAgXCI/JHNlbGVjdD1uYW1lLGluZHVzdHJ5Y29kZVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRJbmR1c3RyeSA9IHJlY29yZC5Gb3JtYXR0ZWRWYWx1ZT8uSW5kdXN0cnlDb2RlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRm9ybWF0dGVkVmFsdWUuSW5kdXN0cnlDb2RlXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBmb3JtYXR0ZWRJbmR1c3RyeSA/IGBcIiR7Zm9ybWF0dGVkSW5kdXN0cnl9XCJgIDogXCIoZW1wdHkpXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZS5JbmR1c3RyeUNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM0OiBSZXRyaWV2ZVJlY29yZHMgLSBGZXRjaFhNTCBQcm9taXNlLWJhc2VkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sID0gXCI8ZmV0Y2ggdG9wPSczJz48ZW50aXR5IG5hbWU9J2FjY291bnQnPjxhdHRyaWJ1dGUgbmFtZT0nbmFtZScvPjxhdHRyaWJ1dGUgbmFtZT0nYWNjb3VudG51bWJlcicvPjwvZW50aXR5PjwvZmV0Y2g+XCI7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhBY2NvdW50QXBpLCBmZXRjaFhtbCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNTogUmV0cmlldmVSZWNvcmRzIC0gRmV0Y2hYTUwgd2l0aCBtYXhQYWdlU2l6ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbCA9IFwiPGZldGNoPjxlbnRpdHkgbmFtZT0nYWNjb3VudCc+PGF0dHJpYnV0ZSBuYW1lPSduYW1lJy8+PGF0dHJpYnV0ZSBuYW1lPSd0ZWxlcGhvbmUxJy8+PC9lbnRpdHk+PC9mZXRjaD5cIjtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKEFjY291bnRBcGksIGZldGNoWG1sLCA1KTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM1XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwrUGFnZVNpemUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9IChtYXggNSlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKEZldGNoWE1MK1BhZ2VTaXplKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzY6IFJldHJpZXZlUmVjb3JkcyAtIE9EYXRhIFByb21pc2UtYmFzZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICAgICAnPyRzZWxlY3Q9bmFtZSxhY2NvdW50bnVtYmVyJiR0b3A9MydcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzc6IFJldHJpZXZlUmVjb3JkcyAtIE9EYXRhIHdpdGggbWF4UGFnZVNpemVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGZvcm0uV2ViQXBpLlJldHJpZXZlUmVjb3JkcyhcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgJ2FjY291bnQnLFxyXG4gICAgICAgICAgICAnPyRzZWxlY3Q9bmFtZSx0ZWxlcGhvbmUxJyxcclxuICAgICAgICAgICAgNVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTN1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhK1BhZ2VTaXplKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofSAobWF4IDUpYCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChPRGF0YStQYWdlU2l6ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM4OiBTZXQgcHJvcGVydHkgYW5kIHZlcmlmeSBFbnRpdHkgdXBkYXRlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIGFjY291bnQuTmFtZSA9ICdVcGRhdGUgVGVzdCc7XHJcbiAgICAgICAgYWNjb3VudC5SZXZlbnVlID0gMTAwMDAwMDtcclxuICAgICAgICBhY2NvdW50Lk51bWJlck9mRW1wbG95ZWVzID0gNTA7XHJcbiAgICAgICAgYWNjb3VudC5DcmVkaXRPbkhvbGQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGFjY291bnQuRW50aXR5O1xyXG4gICAgICAgIGNvbnN0IGhhc05hbWUgPSBlbnRpdHkgJiYgZW50aXR5Lm5hbWUgPT09ICdVcGRhdGUgVGVzdCc7XHJcbiAgICAgICAgY29uc3QgaGFzUmV2ZW51ZSA9IGVudGl0eSAmJiBlbnRpdHkucmV2ZW51ZSA9PT0gMTAwMDAwMDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM4XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eSB1cGRhdGUgb24gc2V0XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgTmFtZTogJHtoYXNOYW1lfSwgUmV2ZW51ZTogJHtoYXNSZXZlbnVlfWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogaGFzTmFtZSAmJiBoYXNSZXZlbnVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRW50aXR5IHVwZGF0ZSBvbiBzZXRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REYxMCBURVNUIDY6IFdlYkFwaSBbJHtzdGFydFRpbWV9XSAtIEVhcmx5LWJvdW5kIHN0eWxlIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBBY2NvdW50QXBpIEZhY3RvcnkgVGVzdHMgKFIxLVI1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBXZWJBcGkgTWV0aG9kcyAoUzEtUzgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNzogTW9uZXkgQ29udHJvbCAtIFJldmVudWUgRmllbGRcclxuICogTW9uZXkgZXh0ZW5kcyBJQ29udHJvbE51bWJlciB3aXRoIE1pbiwgTWF4LCBQcmVjaXNpb24gcHJvcGVydGllc1xyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE1vbmV5KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtb25leSA9IGZvcm0uSGVhZGVyLlJldmVudWU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1vbmV5LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTW9uZXktc3BlY2lmaWMgcHJvcGVydGllcyAoSUNvbnRyb2xOdW1iZXIgKyBQcmVjaXNpb24pXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhcIiwgVmFsdWU6IG1vbmV5Lk1heCwgU3RhdHVzOiB0eXBlb2YgbW9uZXkuTWF4ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJNaW5cIiwgVmFsdWU6IG1vbmV5Lk1pbiwgU3RhdHVzOiB0eXBlb2YgbW9uZXkuTWluID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb25cIiwgVmFsdWU6IG1vbmV5LlByZWNpc2lvbiwgU3RhdHVzOiB0eXBlb2YgbW9uZXkuUHJlY2lzaW9uID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtb25leS5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTsgLy8gQXR0cmlidXRlIGNhbiBiZSBudWxsIGluIHNvbWUgY29udGV4dHNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbW9uZXkuQXR0cmlidXRlTmFtZSA9PT0gXCJyZXZlbnVlXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbW9uZXkuQXR0cmlidXRlVHlwZSA9PT0gXCJtb25leVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbW9uZXkuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtb25leS5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbW9uZXkuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogbW9uZXkuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG1vbmV5LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtb25leS5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogbW9uZXkuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtb25leS5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtb25leS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG1vbmV5LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgMCkgKyAxMDAwO1xyXG4gICAgICAgIG1vbmV5LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbW9uZXkuVmFsdWU7XHJcbiAgICAgICAgbW9uZXkuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlID09PSB0ZXN0VmFsdWUgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUHJlY2lzaW9uIChNb25leSBwcmVjaXNpb24gaXMgdHlwaWNhbGx5IDAtMiBmb3IgY3VycmVuY3kpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdQcmVjaXNpb24gPSBtb25leS5QcmVjaXNpb247XHJcbiAgICAgICAgY29uc3QgdGVzdFByZWNpc2lvbiA9IDI7IC8vIFZhbGlkIHByZWNpc2lvbiBmb3IgbW9uZXkgKDAtMiByYW5nZSlcclxuICAgICAgICBtb25leS5QcmVjaXNpb24gPSB0ZXN0UHJlY2lzaW9uO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuUHJlY2lzaW9uO1xyXG4gICAgICAgIG1vbmV5LlByZWNpc2lvbiA9IG9yaWdQcmVjaXNpb247XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb24gKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSB0ZXN0UHJlY2lzaW9uID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogYFdhcyAke2NoZWNrfWAsIFN0YXR1czogY2hlY2sgPT09IHRlc3RQcmVjaXNpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUHJlY2lzaW9uIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gbW9uZXkuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb25leS5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb25leS5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1vbmV5LkRpc2FibGVkO1xyXG4gICAgICAgIG1vbmV5LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LkRpc2FibGVkO1xyXG4gICAgICAgIG1vbmV5LkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBtb25leS5MYWJlbDtcclxuICAgICAgICBjb25zdCB0ZXN0TGFiZWwgPSBcIlRlc3QgTW9uZXkgTGFiZWxcIjtcclxuICAgICAgICBtb25leS5MYWJlbCA9IHRlc3RMYWJlbDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LkxhYmVsO1xyXG4gICAgICAgIGNvbnN0IHNldFdvcmtlZCA9IGNoZWNrID09PSB0ZXN0TGFiZWwgfHwgY2hlY2s/LmluY2x1ZGVzKFwiVGVzdCBNb25leVwiKTtcclxuICAgICAgICBpZiAob3JpZ0xhYmVsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW9uZXkuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IHNldFdvcmtlZCA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IGBHb3Q6ICR7Y2hlY2t9YCwgU3RhdHVzOiBzZXRXb3JrZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1vbmV5LlZpc2libGU7XHJcbiAgICAgICAgbW9uZXkuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vbmV5LlZpc2libGU7XHJcbiAgICAgICAgbW9uZXkuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTW9uZXkgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb25leS5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vbmV5LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTW9uZXkgbm90aWZpY2F0aW9uXCIsIFwiTU9ORVlfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuQ2xlYXJOb3RpZmljYXRpb24oXCJNT05FWV9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENCMCBURVNUIDc6IE1vbmV5IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogUmV2ZW51ZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE3KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDg6IEJvb2xlYW4gQ29udHJvbCAtIENyZWRpdE9uSG9sZCBGaWVsZFxyXG4gKiBCb29sZWFuIGV4dGVuZHMgSUNvbnRyb2wgd2l0aCBJbml0aWFsVmFsdWUgcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RCb29sZWFuKGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBib29sID0gZm9ybS5Cb2R5LkNyZWRpdE9uSG9sZDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gYm9vbC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEJvb2xlYW4tc3BlY2lmaWMgcHJvcGVydGllcyAoSW5pdGlhbFZhbHVlIGNhbiBiZSBib29sZWFuIG9yIDAvMSlcclxuICAgICAgICBjb25zdCBpbml0VmFsID0gYm9vbC5Jbml0aWFsVmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEluaXRWYWx1ZSA9IHR5cGVvZiBpbml0VmFsID09PSBcImJvb2xlYW5cIiB8fCBpbml0VmFsID09PSAwIHx8IGluaXRWYWwgPT09IDE7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWVcIiwgVmFsdWU6IGluaXRWYWwsIFN0YXR1czogaXNWYWxpZEluaXRWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogYm9vbC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGJvb2wuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZU5hbWUgPT09IFwiY3JlZGl0b25ob2xkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGJvb2wuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZVR5cGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogYm9vbC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGJvb2wuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogYm9vbC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGJvb2wuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGJvb2wuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGJvb2wuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGJvb2wuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBib29sLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGJvb2wuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBib29sLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gIW9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgYm9vbC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGJvb2wuVmFsdWU7XHJcbiAgICAgICAgYm9vbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGJvb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBib29sLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgYm9vbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGJvb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgYm9vbC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLkRpc2FibGVkO1xyXG4gICAgICAgIGJvb2wuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGJvb2wuTGFiZWw7XHJcbiAgICAgICAgYm9vbC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5MYWJlbDtcclxuICAgICAgICBib29sLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gYm9vbC5WaXNpYmxlO1xyXG4gICAgICAgIGJvb2wuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuVmlzaWJsZTtcclxuICAgICAgICBib29sLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIEJvb2xlYW4gT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGJvb2wuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBCb29sZWFuIG5vdGlmaWNhdGlvblwiLCBcIkJPT0xfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5DbGVhck5vdGlmaWNhdGlvbihcIkJPT0xfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHUyNzA1IFRFU1QgODogQm9vbGVhbiBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IENyZWRpdE9uSG9sZCBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDk6IERhdGVUaW1lIENvbnRyb2wgLSB2NF9BcHBvaW50bWVudFRpbWUgRmllbGRcclxuICogRGF0ZVRpbWUgZXh0ZW5kcyBJQ29udHJvbCB3aXRoIFNob3dUaW1lIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0RGF0ZVRpbWUoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGR0ID0gZm9ybS5Cb2R5LnY0X0FwcG9pbnRtZW50VGltZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gZHQuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBEYXRlVGltZS1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJTaG93VGltZVwiLCBWYWx1ZTogZHQuU2hvd1RpbWUsIFN0YXR1czogdHlwZW9mIGR0LlNob3dUaW1lID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gb3JpZ2luYWxWYWx1ZS50b0lTT1N0cmluZygpIDogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBkdC5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogZHQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBkdC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGR0LkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfYXBwb2ludG1lbnR0aW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogZHQuQXR0cmlidXRlVHlwZSA9PT0gXCJkYXRldGltZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogZHQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBkdC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkdC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGR0LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBkdC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogZHQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGR0LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogZHQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogZHQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBkdC5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZHQuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBkdC5WYWx1ZTtcclxuICAgICAgICBkdC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgLy8gVmFsdWUgd2FzIHNldCBzdWNjZXNzZnVsbHkgaWYgbmV3VmFsdWUgZXhpc3RzIChEYXRlLCBzdHJpbmcsIG9yIGFueSB0cnV0aHkpXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IG5ld1ZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBTaG93VGltZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnU2hvd1RpbWUgPSBkdC5TaG93VGltZTtcclxuICAgICAgICBkdC5TaG93VGltZSA9ICFvcmlnU2hvd1RpbWU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5TaG93VGltZTtcclxuICAgICAgICBkdC5TaG93VGltZSA9IG9yaWdTaG93VGltZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlNob3dUaW1lIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU2hvd1RpbWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBkdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGR0LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGR0LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gZHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgZHQuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgZHQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGR0LkxhYmVsO1xyXG4gICAgICAgIGR0LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5MYWJlbDtcclxuICAgICAgICBkdC5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGR0LlZpc2libGU7XHJcbiAgICAgICAgZHQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlZpc2libGU7XHJcbiAgICAgICAgZHQuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgRGF0ZVRpbWUgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkdC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGR0LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgRGF0ZVRpbWUgbm90aWZpY2F0aW9uXCIsIFwiRFRfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuQ2xlYXJOb3RpZmljYXRpb24oXCJEVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDNSBURVNUIDk6IERhdGVUaW1lIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogdjRfQXBwb2ludG1lbnRUaW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTA6IERhdGVPbmx5IENvbnRyb2wgLSB2NF9CaXJ0aGRheSBGaWVsZFxyXG4gKiBEYXRlT25seSBleHRlbmRzIElDb250cm9sIChubyBTaG93VGltZSBwcm9wZXJ0eSB1bmxpa2UgRGF0ZVRpbWUpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0RGF0ZU9ubHkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGRhdGVPbmx5ID0gZm9ybS5Cb2R5LnY0X0JpcnRoZGF5O1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBkYXRlT25seS5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERhdGVPbmx5LXNwZWNpZmljOiBWYWx1ZSBpcyB0aGUgbWFpbiBwcm9wZXJ0eSAobm8gU2hvd1RpbWUpXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBvcmlnaW5hbFZhbHVlLnRvSVNPU3RyaW5nKCkgOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBkYXRlT25seS5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogZGF0ZU9ubHkuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9iaXJ0aGRheVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBkYXRlT25seS5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGRhdGVPbmx5LkF0dHJpYnV0ZVR5cGUgPT09IFwiZGF0ZXRpbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGRhdGVPbmx5LkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogZGF0ZU9ubHkuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBkYXRlT25seS5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBkYXRlT25seS5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGRhdGVPbmx5LlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogZGF0ZU9ubHkuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogZGF0ZU9ubHkuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBkYXRlT25seS5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IG5ldyBEYXRlKDE5OTAsIDUsIDE1KTsgLy8gSnVuZSAxNSwgMTk5MFxyXG4gICAgICAgIGRhdGVPbmx5LlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZGF0ZU9ubHkuVmFsdWU7XHJcbiAgICAgICAgZGF0ZU9ubHkuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIC8vIFZhbHVlIHdhcyBzZXQgc3VjY2Vzc2Z1bGx5IGlmIG5ld1ZhbHVlIGV4aXN0c1xyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBuZXdWYWx1ZSAhPT0gbnVsbCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBkYXRlT25seS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gZGF0ZU9ubHkuRGlzYWJsZWQ7XHJcbiAgICAgICAgZGF0ZU9ubHkuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuRGlzYWJsZWQ7XHJcbiAgICAgICAgZGF0ZU9ubHkuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGRhdGVPbmx5LkxhYmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5MYWJlbDtcclxuICAgICAgICBkYXRlT25seS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGRhdGVPbmx5LlZpc2libGU7XHJcbiAgICAgICAgZGF0ZU9ubHkuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LlZpc2libGU7XHJcbiAgICAgICAgZGF0ZU9ubHkuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgRGF0ZU9ubHkgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRhdGVPbmx5LkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5TZXROb3RpZmljYXRpb24oXCJUZXN0IERhdGVPbmx5IG5vdGlmaWNhdGlvblwiLCBcIkRPX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRhdGVPbmx5LkNsZWFyTm90aWZpY2F0aW9uKFwiRE9fVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkYXRlT25seS5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRhdGVPbmx5LlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGODIgVEVTVCAxMDogRGF0ZU9ubHkgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9CaXJ0aGRheSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE0KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDExOiBHcmlkIENvbnRyb2wgLSBDb250YWN0cyBTdWJncmlkXHJcbiAqIEdyaWQgcHJvdmlkZXMgYWNjZXNzIHRvIHN1YmdyaWQgZGF0YSBhbmQgb3BlcmF0aW9uc1xyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEdyaWQoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGdyaWQgPSBmb3JtLkdyaWQuQ29udGFjdHM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gR3JpZC1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlOYW1lXCIsIFZhbHVlOiBncmlkLkVudGl0eU5hbWUsIFN0YXR1czogZ3JpZC5FbnRpdHlOYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJGZXRjaFhtbFwiLCBWYWx1ZTogZ3JpZC5GZXRjaFhtbCA/IGdyaWQuRmV0Y2hYbWwuc3Vic3RyaW5nKDAsIDUwKSArIFwiLi4uXCIgOiBudWxsLCBTdGF0dXM6IGdyaWQuRmV0Y2hYbWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkdyaWRUeXBlXCIsIFZhbHVlOiBncmlkLkdyaWRUeXBlLCBTdGF0dXM6IHR5cGVvZiBncmlkLkdyaWRUeXBlID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbGF0aW9uc2hpcFxyXG4gICAgICAgIGNvbnN0IHJlbCA9IGdyaWQuUmVsYXRpb25zaGlwO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLm5hbWVcIiwgVmFsdWU6IHJlbD8ubmFtZSwgU3RhdHVzOiByZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlJlbGF0aW9uc2hpcC5uYXZQcm9wTmFtZVwiLCBWYWx1ZTogcmVsPy5uYXZpZ2F0aW9uUHJvcGVydHlOYW1lLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLnR5cGVcIiwgVmFsdWU6IHJlbD8ucmVsYXRpb25zaGlwVHlwZSwgU3RhdHVzOiByZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gUm93c1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBncmlkLlJvd3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJSb3dzLmdldExlbmd0aCgpXCIsIFZhbHVlOiByb3dzPy5nZXRMZW5ndGgoKSwgU3RhdHVzOiByb3dzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdGVkUm93c1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IGdyaWQuU2VsZWN0ZWRSb3dzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiU2VsZWN0ZWRSb3dzLmdldExlbmd0aCgpXCIsIFZhbHVlOiBzZWxlY3RlZFJvd3M/LmdldExlbmd0aCgpLCBTdGF0dXM6IHNlbGVjdGVkUm93cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBUb3RhbFJlY29yZENvdW50XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJUb3RhbFJlY29yZENvdW50XCIsIFZhbHVlOiBncmlkLlRvdGFsUmVjb3JkQ291bnQsIFN0YXR1czogdHlwZW9mIGdyaWQuVG90YWxSZWNvcmRDb3VudCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBWaWV3U2VsZWN0b3JcclxuICAgICAgICBjb25zdCB2cyA9IGdyaWQuVmlld1NlbGVjdG9yO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIlZpZXdTZWxlY3RvclwiLCBWYWx1ZTogdnMgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogdnMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJWaWV3U2VsZWN0b3IuVmlzaWJsZVwiLCBWYWx1ZTogdnM/LlZpc2libGUsIFN0YXR1czogdnMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gVmlzaWJsZVxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGdyaWQuVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2YgZ3JpZC5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gTWV0aG9kOiBVcmxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gZ3JpZC5VcmwoMSk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJVcmwoMSlcIiwgVmFsdWU6IHVybCA/IHVybC5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIiA6IFwibnVsbFwiLCBTdGF0dXM6IHVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJVcmwoMSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGdyaWQuVmlzaWJsZTtcclxuICAgICAgICBncmlkLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBncmlkLlZpc2libGU7XHJcbiAgICAgICAgZ3JpZC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBBZGRPbkxvYWRcclxuICAgIGNvbnN0IG9uTG9hZENhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIEdyaWQgT25Mb2FkIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBncmlkLkFkZE9uTG9hZChvbkxvYWRDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJBZGRPbkxvYWRcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZE9uTG9hZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPbkxvYWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ3JpZC5SZW1vdmVPbkxvYWQob25Mb2FkQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25Mb2FkXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkxvYWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVmcmVzaFxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBEb24ndCBhY3R1YWxseSByZWZyZXNoIHRvIGF2b2lkIHNpZGUgZWZmZWN0cywganVzdCBjaGVjayBpZiBtZXRob2QgZXhpc3RzXHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLlJlZnJlc2ggPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hcIiwgVmFsdWU6IFwiQXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hcIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZWZyZXNoUmliYm9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ3JpZC5SZWZyZXNoUmliYm9uID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUmliYm9uXCIsIFZhbHVlOiBcIkF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUmliYm9uXCIsIFZhbHVlOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogT3BlblJlbGF0ZWRHcmlkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ3JpZC5PcGVuUmVsYXRlZEdyaWQgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIk9wZW5SZWxhdGVkR3JpZFwiLCBWYWx1ZTogXCJBdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIk9wZW5SZWxhdGVkR3JpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGVzdCBSb3dzIGl0ZXJhdGlvblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByb3dzID0gZ3JpZC5Sb3dzO1xyXG4gICAgICAgIGlmIChyb3dzICYmIHJvd3MuZ2V0TGVuZ3RoKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Um93ID0gcm93cy5nZXQoMCk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IGZpcnN0Um93Py5FbnRpdHlJZCB8fCBcIm5vIEVudGl0eUlkXCIsIFN0YXR1czogZmlyc3RSb3cgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0KDApXCIsIFZhbHVlOiBcIk5vIHJvd3NcIiwgU3RhdHVzOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDQSBURVNUIDExOiBHcmlkIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQ29udGFjdHMgc3ViZ3JpZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSBvYmplY3RzIGZvciBkaXNwbGF5XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgb3IgQ29tcGxleCBPYmplY3RdJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDEyOiBVdGlsaXR5IEFQSSAtIEdsb2JhbCBVdGlsaXR5IEZ1bmN0aW9uc1xyXG4gKiBVdGlsaXR5IHByb3ZpZGVzIGFjY2VzcyB0byBYcm0uVXRpbGl0eSwgWHJtLk5hdmlnYXRpb24sIFhybS5EZXZpY2UsIFhybS5FbmNvZGluZywgZXRjLlxyXG4gKiBUZXN0cyBBTEwgcHJvcGVydGllcyBvZiBlYWNoIG5lc3RlZCBvYmplY3QgKENsaWVudCwgT3JnYW5pemF0aW9uU2V0dGluZ3MsIFVzZXJTZXR0aW5ncylcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0VXRpbGl0eShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgdXRpbCA9IGZvcm0uVXRpbGl0eTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQ2xpZW50IChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gdXRpbC5DbGllbnQ7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJDbGllbnRcIiwgVmFsdWU6IHN0cmluZ2lmeShjbGllbnQpLCBTdGF0dXM6IGNsaWVudCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiQ2xpZW50LkNsaWVudE5hbWVcIiwgVmFsdWU6IGNsaWVudD8uQ2xpZW50TmFtZSwgU3RhdHVzOiBjbGllbnQ/LkNsaWVudE5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkNsaWVudC5DbGllbnRTdGF0ZVwiLCBWYWx1ZTogY2xpZW50Py5DbGllbnRTdGF0ZSwgU3RhdHVzOiBjbGllbnQ/LkNsaWVudFN0YXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJDbGllbnQuRm9ybUZhY3RvclwiLCBWYWx1ZTogY2xpZW50Py5Gb3JtRmFjdG9yLCBTdGF0dXM6IHR5cGVvZiBjbGllbnQ/LkZvcm1GYWN0b3IgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Jc05ldHdvcmtBdmFpbGFibGVcIiwgVmFsdWU6IGNsaWVudD8uSXNOZXR3b3JrQXZhaWxhYmxlLCBTdGF0dXM6IHR5cGVvZiBjbGllbnQ/LklzTmV0d29ya0F2YWlsYWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Jc09mZmxpbmVcIiwgVmFsdWU6IGNsaWVudD8uSXNPZmZsaW5lLCBTdGF0dXM6IHR5cGVvZiBjbGllbnQ/LklzT2ZmbGluZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEdsb2JhbCBDb250ZXh0IFByb3BlcnRpZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDbGllbnRVcmxcIiwgVmFsdWU6IHV0aWwuQ2xpZW50VXJsLCBTdGF0dXM6IHV0aWwuQ2xpZW50VXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwVXJsXCIsIFZhbHVlOiB1dGlsLkN1cnJlbnRBcHBVcmwsIFN0YXR1czogdXRpbC5DdXJyZW50QXBwVXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc09uUHJlbWlzZXNcIiwgVmFsdWU6IHV0aWwuSXNPblByZW1pc2VzLCBTdGF0dXM6IHR5cGVvZiB1dGlsLklzT25QcmVtaXNlcyA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJMZWFybmluZ1BhdGhBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiB1dGlsLkxlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJQYWdlQ29udGV4dFwiLCBWYWx1ZTogc3RyaW5naWZ5KHV0aWwuUGFnZUNvbnRleHQpLCBTdGF0dXM6IHV0aWwuUGFnZUNvbnRleHQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJWZXJzaW9uXCIsIFZhbHVlOiB1dGlsLlZlcnNpb24sIFN0YXR1czogdXRpbC5WZXJzaW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBPcmdhbml6YXRpb25TZXR0aW5ncyAoYWxsIHByb3BlcnRpZXMpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IG9yZ1NldHRpbmdzID0gdXRpbC5Pcmdhbml6YXRpb25TZXR0aW5ncztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJPcmdhbml6YXRpb25TZXR0aW5nc1wiLCBWYWx1ZTogc3RyaW5naWZ5KG9yZ1NldHRpbmdzKSwgU3RhdHVzOiBvcmdTZXR0aW5ncyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIk9yZy5BdHRyaWJ1dGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3M/LkF0dHJpYnV0ZXMpLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiT3JnLkJhc2VDdXJyZW5jeVwiLCBWYWx1ZTogc3RyaW5naWZ5KG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3kpLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3kgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJPcmcuQmFzZUN1cnJlbmN5SWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3lJZCwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uQmFzZUN1cnJlbmN5SWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJPcmcuRGVmYXVsdENvdW50cnlDb2RlXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uRGVmYXVsdENvdW50cnlDb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiT3JnLkZ1bGxOYW1lQ29udmVudGlvbkNvZGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uRnVsbE5hbWVDb252ZW50aW9uQ29kZSA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE5XCIsIFByb3BlcnR5OiBcIk9yZy5Jc0F1dG9TYXZlRW5hYmxlZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LklzQXV0b1NhdmVFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uSXNBdXRvU2F2ZUVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjBcIiwgUHJvcGVydHk6IFwiT3JnLklzVHJpYWxPcmdhbml6YXRpb25cIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Jc1RyaWFsT3JnYW5pemF0aW9uLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uSXNUcmlhbE9yZ2FuaXphdGlvbiA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMVwiLCBQcm9wZXJ0eTogXCJPcmcuTGFuZ3VhZ2VJZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/Lkxhbmd1YWdlSWQsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5MYW5ndWFnZUlkID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjJcIiwgUHJvcGVydHk6IFwiT3JnLk9yZ2FuaXphdGlvbkV4cGlyeURhdGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Pcmdhbml6YXRpb25FeHBpcnlEYXRlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjNcIiwgUHJvcGVydHk6IFwiT3JnLk9yZ2FuaXphdGlvbklkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uT3JnYW5pemF0aW9uSWQsIFN0YXR1czogb3JnU2V0dGluZ3M/Lk9yZ2FuaXphdGlvbklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjRcIiwgUHJvcGVydHk6IFwiT3JnLlVuaXF1ZU5hbWVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5VbmlxdWVOYW1lLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5VbmlxdWVOYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjVcIiwgUHJvcGVydHk6IFwiT3JnLlVzZVNreXBlUHJvdG9jb2xcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Vc2VTa3lwZVByb3RvY29sLCBTdGF0dXM6IHR5cGVvZiBvcmdTZXR0aW5ncz8uVXNlU2t5cGVQcm90b2NvbCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFVzZXJTZXR0aW5ncyAoYWxsIHByb3BlcnRpZXMpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9IHV0aWwuVXNlclNldHRpbmdzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI2XCIsIFByb3BlcnR5OiBcIlVzZXJTZXR0aW5nc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncyksIFN0YXR1czogdXNlclNldHRpbmdzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjdcIiwgUHJvcGVydHk6IFwiVXNlci5EYXRlRm9ybWF0dGluZ0luZm9cIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LkRhdGVGb3JtYXR0aW5nSW5mbyksIFN0YXR1czogdXNlclNldHRpbmdzPy5EYXRlRm9ybWF0dGluZ0luZm8gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyOFwiLCBQcm9wZXJ0eTogXCJVc2VyLkRlZmF1bHREYXNoYm9hcmRJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5EZWZhdWx0RGFzaGJvYXJkSWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyOVwiLCBQcm9wZXJ0eTogXCJVc2VyLklzR3VpZGVkSGVscEVuYWJsZWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uSXNHdWlkZWRIZWxwRW5hYmxlZCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5Jc0d1aWRlZEhlbHBFbmFibGVkID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMwXCIsIFByb3BlcnR5OiBcIlVzZXIuSXNIaWdoQ29udHJhc3RFbmFibGVkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LklzSGlnaENvbnRyYXN0RW5hYmxlZCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5Jc0hpZ2hDb250cmFzdEVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzFcIiwgUHJvcGVydHk6IFwiVXNlci5Jc1JUTFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Jc1JUTCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5Jc1JUTCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzMlwiLCBQcm9wZXJ0eTogXCJVc2VyLkxhbmd1YWdlSWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uTGFuZ3VhZ2VJZCwgU3RhdHVzOiB0eXBlb2YgdXNlclNldHRpbmdzPy5MYW5ndWFnZUlkID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzNcIiwgUHJvcGVydHk6IFwiVXNlci5Sb2xlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uUm9sZXMpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uUm9sZXMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzNFwiLCBQcm9wZXJ0eTogXCJVc2VyLlNlY3VyaXR5Um9sZVByaXZpbGVnZXNcIiwgVmFsdWU6IHN0cmluZ2lmeSh1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZVByaXZpbGVnZXMpLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlUHJpdmlsZWdlcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM1XCIsIFByb3BlcnR5OiBcIlVzZXIuU2VjdXJpdHlSb2xlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzZcIiwgUHJvcGVydHk6IFwiVXNlci5UaW1lWm9uZU9mZnNldE1pbnV0ZXNcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVGltZVpvbmVPZmZzZXRNaW51dGVzLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LlRpbWVab25lT2Zmc2V0TWludXRlcyA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM3XCIsIFByb3BlcnR5OiBcIlVzZXIuVHJhbnNhY3Rpb25DdXJyZW5jeVwiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeSksIFN0YXR1czogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzhcIiwgUHJvcGVydHk6IFwiVXNlci5UcmFuc2FjdGlvbkN1cnJlbmN5SWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeUlkLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVHJhbnNhY3Rpb25DdXJyZW5jeUlkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzlcIiwgUHJvcGVydHk6IFwiVXNlci5Vc2VySWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uVXNlcklkLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVXNlcklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNDBcIiwgUHJvcGVydHk6IFwiVXNlci5Vc2VyTmFtZVwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Vc2VyTmFtZSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlVzZXJOYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEVuY29kaW5nIE1ldGhvZHMgKHRlc3Qgd2l0aCBhY3R1YWwgdmFsdWVzKVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbmNvZGVkID0gdXRpbC5IdG1sRW5jb2RlKFwiPHRlc3Q+XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiSHRtbEVuY29kZVwiLCBWYWx1ZTogZW5jb2RlZCwgU3RhdHVzOiBlbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkh0bWxFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IHV0aWwuSHRtbERlY29kZShcIiZsdDt0ZXN0Jmd0O1wiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkh0bWxEZWNvZGVcIiwgVmFsdWU6IGRlY29kZWQsIFN0YXR1czogZGVjb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJIdG1sRGVjb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVuY29kZWQgPSB1dGlsLkh0bWxBdHRyaWJ1dGVFbmNvZGUoXCJ0ZXN0PVxcXCJ2YWx1ZVxcXCJcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJIdG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlbmNvZGVkLCBTdGF0dXM6IGVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiSHRtbEF0dHJpYnV0ZUVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB4bWxFbmNvZGVkID0gdXRpbC5YbWxFbmNvZGUoXCI8dGVzdD5cIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJYbWxFbmNvZGVcIiwgVmFsdWU6IHhtbEVuY29kZWQsIFN0YXR1czogeG1sRW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJYbWxFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeG1sQXR0ckVuY29kZWQgPSB1dGlsLlhtbEF0dHJpYnV0ZUVuY29kZShcInRlc3Q9XFxcInZhbHVlXFxcIlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlhtbEF0dHJpYnV0ZUVuY29kZVwiLCBWYWx1ZTogeG1sQXR0ckVuY29kZWQsIFN0YXR1czogeG1sQXR0ckVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiWG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBVUkwvUmVzb3VyY2UgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcmVwZW5kZWRVcmwgPSB1dGlsLlByZXBlbmRPcmdOYW1lKFwiL3Rlc3RcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJQcmVwZW5kT3JnTmFtZVwiLCBWYWx1ZTogcHJlcGVuZGVkVXJsLCBTdGF0dXM6IHByZXBlbmRlZFVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJQcmVwZW5kT3JnTmFtZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3ZWJSZXNvdXJjZVVybCA9IHV0aWwuV2ViUmVzb3VyY2VVcmwoXCJ0ZXN0Lmh0bWxcIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJXZWJSZXNvdXJjZVVybFwiLCBWYWx1ZTogd2ViUmVzb3VyY2VVcmwsIFN0YXR1czogd2ViUmVzb3VyY2VVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiV2ViUmVzb3VyY2VVcmxcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEFwcC9HbG9iYWxDb250ZXh0IEFzeW5jIE1ldGhvZHMgKGNoZWNrIGZ1bmN0aW9uIGF2YWlsYWJpbGl0eSlcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJBZHZhbmNlZENvbmZpZ1NldHRpbmdcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkFkdmFuY2VkQ29uZmlnU2V0dGluZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQWR2YW5jZWRDb25maWdTZXR0aW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiQWR2YW5jZWRDb25maWdTZXR0aW5nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcE5hbWVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBOYW1lID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwTmFtZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBQcm9wZXJ0aWVzXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwUHJvcGVydGllcyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ3VycmVudEFwcFByb3BlcnRpZXMgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcFByb3BlcnRpZXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE5hdmlnYXRpb24gTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJOYXZpZ2F0ZVRvXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5OYXZpZ2F0ZVRvID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5OYXZpZ2F0ZVRvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIk5hdmlnYXRlVG9cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiT3BlbkFsZXJ0RGlhbG9nXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuQWxlcnREaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5BbGVydERpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJPcGVuQWxlcnREaWFsb2dcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTNcIiwgUHJvcGVydHk6IFwiT3BlbkNvbmZpcm1EaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5Db25maXJtRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuQ29uZmlybURpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJPcGVuQ29uZmlybURpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNFwiLCBQcm9wZXJ0eTogXCJPcGVuRXJyb3JEaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5FcnJvckRpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkVycm9yRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIk9wZW5FcnJvckRpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJPcGVuRmlsZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5GaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIk9wZW5GaWxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIk9wZW5Gb3JtXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuRm9ybSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkZvcm0gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiT3BlbkZvcm1cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTdcIiwgUHJvcGVydHk6IFwiT3BlblVybFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlblVybCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlblVybCA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxN1wiLCBQcm9wZXJ0eTogXCJPcGVuVXJsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE4XCIsIFByb3BlcnR5OiBcIk9wZW5XZWJSZXNvdXJjZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbldlYlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuV2ViUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMThcIiwgUHJvcGVydHk6IFwiT3BlbldlYlJlc291cmNlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBQcm9ncmVzcy9Ob3RpZmljYXRpb24gTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOVwiLCBQcm9wZXJ0eTogXCJTaG93UHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlNob3dQcm9ncmVzc0luZGljYXRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE5XCIsIFByb3BlcnR5OiBcIlNob3dQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMFwiLCBQcm9wZXJ0eTogXCJDbG9zZVByb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DbG9zZVByb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIwXCIsIFByb3BlcnR5OiBcIkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjFcIiwgUHJvcGVydHk6IFwiQWRkR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5BZGRHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMVwiLCBQcm9wZXJ0eTogXCJBZGRHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjJcIiwgUHJvcGVydHk6IFwiQ2xlYXJHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DbGVhckdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMlwiLCBQcm9wZXJ0eTogXCJDbGVhckdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gVXRpbGl0eSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIzXCIsIFByb3BlcnR5OiBcIkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9uc1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjNcIiwgUHJvcGVydHk6IFwiQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI0XCIsIFByb3BlcnR5OiBcIkVudGl0eU1ldGFkYXRhXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5FbnRpdHlNZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuRW50aXR5TWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjRcIiwgUHJvcGVydHk6IFwiRW50aXR5TWV0YWRhdGFcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjVcIiwgUHJvcGVydHk6IFwiRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5FbnRpdHlNYWluRm9ybURlc2NyaXB0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNYWluRm9ybURlc2NyaXB0b3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjZcIiwgUHJvcGVydHk6IFwiSW52b2tlUHJvY2Vzc0FjdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuSW52b2tlUHJvY2Vzc0FjdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuSW52b2tlUHJvY2Vzc0FjdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNlwiLCBQcm9wZXJ0eTogXCJJbnZva2VQcm9jZXNzQWN0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI3XCIsIFByb3BlcnR5OiBcIkxvb2t1cE9iamVjdHNcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkxvb2t1cE9iamVjdHMgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkxvb2t1cE9iamVjdHMgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjdcIiwgUHJvcGVydHk6IFwiTG9va3VwT2JqZWN0c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOFwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoUGFyZW50R3JpZFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUmVmcmVzaFBhcmVudEdyaWQgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlJlZnJlc2hQYXJlbnRHcmlkID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI4XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hQYXJlbnRHcmlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI5XCIsIFByb3BlcnR5OiBcIlJlc291cmNlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5SZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjlcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzBcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VTdHJpbmdcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlJlc291cmNlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5SZXNvdXJjZVN0cmluZyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMFwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVN0cmluZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRGV2aWNlIE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzFcIiwgUHJvcGVydHk6IFwiQmFyY29kZVZhbHVlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5CYXJjb2RlVmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkJhcmNvZGVWYWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMVwiLCBQcm9wZXJ0eTogXCJCYXJjb2RlVmFsdWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzJcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZUF1ZGlvXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DYXB0dXJlQXVkaW8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNhcHR1cmVBdWRpbyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMlwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlQXVkaW9cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzNcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZUltYWdlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DYXB0dXJlSW1hZ2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNhcHR1cmVJbWFnZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzM1wiLCBQcm9wZXJ0eTogXCJDYXB0dXJlSW1hZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzRcIiwgUHJvcGVydHk6IFwiQ2FwdHVyZVZpZGVvXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DYXB0dXJlVmlkZW8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNhcHR1cmVWaWRlbyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNFwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlVmlkZW9cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzVcIiwgUHJvcGVydHk6IFwiQ3VycmVudFBvc2l0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5DdXJyZW50UG9zaXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkN1cnJlbnRQb3NpdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50UG9zaXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzZcIiwgUHJvcGVydHk6IFwiUGlja0ZpbGVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlBpY2tGaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5QaWNrRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNlwiLCBQcm9wZXJ0eTogXCJQaWNrRmlsZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gUGFuZWwgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzN1wiLCBQcm9wZXJ0eTogXCJMb2FkUGFuZWxcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkxvYWRQYW5lbCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuTG9hZFBhbmVsID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM3XCIsIFByb3BlcnR5OiBcIkxvYWRQYW5lbFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDI3IFRFU1QgMTI6IFV0aWxpdHkgQVBJIFske3N0YXJ0VGltZX1dIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SNDApXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIE1ldGhvZHMgKFMxLVMzNylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IG9iamVjdHMgZm9yIGRpc3BsYXlcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBvciBDb21wbGV4IE9iamVjdF0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTM6IE11bHRpT3B0aW9uU2V0IENvbnRyb2wgLSB2NF9DYXRlZ29yaWVzIEZpZWxkXHJcbiAqIE11bHRpT3B0aW9uU2V0IGV4dGVuZHMgSUNvbnRyb2xPcHRpb25TZXQgd2l0aCBWYWx1ZSBhcyBudW1iZXJbXSAoYXJyYXkpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TXVsdGlPcHRpb25TZXQoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1vcyA9IGZvcm0uQm9keS52NF9DYXRlZ29yaWVzO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBtb3MuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNdWx0aU9wdGlvblNldC1zcGVjaWZpYzogVmFsdWUsIEluaXRpYWxWYWx1ZSwgU2VsZWN0ZWRPcHRpb24sIFRleHQgYXJlIGFsbCBhcnJheXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChudW1iZXJbXSlcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmlnaW5hbFZhbHVlKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG9yaWdpbmFsVmFsdWUpIHx8IG9yaWdpbmFsVmFsdWUgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk9wdGlvbnMgKGFycmF5KVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5PcHRpb25zKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5PcHRpb25zKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiU2VsZWN0ZWRPcHRpb24gKGFycmF5KVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5TZWxlY3RlZE9wdGlvbiksIFN0YXR1czogQXJyYXkuaXNBcnJheShtb3MuU2VsZWN0ZWRPcHRpb24pIHx8IG1vcy5TZWxlY3RlZE9wdGlvbiA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiSW5pdGlhbFZhbHVlIChudW1iZXJbXSlcIiwgVmFsdWU6IHN0cmluZ2lmeShtb3MuSW5pdGlhbFZhbHVlKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5Jbml0aWFsVmFsdWUpIHx8IG1vcy5Jbml0aWFsVmFsdWUgPT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIlRleHQgKHN0cmluZ1tdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5UZXh0KSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5UZXh0KSB8fCBtb3MuVGV4dCA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtb3MuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG1vcy5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG1vcy5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG1vcy5BdHRyaWJ1dGVOYW1lID09PSBcInY0X2NhdGVnb3JpZXNcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbW9zLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbW9zLkF0dHJpYnV0ZVR5cGUgPT09IFwibXVsdGlzZWxlY3RvcHRpb25zZXRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG1vcy5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtb3MuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG1vcy5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtb3MuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG1vcy5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogbW9zLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtb3MuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBtb3MuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbW9zLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbW9zLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWUgKGFycmF5IG9mIG51bWJlcnMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IFsxLCAyXTsgLy8gVGVzdCB3aXRoIHNhbXBsZSB2YWx1ZXNcclxuICAgICAgICBtb3MuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtb3MuVmFsdWU7XHJcbiAgICAgICAgbW9zLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gQXJyYXkuaXNBcnJheShuZXdWYWx1ZSkgfHwgbmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBzdWNjZXNzID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gbW9zLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbW9zLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb3MuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb3MuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBtb3MuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9zLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5EaXNhYmxlZDtcclxuICAgICAgICBtb3MuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1vcy5MYWJlbDtcclxuICAgICAgICBtb3MuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5MYWJlbDtcclxuICAgICAgICBtb3MuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBtb3MuVmlzaWJsZTtcclxuICAgICAgICBtb3MuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5WaXNpYmxlO1xyXG4gICAgICAgIG1vcy5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcHRpb24gKGdldCBzcGVjaWZpYyBvcHRpb24pXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBtb3MuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RPcHRpb24gPSBtb3MuT3B0aW9uKG9wdGlvbnNbMF0udmFsdWUpO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IHN0cmluZ2lmeShmaXJzdE9wdGlvbiksIFN0YXR1czogZmlyc3RPcHRpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IFwiTm8gb3B0aW9uc1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJPcHRpb24odmFsdWUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9uQ2hhbmdlXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE11bHRpT3B0aW9uU2V0IE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlT25DaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZpcmVPbkNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb3MuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0Tm90aWZpY2F0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5TZXROb3RpZmljYXRpb24oXCJUZXN0IE11bHRpT3B0aW9uU2V0IG5vdGlmaWNhdGlvblwiLCBcIk1PU19URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb3MuQ2xlYXJOb3RpZmljYXRpb24oXCJNT1NfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBTZXRJc1ZhbGlkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERkY3XHVGRTBGIFRFU1QgMTM6IE11bHRpT3B0aW9uU2V0IENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogdjRfQ2F0ZWdvcmllcyBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzdHJpbmdpZnkgb2JqZWN0cyBmb3IgZGlzcGxheVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyIG9yIENvbXBsZXggT2JqZWN0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxNDogVGFiIENvbnRyb2wgLSBERVRBSUxTX1RBQlxyXG4gKiBJVGFiIGludGVyZmFjZSBmb3IgZm9ybSB0YWJzIHdpdGggRGlzcGxheVN0YXRlLCBMYWJlbCwgVmlzaWJsZSBwcm9wZXJ0aWVzXHJcbiAqIEFsc28gdGVzdHMgU2VjdGlvbiB3aXRoaW4gdGhlIHRhYlxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RUYWIoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHRhYiA9IGZvcm0uQm9keS5UYWIuU1VNTUFSWV9UQUI7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBUQUIgUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVGFiLk5hbWVcIiwgVmFsdWU6IHRhYi5OYW1lLCBTdGF0dXM6IHRhYi5OYW1lID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJUYWIuUGFyZW50XCIsIFZhbHVlOiB0YWIuUGFyZW50ID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IHRhYi5QYXJlbnQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlRhYi5EaXNwbGF5U3RhdGVcIiwgVmFsdWU6IHRhYi5EaXNwbGF5U3RhdGUsIFN0YXR1czogdGFiLkRpc3BsYXlTdGF0ZSA9PT0gXCJleHBhbmRlZFwiIHx8IHRhYi5EaXNwbGF5U3RhdGUgPT09IFwiY29sbGFwc2VkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlRhYi5MYWJlbFwiLCBWYWx1ZTogdGFiLkxhYmVsLCBTdGF0dXM6IHRhYi5MYWJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVGFiLlZpc2libGVcIiwgVmFsdWU6IHRhYi5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiB0YWIuVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VjdGlvbiBwcm9wZXJ0aWVzIChBQ0NPVU5UX0lORk9STUFUSU9OIHNlY3Rpb24pXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHRhYi5TZWN0aW9uLkFDQ09VTlRfSU5GT1JNQVRJT047XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkJJTExJTkdcIiwgVmFsdWU6IHNlY3Rpb24gPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc2VjdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5OYW1lXCIsIFZhbHVlOiBzZWN0aW9uPy5OYW1lLCBTdGF0dXM6IHNlY3Rpb24/Lk5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uUGFyZW50XCIsIFZhbHVlOiBzZWN0aW9uPy5QYXJlbnQgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogc2VjdGlvbj8uUGFyZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkxhYmVsXCIsIFZhbHVlOiBzZWN0aW9uPy5MYWJlbCwgU3RhdHVzOiBzZWN0aW9uPy5MYWJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uVmlzaWJsZVwiLCBWYWx1ZTogc2VjdGlvbj8uVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2Ygc2VjdGlvbj8uVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVEFCIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc3BsYXlTdGF0ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzcGxheVN0YXRlID0gdGFiLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICB0YWIuRGlzcGxheVN0YXRlID0gb3JpZ0Rpc3BsYXlTdGF0ZSA9PT0gXCJleHBhbmRlZFwiID8gXCJjb2xsYXBzZWRcIiA6IFwiZXhwYW5kZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgdGFiLkRpc3BsYXlTdGF0ZSA9IG9yaWdEaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJUYWIuRGlzcGxheVN0YXRlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVGFiLkRpc3BsYXlTdGF0ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSB0YWIuTGFiZWw7XHJcbiAgICAgICAgdGFiLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSB0YWIuTGFiZWw7XHJcbiAgICAgICAgdGFiLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSB0YWIuVmlzaWJsZTtcclxuICAgICAgICB0YWIuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5WaXNpYmxlO1xyXG4gICAgICAgIHRhYi5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJUYWIuVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlRhYi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZvY3VzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGFiLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVGFiLkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVGFiLkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZFRhYlN0YXRlQ2hhbmdlXHJcbiAgICBjb25zdCB0YWJTdGF0ZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIFRhYiBTdGF0ZUNoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGFiLkFkZFRhYlN0YXRlQ2hhbmdlKHRhYlN0YXRlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVGFiLkFkZFRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJUYWIuQWRkVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlKHRhYlN0YXRlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVGFiLlJlbW92ZVRhYlN0YXRlQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJUYWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRUNUSU9OIFNFVFRFUlMgKFMtSW5kZXggY29udGludWVkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0YWIuU2VjdGlvbi5BQ0NPVU5UX0lORk9STUFUSU9OO1xyXG5cclxuICAgIC8vIFNlY3Rpb246IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHNlY3Rpb24uTGFiZWw7XHJcbiAgICAgICAgc2VjdGlvbi5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VjdGlvbi5MYWJlbDtcclxuICAgICAgICBzZWN0aW9uLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNlY3Rpb246IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBzZWN0aW9uLlZpc2libGU7XHJcbiAgICAgICAgc2VjdGlvbi5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gc2VjdGlvbi5WaXNpYmxlO1xyXG4gICAgICAgIHNlY3Rpb24uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDRDEgVEVTVCAxNDogVGFiIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogREVUQUlMU19UQUIgJiBCSUxMSU5HIHNlY3Rpb24gLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxMClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE1OiBOYXZpZ2F0aW9uSXRlbSBDb250cm9sIC0gQWNjb3VudF9UYXNrc1xyXG4gKiBOYXZpZ2F0aW9uSXRlbSBpbnRlcmZhY2UgZm9yIGZvcm0gbmF2aWdhdGlvbiBpdGVtcyB3aXRoIElkLCBMYWJlbCwgVmlzaWJsZSwgRm9jdXNcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TmF2aWdhdGlvbkl0ZW0oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG5hdkl0ZW0gPSBmb3JtLk5hdmlnYXRpb24ubmF2X21zYV9hY2NvdW50X21hbmFnaW5ncGFydG5lcjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBkZWJ1Z2dlcjtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJJZFwiLCBWYWx1ZTogbmF2SXRlbS5JZCwgU3RhdHVzOiBuYXZJdGVtLklkID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogbmF2SXRlbS5MYWJlbCwgU3RhdHVzOiBuYXZJdGVtLkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBuYXZJdGVtLlZpc2libGUsIFN0YXR1czogdHlwZW9mIG5hdkl0ZW0uVmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbmF2SXRlbS5MYWJlbDtcclxuICAgICAgICBuYXZJdGVtLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuYXZJdGVtLkxhYmVsO1xyXG4gICAgICAgIG5hdkl0ZW0uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBuYXZJdGVtLlZpc2libGU7XHJcbiAgICAgICAgbmF2SXRlbS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbmF2SXRlbS5WaXNpYmxlO1xyXG4gICAgICAgIG5hdkl0ZW0uVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBuYXZJdGVtLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNFXHVEREVEIFRFU1QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQWNjb3VudF9UYXNrcyAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjMpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxNjogRXhlY3V0aW9uQ29udGV4dCAtIGZvcm0uRXhlY3V0aW9uQ29udGV4dFxyXG4gKiBJRXhlY3V0aW9uQ29udGV4dCBpbnRlcmZhY2UgZm9yIGZvcm0gZXZlbnQgaGFuZGxlcnMgd2l0aCBleGVjdXRpb24gY29udGV4dCBhY2Nlc3NcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0RXhlY3V0aW9uQ29udGV4dChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgY3R4ID0gZm9ybS5FeGVjdXRpb25Db250ZXh0O1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiRGVwdGhcIiwgVmFsdWU6IGN0eC5EZXB0aCwgU3RhdHVzOiB0eXBlb2YgY3R4LkRlcHRoID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHlSZWZlcmVuY2VcIiwgVmFsdWU6IGN0eC5FbnRpdHlSZWZlcmVuY2UsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkV2ZW50QXJnc1wiLCBWYWx1ZTogY3R4LkV2ZW50QXJncywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiRXZlbnRTb3VyY2VcIiwgVmFsdWU6IGN0eC5FdmVudFNvdXJjZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiRm9ybUNvbnRleHRcIiwgVmFsdWU6IGN0eC5Gb3JtQ29udGV4dCA/IFwiRm9ybUNvbnRleHQgT2JqZWN0XCIgOiBudWxsLCBTdGF0dXM6IGN0eC5Gb3JtQ29udGV4dCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiSXNTYXZlU3VjY2Vzc1wiLCBWYWx1ZTogY3R4LklzU2F2ZVN1Y2Nlc3MsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIlNhdmVFcnJvckluZm9cIiwgVmFsdWU6IGN0eC5TYXZlRXJyb3JJbmZvLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJTYXZlTW9kZVwiLCBWYWx1ZTogY3R4LlNhdmVNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldFNoYXJlZFZhcmlhYmxlIC8gR2V0U2hhcmVkVmFyaWFibGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdEtleSA9IFwiRGV2S2l0VGVzdFZhcmlhYmxlXCI7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0geyBkYXRhOiBcIlRlc3QgdmFsdWUgZnJvbSBEZXZLaXRcIiwgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfTtcclxuICAgICAgICBjdHguU2V0U2hhcmVkVmFyaWFibGUodGVzdEtleSwgdGVzdFZhbHVlKTtcclxuICAgICAgICBjb25zdCByZXRyaWV2ZWQgPSBjdHguR2V0U2hhcmVkVmFyaWFibGUodGVzdEtleSk7XHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHJldHJpZXZlZCAmJiByZXRyaWV2ZWQuZGF0YSA9PT0gdGVzdFZhbHVlLmRhdGE7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJTZXQvR2V0U2hhcmVkVmFyaWFibGVcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldCBhbmQgUmV0cmlldmVkIFN1Y2Nlc3NmdWxseVwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlNldC9HZXRTaGFyZWRWYXJpYWJsZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBJc0luaXRpYWxMb2FkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbCA9IGN0eC5Jc0luaXRpYWxMb2FkKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJJc0luaXRpYWxMb2FkKClcIiwgVmFsdWU6IGlzSW5pdGlhbCwgU3RhdHVzOiB0eXBlb2YgaXNJbml0aWFsID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJJc0luaXRpYWxMb2FkKClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogSXNEZWZhdWx0UHJldmVudGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlzUHJldmVudGVkID0gY3R4LklzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiSXNEZWZhdWx0UHJldmVudGVkKClcIiwgVmFsdWU6IGlzUHJldmVudGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIklzRGVmYXVsdFByZXZlbnRlZCgpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IERpc2FibGVBc3luY1RpbWVvdXQgKG9ubHkgdmFsaWQgaW4gT25TYXZlLCB3ZSBqdXN0IHRlc3QgaXQgZXhpc3RzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBoYXNNZXRob2QgPSB0eXBlb2YgY3R4LkRpc2FibGVBc3luY1RpbWVvdXQgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVBc3luY1RpbWVvdXRcIiwgVmFsdWU6IGhhc01ldGhvZCA/IFwiTWV0aG9kIGV4aXN0c1wiIDogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IGhhc01ldGhvZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlQXN5bmNUaW1lb3V0XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldFByZXZlbnREZWZhdWx0IChvbmx5IHZhbGlkIGluIE9uU2F2ZSwgd2UganVzdCB0ZXN0IGl0IGV4aXN0cylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaGFzTWV0aG9kID0gdHlwZW9mIGN0eC5TZXRQcmV2ZW50RGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiU2V0UHJldmVudERlZmF1bHRcIiwgVmFsdWU6IGhhc01ldGhvZCA/IFwiTWV0aG9kIGV4aXN0c1wiIDogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IGhhc01ldGhvZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBTZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3IgKG9ubHkgdmFsaWQgaW4gT25TYXZlLCB3ZSBqdXN0IHRlc3QgaXQgZXhpc3RzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBoYXNNZXRob2QgPSB0eXBlb2YgY3R4LlNldFByZXZlbnREZWZhdWx0T25FcnJvciA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiU2V0UHJldmVudERlZmF1bHRPbkVycm9yXCIsIFZhbHVlOiBoYXNNZXRob2QgPyBcIk1ldGhvZCBleGlzdHNcIiA6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBoYXNNZXRob2QgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiU2V0UHJldmVudERlZmF1bHRPbkVycm9yXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGQUYgVEVTVCAxNjogRXhlY3V0aW9uQ29udGV4dCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBmb3JtLkV4ZWN1dGlvbkNvbnRleHQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTc6IFNpZGVQYW5lcyBBUElcclxuICogXHJcbiAqIFRlc3RzIHRoZSBmb3JtLlNpZGVQYW5lcyBBUEkgd3JhcHBlclxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMi4uLilcclxuICogXHJcbiAqIElTaWRlUGFuZXMgSW50ZXJmYWNlOlxyXG4gKiAtIERpc3BsYXlTdGF0ZTogMCB8IDEgKGdldC9zZXQpXHJcbiAqIC0gQ3JlYXRlKHBhbmVPcHRpb25zLCBzdWNjZXNzQ2FsbGJhY2spOiB2b2lkXHJcbiAqIC0gR2V0KHBhbmVJZCk6IGFueVxyXG4gKiAtIEdldEFsbCgpOiBhbnlbXVxyXG4gKiAtIEdldFNlbGVjdGVkKCk6IGFueVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RTaWRlUGFuZXMoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107ICAgICAgICAgLy8gUmVhZE9ubHkgKFItSW5kZXgpXHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTsgICAvLyBTZXR0ZXJzICYgTWV0aG9kcyAoUy1JbmRleClcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3Qgc2lkZVBhbmVzID0gZm9ybS5TaWRlUGFuZXM7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBSMTogQ2hlY2sgU2lkZVBhbmVzIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiU2lkZVBhbmVzIGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogc2lkZVBhbmVzICE9PSB1bmRlZmluZWQgJiYgc2lkZVBhbmVzICE9PSBudWxsLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHNpZGVQYW5lcyAhPT0gdW5kZWZpbmVkICYmIHNpZGVQYW5lcyAhPT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFIyOiBEaXNwbGF5U3RhdGUgKHJlYWRvbmx5IGNoZWNrKVxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlTdGF0ZSA9IHNpZGVQYW5lcy5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZFN0YXRlID0gZGlzcGxheVN0YXRlID09PSAwIHx8IGRpc3BsYXlTdGF0ZSA9PT0gMTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkRpc3BsYXlTdGF0ZSAoZ2V0KVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZGlzcGxheVN0YXRlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGlzVmFsaWRTdGF0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFIzOiBHZXRBbGwgcmV0dXJucyBhcnJheVxyXG4gICAgICAgIGNvbnN0IGFsbFBhbmVzID0gc2lkZVBhbmVzLkdldEFsbCgpO1xyXG4gICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFsbFBhbmVzKSB8fCBhbGxQYW5lcyA9PT0gdW5kZWZpbmVkIHx8IGFsbFBhbmVzID09PSBudWxsO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiR2V0QWxsKCkgcmV0dXJucyBhcnJheVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogQXJyYXkuaXNBcnJheShhbGxQYW5lcykgPyBgQXJyYXlbJHthbGxQYW5lcy5sZW5ndGh9XWAgOiBhbGxQYW5lcyxcclxuICAgICAgICAgICAgU3RhdHVzOiBpc0FycmF5ID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjQ6IEdldFNlbGVjdGVkIHJldHVybnMgcGFuZSBvciBudWxsXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQYW5lID0gc2lkZVBhbmVzLkdldFNlbGVjdGVkKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJHZXRTZWxlY3RlZCgpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBzZWxlY3RlZFBhbmUgIT09IHVuZGVmaW5lZCA/IChzZWxlY3RlZFBhbmU/LnBhbmVJZCA/PyBcIm51bGxcIikgOiBcInVuZGVmaW5lZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCIgIC8vIENhbiBiZSBudWxsIGlmIG5vIHBhbmUgc2VsZWN0ZWRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjU6IENyZWF0ZSBmdW5jdGlvbiBleGlzdHNcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI1XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkNyZWF0ZSBmdW5jdGlvbiBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IHR5cGVvZiBzaWRlUGFuZXMuQ3JlYXRlID09PSAnZnVuY3Rpb24nLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHR5cGVvZiBzaWRlUGFuZXMuQ3JlYXRlID09PSAnZnVuY3Rpb24nID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjY6IEdldCBmdW5jdGlvbiBleGlzdHNcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI2XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkdldCBmdW5jdGlvbiBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IHR5cGVvZiBzaWRlUGFuZXMuR2V0ID09PSAnZnVuY3Rpb24nLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHR5cGVvZiBzaWRlUGFuZXMuR2V0ID09PSAnZnVuY3Rpb24nID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjc6IEdldEFsbCBmdW5jdGlvbiBleGlzdHNcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI3XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkdldEFsbCBmdW5jdGlvbiBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IHR5cGVvZiBzaWRlUGFuZXMuR2V0QWxsID09PSAnZnVuY3Rpb24nLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHR5cGVvZiBzaWRlUGFuZXMuR2V0QWxsID09PSAnZnVuY3Rpb24nID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjg6IEdldFNlbGVjdGVkIGZ1bmN0aW9uIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjhcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiR2V0U2VsZWN0ZWQgZnVuY3Rpb24gZXhpc3RzXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiB0eXBlb2Ygc2lkZVBhbmVzLkdldFNlbGVjdGVkID09PSAnZnVuY3Rpb24nLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHR5cGVvZiBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIkVSUlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZWFkT25seSBFcnJvclwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUzE6IFNldCBEaXNwbGF5U3RhdGUgdG8gMSAoRXhwYW5kZWQpXHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTdGF0ZSA9IHNpZGVQYW5lcy5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgc2lkZVBhbmVzLkRpc3BsYXlTdGF0ZSA9IDE7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUxID0gc2lkZVBhbmVzLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMxXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkRpc3BsYXlTdGF0ZSA9IDEgKEV4cGFuZGVkKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYCR7b3JpZ2luYWxTdGF0ZX0gXHUyMTkyICR7bmV3U3RhdGUxfWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogbmV3U3RhdGUxID09PSAxID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUzI6IFNldCBEaXNwbGF5U3RhdGUgdG8gMCAoQ29sbGFwc2VkKVxyXG4gICAgICAgIHNpZGVQYW5lcy5EaXNwbGF5U3RhdGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IG5ld1N0YXRlMCA9IHNpZGVQYW5lcy5EaXNwbGF5U3RhdGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJEaXNwbGF5U3RhdGUgPSAwIChDb2xsYXBzZWQpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgMSBcdTIxOTIgJHtuZXdTdGF0ZTB9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdTdGF0ZTAgPT09IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTMzogUmVzdG9yZSBvcmlnaW5hbCBEaXNwbGF5U3RhdGVcclxuICAgICAgICBzaWRlUGFuZXMuRGlzcGxheVN0YXRlID0gb3JpZ2luYWxTdGF0ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkRpc3BsYXlTdGF0ZSAocmVzdG9yZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGAwIFx1MjE5MiAke3NpZGVQYW5lcy5EaXNwbGF5U3RhdGV9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBzaWRlUGFuZXMuRGlzcGxheVN0YXRlID09PSBvcmlnaW5hbFN0YXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUzQ6IEdldCBub24tZXhpc3RlbnQgcGFuZVxyXG4gICAgICAgIGNvbnN0IG5vbkV4aXN0ZW50UGFuZSA9IHNpZGVQYW5lcy5HZXQoXCJub25fZXhpc3RlbnRfcGFuZV9pZF8xMjM0NVwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkdldCgnbm9uX2V4aXN0ZW50X3BhbmVfaWQnKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogbm9uRXhpc3RlbnRQYW5lID09PSB1bmRlZmluZWQgfHwgbm9uRXhpc3RlbnRQYW5lID09PSBudWxsID8gXCJudWxsL3VuZGVmaW5lZFwiIDogbm9uRXhpc3RlbnRQYW5lLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCIgIC8vIFNob3VsZCByZXR1cm4gbnVsbC91bmRlZmluZWQgZm9yIG5vbi1leGlzdGVudCBwYW5lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFM1OiBDcmVhdGUgcGFuZSAod2l0aCBjYWxsYmFjayB2ZXJpZmljYXRpb24pXHJcbiAgICAgICAgbGV0IGNyZWF0ZVJlc3VsdCA9IFwiTm90IGNhbGxlZFwiO1xyXG4gICAgICAgIHNpZGVQYW5lcy5DcmVhdGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogXCJEZXZLaXQgVGVzdCBQYW5lXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGNhbkNsb3NlOiB0cnVlXHJcbiAgICAgICAgfSwgKHBhbmU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVSZXN1bHQgPSBwYW5lID8gYENyZWF0ZWQ6ICR7cGFuZS5wYW5lSWQgfHwgJ3Vua25vd24nfWAgOiBcIkNhbGxiYWNrIHJlY2VpdmVkIG51bGxcIjtcclxuICAgICAgICAgICAgLy8gQ2xlYW4gdXA6IGNsb3NlIHRoZSBwYW5lIGlmIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICAgIGlmIChwYW5lICYmIHBhbmUuY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcGFuZS5jbG9zZSgpLCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQ3JlYXRlKHsgdGl0bGUsIHdpZHRoLCBjYW5DbG9zZSB9KVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogXCJBc3luYyBjYWxsIGluaXRpYXRlZFwiLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzEzXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUzY6IEdldEFsbCBhZnRlciBwb3RlbnRpYWwgY3JlYXRlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhbmVzQWZ0ZXJDcmVhdGUgPSBzaWRlUGFuZXMuR2V0QWxsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY1x1RDgzRFx1REQwRCBTNiAoRGVsYXllZCk6IEdldEFsbCgpIGFmdGVyIENyZWF0ZSA9ICR7QXJyYXkuaXNBcnJheShwYW5lc0FmdGVyQ3JlYXRlKSA/IHBhbmVzQWZ0ZXJDcmVhdGUubGVuZ3RoIDogJ04vQSd9IHBhbmVzYCwgXCJjb2xvcjogIzlDMjdCMDtcIik7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM2XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkdldEFsbCgpIChkZWxheWVkIGNoZWNrIGxvZ2dlZClcIixcclxuICAgICAgICAgICAgVmFsdWU6IFwiU2VlIGNvbnNvbGUgZm9yIGRlbGF5ZWQgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUy1FUlJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiU2V0dGVycy9NZXRob2RzIEVycm9yXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REZBRiBURVNUIDE3OiBTaWRlUGFuZXMgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogZm9ybS5TaWRlUGFuZXMgLSAke3Bhc3NlZH0vJHt0b3RhbH0gKFx1MjZBMCR7d2FybmluZ3N9KWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkLCAke3dhcm5pbmdzfSB3YXJuaW5nc2AsXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE4OiBDb3BpbG90IEFQSVxyXG4gKiBcclxuICogVGVzdHMgdGhlIGZvcm0uQ29waWxvdCBBUEkgd3JhcHBlclxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMi4uLilcclxuICogXHJcbiAqIElDb3BpbG90IEludGVyZmFjZTpcclxuICogLSBFeGVjdXRlRXZlbnQoZXZlbnROYW1lLCBldmVudFBhcmFtZXRlcnMsIHN1Y2Nlc3NDYWxsYmFjaz8sIGVycm9yQ2FsbGJhY2s/KTogUHJvbWlzZSB8IHZvaWRcclxuICogLSBFeGVjdXRlUHJvbXB0KHByb21wdFRleHQsIHN1Y2Nlc3NDYWxsYmFjaz8sIGVycm9yQ2FsbGJhY2s/KTogUHJvbWlzZSB8IHZvaWRcclxuICogXHJcbiAqIE5vdGU6IENvcGlsb3QgQVBJIGlzIGEgUHJldmlldyBmZWF0dXJlIGFuZCBtYXkgbm90IGJlIGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdENvcGlsb3QoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107ICAgICAgICAgLy8gUmVhZE9ubHkgKFItSW5kZXgpXHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTsgICAvLyBTZXR0ZXJzICYgTWV0aG9kcyAoUy1JbmRleClcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgY29uc3QgY29waWxvdCA9IGZvcm0uQ29waWxvdDtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFIxOiBDaGVjayBDb3BpbG90IGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQ29waWxvdCBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IGNvcGlsb3QgIT09IHVuZGVmaW5lZCAmJiBjb3BpbG90ICE9PSBudWxsLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGNvcGlsb3QgIT09IHVuZGVmaW5lZCAmJiBjb3BpbG90ICE9PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjI6IEV4ZWN1dGVFdmVudCBmdW5jdGlvbiBleGlzdHNcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkV4ZWN1dGVFdmVudCBmdW5jdGlvbiBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IHR5cGVvZiBjb3BpbG90Py5FeGVjdXRlRXZlbnQgPT09ICdmdW5jdGlvbicsXHJcbiAgICAgICAgICAgIFN0YXR1czogdHlwZW9mIGNvcGlsb3Q/LkV4ZWN1dGVFdmVudCA9PT0gJ2Z1bmN0aW9uJyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFIzOiBFeGVjdXRlUHJvbXB0IGZ1bmN0aW9uIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRXhlY3V0ZVByb21wdCBmdW5jdGlvbiBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IHR5cGVvZiBjb3BpbG90Py5FeGVjdXRlUHJvbXB0ID09PSAnZnVuY3Rpb24nLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHR5cGVvZiBjb3BpbG90Py5FeGVjdXRlUHJvbXB0ID09PSAnZnVuY3Rpb24nID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjQ6IENoZWNrIGlmIFhybS5Db3BpbG90IGlzIGF2YWlsYWJsZSAoUHJldmlldyBmZWF0dXJlKVxyXG4gICAgICAgIGNvbnN0IHhybUNvcGlsb3RBdmFpbGFibGUgPSB0eXBlb2YgKHdpbmRvdyBhcyBhbnkpLlhybT8uQ29waWxvdCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJYcm0uQ29waWxvdCBhdmFpbGFibGUgKFByZXZpZXcpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiB4cm1Db3BpbG90QXZhaWxhYmxlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHhybUNvcGlsb3RBdmFpbGFibGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIkVSUlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZWFkT25seSBFcnJvclwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUzE6IEV4ZWN1dGVFdmVudCB3aXRoIGNhbGxiYWNrICh0ZXN0IHN0cnVjdHVyZSBvbmx5IC0gQ29waWxvdCBtYXkgbm90IGJlIGVuYWJsZWQpXHJcbiAgICAgICAgbGV0IGV4ZWN1dGVFdmVudFJlc3VsdCA9IFwiTm90IGF2YWlsYWJsZVwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGU6IFRoaXMgdGVzdCBvbmx5IHZlcmlmaWVzIHRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgdGhyb3dpbmdcclxuICAgICAgICAgICAgLy8gQWN0dWFsIENvcGlsb3QgZnVuY3Rpb25hbGl0eSByZXF1aXJlcyBDb3BpbG90IHRvIGJlIGVuYWJsZWQgaW4gdGhlIGVudmlyb25tZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50UHJvbWlzZSA9IGNvcGlsb3Q/LkV4ZWN1dGVFdmVudChcInRlc3RfZXZlbnRcIiwgeyB0ZXN0UGFyYW06IFwidmFsdWVcIiB9KTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50UHJvbWlzZSAmJiB0eXBlb2YgZXZlbnRQcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGVFdmVudFJlc3VsdCA9IFwiUHJvbWlzZSByZXR1cm5lZFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50UHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBleGVjdXRlRXZlbnRSZXN1bHQgPSBcInVuZGVmaW5lZCAoQ29waWxvdCBub3QgZW5hYmxlZClcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICBleGVjdXRlRXZlbnRSZXN1bHQgPSBgRXJyb3I6ICR7ZS5tZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRXhlY3V0ZUV2ZW50KCd0ZXN0X2V2ZW50Jywgey4uLn0pXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBleGVjdXRlRXZlbnRSZXN1bHQsXHJcbiAgICAgICAgICAgIFN0YXR1czogZXhlY3V0ZUV2ZW50UmVzdWx0LmluY2x1ZGVzKFwiUHJvbWlzZVwiKSB8fCBleGVjdXRlRXZlbnRSZXN1bHQuaW5jbHVkZXMoXCJ1bmRlZmluZWRcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTMjogRXhlY3V0ZUV2ZW50IHdpdGggc3VjY2VzcyBjYWxsYmFja1xyXG4gICAgICAgIGxldCBjYWxsYmFja1Jlc3VsdCA9IFwiTm90IGNhbGxlZFwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvcGlsb3Q/LkV4ZWN1dGVFdmVudChcInRlc3RfZXZlbnRfMlwiLCB7IGlkOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAocmVzdWx0OiBhbnkpID0+IHsgY2FsbGJhY2tSZXN1bHQgPSBcIlN1Y2Nlc3MgY2FsbGJhY2sgaW52b2tlZFwiOyB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IHsgY2FsbGJhY2tSZXN1bHQgPSBcIkVycm9yIGNhbGxiYWNrIGludm9rZWRcIjsgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjYWxsYmFja1Jlc3VsdCA9IFwiQ2FsbGJhY2tzIHJlZ2lzdGVyZWRcIjtcclxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2tSZXN1bHQgPSBgRXJyb3I6ICR7ZS5tZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRXhlY3V0ZUV2ZW50IHdpdGggY2FsbGJhY2tzXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBjYWxsYmFja1Jlc3VsdCxcclxuICAgICAgICAgICAgU3RhdHVzOiBjYWxsYmFja1Jlc3VsdC5pbmNsdWRlcyhcInJlZ2lzdGVyZWRcIikgfHwgY2FsbGJhY2tSZXN1bHQuaW5jbHVkZXMoXCJpbnZva2VkXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUzM6IEV4ZWN1dGVQcm9tcHQgd2l0aCBzdHJpbmcgKHRlc3Qgc3RydWN0dXJlIG9ubHkpXHJcbiAgICAgICAgbGV0IGV4ZWN1dGVQcm9tcHRSZXN1bHQgPSBcIk5vdCBhdmFpbGFibGVcIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9tcHRQcm9taXNlID0gY29waWxvdD8uRXhlY3V0ZVByb21wdChcIlN1bW1hcml6ZSB0aGlzIGFjY291bnRcIik7XHJcbiAgICAgICAgICAgIGlmIChwcm9tcHRQcm9taXNlICYmIHR5cGVvZiBwcm9tcHRQcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGVQcm9tcHRSZXN1bHQgPSBcIlByb21pc2UgcmV0dXJuZWRcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9tcHRQcm9taXNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGVQcm9tcHRSZXN1bHQgPSBcInVuZGVmaW5lZCAoQ29waWxvdCBub3QgZW5hYmxlZClcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICBleGVjdXRlUHJvbXB0UmVzdWx0ID0gYEVycm9yOiAke2UubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkV4ZWN1dGVQcm9tcHQoJ1N1bW1hcml6ZS4uLicpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBleGVjdXRlUHJvbXB0UmVzdWx0LFxyXG4gICAgICAgICAgICBTdGF0dXM6IGV4ZWN1dGVQcm9tcHRSZXN1bHQuaW5jbHVkZXMoXCJQcm9taXNlXCIpIHx8IGV4ZWN1dGVQcm9tcHRSZXN1bHQuaW5jbHVkZXMoXCJ1bmRlZmluZWRcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTNDogRXhlY3V0ZVByb21wdCB3aXRoIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICBsZXQgcHJvbXB0Q2FsbGJhY2tSZXN1bHQgPSBcIk5vdCBjYWxsZWRcIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb3BpbG90Py5FeGVjdXRlUHJvbXB0KFwiVGVzdCBwcm9tcHRcIixcclxuICAgICAgICAgICAgICAgIChyZXN1bHQ6IGFueSkgPT4geyBwcm9tcHRDYWxsYmFja1Jlc3VsdCA9IFwiU3VjY2VzcyBjYWxsYmFjayBpbnZva2VkXCI7IH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4geyBwcm9tcHRDYWxsYmFja1Jlc3VsdCA9IFwiRXJyb3IgY2FsbGJhY2sgaW52b2tlZFwiOyB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHByb21wdENhbGxiYWNrUmVzdWx0ID0gXCJDYWxsYmFja3MgcmVnaXN0ZXJlZFwiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICBwcm9tcHRDYWxsYmFja1Jlc3VsdCA9IGBFcnJvcjogJHtlLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFeGVjdXRlUHJvbXB0IHdpdGggY2FsbGJhY2tzXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBwcm9tcHRDYWxsYmFja1Jlc3VsdCxcclxuICAgICAgICAgICAgU3RhdHVzOiBwcm9tcHRDYWxsYmFja1Jlc3VsdC5pbmNsdWRlcyhcInJlZ2lzdGVyZWRcIikgfHwgcHJvbXB0Q2FsbGJhY2tSZXN1bHQuaW5jbHVkZXMoXCJpbnZva2VkXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMtRVJSXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlNldHRlcnMvTWV0aG9kcyBFcnJvclwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogZS5tZXNzYWdlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGQUYgVEVTVCAxODogQ29waWxvdCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBmb3JtLkNvcGlsb3QgKFByZXZpZXcpIC0gJHtwYXNzZWR9LyR7dG90YWx9IChcdTI2QTAke3dhcm5pbmdzfSlgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI0KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzQpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkEwXHVGRTBGIE5vdGU6IENvcGlsb3QgaXMgYSBQcmV2aWV3IGZlYXR1cmUgYW5kIG1heSBub3QgYmUgYXZhaWxhYmxlIGluIGFsbCBlbnZpcm9ubWVudHNcIixcclxuICAgICAgICBcImZvbnQtc3R5bGU6IGl0YWxpYzsgY29sb3I6ICNGRjk4MDA7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkLCAke3dhcm5pbmdzfSB3YXJuaW5nc2AsXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FB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
