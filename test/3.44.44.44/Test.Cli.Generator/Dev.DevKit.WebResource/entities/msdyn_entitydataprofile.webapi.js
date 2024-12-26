'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_entitydataprofileApi = function (e) {
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
		var _msdyn_entitydataprofile = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_entitydataprofile_corruptattributes: { a: 'msdyn_entitydataprofile_corruptattributes' },
			msdyn_entitydataprofile_pk: { a: 'msdyn_entitydataprofile_pk' },
			msdyn_entitydataprofile_profiledattributes: { a: 'msdyn_entitydataprofile_profiledattributes' },
			msdyn_entitydataprofile_profilingdate_UtcDateAndTime: { a: 'msdyn_entitydataprofile_profilingdate' },
			msdyn_entitydataprofile_qualifiedentityname: { a: 'msdyn_entitydataprofile_qualifiedentityname' },
			msdyn_entitydataprofile_quarantinerowcount: { a: 'msdyn_entitydataprofile_quarantinerowcount' },
			msdyn_entitydataprofile_rowcount: { a: 'msdyn_entitydataprofile_rowcount' },
			msdyn_entitydataprofileId: { a: 'msdyn_entitydataprofileid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_entitydataprofile = {};
		msdyn_entitydataprofile.ODataEntity = e;
		msdyn_entitydataprofile.FormattedValue = {};
		for (var field in _msdyn_entitydataprofile) {
			var a = _msdyn_entitydataprofile[field].a;
			var b = _msdyn_entitydataprofile[field].b;
			var c = _msdyn_entitydataprofile[field].c;
			var d = _msdyn_entitydataprofile[field].d;
			var g = _msdyn_entitydataprofile[field].g;
			var r = _msdyn_entitydataprofile[field].r;
			webApiField(msdyn_entitydataprofile, field, e, a, b, c, d, r, u, g);
		}
		msdyn_entitydataprofile.Entity = u;
		msdyn_entitydataprofile.EntityName = 'msdyn_entitydataprofile';
		msdyn_entitydataprofile.EntityCollectionName = 'msdyn_entitydataprofiles';
		msdyn_entitydataprofile['@odata.etag'] = e['@odata.etag'];
		msdyn_entitydataprofile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_entitydataprofile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_entitydataprofile;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_entitydataprofile = {
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