'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_optimizationcustomercountApi = function (e) {
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
		var _msdynmkt_optimizationcustomercount = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_customerid: { a: 'msdynmkt_customerid' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_optimizationcustomercountId: { a: 'msdynmkt_optimizationcustomercountid' },
			msdynmkt_selectedchannel: { a: 'msdynmkt_selectedchannel' },
			msdynmkt_successes: { a: 'msdynmkt_successes' },
			msdynmkt_targetentity: { a: 'msdynmkt_targetentity' },
			msdynmkt_trials: { a: 'msdynmkt_trials' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_optimizationcustomercount = {};
		msdynmkt_optimizationcustomercount.ODataEntity = e;
		msdynmkt_optimizationcustomercount.FormattedValue = {};
		for (var field in _msdynmkt_optimizationcustomercount) {
			var a = _msdynmkt_optimizationcustomercount[field].a;
			var b = _msdynmkt_optimizationcustomercount[field].b;
			var c = _msdynmkt_optimizationcustomercount[field].c;
			var d = _msdynmkt_optimizationcustomercount[field].d;
			var g = _msdynmkt_optimizationcustomercount[field].g;
			var r = _msdynmkt_optimizationcustomercount[field].r;
			webApiField(msdynmkt_optimizationcustomercount, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_optimizationcustomercount.Entity = u;
		msdynmkt_optimizationcustomercount.EntityName = 'msdynmkt_optimizationcustomercount';
		msdynmkt_optimizationcustomercount.EntityCollectionName = 'msdynmkt_optimizationcustomercounts';
		msdynmkt_optimizationcustomercount['@odata.etag'] = e['@odata.etag'];
		msdynmkt_optimizationcustomercount.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_optimizationcustomercount.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_optimizationcustomercount;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_optimizationcustomercount = {
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