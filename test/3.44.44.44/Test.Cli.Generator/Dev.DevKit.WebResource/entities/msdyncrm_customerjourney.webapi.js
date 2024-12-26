'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_customerjourneyApi = function (e) {
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
		var _msdyncrm_customerjourney = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncr2_LinkedInCampaign: { b: 'msdyncr2_LinkedInCampaign', a: '_msdyncr2_linkedincampaign_value', c: 'msdyncrm_linkedincampaigns', d: 'msdyncrm_linkedincampaign' },
			msdyncrm_ContentSettingsId: { b: 'msdyncrm_ContentSettingsId', a: '_msdyncrm_contentsettingsid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			msdyncrm_CustomerJourneyDesignerState: { a: 'msdyncrm_customerjourneydesignerstate' },
			msdyncrm_customerjourneyId: { a: 'msdyncrm_customerjourneyid' },
			msdyncrm_CustomerJourneyTemplate: { b: 'msdyncrm_CustomerJourneyTemplate', a: '_msdyncrm_customerjourneytemplate_value', c: 'msdyncrm_customerjourneytemplates', d: 'msdyncrm_customerjourneytemplate' },
			msdyncrm_CustomerJourneyTimeZone: { a: 'msdyncrm_customerjourneytimezone' },
			msdyncrm_description: { a: 'msdyncrm_description' },
			msdyncrm_EndDateTime_TimezoneDateAndTime: { a: 'msdyncrm_enddatetime' },
			msdyncrm_entitytarget: { a: 'msdyncrm_entitytarget' },
			msdyncrm_formtosave: { a: 'msdyncrm_formtosave', r: true },
			msdyncrm_insights_placeholder: { a: 'msdyncrm_insights_placeholder' },
			msdyncrm_IsRecurring: { a: 'msdyncrm_isrecurring' },
			msdyncrm_lockdowndateinmilliseconds: { a: 'msdyncrm_lockdowndateinmilliseconds' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_publishedby: { b: 'msdyncrm_publishedby', a: '_msdyncrm_publishedby_value', c: 'systemusers', d: 'systemuser' },
			msdyncrm_purpose: { a: 'msdyncrm_purpose' },
			msdyncrm_RecurrenceCount: { a: 'msdyncrm_recurrencecount' },
			msdyncrm_RecurrenceIntervalDays: { a: 'msdyncrm_recurrenceintervaldays' },
			msdyncrm_scope: { a: 'msdyncrm_scope' },
			msdyncrm_StartDateTime_TimezoneDateAndTime: { a: 'msdyncrm_startdatetime' },
			msdyncrm_SuppressionSegmentId: { b: 'msdyncrm_SuppressionSegmentId', a: '_msdyncrm_suppressionsegmentid_value', c: 'msdyncrm_segments', d: 'msdyncrm_segment' },
			msdyncrm_Type: { a: 'msdyncrm_type' },
			msdyncrm_ValidationResults: { a: 'msdyncrm_validationresults' },
			msdyncrm_WorkflowDefinition: { a: 'msdyncrm_workflowdefinition' },
			msgdpr_requiredconsent: { a: 'msgdpr_requiredconsent' },
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
		var msdyncrm_customerjourney = {};
		msdyncrm_customerjourney.ODataEntity = e;
		msdyncrm_customerjourney.FormattedValue = {};
		for (var field in _msdyncrm_customerjourney) {
			var a = _msdyncrm_customerjourney[field].a;
			var b = _msdyncrm_customerjourney[field].b;
			var c = _msdyncrm_customerjourney[field].c;
			var d = _msdyncrm_customerjourney[field].d;
			var g = _msdyncrm_customerjourney[field].g;
			var r = _msdyncrm_customerjourney[field].r;
			webApiField(msdyncrm_customerjourney, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_customerjourney.Entity = u;
		msdyncrm_customerjourney.EntityName = 'msdyncrm_customerjourney';
		msdyncrm_customerjourney.EntityCollectionName = 'msdyncrm_customerjourneies';
		msdyncrm_customerjourney['@odata.etag'] = e['@odata.etag'];
		msdyncrm_customerjourney.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_customerjourney.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_customerjourney;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_customerjourney = {
		msdyncrm_entitytarget : {
			Account: 1,
			Contact: 0
		},
		msdyncrm_scope : {
			Business_unit: 270100001,
			Organization: 270100000
		},
		msdyncrm_Type : {
			Automated: 192350000,
			LinkedIn: 192350001
		},
		msgdpr_requiredconsent : {
			_1_Consent: 587030001,
			_2_Transactional: 587030002,
			_3_Subscriptions: 587030003,
			_4_Marketing: 587030004,
			_5_Profiling: 587030005
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Going_live: 192350006,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002,
			Stopping: 192350007
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