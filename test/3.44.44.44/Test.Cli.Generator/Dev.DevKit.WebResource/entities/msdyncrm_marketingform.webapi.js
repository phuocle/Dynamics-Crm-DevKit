'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingformApi = function (e) {
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
		var _msdyncrm_marketingform = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_allowPrefill: { a: 'msdyncrm_allowprefill' },
			msdyncrm_alwaysgenerateleads: { a: 'msdyncrm_alwaysgenerateleads' },
			msdyncrm_capturing: { a: 'msdyncrm_capturing' },
			msdyncrm_capturing_configured: { a: 'msdyncrm_capturing_configured' },
			msdyncrm_capturing_data: { a: 'msdyncrm_capturing_data' },
			msdyncrm_capturing_scantime_UtcDateAndTime: { a: 'msdyncrm_capturing_scantime' },
			msdyncrm_ConfirmationMessage: { a: 'msdyncrm_confirmationmessage' },
			msdyncrm_contactmatchingstrategy: { b: 'msdyncrm_contactmatchingstrategy', a: '_msdyncrm_contactmatchingstrategy_value', c: 'msdyncrm_matchingstrategies', d: 'msdyncrm_matchingstrategy' },
			msdyncrm_doubleoptincontentsettings: { b: 'msdyncrm_doubleoptincontentsettings', a: '_msdyncrm_doubleoptincontentsettings_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			msdyncrm_doubleoptinmessage: { b: 'msdyncrm_doubleoptinmessage', a: '_msdyncrm_doubleoptinmessage_value', c: 'msdyncrm_marketingemails', d: 'msdyncrm_marketingemail' },
			msdyncrm_doubleoptinthankyouformat: { a: 'msdyncrm_doubleoptinthankyouformat' },
			msdyncrm_doubleoptinthankyoupage: { b: 'msdyncrm_doubleoptinthankyoupage', a: '_msdyncrm_doubleoptinthankyoupage_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			msdyncrm_doubleoptinthankyouurl: { a: 'msdyncrm_doubleoptinthankyouurl' },
			msdyncrm_enabledoubleoptin: { a: 'msdyncrm_enabledoubleoptin' },
			msdyncrm_entityupdatebehavioronsubmit: { a: 'msdyncrm_entityupdatebehavioronsubmit' },
			msdyncrm_errorImageUrl: { a: 'msdyncrm_errorimageurl' },
			msdyncrm_ErrorMessage: { a: 'msdyncrm_errormessage' },
			msdyncrm_eventmatchingstrategy: { a: 'msdyncrm_eventmatchingstrategy', r: true },
			msdyncrm_eventmatchingstrategyinfo: { a: 'msdyncrm_eventmatchingstrategyinfo', r: true },
			msdyncrm_externalhostedforminstructions: { a: 'msdyncrm_externalhostedforminstructions', r: true },
			msdyncrm_formcontrolmapping: { a: 'msdyncrm_formcontrolmapping' },
			msdyncrm_FormDefinition: { a: 'msdyncrm_formdefinition' },
			msdyncrm_formfieldmapping: { a: 'msdyncrm_formfieldmapping' },
			msdyncrm_formtosave: { a: 'msdyncrm_formtosave', r: true },
			msdyncrm_info: { a: 'msdyncrm_info' },
			msdyncrm_insights_placeholder: { a: 'msdyncrm_insights_placeholder' },
			msdyncrm_keepsuccessfulsubmissions: { a: 'msdyncrm_keepsuccessfulsubmissions' },
			msdyncrm_leadmatchingstrategy: { b: 'msdyncrm_leadmatchingstrategy', a: '_msdyncrm_leadmatchingstrategy_value', c: 'msdyncrm_matchingstrategies', d: 'msdyncrm_matchingstrategy' },
			msdyncrm_LimitExceededMessage: { a: 'msdyncrm_limitexceededmessage' },
			msdyncrm_marketingformId: { a: 'msdyncrm_marketingformid' },
			msdyncrm_marketingformtemplate: { b: 'msdyncrm_marketingformtemplate', a: '_msdyncrm_marketingformtemplate_value', c: 'msdyncrm_marketingformtemplates', d: 'msdyncrm_marketingformtemplate' },
			msdyncrm_marketingprovided: { a: 'msdyncrm_marketingprovided' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_organizationwhitelistdomain: { a: 'msdyncrm_organizationwhitelistdomain', r: true },
			msdyncrm_publishedformurl: { a: 'msdyncrm_publishedformurl' },
			msdyncrm_purpose: { a: 'msdyncrm_purpose' },
			msdyncrm_RedirectURL: { a: 'msdyncrm_redirecturl' },
			msdyncrm_successImageUrl: { a: 'msdyncrm_successimageurl' },
			msdyncrm_validForPageType: { a: 'msdyncrm_validforpagetype' },
			msdyncrm_visualstyle: { a: 'msdyncrm_visualstyle' },
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
		var msdyncrm_marketingform = {};
		msdyncrm_marketingform.ODataEntity = e;
		msdyncrm_marketingform.FormattedValue = {};
		for (var field in _msdyncrm_marketingform) {
			var a = _msdyncrm_marketingform[field].a;
			var b = _msdyncrm_marketingform[field].b;
			var c = _msdyncrm_marketingform[field].c;
			var d = _msdyncrm_marketingform[field].d;
			var g = _msdyncrm_marketingform[field].g;
			var r = _msdyncrm_marketingform[field].r;
			webApiField(msdyncrm_marketingform, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingform.Entity = u;
		msdyncrm_marketingform.EntityName = 'msdyncrm_marketingform';
		msdyncrm_marketingform.EntityCollectionName = 'msdyncrm_marketingforms';
		msdyncrm_marketingform['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingform = {
		msdyncrm_doubleoptinthankyouformat : {
			Open_the_marketing_page_after_confirmation: 192350000,
			Open_the_web_page_after_confirmation: 192350001
		},
		msdyncrm_entityupdatebehavioronsubmit : {
			Contacts_and_leads: 0,
			No_update: 3,
			Only_contacts: 1,
			Only_leads: 2
		},
		msdyncrm_purpose : {
			Collateral_download: 3,
			Contact_capture: 0,
			Double_Opt_In_Email_based_confirmation: 7,
			Event_feedback: 5,
			Event_registration: 4,
			Lead_generation: 2,
			Newsletter_subscription: 1,
			Structural: 6
		},
		msdyncrm_validForPageType : {
			Event_registration: 3,
			Forward_to_a_friend: 2,
			Landing_page: 0,
			Subscription_center: 1
		},
		msdyncrm_visualstyle : {
			_1_column: 0,
			_2_column: 1,
			Mixed: 2
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Error: 192350005,
			Expired: 192350004,
			Live: 1,
			Live_editable: 192350003,
			Stopped: 2
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