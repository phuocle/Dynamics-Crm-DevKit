'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_msdyn_customerasset_knowledgebasereApi = function (e) {
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
		var _msdyn_msdyn_customerasset_knowledgebasere = {
			knowledgebaserecordid: { a: 'knowledgebaserecordid', r: true },
			msdyn_customerassetid: { a: 'msdyn_customerassetid', r: true },
			msdyn_msdyn_customerasset_knowledgebasereId: { a: 'msdyn_msdyn_customerasset_knowledgebasereid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_msdyn_customerasset_knowledgebasere = {};
		msdyn_msdyn_customerasset_knowledgebasere.ODataEntity = e;
		msdyn_msdyn_customerasset_knowledgebasere.FormattedValue = {};
		for (var field in _msdyn_msdyn_customerasset_knowledgebasere) {
			var a = _msdyn_msdyn_customerasset_knowledgebasere[field].a;
			var b = _msdyn_msdyn_customerasset_knowledgebasere[field].b;
			var c = _msdyn_msdyn_customerasset_knowledgebasere[field].c;
			var d = _msdyn_msdyn_customerasset_knowledgebasere[field].d;
			var g = _msdyn_msdyn_customerasset_knowledgebasere[field].g;
			var r = _msdyn_msdyn_customerasset_knowledgebasere[field].r;
			webApiField(msdyn_msdyn_customerasset_knowledgebasere, field, e, a, b, c, d, r, u, g);
		}
		msdyn_msdyn_customerasset_knowledgebasere.Entity = u;
		msdyn_msdyn_customerasset_knowledgebasere.EntityName = 'msdyn_msdyn_customerasset_knowledgebasere';
		msdyn_msdyn_customerasset_knowledgebasere.EntityCollectionName = '';
		msdyn_msdyn_customerasset_knowledgebasere['@odata.etag'] = e['@odata.etag'];
		msdyn_msdyn_customerasset_knowledgebasere.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_msdyn_customerasset_knowledgebasere.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_msdyn_customerasset_knowledgebasere;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_msdyn_customerasset_knowledgebasere = {
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