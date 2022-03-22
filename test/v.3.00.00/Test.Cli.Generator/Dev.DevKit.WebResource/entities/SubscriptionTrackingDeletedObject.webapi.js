'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SubscriptionTrackingDeletedObjectApi = function (e) {
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
		var _subscriptiontrackingdeletedobject = {
			CrmCreatedOn_UtcDateAndTime: { a: 'crmcreatedon' },
			DeleteTime_UtcDateAndTime: { a: 'deletetime' },
			IsLogicalDelete: { a: 'islogicaldelete' },
			ObjectId: { a: 'objectid', r: true },
			TimeStamp: { a: 'timestamp', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var subscriptiontrackingdeletedobject = {};
		subscriptiontrackingdeletedobject.ODataEntity = e;
		subscriptiontrackingdeletedobject.FormattedValue = {};
		for (var field in _subscriptiontrackingdeletedobject) {
			var a = _subscriptiontrackingdeletedobject[field].a;
			var b = _subscriptiontrackingdeletedobject[field].b;
			var c = _subscriptiontrackingdeletedobject[field].c;
			var d = _subscriptiontrackingdeletedobject[field].d;
			var g = _subscriptiontrackingdeletedobject[field].g;
			var r = _subscriptiontrackingdeletedobject[field].r;
			webApiField(subscriptiontrackingdeletedobject, field, e, a, b, c, d, r, u, g);
		}
		subscriptiontrackingdeletedobject.Entity = u;
		subscriptiontrackingdeletedobject.EntityName = 'subscriptiontrackingdeletedobject';
		subscriptiontrackingdeletedobject.EntityCollectionName = 'subscriptiontrackingdeletedobjects';
		subscriptiontrackingdeletedobject['@odata.etag'] = e['@odata.etag'];
		subscriptiontrackingdeletedobject.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		subscriptiontrackingdeletedobject.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return subscriptiontrackingdeletedobject;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SubscriptionTrackingDeletedObject = {
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