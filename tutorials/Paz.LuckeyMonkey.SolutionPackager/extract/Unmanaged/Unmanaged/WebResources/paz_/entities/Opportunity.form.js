'use strict';
var LuckeyMonkey;
(function (LuckeyMonkey) {
	'use strict';
        var devKit = (function () {
            'use strict';
            var EMPTY_STRING = '';
            var EMPTY_GUID = '{00000000-0000-0000-0000-000000000000}';
            var U = undefined;
            var N = null;
            function loadForm(formContext) {
                var form = {};
                var contextData = (function () {
                    if (formContext && formContext.data) {
                        return formContext.data;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data) {
                        return Xrm.Page.data;
                    }
                    return N;
                })();
                var contextDataEntity = (function () {
                    if (formContext && formContext.data && formContext.data.entity) {
                        return formContext.data.entity;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data && Xrm.Page.data.entity) {
                        return Xrm.Page.data.entity;
                    }
                    return N;
                })();
                var contextUi = (function () {
                    if (formContext && formContext.ui) {
                        return formContext.ui;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui) {
                        return Xrm.Page.ui;
                    }
                    return N;
                })();
                var contextUiFormSelector = (function () {
                    if (formContext && formContext.ui && formContext.ui.formSelector) {
                        return formContext.ui.formSelector;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.formSelector) {
                        return Xrm.Page.ui.formSelector;
                    }
                    return N;
                })();
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/addonload
                form.AddOnLoad = function (callback) {
                    if (contextData !== N && contextData.addOnLoad !== U) {
                        contextData.addOnLoad(callback);
                    }
                    else { throw new Error('loadForm.AddOnLoad'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/getisdirty
                Object.defineProperty(form, 'IsDirty', {
                    get: function () {
                        if (contextData !== N && contextData.getIsDirty !== U) {
                            return contextData.getIsDirty();
                        }
                        else { throw new Error('loadForm.IsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/isvalid
                Object.defineProperty(form, 'IsValid', {
                    get: function () {
                        if (contextData !== N && contextData.isValid !== U) {
                            return contextData.isValid();
                        }
                        else { throw new Error('loadForm.IsValid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/refresh
                form.Refresh = function (save, successCallback, errorCallback) {
                    if (contextData !== N && contextData.refresh !== U) {
                        contextData.refresh(save).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadForm.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/removeonload
                form.RemoveOnLoad = function (callback) {
                    if (contextData !== N && contextData.removeOnLoad !== U) {
                        contextData.removeOnLoad(callback);
                    }
                    else { throw new Error('loadForm.RemoveOnLoad'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save
                form.Save = function (saveOptions, successCallback, errorCallback) {
                    if (contextData !== N && contextData.save !== U) {
                        contextData.save(saveOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadForm.Save'); }
                };
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
                form.AddOnSave = function (callback) {
                    if (contextDataEntity !== N && contextDataEntity.addOnSave !== U) {
                        contextDataEntity.addOnSave(callback);
                    }
                    else { throw new Error('loadForm.AddOnSave'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getdataxml
                Object.defineProperty(form, 'DataXml', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getDataXml !== U) {
                            return contextDataEntity.getDataXml();
                        }
                        else { throw new Error('loadForm.DataXml'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityname
                Object.defineProperty(form, 'EntityName', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getEntityName !== U) {
                            return contextDataEntity.getEntityName();
                        }
                        else { throw new Error('loadForm.DataXml'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference
                Object.defineProperty(form, 'EntityReference', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getEntityReference !== U) {
                            return contextDataEntity.getEntityReference();
                        }
                        else { throw new Error('loadForm.EntityReference'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getid
                Object.defineProperty(form, 'EntityId', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getId !== U) {
                            return contextDataEntity.getId();
                        }
                        else { throw new Error('loadForm.EntityId'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getisdirty
                Object.defineProperty(form, 'EntityIsDirty', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getIsDirty !== U) {
                            return contextDataEntity.getIsDirty();
                        }
                        else { throw new Error('loadForm.EntityIsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
                Object.defineProperty(form, 'PrimaryAttributeValue', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.getPrimaryAttributeValue !== U) {
                            return contextDataEntity.getPrimaryAttributeValue();
                        }
                        else { throw new Error('loadForm.PrimaryAttributeValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/isvalid
                Object.defineProperty(form, 'EntityIsValid', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.isValid !== U) {
                            return contextDataEntity.isValid();
                        }
                        else { throw new Error('loadForm.EntityIsValid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/removeonsave
                form.RemoveOnSave = function (callback) {
                    if (contextDataEntity !== N && contextDataEntity.removeOnSave !== U) {
                        contextDataEntity.removeOnSave(callback);
                    }
                    else { throw new Error('loadForm.RemoveOnSave'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/save
                form.EntitySave = function (saveOption) {
                    if (contextDataEntity !== N && contextDataEntity.save !== U) {
                        contextDataEntity.save(saveOption);
                    }
                    else { throw new Error('loadForm.EntitySave'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
                Object.defineProperty(form, 'Attributes', {
                    get: function () {
                        if (contextDataEntity !== N && contextDataEntity.attributes) {
                            return contextDataEntity.attributes;
                        }
                        else { throw new Error('loadForm.Attributes'); }
                    }
                });
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/clearformnotification
                form.ClearFormNotification = function (uniqueId) {
                    if (contextUi !== N && contextUi.clearFormNotification !== U) {
                        contextUi.clearFormNotification(uniqueId);
                    }
                    else { throw new Error('loadForm.ClearFormNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/close
                form.Close = function () {
                    if (contextUi !== N && contextUi.close !== U) {
                        contextUi.close();
                    }
                    else { throw new Error('loadForm.Close'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getformtype
                Object.defineProperty(form, 'FormType', {
                    get: function () {
                        if (contextUi !== N && contextUi.getFormType !== U) {
                            return contextUi.getFormType();
                        }
                        else { throw new Error('loadForm.FormType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportheight
                Object.defineProperty(form, 'ViewPortHeight', {
                    get: function () {
                        if (contextUi !== N && contextUi.getViewPortHeight !== U) {
                            return contextUi.getViewPortHeight();
                        }
                        else { throw new Error('loadForm.ViewPortHeight'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportwidth
                Object.defineProperty(form, 'ViewPortWidth', {
                    get: function () {
                        if (contextUi !== N && contextUi.getViewPortWidth !== U) {
                            return contextUi.getViewPortWidth();
                        }
                        else { throw new Error('loadForm.ViewPortWidth'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/refreshribbon
                form.RefreshRibbon = function (refreshAll) {
                    if (contextUi !== N && contextUi.refreshRibbon !== U) {
                        contextUi.refreshRibbon(refreshAll);
                    }
                    else { throw new Error('loadForm.RefreshRibbon'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/setformnotification
                form.SetFormNotification = function (message, level, uniqueId) {
                    if (contextUi !== N && contextUi.setFormNotification !== U) {
                        return contextUi.setFormNotification(message, level, uniqueId);
                    }
                    else { throw new Error('loadForm.SetFormNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
                Object.defineProperty(form, 'Controls', {
                    get: function () {
                        if (contextUi !== N && contextUi.controls !== U) {
                            return contextUi.controls;
                        }
                        else { throw new Error('loadForm.Controls'); }
                    }
                });
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getid
                Object.defineProperty(form, 'FormId', {
                    get: function () {
                        if (contextUiFormSelector !== N && contextUiFormSelector.getCurrentItem !== N && contextUiFormSelector.getCurrentItem().getId !== U) {
                            return contextUiFormSelector.getCurrentItem().getId();
                        }
                        else { throw new Error('loadForm.FormId'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getlabel
                Object.defineProperty(form, 'FormLabel', {
                    get: function () {
                        if (contextUiFormSelector !== N && contextUiFormSelector.getCurrentItem !== N && contextUiFormSelector.getCurrentItem().getLabel !== U) {
                            return contextUiFormSelector.getCurrentItem().getLabel();
                        }
                        else { throw new Error('loadForm.FormLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/navigate
                form.FormNavigate = function (formId) {
                    if (contextUiFormSelector !== N && contextUiFormSelector.items !== N && contextUiFormSelector.items.get !== U) {
                        var formItem = contextUiFormSelector.items.get(formId);
                        if (formItem !== N) {
                            formItem.navigate();
                        }
                    }
                    else { throw new Error('loadForm.FormNavigate'); }
                };
                return form;
            }
            function loadProcess(formContext) {
                var process = {};
                var getProcess = (function () {
                    if (formContext && formContext.data && formContext.data.process) {
                        return formContext.data.process;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data && Xrm.Page.data.process) {
                        return Xrm.Page.data.process;
                    }
                    return N;
                })();
                var getProcessUi = (function () {
                    if (formContext && formContext.ui && formContext.ui.process) {
                        return formContext.ui.process;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.process) {
                        return Xrm.Page.ui.process;
                    }
                    return N;
                })();
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/getdisplaystate
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/setdisplaystate
                Object.defineProperty(process, 'DisplayState', {
                    get: function () {
                        if (getProcessUi !== N && getProcessUi.getDisplayState !== U) {
                            return getProcessUi.getDisplayState();
                        }
                        else { throw new Error('loadProcess.GetDisplayState'); }
                    },
                    set: function (value) {
                        if (getProcessUi !== N && getProcessUi.setDisplayState !== U) {
                            getProcessUi.setDisplayState(value);
                        }
                        else { throw new Error('loadProcess.SetDisplayState'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/getvisible
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-process/setvisible
                Object.defineProperty(process, 'Visible', {
                    get: function () {
                        if (getProcessUi !== N && getProcessUi.getVisible !== U) {
                            return getProcessUi.getVisible();
                        }
                        else { throw new Error('loadProcess.GetVisible'); }
                    },
                    set: function (value) {
                        if (getProcessUi !== N && getProcessUi.setVisible !== U) {
                            getProcessUi.setVisible(value);
                        }
                        else { throw new Error('loadProcess.SetVisible'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/getinstanceid
                Object.defineProperty(process, 'InstanceId', {
                    get: function () {
                        if (getProcess !== N && getProcess.getInstanceId !== U) {
                            return getProcess.getInstanceId();
                        }
                        else { throw new Error('loadProcess.InstanceId'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/getinstancename
                Object.defineProperty(process, 'InstanceName', {
                    get: function () {
                        if (getProcess !== N && getProcess.getInstanceName !== U) {
                            return getProcess.getInstanceName();
                        }
                        else { throw new Error('loadProcess.InstanceName'); }
                    }
                });
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/setstatus
                //---https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/instance/getstatus
                Object.defineProperty(process, 'Status', {
                    get: function () {
                        if (getProcess !== N && getProcess.getStatus !== U) {
                            return getProcess.getStatus();
                        }
                        else { throw new Error('loadProcess.Status'); }
                    },
                    set: function (value) {
                        if (getProcess !== N && getProcess.setStatus !== U) {
                            getProcess.setStatus(value, N);
                        }
                        else { throw new Error('loadField.Status'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activepath/getactivepath
                Object.defineProperty(process, 'ActivePath', {
                    get: function () {
                        if (getProcess !== N && getProcess.getActivePath !== U) {
                            return getProcess.getActivePath();
                        }
                        else { throw new Error('loadProcess.ActivePath'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
                Object.defineProperty(process, 'ActiveProcess', {
                    get: function () {
                        if (getProcess !== N && getProcess.getActiveProcess !== U) {
                            var data = { Id: EMPTY_GUID, Name: EMPTY_STRING, IsRendered: false, Stages: N };
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
                        else { throw new Error('loadProcess.ActiveProcess'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/getactivestage
                Object.defineProperty(process, 'ActiveStage', {
                    get: function () {
                        if (getProcess !== N && getProcess.getActiveStage !== U) {
                            var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
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
                        else { throw new Error('loadProcess.ActiveStage'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
                process.AddOnProcessStatusChange = function (callback) {
                    if (getProcess !== N && getProcess.addOnProcessStatusChange !== U) {
                        getProcess.addOnProcessStatusChange(callback);
                    }
                    else { throw new Error('loadProcess.AddOnProcessStatusChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
                process.AddOnStageChange = function (callback) {
                    if (getProcess !== N && getProcess.addOnStageChange !== U) {
                        getProcess.addOnStageChange(callback);
                    }
                    else { throw new Error('loadProcess.AddOnStageChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
                process.AddOnStageSelected = function (callback) {
                    if (getProcess !== N && getProcess.addOnStageSelected !== U) {
                        getProcess.addOnStageSelected(callback);
                    }
                    else { throw new Error('loadProcess.AddOnStageSelected'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getenabledprocesses
                process.EnabledProcesses = function (callback) {
                    if (getProcess !== N && getProcess.getEnabledProcesses !== U) {
                        getProcess.getEnabledProcesses(callback);
                    }
                    else { throw new Error('loadProcess.EnabledProcesses'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/movenext
                process.MoveNext = function (callback) {
                    if (getProcess !== N && getProcess.moveNext !== U) {
                        getProcess.moveNext(callback);
                    }
                    else { throw new Error('loadProcess.MoveNext'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/moveprevious
                process.MovePrevious = function (callback) {
                    if (getProcess !== N && getProcess.movePrevious !== U) {
                        getProcess.movePrevious(callback);
                    }
                    else { throw new Error('loadProcess.MovePrevious'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getprocessinstances
                process.ProcessInstances = function (callback) {
                    if (getProcess !== N && getProcess.getProcessInstances !== U) {
                        getProcess.getProcessInstances(callback);
                    }
                    else { throw new Error('loadProcess.ProcessInstances'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
                process.RemoveOnProcessStatusChange = function (callback) {
                    if (getProcess !== N && getProcess.removeOnProcessStatusChange !== U) {
                        getProcess.removeOnProcessStatusChange(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnProcessStatusChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
                process.RemoveOnStageChange = function (callback) {
                    if (getProcess !== N && getProcess.removeOnStageChange !== U) {
                        getProcess.removeOnStageChange(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnStageChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
                process.RemoveOnStageSelected = function (callback) {
                    if (getProcess !== N && getProcess.removeOnStageSelected !== U) {
                        getProcess.removeOnStageSelected(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnStageSelected'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getselectedstage
                Object.defineProperty(process, 'SelectedStage', {
                    get: function () {
                        if (getProcess !== N && getProcess.getSelectedStage !== U) {
                            var data = { Category: N, EntityName: EMPTY_STRING, Id: EMPTY_GUID, Name: EMPTY_STRING, Status: EMPTY_STRING, Steps: N };
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
                        else { throw new Error('loadProcess.SelectedStage'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
                process.SetActiveProcess = function (processId, callback) {
                    if (getProcess !== N && getProcess.setActiveProcess !== U) {
                        getProcess.setActiveProcess(processId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveProcess'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/setactiveprocessinstance
                process.SetActiveProcessInstance = function (processInstanceId, callback) {
                    if (getProcess !== N && getProcess.setActiveProcessInstance !== U) {
                        getProcess.setActiveProcessInstance(processInstanceId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveProcessInstance'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/setactivestage
                process.SetActiveStage = function (stageId, callback) {
                    if (getProcess !== N && getProcess.setActiveStage !== U) {
                        getProcess.setActiveStage(stageId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveStage'); }
                };
                return process;
            }
            function loadField(formContext, body, field, type) {
                var logicalName = (function () {
                    if (type === U) return field.toLowerCase();
                    return (type + field).toLowerCase();
                })();
                var control = (function () {
                    if (formContext && formContext.getControl) {
                        return formContext.getControl(logicalName);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.getControl) {
                        return Xrm.Page.getControl(logicalName);
                    }
                    return N;
                })();
                var attribute = (function () {
                    if (formContext) {
                        if (type !== U) {
                            if (control === N) {
                                if (formContext.getAttribute) {
                                    return formContext.getAttribute(logicalName);
                                }
                                return N;
                            }
                            if (control.getAttribute === U) {
                                return N;
                            }
                            if (control.getAttribute) {
                                return control.getAttribute();
                            }
                        }
                        if (formContext.getAttribute) {
                            return formContext.getAttribute(logicalName);
                        }
                        return N;
                    }
                    else {
                        if (type !== U) {
                            if (control === N) {
                                if (Xrm && Xrm.Page && Xrm.Page.getAttribute) {
                                    return Xrm.Page.getAttribute(logicalName);
                                }
                                return N;
                            }
                            if (control.getAttribute === U) {
                                return N;
                            }
                            if (control.getAttribute) {
                                return control.getAttribute();
                            }
                            return N;
                        }
                        if (Xrm && Xrm.Page && Xrm.Page.getAttribute) {
                            return Xrm.Page.getAttribute(logicalName);
                        }
                        return N;
                    }
                })();
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/addonchange
                body[field].AddOnChange = function (callback) {
                    if (attribute !== N && attribute.addOnChange !== U) {
                        attribute.addOnChange(callback);
                    }
                    else { throw new Error('loadField.AddOnChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/fireonchange
                body[field].FireOnChange = function () {
                    if (attribute !== N && attribute.fireOnChange !== U) {
                        attribute.fireOnChange();
                    }
                    else { throw new Error('loadField.FireOnChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getattributetype
                Object.defineProperty(body[field], 'AttributeType', {
                    get: function () {
                        if (attribute !== N && attribute.getAttributeType !== U) {
                            return attribute.getAttributeType();
                        }
                        else { throw new Error('loadField.AttributeType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getformat
                Object.defineProperty(body[field], 'Format', {
                    get: function () {
                        if (attribute !== N && attribute.getFormat !== U) {
                            return attribute.getFormat();
                        }
                        else { throw new Error('loadField.Format'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getinitialvalue
                Object.defineProperty(body[field], 'InitialValue', {
                    get: function () {
                        if (attribute !== N && attribute.getInitialValue !== U) {
                            return attribute.getInitialValue();
                        }
                        else { throw new Error('loadField.InitialValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getisdirty
                Object.defineProperty(body[field], 'IsDirty', {
                    get: function () {
                        if (attribute !== N && attribute.getIsDirty !== U) {
                            return attribute.getIsDirty();
                        }
                        else { throw new Error('loadField.IsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getispartylist
                Object.defineProperty(body[field], 'IsPartyList', {
                    get: function () {
                        if (attribute !== N && attribute.getIsPartyList !== U) {
                            return attribute.getIsPartyList();
                        }
                        else { throw new Error('loadField.IsPartyList'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmax
                Object.defineProperty(body[field], 'Max', {
                    get: function () {
                        if (attribute !== N && attribute.getMax !== U) {
                            return attribute.getMax();
                        }
                        else { throw new Error('loadField.Max'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmaxlength
                Object.defineProperty(body[field], 'MaxLength', {
                    get: function () {
                        if (attribute !== N && attribute.getMaxLength !== U) {
                            return attribute.getMaxLength();
                        }
                        else { throw new Error('loadField.MaxLength'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmin
                Object.defineProperty(body[field], 'Min', {
                    get: function () {
                        if (attribute !== N && attribute.getMin !== U) {
                            return attribute.getMin();
                        }
                        else { throw new Error('loadField.Min'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getname
                Object.defineProperty(body[field], 'Name', {
                    get: function () {
                        if (attribute !== N && attribute.getName !== U) {
                            return attribute.getName();
                        }
                        else { throw new Error('loadField.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoption
                body[field].Option = function (value) {
                    if (attribute !== N && attribute.getOption !== U) {
                        return attribute.getOption(value);
                    }
                    else { throw new Error('loadField.Option'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoptions
                Object.defineProperty(body[field], 'Options', {
                    get: function () {
                        if (attribute !== N && attribute.getOptions !== U) {
                            return attribute.getOptions();
                        }
                        else { throw new Error('loadField.Options'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getparent
                Object.defineProperty(body[field], 'AttributeParent', {
                    get: function () {
                        if (attribute !== N && attribute.getParent !== U) {
                            return attribute.getParent();
                        }
                        else { throw new Error('loadField.AttributeParent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getprecision
                Object.defineProperty(body[field], 'Precision', {
                    get: function () {
                        if (attribute !== N && attribute.getPrecision !== U) {
                            return attribute.getPrecision();
                        }
                        else { throw new Error('loadField.GetPrecision'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setPrecision !== U) {
                            attribute.setPrecision(value);
                        }
                        else { throw new Error('loadField.SetPrecision'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getrequiredlevel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setrequiredlevel
                Object.defineProperty(body[field], 'RequiredLevel', {
                    get: function () {
                        if (attribute !== N && attribute.getRequiredLevel !== U) {
                            return attribute.getRequiredLevel();
                        }
                        else { throw new Error('loadField.GetRequiredLevel'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setRequiredLevel !== U) {
                            attribute.setRequiredLevel(value);
                        }
                        else { throw new Error('loadField.SetRequiredLevel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getselectedoption
                Object.defineProperty(body[field], 'SelectedOption', {
                    get: function () {
                        if (attribute !== N && attribute.getSelectedOption !== U) {
                            return attribute.getSelectedOption();
                        }
                        else { throw new Error('loadField.SelectedOption'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getsubmitmode
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setsubmitmode
                Object.defineProperty(body[field], 'SubmitMode', {
                    get: function () {
                        if (attribute !== N && attribute.getSubmitMode !== U) {
                            return attribute.getSubmitMode();
                        }
                        else { throw new Error('loadField.GetSubmitMode'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setSubmitMode !== U) {
                            attribute.setSubmitMode(value);
                        }
                        else { throw new Error('loadField.SetSubmitMode'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/gettext
                Object.defineProperty(body[field], 'Text', {
                    get: function () {
                        if (attribute !== N && attribute.getText !== U) {
                            return attribute.getText();
                        }
                        else { throw new Error('loadField.Text'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getuserprivilege
                Object.defineProperty(body[field], 'UserPrivilege', {
                    get: function () {
                        if (attribute !== N && attribute.getUserPrivilege !== U) {
                            return attribute.getUserPrivilege();
                        }
                        else { throw new Error('loadField.UserPrivilege'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                Object.defineProperty(body[field], 'Value', {
                    get: function () {
                        if (attribute !== N && attribute.getValue !== U) {
                            return attribute.getValue();
                        }
                        else { throw new Error('loadField.GetValue'); }
                    },
                    set: function (value) {
                        if (attribute !== N && attribute.setValue !== U) {
                            attribute.setValue(value);
                        }
                        else { throw new Error('loadField.SetValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/isvalid
                Object.defineProperty(body[field], 'Valid', {
                    get: function () {
                        if (attribute !== N && attribute.isValid !== U) {
                            return attribute.isValid();
                        }
                        else { throw new Error('loadField.Valid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/removeonchange
                body[field].RemoveOnChange = function (callback) {
                    if (attribute !== N && attribute.removeOnChange !== U) {
                        attribute.removeOnChange(callback);
                    }
                    else { throw new Error('loadField.RemoveOnChange'); }
                };
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomfilter
                body[field].AddCustomFilter = function (filter, entityLogicaName) {
                    if (control !== N && control.addCustomFilter !== U) {
                        control.addCustomFilter(filter, entityLogicaName);
                    }
                    else { throw new Error('loadField.AddCustomFilter'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomview
                body[field].AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
                    if (control !== N && control.addCustomView !== U) {
                        control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
                    }
                    else { throw new Error('loadField.AddCustomView'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addnotification
                body[field].AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
                    if (control !== N && control.addNotification !== U) {
                        var actions = { message: message, actions: [callback] };
                        var notification = { messages: [title], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
                        return control.addNotification(notification);
                    }
                    else { throw new Error('loadField.AddNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonpostsearch
                body[field].AddOnPostSearch = function (callback) {
                    if (control !== N && control.addOnPostSearch !== U) {
                        control.addOnPostSearch(callback);
                    }
                    else { throw new Error('loadField.AddOnPostSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonresultopened
                body[field].AddOnResultOpened = function (callback) {
                    if (control !== N && control.addOnResultOpened !== U) {
                        control.addOnResultOpened(callback);
                    }
                    else { throw new Error('loadField.AddOnResultOpened'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonselection
                body[field].AddOnSelection = function (callback) {
                    if (control !== N && control.addOnSelection !== U) {
                        control.addOnSelection(callback);
                    }
                    else { throw new Error('loadField.AddOnSelection'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addpresearch
                body[field].AddPreSearch = function (callback) {
                    if (control !== N && control.addPreSearch !== U) {
                        control.addPreSearch(callback);
                    }
                    else { throw new Error('loadField.AddPreSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearnotification
                body[field].ClearNotification = function (uniqueId) {
                    if (control !== N && control.clearNotification !== U) {
                        return control.clearNotification(uniqueId);
                    }
                    else { throw new Error('loadField.ClearNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearoptions
                body[field].ClearOptions = function () {
                    if (control !== N && control.clearOptions !== U) {
                        return control.clearOptions();
                    }
                    else { throw new Error('loadField.ClearOptions'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getcontroltype
                Object.defineProperty(body[field], 'ControlType', {
                    get: function () {
                        if (control !== N && control.getControlType !== U) {
                            return control.getControlType();
                        }
                        else { throw new Error('loadField.ControlType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdata
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdata
                Object.defineProperty(body[field], 'Data', {
                    get: function () {
                        if (control !== N && control.getData !== U) {
                            return control.getData();
                        }
                        else { throw new Error('loadField.GetData'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setData !== U) {
                            control.setData(value);
                        }
                        else { throw new Error('loadField.SetData'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdefaultview
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdefaultview
                Object.defineProperty(body[field], 'DefaultView', {
                    get: function () {
                        if (control !== N && control.getDefaultView !== U) {
                            return control.getDefaultView();
                        }
                        else { throw new Error('loadField.GetDefaultView'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setDefaultView !== U) {
                            control.setDefaultView(value);
                        }
                        else { throw new Error('loadField.SetDefaultView'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdisabled
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdisabled
                Object.defineProperty(body[field], 'Disabled', {
                    get: function () {
                        if (control !== N && control.getDisabled !== U) {
                            return control.getDisabled();
                        }
                        else { throw new Error('loadField.GetDisabled'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setDisabled !== U) {
                            control.setDisabled(value);
                        }
                        else { throw new Error('loadField.SetDisabled'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setentitytypes
                Object.defineProperty(body[field], 'EntityTypes', {
                    get: function () {
                        if (control !== N && control.getEntityTypes !== U) {
                            return control.getEntityTypes();
                        }
                        else { throw new Error('loadField.GetEntityTypes'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setEntityTypes !== U) {
                            control.setEntityTypes(value);
                        }
                        else { throw new Error('loadField.SetEntityTypes'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getinitialurl
                Object.defineProperty(body[field], 'InitialUrl', {
                    get: function () {
                        if (control !== N && control.getInitialUrl !== U) {
                            return control.getInitialUrl();
                        }
                        else { throw new Error('loadField.InitialUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setlabel
                Object.defineProperty(body[field], 'Label', {
                    get: function () {
                        if (control !== N && control.getLabel !== U) {
                            return control.getLabel();
                        }
                        else { throw new Error('loadField.GetLabel'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setLabel !== U) {
                            control.setLabel(value);
                        }
                        else { throw new Error('loadField.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getname
                Object.defineProperty(body[field], 'Name2', {
                    get: function () {
                        if (control !== N && control.getName !== U) {
                            return control.getName();
                        }
                        else { throw new Error('loadField.Name2'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getobject
                Object.defineProperty(body[field], 'Object', {
                    get: function () {
                        if (control !== N && control.getObject !== U) {
                            return control.getObject();
                        }
                        else { throw new Error('loadField.Object'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getparent
                Object.defineProperty(body[field], 'ControlParent', {
                    get: function () {
                        if (control !== N && control.getParent !== U) {
                            return control.getParent();
                        }
                        else { throw new Error('loadField.ControlParent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsearchquery
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsearchquery
                Object.defineProperty(body[field], 'SearchQuery', {
                    get: function () {
                        if (control !== N && control.getSearchQuery !== U) {
                            return control.getSearchQuery();
                        }
                        else { throw new Error('loadField.GetSearchQuery'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setSearchQuery !== U) {
                            control.setSearchQuery(value);
                        }
                        else { throw new Error('loadField.SetSearchQuery'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getselectedresults

                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getshowtime
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setshowtime
                Object.defineProperty(body[field], 'ShowTime', {
                    get: function () {
                        if (control !== N && control.getShowTime !== U) {
                            return control.getShowTime();
                        }
                        else { throw new Error('loadField.GetShowTime'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setShowTime !== U) {
                            control.setShowTime(value);
                        }
                        else { throw new Error('loadField.SetShowTime'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsrc
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsrc
                Object.defineProperty(body[field], 'Src', {
                    get: function () {
                        if (control !== N && control.getSrc !== U) {
                            return control.getSrc();
                        }
                        else { throw new Error('loadField.GetSrc'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setSrc !== U) {
                            control.setSrc(value);
                        }
                        else { throw new Error('loadField.SetSrc'); }
                    }

                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getstate
                Object.defineProperty(body[field], 'State', {
                    get: function () {
                        if (control !== N && control.getState !== U) {
                            return control.getState();
                        }
                        else { throw new Error('loadField.State'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/gettotalresultcount
                Object.defineProperty(body[field], 'TotalResultCount', {
                    get: function () {
                        if (control !== N && control.getTotalResultCount !== U) {
                            return control.getTotalResultCount();
                        }
                        else { throw new Error('loadField.TotalResultCount'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                Object.defineProperty(body[field], 'Value2', {
                    get: function () {
                        if (control !== N && control.getValue !== U) {
                            return control.getValue();
                        }
                        else { throw new Error('loadField.Value2'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setvisible
                Object.defineProperty(body[field], 'Visible', {
                    get: function () {
                        if (control !== N && control.getVisible !== U) {
                            return control.getVisible();
                        }
                        else { throw new Error('loadField.GetVisible'); }
                    },
                    set: function (value) {
                        if (control !== N && control.setVisible !== U) {
                            control.setVisible(value);
                        }
                        else { throw new Error('loadField.SetVisible'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/opensearchresult
                body[field].OpenSearchResult = function (resultNumber, mode) {
                    if (control !== N && control.openSearchResult !== U) {
                        return control.openSearchResult(resultNumber, mode);
                    }
                    else { throw new Error('loadField.OpenSearchResult'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/refresh
                body[field].Refresh = function () {
                    if (control !== N && control.refresh !== U) {
                        control.refresh();
                    }
                    else { throw new Error('loadField.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonpostsearch
                body[field].RemoveOnPostSearch = function (callback) {
                    if (control !== N && control.removeOnPostSearch !== U) {
                        control.removeOnPostSearch(callback);
                    }
                    else { throw new Error('loadField.RemoveOnPostSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonresultopened
                body[field].RemoveOnResultOpened = function (callback) {
                    if (control !== N && control.removeOnResultOpened !== U) {
                        control.removeOnResultOpened(callback);
                    }
                    else { throw new Error('loadField.RemoveOnResultOpened'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonselection
                body[field].RemoveOnSelection = function (callback) {
                    if (control !== N && control.removeOnSelection !== U) {
                        control.removeOnSelection(callback);
                    }
                    else { throw new Error('loadField.RemoveOnSelection'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeoption
                body[field].RemoveOption = function (value) {
                    if (control !== N && control.removeOption !== U) {
                        control.removeOption(value);
                    }
                    else { throw new Error('loadField.RemoveOption'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removepresearch
                body[field].RemovePreSearch = function (callback) {
                    if (control !== N && control.removePreSearch !== U) {
                        control.removePreSearch(callback);
                    }
                    else { throw new Error('loadField.RemovePreSearch'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setfocus
                body[field].Focus = function () {
                    if (control !== N && control.setFocus !== U) {
                        control.setFocus();
                    }
                    else { throw new Error('loadField.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setnotification
                body[field].SetNotification = function (message, uniqueId) {
                    if (control !== N && control.setNotification !== U) {
                        return control.setNotification(message, uniqueId);
                    }
                    else { throw new Error('loadField.SetNotification'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addoption
                body[field].AddOption = function (text, value, index) {
                    if (control !== N && control.addOption !== U) {
                        var option = { text: text, value: value };
                        control.addOption(option, index);
                    }
                    else { throw new Error('loadField.AddOption'); }
                };
            }
            function loadFields(formContext, body, type) {
                for (var field in body) {
                    loadField(formContext, body, field, type);
                }
                return body;
            }
            function loadSection(formContext, tab, sections, section) {
                var tabObject = (function () {
                    if (formContext && formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.tabs && Xrm.Page.ui.tabs.get) {
                        return Xrm.Page.ui.tabs.get(tab);
                    }
                    return N;
                })();
                var sectionObject = (function () {
                    if (tabObject !== N && tabObject.sections && tabObject.sections.get) {
                        return tabObject.sections.get(section);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setlabel
                Object.defineProperty(sections[section], 'Label', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getLabel !== U) {
                            return sectionObject.getLabel();
                        }
                        else { throw new Error('loadSection.GetLabel'); }
                    },
                    set: function (value) {
                        if (sectionObject !== N && sectionObject.setLabel !== U) {
                            sectionObject.setLabel(value);
                        }
                        else { throw new Error('loadSection.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getname
                Object.defineProperty(sections[section], 'Name', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getName !== U) {
                            return sectionObject.getName();
                        }
                        else { throw new Error('loadSection.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getparent
                Object.defineProperty(sections[section], 'Parent', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getParent !== U) {
                            return sectionObject.getParent();
                        }
                        else { throw new Error('loadSection.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setvisible
                Object.defineProperty(sections[section], 'Visible', {
                    get: function () {
                        if (sectionObject !== N && sectionObject.getVisible !== U) {
                            return sectionObject.getVisible();
                        }
                        else { throw new Error('loadSection.GetVisible'); }
                    },
                    set: function (value) {
                        if (sectionObject !== N && sectionObject.setVisible !== U) {
                            sectionObject.setVisible(value);
                        }
                        else { throw new Error('loadSection.SetVisible'); }
                    }
                });
            }
            function loadTab(formContext, tabs, tab) {
                var tabObject = (function () {
                    if (formContext && formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.tabs && Xrm.Page.ui.tabs.get) {
                        return Xrm.Page.ui.tabs.get(tab);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/addtabstatechange
                tabs[tab].AddTabStateChange = function (callback) {
                    if (tabObject !== N && tabObject.addTabStateChange !== U) {
                        tabObject.addTabStateChange(callback);
                    }
                    else { throw new Error('loadTab.AddTabStateChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getdisplaystate
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setdisplaystate
                Object.defineProperty(tabs[tab], 'DisplayState', {
                    get: function () {
                        if (tabObject !== N && tabObject.getDisplayState !== U) {
                            return tabObject.getDisplayState();
                        }
                        else { throw new Error('loadTab.GetDisplayState'); }
                    },
                    set: function (value) {
                        if (tabObject !== N && tabObject.setDisplayState !== U) {
                            tabObject.setDisplayState(value);
                        }
                        else { throw new Error('loadTab.SetDisplayState'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setfocus
                tabs[tab].Focus = function () {
                    if (tabObject !== N && tabObject.setFocus !== U) {
                        tabObject.setFocus();
                    }
                    else { throw new Error('loadTab.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setlabel
                Object.defineProperty(tabs[tab], 'Label', {
                    get: function () {
                        if (tabObject !== N && tabObject.getLabel !== U) {
                            return tabObject.getLabel();
                        }
                        else { throw new Error('loadTab.GetLabel'); }
                    },
                    set: function (value) {
                        if (tabObject !== N && tabObject.setLabel !== U) {
                            tabObject.setLabel(value);
                        }
                        else { throw new Error('loadTab.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getname
                Object.defineProperty(tabs[tab], 'Name', {
                    get: function () {
                        if (tabObject !== N && tabObject.getName !== U) {
                            return tabObject.getName();
                        }
                        else { throw new Error('loadTab.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getparent
                Object.defineProperty(tabs[tab], 'Parent', {
                    get: function () {
                        if (tabObject !== N && tabObject.getParent !== U) {
                            return tabObject.getParent();
                        }
                        else { throw new Error('loadTab.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/removetabstatechange
                tabs[tab].RemoveTabStateChange = function (callback) {
                    if (tabObject !== N && tabObject.removeTabStateChange !== U) {
                        tabObject.removeTabStateChange(callback);
                    }
                    else { throw new Error('loadTab.RemoveTabStateChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setvisible
                Object.defineProperty(tabs[tab], 'Visible', {
                    get: function () {
                        if (tabObject !== N && tabObject.getVisible !== U) {
                            return tabObject.getVisible();
                        }
                        else { throw new Error('loadTab.GetVisible'); }
                    },
                    set: function (value) {
                        if (tabObject !== N && tabObject.setVisible !== U) {
                            tabObject.setVisible(value);
                        }
                        else { throw new Error('loadTab.SetVisible'); }
                    }
                });
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
                var navigationItem = (function () {
                    if (formContext && formContext.ui && formContext.ui.navigation && formContext.ui.navigation.items && formContext.ui.navigation.items.get) {
                        return formContext.ui.navigation.items.get(navigation);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.navigation && Xrm.Page.ui.navigation.items && Xrm.Page.ui.navigation.items.get) {
                        return Xrm.Page.ui.navigation.items.get(navigation);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setfocus
                navigations[navigation].Focus = function () {
                    if (navigationItem !== N && navigationItem.setFocus !== U) {
                        navigationItem.setFocus();
                    }
                    else { throw new Error('loadNavigation.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setlabel
                Object.defineProperty(navigations[navigation], 'Label', {
                    get: function () {
                        if (navigationItem !== N && navigationItem.getLabel !== U) {
                            return navigationItem.getLabel();
                        }
                        else { throw new Error('loadNavigation.GetLabel'); }
                    },
                    set: function (value) {
                        if (navigationItem !== N && navigationItem.setLabel !== U) {
                            navigationItem.setLabel(value);
                        }
                        else { throw new Error('loadNavigation.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setvisible
                Object.defineProperty(navigations[navigation], 'Visible', {
                    get: function () {
                        if (navigationItem !== N && navigationItem.getVisible !== U) {
                            return navigationItem.getVisible();
                        }
                        else { throw new Error('loadNavigation.GetVisible'); }
                    },
                    set: function (value) {
                        if (navigationItem !== N && navigationItem.setVisible !== U) {
                            navigationItem.setVisible(value);
                        }
                        else { throw new Error('loadNavigation.SetVisible'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getid
                Object.defineProperty(navigations[navigation], 'Id', {
                    get: function () {
                        if (navigationItem !== N && navigationItem.getId !== U) {
                            return navigationItem.getId();
                        }
                        else { throw new Error('loadNavigation.Id'); }
                    }
                });
            }
            function loadNavigations(formContext, navigations) {
                for (var navigation in navigations) {
                    loadNavigation(formContext, navigations, navigation);
                }
            }
            function loadQuickForm(formContext, quickForms, quickForm) {
                var quickViewControl = (function () {
                    if (formContext && formContext.ui && formContext.ui.quickForms && formContext.ui.quickForms.get) {
                        return formContext.ui.quickForms.get(quickForm);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.quickForms && Xrm.Page.ui.quickForms.get) {
                        return Xrm.Page.ui.quickForms.get(quickForm);
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getcontroltype
                Object.defineProperty(quickForms[quickForm], 'ControlType', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getControlType !== U) {
                            return quickViewControl.getControlType();
                        }
                        else { throw new Error('loadQuickForm.ControlType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setfocus
                quickForms[quickForm].Focus = function () {
                    if (quickViewControl !== N && quickViewControl.setFocus !== U) {
                        quickViewControl.setFocus();
                    }
                    else { throw new Error('loadQuickForm.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setlabel
                Object.defineProperty(quickForms[quickForm], 'Label', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getLabel !== U) {
                            return quickViewControl.getLabel();
                        }
                        else { throw new Error('loadQuickForm.GetLabel'); }
                    },
                    set: function (value) {
                        if (quickViewControl !== N && quickViewControl.setLabel !== U) {
                            quickViewControl.setLabel(value);
                        }
                        else { throw new Error('loadQuickForm.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/isloaded
                quickForms[quickForm].IsLoaded = function () {
                    if (quickViewControl !== N && quickViewControl.isLoaded !== U) {
                        return quickViewControl.isLoaded();
                    }
                    else { throw new Error('loadQuickForm.IsLoaded'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getname
                Object.defineProperty(quickForms[quickForm], 'Name', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getName !== U) {
                            return quickViewControl.getName();
                        }
                        else { throw new Error('loadQuickForm.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getparent
                Object.defineProperty(quickForms[quickForm], 'Parent', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getParent !== U) {
                            return quickViewControl.getParent();
                        }
                        else { throw new Error('loadQuickForm.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/refresh
                quickForms[quickForm].Refresh = function () {
                    if (quickViewControl !== N && quickViewControl.refresh !== U) {
                        quickViewControl.refresh();
                    }
                    else { throw new Error('loadQuickForm.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getvisible
                Object.defineProperty(quickForms[quickForm], 'Visible', {
                    get: function () {
                        if (quickViewControl !== N && quickViewControl.getVisible !== U) {
                            return quickViewControl.getVisible();
                        }
                        else { throw new Error('loadQuickForm.Visible'); }
                    }
                });
            }
            function loadQuickForms(formContext, quickForms) {
                for (var quickForm in quickForms) {
                    loadQuickForm(formContext, quickForms, quickForm);
                }
            }
            function loadUtility(defaultWebResourceName) {
                var utility = {};
                var getUtility = (function () {
                    if (Xrm && Xrm.Utility) {
                        return Xrm.Utility;
                    }
                    return N;
                })();
                var getGlobalContext = (function () {
                    if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext) {
                        return Xrm.Utility.getGlobalContext();
                    }
                    return N;
                })();
                var getNavigation = (function () {
                    if (Xrm && Xrm.Navigation) {
                        return Xrm.Navigation;
                    }
                    return N;
                })();
                var getPanel = (function () {
                    if (Xrm && Xrm.Panel) {
                        return Xrm.Panel;
                    }
                    return N;
                })();
                var getEncoding = (function () {
                    if (Xrm && Xrm.Encoding) {
                        return Xrm.Encoding;
                    }
                    return N;
                })();
                var getDevice = (function () {
                    if (Xrm && Xrm.Device) {
                        return Xrm.Device;
                    }
                    return N;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/closeprogressindicator
                utility.CloseProgressIndicator = function () {
                    if (getUtility !== N && getUtility.closeProgressIndicator !== U) {
                        getUtility.closeProgressIndicator();
                    }
                    else { throw new Error('loadUtility.CloseProgressIndicator'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getallowedstatustransitions
                utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.getAllowedStatusTransitions !== U) {
                        getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.AllowedStatusTransitions'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
                utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.getEntityMetadata !== U) {
                        getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.EntityMetadata'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getlearningpathattributename
                Object.defineProperty(utility, 'LearningPathAttributeName', {
                    get: function () {
                        if (getUtility !== N && getUtility.getLearningPathAttributeName !== U) {
                            return getUtility.getLearningPathAttributeName();
                        }
                        else { throw new Error('loadUtility.LearningPathAttributeName'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
                utility.ResourceString = function (webResourceName, key) {
                    if (getUtility !== N && getUtility.getResourceString !== U) {
                        return getUtility.getResourceString(webResourceName, key);
                    }
                    else { throw new Error('loadUtility.ResourceString'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
                utility.Resource = function (key) {
                    if (getUtility !== N && getUtility.getResourceString !== U) {
                        if (defaultWebResourceName !== U) {
                            return getUtility.getResourceString(defaultWebResourceName, key);
                        }
                        else { throw new Error('loadUtility.Resource - defaultWebResourceName null'); }
                    }
                    else { throw new Error('loadUtility.Resource'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction
                utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.invokeProcessAction !== U) {
                        getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.InvokeProcessAction'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/lookupobjects
                utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
                    if (getUtility !== N && getUtility.lookupObjects !== U) {
                        getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.LookupObjects'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/refreshparentgrid
                utility.RefreshParentGrid = function (lookupOptions) {
                    if (getUtility !== N && getUtility.refreshParentGrid !== U) {
                        getUtility.refreshParentGrid(lookupOptions);
                    }
                    else { throw new Error('loadUtility.RefreshParentGrid'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/showprogressindicator
                utility.ShowProgressIndicator = function (message) {
                    if (getUtility !== N && getUtility.showProgressIndicator !== U) {
                        getUtility.showProgressIndicator(message);
                    }
                    else { throw new Error('loadUtility.ShowProgressIndicator'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
                utility.AdvancedConfigSetting = function (setting) {
                    if (getGlobalContext !== N && getGlobalContext.getAdvancedConfigSetting !== U) {
                        return getGlobalContext.getAdvancedConfigSetting(setting);
                    }
                    else { throw new Error('loadUtility.AdvancedConfigSetting'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
                Object.defineProperty(utility, 'ClientUrl', {
                    get: function () {
                        if (getGlobalContext !== N && getGlobalContext.getClientUrl !== U) {
                            return getGlobalContext.getClientUrl();
                        }
                        else { throw new Error('loadUtility.ClientUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
                utility.CurrentAppName = function (successCallback, errorCallback) {
                    if (getGlobalContext !== N && getGlobalContext.getCurrentAppName !== U) {
                        getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentAppName'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
                utility.CurrentAppProperties = function (successCallback, errorCallback) {
                    if (getGlobalContext !== N && getGlobalContext.getCurrentAppProperties !== U) {
                        getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentAppProperties'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
                Object.defineProperty(utility, 'CurrentAppUrl', {
                    get: function () {
                        if (getGlobalContext !== N && getGlobalContext.getCurrentAppUrl !== U) {
                            return getGlobalContext.getCurrentAppUrl();
                        }
                        else { throw new Error('loadUtility.CurrentAppUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getversion
                Object.defineProperty(utility, 'Version', {
                    get: function () {
                        if (getGlobalContext !== N && getGlobalContext.getVersion !== U) {
                            return getGlobalContext.getVersion();
                        }
                        else { throw new Error('loadUtility.Version'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
                utility.IsOnPremises = function (successCallback, errorCallback) {
                    if (getGlobalContext !== N && getGlobalContext.isOnPremises !== U) {
                        return getGlobalContext.isOnPremises();
                    }
                    else { throw new Error('loadUtility.IsOnPremises'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
                utility.PrependOrgName = function (sPath) {
                    if (getGlobalContext !== N && getGlobalContext.prependOrgName !== U) {
                        return getGlobalContext.prependOrgName(sPath);
                    }
                    else { throw new Error('loadUtility.PrependOrgName'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openalertdialog
                utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openAlertDialog !== U) {
                        getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenAlertDialog'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openconfirmdialog
                utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openConfirmDialog !== U) {
                        getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenConfirmDialog'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openerrordialog
                utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openErrorDialog !== U) {
                        getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenErrorDialog'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openfile
                utility.OpenFile = function (file, openFileOptions) {
                    if (getNavigation !== N && getNavigation.openFile !== U) {
                        getNavigation.openFile(file, openFileOptions);
                    }
                    else { throw new Error('loadUtility.OpenFile'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
                utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
                    if (getNavigation !== N && getNavigation.openForm !== U) {
                        getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenForm'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openurl
                utility.OpenUrl = function (url, openUrlOptions) {
                    if (getNavigation !== N && getNavigation.openUrl !== U) {
                        getNavigation.openUrl(url, openUrlOptions);
                    }
                    else { throw new Error('loadUtility.OpenUrl'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openwebresource
                utility.OpenWebResource = function (webResourceName, windowOptions, data) {
                    if (getNavigation !== N && getNavigation.openWebResource !== U) {
                        getNavigation.openWebResource(webResourceName, windowOptions, data);
                    }
                    else { throw new Error('loadUtility.OpenWebResource'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel
                utility.LoadPanel = function (url, title) {
                    if (getPanel !== N && getPanel.loadPanel !== U) {
                        getPanel.loadPanel(url, title);
                    }
                    else { throw new Error('loadUtility.LoadPanel'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlattributeencode
                utility.XmlAttributeEncode = function (arg) {
                    if (getEncoding !== N && getEncoding.xmlAttributeEncode !== U) {
                        return getEncoding.xmlAttributeEncode(arg);
                    }
                    else { throw new Error('loadUtility.XmlAttributeEncode'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlencode
                utility.XmlEncode = function (arg) {
                    if (getEncoding !== N && getEncoding.xmlEncode !== U) {
                        return getEncoding.xmlEncode(arg);
                    }
                    else { throw new Error('loadUtility.XmlEncode'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureaudio
                utility.CaptureAudio = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.captureAudio !== U) {
                        getDevice.captureAudio().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureAudio'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureimage
                utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.captureImage !== U) {
                        getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureImage'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/capturevideo
                utility.CaptureVideo = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.captureVideo !== U) {
                        getDevice.captureVideo().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureVideo'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getbarcodevalue
                utility.BarcodeValue = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.getBarcodeValue !== U) {
                        getDevice.getBarcodeValue().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.BarcodeValue'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getcurrentposition
                utility.CurrentPosition = function (successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.getCurrentPosition !== U) {
                        getDevice.getCurrentPosition().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentPosition'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/pickfile
                utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
                    if (getDevice !== N && getDevice.pickFile !== U) {
                        getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.PickFile'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client
                Object.defineProperty(utility, 'Client', {
                    get: function () {
                        var client = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().client) {
                                return Xrm.Utility.getGlobalContext().client;
                            }
                            return N;
                        })();
                        var Client = {};
                        Object.defineProperty(Client, 'ClientName', {
                            get: function () {
                                if (client !== N && client.getClient !== U) {
                                    return client.getClient();
                                }
                                else { throw new Error('loadUtility.ClientName'); }
                            }
                        });
                        Object.defineProperty(Client, 'ClientState', {
                            get: function () {
                                if (client !== N && client.getClientState !== U) {
                                    return client.getClientState();
                                }
                                else { throw new Error('loadUtility.ClientState'); }
                            }
                        });
                        Object.defineProperty(Client, 'FormFactor', {
                            get: function () {
                                if (client !== N && client.getFormFactor !== U) {
                                    return client.getFormFactor();
                                }
                                else { throw new Error('loadUtility.FormFactor'); }
                            }
                        });
                        Client.IsOffline = function () {
                            if (client !== N && client.isOffline !== U) {
                                return client.isOffline();
                            }
                            else { throw new Error('loadUtility.IsOffline'); }
                        };
                        return Client;
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
                Object.defineProperty(utility, 'OrganizationSettings', {
                    get: function () {
                        var organizationSettings = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().organizationSettings) {
                                return Xrm.Utility.getGlobalContext().organizationSettings;
                            }
                            return N;
                        })();
                        var OrganizationSettings = {};
                        Object.defineProperty(OrganizationSettings, 'Attributes', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.attributes !== U) {
                                    return organizationSettings.attributes;
                                }
                                else { throw new Error('loadUtility.Attributes'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'BaseCurrencyId', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.baseCurrencyId !== U) {
                                    return organizationSettings.baseCurrencyId;
                                }
                                else { throw new Error('loadUtility.BaseCurrencyId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'DefaultCountryCode', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.defaultCountryCode !== U) {
                                    return organizationSettings.defaultCountryCode;
                                }
                                else { throw new Error('loadUtility.DefaultCountryCode'); }
                            }
                        });
                        OrganizationSettings.IsAutoSaveEnabled = function () {
                            if (organizationSettings !== N && organizationSettings.isAutoSaveEnabled !== U) {
                                return organizationSettings.isAutoSaveEnabled;
                            }
                            else { throw new Error('loadUtility.IsAutoSaveEnabled'); }
                        };
                        Object.defineProperty(OrganizationSettings, 'LanguageId', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.languageId !== U) {
                                    return organizationSettings.languageId;
                                }
                                else { throw new Error('loadUtility.LanguageId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'OrganizationId', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.organizationId !== U) {
                                    return organizationSettings.organizationId;
                                }
                                else { throw new Error('loadUtility.OrganizationId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'UniqueName', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.uniqueName !== U) {
                                    return organizationSettings.uniqueName;
                                }
                                else { throw new Error('loadUtility.UniqueName'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'UseSkypeProtocol', {
                            get: function () {
                                if (organizationSettings !== N && organizationSettings.useSkypeProtocol !== U) {
                                    return organizationSettings.useSkypeProtocol;
                                }
                                else { throw new Error('loadUtility.UseSkypeProtocol'); }
                            }
                        });
                        return OrganizationSettings;
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/usersettings
                Object.defineProperty(utility, 'UserSettings', {
                    get: function () {
                        var userSettings = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().userSettings) {
                                return Xrm.Utility.getGlobalContext().userSettings;
                            }
                            return N;
                        })();
                        var UserSettings = {};
                        Object.defineProperty(UserSettings, 'DateFormattingInfo', {
                            get: function () {
                                if (userSettings !== N && userSettings.dateFormattingInfo !== U) {
                                    return userSettings.dateFormattingInfo;
                                }
                                else { throw new Error('loadUtility.DateFormattingInfo'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'DefaultDashboardId', {
                            get: function () {
                                if (userSettings !== N && userSettings.defaultDashboardId !== U) {
                                    return userSettings.defaultDashboardId;
                                }
                                else { throw new Error('loadUtility.DefaultDashboardId'); }
                            }
                        });
                        UserSettings.IsGuidedHelpEnabled = function () {
                            if (userSettings !== N && userSettings.isGuidedHelpEnabled !== U) {
                                return userSettings.isGuidedHelpEnabled;
                            }
                            else { throw new Error('loadUtility.IsGuidedHelpEnabled'); }
                        };
                        UserSettings.IsHighContrastEnabled = function () {
                            if (userSettings !== N && userSettings.isHighContrastEnabled !== U) {
                                return userSettings.isHighContrastEnabled;
                            }
                            else { throw new Error('loadUtility.IsHighContrastEnabled'); }
                        };
                        UserSettings.IsRTL = function () {
                            if (userSettings !== N && userSettings.isRTL !== U) {
                                return userSettings.isRTL;
                            }
                            else { throw new Error('loadUtility.IsRTL'); }
                        };
                        Object.defineProperty(UserSettings, 'LanguageId', {
                            get: function () {
                                if (userSettings !== N && userSettings.languageId !== U) {
                                    return userSettings.languageId;
                                }
                                else { throw new Error('loadUtility.LanguageId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'SecurityRolePrivileges', {
                            get: function () {
                                if (userSettings !== N && userSettings.securityRolePrivileges !== U) {
                                    return userSettings.securityRolePrivileges;
                                }
                                else { throw new Error('loadUtility.SecurityRolePrivileges'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'SecurityRoles', {
                            get: function () {
                                if (userSettings !== N && userSettings.securityRoles !== U) {
                                    return userSettings.securityRoles;
                                }
                                else { throw new Error('loadUtility.SecurityRoles'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'TransactionCurrencyId', {
                            get: function () {
                                if (userSettings !== N && userSettings.transactionCurrencyId !== U) {
                                    return userSettings.transactionCurrencyId;
                                }
                                else { throw new Error('loadUtility.TransactionCurrencyId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'UserId', {
                            get: function () {
                                if (userSettings !== N && userSettings.userId !== U) {
                                    return userSettings.userId;
                                }
                                else { throw new Error('loadUtility.UserId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'UserName', {
                            get: function () {
                                if (userSettings !== N && userSettings.userName !== U) {
                                    return userSettings.userName;
                                }
                                else { throw new Error('loadUtility.UserName'); }
                            }
                        });
                        UserSettings.TimeZoneOffsetMinutes = function () {
                            if (userSettings !== N && userSettings.getTimeZoneOffsetMinutes !== U) {
                                return userSettings.getTimeZoneOffsetMinutes();
                            }
                            else { throw new Error('loadUtility.TimeZoneOffsetMinutes'); }
                        };
                        return UserSettings;
                    }
                });
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
	LuckeyMonkey.FormOpportunity = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			adx_AcceptedDate: {},
			adx_DealRegistrationRequestId: {},
			adx_DeliveredDate: {},
			adx_ExpiryDate: {},
			adx_FeedbackYet: {},
			adx_LeadTypeId: {},
			adx_PartnerCollaboration: {},
			adx_PartnerCreated: {},
			adx_ReadyforDistribution: {},
			adx_ReasonforReturn: {},
			adx_TerritoryId: {},
			adx_WonDate: {},
			BudgetAmount: {},
			CampaignId: {},
			CurrentSituation: {},
			CustomerNeed: {},
			DiscountAmount: {},
			DiscountPercentage: {},
			FreightAmount: {},
			IsRevenueSystemCalculated: {},
			msa_partnerid: {},
			msa_partneroppid: {},
			msdyn_OrderType: {},
			msdyn_WorkOrderType: {},
			Name: {},
			OriginatingLeadId: {},
			ParentAccountId: {},
			ParentContactId: {},
			PriceLevelId: {},
			ProposedSolution: {},
			PurchaseProcess: {},
			PurchaseTimeframe: {},
			TotalAmount: {},
			TotalAmountLessFreight: {},
			TotalLineItemAmount: {},
			TotalTax: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Summary: {
				Section: {
					opportunity_information: {},
					Opportunity_details: {},
					Notes_pane: {},
					Summary_section_6: {},
					Social_pane: {}
				}
			},
			VersiumPredictInsights: {
				Section: {
					tab_5_section_1: {}
				}
			},
			linkedinmemberprofile: {
				Section: {
					linkedinmemberprofilesection: {}
				}
			},
			Product_Line_Items: {
				Section: {
					opportunityproducts: {},
					DynamicProperties: {},
					suggestionsection: {},
					totals: {}
				}
			},
			linkedincompanyprofile: {
				Section: {
					linkedincompanyprofilesection: {}
				}
			},
			QUOTES: {
				Section: {
					opportunityquotes: {}
				}
			},
			Partner_Details: {
				Section: {
					general_section_3: {},
					Section_PartnerCollaboration: {},
					Partner_Details_section_3: {},
					internal_information: {}
				}
			},
			FieldService: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			EstimatedCloseDate: {},
			EstimatedValue: {},
			OwnerId: {},
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			navActivities: {},
			navOrders: {},
			navRelationship: {},
			navInvoices: {},
			navComp: {},
			nav_msdyn_opportunity_msdyn_workorder: {},
			navAsyncOperations: {},
			navProcessSessions: {},
			navConnections: {},
			navAudit: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		var optionSet = {
			adx_OpportunitySource : {
				Distributed: 100000000,
				Partner_Created: 100000001
			},
			adx_ReasonforReturn : {
				No_Interest: 100000000,
				No_Response: 100000001,
				Purchase_Timeframe__12_months: 100000002,
				Purchased_from_Competitor: 100000003,
				Purchased_from_other_Partner: 100000004,
				No_Funding: 100000005,
				Bad_Contact_Info: 100000006
			},
			BudgetStatus : {
				No_Committed_Budget: 0,
				May_Buy: 1,
				Can_Buy: 2,
				Will_Buy: 3
			},
			InitialCommunication : {
				Contacted: 0,
				Not_Contacted: 1
			},
			msdyn_OrderType : {
				Work_based: 192350001,
				Item_based: 192350000,
				Service_Maintenance_Based: 690970002
			},
			Need : {
				Must_have: 0,
				Should_have: 1,
				Good_to_have: 2,
				No_need: 3
			},
			OpportunityRatingCode : {
				Hot: 1,
				Warm: 2,
				Cold: 3
			},
			PricingErrorCode : {
				None: 0,
				Detail_Error: 1,
				Missing_Price_Level: 2,
				Inactive_Price_Level: 3,
				Missing_Quantity: 4,
				Missing_Unit_Price: 5,
				Missing_Product: 6,
				Invalid_Product: 7,
				Missing_Pricing_Code: 8,
				Invalid_Pricing_Code: 9,
				Missing_UOM: 10,
				Product_Not_In_Price_Level: 11,
				Missing_Price_Level_Amount: 12,
				Missing_Price_Level_Percentage: 13,
				Missing_Price: 14,
				Missing_Current_Cost: 15,
				Missing_Standard_Cost: 16,
				Invalid_Price_Level_Amount: 17,
				Invalid_Price_Level_Percentage: 18,
				Invalid_Price: 19,
				Invalid_Current_Cost: 20,
				Invalid_Standard_Cost: 21,
				Invalid_Rounding_Policy: 22,
				Invalid_Rounding_Option: 23,
				Invalid_Rounding_Amount: 24,
				Price_Calculation_Error: 25,
				Invalid_Discount_Type: 26,
				Discount_Type_Invalid_State: 27,
				Invalid_Discount: 28,
				Invalid_Quantity: 29,
				Invalid_Pricing_Precision: 30,
				Missing_Product_Default_UOM: 31,
				Missing_Product_UOM_Schedule_: 32,
				Inactive_Discount_Type: 33,
				Invalid_Price_Level_Currency: 34,
				Price_Attribute_Out_Of_Range: 35,
				Base_Currency_Attribute_Overflow: 36,
				Base_Currency_Attribute_Underflow: 37,
				Transaction_currency_is_not_set_for_the_product_price_list_item: 38
			},
			PriorityCode : {
				Default_Value: 1
			},
			PurchaseProcess : {
				Individual: 0,
				Committee: 1,
				Unknown: 2
			},
			PurchaseTimeframe : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Unknown: 4
			},
			SalesStage : {
				Qualify: 0,
				Develop: 1,
				Propose: 2,
				Close: 3
			},
			SalesStageCode : {
				_1_Prospect: 1,
				_2_Contacting: 100000000,
				_3_Interest_Confirmed: 100000001,
				_4_Quoting: 100000002,
				_5_Closing: 100000003
			},
			StateCode : {
				Open: 0,
				Won: 1,
				Lost: 2
			},
			StatusCode : {
				Delivered: 100000001,
				Accepted: 100000003,
				Declined: 100000006,
				Returned: 756150000,
				Expired: 100000007,
				Purchased: 100000004,
				In_Progress: 1,
				On_Hold: 2,
				Open_for_Bidding: 200000,
				Won: 3,
				Canceled: 4,
				Out_Sold: 5
			},
			TimeLine : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Not_known: 4
			}
		};
		form.OptionSet = optionSet;
		return form;
	};
	LuckeyMonkey.FormQuickCreate = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var tab = {
			newOpportunity: {
				Section: {
					quickOpportunity_column1: {},
					quickOpportunity_column2: {},
					quickOpportunity_column3: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		form.Tab = tab;
		var body = {
			BudgetAmount: {},
			CustomerNeed: {},
			EstimatedCloseDate: {},
			EstimatedValue: {},
			msdyn_ContractOrganizationalUnitId: {},
			msdyn_OrderType: {},
			Name: {},
			ParentAccountId: {},
			ParentContactId: {}
		}
		devKit.LoadFields(formContext, body);
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		var optionSet = {
			adx_OpportunitySource : {
				Distributed: 100000000,
				Partner_Created: 100000001
			},
			adx_ReasonforReturn : {
				No_Interest: 100000000,
				No_Response: 100000001,
				Purchase_Timeframe__12_months: 100000002,
				Purchased_from_Competitor: 100000003,
				Purchased_from_other_Partner: 100000004,
				No_Funding: 100000005,
				Bad_Contact_Info: 100000006
			},
			BudgetStatus : {
				No_Committed_Budget: 0,
				May_Buy: 1,
				Can_Buy: 2,
				Will_Buy: 3
			},
			InitialCommunication : {
				Contacted: 0,
				Not_Contacted: 1
			},
			msdyn_OrderType : {
				Work_based: 192350001,
				Item_based: 192350000,
				Service_Maintenance_Based: 690970002
			},
			Need : {
				Must_have: 0,
				Should_have: 1,
				Good_to_have: 2,
				No_need: 3
			},
			OpportunityRatingCode : {
				Hot: 1,
				Warm: 2,
				Cold: 3
			},
			PricingErrorCode : {
				None: 0,
				Detail_Error: 1,
				Missing_Price_Level: 2,
				Inactive_Price_Level: 3,
				Missing_Quantity: 4,
				Missing_Unit_Price: 5,
				Missing_Product: 6,
				Invalid_Product: 7,
				Missing_Pricing_Code: 8,
				Invalid_Pricing_Code: 9,
				Missing_UOM: 10,
				Product_Not_In_Price_Level: 11,
				Missing_Price_Level_Amount: 12,
				Missing_Price_Level_Percentage: 13,
				Missing_Price: 14,
				Missing_Current_Cost: 15,
				Missing_Standard_Cost: 16,
				Invalid_Price_Level_Amount: 17,
				Invalid_Price_Level_Percentage: 18,
				Invalid_Price: 19,
				Invalid_Current_Cost: 20,
				Invalid_Standard_Cost: 21,
				Invalid_Rounding_Policy: 22,
				Invalid_Rounding_Option: 23,
				Invalid_Rounding_Amount: 24,
				Price_Calculation_Error: 25,
				Invalid_Discount_Type: 26,
				Discount_Type_Invalid_State: 27,
				Invalid_Discount: 28,
				Invalid_Quantity: 29,
				Invalid_Pricing_Precision: 30,
				Missing_Product_Default_UOM: 31,
				Missing_Product_UOM_Schedule_: 32,
				Inactive_Discount_Type: 33,
				Invalid_Price_Level_Currency: 34,
				Price_Attribute_Out_Of_Range: 35,
				Base_Currency_Attribute_Overflow: 36,
				Base_Currency_Attribute_Underflow: 37,
				Transaction_currency_is_not_set_for_the_product_price_list_item: 38
			},
			PriorityCode : {
				Default_Value: 1
			},
			PurchaseProcess : {
				Individual: 0,
				Committee: 1,
				Unknown: 2
			},
			PurchaseTimeframe : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Unknown: 4
			},
			SalesStage : {
				Qualify: 0,
				Develop: 1,
				Propose: 2,
				Close: 3
			},
			SalesStageCode : {
				_1_Prospect: 1,
				_2_Contacting: 100000000,
				_3_Interest_Confirmed: 100000001,
				_4_Quoting: 100000002,
				_5_Closing: 100000003
			},
			StateCode : {
				Open: 0,
				Won: 1,
				Lost: 2
			},
			StatusCode : {
				Delivered: 100000001,
				Accepted: 100000003,
				Declined: 100000006,
				Returned: 756150000,
				Expired: 100000007,
				Purchased: 100000004,
				In_Progress: 1,
				On_Hold: 2,
				Open_for_Bidding: 200000,
				Won: 3,
				Canceled: 4,
				Out_Sold: 5
			},
			TimeLine : {
				Immediate: 0,
				This_Quarter: 1,
				Next_Quarter: 2,
				This_Year: 3,
				Not_known: 4
			}
		};
		form.OptionSet = optionSet;
		return form;
	}
})(LuckeyMonkey || (LuckeyMonkey = {}));
var OptionSet = {
    FormType: {
        Undefined: 0,
        Create: 1,
        Update: 2,
        ReadOnly: 3,
        Disabled: 4,
        BulkEdit: 5
    },
    SaveOption: {
        SaveAndClose: 'saveandclose',
        SaveAndNew: 'saveandnew'
    },
    SaveMode: {
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
    },
    FormNotificationLevel: {
        Error: 'ERROR',
        Warning: 'WARNING',
        Info: 'INFO'
    },
    TabDisplayState: {
        Expanded: 'expanded',
        Collapsed: 'collapsed'
    },
    ProcessDisplayState: {
        Expanded: 'expanded',
        Collapsed: 'collapsed',
        Floating: 'floating'
    },
    ProcessStatus: {
        Active: 'active',
        Aborted: 'aborted',
        Finished: 'finished'
    },
    FieldAttributeType: {
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
    },
    FieldFormat: {
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
    },
    FieldRequiredLevel: {
        None: 'none',
        Required: 'required',
        Recommended: 'recommended'
    },
    FieldSubmitMode: {
        Always: 'always',
        Never: 'never',
        Dirty: 'dirty'
    },
    FieldControlType: {
        Standard: 'standard',
        Iframe: 'iframe',
        KbSearch: 'kbsearch',
        Lookup: 'lookup',
        MultiSelectOptionset: 'multiselectoptionset',
        Notes: 'notes',
        OptionSet: 'optionset',
        QuickForm: 'quickform',
        SubGrid: 'subgrid',
        TimerControl: 'TimerControl',
        TimelineWall: 'timelinewall',
        WebResource: 'webresource'
    },
    FieldNotificationLevel: {
        Error: 'ERROR',
        Recommendation: 'RECOMMENDATION'
    },
    ProcessCategory: {
        Qualify: 0,
        Develop: 1,
        Propose: 2,
        Close: 3,
        Identify: 4,
        Research: 5,
        Resolve: 6
    },
    TimerState: {
        NotSet: 1,
        InProgress: 2,
        Warning: 3,
        Violated: 4,
        Success: 5,
        Expired: 6,
        Canceled: 7,
        Paused: 8
    },
    ClientName: {
        Web: 'Web',
        Outlook: 'Outlook',
        Mobile: 'Mobile'
    },
    ClientState: {
        Online: 'Online',
        Offline: 'Offline'
    },
    FormFactor: {
        Unknown: 0,
        Desktop: 1,
        Tablet: 2,
        Phone: 3
    },
    AdvancedConfigSetting: {
        MaxChildIncidentNumber: 'MaxChildIncidentNumber',
        MaxIncidentMergeNumber: 'MaxIncidentMergeNumber'
    },
    OpenFileOption: {
        Open: 1,
        Save: 2
    }
};