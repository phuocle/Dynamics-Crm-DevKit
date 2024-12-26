'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingemailactivityApi = function (e) {
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
		var _msdyncrm_marketingemailactivity = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_abtestdistributionversiona: { a: 'msdyncrm_abtestdistributionversiona' },
			msdyncrm_abtestdistributionversionb: { a: 'msdyncrm_abtestdistributionversionb' },
			msdyncrm_abtestdurationunit: { a: 'msdyncrm_abtestdurationunit' },
			msdyncrm_abtestdurationvalue: { a: 'msdyncrm_abtestdurationvalue' },
			msdyncrm_abtestid: { b: 'msdyncrm_abtestid', a: '_msdyncrm_abtestid_value', c: 'msdyncrm_marketingemailtests', d: 'msdyncrm_marketingemailtest' },
			msdyncrm_abtestinconclusiveresult: { a: 'msdyncrm_abtestinconclusiveresult' },
			msdyncrm_abtestingenabled: { a: 'msdyncrm_abtestingenabled' },
			msdyncrm_abtestwinningmetric: { a: 'msdyncrm_abtestwinningmetric' },
			msdyncrm_automateschedule: { a: 'msdyncrm_automateschedule' },
			msdyncrm_dependencies: { a: 'msdyncrm_dependencies' },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_emailid: { b: 'msdyncrm_emailid', a: '_msdyncrm_emailid_value', c: 'msdyncrm_marketingemails', d: 'msdyncrm_marketingemail' },
			msdyncrm_expiration: { a: 'msdyncrm_expiration' },
			msdyncrm_expirationdate_UtcDateAndTime: { a: 'msdyncrm_expirationdate' },
			msdyncrm_insightsdata: { a: 'msdyncrm_insightsdata' },
			msdyncrm_marketingemailactivityId: { a: 'msdyncrm_marketingemailactivityid' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_permitteddays: { a: 'msdyncrm_permitteddays', g: true },
			msdyncrm_permittedtimeend_UtcDateAndTime: { a: 'msdyncrm_permittedtimeend' },
			msdyncrm_permittedtimestart_UtcDateAndTime: { a: 'msdyncrm_permittedtimestart' },
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
		var msdyncrm_marketingemailactivity = {};
		msdyncrm_marketingemailactivity.ODataEntity = e;
		msdyncrm_marketingemailactivity.FormattedValue = {};
		for (var field in _msdyncrm_marketingemailactivity) {
			var a = _msdyncrm_marketingemailactivity[field].a;
			var b = _msdyncrm_marketingemailactivity[field].b;
			var c = _msdyncrm_marketingemailactivity[field].c;
			var d = _msdyncrm_marketingemailactivity[field].d;
			var g = _msdyncrm_marketingemailactivity[field].g;
			var r = _msdyncrm_marketingemailactivity[field].r;
			webApiField(msdyncrm_marketingemailactivity, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingemailactivity.Entity = u;
		msdyncrm_marketingemailactivity.EntityName = 'msdyncrm_marketingemailactivity';
		msdyncrm_marketingemailactivity.EntityCollectionName = 'msdyncrm_marketingemailactivities';
		msdyncrm_marketingemailactivity['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingemailactivity.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingemailactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingemailactivity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingemailactivity = {
		msdyncrm_abtestdurationunit : {
			Days: 192350001,
			Hours: 192350000,
			Weeks: 192350002
		},
		msdyncrm_abtestinconclusiveresult : {
			Version_A: 192350000,
			Version_A_and_Version_B_5050: 192350002,
			Version_B: 192350001
		},
		msdyncrm_abtestwinningmetric : {
			Click_through_rate: 192350001,
			Open_rate: 192350000
		},
		msdyncrm_permitteddays : {
			Friday: 192350004,
			Monday: 192350000,
			Saturday: 192350005,
			Sunday: 192350006,
			Thursday: 192350003,
			Tuesday: 192350001,
			Wednesday: 192350002
		},
		statecode : {
			Active: 0
		},
		statuscode : {
			Active: 1
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