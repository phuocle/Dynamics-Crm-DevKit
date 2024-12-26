'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_linkedincampaignApi = function (e) {
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
		var _msdyncrm_linkedincampaign = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_CampaignType: { a: 'msdyncrm_campaigntype' },
			msdyncrm_EndDate_UtcDateOnly: { a: 'msdyncrm_enddate' },
			msdyncrm_LinkedInAccount: { b: 'msdyncrm_LinkedInAccount', a: '_msdyncrm_linkedinaccount_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			msdyncrm_linkedincampaignId: { a: 'msdyncrm_linkedincampaignid' },
			msdyncrm_linkedinid: { a: 'msdyncrm_linkedinid' },
			msdyncrm_LinkedInStatus: { a: 'msdyncrm_linkedinstatus' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_StartDate_UtcDateOnly: { a: 'msdyncrm_startdate' },
			msdyncrm_totalleads: { a: 'msdyncrm_totalleads', r: true },
			msdyncrm_totalleads_Date_UtcDateAndTime: { a: 'msdyncrm_totalleads_date', r: true },
			msdyncrm_totalleads_State: { a: 'msdyncrm_totalleads_state', r: true },
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
		var msdyncrm_linkedincampaign = {};
		msdyncrm_linkedincampaign.ODataEntity = e;
		msdyncrm_linkedincampaign.FormattedValue = {};
		for (var field in _msdyncrm_linkedincampaign) {
			var a = _msdyncrm_linkedincampaign[field].a;
			var b = _msdyncrm_linkedincampaign[field].b;
			var c = _msdyncrm_linkedincampaign[field].c;
			var d = _msdyncrm_linkedincampaign[field].d;
			var g = _msdyncrm_linkedincampaign[field].g;
			var r = _msdyncrm_linkedincampaign[field].r;
			webApiField(msdyncrm_linkedincampaign, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_linkedincampaign.Entity = u;
		msdyncrm_linkedincampaign.EntityName = 'msdyncrm_linkedincampaign';
		msdyncrm_linkedincampaign.EntityCollectionName = 'msdyncrm_linkedincampaigns';
		msdyncrm_linkedincampaign['@odata.etag'] = e['@odata.etag'];
		msdyncrm_linkedincampaign.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_linkedincampaign.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_linkedincampaign;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_linkedincampaign = {
		msdyncrm_CampaignType : {
			LinkedIn_Dynamic_Ad: 192350003,
			LinkedIn_Sponsored_Content: 192350001,
			LinkedIn_Sponsored_InMail: 192350002,
			Text_Advertisement: 192350000
		},
		msdyncrm_LinkedInStatus : {
			Active: 192350000,
			Archived: 192350002,
			Canceled: 192350004,
			Completed: 192350003,
			Draft: 192350005,
			Paused: 192350001
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