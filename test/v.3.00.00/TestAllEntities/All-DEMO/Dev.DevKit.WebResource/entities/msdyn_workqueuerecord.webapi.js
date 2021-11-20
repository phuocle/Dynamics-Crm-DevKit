'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workqueuerecordApi = function (e) {
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
		var msdyn_workqueuerecord = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_duetime_UtcDateAndTime: { a: 'msdyn_duetime' },
			msdyn_endtime_UtcDateAndTime: { a: 'msdyn_endtime' },
			msdyn_entitysetname: { a: 'msdyn_entitysetname' },
			msdyn_entitytypecode: { a: 'msdyn_entitytypecode' },
			msdyn_entitytypedisplayname: { a: 'msdyn_entitytypedisplayname' },
			msdyn_entitytypelogicalname: { a: 'msdyn_entitytypelogicalname' },
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
		for (var field in msdyn_workqueuerecord) {
			var a = msdyn_workqueuerecord[field].a;
			var b = msdyn_workqueuerecord[field].b;
			var c = msdyn_workqueuerecord[field].c;
			var d = msdyn_workqueuerecord[field].d;
			var g = msdyn_workqueuerecord[field].g;
			var r = msdyn_workqueuerecord[field].r;
			msdyn_workqueuerecord[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_workqueuerecord.Entity = u;
		msdyn_workqueuerecord.EntityName = 'msdyn_workqueuerecord';
		msdyn_workqueuerecord.EntityCollectionName = 'msdyn_workqueuerecords';
		msdyn_workqueuerecord['@odata.etag'] = e['@odata.etag'];
		msdyn_workqueuerecord.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workqueuerecord.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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