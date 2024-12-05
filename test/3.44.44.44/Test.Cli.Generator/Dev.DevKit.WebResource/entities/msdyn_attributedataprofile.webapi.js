'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_attributedataprofileApi = function (e) {
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
		var _msdyn_attributedataprofile = {
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			msdyn_attributedataprofile_attributename: { a: 'msdyn_attributedataprofile_attributename' },
			msdyn_attributedataprofile_checkifexactstats: { a: 'msdyn_attributedataprofile_checkifexactstats' },
			msdyn_attributedataprofile_count: { a: 'msdyn_attributedataprofile_count' },
			msdyn_attributedataprofile_errorcount: { a: 'msdyn_attributedataprofile_errorcount' },
			msdyn_attributedataprofile_histogramserialized: { a: 'msdyn_attributedataprofile_histogramserialized' },
			msdyn_attributedataprofile_max: { a: 'msdyn_attributedataprofile_max' },
			msdyn_attributedataprofile_min: { a: 'msdyn_attributedataprofile_min' },
			msdyn_attributedataprofile_missingcount: { a: 'msdyn_attributedataprofile_missingcount' },
			msdyn_attributedataprofile_momentskurtosis: { a: 'msdyn_attributedataprofile_momentskurtosis' },
			msdyn_attributedataprofile_momentsmean: { a: 'msdyn_attributedataprofile_momentsmean' },
			msdyn_attributedataprofile_momentsskewness: { a: 'msdyn_attributedataprofile_momentsskewness' },
			msdyn_attributedataprofile_momentsstddeviation: { a: 'msdyn_attributedataprofile_momentsstddeviation' },
			msdyn_attributedataprofile_momentsvariance: { a: 'msdyn_attributedataprofile_momentsvariance' },
			msdyn_attributedataprofile_pk: { a: 'msdyn_attributedataprofile_pk' },
			msdyn_attributedataprofile_profilingdate_UtcDateAndTime: { a: 'msdyn_attributedataprofile_profilingdate' },
			msdyn_attributedataprofile_qualifiedentityname: { a: 'msdyn_attributedataprofile_qualifiedentityname' },
			msdyn_attributedataprofile_quantilesp0d1: { a: 'msdyn_attributedataprofile_quantilesp0d1' },
			msdyn_attributedataprofile_quantilesp1: { a: 'msdyn_attributedataprofile_quantilesp1' },
			msdyn_attributedataprofile_quantilesp25: { a: 'msdyn_attributedataprofile_quantilesp25' },
			msdyn_attributedataprofile_quantilesp5: { a: 'msdyn_attributedataprofile_quantilesp5' },
			msdyn_attributedataprofile_quantilesp50: { a: 'msdyn_attributedataprofile_quantilesp50' },
			msdyn_attributedataprofile_quantilesp75: { a: 'msdyn_attributedataprofile_quantilesp75' },
			msdyn_attributedataprofile_quantilesp95: { a: 'msdyn_attributedataprofile_quantilesp95' },
			msdyn_attributedataprofile_quantilesp99: { a: 'msdyn_attributedataprofile_quantilesp99' },
			msdyn_attributedataprofile_quantilesp99d9: { a: 'msdyn_attributedataprofile_quantilesp99d9' },
			msdyn_attributedataprofile_topkserialized: { a: 'msdyn_attributedataprofile_topkserialized' },
			msdyn_attributedataprofile_uniquevaluecount: { a: 'msdyn_attributedataprofile_uniquevaluecount' },
			msdyn_attributedataprofileId: { a: 'msdyn_attributedataprofileid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_attributedataprofile = {};
		msdyn_attributedataprofile.ODataEntity = e;
		msdyn_attributedataprofile.FormattedValue = {};
		for (var field in _msdyn_attributedataprofile) {
			var a = _msdyn_attributedataprofile[field].a;
			var b = _msdyn_attributedataprofile[field].b;
			var c = _msdyn_attributedataprofile[field].c;
			var d = _msdyn_attributedataprofile[field].d;
			var g = _msdyn_attributedataprofile[field].g;
			var r = _msdyn_attributedataprofile[field].r;
			webApiField(msdyn_attributedataprofile, field, e, a, b, c, d, r, u, g);
		}
		msdyn_attributedataprofile.Entity = u;
		msdyn_attributedataprofile.EntityName = 'msdyn_attributedataprofile';
		msdyn_attributedataprofile.EntityCollectionName = 'msdyn_attributedataprofiles';
		msdyn_attributedataprofile['@odata.etag'] = e['@odata.etag'];
		msdyn_attributedataprofile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_attributedataprofile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_attributedataprofile;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_attributedataprofile = {
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