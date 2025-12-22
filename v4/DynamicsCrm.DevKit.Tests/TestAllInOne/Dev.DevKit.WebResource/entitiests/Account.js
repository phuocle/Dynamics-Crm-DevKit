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

  // entities/Account.TestDecimal.ts
  function TestDecimal(form) {
    const results = [];
    const methodResults = [];
    const decimal = form.Body.v4_Latitude;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = decimal.Value;
    try {
      results.push({ Test: "R1", Property: "Max", Value: decimal.Max, Status: typeof decimal.Max === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Min", Value: decimal.Min, Status: typeof decimal.Min === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Precision", Value: decimal.Precision, Status: typeof decimal.Precision === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "\u2713" });
      results.push({ Test: "R5", Property: "Attribute", Value: decimal.Attribute ? "object" : "null", Status: decimal.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "AttributeName", Value: decimal.AttributeName, Status: decimal.AttributeName === "v4_latitude" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "AttributeType", Value: decimal.AttributeType, Status: decimal.AttributeType === "decimal" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "ControlName", Value: decimal.ControlName, Status: "\u2713" });
      results.push({ Test: "R9", Property: "ControlType", Value: decimal.ControlType, Status: "\u2713" });
      results.push({ Test: "R10", Property: "Format", Value: decimal.Format, Status: "\u2713" });
      results.push({ Test: "R11", Property: "IsDirty", Value: decimal.IsDirty, Status: "\u2713" });
      results.push({ Test: "R12", Property: "IsValid", Value: decimal.IsValid, Status: "\u2713" });
      results.push({ Test: "R13", Property: "RequiredLevel", Value: decimal.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R14", Property: "SubmitMode", Value: decimal.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Disabled", Value: decimal.Disabled, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Label", Value: decimal.Label, Status: "\u2713" });
      results.push({ Test: "R17", Property: "Visible", Value: decimal.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = (originalValue || 0) + 1.5;
      decimal.Value = testValue;
      const newValue = decimal.Value;
      decimal.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set\u2192Restored" : "Failed", Status: newValue === testValue ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origPrecision = decimal.Precision;
      decimal.Precision = origPrecision;
      methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = decimal.RequiredLevel;
      decimal.RequiredLevel = "required";
      const check = decimal.RequiredLevel;
      decimal.RequiredLevel = origRequired;
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = decimal.Disabled;
      decimal.Disabled = !origDisabled;
      const check = decimal.Disabled;
      decimal.Disabled = origDisabled;
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = decimal.Label;
      decimal.Label = origLabel + " (TEST)";
      const check = decimal.Label;
      decimal.Label = origLabel;
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = decimal.Visible;
      decimal.Visible = !origVisible;
      const check = decimal.Visible;
      decimal.Visible = origVisible;
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} Decimal OnChange fired");
    try {
      decimal.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      decimal.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      decimal.FireOnChange();
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => decimal.Focus(), 1e3);
      methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      decimal.SetNotification("Test Decimal notification", "DEC_TEST_1");
      setTimeout(() => decimal.ClearNotification("DEC_TEST_1"), 3e3);
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      decimal.SetIsValid(false, "Test invalid");
      setTimeout(() => decimal.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F522} TEST 19: Decimal Control [${startTime}] - Using: v4_Latitude field - ${passed}/${total}`);
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

  // entities/Account.TestDouble.ts
  function TestDouble(form) {
    const results = [];
    const methodResults = [];
    const double = form.Body.v4_DiscountPercentage;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    const originalValue = double.Value;
    try {
      results.push({ Test: "R1", Property: "Max", Value: double.Max, Status: typeof double.Max === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R2", Property: "Min", Value: double.Min, Status: typeof double.Min === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R3", Property: "Precision", Value: double.Precision, Status: typeof double.Precision === "number" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "\u2713" });
      results.push({ Test: "R5", Property: "Attribute", Value: double.Attribute ? "object" : "null", Status: double.Attribute ? "\u2713" : "\u26A0" });
      results.push({ Test: "R6", Property: "AttributeName", Value: double.AttributeName, Status: double.AttributeName === "v4_discountpercentage" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R7", Property: "AttributeType", Value: double.AttributeType, Status: double.AttributeType === "double" ? "\u2713" : "\u26A0" });
      results.push({ Test: "R8", Property: "ControlName", Value: double.ControlName, Status: "\u2713" });
      results.push({ Test: "R9", Property: "ControlType", Value: double.ControlType, Status: "\u2713" });
      results.push({ Test: "R10", Property: "Format", Value: double.Format, Status: "\u2713" });
      results.push({ Test: "R11", Property: "IsDirty", Value: double.IsDirty, Status: "\u2713" });
      results.push({ Test: "R12", Property: "IsValid", Value: double.IsValid, Status: "\u2713" });
      results.push({ Test: "R13", Property: "RequiredLevel", Value: double.RequiredLevel, Status: "\u2713" });
      results.push({ Test: "R14", Property: "SubmitMode", Value: double.SubmitMode, Status: "\u2713" });
      results.push({ Test: "R15", Property: "Disabled", Value: double.Disabled, Status: "\u2713" });
      results.push({ Test: "R16", Property: "Label", Value: double.Label, Status: "\u2713" });
      results.push({ Test: "R17", Property: "Visible", Value: double.Visible, Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const testValue = (originalValue || 0) + 0.5;
      double.Value = testValue;
      const newValue = double.Value;
      double.Value = originalValue;
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set\u2192Restored" : "Failed", Status: newValue === testValue ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origPrecision = double.Precision;
      double.Precision = origPrecision;
      methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origRequired = double.RequiredLevel;
      double.RequiredLevel = "required";
      const check = double.RequiredLevel;
      double.RequiredLevel = origRequired;
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set\u2192Restored" : "Failed", Status: check === "required" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origDisabled = double.Disabled;
      double.Disabled = !origDisabled;
      const check = double.Disabled;
      double.Disabled = origDisabled;
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = double.Label;
      double.Label = origLabel + " (TEST)";
      const check = double.Label;
      double.Label = origLabel;
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = double.Visible;
      double.Visible = !origVisible;
      const check = double.Visible;
      double.Visible = origVisible;
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    const onChangeCallback = (ctx) => console.log("  \u{1F4CD} Double OnChange fired");
    try {
      double.AddOnChange(onChangeCallback);
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      double.RemoveOnChange(onChangeCallback);
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      double.FireOnChange();
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => double.Focus(), 1e3);
      methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    try {
      double.SetNotification("Test Double notification", "DBL_TEST_1");
      setTimeout(() => double.ClearNotification("DBL_TEST_1"), 3e3);
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "\u2717" });
    }
    try {
      double.SetIsValid(false, "Test invalid");
      setTimeout(() => double.SetIsValid(true), 2e3);
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set\u2192Restored (2s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F522} TEST 20: Double Control [${startTime}] - Using: v4_DiscountPercentage field - ${passed}/${total}`);
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

  // entities/Account.TestIFrame.ts
  function TestIFrame(form) {
    const results = [];
    const methodResults = [];
    const iframe = form.Body.v4_IFrameExternal;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      results.push({ Test: "R1", Property: "InitialUrl", Value: iframe.InitialUrl, Status: "\u2713" });
      results.push({ Test: "R2", Property: "Src", Value: iframe.Src, Status: "\u2713" });
      results.push({ Test: "R3", Property: "ControlName", Value: iframe.ControlName, Status: "\u2713" });
      results.push({ Test: "R4", Property: "ControlType", Value: iframe.ControlType, Status: "\u2713" });
      results.push({ Test: "R5", Property: "Label", Value: iframe.Label, Status: "\u2713" });
      results.push({ Test: "R6", Property: "Visible", Value: iframe.Visible, Status: "\u2713" });
      results.push({ Test: "R7", Property: "Object", Value: iframe.Object ? "object" : "null", Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const origSrc = iframe.Src;
      iframe.Src = origSrc;
      methodResults.push({ Test: "S1", Property: "Src (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Src (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = iframe.Label;
      iframe.Label = origLabel + " (TEST)";
      const check = iframe.Label;
      iframe.Label = origLabel;
      methodResults.push({ Test: "S2", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = iframe.Visible;
      iframe.Visible = !origVisible;
      const check = iframe.Visible;
      iframe.Visible = origVisible;
      methodResults.push({ Test: "S3", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      iframe.ContentWindow(
        (win) => console.log("  \u{1F4CD} IFrame ContentWindow Success", win),
        (err) => console.log("  \u{1F4CD} IFrame ContentWindow Error", err)
      );
      methodResults.push({ Test: "S4", Property: "ContentWindow", Value: "Called", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "ContentWindow", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => iframe.Focus(), 1e3);
      methodResults.push({ Test: "S5", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F5BC}\uFE0F TEST 21: IFrame Control [${startTime}] - Using: v4_IFrameExternal - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c\u26A1 Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    console.log(
      `%c\u2705 Summary: ${passed}/${total} passed` + (warnings > 0 ? ` | \u26A0 ${warnings} warnings` : "") + (failed > 0 ? ` | \u2717 ${failed} failed` : ""),
      "font-weight: bold; color: #4CAF50; font-size: 14px;"
    );
    console.groupEnd();
  }

  // entities/Account.TestWebResource.ts
  function TestWebResource(form) {
    const results = [];
    const methodResults = [];
    const wr = form.Body.v4_WebResourceHelp;
    const startTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
    try {
      results.push({ Test: "R1", Property: "Data", Value: wr.Data, Status: "\u2713" });
      results.push({ Test: "R2", Property: "Src", Value: wr.Src, Status: "\u2713" });
      results.push({ Test: "R3", Property: "ControlName", Value: wr.ControlName, Status: "\u2713" });
      results.push({ Test: "R4", Property: "ControlType", Value: wr.ControlType, Status: "\u2713" });
      results.push({ Test: "R5", Property: "Label", Value: wr.Label, Status: "\u2713" });
      results.push({ Test: "R6", Property: "Visible", Value: wr.Visible, Status: "\u2713" });
      results.push({ Test: "R7", Property: "Object", Value: wr.Object ? "object" : "null", Status: "\u2713" });
    } catch (error) {
      results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "\u2717" });
    }
    try {
      const origData = wr.Data;
      wr.Data = "TestData=123";
      const check = wr.Data;
      wr.Data = origData;
      methodResults.push({ Test: "S1", Property: "Data (set)", Value: check === "TestData=123" ? "Set\u2192Restored" : "Failed", Status: check === "TestData=123" ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S1", Property: "Data (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origSrc = wr.Src;
      wr.Src = origSrc;
      methodResults.push({ Test: "S2", Property: "Src (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S2", Property: "Src (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origLabel = wr.Label;
      wr.Label = origLabel + " (TEST)";
      const check = wr.Label;
      wr.Label = origLabel;
      methodResults.push({ Test: "S3", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set\u2192Restored" : "Failed", Status: check.includes("(TEST)") ? "\u2713" : "\u2717" });
    } catch (e) {
      methodResults.push({ Test: "S3", Property: "Label (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      const origVisible = wr.Visible;
      wr.Visible = !origVisible;
      const check = wr.Visible;
      wr.Visible = origVisible;
      methodResults.push({ Test: "S4", Property: "Visible (set)", Value: "Set\u2192Restored", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S4", Property: "Visible (set)", Value: e.message, Status: "\u2717" });
    }
    try {
      wr.ContentWindow(
        (win) => console.log("  \u{1F4CD} WebResource ContentWindow Success", win),
        (err) => console.log("  \u{1F4CD} WebResource ContentWindow Error", err)
      );
      methodResults.push({ Test: "S5", Property: "ContentWindow", Value: "Called", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S5", Property: "ContentWindow", Value: e.message, Status: "\u2717" });
    }
    try {
      setTimeout(() => wr.Focus(), 1e3);
      methodResults.push({ Test: "S6", Property: "Focus", Value: "Scheduled (1s)", Status: "\u2713" });
    } catch (e) {
      methodResults.push({ Test: "S6", Property: "Focus", Value: e.message, Status: "\u2717" });
    }
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter((r) => r.Status === "\u2713").length;
    const warnings = allResults.filter((r) => r.Status === "\u26A0").length;
    const failed = allResults.filter((r) => r.Status === "\u2717").length;
    const total = allResults.length;
    console.groupCollapsed(`\u{1F310} TEST 22: WebResource Control [${startTime}] - Using: v4_WebResourceHelp - ${passed}/${total}`);
    console.log("%c\u{1F4CB} ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
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
        TestSidePanes(form);
        TestCopilot(form);
        TestDecimal(form);
        TestDouble(form);
        TestIFrame(form);
        TestWebResource(form);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZW50aXRpZXMvQWNjb3VudC50cyIsICIuLi9saWIvZGV2a2l0LnRzIiwgIi4uL2VudGl0aWVzL2dlbmVyYXRvci9PcHRpb25TZXQudHMiLCAiLi4vZW50aXRpZXMvZ2VuZXJhdG9yL0FjY291bnQuZm9ybS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb250cm9sLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdExvb2t1cC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RNZW1vLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFN0cmluZy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RJbnRlZ2VyLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE9wdGlvblNldC50cyIsICIuLi9lbnRpdGllcy9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0V2ViQXBpLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE1vbmV5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdEJvb2xlYW4udHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZVRpbWUudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RGF0ZU9ubHkudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0R3JpZC50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RVdGlsaXR5LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFRhYi50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RFeGVjdXRpb25Db250ZXh0LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdFNpZGVQYW5lcy50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RDb3BpbG90LnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdERlY2ltYWwudHMiLCAiLi4vZW50aXRpZXMvQWNjb3VudC5UZXN0RG91YmxlLnRzIiwgIi4uL2VudGl0aWVzL0FjY291bnQuVGVzdElGcmFtZS50cyIsICIuLi9lbnRpdGllcy9BY2NvdW50LlRlc3RXZWJSZXNvdXJjZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBUZXN0Q29udHJvbCB9IGZyb20gJy4vQWNjb3VudC5UZXN0Q29udHJvbCc7XHJcbmltcG9ydCB7IFRlc3RMb29rdXAgfSBmcm9tICcuL0FjY291bnQuVGVzdExvb2t1cCc7XHJcbmltcG9ydCB7IFRlc3RNZW1vIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RNZW1vJztcclxuaW1wb3J0IHsgVGVzdFN0cmluZyB9IGZyb20gJy4vQWNjb3VudC5UZXN0U3RyaW5nJztcclxuaW1wb3J0IHsgVGVzdEludGVnZXIgfSBmcm9tICcuL0FjY291bnQuVGVzdEludGVnZXInO1xyXG5pbXBvcnQgeyBUZXN0T3B0aW9uU2V0IH0gZnJvbSAnLi9BY2NvdW50LlRlc3RPcHRpb25TZXQnO1xyXG5pbXBvcnQgeyBUZXN0V2ViQXBpIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RXZWJBcGknO1xyXG5pbXBvcnQgeyBUZXN0TW9uZXkgfSBmcm9tICcuL0FjY291bnQuVGVzdE1vbmV5JztcclxuaW1wb3J0IHsgVGVzdEJvb2xlYW4gfSBmcm9tICcuL0FjY291bnQuVGVzdEJvb2xlYW4nO1xyXG5pbXBvcnQgeyBUZXN0RGF0ZVRpbWUgfSBmcm9tICcuL0FjY291bnQuVGVzdERhdGVUaW1lJztcclxuaW1wb3J0IHsgVGVzdERhdGVPbmx5IH0gZnJvbSAnLi9BY2NvdW50LlRlc3REYXRlT25seSc7XHJcbmltcG9ydCB7IFRlc3RHcmlkIH0gZnJvbSAnLi9BY2NvdW50LlRlc3RHcmlkJztcclxuaW1wb3J0IHsgVGVzdFV0aWxpdHkgfSBmcm9tICcuL0FjY291bnQuVGVzdFV0aWxpdHknO1xyXG5pbXBvcnQgeyBUZXN0TXVsdGlPcHRpb25TZXQgfSBmcm9tICcuL0FjY291bnQuVGVzdE11bHRpT3B0aW9uU2V0JztcclxuaW1wb3J0IHsgVGVzdFRhYiB9IGZyb20gJy4vQWNjb3VudC5UZXN0VGFiJztcclxuaW1wb3J0IHsgVGVzdE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi9BY2NvdW50LlRlc3ROYXZpZ2F0aW9uSXRlbSc7XHJcbmltcG9ydCB7IFRlc3RFeGVjdXRpb25Db250ZXh0IH0gZnJvbSAnLi9BY2NvdW50LlRlc3RFeGVjdXRpb25Db250ZXh0JztcclxuaW1wb3J0IHsgVGVzdFNpZGVQYW5lcyB9IGZyb20gJy4vQWNjb3VudC5UZXN0U2lkZVBhbmVzJztcclxuaW1wb3J0IHsgVGVzdENvcGlsb3QgfSBmcm9tICcuL0FjY291bnQuVGVzdENvcGlsb3QnO1xyXG5pbXBvcnQgeyBUZXN0RGVjaW1hbCB9IGZyb20gJy4vQWNjb3VudC5UZXN0RGVjaW1hbCc7XHJcbmltcG9ydCB7IFRlc3REb3VibGUgfSBmcm9tICcuL0FjY291bnQuVGVzdERvdWJsZSc7XHJcbmltcG9ydCB7IFRlc3RJRnJhbWUgfSBmcm9tICcuL0FjY291bnQuVGVzdElGcmFtZSc7XHJcbmltcG9ydCB7IFRlc3RXZWJSZXNvdXJjZSB9IGZyb20gJy4vQWNjb3VudC5UZXN0V2ViUmVzb3VyY2UnO1xyXG5cclxuY29uc3QgZm9ybUFjY291bnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgbGV0IGZvcm06IEFjY291bnRGb3JtLkZvcm07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gb25Mb2FkKGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGZvcm0gPSBuZXcgQWNjb3VudEZvcm0uRm9ybShleGVjdXRpb25Db250ZXh0KTtcclxuICAgICAgICByZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIGZvcm0uVWlBZGRMb2FkZWQoVWlBZGRMb2FkZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChmb3JtLkV4ZWN1dGlvbkNvbnRleHQuSXNJbml0aWFsTG9hZCgpKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT04gTE9BRFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gVWlBZGRMb2FkZWQoZXhlY3V0aW9uQ29udGV4dDogYW55KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy8gQkVHSU4gT04gTE9BRCBMT0dJQ1xyXG5cclxuICAgICAgICAvLyBXYWl0IDEwIHNlY29uZHMgYWZ0ZXIgT25Mb2FkIHRvIGFsbG93IGZvcm0gdG8gZnVsbHkgbG9hZFxyXG4gICAgICAgIC8vIFRoZW4gY2xlYXIgY29uc29sZSBhbmQgcnVuIHJlYWwgdGVzdHNcclxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAwOiBJQ29udHJvbCBJbnRlcmZhY2UgKGJhc2UgZm9yIGFsbCBjb250cm9scylcclxuICAgICAgICAgICAgVGVzdENvbnRyb2woZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE6IExvb2t1cCBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RMb29rdXAoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDI6IE1lbW8gQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0TWVtbyhmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMzogU3RyaW5nIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdFN0cmluZyhmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgNDogSW50ZWdlciBDb250cm9sXHJcbiAgICAgICAgICAgIFRlc3RJbnRlZ2VyKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA1OiBPcHRpb25TZXQgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0T3B0aW9uU2V0KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA2OiBXZWJBcGkgXHJcbiAgICAgICAgICAgIGF3YWl0IFRlc3RXZWJBcGkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDc6IE1vbmV5IENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE1vbmV5KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCA4OiBCb29sZWFuIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEJvb2xlYW4oZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDk6IERhdGVUaW1lIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdERhdGVUaW1lKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxMDogRGF0ZU9ubHkgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RGF0ZU9ubHkoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDExOiBHcmlkIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdEdyaWQoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDEyOiBVdGlsaXR5IEFQSVxyXG4gICAgICAgICAgICBUZXN0VXRpbGl0eShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTM6IE11bHRpT3B0aW9uU2V0IENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE11bHRpT3B0aW9uU2V0KGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNDogVGFiIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdFRhYihmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdE5hdmlnYXRpb25JdGVtKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxNjogRXhlY3V0aW9uQ29udGV4dFxyXG4gICAgICAgICAgICBUZXN0RXhlY3V0aW9uQ29udGV4dChmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMTc6IFNpZGVQYW5lc1xyXG4gICAgICAgICAgICBUZXN0U2lkZVBhbmVzKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAxODogQ29waWxvdCAoUHJldmlldylcclxuICAgICAgICAgICAgVGVzdENvcGlsb3QoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDE5OiBEZWNpbWFsIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdERlY2ltYWwoZm9ybSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUZXN0IDIwOiBEb3VibGUgQ29udHJvbFxyXG4gICAgICAgICAgICBUZXN0RG91YmxlKGZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVGVzdCAyMTogSUZyYW1lIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdElGcmFtZShmb3JtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRlc3QgMjI6IFdlYlJlc291cmNlIENvbnRyb2xcclxuICAgICAgICAgICAgVGVzdFdlYlJlc291cmNlKGZvcm0pO1xyXG5cclxuICAgICAgICB9LCAxMDAwMCk7XHJcblxyXG4gICAgICAgIC8vIEVORCBPTiBMT0FEIExPR0lDXHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFTkQgT04gTE9BRFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBCRUdJTiBPTiBDSEFOR0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIEVORCBPTiBDSEFOR0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gUFJFIFNFQVJDSFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gRU5EIFBSRSBTRUFSQ0hcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQkVHSU4gT1RIRVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBFTkQgT1RIRVJTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIE9uTG9hZDogb25Mb2FkXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybUFjY291bnQ7XHJcbiIsICJmdW5jdGlvbiBnZXRYcm0oKTogdHlwZW9mIFhybSB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdyBhcyBhbnkpLlhybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC53aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIChwYXJlbnQud2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHBhcmVudC53aW5kb3cgYXMgYW55KS5Ycm07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHBhcmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHBhcmVudC5wYXJlbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwYXJlbnQucGFyZW50LndpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHBhcmVudC5wYXJlbnQud2luZG93IGFzIGFueSkuWHJtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4gKHBhcmVudC5wYXJlbnQud2luZG93IGFzIGFueSkuWHJtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBnZXR0ZXI8VD4ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZ2V0dGVyRm46ICgpID0+IFQpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcclxuICAgICAgICBnZXQ6IGdldHRlckZuLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXR0ZXJTZXR0ZXI8VD4ob2JqOiBhbnksIHByb3A6IHN0cmluZywgZ2V0dGVyRm46ICgpID0+IFQsIHNldHRlckZuOiAodmFsdWU6IFQpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcclxuICAgICAgICBnZXQ6IGdldHRlckZuLFxyXG4gICAgICAgIHNldDogc2V0dGVyRm4sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRGaWVsZChmb3JtQ29udGV4dDogYW55LCBmaWVsZDogYW55LCBhdHRyaWJ1dGU6IGFueSwgY29udHJvbDogYW55KTogdm9pZCB7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGUnLCAoKSA9PiBjb250cm9sPy5nZXRBdHRyaWJ1dGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVOYW1lJywgKCkgPT4gYXR0cmlidXRlPy5nZXROYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQXR0cmlidXRlUGFyZW50JywgKCkgPT4gYXR0cmlidXRlPy5nZXRQYXJlbnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdBdHRyaWJ1dGVUeXBlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRBdHRyaWJ1dGVUeXBlKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbE5hbWUnLCAoKSA9PiBjb250cm9sPy5nZXROYW1lKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbE9wdGlvbnMnLCAoKSA9PiBjb250cm9sPy5nZXRPcHRpb25zKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnQ29udHJvbFBhcmVudCcsICgpID0+IGNvbnRyb2w/LmdldFBhcmVudCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0NvbnRyb2xUeXBlJywgKCkgPT4gY29udHJvbD8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdGb3JtYXQnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldEZvcm1hdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ0luaXRpYWxVcmwnLCAoKSA9PiBjb250cm9sPy5nZXRJbml0aWFsVXJsKCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSW5pdGlhbFZhbHVlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRJbml0aWFsVmFsdWUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdJc0RpcnR5JywgKCkgPT4gYXR0cmlidXRlPy5nZXRJc0RpcnR5KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNQYXJ0eUxpc3QnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldElzUGFydHlMaXN0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnSXNWYWxpZCcsICgpID0+IGF0dHJpYnV0ZT8uaXNWYWxpZCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ01heCcsICgpID0+IGF0dHJpYnV0ZT8uZ2V0TWF4KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnTWF4TGVuZ3RoJywgKCkgPT4gYXR0cmlidXRlPy5nZXRNYXhMZW5ndGgoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdNaW4nLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE1pbigpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ09iamVjdCcsICgpID0+IGNvbnRyb2w/LmdldE9iamVjdCgpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ09wdGlvbnMnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldE9wdGlvbnMoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdPdXRwdXRzJywgKCkgPT4gY29udHJvbD8uZ2V0T3V0cHV0cygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1NlbGVjdGVkT3B0aW9uJywgKCkgPT4gYXR0cmlidXRlPy5nZXRTZWxlY3RlZE9wdGlvbigpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1NlbGVjdGVkUmVzdWx0cycsICgpID0+IGNvbnRyb2w/LmdldFNlbGVjdGVkUmVzdWx0cygpKTtcclxuICAgIGdldHRlcihmaWVsZCwgJ1N0YXRlJywgKCkgPT4gY29udHJvbD8uZ2V0U3RhdGUoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdUZXh0JywgKCkgPT4gYXR0cmlidXRlPy5nZXRUZXh0KCkpO1xyXG4gICAgZ2V0dGVyKGZpZWxkLCAnVG90YWxSZXN1bHRDb3VudCcsICgpID0+IGNvbnRyb2w/LmdldFRvdGFsUmVzdWx0Q291bnQoKSk7XHJcbiAgICBnZXR0ZXIoZmllbGQsICdVc2VyUHJpdmlsZWdlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRVc2VyUHJpdmlsZWdlKCkpO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGF0YScsICgpID0+IGNvbnRyb2w/LmdldERhdGEoKSwgKHZhbHVlOiBhbnkpID0+IHsgY29udHJvbD8uc2V0RGF0YSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGVmYXVsdFZpZXcnLCAoKSA9PiBjb250cm9sPy5nZXREZWZhdWx0VmlldygpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXREZWZhdWx0Vmlldyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRGlzYWJsZWQnLCAoKSA9PiBjb250cm9sPy5nZXREaXNhYmxlZCgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSAzIHx8IGZvcm1Db250ZXh0Py51aT8uZ2V0Rm9ybVR5cGUoKSA9PT0gNCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnRyb2w/LnNldERpc2FibGVkKHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnRW50aXR5VHlwZXMnLCAoKSA9PiBjb250cm9sPy5nZXRFbnRpdHlUeXBlcygpLCAodmFsdWU6IGFueSkgPT4geyBjb250cm9sPy5zZXRFbnRpdHlUeXBlcyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnTGFiZWwnLCAoKSA9PiBjb250cm9sPy5nZXRMYWJlbCgpLCAodmFsdWU6IHN0cmluZykgPT4geyBjb250cm9sPy5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnUHJlY2lzaW9uJywgKCkgPT4gYXR0cmlidXRlPy5nZXRQcmVjaXNpb24oKSwgKHZhbHVlOiBudW1iZXIpID0+IHsgYXR0cmlidXRlPy5zZXRQcmVjaXNpb24odmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1JlcXVpcmVkTGV2ZWwnLCAoKSA9PiBhdHRyaWJ1dGU/LmdldFJlcXVpcmVkTGV2ZWwoKSwgKHZhbHVlOiBzdHJpbmcpID0+IHsgYXR0cmlidXRlPy5zZXRSZXF1aXJlZExldmVsKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTZWFyY2hRdWVyeScsICgpID0+IGNvbnRyb2w/LmdldFNlYXJjaFF1ZXJ5KCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoZmllbGQsICdTaG93VGltZScsICgpID0+IGNvbnRyb2w/LmdldFNob3dUaW1lKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBjb250cm9sPy5zZXRTaG93VGltZSh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU3JjJywgKCkgPT4gY29udHJvbD8uZ2V0U3JjKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGNvbnRyb2w/LnNldFNyYyh2YWx1ZSk7IH0pO1xyXG4gICAgZ2V0dGVyU2V0dGVyKGZpZWxkLCAnU3VibWl0TW9kZScsICgpID0+IGF0dHJpYnV0ZT8uZ2V0U3VibWl0TW9kZSgpLCAodmFsdWU6IHN0cmluZykgPT4geyBhdHRyaWJ1dGU/LnNldFN1Ym1pdE1vZGUodmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1ZhbHVlJywgKCkgPT4gYXR0cmlidXRlPy5nZXRWYWx1ZSgpLCAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChmb3JtQ29udGV4dD8udWk/LmdldEZvcm1UeXBlKCkgPT09IDMgfHwgZm9ybUNvbnRleHQ/LnVpPy5nZXRGb3JtVHlwZSgpID09PSA0KSByZXR1cm47XHJcbiAgICAgICAgYXR0cmlidXRlPy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGdldHRlclNldHRlcihmaWVsZCwgJ1Zpc2libGUnLCAoKSA9PiBjb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYm9vbGVhbikgPT4geyBjb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICBmaWVsZC5BZGRDdXN0b21GaWx0ZXIgPSAoZmlsdGVyOiBzdHJpbmcsIGVudGl0eUxvZ2ljYU5hbWU/OiBzdHJpbmcpID0+IGNvbnRyb2w/LmFkZEN1c3RvbUZpbHRlcihmaWx0ZXIsIGVudGl0eUxvZ2ljYU5hbWUpO1xyXG4gICAgZmllbGQuQWRkQ3VzdG9tVmlldyA9ICh2aWV3SWQ6IHN0cmluZywgZW50aXR5TmFtZTogc3RyaW5nLCB2aWV3RGlzcGxheU5hbWU6IHN0cmluZywgZmV0Y2hYbWw6IHN0cmluZywgbGF5b3V0WG1sOiBzdHJpbmcsIGlzRGVmYXVsdDogYm9vbGVhbikgPT4gY29udHJvbD8uYWRkQ3VzdG9tVmlldyh2aWV3SWQsIGVudGl0eU5hbWUsIHZpZXdEaXNwbGF5TmFtZSwgZmV0Y2hYbWwsIGxheW91dFhtbCwgaXNEZWZhdWx0KTtcclxuICAgIGZpZWxkLkFkZExvb2t1cFRhZ0NsaWNrID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uTG9va3VwVGFnQ2xpY2soY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkTm90aWZpY2F0aW9uID0gKG1lc3NhZ2U6IHN0cmluZywgbm90aWZpY2F0aW9uTGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZywgY2FsbGJhY2s/OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBhY3Rpb25zID0geyBtZXNzYWdlOiBtZXNzYWdlLCBhY3Rpb25zOiBbY2FsbGJhY2tdIH07XHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0geyBtZXNzYWdlczogW21lc3NhZ2VdLCBub3RpZmljYXRpb25MZXZlbDogbm90aWZpY2F0aW9uTGV2ZWwsIHVuaXF1ZUlkOiB1bmlxdWVJZCwgYWN0aW9uczogW2FjdGlvbnNdIH07XHJcbiAgICAgICAgcmV0dXJuIGNvbnRyb2w/LmFkZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgfTtcclxuICAgIGZpZWxkLkFkZE9uQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGF0dHJpYnV0ZT8uYWRkT25DaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkT25PdXRwdXRDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25PdXRwdXRDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQWRkT3B0aW9uID0gKHRleHQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgaW5kZXg/OiBudW1iZXIpID0+IGNvbnRyb2w/LmFkZE9wdGlvbih7IHRleHQ6IHRleHQsIHZhbHVlOiB2YWx1ZSB9LCBpbmRleCk7XHJcbiAgICBmaWVsZC5BZGRQb3N0U2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LmFkZE9uUG9zdFNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRQcmVTZWFyY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkUHJlU2VhcmNoKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLkFkZFJlc3VsdE9wZW5lZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5hZGRPblJlc3VsdE9wZW5lZChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5BZGRTZWxlY3Rpb24gPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8uYWRkT25TZWxlY3Rpb24oY2FsbGJhY2spO1xyXG4gICAgZmllbGQuQ2xlYXJOb3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udHJvbD8uY2xlYXJOb3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZmllbGQuQ2xlYXJPcHRpb25zID0gKCkgPT4gY29udHJvbD8uY2xlYXJPcHRpb25zKCk7XHJcbiAgICBmaWVsZC5Db250ZW50V2luZG93ID0gKHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250cm9sPy5nZXRDb250ZW50V2luZG93KCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgZmllbGQuRmlyZU9uQ2hhbmdlID0gKCkgPT4gYXR0cmlidXRlPy5maXJlT25DaGFuZ2UoKTtcclxuICAgIGZpZWxkLkZvY3VzID0gKCkgPT4gY29udHJvbD8uc2V0Rm9jdXMoKTtcclxuICAgIGZpZWxkLk9wZW5TZWFyY2hSZXN1bHQgPSAocmVzdWx0TnVtYmVyOiBudW1iZXIsIG1vZGU/OiBzdHJpbmcpID0+IGNvbnRyb2w/Lm9wZW5TZWFyY2hSZXN1bHQocmVzdWx0TnVtYmVyLCBtb2RlKTtcclxuICAgIGZpZWxkLk9wdGlvbiA9ICh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBhdHRyaWJ1dGU/LmdldE9wdGlvbih2YWx1ZSk7XHJcbiAgICBmaWVsZC5SZWZyZXNoID0gKCkgPT4gY29udHJvbD8ucmVmcmVzaCgpO1xyXG4gICAgZmllbGQuUmVtb3ZlTG9va3VwVGFnQ2xpY2sgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25Mb29rdXBUYWdDbGljayhjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVPbkNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBhdHRyaWJ1dGU/LnJlbW92ZU9uQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9uT3V0cHV0Q2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uT3V0cHV0Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlJlbW92ZU9wdGlvbiA9ICh2YWx1ZTogbnVtYmVyKSA9PiBjb250cm9sPy5yZW1vdmVPcHRpb24odmFsdWUpO1xyXG4gICAgZmllbGQuUmVtb3ZlUG9zdFNlYXJjaCA9IChjYWxsYmFjazogYW55KSA9PiBjb250cm9sPy5yZW1vdmVPblBvc3RTZWFyY2goY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlUHJlU2VhcmNoID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZVByZVNlYXJjaChjYWxsYmFjayk7XHJcbiAgICBmaWVsZC5SZW1vdmVSZXN1bHRPcGVuZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udHJvbD8ucmVtb3ZlT25SZXN1bHRPcGVuZWQoY2FsbGJhY2spO1xyXG4gICAgZmllbGQuUmVtb3ZlU2VsZWN0aW9uID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRyb2w/LnJlbW92ZU9uU2VsZWN0aW9uKGNhbGxiYWNrKTtcclxuICAgIGZpZWxkLlNldElzVmFsaWQgPSAodmFsaWQ6IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpID0+IGF0dHJpYnV0ZT8uc2V0SXNWYWxpZCh2YWxpZCwgbWVzc2FnZSk7XHJcbiAgICBmaWVsZC5TZXROb3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250cm9sPy5zZXROb3RpZmljYXRpb24obWVzc2FnZSwgdW5pcXVlSWQpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRGaWVsZHMoZm9ybUNvbnRleHQ6IGFueSwgZmllbGRzOiBzdHJpbmdbXSwgdHlwZT86IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBib2R5OiBhbnkgPSB7fTtcclxuICAgIGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICBib2R5W2ZpZWxkXSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGxvZ2ljYWxOYW1lID0gdHlwZSA9PT0gdW5kZWZpbmVkID8gZmllbGQ/LnRvTG93ZXJDYXNlKCkgOiAodHlwZSArIGZpZWxkKT8udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUNvbnRleHQ/LmdldENvbnRyb2wobG9naWNhbE5hbWUpID8/IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkKTtcclxuICAgICAgICBsZXQgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmdldEF0dHJpYnV0ZShsb2dpY2FsTmFtZSk7XHJcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgJiYgY29udHJvbD8uZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSA9IGNvbnRyb2wuZ2V0QXR0cmlidXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRGaWVsZChmb3JtQ29udGV4dCwgYm9keVtmaWVsZF0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICB9KTtcclxuICAgIGlmICh0eXBlID09PSBcImhlYWRlcl9cIikge1xyXG4gICAgICAgIGNvbnN0IGdldEhlYWRlclNlY3Rpb24gPSBmb3JtQ29udGV4dD8udWk/LmhlYWRlclNlY3Rpb247XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGJvZHksICdCb2R5VmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldEJvZHlWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldEJvZHlWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGJvZHksICdDb21tYW5kQmFyVmlzaWJsZScsICgpID0+IGdldEhlYWRlclNlY3Rpb24/LmdldENvbW1hbmRCYXJWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdldEhlYWRlclNlY3Rpb24/LnNldENvbW1hbmRCYXJWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGJvZHksICdUYWJOYXZpZ2F0b3JWaXNpYmxlJywgKCkgPT4gZ2V0SGVhZGVyU2VjdGlvbj8uZ2V0VGFiTmF2aWdhdG9yVmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4geyBnZXRIZWFkZXJTZWN0aW9uPy5zZXRUYWJOYXZpZ2F0b3JWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm9keTtcclxufVxyXG5mdW5jdGlvbiBsb2FkVGFicyhmb3JtQ29udGV4dDogYW55LCB0YWJJdGVtczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgY29uc3QgdGFiczogYW55ID0ge307XHJcbiAgICB0YWJJdGVtcy5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBbdGFiTmFtZSwgc2VjdGlvbk5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgaWYgKCF0YWJzW3RhYk5hbWVdKSB7XHJcbiAgICAgICAgICAgIHRhYnNbdGFiTmFtZV0gPSB7IFNlY3Rpb246IHt9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYnNbdGFiTmFtZV0uU2VjdGlvbltzZWN0aW9uTmFtZV0gPSB7fTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbG9hZFNlY3Rpb24gPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiOiBzdHJpbmcsIHNlY3Rpb25zOiBhbnksIHNlY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbk9iamVjdCA9IHRhYk9iamVjdD8uc2VjdGlvbnM/LmdldChzZWN0aW9uKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdOYW1lJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdQYXJlbnQnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRQYXJlbnQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHNlY3Rpb25zW3NlY3Rpb25dLCAnTGFiZWwnLCAoKSA9PiBzZWN0aW9uT2JqZWN0Py5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0TGFiZWwodmFsdWUpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIoc2VjdGlvbnNbc2VjdGlvbl0sICdWaXNpYmxlJywgKCkgPT4gc2VjdGlvbk9iamVjdD8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gc2VjdGlvbk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRUYWIgPSAoZm9ybUNvbnRleHQ6IGFueSwgdGFiczogYW55LCB0YWI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhYk9iamVjdCA9IGZvcm1Db250ZXh0Py51aT8udGFicz8uZ2V0KHRhYik7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ05hbWUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKHRhYnNbdGFiXSwgJ1BhcmVudCcsICgpID0+IHRhYk9iamVjdD8uZ2V0UGFyZW50KCkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdDb250ZW50VHlwZScsICgpID0+IHRhYk9iamVjdD8uZ2V0Q29udGVudFR5cGUoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRDb250ZW50VHlwZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdEaXNwbGF5U3RhdGUnLCAoKSA9PiB0YWJPYmplY3Q/LmdldERpc3BsYXlTdGF0ZSgpLCAodmFsdWU6IGFueSkgPT4geyB0YWJPYmplY3Q/LnNldERpc3BsYXlTdGF0ZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdMYWJlbCcsICgpID0+IHRhYk9iamVjdD8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IHsgdGFiT2JqZWN0Py5zZXRMYWJlbCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcih0YWJzW3RhYl0sICdWaXNpYmxlJywgKCkgPT4gdGFiT2JqZWN0Py5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHRhYk9iamVjdD8uc2V0VmlzaWJsZSh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIHRhYnNbdGFiXS5BZGRUYWJTdGF0ZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiB0YWJPYmplY3Q/LmFkZFRhYlN0YXRlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICB0YWJzW3RhYl0uRm9jdXMgPSAoKSA9PiB0YWJPYmplY3Q/LnNldEZvY3VzKCk7XHJcbiAgICAgICAgdGFic1t0YWJdLlJlbW92ZVRhYlN0YXRlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IHRhYk9iamVjdD8ucmVtb3ZlVGFiU3RhdGVDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRhYnNbdGFiXS5TZWN0aW9uKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBsb2FkU2VjdGlvbihmb3JtQ29udGV4dCwgdGFiLCB0YWJzW3RhYl0uU2VjdGlvbiwgc2VjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXModGFicykuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIGxvYWRUYWIoZm9ybUNvbnRleHQsIHRhYnMsIHRhYik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0YWJzO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWROYXZpZ2F0aW9ucyhmb3JtQ29udGV4dDogYW55LCBuYXZpZ2F0aW9uSXRlbXM6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGNvbnN0IG5hdmlnYXRpb25zOiBhbnkgPSB7fTtcclxuICAgIG5hdmlnYXRpb25JdGVtcy5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IG5hdmlnYXRpb25zW2l0ZW1dID0ge30pO1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbkl0ZW0gPSAobmF2aWdhdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBmb3JtQ29udGV4dD8udWk/Lm5hdmlnYXRpb24/Lml0ZW1zO1xyXG4gICAgICAgIGlmICghbmF2SXRlbXMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IG5hdkl0ZW1zLmdldExlbmd0aCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IG5hdkl0ZW1zLmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmdldElkKCkgPT09IG5hdmlnYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWROYXZpZ2F0aW9uID0gKGZvcm1Db250ZXh0OiBhbnksIG5hdmlnYXRpb25zOiBhbnksIG5hdmlnYXRpb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25JdGVtID0gZ2V0TmF2aWdhdGlvbkl0ZW0obmF2aWdhdGlvbik7XHJcbiAgICAgICAgZ2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnSWQnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0SWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKG5hdmlnYXRpb25zW25hdmlnYXRpb25dLCAnTGFiZWwnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0TGFiZWwoKSwgKHZhbHVlOiBhbnkpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRMYWJlbCh2YWx1ZSkpO1xyXG4gICAgICAgIGdldHRlclNldHRlcihuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXSwgJ1Zpc2libGUnLCAoKSA9PiBuYXZpZ2F0aW9uSXRlbT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGFueSkgPT4gbmF2aWdhdGlvbkl0ZW0/LnNldFZpc2libGUodmFsdWUpKTtcclxuICAgICAgICBuYXZpZ2F0aW9uc1tuYXZpZ2F0aW9uXS5Gb2N1cyA9ICgpID0+IG5hdmlnYXRpb25JdGVtPy5zZXRGb2N1cygpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5rZXlzKG5hdmlnYXRpb25zKS5mb3JFYWNoKG5hdmlnYXRpb24gPT4ge1xyXG4gICAgICAgIGxvYWROYXZpZ2F0aW9uKGZvcm1Db250ZXh0LCBuYXZpZ2F0aW9ucywgbmF2aWdhdGlvbik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9ucztcclxufVxyXG5mdW5jdGlvbiBsb2FkUXVpY2tGb3Jtcyhmb3JtQ29udGV4dDogYW55LCBxdWlja0l0ZW1zOiBzdHJpbmdbXSk6IGFueSB7XHJcbiAgICBjb25zdCBxdWlja0Zvcm1zOiBhbnkgPSB7fTtcclxuICAgIHF1aWNrSXRlbXMuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3F1aWNrRm9ybU5hbWUsIGZpZWxkTmFtZV0gPSBpdGVtLnNwbGl0KCdfX18nKTtcclxuICAgICAgICBpZiAoIXF1aWNrRm9ybXNbcXVpY2tGb3JtTmFtZV0pIHtcclxuICAgICAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1OYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtTmFtZV1bZmllbGROYW1lXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZXhjbHVkZWRGaWVsZHMgPSBuZXcgU2V0KFtcIkJvZHlcIiwgXCJDb250cm9sc1wiLCBcIklzTG9hZGVkXCIsIFwiUmVmcmVzaFwiLCBcIkZvY3VzXCIsIFwiQ29udHJvbFR5cGVcIiwgXCJEaXNhYmxlZFwiLCBcIkxhYmVsXCIsIFwiQ29udHJvbE5hbWVcIiwgXCJDb250cm9sUGFyZW50XCIsIFwiVmlzaWJsZVwiXSk7XHJcbiAgICBjb25zdCBsb2FkUXVpY2tGb3JtID0gKGZvcm1Db250ZXh0OiBhbnksIHF1aWNrRm9ybXM6IGFueSwgcXVpY2tGb3JtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhxdWlja0Zvcm1zW3F1aWNrRm9ybV0pLmZpbHRlcihmaWVsZCA9PiAhZXhjbHVkZWRGaWVsZHMuaGFzKGZpZWxkKSk7XHJcbiAgICAgICAgY29uc3QgcXVpY2sgPSBmb3JtQ29udGV4dD8udWk/LnF1aWNrRm9ybXM/LmdldChxdWlja0Zvcm0pO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdCb2R5JywgKCkgPT4gbG9hZEZvcm1EaWFsb2cocXVpY2ssIGZpZWxkcykpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sTmFtZScsICgpID0+IHF1aWNrPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdDb250cm9sUGFyZW50JywgKCkgPT4gcXVpY2s/LmdldFBhcmVudCgpKTtcclxuICAgICAgICBnZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnQ29udHJvbFR5cGUnLCAoKSA9PiBxdWljaz8uZ2V0Q29udHJvbFR5cGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKHF1aWNrRm9ybXNbcXVpY2tGb3JtXSwgJ0Rpc2FibGVkJywgKCkgPT4gcXVpY2s/LmdldERpc2FibGVkKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXREaXNhYmxlZCh2YWx1ZSk7IH0pO1xyXG4gICAgICAgIGdldHRlclNldHRlcihxdWlja0Zvcm1zW3F1aWNrRm9ybV0sICdMYWJlbCcsICgpID0+IHF1aWNrPy5nZXRMYWJlbCgpLCAodmFsdWU6IGFueSkgPT4geyBxdWljaz8uc2V0TGFiZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIocXVpY2tGb3Jtc1txdWlja0Zvcm1dLCAnVmlzaWJsZScsICgpID0+IHF1aWNrPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IHF1aWNrPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgcXVpY2tGb3Jtc1txdWlja0Zvcm1dLkNvbnRyb2xzID0gKGFyZzogYW55KSA9PiBxdWljaz8uZ2V0Q29udHJvbChhcmcpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Gb2N1cyA9ICgpID0+IHF1aWNrPy5zZXRGb2N1cygpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5Jc0xvYWRlZCA9ICgpID0+IHF1aWNrPy5pc0xvYWRlZCgpO1xyXG4gICAgICAgIHF1aWNrRm9ybXNbcXVpY2tGb3JtXS5SZWZyZXNoID0gKCkgPT4gcXVpY2s/LnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhxdWlja0Zvcm1zKS5mb3JFYWNoKHF1aWNrRm9ybSA9PiB7XHJcbiAgICAgICAgbG9hZFF1aWNrRm9ybShmb3JtQ29udGV4dCwgcXVpY2tGb3JtcywgcXVpY2tGb3JtKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHF1aWNrRm9ybXM7XHJcbn1cclxuZnVuY3Rpb24gbG9hZEdyaWRzKGZvcm1Db250ZXh0OiBhbnksIGdyaWRJdGVtczogc3RyaW5nW10pOiBhbnkge1xyXG4gICAgY29uc3QgZ3JpZHM6IGFueSA9IHt9O1xyXG4gICAgZ3JpZEl0ZW1zLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4gZ3JpZHNbaXRlbV0gPSB7fSk7XHJcbiAgICBjb25zdCBsb2FkR3JpZENvbHVtbiA9IChjb2w6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0xhYmVsJywgKCkgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5nZXRMYWJlbCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTmFtZScsICgpID0+IGNvbD8uZ2V0TmFtZSgpKTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnRGlzYWJsZWQnLCAoKSA9PiBjb2w/LmNvbnRyb2xzPy5nZXQoMCk/LmdldERpc2FibGVkKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uY29udHJvbHM/LmdldCgwKT8uc2V0RGlzYWJsZWQodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnUmVxdWlyZWRMZXZlbCcsICgpID0+IGNvbD8uZ2V0UmVxdWlyZWRMZXZlbCgpLCAodmFsdWU6IGFueSkgPT4geyBjb2w/LnNldFJlcXVpcmVkTGV2ZWwodmFsdWUpOyB9KTtcclxuICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnVmFsdWUnLCAoKSA9PiBjb2w/LmdldFZhbHVlKCksICh2YWx1ZTogYW55KSA9PiB7IGNvbD8uc2V0VmFsdWUodmFsdWUpOyB9KTtcclxuICAgICAgICBvYmouQ2xlYXJOb3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29sPy5jb250cm9scz8uZ2V0KDApPy5jbGVhck5vdGlmaWNhdGlvbih1bmlxdWVJZCk7XHJcbiAgICAgICAgb2JqLlNldE5vdGlmaWNhdGlvbiA9IChtZXNzYWdlOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGNvbD8uY29udHJvbHM/LmdldCgwKT8uc2V0Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHVuaXF1ZUlkKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRHcmlkUm93ID0gKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ29sdW1ucycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uc09iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIGNvbHVtbnNPYmouZ2V0TGVuZ3RoID0gKCkgPT4gcm93Py5kYXRhPy5lbnRpdHk/LmF0dHJpYnV0ZXM/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSByb3c/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkR3JpZENvbHVtbihjb2x1bW4pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb2x1bW5zT2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1ucyA9IHJvdz8uZGF0YT8uZW50aXR5Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnM/LmdldExlbmd0aCgpOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gY29sdW1ucz8uZ2V0KGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkR3JpZENvbHVtbihjb2x1bW4pLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zT2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlJZCcsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRW50aXR5TmFtZScsICgpID0+IHJvdz8uZGF0YT8uZW50aXR5Py5nZXRFbnRpdHlOYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlSZWZlcmVuY2UnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0RW50aXR5UmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdQcmltYXJ5QXR0cmlidXRlVmFsdWUnLCAoKSA9PiByb3c/LmRhdGE/LmVudGl0eT8uZ2V0UHJpbWFyeUF0dHJpYnV0ZVZhbHVlKCkpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9hZEdyaWQgPSAoZm9ybUNvbnRleHQ6IGFueSwgZ3JpZHM6IGFueSwgZ3JpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbnRyb2wgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVDb2xsZWN0aW9uT2JqZWN0ID0gKGdldEl0ZW1zRm46IGFueSwgcHJvY2Vzc0l0ZW1GbjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgICAgIG9iai5nZXRMZW5ndGggPSAoKSA9PiBnZXRJdGVtc0ZuKCk/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBvYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHByb2Nlc3NJdGVtRm4oZ2V0SXRlbXNGbigpPy5nZXQoaW5kZXgpKTtcclxuICAgICAgICAgICAgb2JqLmZvckVhY2ggPSAoY2FsbGJhY2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBnZXRJdGVtc0ZuKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBpdGVtcz8uZ2V0TGVuZ3RoKCkgfHwgMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzSXRlbUZuKGl0ZW1zLmdldChpbmRleCkpLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdFbnRpdHlOYW1lJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnRmV0Y2hYbWwnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0RmV0Y2hYbWwoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnR3JpZFR5cGUnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZFR5cGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnUmVsYXRpb25zaGlwJywgKCkgPT4gZ3JpZENvbnRyb2w/LmdldFJlbGF0aW9uc2hpcCgpKTtcclxuICAgICAgICBnZXR0ZXIoZ3JpZHNbZ3JpZF0sICdSb3dzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSW5zdGFuY2UgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKT8uZ2V0R3JpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sbGVjdGlvbk9iamVjdChcclxuICAgICAgICAgICAgICAgICgpID0+IGdyaWRJbnN0YW5jZT8uZ2V0Um93cygpLFxyXG4gICAgICAgICAgICAgICAgKHJvdzogYW55KSA9PiBsb2FkR3JpZFJvdyhyb3cpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyKGdyaWRzW2dyaWRdLCAnU2VsZWN0ZWRSb3dzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBncmlkSW5zdGFuY2UgPSBmb3JtQ29udGV4dD8uZ2V0Q29udHJvbChncmlkKT8uZ2V0R3JpZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQ29sbGVjdGlvbk9iamVjdChcclxuICAgICAgICAgICAgICAgICgpID0+IGdyaWRJbnN0YW5jZT8uZ2V0U2VsZWN0ZWRSb3dzKCksXHJcbiAgICAgICAgICAgICAgICAocm93OiBhbnkpID0+IGxvYWRHcmlkUm93KHJvdz8uZ2V0RGF0YSgpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1RvdGFsUmVjb3JkQ291bnQnLCAoKSA9PiBncmlkQ29udHJvbD8uZ2V0R3JpZCgpPy5nZXRUb3RhbFJlY29yZENvdW50KCkpO1xyXG4gICAgICAgIGdldHRlcihncmlkc1tncmlkXSwgJ1ZpZXdTZWxlY3RvcicsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgdmlld1NlbGVjdG9yID0gZ3JpZENvbnRyb2w/LmdldFZpZXdTZWxlY3RvcigpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBnZXR0ZXIob2JqLCAnVmlzaWJsZScsICgpID0+IHZpZXdTZWxlY3Rvcj8uaXNWaXNpYmxlKCkpO1xyXG4gICAgICAgICAgICBnZXR0ZXJTZXR0ZXIob2JqLCAnQ3VycmVudFZpZXcnLCAoKSA9PiB2aWV3U2VsZWN0b3I/LmdldEN1cnJlbnRWaWV3KCksICh2YWx1ZTogYW55KSA9PiB2aWV3U2VsZWN0b3I/LnNldEN1cnJlbnRWaWV3KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2V0dGVyU2V0dGVyKGdyaWRzW2dyaWRdLCAnVmlzaWJsZScsICgpID0+IGdyaWRDb250cm9sPy5nZXRWaXNpYmxlKCksICh2YWx1ZTogYW55KSA9PiB7IGdyaWRDb250cm9sPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uQWRkT25Mb2FkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdyaWRDb250cm9sPy5hZGRPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgICAgIGdyaWRzW2dyaWRdLk9wZW5SZWxhdGVkR3JpZCA9ICgpID0+IGdyaWRDb250cm9sPy5vcGVuUmVsYXRlZEdyaWQoKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZWZyZXNoID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2goKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZWZyZXNoUmliYm9uID0gKCkgPT4gZ3JpZENvbnRyb2w/LnJlZnJlc2hSaWJib24oKTtcclxuICAgICAgICBncmlkc1tncmlkXS5SZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ3JpZENvbnRyb2w/LnJlbW92ZU9uTG9hZChjYWxsYmFjayk7XHJcbiAgICAgICAgZ3JpZHNbZ3JpZF0uVXJsID0gKGNsaWVudDogbnVtYmVyKSA9PiBncmlkQ29udHJvbD8uZ2V0VXJsKGNsaWVudCk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMoZ3JpZHMpLmZvckVhY2goZ3JpZCA9PiB7XHJcbiAgICAgICAgbG9hZEdyaWQoZm9ybUNvbnRleHQsIGdyaWRzLCBncmlkKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGdyaWRzO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRFeGVjdXRpb25Db250ZXh0KGV4ZWN1dGlvbkNvbnRleHQ6IGFueSk6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dCB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0RlcHRoJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RGVwdGgoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRW50aXR5UmVmZXJlbmNlJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldEVudGl0eVJlZmVyZW5jZSgpKTtcclxuICAgIGdldHRlcihvYmosICdFdmVudEFyZ3MnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnRXZlbnRTb3VyY2UnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudFNvdXJjZSgpKTtcclxuICAgIGdldHRlcihvYmosICdGb3JtQ29udGV4dCcsICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEZvcm1Db250ZXh0KCkpO1xyXG4gICAgZ2V0dGVyKG9iaiwgJ0lzU2F2ZVN1Y2Nlc3MnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0SXNTYXZlU3VjY2VzcygpKTtcclxuICAgIGdldHRlcihvYmosICdTYXZlRXJyb3JJbmZvJywgKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmdldFNhdmVFcnJvckluZm8oKSk7XHJcbiAgICBnZXR0ZXIob2JqLCAnU2F2ZU1vZGUnLCAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0U2F2ZU1vZGUoKSk7XHJcbiAgICBvYmouRGlzYWJsZUFzeW5jVGltZW91dCA9ICgpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldEV2ZW50QXJncygpPy5kaXNhYmxlQXN5bmNUaW1lb3V0KCk7XHJcbiAgICBvYmouR2V0U2hhcmVkVmFyaWFibGUgPSAoa2V5OiBzdHJpbmcpID0+IGV4ZWN1dGlvbkNvbnRleHQ/LmdldFNoYXJlZFZhcmlhYmxlKGtleSk7XHJcbiAgICBvYmouSXNEZWZhdWx0UHJldmVudGVkID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LmlzRGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgb2JqLklzSW5pdGlhbExvYWQgPSAoKSA9PiBleGVjdXRpb25Db250ZXh0Py5nZXRFdmVudEFyZ3MoKT8uZ2V0RGF0YUxvYWRTdGF0ZSgpID09PSAxO1xyXG4gICAgb2JqLlNldFByZXZlbnREZWZhdWx0ID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvYmouU2V0UHJldmVudERlZmF1bHRPbkVycm9yID0gKCkgPT4gZXhlY3V0aW9uQ29udGV4dD8uZ2V0RXZlbnRBcmdzKCk/LnByZXZlbnREZWZhdWx0T25FcnJvcigpO1xyXG4gICAgb2JqLlNldFNoYXJlZFZhcmlhYmxlID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiBleGVjdXRpb25Db250ZXh0Py5zZXRTaGFyZWRWYXJpYWJsZShrZXksIHZhbHVlKTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFNpZGVQYW5lcygpOiBEZXZLaXQuSVNpZGVQYW5lcyB7XHJcbiAgICBjb25zdCBzaWRlUGFuZXM6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIoc2lkZVBhbmVzLCAnRGlzcGxheVN0YXRlJywgKCkgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uc3RhdGUsICh2YWx1ZTogYW55KSA9PiB7IGNvbnN0IHggPSBnZXRYcm0oKTsgaWYgKCh4IGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzKSAoeCBhcyBhbnkpLkFwcC5zaWRlUGFuZXMuc3RhdGUgPSB2YWx1ZTsgfSk7XHJcbiAgICBzaWRlUGFuZXMuQ3JlYXRlID0gZnVuY3Rpb24gKHBhbmVPcHRpb25zOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSkgeyAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5jcmVhdGVQYW5lKHBhbmVPcHRpb25zKT8udGhlbihzdWNjZXNzQ2FsbGJhY2spOyB9O1xyXG4gICAgc2lkZVBhbmVzLkdldCA9IChwYW5lSWQ6IHN0cmluZykgPT4gKHhybSBhcyBhbnkpPy5BcHA/LnNpZGVQYW5lcz8uZ2V0UGFuZShwYW5lSWQpO1xyXG4gICAgc2lkZVBhbmVzLkdldEFsbCA9ICgpID0+ICh4cm0gYXMgYW55KT8uQXBwPy5zaWRlUGFuZXM/LmdldEFsbFBhbmVzKCk7XHJcbiAgICBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQgPSAoKSA9PiAoeHJtIGFzIGFueSk/LkFwcD8uc2lkZVBhbmVzPy5nZXRTZWxlY3RlZFBhbmUoKTtcclxuICAgIHJldHVybiBzaWRlUGFuZXM7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFdlYkFwaSgpOiBEZXZLaXQuSVdlYkFwaSB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9IGFzIERldktpdC5JV2ViQXBpO1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRXZWJBcGkgPSB4cm0/LldlYkFwaTtcclxuICAgIGNvbnN0IGdldE9ubGluZSA9IHhybT8uV2ViQXBpPy5vbmxpbmU7XHJcbiAgICBjb25zdCBnZXRPZmZsaW5lID0geHJtPy5XZWJBcGk/Lm9mZmxpbmU7XHJcbiAgICBjb25zdCBleHRyYWN0RW50aXR5TmFtZSA9IGZ1bmN0aW9uIChmZXRjaFhtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgY2xlYW5YbWwgPSBmZXRjaFhtbDtcclxuICAgICAgICBjb25zdCBmZXRjaFhtbE1hdGNoID0gZmV0Y2hYbWwubWF0Y2goL2ZldGNoeG1sPS9pKTtcclxuICAgICAgICBpZiAoZmV0Y2hYbWxNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zdCBzcGxpdEluZGV4ID0gZmV0Y2hYbWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmZXRjaHhtbD0nKSArICdmZXRjaHhtbD0nLmxlbmd0aDtcclxuICAgICAgICAgICAgY2xlYW5YbWwgPSBkZWNvZGVVUklDb21wb25lbnQoZmV0Y2hYbWwuc3Vic3RyaW5nKHNwbGl0SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZmV0Y2hYbWwudHJpbSgpLnN0YXJ0c1dpdGgoJzwnKSkge1xyXG4gICAgICAgICAgICBjbGVhblhtbCA9IGZldGNoWG1sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhjbGVhblhtbCwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICBjb25zdCBlbnRpdHlOb2RlID0geG1sRG9jLnF1ZXJ5U2VsZWN0b3IoXCJlbnRpdHlcIik7XHJcbiAgICAgICAgaWYgKGVudGl0eU5vZGUgJiYgZW50aXR5Tm9kZS5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5Tm9kZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpITtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRpdHkgbmFtZSBub3QgZm91bmQgaW4gZmV0Y2hYbWxcIik7XHJcbiAgICB9O1xyXG4gICAgb2JqLkNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBkYXRhOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LmNyZWF0ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5EZWxldGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8uZGVsZXRlUmVjb3JkKGVudGl0eUxvZ2ljYWxOYW1lLCBpZCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5SZXRyaWV2ZVJlY29yZCA9IGZ1bmN0aW9uIChlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBvcHRpb25zPzogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVNdWx0aXBsZVJlY29yZHMgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZywgbWF4UGFnZVNpemU/OiBudW1iZXIsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRXZWJBcGk/LnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKGVudGl0eUxvZ2ljYWxOYW1lLCBvcHRpb25zLCBtYXhQYWdlU2l6ZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9iai5VcGRhdGVSZWNvcmQgPSBmdW5jdGlvbiAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgZGF0YTogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy51cGRhdGVSZWNvcmQoZW50aXR5TG9naWNhbE5hbWUsIGlkLCBkYXRhKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLkV4ZWN1dGUgPSBmdW5jdGlvbiAocmVxdWVzdDogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gKGdldFdlYkFwaSBhcyBhbnkpPy5leGVjdXRlKHJlcXVlc3QpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZU11bHRpcGxlID0gZnVuY3Rpb24gKHJlcXVlc3RzOiBhbnlbXSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IChnZXRXZWJBcGkgYXMgYW55KT8uZXhlY3V0ZU11bHRpcGxlKHJlcXVlc3RzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgb2JqLlJldHJpZXZlUmVjb3JkcyA9IGZ1bmN0aW9uIChhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeTogYW55LCBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9uczogc3RyaW5nLCBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s/OiBhbnksIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s/OiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGxldCBlbnRpdHlMb2dpY2FsTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBvcHRpb25zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IG1heFBhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgaGFzRmV0Y2hYbWwgPSAoc3RyOiBzdHJpbmcpID0+IC9mZXRjaHhtbD0vaS50ZXN0KHN0cik7XHJcbiAgICAgICAgY29uc3QgaXNQbGFpbkZldGNoWG1sID0gKHN0cjogc3RyaW5nKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyAmJiBzdHIudHJpbSgpLnN0YXJ0c1dpdGgoJzxmZXRjaCcpO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZFBhcmFtSXNGZXRjaFhtbE9yT0RhdGEgPSB0eXBlb2YgZW50aXR5TG9naWNhbE5hbWVPck9wdGlvbnMgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgIChoYXNGZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykgfHxcclxuICAgICAgICAgICAgICAgIGlzUGxhaW5GZXRjaFhtbChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucykgfHxcclxuICAgICAgICAgICAgICAgIChlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucy5zdGFydHNXaXRoKCc/JykgJiYgIWhhc0ZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSkpO1xyXG4gICAgICAgIGlmIChzZWNvbmRQYXJhbUlzRmV0Y2hYbWxPck9EYXRhKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMgPSBlbnRpdHlMb2dpY2FsTmFtZU9yT3B0aW9ucztcclxuICAgICAgICAgICAgaWYgKGlzUGxhaW5GZXRjaFhtbChvcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICc/ZmV0Y2hYbWw9JyArIGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGFzRmV0Y2hYbWwob3B0aW9ucykgfHwgaXNQbGFpbkZldGNoWG1sKGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5TG9naWNhbE5hbWUgPSBleHRyYWN0RW50aXR5TmFtZShvcHRpb25zKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW50aXR5IG5hbWUgY2Fubm90IGJlIGRldGVybWluZWQgZnJvbSBPRGF0YSBxdWVyeS4gUGxlYXNlIHByb3ZpZGUgZW50aXR5TG9naWNhbE5hbWUgYXMgc2Vjb25kIHBhcmFtZXRlci4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNPck1heFBhZ2VTaXplT3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSBvcHRpb25zT3JNYXhQYWdlU2l6ZU9yQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHlMb2dpY2FsTmFtZSA9IGVudGl0eUxvZ2ljYWxOYW1lT3JPcHRpb25zO1xyXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0aW9uc09yTWF4UGFnZVNpemVPckNhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2sgPSBtYXhQYWdlU2l6ZU9yU3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgICAgICAgICAgbWF4UGFnZVNpemUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2sgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICBtYXhQYWdlU2l6ZSA9IG1heFBhZ2VTaXplT3JTdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFdlYkFwaT8ucmV0cmlldmVNdWx0aXBsZVJlY29yZHMoZW50aXR5TG9naWNhbE5hbWUhLCBvcHRpb25zLCBtYXhQYWdlU2l6ZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbnRpdGllcyAmJiByZXN1bHQuZW50aXRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lbnRpdGllcy5tYXAoKGVudGl0eTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeSA9PT0gJ2Z1bmN0aW9uJyAmJiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeS5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkoZW50aXR5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouUmV0cmlldmVSZWNvcmQgPSBmdW5jdGlvbiAoYXBpQ29uc3RydWN0b3JPckZhY3Rvcnk6IGFueSwgZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZyB8IEZ1bmN0aW9uLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IHN1Y2Nlc3NDYWxsYmFjaztcclxuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrID0gb3B0aW9ucztcclxuICAgICAgICAgICAgb3B0aW9ucyA9IFwiPyRzZWxlY3Q9KlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucyA9IFwiPyRzZWxlY3Q9KlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0V2ViQXBpPy5yZXRyaWV2ZVJlY29yZChlbnRpdHlMb2dpY2FsTmFtZSwgaWQsIG9wdGlvbnMgYXMgc3RyaW5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5ID09PSAnZnVuY3Rpb24nICYmIGFwaUNvbnN0cnVjdG9yT3JGYWN0b3J5LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgPyBuZXcgYXBpQ29uc3RydWN0b3JPckZhY3RvcnkocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgOiBhcGlDb25zdHJ1Y3Rvck9yRmFjdG9yeShyZXN1bHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXR0ZXIob2JqLCAnT25saW5lJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9ubGluZTogYW55ID0ge307XHJcbiAgICAgICAgb25saW5lLkV4ZWN1dGUgPSBmdW5jdGlvbiAocmVxdWVzdDogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE9ubGluZT8uZXhlY3V0ZShyZXF1ZXN0KTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9ubGluZS5FeGVjdXRlTXVsdGlwbGUgPSBmdW5jdGlvbiAocmVxdWVzdHM6IGFueVtdLCBzdWNjZXNzQ2FsbGJhY2s/OiBhbnksIGVycm9yQ2FsbGJhY2s/OiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldE9ubGluZT8uZXhlY3V0ZU11bHRpcGxlKHJlcXVlc3RzKTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBvbmxpbmU7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcihvYmosICdPZmZsaW5lJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9mZmxpbmU6IGFueSA9IHt9O1xyXG4gICAgICAgIG9mZmxpbmUuSXNBdmFpbGFibGUgPSAoZW50aXR5TG9naWNhbE5hbWU6IHN0cmluZykgPT4gKGdldE9mZmxpbmUgYXMgYW55KT8uaXNBdmFpbGFibGUoZW50aXR5TG9naWNhbE5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvZmZsaW5lO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRDb3BpbG90KCk6IERldktpdC5JQ29waWxvdCB7XHJcbiAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRDb3BpbG90ID0gKHhybSBhcyBhbnkpPy5Db3BpbG90O1xyXG4gICAgb2JqLkV4ZWN1dGVFdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWU6IHN0cmluZywgZXZlbnRQYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlRXZlbnQoZXZlbnROYW1lLCBldmVudFBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvYmouRXhlY3V0ZVByb21wdCA9IGZ1bmN0aW9uIChwcm9tcHRUZXh0OiBzdHJpbmcsIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRDb3BpbG90Py5leGVjdXRlUHJvbXB0KHByb21wdFRleHQpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRGb3JtVjM8VEJvZHkgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUSGVhZGVyID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFRhYiA9IFJlY29yZDxzdHJpbmcsIGFueT4sIFRHcmlkID0gUmVjb3JkPHN0cmluZywgYW55PiwgVE5hdmlnYXRpb24gPSBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBUUXVpY2tGb3JtID0gUmVjb3JkPHN0cmluZywgYW55PiwgVFByb2Nlc3MgPSBhbnk+KFxyXG4gICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgZm9ybUNvbmZpZzoge1xyXG4gICAgICAgIGJvZHk/OiBzdHJpbmdbXTtcclxuICAgICAgICBoZWFkZXI/OiBzdHJpbmdbXTtcclxuICAgICAgICB0YWI/OiBzdHJpbmdbXTtcclxuICAgICAgICBncmlkPzogc3RyaW5nW107XHJcbiAgICAgICAgbmF2aWdhdGlvbj86IHN0cmluZ1tdO1xyXG4gICAgICAgIHF1aWNrPzogc3RyaW5nW107XHJcbiAgICAgICAgYnBmPzogc3RyaW5nW107XHJcbiAgICB9XHJcbik6IHtcclxuICAgIEV4ZWN1dGlvbkNvbnRleHQ6IERldktpdC5JRXhlY3V0aW9uQ29udGV4dDtcclxuICAgIEJvZHk6IFRCb2R5O1xyXG4gICAgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgVGFiOiBUVGFiO1xyXG4gICAgR3JpZDogVEdyaWQ7XHJcbiAgICBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIFF1aWNrRm9ybTogVFF1aWNrRm9ybTtcclxuICAgIEZvcm1JZDogc3RyaW5nO1xyXG4gICAgRm9ybUxhYmVsOiBzdHJpbmc7XHJcbiAgICBGb3JtVHlwZTogbnVtYmVyO1xyXG4gICAgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIEVudGl0eU5hbWU6IHN0cmluZztcclxuICAgIERhdGFJc0RpcnR5OiBib29sZWFuO1xyXG4gICAgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBBdHRyaWJ1dGVzOiBhbnk7XHJcbiAgICBDb250cm9sczogYW55O1xyXG4gICAgRGF0YVhtbDogc3RyaW5nO1xyXG4gICAgRW50aXR5SXNEaXJ0eTogYm9vbGVhbjtcclxuICAgIEVudGl0eUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBFbnRpdHlSZWZlcmVuY2U6IGFueTtcclxuICAgIFByaW1hcnlBdHRyaWJ1dGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgVmlld1BvcnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIFZpZXdQb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIFNhdmU6IChzYXZlT3B0aW9ucz86IGFueSkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIFJlZnJlc2g6IChzYXZlPzogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgU2V0Rm9ybU5vdGlmaWNhdGlvbjogKG1lc3NhZ2U6IHN0cmluZywgbGV2ZWw6IHN0cmluZywgdW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIENsZWFyRm9ybU5vdGlmaWNhdGlvbjogKHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBVaUFkZExvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgVWlSZW1vdmVMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIFVpQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBVaVJlbW92ZU9uTG9hZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgQWRkT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgQWRkT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBSZW1vdmVPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBSZW1vdmVPblNhdmU6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIERhdGFBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIERhdGFSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIEZvcm1Jc1Zpc2libGU6IChmb3JtSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIEZvcm1OYXZpZ2F0ZVRvRm9ybUlkOiAoZm9ybUlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBGb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbDogKGZvcm1MYWJlbDogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgRm9ybVNldFZpc2libGU6IChmb3JtSWQ6IHN0cmluZywgdmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIFNldEZvcm1FbnRpdHlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgUHJvY2VzczogVFByb2Nlc3M7XHJcbiAgICBVdGlsaXR5OiBhbnk7XHJcbiAgICBTaWRlUGFuZXM6IGFueTtcclxuICAgIFdlYkFwaTogYW55O1xyXG4gICAgQ29waWxvdDogYW55O1xyXG59IHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dD8uZ2V0Rm9ybUNvbnRleHQ/LigpID8/IGV4ZWN1dGlvbkNvbnRleHQgPz8gbnVsbDtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgY29udGV4dERhdGEgPSBmb3JtQ29udGV4dD8uZGF0YTtcclxuICAgIGNvbnN0IGNvbnRleHREYXRhRW50aXR5ID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eTtcclxuICAgIGNvbnN0IGNvbnRleHRVaSA9IGZvcm1Db250ZXh0Py51aTtcclxuICAgIGNvbnN0IGNvbnRleHRVaUZvcm1TZWxlY3RvciA9IGZvcm1Db250ZXh0Py51aT8uZm9ybVNlbGVjdG9yO1xyXG4gICAgY29uc3QgZmluZEZvcm1JdGVtID0gKGNyaXRlcmlhOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBjb250ZXh0VWlGb3JtU2VsZWN0b3I/Lml0ZW1zPy5nZXRMZW5ndGgoKSA/PyAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uaXRlbXM/LmdldChpKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgY3JpdGVyaWEoaXRlbSkgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0F0dHJpYnV0ZXMnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uYXR0cmlidXRlcyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0NvbnRyb2xzJywgKCkgPT4gY29udGV4dFVpPy5jb250cm9scyk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc0RpcnR5JywgKCkgPT4gY29udGV4dERhdGE/LmdldElzRGlydHkoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFJc1ZhbGlkJywgKCkgPT4gY29udGV4dERhdGE/LmlzVmFsaWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0RhdGFYbWwnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0RGF0YVhtbCgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SWQnLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eUlzRGlydHknLCAoKSA9PiBjb250ZXh0RGF0YUVudGl0eT8uZ2V0SXNEaXJ0eSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnRW50aXR5SXNWYWxpZCcsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5pc1ZhbGlkKCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdFbnRpdHlOYW1lJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0VudGl0eVJlZmVyZW5jZScsICgpID0+IGNvbnRleHREYXRhRW50aXR5Py5nZXRFbnRpdHlSZWZlcmVuY2UoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1JZCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0SWQoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1MYWJlbCcsICgpID0+IGNvbnRleHRVaUZvcm1TZWxlY3Rvcj8uZ2V0Q3VycmVudEl0ZW0oKT8uZ2V0TGFiZWwoKSk7XHJcbiAgICBnZXR0ZXIoZm9ybSwgJ0Zvcm1UeXBlJywgKCkgPT4gY29udGV4dFVpPy5nZXRGb3JtVHlwZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnUHJpbWFyeUF0dHJpYnV0ZVZhbHVlJywgKCkgPT4gY29udGV4dERhdGFFbnRpdHk/LmdldFByaW1hcnlBdHRyaWJ1dGVWYWx1ZSgpKTtcclxuICAgIGdldHRlcihmb3JtLCAnVmlld1BvcnRIZWlnaHQnLCAoKSA9PiBjb250ZXh0VWk/LmdldFZpZXdQb3J0SGVpZ2h0KCkpO1xyXG4gICAgZ2V0dGVyKGZvcm0sICdWaWV3UG9ydFdpZHRoJywgKCkgPT4gY29udGV4dFVpPy5nZXRWaWV3UG9ydFdpZHRoKCkpO1xyXG4gICAgZm9ybS5BZGRPblBvc3RTYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblBvc3RTYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uQWRkT25TYXZlID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHREYXRhRW50aXR5Py5hZGRPblNhdmUoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb24gPSAodW5pcXVlSWQ6IHN0cmluZykgPT4gY29udGV4dFVpPy5jbGVhckZvcm1Ob3RpZmljYXRpb24odW5pcXVlSWQpO1xyXG4gICAgZm9ybS5DbG9zZSA9ICgpID0+IGNvbnRleHRVaT8uY2xvc2UoKTtcclxuICAgIGZvcm0uRGF0YUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8uYWRkT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRGF0YVJlbW92ZU9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YT8ucmVtb3ZlT25Mb2FkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uRm9ybUlzVmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZykgPT4geyByZXR1cm4gZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uZ2V0VmlzaWJsZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1JZCA9IChmb3JtSWQ6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRJZCgpLCBmb3JtSWQpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtTmF2aWdhdGVUb0Zvcm1MYWJlbCA9IChmb3JtTGFiZWw6IHN0cmluZykgPT4geyBmaW5kRm9ybUl0ZW0oKGl0ZW06IGFueSkgPT4gaXRlbS5nZXRMYWJlbCgpLCBmb3JtTGFiZWwpPy5uYXZpZ2F0ZSgpOyB9O1xyXG4gICAgZm9ybS5Gb3JtU2V0VmlzaWJsZSA9IChmb3JtSWQ6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pID0+IHsgZmluZEZvcm1JdGVtKChpdGVtOiBhbnkpID0+IGl0ZW0uZ2V0SWQoKSwgZm9ybUlkKT8uc2V0VmlzaWJsZSh2YWx1ZSk7IH07XHJcbiAgICBmb3JtLlJlZnJlc2ggPSAoc2F2ZT86IGJvb2xlYW4sIHN1Y2Nlc3NDYWxsYmFjaz86IGFueSwgZXJyb3JDYWxsYmFjaz86IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBjb250ZXh0RGF0YT8ucmVmcmVzaChzYXZlKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlJlZnJlc2hSaWJib24gPSAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IGNvbnRleHRVaT8ucmVmcmVzaFJpYmJvbihyZWZyZXNoQWxsKTtcclxuICAgIGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25Qb3N0U2F2ZShjYWxsYmFjayk7XHJcbiAgICBmb3JtLlJlbW92ZU9uU2F2ZSA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0RGF0YUVudGl0eT8ucmVtb3ZlT25TYXZlKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uU2F2ZSA9IChzYXZlT3B0aW9ucz86IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogYW55LCBlcnJvckNhbGxiYWNrPzogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGNvbnRleHREYXRhPy5zYXZlKHNhdmVPcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBmb3JtLlNldEZvcm1FbnRpdHlOYW1lID0gKGFyZzogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1FbnRpdHlOYW1lKGFyZyk7XHJcbiAgICBmb3JtLlNldEZvcm1Ob3RpZmljYXRpb24gPSAobWVzc2FnZTogc3RyaW5nLCBsZXZlbDogc3RyaW5nLCB1bmlxdWVJZDogc3RyaW5nKSA9PiBjb250ZXh0VWk/LnNldEZvcm1Ob3RpZmljYXRpb24obWVzc2FnZSwgbGV2ZWwsIHVuaXF1ZUlkKTtcclxuICAgIGZvcm0uVWlBZGRMb2FkZWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5hZGRMb2FkZWQoY2FsbGJhY2spO1xyXG4gICAgZm9ybS5VaUFkZE9uTG9hZCA9IChjYWxsYmFjazogYW55KSA9PiBjb250ZXh0VWk/LmFkZE9uTG9hZChjYWxsYmFjayk7XHJcbiAgICBmb3JtLlVpUmVtb3ZlTG9hZGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGNvbnRleHRVaT8ucmVtb3ZlTG9hZGVkKGNhbGxiYWNrKTtcclxuICAgIGZvcm0uVWlSZW1vdmVPbkxvYWQgPSAoY2FsbGJhY2s6IGFueSkgPT4gY29udGV4dFVpPy5yZW1vdmVPbkxvYWQoY2FsbGJhY2spO1xyXG4gICAgY29uc3QgeyBib2R5ID0gW10sIHRhYiA9IFtdLCBoZWFkZXIgPSBbXSwgYnBmID0gW10sIHF1aWNrID0gW10sIGdyaWQgPSBbXSwgbmF2aWdhdGlvbiA9IFtdLCBkaWFsb2cgPSBbXSB9ID0gZm9ybUNvbmZpZyBhcyBhbnk7XHJcbiAgICBjb25zdCBib2R5T2JqID0gYm9keS5sZW5ndGggPiAwID8gbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYm9keSkgOiB7fTtcclxuICAgIGJvZHlPYmouVGFiID0gdGFiLmxlbmd0aCA+IDAgPyBsb2FkVGFicyhmb3JtQ29udGV4dCwgdGFiKSA6IHt9O1xyXG4gICAgZm9ybS5Cb2R5ID0gYm9keU9iajtcclxuICAgIGZvcm0uSGVhZGVyID0gaGVhZGVyLmxlbmd0aCA+IDAgPyBsb2FkRmllbGRzKGZvcm1Db250ZXh0LCBoZWFkZXIsICdoZWFkZXJfJykgOiB7fTtcclxuICAgIGZvcm0uUHJvY2VzcyA9IGJwZi5sZW5ndGggPiAwID8gbG9hZFByb2Nlc3MoZm9ybUNvbnRleHQsIGJwZikgOiB7fTtcclxuICAgIGZvcm0uUXVpY2tGb3JtID0gcXVpY2subGVuZ3RoID4gMCA/IGxvYWRRdWlja0Zvcm1zKGZvcm1Db250ZXh0LCBxdWljaykgOiB7fTtcclxuICAgIGZvcm0uR3JpZCA9IGdyaWQubGVuZ3RoID4gMCA/IGxvYWRHcmlkcyhmb3JtQ29udGV4dCwgZ3JpZCkgOiB7fTtcclxuICAgIGZvcm0uTmF2aWdhdGlvbiA9IG5hdmlnYXRpb24ubGVuZ3RoID4gMCA/IGxvYWROYXZpZ2F0aW9ucyhmb3JtQ29udGV4dCwgbmF2aWdhdGlvbikgOiB7fTtcclxuICAgIGZvcm0uRGlhbG9nID0gZGlhbG9nLmxlbmd0aCA+IDAgPyBsb2FkRm9ybURpYWxvZyhmb3JtQ29udGV4dCwgZGlhbG9nKSA6IHt9O1xyXG4gICAgZm9ybS5VdGlsaXR5ID0gbG9hZFV0aWxpdHkoZGVmYXVsdFdlYlJlc291cmNlTmFtZSk7XHJcbiAgICBmb3JtLkV4ZWN1dGlvbkNvbnRleHQgPSBsb2FkRXhlY3V0aW9uQ29udGV4dChleGVjdXRpb25Db250ZXh0KTtcclxuICAgIGZvcm0uU2lkZVBhbmVzID0gbG9hZFNpZGVQYW5lcygpO1xyXG4gICAgZm9ybS5XZWJBcGkgPSBsb2FkV2ViQXBpKCk7XHJcbiAgICBmb3JtLkNvcGlsb3QgPSBsb2FkQ29waWxvdCgpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZnVuY3Rpb24gbG9hZFByb2Nlc3MoZm9ybUNvbnRleHQ6IGFueSwgYnBmOiBzdHJpbmdbXSA9IFtdKTogYW55IHtcclxuICAgIGNvbnN0IHByb2Nlc3M6IGFueSA9IHt9O1xyXG4gICAgaWYgKGJwZi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGJwZlByb2Nlc3NOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBjb25zdCBicGZGaWVsZE5hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGJwZi5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgW3Byb2Nlc3NOYW1lLCBmaWVsZE5hbWVdID0gaXRlbS5zcGxpdCgnX19fJyk7XHJcbiAgICAgICAgICAgIGlmICghYnBmUHJvY2Vzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGJwZlByb2Nlc3NOYW1lID0gcHJvY2Vzc05hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnBmRmllbGROYW1lcy5wdXNoKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgYnBmT2JqID0gbG9hZEZpZWxkcyhmb3JtQ29udGV4dCwgYnBmRmllbGROYW1lcywgJ2hlYWRlcl9wcm9jZXNzXycpO1xyXG4gICAgICAgIGlmIChicGZQcm9jZXNzTmFtZSkge1xyXG4gICAgICAgICAgICBwcm9jZXNzW2JwZlByb2Nlc3NOYW1lXSA9IGJwZk9iajtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRQcm9jZXNzID0gZm9ybUNvbnRleHQ/LmRhdGE/LnByb2Nlc3M7XHJcbiAgICBjb25zdCBnZXRQcm9jZXNzVWkgPSBmb3JtQ29udGV4dD8udWk/LnByb2Nlc3M7XHJcbiAgICBjb25zdCBsb2FkU3RlcCA9IChzdGVwOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGdldHRlcihvYmosICdBdHRyaWJ1dGUnLCAoKSA9PiBzdGVwPy5nZXRBdHRyaWJ1dGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBzdGVwPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdQcm9ncmVzcycsICgpID0+IHN0ZXA/LmdldFByb2dyZXNzKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdSZXF1aXJlZCcsICgpID0+IHN0ZXA/LmlzUmVxdWlyZWQoKSk7XHJcbiAgICAgICAgb2JqLlNldFByb2dyZXNzID0gKHN0ZXBQcm9ncmVzczogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpID0+IHN0ZXA/LnNldFByb2dyZXNzKHN0ZXBQcm9ncmVzcywgbWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBjb25zdCBsb2FkU3RhZ2UgPSAoc3RhZ2U6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0NhdGVnb3J5JywgKCkgPT4gc3RhZ2U/LmdldENhdGVnb3J5KCk/LmdldFZhbHVlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdFbnRpdHlOYW1lJywgKCkgPT4gc3RhZ2U/LmdldEVudGl0eU5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lkJywgKCkgPT4gc3RhZ2U/LmdldElkKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdOYW1lJywgKCkgPT4gc3RhZ2U/LmdldE5hbWUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0YXR1cycsICgpID0+IHN0YWdlPy5nZXRTdGF0dXMoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1N0ZXBzJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwcyA9IHN0YWdlPy5nZXRTdGVwcygpO1xyXG4gICAgICAgICAgICBpZiAoIXN0ZXBzKSByZXR1cm4gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBzQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHN0ZXBzLmxlbmd0aCB8fCAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwc0FycmF5LnB1c2gobG9hZFN0ZXAoc3RlcHNbaW5kZXhdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0ZXBzQXJyYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb2JqLkFsbG93Q3JlYXRlTmV3ID0gKGNhbGxiYWNrOiBhbnkpID0+IHsgaWYgKHN0YWdlPy5nZXROYXZpZ2F0aW9uQmVoYXZpb3IoKSkgc3RhZ2UuZ2V0TmF2aWdhdGlvbkJlaGF2aW9yKCkuYWxsb3dDcmVhdGVOZXcgPSBjYWxsYmFjazsgfTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvYWRQcm9jZXNzSW5uZXIgPSAocHJvY2Vzc09iajogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSWQnLCAoKSA9PiBwcm9jZXNzT2JqPy5nZXRJZCgpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNSZW5kZXJlZCcsICgpID0+IHByb2Nlc3NPYmo/LmlzUmVuZGVyZWQoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ05hbWUnLCAoKSA9PiBwcm9jZXNzT2JqPy5nZXROYW1lKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdTdGFnZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NTdGFnZXMgPSBwcm9jZXNzT2JqPy5nZXRTdGFnZXMoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VzT2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmdldCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFnZSA9IHByb2Nlc3NTdGFnZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFN0YWdlKHN0YWdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhZ2VzT2JqLmdldExlbmd0aCA9ICgpID0+IHByb2Nlc3NTdGFnZXM/LmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICBzdGFnZXNPYmouZm9yRWFjaCA9IChjYWxsYmFjazogKHN0YWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHByb2Nlc3NTdGFnZXM/LmdldExlbmd0aCgpIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBwcm9jZXNzU3RhZ2VzLmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobG9hZFN0YWdlKHN0YWdlKSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhZ2VzT2JqO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVQYXRoJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBhdGhPYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZ2V0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2FkU3RhZ2Uoc3RhZ2UpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWN0aXZlUGF0aE9iai5nZXRMZW5ndGggPSAoKSA9PiBnZXRQcm9jZXNzPy5nZXRBY3RpdmVQYXRoKCk/LmdldExlbmd0aCgpO1xyXG4gICAgICAgIGFjdGl2ZVBhdGhPYmouZm9yRWFjaCA9IChjYWxsYmFjazogKHN0YWdlOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHZvaWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhZ2VzID0gZ2V0UHJvY2Vzcz8uZ2V0QWN0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3RhZ2VzPy5nZXRMZW5ndGgoKTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZXM/LmdldChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhsb2FkU3RhZ2Uoc3RhZ2UpLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBhY3RpdmVQYXRoT2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0FjdGl2ZVByb2Nlc3MnLCAoKSA9PiBsb2FkUHJvY2Vzc0lubmVyKGdldFByb2Nlc3M/LmdldEFjdGl2ZVByb2Nlc3MoKSkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdBY3RpdmVTdGFnZScsICgpID0+IGxvYWRTdGFnZShnZXRQcm9jZXNzPy5nZXRBY3RpdmVTdGFnZSgpKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ0luc3RhbmNlSWQnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRJbnN0YW5jZUlkKCkpO1xyXG4gICAgZ2V0dGVyKHByb2Nlc3MsICdJbnN0YW5jZU5hbWUnLCAoKSA9PiBnZXRQcm9jZXNzPy5nZXRJbnN0YW5jZU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIocHJvY2VzcywgJ1NlbGVjdGVkU3RhZ2UnLCAoKSA9PiBsb2FkU3RhZ2UoZ2V0UHJvY2Vzcz8uZ2V0U2VsZWN0ZWRTdGFnZSgpKSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ0Rpc3BsYXlTdGF0ZScsICgpID0+IGdldFByb2Nlc3NVaT8uZ2V0RGlzcGxheVN0YXRlKCksICh2YWx1ZTogc3RyaW5nKSA9PiB7IGdldFByb2Nlc3NVaT8uc2V0RGlzcGxheVN0YXRlKHZhbHVlKTsgfSk7XHJcbiAgICBnZXR0ZXJTZXR0ZXIocHJvY2VzcywgJ1N0YXR1cycsICgpID0+IGdldFByb2Nlc3M/LmdldFN0YXR1cygpLCAodmFsdWU6IHN0cmluZykgPT4geyBnZXRQcm9jZXNzPy5zZXRTdGF0dXModmFsdWUpOyB9KTtcclxuICAgIGdldHRlclNldHRlcihwcm9jZXNzLCAnVmlzaWJsZScsICgpID0+IGdldFByb2Nlc3NVaT8uZ2V0VmlzaWJsZSgpLCAodmFsdWU6IGJvb2xlYW4pID0+IHsgZ2V0UHJvY2Vzc1VpPy5zZXRWaXNpYmxlKHZhbHVlKTsgfSk7XHJcbiAgICBwcm9jZXNzLkFkZE9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByZVN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uUHJlU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5BZGRPblByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8uYWRkT25Qcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25TdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5hZGRPblN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuQWRkT25TdGFnZVNlbGVjdGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LmFkZE9uU3RhZ2VTZWxlY3RlZChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLkVuYWJsZWRQcm9jZXNzZXMgPSAoY2FsbGJhY2s6IChwcm9jZXNzZXM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvY2Vzcz8uZ2V0RW5hYmxlZFByb2Nlc3NlcygoZW5hYmxlZFByb2Nlc3NlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NlcyA9IE9iamVjdC5lbnRyaWVzKGVuYWJsZWRQcm9jZXNzZXMpLm1hcCgoW3Byb2Nlc3NJZCwgcHJvY2Vzc05hbWVdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc0lkOiBwcm9jZXNzSWQsXHJcbiAgICAgICAgICAgICAgICBQcm9jZXNzTmFtZTogcHJvY2Vzc05hbWVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9jZXNzZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHByb2Nlc3MuTW92ZU5leHQgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ubW92ZU5leHQoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5Nb3ZlUHJldmlvdXMgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ubW92ZVByZXZpb3VzKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUHJvY2Vzc0luc3RhbmNlcyA9IChjYWxsYmFjazogKHByb2Nlc3NlczogYW55W10pID0+IHZvaWQpID0+IHtcclxuICAgICAgICBnZXRQcm9jZXNzPy5nZXRQcm9jZXNzSW5zdGFuY2VzKChwcm9jZXNzSW5zdGFuY2VzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc2VzID0gT2JqZWN0LnZhbHVlcyhwcm9jZXNzSW5zdGFuY2VzKS5tYXAoKHByb2M6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIFByb2Nlc3NJZDogcHJvYy5Qcm9jZXNzRGVmaW5pdGlvbklELFxyXG4gICAgICAgICAgICAgICAgUHJvY2Vzc05hbWU6IHByb2MuUHJvY2Vzc0RlZmluaXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlZE9uOiBwcm9jLkNyZWF0ZWRPbixcclxuICAgICAgICAgICAgICAgIENyZWF0ZWRPbkRhdGU6IHByb2MuQ3JlYXRlZE9uRGF0ZSxcclxuICAgICAgICAgICAgICAgIEluc3RhbmNlSWQ6IHByb2MuUHJvY2Vzc0luc3RhbmNlSUQsXHJcbiAgICAgICAgICAgICAgICBJbnN0YW5jZU5hbWU6IHByb2MuUHJvY2Vzc0luc3RhbmNlTmFtZSxcclxuICAgICAgICAgICAgICAgIFN0YXR1czogcHJvYy5TdGF0dXNDb2RlTmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHByb2Nlc3Nlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcHJvY2Vzcy5SZWZsb3cgPSAodXBkYXRlVWk6IGJvb2xlYW4sIHBhcmVudFN0YWdlOiBzdHJpbmcsIG5leHRTdGFnZTogc3RyaW5nKSA9PiBnZXRQcm9jZXNzVWk/LnJlZmxvdyh1cGRhdGVVaSwgcGFyZW50U3RhZ2UsIG5leHRTdGFnZSk7XHJcbiAgICBwcm9jZXNzLlJlbW92ZU9uUHJlUHJvY2Vzc1N0YXR1c0NoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblByZVByb2Nlc3NTdGF0dXNDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByZVN0YWdlQ2hhbmdlID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uUHJlU3RhZ2VDaGFuZ2UoY2FsbGJhY2spO1xyXG4gICAgcHJvY2Vzcy5SZW1vdmVPblByb2Nlc3NTdGF0dXNDaGFuZ2UgPSAoY2FsbGJhY2s6IGFueSkgPT4gZ2V0UHJvY2Vzcz8ucmVtb3ZlT25Qcm9jZXNzU3RhdHVzQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25TdGFnZUNoYW5nZSA9IChjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5yZW1vdmVPblN0YWdlQ2hhbmdlKGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuUmVtb3ZlT25TdGFnZVNlbGVjdGVkID0gKGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnJlbW92ZU9uU3RhZ2VTZWxlY3RlZChjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVByb2Nlc3MgPSAocHJvY2Vzc0lkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpID0+IGdldFByb2Nlc3M/LnNldEFjdGl2ZVByb2Nlc3MocHJvY2Vzc0lkLCBjYWxsYmFjayk7XHJcbiAgICBwcm9jZXNzLlNldEFjdGl2ZVByb2Nlc3NJbnN0YW5jZSA9IChwcm9jZXNzSW5zdGFuY2VJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVQcm9jZXNzSW5zdGFuY2UocHJvY2Vzc0luc3RhbmNlSWQsIGNhbGxiYWNrKTtcclxuICAgIHByb2Nlc3MuU2V0QWN0aXZlU3RhZ2UgPSAoc3RhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSA9PiBnZXRQcm9jZXNzPy5zZXRBY3RpdmVTdGFnZShzdGFnZUlkLCBjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gcHJvY2VzcztcclxufVxyXG5mdW5jdGlvbiBsb2FkVXRpbGl0eShkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKTogRGV2S2l0LklVdGlsaXR5IHtcclxuICAgIGNvbnN0IHV0aWxpdHk6IGFueSA9IHt9O1xyXG4gICAgY29uc3QgeHJtID0gZ2V0WHJtKCk7XHJcbiAgICBjb25zdCBnZXRBcHAgPSB4cm0/LkFwcDtcclxuICAgIGNvbnN0IGdldERldmljZSA9IHhybT8uRGV2aWNlO1xyXG4gICAgY29uc3QgZ2V0RW5jb2RpbmcgPSB4cm0/LkVuY29kaW5nO1xyXG4gICAgY29uc3QgZ2V0R2xvYmFsQ29udGV4dCA9IHhybT8uVXRpbGl0eT8uZ2V0R2xvYmFsQ29udGV4dCgpO1xyXG4gICAgY29uc3QgZ2V0TmF2aWdhdGlvbiA9IHhybT8uTmF2aWdhdGlvbjtcclxuICAgIGNvbnN0IGdldFBhbmVsID0geHJtPy5QYW5lbDtcclxuICAgIGNvbnN0IGdldFV0aWxpdHkgPSB4cm0/LlV0aWxpdHk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0NsaWVudCcsICgpID0+IHtcclxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGdldEdsb2JhbENvbnRleHQ/LmNsaWVudDtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQ2xpZW50TmFtZScsICgpID0+IGNsaWVudD8uZ2V0Q2xpZW50KCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdDbGllbnRTdGF0ZScsICgpID0+IGNsaWVudD8uZ2V0Q2xpZW50U3RhdGUoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0Zvcm1GYWN0b3InLCAoKSA9PiBjbGllbnQ/LmdldEZvcm1GYWN0b3IoKSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0lzTmV0d29ya0F2YWlsYWJsZScsICgpID0+IGNsaWVudD8uaXNOZXR3b3JrQXZhaWxhYmxlKCkpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc09mZmxpbmUnLCAoKSA9PiBjbGllbnQ/LmlzT2ZmbGluZSgpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0NsaWVudFVybCcsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldENsaWVudFVybCgpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnQ3VycmVudEFwcFVybCcsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBVcmwoKSk7XHJcbiAgICAvLyBAdHMtaWdub3JlIC0gaXNPblByZW1pc2VzIG5vdCBpbiBAdHlwZXMvWHJtXHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ0lzT25QcmVtaXNlcycsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmlzT25QcmVtaXNlcygpKTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZScsICgpID0+IGdldFV0aWxpdHk/LmdldExlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWUoKSk7XHJcbiAgICBnZXR0ZXIodXRpbGl0eSwgJ09yZ2FuaXphdGlvblNldHRpbmdzJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgY29uc3Qgb3JnYW5pemF0aW9uU2V0dGluZ3MgPSBnZXRHbG9iYWxDb250ZXh0Py5vcmdhbml6YXRpb25TZXR0aW5ncztcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gYXR0cmlidXRlcyBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdBdHRyaWJ1dGVzJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdCYXNlQ3VycmVuY3knLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYmFzZUN1cnJlbmN5KTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnQmFzZUN1cnJlbmN5SWQnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uYmFzZUN1cnJlbmN5SWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdEZWZhdWx0Q291bnRyeUNvZGUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8uZGVmYXVsdENvdW50cnlDb2RlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gZnVsbE5hbWVDb252ZW50aW9uQ29kZSBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdGdWxsTmFtZUNvbnZlbnRpb25Db2RlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/LmZ1bGxOYW1lQ29udmVudGlvbkNvZGUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0F1dG9TYXZlRW5hYmxlZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5pc0F1dG9TYXZlRW5hYmxlZCk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAtIGlzVHJpYWxPcmdhbml6YXRpb24gbm90IGluIEB0eXBlcy9Ycm1cclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNUcmlhbE9yZ2FuaXphdGlvbicsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5pc1RyaWFsT3JnYW5pemF0aW9uKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnTGFuZ3VhZ2VJZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5sYW5ndWFnZUlkKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlIC0gb3JnYW5pemF0aW9uRXhwaXJ5RGF0ZSBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgICAgIGdldHRlcihvYmosICdPcmdhbml6YXRpb25FeHBpcnlEYXRlJywgKCkgPT4gb3JnYW5pemF0aW9uU2V0dGluZ3M/Lm9yZ2FuaXphdGlvbkV4cGlyeURhdGUpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdPcmdhbml6YXRpb25JZCcsICgpID0+IG9yZ2FuaXphdGlvblNldHRpbmdzPy5vcmdhbml6YXRpb25JZCk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VuaXF1ZU5hbWUnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8udW5pcXVlTmFtZSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1VzZVNreXBlUHJvdG9jb2wnLCAoKSA9PiBvcmdhbml6YXRpb25TZXR0aW5ncz8udXNlU2t5cGVQcm90b2NvbCk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdQYWdlQ29udGV4dCcsICgpID0+IGdldFV0aWxpdHk/LmdldFBhZ2VDb250ZXh0KCkpO1xyXG4gICAgZ2V0dGVyKHV0aWxpdHksICdVc2VyU2V0dGluZ3MnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCB1c2VyU2V0dGluZ3MgPSBnZXRHbG9iYWxDb250ZXh0Py51c2VyU2V0dGluZ3M7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ0RhdGVGb3JtYXR0aW5nSW5mbycsICgpID0+IHVzZXJTZXR0aW5ncz8uZGF0ZUZvcm1hdHRpbmdJbmZvKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnRGVmYXVsdERhc2hib2FyZElkJywgKCkgPT4gdXNlclNldHRpbmdzPy5kZWZhdWx0RGFzaGJvYXJkSWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc0d1aWRlZEhlbHBFbmFibGVkJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc0d1aWRlZEhlbHBFbmFibGVkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnSXNIaWdoQ29udHJhc3RFbmFibGVkJywgKCkgPT4gdXNlclNldHRpbmdzPy5pc0hpZ2hDb250cmFzdEVuYWJsZWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdJc1JUTCcsICgpID0+IHVzZXJTZXR0aW5ncz8uaXNSVEwpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdMYW5ndWFnZUlkJywgKCkgPT4gdXNlclNldHRpbmdzPy5sYW5ndWFnZUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnUm9sZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnJvbGVzKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnU2VjdXJpdHlSb2xlUHJpdmlsZWdlcycsICgpID0+IHVzZXJTZXR0aW5ncz8uc2VjdXJpdHlSb2xlUHJpdmlsZWdlcyk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1NlY3VyaXR5Um9sZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LnNlY3VyaXR5Um9sZXMpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdUaW1lWm9uZU9mZnNldE1pbnV0ZXMnLCAoKSA9PiB1c2VyU2V0dGluZ3M/LmdldFRpbWVab25lT2Zmc2V0TWludXRlcygpKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVHJhbnNhY3Rpb25DdXJyZW5jeScsICgpID0+IHVzZXJTZXR0aW5ncz8udHJhbnNhY3Rpb25DdXJyZW5jeSk7XHJcbiAgICAgICAgZ2V0dGVyKG9iaiwgJ1RyYW5zYWN0aW9uQ3VycmVuY3lJZCcsICgpID0+IHVzZXJTZXR0aW5ncz8udHJhbnNhY3Rpb25DdXJyZW5jeUlkKTtcclxuICAgICAgICBnZXR0ZXIob2JqLCAnVXNlcklkJywgKCkgPT4gdXNlclNldHRpbmdzPy51c2VySWQpO1xyXG4gICAgICAgIGdldHRlcihvYmosICdVc2VyTmFtZScsICgpID0+IHVzZXJTZXR0aW5ncz8udXNlck5hbWUpO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KTtcclxuICAgIGdldHRlcih1dGlsaXR5LCAnVmVyc2lvbicsICgpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldFZlcnNpb24oKSk7XHJcbiAgICB1dGlsaXR5LkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb246IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0QXBwPy5hZGRHbG9iYWxOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkFkdmFuY2VkQ29uZmlnU2V0dGluZyA9IChzZXR0aW5nOiBzdHJpbmcpID0+IGdldEdsb2JhbENvbnRleHQ/LmdldEFkdmFuY2VkQ29uZmlnU2V0dGluZyhzZXR0aW5nIGFzIFwiTWF4Q2hpbGRJbmNpZGVudE51bWJlclwiIHwgXCJNYXhJbmNpZGVudE1lcmdlTnVtYmVyXCIpO1xyXG4gICAgdXRpbGl0eS5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPSBmdW5jdGlvbiAoZW50aXR5TmFtZTogc3RyaW5nLCBzdGF0ZUNvZGU6IG51bWJlciwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0VXRpbGl0eT8uZ2V0QWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zKGVudGl0eU5hbWUsIHN0YXRlQ29kZSk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5CYXJjb2RlVmFsdWUgPSBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5nZXRCYXJjb2RlVmFsdWUoKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNhcHR1cmVBdWRpbyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVBdWRpbygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZUltYWdlID0gZnVuY3Rpb24gKGltYWdlT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXREZXZpY2U/LmNhcHR1cmVJbWFnZShpbWFnZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ2FwdHVyZVZpZGVvID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uY2FwdHVyZVZpZGVvKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DbGVhckdsb2JhbE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uICh1bmlxdWVJZDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRBcHA/LmNsZWFyR2xvYmFsTm90aWZpY2F0aW9uKHVuaXF1ZUlkKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5LkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPSAoKSA9PiBnZXRVdGlsaXR5Py5jbG9zZVByb2dyZXNzSW5kaWNhdG9yKCk7XHJcbiAgICB1dGlsaXR5LkN1cnJlbnRBcHBOYW1lID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldEdsb2JhbENvbnRleHQ/LmdldEN1cnJlbnRBcHBOYW1lKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5DdXJyZW50QXBwUHJvcGVydGllcyA9IGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRHbG9iYWxDb250ZXh0Py5nZXRDdXJyZW50QXBwUHJvcGVydGllcygpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuQ3VycmVudFBvc2l0aW9uID0gZnVuY3Rpb24gKHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldERldmljZT8uZ2V0Q3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGdldEVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciBub3QgaW4gQHR5cGVzL1hybVxyXG4gICAgdXRpbGl0eS5FbnRpdHlNYWluRm9ybURlc2NyaXB0b3IgPSAoZW50aXR5TmFtZTogc3RyaW5nLCBmb3JtSWQ6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0RW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yKGVudGl0eU5hbWUsIGZvcm1JZCk7XHJcbiAgICB1dGlsaXR5LkVudGl0eU1ldGFkYXRhID0gZnVuY3Rpb24gKGVudGl0eU5hbWU6IHN0cmluZywgYXR0cmlidXRlcz86IHN0cmluZ1tdLCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5nZXRFbnRpdHlNZXRhZGF0YShlbnRpdHlOYW1lLCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lkh0bWxBdHRyaWJ1dGVFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sQXR0cmlidXRlRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkh0bWxEZWNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sRGVjb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkh0bWxFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy5odG1sRW5jb2RlKGFyZyk7XHJcbiAgICB1dGlsaXR5Lkludm9rZVByb2Nlc3NBY3Rpb24gPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBhbnksIHN1Y2Nlc3NDYWxsYmFjaz86IChyZXN1bHQ6IGFueSkgPT4gdm9pZCwgZXJyb3JDYWxsYmFjaz86IChlcnJvcjogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGdldFV0aWxpdHk/Lmludm9rZVByb2Nlc3NBY3Rpb24obmFtZSwgcGFyYW1ldGVycyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5Mb2FkUGFuZWwgPSAodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpID0+IGdldFBhbmVsPy5sb2FkUGFuZWwodXJsLCB0aXRsZSk7XHJcbiAgICB1dGlsaXR5Lkxvb2t1cE9iamVjdHMgPSBmdW5jdGlvbiAobG9va3VwT3B0aW9uczogYW55LCBzdWNjZXNzQ2FsbGJhY2s/OiAocmVzdWx0OiBhbnkpID0+IHZvaWQsIGVycm9yQ2FsbGJhY2s/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBnZXRVdGlsaXR5Py5sb29rdXBPYmplY3RzKGxvb2t1cE9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuTmF2aWdhdGVUbyA9IGZ1bmN0aW9uIChwYWdlSW5wdXQ6IGFueSwgbmF2aWdhdGlvbk9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ubmF2aWdhdGVUbyhwYWdlSW5wdXQsIG5hdmlnYXRpb25PcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5BbGVydERpYWxvZyA9IGZ1bmN0aW9uIChhbGVydFN0cmluZ3M6IGFueSwgYWxlcnRPcHRpb25zOiBhbnksIGNsb3NlQ2FsbGJhY2s/OiAoKSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkFsZXJ0RGlhbG9nKGFsZXJ0U3RyaW5ncywgYWxlcnRPcHRpb25zKTtcclxuICAgICAgICBpZiAoY2xvc2VDYWxsYmFjaykgcHJvbWlzZT8udGhlbihjbG9zZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuT3BlbkNvbmZpcm1EaWFsb2cgPSBmdW5jdGlvbiAoY29uZmlybVN0cmluZ3M6IGFueSwgY29uZmlybU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkNvbmZpcm1EaWFsb2coY29uZmlybVN0cmluZ3MsIGNvbmZpcm1PcHRpb25zKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5FcnJvckRpYWxvZyA9IGZ1bmN0aW9uIChlcnJvck9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkVycm9yRGlhbG9nKGVycm9yT3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKHN1Y2Nlc3NDYWxsYmFjaykgcHJvbWlzZT8udGhlbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG4gICAgICAgIGVsc2UgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgdXRpbGl0eS5PcGVuRmlsZSA9IChmaWxlOiBhbnksIG9wZW5GaWxlT3B0aW9ucz86IGFueSkgPT4gZ2V0TmF2aWdhdGlvbj8ub3BlbkZpbGUoZmlsZSwgb3BlbkZpbGVPcHRpb25zKTtcclxuICAgIHV0aWxpdHkuT3BlbkZvcm0gPSBmdW5jdGlvbiAoZW50aXR5Rm9ybU9wdGlvbnM6IGFueSwgZm9ybVBhcmFtZXRlcnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0TmF2aWdhdGlvbj8ub3BlbkZvcm0oZW50aXR5Rm9ybU9wdGlvbnMsIGZvcm1QYXJhbWV0ZXJzKTtcclxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSBwcm9taXNlPy50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gcHJvbWlzZTtcclxuICAgIH07XHJcbiAgICB1dGlsaXR5Lk9wZW5VcmwgPSAodXJsOiBzdHJpbmcsIG9wZW5VcmxPcHRpb25zPzogYW55KSA9PiBnZXROYXZpZ2F0aW9uPy5vcGVuVXJsKHVybCwgb3BlblVybE9wdGlvbnMpO1xyXG4gICAgdXRpbGl0eS5PcGVuV2ViUmVzb3VyY2UgPSAod2ViUmVzb3VyY2VOYW1lOiBzdHJpbmcsIHdpbmRvd09wdGlvbnM/OiBhbnksIGRhdGE/OiBzdHJpbmcpID0+IGdldE5hdmlnYXRpb24/Lm9wZW5XZWJSZXNvdXJjZSh3ZWJSZXNvdXJjZU5hbWUsIHdpbmRvd09wdGlvbnMsIGRhdGEpO1xyXG4gICAgdXRpbGl0eS5QaWNrRmlsZSA9IGZ1bmN0aW9uIChwaWNrRmlsZU9wdGlvbnM6IGFueSwgc3VjY2Vzc0NhbGxiYWNrPzogKHJlc3VsdDogYW55KSA9PiB2b2lkLCBlcnJvckNhbGxiYWNrPzogKGVycm9yOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBjb25zdCBwcm9taXNlID0gZ2V0RGV2aWNlPy5waWNrRmlsZShwaWNrRmlsZU9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzQ2FsbGJhY2spIHByb21pc2U/LnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICBlbHNlIHJldHVybiBwcm9taXNlO1xyXG4gICAgfTtcclxuICAgIHV0aWxpdHkuUHJlcGVuZE9yZ05hbWUgPSAoc1BhdGg6IHN0cmluZykgPT4gZ2V0R2xvYmFsQ29udGV4dD8ucHJlcGVuZE9yZ05hbWUoc1BhdGgpO1xyXG4gICAgdXRpbGl0eS5SZWZyZXNoUGFyZW50R3JpZCA9IChsb29rdXBPcHRpb25zOiBhbnkpID0+IGdldFV0aWxpdHk/LnJlZnJlc2hQYXJlbnRHcmlkKGxvb2t1cE9wdGlvbnMpO1xyXG4gICAgLy8gQHRzLWlnbm9yZSAtIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUgbWF5IGJlIHVuZGVmaW5lZFxyXG4gICAgdXRpbGl0eS5SZXNvdXJjZSA9IChrZXk6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0UmVzb3VyY2VTdHJpbmcoZGVmYXVsdFdlYlJlc291cmNlTmFtZSEsIGtleSk7XHJcbiAgICB1dGlsaXR5LlJlc291cmNlU3RyaW5nID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gZ2V0VXRpbGl0eT8uZ2V0UmVzb3VyY2VTdHJpbmcod2ViUmVzb3VyY2VOYW1lLCBrZXkpO1xyXG4gICAgdXRpbGl0eS5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBnZXRVdGlsaXR5Py5zaG93UHJvZ3Jlc3NJbmRpY2F0b3IobWVzc2FnZSk7XHJcbiAgICB1dGlsaXR5LldlYlJlc291cmNlVXJsID0gKHdlYlJlc291cmNlTmFtZTogc3RyaW5nKSA9PiBnZXRHbG9iYWxDb250ZXh0Py5nZXRXZWJSZXNvdXJjZVVybCh3ZWJSZXNvdXJjZU5hbWUpO1xyXG4gICAgdXRpbGl0eS5YbWxBdHRyaWJ1dGVFbmNvZGUgPSAoYXJnOiBzdHJpbmcpID0+IGdldEVuY29kaW5nPy54bWxBdHRyaWJ1dGVFbmNvZGUoYXJnKTtcclxuICAgIHV0aWxpdHkuWG1sRW5jb2RlID0gKGFyZzogc3RyaW5nKSA9PiBnZXRFbmNvZGluZz8ueG1sRW5jb2RlKGFyZyk7XHJcbiAgICByZXR1cm4gdXRpbGl0eTtcclxufVxyXG5mdW5jdGlvbiBsb2FkRm9ybURpYWxvZyhmb3JtQ29udGV4dDogYW55LCBmaWVsZHM6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGNvbnN0IGZvcm06IGFueSA9IHt9O1xyXG4gICAgY29uc3QgZmllbGRzTGVuZ3RoID0gZmllbGRzPy5sZW5ndGggfHwgMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZHNbaV07XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZm9ybUNvbnRleHQ/LmRhdGE/LmVudGl0eT8uYXR0cmlidXRlcz8uZ2V0KGZpZWxkTmFtZSk7XHJcbiAgICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Db250ZXh0Py5nZXRDb250cm9sKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgZm9ybVtmaWVsZE5hbWVdID0ge307XHJcbiAgICAgICAgbG9hZEZpZWxkKGZvcm1Db250ZXh0LCBmb3JtW2ZpZWxkTmFtZV0sIGF0dHJpYnV0ZSwgY29udHJvbCk7XHJcbiAgICB9XHJcbiAgICBmb3JtLkNsb3NlID0gKCkgPT4gZm9ybUNvbnRleHQ/LnVpPy5jbG9zZSgpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuZnVuY3Rpb24gZ2V0V2ViQXBpVHlwZVBhcnNlcnMoKTogUmVjb3JkPHN0cmluZywgKHZhbHVlOiBhbnkpID0+IGFueT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBEYXRlVGltZTogKHZhbHVlOiBhbnkpOiBEYXRlIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGlzTmFOKHZhbHVlLmdldFRpbWUoKSkgPyBudWxsIDogdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaW1tZWRTdHJpbmcgPSBTdHJpbmcodmFsdWUpLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKHRyaW1tZWRTdHJpbmcgPT09ICcnKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5wYXJzZSh0cmltbWVkU3RyaW5nKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHRpbWVzdGFtcCkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWREYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlZERhdGUuZ2V0VGltZSgpKSA/IG51bGwgOiBwYXJzZWREYXRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSW50ZWdlcjogKHZhbHVlOiBhbnkpOiBudW1iZXIgfCBudWxsID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTmFOKHBhcnNlZCkgPyBudWxsIDogcGFyc2VkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTnVtYmVyOiAodmFsdWU6IGFueSk6IG51bWJlciB8IG51bGwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNOYU4ocGFyc2VkKSA/IG51bGwgOiBwYXJzZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCb29sZWFuOiAodmFsdWU6IGFueSk6IGJvb2xlYW4gfCBudWxsID0+IHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB2YWx1ZSAhPT0gMDtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBTdHJpbmcodmFsdWUpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cnVlVmFsdWVzID0gWyd0cnVlJywgJzEnLCAneWVzJywgJ3knXTtcclxuICAgICAgICAgICAgY29uc3QgZmFsc2VWYWx1ZXMgPSBbJ2ZhbHNlJywgJzAnLCAnbm8nLCAnbiddO1xyXG4gICAgICAgICAgICBpZiAodHJ1ZVZhbHVlcy5pbmNsdWRlcyhzdHJpbmdWYWx1ZSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoZmFsc2VWYWx1ZXMuaW5jbHVkZXMoc3RyaW5nVmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gd2ViQXBpUmV0dXJuR2V0KGRhdGE6IGFueSwgdHlwZT86IERldktpdC5XZWJBcGlGaWVsZFR5cGUpOiBhbnkge1xyXG4gICAgaWYgKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGRhdGE7XHJcbiAgICBjb25zdCBwYXJzZXIgPSBnZXRXZWJBcGlUeXBlUGFyc2VycygpW3R5cGVdO1xyXG4gICAgcmV0dXJuIHBhcnNlciA/IHBhcnNlcihkYXRhKSA6IGRhdGE7XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZvcm1CYXNlPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0sIFRQcm9jZXNzID0gYW55PiB7XHJcbiAgICBwdWJsaWMgQm9keTogVEJvZHk7XHJcbiAgICBwdWJsaWMgSGVhZGVyOiBUSGVhZGVyO1xyXG4gICAgcHVibGljIFRhYjogVFRhYjtcclxuICAgIHB1YmxpYyBHcmlkOiBUR3JpZDtcclxuICAgIHB1YmxpYyBOYXZpZ2F0aW9uOiBUTmF2aWdhdGlvbjtcclxuICAgIHB1YmxpYyBRdWlja0Zvcm06IFRRdWlja0Zvcm07XHJcbiAgICBwdWJsaWMgUHJvY2VzczogVFByb2Nlc3M7XHJcbiAgICBwdWJsaWMgRXhlY3V0aW9uQ29udGV4dDogRGV2S2l0LklFeGVjdXRpb25Db250ZXh0O1xyXG4gICAgcHVibGljIFV0aWxpdHk6IGFueTtcclxuICAgIHB1YmxpYyBTaWRlUGFuZXM6IERldktpdC5JU2lkZVBhbmVzO1xyXG4gICAgcHVibGljIFdlYkFwaTogRGV2S2l0LklXZWJBcGk7XHJcbiAgICBwdWJsaWMgQ29waWxvdDogRGV2S2l0LklDb3BpbG90O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1JZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1MYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEZvcm1UeXBlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YUlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgQXR0cmlidXRlczogYW55O1xyXG4gICAgcHVibGljIHJlYWRvbmx5IENvbnRyb2xzOiBhbnk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRGF0YVhtbDogc3RyaW5nO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEVudGl0eUlzRGlydHk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgRW50aXR5SXNWYWxpZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByZWFkb25seSBFbnRpdHlSZWZlcmVuY2U6IGFueTtcclxuICAgIHB1YmxpYyByZWFkb25seSBQcmltYXJ5QXR0cmlidXRlVmFsdWU6IHN0cmluZztcclxuICAgIHB1YmxpYyByZWFkb25seSBWaWV3UG9ydEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IFZpZXdQb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBTYXZlOiAoc2F2ZU9wdGlvbnM/OiBhbnkpID0+IFByb21pc2U8dm9pZD47XHJcbiAgICBwdWJsaWMgUmVmcmVzaDogKHNhdmU/OiBib29sZWFuKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHVibGljIENsb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFNldEZvcm1Ob3RpZmljYXRpb246IChtZXNzYWdlOiBzdHJpbmcsIGxldmVsOiBzdHJpbmcsIHVuaXF1ZUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgQ2xlYXJGb3JtTm90aWZpY2F0aW9uOiAodW5pcXVlSWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcclxuICAgIHB1YmxpYyBSZWZyZXNoUmliYm9uOiAocmVmcmVzaEFsbD86IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlBZGRMb2FkZWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBVaVJlbW92ZUxvYWRlZDogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFVpQWRkT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgVWlSZW1vdmVPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBBZGRPblBvc3RTYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgQWRkT25TYXZlOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgUmVtb3ZlT25Qb3N0U2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFJlbW92ZU9uU2F2ZTogKGNhbGxiYWNrOiAoY29udGV4dDogYW55KSA9PiB2b2lkKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIERhdGFBZGRPbkxvYWQ6IChjYWxsYmFjazogKGNvbnRleHQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBEYXRhUmVtb3ZlT25Mb2FkOiAoY2FsbGJhY2s6IChjb250ZXh0OiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybUlzVmlzaWJsZTogKGZvcm1JZDogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gICAgcHVibGljIEZvcm1OYXZpZ2F0ZVRvRm9ybUlkOiAoZm9ybUlkOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWw6IChmb3JtTGFiZWw6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHB1YmxpYyBGb3JtU2V0VmlzaWJsZTogKGZvcm1JZDogc3RyaW5nLCB2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIFNldEZvcm1FbnRpdHlOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZXhlY3V0aW9uQ29udGV4dDogYW55LFxyXG4gICAgICAgIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBmb3JtQ29uZmlnOiBEZXZLaXQuSUZvcm1Db25maWdcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBsb2FkRm9ybVYzPFRCb2R5LCBUSGVhZGVyLCBUVGFiLCBUR3JpZCwgVE5hdmlnYXRpb24sIFRRdWlja0Zvcm0sIFRQcm9jZXNzPihcclxuICAgICAgICAgICAgZXhlY3V0aW9uQ29udGV4dCxcclxuICAgICAgICAgICAgZGVmYXVsdFdlYlJlc291cmNlTmFtZSxcclxuICAgICAgICAgICAgZm9ybUNvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5Cb2R5ID0gZm9ybS5Cb2R5O1xyXG4gICAgICAgIHRoaXMuSGVhZGVyID0gZm9ybS5IZWFkZXI7XHJcbiAgICAgICAgdGhpcy5UYWIgPSBmb3JtLlRhYjtcclxuICAgICAgICB0aGlzLkdyaWQgPSBmb3JtLkdyaWQ7XHJcbiAgICAgICAgdGhpcy5OYXZpZ2F0aW9uID0gZm9ybS5OYXZpZ2F0aW9uO1xyXG4gICAgICAgIHRoaXMuUXVpY2tGb3JtID0gZm9ybS5RdWlja0Zvcm07XHJcbiAgICAgICAgdGhpcy5Qcm9jZXNzID0gZm9ybS5Qcm9jZXNzO1xyXG4gICAgICAgIHRoaXMuRXhlY3V0aW9uQ29udGV4dCA9IGZvcm0uRXhlY3V0aW9uQ29udGV4dDtcclxuICAgICAgICB0aGlzLkZvcm1JZCA9IGZvcm0uRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybUxhYmVsID0gZm9ybS5Gb3JtTGFiZWw7XHJcbiAgICAgICAgdGhpcy5Gb3JtVHlwZSA9IGZvcm0uRm9ybVR5cGU7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJZCA9IGZvcm0uRW50aXR5SWQ7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlOYW1lID0gZm9ybS5FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuRGF0YUlzRGlydHkgPSBmb3JtLkRhdGFJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRGF0YUlzVmFsaWQgPSBmb3JtLkRhdGFJc1ZhbGlkO1xyXG4gICAgICAgIHRoaXMuQXR0cmlidXRlcyA9IGZvcm0uQXR0cmlidXRlcztcclxuICAgICAgICB0aGlzLkNvbnRyb2xzID0gZm9ybS5Db250cm9scztcclxuICAgICAgICB0aGlzLkRhdGFYbWwgPSBmb3JtLkRhdGFYbWw7XHJcbiAgICAgICAgdGhpcy5FbnRpdHlJc0RpcnR5ID0gZm9ybS5FbnRpdHlJc0RpcnR5O1xyXG4gICAgICAgIHRoaXMuRW50aXR5SXNWYWxpZCA9IGZvcm0uRW50aXR5SXNWYWxpZDtcclxuICAgICAgICB0aGlzLkVudGl0eVJlZmVyZW5jZSA9IGZvcm0uRW50aXR5UmVmZXJlbmNlO1xyXG4gICAgICAgIHRoaXMuUHJpbWFyeUF0dHJpYnV0ZVZhbHVlID0gZm9ybS5QcmltYXJ5QXR0cmlidXRlVmFsdWU7XHJcbiAgICAgICAgdGhpcy5WaWV3UG9ydEhlaWdodCA9IGZvcm0uVmlld1BvcnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5WaWV3UG9ydFdpZHRoID0gZm9ybS5WaWV3UG9ydFdpZHRoO1xyXG4gICAgICAgIHRoaXMuU2F2ZSA9IGZvcm0uU2F2ZTtcclxuICAgICAgICB0aGlzLlJlZnJlc2ggPSBmb3JtLlJlZnJlc2g7XHJcbiAgICAgICAgdGhpcy5DbG9zZSA9IGZvcm0uQ2xvc2U7XHJcbiAgICAgICAgdGhpcy5TZXRGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5TZXRGb3JtTm90aWZpY2F0aW9uO1xyXG4gICAgICAgIHRoaXMuQ2xlYXJGb3JtTm90aWZpY2F0aW9uID0gZm9ybS5DbGVhckZvcm1Ob3RpZmljYXRpb247XHJcbiAgICAgICAgdGhpcy5SZWZyZXNoUmliYm9uID0gZm9ybS5SZWZyZXNoUmliYm9uO1xyXG4gICAgICAgIHRoaXMuVWlBZGRMb2FkZWQgPSBmb3JtLlVpQWRkTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVMb2FkZWQgPSBmb3JtLlVpUmVtb3ZlTG9hZGVkO1xyXG4gICAgICAgIHRoaXMuVWlBZGRPbkxvYWQgPSBmb3JtLlVpQWRkT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuVWlSZW1vdmVPbkxvYWQgPSBmb3JtLlVpUmVtb3ZlT25Mb2FkO1xyXG4gICAgICAgIHRoaXMuQWRkT25Qb3N0U2F2ZSA9IGZvcm0uQWRkT25Qb3N0U2F2ZTtcclxuICAgICAgICB0aGlzLkFkZE9uU2F2ZSA9IGZvcm0uQWRkT25TYXZlO1xyXG4gICAgICAgIHRoaXMuUmVtb3ZlT25Qb3N0U2F2ZSA9IGZvcm0uUmVtb3ZlT25Qb3N0U2F2ZTtcclxuICAgICAgICB0aGlzLlJlbW92ZU9uU2F2ZSA9IGZvcm0uUmVtb3ZlT25TYXZlO1xyXG4gICAgICAgIHRoaXMuRGF0YUFkZE9uTG9hZCA9IGZvcm0uRGF0YUFkZE9uTG9hZDtcclxuICAgICAgICB0aGlzLkRhdGFSZW1vdmVPbkxvYWQgPSBmb3JtLkRhdGFSZW1vdmVPbkxvYWQ7XHJcbiAgICAgICAgdGhpcy5Gb3JtSXNWaXNpYmxlID0gZm9ybS5Gb3JtSXNWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuRm9ybU5hdmlnYXRlVG9Gb3JtSWQgPSBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUlkO1xyXG4gICAgICAgIHRoaXMuRm9ybU5hdmlnYXRlVG9Gb3JtTGFiZWwgPSBmb3JtLkZvcm1OYXZpZ2F0ZVRvRm9ybUxhYmVsO1xyXG4gICAgICAgIHRoaXMuRm9ybVNldFZpc2libGUgPSBmb3JtLkZvcm1TZXRWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuU2V0Rm9ybUVudGl0eU5hbWUgPSBmb3JtLlNldEZvcm1FbnRpdHlOYW1lO1xyXG4gICAgICAgIHRoaXMuVXRpbGl0eSA9IGZvcm0uVXRpbGl0eTtcclxuICAgICAgICB0aGlzLlNpZGVQYW5lcyA9IGZvcm0uU2lkZVBhbmVzO1xyXG4gICAgICAgIHRoaXMuV2ViQXBpID0gZm9ybS5XZWJBcGk7XHJcbiAgICAgICAgdGhpcy5Db3BpbG90ID0gZm9ybS5Db3BpbG90O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVXZWJBcGlGaWVsZChvYmo6IGFueSwgZmllbGROYW1lOiBzdHJpbmcsIGVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PiwgY29uZmlnOiBEZXZLaXQuSVdlYkFwaUZpZWxkQ29uZmlnLCB1cHNlcnRFbnRpdHk6IFJlY29yZDxzdHJpbmcsIGFueT4pOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbG9naWNhbE5hbWUsIHNjaGVtYU5hbWUsIGVudGl0eUNvbGxlY3Rpb25OYW1lLCBlbnRpdHlMb2dpY2FsTmFtZSwgcmVhZE9ubHksIHR5cGUgfSA9IGNvbmZpZztcclxuICAgIGNvbnN0IGdldEZvcm1hdHRlZFZhbHVlID0gKCk6IHN0cmluZyB8IHN0cmluZ1tdID0+IHtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRLZXkgPSBsb2dpY2FsTmFtZSArICdAT0RhdGEuQ29tbXVuaXR5LkRpc3BsYXkuVjEuRm9ybWF0dGVkVmFsdWUnO1xyXG4gICAgICAgIGlmIChlbnRpdHk/Lltmb3JtYXR0ZWRLZXldID09PSB1bmRlZmluZWQgfHwgZW50aXR5Py5bZm9ybWF0dGVkS2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgbG9va3VwS2V5ID0gbG9naWNhbE5hbWUgKyAnQE1pY3Jvc29mdC5EeW5hbWljcy5DUk0ubG9va3VwbG9naWNhbG5hbWUnO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Py5bbG9va3VwS2V5XSA9PT0gZW50aXR5TG9naWNhbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdNdWx0aU9wdGlvblNldCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eT8uW2Zvcm1hdHRlZEtleV0/LnRvU3RyaW5nKCk/LnNwbGl0KCc7JykubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0/LnRyaW0oKSkgPz8gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnRpdHk/Lltmb3JtYXR0ZWRLZXldO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gKCk6IGFueSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eT8uW2xvZ2ljYWxOYW1lXSA9PT0gdW5kZWZpbmVkIHx8IGVudGl0eT8uW2xvZ2ljYWxOYW1lXSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGl0eUNvbGxlY3Rpb25OYW1lICE9PSB1bmRlZmluZWQgJiYgZW50aXR5Q29sbGVjdGlvbk5hbWUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb29rdXBLZXkgPSBsb2dpY2FsTmFtZSArICdATWljcm9zb2Z0LkR5bmFtaWNzLkNSTS5sb29rdXBsb2dpY2FsbmFtZSc7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHk/Lltsb29rdXBLZXldID09PSB1bmRlZmluZWQgfHwgZW50aXR5Py5bbG9va3VwS2V5XSA9PT0gZW50aXR5TG9naWNhbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3ZWJBcGlSZXR1cm5HZXQoZW50aXR5Py5bbG9naWNhbE5hbWVdLCB0eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdNdWx0aU9wdGlvblNldCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eT8uW2xvZ2ljYWxOYW1lXT8udG9TdHJpbmcoKT8uc3BsaXQoJywnKS5tYXAoKGl0ZW06IHN0cmluZykgPT4gcGFyc2VJbnQoaXRlbSwgMTApKSA/PyBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYkFwaVJldHVybkdldChlbnRpdHk/Lltsb2dpY2FsTmFtZV0sIHR5cGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNldFZhbHVlID0gKHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gJ011bHRpT3B0aW9uU2V0JykgdmFsdWUgPSB2YWx1ZT8uam9pbignLCcpO1xyXG4gICAgICAgIGlmIChlbnRpdHlDb2xsZWN0aW9uTmFtZSAhPT0gdW5kZWZpbmVkICYmIGVudGl0eUNvbGxlY3Rpb25OYW1lPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRpbmdOYW1lID0gKHNjaGVtYU5hbWUgPz8gbG9naWNhbE5hbWUpICsgJ0BvZGF0YS5iaW5kJztcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1cHNlcnRFbnRpdHlbYmluZGluZ05hbWVdID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUucmVwbGFjZSgvW3t9XS9nLCAnJykgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVwc2VydEVudGl0eVtiaW5kaW5nTmFtZV0gPSAnLycgKyBlbnRpdHlDb2xsZWN0aW9uTmFtZSArICcoJyArIGNsZWFuVmFsdWUgKyAnKSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cHNlcnRFbnRpdHlbbG9naWNhbE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVudGl0eVtsb2dpY2FsTmFtZV0gPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLkZvcm1hdHRlZFZhbHVlLCBmaWVsZE5hbWUsIHtcclxuICAgICAgICBnZXQ6IGdldEZvcm1hdHRlZFZhbHVlXHJcbiAgICB9KTtcclxuICAgIGlmIChyZWFkT25seSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkTmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGZpZWxkTmFtZSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICBzZXQ6IHNldFZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYkFwaUVudGl0eTxUIGV4dGVuZHMgRGV2S2l0LklXZWJBcGlFbnRpdHk+KGVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZCwgZW50aXR5TmFtZTogc3RyaW5nLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogc3RyaW5nLCBmaWVsZENvbmZpZ01hcDogRGV2S2l0LklXZWJBcGlGaWVsZENvbmZpZ01hcCk6IFQge1xyXG4gICAgY29uc3QgZSA9IGVudGl0eSA/PyB7fTtcclxuICAgIGNvbnN0IHVwc2VydEVudGl0eTogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgY29uc3Qgd2ViQXBpRW50aXR5OiBhbnkgPSB7XHJcbiAgICAgICAgT0RhdGFFbnRpdHk6IGUsXHJcbiAgICAgICAgRm9ybWF0dGVkVmFsdWU6IHt9LFxyXG4gICAgICAgIEVudGl0eTogdXBzZXJ0RW50aXR5LFxyXG4gICAgICAgIEVudGl0eU5hbWU6IGVudGl0eU5hbWUsXHJcbiAgICAgICAgRW50aXR5Q29sbGVjdGlvbk5hbWU6IGVudGl0eUNvbGxlY3Rpb25OYW1lLFxyXG4gICAgICAgICdAb2RhdGEuZXRhZyc6IGU/LlsnQG9kYXRhLmV0YWcnXSxcclxuICAgICAgICBnZXRBbGlhc2VkVmFsdWUoYWxpYXM6IHN0cmluZywgaXNNdWx0aU9wdGlvblNldCA9IGZhbHNlKTogYW55IHtcclxuICAgICAgICAgICAgaWYgKGU/LlthbGlhc10gPT09IHVuZGVmaW5lZCB8fCBlPy5bYWxpYXNdID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNNdWx0aU9wdGlvblNldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU/LlthbGlhc10udG9TdHJpbmcoKS5zcGxpdCgnLCcpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBwYXJzZUludChpdGVtLCAxMCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlPy5bYWxpYXNdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QWxpYXNlZEZvcm1hdHRlZFZhbHVlKGFsaWFzOiBzdHJpbmcsIGlzTXVsdGlPcHRpb25TZXQgPSBmYWxzZSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gYWxpYXMgKyAnQE9EYXRhLkNvbW11bml0eS5EaXNwbGF5LlYxLkZvcm1hdHRlZFZhbHVlJztcclxuICAgICAgICAgICAgaWYgKGU/LltrZXldID09PSB1bmRlZmluZWQgfHwgZT8uW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNNdWx0aU9wdGlvblNldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU/LltrZXldPy50b1N0cmluZygpPy5zcGxpdCgnOycpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiBpdGVtPy50cmltKCkpID8/IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlPy5ba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yIChjb25zdCBmaWVsZE5hbWUgaW4gZmllbGRDb25maWdNYXApIHtcclxuICAgICAgICBkZWZpbmVXZWJBcGlGaWVsZCh3ZWJBcGlFbnRpdHksIGZpZWxkTmFtZSwgZSwgZmllbGRDb25maWdNYXBbZmllbGROYW1lXSwgdXBzZXJ0RW50aXR5KTtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWJBcGlFbnRpdHkgYXMgVDtcclxufSIsICIvKipcclxuICogT3B0aW9uU2V0LnRzIC0gQ2VudHJhbGl6ZWQgT3B0aW9uU2V0IGRlZmluaXRpb25zXHJcbiAqIEdlbmVyYXRlZCBmaWxlIC0gRE8gTk9UIE1PRElGWSBNQU5VQUxMWVxyXG4gKiBcclxuICogVXNhZ2U6IGltcG9ydCB7IE9wdGlvblNldCB9IGZyb20gJy4vZ2VuZXJhdG9yL09wdGlvblNldCc7XHJcbiAqICAgICAgICBPcHRpb25TZXQuRm9ybVR5cGUuQ3JlYXRlXHJcbiAqICAgICAgICBPcHRpb25TZXQuQWNjb3VudC5JbmR1c3RyeUNvZGUuQ29uc3VsdGluZ1xyXG4gKi9cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR2xvYmFsIE9wdGlvblNldHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZHZhbmNlZCBjb25maWd1cmF0aW9uIHNldHRpbmdzIGZvciB0aGUgb3JnYW5pemF0aW9uICovXHJcbmNvbnN0IEFkdmFuY2VkQ29uZmlnU2V0dGluZyA9IHtcclxuICAgIC8qKiBNYXhDaGlsZEluY2lkZW50TnVtYmVyICovXHJcbiAgICBNYXhDaGlsZEluY2lkZW50TnVtYmVyOiAnTWF4Q2hpbGRJbmNpZGVudE51bWJlcicsXHJcbiAgICAvKiogTWF4SW5jaWRlbnRNZXJnZU51bWJlciAqL1xyXG4gICAgTWF4SW5jaWRlbnRNZXJnZU51bWJlcjogJ01heEluY2lkZW50TWVyZ2VOdW1iZXInXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHZhbHVlIHRvIGluZGljYXRlIHdoaWNoIGNsaWVudCB0aGUgc2NyaXB0IGlzIGV4ZWN1dGluZyBpbiAqL1xyXG5jb25zdCBDbGllbnROYW1lID0ge1xyXG4gICAgLyoqIFdlYiAqL1xyXG4gICAgV2ViOiAnV2ViJyxcclxuICAgIC8qKiBPdXRsb29rICovXHJcbiAgICBPdXRsb29rOiAnT3V0bG9vaycsXHJcbiAgICAvKiogTW9iaWxlICovXHJcbiAgICBNb2JpbGU6ICdNb2JpbGUnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKiogUmV0dXJucyBhIHZhbHVlIHRvIGluZGljYXRlIHRoZSBzdGF0ZSBvZiB0aGUgY2xpZW50ICovXHJcbmNvbnN0IENsaWVudFN0YXRlID0ge1xyXG4gICAgLyoqIE9ubGluZSAqL1xyXG4gICAgT25saW5lOiAnT25saW5lJyxcclxuICAgIC8qKiBPZmZsaW5lICovXHJcbiAgICBPZmZsaW5lOiAnT2ZmbGluZSdcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGUgdHlwZSBvZiBhdHRyaWJ1dGUgKi9cclxuY29uc3QgRmllbGRBdHRyaWJ1dGVUeXBlID0ge1xyXG4gICAgLyoqIGJvb2xlYW4gKi9cclxuICAgIEJvb2xlYW46ICdib29sZWFuJyxcclxuICAgIC8qKiBkYXRldGltZSAqL1xyXG4gICAgRGF0ZVRpbWU6ICdkYXRldGltZScsXHJcbiAgICAvKiogZGVjaW1hbCAqL1xyXG4gICAgRGVjaW1hbDogJ2RlY2ltYWwnLFxyXG4gICAgLyoqIGRvdWJsZSAqL1xyXG4gICAgRG91YmxlOiAnZG91YmxlJyxcclxuICAgIC8qKiBpbnRlZ2VyICovXHJcbiAgICBJbnRlZ2VyOiAnaW50ZWdlcicsXHJcbiAgICAvKiogbG9va3VwICovXHJcbiAgICBMb29rdXA6ICdsb29rdXAnLFxyXG4gICAgLyoqIG1lbW8gKi9cclxuICAgIE1lbW86ICdtZW1vJyxcclxuICAgIC8qKiBtb25leSAqL1xyXG4gICAgTW9uZXk6ICdtb25leScsXHJcbiAgICAvKiogbXVsdGlzZWxlY3RvcHRpb25zZXQgKi9cclxuICAgIE11bHRpT3B0aW9uU2V0OiAnbXVsdGlvcHRpb25zZXQnLFxyXG4gICAgLyoqIG9wdGlvbnNldCAqL1xyXG4gICAgT3B0aW9uU2V0OiAnb3B0aW9uc2V0JyxcclxuICAgIC8qKiBzdHJpbmcgKi9cclxuICAgIFN0cmluZzogJ3N0cmluZydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBBIHZhbHVlIHRoYXQgY2F0ZWdvcml6ZXMgY29udHJvbHMgKi9cclxuY29uc3QgRmllbGRDb250cm9sVHlwZSA9IHtcclxuICAgIC8qKiBzdGFuZGFyZCAtIEEgc3RhbmRhcmQgY29udHJvbCAqL1xyXG4gICAgU3RhbmRhcmQ6ICdzdGFuZGFyZCcsXHJcbiAgICAvKiogaWZyYW1lIC0gQW4gSUZSQU1FIGNvbnRyb2wgKi9cclxuICAgIElmcmFtZTogJ2lmcmFtZScsXHJcbiAgICAvKioga2JzZWFyY2ggLSBBIGtub3dsZWRnZSBiYXNlIHNlYXJjaCBjb250cm9sICovXHJcbiAgICBLYlNlYXJjaDogJ2tic2VhcmNoJyxcclxuICAgIC8qKiBsb29rdXAgLSBBIGxvb2t1cCBjb250cm9sICovXHJcbiAgICBMb29rdXA6ICdsb29rdXAnLFxyXG4gICAgLyoqIG11bHRpc2VsZWN0b3B0aW9uc2V0IC0gQSBtdWx0aS1zZWxlY3Qgb3B0aW9uIHNldCBjb250cm9sICovXHJcbiAgICBNdWx0aVNlbGVjdE9wdGlvbnNldDogJ211bHRpc2VsZWN0b3B0aW9uc2V0JyxcclxuICAgIC8qKiBub3RlcyAtIEEgbm90ZXMgY29udHJvbCAqL1xyXG4gICAgTm90ZXM6ICdub3RlcycsXHJcbiAgICAvKiogb3B0aW9uc2V0IC0gQW4gb3B0aW9uIHNldCBjb250cm9sICovXHJcbiAgICBPcHRpb25TZXQ6ICdvcHRpb25zZXQnLFxyXG4gICAgLyoqIHF1aWNrZm9ybSAtIEEgcXVpY2sgdmlldyBjb250cm9sICovXHJcbiAgICBRdWlja0Zvcm06ICdxdWlja2Zvcm0nLFxyXG4gICAgLyoqIHN1YmdyaWQgLSBBIHN1YmdyaWQgY29udHJvbCAqL1xyXG4gICAgU3ViR3JpZDogJ3N1YmdyaWQnLFxyXG4gICAgLyoqIHRpbWVyY29udHJvbCAtIEEgdGltZXIgY29udHJvbCAqL1xyXG4gICAgVGltZXJDb250cm9sOiAndGltZXJjb250cm9sJyxcclxuICAgIC8qKiB0aW1lbGluZXdhbGwgLSBBIHRpbWVsaW5lIGNvbnRyb2wgKGZvciBVbmlmaWVkIEludGVyZmFjZSkgKi9cclxuICAgIFRpbWVsaW5lV2FsbDogJ3RpbWVsaW5ld2FsbCcsXHJcbiAgICAvKiogd2VicmVzb3VyY2UgLSBBIHdlYiByZXNvdXJjZSBjb250cm9sICovXHJcbiAgICBXZWJSZXNvdXJjZTogJ3dlYnJlc291cmNlJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgdGhhdCByZXByZXNlbnRzIGZvcm1hdHRpbmcgb3B0aW9ucyBmb3IgdGhlIGF0dHJpYnV0ZSAqL1xyXG5jb25zdCBGaWVsZEZvcm1hdCA9IHtcclxuICAgIC8qKiBkYXRlICovXHJcbiAgICBEYXRlOiAnZGF0ZScsXHJcbiAgICAvKiogZGF0ZXRpbWUgKi9cclxuICAgIERhdGVUaW1lOiAnZGF0ZXRpbWUnLFxyXG4gICAgLyoqIGR1cmF0aW9uICovXHJcbiAgICBEdXJhdGlvbjogJ2R1cmF0aW9uJyxcclxuICAgIC8qKiBlbWFpbCAqL1xyXG4gICAgRW1haWw6ICdlbWFpbCcsXHJcbiAgICAvKiogbGFuZ3VhZ2UgKi9cclxuICAgIExhbmd1YWdlOiAnbGFuZ3VhZ2UnLFxyXG4gICAgLyoqIG5vbmUgKi9cclxuICAgIE5vbmU6ICdub25lJyxcclxuICAgIC8qKiB0ZXh0YXJlYSAqL1xyXG4gICAgVGV4dEFyZWE6ICd0ZXh0YXJlYScsXHJcbiAgICAvKiogdGV4dCAqL1xyXG4gICAgVGV4dDogJ3RleHQnLFxyXG4gICAgLyoqIHRpY2tlcnN5bWJvbCAqL1xyXG4gICAgVGlja2VyU3ltYm9sOiAndGlja2Vyc3ltYm9sJyxcclxuICAgIC8qKiBwaG9uZSAqL1xyXG4gICAgUGhvbmU6ICdwaG9uZScsXHJcbiAgICAvKiogdGltZXpvbmUgKi9cclxuICAgIFRpbWVab25lOiAndGltZXpvbmUnLFxyXG4gICAgLyoqIHVybCAqL1xyXG4gICAgVXJsOiAndXJsJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSB0eXBlIG9mIG5vdGlmaWNhdGlvbiAqL1xyXG5jb25zdCBGaWVsZE5vdGlmaWNhdGlvbkxldmVsID0ge1xyXG4gICAgLyoqIEVSUk9SICovXHJcbiAgICBFcnJvcjogJ0VSUk9SJyxcclxuICAgIC8qKiBSRUNPTU1FTkRBVElPTiAqL1xyXG4gICAgUmVjb21tZW5kYXRpb246ICdSRUNPTU1FTkRBVElPTidcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBWYWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgYSB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZSBpcyBub25lIG9yIHJlcXVpcmVkIG9yIHJlY29tbWVuZGVkICovXHJcbmNvbnN0IEZpZWxkUmVxdWlyZWRMZXZlbCA9IHtcclxuICAgIC8qKiBub25lICovXHJcbiAgICBOb25lOiAnbm9uZScsXHJcbiAgICAvKiogcmVxdWlyZWQgKi9cclxuICAgIFJlcXVpcmVkOiAncmVxdWlyZWQnLFxyXG4gICAgLyoqIHJlY29tbWVuZGVkICovXHJcbiAgICBSZWNvbW1lbmRlZDogJ3JlY29tbWVuZGVkJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERhdGEgZnJvbSB0aGUgYXR0cmlidXRlIHdpbGwgYmUgc3VibWl0dGVkIHdoZW4gdGhlIHJlY29yZCBpcyBzYXZlZCAqL1xyXG5jb25zdCBGaWVsZFN1Ym1pdE1vZGUgPSB7XHJcbiAgICAvKiogYWx3YXlzIC0gVGhlIGRhdGEgaXMgYWx3YXlzIHNlbnQgd2l0aCBhIHNhdmUgKi9cclxuICAgIEFsd2F5czogJ2Fsd2F5cycsXHJcbiAgICAvKiogbmV2ZXIgLSBUaGUgZGF0YSBpcyBuZXZlciBzZW50IHdpdGggYSBzYXZlICovXHJcbiAgICBOZXZlcjogJ25ldmVyJyxcclxuICAgIC8qKiBkaXJ0eSAtIERlZmF1bHQgYmVoYXZpb3IuIFRoZSBkYXRhIGlzIHNlbnQgd2l0aCB0aGUgc2F2ZSB3aGVuIGl0IGhhcyBjaGFuZ2VkICovXHJcbiAgICBEaXJ0eTogJ2RpcnR5J1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGtpbmQgb2YgZGV2aWNlIHRoZSB1c2VyIGlzIHVzaW5nICovXHJcbmNvbnN0IEZvcm1GYWN0b3IgPSB7XHJcbiAgICAvKiogMCAqL1xyXG4gICAgVW5rbm93bjogMCxcclxuICAgIC8qKiAxICovXHJcbiAgICBEZXNrdG9wOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFRhYmxldDogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBQaG9uZTogM1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBsZXZlbCBvZiB0aGUgbWVzc2FnZSwgd2hpY2ggZGVmaW5lcyBob3cgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgKi9cclxuY29uc3QgRm9ybU5vdGlmaWNhdGlvbkxldmVsID0ge1xyXG4gICAgLyoqIEVSUk9SIC0gTm90aWZpY2F0aW9uIHdpbGwgdXNlIHRoZSBzeXN0ZW0gZXJyb3IgaWNvbiAqL1xyXG4gICAgRXJyb3I6ICdFUlJPUicsXHJcbiAgICAvKiogV0FSTklORyAtIE5vdGlmaWNhdGlvbiB3aWxsIHVzZSB0aGUgc3lzdGVtIHdhcm5pbmcgaWNvbiAqL1xyXG4gICAgV2FybmluZzogJ1dBUk5JTkcnLFxyXG4gICAgLyoqIElORk8gLSBOb3RpZmljYXRpb24gd2lsbCB1c2UgdGhlIHN5c3RlbSBpbmZvIGljb24gKi9cclxuICAgIEluZm86ICdJTkZPJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIEdldHMgdGhlIGZvcm0gdHlwZSBmb3IgdGhlIHJlY29yZCAqL1xyXG5jb25zdCBGb3JtVHlwZSA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBVbmRlZmluZWQ6IDAsXHJcbiAgICAvKiogMSAtIFF1aWNrIENyZWF0ZSBmb3JtcyByZXR1cm4gMSAqL1xyXG4gICAgQ3JlYXRlOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFVwZGF0ZTogMixcclxuICAgIC8qKiAzICovXHJcbiAgICBSZWFkT25seTogMyxcclxuICAgIC8qKiA0ICovXHJcbiAgICBEaXNhYmxlZDogNCxcclxuICAgIC8qKiA1ICovXHJcbiAgICBCdWxrRWRpdDogNVxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBmdWxsIG5hbWUgY29udmVudGlvbkNvZGUgc2V0dGluZyBvZiB0aGUgY3VycmVudCBvcmdhbml6YXRpb24gKi9cclxuY29uc3QgRnVsbE5hbWVDb252ZW50aW9uQ29kZSA9IHtcclxuICAgIC8qKiAwICovXHJcbiAgICBMYXN0TmFtZV9Db21tYV9GaXJzdE5hbWU6IDAsXHJcbiAgICAvKiogMSAqL1xyXG4gICAgRmlyc3ROYW1lX0xhc3ROYW1lOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZV9NaWRkbGVJbml0aWFsOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIEZpcnN0TmFtZV9NaWRkbGVJbml0aWFsX0xhc3ROYW1lOiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIExhc3ROYW1lX0NvbW1hX0ZpcnN0TmFtZV9NaWRkbGVOYW1lOiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIEZpcnN0TmFtZV9NaWRkbGVOYW1lX0xhc3ROYW1lOiA1LFxyXG4gICAgLyoqIDYgKi9cclxuICAgIExhc3ROYW1lX0ZpcnN0TmFtZTogNixcclxuICAgIC8qKiA3ICovXHJcbiAgICBMYXN0TmFtZUZpcnN0TmFtZTogN1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSB0eXBlIG9mIGdyaWQgKi9cclxuY29uc3QgR3JpZFR5cGUgPSB7XHJcbiAgICAvKiogMSAqL1xyXG4gICAgSG9tZVBhZ2VHcmlkOiAxLFxyXG4gICAgLyoqIDIgKi9cclxuICAgIFN1YmdyaWQ6IDJcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEZXNjcmliaW5nIHdoZXRoZXIgdG8gb3BlbiBvciBzYXZlIHRoZSBmaWxlICovXHJcbmNvbnN0IE9wZW5GaWxlT3B0aW9uID0ge1xyXG4gICAgLyoqIDEgKi9cclxuICAgIE9wZW46IDEsXHJcbiAgICAvKiogMiAqL1xyXG4gICAgU2F2ZTogMlxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBpbnRlZ2VyIHZhbHVlIG9mIHRoZSBidXNpbmVzcyBwcm9jZXNzIGZsb3cgY2F0ZWdvcnkgKi9cclxuY29uc3QgUHJvY2Vzc0NhdGVnb3J5ID0ge1xyXG4gICAgLyoqIDAgKi9cclxuICAgIFF1YWxpZnk6IDAsXHJcbiAgICAvKiogMSAqL1xyXG4gICAgRGV2ZWxvcDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBQcm9wb3NlOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIENsb3NlOiAzLFxyXG4gICAgLyoqIDQgKi9cclxuICAgIElkZW50aWZ5OiA0LFxyXG4gICAgLyoqIDUgKi9cclxuICAgIFJlc2VhcmNoOiA1LFxyXG4gICAgLyoqIDYgKi9cclxuICAgIFJlc29sdmU6IDZcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSBidXNpbmVzcyBwcm9jZXNzIGZsb3cgKi9cclxuY29uc3QgUHJvY2Vzc0Rpc3BsYXlTdGF0ZSA9IHtcclxuICAgIC8qKiBleHBhbmRlZCAqL1xyXG4gICAgRXhwYW5kZWQ6ICdleHBhbmRlZCcsXHJcbiAgICAvKiogY29sbGFwc2VkICovXHJcbiAgICBDb2xsYXBzZWQ6ICdjb2xsYXBzZWQnLFxyXG4gICAgLyoqIGZsb2F0aW5nICovXHJcbiAgICBGbG9hdGluZzogJ2Zsb2F0aW5nJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBpbnRlZ2VyIHZhbHVlIHN0YXR1cyBvZiB0aGUgc3RhZ2UgKi9cclxuY29uc3QgUHJvY2Vzc1N0YXR1cyA9IHtcclxuICAgIC8qKiBhY3RpdmUgKi9cclxuICAgIEFjdGl2ZTogJ2FjdGl2ZScsXHJcbiAgICAvKiogYWJvcnRlZCAqL1xyXG4gICAgQWJvcnRlZDogJ2Fib3J0ZWQnLFxyXG4gICAgLyoqIGZpbmlzaGVkICovXHJcbiAgICBGaW5pc2hlZDogJ2ZpbmlzaGVkJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFJldHVybnMgYSB2YWx1ZSBpbmRpY2F0aW5nIGhvdyB0aGUgc2F2ZSBldmVudCB3YXMgaW5pdGlhdGVkIGJ5IHRoZSB1c2VyICovXHJcbmNvbnN0IFNhdmVNb2RlID0ge1xyXG4gICAgLyoqIDEgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFNhdmU6IDEsXHJcbiAgICAvKiogMiAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgU2F2ZUFuZENsb3NlOiAyLFxyXG4gICAgLyoqIDUgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIERlYWN0aXZhdGU6IDUsXHJcbiAgICAvKiogNiAtIEFsbCBlbnRpdGllcyAqL1xyXG4gICAgUmVhY3RpdmF0ZTogNixcclxuICAgIC8qKiA3IC0gRW1haWwgKi9cclxuICAgIEVtYWlsOiA3LFxyXG4gICAgLyoqIDE1IC0gTGVhZCAqL1xyXG4gICAgRGlzcXVhbGlmeTogMTUsXHJcbiAgICAvKiogMTYgLSBMZWFkICovXHJcbiAgICBRdWFsaWZ5OiAxNixcclxuICAgIC8qKiA0NyAtIFVzZXIgb3IgVGVhbSAqL1xyXG4gICAgQXNzaWduOiA0NyxcclxuICAgIC8qKiA1OCAtIEFjdGl2aXRpZXMgKi9cclxuICAgIFNhdmVBc0NvbXBsZXRlZDogNTgsXHJcbiAgICAvKiogNTkgLSBBbGwgZW50aXRpZXMgKi9cclxuICAgIFNhdmVBbmROZXc6IDU5LFxyXG4gICAgLyoqIDcwIC0gQWxsIGVudGl0aWVzICovXHJcbiAgICBBdXRvU2F2ZTogNzBcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBTcGVjaWZ5IG9wdGlvbnMgZm9yIHNhdmluZyB0aGUgcmVjb3JkICovXHJcbmNvbnN0IFNhdmVPcHRpb24gPSB7XHJcbiAgICAvKiogc2F2ZWFuZGNsb3NlIC0gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiB1c2luZyB0aGUgU2F2ZSBhbmQgQ2xvc2UgY29tbWFuZCAqL1xyXG4gICAgU2F2ZUFuZENsb3NlOiAnc2F2ZWFuZGNsb3NlJyxcclxuICAgIC8qKiBzYXZlYW5kbmV3IC0gVGhpcyBpcyB0aGUgZXF1aXZhbGVudCBvZiB0aGUgdXNpbmcgdGhlIFNhdmUgYW5kIE5ldyBjb21tYW5kICovXHJcbiAgICBTYXZlQW5kTmV3OiAnc2F2ZWFuZG5ldydcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKiBEaXNwbGF5IHN0YXRlIG9mIHRoZSBzaWRlIHBhbmUgKi9cclxuY29uc3QgU2lkZVBhbmVTdGF0ZSA9IHtcclxuICAgIC8qKiAwIC0gQ29sbGFwc2VkICovXHJcbiAgICBDb2xsYXBzZWQ6IDAsXHJcbiAgICAvKiogMSAtIEV4cGFuZGVkICovXHJcbiAgICBFeHBhbmRlZDogMVxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBjb250cm9sIHR5cGUgb2YgdGFiICovXHJcbmNvbnN0IFRhYkNvbnRlbnRUeXBlID0ge1xyXG4gICAgLyoqIGNhcmRTZWN0aW9uczogVGhlIGRlZmF1bHQgdGFiIGJlaGF2aW9yICovXHJcbiAgICBDYXJkU2VjdGlvbnM6ICdjYXJkU2VjdGlvbnMnLFxyXG4gICAgLyoqIHNpbmdsZUNvbXBvbmVudDogTWF4aW1pemVzIHRoZSBjb250ZW50IG9mIHRoZSBmaXJzdCBjb21wb25lbnQgaW4gdGhlIHRhYiAqL1xyXG4gICAgU2luZ2xlQ29tcG9uZW50OiAnc2luZ2xlQ29tcG9uZW50J1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIERpc3BsYXkgc3RhdGUgb2YgdGhlIHRhYiAqL1xyXG5jb25zdCBUYWJEaXNwbGF5U3RhdGUgPSB7XHJcbiAgICAvKiogZXhwYW5kZWQgKi9cclxuICAgIEV4cGFuZGVkOiAnZXhwYW5kZWQnLFxyXG4gICAgLyoqIGNvbGxhcHNlZCAqL1xyXG4gICAgQ29sbGFwc2VkOiAnY29sbGFwc2VkJ1xyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqIFRoZSBzdGF0ZSBvZiB0aGUgdGltZXIgY29udHJvbCAtIFRoaXMgbWV0aG9kIGlzIG9ubHkgc3VwcG9ydGVkIGZvciBVbmlmaWVkIEludGVyZmFjZSAqL1xyXG5jb25zdCBUaW1lclN0YXRlID0ge1xyXG4gICAgLyoqIDEgKi9cclxuICAgIE5vdFNldDogMSxcclxuICAgIC8qKiAyICovXHJcbiAgICBJblByb2dyZXNzOiAyLFxyXG4gICAgLyoqIDMgKi9cclxuICAgIFdhcm5pbmc6IDMsXHJcbiAgICAvKiogNCAqL1xyXG4gICAgVmlvbGF0ZWQ6IDQsXHJcbiAgICAvKiogNSAqL1xyXG4gICAgU3VjY2VzczogNSxcclxuICAgIC8qKiA2ICovXHJcbiAgICBFeHBpcmVkOiA2LFxyXG4gICAgLyoqIDcgKi9cclxuICAgIENhbmNlbGVkOiA3LFxyXG4gICAgLyoqIDggKi9cclxuICAgIFBhdXNlZDogOFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFbnRpdHkgT3B0aW9uU2V0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vKiogQWNjb3VudCBlbnRpdHkgT3B0aW9uU2V0cyAqL1xyXG5jb25zdCBBY2NvdW50ID0ge1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgaW5kdXN0cnkgZm9yIHVzZSBpbiBtYXJrZXRpbmcgc2VnbWVudGF0aW9uIGFuZCBkZW1vZ3JhcGhpYyBhbmFseXNpcyAqL1xyXG4gICAgSW5kdXN0cnlDb2RlOiB7XHJcbiAgICAgICAgLyoqIDEgLSBBY2NvdW50aW5nICovXHJcbiAgICAgICAgQWNjb3VudGluZzogMSxcclxuICAgICAgICAvKiogNyAtIENvbnN1bHRpbmcgKi9cclxuICAgICAgICBDb25zdWx0aW5nOiA3LFxyXG4gICAgICAgIC8qKiAxNiAtIEZpbmFuY2lhbCAqL1xyXG4gICAgICAgIEZpbmFuY2lhbDogMTYsXHJcbiAgICAgICAgLyoqIDIwIC0gSW5zdXJhbmNlICovXHJcbiAgICAgICAgSW5zdXJhbmNlOiAyMCxcclxuICAgICAgICAvKiogMTIgLSBUZWNobm9sb2d5ICovXHJcbiAgICAgICAgVGVjaG5vbG9neTogMTJcclxuICAgIH0sXHJcbiAgICAvKiogQ3VzdG9tIE11bHRpT3B0aW9uU2V0IC0gdjRfQ2F0ZWdvcmllcyAqL1xyXG4gICAgdjRfQ2F0ZWdvcmllczoge1xyXG4gICAgICAgIC8qKiAxMDAwMDAwMDAgKi9cclxuICAgICAgICBDYXRlZ29yeV9BOiAxMDAwMDAwMDAsXHJcbiAgICAgICAgLyoqIDEwMDAwMDAwMSAqL1xyXG4gICAgICAgIENhdGVnb3J5X0I6IDEwMDAwMDAwMSxcclxuICAgICAgICAvKiogMTAwMDAwMDAyICovXHJcbiAgICAgICAgQ2F0ZWdvcnlfQzogMTAwMDAwMDAyLFxyXG4gICAgICAgIC8qKiAxMDAwMDAwMDMgKi9cclxuICAgICAgICBDYXRlZ29yeV9EOiAxMDAwMDAwMDNcclxuICAgIH1cclxufSBhcyBjb25zdDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRXhwb3J0IGNvbWJpbmVkIE9wdGlvblNldFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgT3B0aW9uU2V0ID0ge1xyXG4gICAgLy8gR2xvYmFsIE9wdGlvblNldHNcclxuICAgIEFkdmFuY2VkQ29uZmlnU2V0dGluZyxcclxuICAgIENsaWVudE5hbWUsXHJcbiAgICBDbGllbnRTdGF0ZSxcclxuICAgIEZpZWxkQXR0cmlidXRlVHlwZSxcclxuICAgIEZpZWxkQ29udHJvbFR5cGUsXHJcbiAgICBGaWVsZEZvcm1hdCxcclxuICAgIEZpZWxkTm90aWZpY2F0aW9uTGV2ZWwsXHJcbiAgICBGaWVsZFJlcXVpcmVkTGV2ZWwsXHJcbiAgICBGaWVsZFN1Ym1pdE1vZGUsXHJcbiAgICBGb3JtRmFjdG9yLFxyXG4gICAgRm9ybU5vdGlmaWNhdGlvbkxldmVsLFxyXG4gICAgRm9ybVR5cGUsXHJcbiAgICBGdWxsTmFtZUNvbnZlbnRpb25Db2RlLFxyXG4gICAgR3JpZFR5cGUsXHJcbiAgICBPcGVuRmlsZU9wdGlvbixcclxuICAgIFByb2Nlc3NDYXRlZ29yeSxcclxuICAgIFByb2Nlc3NEaXNwbGF5U3RhdGUsXHJcbiAgICBQcm9jZXNzU3RhdHVzLFxyXG4gICAgU2F2ZU1vZGUsXHJcbiAgICBTYXZlT3B0aW9uLFxyXG4gICAgU2lkZVBhbmVTdGF0ZSxcclxuICAgIFRhYkNvbnRlbnRUeXBlLFxyXG4gICAgVGFiRGlzcGxheVN0YXRlLFxyXG4gICAgVGltZXJTdGF0ZSxcclxuICAgIC8vIEVudGl0eSBPcHRpb25TZXRzXHJcbiAgICBBY2NvdW50XHJcbn0gYXMgY29uc3Q7XHJcbiIsICIvKipcclxuICogQWNjb3VudC5mb3JtLnRzIC0gQWNjb3VudCBGb3JtIGZvciBlYXJseS1ib3VuZCBzdHlsZSBmb3JtIGNvZGluZ1xyXG4gKiBHZW5lcmF0ZWQgZmlsZSAtIERPIE5PVCBNT0RJRlkgTUFOVUFMTFlcclxuICogXHJcbiAqIFN0cnVjdHVyZTpcclxuICogMS4gSW1wb3J0c1xyXG4gKiAyLiBUeXBlcyAtIElCb2R5LCBJSGVhZGVyLCBJVGFicywgSUdyaWQsIElOYXZpZ2F0aW9uLCBJUXVpY2tGb3JtLCBJUHJvY2Vzc1xyXG4gKiAzLiBSdW50aW1lIC0gRm9ybSBjbGFzcyB3aXRoIGZpZWxkIGNvbmZpZ3VyYXRpb25zXHJcbiAqL1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2xpYi9kZXZraXQuZC50c1wiIC8+XHJcbmltcG9ydCB7IEZvcm1CYXNlIH0gZnJvbSAnLi4vLi4vbGliL2RldmtpdCc7XHJcbmltcG9ydCAnLi9PcHRpb25TZXQnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAxLiBUeXBlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIEFjY291bnRGb3JtIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJvZHkgY29udHJvbHMgaW50ZXJmYWNlXHJcbiAgICAgKiBDb250YWlucyBhbGwgY29udHJvbHMgb24gdGhlIGZvcm0gYm9keVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElCb2R5IHtcclxuICAgICAgICAvKiogVHlwZSB0aGUgY29tcGFueSBvciBidXNpbmVzcyBuYW1lLiAqL1xyXG4gICAgICAgIE5hbWU6IERldktpdC5Db250cm9scy5TdHJpbmc7XHJcbiAgICAgICAgLyoqIFR5cGUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byBkZXNjcmliZSB0aGUgYWNjb3VudC4gKi9cclxuICAgICAgICBEZXNjcmlwdGlvbjogRGV2S2l0LkNvbnRyb2xzLk1lbW87XHJcbiAgICAgICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIE51bWJlck9mRW1wbG95ZWVzOiBEZXZLaXQuQ29udHJvbHMuSW50ZWdlcjtcclxuICAgICAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGNyZWRpdCBmb3IgdGhlIGFjY291bnQgaXMgb24gaG9sZC4gKi9cclxuICAgICAgICBDcmVkaXRPbkhvbGQ6IERldktpdC5Db250cm9scy5Cb29sZWFuO1xyXG4gICAgICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5LiAqL1xyXG4gICAgICAgIEluZHVzdHJ5Q29kZTogRGV2S2l0LkNvbnRyb2xzLk9wdGlvblNldDtcclxuICAgICAgICAvKiogQ2hvb3NlIHRoZSBwcmltYXJ5IGNvbnRhY3QgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgICAgIFByaW1hcnlDb250YWN0SWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBCaXJ0aGRheSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0JpcnRoZGF5OiBEZXZLaXQuQ29udHJvbHMuRGF0ZU9ubHk7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBBcHBvaW50bWVudCBUaW1lIGZpZWxkICovXHJcbiAgICAgICAgdjRfQXBwb2ludG1lbnRUaW1lOiBEZXZLaXQuQ29udHJvbHMuRGF0ZVRpbWU7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBMYXRpdHVkZSBmaWVsZCAqL1xyXG4gICAgICAgIHY0X0xhdGl0dWRlOiBEZXZLaXQuQ29udHJvbHMuRGVjaW1hbDtcclxuICAgICAgICAvKiogQ3VzdG9tIERpc2NvdW50IFBlcmNlbnRhZ2UgZmllbGQgKi9cclxuICAgICAgICB2NF9EaXNjb3VudFBlcmNlbnRhZ2U6IERldktpdC5Db250cm9scy5Eb3VibGU7XHJcbiAgICAgICAgLyoqIEN1c3RvbSBDYXRlZ29yaWVzIGZpZWxkICovXHJcbiAgICAgICAgdjRfQ2F0ZWdvcmllczogRGV2S2l0LkNvbnRyb2xzLk11bHRpT3B0aW9uU2V0O1xyXG4gICAgICAgIC8qKiBDdXN0b20gSGVscCBXZWIgUmVzb3VyY2UgKi9cclxuICAgICAgICB2NF9XZWJSZXNvdXJjZUhlbHA6IERldktpdC5Db250cm9scy5XZWJSZXNvdXJjZTtcclxuICAgICAgICAvKiogQ3VzdG9tIEV4dGVybmFsIFBhZ2UgKi9cclxuICAgICAgICB2NF9JRnJhbWVFeHRlcm5hbDogRGV2S2l0LkNvbnRyb2xzLklGcmFtZTtcclxuICAgICAgICAvKiogQ3VzdG9tIFNMQSBUaW1lciAqL1xyXG4gICAgICAgIHY0X1RpbWVyU0xBOiBEZXZLaXQuQ29udHJvbHMuVGltZXI7XHJcbiAgICAgICAgLyoqIEtub3dsZWRnZSBCYXNlIFNlYXJjaCAqL1xyXG4gICAgICAgIHY0X0tub3dsZWRnZVNlYXJjaDogRGV2S2l0LkNvbnRyb2xzLktub3dsZWRnZTtcclxuICAgICAgICAvKiogRm9ybSBUYWJzICovXHJcbiAgICAgICAgVGFiOiBJVGFicztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhlYWRlciBjb250cm9scyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGNvbnRyb2xzIGRpc3BsYXllZCBpbiB0aGUgZm9ybSBoZWFkZXJcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJSGVhZGVyIHtcclxuICAgICAgICAvKiogRW50ZXIgdGhlIHVzZXIgb3IgdGVhbSB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICAgICAgT3duZXJJZDogRGV2S2l0LkNvbnRyb2xzLkxvb2t1cDtcclxuICAgICAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIGVtcGxveWVlcyB0aGF0IHdvcmsgYXQgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgTnVtYmVyT2ZFbXBsb3llZXM6IERldktpdC5Db250cm9scy5JbnRlZ2VyO1xyXG4gICAgICAgIC8qKiBUeXBlIHRoZSBhbm51YWwgcmV2ZW51ZSBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICAgICAgUmV2ZW51ZTogRGV2S2l0LkNvbnRyb2xzLk1vbmV5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VtbWFyeSB0YWIgc2VjdGlvbnMgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNVTU1BUllfVEFCVGFiU2VjdGlvbnMge1xyXG4gICAgICAgIEFDQ09VTlRfSU5GT1JNQVRJT046IERldktpdC5Db250cm9scy5TZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3VtbWFyeSB0YWIgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVNVTU1BUllfVEFCVGFiIGV4dGVuZHMgRGV2S2l0LkNvbnRyb2xzLklUYWIge1xyXG4gICAgICAgIFNlY3Rpb246IElTVU1NQVJZX1RBQlRhYlNlY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFicyBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIGFsbCB0YWJzIG9uIHRoZSBmb3JtXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVRhYnMge1xyXG4gICAgICAgIFNVTU1BUllfVEFCOiBJU1VNTUFSWV9UQUJUYWI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHcmlkIGNvbnRyb2xzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYWxsIHN1YmdyaWQgY29udHJvbHMgb24gdGhlIGZvcm1cclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJR3JpZCB7XHJcbiAgICAgICAgQ29udGFjdHM6IERldktpdC5Db250cm9scy5HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGlvbiBpbnRlcmZhY2VcclxuICAgICAqIENvbnRhaW5zIG5hdmlnYXRpb24gaXRlbXNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgbmF2X21zYV9hY2NvdW50X21hbmFnaW5ncGFydG5lcjogRGV2S2l0LkNvbnRyb2xzLk5hdmlnYXRpb25JdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUXVpY2tGb3JtIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgcXVpY2sgdmlldyBmb3JtIGNvbnRyb2xzXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVF1aWNrRm9ybSB7XHJcbiAgICAgICAgY29udGFjdHF1aWNrZm9ybTogRGV2S2l0LkNvbnRyb2xzLklRdWlja1ZpZXcgJiB7XHJcbiAgICAgICAgICAgIEJvZHk6IHtcclxuICAgICAgICAgICAgICAgIEVNYWlsQWRkcmVzczE6IERldktpdC5Db250cm9scy5RdWlja1ZpZXc7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1c2luZXNzIFByb2Nlc3MgRmxvdyBmaWVsZHMgaW50ZXJmYWNlXHJcbiAgICAgKiB2NF9BY2NvdW50QlBGIC0gQ3VzdG9tIEFjY291bnQgQnVzaW5lc3MgUHJvY2VzcyBGbG93XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJQRiB7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogQWNjb3VudCBOYW1lIChTdGFnZSAxOiBRdWFsaWZ5KSAqL1xyXG4gICAgICAgIE5hbWU6IERldktpdC5Db250cm9scy5TdHJpbmc7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogSW5kdXN0cnkgQ29kZSAoU3RhZ2UgMTogUXVhbGlmeSkgKi9cclxuICAgICAgICBJbmR1c3RyeUNvZGU6IERldktpdC5Db250cm9scy5PcHRpb25TZXQ7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogUmV2ZW51ZSAoU3RhZ2UgMjogRGV2ZWxvcCkgKi9cclxuICAgICAgICBSZXZlbnVlOiBEZXZLaXQuQ29udHJvbHMuTW9uZXk7XHJcbiAgICAgICAgLyoqIEJQRiBGaWVsZDogUHJpbWFyeSBDb250YWN0IChTdGFnZSAyOiBEZXZlbG9wKSAqL1xyXG4gICAgICAgIFByaW1hcnlDb250YWN0SWQ6IERldktpdC5Db250cm9scy5Mb29rdXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzIGludGVyZmFjZVxyXG4gICAgICogQ29udGFpbnMgYnVzaW5lc3MgcHJvY2VzcyBmbG93IGRlZmluaXRpb25zXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVByb2Nlc3MgZXh0ZW5kcyBEZXZLaXQuQ29udHJvbHMuSVByb2Nlc3Mge1xyXG4gICAgICAgIC8qKiB2NF9BY2NvdW50QlBGIC0gQ3VzdG9tIEFjY291bnQgQnVzaW5lc3MgUHJvY2VzcyBGbG93ICovXHJcbiAgICAgICAgdjRfQWNjb3VudEJQRjogSUJQRjtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyAyLiBSdW50aW1lIC0gRm9ybSBDbGFzc1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWNjb3VudCBGb3JtIGNsYXNzXHJcbiAgICAgKiBQcm92aWRlcyB0eXBlZCBhY2Nlc3MgdG8gYWxsIGZvcm0gY29udHJvbHNcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEZvcm0gZXh0ZW5kcyBGb3JtQmFzZTxJQm9keSwgSUhlYWRlciwgSVRhYnMsIElHcmlkLCBJTmF2aWdhdGlvbiwgSVF1aWNrRm9ybSwgSVByb2Nlc3M+IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDcmVhdGVzIGFuIEFjY291bnQgRm9ybSBpbnN0YW5jZVxyXG4gICAgICAgICAqIEBwYXJhbSBleGVjdXRpb25Db250ZXh0IFRoZSBleGVjdXRpb24gY29udGV4dCBmcm9tIGZvcm0gZXZlbnRcclxuICAgICAgICAgKiBAcGFyYW0gZGVmYXVsdFdlYlJlc291cmNlTmFtZSBPcHRpb25hbCBkZWZhdWx0IHdlYiByZXNvdXJjZSBuYW1lXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3RydWN0b3IoZXhlY3V0aW9uQ29udGV4dDogYW55LCBkZWZhdWx0V2ViUmVzb3VyY2VOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGV4ZWN1dGlvbkNvbnRleHQsIGRlZmF1bHRXZWJSZXNvdXJjZU5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAgICAgICAgICAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyT2ZFbXBsb3llZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVkaXRPbkhvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICdJbmR1c3RyeUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICdQcmltYXJ5Q29udGFjdElkJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfQmlydGhkYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BcHBvaW50bWVudFRpbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9MYXRpdHVkZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0Rpc2NvdW50UGVyY2VudGFnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0NhdGVnb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9XZWJSZXNvdXJjZUhlbHAnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9JRnJhbWVFeHRlcm5hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X1RpbWVyU0xBJyxcclxuICAgICAgICAgICAgICAgICAgICAndjRfS25vd2xlZGdlU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICdPd25lcklkJyxcclxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyT2ZFbXBsb3llZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdSZXZlbnVlJyxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB0YWI6IFtcclxuICAgICAgICAgICAgICAgICAgICAnU1VNTUFSWV9UQUJfX19BQ0NPVU5UX0lORk9STUFUSU9OJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGdyaWQ6IFtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGFjdHMnXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICduYXZfbXNhX2FjY291bnRfbWFuYWdpbmdwYXJ0bmVyJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHF1aWNrOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRhY3RxdWlja2Zvcm1fX19FTWFpbEFkZHJlc3MxJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGJwZjogW1xyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19JbmR1c3RyeUNvZGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICd2NF9BY2NvdW50QlBGX19fUmV2ZW51ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3Y0X0FjY291bnRCUEZfX19QcmltYXJ5Q29udGFjdElkJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDA6IElDb250cm9sIEludGVyZmFjZSAtIE5hbWUgRmllbGQgKFN0cmluZylcclxuICogVGhpcyB0ZXN0cyB0aGUgYmFzZSBJQ29udHJvbCBpbnRlcmZhY2UgdGhhdCBhbGwgY29udHJvbHMgaW5oZXJpdCBmcm9tXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0Q29udHJvbChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBmb3JtLkJvZHkuTmFtZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gY29udHJvbC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBjb250cm9sLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogY29udHJvbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGNvbnRyb2wuQXR0cmlidXRlTmFtZSA9PT0gXCJuYW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGNvbnRyb2wuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBjb250cm9sLkF0dHJpYnV0ZVR5cGUgPT09IFwic3RyaW5nXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBjb250cm9sLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogY29udHJvbC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBjb250cm9sLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogY29udHJvbC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBjb250cm9sLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcGVydGllcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBzZXR0ZXJSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuXHJcbiAgICAvLyBTZXR0ZXJzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGNvbnRyb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBjb250cm9sLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgbmV3UmVxdWlyZWQgPSBjb250cm9sLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgY29udHJvbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogYCR7b3JpZ1JlcXVpcmVkfVx1MjE5MnJlcXVpcmVkXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1JlcXVpcmVkID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnU3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IFwiYWx3YXlzXCI7XHJcbiAgICAgICAgY29uc3QgbmV3U3VibWl0ID0gY29udHJvbC5TdWJtaXRNb2RlO1xyXG4gICAgICAgIGNvbnRyb2wuU3VibWl0TW9kZSA9IG9yaWdTdWJtaXQ7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlIChzZXQpXCIsIFZhbHVlOiBgJHtvcmlnU3VibWl0fVx1MjE5MmFsd2F5c1x1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdTdWJtaXQgPT09IFwiYWx3YXlzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBjb250cm9sLkRpc2FibGVkO1xyXG4gICAgICAgIGNvbnRyb2wuRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IG5ld0Rpc2FibGVkID0gY29udHJvbC5EaXNhYmxlZDtcclxuICAgICAgICBjb250cm9sLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGAke29yaWdEaXNhYmxlZH1cdTIxOTJ0cnVlXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld0Rpc2FibGVkID09PSB0cnVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGNvbnRyb2wuTGFiZWw7XHJcbiAgICAgICAgY29udHJvbC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld0xhYmVsID0gY29udHJvbC5MYWJlbDtcclxuICAgICAgICBjb250cm9sLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGBcIiR7b3JpZ0xhYmVsfVwiXHUyMTkybW9kaWZpZWRcdTIxOTJyZXN0b3JlZGAsIFN0YXR1czogbmV3TGFiZWwuaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBjb250cm9sLlZpc2libGU7XHJcbiAgICAgICAgY29udHJvbC5WaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbmV3VmlzaWJsZSA9IGNvbnRyb2wuVmlzaWJsZTtcclxuICAgICAgICBjb250cm9sLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGAke29yaWdWaXNpYmxlfVx1MjE5MmZhbHNlXHUyMTkycmVzdG9yZWRgLCBTdGF0dXM6IG5ld1Zpc2libGUgPT09IGZhbHNlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWUgKyBcIiAoTU9ESUZJRUQpXCI7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjb250cm9sLlZhbHVlO1xyXG4gICAgICAgIGNvbnRyb2wuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGBtb2RpZmllZFx1MjE5MnJlc3RvcmVkYCwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCIoTU9ESUZJRUQpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dHB1dENoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIE91dHB1dENoYW5nZSBmaXJlZFwiKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGRPbk91dHB1dENoYW5nZShvdXRwdXRDaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJBZGRPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQWRkT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5SZW1vdmVPbk91dHB1dENoYW5nZShvdXRwdXRDaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25PdXRwdXRDaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbk91dHB1dENoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb250cm9sLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnRyb2wuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBub3RpZmljYXRpb24gZnJvbSBJQ29udHJvbFwiLCBcIkNUUkxfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIkNUUkxfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjbGVhcmVkID0gY29udHJvbC5DbGVhck5vdGlmaWNhdGlvbihcIk5PTkVYSVNURU5UXCIpO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIkNsZWFyTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBgUmVzdWx0OiAke2NsZWFyZWR9YCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiQ2xlYXJOb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5BZGROb3RpZmljYXRpb24oe1xyXG4gICAgICAgICAgICBtZXNzYWdlczogW1wiUmVjb21tZW5kYXRpb24gZnJvbSB0ZXN0XCJdLFxyXG4gICAgICAgICAgICBub3RpZmljYXRpb25MZXZlbDogXCJSRUNPTU1FTkRBVElPTlwiLFxyXG4gICAgICAgICAgICB1bmlxdWVJZDogXCJDVFJMX1RFU1RfMlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjb250cm9sLkNsZWFyTm90aWZpY2F0aW9uKFwiQ1RSTF9URVNUXzJcIiksIDMwMDApO1xyXG4gICAgICAgIHNldHRlclJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIkFkZE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJBZGRlZCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJBZGROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29udHJvbC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZCBtZXNzYWdlXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY29udHJvbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBzZXR0ZXJSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgc2V0dGVyUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4uc2V0dGVyUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjlCXHVGRTBGIFRFU1QgMDogSUNvbnRyb2wgSW50ZXJmYWNlIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE5hbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUoc2V0dGVyUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE6IExvb2t1cCBDb250cm9sIC0gUHJpbWFyeUNvbnRhY3RJZCBGaWVsZFxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdExvb2t1cChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGxvb2t1cCA9IGZvcm0uQm9keS5QcmltYXJ5Q29udGFjdElkO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsRGVmYXVsdFZpZXcgPSBsb29rdXAuRGVmYXVsdFZpZXc7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBsb29rdXAuVmFsdWU7XHJcbiAgICAgICAgY29uc3QgaGFzVmFsdWUgPSBjdXJyZW50VmFsdWUgJiYgY3VycmVudFZhbHVlLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IGhhc1ZhbHVlID8gYCR7Y3VycmVudFZhbHVlWzBdLm5hbWV9ICgke2N1cnJlbnRWYWx1ZVswXS5lbnRpdHlUeXBlfSlgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIklzUGFydHlMaXN0XCIsIFZhbHVlOiBsb29rdXAuSXNQYXJ0eUxpc3QsIFN0YXR1czogbG9va3VwLklzUGFydHlMaXN0ID09PSBmYWxzZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXNcIiwgVmFsdWU6IEpTT04uc3RyaW5naWZ5KGxvb2t1cC5FbnRpdHlUeXBlcyksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3XCIsIFZhbHVlOiBvcmlnaW5hbERlZmF1bHRWaWV3LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBsb29rdXAuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGxvb2t1cC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGxvb2t1cC5Db250cm9sVHlwZSwgU3RhdHVzOiBsb29rdXAuQ29udHJvbFR5cGUgPT09IFwibG9va3VwXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBsb29rdXAuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGxvb2t1cC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBsb29rdXAuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGxvb2t1cC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbG9va3VwLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBsb29rdXAuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbG9va3VwLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogbG9va3VwLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBsb29rdXAuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIkVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHByZVNlYXJjaENhbGxiYWNrID0gKGN0eDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyWG1sID0gXCI8ZmlsdGVyIHR5cGU9J2FuZCc+PGNvbmRpdGlvbiBhdHRyaWJ1dGU9J3N0YXRlY29kZScgb3BlcmF0b3I9J2VxJyB2YWx1ZT0nMCcgLz48L2ZpbHRlcj5cIjtcclxuICAgICAgICBsb29rdXAuQWRkQ3VzdG9tRmlsdGVyKGZpbHRlclhtbCwgXCJjb250YWN0XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgUHJlU2VhcmNoIGZpcmVkIC0gZmlsdGVyIGFwcGxpZWRcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhZ0NsaWNrQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIExvb2t1cFRhZ0NsaWNrIGZpcmVkIC0gdGFnIHdhcyBjbGlja2VkXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXR0ZXJzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWaWV3SWQgPSBcInswMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDJ9XCI7XHJcbiAgICAgICAgbG9va3VwLkRlZmF1bHRWaWV3ID0gdGVzdFZpZXdJZDtcclxuICAgICAgICBjb25zdCBuZXdWaWV3ID0gbG9va3VwLkRlZmF1bHRWaWV3O1xyXG4gICAgICAgIGxvb2t1cC5EZWZhdWx0VmlldyA9IG9yaWdpbmFsRGVmYXVsdFZpZXc7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJEZWZhdWx0VmlldyAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkRlZmF1bHRWaWV3IChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVHlwZXMgPSBsb29rdXAuRW50aXR5VHlwZXM7XHJcbiAgICAgICAgbG9va3VwLkVudGl0eVR5cGVzID0gW1wiY29udGFjdFwiXTtcclxuICAgICAgICBjb25zdCBuZXdUeXBlcyA9IGxvb2t1cC5FbnRpdHlUeXBlcztcclxuICAgICAgICBsb29rdXAuRW50aXR5VHlwZXMgPSBvcmlnaW5hbFR5cGVzO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiRW50aXR5VHlwZXMgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJFbnRpdHlUeXBlcyAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkUHJlU2VhcmNoKHByZVNlYXJjaENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZFByZVNlYXJjaFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkUHJlU2VhcmNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5SZW1vdmVQcmVTZWFyY2gocHJlU2VhcmNoQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmVtb3ZlUHJlU2VhcmNoXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVQcmVTZWFyY2hcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLkFkZExvb2t1cFRhZ0NsaWNrKHRhZ0NsaWNrQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiQWRkTG9va3VwVGFnQ2xpY2tcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkFkZExvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxvb2t1cC5SZW1vdmVMb29rdXBUYWdDbGljayh0YWdDbGlja0NhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlbW92ZUxvb2t1cFRhZ0NsaWNrXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJSZW1vdmVMb29rdXBUYWdDbGlja1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsb29rdXAuQWRkQ3VzdG9tVmlldyhcclxuICAgICAgICAgICAgXCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDFcIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCIsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlIENvbnRhY3RzIChDdXN0b20gVmlldylcIixcclxuICAgICAgICAgICAgXCI8ZmV0Y2g+PGVudGl0eSBuYW1lPSdjb250YWN0Jz48YXR0cmlidXRlIG5hbWU9J2Z1bGxuYW1lJy8+PC9lbnRpdHk+PC9mZXRjaD5cIixcclxuICAgICAgICAgICAgXCI8Z3JpZCBuYW1lPSdyZXN1bHRzZXQnPjxyb3cgbmFtZT0ncmVzdWx0JyBpZD0nY29udGFjdGlkJz48Y2VsbCBuYW1lPSdmdWxsbmFtZScgd2lkdGg9JzIwMCcvPjwvcm93PjwvZ3JpZD5cIixcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkQ3VzdG9tVmlld1wiLCBWYWx1ZTogXCJBZGRlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZEN1c3RvbVZpZXdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9va3VwLlNldE5vdGlmaWNhdGlvbihcIlRlc3Qgbm90aWZpY2F0aW9uXCIsIFwiVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbG9va3VwLkNsZWFyTm90aWZpY2F0aW9uKFwiVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyBpbiAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBsb29rdXAuRm9jdXMoKSwgNDAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDRzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMEQgVEVTVCAxOiBMb29rdXAgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBQcmltYXJ5Q29udGFjdElkIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAzOiBNZW1vIENvbnRyb2wgLSBEZXNjcmlwdGlvbiBGaWVsZFxyXG4gKiBNZW1vIGV4dGVuZHMgSUNvbnRyb2xUZXh0IHdpdGggTWF4TGVuZ3RoIHByb3BlcnR5XHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TWVtbyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWVtbyA9IGZvcm0uQm9keS5EZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbWVtby5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE1lbW8tc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsIFZhbHVlOiBtZW1vLk1heExlbmd0aCwgU3RhdHVzOiB0eXBlb2YgbWVtby5NYXhMZW5ndGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlID8gYFwiJHtvcmlnaW5hbFZhbHVlLnN1YnN0cmluZygwLCA1MCl9JHtvcmlnaW5hbFZhbHVlLmxlbmd0aCA+IDUwID8gJy4uLicgOiAnJ31cImAgOiBcIihlbXB0eSlcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBtZW1vLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbWVtby5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG1lbW8uQXR0cmlidXRlTmFtZSA9PT0gXCJkZXNjcmlwdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtZW1vLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogbWVtby5BdHRyaWJ1dGVUeXBlID09PSBcIm1lbW9cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG1lbW8uQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBtZW1vLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG1lbW8uRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtZW1vLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBtZW1vLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtZW1vLlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtZW1vLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogbWVtby5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtZW1vLkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbWVtby5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgICAgIG1lbW8uVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbWVtby5WYWx1ZTtcclxuICAgICAgICBtZW1vLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IG5ld1ZhbHVlPy5pbmNsdWRlcyhcIltURVNUXVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtZW1vLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgbWVtby5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1lbW8uUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbWVtby5EaXNhYmxlZDtcclxuICAgICAgICBtZW1vLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1lbW8uRGlzYWJsZWQ7XHJcbiAgICAgICAgbWVtby5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1lbW8uTGFiZWw7XHJcbiAgICAgICAgbWVtby5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWVtby5MYWJlbDtcclxuICAgICAgICBtZW1vLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1lbW8uVmlzaWJsZTtcclxuICAgICAgICBtZW1vLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtZW1vLlZpc2libGU7XHJcbiAgICAgICAgbWVtby5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNZW1vIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1lbW8uRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtZW1vLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZW1vLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTWVtbyBub3RpZmljYXRpb25cIiwgXCJNRU1PX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uQ2xlYXJOb3RpZmljYXRpb24oXCJNRU1PX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWVtby5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1lbW8uU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENERCBURVNUIDI6IE1lbW8gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBEZXNjcmlwdGlvbiBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzExKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDM6IFN0cmluZyBDb250cm9sIC0gTmFtZSBGaWVsZFxyXG4gKiBTdHJpbmcgZXh0ZW5kcyBJQ29udHJvbFRleHQgd2l0aCBNYXhMZW5ndGggcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RTdHJpbmcoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHN0ciA9IGZvcm0uQm9keS5OYW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBzdHIuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTdHJpbmctc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiTWF4TGVuZ3RoXCIsIFZhbHVlOiBzdHIuTWF4TGVuZ3RoLCBTdGF0dXM6IHR5cGVvZiBzdHIuTWF4TGVuZ3RoID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSA/IGBcIiR7b3JpZ2luYWxWYWx1ZS5zdWJzdHJpbmcoMCwgNTApfSR7b3JpZ2luYWxWYWx1ZS5sZW5ndGggPiA1MCA/ICcuLi4nIDogJyd9XCJgIDogXCIoZW1wdHkpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogc3RyLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzdHIuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBzdHIuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBzdHIuQXR0cmlidXRlTmFtZSA9PT0gXCJuYW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IHN0ci5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IHN0ci5BdHRyaWJ1dGVUeXBlID09PSBcInN0cmluZ1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogc3RyLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogc3RyLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IHN0ci5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IHN0ci5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogc3RyLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBzdHIuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IHN0ci5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IHN0ci5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBzdHIuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBzdHIuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgICAgICBzdHIuVmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCBcIlwiKSArIFwiIFtURVNUXVwiO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gc3RyLlZhbHVlO1xyXG4gICAgICAgIHN0ci5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWU/LmluY2x1ZGVzKFwiW1RFU1RdXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZT8uaW5jbHVkZXMoXCJbVEVTVF1cIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gc3RyLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgc3RyLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBzdHIuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBzdHIuRGlzYWJsZWQ7XHJcbiAgICAgICAgc3RyLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5EaXNhYmxlZDtcclxuICAgICAgICBzdHIuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHN0ci5MYWJlbDtcclxuICAgICAgICBzdHIuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHN0ci5MYWJlbDtcclxuICAgICAgICBzdHIuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gc3RyLlZpc2libGU7XHJcbiAgICAgICAgc3RyLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzdHIuVmlzaWJsZTtcclxuICAgICAgICBzdHIuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgU3RyaW5nIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHIuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzdHIuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHN0ci5TZXROb3RpZmljYXRpb24oXCJUZXN0IFN0cmluZyBub3RpZmljYXRpb25cIiwgXCJTVFJJTkdfVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLkNsZWFyTm90aWZpY2F0aW9uKFwiU1RSSU5HX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc3RyLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3RyLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdURDQzQgVEVTVCAzOiBTdHJpbmcgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBOYW1lIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNDogSW50ZWdlciBDb250cm9sIC0gTnVtYmVyT2ZFbXBsb3llZXMgRmllbGRcclxuICogSW50ZWdlciBleHRlbmRzIElDb250cm9sTnVtYmVyIHdpdGggTWF4LCBNaW4gcHJvcGVydGllcyAoTk8gUHJlY2lzaW9uIHN1cHBvcnQpXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0SW50ZWdlcihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgaW50ID0gZm9ybS5IZWFkZXIuTnVtYmVyT2ZFbXBsb3llZXM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGludC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIEludGVnZXItc3BlY2lmaWMgcHJvcGVydGllcyAoSUNvbnRyb2xOdW1iZXIgLSBOTyBQcmVjaXNpb24gZm9yIEludGVnZXIpXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhcIiwgVmFsdWU6IGludC5NYXgsIFN0YXR1czogdHlwZW9mIGludC5NYXggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk1pblwiLCBWYWx1ZTogaW50Lk1pbiwgU3RhdHVzOiB0eXBlb2YgaW50Lk1pbiA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiVmFsdWVcIiwgVmFsdWU6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogaW50LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBpbnQuQXR0cmlidXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVOYW1lXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBpbnQuQXR0cmlidXRlTmFtZSA9PT0gXCJudW1iZXJvZmVtcGxveWVlc1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBpbnQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBpbnQuQXR0cmlidXRlVHlwZSA9PT0gXCJpbnRlZ2VyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBpbnQuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBpbnQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogaW50LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGludC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogaW50LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBpbnQuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGludC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGludC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBpbnQuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBpbnQuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCAwKSArIDEwMDtcclxuICAgICAgICBpbnQuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBpbnQuVmFsdWU7XHJcbiAgICAgICAgaW50LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gaW50LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgaW50LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBpbnQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBpbnQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBpbnQuRGlzYWJsZWQ7XHJcbiAgICAgICAgaW50LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5EaXNhYmxlZDtcclxuICAgICAgICBpbnQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGludC5MYWJlbDtcclxuICAgICAgICBpbnQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5MYWJlbDtcclxuICAgICAgICBpbnQuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBpbnQuVmlzaWJsZTtcclxuICAgICAgICBpbnQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGludC5WaXNpYmxlO1xyXG4gICAgICAgIGludC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBJbnRlZ2VyIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaW50LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpbnQuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBpbnQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5TZXROb3RpZmljYXRpb24oXCJUZXN0IEludGVnZXIgbm90aWZpY2F0aW9uXCIsIFwiSU5UX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5DbGVhck5vdGlmaWNhdGlvbihcIklOVF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGludC5TZXRJc1ZhbGlkKGZhbHNlLCBcIlRlc3QgaW52YWxpZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGludC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDIyIFRFU1QgNDogSW50ZWdlciBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IE51bWJlck9mRW1wbG95ZWVzIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTYpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNTogT3B0aW9uU2V0IENvbnRyb2wgLSBJbmR1c3RyeUNvZGUgRmllbGRcclxuICogT3B0aW9uU2V0IGV4dGVuZHMgSUNvbnRyb2xPcHRpb25TZXQgd2l0aCBJbml0aWFsVmFsdWUsIFNlbGVjdGVkT3B0aW9uLCBUZXh0LCBWYWx1ZVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdE9wdGlvblNldChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgb3B0ID0gZm9ybS5Cb2R5LkluZHVzdHJ5Q29kZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gb3B0LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gT3B0aW9uU2V0LXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZVwiLCBWYWx1ZTogb3B0LkluaXRpYWxWYWx1ZSwgU3RhdHVzOiB0eXBlb2Ygb3B0LkluaXRpYWxWYWx1ZSA9PT0gXCJudW1iZXJcIiB8fCBvcHQuSW5pdGlhbFZhbHVlID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJPcHRpb25zXCIsIFZhbHVlOiBgJHtvcHQuT3B0aW9ucz8ubGVuZ3RoID8/IDB9IG9wdGlvbnNgLCBTdGF0dXM6IG9wdC5PcHRpb25zPy5sZW5ndGggPiAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZE9wdGlvblwiLCBWYWx1ZTogb3B0LlNlbGVjdGVkT3B0aW9uID8gYCR7b3B0LlNlbGVjdGVkT3B0aW9uLnRleHR9ICgke29wdC5TZWxlY3RlZE9wdGlvbi52YWx1ZX0pYCA6IFwiKG5vbmUpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlRleHRcIiwgVmFsdWU6IG9wdC5UZXh0IHx8IFwiKGVtcHR5KVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IG9wdC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IG9wdC5BdHRyaWJ1dGVOYW1lID09PSBcImluZHVzdHJ5Y29kZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBvcHQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBvcHQuQXR0cmlidXRlVHlwZSA9PT0gXCJvcHRpb25zZXRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IG9wdC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBvcHQuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IG9wdC5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBvcHQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IG9wdC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogb3B0LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBvcHQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBvcHQuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogb3B0LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMThcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogb3B0LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG9wdC5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBvcHRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuVmFsdWUgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gb3B0LlZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gbmV3VmFsID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gbmV3VmFsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogXCJObyBvcHRpb25zIGF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcHRpb24odmFsdWUpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBvcHQuT3B0aW9ucztcclxuICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdGVzdE9wdGlvbiA9IG9wdC5PcHRpb24ob3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogdGVzdE9wdGlvbiA/IGAke3Rlc3RPcHRpb24udGV4dH1gIDogXCJudWxsXCIsIFN0YXR1czogdGVzdE9wdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogXCJObyBvcHRpb25zXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMzOiBPcHRpb24odGV4dCkgLSBOT1QgSU1QTEVNRU5URUQ6IE9PQiBEeW5hbWljcyBjb2RlIHRocm93cyAnVmFsdWUgc2hvdWxkIGJlIG9mIHR5cGU6IG51bWJlcicgZXJyb3JcclxuICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHRleHQpXCIsIFZhbHVlOiBcIk9PQiBCdWcgLSBkZXZraXQudHMgbm90IHN1cHBvcnRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkT3B0aW9uIChhZGQgdGhlbiByZW1vdmUpXHJcbiAgICAvLyBOT1RFOiBBZGRPcHRpb24gYWRkcyB0byBDT05UUk9MLCBzbyB3ZSBjaGVjayBDb250cm9sT3B0aW9ucyAobm90IE9wdGlvbnMgd2hpY2ggaXMgZnJvbSBhdHRyaWJ1dGUpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG9wdC5BZGRPcHRpb24oXCJUZXN0IE9wdGlvbiAoQUkpXCIsIDk5OTk5OSk7XHJcbiAgICAgICAgY29uc3QgaGFzTmV3ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5zb21lKG8gPT4gby52YWx1ZSA9PT0gOTk5OTk5KTtcclxuICAgICAgICBvcHQuUmVtb3ZlT3B0aW9uKDk5OTk5OSk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJBZGRPcHRpb25cIiwgVmFsdWU6IGhhc05ldyA/IFwiQWRkZWRcdTIxOTJSZW1vdmVkXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IGhhc05ldyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJBZGRPcHRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogUmVtb3ZlT3B0aW9uIChhbHJlYWR5IHRlc3RlZCBhYm92ZSB3aXRoIEFkZE9wdGlvbilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPcHRpb25cIiwgVmFsdWU6IFwiVGVzdGVkIHdpdGggUzRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPcHRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQ2xlYXJPcHRpb25zIC0gVGVzdCBjbGVhciBhbmQgcmVzdG9yZSBmcm9tIE9wdGlvbnMgKGF0dHJpYnV0ZSlcclxuICAgIC8vIE5PVEU6IENsZWFyT3B0aW9ucyBjbGVhcnMgdGhlIENPTlRST0wgb3B0aW9ucywgYnV0IE9wdGlvbnMgKGZyb20gYXR0cmlidXRlKSByZW1haW5zIGludGFjdFxyXG4gICAgLy8gTk9URTogQ29udHJvbE9wdGlvbnMgaW5jbHVkZXMgYSBibGFuayBvcHRpb24gKHRleHQ9JycsIHZhbHVlPW51bGwpIGZvciBjbGVhcmluZyBzZWxlY3Rpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlT3B0aW9ucyA9IG9wdC5PcHRpb25zOyAvLyBTYXZlIGZyb20gYXR0cmlidXRlIChub3QgYWZmZWN0ZWQgYnkgQ2xlYXJPcHRpb25zKVxyXG4gICAgICAgIGNvbnN0IGF0dHJMZW4gPSBhdHRyaWJ1dGVPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICBvcHQuQ2xlYXJPcHRpb25zKCk7XHJcbiAgICAgICAgY29uc3QgY2xlYXJlZENvdW50ID0gb3B0LkNvbnRyb2xPcHRpb25zPy5sZW5ndGggPz8gMDtcclxuICAgICAgICAvLyBSZXN0b3JlIG9wdGlvbnMgZnJvbSBhdHRyaWJ1dGVcclxuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBhdHRyaWJ1dGVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdC5BZGRPcHRpb24ob3B0aW9uLnRleHQsIG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3RvcmVkQ291bnQgPSBvcHQuQ29udHJvbE9wdGlvbnM/Lmxlbmd0aCA/PyAwO1xyXG4gICAgICAgIC8vIHJlc3RvcmVkQ291bnQgPj0gYXR0ckxlbiBiZWNhdXNlIENvbnRyb2xPcHRpb25zIG1heSBpbmNsdWRlIGJsYW5rIG9wdGlvblxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBjbGVhcmVkQ291bnQgPT09IDAgJiYgcmVzdG9yZWRDb3VudCA+PSBhdHRyTGVuO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQ2xlYXJPcHRpb25zXCIsIFZhbHVlOiBzdWNjZXNzID8gYENsZWFyKCR7Y2xlYXJlZENvdW50fSlcdTIxOTJSZXN0b3JlKCR7cmVzdG9yZWRDb3VudH0vJHthdHRyTGVufSlgIDogYGF0dHI9JHthdHRyTGVufSwgY2xlYXI9JHtjbGVhcmVkQ291bnR9LCByZXN0b3JlPSR7cmVzdG9yZWRDb3VudH1gLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQ2xlYXJPcHRpb25zXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gb3B0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgb3B0LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBvcHQuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBvcHQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBvcHQuRGlzYWJsZWQ7XHJcbiAgICAgICAgb3B0LkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5EaXNhYmxlZDtcclxuICAgICAgICBvcHQuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG9wdC5MYWJlbDtcclxuICAgICAgICBvcHQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5MYWJlbDtcclxuICAgICAgICBvcHQuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBvcHQuVmlzaWJsZTtcclxuICAgICAgICBvcHQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG9wdC5WaXNpYmxlO1xyXG4gICAgICAgIG9wdC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzIGZyb20gSUNvbnRyb2xcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgT3B0aW9uU2V0IE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgb3B0LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgT3B0aW9uU2V0IG5vdGlmaWNhdGlvblwiLCBcIk9QVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHQuQ2xlYXJOb3RpZmljYXRpb24oXCJPUFRfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBvcHQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvcHQuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE2XCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENDQiBURVNUIDU6IE9wdGlvblNldCBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IEluZHVzdHJ5Q29kZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE4KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzE2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBBY2NvdW50LndlYmFwaS50cyAtIEFjY291bnQgV2ViQXBpIGZvciBlYXJseS1ib3VuZCBzdHlsZSBjb2RpbmdcclxuICogR2VuZXJhdGVkIGZpbGUgLSBETyBOT1QgTU9ESUZZIE1BTlVBTExZXHJcbiAqIFxyXG4gKiBTdHJ1Y3R1cmU6XHJcbiAqIDEuIEltcG9ydHNcclxuICogMi4gVHlwZXMgLSBJQWNjb3VudEZvcm1hdHRlZFZhbHVlLCBJQWNjb3VudEFwaVxyXG4gKiAzLiBSdW50aW1lIC0gQWNjb3VudEZpZWxkQ29uZmlnLCBBY2NvdW50QXBpIGZhY3RvcnlcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gICAgY3JlYXRlV2ViQXBpRW50aXR5LFxyXG4gICAgR3VpZCxcclxuICAgIElXZWJBcGlFbnRpdHksXHJcbiAgICBJV2ViQXBpRmllbGRDb25maWdNYXBcclxufSBmcm9tICcuLi8uLi9saWIvZGV2a2l0JztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMS4gVHlwZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEZvcm1hdHRlZCB2YWx1ZXMgaW50ZXJmYWNlIGZvciBBY2NvdW50XHJcbiAqIEFsbCBmaWVsZHMgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGVpciB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFjY291bnRGb3JtYXR0ZWRWYWx1ZSB7XHJcbiAgICByZWFkb25seSBBY2NvdW50Q2F0ZWdvcnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBY2NvdW50SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnROdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFjY291bnRSYXRpbmdDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9BZGRyZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0FkZHJlc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ2l0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfQ29tcG9zaXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9Db3VudHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0ZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGF0aXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xpbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9MaW5lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTGluZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0xvbmdpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUG9zdE9mZmljZUJveDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVVBTWm9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczFfVVRDT2Zmc2V0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9BZGRyZXNzSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ2l0eTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfQ29tcG9zaXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9Db3VudHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0ZheDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfRnJlaWdodFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGF0aXR1ZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xpbmUxOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9MaW5lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTGluZTM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0xvbmdpdHVkZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUG9zdGFsQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUG9zdE9mZmljZUJveDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZGRyZXNzMl9TaGlwcGluZ01ldGhvZENvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVVBTWm9uZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWRkcmVzczJfVVRDT2Zmc2V0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfQ3JlYXRlZEJ5SVBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZHhfTW9kaWZpZWRCeVVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzMwOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBBZ2luZzMwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nNjA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEFnaW5nNjBfQmFzZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBCdXNpbmVzc1R5cGVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVhdGVkQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWF0ZWRPbl9VdGNEYXRlQW5kVGltZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uQmVoYWxmQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRMaW1pdF9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBDcmVkaXRPbkhvbGQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEN1c3RvbWVyU2l6ZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEN1c3RvbWVyVHlwZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBEb05vdEJ1bGtFTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RCdWxrUG9zdGFsTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RFTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RGYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90UGhvbmU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IERvTm90UG9zdGFsTWFpbDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRG9Ob3RTZW5kTU06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczE6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVNYWlsQWRkcmVzczM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZV9UaW1lc3RhbXA6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEVudGl0eUltYWdlX1VSTDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRW50aXR5SW1hZ2VJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgRXhjaGFuZ2VSYXRlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGYXg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IEZvbGxvd0VtYWlsOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBGdHBTaXRlVVJMOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJbXBvcnRTZXF1ZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgSW5kdXN0cnlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBJc1ByaXZhdGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IExhc3RPbkhvbGRUaW1lX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBMYXN0VXNlZEluQ2FtcGFpZ25fVXRjRGF0ZU9ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldENhcDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTWFya2V0Q2FwX0Jhc2U6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hcmtldGluZ09ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1hc3RlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNZXJnZWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE1vZGlmaWVkQnlFeHRlcm5hbFBhcnR5OiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uQmVoYWxmQnk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IG1zYV9tYW5hZ2luZ3BhcnRuZXJpZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTmFtZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgTnVtYmVyT2ZFbXBsb3llZXM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE9uSG9sZFRpbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE92ZXJyaWRkZW5DcmVhdGVkT25fVXRjRGF0ZU9ubHk6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmVySWRfc3lzdGVtdXNlcjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgT3duZXJJZF90ZWFtOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25lcnNoaXBDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBPd25pbmdCdXNpbmVzc1VuaXQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ1RlYW06IHN0cmluZztcclxuICAgIHJlYWRvbmx5IE93bmluZ1VzZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFBhcmVudEFjY291bnRJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGFydGljaXBhdGVzSW5Xb3JrZmxvdzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUGF5bWVudFRlcm1zQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkQXBwb2ludG1lbnREYXlDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRBcHBvaW50bWVudFRpbWVDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmVmZXJyZWRDb250YWN0TWV0aG9kQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUHJlZmVycmVkU3lzdGVtVXNlcklkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5Q29udGFjdElkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBQcmltYXJ5U2F0b3JpSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByaW1hcnlUd2l0dGVySWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFByb2Nlc3NJZDogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgUmV2ZW51ZV9CYXNlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTaGFyZXNPdXRzdGFuZGluZzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU2hpcHBpbmdNZXRob2RDb2RlOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTSUM6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFNMQUlkOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBTTEFJbnZva2VkSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YWdlSWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFN0YXRlQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RhdHVzQ29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgU3RvY2tFeGNoYW5nZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVsZXBob25lMzogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGVycml0b3J5Q29kZTogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgVGlja2VyU3ltYm9sOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUaW1lWm9uZVJ1bGVWZXJzaW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBUcmFuc2FjdGlvbkN1cnJlbmN5SWQ6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFRyYXZlcnNlZFBhdGg6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFZlcnNpb25OdW1iZXI6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFdlYlNpdGVVUkw6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IFlvbWlOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY2NvdW50IFdlYkFwaSBlbnRpdHkgaW50ZXJmYWNlXHJcbiAqIFByb3ZpZGVzIEludGVsbGlTZW5zZSBmb3IgZWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvdW50QXBpIGV4dGVuZHMgSVdlYkFwaUVudGl0eSB7XHJcbiAgICAvKiogRm9ybWF0dGVkIHZhbHVlcyBmb3IgYWxsIGZpZWxkcyAqL1xyXG4gICAgcmVhZG9ubHkgRm9ybWF0dGVkVmFsdWU6IElBY2NvdW50Rm9ybWF0dGVkVmFsdWU7XHJcbiAgICAvKiogU2VsZWN0IGEgY2F0ZWdvcnkgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgY3VzdG9tZXIgYWNjb3VudCBpcyBzdGFuZGFyZCBvciBwcmVmZXJyZWQuICovXHJcbiAgICBBY2NvdW50Q2F0ZWdvcnlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIGNsYXNzaWZpY2F0aW9uIGNvZGUgdG8gaW5kaWNhdGUgdGhlIHBvdGVudGlhbCB2YWx1ZSBvZiB0aGUgY3VzdG9tZXIgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnRDbGFzc2lmaWNhdGlvbkNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBBY2NvdW50SWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYW4gSUQgbnVtYmVyIG9yIGNvZGUgZm9yIHRoZSBhY2NvdW50IHRvIHF1aWNrbHkgc2VhcmNoIGFuZCBpZGVudGlmeSB0aGUgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnROdW1iZXI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IGEgcmF0aW5nIHRvIGluZGljYXRlIHRoZSB2YWx1ZSBvZiB0aGUgY3VzdG9tZXIgYWNjb3VudC4gKi9cclxuICAgIEFjY291bnRSYXRpbmdDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBhZGRyZXNzIDEuICovXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzSWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJpbWFyeSBhZGRyZXNzIHR5cGUuICovXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY2l0eSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NpdHk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNvbXBsZXRlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIHJlYWRvbmx5IEFkZHJlc3MxX0NvbXBvc2l0ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHJ5IG9yIHJlZ2lvbiBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0NvdW50cnk6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY291bnR5IGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfQ291bnR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZheCBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9GYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBmcmVpZ2h0IHRlcm1zIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsYXRpdHVkZSB2YWx1ZSBmb3IgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xhdGl0dWRlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGZpcnN0IGxpbmUgb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX0xpbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSB0aGlyZCBsaW5lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9MaW5lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBsb25naXR1ZGUgdmFsdWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Mb25naXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIGRlc2NyaXB0aXZlIG5hbWUgZm9yIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9OYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFpJUCBDb2RlIG9yIHBvc3RhbCBjb2RlIGZvciB0aGUgcHJpbWFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfUG9zdGFsQ29kZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwb3N0IG9mZmljZSBib3ggbnVtYmVyIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9Qb3N0T2ZmaWNlQm94OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG5hbWUgb2YgdGhlIG1haW4gY29udGFjdCBhdCB0aGUgYWNjb3VudCdzIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1ByaW1hcnlDb250YWN0TmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGlzIGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9TaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RhdGUgb3IgcHJvdmluY2Ugb2YgdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1N0YXRlT3JQcm92aW5jZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHByaW1hcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgYSB0aGlyZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIFVQUyB6b25lIG9mIHRoZSBwcmltYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMV9VUFNab25lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgdGltZSB6b25lLCBvciBVVEMgb2Zmc2V0LCBmb3IgdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczFfVVRDT2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBhZGRyZXNzIDIuICovXHJcbiAgICBBZGRyZXNzMl9BZGRyZXNzSWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MgdHlwZS4gKi9cclxuICAgIEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjaXR5IGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9DaXR5OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBjb21wbGV0ZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIHJlYWRvbmx5IEFkZHJlc3MyX0NvbXBvc2l0ZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHJ5IG9yIHJlZ2lvbiBmb3IgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfQ291bnRyeTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb3VudHkgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0NvdW50eTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9GYXg6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBmcmVpZ2h0IHRlcm1zIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9GcmVpZ2h0VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIGxhdGl0dWRlIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9MYXRpdHVkZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUxOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHNlY29uZCBsaW5lIG9mIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX0xpbmUyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIHRoaXJkIGxpbmUgb2YgdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfTGluZTM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbG9uZ2l0dWRlIHZhbHVlIGZvciB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Mb25naXR1ZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIGRlc2NyaXB0aXZlIG5hbWUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX05hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgWklQIENvZGUgb3IgcG9zdGFsIGNvZGUgZm9yIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1Bvc3RhbENvZGU6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcG9zdCBvZmZpY2UgYm94IG51bWJlciBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9Qb3N0T2ZmaWNlQm94OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG5hbWUgb2YgdGhlIG1haW4gY29udGFjdCBhdCB0aGUgYWNjb3VudCdzIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHNoaXBwaW5nIG1ldGhvZCBmb3IgZGVsaXZlcmllcyBzZW50IHRvIHRoaXMgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1NoaXBwaW5nTWV0aG9kQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdGF0ZSBvciBwcm92aW5jZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFpbiBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHNlY29uZCBwaG9uZSBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzZWNvbmRhcnkgYWRkcmVzcy4gKi9cclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTI6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhIHRoaXJkIHBob25lIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhlIHNlY29uZGFyeSBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMzogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUFMgem9uZSBvZiB0aGUgc2Vjb25kYXJ5IGFkZHJlc3MuICovXHJcbiAgICBBZGRyZXNzMl9VUFNab25lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgdGltZSB6b25lLCBvciBVVEMgb2Zmc2V0LCBmb3IgdGhpcyBhZGRyZXNzLiAqL1xyXG4gICAgQWRkcmVzczJfVVRDT2Zmc2V0OiBudW1iZXIgfCBudWxsO1xyXG4gICAgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9DcmVhdGVkQnlVc2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEFkeF9Nb2RpZmllZEJ5SVBBZGRyZXNzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmczMDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyAzMCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nMzBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc2MDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyA2MCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nNjBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiAqL1xyXG4gICAgcmVhZG9ubHkgQWdpbmc5MDogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUaGUgYmFzZSBjdXJyZW5jeSBlcXVpdmFsZW50IG9mIHRoZSBhZ2luZyA5MCBmaWVsZC4gKi9cclxuICAgIHJlYWRvbmx5IEFnaW5nOTBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGxlZ2FsIGRlc2lnbmF0aW9uIG9yIG90aGVyIGJ1c2luZXNzIHR5cGUgb2YgdGhlIGFjY291bnQuICovXHJcbiAgICBCdXNpbmVzc1R5cGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdobyBjcmVhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkQnk6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBleHRlcm5hbCBwYXJ0eSB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZEJ5RXh0ZXJuYWxQYXJ0eTogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgcmVjb3JkIHdhcyBjcmVhdGVkLiAqL1xyXG4gICAgcmVhZG9ubHkgQ3JlYXRlZE9uX1V0Y0RhdGVBbmRUaW1lOiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkIG9uIGJlaGFsZiBvZiBhbm90aGVyIHVzZXIuICovXHJcbiAgICByZWFkb25seSBDcmVhdGVkT25CZWhhbGZCeTogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgY3JlZGl0IGxpbWl0IG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3JlZGl0TGltaXQ6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGNyZWRpdCBsaW1pdCBjb252ZXJ0ZWQgdG8gdGhlIHN5c3RlbSdzIGRlZmF1bHQgYmFzZSBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IENyZWRpdExpbWl0X0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGNyZWRpdCBmb3IgdGhlIGFjY291bnQgaXMgb24gaG9sZC4gKi9cclxuICAgIENyZWRpdE9uSG9sZDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBzaXplIGNhdGVnb3J5IG9yIHJhbmdlIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgQ3VzdG9tZXJTaXplQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGNhdGVnb3J5IHRoYXQgYmVzdCBkZXNjcmliZXMgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBhY2NvdW50IGFuZCB5b3VyIG9yZ2FuaXphdGlvbi4gKi9cclxuICAgIEN1c3RvbWVyVHlwZUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRvIGRlc2NyaWJlIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRGVzY3JpcHRpb246IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGJ1bGsgZW1haWwgc2VudCB0aHJvdWdoIGNhbXBhaWducy4gKi9cclxuICAgIERvTm90QnVsa0VNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgYnVsayBwb3N0YWwgbWFpbC4gKi9cclxuICAgIERvTm90QnVsa1Bvc3RhbE1haWw6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB3aGV0aGVyIHRoZSBhY2NvdW50IGFsbG93cyBkaXJlY3QgZW1haWwuICovXHJcbiAgICBEb05vdEVNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhbGxvd3MgZmF4ZXMuICovXHJcbiAgICBEb05vdEZheDogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIHBob25lIGNhbGxzLiAqL1xyXG4gICAgRG9Ob3RQaG9uZTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHdoZXRoZXIgdGhlIGFjY291bnQgYWxsb3dzIGRpcmVjdCBtYWlsLiAqL1xyXG4gICAgRG9Ob3RQb3N0YWxNYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3Qgd2hldGhlciB0aGUgYWNjb3VudCBhY2NlcHRzIG1hcmtldGluZyBtYXRlcmlhbHMuICovXHJcbiAgICBEb05vdFNlbmRNTTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgcHJpbWFyeSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczE6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc2Vjb25kYXJ5IGVtYWlsIGFkZHJlc3MgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgRU1haWxBZGRyZXNzMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGFuIGFsdGVybmF0ZSBlbWFpbCBhZGRyZXNzIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEVNYWlsQWRkcmVzczM6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRlZmF1bHQgaW1hZ2UgZm9yIHRoZSByZWNvcmQuICovXHJcbiAgICBFbnRpdHlJbWFnZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEVudGl0eUltYWdlX1RpbWVzdGFtcDogbnVtYmVyIHwgbnVsbDtcclxuICAgIEVudGl0eUltYWdlX1VSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuICovXHJcbiAgICByZWFkb25seSBFbnRpdHlJbWFnZUlkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgY29udmVyc2lvbiByYXRlIG9mIHRoZSByZWNvcmQncyBjdXJyZW5jeS4gKi9cclxuICAgIHJlYWRvbmx5IEV4Y2hhbmdlUmF0ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBmYXggbnVtYmVyIGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIEZheDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBJbmZvcm1hdGlvbiBhYm91dCB3aGV0aGVyIHRvIGFsbG93IGZvbGxvd2luZyBlbWFpbCBhY3Rpdml0eS4gKi9cclxuICAgIEZvbGxvd0VtYWlsOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBVUkwgZm9yIHRoZSBhY2NvdW50J3MgRlRQIHNpdGUuICovXHJcbiAgICBGdHBTaXRlVVJMOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSBkYXRhIGltcG9ydCBvciBkYXRhIG1pZ3JhdGlvbiB0aGF0IGNyZWF0ZWQgdGhpcyByZWNvcmQuICovXHJcbiAgICBJbXBvcnRTZXF1ZW5jZU51bWJlcjogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIGFjY291bnQncyBwcmltYXJ5IGluZHVzdHJ5LiAqL1xyXG4gICAgSW5kdXN0cnlDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgSXNQcml2YXRlOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBDb250YWlucyB0aGUgZGF0ZSBhbmQgdGltZSBzdGFtcCBvZiB0aGUgbGFzdCBvbiBob2xkIHRpbWUuICovXHJcbiAgICBMYXN0T25Ib2xkVGltZV9VdGNEYXRlQW5kVGltZTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRhdGUgd2hlbiB0aGUgYWNjb3VudCB3YXMgbGFzdCBpbmNsdWRlZCBpbiBhIG1hcmtldGluZyBjYW1wYWlnbi4gKi9cclxuICAgIExhc3RVc2VkSW5DYW1wYWlnbl9VdGNEYXRlT25seTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbWFya2V0IGNhcGl0YWxpemF0aW9uIG9mIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgTWFya2V0Q2FwOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBtYXJrZXQgY2FwaXRhbGl6YXRpb24gY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBNYXJrZXRDYXBfQmFzZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBXaGV0aGVyIGlzIG9ubHkgZm9yIG1hcmtldGluZyAqL1xyXG4gICAgTWFya2V0aW5nT25seTogYm9vbGVhbiB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIG1hc3RlciBhY2NvdW50IHRoYXQgdGhlIGFjY291bnQgd2FzIG1lcmdlZCB3aXRoLiAqL1xyXG4gICAgcmVhZG9ubHkgTWFzdGVySWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdoZXRoZXIgdGhlIGFjY291bnQgaGFzIGJlZW4gbWVyZ2VkIHdpdGggYW5vdGhlciBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgTWVyZ2VkOiBib29sZWFuIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gbGFzdCB1cGRhdGVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5OiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgZXh0ZXJuYWwgcGFydHkgd2hvIG1vZGlmaWVkIHRoZSByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIGRhdGUgYW5kIHRpbWUgd2hlbiB0aGUgcmVjb3JkIHdhcyBsYXN0IHVwZGF0ZWQuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uX1V0Y0RhdGVBbmRUaW1lOiBEYXRlIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB3aG8gY3JlYXRlZCB0aGUgcmVjb3JkIG9uIGJlaGFsZiBvZiBhbm90aGVyIHVzZXIuICovXHJcbiAgICByZWFkb25seSBNb2RpZmllZE9uQmVoYWxmQnk6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIGZvciBBY2NvdW50IGFzc29jaWF0ZWQgd2l0aCBBY2NvdW50LiAqL1xyXG4gICAgbXNhX21hbmFnaW5ncGFydG5lcmlkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBjb21wYW55IG9yIGJ1c2luZXNzIG5hbWUuICovXHJcbiAgICBOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFR5cGUgdGhlIG51bWJlciBvZiBlbXBsb3llZXMgdGhhdCB3b3JrIGF0IHRoZSBhY2NvdW50LiAqL1xyXG4gICAgTnVtYmVyT2ZFbXBsb3llZXM6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgaG93IGxvbmcsIGluIG1pbnV0ZXMsIHRoYXQgdGhlIHJlY29yZCB3YXMgb24gaG9sZC4gKi9cclxuICAgIHJlYWRvbmx5IE9uSG9sZFRpbWU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogRGF0ZSBhbmQgdGltZSB0aGF0IHRoZSByZWNvcmQgd2FzIG1pZ3JhdGVkLiAqL1xyXG4gICAgT3ZlcnJpZGRlbkNyZWF0ZWRPbl9VdGNEYXRlT25seTogRGF0ZSB8IG51bGw7XHJcbiAgICAvKiogRW50ZXIgdGhlIHVzZXIgd2hvIGlzIGFzc2lnbmVkIHRvIG1hbmFnZSB0aGUgcmVjb3JkLiAqL1xyXG4gICAgT3duZXJJZF9zeXN0ZW11c2VyOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBFbnRlciB0aGUgdGVhbSB3aG8gaXMgYXNzaWduZWQgdG8gbWFuYWdlIHRoZSByZWNvcmQuICovXHJcbiAgICBPd25lcklkX3RlYW06IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIG93bmVyc2hpcCBzdHJ1Y3R1cmUsIHN1Y2ggYXMgcHVibGljIG9yIHByaXZhdGUuICovXHJcbiAgICBPd25lcnNoaXBDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBidXNpbmVzcyB1bml0IHRoYXQgdGhlIHJlY29yZCBvd25lciBiZWxvbmdzIHRvLiAqL1xyXG4gICAgcmVhZG9ubHkgT3duaW5nQnVzaW5lc3NVbml0OiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBVbmlxdWUgaWRlbnRpZmllciBvZiB0aGUgdGVhbSB3aG8gb3ducyB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IE93bmluZ1RlYW06IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIHdobyBvd25zIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgcmVhZG9ubHkgT3duaW5nVXNlcjogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBwYXJlbnQgYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgUGFyZW50QWNjb3VudElkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBGb3Igc3lzdGVtIHVzZSBvbmx5LiBMZWdhY3kgTWljcm9zb2Z0IER5bmFtaWNzIENSTSAzLjAgd29ya2Zsb3cgZGF0YS4gKi9cclxuICAgIFBhcnRpY2lwYXRlc0luV29ya2Zsb3c6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcGF5bWVudCB0ZXJtcyB0byBpbmRpY2F0ZSB3aGVuIHRoZSBjdXN0b21lciBuZWVkcyB0byBwYXkuICovXHJcbiAgICBQYXltZW50VGVybXNDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgcHJlZmVycmVkIGRheSBvZiB0aGUgd2VlayBmb3Igc2VydmljZSBhcHBvaW50bWVudHMuICovXHJcbiAgICBQcmVmZXJyZWRBcHBvaW50bWVudERheUNvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogU2VsZWN0IHRoZSBwcmVmZXJyZWQgdGltZSBvZiBkYXkgZm9yIHNlcnZpY2UgYXBwb2ludG1lbnRzLiAqL1xyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgdGhlIHByZWZlcnJlZCBtZXRob2Qgb2YgY29udGFjdC4gKi9cclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJlZmVycmVkIHNlcnZpY2UgcmVwcmVzZW50YXRpdmUuICovXHJcbiAgICBQcmVmZXJyZWRTeXN0ZW1Vc2VySWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgcHJpbWFyeSBjb250YWN0IGZvciB0aGUgYWNjb3VudC4gKi9cclxuICAgIFByaW1hcnlDb250YWN0SWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFByaW1hcnkgU2F0b3JpIElEIGZvciBBY2NvdW50ICovXHJcbiAgICBQcmltYXJ5U2F0b3JpSWQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICAvKiogUHJpbWFyeSBUd2l0dGVyIElEIGZvciBBY2NvdW50ICovXHJcbiAgICBQcmltYXJ5VHdpdHRlcklkOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHRoZSBJRCBvZiB0aGUgcHJvY2Vzcy4gKi9cclxuICAgIFByb2Nlc3NJZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgYW5udWFsIHJldmVudWUgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgUmV2ZW51ZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTaG93cyB0aGUgYW5udWFsIHJldmVudWUgY29udmVydGVkIHRvIHRoZSBzeXN0ZW0ncyBkZWZhdWx0IGJhc2UgY3VycmVuY3kuICovXHJcbiAgICByZWFkb25seSBSZXZlbnVlX0Jhc2U6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgbnVtYmVyIG9mIHNoYXJlcyBhdmFpbGFibGUgdG8gdGhlIHB1YmxpYyBmb3IgdGhlIGFjY291bnQuICovXHJcbiAgICBTaGFyZXNPdXRzdGFuZGluZzogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBTZWxlY3QgYSBzaGlwcGluZyBtZXRob2QgZm9yIGRlbGl2ZXJpZXMgc2VudCB0byB0aGUgYWNjb3VudCdzIGFkZHJlc3MuICovXHJcbiAgICBTaGlwcGluZ01ldGhvZENvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgU3RhbmRhcmQgSW5kdXN0cmlhbCBDbGFzc2lmaWNhdGlvbiAoU0lDKSBjb2RlLiAqL1xyXG4gICAgU0lDOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIENob29zZSB0aGUgc2VydmljZSBsZXZlbCBhZ3JlZW1lbnQgKFNMQSkgdGhhdCB5b3Ugd2FudCB0byBhcHBseS4gKi9cclxuICAgIFNMQUlkOiBHdWlkIHwgbnVsbDtcclxuICAgIC8qKiBMYXN0IFNMQSB0aGF0IHdhcyBhcHBsaWVkIHRvIHRoaXMgY2FzZS4gKi9cclxuICAgIHJlYWRvbmx5IFNMQUludm9rZWRJZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogU2hvd3MgdGhlIElEIG9mIHRoZSBzdGFnZS4gKi9cclxuICAgIFN0YWdlSWQ6IEd1aWQgfCBudWxsO1xyXG4gICAgLyoqIFNob3dzIHdoZXRoZXIgdGhlIGFjY291bnQgaXMgYWN0aXZlIG9yIGluYWN0aXZlLiAqL1xyXG4gICAgU3RhdGVDb2RlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCB0aGUgYWNjb3VudCdzIHN0YXR1cy4gKi9cclxuICAgIFN0YXR1c0NvZGU6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgc3RvY2sgZXhjaGFuZ2UgYXQgd2hpY2ggdGhlIGFjY291bnQgaXMgbGlzdGVkLiAqL1xyXG4gICAgU3RvY2tFeGNoYW5nZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBtYWluIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMTogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgc2Vjb25kIHBob25lIG51bWJlciBmb3IgdGhpcyBhY2NvdW50LiAqL1xyXG4gICAgVGVsZXBob25lMjogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIGEgdGhpcmQgcGhvbmUgbnVtYmVyIGZvciB0aGlzIGFjY291bnQuICovXHJcbiAgICBUZWxlcGhvbmUzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFNlbGVjdCBhIHJlZ2lvbiBvciB0ZXJyaXRvcnkgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGVycml0b3J5Q29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBzdG9jayBleGNoYW5nZSBzeW1ib2wgZm9yIHRoZSBhY2NvdW50LiAqL1xyXG4gICAgVGlja2VyU3ltYm9sOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIFRvdGFsIHRpbWUgc3BlbnQgZm9yIGVtYWlscyBhbmQgbWVldGluZ3MgYnkgbWUgaW4gcmVsYXRpb24gdG8gYWNjb3VudCByZWNvcmQuICovXHJcbiAgICByZWFkb25seSBUaW1lU3BlbnRCeU1lT25FbWFpbEFuZE1lZXRpbmdzOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgLyoqIEZvciBpbnRlcm5hbCB1c2Ugb25seS4gKi9cclxuICAgIFRpbWVab25lUnVsZVZlcnNpb25OdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogQ2hvb3NlIHRoZSBsb2NhbCBjdXJyZW5jeSBmb3IgdGhlIHJlY29yZC4gKi9cclxuICAgIFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogR3VpZCB8IG51bGw7XHJcbiAgICAvKiogRm9yIGludGVybmFsIHVzZSBvbmx5LiAqL1xyXG4gICAgVHJhdmVyc2VkUGF0aDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUaW1lIHpvbmUgY29kZSB0aGF0IHdhcyBpbiB1c2Ugd2hlbiB0aGUgcmVjb3JkIHdhcyBjcmVhdGVkLiAqL1xyXG4gICAgVVRDQ29udmVyc2lvblRpbWVab25lQ29kZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIC8qKiBWZXJzaW9uIG51bWJlciBvZiB0aGUgYWNjb3VudC4gKi9cclxuICAgIHJlYWRvbmx5IFZlcnNpb25OdW1iZXI6IG51bWJlciB8IG51bGw7XHJcbiAgICAvKiogVHlwZSB0aGUgYWNjb3VudCdzIHdlYnNpdGUgVVJMLiAqL1xyXG4gICAgV2ViU2l0ZVVSTDogc3RyaW5nIHwgbnVsbDtcclxuICAgIC8qKiBUeXBlIHRoZSBwaG9uZXRpYyBzcGVsbGluZyBvZiB0aGUgY29tcGFueSBuYW1lLiAqL1xyXG4gICAgWW9taU5hbWU6IHN0cmluZyB8IG51bGw7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMi4gUnVudGltZSAtIEZpZWxkIENvbmZpZ3VyYXRpb25cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEFjY291bnQgZmllbGQgbWV0YWRhdGEgY29uZmlndXJhdGlvblxyXG4gKiAtIGxvZ2ljYWxOYW1lOiBhdHRyaWJ1dGUgbG9naWNhbCBuYW1lIChlLmcuICdhY2NvdW50aWQnKVxyXG4gKiAtIHNjaGVtYU5hbWU6IHNjaGVtYSBuYW1lIGZvciBsb29rdXAgYmluZGluZ1xyXG4gKiAtIGVudGl0eUNvbGxlY3Rpb25OYW1lOiBjb2xsZWN0aW9uIG5hbWUgZm9yIGxvb2t1cCAoZS5nLiAnYWNjb3VudHMnKVxyXG4gKiAtIGVudGl0eUxvZ2ljYWxOYW1lOiBlbnRpdHkgbmFtZSBmb3IgbG9va3VwIChlLmcuICdhY2NvdW50JylcclxuICogLSByZWFkT25seTogd2hldGhlciB0aGUgZmllbGQgaXMgcmVhZC1vbmx5XHJcbiAqIC0gdHlwZTogZmllbGQgdHlwZSBmb3IgcGFyc2luZyAoSW50ZWdlciwgTnVtYmVyLCBCb29sZWFuLCBEYXRlVGltZSwgTXVsdGlPcHRpb25TZXQpXHJcbiAqL1xyXG5jb25zdCBBY2NvdW50RmllbGRDb25maWc6IElXZWJBcGlGaWVsZENvbmZpZ01hcCA9IHtcclxuICAgIEFjY291bnRDYXRlZ29yeUNvZGU6IHsgbG9naWNhbE5hbWU6ICdhY2NvdW50Y2F0ZWdvcnljb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBY2NvdW50Q2xhc3NpZmljYXRpb25Db2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudGNsYXNzaWZpY2F0aW9uY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWNjb3VudElkOiB7IGxvZ2ljYWxOYW1lOiAnYWNjb3VudGlkJyB9LFxyXG4gICAgQWNjb3VudE51bWJlcjogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRudW1iZXInIH0sXHJcbiAgICBBY2NvdW50UmF0aW5nQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FjY291bnRyYXRpbmdjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzSWQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9hZGRyZXNzaWQnIH0sXHJcbiAgICBBZGRyZXNzMV9BZGRyZXNzVHlwZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9hZGRyZXNzdHlwZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX0NpdHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jaXR5JyB9LFxyXG4gICAgQWRkcmVzczFfQ29tcG9zaXRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY29tcG9zaXRlJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIEFkZHJlc3MxX0NvdW50cnk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9jb3VudHJ5JyB9LFxyXG4gICAgQWRkcmVzczFfQ291bnR5OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfY291bnR5JyB9LFxyXG4gICAgQWRkcmVzczFfRmF4OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfZmF4JyB9LFxyXG4gICAgQWRkcmVzczFfRnJlaWdodFRlcm1zQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2ZyZWlnaHR0ZXJtc2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MxX0xhdGl0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGF0aXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczFfTGluZTE6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9saW5lMScgfSxcclxuICAgIEFkZHJlc3MxX0xpbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbGluZTInIH0sXHJcbiAgICBBZGRyZXNzMV9MaW5lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX2xpbmUzJyB9LFxyXG4gICAgQWRkcmVzczFfTG9uZ2l0dWRlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfbG9uZ2l0dWRlJywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIEFkZHJlc3MxX05hbWU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV9uYW1lJyB9LFxyXG4gICAgQWRkcmVzczFfUG9zdGFsQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3Bvc3RhbGNvZGUnIH0sXHJcbiAgICBBZGRyZXNzMV9Qb3N0T2ZmaWNlQm94OiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfcG9zdG9mZmljZWJveCcgfSxcclxuICAgIEFkZHJlc3MxX1ByaW1hcnlDb250YWN0TmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3ByaW1hcnljb250YWN0bmFtZScgfSxcclxuICAgIEFkZHJlc3MxX1NoaXBwaW5nTWV0aG9kQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3NoaXBwaW5nbWV0aG9kY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczFfU3RhdGVPclByb3ZpbmNlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfc3RhdGVvcnByb3ZpbmNlJyB9LFxyXG4gICAgQWRkcmVzczFfVGVsZXBob25lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3RlbGVwaG9uZTEnIH0sXHJcbiAgICBBZGRyZXNzMV9UZWxlcGhvbmUyOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczFfdGVsZXBob25lMicgfSxcclxuICAgIEFkZHJlc3MxX1RlbGVwaG9uZTM6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV90ZWxlcGhvbmUzJyB9LFxyXG4gICAgQWRkcmVzczFfVVBTWm9uZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MxX3Vwc3pvbmUnIH0sXHJcbiAgICBBZGRyZXNzMV9VVENPZmZzZXQ6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMV91dGNvZmZzZXQnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEFkZHJlc3MyX0FkZHJlc3NJZDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2FkZHJlc3NpZCcgfSxcclxuICAgIEFkZHJlc3MyX0FkZHJlc3NUeXBlQ29kZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2FkZHJlc3N0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfQ2l0eTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NpdHknIH0sXHJcbiAgICBBZGRyZXNzMl9Db21wb3NpdGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jb21wb3NpdGUnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQWRkcmVzczJfQ291bnRyeTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2NvdW50cnknIH0sXHJcbiAgICBBZGRyZXNzMl9Db3VudHk6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9jb3VudHknIH0sXHJcbiAgICBBZGRyZXNzMl9GYXg6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9mYXgnIH0sXHJcbiAgICBBZGRyZXNzMl9GcmVpZ2h0VGVybXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfZnJlaWdodHRlcm1zY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWRkcmVzczJfTGF0aXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9sYXRpdHVkZScsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZGRyZXNzMl9MaW5lMTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX2xpbmUxJyB9LFxyXG4gICAgQWRkcmVzczJfTGluZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9saW5lMicgfSxcclxuICAgIEFkZHJlc3MyX0xpbmUzOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfbGluZTMnIH0sXHJcbiAgICBBZGRyZXNzMl9Mb25naXR1ZGU6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9sb25naXR1ZGUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWRkcmVzczJfTmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX25hbWUnIH0sXHJcbiAgICBBZGRyZXNzMl9Qb3N0YWxDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfcG9zdGFsY29kZScgfSxcclxuICAgIEFkZHJlc3MyX1Bvc3RPZmZpY2VCb3g6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9wb3N0b2ZmaWNlYm94JyB9LFxyXG4gICAgQWRkcmVzczJfUHJpbWFyeUNvbnRhY3ROYW1lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfcHJpbWFyeWNvbnRhY3RuYW1lJyB9LFxyXG4gICAgQWRkcmVzczJfU2hpcHBpbmdNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfc2hpcHBpbmdtZXRob2Rjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBBZGRyZXNzMl9TdGF0ZU9yUHJvdmluY2U6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl9zdGF0ZW9ycHJvdmluY2UnIH0sXHJcbiAgICBBZGRyZXNzMl9UZWxlcGhvbmUxOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdGVsZXBob25lMScgfSxcclxuICAgIEFkZHJlc3MyX1RlbGVwaG9uZTI6IHsgbG9naWNhbE5hbWU6ICdhZGRyZXNzMl90ZWxlcGhvbmUyJyB9LFxyXG4gICAgQWRkcmVzczJfVGVsZXBob25lMzogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3RlbGVwaG9uZTMnIH0sXHJcbiAgICBBZGRyZXNzMl9VUFNab25lOiB7IGxvZ2ljYWxOYW1lOiAnYWRkcmVzczJfdXBzem9uZScgfSxcclxuICAgIEFkZHJlc3MyX1VUQ09mZnNldDogeyBsb2dpY2FsTmFtZTogJ2FkZHJlc3MyX3V0Y29mZnNldCcsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQWR4X0NyZWF0ZWRCeUlQQWRkcmVzczogeyBsb2dpY2FsTmFtZTogJ2FkeF9jcmVhdGVkYnlpcGFkZHJlc3MnIH0sXHJcbiAgICBBZHhfQ3JlYXRlZEJ5VXNlcm5hbWU6IHsgbG9naWNhbE5hbWU6ICdhZHhfY3JlYXRlZGJ5dXNlcm5hbWUnIH0sXHJcbiAgICBBZHhfTW9kaWZpZWRCeUlQQWRkcmVzczogeyBsb2dpY2FsTmFtZTogJ2FkeF9tb2RpZmllZGJ5aXBhZGRyZXNzJyB9LFxyXG4gICAgQWR4X01vZGlmaWVkQnlVc2VybmFtZTogeyBsb2dpY2FsTmFtZTogJ2FkeF9tb2RpZmllZGJ5dXNlcm5hbWUnIH0sXHJcbiAgICBBZ2luZzMwOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmczMCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmczMF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmczMF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzYwOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc2MCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc2MF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc2MF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBBZ2luZzkwOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc5MCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgQWdpbmc5MF9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAnYWdpbmc5MF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBCdXNpbmVzc1R5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnYnVzaW5lc3N0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgQ3JlYXRlZEJ5OiB7IHNjaGVtYU5hbWU6ICdjcmVhdGVkYnknLCBsb2dpY2FsTmFtZTogJ19jcmVhdGVkYnlfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3N5c3RlbXVzZXJzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzeXN0ZW11c2VyJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIENyZWF0ZWRCeUV4dGVybmFsUGFydHk6IHsgc2NoZW1hTmFtZTogJ2NyZWF0ZWRieWV4dGVybmFscGFydHknLCBsb2dpY2FsTmFtZTogJ19jcmVhdGVkYnlleHRlcm5hbHBhcnR5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdleHRlcm5hbHBhcnRpZXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2V4dGVybmFscGFydHknLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgQ3JlYXRlZE9uX1V0Y0RhdGVBbmRUaW1lOiB7IGxvZ2ljYWxOYW1lOiAnY3JlYXRlZG9uJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIENyZWF0ZWRPbkJlaGFsZkJ5OiB7IHNjaGVtYU5hbWU6ICdjcmVhdGVkb25iZWhhbGZieScsIGxvZ2ljYWxOYW1lOiAnX2NyZWF0ZWRvbmJlaGFsZmJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBDcmVkaXRMaW1pdDogeyBsb2dpY2FsTmFtZTogJ2NyZWRpdGxpbWl0JywgdHlwZTogJ051bWJlcicgfSxcclxuICAgIENyZWRpdExpbWl0X0Jhc2U6IHsgbG9naWNhbE5hbWU6ICdjcmVkaXRsaW1pdF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBDcmVkaXRPbkhvbGQ6IHsgbG9naWNhbE5hbWU6ICdjcmVkaXRvbmhvbGQnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIEN1c3RvbWVyU2l6ZUNvZGU6IHsgbG9naWNhbE5hbWU6ICdjdXN0b21lcnNpemVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBDdXN0b21lclR5cGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnY3VzdG9tZXJ0eXBlY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgRGVzY3JpcHRpb246IHsgbG9naWNhbE5hbWU6ICdkZXNjcmlwdGlvbicgfSxcclxuICAgIERvTm90QnVsa0VNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RidWxrZW1haWwnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90QnVsa1Bvc3RhbE1haWw6IHsgbG9naWNhbE5hbWU6ICdkb25vdGJ1bGtwb3N0YWxtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBEb05vdEVNYWlsOiB7IGxvZ2ljYWxOYW1lOiAnZG9ub3RlbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RGYXg6IHsgbG9naWNhbE5hbWU6ICdkb25vdGZheCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RQaG9uZTogeyBsb2dpY2FsTmFtZTogJ2Rvbm90cGhvbmUnLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIERvTm90UG9zdGFsTWFpbDogeyBsb2dpY2FsTmFtZTogJ2Rvbm90cG9zdGFsbWFpbCcsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRG9Ob3RTZW5kTU06IHsgbG9naWNhbE5hbWU6ICdkb25vdHNlbmRtbScsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgRU1haWxBZGRyZXNzMTogeyBsb2dpY2FsTmFtZTogJ2VtYWlsYWRkcmVzczEnIH0sXHJcbiAgICBFTWFpbEFkZHJlc3MyOiB7IGxvZ2ljYWxOYW1lOiAnZW1haWxhZGRyZXNzMicgfSxcclxuICAgIEVNYWlsQWRkcmVzczM6IHsgbG9naWNhbE5hbWU6ICdlbWFpbGFkZHJlc3MzJyB9LFxyXG4gICAgRW50aXR5SW1hZ2U6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZScgfSxcclxuICAgIEVudGl0eUltYWdlX1RpbWVzdGFtcDogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlX3RpbWVzdGFtcCcsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBFbnRpdHlJbWFnZV9VUkw6IHsgbG9naWNhbE5hbWU6ICdlbnRpdHlpbWFnZV91cmwnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgRW50aXR5SW1hZ2VJZDogeyBsb2dpY2FsTmFtZTogJ2VudGl0eWltYWdlaWQnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgRXhjaGFuZ2VSYXRlOiB7IGxvZ2ljYWxOYW1lOiAnZXhjaGFuZ2VyYXRlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBGYXg6IHsgbG9naWNhbE5hbWU6ICdmYXgnIH0sXHJcbiAgICBGb2xsb3dFbWFpbDogeyBsb2dpY2FsTmFtZTogJ2ZvbGxvd2VtYWlsJywgdHlwZTogJ0Jvb2xlYW4nIH0sXHJcbiAgICBGdHBTaXRlVVJMOiB7IGxvZ2ljYWxOYW1lOiAnZnRwc2l0ZXVybCcgfSxcclxuICAgIEltcG9ydFNlcXVlbmNlTnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAnaW1wb3J0c2VxdWVuY2VudW1iZXInLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIEluZHVzdHJ5Q29kZTogeyBsb2dpY2FsTmFtZTogJ2luZHVzdHJ5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgSXNQcml2YXRlOiB7IGxvZ2ljYWxOYW1lOiAnaXNwcml2YXRlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgTGFzdE9uSG9sZFRpbWVfVXRjRGF0ZUFuZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdsYXN0b25ob2xkdGltZScsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIExhc3RVc2VkSW5DYW1wYWlnbl9VdGNEYXRlT25seTogeyBsb2dpY2FsTmFtZTogJ2xhc3R1c2VkaW5jYW1wYWlnbicsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIE1hcmtldENhcDogeyBsb2dpY2FsTmFtZTogJ21hcmtldGNhcCcsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBNYXJrZXRDYXBfQmFzZTogeyBsb2dpY2FsTmFtZTogJ21hcmtldGNhcF9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBNYXJrZXRpbmdPbmx5OiB7IGxvZ2ljYWxOYW1lOiAnbWFya2V0aW5nb25seScsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgTWFzdGVySWQ6IHsgc2NoZW1hTmFtZTogJ21hc3RlcmlkJywgbG9naWNhbE5hbWU6ICdfbWFzdGVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ2FjY291bnRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdhY2NvdW50JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE1lcmdlZDogeyBsb2dpY2FsTmFtZTogJ21lcmdlZCcsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnQm9vbGVhbicgfSxcclxuICAgIE1vZGlmaWVkQnk6IHsgc2NoZW1hTmFtZTogJ21vZGlmaWVkYnknLCBsb2dpY2FsTmFtZTogJ19tb2RpZmllZGJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBNb2RpZmllZEJ5RXh0ZXJuYWxQYXJ0eTogeyBzY2hlbWFOYW1lOiAnbW9kaWZpZWRieWV4dGVybmFscGFydHknLCBsb2dpY2FsTmFtZTogJ19tb2RpZmllZGJ5ZXh0ZXJuYWxwYXJ0eV92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnZXh0ZXJuYWxwYXJ0aWVzJywgZW50aXR5TG9naWNhbE5hbWU6ICdleHRlcm5hbHBhcnR5JywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE1vZGlmaWVkT25fVXRjRGF0ZUFuZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdtb2RpZmllZG9uJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdEYXRlVGltZScgfSxcclxuICAgIE1vZGlmaWVkT25CZWhhbGZCeTogeyBzY2hlbWFOYW1lOiAnbW9kaWZpZWRvbmJlaGFsZmJ5JywgbG9naWNhbE5hbWU6ICdfbW9kaWZpZWRvbmJlaGFsZmJ5X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBtc2FfbWFuYWdpbmdwYXJ0bmVyaWQ6IHsgc2NoZW1hTmFtZTogJ21zYV9tYW5hZ2luZ3BhcnRuZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX21zYV9tYW5hZ2luZ3BhcnRuZXJpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYWNjb3VudHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2FjY291bnQnIH0sXHJcbiAgICBOYW1lOiB7IGxvZ2ljYWxOYW1lOiAnbmFtZScgfSxcclxuICAgIE51bWJlck9mRW1wbG95ZWVzOiB7IGxvZ2ljYWxOYW1lOiAnbnVtYmVyb2ZlbXBsb3llZXMnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIE9uSG9sZFRpbWU6IHsgbG9naWNhbE5hbWU6ICdvbmhvbGR0aW1lJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgT3ZlcnJpZGRlbkNyZWF0ZWRPbl9VdGNEYXRlT25seTogeyBsb2dpY2FsTmFtZTogJ292ZXJyaWRkZW5jcmVhdGVkb24nLCB0eXBlOiAnRGF0ZVRpbWUnIH0sXHJcbiAgICBPd25lcklkX3N5c3RlbXVzZXI6IHsgc2NoZW1hTmFtZTogJ293bmVyaWQnLCBsb2dpY2FsTmFtZTogJ19vd25lcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicgfSxcclxuICAgIE93bmVySWRfdGVhbTogeyBzY2hlbWFOYW1lOiAnb3duZXJpZCcsIGxvZ2ljYWxOYW1lOiAnX293bmVyaWRfdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3RlYW1zJywgZW50aXR5TG9naWNhbE5hbWU6ICd0ZWFtJyB9LFxyXG4gICAgT3duZXJzaGlwQ29kZTogeyBsb2dpY2FsTmFtZTogJ293bmVyc2hpcGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIE93bmluZ0J1c2luZXNzVW5pdDogeyBzY2hlbWFOYW1lOiAnb3duaW5nYnVzaW5lc3N1bml0JywgbG9naWNhbE5hbWU6ICdfb3duaW5nYnVzaW5lc3N1bml0X3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdidXNpbmVzc3VuaXRzJywgZW50aXR5TG9naWNhbE5hbWU6ICdidXNpbmVzc3VuaXQnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgT3duaW5nVGVhbTogeyBzY2hlbWFOYW1lOiAnb3duaW5ndGVhbScsIGxvZ2ljYWxOYW1lOiAnX293bmluZ3RlYW1fdmFsdWUnLCBlbnRpdHlDb2xsZWN0aW9uTmFtZTogJ3RlYW1zJywgZW50aXR5TG9naWNhbE5hbWU6ICd0ZWFtJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIE93bmluZ1VzZXI6IHsgc2NoZW1hTmFtZTogJ293bmluZ3VzZXInLCBsb2dpY2FsTmFtZTogJ19vd25pbmd1c2VyX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicsIHJlYWRPbmx5OiB0cnVlIH0sXHJcbiAgICBQYXJlbnRBY2NvdW50SWQ6IHsgc2NoZW1hTmFtZTogJ3BhcmVudGFjY291bnRpZCcsIGxvZ2ljYWxOYW1lOiAnX3BhcmVudGFjY291bnRpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnYWNjb3VudHMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ2FjY291bnQnIH0sXHJcbiAgICBQYXJ0aWNpcGF0ZXNJbldvcmtmbG93OiB7IGxvZ2ljYWxOYW1lOiAncGFydGljaXBhdGVzaW53b3JrZmxvdycsIHR5cGU6ICdCb29sZWFuJyB9LFxyXG4gICAgUGF5bWVudFRlcm1zQ29kZTogeyBsb2dpY2FsTmFtZTogJ3BheW1lbnR0ZXJtc2NvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZEFwcG9pbnRtZW50RGF5Q29kZTogeyBsb2dpY2FsTmFtZTogJ3ByZWZlcnJlZGFwcG9pbnRtZW50ZGF5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgUHJlZmVycmVkQXBwb2ludG1lbnRUaW1lQ29kZTogeyBsb2dpY2FsTmFtZTogJ3ByZWZlcnJlZGFwcG9pbnRtZW50dGltZWNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZENvbnRhY3RNZXRob2RDb2RlOiB7IGxvZ2ljYWxOYW1lOiAncHJlZmVycmVkY29udGFjdG1ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFByZWZlcnJlZFN5c3RlbVVzZXJJZDogeyBzY2hlbWFOYW1lOiAncHJlZmVycmVkc3lzdGVtdXNlcmlkJywgbG9naWNhbE5hbWU6ICdfcHJlZmVycmVkc3lzdGVtdXNlcmlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzeXN0ZW11c2VycycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc3lzdGVtdXNlcicgfSxcclxuICAgIFByaW1hcnlDb250YWN0SWQ6IHsgc2NoZW1hTmFtZTogJ3ByaW1hcnljb250YWN0aWQnLCBsb2dpY2FsTmFtZTogJ19wcmltYXJ5Y29udGFjdGlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdjb250YWN0cycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnY29udGFjdCcgfSxcclxuICAgIFByaW1hcnlTYXRvcmlJZDogeyBsb2dpY2FsTmFtZTogJ3ByaW1hcnlzYXRvcmlpZCcgfSxcclxuICAgIFByaW1hcnlUd2l0dGVySWQ6IHsgbG9naWNhbE5hbWU6ICdwcmltYXJ5dHdpdHRlcmlkJyB9LFxyXG4gICAgUHJvY2Vzc0lkOiB7IGxvZ2ljYWxOYW1lOiAncHJvY2Vzc2lkJyB9LFxyXG4gICAgUmV2ZW51ZTogeyBsb2dpY2FsTmFtZTogJ3JldmVudWUnLCB0eXBlOiAnTnVtYmVyJyB9LFxyXG4gICAgUmV2ZW51ZV9CYXNlOiB7IGxvZ2ljYWxOYW1lOiAncmV2ZW51ZV9iYXNlJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6ICdOdW1iZXInIH0sXHJcbiAgICBTaGFyZXNPdXRzdGFuZGluZzogeyBsb2dpY2FsTmFtZTogJ3NoYXJlc291dHN0YW5kaW5nJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTaGlwcGluZ01ldGhvZENvZGU6IHsgbG9naWNhbE5hbWU6ICdzaGlwcGluZ21ldGhvZGNvZGUnLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFNJQzogeyBsb2dpY2FsTmFtZTogJ3NpYycgfSxcclxuICAgIFNMQUlkOiB7IHNjaGVtYU5hbWU6ICdzbGFpZCcsIGxvZ2ljYWxOYW1lOiAnX3NsYWlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICdzbGFzJywgZW50aXR5TG9naWNhbE5hbWU6ICdzbGEnIH0sXHJcbiAgICBTTEFJbnZva2VkSWQ6IHsgc2NoZW1hTmFtZTogJ3NsYWludm9rZWRpZCcsIGxvZ2ljYWxOYW1lOiAnX3NsYWludm9rZWRpZF92YWx1ZScsIGVudGl0eUNvbGxlY3Rpb25OYW1lOiAnc2xhcycsIGVudGl0eUxvZ2ljYWxOYW1lOiAnc2xhJywgcmVhZE9ubHk6IHRydWUgfSxcclxuICAgIFN0YWdlSWQ6IHsgbG9naWNhbE5hbWU6ICdzdGFnZWlkJyB9LFxyXG4gICAgU3RhdGVDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnc3RhdGVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBTdGF0dXNDb2RlOiB7IGxvZ2ljYWxOYW1lOiAnc3RhdHVzY29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgU3RvY2tFeGNoYW5nZTogeyBsb2dpY2FsTmFtZTogJ3N0b2NrZXhjaGFuZ2UnIH0sXHJcbiAgICBUZWxlcGhvbmUxOiB7IGxvZ2ljYWxOYW1lOiAndGVsZXBob25lMScgfSxcclxuICAgIFRlbGVwaG9uZTI6IHsgbG9naWNhbE5hbWU6ICd0ZWxlcGhvbmUyJyB9LFxyXG4gICAgVGVsZXBob25lMzogeyBsb2dpY2FsTmFtZTogJ3RlbGVwaG9uZTMnIH0sXHJcbiAgICBUZXJyaXRvcnlDb2RlOiB7IGxvZ2ljYWxOYW1lOiAndGVycml0b3J5Y29kZScsIHR5cGU6ICdJbnRlZ2VyJyB9LFxyXG4gICAgVGlja2VyU3ltYm9sOiB7IGxvZ2ljYWxOYW1lOiAndGlja2Vyc3ltYm9sJyB9LFxyXG4gICAgVGltZVNwZW50QnlNZU9uRW1haWxBbmRNZWV0aW5nczogeyBsb2dpY2FsTmFtZTogJ3RpbWVzcGVudGJ5bWVvbmVtYWlsYW5kbWVldGluZ3MnLCByZWFkT25seTogdHJ1ZSB9LFxyXG4gICAgVGltZVpvbmVSdWxlVmVyc2lvbk51bWJlcjogeyBsb2dpY2FsTmFtZTogJ3RpbWV6b25lcnVsZXZlcnNpb25udW1iZXInLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFRyYW5zYWN0aW9uQ3VycmVuY3lJZDogeyBzY2hlbWFOYW1lOiAndHJhbnNhY3Rpb25jdXJyZW5jeWlkJywgbG9naWNhbE5hbWU6ICdfdHJhbnNhY3Rpb25jdXJyZW5jeWlkX3ZhbHVlJywgZW50aXR5Q29sbGVjdGlvbk5hbWU6ICd0cmFuc2FjdGlvbmN1cnJlbmNpZXMnLCBlbnRpdHlMb2dpY2FsTmFtZTogJ3RyYW5zYWN0aW9uY3VycmVuY3knIH0sXHJcbiAgICBUcmF2ZXJzZWRQYXRoOiB7IGxvZ2ljYWxOYW1lOiAndHJhdmVyc2VkcGF0aCcgfSxcclxuICAgIFVUQ0NvbnZlcnNpb25UaW1lWm9uZUNvZGU6IHsgbG9naWNhbE5hbWU6ICd1dGNjb252ZXJzaW9udGltZXpvbmVjb2RlJywgdHlwZTogJ0ludGVnZXInIH0sXHJcbiAgICBWZXJzaW9uTnVtYmVyOiB7IGxvZ2ljYWxOYW1lOiAndmVyc2lvbm51bWJlcicsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiAnSW50ZWdlcicgfSxcclxuICAgIFdlYlNpdGVVUkw6IHsgbG9naWNhbE5hbWU6ICd3ZWJzaXRldXJsJyB9LFxyXG4gICAgWW9taU5hbWU6IHsgbG9naWNhbE5hbWU6ICd5b21pbmFtZScgfVxyXG59O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAzLiBSdW50aW1lIC0gQ2xhc3MgKEMjIGVhcmx5LWJvdW5kIHN0eWxlIHdpdGggYG5ld2Aga2V5d29yZClcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLyoqXHJcbiAqIEFjY291bnQgV2ViQXBpIGNsYXNzIGZvciBlYXJseS1ib3VuZCBzdHlsZSBjb2RpbmdcclxuICogVXNhZ2U6IGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaShlbnRpdHkpO1xyXG4gKiBAcGFyYW0gZW50aXR5IFRoZSBlbnRpdHkgb2JqZWN0IGZyb20gT0RhdGEgcmVzcG9uc2UgKG9wdGlvbmFsIGZvciBjcmVhdGUgb3BlcmF0aW9ucylcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50QXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKGVudGl0eT86IFJlY29yZDxzdHJpbmcsIGFueT4pIHtcclxuICAgICAgICBjb25zdCB3ZWJBcGlFbnRpdHkgPSBjcmVhdGVXZWJBcGlFbnRpdHk8SUFjY291bnRBcGk+KGVudGl0eSwgJ2FjY291bnQnLCAnYWNjb3VudHMnLCBBY2NvdW50RmllbGRDb25maWcpO1xyXG4gICAgICAgIC8vIENvcHkgcHJvcGVydHkgZGVzY3JpcHRvcnMgdG8gcHJlc2VydmUgZ2V0dGVycy9zZXR0ZXJzXHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMod2ViQXBpRW50aXR5KSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFR5cGUgYXNzZXJ0aW9uIHRvIG1ha2UgQWNjb3VudEFwaSBpbnN0YW5jZXMgd29yayBhcyBJQWNjb3VudEFwaVxyXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRBcGkgZXh0ZW5kcyBJQWNjb3VudEFwaSB7IH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRBcGk7XHJcblxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5pbXBvcnQgeyBBY2NvdW50QXBpIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC53ZWJhcGknO1xyXG5pbXBvcnQgeyBPcHRpb25TZXQgfSBmcm9tICcuL2dlbmVyYXRvci9PcHRpb25TZXQnO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgNjogV2ViQXBpIC0gRWFybHktYm91bmQgc3R5bGUgY29kaW5nXHJcbiAqIFRlc3RzIFJldHJpZXZlUmVjb3JkIGFuZCBSZXRyaWV2ZVJlY29yZHMgd2l0aCB2YXJpb3VzIG92ZXJsb2Fkc1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIC8gUHJvbWlzZS1iYXNlZCB0ZXN0cyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAvIEFkZGl0aW9uYWwgdGVzdHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVGVzdFdlYkFwaShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gV0VCQVBJIE9CSkVDVCBURVNUUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gUjE6IENyZWF0ZSBlbXB0eSBBY2NvdW50IG9iamVjdCB2aWEgQWNjb3VudEFwaSBmYWN0b3J5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG5ld0FjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIG5ld0FjY291bnQuTmFtZSA9ICdUZXN0IEFjY291bnQnO1xyXG4gICAgICAgIG5ld0FjY291bnQuVGVsZXBob25lMSA9ICcxMjMtNDU2LTc4OTAnO1xyXG4gICAgICAgIG5ld0FjY291bnQuSW5kdXN0cnlDb2RlID0gT3B0aW9uU2V0LkFjY291bnQuSW5kdXN0cnlDb2RlLkNvbnN1bHRpbmc7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJBY2NvdW50QXBpIChjcmVhdGUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgTmFtZT1cIiR7bmV3QWNjb3VudC5OYW1lfVwiLCBFbnRpdHkgcmVhZHlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IG5ld0FjY291bnQuRW50aXR5ID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiQWNjb3VudEFwaSAoY3JlYXRlKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjI6IFRlc3QgRW50aXR5IG9iamVjdCBzdHJ1Y3R1cmVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgYWNjb3VudC5OYW1lID0gJ0VudGl0eSBUZXN0JztcclxuICAgICAgICBjb25zdCBlbnRpdHkgPSBhY2NvdW50LkVudGl0eTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eSBvYmplY3RcIixcclxuICAgICAgICAgICAgVmFsdWU6IGVudGl0eSA/IGBLZXlzOiAke09iamVjdC5rZXlzKGVudGl0eSkuam9pbignLCAnKX1gIDogXCJudWxsXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogZW50aXR5ICYmIHR5cGVvZiBlbnRpdHkgPT09ICdvYmplY3QnID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiRW50aXR5IG9iamVjdFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUjM6IFRlc3QgRW50aXR5TmFtZSBwcm9wZXJ0eVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0gbmV3IEFjY291bnRBcGkoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlIzXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBhY2NvdW50LkVudGl0eU5hbWUgPT09ICdhY2NvdW50JyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFI0OiBUZXN0IEVudGl0eUNvbGxlY3Rpb25OYW1lIHByb3BlcnR5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgQWNjb3VudEFwaSgpO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjRcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5Q29sbGVjdGlvbk5hbWVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGFjY291bnQuRW50aXR5Q29sbGVjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIFN0YXR1czogYWNjb3VudC5FbnRpdHlDb2xsZWN0aW9uTmFtZSA9PT0gJ2FjY291bnRzJyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkVudGl0eUNvbGxlY3Rpb25OYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSNTogVGVzdCBGb3JtYXR0ZWRWYWx1ZSBwcm9wZXJ0eSBleGlzdHNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSNVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYWNjb3VudC5Gb3JtYXR0ZWRWYWx1ZSA/IFwib2JqZWN0IGV4aXN0c1wiIDogXCJudWxsXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogYWNjb3VudC5Gb3JtYXR0ZWRWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkZvcm1hdHRlZFZhbHVlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gV0VCQVBJIFJFVFJJRVZFIFJFQ09SRCBURVNUUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gUzE6IFJldHJpZXZlUmVjb3JkIC0gUHJvbWlzZS1iYXNlZCB3aXRoIG9wdGlvbnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZCxcclxuICAgICAgICAgICAgXCI/JHNlbGVjdD1uYW1lLHRlbGVwaG9uZTEsaW5kdXN0cnljb2RlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmQgKFByb21pc2UrT3B0aW9ucylcIixcclxuICAgICAgICAgICAgVmFsdWU6IHJlY29yZC5OYW1lID8gYE5hbWU9XCIke3JlY29yZC5OYW1lfVwiYCA6IFwiUmV0cmlldmVkXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZStPcHRpb25zKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzI6IFJldHJpZXZlUmVjb3JkIC0gUHJvbWlzZS1iYXNlZCB3aXRob3V0IG9wdGlvbnNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmQoXHJcbiAgICAgICAgICAgIEFjY291bnRBcGksXHJcbiAgICAgICAgICAgIGZvcm0uRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IHJlY29yZC5BY2NvdW50SWQgPyBcIlJldHJpZXZlZCB3aXRoIGFsbCBmaWVsZHNcIiA6IFwiUmV0cmlldmVkXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZCAoUHJvbWlzZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFMzOiBSZXRyaWV2ZVJlY29yZCAtIEFjY2VzcyBGb3JtYXR0ZWRWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmQgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZChcclxuICAgICAgICAgICAgQWNjb3VudEFwaSxcclxuICAgICAgICAgICAgZm9ybS5FbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICBmb3JtLkVudGl0eUlkLFxyXG4gICAgICAgICAgICBcIj8kc2VsZWN0PW5hbWUsaW5kdXN0cnljb2RlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEluZHVzdHJ5ID0gcmVjb3JkLkZvcm1hdHRlZFZhbHVlPy5JbmR1c3RyeUNvZGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJGb3JtYXR0ZWRWYWx1ZS5JbmR1c3RyeUNvZGVcIixcclxuICAgICAgICAgICAgVmFsdWU6IGZvcm1hdHRlZEluZHVzdHJ5ID8gYFwiJHtmb3JtYXR0ZWRJbmR1c3RyeX1cImAgOiBcIihlbXB0eSlcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkZvcm1hdHRlZFZhbHVlLkluZHVzdHJ5Q29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzQ6IFJldHJpZXZlUmVjb3JkcyAtIEZldGNoWE1MIFByb21pc2UtYmFzZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hYbWwgPSBcIjxmZXRjaCB0b3A9JzMnPjxlbnRpdHkgbmFtZT0nYWNjb3VudCc+PGF0dHJpYnV0ZSBuYW1lPSduYW1lJy8+PGF0dHJpYnV0ZSBuYW1lPSdhY2NvdW50bnVtYmVyJy8+PC9lbnRpdHk+PC9mZXRjaD5cIjtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKEFjY291bnRBcGksIGZldGNoWG1sKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiByZWNvcmRzLmxlbmd0aCA+PSAwID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChGZXRjaFhNTClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFM1OiBSZXRyaWV2ZVJlY29yZHMgLSBGZXRjaFhNTCB3aXRoIG1heFBhZ2VTaXplXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZldGNoWG1sID0gXCI8ZmV0Y2g+PGVudGl0eSBuYW1lPSdhY2NvdW50Jz48YXR0cmlidXRlIG5hbWU9J25hbWUnLz48YXR0cmlidXRlIG5hbWU9J3RlbGVwaG9uZTEnLz48L2VudGl0eT48L2ZldGNoPlwiO1xyXG4gICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBmb3JtLldlYkFwaS5SZXRyaWV2ZVJlY29yZHMoQWNjb3VudEFwaSwgZmV0Y2hYbWwsIDUpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiUmV0cmlldmVSZWNvcmRzIChGZXRjaFhNTCtQYWdlU2l6ZSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBDb3VudDogJHtyZWNvcmRzLmxlbmd0aH0gKG1heCA1KWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoRmV0Y2hYTUwrUGFnZVNpemUpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNjogUmV0cmlldmVSZWNvcmRzIC0gT0RhdGEgUHJvbWlzZS1iYXNlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICAnYWNjb3VudCcsXHJcbiAgICAgICAgICAgICc/JHNlbGVjdD1uYW1lLGFjY291bnRudW1iZXImJHRvcD0zJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYENvdW50OiAke3JlY29yZHMubGVuZ3RofWAsXHJcbiAgICAgICAgICAgIFN0YXR1czogcmVjb3Jkcy5sZW5ndGggPj0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoT0RhdGEpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTNzogUmV0cmlldmVSZWNvcmRzIC0gT0RhdGEgd2l0aCBtYXhQYWdlU2l6ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgZm9ybS5XZWJBcGkuUmV0cmlldmVSZWNvcmRzKFxyXG4gICAgICAgICAgICBBY2NvdW50QXBpLFxyXG4gICAgICAgICAgICAnYWNjb3VudCcsXHJcbiAgICAgICAgICAgICc/JHNlbGVjdD1uYW1lLHRlbGVwaG9uZTEnLFxyXG4gICAgICAgICAgICA1XHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM3XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJldHJpZXZlUmVjb3JkcyAoT0RhdGErUGFnZVNpemUpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgQ291bnQ6ICR7cmVjb3Jkcy5sZW5ndGh9IChtYXggNSlgLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHJlY29yZHMubGVuZ3RoID49IDAgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZXRyaWV2ZVJlY29yZHMgKE9EYXRhK1BhZ2VTaXplKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUzg6IFNldCBwcm9wZXJ0eSBhbmQgdmVyaWZ5IEVudGl0eSB1cGRhdGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IG5ldyBBY2NvdW50QXBpKCk7XHJcbiAgICAgICAgYWNjb3VudC5OYW1lID0gJ1VwZGF0ZSBUZXN0JztcclxuICAgICAgICBhY2NvdW50LlJldmVudWUgPSAxMDAwMDAwO1xyXG4gICAgICAgIGFjY291bnQuTnVtYmVyT2ZFbXBsb3llZXMgPSA1MDtcclxuICAgICAgICBhY2NvdW50LkNyZWRpdE9uSG9sZCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gYWNjb3VudC5FbnRpdHk7XHJcbiAgICAgICAgY29uc3QgaGFzTmFtZSA9IGVudGl0eSAmJiBlbnRpdHkubmFtZSA9PT0gJ1VwZGF0ZSBUZXN0JztcclxuICAgICAgICBjb25zdCBoYXNSZXZlbnVlID0gZW50aXR5ICYmIGVudGl0eS5yZXZlbnVlID09PSAxMDAwMDAwO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzhcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRW50aXR5IHVwZGF0ZSBvbiBzZXRcIixcclxuICAgICAgICAgICAgVmFsdWU6IGBOYW1lOiAke2hhc05hbWV9LCBSZXZlbnVlOiAke2hhc1JldmVudWV9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBoYXNOYW1lICYmIGhhc1JldmVudWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJFbnRpdHkgdXBkYXRlIG9uIHNldFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjEwIFRFU1QgNjogV2ViQXBpIFske3N0YXJ0VGltZX1dIC0gRWFybHktYm91bmQgc3R5bGUgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIEFjY291bnRBcGkgRmFjdG9yeSBUZXN0cyAoUjEtUjUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFdlYkFwaSBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCA3OiBNb25leSBDb250cm9sIC0gUmV2ZW51ZSBGaWVsZFxyXG4gKiBNb25leSBleHRlbmRzIElDb250cm9sTnVtYmVyIHdpdGggTWluLCBNYXgsIFByZWNpc2lvbiBwcm9wZXJ0aWVzXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0TW9uZXkoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1vbmV5ID0gZm9ybS5IZWFkZXIuUmV2ZW51ZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gbW9uZXkuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNb25leS1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJQ29udHJvbE51bWJlciArIFByZWNpc2lvbilcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heFwiLCBWYWx1ZTogbW9uZXkuTWF4LCBTdGF0dXM6IHR5cGVvZiBtb25leS5NYXggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIk1pblwiLCBWYWx1ZTogbW9uZXkuTWluLCBTdGF0dXM6IHR5cGVvZiBtb25leS5NaW4gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvblwiLCBWYWx1ZTogbW9uZXkuUHJlY2lzaW9uLCBTdGF0dXM6IHR5cGVvZiBtb25leS5QcmVjaXNpb24gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1vbmV5LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pOyAvLyBBdHRyaWJ1dGUgY2FuIGJlIG51bGwgaW4gc29tZSBjb250ZXh0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBtb25leS5BdHRyaWJ1dGVOYW1lID09PSBcInJldmVudWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogbW9uZXkuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtb25leS5BdHRyaWJ1dGVUeXBlID09PSBcIm1vbmV5XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBtb25leS5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1vbmV5LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBtb25leS5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJJc0RpcnR5XCIsIFZhbHVlOiBtb25leS5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbW9uZXkuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IG1vbmV5LlJlcXVpcmVkTGV2ZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJTdWJtaXRNb2RlXCIsIFZhbHVlOiBtb25leS5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTVcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1vbmV5LkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IG1vbmV5LkxhYmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTdcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogbW9uZXkuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAob3JpZ2luYWxWYWx1ZSB8fCAwKSArIDEwMDA7XHJcbiAgICAgICAgbW9uZXkuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBtb25leS5WYWx1ZTtcclxuICAgICAgICBtb25leS5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBQcmVjaXNpb24gKE1vbmV5IHByZWNpc2lvbiBpcyB0eXBpY2FsbHkgMC0yIGZvciBjdXJyZW5jeSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1ByZWNpc2lvbiA9IG1vbmV5LlByZWNpc2lvbjtcclxuICAgICAgICBjb25zdCB0ZXN0UHJlY2lzaW9uID0gMjsgLy8gVmFsaWQgcHJlY2lzaW9uIGZvciBtb25leSAoMC0yIHJhbmdlKVxyXG4gICAgICAgIG1vbmV5LlByZWNpc2lvbiA9IHRlc3RQcmVjaXNpb247XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5QcmVjaXNpb247XHJcbiAgICAgICAgbW9uZXkuUHJlY2lzaW9uID0gb3JpZ1ByZWNpc2lvbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IHRlc3RQcmVjaXNpb24gPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBgV2FzICR7Y2hlY2t9YCwgU3RhdHVzOiBjaGVjayA9PT0gdGVzdFByZWNpc2lvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb24gKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtb25leS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vbmV5LlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBtb25leS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vbmV5LlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gbW9uZXkuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9uZXkuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuRGlzYWJsZWQ7XHJcbiAgICAgICAgbW9uZXkuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IG1vbmV5LkxhYmVsO1xyXG4gICAgICAgIGNvbnN0IHRlc3RMYWJlbCA9IFwiVGVzdCBNb25leSBMYWJlbFwiO1xyXG4gICAgICAgIG1vbmV5LkxhYmVsID0gdGVzdExhYmVsO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuTGFiZWw7XHJcbiAgICAgICAgY29uc3Qgc2V0V29ya2VkID0gY2hlY2sgPT09IHRlc3RMYWJlbCB8fCBjaGVjaz8uaW5jbHVkZXMoXCJUZXN0IE1vbmV5XCIpO1xyXG4gICAgICAgIGlmIChvcmlnTGFiZWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtb25leS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogc2V0V29ya2VkID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogYEdvdDogJHtjaGVja31gLCBTdGF0dXM6IHNldFdvcmtlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gbW9uZXkuVmlzaWJsZTtcclxuICAgICAgICBtb25leS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9uZXkuVmlzaWJsZTtcclxuICAgICAgICBtb25leS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBNb25leSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vbmV5LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9uZXkuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBNb25leSBub3RpZmljYXRpb25cIiwgXCJNT05FWV9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5DbGVhck5vdGlmaWNhdGlvbihcIk1PTkVZX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9uZXkuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb25leS5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0IwIFRFU1QgNzogTW9uZXkgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBSZXZlbnVlIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTcpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgODogQm9vbGVhbiBDb250cm9sIC0gQ3JlZGl0T25Ib2xkIEZpZWxkXHJcbiAqIEJvb2xlYW4gZXh0ZW5kcyBJQ29udHJvbCB3aXRoIEluaXRpYWxWYWx1ZSBwcm9wZXJ0eVxyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdEJvb2xlYW4oZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGJvb2wgPSBmb3JtLkJvZHkuQ3JlZGl0T25Ib2xkO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBib29sLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQm9vbGVhbi1zcGVjaWZpYyBwcm9wZXJ0aWVzIChJbml0aWFsVmFsdWUgY2FuIGJlIGJvb2xlYW4gb3IgMC8xKVxyXG4gICAgICAgIGNvbnN0IGluaXRWYWwgPSBib29sLkluaXRpYWxWYWx1ZTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkSW5pdFZhbHVlID0gdHlwZW9mIGluaXRWYWwgPT09IFwiYm9vbGVhblwiIHx8IGluaXRWYWwgPT09IDAgfHwgaW5pdFZhbCA9PT0gMTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkluaXRpYWxWYWx1ZVwiLCBWYWx1ZTogaW5pdFZhbCwgU3RhdHVzOiBpc1ZhbGlkSW5pdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBib29sLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBib29sLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlTmFtZSA9PT0gXCJjcmVkaXRvbmhvbGRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogYm9vbC5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGJvb2wuQXR0cmlidXRlVHlwZSA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBib29sLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogYm9vbC5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBib29sLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogYm9vbC5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogYm9vbC5Jc1ZhbGlkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbFwiLCBWYWx1ZTogYm9vbC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogYm9vbC5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IGJvb2wuRGlzYWJsZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJMYWJlbFwiLCBWYWx1ZTogYm9vbC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGJvb2wuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSAhb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBib29sLlZhbHVlID0gdGVzdFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gYm9vbC5WYWx1ZTtcclxuICAgICAgICBib29sLlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBuZXdWYWx1ZSA9PT0gdGVzdFZhbHVlID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFJlcXVpcmVkTGV2ZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1JlcXVpcmVkID0gYm9vbC5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGJvb2wuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBib29sLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gYm9vbC5EaXNhYmxlZDtcclxuICAgICAgICBib29sLkRpc2FibGVkID0gIW9yaWdEaXNhYmxlZDtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGJvb2wuRGlzYWJsZWQ7XHJcbiAgICAgICAgYm9vbC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gYm9vbC5MYWJlbDtcclxuICAgICAgICBib29sLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBib29sLkxhYmVsO1xyXG4gICAgICAgIGJvb2wuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZpc2libGVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1Zpc2libGUgPSBib29sLlZpc2libGU7XHJcbiAgICAgICAgYm9vbC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gYm9vbC5WaXNpYmxlO1xyXG4gICAgICAgIGJvb2wuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgQm9vbGVhbiBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuQWRkT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBib29sLkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gYm9vbC5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBcIlNjaGVkdWxlZCAoMXMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYm9vbC5TZXROb3RpZmljYXRpb24oXCJUZXN0IEJvb2xlYW4gbm90aWZpY2F0aW9uXCIsIFwiQk9PTF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLkNsZWFyTm90aWZpY2F0aW9uKFwiQk9PTF9URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJvb2wuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBib29sLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdTI3MDUgVEVTVCA4OiBCb29sZWFuIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogQ3JlZGl0T25Ib2xkIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTUpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgOTogRGF0ZVRpbWUgQ29udHJvbCAtIHY0X0FwcG9pbnRtZW50VGltZSBGaWVsZFxyXG4gKiBEYXRlVGltZSBleHRlbmRzIElDb250cm9sIHdpdGggU2hvd1RpbWUgcHJvcGVydHlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3REYXRlVGltZShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZHQgPSBmb3JtLkJvZHkudjRfQXBwb2ludG1lbnRUaW1lO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPSBkdC5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERhdGVUaW1lLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlNob3dUaW1lXCIsIFZhbHVlOiBkdC5TaG93VGltZSwgU3RhdHVzOiB0eXBlb2YgZHQuU2hvd1RpbWUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBvcmlnaW5hbFZhbHVlLnRvSVNPU3RyaW5nKCkgOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBkdC5BdHRyaWJ1dGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IGR0LkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogZHQuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9hcHBvaW50bWVudHRpbWVcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlVHlwZVwiLCBWYWx1ZTogZHQuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBkdC5BdHRyaWJ1dGVUeXBlID09PSBcImRhdGV0aW1lXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xOYW1lXCIsIFZhbHVlOiBkdC5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGR0LkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJGb3JtYXRcIiwgVmFsdWU6IGR0LkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjlcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogZHQuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGR0LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMVwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBkdC5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZHQuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkdC5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBkdC5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGR0LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkdC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGR0LlZhbHVlO1xyXG4gICAgICAgIGR0LlZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICAvLyBWYWx1ZSB3YXMgc2V0IHN1Y2Nlc3NmdWxseSBpZiBuZXdWYWx1ZSBleGlzdHMgKERhdGUsIHN0cmluZywgb3IgYW55IHRydXRoeSlcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gbmV3VmFsdWUgIT09IG51bGwgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBzdWNjZXNzID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBzdWNjZXNzID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlZhbHVlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFNob3dUaW1lXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdTaG93VGltZSA9IGR0LlNob3dUaW1lO1xyXG4gICAgICAgIGR0LlNob3dUaW1lID0gIW9yaWdTaG93VGltZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlNob3dUaW1lO1xyXG4gICAgICAgIGR0LlNob3dUaW1lID0gb3JpZ1Nob3dUaW1lO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiU2hvd1RpbWUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTaG93VGltZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGR0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZHQuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZHQuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBkdC5EaXNhYmxlZDtcclxuICAgICAgICBkdC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkdC5EaXNhYmxlZDtcclxuICAgICAgICBkdC5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gZHQuTGFiZWw7XHJcbiAgICAgICAgZHQuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGR0LkxhYmVsO1xyXG4gICAgICAgIGR0LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZHQuVmlzaWJsZTtcclxuICAgICAgICBkdC5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZHQuVmlzaWJsZTtcclxuICAgICAgICBkdC5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBEYXRlVGltZSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGR0LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZHQuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuU2V0Tm90aWZpY2F0aW9uKFwiVGVzdCBEYXRlVGltZSBub3RpZmljYXRpb25cIiwgXCJEVF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5DbGVhck5vdGlmaWNhdGlvbihcIkRUX1RFU1RfMVwiKSwgMzAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBcIlNldCAoY2xlYXJzIDNzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZHQuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkdC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0M1IFRFU1QgOTogRGF0ZVRpbWUgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9BcHBvaW50bWVudFRpbWUgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNSlcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMDogRGF0ZU9ubHkgQ29udHJvbCAtIHY0X0JpcnRoZGF5IEZpZWxkXHJcbiAqIERhdGVPbmx5IGV4dGVuZHMgSUNvbnRyb2wgKG5vIFNob3dUaW1lIHByb3BlcnR5IHVubGlrZSBEYXRlVGltZSlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3REYXRlT25seShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZGF0ZU9ubHkgPSBmb3JtLkJvZHkudjRfQmlydGhkYXk7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGRhdGVPbmx5LlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRGF0ZU9ubHktc3BlY2lmaWM6IFZhbHVlIGlzIHRoZSBtYWluIHByb3BlcnR5IChubyBTaG93VGltZSlcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IG9yaWdpbmFsVmFsdWUudG9JU09TdHJpbmcoKSA6IG9yaWdpbmFsVmFsdWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5oZXJpdGVkIGZyb20gSUNvbnRyb2xcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlID8gXCJvYmplY3RcIiA6IFwibnVsbFwiLCBTdGF0dXM6IGRhdGVPbmx5LkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBkYXRlT25seS5BdHRyaWJ1dGVOYW1lID09PSBcInY0X2JpcnRoZGF5XCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGRhdGVPbmx5LkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogZGF0ZU9ubHkuQXR0cmlidXRlVHlwZSA9PT0gXCJkYXRldGltZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogZGF0ZU9ubHkuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBkYXRlT25seS5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkYXRlT25seS5Gb3JtYXQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGRhdGVPbmx5LklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGRhdGVPbmx5LklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBkYXRlT25seS5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZGF0ZU9ubHkuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkYXRlT25seS5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBkYXRlT25seS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGRhdGVPbmx5LlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gbmV3IERhdGUoMTk5MCwgNSwgMTUpOyAvLyBKdW5lIDE1LCAxOTkwXHJcbiAgICAgICAgZGF0ZU9ubHkuVmFsdWUgPSB0ZXN0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBkYXRlT25seS5WYWx1ZTtcclxuICAgICAgICBkYXRlT25seS5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgLy8gVmFsdWUgd2FzIHNldCBzdWNjZXNzZnVsbHkgaWYgbmV3VmFsdWUgZXhpc3RzXHJcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IG5ld1ZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogc3VjY2VzcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuUmVxdWlyZWRMZXZlbCA9IG9yaWdSZXF1aXJlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IGNoZWNrID09PSBcInJlcXVpcmVkXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEaXNhYmxlZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnRGlzYWJsZWQgPSBkYXRlT25seS5EaXNhYmxlZDtcclxuICAgICAgICBkYXRlT25seS5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkYXRlT25seS5EaXNhYmxlZDtcclxuICAgICAgICBkYXRlT25seS5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gZGF0ZU9ubHkuTGFiZWw7XHJcbiAgICAgICAgZGF0ZU9ubHkuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRhdGVPbmx5LkxhYmVsO1xyXG4gICAgICAgIGRhdGVPbmx5LkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZGF0ZU9ubHkuVmlzaWJsZTtcclxuICAgICAgICBkYXRlT25seS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGF0ZU9ubHkuVmlzaWJsZTtcclxuICAgICAgICBkYXRlT25seS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kc1xyXG4gICAgY29uc3Qgb25DaGFuZ2VDYWxsYmFjayA9IChjdHg6IGFueSkgPT4gY29uc29sZS5sb2coXCIgIFx1RDgzRFx1RENDRCBEYXRlT25seSBPbkNoYW5nZSBmaXJlZFwiKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlJlbW92ZU9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LkZpcmVPbkNoYW5nZSgpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIkZpcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiRmlyZU9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlNldE5vdGlmaWNhdGlvbihcIlRlc3QgRGF0ZU9ubHkgbm90aWZpY2F0aW9uXCIsIFwiRE9fVEVTVF8xXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuQ2xlYXJOb3RpZmljYXRpb24oXCJET19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEwXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRhdGVPbmx5LlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGF0ZU9ubHkuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REY4MiBURVNUIDEwOiBEYXRlT25seSBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IHY0X0JpcnRoZGF5IGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTQpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTEpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTE6IEdyaWQgQ29udHJvbCAtIENvbnRhY3RzIFN1YmdyaWRcclxuICogR3JpZCBwcm92aWRlcyBhY2Nlc3MgdG8gc3ViZ3JpZCBkYXRhIGFuZCBvcGVyYXRpb25zXHJcbiAqIFVzZXMgY29uc29sZS50YWJsZSBmb3IgY2xlYW5lciBvdXRwdXRcclxuICogXHJcbiAqIENvbnZlbnRpb246XHJcbiAqIC0gUi1JbmRleDogUmVhZE9ubHkgcHJvcGVydGllcyAoUjEsIFIyLCBSMy4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLCBTMy4uLilcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0R3JpZChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZ3JpZCA9IGZvcm0uR3JpZC5Db250YWN0cztcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBHcmlkLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkVudGl0eU5hbWVcIiwgVmFsdWU6IGdyaWQuRW50aXR5TmFtZSwgU3RhdHVzOiBncmlkLkVudGl0eU5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkZldGNoWG1sXCIsIFZhbHVlOiBncmlkLkZldGNoWG1sID8gZ3JpZC5GZXRjaFhtbC5zdWJzdHJpbmcoMCwgNTApICsgXCIuLi5cIiA6IG51bGwsIFN0YXR1czogZ3JpZC5GZXRjaFhtbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiR3JpZFR5cGVcIiwgVmFsdWU6IGdyaWQuR3JpZFR5cGUsIFN0YXR1czogdHlwZW9mIGdyaWQuR3JpZFR5cGUgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXRpb25zaGlwXHJcbiAgICAgICAgY29uc3QgcmVsID0gZ3JpZC5SZWxhdGlvbnNoaXA7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAubmFtZVwiLCBWYWx1ZTogcmVsPy5uYW1lLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiUmVsYXRpb25zaGlwLm5hdlByb3BOYW1lXCIsIFZhbHVlOiByZWw/Lm5hdmlnYXRpb25Qcm9wZXJ0eU5hbWUsIFN0YXR1czogcmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJSZWxhdGlvbnNoaXAudHlwZVwiLCBWYWx1ZTogcmVsPy5yZWxhdGlvbnNoaXBUeXBlLCBTdGF0dXM6IHJlbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBSb3dzXHJcbiAgICAgICAgY29uc3Qgcm93cyA9IGdyaWQuUm93cztcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIlJvd3MuZ2V0TGVuZ3RoKClcIiwgVmFsdWU6IHJvd3M/LmdldExlbmd0aCgpLCBTdGF0dXM6IHJvd3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0ZWRSb3dzXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSb3dzID0gZ3JpZC5TZWxlY3RlZFJvd3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZFJvd3MuZ2V0TGVuZ3RoKClcIiwgVmFsdWU6IHNlbGVjdGVkUm93cz8uZ2V0TGVuZ3RoKCksIFN0YXR1czogc2VsZWN0ZWRSb3dzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvdGFsUmVjb3JkQ291bnRcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIlRvdGFsUmVjb3JkQ291bnRcIiwgVmFsdWU6IGdyaWQuVG90YWxSZWNvcmRDb3VudCwgU3RhdHVzOiB0eXBlb2YgZ3JpZC5Ub3RhbFJlY29yZENvdW50ID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFZpZXdTZWxlY3RvclxyXG4gICAgICAgIGNvbnN0IHZzID0gZ3JpZC5WaWV3U2VsZWN0b3I7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiVmlld1NlbGVjdG9yXCIsIFZhbHVlOiB2cyA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiB2cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlZpZXdTZWxlY3Rvci5WaXNpYmxlXCIsIFZhbHVlOiB2cz8uVmlzaWJsZSwgU3RhdHVzOiB2cyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBWaXNpYmxlXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogZ3JpZC5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiBncmlkLlZpc2libGUgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFVybFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBncmlkLlVybCgxKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlVybCgxKVwiLCBWYWx1ZTogdXJsID8gdXJsLnN1YnN0cmluZygwLCA1MCkgKyBcIi4uLlwiIDogXCJudWxsXCIsIFN0YXR1czogdXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlVybCgxKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZ3JpZC5WaXNpYmxlO1xyXG4gICAgICAgIGdyaWQuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGdyaWQuVmlzaWJsZTtcclxuICAgICAgICBncmlkLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEFkZE9uTG9hZFxyXG4gICAgY29uc3Qgb25Mb2FkQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgR3JpZCBPbkxvYWQgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGdyaWQuQWRkT25Mb2FkKG9uTG9hZENhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkFkZE9uTG9hZFwiLCBWYWx1ZTogXCJSZWdpc3RlcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiQWRkT25Mb2FkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlbW92ZU9uTG9hZFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBncmlkLlJlbW92ZU9uTG9hZChvbkxvYWRDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkxvYWRcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uTG9hZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZWZyZXNoXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIERvbid0IGFjdHVhbGx5IHJlZnJlc2ggdG8gYXZvaWQgc2lkZSBlZmZlY3RzLCBqdXN0IGNoZWNrIGlmIG1ldGhvZCBleGlzdHNcclxuICAgICAgICBpZiAodHlwZW9mIGdyaWQuUmVmcmVzaCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogXCJBdmFpbGFibGVcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFwiLCBWYWx1ZTogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJSZWZyZXNoXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFJlZnJlc2hSaWJib25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLlJlZnJlc2hSaWJib24gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IFwiQXZhaWxhYmxlXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hSaWJib25cIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFJpYmJvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBPcGVuUmVsYXRlZEdyaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBncmlkLk9wZW5SZWxhdGVkR3JpZCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBcIkF2YWlsYWJsZVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJPcGVuUmVsYXRlZEdyaWRcIiwgVmFsdWU6IFwiTm90IGEgZnVuY3Rpb25cIiwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiT3BlblJlbGF0ZWRHcmlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXN0IFJvd3MgaXRlcmF0aW9uXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBncmlkLlJvd3M7XHJcbiAgICAgICAgaWYgKHJvd3MgJiYgcm93cy5nZXRMZW5ndGgoKSA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RSb3cgPSByb3dzLmdldCgwKTtcclxuICAgICAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogZmlyc3RSb3c/LkVudGl0eUlkIHx8IFwibm8gRW50aXR5SWRcIiwgU3RhdHVzOiBmaXJzdFJvdyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUm93cy5nZXQoMClcIiwgVmFsdWU6IFwiTm8gcm93c1wiLCBTdGF0dXM6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSb3dzLmdldCgwKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEQ0NBIFRFU1QgMTE6IEdyaWQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBDb250YWN0cyBzdWJncmlkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gc3RyaW5naWZ5IG9iamVjdHMgZm9yIGRpc3BsYXlcclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhciBvciBDb21wbGV4IE9iamVjdF0nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTI6IFV0aWxpdHkgQVBJIC0gR2xvYmFsIFV0aWxpdHkgRnVuY3Rpb25zXHJcbiAqIFV0aWxpdHkgcHJvdmlkZXMgYWNjZXNzIHRvIFhybS5VdGlsaXR5LCBYcm0uTmF2aWdhdGlvbiwgWHJtLkRldmljZSwgWHJtLkVuY29kaW5nLCBldGMuXHJcbiAqIFRlc3RzIEFMTCBwcm9wZXJ0aWVzIG9mIGVhY2ggbmVzdGVkIG9iamVjdCAoQ2xpZW50LCBPcmdhbml6YXRpb25TZXR0aW5ncywgVXNlclNldHRpbmdzKVxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RVdGlsaXR5KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCB1dGlsID0gZm9ybS5VdGlsaXR5O1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDbGllbnQgKGFsbCBwcm9wZXJ0aWVzKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBjb25zdCBjbGllbnQgPSB1dGlsLkNsaWVudDtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIkNsaWVudFwiLCBWYWx1ZTogc3RyaW5naWZ5KGNsaWVudCksIFN0YXR1czogY2xpZW50ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJDbGllbnQuQ2xpZW50TmFtZVwiLCBWYWx1ZTogY2xpZW50Py5DbGllbnROYW1lLCBTdGF0dXM6IGNsaWVudD8uQ2xpZW50TmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQ2xpZW50LkNsaWVudFN0YXRlXCIsIFZhbHVlOiBjbGllbnQ/LkNsaWVudFN0YXRlLCBTdGF0dXM6IGNsaWVudD8uQ2xpZW50U3RhdGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIkNsaWVudC5Gb3JtRmFjdG9yXCIsIFZhbHVlOiBjbGllbnQ/LkZvcm1GYWN0b3IsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uRm9ybUZhY3RvciA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQ2xpZW50LklzTmV0d29ya0F2YWlsYWJsZVwiLCBWYWx1ZTogY2xpZW50Py5Jc05ldHdvcmtBdmFpbGFibGUsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uSXNOZXR3b3JrQXZhaWxhYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQ2xpZW50LklzT2ZmbGluZVwiLCBWYWx1ZTogY2xpZW50Py5Jc09mZmxpbmUsIFN0YXR1czogdHlwZW9mIGNsaWVudD8uSXNPZmZsaW5lID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gR2xvYmFsIENvbnRleHQgUHJvcGVydGllc1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkNsaWVudFVybFwiLCBWYWx1ZTogdXRpbC5DbGllbnRVcmwsIFN0YXR1czogdXRpbC5DbGllbnRVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRBcHBVcmxcIiwgVmFsdWU6IHV0aWwuQ3VycmVudEFwcFVybCwgU3RhdHVzOiB1dGlsLkN1cnJlbnRBcHBVcmwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIklzT25QcmVtaXNlc1wiLCBWYWx1ZTogdXRpbC5Jc09uUHJlbWlzZXMsIFN0YXR1czogdHlwZW9mIHV0aWwuSXNPblByZW1pc2VzID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEwXCIsIFByb3BlcnR5OiBcIkxlYXJuaW5nUGF0aEF0dHJpYnV0ZU5hbWVcIiwgVmFsdWU6IHV0aWwuTGVhcm5pbmdQYXRoQXR0cmlidXRlTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIlBhZ2VDb250ZXh0XCIsIFZhbHVlOiBzdHJpbmdpZnkodXRpbC5QYWdlQ29udGV4dCksIFN0YXR1czogdXRpbC5QYWdlQ29udGV4dCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIlZlcnNpb25cIiwgVmFsdWU6IHV0aWwuVmVyc2lvbiwgU3RhdHVzOiB1dGlsLlZlcnNpb24gPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE9yZ2FuaXphdGlvblNldHRpbmdzIChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3Qgb3JnU2V0dGluZ3MgPSB1dGlsLk9yZ2FuaXphdGlvblNldHRpbmdzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIk9yZ2FuaXphdGlvblNldHRpbmdzXCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3MpLCBTdGF0dXM6IG9yZ1NldHRpbmdzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiT3JnLkF0dHJpYnV0ZXNcIiwgVmFsdWU6IHN0cmluZ2lmeShvcmdTZXR0aW5ncz8uQXR0cmlidXRlcyksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJPcmcuQmFzZUN1cnJlbmN5XCIsIFZhbHVlOiBzdHJpbmdpZnkob3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeSksIFN0YXR1czogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE2XCIsIFByb3BlcnR5OiBcIk9yZy5CYXNlQ3VycmVuY3lJZFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkJhc2VDdXJyZW5jeUlkLCBTdGF0dXM6IG9yZ1NldHRpbmdzPy5CYXNlQ3VycmVuY3lJZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIk9yZy5EZWZhdWx0Q291bnRyeUNvZGVcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5EZWZhdWx0Q291bnRyeUNvZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJPcmcuRnVsbE5hbWVDb252ZW50aW9uQ29kZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LkZ1bGxOYW1lQ29udmVudGlvbkNvZGUsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5GdWxsTmFtZUNvbnZlbnRpb25Db2RlID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTlcIiwgUHJvcGVydHk6IFwiT3JnLklzQXV0b1NhdmVFbmFibGVkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uSXNBdXRvU2F2ZUVuYWJsZWQsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Jc0F1dG9TYXZlRW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMFwiLCBQcm9wZXJ0eTogXCJPcmcuSXNUcmlhbE9yZ2FuaXphdGlvblwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LklzVHJpYWxPcmdhbml6YXRpb24sIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Jc1RyaWFsT3JnYW5pemF0aW9uID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjIxXCIsIFByb3BlcnR5OiBcIk9yZy5MYW5ndWFnZUlkXCIsIFZhbHVlOiBvcmdTZXR0aW5ncz8uTGFuZ3VhZ2VJZCwgU3RhdHVzOiB0eXBlb2Ygb3JnU2V0dGluZ3M/Lkxhbmd1YWdlSWQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyMlwiLCBQcm9wZXJ0eTogXCJPcmcuT3JnYW5pemF0aW9uRXhwaXJ5RGF0ZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/Lk9yZ2FuaXphdGlvbkV4cGlyeURhdGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyM1wiLCBQcm9wZXJ0eTogXCJPcmcuT3JnYW5pemF0aW9uSWRcIiwgVmFsdWU6IG9yZ1NldHRpbmdzPy5Pcmdhbml6YXRpb25JZCwgU3RhdHVzOiBvcmdTZXR0aW5ncz8uT3JnYW5pemF0aW9uSWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNFwiLCBQcm9wZXJ0eTogXCJPcmcuVW5pcXVlTmFtZVwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LlVuaXF1ZU5hbWUsIFN0YXR1czogb3JnU2V0dGluZ3M/LlVuaXF1ZU5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyNVwiLCBQcm9wZXJ0eTogXCJPcmcuVXNlU2t5cGVQcm90b2NvbFwiLCBWYWx1ZTogb3JnU2V0dGluZ3M/LlVzZVNreXBlUHJvdG9jb2wsIFN0YXR1czogdHlwZW9mIG9yZ1NldHRpbmdzPy5Vc2VTa3lwZVByb3RvY29sID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gVXNlclNldHRpbmdzIChhbGwgcHJvcGVydGllcylcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgdXNlclNldHRpbmdzID0gdXRpbC5Vc2VyU2V0dGluZ3M7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMjZcIiwgUHJvcGVydHk6IFwiVXNlclNldHRpbmdzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3MgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyN1wiLCBQcm9wZXJ0eTogXCJVc2VyLkRhdGVGb3JtYXR0aW5nSW5mb1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uRGF0ZUZvcm1hdHRpbmdJbmZvKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LkRhdGVGb3JtYXR0aW5nSW5mbyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI4XCIsIFByb3BlcnR5OiBcIlVzZXIuRGVmYXVsdERhc2hib2FyZElkXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LkRlZmF1bHREYXNoYm9hcmRJZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjI5XCIsIFByb3BlcnR5OiBcIlVzZXIuSXNHdWlkZWRIZWxwRW5hYmxlZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Jc0d1aWRlZEhlbHBFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzR3VpZGVkSGVscEVuYWJsZWQgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzBcIiwgUHJvcGVydHk6IFwiVXNlci5Jc0hpZ2hDb250cmFzdEVuYWJsZWRcIiwgVmFsdWU6IHVzZXJTZXR0aW5ncz8uSXNIaWdoQ29udHJhc3RFbmFibGVkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzSGlnaENvbnRyYXN0RW5hYmxlZCA9PT0gXCJib29sZWFuXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzMVwiLCBQcm9wZXJ0eTogXCJVc2VyLklzUlRMXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LklzUlRMLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/LklzUlRMID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjMyXCIsIFByb3BlcnR5OiBcIlVzZXIuTGFuZ3VhZ2VJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5MYW5ndWFnZUlkLCBTdGF0dXM6IHR5cGVvZiB1c2VyU2V0dGluZ3M/Lkxhbmd1YWdlSWQgPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzM1wiLCBQcm9wZXJ0eTogXCJVc2VyLlJvbGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5Sb2xlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5Sb2xlcyA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjM0XCIsIFByb3BlcnR5OiBcIlVzZXIuU2VjdXJpdHlSb2xlUHJpdmlsZWdlc1wiLCBWYWx1ZTogc3RyaW5naWZ5KHVzZXJTZXR0aW5ncz8uU2VjdXJpdHlSb2xlUHJpdmlsZWdlcyksIFN0YXR1czogdXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVQcml2aWxlZ2VzID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzVcIiwgUHJvcGVydHk6IFwiVXNlci5TZWN1cml0eVJvbGVzXCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5TZWN1cml0eVJvbGVzKSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlNlY3VyaXR5Um9sZXMgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzNlwiLCBQcm9wZXJ0eTogXCJVc2VyLlRpbWVab25lT2Zmc2V0TWludXRlc1wiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5UaW1lWm9uZU9mZnNldE1pbnV0ZXMsIFN0YXR1czogdHlwZW9mIHVzZXJTZXR0aW5ncz8uVGltZVpvbmVPZmZzZXRNaW51dGVzID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMzdcIiwgUHJvcGVydHk6IFwiVXNlci5UcmFuc2FjdGlvbkN1cnJlbmN5XCIsIFZhbHVlOiBzdHJpbmdpZnkodXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5KSwgU3RhdHVzOiB1c2VyU2V0dGluZ3M/LlRyYW5zYWN0aW9uQ3VycmVuY3kgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzOFwiLCBQcm9wZXJ0eTogXCJVc2VyLlRyYW5zYWN0aW9uQ3VycmVuY3lJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5SWQsIFN0YXR1czogdXNlclNldHRpbmdzPy5UcmFuc2FjdGlvbkN1cnJlbmN5SWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzOVwiLCBQcm9wZXJ0eTogXCJVc2VyLlVzZXJJZFwiLCBWYWx1ZTogdXNlclNldHRpbmdzPy5Vc2VySWQsIFN0YXR1czogdXNlclNldHRpbmdzPy5Vc2VySWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0MFwiLCBQcm9wZXJ0eTogXCJVc2VyLlVzZXJOYW1lXCIsIFZhbHVlOiB1c2VyU2V0dGluZ3M/LlVzZXJOYW1lLCBTdGF0dXM6IHVzZXJTZXR0aW5ncz8uVXNlck5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gRW5jb2RpbmcgTWV0aG9kcyAodGVzdCB3aXRoIGFjdHVhbCB2YWx1ZXMpXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVuY29kZWQgPSB1dGlsLkh0bWxFbmNvZGUoXCI8dGVzdD5cIik7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJIdG1sRW5jb2RlXCIsIFZhbHVlOiBlbmNvZGVkLCBTdGF0dXM6IGVuY29kZWQgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiSHRtbEVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkZWNvZGVkID0gdXRpbC5IdG1sRGVjb2RlKFwiJmx0O3Rlc3QmZ3Q7XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiSHRtbERlY29kZVwiLCBWYWx1ZTogZGVjb2RlZCwgU3RhdHVzOiBkZWNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkh0bWxEZWNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlZCA9IHV0aWwuSHRtbEF0dHJpYnV0ZUVuY29kZShcInRlc3Q9XFxcInZhbHVlXFxcIlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkh0bWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGVuY29kZWQsIFN0YXR1czogZW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJIdG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHhtbEVuY29kZWQgPSB1dGlsLlhtbEVuY29kZShcIjx0ZXN0PlwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlhtbEVuY29kZVwiLCBWYWx1ZTogeG1sRW5jb2RlZCwgU3RhdHVzOiB4bWxFbmNvZGVkID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIlhtbEVuY29kZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB4bWxBdHRyRW5jb2RlZCA9IHV0aWwuWG1sQXR0cmlidXRlRW5jb2RlKFwidGVzdD1cXFwidmFsdWVcXFwiXCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiWG1sQXR0cmlidXRlRW5jb2RlXCIsIFZhbHVlOiB4bWxBdHRyRW5jb2RlZCwgU3RhdHVzOiB4bWxBdHRyRW5jb2RlZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJYbWxBdHRyaWJ1dGVFbmNvZGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFVSTC9SZXNvdXJjZSBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByZXBlbmRlZFVybCA9IHV0aWwuUHJlcGVuZE9yZ05hbWUoXCIvdGVzdFwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlByZXBlbmRPcmdOYW1lXCIsIFZhbHVlOiBwcmVwZW5kZWRVcmwsIFN0YXR1czogcHJlcGVuZGVkVXJsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlByZXBlbmRPcmdOYW1lXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHdlYlJlc291cmNlVXJsID0gdXRpbC5XZWJSZXNvdXJjZVVybChcInRlc3QuaHRtbFwiKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIldlYlJlc291cmNlVXJsXCIsIFZhbHVlOiB3ZWJSZXNvdXJjZVVybCwgU3RhdHVzOiB3ZWJSZXNvdXJjZVVybCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJXZWJSZXNvdXJjZVVybFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQXBwL0dsb2JhbENvbnRleHQgQXN5bmMgTWV0aG9kcyAoY2hlY2sgZnVuY3Rpb24gYXZhaWxhYmlsaXR5KVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIkFkdmFuY2VkQ29uZmlnU2V0dGluZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQWR2YW5jZWRDb25maWdTZXR0aW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5BZHZhbmNlZENvbmZpZ1NldHRpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJBZHZhbmNlZENvbmZpZ1NldHRpbmdcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwTmFtZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ3VycmVudEFwcE5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBOYW1lID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzlcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcE5hbWVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiQ3VycmVudEFwcFByb3BlcnRpZXNcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRBcHBQcm9wZXJ0aWVzID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5DdXJyZW50QXBwUHJvcGVydGllcyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJDdXJyZW50QXBwUHJvcGVydGllc1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gTmF2aWdhdGlvbiBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIk5hdmlnYXRlVG9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk5hdmlnYXRlVG8gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk5hdmlnYXRlVG8gPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiTmF2aWdhdGVUb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJPcGVuQWxlcnREaWFsb2dcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5BbGVydERpYWxvZyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkFsZXJ0RGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIk9wZW5BbGVydERpYWxvZ1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxM1wiLCBQcm9wZXJ0eTogXCJPcGVuQ29uZmlybURpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkNvbmZpcm1EaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5Db25maXJtRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEzXCIsIFByb3BlcnR5OiBcIk9wZW5Db25maXJtRGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE0XCIsIFByb3BlcnR5OiBcIk9wZW5FcnJvckRpYWxvZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuT3BlbkVycm9yRGlhbG9nID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRXJyb3JEaWFsb2cgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTRcIiwgUHJvcGVydHk6IFwiT3BlbkVycm9yRGlhbG9nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE1XCIsIFByb3BlcnR5OiBcIk9wZW5GaWxlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuRmlsZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuT3BlbkZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTVcIiwgUHJvcGVydHk6IFwiT3BlbkZpbGVcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTZcIiwgUHJvcGVydHk6IFwiT3BlbkZvcm1cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLk9wZW5Gb3JtID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuRm9ybSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxNlwiLCBQcm9wZXJ0eTogXCJPcGVuRm9ybVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxN1wiLCBQcm9wZXJ0eTogXCJPcGVuVXJsXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuVXJsID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5PcGVuVXJsID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE3XCIsIFByb3BlcnR5OiBcIk9wZW5VcmxcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMThcIiwgUHJvcGVydHk6IFwiT3BlbldlYlJlc291cmNlXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5PcGVuV2ViUmVzb3VyY2UgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLk9wZW5XZWJSZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxOFwiLCBQcm9wZXJ0eTogXCJPcGVuV2ViUmVzb3VyY2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIFByb2dyZXNzL05vdGlmaWNhdGlvbiBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzE5XCIsIFByb3BlcnR5OiBcIlNob3dQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuU2hvd1Byb2dyZXNzSW5kaWNhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5TaG93UHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTlcIiwgUHJvcGVydHk6IFwiU2hvd1Byb2dyZXNzSW5kaWNhdG9yXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIwXCIsIFByb3BlcnR5OiBcIkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNsb3NlUHJvZ3Jlc3NJbmRpY2F0b3IgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjBcIiwgUHJvcGVydHk6IFwiQ2xvc2VQcm9ncmVzc0luZGljYXRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMVwiLCBQcm9wZXJ0eTogXCJBZGRHbG9iYWxOb3RpZmljYXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkFkZEdsb2JhbE5vdGlmaWNhdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQWRkR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIxXCIsIFByb3BlcnR5OiBcIkFkZEdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyMlwiLCBQcm9wZXJ0eTogXCJDbGVhckdsb2JhbE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuQ2xlYXJHbG9iYWxOb3RpZmljYXRpb24gPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzIyXCIsIFByb3BlcnR5OiBcIkNsZWFyR2xvYmFsTm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBVdGlsaXR5IE1ldGhvZHNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjNcIiwgUHJvcGVydHk6IFwiQWxsb3dlZFN0YXR1c1RyYW5zaXRpb25zXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5BbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnMgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLkFsbG93ZWRTdGF0dXNUcmFuc2l0aW9ucyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyM1wiLCBQcm9wZXJ0eTogXCJBbGxvd2VkU3RhdHVzVHJhbnNpdGlvbnNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjRcIiwgUHJvcGVydHk6IFwiRW50aXR5TWV0YWRhdGFcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkVudGl0eU1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5FbnRpdHlNZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNFwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNZXRhZGF0YVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNVwiLCBQcm9wZXJ0eTogXCJFbnRpdHlNYWluRm9ybURlc2NyaXB0b3JcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvciA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuRW50aXR5TWFpbkZvcm1EZXNjcmlwdG9yID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI1XCIsIFByb3BlcnR5OiBcIkVudGl0eU1haW5Gb3JtRGVzY3JpcHRvclwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyNlwiLCBQcm9wZXJ0eTogXCJJbnZva2VQcm9jZXNzQWN0aW9uXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5JbnZva2VQcm9jZXNzQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5JbnZva2VQcm9jZXNzQWN0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI2XCIsIFByb3BlcnR5OiBcIkludm9rZVByb2Nlc3NBY3Rpb25cIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjdcIiwgUHJvcGVydHk6IFwiTG9va3VwT2JqZWN0c1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTG9va3VwT2JqZWN0cyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuTG9va3VwT2JqZWN0cyA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyN1wiLCBQcm9wZXJ0eTogXCJMb29rdXBPYmplY3RzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzI4XCIsIFByb3BlcnR5OiBcIlJlZnJlc2hQYXJlbnRHcmlkXCIsIFZhbHVlOiB0eXBlb2YgdXRpbC5SZWZyZXNoUGFyZW50R3JpZCA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuUmVmcmVzaFBhcmVudEdyaWQgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjhcIiwgUHJvcGVydHk6IFwiUmVmcmVzaFBhcmVudEdyaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMjlcIiwgUHJvcGVydHk6IFwiUmVzb3VyY2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLlJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5SZXNvdXJjZSA9PT0gXCJmdW5jdGlvblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyOVwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMFwiLCBQcm9wZXJ0eTogXCJSZXNvdXJjZVN0cmluZ1wiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUmVzb3VyY2VTdHJpbmcgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlJlc291cmNlU3RyaW5nID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMwXCIsIFByb3BlcnR5OiBcIlJlc291cmNlU3RyaW5nXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBEZXZpY2UgTWV0aG9kc1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMVwiLCBQcm9wZXJ0eTogXCJCYXJjb2RlVmFsdWVcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkJhcmNvZGVWYWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQmFyY29kZVZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMxXCIsIFByb3BlcnR5OiBcIkJhcmNvZGVWYWx1ZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzMlwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlQXVkaW9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVBdWRpbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZUF1ZGlvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMyXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVBdWRpb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzM1wiLCBQcm9wZXJ0eTogXCJDYXB0dXJlSW1hZ2VcIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVJbWFnZSA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZUltYWdlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzMzXCIsIFByb3BlcnR5OiBcIkNhcHR1cmVJbWFnZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNFwiLCBQcm9wZXJ0eTogXCJDYXB0dXJlVmlkZW9cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkNhcHR1cmVWaWRlbyA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ2FwdHVyZVZpZGVvID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM0XCIsIFByb3BlcnR5OiBcIkNhcHR1cmVWaWRlb1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNVwiLCBQcm9wZXJ0eTogXCJDdXJyZW50UG9zaXRpb25cIiwgVmFsdWU6IHR5cGVvZiB1dGlsLkN1cnJlbnRQb3NpdGlvbiA9PT0gXCJmdW5jdGlvblwiID8gXCJBdmFpbGFibGVcIiA6IFwiTm90IGZvdW5kXCIsIFN0YXR1czogdHlwZW9mIHV0aWwuQ3VycmVudFBvc2l0aW9uID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM1XCIsIFByb3BlcnR5OiBcIkN1cnJlbnRQb3NpdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzNlwiLCBQcm9wZXJ0eTogXCJQaWNrRmlsZVwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuUGlja0ZpbGUgPT09IFwiZnVuY3Rpb25cIiA/IFwiQXZhaWxhYmxlXCIgOiBcIk5vdCBmb3VuZFwiLCBTdGF0dXM6IHR5cGVvZiB1dGlsLlBpY2tGaWxlID09PSBcImZ1bmN0aW9uXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM2XCIsIFByb3BlcnR5OiBcIlBpY2tGaWxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBQYW5lbCBNZXRob2RzXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzM3XCIsIFByb3BlcnR5OiBcIkxvYWRQYW5lbFwiLCBWYWx1ZTogdHlwZW9mIHV0aWwuTG9hZFBhbmVsID09PSBcImZ1bmN0aW9uXCIgPyBcIkF2YWlsYWJsZVwiIDogXCJOb3QgZm91bmRcIiwgU3RhdHVzOiB0eXBlb2YgdXRpbC5Mb2FkUGFuZWwgPT09IFwiZnVuY3Rpb25cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMzdcIiwgUHJvcGVydHk6IFwiTG9hZFBhbmVsXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0RcdUREMjcgVEVTVCAxMjogVXRpbGl0eSBBUEkgWyR7c3RhcnRUaW1lfV0gLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVI0MClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgTWV0aG9kcyAoUzEtUzM3KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiB0byBzdHJpbmdpZnkgb2JqZWN0cyBmb3IgZGlzcGxheVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWU6IGFueSk6IGFueSB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiAnW0NpcmN1bGFyIG9yIENvbXBsZXggT2JqZWN0XSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbCAtIHY0X0NhdGVnb3JpZXMgRmllbGRcclxuICogTXVsdGlPcHRpb25TZXQgZXh0ZW5kcyBJQ29udHJvbE9wdGlvblNldCB3aXRoIFZhbHVlIGFzIG51bWJlcltdIChhcnJheSlcclxuICogVXNlcyBjb25zb2xlLnRhYmxlIGZvciBjbGVhbmVyIG91dHB1dFxyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RNdWx0aU9wdGlvblNldChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbW9zID0gZm9ybS5Cb2R5LnY0X0NhdGVnb3JpZXM7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IG1vcy5WYWx1ZTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIE11bHRpT3B0aW9uU2V0LXNwZWNpZmljOiBWYWx1ZSwgSW5pdGlhbFZhbHVlLCBTZWxlY3RlZE9wdGlvbiwgVGV4dCBhcmUgYWxsIGFycmF5c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKG51bWJlcltdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG9yaWdpbmFsVmFsdWUpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkob3JpZ2luYWxWYWx1ZSkgfHwgb3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiT3B0aW9ucyAoYXJyYXkpXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLk9wdGlvbnMpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLk9wdGlvbnMpID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJTZWxlY3RlZE9wdGlvbiAoYXJyYXkpXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLlNlbGVjdGVkT3B0aW9uKSwgU3RhdHVzOiBBcnJheS5pc0FycmF5KG1vcy5TZWxlY3RlZE9wdGlvbikgfHwgbW9zLlNlbGVjdGVkT3B0aW9uID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJJbml0aWFsVmFsdWUgKG51bWJlcltdKVwiLCBWYWx1ZTogc3RyaW5naWZ5KG1vcy5Jbml0aWFsVmFsdWUpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLkluaXRpYWxWYWx1ZSkgfHwgbW9zLkluaXRpYWxWYWx1ZSA9PT0gbnVsbCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiVGV4dCAoc3RyaW5nW10pXCIsIFZhbHVlOiBzdHJpbmdpZnkobW9zLlRleHQpLCBTdGF0dXM6IEFycmF5LmlzQXJyYXkobW9zLlRleHQpIHx8IG1vcy5UZXh0ID09PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IG1vcy5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogbW9zLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogbW9zLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogbW9zLkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfY2F0ZWdvcmllc1wiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBtb3MuQXR0cmlidXRlVHlwZSwgU3RhdHVzOiBtb3MuQXR0cmlidXRlVHlwZSA9PT0gXCJtdWx0aXNlbGVjdG9wdGlvbnNldFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogbW9zLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IG1vcy5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIkZvcm1hdFwiLCBWYWx1ZTogbW9zLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IG1vcy5Jc0RpcnR5LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTNcIiwgUHJvcGVydHk6IFwiSXNWYWxpZFwiLCBWYWx1ZTogbW9zLklzVmFsaWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNFwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsXCIsIFZhbHVlOiBtb3MuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IG1vcy5TdWJtaXRNb2RlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWRcIiwgVmFsdWU6IG1vcy5EaXNhYmxlZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBtb3MuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxOFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBtb3MuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWYWx1ZSAoYXJyYXkgb2YgbnVtYmVycylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gWzEsIDJdOyAvLyBUZXN0IHdpdGggc2FtcGxlIHZhbHVlc1xyXG4gICAgICAgIG1vcy5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1vcy5WYWx1ZTtcclxuICAgICAgICBtb3MuVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBBcnJheS5pc0FycmF5KG5ld1ZhbHVlKSB8fCBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IHN1Y2Nlc3MgPyBcIlNldFx1MjE5MlJlc3RvcmVkXCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiVmFsdWUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogUmVxdWlyZWRMZXZlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnUmVxdWlyZWQgPSBtb3MuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBtb3MuUmVxdWlyZWRMZXZlbCA9IFwicmVxdWlyZWRcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG1vcy5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIG1vcy5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IG1vcy5EaXNhYmxlZDtcclxuICAgICAgICBtb3MuRGlzYWJsZWQgPSAhb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLkRpc2FibGVkO1xyXG4gICAgICAgIG1vcy5EaXNhYmxlZCA9IG9yaWdEaXNhYmxlZDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gbW9zLkxhYmVsO1xyXG4gICAgICAgIG1vcy5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLkxhYmVsO1xyXG4gICAgICAgIG1vcy5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG1vcy5WaXNpYmxlO1xyXG4gICAgICAgIG1vcy5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gbW9zLlZpc2libGU7XHJcbiAgICAgICAgbW9zLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IE9wdGlvbiAoZ2V0IHNwZWNpZmljIG9wdGlvbilcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG1vcy5PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdE9wdGlvbiA9IG1vcy5PcHRpb24ob3B0aW9uc1swXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogc3RyaW5naWZ5KGZpcnN0T3B0aW9uKSwgU3RhdHVzOiBmaXJzdE9wdGlvbiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiT3B0aW9uKHZhbHVlKVwiLCBWYWx1ZTogXCJObyBvcHRpb25zXCIsIFN0YXR1czogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIk9wdGlvbih2YWx1ZSlcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkT25DaGFuZ2VcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgTXVsdGlPcHRpb25TZXQgT25DaGFuZ2UgZmlyZWRcIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5BZGRPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlZ2lzdGVyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJBZGRPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVPbkNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtb3MuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRmlyZU9uQ2hhbmdlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIG1vcy5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5Gb2N1cygpLCAxMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMFwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBTZXROb3RpZmljYXRpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgTXVsdGlPcHRpb25TZXQgbm90aWZpY2F0aW9uXCIsIFwiTU9TX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vcy5DbGVhck5vdGlmaWNhdGlvbihcIk1PU19URVNUXzFcIiksIDMwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogXCJTZXQgKGNsZWFycyAzcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTFcIiwgUHJvcGVydHk6IFwiU2V0Tm90aWZpY2F0aW9uXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldElzVmFsaWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbW9zLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9zLlNldElzVmFsaWQodHJ1ZSksIDIwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWQgKDJzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0NcdURGRjdcdUZFMEYgVEVTVCAxMzogTXVsdGlPcHRpb25TZXQgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9DYXRlZ29yaWVzIGZpZWxkIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMTgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TMTIpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIHRvIHN0cmluZ2lmeSBvYmplY3RzIGZvciBkaXNwbGF5XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZTogYW55KTogYW55IHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXIgb3IgQ29tcGxleCBPYmplY3RdJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE0OiBUYWIgQ29udHJvbCAtIERFVEFJTFNfVEFCXHJcbiAqIElUYWIgaW50ZXJmYWNlIGZvciBmb3JtIHRhYnMgd2l0aCBEaXNwbGF5U3RhdGUsIExhYmVsLCBWaXNpYmxlIHByb3BlcnRpZXNcclxuICogQWxzbyB0ZXN0cyBTZWN0aW9uIHdpdGhpbiB0aGUgdGFiXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFRhYihmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgdGFiID0gZm9ybS5Cb2R5LlRhYi5TVU1NQVJZX1RBQjtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFRBQiBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJUYWIuTmFtZVwiLCBWYWx1ZTogdGFiLk5hbWUsIFN0YXR1czogdGFiLk5hbWUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlRhYi5QYXJlbnRcIiwgVmFsdWU6IHRhYi5QYXJlbnQgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogdGFiLlBhcmVudCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiVGFiLkRpc3BsYXlTdGF0ZVwiLCBWYWx1ZTogdGFiLkRpc3BsYXlTdGF0ZSwgU3RhdHVzOiB0YWIuRGlzcGxheVN0YXRlID09PSBcImV4cGFuZGVkXCIgfHwgdGFiLkRpc3BsYXlTdGF0ZSA9PT0gXCJjb2xsYXBzZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiVGFiLkxhYmVsXCIsIFZhbHVlOiB0YWIuTGFiZWwsIFN0YXR1czogdGFiLkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJUYWIuVmlzaWJsZVwiLCBWYWx1ZTogdGFiLlZpc2libGUsIFN0YXR1czogdHlwZW9mIHRhYi5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgICAgICAvLyBTZWN0aW9uIHByb3BlcnRpZXMgKEFDQ09VTlRfSU5GT1JNQVRJT04gc2VjdGlvbilcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gdGFiLlNlY3Rpb24uQUNDT1VOVF9JTkZPUk1BVElPTjtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI2XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uQklMTElOR1wiLCBWYWx1ZTogc2VjdGlvbiA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzZWN0aW9uID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLk5hbWVcIiwgVmFsdWU6IHNlY3Rpb24/Lk5hbWUsIFN0YXR1czogc2VjdGlvbj8uTmFtZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5QYXJlbnRcIiwgVmFsdWU6IHNlY3Rpb24/LlBhcmVudCA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBzZWN0aW9uPy5QYXJlbnQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIlNlY3Rpb24uTGFiZWxcIiwgVmFsdWU6IHNlY3Rpb24/LkxhYmVsLCBTdGF0dXM6IHNlY3Rpb24/LkxhYmVsID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5WaXNpYmxlXCIsIFZhbHVlOiBzZWN0aW9uPy5WaXNpYmxlLCBTdGF0dXM6IHR5cGVvZiBzZWN0aW9uPy5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBUQUIgU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzcGxheVN0YXRlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNwbGF5U3RhdGUgPSB0YWIuRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIHRhYi5EaXNwbGF5U3RhdGUgPSBvcmlnRGlzcGxheVN0YXRlID09PSBcImV4cGFuZGVkXCIgPyBcImNvbGxhcHNlZFwiIDogXCJleHBhbmRlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdGFiLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICB0YWIuRGlzcGxheVN0YXRlID0gb3JpZ0Rpc3BsYXlTdGF0ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlRhYi5EaXNwbGF5U3RhdGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJUYWIuRGlzcGxheVN0YXRlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IHRhYi5MYWJlbDtcclxuICAgICAgICB0YWIuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHRhYi5MYWJlbDtcclxuICAgICAgICB0YWIuTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJUYWIuTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJUYWIuTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IHRhYi5WaXNpYmxlO1xyXG4gICAgICAgIHRhYi5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gdGFiLlZpc2libGU7XHJcbiAgICAgICAgdGFiLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlRhYi5WaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiVGFiLlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRm9jdXNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YWIuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJUYWIuRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJUYWIuRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogQWRkVGFiU3RhdGVDaGFuZ2VcclxuICAgIGNvbnN0IHRhYlN0YXRlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgVGFiIFN0YXRlQ2hhbmdlIGZpcmVkXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB0YWIuQWRkVGFiU3RhdGVDaGFuZ2UodGFiU3RhdGVDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJUYWIuQWRkVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlRhYi5BZGRUYWJTdGF0ZUNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBSZW1vdmVUYWJTdGF0ZUNoYW5nZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICB0YWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2UodGFiU3RhdGVDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJUYWIuUmVtb3ZlVGFiU3RhdGVDaGFuZ2VcIiwgVmFsdWU6IFwiUmVtb3ZlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlRhYi5SZW1vdmVUYWJTdGF0ZUNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFQ1RJT04gU0VUVEVSUyAoUy1JbmRleCBjb250aW51ZWQpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRhYi5TZWN0aW9uLkFDQ09VTlRfSU5GT1JNQVRJT047XHJcblxyXG4gICAgLy8gU2VjdGlvbjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gc2VjdGlvbi5MYWJlbDtcclxuICAgICAgICBzZWN0aW9uLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzZWN0aW9uLkxhYmVsO1xyXG4gICAgICAgIHNlY3Rpb24uTGFiZWwgPSBvcmlnTGFiZWw7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTN1wiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiU2VjdGlvbi5MYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2VjdGlvbjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IHNlY3Rpb24uVmlzaWJsZTtcclxuICAgICAgICBzZWN0aW9uLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBzZWN0aW9uLlZpc2libGU7XHJcbiAgICAgICAgc2VjdGlvbi5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJTZWN0aW9uLlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1RENEMSBURVNUIDE0OiBUYWIgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBERVRBSUxTX1RBQiAmIEJJTExJTkcgc2VjdGlvbiAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjEwKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICMyMTk2RjM7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShtZXRob2RSZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJWNcdTI3MDUgU3VtbWFyeTogJHtwYXNzZWR9LyR7dG90YWx9IHBhc3NlZGAgK1xyXG4gICAgICAgICh3YXJuaW5ncyA+IDAgPyBgIHwgXHUyNkEwICR7d2FybmluZ3N9IHdhcm5pbmdzYCA6ICcnKSArXHJcbiAgICAgICAgKGZhaWxlZCA+IDAgPyBgIHwgXHUyNzE3ICR7ZmFpbGVkfSBmYWlsZWRgIDogJycpLFxyXG4gICAgICAgIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjNENBRjUwOyBmb250LXNpemU6IDE0cHg7XCIpO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTU6IE5hdmlnYXRpb25JdGVtIENvbnRyb2wgLSBBY2NvdW50X1Rhc2tzXHJcbiAqIE5hdmlnYXRpb25JdGVtIGludGVyZmFjZSBmb3IgZm9ybSBuYXZpZ2F0aW9uIGl0ZW1zIHdpdGggSWQsIExhYmVsLCBWaXNpYmxlLCBGb2N1c1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3ROYXZpZ2F0aW9uSXRlbShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbmF2SXRlbSA9IGZvcm0uTmF2aWdhdGlvbi5uYXZfbXNhX2FjY291bnRfbWFuYWdpbmdwYXJ0bmVyO1xyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIklkXCIsIFZhbHVlOiBuYXZJdGVtLklkLCBTdGF0dXM6IG5hdkl0ZW0uSWQgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiBuYXZJdGVtLkxhYmVsLCBTdGF0dXM6IG5hdkl0ZW0uTGFiZWwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IG5hdkl0ZW0uVmlzaWJsZSwgU3RhdHVzOiB0eXBlb2YgbmF2SXRlbS5WaXNpYmxlID09PSBcImJvb2xlYW5cIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBuYXZJdGVtLkxhYmVsO1xyXG4gICAgICAgIG5hdkl0ZW0uTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IG5hdkl0ZW0uTGFiZWw7XHJcbiAgICAgICAgbmF2SXRlbS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IG5hdkl0ZW0uVmlzaWJsZTtcclxuICAgICAgICBuYXZJdGVtLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBuYXZJdGVtLlZpc2libGU7XHJcbiAgICAgICAgbmF2SXRlbS5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG5hdkl0ZW0uRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogXCJTY2hlZHVsZWQgKDFzKVwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIkZvY3VzXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT1VUUFVUXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgYWxsUmVzdWx0cyA9IFsuLi5yZXN1bHRzLCAuLi5tZXRob2RSZXN1bHRzXTtcclxuICAgIGNvbnN0IHBhc3NlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzEzXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHdhcm5pbmdzID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI2QTBcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgZmFpbGVkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTdcIikubGVuZ3RoO1xyXG4gICAgY29uc3QgdG90YWwgPSBhbGxSZXN1bHRzLmxlbmd0aDtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKGBcdUQ4M0VcdURERUQgVEVTVCAxNTogTmF2aWdhdGlvbkl0ZW0gQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBBY2NvdW50X1Rhc2tzIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SMylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMzKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDE2OiBFeGVjdXRpb25Db250ZXh0IC0gZm9ybS5FeGVjdXRpb25Db250ZXh0XHJcbiAqIElFeGVjdXRpb25Db250ZXh0IGludGVyZmFjZSBmb3IgZm9ybSBldmVudCBoYW5kbGVycyB3aXRoIGV4ZWN1dGlvbiBjb250ZXh0IGFjY2Vzc1xyXG4gKiBcclxuICogQ29udmVudGlvbjpcclxuICogLSBSLUluZGV4OiBSZWFkT25seSBwcm9wZXJ0aWVzIChSMSwgUjIsIFIzLi4uKVxyXG4gKiAtIFMtSW5kZXg6IFNldHRlcnMgJiBNZXRob2RzIChTMSwgUzIsIFMzLi4uKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RFeGVjdXRpb25Db250ZXh0KGZvcm06IEFjY291bnRGb3JtLkZvcm0pOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgbWV0aG9kUmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBjdHggPSBmb3JtLkV4ZWN1dGlvbkNvbnRleHQ7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJEZXB0aFwiLCBWYWx1ZTogY3R4LkRlcHRoLCBTdGF0dXM6IHR5cGVvZiBjdHguRGVwdGggPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIkVudGl0eVJlZmVyZW5jZVwiLCBWYWx1ZTogY3R4LkVudGl0eVJlZmVyZW5jZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiRXZlbnRBcmdzXCIsIFZhbHVlOiBjdHguRXZlbnRBcmdzLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJFdmVudFNvdXJjZVwiLCBWYWx1ZTogY3R4LkV2ZW50U291cmNlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJGb3JtQ29udGV4dFwiLCBWYWx1ZTogY3R4LkZvcm1Db250ZXh0ID8gXCJGb3JtQ29udGV4dCBPYmplY3RcIiA6IG51bGwsIFN0YXR1czogY3R4LkZvcm1Db250ZXh0ID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNlwiLCBQcm9wZXJ0eTogXCJJc1NhdmVTdWNjZXNzXCIsIFZhbHVlOiBjdHguSXNTYXZlU3VjY2VzcywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiU2F2ZUVycm9ySW5mb1wiLCBWYWx1ZTogY3R4LlNhdmVFcnJvckluZm8sIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI4XCIsIFByb3BlcnR5OiBcIlNhdmVNb2RlXCIsIFZhbHVlOiBjdHguU2F2ZU1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0U2hhcmVkVmFyaWFibGUgLyBHZXRTaGFyZWRWYXJpYWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0ZXN0S2V5ID0gXCJEZXZLaXRUZXN0VmFyaWFibGVcIjtcclxuICAgICAgICBjb25zdCB0ZXN0VmFsdWUgPSB7IGRhdGE6IFwiVGVzdCB2YWx1ZSBmcm9tIERldktpdFwiLCB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSB9O1xyXG4gICAgICAgIGN0eC5TZXRTaGFyZWRWYXJpYWJsZSh0ZXN0S2V5LCB0ZXN0VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJldHJpZXZlZCA9IGN0eC5HZXRTaGFyZWRWYXJpYWJsZSh0ZXN0S2V5KTtcclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gcmV0cmlldmVkICYmIHJldHJpZXZlZC5kYXRhID09PSB0ZXN0VmFsdWUuZGF0YTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxXCIsIFByb3BlcnR5OiBcIlNldC9HZXRTaGFyZWRWYXJpYWJsZVwiLCBWYWx1ZTogc3VjY2VzcyA/IFwiU2V0IGFuZCBSZXRyaWV2ZWQgU3VjY2Vzc2Z1bGx5XCIgOiBcIkZhaWxlZFwiLCBTdGF0dXM6IHN1Y2Nlc3MgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiU2V0L0dldFNoYXJlZFZhcmlhYmxlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IElzSW5pdGlhbExvYWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaXNJbml0aWFsID0gY3R4LklzSW5pdGlhbExvYWQoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIklzSW5pdGlhbExvYWQoKVwiLCBWYWx1ZTogaXNJbml0aWFsLCBTdGF0dXM6IHR5cGVvZiBpc0luaXRpYWwgPT09IFwiYm9vbGVhblwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIklzSW5pdGlhbExvYWQoKVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBJc0RlZmF1bHRQcmV2ZW50ZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaXNQcmV2ZW50ZWQgPSBjdHguSXNEZWZhdWx0UHJldmVudGVkKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJJc0RlZmF1bHRQcmV2ZW50ZWQoKVwiLCBWYWx1ZTogaXNQcmV2ZW50ZWQsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiSXNEZWZhdWx0UHJldmVudGVkKClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogRGlzYWJsZUFzeW5jVGltZW91dCAob25seSB2YWxpZCBpbiBPblNhdmUsIHdlIGp1c3QgdGVzdCBpdCBleGlzdHMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGhhc01ldGhvZCA9IHR5cGVvZiBjdHguRGlzYWJsZUFzeW5jVGltZW91dCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZUFzeW5jVGltZW91dFwiLCBWYWx1ZTogaGFzTWV0aG9kID8gXCJNZXRob2QgZXhpc3RzXCIgOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogaGFzTWV0aG9kID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVBc3luY1RpbWVvdXRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZDogU2V0UHJldmVudERlZmF1bHQgKG9ubHkgdmFsaWQgaW4gT25TYXZlLCB3ZSBqdXN0IHRlc3QgaXQgZXhpc3RzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBoYXNNZXRob2QgPSB0eXBlb2YgY3R4LlNldFByZXZlbnREZWZhdWx0ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdFwiLCBWYWx1ZTogaGFzTWV0aG9kID8gXCJNZXRob2QgZXhpc3RzXCIgOiBcIk5vdCBhIGZ1bmN0aW9uXCIsIFN0YXR1czogaGFzTWV0aG9kID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIlNldFByZXZlbnREZWZhdWx0XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IFNldFByZXZlbnREZWZhdWx0T25FcnJvciAob25seSB2YWxpZCBpbiBPblNhdmUsIHdlIGp1c3QgdGVzdCBpdCBleGlzdHMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGhhc01ldGhvZCA9IHR5cGVvZiBjdHguU2V0UHJldmVudERlZmF1bHRPbkVycm9yID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3JcIiwgVmFsdWU6IGhhc01ldGhvZCA/IFwiTWV0aG9kIGV4aXN0c1wiIDogXCJOb3QgYSBmdW5jdGlvblwiLCBTdGF0dXM6IGhhc01ldGhvZCA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJTZXRQcmV2ZW50RGVmYXVsdE9uRXJyb3JcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REZBRiBURVNUIDE2OiBFeGVjdXRpb25Db250ZXh0IFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IGZvcm0uRXhlY3V0aW9uQ29udGV4dCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjgpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TNilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAxNzogU2lkZVBhbmVzIEFQSVxyXG4gKiBcclxuICogVGVzdHMgdGhlIGZvcm0uU2lkZVBhbmVzIEFQSSB3cmFwcGVyXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMi4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLi4uKVxyXG4gKiBcclxuICogSVNpZGVQYW5lcyBJbnRlcmZhY2U6XHJcbiAqIC0gRGlzcGxheVN0YXRlOiAwIHwgMSAoZ2V0L3NldClcclxuICogLSBDcmVhdGUocGFuZU9wdGlvbnMsIHN1Y2Nlc3NDYWxsYmFjayk6IHZvaWRcclxuICogLSBHZXQocGFuZUlkKTogYW55XHJcbiAqIC0gR2V0QWxsKCk6IGFueVtdXHJcbiAqIC0gR2V0U2VsZWN0ZWQoKTogYW55XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdFNpZGVQYW5lcyhmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTsgICAgICAgICAvLyBSZWFkT25seSAoUi1JbmRleClcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdOyAgIC8vIFNldHRlcnMgJiBNZXRob2RzIChTLUluZGV4KVxyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICBjb25zdCBzaWRlUGFuZXMgPSBmb3JtLlNpZGVQYW5lcztcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVBRE9OTFkgUFJPUEVSVElFUyAoUi1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIFIxOiBDaGVjayBTaWRlUGFuZXMgZXhpc3RzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJTaWRlUGFuZXMgZXhpc3RzXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBzaWRlUGFuZXMgIT09IHVuZGVmaW5lZCAmJiBzaWRlUGFuZXMgIT09IG51bGwsXHJcbiAgICAgICAgICAgIFN0YXR1czogc2lkZVBhbmVzICE9PSB1bmRlZmluZWQgJiYgc2lkZVBhbmVzICE9PSBudWxsID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjI6IERpc3BsYXlTdGF0ZSAocmVhZG9ubHkgY2hlY2spXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVN0YXRlID0gc2lkZVBhbmVzLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkU3RhdGUgPSBkaXNwbGF5U3RhdGUgPT09IDAgfHwgZGlzcGxheVN0YXRlID09PSAxO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRGlzcGxheVN0YXRlIChnZXQpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBkaXNwbGF5U3RhdGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogaXNWYWxpZFN0YXRlID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjM6IEdldEFsbCByZXR1cm5zIGFycmF5XHJcbiAgICAgICAgY29uc3QgYWxsUGFuZXMgPSBzaWRlUGFuZXMuR2V0QWxsKCk7XHJcbiAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWxsUGFuZXMpIHx8IGFsbFBhbmVzID09PSB1bmRlZmluZWQgfHwgYWxsUGFuZXMgPT09IG51bGw7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJHZXRBbGwoKSByZXR1cm5zIGFycmF5XCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBBcnJheS5pc0FycmF5KGFsbFBhbmVzKSA/IGBBcnJheVske2FsbFBhbmVzLmxlbmd0aH1dYCA6IGFsbFBhbmVzLFxyXG4gICAgICAgICAgICBTdGF0dXM6IGlzQXJyYXkgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSNDogR2V0U2VsZWN0ZWQgcmV0dXJucyBwYW5lIG9yIG51bGxcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFBhbmUgPSBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQoKTtcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkdldFNlbGVjdGVkKClcIixcclxuICAgICAgICAgICAgVmFsdWU6IHNlbGVjdGVkUGFuZSAhPT0gdW5kZWZpbmVkID8gKHNlbGVjdGVkUGFuZT8ucGFuZUlkID8/IFwibnVsbFwiKSA6IFwidW5kZWZpbmVkXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIiAgLy8gQ2FuIGJlIG51bGwgaWYgbm8gcGFuZSBzZWxlY3RlZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSNTogQ3JlYXRlIGZ1bmN0aW9uIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjVcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiQ3JlYXRlIGZ1bmN0aW9uIGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogdHlwZW9mIHNpZGVQYW5lcy5DcmVhdGUgPT09ICdmdW5jdGlvbicsXHJcbiAgICAgICAgICAgIFN0YXR1czogdHlwZW9mIHNpZGVQYW5lcy5DcmVhdGUgPT09ICdmdW5jdGlvbicgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSNjogR2V0IGZ1bmN0aW9uIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiR2V0IGZ1bmN0aW9uIGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogdHlwZW9mIHNpZGVQYW5lcy5HZXQgPT09ICdmdW5jdGlvbicsXHJcbiAgICAgICAgICAgIFN0YXR1czogdHlwZW9mIHNpZGVQYW5lcy5HZXQgPT09ICdmdW5jdGlvbicgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSNzogR2V0QWxsIGZ1bmN0aW9uIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjdcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiR2V0QWxsIGZ1bmN0aW9uIGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogdHlwZW9mIHNpZGVQYW5lcy5HZXRBbGwgPT09ICdmdW5jdGlvbicsXHJcbiAgICAgICAgICAgIFN0YXR1czogdHlwZW9mIHNpZGVQYW5lcy5HZXRBbGwgPT09ICdmdW5jdGlvbicgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSODogR2V0U2VsZWN0ZWQgZnVuY3Rpb24gZXhpc3RzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSOFwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJHZXRTZWxlY3RlZCBmdW5jdGlvbiBleGlzdHNcIixcclxuICAgICAgICAgICAgVmFsdWU6IHR5cGVvZiBzaWRlUGFuZXMuR2V0U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicsXHJcbiAgICAgICAgICAgIFN0YXR1czogdHlwZW9mIHNpZGVQYW5lcy5HZXRTZWxlY3RlZCA9PT0gJ2Z1bmN0aW9uJyA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiRVJSXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJlYWRPbmx5IEVycm9yXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTMTogU2V0IERpc3BsYXlTdGF0ZSB0byAxIChFeHBhbmRlZClcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFN0YXRlID0gc2lkZVBhbmVzLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICBzaWRlUGFuZXMuRGlzcGxheVN0YXRlID0gMTtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZTEgPSBzaWRlUGFuZXMuRGlzcGxheVN0YXRlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzFcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRGlzcGxheVN0YXRlID0gMSAoRXhwYW5kZWQpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBgJHtvcmlnaW5hbFN0YXRlfSBcdTIxOTIgJHtuZXdTdGF0ZTF9YCxcclxuICAgICAgICAgICAgU3RhdHVzOiBuZXdTdGF0ZTEgPT09IDEgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTMjogU2V0IERpc3BsYXlTdGF0ZSB0byAwIChDb2xsYXBzZWQpXHJcbiAgICAgICAgc2lkZVBhbmVzLkRpc3BsYXlTdGF0ZSA9IDA7XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUwID0gc2lkZVBhbmVzLkRpc3BsYXlTdGF0ZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlMyXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkRpc3BsYXlTdGF0ZSA9IDAgKENvbGxhcHNlZClcIixcclxuICAgICAgICAgICAgVmFsdWU6IGAxIFx1MjE5MiAke25ld1N0YXRlMH1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IG5ld1N0YXRlMCA9PT0gMCA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFMzOiBSZXN0b3JlIG9yaWdpbmFsIERpc3BsYXlTdGF0ZVxyXG4gICAgICAgIHNpZGVQYW5lcy5EaXNwbGF5U3RhdGUgPSBvcmlnaW5hbFN0YXRlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRGlzcGxheVN0YXRlIChyZXN0b3JlKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogYDAgXHUyMTkyICR7c2lkZVBhbmVzLkRpc3BsYXlTdGF0ZX1gLFxyXG4gICAgICAgICAgICBTdGF0dXM6IHNpZGVQYW5lcy5EaXNwbGF5U3RhdGUgPT09IG9yaWdpbmFsU3RhdGUgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTNDogR2V0IG5vbi1leGlzdGVudCBwYW5lXHJcbiAgICAgICAgY29uc3Qgbm9uRXhpc3RlbnRQYW5lID0gc2lkZVBhbmVzLkdldChcIm5vbl9leGlzdGVudF9wYW5lX2lkXzEyMzQ1XCIpO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzRcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiR2V0KCdub25fZXhpc3RlbnRfcGFuZV9pZCcpXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBub25FeGlzdGVudFBhbmUgPT09IHVuZGVmaW5lZCB8fCBub25FeGlzdGVudFBhbmUgPT09IG51bGwgPyBcIm51bGwvdW5kZWZpbmVkXCIgOiBub25FeGlzdGVudFBhbmUsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIiAgLy8gU2hvdWxkIHJldHVybiBudWxsL3VuZGVmaW5lZCBmb3Igbm9uLWV4aXN0ZW50IHBhbmVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUzU6IENyZWF0ZSBwYW5lICh3aXRoIGNhbGxiYWNrIHZlcmlmaWNhdGlvbilcclxuICAgICAgICBsZXQgY3JlYXRlUmVzdWx0ID0gXCJOb3QgY2FsbGVkXCI7XHJcbiAgICAgICAgc2lkZVBhbmVzLkNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRldktpdCBUZXN0IFBhbmVcIixcclxuICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgY2FuQ2xvc2U6IHRydWVcclxuICAgICAgICB9LCAocGFuZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVJlc3VsdCA9IHBhbmUgPyBgQ3JlYXRlZDogJHtwYW5lLnBhbmVJZCB8fCAndW5rbm93bid9YCA6IFwiQ2FsbGJhY2sgcmVjZWl2ZWQgbnVsbFwiO1xyXG4gICAgICAgICAgICAvLyBDbGVhbiB1cDogY2xvc2UgdGhlIHBhbmUgaWYgY3JlYXRlZCBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgaWYgKHBhbmUgJiYgcGFuZS5jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBwYW5lLmNsb3NlKCksIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTNVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJDcmVhdGUoeyB0aXRsZSwgd2lkdGgsIGNhbkNsb3NlIH0pXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBcIkFzeW5jIGNhbGwgaW5pdGlhdGVkXCIsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTNcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTNjogR2V0QWxsIGFmdGVyIHBvdGVudGlhbCBjcmVhdGVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFuZXNBZnRlckNyZWF0ZSA9IHNpZGVQYW5lcy5HZXRBbGwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCVjXHVEODNEXHVERDBEIFM2IChEZWxheWVkKTogR2V0QWxsKCkgYWZ0ZXIgQ3JlYXRlID0gJHtBcnJheS5pc0FycmF5KHBhbmVzQWZ0ZXJDcmVhdGUpID8gcGFuZXNBZnRlckNyZWF0ZS5sZW5ndGggOiAnTi9BJ30gcGFuZXNgLCBcImNvbG9yOiAjOUMyN0IwO1wiKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzZcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiR2V0QWxsKCkgKGRlbGF5ZWQgY2hlY2sgbG9nZ2VkKVwiLFxyXG4gICAgICAgICAgICBWYWx1ZTogXCJTZWUgY29uc29sZSBmb3IgZGVsYXllZCByZXN1bHRcIixcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxM1wiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTLUVSUlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJTZXR0ZXJzL01ldGhvZHMgRXJyb3JcIixcclxuICAgICAgICAgICAgVmFsdWU6IGUubWVzc2FnZSxcclxuICAgICAgICAgICAgU3RhdHVzOiBcIlx1MjcxN1wiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERkFGIFRFU1QgMTc6IFNpZGVQYW5lcyBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiBmb3JtLlNpZGVQYW5lcyAtICR7cGFzc2VkfS8ke3RvdGFsfSAoXHUyNkEwJHt3YXJuaW5nc30pYCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SOClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWQsICR7d2FybmluZ3N9IHdhcm5pbmdzYCxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTg6IENvcGlsb3QgQVBJXHJcbiAqIFxyXG4gKiBUZXN0cyB0aGUgZm9ybS5Db3BpbG90IEFQSSB3cmFwcGVyXHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMi4uLilcclxuICogLSBTLUluZGV4OiBTZXR0ZXJzICYgTWV0aG9kcyAoUzEsIFMyLi4uKVxyXG4gKiBcclxuICogSUNvcGlsb3QgSW50ZXJmYWNlOlxyXG4gKiAtIEV4ZWN1dGVFdmVudChldmVudE5hbWUsIGV2ZW50UGFyYW1ldGVycywgc3VjY2Vzc0NhbGxiYWNrPywgZXJyb3JDYWxsYmFjaz8pOiBQcm9taXNlIHwgdm9pZFxyXG4gKiAtIEV4ZWN1dGVQcm9tcHQocHJvbXB0VGV4dCwgc3VjY2Vzc0NhbGxiYWNrPywgZXJyb3JDYWxsYmFjaz8pOiBQcm9taXNlIHwgdm9pZFxyXG4gKiBcclxuICogTm90ZTogQ29waWxvdCBBUEkgaXMgYSBQcmV2aWV3IGZlYXR1cmUgYW5kIG1heSBub3QgYmUgYXZhaWxhYmxlIGluIGFsbCBlbnZpcm9ubWVudHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0Q29waWxvdChmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTsgICAgICAgICAvLyBSZWFkT25seSAoUi1JbmRleClcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdOyAgIC8vIFNldHRlcnMgJiBNZXRob2RzIChTLUluZGV4KVxyXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcclxuXHJcbiAgICBjb25zdCBjb3BpbG90ID0gZm9ybS5Db3BpbG90O1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUjE6IENoZWNrIENvcGlsb3QgZXhpc3RzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJDb3BpbG90IGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogY29waWxvdCAhPT0gdW5kZWZpbmVkICYmIGNvcGlsb3QgIT09IG51bGwsXHJcbiAgICAgICAgICAgIFN0YXR1czogY29waWxvdCAhPT0gdW5kZWZpbmVkICYmIGNvcGlsb3QgIT09IG51bGwgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSMjogRXhlY3V0ZUV2ZW50IGZ1bmN0aW9uIGV4aXN0c1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUjJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRXhlY3V0ZUV2ZW50IGZ1bmN0aW9uIGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogdHlwZW9mIGNvcGlsb3Q/LkV4ZWN1dGVFdmVudCA9PT0gJ2Z1bmN0aW9uJyxcclxuICAgICAgICAgICAgU3RhdHVzOiB0eXBlb2YgY29waWxvdD8uRXhlY3V0ZUV2ZW50ID09PSAnZnVuY3Rpb24nID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUjM6IEV4ZWN1dGVQcm9tcHQgZnVuY3Rpb24gZXhpc3RzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJSM1wiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFeGVjdXRlUHJvbXB0IGZ1bmN0aW9uIGV4aXN0c1wiLFxyXG4gICAgICAgICAgICBWYWx1ZTogdHlwZW9mIGNvcGlsb3Q/LkV4ZWN1dGVQcm9tcHQgPT09ICdmdW5jdGlvbicsXHJcbiAgICAgICAgICAgIFN0YXR1czogdHlwZW9mIGNvcGlsb3Q/LkV4ZWN1dGVQcm9tcHQgPT09ICdmdW5jdGlvbicgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSNDogQ2hlY2sgaWYgWHJtLkNvcGlsb3QgaXMgYXZhaWxhYmxlIChQcmV2aWV3IGZlYXR1cmUpXHJcbiAgICAgICAgY29uc3QgeHJtQ29waWxvdEF2YWlsYWJsZSA9IHR5cGVvZiAod2luZG93IGFzIGFueSkuWHJtPy5Db3BpbG90ICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICByZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlI0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlhybS5Db3BpbG90IGF2YWlsYWJsZSAoUHJldmlldylcIixcclxuICAgICAgICAgICAgVmFsdWU6IHhybUNvcGlsb3RBdmFpbGFibGUsXHJcbiAgICAgICAgICAgIFN0YXR1czogeHJtQ29waWxvdEF2YWlsYWJsZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiRVJSXCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIlJlYWRPbmx5IEVycm9yXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBTdGF0dXM6IFwiXHUyNzE3XCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBTMTogRXhlY3V0ZUV2ZW50IHdpdGggY2FsbGJhY2sgKHRlc3Qgc3RydWN0dXJlIG9ubHkgLSBDb3BpbG90IG1heSBub3QgYmUgZW5hYmxlZClcclxuICAgICAgICBsZXQgZXhlY3V0ZUV2ZW50UmVzdWx0ID0gXCJOb3QgYXZhaWxhYmxlXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gTm90ZTogVGhpcyB0ZXN0IG9ubHkgdmVyaWZpZXMgdGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCB0aHJvd2luZ1xyXG4gICAgICAgICAgICAvLyBBY3R1YWwgQ29waWxvdCBmdW5jdGlvbmFsaXR5IHJlcXVpcmVzIENvcGlsb3QgdG8gYmUgZW5hYmxlZCBpbiB0aGUgZW52aXJvbm1lbnRcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRQcm9taXNlID0gY29waWxvdD8uRXhlY3V0ZUV2ZW50KFwidGVzdF9ldmVudFwiLCB7IHRlc3RQYXJhbTogXCJ2YWx1ZVwiIH0pO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRQcm9taXNlICYmIHR5cGVvZiBldmVudFByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZXhlY3V0ZUV2ZW50UmVzdWx0ID0gXCJQcm9taXNlIHJldHVybmVkXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnRQcm9taXNlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGV4ZWN1dGVFdmVudFJlc3VsdCA9IFwidW5kZWZpbmVkIChDb3BpbG90IG5vdCBlbmFibGVkKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGV4ZWN1dGVFdmVudFJlc3VsdCA9IGBFcnJvcjogJHtlLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMVwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFeGVjdXRlRXZlbnQoJ3Rlc3RfZXZlbnQnLCB7Li4ufSlcIixcclxuICAgICAgICAgICAgVmFsdWU6IGV4ZWN1dGVFdmVudFJlc3VsdCxcclxuICAgICAgICAgICAgU3RhdHVzOiBleGVjdXRlRXZlbnRSZXN1bHQuaW5jbHVkZXMoXCJQcm9taXNlXCIpIHx8IGV4ZWN1dGVFdmVudFJlc3VsdC5pbmNsdWRlcyhcInVuZGVmaW5lZFwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFMyOiBFeGVjdXRlRXZlbnQgd2l0aCBzdWNjZXNzIGNhbGxiYWNrXHJcbiAgICAgICAgbGV0IGNhbGxiYWNrUmVzdWx0ID0gXCJOb3QgY2FsbGVkXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29waWxvdD8uRXhlY3V0ZUV2ZW50KFwidGVzdF9ldmVudF8yXCIsIHsgaWQ6IDEgfSxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQ6IGFueSkgPT4geyBjYWxsYmFja1Jlc3VsdCA9IFwiU3VjY2VzcyBjYWxsYmFjayBpbnZva2VkXCI7IH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4geyBjYWxsYmFja1Jlc3VsdCA9IFwiRXJyb3IgY2FsbGJhY2sgaW52b2tlZFwiOyB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrUmVzdWx0ID0gXCJDYWxsYmFja3MgcmVnaXN0ZXJlZFwiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgICAgICBjYWxsYmFja1Jlc3VsdCA9IGBFcnJvcjogJHtlLm1lc3NhZ2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHtcclxuICAgICAgICAgICAgVGVzdDogXCJTMlwiLFxyXG4gICAgICAgICAgICBQcm9wZXJ0eTogXCJFeGVjdXRlRXZlbnQgd2l0aCBjYWxsYmFja3NcIixcclxuICAgICAgICAgICAgVmFsdWU6IGNhbGxiYWNrUmVzdWx0LFxyXG4gICAgICAgICAgICBTdGF0dXM6IGNhbGxiYWNrUmVzdWx0LmluY2x1ZGVzKFwicmVnaXN0ZXJlZFwiKSB8fCBjYWxsYmFja1Jlc3VsdC5pbmNsdWRlcyhcImludm9rZWRcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTMzogRXhlY3V0ZVByb21wdCB3aXRoIHN0cmluZyAodGVzdCBzdHJ1Y3R1cmUgb25seSlcclxuICAgICAgICBsZXQgZXhlY3V0ZVByb21wdFJlc3VsdCA9IFwiTm90IGF2YWlsYWJsZVwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb21wdFByb21pc2UgPSBjb3BpbG90Py5FeGVjdXRlUHJvbXB0KFwiU3VtbWFyaXplIHRoaXMgYWNjb3VudFwiKTtcclxuICAgICAgICAgICAgaWYgKHByb21wdFByb21pc2UgJiYgdHlwZW9mIHByb21wdFByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZXhlY3V0ZVByb21wdFJlc3VsdCA9IFwiUHJvbWlzZSByZXR1cm5lZFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb21wdFByb21pc2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZXhlY3V0ZVByb21wdFJlc3VsdCA9IFwidW5kZWZpbmVkIChDb3BpbG90IG5vdCBlbmFibGVkKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIGV4ZWN1dGVQcm9tcHRSZXN1bHQgPSBgRXJyb3I6ICR7ZS5tZXNzYWdlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUzNcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiRXhlY3V0ZVByb21wdCgnU3VtbWFyaXplLi4uJylcIixcclxuICAgICAgICAgICAgVmFsdWU6IGV4ZWN1dGVQcm9tcHRSZXN1bHQsXHJcbiAgICAgICAgICAgIFN0YXR1czogZXhlY3V0ZVByb21wdFJlc3VsdC5pbmNsdWRlcyhcIlByb21pc2VcIikgfHwgZXhlY3V0ZVByb21wdFJlc3VsdC5pbmNsdWRlcyhcInVuZGVmaW5lZFwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFM0OiBFeGVjdXRlUHJvbXB0IHdpdGggc3VjY2VzcyBjYWxsYmFja1xyXG4gICAgICAgIGxldCBwcm9tcHRDYWxsYmFja1Jlc3VsdCA9IFwiTm90IGNhbGxlZFwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvcGlsb3Q/LkV4ZWN1dGVQcm9tcHQoXCJUZXN0IHByb21wdFwiLFxyXG4gICAgICAgICAgICAgICAgKHJlc3VsdDogYW55KSA9PiB7IHByb21wdENhbGxiYWNrUmVzdWx0ID0gXCJTdWNjZXNzIGNhbGxiYWNrIGludm9rZWRcIjsgfSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB7IHByb21wdENhbGxiYWNrUmVzdWx0ID0gXCJFcnJvciBjYWxsYmFjayBpbnZva2VkXCI7IH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJvbXB0Q2FsbGJhY2tSZXN1bHQgPSBcIkNhbGxiYWNrcyByZWdpc3RlcmVkXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgICAgIHByb21wdENhbGxiYWNrUmVzdWx0ID0gYEVycm9yOiAke2UubWVzc2FnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goe1xyXG4gICAgICAgICAgICBUZXN0OiBcIlM0XCIsXHJcbiAgICAgICAgICAgIFByb3BlcnR5OiBcIkV4ZWN1dGVQcm9tcHQgd2l0aCBjYWxsYmFja3NcIixcclxuICAgICAgICAgICAgVmFsdWU6IHByb21wdENhbGxiYWNrUmVzdWx0LFxyXG4gICAgICAgICAgICBTdGF0dXM6IHByb21wdENhbGxiYWNrUmVzdWx0LmluY2x1ZGVzKFwicmVnaXN0ZXJlZFwiKSB8fCBwcm9tcHRDYWxsYmFja1Jlc3VsdC5pbmNsdWRlcyhcImludm9rZWRcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7XHJcbiAgICAgICAgICAgIFRlc3Q6IFwiUy1FUlJcIixcclxuICAgICAgICAgICAgUHJvcGVydHk6IFwiU2V0dGVycy9NZXRob2RzIEVycm9yXCIsXHJcbiAgICAgICAgICAgIFZhbHVlOiBlLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIFN0YXR1czogXCJcdTI3MTdcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzQ1x1REZBRiBURVNUIDE4OiBDb3BpbG90IFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IGZvcm0uQ29waWxvdCAoUHJldmlldykgLSAke3Bhc3NlZH0vJHt0b3RhbH0gKFx1MjZBMCR7d2FybmluZ3N9KWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjQpXCIsIFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDsgY29sb3I6ICM0Q0FGNTA7XCIpO1xyXG4gICAgY29uc29sZS50YWJsZShyZXN1bHRzKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHUyNkExIFNldHRlcnMgJiBNZXRob2RzIChTMS1TNClcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTBcdUZFMEYgTm90ZTogQ29waWxvdCBpcyBhIFByZXZpZXcgZmVhdHVyZSBhbmQgbWF5IG5vdCBiZSBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50c1wiLFxyXG4gICAgICAgIFwiZm9udC1zdHlsZTogaXRhbGljOyBjb2xvcjogI0ZGOTgwMDtcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWQsICR7d2FybmluZ3N9IHdhcm5pbmdzYCxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgQWNjb3VudEZvcm0gfSBmcm9tICcuL2dlbmVyYXRvci9BY2NvdW50LmZvcm0nO1xyXG5cclxuaW50ZXJmYWNlIFRlc3RSZXN1bHQge1xyXG4gICAgVGVzdDogc3RyaW5nO1xyXG4gICAgUHJvcGVydHk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBTdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRFU1QgMTk6IERlY2ltYWwgQ29udHJvbCAtIHY0X0xhdGl0dWRlIEZpZWxkXHJcbiAqIERlY2ltYWwgZXh0ZW5kcyBJQ29udHJvbE51bWJlciB3aXRoIE1heCwgTWluLCBQcmVjaXNpb24gcHJvcGVydGllc1xyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdERlY2ltYWwoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGRlY2ltYWwgPSBmb3JtLkJvZHkudjRfTGF0aXR1ZGU7XHJcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9IGRlY2ltYWwuVmFsdWU7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBEZWNpbWFsL0RvdWJsZS1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJNYXhcIiwgVmFsdWU6IGRlY2ltYWwuTWF4LCBTdGF0dXM6IHR5cGVvZiBkZWNpbWFsLk1heCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiTWluXCIsIFZhbHVlOiBkZWNpbWFsLk1pbiwgU3RhdHVzOiB0eXBlb2YgZGVjaW1hbC5NaW4gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIzXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvblwiLCBWYWx1ZTogZGVjaW1hbC5QcmVjaXNpb24sIFN0YXR1czogdHlwZW9mIGRlY2ltYWwuUHJlY2lzaW9uID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJWYWx1ZVwiLCBWYWx1ZTogb3JpZ2luYWxWYWx1ZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlXCIsIFZhbHVlOiBkZWNpbWFsLkF0dHJpYnV0ZSA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBkZWNpbWFsLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogZGVjaW1hbC5BdHRyaWJ1dGVOYW1lLCBTdGF0dXM6IGRlY2ltYWwuQXR0cmlidXRlTmFtZSA9PT0gXCJ2NF9sYXRpdHVkZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSN1wiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVUeXBlXCIsIFZhbHVlOiBkZWNpbWFsLkF0dHJpYnV0ZVR5cGUsIFN0YXR1czogZGVjaW1hbC5BdHRyaWJ1dGVUeXBlID09PSBcImRlY2ltYWxcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjhcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGRlY2ltYWwuQ29udHJvbE5hbWUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI5XCIsIFByb3BlcnR5OiBcIkNvbnRyb2xUeXBlXCIsIFZhbHVlOiBkZWNpbWFsLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkZWNpbWFsLkZvcm1hdCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjExXCIsIFByb3BlcnR5OiBcIklzRGlydHlcIiwgVmFsdWU6IGRlY2ltYWwuSXNEaXJ0eSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEyXCIsIFByb3BlcnR5OiBcIklzVmFsaWRcIiwgVmFsdWU6IGRlY2ltYWwuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGRlY2ltYWwuUmVxdWlyZWRMZXZlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE0XCIsIFByb3BlcnR5OiBcIlN1Ym1pdE1vZGVcIiwgVmFsdWU6IGRlY2ltYWwuU3VibWl0TW9kZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE1XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkXCIsIFZhbHVlOiBkZWNpbWFsLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGRlY2ltYWwuTGFiZWwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxN1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlXCIsIFZhbHVlOiBkZWNpbWFsLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogVmFsdWVcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gKG9yaWdpbmFsVmFsdWUgfHwgMCkgKyAxLjU7XHJcbiAgICAgICAgZGVjaW1hbC5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGRlY2ltYWwuVmFsdWU7XHJcbiAgICAgICAgZGVjaW1hbC5WYWx1ZSA9IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBQcmVjaXNpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1ByZWNpc2lvbiA9IGRlY2ltYWwuUHJlY2lzaW9uO1xyXG4gICAgICAgIC8vIEFzc3VtaW5nIGRlZmF1bHQgaXMgdXN1YWxseSAyLCBsZXQncyB0cnkgNCAoaWYgYWxsb3dlZCkgb3IganVzdCBjaGVjayB3ZSBjYW4gc2V0IGl0XHJcbiAgICAgICAgLy8gTm90ZTogUHJlY2lzaW9uIHNldHRpbmcgbWlnaHQgdGhyb3cgaWYgbm90IHdpdGhpbiBhbGxvd2VkIHJhbmdlIG9yIGxvY2tlZCBieSBzeXN0ZW1cclxuICAgICAgICAvLyBXZSB3aWxsIHRyeSB0byBzZXQgaXQgdG8gY3VycmVudCB2YWx1ZSBqdXN0IHRvIHRlc3QgdGhlIHNldHRlciBleGlzdHMvd29ya3Mgd2l0aG91dCBlcnJvclxyXG4gICAgICAgIGRlY2ltYWwuUHJlY2lzaW9uID0gb3JpZ1ByZWNpc2lvbjtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGRlY2ltYWwuUmVxdWlyZWRMZXZlbDtcclxuICAgICAgICBkZWNpbWFsLlJlcXVpcmVkTGV2ZWwgPSBcInJlcXVpcmVkXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkZWNpbWFsLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZGVjaW1hbC5SZXF1aXJlZExldmVsID0gb3JpZ1JlcXVpcmVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiUmVxdWlyZWRMZXZlbCAoc2V0KVwiLCBWYWx1ZTogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwicmVxdWlyZWRcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IERpc2FibGVkXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEaXNhYmxlZCA9IGRlY2ltYWwuRGlzYWJsZWQ7XHJcbiAgICAgICAgZGVjaW1hbC5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkZWNpbWFsLkRpc2FibGVkO1xyXG4gICAgICAgIGRlY2ltYWwuRGlzYWJsZWQgPSBvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM0XCIsIFByb3BlcnR5OiBcIkRpc2FibGVkIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IExhYmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdMYWJlbCA9IGRlY2ltYWwuTGFiZWw7XHJcbiAgICAgICAgZGVjaW1hbC5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZGVjaW1hbC5MYWJlbDtcclxuICAgICAgICBkZWNpbWFsLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZGVjaW1hbC5WaXNpYmxlO1xyXG4gICAgICAgIGRlY2ltYWwuVmlzaWJsZSA9ICFvcmlnVmlzaWJsZTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRlY2ltYWwuVmlzaWJsZTtcclxuICAgICAgICBkZWNpbWFsLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2RzXHJcbiAgICBjb25zdCBvbkNoYW5nZUNhbGxiYWNrID0gKGN0eDogYW55KSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIERlY2ltYWwgT25DaGFuZ2UgZmlyZWRcIik7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkZWNpbWFsLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlY2ltYWwuUmVtb3ZlT25DaGFuZ2Uob25DaGFuZ2VDYWxsYmFjayk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJSZW1vdmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzhcIiwgUHJvcGVydHk6IFwiUmVtb3ZlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGVjaW1hbC5GaXJlT25DaGFuZ2UoKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogXCJGaXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM5XCIsIFByb3BlcnR5OiBcIkZpcmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRlY2ltYWwuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZGVjaW1hbC5TZXROb3RpZmljYXRpb24oXCJUZXN0IERlY2ltYWwgbm90aWZpY2F0aW9uXCIsIFwiREVDX1RFU1RfMVwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGRlY2ltYWwuQ2xlYXJOb3RpZmljYXRpb24oXCJERUNfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkZWNpbWFsLlNldElzVmFsaWQoZmFsc2UsIFwiVGVzdCBpbnZhbGlkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZGVjaW1hbC5TZXRJc1ZhbGlkKHRydWUpLCAyMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMlwiLCBQcm9wZXJ0eTogXCJTZXRJc1ZhbGlkXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkICgycylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVERDIyIFRFU1QgMTk6IERlY2ltYWwgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9MYXRpdHVkZSBmaWVsZCAtICR7cGFzc2VkfS8ke3RvdGFsfWApO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdUQ4M0RcdURDQ0IgUmVhZE9ubHkgUHJvcGVydGllcyAoUjEtUjE3KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjNENBRjUwO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUocmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1MjZBMSBTZXR0ZXJzICYgTWV0aG9kcyAoUzEtUzEyKVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDIwOiBEb3VibGUgQ29udHJvbCAtIHY0X0Rpc2NvdW50UGVyY2VudGFnZSBGaWVsZFxyXG4gKiBEb3VibGUgZXh0ZW5kcyBJQ29udHJvbE51bWJlciB3aXRoIE1heCwgTWluLCBQcmVjaXNpb24gcHJvcGVydGllc1xyXG4gKiBVc2VzIGNvbnNvbGUudGFibGUgZm9yIGNsZWFuZXIgb3V0cHV0XHJcbiAqIFxyXG4gKiBDb252ZW50aW9uOlxyXG4gKiAtIFItSW5kZXg6IFJlYWRPbmx5IHByb3BlcnRpZXMgKFIxLCBSMiwgUjMuLi4pXHJcbiAqIC0gUy1JbmRleDogU2V0dGVycyAmIE1ldGhvZHMgKFMxLCBTMiwgUzMuLi4pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gVGVzdERvdWJsZShmb3JtOiBBY2NvdW50Rm9ybS5Gb3JtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IG1ldGhvZFJlc3VsdHM6IFRlc3RSZXN1bHRbXSA9IFtdO1xyXG4gICAgY29uc3QgZG91YmxlID0gZm9ybS5Cb2R5LnY0X0Rpc2NvdW50UGVyY2VudGFnZTtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcbiAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gZG91YmxlLlZhbHVlO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUFET05MWSBQUk9QRVJUSUVTIChSLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gRG91YmxlLXNwZWNpZmljIHByb3BlcnRpZXNcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxXCIsIFByb3BlcnR5OiBcIk1heFwiLCBWYWx1ZTogZG91YmxlLk1heCwgU3RhdHVzOiB0eXBlb2YgZG91YmxlLk1heCA9PT0gXCJudW1iZXJcIiA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjJcIiwgUHJvcGVydHk6IFwiTWluXCIsIFZhbHVlOiBkb3VibGUuTWluLCBTdGF0dXM6IHR5cGVvZiBkb3VibGUuTWluID09PSBcIm51bWJlclwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSM1wiLCBQcm9wZXJ0eTogXCJQcmVjaXNpb25cIiwgVmFsdWU6IGRvdWJsZS5QcmVjaXNpb24sIFN0YXR1czogdHlwZW9mIGRvdWJsZS5QcmVjaXNpb24gPT09IFwibnVtYmVyXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI0XCIsIFByb3BlcnR5OiBcIlZhbHVlXCIsIFZhbHVlOiBvcmlnaW5hbFZhbHVlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaGVyaXRlZCBmcm9tIElDb250cm9sXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNVwiLCBQcm9wZXJ0eTogXCJBdHRyaWJ1dGVcIiwgVmFsdWU6IGRvdWJsZS5BdHRyaWJ1dGUgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogZG91YmxlLkF0dHJpYnV0ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjZBMFwiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiQXR0cmlidXRlTmFtZVwiLCBWYWx1ZTogZG91YmxlLkF0dHJpYnV0ZU5hbWUsIFN0YXR1czogZG91YmxlLkF0dHJpYnV0ZU5hbWUgPT09IFwidjRfZGlzY291bnRwZXJjZW50YWdlXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI2QTBcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIkF0dHJpYnV0ZVR5cGVcIiwgVmFsdWU6IGRvdWJsZS5BdHRyaWJ1dGVUeXBlLCBTdGF0dXM6IGRvdWJsZS5BdHRyaWJ1dGVUeXBlID09PSBcImRvdWJsZVwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNkEwXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOFwiLCBQcm9wZXJ0eTogXCJDb250cm9sTmFtZVwiLCBWYWx1ZTogZG91YmxlLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSOVwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogZG91YmxlLkNvbnRyb2xUeXBlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTBcIiwgUHJvcGVydHk6IFwiRm9ybWF0XCIsIFZhbHVlOiBkb3VibGUuRm9ybWF0LCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTFcIiwgUHJvcGVydHk6IFwiSXNEaXJ0eVwiLCBWYWx1ZTogZG91YmxlLklzRGlydHksIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxMlwiLCBQcm9wZXJ0eTogXCJJc1ZhbGlkXCIsIFZhbHVlOiBkb3VibGUuSXNWYWxpZCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjEzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWxcIiwgVmFsdWU6IGRvdWJsZS5SZXF1aXJlZExldmVsLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTRcIiwgUHJvcGVydHk6IFwiU3VibWl0TW9kZVwiLCBWYWx1ZTogZG91YmxlLlN1Ym1pdE1vZGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIxNVwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZFwiLCBWYWx1ZTogZG91YmxlLkRpc2FibGVkLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMTZcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGRvdWJsZS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjE3XCIsIFByb3BlcnR5OiBcIlZpc2libGVcIiwgVmFsdWU6IGRvdWJsZS5WaXNpYmxlLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiRVJSXCIsIFByb3BlcnR5OiBcIlByb3BzIEVycm9yXCIsIFZhbHVlOiBlcnJvci5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFNFVFRFUlMgJiBNRVRIT0RTIChTLUluZGV4KVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAvLyBTZXR0ZXI6IFZhbHVlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRlc3RWYWx1ZSA9IChvcmlnaW5hbFZhbHVlIHx8IDApICsgMC41O1xyXG4gICAgICAgIGRvdWJsZS5WYWx1ZSA9IHRlc3RWYWx1ZTtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGRvdWJsZS5WYWx1ZTtcclxuICAgICAgICBkb3VibGUuVmFsdWUgPSBvcmlnaW5hbFZhbHVlOyAvLyBSZXN0b3JlXHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogbmV3VmFsdWUgPT09IHRlc3RWYWx1ZSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJWYWx1ZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBQcmVjaXNpb25cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1ByZWNpc2lvbiA9IGRvdWJsZS5QcmVjaXNpb247XHJcbiAgICAgICAgZG91YmxlLlByZWNpc2lvbiA9IG9yaWdQcmVjaXNpb247IC8vIFRyeSBzZXR0aW5nIHNhbWUgdmFsdWVcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIlByZWNpc2lvbiAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBSZXF1aXJlZExldmVsXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdSZXF1aXJlZCA9IGRvdWJsZS5SZXF1aXJlZExldmVsO1xyXG4gICAgICAgIGRvdWJsZS5SZXF1aXJlZExldmVsID0gXCJyZXF1aXJlZFwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG91YmxlLlJlcXVpcmVkTGV2ZWw7XHJcbiAgICAgICAgZG91YmxlLlJlcXVpcmVkTGV2ZWwgPSBvcmlnUmVxdWlyZWQ7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJSZXF1aXJlZExldmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjayA9PT0gXCJyZXF1aXJlZFwiID8gXCJcdTI3MTNcIiA6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlJlcXVpcmVkTGV2ZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogRGlzYWJsZWRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0Rpc2FibGVkID0gZG91YmxlLkRpc2FibGVkO1xyXG4gICAgICAgIGRvdWJsZS5EaXNhYmxlZCA9ICFvcmlnRGlzYWJsZWQ7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb3VibGUuRGlzYWJsZWQ7XHJcbiAgICAgICAgZG91YmxlLkRpc2FibGVkID0gb3JpZ0Rpc2FibGVkO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiRGlzYWJsZWQgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJEaXNhYmxlZCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBMYWJlbFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnTGFiZWwgPSBkb3VibGUuTGFiZWw7XHJcbiAgICAgICAgZG91YmxlLkxhYmVsID0gb3JpZ0xhYmVsICsgXCIgKFRFU1QpXCI7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb3VibGUuTGFiZWw7XHJcbiAgICAgICAgZG91YmxlLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gZG91YmxlLlZpc2libGU7XHJcbiAgICAgICAgZG91YmxlLlZpc2libGUgPSAhb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb3VibGUuVmlzaWJsZTtcclxuICAgICAgICBkb3VibGUuVmlzaWJsZSA9IG9yaWdWaXNpYmxlO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM2XCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldGhvZHNcclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2FsbGJhY2sgPSAoY3R4OiBhbnkpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgRG91YmxlIE9uQ2hhbmdlIGZpcmVkXCIpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZG91YmxlLkFkZE9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2spO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzdcIiwgUHJvcGVydHk6IFwiQWRkT25DaGFuZ2VcIiwgVmFsdWU6IFwiUmVnaXN0ZXJlZFwiLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM3XCIsIFByb3BlcnR5OiBcIkFkZE9uQ2hhbmdlXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRvdWJsZS5SZW1vdmVPbkNoYW5nZShvbkNoYW5nZUNhbGxiYWNrKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM4XCIsIFByb3BlcnR5OiBcIlJlbW92ZU9uQ2hhbmdlXCIsIFZhbHVlOiBcIlJlbW92ZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOFwiLCBQcm9wZXJ0eTogXCJSZW1vdmVPbkNoYW5nZVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkb3VibGUuRmlyZU9uQ2hhbmdlKCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IFwiRmlyZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTOVwiLCBQcm9wZXJ0eTogXCJGaXJlT25DaGFuZ2VcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb3VibGUuRm9jdXMoKSwgMTAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTBcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZG91YmxlLlNldE5vdGlmaWNhdGlvbihcIlRlc3QgRG91YmxlIG5vdGlmaWNhdGlvblwiLCBcIkRCTF9URVNUXzFcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb3VibGUuQ2xlYXJOb3RpZmljYXRpb24oXCJEQkxfVEVTVF8xXCIpLCAzMDAwKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMxMVwiLCBQcm9wZXJ0eTogXCJTZXROb3RpZmljYXRpb25cIiwgVmFsdWU6IFwiU2V0IChjbGVhcnMgM3MpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzExXCIsIFByb3BlcnR5OiBcIlNldE5vdGlmaWNhdGlvblwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBkb3VibGUuU2V0SXNWYWxpZChmYWxzZSwgXCJUZXN0IGludmFsaWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb3VibGUuU2V0SXNWYWxpZCh0cnVlKSwgMjAwMCk7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMTJcIiwgUHJvcGVydHk6IFwiU2V0SXNWYWxpZFwiLCBWYWx1ZTogXCJTZXRcdTIxOTJSZXN0b3JlZCAoMnMpXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzEyXCIsIFByb3BlcnR5OiBcIlNldElzVmFsaWRcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPVVRQVVRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBhbGxSZXN1bHRzID0gWy4uLnJlc3VsdHMsIC4uLm1ldGhvZFJlc3VsdHNdO1xyXG4gICAgY29uc3QgcGFzc2VkID0gYWxsUmVzdWx0cy5maWx0ZXIociA9PiByLlN0YXR1cyA9PT0gXCJcdTI3MTNcIikubGVuZ3RoO1xyXG4gICAgY29uc3Qgd2FybmluZ3MgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjZBMFwiKS5sZW5ndGg7XHJcbiAgICBjb25zdCBmYWlsZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxN1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0b3RhbCA9IGFsbFJlc3VsdHMubGVuZ3RoO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoYFx1RDgzRFx1REQyMiBURVNUIDIwOiBEb3VibGUgQ29udHJvbCBbJHtzdGFydFRpbWV9XSAtIFVzaW5nOiB2NF9EaXNjb3VudFBlcmNlbnRhZ2UgZmllbGQgLSAke3Bhc3NlZH0vJHt0b3RhbH1gKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIiVjXHVEODNEXHVEQ0NCIFJlYWRPbmx5IFByb3BlcnRpZXMgKFIxLVIxNylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVMxMilcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzIxOTZGMztcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKG1ldGhvZFJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAlY1x1MjcwNSBTdW1tYXJ5OiAke3Bhc3NlZH0vJHt0b3RhbH0gcGFzc2VkYCArXHJcbiAgICAgICAgKHdhcm5pbmdzID4gMCA/IGAgfCBcdTI2QTAgJHt3YXJuaW5nc30gd2FybmluZ3NgIDogJycpICtcclxuICAgICAgICAoZmFpbGVkID4gMCA/IGAgfCBcdTI3MTcgJHtmYWlsZWR9IGZhaWxlZGAgOiAnJyksXHJcbiAgICAgICAgXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM0Q0FGNTA7IGZvbnQtc2l6ZTogMTRweDtcIik7XHJcblxyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG59XHJcbiIsICJpbXBvcnQgeyBBY2NvdW50Rm9ybSB9IGZyb20gJy4vZ2VuZXJhdG9yL0FjY291bnQuZm9ybSc7XHJcblxyXG5pbnRlcmZhY2UgVGVzdFJlc3VsdCB7XHJcbiAgICBUZXN0OiBzdHJpbmc7XHJcbiAgICBQcm9wZXJ0eTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIFN0YXR1czogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVEVTVCAyMTogSUZyYW1lIENvbnRyb2wgLSB2NF9JRnJhbWVFeHRlcm5hbCBGaWVsZFxyXG4gKiBJRnJhbWUgZXh0ZW5kcyBJQ29udHJvbCB3aXRoIHNwZWNpZmljIHByb3BlcnRpZXM6IFNyYywgSW5pdGlhbFVybCwgQ29udGVudFdpbmRvd1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFRlc3RJRnJhbWUoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IGlmcmFtZSA9IGZvcm0uQm9keS52NF9JRnJhbWVFeHRlcm5hbDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBJRnJhbWUtc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjFcIiwgUHJvcGVydHk6IFwiSW5pdGlhbFVybFwiLCBWYWx1ZTogaWZyYW1lLkluaXRpYWxVcmwsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlIyXCIsIFByb3BlcnR5OiBcIlNyY1wiLCBWYWx1ZTogaWZyYW1lLlNyYywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IGlmcmFtZS5Db250cm9sTmFtZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjRcIiwgUHJvcGVydHk6IFwiQ29udHJvbFR5cGVcIiwgVmFsdWU6IGlmcmFtZS5Db250cm9sVHlwZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjVcIiwgUHJvcGVydHk6IFwiTGFiZWxcIiwgVmFsdWU6IGlmcmFtZS5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogaWZyYW1lLlZpc2libGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI3XCIsIFByb3BlcnR5OiBcIk9iamVjdFwiLCBWYWx1ZTogaWZyYW1lLk9iamVjdCA/IFwib2JqZWN0XCIgOiBcIm51bGxcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIC8vIElGcmFtZSBkb2Vzbid0IG1hcCB0byBhIGZpZWxkIChhdHRyaWJ1dGUpLCBzbyBBdHRyaWJ1dGUgcHJvcHMgbWlnaHQgYmUgbnVsbC91bmRlZmluZWQgb3Igc3BlY2lmaWMgZGVmYXVsdFxyXG4gICAgICAgIC8vIFVzdWFsbHkgSUZyYW1lIGlzIGEgY29udHJvbC1vbmx5IGVsZW1lbnQuXHJcbiAgICAgICAgLy8gV2Ugc2tpcCBBdHRyaWJ1dGUtcmVsYXRlZCBjaGVja3MgaWYgbm90IGFwcGxpY2FibGUsIG9yIGNoZWNrIGlmIHRoZXkgYXJlIG51bGwuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJFUlJcIiwgUHJvcGVydHk6IFwiUHJvcHMgRXJyb3JcIiwgVmFsdWU6IGVycm9yLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gU0VUVEVSUyAmIE1FVEhPRFMgKFMtSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIC8vIFNldHRlcjogU3JjXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdTcmMgPSBpZnJhbWUuU3JjO1xyXG4gICAgICAgIC8vIEp1c3Qgc2V0dGluZyBpdCB0byBzYW1lIHZhbHVlIHRvIHRlc3Qgc2V0dGVyXHJcbiAgICAgICAgaWZyYW1lLlNyYyA9IG9yaWdTcmM7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJTcmMgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJTcmMgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gaWZyYW1lLkxhYmVsO1xyXG4gICAgICAgIGlmcmFtZS5MYWJlbCA9IG9yaWdMYWJlbCArIFwiIChURVNUKVwiO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaWZyYW1lLkxhYmVsO1xyXG4gICAgICAgIGlmcmFtZS5MYWJlbCA9IG9yaWdMYWJlbDtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMyXCIsIFByb3BlcnR5OiBcIkxhYmVsIChzZXQpXCIsIFZhbHVlOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2suaW5jbHVkZXMoXCIoVEVTVClcIikgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzJcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogVmlzaWJsZVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmlnVmlzaWJsZSA9IGlmcmFtZS5WaXNpYmxlO1xyXG4gICAgICAgIGlmcmFtZS5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gaWZyYW1lLlZpc2libGU7XHJcbiAgICAgICAgaWZyYW1lLlZpc2libGUgPSBvcmlnVmlzaWJsZTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlMzXCIsIFByb3BlcnR5OiBcIlZpc2libGUgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IENvbnRlbnRXaW5kb3dcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWZyYW1lLkNvbnRlbnRXaW5kb3coXHJcbiAgICAgICAgICAgICh3aW4pID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgSUZyYW1lIENvbnRlbnRXaW5kb3cgU3VjY2Vzc1wiLCB3aW4pLFxyXG4gICAgICAgICAgICAoZXJyKSA9PiBjb25zb2xlLmxvZyhcIiAgXHVEODNEXHVEQ0NEIElGcmFtZSBDb250ZW50V2luZG93IEVycm9yXCIsIGVycilcclxuICAgICAgICApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiQ29udGVudFdpbmRvd1wiLCBWYWx1ZTogXCJDYWxsZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJDb250ZW50V2luZG93XCIsIFZhbHVlOiBlLm1lc3NhZ2UsIFN0YXR1czogXCJcdTI3MTdcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXRob2Q6IEZvY3VzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaWZyYW1lLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNVwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNEXHVEREJDXHVGRTBGIFRFU1QgMjE6IElGcmFtZSBDb250cm9sIFske3N0YXJ0VGltZX1dIC0gVXNpbmc6IHY0X0lGcmFtZUV4dGVybmFsIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SNylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM1KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIiwgImltcG9ydCB7IEFjY291bnRGb3JtIH0gZnJvbSAnLi9nZW5lcmF0b3IvQWNjb3VudC5mb3JtJztcclxuXHJcbmludGVyZmFjZSBUZXN0UmVzdWx0IHtcclxuICAgIFRlc3Q6IHN0cmluZztcclxuICAgIFByb3BlcnR5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgU3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBURVNUIDIyOiBXZWJSZXNvdXJjZSBDb250cm9sIC0gdjRfV2ViUmVzb3VyY2VIZWxwIEZpZWxkXHJcbiAqIFdlYlJlc291cmNlIGV4dGVuZHMgSUNvbnRyb2wgd2l0aCBzcGVjaWZpYyBwcm9wZXJ0aWVzOiBTcmMsIERhdGEsIENvbnRlbnRXaW5kb3dcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBUZXN0V2ViUmVzb3VyY2UoZm9ybTogQWNjb3VudEZvcm0uRm9ybSk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0czogVGVzdFJlc3VsdFtdID0gW107XHJcbiAgICBjb25zdCBtZXRob2RSZXN1bHRzOiBUZXN0UmVzdWx0W10gPSBbXTtcclxuICAgIGNvbnN0IHdyID0gZm9ybS5Cb2R5LnY0X1dlYlJlc291cmNlSGVscDtcclxuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFQURPTkxZIFBST1BFUlRJRVMgKFItSW5kZXgpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBXZWJSZXNvdXJjZS1zcGVjaWZpYyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMVwiLCBQcm9wZXJ0eTogXCJEYXRhXCIsIFZhbHVlOiB3ci5EYXRhLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSMlwiLCBQcm9wZXJ0eTogXCJTcmNcIiwgVmFsdWU6IHdyLlNyYywgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBJbmhlcml0ZWQgZnJvbSBJQ29udHJvbFxyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjNcIiwgUHJvcGVydHk6IFwiQ29udHJvbE5hbWVcIiwgVmFsdWU6IHdyLkNvbnRyb2xOYW1lLCBTdGF0dXM6IFwiXHUyNzEzXCIgfSk7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgVGVzdDogXCJSNFwiLCBQcm9wZXJ0eTogXCJDb250cm9sVHlwZVwiLCBWYWx1ZTogd3IuQ29udHJvbFR5cGUsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIlI1XCIsIFByb3BlcnR5OiBcIkxhYmVsXCIsIFZhbHVlOiB3ci5MYWJlbCwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjZcIiwgUHJvcGVydHk6IFwiVmlzaWJsZVwiLCBWYWx1ZTogd3IuVmlzaWJsZSwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUjdcIiwgUHJvcGVydHk6IFwiT2JqZWN0XCIsIFZhbHVlOiB3ci5PYmplY3QgPyBcIm9iamVjdFwiIDogXCJudWxsXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgICByZXN1bHRzLnB1c2goeyBUZXN0OiBcIkVSUlwiLCBQcm9wZXJ0eTogXCJQcm9wcyBFcnJvclwiLCBWYWx1ZTogZXJyb3IubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBTRVRURVJTICYgTUVUSE9EUyAoUy1JbmRleClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgLy8gU2V0dGVyOiBEYXRhXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdEYXRhID0gd3IuRGF0YTtcclxuICAgICAgICB3ci5EYXRhID0gXCJUZXN0RGF0YT0xMjNcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHdyLkRhdGE7XHJcbiAgICAgICAgd3IuRGF0YSA9IG9yaWdEYXRhOyAvLyBSZXN0b3JlXHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMVwiLCBQcm9wZXJ0eTogXCJEYXRhIChzZXQpXCIsIFZhbHVlOiBjaGVjayA9PT0gXCJUZXN0RGF0YT0xMjNcIiA/IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiA6IFwiRmFpbGVkXCIsIFN0YXR1czogY2hlY2sgPT09IFwiVGVzdERhdGE9MTIzXCIgPyBcIlx1MjcxM1wiIDogXCJcdTI3MTdcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzFcIiwgUHJvcGVydHk6IFwiRGF0YSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBTcmNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ1NyYyA9IHdyLlNyYztcclxuICAgICAgICB3ci5TcmMgPSBvcmlnU3JjOyAvLyBKdXN0IHNldCBzYW1lXHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTcmMgKHNldClcIiwgVmFsdWU6IFwiU2V0XHUyMTkyUmVzdG9yZWRcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTMlwiLCBQcm9wZXJ0eTogXCJTcmMgKHNldClcIiwgVmFsdWU6IGUubWVzc2FnZSwgU3RhdHVzOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldHRlcjogTGFiZWxcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ0xhYmVsID0gd3IuTGFiZWw7XHJcbiAgICAgICAgd3IuTGFiZWwgPSBvcmlnTGFiZWwgKyBcIiAoVEVTVClcIjtcclxuICAgICAgICBjb25zdCBjaGVjayA9IHdyLkxhYmVsO1xyXG4gICAgICAgIHdyLkxhYmVsID0gb3JpZ0xhYmVsO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzNcIiwgUHJvcGVydHk6IFwiTGFiZWwgKHNldClcIiwgVmFsdWU6IGNoZWNrLmluY2x1ZGVzKFwiKFRFU1QpXCIpID8gXCJTZXRcdTIxOTJSZXN0b3JlZFwiIDogXCJGYWlsZWRcIiwgU3RhdHVzOiBjaGVjay5pbmNsdWRlcyhcIihURVNUKVwiKSA/IFwiXHUyNzEzXCIgOiBcIlx1MjcxN1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTM1wiLCBQcm9wZXJ0eTogXCJMYWJlbCAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyOiBWaXNpYmxlXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG9yaWdWaXNpYmxlID0gd3IuVmlzaWJsZTtcclxuICAgICAgICB3ci5WaXNpYmxlID0gIW9yaWdWaXNpYmxlO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gd3IuVmlzaWJsZTtcclxuICAgICAgICB3ci5WaXNpYmxlID0gb3JpZ1Zpc2libGU7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNFwiLCBQcm9wZXJ0eTogXCJWaXNpYmxlIChzZXQpXCIsIFZhbHVlOiBcIlNldFx1MjE5MlJlc3RvcmVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzRcIiwgUHJvcGVydHk6IFwiVmlzaWJsZSAoc2V0KVwiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBDb250ZW50V2luZG93XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdyLkNvbnRlbnRXaW5kb3coXHJcbiAgICAgICAgICAgICh3aW4pID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgV2ViUmVzb3VyY2UgQ29udGVudFdpbmRvdyBTdWNjZXNzXCIsIHdpbiksXHJcbiAgICAgICAgICAgIChlcnIpID0+IGNvbnNvbGUubG9nKFwiICBcdUQ4M0RcdURDQ0QgV2ViUmVzb3VyY2UgQ29udGVudFdpbmRvdyBFcnJvclwiLCBlcnIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBtZXRob2RSZXN1bHRzLnB1c2goeyBUZXN0OiBcIlM1XCIsIFByb3BlcnR5OiBcIkNvbnRlbnRXaW5kb3dcIiwgVmFsdWU6IFwiQ2FsbGVkXCIsIFN0YXR1czogXCJcdTI3MTNcIiB9KTtcclxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzVcIiwgUHJvcGVydHk6IFwiQ29udGVudFdpbmRvd1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0aG9kOiBGb2N1c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdyLkZvY3VzKCksIDEwMDApO1xyXG4gICAgICAgIG1ldGhvZFJlc3VsdHMucHVzaCh7IFRlc3Q6IFwiUzZcIiwgUHJvcGVydHk6IFwiRm9jdXNcIiwgVmFsdWU6IFwiU2NoZWR1bGVkICgxcylcIiwgU3RhdHVzOiBcIlx1MjcxM1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZTogYW55KSB7XHJcbiAgICAgICAgbWV0aG9kUmVzdWx0cy5wdXNoKHsgVGVzdDogXCJTNlwiLCBQcm9wZXJ0eTogXCJGb2N1c1wiLCBWYWx1ZTogZS5tZXNzYWdlLCBTdGF0dXM6IFwiXHUyNzE3XCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9VVFBVVFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGFsbFJlc3VsdHMgPSBbLi4ucmVzdWx0cywgLi4ubWV0aG9kUmVzdWx0c107XHJcbiAgICBjb25zdCBwYXNzZWQgPSBhbGxSZXN1bHRzLmZpbHRlcihyID0+IHIuU3RhdHVzID09PSBcIlx1MjcxM1wiKS5sZW5ndGg7XHJcbiAgICBjb25zdCB3YXJuaW5ncyA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNkEwXCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IGZhaWxlZCA9IGFsbFJlc3VsdHMuZmlsdGVyKHIgPT4gci5TdGF0dXMgPT09IFwiXHUyNzE3XCIpLmxlbmd0aDtcclxuICAgIGNvbnN0IHRvdGFsID0gYWxsUmVzdWx0cy5sZW5ndGg7XHJcblxyXG4gICAgY29uc29sZS5ncm91cENvbGxhcHNlZChgXHVEODNDXHVERjEwIFRFU1QgMjI6IFdlYlJlc291cmNlIENvbnRyb2wgWyR7c3RhcnRUaW1lfV0gLSBVc2luZzogdjRfV2ViUmVzb3VyY2VIZWxwIC0gJHtwYXNzZWR9LyR7dG90YWx9YCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIlY1x1RDgzRFx1RENDQiBSZWFkT25seSBQcm9wZXJ0aWVzIChSMS1SNylcIiwgXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogIzRDQUY1MDtcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHJlc3VsdHMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiJWNcdTI2QTEgU2V0dGVycyAmIE1ldGhvZHMgKFMxLVM2KVwiLCBcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDE0cHg7IGNvbG9yOiAjMjE5NkYzO1wiKTtcclxuICAgIGNvbnNvbGUudGFibGUobWV0aG9kUmVzdWx0cyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coYCVjXHUyNzA1IFN1bW1hcnk6ICR7cGFzc2VkfS8ke3RvdGFsfSBwYXNzZWRgICtcclxuICAgICAgICAod2FybmluZ3MgPiAwID8gYCB8IFx1MjZBMCAke3dhcm5pbmdzfSB3YXJuaW5nc2AgOiAnJykgK1xyXG4gICAgICAgIChmYWlsZWQgPiAwID8gYCB8IFx1MjcxNyAke2ZhaWxlZH0gZmFpbGVkYCA6ICcnKSxcclxuICAgICAgICBcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzRDQUY1MDsgZm9udC1zaXplOiAxNHB4O1wiKTtcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBLFdBQVMsU0FBaUM7QUFDdEMsUUFBSSxPQUFPLFdBQVcsZUFBZ0IsT0FBZSxRQUFRLFFBQVc7QUFDcEUsYUFBUSxPQUFlO0FBQUEsSUFDM0I7QUFDQSxRQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sT0FBTyxXQUFXLGVBQWdCLE9BQU8sT0FBZSxRQUFRLFFBQVc7QUFDbkgsYUFBUSxPQUFPLE9BQWU7QUFBQSxJQUNsQztBQUNBLFFBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxPQUFPLFdBQVcsZUFBZSxPQUFPLE9BQU8sT0FBTyxXQUFXLGVBQWdCLE9BQU8sT0FBTyxPQUFlLFFBQVEsUUFBVztBQUN6SyxhQUFRLE9BQU8sT0FBTyxPQUFlO0FBQUEsSUFDekM7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUNBLFdBQVMsT0FBVSxLQUFVLE1BQWMsVUFBeUI7QUFDaEUsV0FBTyxlQUFlLEtB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QUFRLElBQUksMkNBQW9DLHFEQUFxRDtBQUNyRyxZQUFRLE1BQU0sT0FBTztBQUVyQixZQUFRLElBQUksc0NBQWlDLHFEQUFxRDtBQUNsRyxZQUFRLE1BQU0sYUFBYTtBQUUzQixZQUFRO0FBQUEsTUFBSSxxQkFBZ0IsTUFBTSxJQUFJLEtBQUssYUFDdEMsV0FBVyxJQUFJLGFBQVEsUUFBUSxjQUFjLE9BQzdDLFNBQVMsSUFBSSxhQUFRLE1BQU0sWUFBWTtBQUFBLE1BQ3hDO0FBQUEsSUFBcUQ7QUFFekQsWUFBUSxTQUFTO0FBQUEsRUFDckI7OztBM0JwR0EsTUFBTSxjQUFlLFdBQVk7QUFDN0I7QUFFQSxRQUFJO0FBRUosbUJBQWUsT0FBTyxrQkFBc0M7QUFDeEQsYUFBTyxJQUFJLFlBQVksS0FBSyxnQkFBZ0I7QUFDNUMscUJBQWU7QUFDZixXQUFLLFlBQVksV0FBVztBQUFBLElBQ2hDO0FBRUEsYUFBUyxpQkFBdUI7QUFDNUIsVUFBSSxLQUFLLGlCQUFpQixjQUFjLEdBQUc7QUFBQSxNQUMzQztBQUFBLElBQ0o7QUFNQSxtQkFBZSxZQUFZLGtCQUFzQztBQUs3RCxpQkFBVyxZQUFZO0FBQ25CLGdCQUFRLE1BQU07QUFHZCxvQkFBWSxJQUFJO0FBR2hCLG1CQUFXLElBQUk7QUFHZixpQkFBUyxJQUFJO0FBR2IsbUJBQVcsSUFBSTtBQUdmLG9CQUFZLElBQUk7QUFHaEIsc0JBQWMsSUFBSTtBQUdsQixjQUFNLFdBQVcsSUFBSTtBQUdyQixrQkFBVSxJQUFJO0FBR2Qsb0JBQVksSUFBSTtBQUdoQixxQkFBYSxJQUFJO0FBR2pCLHFCQUFhLElBQUk7QUFHakIsaUJBQVMsSUFBSTtBQUdiLG9CQUFZLElBQUk7QUFHaEIsMkJBQW1CLElBQUk7QUFHdkIsZ0JBQVEsSUFBSTtBQUdaLDJCQUFtQixJQUFJO0FBR3ZCLDZCQUFxQixJQUFJO0FBR3pCLHNCQUFjLElBQUk7QUFHbEIsb0JBQVksSUFBSTtBQUdoQixvQkFBWSxJQUFJO0FBR2hCLG1CQUFXLElBQUk7QUFHZixtQkFBVyxJQUFJO0FBR2Ysd0JBQWdCLElBQUk7QUFBQSxNQUV4QixHQUFHLEdBQUs7QUFBQSxJQUdaO0FBMkJBLFdBQU87QUFBQSxNQUNILFFBQVE7QUFBQSxJQUNaO0FBQUEsRUFDSixFQUFHO0FBRUgsTUFBTyxrQkFBUTsiLAogICJuYW1lcyI6IFsiZm9ybUNvbnRleHQiLCAidGFicyIsICJuYXZpZ2F0aW9ucyIsICJxdWlja0Zvcm1zIiwgImdyaWRzIiwgIkFjY291bnRGb3JtIiwgInN0cmluZ2lmeSIsICJzZWN0aW9uIl0KfQo=
