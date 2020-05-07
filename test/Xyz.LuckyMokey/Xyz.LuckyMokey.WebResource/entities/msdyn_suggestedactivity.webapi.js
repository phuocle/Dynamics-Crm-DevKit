'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_suggestedactivityApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var msdyn_suggestedactivity = {
			msdyn_ActivityType: { a: 'msdyn_activitytype' },
			msdyn_BodyPreview: { a: 'msdyn_bodypreview' },
			msdyn_createddate_UtcDateAndTime: { a: 'msdyn_createddate' },
			msdyn_duration: { a: 'msdyn_duration' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_exchangeweblink: { a: 'msdyn_exchangeweblink' },
			msdyn_Importance: { a: 'msdyn_importance' },
			msdyn_location: { a: 'msdyn_location' },
			msdyn_regardingid: { b: 'msdyn_regardingid', a: '_msdyn_regardingid_value', c: '', d: '' },
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
		for (var field in msdyn_suggestedactivity) {
			var a = msdyn_suggestedactivity[field].a;
			var b = msdyn_suggestedactivity[field].b;
			var c = msdyn_suggestedactivity[field].c;
			var d = msdyn_suggestedactivity[field].d;
			var g = msdyn_suggestedactivity[field].g;
			var r = msdyn_suggestedactivity[field].r;
			msdyn_suggestedactivity[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_suggestedactivity.Entity = u;
		msdyn_suggestedactivity.EntityName = 'msdyn_suggestedactivity';
		msdyn_suggestedactivity.EntityCollectionName = 'msdyn_suggestedactivities';
		msdyn_suggestedactivity['@odata.etag'] = e['@odata.etag'];
		msdyn_suggestedactivity.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_suggestedactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_suggestedactivity;
	};
})(LuckyMokey || (LuckyMokey = {}));
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