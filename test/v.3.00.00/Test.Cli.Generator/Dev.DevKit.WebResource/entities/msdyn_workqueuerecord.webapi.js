'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workqueuerecordApi = function (e) {
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
		var _msdyn_workqueuerecord = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_displayattributes: { a: 'msdyn_displayattributes' },
			msdyn_duetime_UtcDateAndTime: { a: 'msdyn_duetime' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_entitysetname: { a: 'msdyn_entitysetname' },
			msdyn_entitytypecode: { a: 'msdyn_entitytypecode' },
			msdyn_entitytypedisplayname: { a: 'msdyn_entitytypedisplayname' },
			msdyn_entitytypelogicalname: { a: 'msdyn_entitytypelogicalname' },
			msdyn_filterattributes: { a: 'msdyn_filterattributes' },
			msdyn_linkedactivityid: { a: 'msdyn_linkedactivityid' },
			msdyn_nextactionerrorstate: { a: 'msdyn_nextactionerrorstate' },
			msdyn_nextactionid: { a: 'msdyn_nextactionid' },
			msdyn_nextactionname: { a: 'msdyn_nextactionname' },
			msdyn_nextactionsource: { a: 'msdyn_nextactionsource' },
			msdyn_nextactionsubtype: { a: 'msdyn_nextactionsubtype' },
			msdyn_nextactiontype: { a: 'msdyn_nextactiontype' },
			msdyn_nextactiontypedisplayname: { a: 'msdyn_nextactiontypedisplayname' },
			msdyn_nextactionwaitstate: { a: 'msdyn_nextactionwaitstate' },
			msdyn_operationparameter: { a: 'msdyn_operationparameter' },
			msdyn_primaryentityid: { a: 'msdyn_primaryentityid' },
			msdyn_primaryname: { a: 'msdyn_primaryname' },
			msdyn_prioritygrade: { a: 'msdyn_prioritygrade' },
			msdyn_priorityscore: { a: 'msdyn_priorityscore' },
			msdyn_sequenceid: { a: 'msdyn_sequenceid' },
			msdyn_sequencename: { a: 'msdyn_sequencename' },
			msdyn_sequencestepid: { a: 'msdyn_sequencestepid' },
			msdyn_workqueuerecordId: { a: 'msdyn_workqueuerecordid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_workqueuerecord = {};
		msdyn_workqueuerecord.ODataEntity = e;
		msdyn_workqueuerecord.FormattedValue = {};
		for (var field in _msdyn_workqueuerecord) {
			var a = _msdyn_workqueuerecord[field].a;
			var b = _msdyn_workqueuerecord[field].b;
			var c = _msdyn_workqueuerecord[field].c;
			var d = _msdyn_workqueuerecord[field].d;
			var g = _msdyn_workqueuerecord[field].g;
			var r = _msdyn_workqueuerecord[field].r;
			webApiField(msdyn_workqueuerecord, field, e, a, b, c, d, r, u, g);
		}
		msdyn_workqueuerecord.Entity = u;
		msdyn_workqueuerecord.EntityName = 'msdyn_workqueuerecord';
		msdyn_workqueuerecord.EntityCollectionName = 'msdyn_workqueuerecords';
		msdyn_workqueuerecord['@odata.etag'] = e['@odata.etag'];
		msdyn_workqueuerecord.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workqueuerecord.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workqueuerecord;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workqueuerecord = {
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