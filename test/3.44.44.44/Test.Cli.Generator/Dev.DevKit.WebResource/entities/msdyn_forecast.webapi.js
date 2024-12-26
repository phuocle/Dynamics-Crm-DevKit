'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_forecastApi = function (e) {
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
		var _msdyn_forecast = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_aggregatedcolumns: { a: 'msdyn_aggregatedcolumns' },
			msdyn_forecastconfigurationid: { b: 'msdyn_forecastconfigurationid', a: '_msdyn_forecastconfigurationid_value', c: 'msdyn_forecastconfigurations', d: 'msdyn_forecastconfiguration' },
			msdyn_forecastId: { a: 'msdyn_forecastid' },
			msdyn_forecastrecurrenceid: { b: 'msdyn_forecastrecurrenceid', a: '_msdyn_forecastrecurrenceid_value', c: 'msdyn_recurrences', d: 'msdyn_recurrence' },
			msdyn_hierarchyentityrecord: { a: 'msdyn_hierarchyentityrecord' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ownerid: { b: 'msdyn_ownerid', a: '_msdyn_ownerid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_parentinstanceid: { b: 'msdyn_parentinstanceid', a: '_msdyn_parentinstanceid_value', c: 'msdyn_forecasts', d: 'msdyn_forecast' },
			msdyn_rolledupcolumns: { a: 'msdyn_rolledupcolumns' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_forecast = {};
		msdyn_forecast.ODataEntity = e;
		msdyn_forecast.FormattedValue = {};
		for (var field in _msdyn_forecast) {
			var a = _msdyn_forecast[field].a;
			var b = _msdyn_forecast[field].b;
			var c = _msdyn_forecast[field].c;
			var d = _msdyn_forecast[field].d;
			var g = _msdyn_forecast[field].g;
			var r = _msdyn_forecast[field].r;
			webApiField(msdyn_forecast, field, e, a, b, c, d, r, u, g);
		}
		msdyn_forecast.Entity = u;
		msdyn_forecast.EntityName = 'msdyn_forecast';
		msdyn_forecast.EntityCollectionName = 'msdyn_forecasts';
		msdyn_forecast['@odata.etag'] = e['@odata.etag'];
		msdyn_forecast.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_forecast.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_forecast;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecast = {
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