        var devKit = (function () {
            'use strict';
            var EMPTY_STRING = '';
            var EMPTY_GUID = '{00000000-0000-0000-0000-000000000000}';
            function loadForm(formContext) {
                var form = {};
                var contextData = (function () {
                    if (formContext && formContext.data) {
                        return formContext.data;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data) {
                        return Xrm.Page.data;
                    }
                    return null;
                })();
                var contextDataEntity = (function () {
                    if (formContext && formContext.data && formContext.data.entity) {
                        return formContext.data.entity;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data && Xrm.Page.data.entity) {
                        return Xrm.Page.data.entity;
                    }
                    return null;
                })();
                var contextUi = (function () {
                    if (formContext && formContext.ui) {
                        return formContext.ui;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui) {
                        return Xrm.Page.ui;
                    }
                    return null;
                })();
                var contextUiFormSelector = (function () {
                    if (formContext && formContext.ui && formContext.ui.formSelector) {
                        return formContext.ui.formSelector;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.formSelector) {
                        return Xrm.Page.ui.formSelector;
                    }
                    return null;
                })();
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/addonload
                form.AddOnLoad = function (callback) {
                    if (contextData !== null && contextData.addOnLoad !== undefined) {
                        contextData.addOnLoad(callback);
                    }
                    else { throw new Error('loadForm.AddOnLoad'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/getisdirty
                Object.defineProperty(form, 'IsDirty', {
                    get: function () {
                        if (contextData !== null && contextData.getIsDirty !== undefined) {
                            return contextData.getIsDirty();
                        }
                        else { throw new Error('loadForm.IsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/isvalid
                Object.defineProperty(form, 'IsValid', {
                    get: function () {
                        if (contextData !== null && contextData.isValid !== undefined) {
                            return contextData.isValid();
                        }
                        else { throw new Error('loadForm.IsValid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/refresh
                form.Refresh = function (save, successCallback, errorCallback) {
                    if (contextData !== null && contextData.refresh !== undefined) {
                        contextData.refresh(save).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadForm.Refresh'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/removeonload
                form.RemoveOnLoad = function (callback) {
                    if (contextData !== null && contextData.removeOnLoad !== undefined) {
                        contextData.removeOnLoad(callback);
                    }
                    else { throw new Error('loadForm.RemoveOnLoad'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data/save
                form.Save = function (saveOptions, successCallback, errorCallback) {
                    if (contextData !== null && contextData.save !== undefined) {
                        contextData.save(saveOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadForm.Save'); }
                }
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/addonsave
                form.AddOnSave = function (callback) {
                    if (contextDataEntity !== null && contextDataEntity.addOnSave !== undefined) {
                        contextDataEntity.addOnSave(callback);
                    }
                    else { throw new Error('loadForm.AddOnSave'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getdataxml
                Object.defineProperty(form, 'DataXml', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.getDataXml !== undefined) {
                            return contextDataEntity.getDataXml();
                        }
                        else { throw new Error('loadForm.DataXml'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityname
                Object.defineProperty(form, 'EntityName', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.getEntityName !== undefined) {
                            return contextDataEntity.getEntityName();
                        }
                        else { throw new Error('loadForm.DataXml'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getentityreference
                Object.defineProperty(form, 'EntityReference', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.getEntityReference !== undefined) {
                            return contextDataEntity.getEntityReference();
                        }
                        else { throw new Error('loadForm.EntityReference'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getid
                Object.defineProperty(form, 'EntityId', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.getId !== undefined) {
                            return contextDataEntity.getId();
                        }
                        else { throw new Error('loadForm.EntityId'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getisdirty
                Object.defineProperty(form, 'EntityIsDirty', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.getIsDirty !== undefined) {
                            return contextDataEntity.getIsDirty();
                        }
                        else { throw new Error('loadForm.EntityIsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/getprimaryattributevalue
                Object.defineProperty(form, 'PrimaryAttributeValue', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.getPrimaryAttributeValue !== undefined) {
                            return contextDataEntity.getPrimaryAttributeValue();
                        }
                        else { throw new Error('loadForm.PrimaryAttributeValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/isvalid
                Object.defineProperty(form, 'EntityIsValid', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.isValid !== undefined) {
                            return contextDataEntity.isValid();
                        }
                        else { throw new Error('loadForm.EntityIsValid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/removeonsave
                form.RemoveOnSave = function (callback) {
                    if (contextDataEntity !== null && contextDataEntity.removeOnSave !== undefined) {
                        contextDataEntity.removeOnSave(callback);
                    }
                    else { throw new Error('loadForm.RemoveOnSave'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-entity/save
                form.EntitySave = function (saveOption) {
                    if (contextDataEntity !== null && contextDataEntity.save !== undefined) {
                        contextDataEntity.save(saveOption);
                    }
                    else { throw new Error('loadForm.EntitySave'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
                Object.defineProperty(form, 'Attributes', {
                    get: function () {
                        if (contextDataEntity !== null && contextDataEntity.attributes) {
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
                    if (contextUi !== null && contextUi.clearFormNotification !== undefined) {
                        contextUi.clearFormNotification(uniqueId);
                    }
                    else { throw new Error('loadForm.ClearFormNotification'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/close
                form.Close = function () {
                    if (contextUi !== null && contextUi.close !== undefined) {
                        contextUi.close();
                    }
                    else { throw new Error('loadForm.Close'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getformtype
                Object.defineProperty(form, 'FormType', {
                    get: function () {
                        if (contextUi !== null && contextUi.getFormType !== undefined) {
                            return contextUi.getFormType();
                        }
                        else { throw new Error('loadForm.FormType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportheight
                Object.defineProperty(form, 'ViewPortHeight', {
                    get: function () {
                        if (contextUi !== null && contextUi.getViewPortHeight !== undefined) {
                            return contextUi.getViewPortHeight();
                        }
                        else { throw new Error('loadForm.ViewPortHeight'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/getviewportwidth
                Object.defineProperty(form, 'ViewPortWidth', {
                    get: function () {
                        if (contextUi !== null && contextUi.getViewPortWidth !== undefined) {
                            return contextUi.getViewPortWidth();
                        }
                        else { throw new Error('loadForm.ViewPortWidth'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/refreshribbon
                form.RefreshRibbon = function (refreshAll) {
                    if (contextUi !== null && contextUi.refreshRibbon !== undefined) {
                        contextUi.refreshRibbon(refreshAll);
                    }
                    else { throw new Error('loadForm.RefreshRibbon'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui/setformnotification
                form.SetFormNotification = function (message, level, uniqueId) {
                    if (contextUi !== null && contextUi.setFormNotification !== undefined) {
                        return contextUi.setFormNotification(message, level, uniqueId);
                    }
                    else { throw new Error('loadForm.SetFormNotification'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
                Object.defineProperty(form, 'Controls', {
                    get: function () {
                        if (contextUi !== null && contextUi.controls !== undefined) {
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
                        if (contextUiFormSelector !== null && contextUiFormSelector.getCurrentItem !== null && contextUiFormSelector.getCurrentItem().getId !== undefined) {
                            return contextUiFormSelector.getCurrentItem().getId();
                        }
                        else { throw new Error('loadForm.FormId'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/getlabel
                Object.defineProperty(form, 'FormLabel', {
                    get: function () {
                        if (contextUiFormSelector !== null && contextUiFormSelector.getCurrentItem !== null && contextUiFormSelector.getCurrentItem().getLabel !== undefined) {
                            return contextUiFormSelector.getCurrentItem().getLabel();
                        }
                        else { throw new Error('loadForm.FormLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-formselector/navigate
                form.FormNavigate = function (formId) {
                    if (contextUiFormSelector !== null && contextUiFormSelector.items !== null && contextUiFormSelector.items.get !== undefined) {
                        var formItem = contextUiFormSelector.items.get(formId);
                        if (formItem !== null) {
                            formItem.navigate();
                        }
                    }
                    else { throw new Error('loadForm.FormNavigate'); }
                };
                return form;
            };
            function loadProcess(formContext) {
                var process = {};
                var getProcess = (function () {
                    if (formContext && formContext.data && formContext.data.process) {
                        return formContext.data.process;
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.data && Xrm.Page.data.process) {
                        return Xrm.Page.data.process;
                    }
                    return null;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activepath/getactivepath
                Object.defineProperty(process, 'ActivePath', {
                    get: function () {
                        if (getProcess !== null && getProcess.getActivePath !== undefined) {
                            return getProcess.getActivePath();
                        }
                        else { throw new Error('loadProcess.ActivePath'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/getactiveprocess
                Object.defineProperty(process, 'ActiveProcess', {
                    get: function () {
                        if (getProcess !== null && getProcess.getActiveProcess !== undefined) {
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
                        else { throw new Error('loadProcess.ActiveProcess'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/getactivestage
                Object.defineProperty(process, 'ActiveStage', {
                    get: function () {
                        if (getProcess !== null && getProcess.getActiveStage !== undefined) {
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
                        else { throw new Error('loadProcess.ActiveStage'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonprocessstatuschange
                process.AddOnProcessStatusChange = function (callback) {
                    if (getProcess !== null && getProcess.addOnProcessStatusChange !== undefined) {
                        getProcess.addOnProcessStatusChange(callback);
                    }
                    else { throw new Error('loadProcess.AddOnProcessStatusChange'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstagechange
                process.AddOnStageChange = function (callback) {
                    if (getProcess !== null && getProcess.addOnStageChange !== undefined) {
                        getProcess.addOnStageChange(callback);
                    }
                    else { throw new Error('loadProcess.AddOnStageChange'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/addonstageselected
                process.AddOnStageSelected = function (callback) {
                    if (getProcess !== null && getProcess.addOnStageSelected !== undefined) {
                        getProcess.addOnStageSelected(callback);
                    }
                    else { throw new Error('loadProcess.AddOnStageSelected'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getenabledprocesses
                process.EnabledProcesses = function (callback) {
                    if (getProcess !== null && getProcess.getEnabledProcesses !== undefined) {
                        getProcess.getEnabledProcesses(callback);
                    }
                    else { throw new Error('loadProcess.EnabledProcesses'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/movenext
                process.MoveNext = function (callback) {
                    if (getProcess !== null && getProcess.moveNext !== undefined) {
                        getProcess.moveNext(callback);
                    }
                    else { throw new Error('loadProcess.MoveNext'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/navigation/moveprevious
                process.MovePrevious = function (callback) {
                    if (getProcess !== null && getProcess.movePrevious !== undefined) {
                        getProcess.movePrevious(callback);
                    }
                    else { throw new Error('loadProcess.MovePrevious'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getprocessinstances
                process.ProcessInstances = function (callback) {
                    if (getProcess !== null && getProcess.getProcessInstances !== undefined) {
                        getProcess.getProcessInstances(callback);
                    }
                    else { throw new Error('loadProcess.ProcessInstances'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonprocessstatuschange
                process.RemoveOnProcessStatusChange = function (callback) {
                    if (getProcess !== null && getProcess.removeOnProcessStatusChange !== undefined) {
                        getProcess.removeOnProcessStatusChange(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnProcessStatusChange'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstagechange
                process.RemoveOnStageChange = function (callback) {
                    if (getProcess !== null && getProcess.removeOnStageChange !== undefined) {
                        getProcess.removeOnStageChange(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnStageChange'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/eventhandlers/removeonstageselected
                process.RemoveOnStageSelected = function (callback) {
                    if (getProcess !== null && getProcess.removeOnStageSelected !== undefined) {
                        getProcess.removeOnStageSelected(callback);
                    }
                    else { throw new Error('loadProcess.RemoveOnStageSelected'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/getselectedstage
                Object.defineProperty(process, 'SelectedStage', {
                    get: function () {
                        if (getProcess !== null && getProcess.getSelectedStage !== undefined) {
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
                        else { throw new Error('loadProcess.SelectedStage'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activeprocess/setactiveprocess
                process.SetActiveProcess = function (processId, callback) {
                    if (getProcess !== null && getProcess.setActiveProcess !== undefined) {
                        getProcess.setActiveProcess(processId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveProcess'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/setactiveprocessinstance
                process.SetActiveProcessInstance = function (processInstanceId, callback) {
                    if (getProcess !== null && getProcess.setActiveProcessInstance !== undefined) {
                        getProcess.setActiveProcessInstance(processInstanceId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveProcessInstance'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-data-process/activestage/setactivestage
                process.SetActiveStage = function (stageId, callback) {
                    if (getProcess !== null && getProcess.setActiveStage !== undefined) {
                        getProcess.setActiveStage(stageId, callback);
                    }
                    else { throw new Error('loadProcess.SetActiveStage'); }
                }
                return process;
            };
            function loadField(formContext, body, field, type) {
                var logicalName = (function () {
                    if (type === undefined) return field.toLowerCase();
                    return (type + field).toLowerCase();
                })();
                var control = (function () {
                    if (formContext && formContext.getControl) {
                        return formContext.getControl(logicalName);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.getControl) {
                        return Xrm.Page.getControl(logicalName);
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
                            if (control.getAttribute === undefined) {
                                return null;
                            }
                            if (control.getAttribute) {
                                return control.getAttribute();
                            }
                        }
                        if (formContext.getAttribute) {
                            return formContext.getAttribute(logicalName);
                        }
                        return null;
                    }
                    else {
                        if (type !== undefined) {
                            if (control == null) {
                                if (Xrm && Xrm.Page && Xrm.Page.getAttribute) {
                                    return Xrm.Page.getAttribute(logicalName);
                                }
                                return null;
                            }
                            if (control.getAttribute === undefined) {
                                return null;
                            }
                            if (control.getAttribute) {
                                return control.getAttribute();
                            }
                            return null;
                        }
                        if (Xrm && Xrm.Page && Xrm.Page.getAttribute) {
                            return Xrm.Page.getAttribute(logicalName);
                        }
                        return null;
                    }
                })();
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/addonchange
                body[field].AddOnChange = function (callback) {
                    if (attribute !== null && attribute.addOnChange !== undefined) {
                        attribute.addOnChange(callback);
                    }
                    else { throw new Error('loadField.AddOnChange'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/fireonchange
                body[field].FireOnChange = function () {
                    if (attribute !== null && attribute.fireOnChange !== undefined) {
                        attribute.fireOnChange();
                    }
                    else { throw new Error('loadField.FireOnChange'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getattributetype
                Object.defineProperty(body[field], 'AttributeType', {
                    get: function () {
                        if (attribute !== null && attribute.getAttributeType !== undefined) {
                            return attribute.getAttributeType();
                        }
                        else { throw new Error('loadField.AttributeType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getformat
                Object.defineProperty(body[field], 'Format', {
                    get: function () {
                        if (attribute !== null && attribute.getFormat !== undefined) {
                            return attribute.getFormat();
                        }
                        else { throw new Error('loadField.Format'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getinitialvalue
                Object.defineProperty(body[field], 'InitialValue', {
                    get: function () {
                        if (attribute !== null && attribute.getInitialValue !== undefined) {
                            return attribute.getInitialValue();
                        }
                        else { throw new Error('loadField.InitialValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getisdirty
                Object.defineProperty(body[field], 'IsDirty', {
                    get: function () {
                        if (attribute !== null && attribute.getIsDirty !== undefined) {
                            return attribute.getIsDirty();
                        }
                        else { throw new Error('loadField.IsDirty'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getispartylist
                Object.defineProperty(body[field], 'IsPartyList', {
                    get: function () {
                        if (attribute !== null && attribute.getIsPartyList !== undefined) {
                            return attribute.getIsPartyList();
                        }
                        else { throw new Error('loadField.IsPartyList'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmax
                Object.defineProperty(body[field], 'Max', {
                    get: function () {
                        if (attribute !== null && attribute.getMax !== undefined) {
                            return attribute.getMax();
                        }
                        else { throw new Error('loadField.Max'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmaxlength
                Object.defineProperty(body[field], 'MaxLength', {
                    get: function () {
                        if (attribute !== null && attribute.getMaxLength !== undefined) {
                            return attribute.getMaxLength();
                        }
                        else { throw new Error('loadField.MaxLength'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getmin
                Object.defineProperty(body[field], 'Min', {
                    get: function () {
                        if (attribute !== null && attribute.getMin !== undefined) {
                            return attribute.getMin();
                        }
                        else { throw new Error('loadField.Min'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getname
                Object.defineProperty(body[field], 'Name', {
                    get: function () {
                        if (attribute !== null && attribute.getName !== undefined) {
                            return attribute.getName();
                        }
                        else { throw new Error('loadField.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoption
                body[field].Option = function (value) {
                    if (attribute !== null && attribute.getOption !== undefined) {
                        return attribute.getOption(value);
                    }
                    else { throw new Error('loadField.Option'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getoptions
                Object.defineProperty(body[field], 'Options', {
                    get: function () {
                        if (attribute !== null && attribute.getOptions !== undefined) {
                            return attribute.getOptions();
                        }
                        else { throw new Error('loadField.Options'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getparent
                Object.defineProperty(body[field], 'AttributeParent', {
                    get: function () {
                        if (attribute !== null && attribute.getParent !== undefined) {
                            return attribute.getParent();
                        }
                        else { throw new Error('loadField.AttributeParent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getprecision
                Object.defineProperty(body[field], 'Precision', {
                    get: function () {
                        if (attribute !== null && attribute.getPrecision !== undefined) {
                            return attribute.getPrecision();
                        }
                        else { throw new Error('loadField.GetPrecision'); }
                    },
                    set: function (value) {
                        if (attribute !== null && attribute.setPrecision !== undefined) {
                            attribute.setPrecision(value);
                        }
                        else { throw new Error('loadField.SetPrecision'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getrequiredlevel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setrequiredlevel
                Object.defineProperty(body[field], 'RequiredLevel', {
                    get: function () {
                        if (attribute !== null && attribute.getRequiredLevel !== undefined) {
                            return attribute.getRequiredLevel();
                        }
                        else { throw new Error('loadField.GetRequiredLevel'); }
                    },
                    set: function (value) {
                        if (attribute !== null && attribute.setRequiredLevel !== undefined) {
                            attribute.setRequiredLevel(value);
                        }
                        else { throw new Error('loadField.SetRequiredLevel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getselectedoption
                Object.defineProperty(body[field], 'SelectedOption', {
                    get: function () {
                        if (attribute !== null && attribute.getSelectedOption !== undefined) {
                            return attribute.getSelectedOption();
                        }
                        else { throw new Error('loadField.SelectedOption'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getsubmitmode
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setsubmitmode
                Object.defineProperty(body[field], 'SubmitMode', {
                    get: function () {
                        if (attribute !== null && attribute.getSubmitMode !== undefined) {
                            return attribute.getSubmitMode();
                        }
                        else { throw new Error('loadField.GetSubmitMode'); }
                    },
                    set: function (value) {
                        if (attribute !== null && attribute.setSubmitMode !== undefined) {
                            attribute.setSubmitMode(value);
                        }
                        else { throw new Error('loadField.SetSubmitMode'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/gettext
                Object.defineProperty(body[field], 'Text', {
                    get: function () {
                        if (attribute !== null && attribute.getText !== undefined) {
                            return attribute.getText();
                        }
                        else { throw new Error('loadField.Text'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getuserprivilege
                Object.defineProperty(body[field], 'UserPrivilege', {
                    get: function () {
                        if (attribute !== null && attribute.getUserPrivilege !== undefined) {
                            return attribute.getUserPrivilege();
                        }
                        else { throw new Error('loadField.UserPrivilege'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/getvalue
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/setvalue
                Object.defineProperty(body[field], 'Value', {
                    get: function () {
                        if (attribute !== null && attribute.getValue !== undefined) {
                            return attribute.getValue();
                        }
                        else { throw new Error('loadField.GetValue'); }
                    },
                    set: function (value) {
                        if (attribute !== null && attribute.setValue !== undefined) {
                            attribute.setValue(value);
                        }
                        else { throw new Error('loadField.SetValue'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/isvalid
                Object.defineProperty(body[field], 'Valid', {
                    get: function () {
                        if (attribute !== null && attribute.isValid !== undefined) {
                            return attribute.isValid();
                        }
                        else { throw new Error('loadField.Valid'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/attributes/removeonchange
                body[field].RemoveOnChange = function (callback) {
                    if (attribute !== null && attribute.removeOnChange !== undefined) {
                        attribute.removeOnChange(callback);
                    }
                    else { throw new Error('loadField.RemoveOnChange'); }
                }
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls
                //******************************************************************************************************************************
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomfilter
                body[field].AddCustomFilter = function (filter, entityLogicaName) {
                    if (control !== null && control.addCustomFilter !== undefined) {
                        control.addCustomFilter(filter, entityLogicaName);
                    }
                    else { throw new Error('loadField.AddCustomFilter'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addcustomview
                body[field].AddCustomView = function (viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
                    if (control !== null && control.addCustomView !== undefined) {
                        control.addCustomView(viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault);
                    }
                    else { throw new Error('loadField.AddCustomView'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addnotification
                body[field].AddNotification = function (title, message, notificationLevel, uniqueId, callback) {
                    if (control !== null && control.addNotification !== undefined) {
                        var actions = { message: message, actions: [callback] };
                        var notification = { messages: [title], notificationLevel: notificationLevel, uniqueId: uniqueId, actions: [actions] };
                        return control.addNotification(notification);
                    }
                    else { throw new Error('loadField.AddNotification'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonpostsearch
                body[field].AddOnPostSearch = function (callback) {
                    if (control !== null && control.addOnPostSearch !== undefined) {
                        control.addOnPostSearch(callback);
                    }
                    else { throw new Error('loadField.AddOnPostSearch'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonresultopened
                body[field].AddOnResultOpened = function (callback) {
                    if (control !== null && control.addOnResultOpened !== undefined) {
                        control.addOnResultOpened(callback);
                    }
                    else { throw new Error('loadField.AddOnResultOpened'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addonselection
                body[field].AddOnSelection = function (callback) {
                    if (control !== null && control.addOnSelection !== undefined) {
                        control.addOnSelection(callback);
                    }
                    else { throw new Error('loadField.AddOnSelection'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addpresearch
                body[field].AddPreSearch = function (callback) {
                    if (control !== null && control.addPreSearch !== undefined) {
                        control.addPreSearch(callback);
                    }
                    else { throw new Error('loadField.AddPreSearch'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearnotification
                body[field].ClearNotification = function (uniqueId) {
                    if (control !== null && control.clearNotification !== undefined) {
                        return control.clearNotification(uniqueId);
                    }
                    else { throw new Error('loadField.ClearNotification'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/clearoptions
                body[field].ClearOptions = function () {
                    if (control !== null && control.clearOptions !== undefined) {
                        return control.clearOptions();
                    }
                    else { throw new Error('loadField.ClearOptions'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getcontroltype
                Object.defineProperty(body[field], 'ControlType', {
                    get: function () {
                        if (control !== null && control.getControlType !== undefined) {
                            return control.getControlType();
                        }
                        else { throw new Error('loadField.ControlType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdata
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdata
                Object.defineProperty(body[field], 'Data', {
                    get: function () {
                        if (control !== null && control.getData !== undefined) {
                            return control.getData();
                        }
                        else { throw new Error('loadField.GetData'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setData !== undefined) {
                            control.setData(value);
                        }
                        else { throw new Error('loadField.SetData'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdefaultview
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdefaultview
                Object.defineProperty(body[field], 'DefaultView', {
                    get: function () {
                        if (control !== null && control.getDefaultView !== undefined) {
                            return control.getDefaultView();
                        }
                        else { throw new Error('loadField.GetDefaultView'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setDefaultView !== undefined) {
                            control.setDefaultView(value);
                        }
                        else { throw new Error('loadField.SetDefaultView'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getdisabled
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setdisabled
                Object.defineProperty(body[field], 'Disabled', {
                    get: function () {
                        if (control !== null && control.getDisabled !== undefined) {
                            return control.getDisabled();
                        }
                        else { throw new Error('loadField.GetDisabled'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setDisabled !== undefined) {
                            control.setDisabled(value);
                        }
                        else { throw new Error('loadField.SetDisabled'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setentitytypes
                Object.defineProperty(body[field], 'EntityTypes', {
                    get: function () {
                        if (control !== null && control.getEntityTypes !== undefined) {
                            return control.getEntityTypes();
                        }
                        else { throw new Error('loadField.GetEntityTypes'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setEntityTypes !== undefined) {
                            control.setEntityTypes(value);
                        }
                        else { throw new Error('loadField.SetEntityTypes'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getinitialurl
                Object.defineProperty(body[field], 'InitialUrl', {
                    get: function () {
                        if (control !== null && control.getInitialUrl !== undefined) {
                            return control.getInitialUrl();
                        }
                        else { throw new Error('loadField.InitialUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setlabel
                Object.defineProperty(body[field], 'Label', {
                    get: function () {
                        if (control !== null && control.getLabel !== undefined) {
                            return control.getLabel();
                        }
                        else { throw new Error('loadField.GetLabel'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setLabel !== undefined) {
                            control.setLabel(value);
                        }
                        else { throw new Error('loadField.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getname
                Object.defineProperty(body[field], 'Name2', {
                    get: function () {
                        if (control !== null && control.getName !== undefined) {
                            return control.getName();
                        }
                        else { throw new Error('loadField.Name2'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getobject
                Object.defineProperty(body[field], 'Object', {
                    get: function () {
                        if (control !== null && control.getObject !== undefined) {
                            return control.getObject();
                        }
                        else { throw new Error('loadField.Object'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getparent
                Object.defineProperty(body[field], 'ControlParent', {
                    get: function () {
                        if (control !== null && control.getParent !== undefined) {
                            return control.getParent();
                        }
                        else { throw new Error('loadField.ControlParent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsearchquery
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsearchquery
                Object.defineProperty(body[field], 'SearchQuery', {
                    get: function () {
                        if (control !== null && control.getSearchQuery !== undefined) {
                            return control.getSearchQuery();
                        }
                        else { throw new Error('loadField.GetSearchQuery'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setSearchQuery !== undefined) {
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
                        if (control !== null && control.getShowTime !== undefined) {
                            return control.getShowTime();
                        }
                        else { throw new Error('loadField.GetShowTime'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setShowTime !== undefined) {
                            control.setShowTime(value);
                        }
                        else { throw new Error('loadField.SetShowTime'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getsrc
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setsrc
                Object.defineProperty(body[field], 'Src', {
                    get: function () {
                        if (control !== null && control.getSrc !== undefined) {
                            return control.getSrc();
                        }
                        else { throw new Error('loadField.GetSrc'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setSrc !== undefined) {
                            control.setSrc(value);
                        }
                        else { throw new Error('loadField.SetSrc'); }
                    }

                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getstate
                Object.defineProperty(body[field], 'State', {
                    get: function () {
                        if (control !== null && control.getState !== undefined) {
                            return control.getState();
                        }
                        else { throw new Error('loadField.State'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/gettotalresultcount
                Object.defineProperty(body[field], 'TotalResultCount', {
                    get: function () {
                        if (control !== null && control.getTotalResultCount !== undefined) {
                            return control.getTotalResultCount();
                        }
                        else { throw new Error('loadField.TotalResultCount'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvalue
                Object.defineProperty(body[field], 'Value2', {
                    get: function () {
                        if (control !== null && control.getValue !== undefined) {
                            return control.getValue();
                        }
                        else { throw new Error('loadField.Value2'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setvisible
                Object.defineProperty(body[field], 'Visible', {
                    get: function () {
                        if (control !== null && control.getVisible !== undefined) {
                            return control.getVisible();
                        }
                        else { throw new Error('loadField.GetVisible'); }
                    },
                    set: function (value) {
                        if (control !== null && control.setVisible !== undefined) {
                            control.setVisible(value);
                        }
                        else { throw new Error('loadField.SetVisible'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/opensearchresult
                body[field].OpenSearchResult = function (resultNumber, mode) {
                    if (control !== null && control.openSearchResult !== undefined) {
                        return control.openSearchResult(resultNumber, mode);
                    }
                    else { throw new Error('loadField.OpenSearchResult'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/refresh
                body[field].Refresh = function () {
                    if (control !== null && control.refresh !== undefined) {
                        control.refresh();
                    }
                    else { throw new Error('loadField.Refresh'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonpostsearch
                body[field].RemoveOnPostSearch = function (callback) {
                    if (control !== null && control.removeOnPostSearch !== undefined) {
                        control.removeOnPostSearch(callback);
                    }
                    else { throw new Error('loadField.RemoveOnPostSearch'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonresultopened
                body[field].RemoveOnResultOpened = function (callback) {
                    if (control !== null && control.removeOnResultOpened !== undefined) {
                        control.removeOnResultOpened(callback);
                    }
                    else { throw new Error('loadField.RemoveOnResultOpened'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeonselection
                body[field].RemoveOnSelection = function (callback) {
                    if (control !== null && control.removeOnSelection !== undefined) {
                        control.removeOnSelection(callback);
                    }
                    else { throw new Error('loadField.RemoveOnSelection'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removeoption
                body[field].RemoveOption = function (value) {
                    if (control !== null && control.removeOption !== undefined) {
                        control.removeOption(value);
                    }
                    else { throw new Error('loadField.RemoveOption'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/removepresearch
                body[field].RemovePreSearch = function (callback) {
                    if (control !== null && control.removePreSearch !== undefined) {
                        control.removePreSearch(callback);
                    }
                    else { throw new Error('loadField.RemovePreSearch'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setfocus
                body[field].Focus = function () {
                    if (control !== null && control.setFocus !== undefined) {
                        control.setFocus();
                    }
                    else { throw new Error('loadField.Focus'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/setnotification
                body[field].SetNotification = function (message, uniqueId) {
                    if (control !== null && control.setNotification !== undefined) {
                        return control.setNotification(message, uniqueId);
                    }
                    else { throw new Error('loadField.SetNotification'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/controls/addoption
                body[field].AddOption = function (text, value, index) {
                    if (control !== null && control.addOption !== undefined) {
                        var option = { text: text, value: value };
                        control.addOption(option, index);
                    }
                    else { throw new Error('loadField.AddOption'); }
                }
            };
            function loadFields(formContext, body, type) {
                for (var field in body) {
                    loadField(formContext, body, field, type);
                }
                return body;
            };
            function loadSection(formContext, tab, sections, section) {
                var tabObject = (function () {
                    if (formContext && formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.tabs && Xrm.Page.ui.tabs.get) {
                        return Xrm.Page.ui.tabs.get(tab);
                    }
                    return null;
                })();
                var sectionObject = (function () {
                    if (tabObject !== null && tabObject.sections && tabObject.sections.get) {
                        return tabObject.sections.get(section);
                    }
                    return null;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setlabel
                Object.defineProperty(sections[section], 'Label', {
                    get: function () {
                        if (sectionObject !== null && sectionObject.getLabel !== undefined) {
                            return sectionObject.getLabel();
                        }
                        else { throw new Error('loadSection.GetLabel'); }
                    },
                    set: function (value) {
                        if (sectionObject !== null && sectionObject.setLabel !== undefined) {
                            sectionObject.setLabel(value);
                        }
                        else { throw new Error('loadSection.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getname
                Object.defineProperty(sections[section], 'Name', {
                    get: function () {
                        if (sectionObject !== null && sectionObject.getName !== undefined) {
                            return sectionObject.getName();
                        }
                        else { throw new Error('loadSection.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getparent
                Object.defineProperty(sections[section], 'Parent', {
                    get: function () {
                        if (sectionObject !== null && sectionObject.getParent !== undefined) {
                            return sectionObject.getParent();
                        }
                        else { throw new Error('loadSection.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-sections/setvisible
                Object.defineProperty(sections[section], 'Visible', {
                    get: function () {
                        if (sectionObject !== null && sectionObject.getVisible !== undefined) {
                            return sectionObject.getVisible();
                        }
                        else { throw new Error('loadSection.GetVisible'); }
                    },
                    set: function (value) {
                        if (sectionObject !== null && sectionObject.setVisible !== undefined) {
                            sectionObject.setVisible(value);
                        }
                        else { throw new Error('loadSection.SetVisible'); }
                    }
                });
            };
            function loadTab(formContext, tabs, tab) {
                var tabObject = (function () {
                    if (formContext && formContext.ui && formContext.ui.tabs && formContext.ui.tabs.get) {
                        return formContext.ui.tabs.get(tab);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.tabs && Xrm.Page.ui.tabs.get) {
                        return Xrm.Page.ui.tabs.get(tab);
                    }
                    return null;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/addtabstatechange
                tabs[tab].AddTabStateChange = function (callback) {
                    if (tabObject !== null && tabObject.addTabStateChange !== undefined) {
                        tabObject.addTabStateChange(callback);
                    }
                    else { throw new Error('loadTab.AddTabStateChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getdisplaystate
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setdisplaystate
                Object.defineProperty(tabs[tab], 'DisplayState', {
                    get: function () {
                        if (tabObject !== null && tabObject.getDisplayState !== undefined) {
                            return tabObject.getDisplayState();
                        }
                        else { throw new Error('loadTab.GetDisplayState'); }
                    },
                    set: function (value) {
                        if (tabObject !== null && tabObject.setDisplayState !== undefined) {
                            tabObject.setDisplayState(value);
                        }
                        else { throw new Error('loadTab.SetDisplayState'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setfocus
                tabs[tab].Focus = function () {
                    if (tabObject !== null && tabObject.setFocus !== undefined) {
                        tabObject.setFocus();
                    }
                    else { throw new Error('loadTab.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setlabel
                Object.defineProperty(tabs[tab], 'Label', {
                    get: function () {
                        if (tabObject !== null && tabObject.getLabel !== undefined) {
                            return tabObject.getLabel();
                        }
                        else { throw new Error('loadTab.GetLabel'); }
                    },
                    set: function (value) {
                        if (tabObject !== null && tabObject.setLabel !== undefined) {
                            tabObject.setLabel(value);
                        }
                        else { throw new Error('loadTab.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getname
                Object.defineProperty(tabs[tab], 'Name', {
                    get: function () {
                        if (tabObject !== null && tabObject.getName !== undefined) {
                            return tabObject.getName();
                        }
                        else { throw new Error('loadTab.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getparent
                Object.defineProperty(tabs[tab], 'Parent', {
                    get: function () {
                        if (tabObject !== null && tabObject.getParent !== undefined) {
                            return tabObject.getParent();
                        }
                        else { throw new Error('loadTab.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/removetabstatechange
                tabs[tab].RemoveTabStateChange = function (callback) {
                    if (tabObject !== null && tabObject.removeTabStateChange !== undefined) {
                        tabObject.removeTabStateChange(callback);
                    }
                    else { throw new Error('loadTab.RemoveTabStateChange'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-tabs/setvisible
                Object.defineProperty(tabs[tab], 'Visible', {
                    get: function () {
                        if (tabObject !== null && tabObject.getVisible !== undefined) {
                            return tabObject.getVisible();
                        }
                        else { throw new Error('loadTab.GetVisible'); }
                    },
                    set: function (value) {
                        if (tabObject !== null && tabObject.setVisible !== undefined) {
                            tabObject.setVisible(value);
                        }
                        else { throw new Error('loadTab.SetVisible'); }
                    }
                });
                for (var section in tabs[tab].Section) {
                    loadSection(formContext, tab, tabs[tab].Section, section);
                }
            };
            function loadTabs(formContext, tabs) {
                for (var tab in tabs) {
                    loadTab(formContext, tabs, tab);
                }
            };
            function loadNavigation(formContext, navigations, navigation) {
                var navigationItem = (function () {
                    if (formContext && formContext.ui && formContext.ui.navigation && formContext.ui.navigation.items && formContext.ui.navigation.items.get) {
                        return formContext.ui.navigation.items.get(navigation);
                    }
                    if (Xrm && Xrm.Page && Xrm.Page.ui && Xrm.Page.ui.navigation && Xrm.Page.ui.navigation.items && Xrm.Page.ui.navigation.items.get) {
                        return Xrm.Page.ui.navigation.items.get(navigation);
                    }
                    return null;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setfocus
                navigations[navigation].Focus = function () {
                    if (navigationItem !== null && navigationItem.setFocus !== undefined) {
                        navigationItem.setFocus();
                    }
                    else { throw new Error('loadNavigation.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setlabel
                Object.defineProperty(navigations[navigation], 'Label', {
                    get: function () {
                        if (navigationItem !== null && navigationItem.getLabel !== undefined) {
                            return navigationItem.getLabel();
                        }
                        else { throw new Error('loadNavigation.GetLabel'); }
                    },
                    set: function (value) {
                        if (navigationItem !== null && navigationItem.setLabel !== undefined) {
                            navigationItem.setLabel(value);
                        }
                        else { throw new Error('loadNavigation.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getvisible
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/setvisible
                Object.defineProperty(navigations[navigation], 'Visible', {
                    get: function () {
                        if (navigationItem !== null && navigationItem.getVisible !== undefined) {
                            return navigationItem.getVisible();
                        }
                        else { throw new Error('loadNavigation.GetVisible'); }
                    },
                    set: function (value) {
                        if (navigationItem !== null && navigationItem.setVisible !== undefined) {
                            navigationItem.setVisible(value);
                        }
                        else { throw new Error('loadNavigation.SetVisible'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-navigation/getid
                Object.defineProperty(navigations[navigation], 'Id', {
                    get: function () {
                        if (navigationItem !== null && navigationItem.getId !== undefined) {
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
                    return null;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getcontroltype
                Object.defineProperty(quickForms[quickForm], 'ControlType', {
                    get: function () {
                        if (quickViewControl !== null && quickViewControl.getControlType !== undefined) {
                            return quickViewControl.getControlType();
                        }
                        else { throw new Error('loadQuickForm.ControlType'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setfocus
                quickForms[quickForm].Focus = function () {
                    if (quickViewControl !== null && quickViewControl.setFocus !== undefined) {
                        quickViewControl.setFocus();
                    }
                    else { throw new Error('loadQuickForm.Focus'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getlabel
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/setlabel
                Object.defineProperty(quickForms[quickForm], 'Label', {
                    get: function () {
                        if (quickViewControl !== null && quickViewControl.getLabel !== undefined) {
                            return quickViewControl.getLabel();
                        }
                        else { throw new Error('loadQuickForm.GetLabel'); }
                    },
                    set: function (value) {
                        if (quickViewControl !== null && quickViewControl.setLabel !== undefined) {
                            quickViewControl.setLabel(value);
                        }
                        else { throw new Error('loadQuickForm.SetLabel'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/isloaded
                quickForms[quickForm].IsLoaded = function () {
                    if (quickViewControl !== null && quickViewControl.isLoaded !== undefined) {
                        return quickViewControl.isLoaded();
                    }
                    else { throw new Error('loadQuickForm.IsLoaded'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getname
                Object.defineProperty(quickForms[quickForm], 'Name', {
                    get: function () {
                        if (quickViewControl !== null && quickViewControl.getName !== undefined) {
                            return quickViewControl.getName();
                        }
                        else { throw new Error('loadQuickForm.Name'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getparent
                Object.defineProperty(quickForms[quickForm], 'Parent', {
                    get: function () {
                        if (quickViewControl !== null && quickViewControl.getParent !== undefined) {
                            return quickViewControl.getParent();
                        }
                        else { throw new Error('loadQuickForm.Parent'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/refresh
                quickForms[quickForm].Refresh = function () {
                    if (quickViewControl !== null && quickViewControl.refresh !== undefined) {
                        quickViewControl.refresh();
                    }
                    else { throw new Error('loadQuickForm.Refresh'); }
                };
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/formcontext-ui-quickforms/getvisible
                Object.defineProperty(quickForms[quickForm], 'Visible', {
                    get: function () {
                        if (quickViewControl !== null && quickViewControl.getVisible !== undefined) {
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
            function loadUtility() {
                var utility = {};
                var getUtility = (function () {
                    if (Xrm && Xrm.Utility) {
                        return Xrm.Utility
                    }
                    return null;
                })();
                var getGlobalContext = (function () {
                    if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext) {
                        return Xrm.Utility.getGlobalContext();
                    }
                    return null;
                })();
                var getNavigation = (function () {
                    if (Xrm && Xrm.Navigation) {
                        return Xrm.Navigation;
                    }
                    return null;
                })();
                var getPanel = (function () {
                    if (Xrm && Xrm.Panel) {
                        return Xrm.Panel;
                    }
                    return null;
                })();
                var getEncoding = (function () {
                    if (Xrm && Xrm.Encoding) {
                        return Xrm.Encoding;
                    }
                    return null;
                })();
                var getDevice = (function () {
                    if (Xrm && Xrm.Device) {
                        return Xrm.Device;
                    }
                    return null;
                })();
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/closeprogressindicator
                utility.CloseProgressIndicator = function () {
                    if (getUtility !== null && getUtility.closeProgressIndicator !== undefined) {
                        getUtility.closeProgressIndicator();
                    }
                    else { throw new Error('loadUtility.CloseProgressIndicator'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getallowedstatustransitions
                utility.AllowedStatusTransitions = function (entityName, stateCode, successCallback, errorCallback) {
                    if (getUtility !== null && getUtility.getAllowedStatusTransitions !== undefined) {
                        getUtility.getAllowedStatusTransitions(entityName, stateCode).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.AllowedStatusTransitions'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getentitymetadata
                utility.EntityMetadata = function (entityName, attributes, successCallback, errorCallback) {
                    if (getUtility !== null && getUtility.getEntityMetadata !== undefined) {
                        getUtility.getEntityMetadata(entityName, attributes).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.EntityMetadata'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getlearningpathattributename
                Object.defineProperty(utility, 'LearningPathAttributeName', {
                    get: function () {
                        if (getUtility !== null && getUtility.getLearningPathAttributeName !== undefined) {
                            return getUtility.getLearningPathAttributeName();
                        }
                        else { throw new Error('loadUtility.LearningPathAttributeName'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getresourcestring
                utility.ResourceString = function (webResourceName, key) {
                    if (getUtility !== null && getUtility.getResourceString !== undefined) {
                        getUtility.getResourceString(webResourceName, key);
                    }
                    else { throw new Error('loadUtility.ResourceString'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/invokeprocessaction
                utility.InvokeProcessAction = function (name, parameters, successCallback, errorCallback) {
                    if (getUtility !== null && getUtility.invokeProcessAction !== undefined) {
                        getUtility.invokeProcessAction(name, parameters).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.InvokeProcessAction'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/lookupobjects
                utility.LookupObjects = function (lookupOptions, successCallback, errorCallback) {
                    if (getUtility !== null && getUtility.lookupObjects !== undefined) {
                        getUtility.lookupObjects(lookupOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.LookupObjects'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/refreshparentgrid
                utility.RefreshParentGrid = function (lookupOptions) {
                    if (getUtility !== null && getUtility.refreshParentGrid !== undefined) {
                        getUtility.refreshParentGrid(lookupOptions);
                    }
                    else { throw new Error('loadUtility.RefreshParentGrid'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/showprogressindicator
                utility.ShowProgressIndicator = function (message) {
                    if (getUtility !== null && getUtility.showProgressIndicator !== undefined) {
                        getUtility.showProgressIndicator(message);
                    }
                    else { throw new Error('loadUtility.ShowProgressIndicator'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getadvancedconfigsetting
                utility.AdvancedConfigSetting = function (setting) {
                    if (getGlobalContext !== null && getGlobalContext.getAdvancedConfigSetting !== undefined) {
                        getGlobalContext.getAdvancedConfigSetting(setting);
                    }
                    else { throw new Error('loadUtility.AdvancedConfigSetting'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getclienturl
                Object.defineProperty(utility, 'ClientUrl', {
                    get: function () {
                        if (getGlobalContext !== null && getGlobalContext.getClientUrl !== undefined) {
                            return getGlobalContext.getClientUrl();
                        }
                        else { throw new Error('loadUtility.ClientUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappname
                utility.CurrentAppName = function (successCallback, errorCallback) {
                    if (getGlobalContext !== null && getGlobalContext.getCurrentAppName !== undefined) {
                        getGlobalContext.getCurrentAppName().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentAppName'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappproperties
                utility.CurrentAppProperties = function (successCallback, errorCallback) {
                    if (getGlobalContext !== null && getGlobalContext.getCurrentAppProperties !== undefined) {
                        getGlobalContext.getCurrentAppProperties().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentAppProperties'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getcurrentappurl
                Object.defineProperty(utility, 'CurrentAppUrl', {
                    get: function () {
                        if (getGlobalContext !== null && getGlobalContext.getCurrentAppUrl !== undefined) {
                            return getGlobalContext.getCurrentAppUrl();
                        }
                        else { throw new Error('loadUtility.CurrentAppUrl'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/getversion
                Object.defineProperty(utility, 'Version', {
                    get: function () {
                        if (getGlobalContext !== null && getGlobalContext.getVersion !== undefined) {
                            return getGlobalContext.getVersion();
                        }
                        else { throw new Error('loadUtility.Version'); }
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/isonpremises
                utility.IsOnPremises = function (successCallback, errorCallback) {
                    if (getGlobalContext !== null && getGlobalContext.isOnPremises !== undefined) {
                        return getGlobalContext.isOnPremises();
                    }
                    else { throw new Error('loadUtility.IsOnPremises'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/prependorgname
                utility.PrependOrgName = function (sPath) {
                    if (getGlobalContext !== null && getGlobalContext.prependOrgName !== undefined) {
                        return getGlobalContext.prependOrgName(sPath);
                    }
                    else { throw new Error('loadUtility.PrependOrgName'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openalertdialog
                utility.OpenAlertDialog = function (alertStrings, alertOptions, closeCallback, errorCallback) {
                    if (getNavigation !== null && getNavigation.openAlertDialog !== undefined) {
                        getNavigation.openAlertDialog(alertStrings, alertOptions).then(closeCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenAlertDialog'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openconfirmdialog
                utility.OpenConfirmDialog = function (confirmStrings, confirmOptions, successCallback, errorCallback) {
                    if (getNavigation !== null && getNavigation.openConfirmDialog !== undefined) {
                        getNavigation.openConfirmDialog(confirmStrings, confirmOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenConfirmDialog'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openerrordialog
                utility.OpenErrorDialog = function (errorOptions, successCallback, errorCallback) {
                    if (getNavigation !== null && getNavigation.openErrorDialog !== undefined) {
                        getNavigation.openErrorDialog(errorOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenErrorDialog'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openfile
                utility.OpenFile = function (file, openFileOptions) {
                    if (getNavigation !== null && getNavigation.openFile !== undefined) {
                        getNavigation.openFile(file, openFileOptions);
                    }
                    else { throw new Error('loadUtility.OpenFile'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openform
                utility.OpenForm = function (entityFormOptions, formParameters, successCallback, errorCallback) {
                    if (getNavigation !== null && getNavigation.openForm !== undefined) {
                        getNavigation.openForm(entityFormOptions, formParameters).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.OpenForm'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openurl
                utility.OpenUrl = function (url, openUrlOptions) {
                    if (getNavigation !== null && getNavigation.openUrl !== undefined) {
                        getNavigation.openUrl(url, openUrlOptions);
                    }
                    else { throw new Error('loadUtility.OpenUrl'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation/openwebresource
                utility.OpenWebResource = function (webResourceName, windowOptions, data) {
                    if (getNavigation !== null && getNavigation.openWebResource !== undefined) {
                        getNavigation.openWebResource(webResourceName, windowOptions, data);
                    }
                    else { throw new Error('loadUtility.OpenWebResource'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-panel/loadpanel
                utility.LoadPanel = function (url, title) {
                    if (getPanel !== null && getPanel.loadPanel !== undefined) {
                        getPanel.loadPanel(url, title);
                    }
                    else { throw new Error('loadUtility.LoadPanel'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlattributeencode
                utility.XmlAttributeEncode = function (arg) {
                    if (getEncoding !== null && getEncoding.xmlAttributeEncode !== undefined) {
                        return getEncoding.xmlAttributeEncode(arg);
                    }
                    else { throw new Error('loadUtility.XmlAttributeEncode'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding/xmlencode
                utility.XmlEncode = function (arg) {
                    if (getEncoding !== null && getEncoding.xmlEncode !== undefined) {
                        return getEncoding.xmlEncode(arg);
                    }
                    else { throw new Error('loadUtility.XmlEncode'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureaudio
                utility.CaptureAudio = function (successCallback, errorCallback) {
                    if (getDevice !== null && getDevice.captureAudio !== undefined) {
                        getDevice.captureAudio().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureAudio'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/captureimage
                utility.CaptureImage = function (imageOptions, successCallback, errorCallback) {
                    if (getDevice !== null && getDevice.captureImage !== undefined) {
                        getDevice.captureImage(imageOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureImage'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/capturevideo
                utility.CaptureVideo = function (successCallback, errorCallback) {
                    if (getDevice !== null && getDevice.captureVideo !== undefined) {
                        getDevice.captureVideo().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CaptureVideo'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getbarcodevalue
                utility.BarcodeValue = function (successCallback, errorCallback) {
                    if (getDevice !== null && getDevice.getBarcodeValue !== undefined) {
                        getDevice.getBarcodeValue().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.BarcodeValue'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/getcurrentposition
                utility.CurrentPosition = function (successCallback, errorCallback) {
                    if (getDevice !== null && getDevice.getCurrentPosition !== undefined) {
                        getDevice.getCurrentPosition().then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.CurrentPosition'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device/pickfile
                utility.PickFile = function (pickFileOptions, successCallback, errorCallback) {
                    if (getDevice !== null && getDevice.pickFile !== undefined) {
                        getDevice.pickFile(pickFileOptions).then(successCallback, errorCallback);
                    }
                    else { throw new Error('loadUtility.PickFile'); }
                }
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/client
                Object.defineProperty(utility, 'Client', {
                    get: function () {
                        var client = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().client) {
                                return Xrm.Utility.getGlobalContext().client;
                            }
                            return null;
                        })();
                        var Client = {};
                        Object.defineProperty(Client, 'ClientName', {
                            get: function () {
                                if (client !== null && client.getClient !== undefined) {
                                    return client.getClient();
                                }
                                else { throw new Error('loadUtility.ClientName'); }
                            }
                        });
                        Object.defineProperty(Client, 'ClientState', {
                            get: function () {
                                if (client !== null && client.getClientState !== undefined) {
                                    return client.getClientState();
                                }
                                else { throw new Error('loadUtility.ClientState'); }
                            }
                        });
                        Object.defineProperty(Client, 'FormFactor', {
                            get: function () {
                                if (client !== null && client.getFormFactor !== undefined) {
                                    return client.getFormFactor();
                                }
                                else { throw new Error('loadUtility.FormFactor'); }
                            }
                        });
                        Client.IsOffline = function () {
                            if (client !== null && client.isOffline !== undefined) {
                                return client.isOffline();
                            }
                            else { throw new Error('loadUtility.IsOffline'); }
                        }
                        return Client;
                    }
                });
                //--https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-utility/getglobalcontext/organizationsettings
                Object.defineProperty(utility, 'OrganizationSettings ', {
                    get: function () {
                        var organizationSettings = (function () {
                            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext && Xrm.Utility.getGlobalContext().organizationSettings) {
                                return Xrm.Utility.getGlobalContext().organizationSettings;
                            }
                            return null;
                        })();
                        var OrganizationSettings = {};
                        Object.defineProperty(OrganizationSettings, 'Attributes', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.attributes !== undefined) {
                                    return organizationSettings.attributes;
                                }
                                else { throw new Error('loadUtility.Attributes'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'BaseCurrencyId', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.baseCurrencyId !== undefined) {
                                    return organizationSettings.baseCurrencyId;
                                }
                                else { throw new Error('loadUtility.BaseCurrencyId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'DefaultCountryCode', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.defaultCountryCode !== undefined) {
                                    return organizationSettings.defaultCountryCode;
                                }
                                else { throw new Error('loadUtility.DefaultCountryCode'); }
                            }
                        });
                        OrganizationSettings.IsAutoSaveEnabled = function () {
                            if (organizationSettings !== null && organizationSettings.isAutoSaveEnabled !== undefined) {
                                return organizationSettings.isAutoSaveEnabled;
                            }
                            else { throw new Error('loadUtility.IsAutoSaveEnabled'); }
                        }
                        Object.defineProperty(OrganizationSettings, 'LanguageId', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.languageId !== undefined) {
                                    return organizationSettings.languageId;
                                }
                                else { throw new Error('loadUtility.LanguageId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'OrganizationId', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.organizationId !== undefined) {
                                    return organizationSettings.organizationId;
                                }
                                else { throw new Error('loadUtility.OrganizationId'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'UniqueName', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.uniqueName !== undefined) {
                                    return organizationSettings.uniqueName;
                                }
                                else { throw new Error('loadUtility.UniqueName'); }
                            }
                        });
                        Object.defineProperty(OrganizationSettings, 'UseSkypeProtocol', {
                            get: function () {
                                if (organizationSettings !== null && organizationSettings.useSkypeProtocol !== undefined) {
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
                            return null;
                        })();
                        var UserSettings = {};
                        Object.defineProperty(UserSettings, 'DateFormattingInfo', {
                            get: function () {
                                if (userSettings !== null && userSettings.dateFormattingInfo !== undefined) {
                                    return userSettings.dateFormattingInfo;
                                }
                                else { throw new Error('loadUtility.DateFormattingInfo'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'DefaultDashboardId', {
                            get: function () {
                                if (userSettings !== null && userSettings.defaultDashboardId !== undefined) {
                                    return userSettings.defaultDashboardId;
                                }
                                else { throw new Error('loadUtility.DefaultDashboardId'); }
                            }
                        });
                        UserSettings.IsGuidedHelpEnabled = function () {
                            if (userSettings !== null && userSettings.isGuidedHelpEnabled !== undefined) {
                                return userSettings.isGuidedHelpEnabled;
                            }
                            else { throw new Error('loadUtility.IsGuidedHelpEnabled'); }
                        }
                        UserSettings.IsHighContrastEnabled = function () {
                            if (userSettings !== null && userSettings.isHighContrastEnabled !== undefined) {
                                return userSettings.isHighContrastEnabled;
                            }
                            else { throw new Error('loadUtility.IsHighContrastEnabled'); }
                        }
                        UserSettings.IsRTL = function () {
                            if (userSettings !== null && userSettings.isRTL !== undefined) {
                                return userSettings.isRTL;
                            }
                            else { throw new Error('loadUtility.IsRTL'); }
                        }
                        Object.defineProperty(UserSettings, 'LanguageId', {
                            get: function () {
                                if (userSettings !== null && userSettings.languageId !== undefined) {
                                    return userSettings.languageId;
                                }
                                else { throw new Error('loadUtility.LanguageId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'SecurityRolePrivileges', {
                            get: function () {
                                if (userSettings !== null && userSettings.securityRolePrivileges !== undefined) {
                                    return userSettings.securityRolePrivileges;
                                }
                                else { throw new Error('loadUtility.SecurityRolePrivileges'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'SecurityRoles', {
                            get: function () {
                                if (userSettings !== null && userSettings.securityRoles !== undefined) {
                                    return userSettings.securityRoles;
                                }
                                else { throw new Error('loadUtility.SecurityRoles'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'TransactionCurrencyId', {
                            get: function () {
                                if (userSettings !== null && userSettings.transactionCurrencyId !== undefined) {
                                    return userSettings.transactionCurrencyId;
                                }
                                else { throw new Error('loadUtility.TransactionCurrencyId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'UserId', {
                            get: function () {
                                if (userSettings !== null && userSettings.userId !== undefined) {
                                    return userSettings.userId;
                                }
                                else { throw new Error('loadUtility.UserId'); }
                            }
                        });
                        Object.defineProperty(UserSettings, 'UserName', {
                            get: function () {
                                if (userSettings !== null && userSettings.userName !== undefined) {
                                    return userSettings.userName;
                                }
                                else { throw new Error('loadUtility.UserName'); }
                            }
                        });
                        UserSettings.TimeZoneOffsetMinutes = function () {
                            if (userSettings !== null && userSettings.getTimeZoneOffsetMinutes !== undefined) {
                                return userSettings.getTimeZoneOffsetMinutes();
                            }
                            else { throw new Error('loadUtility.TimeZoneOffsetMinutes'); }
                        }
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