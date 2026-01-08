'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.SdkMessageProcessingStepApi = function (e) {
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
		const _sdkmessageprocessingstep = {
			AsyncAutoDelete: { a: 'asyncautodelete', g: 'Boolean' },
			CanBeBypassed: { a: 'canbebypassed', g: 'Boolean' },
			CanUseReadOnlyConnection: { a: 'canusereadonlyconnection', g: 'Boolean' },
			Category: { a: 'category' },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			Configuration: { a: 'configuration' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomizationLevel: { a: 'customizationlevel', r: true, g: 'Integer' },
			Description: { a: 'description' },
			EnablePluginProfiler: { a: 'enablepluginprofiler', g: 'Boolean' },
			EventExpander: { a: 'eventexpander' },
			FilteringAttributes: { a: 'filteringattributes' },
			FxExpressionId: { b: 'fxexpressionid', a: '_fxexpressionid_value', c: 'fxexpressions', d: 'fxexpression' },
			ImpersonatingUserId: { b: 'impersonatinguserid', a: '_impersonatinguserid_value', c: 'systemusers', d: 'systemuser' },
			IntroducedVersion: { a: 'introducedversion' },
			InvocationSource: { a: 'invocationsource', g: 'Integer' },
			IsCustomizable: { a: 'iscustomizable' },
			IsHidden: { a: 'ishidden' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			Mode: { a: 'mode', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true, g: 'DateTime' },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			PowerfxRuleId: { b: 'powerfxruleid', a: '_powerfxruleid_value', c: 'powerfxrules', d: 'powerfxrule' },
			Rank: { a: 'rank', g: 'Integer' },
			RuntimeIntegrationProperties: { a: 'runtimeintegrationproperties' },
			SdkMessageFilterId: { b: 'sdkmessagefilterid', a: '_sdkmessagefilterid_value', c: 'sdkmessagefilters', d: 'sdkmessagefilter' },
			SdkMessageId: { b: 'sdkmessageid', a: '_sdkmessageid_value', c: 'sdkmessages', d: 'sdkmessage' },
			SdkMessageProcessingStepId: { a: 'sdkmessageprocessingstepid' },
			SdkMessageProcessingStepIdUnique: { a: 'sdkmessageprocessingstepidunique', r: true },
			SdkMessageProcessingStepSecureConfigId: { b: 'sdkmessageprocessingstepsecureconfigid', a: '_sdkmessageprocessingstepsecureconfigid_value', c: 'sdkmessageprocessingstepsecureconfigs', d: 'sdkmessageprocessingstepsecureconfig' },
			SolutionId: { a: 'solutionid', r: true },
			Stage: { a: 'stage', g: 'Integer' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			SupportedDeployment: { a: 'supporteddeployment', g: 'Integer' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const sdkmessageprocessingstep = {};
		sdkmessageprocessingstep.ODataEntity = e;
		sdkmessageprocessingstep.FormattedValue = {};
		for (const field in _sdkmessageprocessingstep) {
			const fieldConfig = _sdkmessageprocessingstep[field];
			webApiField(sdkmessageprocessingstep, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		sdkmessageprocessingstep.Entity = u;
		sdkmessageprocessingstep.EntityName = 'sdkmessageprocessingstep';
		sdkmessageprocessingstep.EntityCollectionName = 'sdkmessageprocessingsteps';
		sdkmessageprocessingstep['@odata.etag'] = e?.['@odata.etag'];
		sdkmessageprocessingstep.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		sdkmessageprocessingstep.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return sdkmessageprocessingstep;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.SdkMessageProcessingStep = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		EventHandlerTypeCode: { },
		InvocationSource: { Child: 1, Parent: 0 },
		Mode: { Asynchronous: 1, Synchronous: 0 },
		Stage: { Final_Post_operation_For_internal_use_only: 55, Initial_Pre_operation_For_internal_use_only: 5, Internal_Post_operation_After_External_Plugins_For_internal_use_only: 45, Internal_Post_operation_Before_External_Plugins_For_internal_use_only: 35, Internal_Pre_operation_After_External_Plugins_For_internal_use_only: 25, Internal_Pre_operation_Before_External_Plugins_For_internal_use_only: 15, Main_Operation_For_internal_use_only: 30, Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only: 90, Post_operation: 40, Post_operation_Deprecated: 50, Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only: 80, Pre_operation: 20, Pre_validation: 10 },
		StateCode: { Disabled: 1, Enabled: 0 },
		StatusCode: { Disabled: 2, Enabled: 1 },
		SupportedDeployment: { Both: 2, Microsoft_Dynamics_365_Client_for_Outlook_Only: 1, Server_Only: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));