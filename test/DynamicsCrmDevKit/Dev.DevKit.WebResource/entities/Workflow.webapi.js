'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.WorkflowApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName + f].toString().split(';').map(function (item) { return item.trim(); });
                }
                return entity[logicalName + f];
            };
            var getValue = function () {
                if (entity[logicalName] === undefined || entity[logicalName] === null) {
                    return null;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === undefined || entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName];
                    }
                    return null;
                }
                if (isMultiOptionSet) {
                    return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
                }
                return entity[logicalName];
            };
            var setValue = function (value) {
                if (isMultiOptionSet) value = value.join(',');
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var workflow = {
			ActiveWorkflowId: { b: 'activeworkflowid', a: '_activeworkflowid_value', c: 'workflows', d: 'workflow', r: true },
			AsyncAutoDelete: { a: 'asyncautodelete' },
			BusinessProcessType: { a: 'businessprocesstype' },
			Category: { a: 'category' },
			ClientData: { a: 'clientdata' },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreateStage: { a: 'createstage' },
			DeleteStage: { a: 'deletestage' },
			Description: { a: 'description' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			FormId: { a: 'formid' },
			InputParameters: { a: 'inputparameters' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCrmUIWorkflow: { a: 'iscrmuiworkflow', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsCustomProcessingStepAllowedForOtherPublishers: { a: 'iscustomprocessingstepallowedforotherpublishers' },
			IsManaged: { a: 'ismanaged', r: true },
			IsTransacted: { a: 'istransacted' },
			LanguageCode: { a: 'languagecode' },
			Mode: { a: 'mode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OnDemand: { a: 'ondemand' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentWorkflowId: { b: 'parentworkflowid', a: '_parentworkflowid_value', c: 'workflows', d: 'workflow', r: true },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter', r: true },
			ProcessOrder: { a: 'processorder' },
			ProcessRoleAssignment: { a: 'processroleassignment' },
			ProcessTriggerFormId: { a: 'processtriggerformid' },
			ProcessTriggerScope: { a: 'processtriggerscope' },
			Rank: { a: 'rank' },
			RunAs: { a: 'runas' },
			Scope: { a: 'scope' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subprocess: { a: 'subprocess' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SyncWorkflowLogOnFailure: { a: 'syncworkflowlogonfailure' },
			TriggerOnCreate: { a: 'triggeroncreate' },
			TriggerOnDelete: { a: 'triggerondelete' },
			TriggerOnUpdateAttributeList: { a: 'triggeronupdateattributelist' },
			Type: { a: 'type' },
			UIData: { a: 'uidata', r: true },
			UIFlowType: { a: 'uiflowtype' },
			UniqueName: { a: 'uniquename' },
			UpdateStage: { a: 'updatestage' },
			VersionNumber: { a: 'versionnumber', r: true },
			WorkflowId: { a: 'workflowid' },
			WorkflowIdUnique: { a: 'workflowidunique', r: true },
			Xaml: { a: 'xaml' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in workflow) {
			var a = workflow[field].a;
			var b = workflow[field].b;
			var c = workflow[field].c;
			var d = workflow[field].d;
			var g = workflow[field].g;
			var r = workflow[field].r;
			workflow[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		workflow.Entity = u;
		workflow.EntityName = 'workflow';
		workflow.EntityCollectionName = 'workflows';
		workflow['@odata.etag'] = e['@odata.etag'];
		workflow.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		workflow.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return workflow;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Workflow = {
		BusinessProcessType : {
			Business_Flow: 0,
			Task_Flow: 1
		},
		Category : {
			Action: 3,
			Business_Process_Flow: 4,
			Business_Rule: 2,
			Desktop_Flow: 6,
			Dialog: 1,
			Modern_Flow: 5,
			Workflow: 0
		},
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		CreateStage : {
			Post_operation: 40,
			Pre_operation: 20
		},
		DeleteStage : {
			Post_operation: 40,
			Pre_operation: 20
		},
		Mode : {
			Background: 0,
			Real_time: 1
		},
		ProcessTriggerScope : {
			Entity: 2,
			Form: 1
		},
		RunAs : {
			Calling_User: 1,
			Owner: 0
		},
		Scope : {
			Business_Unit: 2,
			Organization: 4,
			Parent_Child_Business_Units: 3,
			User: 1
		},
		StateCode : {
			Activated: 1,
			Draft: 0
		},
		StatusCode : {
			Activated: 2,
			Draft: 1
		},
		Type : {
			Activation: 2,
			Definition: 1,
			Template: 3
		},
		UIFlowType : {
			Power_Automate_Desktop: 2,
			Selenium_IDE: 1,
			Windows_recorder_V1: 0
		},
		UpdateStage : {
			Post_operation: 40,
			Pre_operation: 20
		},
        RollupState : {
            NotCalculated: 0,
            Calculated: 1,
            OverflowError: 2,
            OtherError: 3,
            RetryLimitExceeded: 4,
            HierarchicalRecursionLimitReached: 5,
            LoopDetected: 6
        }

	};
})(OptionSet || (OptionSet = {}));