'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.WorkflowApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _workflow = {
			ActiveWorkflowId: { b: 'activeworkflowid', a: '_activeworkflowid_value', c: 'workflows', d: 'workflow', r: true },
			AsyncAutoDelete: { a: 'asyncautodelete', g: 'Boolean' },
			BillingContext: { a: 'billingcontext' },
			BusinessProcessType: { a: 'businessprocesstype', g: 'Integer' },
			Category: { a: 'category', g: 'Integer' },
			Claims: { a: 'claims' },
			ClientData: { a: 'clientdata' },
			ClientDataIsCompressed: { a: 'clientdataiscompressed', r: true, g: 'Boolean' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			ConnectionReferences: { a: 'connectionreferences' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreateMetadata: { a: 'createmetadata' },
			CreateStage: { a: 'createstage', g: 'Integer' },
			Credentials: { a: 'credentials' },
			Definition: { a: 'definition' },
			DeleteStage: { a: 'deletestage', g: 'Integer' },
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
			IsCrmUIWorkflow: { a: 'iscrmuiworkflow', r: true, g: 'Boolean' },
			IsCustomizable: { a: 'iscustomizable' },
			IsCustomProcessingStepAllowedForOtherPublishers: { a: 'iscustomprocessingstepallowedforotherpublishers' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			IsTransacted: { a: 'istransacted', g: 'Boolean' },
			LanguageCode: { a: 'languagecode', g: 'Integer' },
			Licensee: { b: 'licensee', a: '_licensee_value', c: 'systemusers', d: 'systemuser' },
			LicenseEntitledBy: { b: 'licenseentitledby', a: '_licenseentitledby_value', c: 'workflows', d: 'workflow' },
			Metadata: { a: 'metadata' },
			Mode: { a: 'mode', g: 'Integer' },
			ModernFlowType: { a: 'modernflowtype', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifyMetadata: { a: 'modifymetadata' },
			Name: { a: 'name' },
			OnDemand: { a: 'ondemand', g: 'Boolean' },
			Outputs: { a: 'outputs' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentWorkflowId: { b: 'parentworkflowid', a: '_parentworkflowid_value', c: 'workflows', d: 'workflow', r: true },
			PlanVerified: { a: 'planverified', g: 'Boolean' },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter', r: true },
			ProcessOrder: { a: 'processorder', g: 'Integer' },
			ProcessRoleAssignment: { a: 'processroleassignment' },
			ProcessTriggerFormId: { a: 'processtriggerformid' },
			ProcessTriggerScope: { a: 'processtriggerscope', g: 'Integer' },
			Rank: { a: 'rank', g: 'Integer' },
			ResourceContainer: { a: 'resourcecontainer' },
			ResourceId: { a: 'resourceid' },
			RunAs: { a: 'runas', g: 'Integer' },
			SchemaVersion: { a: 'schemaversion' },
			Scope: { a: 'scope', g: 'Integer' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage', r: true },
			SolutionId: { a: 'solutionid', r: true },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			Subprocess: { a: 'subprocess', g: 'Boolean' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			SuspensionReasonDetails: { a: 'suspensionreasondetails' },
			SyncWorkflowLogOnFailure: { a: 'syncworkflowlogonfailure', g: 'Boolean' },
			ThrottlingBehavior: { a: 'throttlingbehavior', g: 'Integer' },
			TriggerOnCreate: { a: 'triggeroncreate', g: 'Boolean' },
			TriggerOnDelete: { a: 'triggerondelete', g: 'Boolean' },
			TriggerOnUpdateAttributeList: { a: 'triggeronupdateattributelist' },
			TrustedAccess: { a: 'trustedaccess', r: true, g: 'Boolean' },
			Type: { a: 'type', g: 'Integer' },
			UIData: { a: 'uidata', r: true },
			UIFlowType: { a: 'uiflowtype', g: 'Integer' },
			UniqueName: { a: 'uniquename' },
			UpdateStage: { a: 'updatestage', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' },
			WorkflowId: { a: 'workflowid' },
			WorkflowIdUnique: { a: 'workflowidunique', r: true },
			Xaml: { a: 'xaml' }
		};
		if (e === undefined) e = {};
		const u = {};
		const workflow = {};
		workflow.ODataEntity = e;
		workflow.FormattedValue = {};
		for (const field in _workflow) {
			const fieldConfig = _workflow[field];
			webApiField(workflow, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		workflow.Entity = u;
		workflow.EntityName = 'workflow';
		workflow.EntityCollectionName = 'workflows';
		workflow['@odata.etag'] = e?.['@odata.etag'];
		workflow.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		workflow.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return workflow;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Workflow = {
		BusinessProcessType: { Business_Flow: 0, Task_Flow: 1 },
		Category: { Action: 3, AI_Flow: 7, Business_Process_Flow: 4, Business_Rule: 2, Desktop_Flow: 6, Dialog: 1, Modern_Flow: 5, Workflow: 0 },
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		CreateStage: { Post_operation: 40, Pre_operation: 20 },
		DeleteStage: { Post_operation: 40, Pre_operation: 20 },
		Mode: { Background: 0, Real_time: 1 },
		ModernFlowType: { CopilotStudioFlow: 1, M365CopilotAgentFlow: 2, PowerAutomateFlow: 0 },
		PrimaryEntity: { },
		ProcessTriggerScope: { Entity: 2, Form: 1 },
		RendererObjectTypeCode: { },
		RunAs: { Calling_User: 1, Owner: 0 },
		Scope: { Business_Unit: 2, Organization: 4, Parent_Child_Business_Units: 3, User: 1 },
		StateCode: { Activated: 1, Draft: 0, Suspended: 2 },
		StatusCode: { Activated: 2, CompanyDLPViolation: 3, Draft: 1 },
		ThrottlingBehavior: { CopilotStudio: 2, None: 0, TenantPool: 1 },
		Type: { Activation: 2, Definition: 1, Template: 3 },
		UIFlowType: { Power_Automate_Desktop: 2, Recording: 101, Selenium_IDE: 1, Test: 3, Windows_recorder_V1: 0 },
		UpdateStage: { Post_operation: 40, Pre_operation: 20 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));