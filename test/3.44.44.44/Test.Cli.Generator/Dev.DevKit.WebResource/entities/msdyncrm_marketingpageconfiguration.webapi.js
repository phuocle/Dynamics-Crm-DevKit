'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_marketingpageconfigurationApi = function (e) {
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
		var _msdyncrm_marketingpageconfiguration = {
			adx_parentwebpageid: { a: 'adx_parentwebpageid' },
			adx_websiteid: { a: 'adx_websiteid' },
			adx_websitelanguageid: { a: 'adx_websitelanguageid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_allowsubmissiononlyforms: { a: 'msdyncrm_allowsubmissiononlyforms' },
			msdyncrm_contactcampaignattribute: { a: 'msdyncrm_contactcampaignattribute' },
			msdyncrm_contactemailattribute: { a: 'msdyncrm_contactemailattribute' },
			msdyncrm_contactmarketingformattribute: { a: 'msdyncrm_contactmarketingformattribute' },
			msdyncrm_contactmarketingpageattribute: { a: 'msdyncrm_contactmarketingpageattribute' },
			msdyncrm_contactmatchingstrategy: { b: 'msdyncrm_contactmatchingstrategy', a: '_msdyncrm_contactmatchingstrategy_value', c: 'msdyncrm_matchingstrategies', d: 'msdyncrm_matchingstrategy' },
			msdyncrm_default: { a: 'msdyncrm_default' },
			msdyncrm_entityupdatebehavioronsubmit: { a: 'msdyncrm_entityupdatebehavioronsubmit' },
			msdyncrm_insertprivacybanner: { a: 'msdyncrm_insertprivacybanner' },
			msdyncrm_keepsuccessfulsubmissions: { a: 'msdyncrm_keepsuccessfulsubmissions' },
			msdyncrm_leadcampaignattribute: { a: 'msdyncrm_leadcampaignattribute' },
			msdyncrm_leadcontactattribute: { a: 'msdyncrm_leadcontactattribute' },
			msdyncrm_leademailattribute: { a: 'msdyncrm_leademailattribute' },
			msdyncrm_leadmarketingformattribute: { a: 'msdyncrm_leadmarketingformattribute' },
			msdyncrm_leadmarketingpageattribute: { a: 'msdyncrm_leadmarketingpageattribute' },
			msdyncrm_leadmatchingstrategy: { b: 'msdyncrm_leadmatchingstrategy', a: '_msdyncrm_leadmatchingstrategy_value', c: 'msdyncrm_matchingstrategies', d: 'msdyncrm_matchingstrategy' },
			msdyncrm_marketingpageconfigurationId: { a: 'msdyncrm_marketingpageconfigurationid' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_organizationtype: { a: 'msdyncrm_organizationtype' },
			msdyncrm_organizationtype_lastrefresh_TimezoneDateAndTime: { a: 'msdyncrm_organizationtype_lastrefresh' },
			msdyncrm_portalinstallationstatus: { a: 'msdyncrm_portalinstallationstatus' },
			msdyncrm_portalintegrationtype: { a: 'msdyncrm_portalintegrationtype' },
			msdyncrm_privacybannertext: { a: 'msdyncrm_privacybannertext' },
			msdyncrm_privacypolicylinktext: { a: 'msdyncrm_privacypolicylinktext' },
			msdyncrm_privacypolicylinkurl: { a: 'msdyncrm_privacypolicylinkurl' },
			msdyncrm_websitefilter_placeholder: { a: 'msdyncrm_websitefilter_placeholder' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyncrm_marketingpageconfiguration = {};
		msdyncrm_marketingpageconfiguration.ODataEntity = e;
		msdyncrm_marketingpageconfiguration.FormattedValue = {};
		for (var field in _msdyncrm_marketingpageconfiguration) {
			var a = _msdyncrm_marketingpageconfiguration[field].a;
			var b = _msdyncrm_marketingpageconfiguration[field].b;
			var c = _msdyncrm_marketingpageconfiguration[field].c;
			var d = _msdyncrm_marketingpageconfiguration[field].d;
			var g = _msdyncrm_marketingpageconfiguration[field].g;
			var r = _msdyncrm_marketingpageconfiguration[field].r;
			webApiField(msdyncrm_marketingpageconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_marketingpageconfiguration.Entity = u;
		msdyncrm_marketingpageconfiguration.EntityName = 'msdyncrm_marketingpageconfiguration';
		msdyncrm_marketingpageconfiguration.EntityCollectionName = 'msdyncrm_marketingpageconfigurations';
		msdyncrm_marketingpageconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyncrm_marketingpageconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_marketingpageconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_marketingpageconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_marketingpageconfiguration = {
		msdyncrm_entityupdatebehavioronsubmit : {
			Contacts_and_leads: 0,
			No_update: 3,
			Only_contacts: 1,
			Only_leads: 2
		},
		msdyncrm_portalinstallationstatus : {
			Failed: 3,
			Not_started: 1,
			Started: 2
		},
		msdyncrm_portalintegrationtype : {
			Force_local_hosting: 1,
			Force_portal_hosting: 2
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