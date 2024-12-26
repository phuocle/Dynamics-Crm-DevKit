'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SdkMessageProcessingStepApi = function (e) {
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
		var _sdkmessageprocessingstep = {
			AsyncAutoDelete: { a: 'asyncautodelete' },
			CanBeBypassed: { a: 'canbebypassed' },
			CanUseReadOnlyConnection: { a: 'canusereadonlyconnection' },
			Category: { a: 'category' },
			ComponentState: { a: 'componentstate', r: true },
			Configuration: { a: 'configuration' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomizationLevel: { a: 'customizationlevel', r: true },
			Description: { a: 'description' },
			EnablePluginProfiler: { a: 'enablepluginprofiler' },
			EventExpander: { a: 'eventexpander' },
			eventhandler_plugintype: { b: 'eventhandler_plugintype', a: '_eventhandler_value', c: 'plugintypes', d: 'plugintype' },
			eventhandler_serviceendpoint: { b: 'eventhandler_serviceendpoint', a: '_eventhandler_value', c: 'serviceendpoints', d: 'serviceendpoint' },
			FilteringAttributes: { a: 'filteringattributes' },
			FxExpressionId: { b: 'fxexpressionid', a: '_fxexpressionid_value', c: 'fxexpressions', d: 'fxexpression' },
			ImpersonatingUserId: { b: 'impersonatinguserid', a: '_impersonatinguserid_value', c: 'systemusers', d: 'systemuser' },
			IntroducedVersion: { a: 'introducedversion' },
			InvocationSource: { a: 'invocationsource' },
			IsCustomizable: { a: 'iscustomizable' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true },
			Mode: { a: 'mode' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			PowerfxRuleId: { b: 'powerfxruleid', a: '_powerfxruleid_value', c: 'powerfxrules', d: 'powerfxrule' },
			Rank: { a: 'rank' },
			RuntimeIntegrationProperties: { a: 'runtimeintegrationproperties' },
			SdkMessageFilterId: { b: 'sdkmessagefilterid', a: '_sdkmessagefilterid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage' },
			SdkMessageProcessingStepId: { a: 'sdkmessageprocessingstepid' },
			SdkMessageProcessingStepIdUnique: { a: 'sdkmessageprocessingstepidunique', r: true },
			SdkMessageProcessingStepSecureConfigId: { b: 'sdkmessageprocessingstepsecureconfigid', a: '_sdkmessageprocessingstepsecureconfigid_value', c: 'sdkmessageprocessingstepsecureconfigs', d: 'sdkmessageprocessingstepsecureconfig' },
			SolutionId: { a: 'solutionid', r: true },
			Stage: { a: 'stage' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			SupportedDeployment: { a: 'supporteddeployment' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var sdkmessageprocessingstep = {};
		sdkmessageprocessingstep.ODataEntity = e;
		sdkmessageprocessingstep.FormattedValue = {};
		for (var field in _sdkmessageprocessingstep) {
			var a = _sdkmessageprocessingstep[field].a;
			var b = _sdkmessageprocessingstep[field].b;
			var c = _sdkmessageprocessingstep[field].c;
			var d = _sdkmessageprocessingstep[field].d;
			var g = _sdkmessageprocessingstep[field].g;
			var r = _sdkmessageprocessingstep[field].r;
			webApiField(sdkmessageprocessingstep, field, e, a, b, c, d, r, u, g);
		}
		sdkmessageprocessingstep.Entity = u;
		sdkmessageprocessingstep.EntityName = 'sdkmessageprocessingstep';
		sdkmessageprocessingstep.EntityCollectionName = 'sdkmessageprocessingsteps';
		sdkmessageprocessingstep['@odata.etag'] = e['@odata.etag'];
		sdkmessageprocessingstep.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sdkmessageprocessingstep.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sdkmessageprocessingstep;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SdkMessageProcessingStep = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		EventHandlerTypeCode : {
		},
		InvocationSource : {
			Child: 1,
			Parent: 0
		},
		Mode : {
			Asynchronous: 1,
			Synchronous: 0
		},
		Stage : {
			Final_Post_operation_For_internal_use_only: 55,
			Initial_Pre_operation_For_internal_use_only: 5,
			Internal_Post_operation_After_External_Plugins_For_internal_use_only: 45,
			Internal_Post_operation_Before_External_Plugins_For_internal_use_only: 35,
			Internal_Pre_operation_After_External_Plugins_For_internal_use_only: 25,
			Internal_Pre_operation_Before_External_Plugins_For_internal_use_only: 15,
			Main_Operation_For_internal_use_only: 30,
			Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only: 90,
			Post_operation: 40,
			Post_operation_Deprecated: 50,
			Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only: 80,
			Pre_operation: 20,
			Pre_validation: 10
		},
		StateCode : {
			Disabled: 1,
			Enabled: 0
		},
		StatusCode : {
			Disabled: 2,
			Enabled: 1
		},
		SupportedDeployment : {
			Both: 2,
			Microsoft_Dynamics_365_Client_for_Outlook_Only: 1,
			Server_Only: 0
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