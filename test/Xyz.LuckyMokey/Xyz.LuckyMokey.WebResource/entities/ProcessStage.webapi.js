'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.ProcessStageApi = function (e) {
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
		var processstage = {
			ClientData: { a: 'clientdata', r: true },
			Connector: { a: 'connector' },
			IsTrigger: { a: 'istrigger' },
			OperationId: { a: 'operationid' },
			OperationKind: { a: 'operationkind' },
			OperationType: { a: 'operationtype' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			ProcessId: { b: 'processid', a: '_processid_value', c: 'workflows', d: 'workflow' },
			ProcessStageId: { a: 'processstageid' },
			StageCategory: { a: 'stagecategory' },
			StageName: { a: 'stagename' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in processstage) {
			var a = processstage[field].a;
			var b = processstage[field].b;
			var c = processstage[field].c;
			var d = processstage[field].d;
			var g = processstage[field].g;
			var r = processstage[field].r;
			processstage[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		processstage.Entity = u;
		processstage.EntityName = 'processstage';
		processstage.EntityCollectionName = 'processstages';
		processstage['@odata.etag'] = e['@odata.etag'];
		processstage.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		processstage.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return processstage;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessStage = {
		OperationKind : {
			Http: 473330000,
			PowerApp: 473330001,
			PowerAppV2: 473330002,
			Button: 473330003,
			ApiConnection: 473330004,
			Alert: 473330005,
			EventGrid: 473330006,
			CurrentTime: 473330007,
			ConvertTimeZone: 473330008,
			GetFutureTime: 473330009,
			GetPastTime: 473330010,
			AddToTime: 473330011,
			SubtractFromTime: 473330012,
			AzureMonitorAlert: 473330013,
			SecurityCenterAlert: 473330014,
			JsonToJson: 473330015,
			JsonToText: 473330016,
			XmlToJson: 473330017,
			XmlToText: 473330018,
			Geofence: 473330019,
			ODataOpenApiConnection: 473330020,
			IndexOf: 473330021,
			Substring: 473330022,
			VirtualAgent: 473330023,
			FormatNumber: 473330024
		},
		OperationType : {
			Http: 473330000,
			ApiApp: 473330001,
			Recurrence: 473330002,
			Workflow: 473330003,
			Flow: 473330004,
			Wait: 473330005,
			ApiConnection: 473330006,
			OpenApiConnection: 473330007,
			Manual: 473330008,
			ApiConnectionWebhook: 473330009,
			OpenApiConnectionWebhook: 473330010,
			Response: 473330011,
			HttpWebhook: 473330012,
			Compose: 473330013,
			Query: 473330014,
			Function: 473330015,
			ApiManagement: 473330016,
			XmlValidation: 473330017,
			FlatFileEncoding: 473330018,
			Scope: 473330019,
			Request: 473330020,
			If: 473330021,
			Foreach: 473330022,
			Until: 473330023,
			Xslt: 473330024,
			FlatFileDecoding: 473330025,
			Terminate: 473330026,
			IntegrationAccountArtifactLookup: 473330027,
			Switch: 473330028,
			ParseJson: 473330029,
			Table: 473330030,
			Join: 473330031,
			Select: 473330032,
			InitializeVariable: 473330033,
			IncrementVariable: 473330034,
			DecrementVariable: 473330035,
			SetVariable: 473330036,
			AppendToArrayVariable: 473330037,
			AppendToStringVariable: 473330038,
			Batch: 473330039,
			SendToBatch: 473330040,
			SlidingWindow: 473330041,
			Expression: 473330042,
			Liquid: 473330043,
			JavascriptCode: 473330044,
			As2Decode: 473330045,
			As2Encode: 473330046,
			RosettaNetEncode: 473330047,
			RosettaNetDecode: 473330048,
			RosettaNetWaitForResponse: 473330049,
			ApiConnectionNotification: 473330050,
			Changeset: 473330051,
			SwiftEncode: 473330052
		},
		StageCategory : {
			Qualify: 0,
			Develop: 1,
			Propose: 2,
			Close: 3,
			Identify: 4,
			Research: 5,
			Resolve: 6,
			Approval: 7
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