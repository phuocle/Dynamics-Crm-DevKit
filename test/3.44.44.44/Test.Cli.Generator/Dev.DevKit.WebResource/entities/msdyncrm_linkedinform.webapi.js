'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_linkedinformApi = function (e) {
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
		var _msdyncrm_linkedinform = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_Description: { a: 'msdyncrm_description' },
			msdyncrm_Headline: { a: 'msdyncrm_headline' },
			msdyncrm_LandingpageURL: { a: 'msdyncrm_landingpageurl' },
			msdyncrm_lastsyncdate_UtcDateAndTime: { a: 'msdyncrm_lastsyncdate' },
			msdyncrm_linkedinformId: { a: 'msdyncrm_linkedinformid' },
			msdyncrm_LinkedInID: { a: 'msdyncrm_linkedinid' },
			msdyncrm_LinkedInParentAccount: { b: 'msdyncrm_LinkedInParentAccount', a: '_msdyncrm_linkedinparentaccount_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			msdyncrm_LocaleCountry: { a: 'msdyncrm_localecountry' },
			msdyncrm_LocaleLanguage: { a: 'msdyncrm_localelanguage' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_PrivacyPolicyURL: { a: 'msdyncrm_privacypolicyurl' },
			msdyncrm_syncstatus: { a: 'msdyncrm_syncstatus' },
			msdyncrm_Thankyoumessage: { a: 'msdyncrm_thankyoumessage' },
			msdyncrm_totalsubmissions: { a: 'msdyncrm_totalsubmissions', r: true },
			msdyncrm_totalsubmissions_Date_UtcDateAndTime: { a: 'msdyncrm_totalsubmissions_date', r: true },
			msdyncrm_totalsubmissions_State: { a: 'msdyncrm_totalsubmissions_state', r: true },
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
		var msdyncrm_linkedinform = {};
		msdyncrm_linkedinform.ODataEntity = e;
		msdyncrm_linkedinform.FormattedValue = {};
		for (var field in _msdyncrm_linkedinform) {
			var a = _msdyncrm_linkedinform[field].a;
			var b = _msdyncrm_linkedinform[field].b;
			var c = _msdyncrm_linkedinform[field].c;
			var d = _msdyncrm_linkedinform[field].d;
			var g = _msdyncrm_linkedinform[field].g;
			var r = _msdyncrm_linkedinform[field].r;
			webApiField(msdyncrm_linkedinform, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_linkedinform.Entity = u;
		msdyncrm_linkedinform.EntityName = 'msdyncrm_linkedinform';
		msdyncrm_linkedinform.EntityCollectionName = 'msdyncrm_linkedinforms';
		msdyncrm_linkedinform['@odata.etag'] = e['@odata.etag'];
		msdyncrm_linkedinform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_linkedinform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_linkedinform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_linkedinform = {
		msdyncrm_syncstatus : {
			Active: 192350001,
			Forbidden: 192350003,
			No_Form_Submissions: 192350002,
			Pending_Synchronization: 192350000
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