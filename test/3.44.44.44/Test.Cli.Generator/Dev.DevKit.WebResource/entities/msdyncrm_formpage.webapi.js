'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_formpageApi = function (e) {
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
		var _msdyncrm_formpage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_ConfirmationMessage: { a: 'msdyncrm_confirmationmessage' },
			msdyncrm_errorImageUrl: { a: 'msdyncrm_errorimageurl' },
			msdyncrm_ErrorMessage: { a: 'msdyncrm_errormessage' },
			msdyncrm_eventId: { b: 'msdyncrm_eventId', a: '_msdyncrm_eventid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msdyncrm_externalformhosting_iframe: { a: 'msdyncrm_externalformhosting_iframe' },
			msdyncrm_externalhostingformat: { a: 'msdyncrm_externalhostingformat' },
			msdyncrm_externalhostingformat_description: { a: 'msdyncrm_externalhostingformat_description' },
			msdyncrm_formpageId: { a: 'msdyncrm_formpageid' },
			msdyncrm_javascriptcode: { a: 'msdyncrm_javascriptcode' },
			msdyncrm_javascriptcode_compound: { a: 'msdyncrm_javascriptcode_compound', r: true },
			msdyncrm_LimitExceededMessage: { a: 'msdyncrm_limitexceededmessage' },
			msdyncrm_marketingformId: { b: 'msdyncrm_marketingformId', a: '_msdyncrm_marketingformid_value', c: 'msdyncrm_marketingforms', d: 'msdyncrm_marketingform' },
			msdyncrm_marketingpageid: { b: 'msdyncrm_marketingpageid', a: '_msdyncrm_marketingpageid_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_RedirectURL: { a: 'msdyncrm_redirecturl' },
			msdyncrm_successImageUrl: { a: 'msdyncrm_successimageurl' },
			msdyncrm_websiteid: { b: 'msdyncrm_websiteid', a: '_msdyncrm_websiteid_value', c: 'msdyncrm_websites', d: 'msdyncrm_website' },
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
		var msdyncrm_formpage = {};
		msdyncrm_formpage.ODataEntity = e;
		msdyncrm_formpage.FormattedValue = {};
		for (var field in _msdyncrm_formpage) {
			var a = _msdyncrm_formpage[field].a;
			var b = _msdyncrm_formpage[field].b;
			var c = _msdyncrm_formpage[field].c;
			var d = _msdyncrm_formpage[field].d;
			var g = _msdyncrm_formpage[field].g;
			var r = _msdyncrm_formpage[field].r;
			webApiField(msdyncrm_formpage, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_formpage.Entity = u;
		msdyncrm_formpage.EntityName = 'msdyncrm_formpage';
		msdyncrm_formpage.EntityCollectionName = 'msdyncrm_formpages';
		msdyncrm_formpage['@odata.etag'] = e['@odata.etag'];
		msdyncrm_formpage.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_formpage.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_formpage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_formpage = {
		msdyncrm_externalhostingformat : {
			I_want_to_host_it_as_a_script: 192350000,
			I_want_to_host_it_as_an_iframe: 192350001
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