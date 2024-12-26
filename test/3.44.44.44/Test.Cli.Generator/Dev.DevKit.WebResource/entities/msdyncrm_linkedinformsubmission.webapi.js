'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_linkedinformsubmissionApi = function (e) {
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
		var _msdyncrm_linkedinformsubmission = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncr2_customerjourney: { b: 'msdyncr2_customerjourney', a: '_msdyncr2_customerjourney_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			msdyncrm_contact: { b: 'msdyncrm_contact', a: '_msdyncrm_contact_value', c: 'contacts', d: 'contact' },
			msdyncrm_Lead: { b: 'msdyncrm_Lead', a: '_msdyncrm_lead_value', c: 'leads', d: 'lead' },
			msdyncrm_LinkedInAccountID: { a: 'msdyncrm_linkedinaccountid' },
			msdyncrm_LinkedInCampaign: { b: 'msdyncrm_LinkedInCampaign', a: '_msdyncrm_linkedincampaign_value', c: 'msdyncrm_linkedincampaigns', d: 'msdyncrm_linkedincampaign' },
			msdyncrm_LinkedInCampaignID: { a: 'msdyncrm_linkedincampaignid' },
			msdyncrm_LinkedInCreativeID: { a: 'msdyncrm_linkedincreativeid' },
			msdyncrm_LinkedInFormID: { b: 'msdyncrm_LinkedInFormID', a: '_msdyncrm_linkedinformid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			msdyncrm_LinkedInFormName: { a: 'msdyncrm_linkedinformname', r: true },
			msdyncrm_linkedinformsubmission_textid: { a: 'msdyncrm_linkedinformsubmission_textid' },
			msdyncrm_linkedinformsubmissionId: { a: 'msdyncrm_linkedinformsubmissionid' },
			msdyncrm_LinkedInUserProfileID: { b: 'msdyncrm_LinkedInUserProfileID', a: '_msdyncrm_linkedinuserprofileid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			msdyncrm_matchingstatus: { a: 'msdyncrm_matchingstatus' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_processingstate: { a: 'msdyncrm_processingstate' },
			msdyncrm_SubmissionDate_UtcDateAndTime: { a: 'msdyncrm_submissiondate' },
			msdyncrm_Type: { a: 'msdyncrm_type' },
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
		var msdyncrm_linkedinformsubmission = {};
		msdyncrm_linkedinformsubmission.ODataEntity = e;
		msdyncrm_linkedinformsubmission.FormattedValue = {};
		for (var field in _msdyncrm_linkedinformsubmission) {
			var a = _msdyncrm_linkedinformsubmission[field].a;
			var b = _msdyncrm_linkedinformsubmission[field].b;
			var c = _msdyncrm_linkedinformsubmission[field].c;
			var d = _msdyncrm_linkedinformsubmission[field].d;
			var g = _msdyncrm_linkedinformsubmission[field].g;
			var r = _msdyncrm_linkedinformsubmission[field].r;
			webApiField(msdyncrm_linkedinformsubmission, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_linkedinformsubmission.Entity = u;
		msdyncrm_linkedinformsubmission.EntityName = 'msdyncrm_linkedinformsubmission';
		msdyncrm_linkedinformsubmission.EntityCollectionName = 'msdyncrm_linkedinformsubmissions';
		msdyncrm_linkedinformsubmission['@odata.etag'] = e['@odata.etag'];
		msdyncrm_linkedinformsubmission.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_linkedinformsubmission.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_linkedinformsubmission;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_linkedinformsubmission = {
		msdyncrm_matchingstatus : {
			Lead_creation_failed: 192350004,
			Lead_matched_but_not_updated: 192350006,
			Lead_update_failed: 192350005,
			Match_failed: 192350003,
			New_lead_created: 192350001,
			Pending_lead_matching: 192350000,
			Updated_existing_lead: 192350002
		},
		msdyncrm_processingstate : {
			Processing_Failed: 192350002,
			Processing_Succeeded: 192350001,
			Unprocessed: 192350000
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