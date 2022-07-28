'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SubscriptionSyncInfoApi = function (e) {
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
		var _subscriptionsyncinfo = {
			ClientVersion: { a: 'clientversion' },
			DataSize: { a: 'datasize' },
			DeleteObjectCount: { a: 'deleteobjectcount' },
			EndTime_UtcDateOnly: { a: 'endtime', r: true },
			InsertObjectCount: { a: 'insertobjectcount' },
			StartTime_UtcDateOnly: { a: 'starttime', r: true },
			SubscriptionId: { b: 'subscriptionid', a: '_subscriptionid_value', c: 'subscriptions', d: 'subscription' },
			SubscriptionSyncInfoId1: { a: 'subscriptionsyncinfoid', r: true },
			SyncResult: { a: 'syncresult' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var subscriptionsyncinfo = {};
		subscriptionsyncinfo.ODataEntity = e;
		subscriptionsyncinfo.FormattedValue = {};
		for (var field in _subscriptionsyncinfo) {
			var a = _subscriptionsyncinfo[field].a;
			var b = _subscriptionsyncinfo[field].b;
			var c = _subscriptionsyncinfo[field].c;
			var d = _subscriptionsyncinfo[field].d;
			var g = _subscriptionsyncinfo[field].g;
			var r = _subscriptionsyncinfo[field].r;
			webApiField(subscriptionsyncinfo, field, e, a, b, c, d, r, u, g);
		}
		subscriptionsyncinfo.Entity = u;
		subscriptionsyncinfo.EntityName = 'subscriptionsyncinfo';
		subscriptionsyncinfo.EntityCollectionName = 'subscriptionsyncinfos';
		subscriptionsyncinfo['@odata.etag'] = e['@odata.etag'];
		subscriptionsyncinfo.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		subscriptionsyncinfo.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return subscriptionsyncinfo;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SubscriptionSyncInfo = {
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