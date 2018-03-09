Kool.Form = Kool.Form || {};
Kool.Form.LoadForm = function (formContext) {
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var form = {};
    var contextData = (function () {
        if (formContext) {
            if (formContext.data) {
                return formContext.data;
            }
        }
        return null;
    })();
    var contextDataEntity = (function () {
        if (formContext) {
            if (formContext.data) {
                if (formContext.data.entity) {
                    return formContext.data.entity;
                }
            }
        }
        return null;
    })();
    var contextUi = (function () {
        if (formContext) {
            if (formContext.ui) {
                return formContext.ui;
            }
        }
        return null;
    })();
    var contextUiFormSelector = (function () {
        if (formContext) {
            if (formContext.ui) {
                if (formContext.ui.formSelector) {
                    return formContext.ui.formSelector;
                }
            }
        }
        return null;
    })();
    form.AddOnLoad = function (callback) {
        contextData.addOnLoad(callback);
    }
    Object.defineProperty(form, "IsDirty", {
        get: function () {
            return contextData.getIsDirty();
        }
    });
    Object.defineProperty(form, "IsValid", {
        get: function () {
            return contextData.isValid();
        }
    });
    form.Refresh = function (save, successCallback, errorCallback) {
        contextData.refresh(save).then(successCallback, errorCallback);
    }
    form.RemoveOnLoad = function (callback) {
        contextData.removeOnLoad(callback);
    }
    form.Save = function (saveOptions, successCallback, errorCallback) {
        contextData.save(saveOptions).then(successCallback, errorCallback);
    }
    form.AddOnSave = function (callback) {
        contextDataEntity.addOnSave(callback);
    }
    Object.defineProperty(form, "DataXml", {
        get: function () {
            return contextDataEntity.getDataXml();
        }
    });
    Object.defineProperty(form, "EntityName", {
        get: function () {
            return contextDataEntity.getEntityName();
        }
    });
    Object.defineProperty(form, "EntityReference", {
        get: function () {
            return contextDataEntity.getEntityReference();
        }
    });
    Object.defineProperty(form, "EntityId", {
        get: function () {
            return contextDataEntity.getId();
        }
    });
    Object.defineProperty(form, "EntityIsDirty", {
        get: function () {
            return contextDataEntity.getIsDirty();
        }
    });
    Object.defineProperty(form, "PrimaryAttributeValue", {
        get: function () {
            return contextDataEntity.getPrimaryAttributeValue();
        }
    });
    Object.defineProperty(form, "EntityIsValid", {
        get: function () {
            return contextDataEntity.isValid();
        }
    });
    form.RemoveOnSave = function (callback) {
        contextDataEntity.removeOnSave(callback);
    }
    form.EntitySave = function (saveOption) {
        contextDataEntity.save(saveOption);
    }
    Object.defineProperty(form, "Attributes", {
        get: function () {
            return contextDataEntity.attributes;
        }
    });
    form.ClearFormNotification = function (uniqueId) {
        contextUi.clearFormNotification(uniqueId);
    }
    form.Close = function () {
        contextUi.close();
    }
    Object.defineProperty(form, "FormType", {
        get: function () {
            return contextUi.getFormType();
        }
    });
    Object.defineProperty(form, "ViewPortHeight", {
        get: function () {
            return contextUi.getViewPortHeight();
        }
    });
    Object.defineProperty(form, "ViewPortWidth", {
        get: function () {
            return contextUi.getViewPortWidth();
        }
    });
    form.RefreshRibbon = function (refreshAll) {
        contextUi.refreshRibbon(refreshAll);
    }
    form.SetFormNotification = function (message, level, uniqueId) {
        return contextUi.setFormNotification(message, level, uniqueId);
    }
    Object.defineProperty(form, "Controls", {
        get: function () {
            return contextUi.controls;
        }
    });
    Object.defineProperty(form, "FormId", {
        get: function () {
            return contextUiFormSelector.getCurrentItem().getId();
        }
    });
    Object.defineProperty(form, "FormLabel", {
        get: function () {
            return contextUiFormSelector.getCurrentItem().getLabel();
        }
    });
    form.FormNavigate = function (formId) {
        var formItem = contextUiFormSelector.items.get(formId);
        if (formItem == null) return;
        formItem.navigate();
    };
    return form;
};
Kool.Form.LoadProcess = function (formContext) {
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var process = {};
    var getProcess = (function () {
        if (formContext) {
            if (formContext.data) {
                if (formContext.data.process) {
                    return formContext.data.process;
                }
            }
        }
        return null;
    })();
    Object.defineProperty(process, "ActivePath", {
        get: function () {
            return getProcess.getActivePath();
        }
    });
    Object.defineProperty(process, "ActiveProcess", {
        get: function () {
            var data = { Id: EMPTY_GUID, Name: EMPTY_STRING, IsRendered: false, Stages: null };
            var activeProcess = getProcess.getActiveProcess();
            if (activeProcess.getId) {
                data.Id = activeProcess.getId();
            }
            if (activeProcess.getName) {
                data.Name = activeProcess.getName();
            }
            if (activeProcess.isRendered) {
                data.IsRendered = activeProcess.isRendered();
            }
            if (activeProcess.getStages) {
                data.Stages = activeProcess.getStages();
            }
            return data;
        }
    });
    Object.defineProperty(process, "ActiveStage", {
        get: function () {
            var data = { Category: null, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: null };
            var activeStage = getProcess.getActiveStage();
            if (activeStage.getCategory) {
                if (activeStage.getCategory().getValue) {
                    data.Category = activeStage.getCategory().getValue();
                }
            }
            if (activeStage.getEntityName) {
                data.EntityName = activeStage.getEntityName();
            }
            if (activeStage.getId) {
                data.Id = activeStage.getId();
            }
            if (activeStage.getName) {
                data.Name = activeStage.getName();
            }
            if (activeStage.getStatus) {
                data.Status = activeStage.getStatus();
            }
            if (activeStage.getSteps) {
                data.Steps = activeStage.getSteps();
            }
            return data;
        }
    });
    process.AddOnProcessStatusChange = function (callback) {
        getProcess.addOnProcessStatusChange(callback);
    }
    process.AddOnStageChange = function (callback) {
        getProcess.addOnStageChange(callback);
    }
    process.AddOnStageSelected = function (callback) {
        getProcess.addOnStageSelected(callback);
    }
    process.EnabledProcesses = function (callback) {
        getProcess.getEnabledProcesses(callback);
    }
    process.MoveNext = function (callback) {
        getProcess.moveNext(callback);
    }
    process.MovePrevious = function (callback) {
        getProcess.movePrevious(callback);
    }
    process.ProcessInstances = function (callback) {
        getProcess.getProcessInstances(callback);
    }
    process.RemoveOnProcessStatusChange = function (callback) {
        getProcess.removeOnProcessStatusChange(callback);
    }
    process.RemoveOnStageChange = function (callback) {
        getProcess.removeOnStageChange(callback);
    }
    process.RemoveOnStageSelected = function (callback) {
        getProcess.removeOnStageSelected(callback);
    }
    Object.defineProperty(process, "SelectedStage", {
        get: function () {
            var data = { Category: null, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: null };
            var selectedStage = getProcess.getSelectedStage();
            if (selectedStage.getCategory) {
                if (selectedStage.getCategory().getValue) {
                    data.Category = selectedStage.getCategory().getValue();
                }
            }
            if (selectedStage.getEntityName) {
                data.EntityName = selectedStage.getEntityName();
            }
            if (selectedStage.getId) {
                data.Id = selectedStage.getId();
            }
            if (selectedStage.getName) {
                data.Name = selectedStage.getName();
            }
            if (selectedStage.getStatus) {
                data.Status = selectedStage.getStatus();
            }
            if (selectedStage.getSteps) {
                data.Steps = selectedStage.getSteps();
            }
            return data;
        }
    });
    process.SetActiveProcess = function (processId, callback) {
        getProcess.setActiveProcess(processId, callback);
    }
    process.SetActiveProcessInstance = function (processInstanceId, callback) {
        getProcess.setActiveProcessInstance(processInstanceId, callback);
    }
    process.SetActiveStage = function (stageId, callback) {
        getProcess.setActiveStage(stageId, callback);
    }
    return process;
};
Kool.Form.LoadField = function (formContext, body, field, type) {
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var logicalName = (function () {
        if (type === undefined) return field.toLowerCase();
        return (type + field).toLowerCase();
    })();
    var control = (function () {
        if (formContext) {
            if (formContext.getControl) {
                return formContext.getControl(logicalName);
            }
        }
        return null;
    })();
    var attribute = (function () {
        if (formContext) {
            if (type !== undefined) {
                if (control == null) {
                    if (formContext.getAttribute) {
                        return formContext.getAttribute(logicalName);
                    }
                    return null;
                }
                if (control.getAttribute === undefined) { console.log("Control Attribute " + logicalName + " NULL"); return null; }
                if (control.getAttribute) {
                    return control.getAttribute();
                }
                return null;
            }
            else {
                if (formContext.getAttribute) {
                    return formContext.getAttribute(logicalName);
                }
                return null;
            }
        }
        return null;
    })();
    body[field].AddOnChange = function (callback) {
        attribute.addOnChange(callback);
    }
    body[field].FireOnChange = function () {
        attribute.fireOnChange();
    }
    Object.defineProperty(body[field], "AttributeType", {
        get: function () {
            return attribute.getAttributeType();
        }
    });
    Object.defineProperty(body[field], "Format", {
        get: function () {
            return attribute.getFormat();
        }
    });
    Object.defineProperty(body[field], "InitialValue", {
        get: function () {
            return attribute.getInitialValue();
        }
    });
    Object.defineProperty(body[field], "IsDirty", {
        get: function () {
            return attribute.getIsDirty();
        }
    });
    Object.defineProperty(body[field], "IsPartyList", {
        get: function () {
            return attribute.getIsPartyList();
        }
    });
    Object.defineProperty(body[field], "Max", {
        get: function () {
            return attribute.getMax();
        }
    });
    Object.defineProperty(body[field], "MaxLength", {
        get: function () {
            return attribute.getMaxLength();
        }
    });
    Object.defineProperty(body[field], "Min", {
        get: function () {
            return attribute.getMin();
        }
    });
    Object.defineProperty(body[field], "Name", {
        get: function () {
            return attribute.getName();
        }
    });
    body[field].Option = function (value) {
        return attribute.getOption(value);
    }
    Object.defineProperty(body[field], "Options", {
        get: function () {
            return attribute.getOptions();
        }
    });
    Object.defineProperty(body[field], "AttributeParent", {
        get: function () {
            return attribute.getParent();
        }
    });
    Object.defineProperty(body[field], "Precision", {
        get: function () {
            return attribute.getPrecision();
        },
        set: function (value) {
            attribute.setPrecision(value);
        }
    });
    Object.defineProperty(body[field], "RequiredLevel", {
        get: function () {
            return attribute.getRequiredLevel();
        },
        set: function (value) {
            attribute.setRequiredLevel(value);
        }
    });
    Object.defineProperty(body[field], "SelectedOption", {
        get: function () {
            return attribute.getSelectedOption();
        }
    });
    Object.defineProperty(body[field], "SubmitMode", {
        get: function () {
            return attribute.getSubmitMode();
        },
        set: function (value) {
            attribute.setSubmitMode(value);
        }
    });
    Object.defineProperty(body[field], "Text", {
        get: function () {
            return attribute.getText();
        }
    });
    Object.defineProperty(body[field], "UserPrivilege", {
        get: function () {
            return attribute.getUserPrivilege();
        }
    });
    Object.defineProperty(body[field], "Value", {
        get: function () {
            return attribute.getValue();
        },
        set: function (value) {
            attribute.setValue(value);
        }
    });
    Object.defineProperty(body[field], "Valid", {
        get: function () {
            return attribute.isValid();
        }
    });
    body[field].RemoveOnChange = function (callback) {
        attribute.removeOnChange(callback);
    }
    body[field].AddCustomFilter = function (filter, entityLogicaName) {
        control.addCustomFilter(filter, entityLogicaName);
    }
    body[field].AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
    }
    body[field].AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
        var actions = {
            message: message,
            actions: [callback]
        };
        var notification = {
            messages: [title],
            notificationLevel: notificationLevel,
            uniqueId: uniqueId,
            actions: [actions]
        };
        return control.addNotification(notification);
    }
    body[field].AddOnPostSearch = function (callback) {
        control.addOnPostSearch(callback);
    }
    body[field].AddOnResultOpened = function (callback) {
        control.addOnResultOpened(callback);
    }
    body[field].AddOnSelection = function (callback) {
        control.addOnSelection(callback);
    }
    body[field].AddPreSearch = function (callback) {
        control.addPreSearch(callback);
    }
    body[field].ClearNotification = function (uniqueId) {
        return control.clearNotification(uniqueId);
    }
    body[field].ClearOptions = function () {
        return control.clearOptions();
    }
    Object.defineProperty(body[field], "ControlType", {
        get: function () {
            return control.getControlType();
        }
    });
    Object.defineProperty(body[field], "Data", {
        get: function () {
            return control.getData();
        },
        set: function (value) {
            control.setData(value);
        }
    });
    Object.defineProperty(body[field], "DefaultView", {
        get: function () {
            return control.getDefaultView();
        },
        set: function (value) {
            control.setDefaultView(value);
        }
    });
    Object.defineProperty(body[field], "Disabled", {
        get: function () {
            return control.getDisabled();
        },
        set: function (value) {
            control.setDisabled(value);
        }
    });
    Object.defineProperty(body[field], "EntityTypes", {
        get: function () {
            return control.getEntityTypes();
        },
        set: function (value) {
            control.setEntityTypes(value);
        }
    });
    Object.defineProperty(body[field], "InitialUrl", {
        get: function () {
            return control.getInitialUrl();
        }
    });
    Object.defineProperty(body[field], "Label", {
        get: function () {
            return control.getLabel();
        },
        set: function (value) {
            control.setLabel(value);
        }
    });
    Object.defineProperty(body[field], "Name2", {
        get: function () {
            return control.getName();
        }
    });
    Object.defineProperty(body[field], "Object", {
        get: function () {
            return control.getObject();
        }
    });
    Object.defineProperty(body[field], "ControlParent", {
        get: function () {
            return control.getParent();
        }
    });
    Object.defineProperty(body[field], "SearchQuery", {
        get: function () {
            return control.getSearchQuery();
        },
        set: function (value) {
            control.setSearchQuery(value);
        }
    });
    Object.defineProperty(body[field], "ShowTime", {
        get: function () {
            return control.getShowTime();
        },
        set: function (value) {
            control.setShowTime(value);
        }
    });
    Object.defineProperty(body[field], "Src", {
        get: function () {
            return control.getSrc();
        },
        set: function (value) {
            control.setSrc(value);
        }
    });
    Object.defineProperty(body[field], "State", {
        get: function () {
            return control.getState();
        }
    });
    Object.defineProperty(body[field], "TotalResultCount", {
        get: function () {
            return control.getTotalResultCount();
        }
    });
    Object.defineProperty(body[field], "Value2", {
        get: function () {
            return control.getValue();
        }
    });
    Object.defineProperty(body[field], "Visible", {
        get: function () {
            return control.getVisible();
        },
        set: function (value) {
            control.setVisible(value);
        }
    });
    body[field].OpenSearchResult = function (resultNumber, mode) {
        return control.openSearchResult(resultNumber, mode);
    }
    body[field].Refresh = function () {
        control.refresh();
    }
    body[field].RemoveOnPostSearch = function (callback) {
        control.removeOnPostSearch(callback);
    }
    body[field].RemoveOnResultOpened = function (callback) {
        control.removeOnResultOpened(callback);
    }
    body[field].RemoveOnSelection = function (callback) {
        control.removeOnSelection(callback);
    }
    body[field].RemoveOption = function (value) {
        control.removeOption(value);
    }
    body[field].RemovePreSearch = function (callback) {
        control.removePreSearch(callback);
    }
    body[field].Focus = function () {
        control.setFocus();
    }
    body[field].SetNotification = function (message, uniqueId) {
        return control.setNotification(message, uniqueId);
    }
    body[field].AddOption = function (text, value, index) {
        var option = { text: text, value: value };
        control.addOption(option, index);
    }
};
Kool.Form.LoadFields = function (formContext, body, type) {
    for (var field in body) {
        Kool.Form.LoadField(formContext, body, field, type);
    }
    return body;
};
Kool.Form.LoadSection = function (formContext, tab, sections, section) {
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var tabObject = (function () {
        if (formContext) {
            if (formContext.ui) {
                if (formContext.ui.tabs) {
                    if (formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                }
            }
        }
        return null;
    })();
    var sectionObject = (function () {
        if (tabObject === null) { console.log("Tab: " + tab + " NULL"); return null; }
        if (tabObject.sections) {
            if (tabObject.sections.get) {
                return tabObject.sections.get(section);
            }
        }
        return null;
    })();
    Object.defineProperty(sections[section], "Label", {
        get: function () {
            return sectionObject.getLabel();
        },
        set: function (value) {
            sectionObject.setLabel(value);
        }
    });
    Object.defineProperty(sections[section], "Name", {
        get: function () {
            return sectionObject.getName();
        }
    });
    Object.defineProperty(sections[section], "Parent", {
        get: function () {
            return sectionObject.getParent();
        }
    });
    Object.defineProperty(sections[section], "Visible", {
        get: function () {
            return sectionObject.getVisible();
        },
        set: function (value) {
            sectionObject.setVisible(value);
        }
    });
};
Kool.Form.LoadTab = function (formContext, tabs, tab) {
    var EMPTY_STRING = "";
    var EMPTY_GUID = "{00000000-0000-0000-0000-000000000000}";
    var tabObject = (function () {
        if (formContext) {
            if (formContext.ui) {
                if (formContext.ui.tabs) {
                    if (formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                }
            }
        }
        return null;
    })();
    tabs[tab].AddTabStateChange = function (callback) {
        tabObject.addTabStateChange(callback);
    };
    Object.defineProperty(tabs[tab], "DisplayState", {
        get: function () {
            return tabObject.getDisplayState();
        },
        set: function (value) {
            tabObject.setDisplayState(value);
        }
    });
    tabs[tab].Focus = function () {
        tabObject.setFocus();
    };
    Object.defineProperty(tabs[tab], "Label", {
        get: function () {
            return tabObject.getLabel();
        },
        set: function (value) {
            tabObject.setLabel(value);
        }
    });
    Object.defineProperty(tabs[tab], "Name", {
        get: function () {
            return tabObject.getName();
        }
    });
    Object.defineProperty(tabs[tab], "Parent", {
        get: function () {
            return tabObject.getParent();
        }
    });
    tabs[tab].RemoveTabStateChange = function (callback) {
        tabObject.removeTabStateChange(callback);
    };
    Object.defineProperty(tabs[tab], "Visible", {
        get: function () {
            return tabObject.getVisible();
        },
        set: function (value) {
            tabObject.setVisible(value);
        }
    });
    for (var section in tabs[tab].Section) {
        Kool.Form.LoadSection(formContext, tab, tabs[tab].Section, section);
    }
};
Kool.Form.LoadTabs = function (formContext, tabs) {
    for (var tab in tabs) {
        Kool.Form.LoadTab(formContext, tabs, tab);
    }
};
Kool.Form.LoadNavigation = function (formContext, navigations, navigation) {
    var EMPTY_STRING = "";
    var navigationItem = (function () {
        if (formContext) {
            if (formContext.ui) {
                if (formContext.ui.navigation) {
                    if (formContext.ui.navigation.items) {
                        if (formContext.ui.navigation.items.get) {
                            return formContext.ui.navigation.items.get(navigation);
                        }
                    }
                }
            }
        }
        return null;
    })();
    navigations[navigation].Focus = function () {
        navigationItem.setFocus();
    };
    Object.defineProperty(navigations[navigation], "Label", {
        get: function () {
            return navigationItem.getLabel();
        },
        set: function (value) {
            navigationItem.setLabel(value);
        }
    });
    Object.defineProperty(navigations[navigation], "Visible", {
        get: function () {
            return navigationItem.getVisible();
        },
        set: function (value) {
            navigationItem.setVisible(value);
        }
    });
    Object.defineProperty(navigations[navigation], "Id", {
        get: function () {
            return navigationItem.getId();
        }
    });
}
Kool.Form.LoadNavigations = function (formContext, navigations) {
    for (var navigation in navigations) {
        Kool.Form.LoadNavigation(formContext, navigations, navigation);
    }
}
Kool.Form.LoadQuickForm = function (formContext, quickForms, quickForm) {
    var EMPTY_STRING = "";
    var quickViewControl = (function () {
        if (formContext) {
            if (formContext.ui) {
                if (formContext.ui.quickForms) {
                    if (formContext.ui.quickForms.get) {
                        return formContext.ui.quickForms.get(quickForm);
                    }
                }
            }
        }
        return null;
    })();
    Object.defineProperty(quickForms[quickForm], "ControlType", {
        get: function () {
            return quickViewControl.getControlType();
        }
    });
    quickForms[quickForm].Focus = function () {
        quickViewControl.setFocus();
    };
    Object.defineProperty(quickForms[quickForm], "Label", {
        get: function () {
            return quickViewControl.getLabel();
        },
        set: function (value) {
            quickViewControl.setLabel(value);
        }
    });
    quickForms[quickForm].IsLoaded = function () {
        return quickViewControl.isLoaded();
    }
    Object.defineProperty(quickForms[quickForm], "Name", {
        get: function () {
            return quickViewControl.getName();
        }
    });
    Object.defineProperty(quickForms[quickForm], "Parent", {
        get: function () {
            return quickViewControl.getParent();
        }
    });
    quickForms[quickForm].Refresh = function () {
        quickViewControl.refresh();
    };
    Object.defineProperty(quickForms[quickForm], "Visible", {
        get: function () {
            return quickViewControl.getVisible();
        }
    });
}
Kool.Form.LoadQuickForms = function (formContext, quickForms) {
    for (var quickForm in quickForms) {
        Kool.Form.LoadQuickForm(formContext, quickForms, quickForm);
    }
}
Kool.Form.LoadUtility = function () {
    var EMPTY_STRING = "";
    var getUtility = (function () {
        if (Xrm) {
            if (Xrm.Utility) {
                return Xrm.Utility
            }
        }
        return null;
    })();
    var getGlobalContext = (function () {
        if (Xrm) {
            if (Xrm.Utility) {
                if (Xrm.Utility.getGlobalContext) {
                    return Xrm.Utility.getGlobalContext();
                }
            }
        }
        return null;
    })();
    var getNavigation = (function () {
        if (Xrm) {
            if (Xrm.Navigation) {
                return Xrm.Navigation;
            }
        }
        return null;
    })();
    var getPanel = (function () {
        if (Xrm) {
            if (Xrm.Panel) {
                return Xrm.Panel;
            }
        }
        return null;
    })();
    var getEncoding = (function () {
        if (Xrm) {
            if (Xrm.Encoding) {
                return Xrm.Encoding;
            }
        }
        return null;
    })();
    var getDevice = (function () {
        if (Xrm) {
            if (Xrm.Device) {
                return Xrm.Device;
            }
        }
        return null;
    })();
    var utility = {};
    utility.CloseProgressIndicator = function () {
        getUtility.closeProgressIndicator();
    }
    utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
        getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
    }
    utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
        getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
    }
    Object.defineProperty(utility, "LearningPathAttributeName", {
        get: function () {
            return getUtility.getLearningPathAttributeName();
        }
    });
    utility.ResourceString = function (webResourceName, key) {
        getUtility.getResourceString(webResourceName, key);
    }
    utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
        getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
    }
    utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
        getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
    }
    utility.RefreshParentGrid = function (lookupOptions) {
        getUtility.refreshParentGrid(lookupOptions);
    }
    utility.ShowProgressIndicator = function (message) {
        getUtility.showProgressIndicator(message);
    }
    utility.AdvancedConfigSetting = function (setting) {
        getGlobalContext.getAdvancedConfigSetting(setting);
    }
    Object.defineProperty(utility, "ClientUrl", {
        get: function () {
            return getGlobalContext.getClientUrl();
        }
    });
    utility.CurrentAppName = function (successCallback, errorCallback) {
        getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
    }
    utility.CurrentAppProperties = function (successCallback, errorCallback) {
        getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
    }
    Object.defineProperty(utility, "CurrentAppUrl", {
        get: function () {
            return getGlobalContext.getCurrentAppUrl();
        }
    });
    Object.defineProperty(utility, "Version", {
        get: function () {
            return getGlobalContext.getVersion();
        }
    });
    utility.IsOnPremises = function (successCallback, errorCallback) {
        return getGlobalContext.isOnPremises();
    }
    utility.PrependOrgName = function (sPath) {
        return getGlobalContext.prependOrgName(sPath);
    }
    utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
        getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
    }
    utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
        getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
    }
    utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
        getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
    }
    utility.OpenFile = function (file, openFileOptions) {
        getNavigation.openFile(file, openFileOptions);
    }
    utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
        getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
    }
    utility.OpenUrl = function (url, openUrlOptions) {
        getNavigation.openUrl(url, openUrlOptions);
    }
    utility.OpenWebResource = function (webResourceName, windowOptions, data) {
        getNavigation.openWebResource(webResourceName, windowOptions, data);
    }
    utility.LoadPanel = function (url, title) {
        getPanel.loadPanel(url, title);
    }
    utility.XmlAttributeEncode = function (arg) {
        return getEncoding.xmlAttributeEncode(arg);
    }
    utility.XmlEncode = function (arg) {
        return getEncoding.xmlEncode(arg);
    }
    utility.CaptureAudio = function (successCallback, errorCallback) {
        getDevice.captureAudio().then(successCallback, errorCallback);
    }
    utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
        getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
    }
    utility.CaptureVideo = function (successCallback, errorCallback) {
        getDevice.captureVideo().then(successCallback, errorCallback);
    }
    utility.BarcodeValue = function (successCallback, errorCallback) {
        getDevice.getBarcodeValue().then(successCallback, errorCallback);
    }
    utility.CurrentPosition = function (successCallback, errorCallback) {
        getDevice.getCurrentPosition().then(successCallback, errorCallback);
    }
    utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
        getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
    }
    Object.defineProperty(utility, "Client", {
        get: function () {
            var client = (function () {
                if (Xrm) {
                    if (Xrm.Utility) {
                        if (Xrm.Utility.getGlobalContext) {
                            if (Xrm.Utility.getGlobalContext().client) {
                                return Xrm.Utility.getGlobalContext().client;
                            }
                        }
                    }
                }
                return null;
            })();
            var Client = {};
            Object.defineProperty(Client, "ClientName", {
                get: function () {
                    return client.getClient();
                }
            });
            Object.defineProperty(Client, "ClientState", {
                get: function () {
                    return client.getClientState();
                }
            });
            Object.defineProperty(Client, "FormFactor", {
                get: function () {
                    return client.getFormFactor();
                }
            });
            Client.IsOffline = function () {
                return client.isOffline();
            }
            return Client;
        }
    });
    Object.defineProperty(utility, "OrganizationSettings ", {
        get: function () {
            var organizationSettings = (function () {
                if (Xrm) {
                    if (Xrm.Utility) {
                        if (Xrm.Utility.getGlobalContext) {
                            if (Xrm.Utility.getGlobalContext().organizationSettings) {
                                return Xrm.Utility.getGlobalContext().organizationSettings;
                            }
                        }
                    }
                }
                return null;
            })();
            var OrganizationSettings = {};
            Object.defineProperty(OrganizationSettings, "Attributes", {
                get: function () {
                    return organizationSettings.attributes;
                }
            });
            Object.defineProperty(OrganizationSettings, "BaseCurrencyId", {
                get: function () {
                    return organizationSettings.baseCurrencyId;
                }
            });
            Object.defineProperty(OrganizationSettings, "DefaultCountryCode", {
                get: function () {
                    return organizationSettings.defaultCountryCode;
                }
            });
            Object.defineProperty(OrganizationSettings, "DefaultCountryCode", {
                get: function () {
                    return organizationSettings.defaultCountryCode;
                }
            });
            OrganizationSettings.IsAutoSaveEnabled = function () {
                return organizationSettings.isAutoSaveEnabled;
            }
            Object.defineProperty(OrganizationSettings, "LanguageId", {
                get: function () {
                    return organizationSettings.languageId;
                }
            });
            Object.defineProperty(OrganizationSettings, "OrganizationId", {
                get: function () {
                    return organizationSettings.organizationId;
                }
            });
            Object.defineProperty(OrganizationSettings, "UniqueName", {
                get: function () {
                    return organizationSettings.uniqueName;
                }
            });
            Object.defineProperty(OrganizationSettings, "UseSkypeProtocol", {
                get: function () {
                    return organizationSettings.useSkypeProtocol;
                }
            });
            return OrganizationSettings;
        }
    });
    Object.defineProperty(utility, "UserSettings  ", {
        get: function () {
            var userSettings = (function () {
                if (Xrm) {
                    if (Xrm.Utility) {
                        if (Xrm.Utility.getGlobalContext) {
                            if (Xrm.Utility.getGlobalContext().userSettings) {
                                return Xrm.Utility.getGlobalContext().userSettings;
                            }
                        }
                    }
                }
                return null;
            })();
            var UserSettings = {};
            Object.defineProperty(UserSettings, "DateFormattingInfo", {
                get: function () {
                    return userSettings.dateFormattingInfo;
                }
            });
            Object.defineProperty(UserSettings, "DefaultDashboardId", {
                get: function () {
                    return userSettings.defaultDashboardId;
                }
            });
            Object.defineProperty(UserSettings, "DefaultDashboardId", {
                get: function () {
                    return userSettings.defaultDashboardId;
                }
            });
            UserSettings.IsGuidedHelpEnabled = function () {
                return userSettings.isGuidedHelpEnabled;
            }
            UserSettings.IsHighContrastEnabled = function () {
                return userSettings.isHighContrastEnabled;
            }
            UserSettings.IsRTL = function () {
                return userSettings.isRTL;
            }
            Object.defineProperty(UserSettings, "LanguageId", {
                get: function () {
                    return userSettings.languageId;
                }
            });
            Object.defineProperty(UserSettings, "SecurityRolePrivileges", {
                get: function () {
                    return userSettings.securityRolePrivileges;
                }
            });
            Object.defineProperty(UserSettings, "SecurityRoles", {
                get: function () {
                    return userSettings.securityRoles;
                }
            });
            Object.defineProperty(UserSettings, "TransactionCurrencyId", {
                get: function () {
                    return userSettings.transactionCurrencyId;
                }
            });
            Object.defineProperty(UserSettings, "UserId", {
                get: function () {
                    return userSettings.userId;
                }
            });
            Object.defineProperty(UserSettings, "UserName", {
                get: function () {
                    return userSettings.userName;
                }
            });
            UserSettings.TimeZoneOffsetMinutes = function () {
                return userSettings.getTimeZoneOffsetMinutes();
            }
            return UserSettings;
        }
    });
    return utility;
}
OptionSet.FormType = {
    Undefined: 0,
    Create: 1,
    Update: 2,
    ReadOnly: 3,
    Disabled: 4,
    BulkEdit: 5
};
OptionSet.SaveOption = {
    SaveAndClose: "saveandclose",
    SaveAndNew: "saveandnew"
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
    Error: "ERROR",
    Warning: "WARNING",
    Info: "INFO"
};
OptionSet.TabDisplayState = {
    Expanded: "expanded",
    Collapsed: "collapsed"
};
OptionSet.FieldAttributeType = {
    Boolean: "boolean",
    DateTime: "datetime",
    Decimal: "decimal",
    Double: "double",
    Integer: "integer",
    Lookup: "lookup",
    Memo: "memo",
    Money: "money",
    MultiOptionSet: "multioptionset",
    OptionSet: "optionset",
    String: "string"
},
OptionSet.FieldFormat = {
    Date: "date",
    DateTime: "datetime",
    Duration: "duration",
    Email: "email",
    Language: "language",
    None: "none",
    TextArea: "textarea",
    Text: "text",
    TickerSymbol: "tickersymbol",
    Phone: "phone",
    TimeZone: "timezone",
    Url: "url"
};
OptionSet.FieldRequiredLevel = {
    None: "none",
    Required: "required",
    Recommended: "recommended"
};
OptionSet.FieldSubmitMode = {
    Always: "always",
    Never: "never",
    Dirty: "dirty"
};
OptionSet.FieldControlType = {
    Standard: "standard",
    Iframe: "iframe",
    KbSearch: "kbsearch",
    Lookup: "lookup",
    MultiSelectOptionset: "multiselectoptionset",
    Notes: "notes",
    OptionSet: "optionset",
    QuickForm: "quickform",
    SubGrid: "subgrid",
    TimerControl: "TimerControl",
    TimelineWall: "timelinewall",
    WebResource: "webresource"
};
OptionSet.FieldNotificationLevel = {
    Error: "ERROR",
    Recommendation: "RECOMMENDATION"
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
}
OptionSet.AdvancedConfigSetting = {
    MaxChildIncidentNumber: "MaxChildIncidentNumber",
    MaxIncidentMergeNumber: "MaxIncidentMergeNumber"
}
OptionSet.ClientName = {
    Web: "Web",
    Outlook: "Outlook",
    Mobile: "Mobile"
}
OptionSet.ClientState = {
    Online: "Online",
    Offline: "Offline"
}
OptionSet.FormFactor = {
    Unknown: 0,
    Desktop: 1,
    Tablet: 2,
    Phone: 3
}
OptionSet.OpenFileOption = {
    Open: 1,
    Save: 2
}