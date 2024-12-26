'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SolutionHistoryDataApi = function (e) {
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
		var _solutionhistorydata = {
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
		var solutionhistorydata = {};
		solutionhistorydata.ODataEntity = e;
		solutionhistorydata.FormattedValue = {};
		for (var field in _solutionhistorydata) {
			var a = _solutionhistorydata[field].a;
			var b = _solutionhistorydata[field].b;
			var c = _solutionhistorydata[field].c;
			var d = _solutionhistorydata[field].d;
			var g = _solutionhistorydata[field].g;
			var r = _solutionhistorydata[field].r;
			webApiField(solutionhistorydata, field, e, a, b, c, d, r, u, g);
		}
		solutionhistorydata.Entity = u;
		solutionhistorydata.EntityName = 'solutionhistorydata';
		solutionhistorydata.EntityCollectionName = 'solutionhistorydatas';
		solutionhistorydata['@odata.etag'] = e['@odata.etag'];
		solutionhistorydata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solutionhistorydata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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