'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SubscriptionManuallyTrackedObjectApi = function (e) {
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
		var _subscriptionmanuallytrackedobject = {
			ObjectId: { a: 'objectid' },
			SubscriptionId: { a: 'subscriptionid' },
			SubscriptionManuallyTrackedObjectId: { a: 'subscriptionmanuallytrackedobjectid' },
			Track: { a: 'track' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var subscriptionmanuallytrackedobject = {};
		subscriptionmanuallytrackedobject.ODataEntity = e;
		subscriptionmanuallytrackedobject.FormattedValue = {};
		for (var field in _subscriptionmanuallytrackedobject) {
			var a = _subscriptionmanuallytrackedobject[field].a;
			var b = _subscriptionmanuallytrackedobject[field].b;
			var c = _subscriptionmanuallytrackedobject[field].c;
			var d = _subscriptionmanuallytrackedobject[field].d;
			var g = _subscriptionmanuallytrackedobject[field].g;
			var r = _subscriptionmanuallytrackedobject[field].r;
			webApiField(subscriptionmanuallytrackedobject, field, e, a, b, c, d, r, u, g);
		}
		subscriptionmanuallytrackedobject.Entity = u;
		subscriptionmanuallytrackedobject.EntityName = 'subscriptionmanuallytrackedobject';
		subscriptionmanuallytrackedobject.EntityCollectionName = 'subscriptionmanuallytrackedobjects';
		subscriptionmanuallytrackedobject['@odata.etag'] = e['@odata.etag'];
		subscriptionmanuallytrackedobject.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		subscriptionmanuallytrackedobject.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return subscriptionmanuallytrackedobject;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SubscriptionManuallyTrackedObject = {
		ObjectTypeCode : {
			Nguoi_lien_he: 2,
			Nhiem_vu: 4212
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