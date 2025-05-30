'use strict';
var devKit = (function () {
    'use strict';

    function dg(obj, prop, getter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            enumerable: true,
            configurable: true
        });
    }

    function dgs(obj, prop, getter, setter) {
        Object.defineProperty(obj, prop, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }

    function lf(fc) {
        var f = {};
        var cd = fc?.data;
        f.DataAddOnLoad = cb => cd?.addOnLoad(cb);
        f.Refresh = (s, scb, ecb) => cd?.refresh(s)?.then(scb, ecb);
        f.DataRemoveOnLoad = cb => cd?.removeOnLoad(cb);
        f.Save = (so, scb, ecb) => cd?.save(so)?.then(scb, ecb);
        dg(f, 'DataIsDirty', () => cd?.getIsDirty());
        dg(f, 'DataIsValid', () => cd?.isValid());
        var cde = fc?.data?.entity;
        f.AddOnSave = cb => cde?.addOnSave(cb);
        f.AddOnPostSave = cb => cde?.addOnPostSave(cb);
        f.RemoveOnSave = cb => cde?.removeOnSave(cb);
        f.RemoveOnPostSave = cb => cde?.removeOnPostSave(cb);
        dg(f, 'Attributes', () => cde?.attributes);
        dg(f, 'DataXml', () => cde?.getDataXml());
        dg(f, 'EntityName', () => cde?.getEntityName());
        dg(f, 'EntityReference', () => cde?.getEntityReference());
        dg(f, 'EntityId', () => cde?.getId());
        dg(f, 'EntityIsDirty', () => cde?.getIsDirty());
        dg(f, 'PrimaryAttributeValue', () => cde?.getPrimaryAttributeValue());
        dg(f, 'EntityIsValid', () => cde?.isValid());
        var cu = fc?.ui;
        f.UiAddLoaded = cb => cu?.addLoaded(cb);
        f.UiAddOnLoad = cb => cu?.addOnLoad(cb);
        f.ClearFormNotification = uid => cu?.clearFormNotification(uid);
        f.Close = () => cu?.close();
        f.RefreshRibbon = ra => cu?.refreshRibbon(ra);
        f.UiRemoveLoaded = cb => cu?.removeLoaded(cb);
        f.UiRemoveOnLoad = cb => cu?.removeOnLoad(cb);
        f.SetFormEntityName = a => cu?.setFormEntityName(a);
        f.SetFormNotification = (m, l, uid) => cu?.setFormNotification(m, l, uid);
        dg(f, 'Controls', () => cu?.controls);
        dg(f, 'FormType', () => cu?.getFormType());
        dg(f, 'ViewPortHeight', () => cu?.getViewPortHeight());
        dg(f, 'ViewPortWidth', () => cu?.getViewPortWidth());
        var cufs = fc?.ui?.formSelector;
        f.FormNavigateToFormId = fid => {
            for (var i = 0; i < cufs?.items?.getLength(); i++) {
                if (fid === cufs?.items?.get(i)?.getId()) {
                    cufs?.items?.get(i)?.navigate();
                }
            }
        };
        f.FormNavigateToFormLabel = fl => {
            for (var i = 0; i < cufs?.items?.getLength(); i++) {
                if (fl === cufs?.items?.get(i)?.getLabel()) {
                    cufs?.items?.get(i)?.navigate();
                }
            }
        };
        f.FormIsVisible = fid => {
            for (var i = 0; i < cufs?.items?.getLength(); i++) {
                if (fid === cufs?.items?.get(i)?.getId()) {
                    return cufs?.items?.get(i)?.getVisible();
                }
            }
        }
        f.FormSetVisible = (fid, v) => {
            for (var i = 0; i < cufs?.items?.getLength(); i++) {
                if (fid === cufs?.items?.get(i)?.getId()) {
                    cufs?.items?.get(i)?.setVisible(v);
                }
            }
        }
        dg(f, 'FormId', () => cufs?.getCurrentItem()?.getId());
        dg(f, 'FormLabel', () => cufs?.getCurrentItem()?.getLabel());
        return f;
    }
    function lp(fc) {
        const ls = s => {
            var o = {};
            dg(o, 'Attribute', () => s?.getAttribute());
            dg(o, 'Name', () => s?.getName());
            dg(o, 'Required', () => s?.isRequired());
            dg(o, 'Progress', () => s?.getProgress());
            o.SetProgress = (sp, m) => s?.setProgress(sp, m);
            return o;
        }
        const lg = sg => {
            var o = {};
            dg(o, 'Category', () => sg?.getCategory()?.getValue());
            dg(o, 'EntityName', () => sg?.getEntityName());
            dg(o, 'Id', () => sg?.getId());
            dg(o, 'Name', () => sg?.getName());
            dg(o, 'Status', () => sg?.getStatus());
            o.AllowCreateNew = cb => sg.getNavigationBehavior().allowCreateNew = cb;
            dg(o, 'Steps', () => {
                var sa = [];
                var ss = sg?.getSteps();
                for (var i = 0; i < ss?.length; i++) {
                    var s = ss[i];
                    sa.push(ls(s));
                }
                return sa;
            });
            return o;
        }
        const lpi = p => {
            var o = {};
            dg(o, 'Id', () => p?.getId());
            dg(o, 'Name', () => p?.getName());
            dg(o, 'IsRendered', () => p?.isRendered());
            dg(o, 'Stages', () => {
                var so = {};
                so.getLength = () => p?.getStages()?.getLength();
                so.get = i => {
                    var s = p?.getStages()?.get(i);
                    return lg(s);
                }
                so.forEach = cb => {
                    var ss = p?.getStages();
                    for (var i = 0; i < ss?.getLength(); i++) {
                        var s = ss?.get(i);
                        cb(lg(s), i);
                    }
                }
                return so;
            });
            return o;
        }
        var pr = {};
        var gp = fc?.data?.process;
        var gpu = fc?.ui?.process;
        pr.AddOnPreProcessStatusChange = cb => gp?.addOnPreProcessStatusChange(cb);
        pr.RemoveOnPreProcessStatusChange = cb => gp?.removeOnPreProcessStatusChange(cb);
        pr.AddOnPreStageChange = cb => gp?.addOnPreStageChange(cb);
        pr.RemoveOnPreStageChange = cb => gp?.removeOnPreStageChange(cb);
        pr.AddOnProcessStatusChange = cb => gp?.addOnProcessStatusChange(cb);
        pr.RemoveOnProcessStatusChange = cb => gp?.removeOnProcessStatusChange(cb);
        pr.AddOnStageChange = cb => gp?.addOnStageChange(cb);
        pr.RemoveOnStageChange = cb => gp?.removeOnStageChange(cb);
        pr.AddOnStageSelected = cb => gp?.addOnStageSelected(cb);
        pr.RemoveOnStageSelected = cb => gp?.removeOnStageSelected(cb);
        pr.EnabledProcesses = cb => {
            gp?.getEnabledProcesses(eps => {
                var ps = [];
                for (var pid in eps) {
                    ps.push({ ProcessId: pid, ProcessName: eps[pid] });
                }
                cb(ps);
            });
        };
        pr.MoveNext = cb => gp?.moveNext(cb);
        pr.MovePrevious = cb => gp?.movePrevious(cb);
        pr.ProcessInstances = cb => {
            gp?.getProcessInstances(pis => {
                var ps = [];
                for (var pid in pis) {
                    var p = pis[pid];
                    ps.push({
                        ProcessId: p.ProcessDefinitionID,
                        ProcessName: p.ProcessDefinitionName,
                        CreatedOn: p.CreatedOn,
                        CreatedOnDate: p.CreatedOnDate,
                        InstanceId: p.ProcessInstanceID,
                        InstanceName: p.ProcessInstanceName,
                        Status: p.StatusCodeName
                    });
                }
                cb(ps);
            });
        };
        pr.SetActiveStage = (sid, cb) => gp?.setActiveStage(sid, cb);
        pr.SetActiveProcessInstance = (piid, cb) => gp?.setActiveProcessInstance(piid, cb);
        pr.SetActiveProcess = (pid, cb) => gp?.setActiveProcess(pid, cb);
        pr.Reflow = (uu, ps, ns) => gpu?.reflow(uu, ps, ns);
        dg(pr, 'ActiveProcess', () => lpi(gp?.getActiveProcess()));
        dg(pr, 'SelectedStage', () => lg(gp?.getSelectedStage()));
        dg(pr, 'ActiveStage', () => lg(gp?.getActiveStage()));
        dg(pr, 'InstanceId', () => gp?.getInstanceId());
        dg(pr, 'InstanceName', () => gp?.getInstanceName());
        dgs(pr, 'Status', () => gp?.getStatus(), v => { gp?.setStatus(v); });
        dgs(pr, 'DisplayState', () => gpu?.getDisplayState(), v => { gpu?.setDisplayState(v); });
        dgs(pr, 'Visible', () => gpu?.getVisible(), v => { gpu?.setVisible(v); });
        dg(pr, 'ActivePath', () => {
            var apo = {};
            apo.getLength = () => gp?.getActivePath()?.getLength();
            apo.get = i => {
                var s = gp?.getActivePath()?.get(i);
                return lg(s);
            }
            apo.forEach = cb => {
                var ss = gp?.getActivePath();
                for (var i = 0; i < ss?.getLength(); i++) {
                    var s = ss?.get(i);
                    cb(lg(s), i);
                }
            }
            return apo;
        });
        return pr;
    }
    function ldf(formContext, field, attribute, control) {
        field.ContentWindow = (successCallback, errorCallback) => control?.getContentWindow()?.then(successCallback, errorCallback);
        field.Option = value => attribute?.getOption(value);
        field.RemoveOnChange = callback => attribute?.removeOnChange(callback);
        field.AddCustomFilter = (filter, entityLogicaName) => control?.addCustomFilter(filter, entityLogicaName);
        field.AddCustomView = (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) => control?.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
        field.AddPostSearch = callback => control?.addOnPostSearch(callback);
        field.AddOnOutputChange = callback => control?.addOnOutputChange(callback);
        field.AddResultOpened = callback => control?.addOnResultOpened(callback);
        field.AddSelection = callback => control?.addOnSelection(callback);
        field.AddPreSearch = callback => control?.addPreSearch(callback);
        field.ClearNotification = uniqueId => control?.clearNotification(uniqueId);
        field.ClearOptions = () => control?.clearOptions();
        field.AddOnChange = callback => attribute?.addOnChange(callback);
        field.FireOnChange = () => attribute?.fireOnChange();
        field.OpenSearchResult = (resultNumber, mode) => control?.openSearchResult(resultNumber, mode);
        field.Refresh = () => control?.refresh();
        field.RemovePostSearch = callback => control?.removeOnPostSearch(callback);
        field.RemoveOnOutputChange = callback => control?.removeOnOutputChange(callback);
        field.RemoveResultOpened = callback => control?.removeOnResultOpened(callback);
        field.RemoveSelection = callback => control?.removeOnSelection(callback);
        field.RemoveOption = value => control?.removeOption(value);
        field.RemovePreSearch = callback => control?.removePreSearch(callback);
        field.Focus = () => control?.setFocus();
        field.SetNotification = (message, uniqueId) => control?.setNotification(message, uniqueId);
        field.AddOption = (text, value, index) => control?.addOption({ text: text, value: value }, index);
        field.AddNotification = (message, notificationLevel, uniqueId, callback) => {
            var actions = { message: message, actions: [callback] };
            var notification = { messages: [message], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
            return control?.addNotification(notification);
        };
        field.AddLookupTagClick = callback => control?.addOnLookupTagClick(callback);
        field.RemoveLookupTagClick = callback => control?.removeOnLookupTagClick(callback);
        field.SetIsValid = (valid, message) => attribute?.setIsValid(valid, message);
        dg(field, 'AttributeType', () => attribute?.getAttributeType());
        dg(field, 'Format', () => attribute?.getFormat());
        dg(field, 'InitialValue', () => attribute?.getInitialValue());
        dg(field, 'IsDirty', () => attribute?.getIsDirty());
        dg(field, 'IsPartyList', () => attribute?.getIsPartyList());
        dg(field, 'Max', () => attribute?.getMax());
        dg(field, 'MaxLength', () => attribute?.getMaxLength());
        dg(field, 'Min', () => attribute?.getMin());
        dg(field, 'AttributeName', () => attribute?.getName());
        dg(field, 'Options', () => attribute?.getOptions());
        dg(field, 'ControlOptions', () => control?.getOptions());
        dg(field, 'AttributeParent', () => attribute?.getParent());
        dg(field, 'SelectedOption', () => attribute?.getSelectedOption());
        dg(field, 'Text', () => attribute?.getText());
        dg(field, 'UserPrivilege', () => attribute?.getUserPrivilege());
        dg(field, 'IsValid', () => attribute?.isValid());
        dg(field, 'ControlType', () => control?.getControlType());
        dg(field, 'InitialUrl', () => control?.getInitialUrl());
        dg(field, 'ControlName', () => control?.getName());
        dg(field, 'Object', () => control?.getObject());
        dg(field, 'ControlParent', () => control?.getParent());
        dg(field, 'State', () => control?.getState());
        dg(field, 'TotalResultCount', () => control?.getTotalResultCount());
        dg(field, 'SelectedResults', () => control?.getSelectedResults());
        dg(field, 'Attribute', () => control?.getAttribute());
        dgs(field, 'Precision', () => attribute?.getPrecision(), value => { attribute?.setPrecision(value); });
        dgs(field, 'RequiredLevel', () => attribute?.getRequiredLevel(), value => { attribute?.setRequiredLevel(value); });
        dgs(field, 'SubmitMode', () => attribute?.getSubmitMode(), value => { attribute?.setSubmitMode(value); });
        dgs(field, 'Value', () => attribute?.getValue(), value => {
            if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
            attribute?.setValue(value);
        });
        dgs(field, 'Data', () => control?.getData(), value => { control?.setData(value); });
        dgs(field, 'DefaultView', () => control?.getDefaultView(), value => { control?.setDefaultView(value); });
        dgs(field, 'Disabled', () => control?.getDisabled(), value => {
            if (formContext?.ui?.getFormType() === 3 || formContext?.ui?.getFormType() === 4) return;
            control?.setDisabled(value);
        });
        dgs(field, 'EntityTypes', () => control?.getEntityTypes(), value => { control?.setEntityTypes(value); });
        dgs(field, 'Label', () => control?.getLabel(), value => { control?.setLabel(value); });
        dgs(field, 'SearchQuery', () => control?.getSearchQuery(), value => { control?.setSearchQuery(value); });
        dgs(field, 'ShowTime', () => control?.getShowTime(), value => { control?.setShowTime(value); });
        dgs(field, 'Src', () => control?.getSrc(), value => { control?.setSrc(value); });
        dgs(field, 'Visible', () => control?.getVisible(), value => { control?.setVisible(value); });
    }
    function lds(formContext, body, type) {
        for (var field in body) {
            var logicalName = (() => {
                if (type === undefined) return field?.toLowerCase();
                return (type + field)?.toLowerCase();
            })();
            var control = formContext?.getControl(logicalName) ?? formContext?.getControl(field);
            var attribute = (() => {
                var attr = formContext?.getAttribute(logicalName);
                if (attr) return attr;
                if (control?.getAttribute) {
                    attr = control?.getAttribute();
                    if (attr) return attr;
                }
                return null;
            })();
            ldf(formContext, body[field], attribute, control);
        }
        if (type === "header_") {
            var getHeaderSection = formContext?.ui?.headerSection;
            dgs(body, 'BodyVisible', () => getHeaderSection?.getBodyVisible(), value => { getHeaderSection?.setBodyVisible(value); });
            dgs(body, 'CommandBarVisible', () => getHeaderSection?.getCommandBarVisible(), value => { getHeaderSection?.setCommandBarVisible(value); });
            dgs(body, 'TabNavigatorVisible', () => getHeaderSection?.getTabNavigatorVisible(), value => { getHeaderSection?.setTabNavigatorVisible(value); });
        }
        return body;
    }
    function lt(formContext, tabs) {
        const lsc = (formContext, tab, sections, section) => {
            var tabObject = formContext?.ui?.tabs?.get(tab);
            var sectionObject = tabObject?.sections?.get(section);
            dg(sections[section], 'Name', () => sectionObject?.getName());
            dg(sections[section], 'Parent', () => sectionObject?.getParent());
            dgs(sections[section], 'Label', () => sectionObject?.getLabel(), value => sectionObject?.setLabel(value));
            dgs(sections[section], 'Visible', () => sectionObject?.getVisible(), value => sectionObject?.setVisible(value));
        }
        const ltb = (formContext, tabs, tab) => {
            var tabObject = formContext?.ui?.tabs?.get(tab);
            tabs[tab].AddTabStateChange = callback => tabObject?.addTabStateChange(callback);
            tabs[tab].Focus = () => tabObject?.setFocus();
            tabs[tab].RemoveTabStateChange = callback => tabObject?.removeTabStateChange(callback);
            dg(tabs[tab], 'Name', () => tabObject?.getName());
            dg(tabs[tab], 'Parent', () => tabObject?.getParent());
            dgs(tabs[tab], 'DisplayState', () => tabObject?.getDisplayState(), value => { tabObject?.setDisplayState(value); });
            dgs(tabs[tab], 'ContentType', () => tabObject?.getContentType(), value => { tabObject?.setContentType(value); });
            dgs(tabs[tab], 'Label', () => tabObject?.getLabel(), value => { tabObject?.setLabel(value); });
            dgs(tabs[tab], 'Visible', () => tabObject?.getVisible(), value => { tabObject?.setVisible(value); });
            for (var section in tabs[tab].Section) {
                lsc(formContext, tab, tabs[tab].Section, section);
            }
        }
        for (var tab in tabs) {
            ltb(formContext, tabs, tab);
        }
    }
    function ln(formContext, navigations) {
        const lni = (formContext, navigations, navigation) => {
            var navigationItem = null;
            for (var i = 0; i < formContext?.ui?.navigation?.items?.getLength(); i++) {
                if (navigation === formContext?.ui?.navigation?.items?.get(i)?.getId()) { navigationItem = formContext?.ui?.navigation?.items?.get(i); break; }
            }
            navigations[navigation].Focus = () => navigationItem?.setFocus();
            dg(navigations[navigation], 'Id', () => navigationItem?.getId());
            dgs(navigations[navigation], 'Label', () => navigationItem?.getLabel(), value => navigationItem?.setLabel(value));
            dgs(navigations[navigation], 'Visible', () => navigationItem?.getVisible(), value => navigationItem?.setVisible(value));
        }
        for (var navigation in navigations) {
            lni(formContext, navigations, navigation);
        }
    }
    function lqf(formContext, quickForms) {
        const lqi = (formContext, quickForms, quickForm) => {
            var fields = [];
            for (var field in quickForms[quickForm]) {
                if (field === "Body") continue;
                if (field === "Controls") continue;
                if (field === "IsLoaded") continue;
                if (field === "Refresh") continue;
                if (field === "Focus") continue;
                if (field === "ControlType") continue;
                if (field === "Disabled") continue;
                if (field === "Label") continue;
                if (field === "ControlName") continue;
                if (field === "ControlParent") continue;
                if (field === "Visible") continue;
                fields.push(field);
            }
            var quick = formContext?.ui?.quickForms?.get(quickForm);
            dg(quickForms[quickForm], 'Body', () => loadFormDialog(quick, fields));
            quickForms[quickForm].Controls = arg => quick?.getControl(arg);
            quickForms[quickForm].IsLoaded = () => quick?.isLoaded();
            quickForms[quickForm].Refresh = () => quick?.refresh();
            quickForms[quickForm].Focus = () => quick?.setFocus();
            dg(quickForms[quickForm], 'ControlType', () => quick?.getControlType());
            dgs(quickForms[quickForm], 'Disabled', () => quick?.getDisabled(), value => { quick?.setDisabled(value); });
            dgs(quickForms[quickForm], 'Label', () => quick?.getLabel(), value => { quick?.setLabel(value); });
            dg(quickForms[quickForm], 'ControlName', () => quick?.getName());
            dg(quickForms[quickForm], 'ControlParent', () => quick?.getParent());
            dgs(quickForms[quickForm], 'Visible', () => quick?.getVisible(), value => { quick?.setVisible(value); });
        }
        for (var quickForm in quickForms) {
            lqi(formContext, quickForms, quickForm);
        }
    }
    function lgd(formContext, grids) {
        const lgr = row => {
            var obj = {};
            dg(obj, 'EntityName', () => row?.data?.entity?.getEntityName());
            dg(obj, 'EntityReference', () => row?.data?.entity?.getEntityReference());
            dg(obj, 'EntityId', () => row?.data?.entity?.getId());
            dg(obj, 'PrimaryAttributeValue', () => row?.data?.entity?.getPrimaryAttributeValue());
            dg(obj, 'Columns', () => {
                var columnsObj = {};
                columnsObj.getLength = () => row?.data?.entity?.attributes?.getLength();
                columnsObj.get = index => {
                    var column = row?.data?.entity?.attributes?.get(index);
                    return lgc(column);
                };
                columnsObj.forEach = callback => {
                    var columns = row?.data?.entity?.attributes;
                    for (var index = 0; index < columns?.getLength(); index++) {
                        var column = columns?.get(index);
                        callback(lgc(column), index);
                    }
                };
                return columnsObj;
            });
            return obj;
        }
        const lgc = col => {
            var obj = {};
            obj.SetNotification = (message, uniqueId) => col?.controls?.get(0)?.setNotification(message, uniqueId);
            obj.ClearNotification = uniqueId => col?.controls?.get(0)?.clearNotification(uniqueId);
            dg(obj, 'Name', () => col?.getName());
            dgs(obj, 'RequiredLevel', () => col?.getRequiredLevel(), value => { col?.setRequiredLevel(value); });
            dgs(obj, 'Value', () => col?.getValue(), value => { col?.setValue(value); });
            dgs(obj, 'Disabled', () => col?.controls?.get(0)?.getDisabled(), value => { col?.controls?.get(0)?.setDisabled(value); });
            dg(obj, 'Label', () => col?.controls?.get(0)?.getLabel());
            return obj;
        }
        const lgi = (formContext, grids, grid) => {
            var gridControl = formContext?.getControl(grid);
            grids[grid].AddOnLoad = callback => gridControl?.addOnLoad(callback);
            grids[grid].RemoveOnLoad = callback => gridControl?.removeOnLoad(callback);
            grids[grid].Url = client => gridControl?.getUrl(client);
            grids[grid].Refresh = () => gridControl?.refresh();
            grids[grid].RefreshRibbon = () => gridControl?.refreshRibbon();
            grids[grid].OpenRelatedGrid = () => gridControl?.openRelatedGrid();
            dg(grids[grid], 'EntityName', () => gridControl?.getEntityName());
            dg(grids[grid], 'FetchXml', () => gridControl?.getFetchXml());
            dg(grids[grid], 'GridType', () => gridControl?.getGridType());
            dg(grids[grid], 'Relationship', () => gridControl?.getRelationship());
            dg(grids[grid], 'ViewSelector', () => {
                var viewSelector = gridControl?.getViewSelector();
                var obj = {};
                dgs(obj, 'CurrentView', () => viewSelector?.getCurrentView(), value => viewSelector?.setCurrentView(value));
                dg(obj, 'Visible', () => viewSelector?.isVisible());
                return obj;
            });
            dg(grids[grid], 'Rows', () => {
                var obj = {};
                var g = formContext?.getControl(grid)?.getGrid();
                obj.getLength = () => g?.getRows()?.getLength();
                obj.get = index => lgr(g?.getRows()?.get(index));
                obj.forEach = callback => {
                    var rows = g?.getRows();
                    for (var index = 0; index < rows?.getLength(); index++) {
                        var row = rows?.get(index);
                        callback(lgr(row), index);
                    }
                };
                return obj;
            });
            dg(grids[grid], 'SelectedRows', () => {
                var obj = {};
                var g = formContext?.getControl(grid)?.getGrid();
                obj.getLength = () => g?.getSelectedRows()?.getLength();
                obj.get = index => {
                    var row = g?.getSelectedRows()?.get(index)?.getData();
                    return lgr(row);
                };
                obj.forEach = callback => {
                    var rows = g?.getSelectedRows();
                    for (var index = 0; index < rows?.getLength(); index++) {
                        var row = rows?.get(index)?.getData();
                        callback(lgr(row), index);
                    }
                };
                return obj;
            });
            dg(grids[grid], 'TotalRecordCount', () => gridControl?.getGrid()?.getTotalRecordCount());
            dgs(grids[grid], 'Visible', () => gridControl?.getVisible(), value => { gridControl?.setVisible(value); });
        }
        for (var grid in grids) {
            lgi(formContext, grids, grid);
        }
    }
    function lu(defaultWebResourceName) {
        var utility = {};
        var getUtility = Xrm?.Utility;
        utility.CloseProgressIndicator = () => getUtility?.closeProgressIndicator();
        utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) { getUtility?.getAllowedStatusTransitions(entityName, stateCode)?.then(successCallback, errorCallback); };
        utility.EntityMainFormDescriptor = (entityName, formId) => getUtility?.getEntityMainFormDescriptor(entityName, formId);
        utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) { getUtility?.getEntityMetadata(entityName, attributes)?.then(successCallback, errorCallback); };
        utility.ResourceString = (webResourceName, key) => getUtility?.getResourceString(webResourceName, key);
        utility.Resource = key => getUtility?.getResourceString(defaultWebResourceName, key);
        utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) { getUtility?.invokeProcessAction(name, parameters)?.then(successCallback, errorCallback); };
        utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) { getUtility?.lookupObjects(lookupOptions)?.then(successCallback, errorCallback); };
        utility.RefreshParentGrid = lookupOptions => getUtility?.refreshParentGrid(lookupOptions);
        utility.ShowProgressIndicator = message => getUtility?.showProgressIndicator(message);
        dg(utility, 'LearningPathAttributeName', () => getUtility?.getLearningPathAttributeName());
        dg(utility, 'PageContext', () => getUtility?.getPageContext());
        var getGlobalContext = Xrm?.Utility?.getGlobalContext();
        utility.AdvancedConfigSetting = setting => getGlobalContext?.getAdvancedConfigSetting(setting);
        utility.CurrentAppName = function (successCallback, errorCallback) {
            getGlobalContext?.getCurrentAppName()?.then(successCallback, errorCallback);
        };
        utility.CurrentAppProperties = function (successCallback, errorCallback) {
            getGlobalContext?.getCurrentAppProperties()?.then(successCallback, errorCallback);
        };
        utility.WebResourceUrl = webResourceName => getGlobalContext?.getWebResourceUrl(webResourceName);
        utility.PrependOrgName = sPath => getGlobalContext?.prependOrgName(sPath);
        dg(utility, 'Client', () => {
            var obj = {};
            var client = getGlobalContext?.client;
            dg(obj, 'ClientName', () => client?.getClient());
            dg(obj, 'ClientState', () => client?.getClientState());
            dg(obj, 'FormFactor', () => client?.getFormFactor());
            dg(obj, 'IsOffline', () => client?.isOffline());
            dg(obj, 'IsNetworkAvailable', () => client?.isNetworkAvailable());
            return obj;
        });
        dg(utility, 'OrganizationSettings', () => {
            var obj = {};
            var organizationSettings = getGlobalContext?.organizationSettings;
            dg(obj, 'Attributes', () => organizationSettings?.attributes);
            dg(obj, 'BaseCurrencyId', () => organizationSettings?.baseCurrencyId);
            dg(obj, 'BaseCurrency', () => organizationSettings?.baseCurrency);
            dg(obj, 'DefaultCountryCode', () => organizationSettings?.defaultCountryCode);
            dg(obj, 'IsAutoSaveEnabled', () => organizationSettings?.isAutoSaveEnabled);
            dg(obj, 'LanguageId', () => organizationSettings?.languageId);
            dg(obj, 'OrganizationId', () => organizationSettings?.organizationId);
            dg(obj, 'IsTrialOrganization', () => organizationSettings?.isTrialOrganization);
            dg(obj, 'OrganizationExpiryDate', () => organizationSettings?.organizationExpiryDate);
            dg(obj, 'UniqueName', () => organizationSettings?.uniqueName);
            dg(obj, 'UseSkypeProtocol', () => organizationSettings?.useSkypeProtocol);
            dg(obj, 'FullNameConventionCode', () => organizationSettings?.fullNameConventionCode);
            return obj;
        });
        dg(utility, 'UserSettings', () => {
            var obj = {};
            var userSettings = getGlobalContext?.userSettings;
            dg(obj, 'DateFormattingInfo', () => userSettings?.dateFormattingInfo);
            dg(obj, 'DefaultDashboardId', () => userSettings?.defaultDashboardId);
            dg(obj, 'IsGuidedHelpEnabled', () => userSettings?.isGuidedHelpEnabled);
            dg(obj, 'IsHighContrastEnabled', () => userSettings?.isHighContrastEnabled);
            dg(obj, 'IsRTL', () => userSettings?.isRTL);
            dg(obj, 'LanguageId', () => userSettings?.languageId);
            dg(obj, 'Roles', () => userSettings?.roles);
            dg(obj, 'SecurityRolePrivileges', () => userSettings?.securityRolePrivileges);
            dg(obj, 'SecurityRoles', () => userSettings?.securityRoles);
            dg(obj, 'TransactionCurrency', () => userSettings?.transactionCurrency);
            dg(obj, 'TransactionCurrencyId', () => userSettings?.transactionCurrencyId);
            dg(obj, 'UserId', () => userSettings?.userId);
            dg(obj, 'UserName', () => userSettings?.userName);
            dg(obj, 'TimeZoneOffsetMinutes', () => userSettings?.getTimeZoneOffsetMinutes());
            return obj;
        });
        dg(utility, 'ClientUrl', () => getGlobalContext?.getClientUrl());
        dg(utility, 'CurrentAppUrl', () => getGlobalContext?.getCurrentAppUrl());
        dg(utility, 'Version', () => getGlobalContext?.getVersion());
        dg(utility, 'IsOnPremises', () => getGlobalContext?.isOnPremises());
        var getNavigation = Xrm?.Navigation;
        utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) { getNavigation?.openAlertDialog(alertStrings, alertOptions)?.then(closeCallback, errorCallback); };
        utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) { getNavigation?.openConfirmDialog(confirmStrings, confirmOptions)?.then(successCallback, errorCallback); };
        utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) { getNavigation?.openErrorDialog(errorOptions)?.then(successCallback, errorCallback); };
        utility.OpenFile = (file, openFileOptions) => getNavigation?.openFile(file, openFileOptions);
        utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) { getNavigation?.openForm(entityFormOptions, formParameters)?.then(successCallback, errorCallback); };
        utility.OpenUrl = (url, openUrlOptions) => getNavigation?.openUrl(url, openUrlOptions);
        utility.OpenWebResource = (webResourceName, windowOptions, data) => getNavigation?.openWebResource(webResourceName, windowOptions, data);
        utility.NavigateTo = function (pageInput, navigationOptions, successCallback, errorCallback) { getNavigation?.navigateTo(pageInput, navigationOptions)?.then(successCallback, errorCallback); };
        var getPanel = Xrm?.Panel;
        utility.LoadPanel = (url, title) => getPanel?.loadPanel(url, title);
        var getEncoding = Xrm?.Encoding;
        utility.XmlAttributeEncode = arg => getEncoding?.xmlAttributeEncode(arg);
        utility.XmlEncode = arg => getEncoding?.xmlEncode(arg);
        utility.HtmlAttributeEncode = arg => getEncoding?.htmlAttributeEncode(arg);
        utility.HtmlDecode = arg => getEncoding?.htmlDecode(arg);
        utility.HtmlEncode = arg => getEncoding?.htmlEncode(arg);
        var getDevice = Xrm?.Device;
        utility.CaptureAudio = function (successCallback, errorCallback) { getDevice?.captureAudio()?.then(successCallback, errorCallback); };
        utility.CaptureImage = function (imageOptions, successCallback, errorCallback) { getDevice?.captureImage(imageOptions)?.then(successCallback, errorCallback); };
        utility.CaptureVideo = function (successCallback, errorCallback) { getDevice?.captureVideo()?.then(successCallback, errorCallback); };
        utility.BarcodeValue = function (successCallback, errorCallback) { getDevice?.getBarcodeValue()?.then(successCallback, errorCallback); };
        utility.CurrentPosition = function (successCallback, errorCallback) { getDevice?.getCurrentPosition()?.then(successCallback, errorCallback); };
        utility.PickFile = function (pickFileOptions, successCallback, errorCallback) { getDevice?.pickFile(pickFileOptions)?.then(successCallback, errorCallback); };
        var getApp = Xrm?.App;
        utility.AddGlobalNotification = function (notification, successCallback, errorCallback) { getApp?.addGlobalNotification(notification)?.then(successCallback, errorCallback); };
        utility.ClearGlobalNotification = function (uniqueId, successCallback, errorCallback) { getApp?.clearGlobalNotification(uniqueId)?.then(successCallback, errorCallback); };
        return utility;
    }
    function loadExecutionContext(executionContext) {
        var obj = {};
        obj.IsInitialLoad = () => executionContext?.getEventArgs()?.getDataLoadState() === 1;
        obj.GetSharedVariable = key => executionContext?.getSharedVariable(key);
        obj.SetSharedVariable = (key, value) => executionContext?.setSharedVariable(key, value);
        obj.IsDefaultPrevented = () => executionContext?.getEventArgs()?.isDefaultPrevented();
        obj.SetPreventDefault = () => executionContext?.getEventArgs()?.preventDefault();
        obj.SetPreventDefaultOnError = () => executionContext?.getEventArgs()?.preventDefaultOnError();
        obj.DisableAsyncTimeout = () => executionContext?.getEventArgs()?.disableAsyncTimeout();
        dg(obj, 'Depth', () => executionContext?.getDepth());
        dg(obj, 'EventArgs', () => executionContext?.getEventArgs());
        dg(obj, 'EventSource', () => executionContext?.getEventSource());
        dg(obj, 'FormContext', () => executionContext?.getFormContext());
        dg(obj, 'SaveMode', () => executionContext?.getEventArgs()?.getSaveMode());
        dg(obj, 'EntityReference', () => executionContext?.getEventArgs()?.getEntityReference());
        dg(obj, 'IsSaveSuccess', () => executionContext?.getEventArgs()?.getIsSaveSuccess());
        dg(obj, 'SaveErrorInfo', () => executionContext?.getEventArgs()?.getSaveErrorInfo());
        return obj;
    }
    function loadSidePanes() {
        var sidePanes = {};
        sidePanes.Create = function (paneOptions, successCallback) { Xrm?.App?.sidePanes?.createPane(paneOptions)?.then(successCallback); };
        sidePanes.Get = paneId => Xrm?.App?.sidePanes?.getPane(paneId);
        sidePanes.GetSelected = () => Xrm?.App?.sidePanes?.getSelectedPane();
        sidePanes.GetAll = () => Xrm?.App?.sidePanes?.getAllPanes();
        dgs(sidePanes, 'DisplayState', () => Xrm?.App?.sidePanes?.state, value => { Xrm.App.sidePanes.state = value; });
        return sidePanes;
    }
    function loadOthers(formContext, form, defaultWebResourceName) {
        form.SidePanes = loadSidePanes();
    }
    function loadFormDialog(formContext, fields) {
        var form = {};
        for (var i = 0; i < fields?.length; i++) {
            var field = fields[i];
            var attribute = formContext?.data?.entity?.attributes?.get(field);
            var control = formContext?.getControl(field);
            form[field] = {};
            devKit.LoadField(formContext, form[field], attribute, control);
        }
        form.Close = () => formContext?.ui?.close();
        return form;
    }
    return {
        LoadForm: lf,
        LoadProcess: lp,
        LoadFields: lds,
        LoadField: ldf,
        LoadTabs: lt,
        LoadNavigations: ln,
        LoadQuickForms: lqf,
        LoadGrids: lgd,
        LoadUtility: lu,
        LoadExecutionContext: loadExecutionContext,
        LoadOthers: loadOthers,
        LoadFormDialog: loadFormDialog
    }
})();
var OptionSet;
(function (OptionSet) {
    OptionSet.FormType = {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 5
    };
    OptionSet.SaveOption = {
        SaveAndClose: 'saveandclose',
        SaveAndNew: 'saveandnew'
    };
    OptionSet.SaveMode = {
        Save: 1,
        SaveAndClose: 2,
        Deactivate: 5,
        Reactivate: 6,
        Email: 7,
        Disqualify: 15,
        Qualify: 16,
        Assign: 47,
        SaveAsCompleted: 58,
        SaveAndNew: 59,
        AutoSave: 70
    };
    OptionSet.FormNotificationLevel = {
        Error: 'ERROR',
        Warning: 'WARNING',
        Info: 'INFO'
    };
    OptionSet.TabDisplayState = {
        Expanded: 'expanded',
        Collapsed: 'collapsed'
    };
    OptionSet.TabContentType = {
        CardSections: 'cardSections',
        SingleComponent: 'singleComponent'
    };
    OptionSet.ProcessDisplayState = {
        Expanded: 'expanded',
        Collapsed: 'collapsed',
        Floating: 'floating'
    };
    OptionSet.ProcessStatus = {
        Active: 'active',
        Aborted: 'aborted',
        Finished: 'finished'
    };
    OptionSet.FieldAttributeType = {
        Boolean: 'boolean',
        DateTime: 'datetime',
        Decimal: 'decimal',
        Double: 'double',
        Integer: 'integer',
        Lookup: 'lookup',
        Memo: 'memo',
        Money: 'money',
        MultiOptionSet: 'multioptionset',
        OptionSet: 'optionset',
        String: 'string'
    };
    OptionSet.FieldFormat = {
        Date: 'date',
        DateTime: 'datetime',
        Duration: 'duration',
        Email: 'email',
        Language: 'language',
        None: 'none',
        TextArea: 'textarea',
        Text: 'text',
        TickerSymbol: 'tickersymbol',
        Phone: 'phone',
        TimeZone: 'timezone',
        Url: 'url'
    };
    OptionSet.FieldRequiredLevel = {
        None: 'none',
        Required: 'required',
        Recommended: 'recommended'
    };
    OptionSet.FieldSubmitMode = {
        Always: 'always',
        Never: 'never',
        Dirty: 'dirty'
    };
    OptionSet.FieldControlType = {
        Standard: 'standard',
        Iframe: 'iframe',
        KbSearch: 'kbsearch',
        Lookup: 'lookup',
        MultiSelectOptionset: 'multiselectoptionset',
        Notes: 'notes',
        OptionSet: 'optionset',
        QuickForm: 'quickform',
        SubGrid: 'subgrid',
        TimerControl: 'timercontrol',
        TimelineWall: 'timelinewall',
        WebResource: 'webresource'
    };
    OptionSet.FieldNotificationLevel = {
        Error: 'ERROR',
        Recommendation: 'RECOMMENDATION'
    };
    OptionSet.ProcessCategory = {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6
    };
    OptionSet.TimerState = {
        NotSet: 1,
        InProgress: 2,
        Warning: 3,
        Violated: 4,
        Success: 5,
        Expired: 6,
        Canceled: 7,
        Paused: 8
    };
    OptionSet.ClientName = {
        Web: 'Web',
        Outlook: 'Outlook',
        Mobile: 'Mobile'
    };
    OptionSet.ClientState = {
        Online: 'Online',
        Offline: 'Offline'
    };
    OptionSet.FormFactor = {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3
    };
    OptionSet.AdvancedConfigSetting = {
        MaxChildIncidentNumber: 'MaxChildIncidentNumber',
        MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
    };
    OptionSet.OpenFileOption = {
        Open: 1,
        Save: 2
    };
    OptionSet.GridType = {
        HomePageGrid: 1,
        Subgrid: 2
    };
    OptionSet.SidePaneState = {
        Collapsed: 0,
        Expanded: 1
    };
    OptionSet.FullNameConventionCode = {
        LastName_Comma_FirstName: 0,
        FirstName_LastName: 1,
        LastName_Comma_FirstName_MiddleInitial: 2,
        FirstName_MiddleInitial_LastName: 3,
        LastName_Comma_FirstName_MiddleName: 4,
        FirstName_MiddleName_LastName: 5,
        LastName_FirstName: 6,
        LastNameFirstName: 7
    };
})(OptionSet || (OptionSet = {}));

export { devKit, OptionSet };