var devKit = (function() {
    "use strict";
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var N = null;
    function loadForm(formContext) {
        var contextData = formContext.data;
        var contextDataEntity = formContext.data.entity;
        var contextUi = formContext.ui;
        var contextUiFormSelector = formContext.ui.formSelector;
        var form = {};
        Object.defineProperty(form, "IsDirty",                  { get: function() { return contextData.getIsDirty(); } });
        Object.defineProperty(form, "IsValid",                  { get: function() { return contextData.isValid(); } });
        Object.defineProperty(form, "DataXml",                  { get: function() { return contextDataEntity.getDataXml(); } });
        Object.defineProperty(form, "EntityName",               { get: function() { return contextDataEntity.getEntityName(); } });
        Object.defineProperty(form, "EntityReference",          { get: function() { return contextDataEntity.getEntityReference(); } });
        Object.defineProperty(form, "EntityId",                 { get: function() { return contextDataEntity.getId(); } });
        Object.defineProperty(form, "EntityIsDirty",            { get: function() { return contextDataEntity.getIsDirty(); } });
        Object.defineProperty(form, "PrimaryAttributeValue",    { get: function() { return contextDataEntity.getPrimaryAttributeValue(); } });
        Object.defineProperty(form, "EntityIsValid",            { get: function() { return contextDataEntity.isValid(); } });
        Object.defineProperty(form, "Attributes",               { get: function() { return contextDataEntity.attributes; } });
        Object.defineProperty(form, "FormType",                 { get: function() { return contextUi.getFormType(); } });
        Object.defineProperty(form, "ViewPortHeight",           { get: function() { return contextUi.getViewPortHeight(); } });
        Object.defineProperty(form, "ViewPortWidth",            { get: function() { return contextUi.getViewPortWidth(); } });
        Object.defineProperty(form, "Controls",                 { get: function() { return contextUi.controls; } });
        Object.defineProperty(form, "FormId",                   { get: function() { return contextUiFormSelector.getCurrentItem().getId(); } });
        Object.defineProperty(form, "FormLabel",                { get: function() { return contextUiFormSelector.getCurrentItem().getLabel(); } });
        form.AddOnLoad              = function(callback) { contextData.addOnLoad(callback); };
        form.Refresh                = function(save, successCallback, errorCallback) { contextData.refresh(save).then(successCallback, errorCallback); };
        form.RemoveOnLoad           = function(callback) { contextData.removeOnLoad(callback); };
        form.Save                   = function(saveOptions, successCallback, errorCallback) { contextData.save(saveOptions).then(successCallback, errorCallback); };
        form.AddOnSave              = function(callback) { contextDataEntity.addOnSave(callback); };
        form.RemoveOnSave           = function(callback) { contextDataEntity.removeOnSave(callback); };
        form.EntitySave             = function(saveOption) { contextDataEntity.save(saveOption); };
        form.ClearFormNotification  = function(uniqueId) { return contextUi.clearFormNotification(uniqueId); };
        form.Close                  = function() { contextUi.close(); };
        form.RefreshRibbon          = function(refreshAll) { contextUi.refreshRibbon(refreshAll); };
        form.SetFormNotification    = function(message, level, uniqueId) {  return contextUi.setFormNotification(message, level, uniqueId); };
        form.FormNavigate           = function(formId) { contextUiFormSelector.items.get(formId).navigate(); };
        return form;
    }
    function loadProcess(formContext) {
        var process = {};
        var getProcess = formContext.data.process;
        var getProcessUi = formContext.ui.process;
        Object.defineProperty(process, "InstanceId",        { get: function() { return getProcess.getInstanceId(); } });
        Object.defineProperty(process, "InstanceName",      { get: function() { return getProcess.getInstanceName(); } });
        Object.defineProperty(process, "ActivePath",        { get: function() { return getProcess.getActivePath(); } });
        Object.defineProperty(process, "DisplayState", {
            get: function() { return getProcessUi.getDisplayState(); },
            set: function(value) { getProcessUi.setDisplayState(value); }
        });
        Object.defineProperty(process, "Visible", {
            get: function() { return getProcessUi.getVisible(); },
            set: function(value) { getProcessUi.setVisible(value); }
        });
        Object.defineProperty(process, "Status", {
            get: function() { return getProcess.getStatus(); },
            set: function(value) { getProcess.setStatus(value, N); }
        });
        Object.defineProperty(process, "ActiveProcess", {
            get: function() {
                var data = { Id: EMPTY_GUID, Name: EMPTY_STRING, IsRendered: false, Stages: N };
                var activeProcess = getProcess.getActiveProcess();
                if (activeProcess.getId) data.Id = activeProcess.getId();
                if (activeProcess.getName) data.Name = activeProcess.getName();
                if (activeProcess.isRendered) data.IsRendered = activeProcess.isRendered();
                if (activeProcess.getStages) data.Stages = activeProcess.getStages();
                return data;
            }
        });
        Object.defineProperty(process, "ActiveStage", {
            get: function() {
                var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
                var activeStage = getProcess.getActiveStage();
                if (activeStage.getCategory) if (activeStage.getCategory().getValue) data.Category = activeStage.getCategory().getValue();
                if (activeStage.getEntityName) data.EntityName = activeStage.getEntityName();
                if (activeStage.getId) data.Id = activeStage.getId();
                if (activeStage.getName) data.Name = activeStage.getName();
                if (activeStage.getStatus) data.Status = activeStage.getStatus();
                if (activeStage.getSteps) data.Steps = activeStage.getSteps();
                return data;
            }
        });
        Object.defineProperty(process, "SelectedStage", {
            get: function() {
                var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
                var selectedStage = getProcess.getSelectedStage();
                if (selectedStage.getCategory) if (selectedStage.getCategory().getValue) data.Category = selectedStage.getCategory().getValue();
                if (selectedStage.getEntityName) data.EntityName = selectedStage.getEntityName();
                if (selectedStage.getId) data.Id = selectedStage.getId();
                if (selectedStage.getName) data.Name = selectedStage.getName();
                if (selectedStage.getStatus) data.Status = selectedStage.getStatus();
                if (selectedStage.getSteps) data.Steps = selectedStage.getSteps();
                return data;
            }
        });
        process.AddOnProcessStatusChange        = function(callback) { getProcess.addOnProcessStatusChange(callback); };
        process.AddOnStageChange                = function(callback) { getProcess.addOnStageChange(callback); };
        process.AddOnStageSelected              = function(callback) { getProcess.addOnStageSelected(callback); };
        process.EnabledProcesses                = function(callback) { getProcess.getEnabledProcesses(callback); };
        process.MoveNext                        = function(callback) { getProcess.moveNext(callback); };
        process.MovePrevious                    = function(callback) { getProcess.movePrevious(callback); };
        process.ProcessInstances                = function(callback) { getProcess.getProcessInstances(callback); };
        process.RemoveOnProcessStatusChange     = function(callback) { getProcess.removeOnProcessStatusChange(callback); };
        process.RemoveOnStageChange             = function(callback) { getProcess.removeOnStageChange(callback); };
        process.RemoveOnStageSelected           = function(callback) { getProcess.removeOnStageSelected(callback); };
        process.SetActiveProcess                = function(processId, callback) { getProcess.setActiveProcess(processId, callback); };
        process.SetActiveProcessInstance        = function(processInstanceId, callback) { getProcess.setActiveProcessInstance(processInstanceId, callback); };
        process.SetActiveStage                  = function(stageId, callback) { getProcess.setActiveStage(stageId, callback); };
        return process;
    }
    function loadField(formContext, body, field, type) {
        var logicalName = (function() {
            if (type === undefined) return field.toLowerCase();
            return (type + field).toLowerCase();
        })();
        var control = formContext.getControl(logicalName);
        var attribute = (function() {
            if (formContext) {
                if (formContext.getAttribute) {
                    var attr = formContext.getAttribute(logicalName);
                    if (attr) {
                        return attr;
                    }
                }
                if (control) {
                    if (control.getAttribute) {
                        attr = control.getAttribute();
                        if (attr) {
                            return attr;
                        }
                    }
                }
            }
        })();
        Object.defineProperty(body[field], "AttributeType",     { get: function() { return attribute.getAttributeType(); } });
        Object.defineProperty(body[field], "Format",            { get: function() { return attribute.getFormat(); } });
        Object.defineProperty(body[field], "InitialValue",      { get: function() { return attribute.getInitialValue(); } });
        Object.defineProperty(body[field], "IsDirty",           { get: function() { return attribute.getIsDirty(); } });
        Object.defineProperty(body[field], "IsPartyList",       { get: function() { return attribute.getIsPartyList(); } });
        Object.defineProperty(body[field], "Max",               { get: function() { return attribute.getMax(); } });
        Object.defineProperty(body[field], "MaxLength",         { get: function() { return attribute.getMaxLength(); } });
        Object.defineProperty(body[field], "Min",               { get: function() { return attribute.getMin(); } });
        Object.defineProperty(body[field], "Name",              { get: function() { return attribute.getName(); } });
        Object.defineProperty(body[field], "Options",           { get: function() { return attribute.getOptions(); } });
        Object.defineProperty(body[field], "AttributeParent",   { get: function() { return attribute.getParent(); } });
        Object.defineProperty(body[field], "SelectedOption",    { get: function() { return attribute.getSelectedOption(); } });
        Object.defineProperty(body[field], "Text",              { get: function() { return attribute.getText(); } });
        Object.defineProperty(body[field], "UserPrivilege",     { get: function() { return attribute.getUserPrivilege(); } });
        Object.defineProperty(body[field], "Valid",             { get: function() { return attribute.isValid(); } });
        Object.defineProperty(body[field], "ControlType",       { get: function() { return control.getControlType(); } });
        Object.defineProperty(body[field], "InitialUrl",        { get: function() { return control.getInitialUrl(); } });
        Object.defineProperty(body[field], "Name2",             { get: function() { return control.getName(); } });
        Object.defineProperty(body[field], "Object",            { get: function() { return control.getObject(); } });
        Object.defineProperty(body[field], "ControlParent",     { get: function() { return control.getParent(); } });
        Object.defineProperty(body[field], "State",             { get: function() { return control.getState(); } });
        Object.defineProperty(body[field], "TotalResultCount",  { get: function() { return control.getTotalResultCount(); } });
        Object.defineProperty(body[field], "Value2",            { get: function() { return control.getValue(); } });
        Object.defineProperty(body[field], "Precision", {
            get: function() { return attribute.getPrecision(); },
            set: function(value) { attribute.setPrecision(value); }
        });
        Object.defineProperty(body[field], "RequiredLevel", {
            get: function() { return attribute.getRequiredLevel(); },
            set: function(value) { attribute.setRequiredLevel(value); }
        });
        Object.defineProperty(body[field], "SubmitMode", {
            get: function() { return attribute.getSubmitMode(); },
            set: function(value) { attribute.setSubmitMode(value); }
        });
        Object.defineProperty(body[field], "Value", {
            get: function() { return attribute.getValue(); },
            set: function(value) { attribute.setValue(value); }
        });
        Object.defineProperty(body[field], "Data", {
            get: function() { return control.getData(); },
            set: function(value) { control.setData(value); }
        });
        Object.defineProperty(body[field], "DefaultView", {
            get: function() { return control.getDefaultView(); },
            set: function(value) { control.setDefaultView(value); }
        });
        Object.defineProperty(body[field], "Disabled", {
            get: function() { return control.getDisabled(); },
            set: function(value) { control.setDisabled(value); }
        });
        Object.defineProperty(body[field], "EntityTypes", {
            get: function() { return control.getEntityTypes(); },
            set: function(value) { control.setEntityTypes(value); }
        });
        Object.defineProperty(body[field], "Label", {
            get: function() { return control.getLabel(); },
            set: function(value) { control.setLabel(value); }
        });
        Object.defineProperty(body[field], "SearchQuery", {
            get: function() { return control.getSearchQuery(); },
            set: function(value) { control.setSearchQuery(value); }
        });
        Object.defineProperty(body[field], "ShowTime", {
            get: function() { return control.getShowTime(); },
            set: function(value) { control.setShowTime(value); }
        });
        Object.defineProperty(body[field], "Src", {
            get: function() { return control.getSrc(); },
            set: function(value) { control.setSrc(value); }
        });
        Object.defineProperty(body[field], "Visible", {
            get: function() { return control.getVisible(); },
            set: function(value) { control.setVisible(value); }
        });
        body[field].Option                  = function(value) { return attribute.getOption(value); };
        body[field].RemoveOnChange          = function(callback) { attribute.removeOnChange(callback); };
        body[field].AddCustomFilter         = function(filter, entityLogicaName) { control.addCustomFilter(filter, entityLogicaName); };
        body[field].AddCustomView           = function(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) { control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault); };
        body[field].AddOnPostSearch         = function(callback) { control.addOnPostSearch(callback); };
        body[field].AddOnResultOpened       = function(callback) { control.addOnResultOpened(callback); };
        body[field].AddOnSelection          = function(callback) { control.addOnSelection(callback); };
        body[field].AddPreSearch            = function(callback) { control.addPreSearch(callback); };
        body[field].ClearNotification       = function(uniqueId) { return control.clearNotification(uniqueId); };
        body[field].ClearOptions            = function() { return control.clearOptions(); };
        body[field].AddOnChange             = function(callback) { attribute.addOnChange(callback); };
        body[field].FireOnChange            = function() { attribute.fireOnChange(); };
        body[field].OpenSearchResult        = function(resultNumber, mode) { return control.openSearchResult(resultNumber, mode); };
        body[field].Refresh                 = function() { control.refresh(); };
        body[field].RemoveOnPostSearch      = function(callback) { control.removeOnPostSearch(callback); };
        body[field].RemoveOnResultOpened    = function(callback) { control.removeOnResultOpened(callback); };
        body[field].RemoveOnSelection       = function(callback) { control.removeOnSelection(callback); };
        body[field].RemoveOption            = function(value) { control.removeOption(value); };
        body[field].RemovePreSearch         = function(callback) { control.removePreSearch(callback); };
        body[field].Focus                   = function() { control.setFocus(); };
        body[field].SetNotification         = function(message, uniqueId) { return control.setNotification(message, uniqueId); };
        body[field].AddOption               = function(text, value, index) { var option = { text: text, value: value }; control.addOption(option, index); };
        body[field].AddNotification         = function(title, message, notificationLevel, uniqueId, callback) {
            var actions = { message: message, actions: [callback] };
            var notification = { messages: [title], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control.addNotification(notification);
        };
    }
    function loadFields(formContext, body, type) {
        for (var field in body) {
            loadField(formContext, body, field, type);
        }
        return body;
    }
    function loadSection(formContext, tab, sections, section) {
        var tabObject = formContext.ui.tabs.get(tab);
        var sectionObject = tabObject.sections.get(section);
        Object.defineProperty(sections[section], "Name",    { get: function() { return sectionObject.getName(); } });
        Object.defineProperty(sections[section], "Parent",  { get: function() { return sectionObject.getParent(); } });
        Object.defineProperty(sections[section], "Label", {
            get: function() { return sectionObject.getLabel(); },
            set: function(value) { sectionObject.setLabel(value); }
        });
        Object.defineProperty(sections[section], "Visible", {
            get: function() { return sectionObject.getVisible(); },
            set: function(value) { sectionObject.setVisible(value); }
        });
    }
    function loadTab(formContext, tabs, tab) {
        var tabObject = formContext.ui.tabs.get(tab);
        Object.defineProperty(tabs[tab], "Name",            { get: function() { return tabObject.getName(); } });
        Object.defineProperty(tabs[tab], "Parent",          { get: function() { return tabObject.getParent(); } });
        Object.defineProperty(tabs[tab], "DisplayState", {
            get: function() { return tabObject.getDisplayState(); },
            set: function(value) { tabObject.setDisplayState(value); }
        });
        Object.defineProperty(tabs[tab], "Label", {
            get: function() { return tabObject.getLabel(); },
            set: function(value) { tabObject.setLabel(value); }
        });
        Object.defineProperty(tabs[tab], "Visible", {
            get: function() { return tabObject.getVisible(); },
            set: function(value) { tabObject.setVisible(value); }
        });
        tabs[tab].AddTabStateChange             = function(callback) { tabObject.addTabStateChange(callback); };
        tabs[tab].Focus                         = function() { tabObject.setFocus(); };
        tabs[tab].RemoveTabStateChange          = function(callback) { tabObject.removeTabStateChange(callback); };
        for (var section in tabs[tab].Section) {
            loadSection(formContext, tab, tabs[tab].Section, section);
        }
    }
    function loadTabs(formContext, tabs) {
        for (var tab in tabs) {
            loadTab(formContext, tabs, tab);
        }
    }
    function loadNavigation(formContext, navigations, navigation) {
        var navigationItem = formContext.ui.navigation.items.get(navigation);
        Object.defineProperty(navigations[navigation], "Id",        { get: function() { return navigationItem.getId(); } });
        Object.defineProperty(navigations[navigation], "Label", {
            get: function() { return navigationItem.getLabel(); },
            set: function(value) { navigationItem.setLabel(value); }
        });
        Object.defineProperty(navigations[navigation], "Visible", {
            get: function() { return navigationItem.getVisible(); },
            set: function(value) { navigationItem.setVisible(value); }
        });
        navigations[navigation].Focus = function() { navigationItem.setFocus(); };
    }
    function loadNavigations(formContext, navigations) {
        for (var navigation in navigations) {
            loadNavigation(formContext, navigations, navigation);
        }
    }
    function loadQuickForm(formContext, quickForms, quickForm) {
        var quickViewControl = formContext.ui.quickForms.get(quickForm);
        Object.defineProperty(quickForms[quickForm], "ControlType",     { get: function() { return quickViewControl.getControlType(); } });
        Object.defineProperty(quickForms[quickForm], "Visible",         { get: function() { return quickViewControl.getVisible(); } });
        Object.defineProperty(quickForms[quickForm], "Name",            { get: function() { return quickViewControl.getName(); } });
        Object.defineProperty(quickForms[quickForm], "Parent",          { get: function() { return quickViewControl.getParent(); } });
        Object.defineProperty(quickForms[quickForm], "Label", {
            get: function() { return quickViewControl.getLabel(); },
            set: function(value) { quickViewControl.setLabel(value); }
        });
        quickForms[quickForm].IsLoaded  = function() { return quickViewControl.isLoaded(); };
        quickForms[quickForm].Refresh   = function() { quickViewControl.refresh(); };
        quickForms[quickForm].Focus     = function() { quickViewControl.setFocus(); };
    }
    function loadQuickForms(formContext, quickForms) {
        for (var quickForm in quickForms) {
            loadQuickForm(formContext, quickForms, quickForm);
        }
    }
    function loadUtility(defaultWebResourceName) {
        var getUtility = Xrm.Utility;
        var getGlobalContext = Xrm.Utility.getGlobalContext();
        var getNavigation = Xrm.Navigation;
        var getPanel = Xrm.Panel;
        var getEncoding = Xrm.Encoding;
        var getDevice = Xrm.Device;
        var utility = {};
        Object.defineProperty(utility, "LearningPathAttributeName",     { get: function() { return getUtility.getLearningPathAttributeName(); } });
        Object.defineProperty(utility, "ClientUrl",                     { get: function() { return getGlobalContext.getClientUrl(); } });
        Object.defineProperty(utility, "CurrentAppUrl",                 { get: function() { return getGlobalContext.getCurrentAppUrl(); } });
        Object.defineProperty(utility, "Version",                       { get: function() { return getGlobalContext.getVersion(); } });
        Object.defineProperty(utility, "IsOnPremises",                  { get: function() { return getGlobalContext.isOnPremises(); } });
        Object.defineProperty(utility, "Client", {
            get: function() {
                var client = getGlobalContext.client;
                var Client = {};
                Object.defineProperty(Client, "ClientName",     { get: function() { return client.getClient(); } });
                Object.defineProperty(Client, "ClientState",    { get: function() { return client.getClientState(); } });
                Object.defineProperty(Client, "FormFactor",     { get: function() { return client.getFormFactor(); } });
                Client.IsOffline = function() { return client.isOffline(); };
                return Client;
            }
        });
        Object.defineProperty(utility, "OrganizationSettings", {
            get: function() {
                var organizationSettings = getGlobalContext.organizationSettings;
                var OrganizationSettings = {};
                Object.defineProperty(OrganizationSettings, "getGlobalContext",     { get: function() { return organizationSettings.attributes; } });
                Object.defineProperty(OrganizationSettings, "BaseCurrencyId",       { get: function() { return organizationSettings.baseCurrencyId; } });
                Object.defineProperty(OrganizationSettings, "DefaultCountryCode",   { get: function() { return organizationSettings.defaultCountryCode; } });
                Object.defineProperty(OrganizationSettings, "LanguageId",           { get: function() { return organizationSettings.languageId; } });
                Object.defineProperty(OrganizationSettings, "OrganizationId",       { get: function() { return organizationSettings.organizationId; } });
                Object.defineProperty(OrganizationSettings, "UniqueName",           { get: function() { return organizationSettings.uniqueName; } });
                Object.defineProperty(OrganizationSettings, "UseSkypeProtocol",     { get: function() { return organizationSettings.useSkypeProtocol; } });
                OrganizationSettings.IsAutoSaveEnabled = function() { return organizationSettings.isAutoSaveEnabled; };
                return OrganizationSettings;
            }
        });
        Object.defineProperty(utility, "UserSettings", {
            get: function() {
                var userSettings = getGlobalContext.userSettings;
                var UserSettings = {};
                Object.defineProperty(UserSettings, "DateFormattingInfo",       { get: function() { return userSettings.dateFormattingInfo; } });
                Object.defineProperty(UserSettings, "DefaultDashboardId",       { get: function() { return userSettings.defaultDashboardId; } });
                Object.defineProperty(UserSettings, "LanguageId",               { get: function() { return userSettings.languageId; } });
                Object.defineProperty(UserSettings, "SecurityRolePrivileges",   { get: function() { return userSettings.securityRolePrivileges; } });
                Object.defineProperty(UserSettings, "SecurityRoles",            { get: function() { return userSettings.securityRoles; } });
                Object.defineProperty(UserSettings, "TransactionCurrencyId",    { get: function() { return userSettings.transactionCurrencyId; } });
                Object.defineProperty(UserSettings, "UserId",                   { get: function() { return userSettings.userId; } });
                Object.defineProperty(UserSettings, "UserName",                 { get: function() { return userSettings.userName; } });
                UserSettings.IsGuidedHelpEnabled    = function() { return userSettings.isGuidedHelpEnabled; };
                UserSettings.IsHighContrastEnabled  = function() { return userSettings.isHighContrastEnabled; };
                UserSettings.IsRTL                  = function() { return userSettings.isRTL; };
                UserSettings.TimeZoneOffsetMinutes  = function() { return userSettings.getTimeZoneOffsetMinutes(); };
                return UserSettings;
            }
        });
        utility.CloseProgressIndicator      = function() { getUtility.closeProgressIndicator(); };
        utility.AllowedStatusTransitions    = function(entityName, stateCode, successCallback, errorCallback) { getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback); };
        utility.EntityMetadata              = function(entityName, attributes, successCallback, errorCallback) { getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback); };
        utility.ResourceString              = function(webResourceName, key) { return getUtility.getResourceString(webResourceName, key); };
        utility.Resource                    = function(key) { if (defaultWebResourceName !== undefined) return getUtility.getResourceString(defaultWebResourceName, key); return EMPTY_STRING; };
        utility.InvokeProcessAction         = function(name, parameters, successCallback, errorCallback) { getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback); };
        utility.LookupObjects               = function(lookupOptions, successCallback, errorCallback) { getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback); };
        utility.RefreshParentGrid           = function(lookupOptions) { getUtility.refreshParentGrid(lookupOptions); };
        utility.ShowProgressIndicator       = function(message) { getUtility.showProgressIndicator(message); };
        utility.AdvancedConfigSetting       = function(setting) { return getGlobalContext.getAdvancedConfigSetting(setting); };
        utility.CurrentAppName              = function(successCallback, errorCallback) { getGlobalContext.getCurrentAppName().then(successCallback, errorCallback); };
        utility.CurrentAppProperties        = function(successCallback, errorCallback) { getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback); };
        utility.PrependOrgName              = function(sPath) { return getGlobalContext.prependOrgName(sPath); };
        utility.OpenAlertDialog             = function(alertStrings, alertOptions, closeCallback, errorCallback) { getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback); };
        utility.OpenConfirmDialog           = function(confirmStrings, confirmOptions, successCallback, errorCallback) { getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback); };
        utility.OpenErrorDialog             = function(errorOptions, successCallback, errorCallback) { getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback); };
        utility.OpenFile                    = function(file, openFileOptions) { getNavigation.openFile(file, openFileOptions); };
        utility.OpenForm                    = function(entityFormOptions, formParameters, successCallback, errorCallback) { getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback); };
        utility.OpenUrl                     = function(url, openUrlOptions) { getNavigation.openUrl(url, openUrlOptions); };
        utility.OpenWebResource             = function(webResourceName, windowOptions, data) { getNavigation.openWebResource(webResourceName, windowOptions, data); };
        utility.LoadPanel                   = function(url, title) { getPanel.loadPanel(url, title); };
        utility.XmlAttributeEncode          = function(arg) { return getEncoding.xmlAttributeEncode(arg); };
        utility.XmlEncode                   = function(arg) { return getEncoding.xmlEncode(arg); };
        utility.CaptureAudio                = function(successCallback, errorCallback) { getDevice.captureAudio().then(successCallback, errorCallback); };
        utility.CaptureImage                = function(imageOptions, successCallback, errorCallback) { getDevice.captureImage(imageOptions).then(successCallback, errorCallback); };
        utility.CaptureVideo                = function(successCallback, errorCallback) { getDevice.captureVideo().then(successCallback, errorCallback); };
        utility.BarcodeValue                = function(successCallback, errorCallback) { getDevice.getBarcodeValue().then(successCallback, errorCallback); };
        utility.CurrentPosition             = function(successCallback, errorCallback) { getDevice.getCurrentPosition().then(successCallback, errorCallback); };
        utility.PickFile                    = function(pickFileOptions, successCallback, errorCallback) { getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback); };
        return utility;
    }
    return {
        LoadForm: loadForm,
        LoadProcess: loadProcess,
        LoadFields: loadFields,
        LoadTabs: loadTabs,
        LoadNavigations: loadNavigations,
        LoadQuickForms: loadQuickForms,
        LoadUtility: loadUtility
    };
})();