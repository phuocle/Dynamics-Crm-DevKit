'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ProcessStageApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _processstage = {
			ClientData: { a: 'clientdata', r: true },
			Connector: { a: 'connector' },
			IsTrigger: { a: 'istrigger' },
			OperationId: { a: 'operationid' },
			OperationKind: { a: 'operationkind' },
			OperationType: { a: 'operationtype' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { a: 'owningbusinessunit', r: true },
			ParameterName: { a: 'parametername' },
			ParameterValue: { a: 'parametervalue' },
			ParentProcessStageId: { b: 'parentprocessstageid', a: '_parentprocessstageid_value', c: 'processstages', d: 'processstage' },
			ProcessId: { b: 'processid', a: '_processid_value', c: 'workflows', d: 'workflow' },
			ProcessStageId: { a: 'processstageid' },
			StageCategory: { a: 'stagecategory' },
			StageName: { a: 'stagename' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var processstage = {};
		processstage.ODataEntity = e;
		processstage.FormattedValue = {};
		for (var field in _processstage) {
			var a = _processstage[field].a;
			var b = _processstage[field].b;
			var c = _processstage[field].c;
			var d = _processstage[field].d;
			var g = _processstage[field].g;
			var r = _processstage[field].r;
			webApiField(processstage, field, e, a, b, c, d, r, u, g);
		}
		processstage.Entity = u;
		processstage.EntityName = 'processstage';
		processstage.EntityCollectionName = 'processstages';
		processstage['@odata.etag'] = e['@odata.etag'];
		processstage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		processstage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return processstage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProcessStage = {
		OperationKind : {
			AddToTime: 473330011,
			Alert: 473330005,
			ApiConnection: 473330004,
			AzureMonitorAlert: 473330013,
			Button: 473330003,
			ConvertTimeZone: 473330008,
			CurrentTime: 473330007,
			EventGrid: 473330006,
			FormatNumber: 473330024,
			Geofence: 473330019,
			GetFutureTime: 473330009,
			GetPastTime: 473330010,
			Http: 473330000,
			IndexOf: 473330021,
			JsonToJson: 473330015,
			JsonToText: 473330016,
			Ky_nang: 473330025,
			ODataOpenApiConnection: 473330020,
			PowerApp: 473330001,
			PowerAppV2: 473330002,
			SecurityCenterAlert: 473330014,
			Substring: 473330022,
			SubtractFromTime: 473330012,
			VirtualAgent: 473330023,
			XmlToJson: 473330017,
			XmlToText: 473330018
		},
		OperationType : {
			ApiApp: 473330001,
			ApiConnection: 473330006,
			ApiConnectionNotification: 473330050,
			ApiConnectionWebhook: 473330009,
			ApiManagement: 473330016,
			AppendToArrayVariable: 473330037,
			AppendToStringVariable: 473330038,
			As2Decode: 473330045,
			As2Encode: 473330046,
			Batch: 473330039,
			Changeset: 473330051,
			Compose: 473330013,
			DecrementVariable: 473330035,
			Expression: 473330042,
			FlatFileDecoding: 473330025,
			FlatFileEncoding: 473330018,
			Flow: 473330004,
			Foreach: 473330022,
			Function: 473330015,
			Http: 473330000,
			HttpWebhook: 473330012,
			If: 473330021,
			IncrementVariable: 473330034,
			InitializeVariable: 473330033,
			IntegrationAccountArtifactLookup: 473330027,
			JavascriptCode: 473330044,
			Join: 473330031,
			Liquid: 473330043,
			Manual: 473330008,
			OpenApiConnection: 473330007,
			OpenApiConnectionWebhook: 473330010,
			ParseJson: 473330029,
			Query: 473330014,
			Recurrence: 473330002,
			Request: 473330020,
			Response: 473330011,
			RosettaNetDecode: 473330048,
			RosettaNetEncode: 473330047,
			RosettaNetWaitForResponse: 473330049,
			Scope: 473330019,
			Select: 473330032,
			SendToBatch: 473330040,
			SetVariable: 473330036,
			SlidingWindow: 473330041,
			SwiftEncode: 473330052,
			Switch: 473330028,
			Table: 473330030,
			Terminate: 473330026,
			Until: 473330023,
			Wait: 473330005,
			Workflow: 473330003,
			XmlValidation: 473330017,
			Xslt: 473330024
		},
		PrimaryEntityTypeCode : {
		},
		StageCategory : {
			De_xuat: 2,
			Dinh_tinh: 0,
			Dong: 3,
			Giai_quyet: 6,
			Nghien_cuu: 5,
			Nhan_dang: 4,
			Phat_trien: 1,
			Phe_chuan: 7
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