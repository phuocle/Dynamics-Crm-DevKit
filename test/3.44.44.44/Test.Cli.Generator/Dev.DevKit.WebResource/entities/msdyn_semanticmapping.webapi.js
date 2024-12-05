'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_semanticmappingApi = function (e) {
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
		var _msdyn_semanticmapping = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_semanticmapping_attributepredictionsmap: { a: 'msdyn_semanticmapping_attributepredictionsmap' },
			msdyn_semanticmapping_columncount: { a: 'msdyn_semanticmapping_columncount' },
			msdyn_semanticmapping_pk: { a: 'msdyn_semanticmapping_pk' },
			msdyn_semanticmapping_profilingdate_UtcDateAndTime: { a: 'msdyn_semanticmapping_profilingdate' },
			msdyn_semanticmapping_qualifiedentityname: { a: 'msdyn_semanticmapping_qualifiedentityname' },
			msdyn_semanticmapping_rowcount: { a: 'msdyn_semanticmapping_rowcount' },
			msdyn_semanticmapping_samplecount: { a: 'msdyn_semanticmapping_samplecount' },
			msdyn_semanticmappingId: { a: 'msdyn_semanticmappingid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_semanticmapping = {};
		msdyn_semanticmapping.ODataEntity = e;
		msdyn_semanticmapping.FormattedValue = {};
		for (var field in _msdyn_semanticmapping) {
			var a = _msdyn_semanticmapping[field].a;
			var b = _msdyn_semanticmapping[field].b;
			var c = _msdyn_semanticmapping[field].c;
			var d = _msdyn_semanticmapping[field].d;
			var g = _msdyn_semanticmapping[field].g;
			var r = _msdyn_semanticmapping[field].r;
			webApiField(msdyn_semanticmapping, field, e, a, b, c, d, r, u, g);
		}
		msdyn_semanticmapping.Entity = u;
		msdyn_semanticmapping.EntityName = 'msdyn_semanticmapping';
		msdyn_semanticmapping.EntityCollectionName = 'msdyn_semanticmappings';
		msdyn_semanticmapping['@odata.etag'] = e['@odata.etag'];
		msdyn_semanticmapping.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_semanticmapping.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_semanticmapping;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_semanticmapping = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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