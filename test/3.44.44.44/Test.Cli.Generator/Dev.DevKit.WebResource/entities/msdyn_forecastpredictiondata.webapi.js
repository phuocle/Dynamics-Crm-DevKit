'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_forecastpredictiondataApi = function (e) {
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
		var _msdyn_forecastpredictiondata = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_childgranularpredictions: { a: 'msdyn_childgranularpredictions' },
			msdyn_forecastconfigurationid: { b: 'msdyn_forecastconfigurationid', a: '_msdyn_forecastconfigurationid_value', c: 'msdyn_forecastconfigurations', d: 'msdyn_forecastconfiguration' },
			msdyn_forecastid: { b: 'msdyn_forecastid', a: '_msdyn_forecastid_value', c: 'msdyn_forecasts', d: 'msdyn_forecast' },
			msdyn_forecastpredictiondataId: { a: 'msdyn_forecastpredictiondataid' },
			msdyn_forecastrecurrenceid: { b: 'msdyn_forecastrecurrenceid', a: '_msdyn_forecastrecurrenceid_value', c: 'msdyn_recurrences', d: 'msdyn_recurrence' },
			msdyn_hierarchyrecordid: { a: 'msdyn_hierarchyrecordid' },
			msdyn_parentgranularpredictions: { a: 'msdyn_parentgranularpredictions' },
			msdyn_predictionon_UtcDateAndTime: { a: 'msdyn_predictionon' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			PartitionId: { a: 'partitionid' },
			TTLInSeconds: { a: 'ttlinseconds' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_forecastpredictiondata = {};
		msdyn_forecastpredictiondata.ODataEntity = e;
		msdyn_forecastpredictiondata.FormattedValue = {};
		for (var field in _msdyn_forecastpredictiondata) {
			var a = _msdyn_forecastpredictiondata[field].a;
			var b = _msdyn_forecastpredictiondata[field].b;
			var c = _msdyn_forecastpredictiondata[field].c;
			var d = _msdyn_forecastpredictiondata[field].d;
			var g = _msdyn_forecastpredictiondata[field].g;
			var r = _msdyn_forecastpredictiondata[field].r;
			webApiField(msdyn_forecastpredictiondata, field, e, a, b, c, d, r, u, g);
		}
		msdyn_forecastpredictiondata.Entity = u;
		msdyn_forecastpredictiondata.EntityName = 'msdyn_forecastpredictiondata';
		msdyn_forecastpredictiondata.EntityCollectionName = 'msdyn_forecastpredictiondatas';
		msdyn_forecastpredictiondata['@odata.etag'] = e['@odata.etag'];
		msdyn_forecastpredictiondata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_forecastpredictiondata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_forecastpredictiondata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_forecastpredictiondata = {
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