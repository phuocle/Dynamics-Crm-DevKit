'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SubscriptionSyncEntryOutlookApi = function (e) {
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
		var _subscriptionsyncentryoutlook = {
			ObjectId: { a: 'objectid' },
			ObjectTypeCode: { a: 'objecttypecode' },
			SubscriptionId: { a: 'subscriptionid' },
			SyncState: { a: 'syncstate' },
			VersionNumber: { a: 'versionnumber' }
		};
		if (e === undefined) e = {};
		var u = {};
		var subscriptionsyncentryoutlook = {};
		subscriptionsyncentryoutlook.ODataEntity = e;
		subscriptionsyncentryoutlook.FormattedValue = {};
		for (var field in _subscriptionsyncentryoutlook) {
			var a = _subscriptionsyncentryoutlook[field].a;
			var b = _subscriptionsyncentryoutlook[field].b;
			var c = _subscriptionsyncentryoutlook[field].c;
			var d = _subscriptionsyncentryoutlook[field].d;
			var g = _subscriptionsyncentryoutlook[field].g;
			var r = _subscriptionsyncentryoutlook[field].r;
			webApiField(subscriptionsyncentryoutlook, field, e, a, b, c, d, r, u, g);
		}
		subscriptionsyncentryoutlook.Entity = u;
		subscriptionsyncentryoutlook.EntityName = 'subscriptionsyncentryoutlook';
		subscriptionsyncentryoutlook.EntityCollectionName = 'subscriptionsyncentriesoutlook';
		subscriptionsyncentryoutlook['@odata.etag'] = e['@odata.etag'];
		subscriptionsyncentryoutlook.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		subscriptionsyncentryoutlook.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return subscriptionsyncentryoutlook;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SubscriptionSyncEntryOutlook = {
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