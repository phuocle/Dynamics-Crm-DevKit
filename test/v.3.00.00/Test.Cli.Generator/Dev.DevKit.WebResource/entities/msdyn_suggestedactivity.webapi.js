'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_suggestedactivityApi = function (e) {
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
		var _msdyn_suggestedactivity = {
			msdyn_ActivityType: { a: 'msdyn_activitytype' },
			msdyn_BodyPreview: { a: 'msdyn_bodypreview' },
			msdyn_createddate_UtcDateAndTime: { a: 'msdyn_createddate' },
			msdyn_duration: { a: 'msdyn_duration' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_exchangeweblink: { a: 'msdyn_exchangeweblink' },
			msdyn_Importance: { a: 'msdyn_importance' },
			msdyn_location: { a: 'msdyn_location' },
			msdyn_regardingname: { a: 'msdyn_regardingname' },
			msdyn_sender: { a: 'msdyn_sender' },
			msdyn_sendername: { a: 'msdyn_sendername' },
			msdyn_starttime_UtcDateAndTime: { a: 'msdyn_starttime' },
			msdyn_Subject: { a: 'msdyn_subject' },
			msdyn_suggestedactivityId: { a: 'msdyn_suggestedactivityid' },
			msdyn_to: { a: 'msdyn_to' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_suggestedactivity = {};
		msdyn_suggestedactivity.ODataEntity = e;
		msdyn_suggestedactivity.FormattedValue = {};
		for (var field in _msdyn_suggestedactivity) {
			var a = _msdyn_suggestedactivity[field].a;
			var b = _msdyn_suggestedactivity[field].b;
			var c = _msdyn_suggestedactivity[field].c;
			var d = _msdyn_suggestedactivity[field].d;
			var g = _msdyn_suggestedactivity[field].g;
			var r = _msdyn_suggestedactivity[field].r;
			webApiField(msdyn_suggestedactivity, field, e, a, b, c, d, r, u, g);
		}
		msdyn_suggestedactivity.Entity = u;
		msdyn_suggestedactivity.EntityName = 'msdyn_suggestedactivity';
		msdyn_suggestedactivity.EntityCollectionName = 'msdyn_suggestedactivities';
		msdyn_suggestedactivity['@odata.etag'] = e['@odata.etag'];
		msdyn_suggestedactivity.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_suggestedactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_suggestedactivity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_suggestedactivity = {
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