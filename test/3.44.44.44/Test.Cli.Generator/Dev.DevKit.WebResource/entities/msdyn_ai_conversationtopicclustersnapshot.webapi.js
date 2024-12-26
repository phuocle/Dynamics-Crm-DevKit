'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ai_conversationtopicclustersnapshotApi = function (e) {
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
		var _msdyn_ai_conversationtopicclustersnapshot = {
			msdyn_ai_conversationtopicclustersnapshotId: { a: 'msdyn_ai_conversationtopicclustersnapshotid' },
			msdyn_centroid_id: { a: 'msdyn_centroid_id' },
			msdyn_centroid_vector: { a: 'msdyn_centroid_vector' },
			msdyn_cluster_name: { a: 'msdyn_cluster_name' },
			msdyn_cluster_size: { a: 'msdyn_cluster_size' },
			msdyn_created_datetime_UtcDateAndTime: { a: 'msdyn_created_datetime' },
			msdyn_items: { a: 'msdyn_items' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_user_feedback: { a: 'msdyn_user_feedback' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_ai_conversationtopicclustersnapshot = {};
		msdyn_ai_conversationtopicclustersnapshot.ODataEntity = e;
		msdyn_ai_conversationtopicclustersnapshot.FormattedValue = {};
		for (var field in _msdyn_ai_conversationtopicclustersnapshot) {
			var a = _msdyn_ai_conversationtopicclustersnapshot[field].a;
			var b = _msdyn_ai_conversationtopicclustersnapshot[field].b;
			var c = _msdyn_ai_conversationtopicclustersnapshot[field].c;
			var d = _msdyn_ai_conversationtopicclustersnapshot[field].d;
			var g = _msdyn_ai_conversationtopicclustersnapshot[field].g;
			var r = _msdyn_ai_conversationtopicclustersnapshot[field].r;
			webApiField(msdyn_ai_conversationtopicclustersnapshot, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ai_conversationtopicclustersnapshot.Entity = u;
		msdyn_ai_conversationtopicclustersnapshot.EntityName = 'msdyn_ai_conversationtopicclustersnapshot';
		msdyn_ai_conversationtopicclustersnapshot.EntityCollectionName = 'msdyn_ai_conversationtopicclustersnapshots';
		msdyn_ai_conversationtopicclustersnapshot['@odata.etag'] = e['@odata.etag'];
		msdyn_ai_conversationtopicclustersnapshot.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ai_conversationtopicclustersnapshot.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ai_conversationtopicclustersnapshot;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ai_conversationtopicclustersnapshot = {
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