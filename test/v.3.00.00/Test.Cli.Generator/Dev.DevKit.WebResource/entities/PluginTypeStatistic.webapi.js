﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PluginTypeStatisticApi = function (e) {
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
		var _plugintypestatistic = {
			AverageExecuteTimeInMilliseconds: { a: 'averageexecutetimeinmilliseconds', r: true },
			CrashContributionPercent: { a: 'crashcontributionpercent', r: true },
			CrashCount: { a: 'crashcount', r: true },
			CrashPercent: { a: 'crashpercent', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExecuteCount: { a: 'executecount', r: true },
			FailureCount: { a: 'failurecount', r: true },
			FailurePercent: { a: 'failurepercent', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			PluginTypeId: { b: 'plugintypeid', a: '_plugintypeid_value', c: 'plugintypes', d: 'plugintype', r: true },
			PluginTypeStatisticId: { a: 'plugintypestatisticid', r: true },
			TerminateCpuContributionPercent: { a: 'terminatecpucontributionpercent', r: true },
			TerminateHandlesContributionPercent: { a: 'terminatehandlescontributionpercent', r: true },
			TerminateMemoryContributionPercent: { a: 'terminatememorycontributionpercent', r: true },
			TerminateOtherContributionPercent: { a: 'terminateothercontributionpercent', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var plugintypestatistic = {};
		plugintypestatistic.ODataEntity = e;
		plugintypestatistic.FormattedValue = {};
		for (var field in _plugintypestatistic) {
			var a = _plugintypestatistic[field].a;
			var b = _plugintypestatistic[field].b;
			var c = _plugintypestatistic[field].c;
			var d = _plugintypestatistic[field].d;
			var g = _plugintypestatistic[field].g;
			var r = _plugintypestatistic[field].r;
			webApiField(plugintypestatistic, field, e, a, b, c, d, r, u, g);
		}
		plugintypestatistic.Entity = u;
		plugintypestatistic.EntityName = 'plugintypestatistic';
		plugintypestatistic.EntityCollectionName = 'plugintypestatistics';
		plugintypestatistic['@odata.etag'] = e['@odata.etag'];
		plugintypestatistic.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		plugintypestatistic.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return plugintypestatistic;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PluginTypeStatistic = {
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