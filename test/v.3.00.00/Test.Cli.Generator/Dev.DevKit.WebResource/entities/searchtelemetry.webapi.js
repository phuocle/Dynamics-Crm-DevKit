'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.searchtelemetryApi = function (e) {
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
		var _searchtelemetry = {
			CorrelationId: { a: 'correlationid' },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			EyesOnAnalyticsAllowed: { a: 'eyesonanalyticsallowed' },
			FeedbackData: { a: 'feedbackdata' },
			RequestId: { a: 'requestid' },
			ScenarioName: { a: 'scenarioname' },
			searchtelemetryId: { a: 'searchtelemetryid' },
			SessionId: { a: 'sessionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			UserQuery: { a: 'userquery' }
		};
		if (e === undefined) e = {};
		var u = {};
		var searchtelemetry = {};
		searchtelemetry.ODataEntity = e;
		searchtelemetry.FormattedValue = {};
		for (var field in _searchtelemetry) {
			var a = _searchtelemetry[field].a;
			var b = _searchtelemetry[field].b;
			var c = _searchtelemetry[field].c;
			var d = _searchtelemetry[field].d;
			var g = _searchtelemetry[field].g;
			var r = _searchtelemetry[field].r;
			webApiField(searchtelemetry, field, e, a, b, c, d, r, u, g);
		}
		searchtelemetry.Entity = u;
		searchtelemetry.EntityName = 'searchtelemetry';
		searchtelemetry.EntityCollectionName = 'searchtelemetries';
		searchtelemetry['@odata.etag'] = e['@odata.etag'];
		searchtelemetry.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		searchtelemetry.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return searchtelemetry;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.searchtelemetry = {
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