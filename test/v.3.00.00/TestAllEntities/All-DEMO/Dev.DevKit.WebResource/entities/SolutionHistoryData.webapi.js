'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SolutionHistoryDataApi = function (e) {
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
		var solutionhistorydata = {
			ActivityId: { a: 'activityid' },
			CorrelationId: { a: 'correlationid' },
			EndTime_UtcDateAndTime: { a: 'endtime' },
			ErrorCode: { a: 'errorcode' },
			ExceptionMessage: { a: 'exceptionmessage' },
			ExceptionStack: { a: 'exceptionstack' },
			IsManaged: { a: 'ismanaged' },
			IsMicrosoftPublisher: { a: 'ismicrosoftpublisher' },
			IsOverwriteCustomizations: { a: 'isoverwritecustomizations' },
			IsPatch: { a: 'ispatch' },
			Operation: { a: 'operation' },
			PackageName: { a: 'packagename' },
			PackageVersion: { a: 'packageversion' },
			PublisherName: { a: 'publishername' },
			Result: { a: 'result' },
			SolutionHistoryDataId: { a: 'solutionhistorydataid' },
			SolutionId: { a: 'solutionid' },
			SolutionName: { a: 'solutionname' },
			SolutionVersion: { a: 'solutionversion' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
			Status: { a: 'status' },
			SubOperation: { a: 'suboperation' }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in solutionhistorydata) {
			var a = solutionhistorydata[field].a;
			var b = solutionhistorydata[field].b;
			var c = solutionhistorydata[field].c;
			var d = solutionhistorydata[field].d;
			var g = solutionhistorydata[field].g;
			var r = solutionhistorydata[field].r;
			solutionhistorydata[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		solutionhistorydata.Entity = u;
		solutionhistorydata.EntityName = 'solutionhistorydata';
		solutionhistorydata.EntityCollectionName = 'solutionhistorydatas';
		solutionhistorydata['@odata.etag'] = e['@odata.etag'];
		solutionhistorydata.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solutionhistorydata.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return solutionhistorydata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SolutionHistoryData = {
		Operation : {
			Export: 2,
			Import: 0,
			Uninstall: 1
		},
		Status : {
			End: 1,
			Start: 0
		},
		SubOperation : {
			Delete: 4,
			New: 1,
			None: 0,
			Update: 3,
			Upgrade: 2
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