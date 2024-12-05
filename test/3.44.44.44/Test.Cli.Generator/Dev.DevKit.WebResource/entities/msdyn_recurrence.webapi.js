'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_recurrenceApi = function (e) {
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
		var _msdyn_recurrence = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_forecastconfigurationid: { b: 'msdyn_forecastconfigurationid', a: '_msdyn_forecastconfigurationid_value', c: 'msdyn_forecastconfigurations', d: 'msdyn_forecastconfiguration' },
			msdyn_forecastrecurrencename: { a: 'msdyn_forecastrecurrencename' },
			msdyn_lastcomputedon_UtcDateAndTime: { a: 'msdyn_lastcomputedon' },
			msdyn_recomputationstarttime_UtcDateAndTime: { a: 'msdyn_recomputationstarttime' },
			msdyn_recomputeexecutorid: { a: 'msdyn_recomputeexecutorid' },
			msdyn_recomputepriority: { a: 'msdyn_recomputepriority' },
			msdyn_recomputestatus: { a: 'msdyn_recomputestatus' },
			msdyn_recomputestatuschangedon_UtcDateAndTime: { a: 'msdyn_recomputestatuschangedon' },
			msdyn_recurrencefailureinfo: { a: 'msdyn_recurrencefailureinfo' },
			msdyn_recurrenceId: { a: 'msdyn_recurrenceid' },
			msdyn_recurrenceindex: { a: 'msdyn_recurrenceindex' },
			msdyn_recurrencestate: { a: 'msdyn_recurrencestate' },
			msdyn_validfrom_UtcDateAndTime: { a: 'msdyn_validfrom' },
			msdyn_validto_UtcDateAndTime: { a: 'msdyn_validto' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_recurrence = {};
		msdyn_recurrence.ODataEntity = e;
		msdyn_recurrence.FormattedValue = {};
		for (var field in _msdyn_recurrence) {
			var a = _msdyn_recurrence[field].a;
			var b = _msdyn_recurrence[field].b;
			var c = _msdyn_recurrence[field].c;
			var d = _msdyn_recurrence[field].d;
			var g = _msdyn_recurrence[field].g;
			var r = _msdyn_recurrence[field].r;
			webApiField(msdyn_recurrence, field, e, a, b, c, d, r, u, g);
		}
		msdyn_recurrence.Entity = u;
		msdyn_recurrence.EntityName = 'msdyn_recurrence';
		msdyn_recurrence.EntityCollectionName = 'msdyn_recurrences';
		msdyn_recurrence['@odata.etag'] = e['@odata.etag'];
		msdyn_recurrence.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_recurrence.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_recurrence;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_recurrence = {
		msdyn_recomputepriority : {
			High: 1,
			Normal: 0
		},
		msdyn_recomputestatus : {
			Completed: 30,
			Failed: 40,
			InProgress: 20,
			New: 0,
			Queued: 10
		},
		msdyn_recurrencestate : {
			Active: 0,
			Inactive: 1
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