$ProjectName$.Form = $ProjectName$.Form || {};
$ProjectName$.Form.LoadForm = function (formContext) {
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
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/addonload
    form.AddOnLoad = function (callback) {
        //if (contextData === null) { console.log("formContext.data NULL"); return; }    
        //if (contextData.addOnLoad === undefined) { console.log("contextData.addOnLoad NULL"); return; }
        contextData.addOnLoad(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/getisdirty
    Object.defineProperty(form, "IsDirty", {
        get: function () {
            //if (contextData === null) { console.log("formContext.data NULL"); return true; }    
            //if (contextData.getIsDirty === undefined) { console.log("contextData.getIsDirty NULL"); return true; }
            return contextData.getIsDirty();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/isvalid
    Object.defineProperty(form, "IsValid", {
        get: function () {
            //if (contextData === null) { console.log("formContext.data NULL"); return false; }    
            //if (contextData.isValid === undefined) { console.log("contextData.isValid NULL"); return false; }
            return contextData.isValid();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/refresh
    form.Refresh = function (save, successCallback, errorCallback) {
        //if (contextData === null) { console.log("formContext.data NULL"); return; }    
        //if (contextData.refresh === undefined) { console.log("contextData.refresh NULL"); return; }
        contextData.refresh(save).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/removeonload
    form.RemoveOnLoad = function (callback) {
        //if (contextData === null) { console.log("formContext.data NULL"); return; }    
        //if (contextData.removeOnLoad === undefined) { console.log("contextData.removeOnLoad NULL"); return; }
        contextData.removeOnLoad(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save
    form.Save = function (saveOptions, successCallback, errorCallback) {
        //if (contextData === null) { console.log("formContext.data NULL"); return; }    
        //if (contextData.save === undefined) { console.log("contextData.save NULL"); return; }
        contextData.save(saveOptions).then(successCallback, errorCallback);
    }
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
    form.AddOnSave = function (callback) {
        //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return; }    
        //if (contextDataEntity.addOnSave === undefined) { console.log("contextDataEntity.addOnSave NULL"); return; }
        contextDataEntity.addOnSave(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getdataxml
    Object.defineProperty(form, "DataXml", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return EMPTY_STRING; }    
            //if (contextDataEntity.getDataXml === undefined) { console.log("contextDataEntity.getDataXml NULL"); return EMPTY_STRING; }
            return contextDataEntity.getDataXml();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityname
    Object.defineProperty(form, "EntityName", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return EMPTY_STRING; }    
            //if (contextDataEntity.getEntityName === undefined) { console.log("contextDataEntity.getEntityName NULL"); return EMPTY_STRING; }
            return contextDataEntity.getEntityName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference
    Object.defineProperty(form, "EntityReference", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return { entityType: EMPTY_STRING, id: EMPTY_GUID, name: EMPTY_STRING }; }    
            //if (contextDataEntity.getEntityReference === undefined) { console.log("contextDataEntity.getEntityReference NULL"); return { entityType: EMPTY_STRING, id: EMPTY_GUID, name: EMPTY_STRING }; }
            return contextDataEntity.getEntityReference();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getid
    Object.defineProperty(form, "EntityId", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return EMPTY_GUID; }    
            //if (contextDataEntity.getId === undefined) { console.log("contextDataEntity.getId NULL"); return EMPTY_GUID; }
            return contextDataEntity.getId();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getisdirty
    Object.defineProperty(form, "EntityIsDirty", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return true; }    
            //if (contextDataEntity.getIsDirty === undefined) { console.log("contextDataEntity.getIsDirty NULL"); return true; }
            return contextDataEntity.getIsDirty();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
    Object.defineProperty(form, "PrimaryAttributeValue", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return EMPTY_STRING; }    
            //if (contextDataEntity.getPrimaryAttributeValue === undefined) { console.log("contextDataEntity.getPrimaryAttributeValue NULL"); return EMPTY_STRING; }
            return contextDataEntity.getPrimaryAttributeValue();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/isvalid
    Object.defineProperty(form, "EntityIsValid", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return false; }    
            //if (contextDataEntity.isValid === undefined) { console.log("contextDataEntity.isValid NULL"); return false; }
            return contextDataEntity.isValid();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/removeonsave
    form.RemoveOnSave = function (callback) {
        //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return; }    
        //if (contextDataEntity.removeOnSave === undefined) { console.log("contextDataEntity.removeOnSave NULL"); return; }
        contextDataEntity.removeOnSave(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/save
    form.EntitySave = function (saveOption) {
        //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return; }    
        //if (contextDataEntity.save === undefined) { console.log("contextDataEntity.save NULL"); return; }
        contextDataEntity.save(saveOption);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
    Object.defineProperty(form, "Attributes", {
        get: function () {
            //if (contextDataEntity === null) { console.log("formContext.data.entity NULL"); return []; }    
            //if (contextDataEntity.attributes === undefined) { console.log("contextDataEntity.attributes NULL"); return []; }
            return contextDataEntity.attributes;
        }
    });
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/clearformnotification
    form.ClearFormNotification = function (uniqueId) {
        //if (contextUi === null) { console.log("formContext.ui NULL"); return; }    
        //if (contextUi.clearFormNotification === undefined) { console.log("contextUi.clearFormNotification NULL"); return; }
        contextUi.clearFormNotification(uniqueId);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/close
    form.Close = function () {
        //if (contextUi === null) { console.log("formContext.ui NULL"); return; }    
        //if (contextUi.close === undefined) { console.log("contextUi.close NULL"); return; }
        contextUi.close();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getformtype
    Object.defineProperty(form, "FormType", {
        get: function () {
            //if (contextUi === null) { console.log("formContext.ui NULL"); return 0; }    
            //if (contextUi.getFormType === undefined) { console.log("contextUi.getFormType NULL"); return 0; }
            return contextUi.getFormType();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportheight
    Object.defineProperty(form, "ViewPortHeight", {
        get: function () {
            //if (contextUi === null) { console.log("formContext.ui NULL"); return 0; }    
            //if (contextUi.getViewPortHeight === undefined) { console.log("contextUi.getViewPortHeight NULL"); return 0; }
            return contextUi.getViewPortHeight();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportwidth
    Object.defineProperty(form, "ViewPortWidth", {
        get: function () {
            //if (contextUi === null) { console.log("formContext.ui NULL"); return 0; }    
            //if (contextUi.getViewPortWidth === undefined) { console.log("contextUi.getViewPortWidth NULL"); return 0; }
            return contextUi.getViewPortWidth();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/refreshribbon
    form.RefreshRibbon = function (refreshAll) {
        //if (contextUi === null) { console.log("formContext.ui NULL"); return; }    
        //if (contextUi.refreshRibbon === undefined) { console.log("contextUi.refreshRibbon NULL"); return; }
        contextUi.refreshRibbon(refreshAll);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/setformnotification
    form.SetFormNotification = function (message, level, uniqueId) {
        //if (contextUi === null) { console.log("formContext.ui NULL"); return; }    
        //if (contextUi.setFormNotification === undefined) { console.log("contextUi.setFormNotification NULL"); return; }
        return contextUi.setFormNotification(message, level, uniqueId);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
    Object.defineProperty(form, "Controls", {
        get: function () {
            //if (contextUi === null) { console.log("formContext.ui NULL"); return []; }    
            //if (contextUi.controls === undefined) { console.log("contextUi.controls NULL"); return []; }
            return contextUi.controls;
        }
    });
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getid
    Object.defineProperty(form, "FormId", {
        get: function () {
            //if (contextUiFormSelector === null) { console.log("formContext.ui.formSelector NULL"); return EMPTY_GUID; }
            //if (contextUiFormSelector.getCurrentItem === undefined) { console.log("contextUiFormSelector.getCurrentItem NULL"); return EMPTY_GUID; }
            //if (contextUiFormSelector.getCurrentItem().getId === undefined) { console.log("contextUiFormSelector.getCurrentItem().getId NULL"); return EMPTY_GUID; }
            return contextUiFormSelector.getCurrentItem().getId();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getlabel
    Object.defineProperty(form, "FormLabel", {
        get: function () {
            //if (contextUiFormSelector === null) { console.log("formContext.ui.formSelector NULL"); return EMPTY_STRING; }
            //if (contextUiFormSelector.getCurrentItem === undefined) { console.log("contextUiFormSelector.getCurrentItem NULL"); return EMPTY_STRING; }
            //if (contextUiFormSelector.getCurrentItem().getLabel === undefined) { console.log("contextUiFormSelector.getCurrentItem().getLabel NULL"); return EMPTY_STRING; }
            return contextUiFormSelector.getCurrentItem().getLabel();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/navigate
    form.FormNavigate = function (formId) {
        //if (contextUiFormSelector === null) { console.log("formContext.ui.formSelector NULL"); return; }
        //if (contextUiFormSelector.items === undefined) { console.log("contextUiFormSelector.items NULL"); return; }
        //if (contextUiFormSelector.items.get === undefined) { console.log("contextUiFormSelector.items.get NULL"); return; }
        var formItem = contextUiFormSelector.items.get(formId);
        if (formItem == null) return;
        formItem.navigate();
    };
    return form;
};
$ProjectName$.Form.LoadProcess = function (formContext) {
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activepath/getactivepath
    Object.defineProperty(process, "ActivePath", {
        get: function () {
            //if (getProcess === null) { console.log("formContext.data.process NULL"); return null; }
            //if (getProcess.getActivePath === undefined) { console.log("getProcess.getActivePath NULL"); return null; }
            return getProcess.getActivePath();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
    Object.defineProperty(process, "ActiveProcess", {
        get: function () {
            //if (getProcess === null) { console.log("formContext.data.process NULL"); return { Id: EMPTY_GUID,  Name: EMPTY_STRING, IsRendered: false, Stages: null }; }
            //if (getProcess.getActiveProcess === undefined) { console.log("getProcess.getActiveProcess NULL"); return { Id: EMPTY_GUID,  Name: EMPTY_STRING, IsRendered: false, Stages: null }; }
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/getactivestage
    Object.defineProperty(process, "ActiveStage", {
        get: function () {
            //if (getProcess === null) { console.log("formContext.data.process NULL"); return { Category: null, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: null }; }
            //if (getProcess.getActiveStage === undefined) { console.log("getProcess.getActiveStage NULL"); return { Category: null, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: null }; }
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
    process.AddOnProcessStatusChange = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.addOnProcessStatusChange === undefined) { console.log("getProcess.addOnProcessStatusChange NULL"); return; }
        getProcess.addOnProcessStatusChange(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
    process.AddOnStageChange = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.addOnStageChange === undefined) { console.log("getProcess.addOnStageChange NULL"); return; }
        getProcess.addOnStageChange(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
    process.AddOnStageSelected = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.addOnStageSelected === undefined) { console.log("getProcess.addOnStageSelected NULL"); return; }
        getProcess.addOnStageSelected(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getenabledprocesses
    process.EnabledProcesses = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.getEnabledProcesses === undefined) { console.log("getProcess.getEnabledProcesses NULL"); return; }
        getProcess.getEnabledProcesses(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/movenext
    process.MoveNext = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.moveNext === undefined) { console.log("getProcess.moveNext NULL"); return; }
        getProcess.moveNext(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/moveprevious
    process.MovePrevious = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.movePrevious === undefined) { console.log("getProcess.movePrevious NULL"); return; }
        getProcess.movePrevious(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getprocessinstances
    process.ProcessInstances = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.getProcessInstances === undefined) { console.log("getProcess.getProcessInstances NULL"); return; }
        getProcess.getProcessInstances(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
    process.RemoveOnProcessStatusChange = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.removeOnProcessStatusChange === undefined) { console.log("getProcess.removeOnProcessStatusChange NULL"); return; }
        getProcess.removeOnProcessStatusChange(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
    process.RemoveOnStageChange = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.removeOnStageChange === undefined) { console.log("getProcess.removeOnStageChange NULL"); return; }
        getProcess.removeOnStageChange(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
    process.RemoveOnStageSelected = function (callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.removeOnStageSelected === undefined) { console.log("getProcess.removeOnStageSelected NULL"); return; }
        getProcess.removeOnStageSelected(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getselectedstage
    Object.defineProperty(process, "SelectedStage", {
        get: function () {
            //if (getProcess === null) { console.log("formContext.data.process NULL"); return { Category: null, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: null }; }
            //if (getProcess.getSelectedStage === undefined) { console.log("getProcess.getSelectedStage NULL"); return { Category: null, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: null }; }
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
    process.SetActiveProcess = function (processId, callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.setActiveProcess === undefined) { console.log("getProcess.setActiveProcess NULL"); return; }
        getProcess.setActiveProcess(processId, callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/setactiveprocessinstance
    process.SetActiveProcessInstance = function (processInstanceId, callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.setActiveProcessInstance === undefined) { console.log("getProcess.setActiveProcessInstance NULL"); return; }
        getProcess.setActiveProcessInstance(processInstanceId, callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/setactivestage
    process.SetActiveStage = function (stageId, callback) {
        //if (getProcess === null) { console.log("formContext.data.process NULL"); return; }
        //if (getProcess.setActiveStage === undefined) { console.log("getProcess.setActiveStage NULL"); return; }
        getProcess.setActiveStage(stageId, callback);
    }
    return process;
};
$ProjectName$.Form.LoadField = function (formContext, body, field, type) {
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
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/addonchange
    body[field].AddOnChange = function (callback) {
        //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
        //if (attribute.addOnChange === undefined) { console.log("attribute.addOnChange " + logicalName + " NULL"); return; }
        attribute.addOnChange(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/fireonchange
    body[field].FireOnChange = function () {
        //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
        //if (attribute.fireOnChange === undefined) { console.log("attribute.fireOnChange " + logicalName + " NULL"); return; }
        attribute.fireOnChange();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getattributetype
    Object.defineProperty(body[field], "AttributeType", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (attribute.getAttributeType === undefined) { console.log("attribute.getAttributeType " + logicalName + " NULL"); return EMPTY_STRING; }
            return attribute.getAttributeType();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getformat
    Object.defineProperty(body[field], "Format", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return null; }
            //if (attribute.getFormat === undefined) { console.log("attribute.getFormat " + logicalName + " NULL"); return null; }
            return attribute.getFormat();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getinitialvalue
    Object.defineProperty(body[field], "InitialValue", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return -1; }
            //if (attribute.getInitialValue === undefined) { console.log("attribute.getInitialValue " + logicalName + " NULL"); return -1; }
            return attribute.getInitialValue();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getisdirty
    Object.defineProperty(body[field], "IsDirty", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return true; }
            //if (attribute.getIsDirty === undefined) { console.log("attribute.getIsDirty " + logicalName + " NULL"); return true; }
            return attribute.getIsDirty();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getispartylist
    Object.defineProperty(body[field], "IsPartyList", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return false; }
            //if (attribute.getIsPartyList === undefined) { console.log("attribute.getIsPartyList " + logicalName + " NULL"); return false; }
            return attribute.getIsPartyList();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmax
    Object.defineProperty(body[field], "Max", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return -1; }
            //if (attribute.getMax === undefined) { console.log("attribute.getMax " + logicalName + " NULL"); return -1; }
            return attribute.getMax();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmaxlength
    Object.defineProperty(body[field], "MaxLength", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return -1; }
            //if (attribute.getMaxLength === undefined) { console.log("attribute.getMaxLength " + logicalName + " NULL"); return -1; }
            return attribute.getMaxLength();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmin
    Object.defineProperty(body[field], "Min", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return -1; }
            //if (attribute.getMin === undefined) { console.log("attribute.getMin " + logicalName + " NULL"); return -1; }
            return attribute.getMin();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getname
    Object.defineProperty(body[field], "Name", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (attribute.getName === undefined) { console.log("attribute.getName " + logicalName + " NULL"); return EMPTY_STRING; }
            return attribute.getName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoption
    body[field].Option = function (value) {
        //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return { text: EMPTY_STRING, value: -1 }; }
        //if (attribute.getOption === undefined) { console.log("attribute.getOption " + logicalName + " NULL"); return { text: EMPTY_STRING, value: -1 }; }
        return attribute.getOption(value);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoptions
    Object.defineProperty(body[field], "Options", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return []; }
            //if (attribute.getOptions === undefined) { console.log("attribute.getOptions " + logicalName + " NULL"); return []; }
            return attribute.getOptions();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getparent
    Object.defineProperty(body[field], "AttributeParent", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return null; }
            //if (attribute.getParent === undefined) { console.log("attribute.getParent " + logicalName + " NULL"); return null; }
            return attribute.getParent();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getprecision
    Object.defineProperty(body[field], "Precision", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return 0; }
            //if (attribute.getPrecision === undefined) { console.log("attribute.getPrecision " + logicalName + " NULL"); return 0; }
            return attribute.getPrecision();
        },
        set: function (value) {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
            //if (attribute.setPrecision === undefined) { console.log("attribute.setPrecision " + logicalName + " NULL"); return; }
            attribute.setPrecision(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getrequiredlevel
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setrequiredlevel
    Object.defineProperty(body[field], "RequiredLevel", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return "none"; }
            //if (attribute.getRequiredLevel === undefined) { console.log("attribute.getRequiredLevel " + logicalName + " NULL"); return "none"; }
            return attribute.getRequiredLevel();
        },
        set: function (value) {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
            //if (attribute.setRequiredLevel === undefined) { console.log("attribute.setRequiredLevel " + logicalName + " NULL"); return; }
            attribute.setRequiredLevel(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getselectedoption
    Object.defineProperty(body[field], "SelectedOption", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return { text: EMPTY_STRING, value: -1 }; }
            //if (attribute.getSelectedOption === undefined) { console.log("attribute.getSelectedOption " + logicalName + " NULL"); return { text: EMPTY_STRING, value: -1 }; }
            return attribute.getSelectedOption();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getsubmitmode
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setsubmitmode
    Object.defineProperty(body[field], "SubmitMode", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return "always"; }
            //if (attribute.getSubmitMode === undefined) { console.log("attribute.getSubmitMode " + logicalName + " NULL"); return "always"; }
            return attribute.getSubmitMode();
        },
        set: function (value) {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
            //if (attribute.setSubmitMode === undefined) { console.log("attribute.setSubmitMode " + logicalName + " NULL"); return; }
            attribute.setSubmitMode(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/gettext
    Object.defineProperty(body[field], "Text", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (attribute.getText === undefined) { console.log("attribute.getText " + logicalName + " NULL"); return EMPTY_STRING; }
            return attribute.getText();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getuserprivilege
    Object.defineProperty(body[field], "UserPrivilege", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return { canRead: false, canUpdate: false, canCreate: false }; }
            //if (attribute.getUserPrivilege === undefined) { console.log("attribute.getUserPrivilege " + logicalName + " NULL"); return { canRead: false, canUpdate: false, canCreate: false }; }
            return attribute.getUserPrivilege();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
    Object.defineProperty(body[field], "Value", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return null; }
            //if (attribute.getValue === undefined) { console.log("attribute.getValue " + logicalName + " NULL"); return null; }
            return attribute.getValue();
        },
        set: function (value) {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
            //if (attribute.setValue === undefined) { console.log("attribute.setValue " + logicalName + " NULL"); return; }
            attribute.setValue(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/isvalid
    Object.defineProperty(body[field], "Valid", {
        get: function () {
            //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return false; }
            //if (attribute.isValid === undefined) { console.log("attribute.isValid " + logicalName + " NULL"); return false; }
            return attribute.isValid();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/removeonchange
    body[field].RemoveOnChange = function (callback) {
        //if (attribute === null) { console.log("attribute: " + logicalName + " NULL"); return; }
        //if (attribute.removeOnChange === undefined) { console.log("attribute.removeOnChange " + logicalName + " NULL"); return; }
        attribute.removeOnChange(callback);
    }
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
    //******************************************************************************************************************************
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomfilter
    body[field].AddCustomFilter = function (filter, entityLogicaName) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addCustomFilter === undefined) { console.log("control.addCustomFilter " + logicalName + " NULL"); return; }
        control.addCustomFilter(filter, entityLogicaName);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomview
    body[field].AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addCustomView === undefined) { console.log("control.addCustomView " + logicalName + " NULL"); return; }
        control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addnotification
    body[field].AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return false; }
        //if (control.addNotification === undefined) { console.log("control.addNotification " + logicalName + " NULL"); return false; }
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonpostsearch
    body[field].AddOnPostSearch = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addOnPostSearch === undefined) { console.log("control.addOnPostSearch " + logicalName + " NULL"); return; }
        control.addOnPostSearch(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonresultopened
    body[field].AddOnResultOpened = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addOnResultOpened === undefined) { console.log("control.addOnResultOpened " + logicalName + " NULL"); return; }
        control.addOnResultOpened(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonselection
    body[field].AddOnSelection = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addOnSelection === undefined) { console.log("control.addOnSelection " + logicalName + " NULL"); return; }
        control.addOnSelection(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addpresearch
    body[field].AddPreSearch = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addPreSearch === undefined) { console.log("control.addPreSearch " + logicalName + " NULL"); return; }
        control.addPreSearch(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearnotification
    body[field].ClearNotification = function (uniqueId) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return false; }
        //if (control.clearNotification === undefined) { console.log("control.clearNotification " + logicalName + " NULL"); return false; }
        return control.clearNotification(uniqueId);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearoptions
    body[field].ClearOptions = function () {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.clearOptions === undefined) { console.log("control.clearOptions " + logicalName + " NULL"); return; }
        return control.clearOptions();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getcontroltype
    Object.defineProperty(body[field], "ControlType", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getControlType === undefined) { console.log("control.getControlType " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getControlType();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdata
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdata
    Object.defineProperty(body[field], "Data", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getData === undefined) { console.log("control.getData " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getData();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setData === undefined) { console.log("control.setData " + logicalName + " NULL"); return; }
            control.setData(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdefaultview
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdefaultview
    Object.defineProperty(body[field], "DefaultView", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getDefaultView === undefined) { console.log("control.getDefaultView " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getDefaultView();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setDefaultView === undefined) { console.log("control.setDefaultView " + logicalName + " NULL"); return; }
            control.setDefaultView(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdisabled
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdisabled
    Object.defineProperty(body[field], "Disabled", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return true; }
            //if (control.getDisabled === undefined) { console.log("control.getDisabled " + logicalName + " NULL"); return true; }
            return control.getDisabled();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setDisabled === undefined) { console.log("control.setDisabled " + logicalName + " NULL"); return; }
            control.setDisabled(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setentitytypes
    Object.defineProperty(body[field], "EntityTypes", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return []; }
            //if (control.getEntityTypes === undefined) { console.log("control.getEntityTypes " + logicalName + " NULL"); return []; }
            return control.getEntityTypes();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setEntityTypes === undefined) { console.log("control.setEntityTypes " + logicalName + " NULL"); return; }
            control.setEntityTypes(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getinitialurl
    Object.defineProperty(body[field], "InitialUrl", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getInitialUrl === undefined) { console.log("control.getInitialUrl " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getInitialUrl();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getlabel
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setlabel
    Object.defineProperty(body[field], "Label", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getLabel === undefined) { console.log("control.getLabel " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getLabel();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setLabel === undefined) { console.log("control.setLabel " + logicalName + " NULL"); return; }
            control.setLabel(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getname
    Object.defineProperty(body[field], "Name2", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getName === undefined) { console.log("control.getName " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getobject
    Object.defineProperty(body[field], "Object", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return null; }
            //if (control.getObject === undefined) { console.log("control.getObject " + logicalName + " NULL"); return null; }
            return control.getObject();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getparent
    Object.defineProperty(body[field], "ControlParent", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return null; }
            //if (control.getParent === undefined) { console.log("control.getParent " + logicalName + " NULL"); return null; }
            return control.getParent();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsearchquery
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsearchquery
    Object.defineProperty(body[field], "SearchQuery", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getSearchQuery === undefined) { console.log("control.getSearchQuery " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getSearchQuery();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setSearchQuery === undefined) { console.log("control.setSearchQuery " + logicalName + " NULL"); return; }
            control.setSearchQuery(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getselectedresults

    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getshowtime
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setshowtime
    Object.defineProperty(body[field], "ShowTime", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return false; }
            //if (control.getShowTime === undefined) { console.log("control.getShowTime " + logicalName + " NULL"); return false; }
            return control.getShowTime();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setShowTime === undefined) { console.log("control.setShowTime " + logicalName + " NULL"); return; }
            control.setShowTime(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsrc
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsrc
    Object.defineProperty(body[field], "Src", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getSrc === undefined) { console.log("control.getSrc " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getSrc();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setSrc === undefined) { console.log("control.setSrc " + logicalName + " NULL"); return; }
            control.setSrc(value);
        }

    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getstate
    Object.defineProperty(body[field], "State", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return 1; }
            //if (control.getState === undefined) { console.log("control.getState " + logicalName + " NULL"); return 1; }
            return control.getState();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/gettotalresultcount
    Object.defineProperty(body[field], "TotalResultCount", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return -1; }
            //if (control.getTotalResultCount === undefined) { console.log("control.getTotalResultCount " + logicalName + " NULL"); return -1; }
            return control.getTotalResultCount();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
    Object.defineProperty(body[field], "Value2", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return EMPTY_STRING; }
            //if (control.getValue === undefined) { console.log("control.getValue " + logicalName + " NULL"); return EMPTY_STRING; }
            return control.getValue();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvisible
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setvisible
    Object.defineProperty(body[field], "Visible", {
        get: function () {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return false; }
            //if (control.getVisible === undefined) { console.log("control.getVisible " + logicalName + " NULL"); return false; }
            return control.getVisible();
        },
        set: function (value) {
            //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
            //if (control.setVisible === undefined) { console.log("control.setVisible " + logicalName + " NULL"); return; }
            control.setVisible(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/opensearchresult
    body[field].OpenSearchResult = function (resultNumber, mode) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return false; }
        //if (control.openSearchResult === undefined) { console.log("control.openSearchResult " + logicalName + " NULL"); return false; }
        return control.openSearchResult(resultNumber, mode);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/refresh
    body[field].Refresh = function () {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.refresh === undefined) { console.log("control.refresh " + logicalName + " NULL"); return; }
        control.refresh();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonpostsearch
    body[field].RemoveOnPostSearch = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.removeOnPostSearch === undefined) { console.log("control.removeOnPostSearch " + logicalName + " NULL"); return; }
        control.removeOnPostSearch(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonresultopened
    body[field].RemoveOnResultOpened = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.removeOnResultOpened === undefined) { console.log("control.removeOnResultOpened " + logicalName + " NULL"); return; }
        control.removeOnResultOpened(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonselection
    body[field].RemoveOnSelection = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.removeOnSelection === undefined) { console.log("control.removeOnSelection " + logicalName + " NULL"); return; }
        control.removeOnSelection(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeoption
    body[field].RemoveOption = function (value) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.removeOption === undefined) { console.log("control.removeOption " + logicalName + " NULL"); return; }
        control.removeOption(value);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removepresearch
    body[field].RemovePreSearch = function (callback) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.removePreSearch === undefined) { console.log("control.removePreSearch " + logicalName + " NULL"); return; }
        control.removePreSearch(callback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setfocus
    body[field].Focus = function () {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.setFocus === undefined) { console.log("control.setFocus " + logicalName + " NULL"); return; }
        control.setFocus();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setnotification
    body[field].SetNotification = function (message, uniqueId) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return false; }
        //if (control.setNotification === undefined) { console.log("control.setNotification " + logicalName + " NULL"); return false; }
        return control.setNotification(message, uniqueId);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addoption
    body[field].AddOption = function (text, value, index) {
        //if (control === null) { console.log("control: " + logicalName + " NULL"); return; }
        //if (control.addOption === undefined) { console.log("control.addOption " + logicalName + " NULL"); return; }
        var option = { text: text, value: value };
        control.addOption(option, index);
    }
};
$ProjectName$.Form.LoadFields = function (formContext, body, type) {
    for (var field in body) {
        $ProjectName$.Form.LoadField(formContext, body, field, type);
    }
    return body;
};
$ProjectName$.Form.LoadSection = function (formContext, tab, sections, section) {
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getlabel
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setlabel
    Object.defineProperty(sections[section], "Label", {
        get: function () {
            //if (sectionObject === null) { console.log("section: " + section + " NULL"); return EMPTY_STRING; }
            //if (sectionObject.getLabel === undefined) { console.log("sectionObject.getLabel " + section + " NULL"); return EMPTY_STRING; }
            return sectionObject.getLabel();
        },
        set: function (value) {
            //if (sectionObject === null) { console.log("section: " + section + " NULL"); return; }
            //if (sectionObject.setLabel === undefined) { console.log("sectionObject.setLabel " + section + " NULL"); return; }
            sectionObject.setLabel(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getname
    Object.defineProperty(sections[section], "Name", {
        get: function () {
            //if (sectionObject === null) { console.log("section: " + section + " NULL"); return EMPTY_STRING; }
            //if (sectionObject.getName === undefined) { console.log("sectionObject.getName " + section + " NULL"); return EMPTY_STRING; }
            return sectionObject.getName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getparent
    Object.defineProperty(sections[section], "Parent", {
        get: function () {
            //if (sectionObject === null) { console.log("section: " + section + " NULL"); return null; }
            //if (sectionObject.getParent === undefined) { console.log("sectionObject.getParent " + section + " NULL"); return null; }
            return sectionObject.getParent();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getvisible
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setvisible
    Object.defineProperty(sections[section], "Visible", {
        get: function () {
            //if (sectionObject === null) { console.log("section: " + section + " NULL"); return false; }
            //if (sectionObject.getVisible === undefined) { console.log("sectionObject.getVisible " + section + " NULL"); return false; }
            return sectionObject.getVisible();
        },
        set: function (value) {
            //if (sectionObject === null) { console.log("section: " + section + " NULL"); return; }
            //if (sectionObject.setVisible === undefined) { console.log("sectionObject.setVisible " + section + " NULL"); return; }
            sectionObject.setVisible(value);
        }
    });
};
$ProjectName$.Form.LoadTab = function (formContext, tabs, tab) {
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/addtabstatechange
    tabs[tab].AddTabStateChange = function (callback) {
        //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return; }
        //if (tabObject.addTabStateChange === undefined) { console.log("tabObject.addTabStateChange " + tab + " NULL"); return; }
        tabObject.addTabStateChange(callback);
    };
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getdisplaystate
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setdisplaystate
    Object.defineProperty(tabs[tab], "DisplayState", {
        get: function () {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return "expanded"; }
            //if (tabObject.getDisplayState === undefined) { console.log("tabObject.getDisplayState " + tab + " NULL"); return "expanded"; }
            return tabObject.getDisplayState();
        },
        set: function (value) {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return; }
            //if (tabObject.setDisplayState === undefined) { console.log("tabObject.setDisplayState " + tab + " NULL"); return; }
            tabObject.setDisplayState(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setfocus
    tabs[tab].Focus = function () {
        //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return; }
        //if (tabObject.setFocus === undefined) { console.log("tabObject.setFocus " + tab + " NULL"); return; }
        tabObject.setFocus();
    };
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getlabel
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setlabel
    Object.defineProperty(tabs[tab], "Label", {
        get: function () {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return EMPTY_STRING; }
            //if (tabObject.getLabel === undefined) { console.log("tabObject.getLabel " + tab + " NULL"); return EMPTY_STRING; }
            return tabObject.getLabel();
        },
        set: function (value) {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return; }
            //if (tabObject.setLabel === undefined) { console.log("tabObject.setLabel " + tab + " NULL"); return; }
            tabObject.setLabel(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getname
    Object.defineProperty(tabs[tab], "Name", {
        get: function () {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return EMPTY_STRING; }
            //if (tabObject.getName === undefined) { console.log("tabObject.getName " + tab + " NULL"); return EMPTY_STRING; }
            return tabObject.getName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getparent
    Object.defineProperty(tabs[tab], "Parent", {
        get: function () {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return null; }
            //if (tabObject.getParent === undefined) { console.log("tabObject.getParent " + tab + " NULL"); return null; }
            return tabObject.getParent();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/removetabstatechange
    tabs[tab].RemoveTabStateChange = function (callback) {
        //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return; }
        //if (tabObject.removeTabStateChange === undefined) { console.log("tabObject.removeTabStateChange " + tab + " NULL"); return; }
        tabObject.removeTabStateChange(callback);
    };
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getvisible
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setvisible
    Object.defineProperty(tabs[tab], "Visible", {
        get: function () {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return false; }
            //if (tabObject.getVisible === undefined) { console.log("tabObject.getVisible " + tab + " NULL"); return false; }
            return tabObject.getVisible();
        },
        set: function (value) {
            //if (tabObject === null) { console.log("tab: " + tab + " NULL"); return; }
            //if (tabObject.setVisible === undefined) { console.log("tabObject.setVisible " + tab + " NULL"); return; }
            tabObject.setVisible(value);
        }
    });
    for (var section in tabs[tab].Section) {
        $ProjectName$.Form.LoadSection(formContext, tab, tabs[tab].Section, section);
    }
};
$ProjectName$.Form.LoadTabs = function (formContext, tabs) {
    for (var tab in tabs) {
        $ProjectName$.Form.LoadTab(formContext, tabs, tab);
    }
};
$ProjectName$.Form.LoadNavigation = function (formContext, navigations, navigation) {
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setfocus
    navigations[navigation].Focus = function () {
        //if (navigationItem === null) { console.log("formContext.ui.navigation.items.get(navigation) NULL"); return; }
        //if (navigationItem.setFocus === undefined) { console.log("navigationItem.setFocus NULL"); return; }
        navigationItem.setFocus();
    };
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getlabel
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setlabel
    Object.defineProperty(navigations[navigation], "Label", {
        get: function () {
            //if (navigationItem === null) { console.log("formContext.ui.navigation.items.get(navigation) NULL"); return EMPTY_STRING; }
            //if (navigationItem.getLabel === undefined) { console.log("navigationItem.getLabel NULL"); return EMPTY_STRING; }
            return navigationItem.getLabel();
        },
        set: function (value) {
            //if (navigationItem === null) { console.log("formContext.ui.navigation.items.get(navigation) NULL"); return; }
            //if (navigationItem.setLabel === undefined) { console.log("navigationItem.setLabel NULL"); return; }
            navigationItem.setLabel(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getvisible
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setvisible
    Object.defineProperty(navigations[navigation], "Visible", {
        get: function () {
            //if (navigationItem === null) { console.log("formContext.ui.navigation.items.get(navigation) NULL"); return false; }
            //if (navigationItem.getVisible === undefined) { console.log("navigationItem.getVisible NULL"); return false; }
            return navigationItem.getVisible();
        },
        set: function (value) {
            //if (navigationItem === null) { console.log("formContext.ui.navigation.items.get(navigation) NULL"); return; }
            //if (navigationItem.setVisible === undefined) { console.log("navigationItem.setVisible NULL"); return; }
            navigationItem.setVisible(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getid
    Object.defineProperty(navigations[navigation], "Id", {
        get: function () {
            //if (navigationItem === null) { console.log("formContext.ui.navigation.items.get(navigation) NULL"); return EMPTY_STRING; }
            //if (navigationItem.getId === undefined) { console.log("navigationItem.getId NULL"); return EMPTY_STRING; }
            return navigationItem.getId();
        }
    });
}
$ProjectName$.Form.LoadNavigations = function (formContext, navigations) {
    for (var navigation in navigations) {
        $ProjectName$.Form.LoadNavigation(formContext, navigations, navigation);
    }
}
$ProjectName$.Form.LoadQuickForm = function (formContext, quickForms, quickForm) {
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getcontroltype
    Object.defineProperty(quickForms[quickForm], "ControlType", {
        get: function () {
            //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return EMPTY_STRING; }
            //if (quickViewControl.getControlType === undefined) { console.log("quickViewControl.getControlType NULL"); return EMPTY_STRING; }
            return quickViewControl.getControlType();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setfocus
    quickForms[quickForm].Focus = function () {
        //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return; }
        //if (quickViewControl.setFocus === undefined) { console.log("quickViewControl.setFocus NULL"); return; }
        quickViewControl.setFocus();
    };
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getlabel
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setlabel
    Object.defineProperty(quickForms[quickForm], "Label", {
        get: function () {
            //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return EMPTY_STRING; }
            //if (quickViewControl.getLabel === undefined) { console.log("quickViewControl.getLabel NULL"); return EMPTY_STRING; }
            return quickViewControl.getLabel();
        },
        set: function (value) {
            //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return; }
            //if (quickViewControl.setLabel === undefined) { console.log("quickViewControl.setLabel NULL"); return; }
            quickViewControl.setLabel(value);
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/isloaded    
    quickForms[quickForm].IsLoaded = function () {
        //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return false; }
        //if (quickViewControl.isLoaded === undefined) { console.log("quickViewControl.isLoaded NULL"); return false; }
        return quickViewControl.isLoaded();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getname
    Object.defineProperty(quickForms[quickForm], "Name", {
        get: function () {
            //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return EMPTY_STRING; }
            //if (quickViewControl.getName === undefined) { console.log("quickViewControl.getName NULL"); return EMPTY_STRING; }
            return quickViewControl.getName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getparent
    Object.defineProperty(quickForms[quickForm], "Parent", {
        get: function () {
            //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return null; }
            //if (quickViewControl.getParent === undefined) { console.log("quickViewControl.getParent NULL"); return null; }
            return quickViewControl.getParent();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/refresh
    quickForms[quickForm].Refresh = function () {
        //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return; }
        //if (quickViewControl.refresh === undefined) { console.log("quickViewControl.refresh NULL"); return; }
        quickViewControl.refresh();
    };
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getvisible
    Object.defineProperty(quickForms[quickForm], "Visible", {
        get: function () {
            //if (quickViewControl === null) { console.log("formContext.ui.quickForms.get(quickForm) NULL"); return false; }
            //if (quickViewControl.getVisible === undefined) { console.log("quickViewControl.getVisible NULL"); return false; }
            return quickViewControl.getVisible();
        }
    });
}
$ProjectName$.Form.LoadQuickForms = function (formContext, quickForms) {
    for (var quickForm in quickForms) {
        $ProjectName$.Form.LoadQuickForm(formContext, quickForms, quickForm);
    }
}
$ProjectName$.Form.LoadUtility = function () {
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
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/closeprogressindicator
    utility.CloseProgressIndicator = function () {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.closeProgressIndicator === undefined) { console.log("getUtility.closeProgressIndicator NULL"); return; }
        getUtility.closeProgressIndicator();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getallowedstatustransitions
    utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.getAllowedStatusTransitions === undefined) { console.log("getUtility.getAllowedStatusTransitions NULL"); return; }
        getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
    utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.getEntityMetadata === undefined) { console.log("getUtility.getEntityMetadata NULL"); return; }
        getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getlearningpathattributename
    Object.defineProperty(utility, "LearningPathAttributeName", {
        get: function () {
            //if (getUtility === null) { console.log("Xrm.Utility NULL"); return EMPTY_STRING; }
            //if (getUtility.getLearningPathAttributeName === undefined) { console.log("getUtility.getLearningPathAttributeName NULL"); return EMPTY_STRING; }
            return getUtility.getLearningPathAttributeName();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
    utility.ResourceString = function (webResourceName, key) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.getResourceString === undefined) { console.log("getUtility.getResourceString NULL"); return; }
        getUtility.getResourceString(webResourceName, key);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction
    utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.invokeProcessAction === undefined) { console.log("getUtility.invokeProcessAction NULL"); return; }
        getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/lookupobjects
    utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.lookupObjects === undefined) { console.log("getUtility.lookupObjects NULL"); return; }
        getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/refreshparentgrid
    utility.RefreshParentGrid = function (lookupOptions) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.refreshParentGrid === undefined) { console.log("getUtility.refreshParentGrid NULL"); return; }
        getUtility.refreshParentGrid(lookupOptions);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/showprogressindicator
    utility.ShowProgressIndicator = function (message) {
        //if (getUtility === null) { console.log("Xrm.Utility NULL"); return; }
        //if (getUtility.showProgressIndicator === undefined) { console.log("getUtility.showProgressIndicator NULL"); return; }
        getUtility.showProgressIndicator(message);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
    utility.AdvancedConfigSetting = function (setting) {
        //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return; }
        //if (getGlobalContext.getAdvancedConfigSetting === undefined) { console.log("getGlobalContext.getAdvancedConfigSetting NULL"); return; }
        getGlobalContext.getAdvancedConfigSetting(setting);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
    Object.defineProperty(utility, "ClientUrl", {
        get: function () {
            //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return EMPTY_STRING; }
            //if (getGlobalContext.getClientUrl === undefined) { console.log("getGlobalContext.getClientUrl NULL"); return EMPTY_STRING; }
            return getGlobalContext.getClientUrl();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
    utility.CurrentAppName = function (successCallback, errorCallback) {
        //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return; }
        //if (getGlobalContext.getCurrentAppName === undefined) { console.log("getGlobalContext.getCurrentAppName NULL"); return; }
        getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
    utility.CurrentAppProperties = function (successCallback, errorCallback) {
        //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return; }
        //if (getGlobalContext.getCurrentAppProperties === undefined) { console.log("getGlobalContext.getCurrentAppProperties NULL"); return; }
        getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
    Object.defineProperty(utility, "CurrentAppUrl", {
        get: function () {
            //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return EMPTY_STRING; }
            //if (getGlobalContext.getCurrentAppUrl === undefined) { console.log("getGlobalContext.getCurrentAppUrl NULL"); return EMPTY_STRING; }
            return getGlobalContext.getCurrentAppUrl();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getversion
    Object.defineProperty(utility, "Version", {
        get: function () {
            //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return EMPTY_STRING; }
            //if (getGlobalContext.getVersion === undefined) { console.log("getGlobalContext.getVersion NULL"); return EMPTY_STRING; }
            return getGlobalContext.getVersion();
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
    utility.IsOnPremises = function (successCallback, errorCallback) {
        //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return false; }
        //if (getGlobalContext.isOnPremises === undefined) { console.log("getGlobalContext.isOnPremises NULL"); return false; }
        return getGlobalContext.isOnPremises();
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
    utility.PrependOrgName = function (sPath) {
        //if (getGlobalContext === null) { console.log("Xrm.Utility.getGlobalContext() NULL"); return EMPTY_STRING; }
        //if (getGlobalContext.prependOrgName === undefined) { console.log("getGlobalContext.prependOrgName NULL"); return EMPTY_STRING; }
        return getGlobalContext.prependOrgName(sPath);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openalertdialog
    utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openAlertDialog === undefined) { console.log("getNavigation.openAlertDialog NULL"); return; }
        getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openconfirmdialog
    utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openConfirmDialog === undefined) { console.log("getNavigation.openConfirmDialog NULL"); return; }
        getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openerrordialog
    utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openErrorDialog === undefined) { console.log("getNavigation.openErrorDialog NULL"); return; }
        getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openfile
    utility.OpenFile = function (file, openFileOptions) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openFile === undefined) { console.log("getNavigation.openFile NULL"); return; }
        getNavigation.openFile(file, openFileOptions);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
    utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openForm === undefined) { console.log("getNavigation.openForm NULL"); return; }
        getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openurl
    utility.OpenUrl = function (url, openUrlOptions) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openUrl === undefined) { console.log("getNavigation.openUrl NULL"); return; }
        getNavigation.openUrl(url, openUrlOptions);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openwebresource
    utility.OpenWebResource = function (webResourceName, windowOptions, data) {
        //if (getNavigation === null) { console.log("Xrm.Navigation NULL"); return; }
        //if (getNavigation.openWebResource === undefined) { console.log("getNavigation.openWebResource NULL"); return; }
        getNavigation.openWebResource(webResourceName, windowOptions, data);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel
    utility.LoadPanel = function (url, title) {
        //if (getPanel === null) { console.log("Xrm.Panel NULL"); return; }
        //if (getPanel.loadPanel === undefined) { console.log("getPanel.loadPanel NULL"); return; }
        getPanel.loadPanel(url, title);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlattributeencode
    utility.XmlAttributeEncode = function (arg) {
        //if (getEncoding === null) { console.log("Xrm.Encoding NULL"); return arg; }
        //if (getEncoding.xmlAttributeEncode === undefined) { console.log("getEncoding.xmlAttributeEncode NULL"); return arg; }
        return getEncoding.xmlAttributeEncode(arg);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlencode
    utility.XmlEncode = function (arg) {
        //if (getEncoding === null) { console.log("Xrm.Encoding NULL"); return arg; }
        //if (getEncoding.xmlEncode === undefined) { console.log("getEncoding.xmlEncode NULL"); return arg; }
        return getEncoding.xmlEncode(arg);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureaudio
    utility.CaptureAudio = function (successCallback, errorCallback) {
        //if (getDevice === null) { console.log("Xrm.Device NULL"); return; }
        //if (getDevice.captureAudio === undefined) { console.log("getDevice.captureAudio NULL"); return; }
        getDevice.captureAudio().then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureimage
    utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
        //if (getDevice === null) { console.log("Xrm.Device NULL"); return; }
        //if (getDevice.captureImage === undefined) { console.log("getDevice.captureImage NULL"); return; }
        getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/capturevideo
    utility.CaptureVideo = function (successCallback, errorCallback) {
        //if (getDevice === null) { console.log("Xrm.Device NULL"); return; }
        //if (getDevice.captureVideo === undefined) { console.log("getDevice.captureVideo NULL"); return; }
        getDevice.captureVideo().then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getbarcodevalue
    utility.BarcodeValue = function (successCallback, errorCallback) {
        //if (getDevice === null) { console.log("Xrm.Device NULL"); return; }
        //if (getDevice.getBarcodeValue === undefined) { console.log("getDevice.getBarcodeValue NULL"); return; }
        getDevice.getBarcodeValue().then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getcurrentposition
    utility.CurrentPosition = function (successCallback, errorCallback) {
        //if (getDevice === null) { console.log("Xrm.Device NULL"); return; }
        //if (getDevice.getCurrentPosition === undefined) { console.log("getDevice.getCurrentPosition NULL"); return; }
        getDevice.getCurrentPosition().then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/pickfile
    utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
        //if (getDevice === null) { console.log("Xrm.Device NULL"); return; }
        //if (getDevice.pickFile === undefined) { console.log("getDevice.pickFile NULL"); return; }
        getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
    }
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client
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
                    //if (client === null) { console.log("Xrm.Utility.getGlobalContext().client NULL"); return EMPTY_STRING; }
                    //if (client.getClient === undefined) { console.log("client.getClient NULL"); return EMPTY_STRING; }
                    return client.getClient();
                }
            });
            Object.defineProperty(Client, "ClientState", {
                get: function () {
                    //if (client === null) { console.log("Xrm.Utility.getGlobalContext().client NULL"); return EMPTY_STRING; }
                    //if (client.getClientState === undefined) { console.log("client.getClientState NULL"); return EMPTY_STRING; }
                    return client.getClientState();
                }
            });
            Object.defineProperty(Client, "FormFactor", {
                get: function () {
                    //if (client === null) { console.log("Xrm.Utility.getGlobalContext().client NULL"); return 0; }
                    //if (client.getFormFactor === undefined) { console.log("client.getFormFactor NULL"); return 0; }
                    return client.getFormFactor();
                }
            });
            Client.IsOffline = function () {
                //if (client === null) { console.log("Xrm.Utility.getGlobalContext().client NULL"); return false; }
                //if (client.isOffline === undefined) { console.log("client.isOffline NULL"); return false; }
                return client.isOffline();
            }
            return Client;
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
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
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return null; }    
                    //if (organizationSettings.attributes === undefined) { console.log("organizationSettings.attributes NULL"); return null; }
                    return organizationSettings.attributes;
                }
            });
            Object.defineProperty(OrganizationSettings, "BaseCurrencyId", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return EMPTY_STRING; }    
                    //if (organizationSettings.baseCurrencyId === undefined) { console.log("organizationSettings.baseCurrencyId NULL"); return EMPTY_STRING; }
                    return organizationSettings.baseCurrencyId;
                }
            });
            Object.defineProperty(OrganizationSettings, "DefaultCountryCode", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return EMPTY_STRING; }    
                    //if (organizationSettings.defaultCountryCode === undefined) { console.log("organizationSettings.defaultCountryCode NULL"); return EMPTY_STRING; }
                    return organizationSettings.defaultCountryCode;
                }
            });
            Object.defineProperty(OrganizationSettings, "DefaultCountryCode", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return EMPTY_STRING; }    
                    //if (organizationSettings.defaultCountryCode === undefined) { console.log("organizationSettings.defaultCountryCode NULL"); return EMPTY_STRING; }
                    return organizationSettings.defaultCountryCode;
                }
            });
            OrganizationSettings.IsAutoSaveEnabled = function () {
                //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return false; } 
                //if (organizationSettings.isAutoSaveEnabled === undefined) { console.log("organizationSettings.isAutoSaveEnabled NULL"); return false; }
                return organizationSettings.isAutoSaveEnabled;
            }
            Object.defineProperty(OrganizationSettings, "LanguageId", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return 0; }    
                    //if (organizationSettings.languageId === undefined) { console.log("organizationSettings.languageId NULL"); return 0; }
                    return organizationSettings.languageId;
                }
            });
            Object.defineProperty(OrganizationSettings, "OrganizationId", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return EMPTY_STRING; }    
                    //if (organizationSettings.organizationId === undefined) { console.log("organizationSettings.organizationId NULL"); return EMPTY_STRING; }
                    return organizationSettings.organizationId;
                }
            });
            Object.defineProperty(OrganizationSettings, "UniqueName", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return EMPTY_STRING; }    
                    //if (organizationSettings.uniqueName === undefined) { console.log("organizationSettings.uniqueName NULL"); return EMPTY_STRING; }
                    return organizationSettings.uniqueName;
                }
            });
            Object.defineProperty(OrganizationSettings, "UseSkypeProtocol", {
                get: function () {
                    //if (organizationSettings === null) { console.log("Xrm.Utility.getGlobalContext().organizationSettings NULL"); return false; }    
                    //if (organizationSettings.useSkypeProtocol === undefined) { console.log("organizationSettings.useSkypeProtocol NULL"); return false; }
                    return organizationSettings.useSkypeProtocol;
                }
            });
            return OrganizationSettings;
        }
    });
    //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings
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
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return null; }    
                    //if (userSettings.dateFormattingInfo === undefined) { console.log("userSettings.dateFormattingInfo NULL"); return null; }
                    return userSettings.dateFormattingInfo;
                }
            });
            Object.defineProperty(UserSettings, "DefaultDashboardId", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return EMPTY_STRING; }    
                    //if (userSettings.defaultDashboardId === undefined) { console.log("userSettings.defaultDashboardId NULL"); return EMPTY_STRING; }
                    return userSettings.defaultDashboardId;
                }
            });
            Object.defineProperty(UserSettings, "DefaultDashboardId", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return EMPTY_STRING; }    
                    //if (userSettings.defaultDashboardId === undefined) { console.log("userSettings.defaultDashboardId NULL"); return EMPTY_STRING; }
                    return userSettings.defaultDashboardId;
                }
            });
            UserSettings.IsGuidedHelpEnabled = function () {
                //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return false; }    
                //if (userSettings.isGuidedHelpEnabled === undefined) { console.log("userSettings.isGuidedHelpEnabled NULL"); return false; }
                return userSettings.isGuidedHelpEnabled;
            }
            UserSettings.IsHighContrastEnabled = function () {
                //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return false; }    
                //if (userSettings.isHighContrastEnabled === undefined) { console.log("userSettings.isHighContrastEnabled NULL"); return false; }
                return userSettings.isHighContrastEnabled;
            }
            UserSettings.IsRTL = function () {
                //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return false; }    
                //if (userSettings.isRTL === undefined) { console.log("userSettings.isRTL NULL"); return false; }
                return userSettings.isRTL;
            }
            Object.defineProperty(UserSettings, "LanguageId", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return 0; }    
                    //if (userSettings.languageId === undefined) { console.log("userSettings.languageId NULL"); return 0; }
                    return userSettings.languageId;
                }
            });
            Object.defineProperty(UserSettings, "SecurityRolePrivileges", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return []; }    
                    //if (userSettings.securityRolePrivileges === undefined) { console.log("userSettings.securityRolePrivileges NULL"); return []; }
                    return userSettings.securityRolePrivileges;
                }
            });
            Object.defineProperty(UserSettings, "SecurityRoles", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return []; }    
                    //if (userSettings.securityRoles === undefined) { console.log("userSettings.securityRoles NULL"); return []; }
                    return userSettings.securityRoles;
                }
            });
            Object.defineProperty(UserSettings, "TransactionCurrencyId", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return EMPTY_STRING; }    
                    //if (userSettings.transactionCurrencyId === undefined) { console.log("userSettings.transactionCurrencyId NULL"); return EMPTY_STRING; }
                    return userSettings.transactionCurrencyId;
                }
            });
            Object.defineProperty(UserSettings, "UserId", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return EMPTY_STRING; }    
                    //if (userSettings.userId === undefined) { console.log("userSettings.userId NULL"); return EMPTY_STRING; }
                    return userSettings.userId;
                }
            });
            Object.defineProperty(UserSettings, "UserName", {
                get: function () {
                    //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return EMPTY_STRING; }    
                    //if (userSettings.userName === undefined) { console.log("userSettings.userName NULL"); return EMPTY_STRING; }
                    return userSettings.userName;
                }
            });
            UserSettings.TimeZoneOffsetMinutes = function () {
                //if (userSettings === null) { console.log("Xrm.Utility.getGlobalContext().userSettings NULL"); return 0; }    
                //if (userSettings.getTimeZoneOffsetMinutes === undefined) { console.log("userSettings.getTimeZoneOffsetMinutes NULL"); return 0; }
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