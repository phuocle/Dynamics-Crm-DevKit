'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.WorkflowApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return '';
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(obj.FormattedValue, field, {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(obj, field, {
					get: getValue
				});
			}
			else {
				Object.defineProperty(obj, field, {
					get: getValue,
					set: setValue
				});
			}
		}
		var _workflow = {
			ActiveWorkflowId: { b: 'activeworkflowid', a: '_activeworkflowid_value', c: 'workflows', d: 'workflow', r: true },
			AsyncAutoDelete: { a: 'asyncautodelete' },
			BillingContext: { a: 'billingcontext' },
			BusinessProcessType: { a: 'businessprocesstype' },
			Category: { a: 'category' },
			ClientData: { a: 'clientdata' },
			ClientDataIsCompressed: { a: 'clientdataiscompressed', r: true },
			ComponentState: { a: 'componentstate', r: true },
			ConnectionReferences: { a: 'connectionreferences' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreateMetadata: { a: 'createmetadata' },
			CreateStage: { a: 'createstage' },
			Credentials: { a: 'credentials' },
			Definition: { a: 'definition' },
			DeleteStage: { a: 'deletestage' },
			Dependencies: { a: 'dependencies' },
			Description: { a: 'description' },
			DesktopFlowModules: { a: 'desktopflowmodules' },
			DynamicsSolutionContext: { a: 'dynamicssolutioncontext' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			FormId: { a: 'formid' },
			InputParameters: { a: 'inputparameters' },
			Inputs: { a: 'inputs' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCrmUIWorkflow: { a: 'iscrmuiworkflow', r: true },
			IsCustomizable: { a: 'iscustomizable' },
			IsCustomProcessingStepAllowedForOtherPublishers: { a: 'iscustomprocessingstepallowedforotherpublishers' },
			IsManaged: { a: 'ismanaged', r: true },
			IsTransacted: { a: 'istransacted' },
			LanguageCode: { a: 'languagecode' },
			LicenseEntitledBy: { b: 'licenseentitledby', a: '_licenseentitledby_value', c: 'workflows', d: 'workflow' },
			Metadata: { a: 'metadata' },
			Mode: { a: 'mode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifyMetadata: { a: 'modifymetadata' },
			Name: { a: 'name' },
			OnDemand: { a: 'ondemand' },
			Outputs: { a: 'outputs' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentWorkflowId: { b: 'parentworkflowid', a: '_parentworkflowid_value', c: 'workflows', d: 'workflow', r: true },
			PlanVerified: { a: 'planverified' },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter', r: true },
			ProcessOrder: { a: 'processorder' },
			ProcessRoleAssignment: { a: 'processroleassignment' },
			ProcessTriggerFormId: { a: 'processtriggerformid' },
			ProcessTriggerScope: { a: 'processtriggerscope' },
			Rank: { a: 'rank' },
			ResourceContainer: { a: 'resourcecontainer' },
			ResourceId: { a: 'resourceid' },
			RunAs: { a: 'runas' },
			SchemaVersion: { a: 'schemaversion' },
			Scope: { a: 'scope' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subprocess: { a: 'subprocess' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SuspensionReasonDetails: { a: 'suspensionreasondetails' },
			SyncWorkflowLogOnFailure: { a: 'syncworkflowlogonfailure' },
			ThrottlingBehavior: { a: 'throttlingbehavior' },
			TriggerOnCreate: { a: 'triggeroncreate' },
			TriggerOnDelete: { a: 'triggerondelete' },
			TriggerOnUpdateAttributeList: { a: 'triggeronupdateattributelist' },
			TrustedAccess: { a: 'trustedaccess', r: true },
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
		var workflow = {};
		workflow.ODataEntity = e;
		workflow.FormattedValue = {};
		for (var field in _workflow) {
			var a = _workflow[field].a;
			var b = _workflow[field].b;
			var c = _workflow[field].c;
			var d = _workflow[field].d;
			var g = _workflow[field].g;
			var r = _workflow[field].r;
			webApiField(workflow, field, e, a, b, c, d, r, u, g);
		}
		workflow.Entity = u;
		workflow.EntityName = 'workflow';
		workflow.EntityCollectionName = 'workflows';
		workflow['@odata.etag'] = e['@odata.etag'];
		workflow.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		workflow.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
			AI_Flow: 7,
			Business_Process_Flow: 4,
			Business_Rule: 2,
			Desktop_Flow: 6,
			Dialog: 1,
			Modern_Flow: 5,
			Web_Client_API_Flow: 9000,
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
		PrimaryEntity : {
		},
		ProcessTriggerScope : {
			Entity: 2,
			Form: 1
		},
		RendererObjectTypeCode : {
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
			Draft: 0,
			Suspended: 2
		},
		StatusCode : {
			Activated: 2,
			CompanyDLPViolation: 3,
			Draft: 1
		},
		ThrottlingBehavior : {
			None: 0,
			TenantPool: 1
		},
		Type : {
			Activation: 2,
			Definition: 1,
			Template: 3
		},
		UIFlowType : {
			Power_Automate_Desktop: 2,
			Recording: 101,
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