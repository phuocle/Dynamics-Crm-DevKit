'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocsitrainingdataApi = function (e) {
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
		var _msdyn_ocsitrainingdata = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_approvedby: { b: 'msdyn_approvedby', a: '_msdyn_approvedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_approvedon_UtcDateAndTime: { a: 'msdyn_approvedon' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocsitdimportconfigid: { b: 'msdyn_ocsitdimportconfigid', a: '_msdyn_ocsitdimportconfigid_value', c: 'msdyn_ocsitdimportconfigs', d: 'msdyn_ocsitdimportconfig' },
			msdyn_ocsitrainingdataId: { a: 'msdyn_ocsitrainingdataid' },
			msdyn_ocsitrainingdatastatus: { a: 'msdyn_ocsitrainingdatastatus' },
			msdyn_ocskillidentmlmodelid: { b: 'msdyn_ocskillidentmlmodelid', a: '_msdyn_ocskillidentmlmodelid_value', c: 'msdyn_ocskillidentmlmodels', d: 'msdyn_ocskillidentmlmodel' },
			msdyn_phrase: { a: 'msdyn_phrase' },
			msdyn_skillidscsv: { a: 'msdyn_skillidscsv' },
			msdyn_skillscsv: { a: 'msdyn_skillscsv' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_ocsitrainingdata = {};
		msdyn_ocsitrainingdata.ODataEntity = e;
		msdyn_ocsitrainingdata.FormattedValue = {};
		for (var field in _msdyn_ocsitrainingdata) {
			var a = _msdyn_ocsitrainingdata[field].a;
			var b = _msdyn_ocsitrainingdata[field].b;
			var c = _msdyn_ocsitrainingdata[field].c;
			var d = _msdyn_ocsitrainingdata[field].d;
			var g = _msdyn_ocsitrainingdata[field].g;
			var r = _msdyn_ocsitrainingdata[field].r;
			webApiField(msdyn_ocsitrainingdata, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocsitrainingdata.Entity = u;
		msdyn_ocsitrainingdata.EntityName = 'msdyn_ocsitrainingdata';
		msdyn_ocsitrainingdata.EntityCollectionName = 'msdyn_ocsitrainingdatas';
		msdyn_ocsitrainingdata['@odata.etag'] = e['@odata.etag'];
		msdyn_ocsitrainingdata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocsitrainingdata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocsitrainingdata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsitrainingdata = {
		msdyn_ocsitrainingdatastatus : {
			Approved: 326340000,
			Needs_further_investigation: 326340002,
			Pending: 326340001
		},
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