'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_virtualsegmentApi = function (e) {
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
		var _msdynmkt_virtualsegment = {
			msdynmkt_baseentity: { a: 'msdynmkt_baseentity' },
			msdynmkt_createdby: { a: 'msdynmkt_createdby' },
			msdynmkt_createddate_UtcDateAndTime: { a: 'msdynmkt_createddate' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_lastupdated_UtcDateAndTime: { a: 'msdynmkt_lastupdated' },
			msdynmkt_lastused_UtcDateAndTime: { a: 'msdynmkt_lastused' },
			msdynmkt_lastusedby: { b: 'msdynmkt_lastusedby', a: '_msdynmkt_lastusedby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_membercount: { a: 'msdynmkt_membercount' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_owningbusinessunit: { b: 'msdynmkt_owningbusinessunit', a: '_msdynmkt_owningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			msdynmkt_publishedjourneycount: { a: 'msdynmkt_publishedjourneycount' },
			msdynmkt_requiresexport: { a: 'msdynmkt_requiresexport' },
			msdynmkt_segmentdetails: { a: 'msdynmkt_segmentdetails' },
			msdynmkt_source: { a: 'msdynmkt_source' },
			msdynmkt_sourceentity: { a: 'msdynmkt_sourceentity' },
			msdynmkt_sourceentityid: { a: 'msdynmkt_sourceentityid' },
			msdynmkt_sourceuri: { a: 'msdynmkt_sourceuri' },
			msdynmkt_statecode: { a: 'msdynmkt_statecode' },
			msdynmkt_statuscode: { a: 'msdynmkt_statuscode' },
			msdynmkt_type: { a: 'msdynmkt_type' },
			msdynmkt_virtualsegmentId: { a: 'msdynmkt_virtualsegmentid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_virtualsegment = {};
		msdynmkt_virtualsegment.ODataEntity = e;
		msdynmkt_virtualsegment.FormattedValue = {};
		for (var field in _msdynmkt_virtualsegment) {
			var a = _msdynmkt_virtualsegment[field].a;
			var b = _msdynmkt_virtualsegment[field].b;
			var c = _msdynmkt_virtualsegment[field].c;
			var d = _msdynmkt_virtualsegment[field].d;
			var g = _msdynmkt_virtualsegment[field].g;
			var r = _msdynmkt_virtualsegment[field].r;
			webApiField(msdynmkt_virtualsegment, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_virtualsegment.Entity = u;
		msdynmkt_virtualsegment.EntityName = 'msdynmkt_virtualsegment';
		msdynmkt_virtualsegment.EntityCollectionName = 'msdynmkt_virtualsegments';
		msdynmkt_virtualsegment['@odata.etag'] = e['@odata.etag'];
		msdynmkt_virtualsegment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_virtualsegment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_virtualsegment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_virtualsegment = {
		msdynmkt_source : {
			Customer_Insights_Data: 0,
			Customer_Insights_Journeys: 2,
			Dynamics_365_Marketing_outbound: 1
		},
		msdynmkt_statecode : {
			Active: 0,
			Inactive: 1
		},
		msdynmkt_statuscode : {
			Completed_with_warnings: 4,
			Deactivated: 2,
			Draft: 1,
			Getting_ready: 3,
			Ready_to_use: 0,
			Stopped: 6,
			Stopping: 5
		},
		msdynmkt_type : {
			Compound: 3,
			Dynamic: 2,
			Expansion: 4,
			Static: 1,
			Unknown: 0
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