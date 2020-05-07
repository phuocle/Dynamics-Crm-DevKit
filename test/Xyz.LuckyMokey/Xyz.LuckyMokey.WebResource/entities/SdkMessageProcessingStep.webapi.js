'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.SdkMessageProcessingStepApi = function (e) {
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
		var sdkmessageprocessingstep = {
			AsyncAutoDelete: { a: 'asyncautodelete' },
			CanUseReadOnlyConnection: { a: 'canusereadonlyconnection' },
			ComponentState: { a: 'componentstate', r: true },
			Configuration: { a: 'configuration' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CustomizationLevel: { a: 'customizationlevel', r: true },
			Description: { a: 'description' },
			EventExpander: { a: 'eventexpander' },
			eventhandler_plugintype: { b: 'eventhandler_plugintype', a: '_eventhandler_value', c: 'plugintypes', d: 'plugintype' },
			eventhandler_serviceendpoint: { b: 'eventhandler_serviceendpoint', a: '_eventhandler_value', c: 'serviceendpoints', d: 'serviceendpoint' },
			FilteringAttributes: { a: 'filteringattributes' },
			ImpersonatingUserId: { b: 'impersonatinguserid', a: '_impersonatinguserid_value', c: 'systemusers', d: 'systemuser' },
			IntroducedVersion: { a: 'introducedversion' },
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
			Rank: { a: 'rank' },
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
		for (var field in sdkmessageprocessingstep) {
			var a = sdkmessageprocessingstep[field].a;
			var b = sdkmessageprocessingstep[field].b;
			var c = sdkmessageprocessingstep[field].c;
			var d = sdkmessageprocessingstep[field].d;
			var g = sdkmessageprocessingstep[field].g;
			var r = sdkmessageprocessingstep[field].r;
			sdkmessageprocessingstep[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		sdkmessageprocessingstep.Entity = u;
		sdkmessageprocessingstep.EntityName = 'sdkmessageprocessingstep';
		sdkmessageprocessingstep.EntityCollectionName = 'sdkmessageprocessingsteps';
		sdkmessageprocessingstep['@odata.etag'] = e['@odata.etag'];
		sdkmessageprocessingstep.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sdkmessageprocessingstep.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sdkmessageprocessingstep;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SdkMessageProcessingStep = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
		},
		InvocationSource : {
			Internal: -1,
			Parent: 0,
			Child: 1
		},
		Mode : {
			Synchronous: 0,
			Asynchronous: 1
		},
		Stage : {
			Initial_Pre_operation_For_internal_use_only: 5,
			Pre_validation: 10,
			Internal_Pre_operation_Before_External_Plugins_For_internal_use_only: 15,
			Pre_operation: 20,
			Internal_Pre_operation_After_External_Plugins_For_internal_use_only: 25,
			Main_Operation_For_internal_use_only: 30,
			Internal_Post_operation_Before_External_Plugins_For_internal_use_only: 35,
			Post_operation: 40,
			Internal_Post_operation_After_External_Plugins_For_internal_use_only: 45,
			Post_operation_Deprecated: 50,
			Final_Post_operation_For_internal_use_only: 55,
			Pre_Commit_stage_fired_before_transaction_commit_For_internal_use_only: 80,
			Post_Commit_stage_fired_after_transaction_commit_For_internal_use_only: 90
		},
		StateCode : {
			Enabled: 0,
			Disabled: 1
		},
		StatusCode : {
			Enabled: 1,
			Disabled: 2
		},
		SupportedDeployment : {
			Server_Only: 0,
			Microsoft_Dynamics_365_Client_for_Outlook_Only: 1,
			Both: 2
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