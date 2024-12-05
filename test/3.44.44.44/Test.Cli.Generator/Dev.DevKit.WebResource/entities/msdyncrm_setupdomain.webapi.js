'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyncrm_setupdomainApi = function (e) {
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
		var _msdyncrm_setupdomain = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_alignedname: { a: 'msdyncrm_alignedname' },
			msdyncrm_domainalignmentrequired: { a: 'msdyncrm_domainalignmentrequired' },
			msdyncrm_domainalignmentvalidationstatus: { a: 'msdyncrm_domainalignmentvalidationstatus' },
			msdyncrm_domalignrechost: { a: 'msdyncrm_domalignrechost' },
			msdyncrm_domalignrectype: { a: 'msdyncrm_domalignrectype' },
			msdyncrm_domalignrecvalue: { a: 'msdyncrm_domalignrecvalue' },
			msdyncrm_emailhost1: { a: 'msdyncrm_emailhost1' },
			msdyncrm_emailhost2: { a: 'msdyncrm_emailhost2' },
			msdyncrm_emailkey1: { a: 'msdyncrm_emailkey1' },
			msdyncrm_emailkey2: { a: 'msdyncrm_emailkey2' },
			msdyncrm_emailkeysvalidationstatus: { a: 'msdyncrm_emailkeysvalidationstatus' },
			msdyncrm_emailtyperecord1: { a: 'msdyncrm_emailtyperecord1' },
			msdyncrm_emailtyperecord2: { a: 'msdyncrm_emailtyperecord2' },
			msdyncrm_generatedomainalignmentkeys: { a: 'msdyncrm_generatedomainalignmentkeys' },
			msdyncrm_generateemailkeys: { a: 'msdyncrm_generateemailkeys' },
			msdyncrm_generateformkeys: { a: 'msdyncrm_generateformkeys' },
			msdyncrm_instructions: { a: 'msdyncrm_instructions' },
			msdyncrm_ipinstructions: { a: 'msdyncrm_ipinstructions' },
			msdyncrm_ipslist: { a: 'msdyncrm_ipslist' },
			msdyncrm_name: { a: 'msdyncrm_name' },
			msdyncrm_obmprefillenabled: { a: 'msdyncrm_obmprefillenabled' },
			msdyncrm_ownershipvalidationstatus: { a: 'msdyncrm_ownershipvalidationstatus' },
			msdyncrm_rtmprefillenabled: { a: 'msdyncrm_rtmprefillenabled' },
			msdyncrm_setupdomainId: { a: 'msdyncrm_setupdomainid' },
			msdyncrm_txthostinstructions: { a: 'msdyncrm_txthostinstructions' },
			msdyncrm_txtkey: { a: 'msdyncrm_txtkey' },
			msdyncrm_txttyperecord: { a: 'msdyncrm_txttyperecord' },
			msdyncrm_validationdate_UtcDateOnly: { a: 'msdyncrm_validationdate' },
			msdynmkt_emaildnsrecord1status: { a: 'msdynmkt_emaildnsrecord1status' },
			msdynmkt_emaildnsrecord2status: { a: 'msdynmkt_emaildnsrecord2status' },
			msdynmkt_StepWizardProgress: { a: 'msdynmkt_stepwizardprogress' },
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
		var msdyncrm_setupdomain = {};
		msdyncrm_setupdomain.ODataEntity = e;
		msdyncrm_setupdomain.FormattedValue = {};
		for (var field in _msdyncrm_setupdomain) {
			var a = _msdyncrm_setupdomain[field].a;
			var b = _msdyncrm_setupdomain[field].b;
			var c = _msdyncrm_setupdomain[field].c;
			var d = _msdyncrm_setupdomain[field].d;
			var g = _msdyncrm_setupdomain[field].g;
			var r = _msdyncrm_setupdomain[field].r;
			webApiField(msdyncrm_setupdomain, field, e, a, b, c, d, r, u, g);
		}
		msdyncrm_setupdomain.Entity = u;
		msdyncrm_setupdomain.EntityName = 'msdyncrm_setupdomain';
		msdyncrm_setupdomain.EntityCollectionName = 'msdyncrm_setupdomains';
		msdyncrm_setupdomain['@odata.etag'] = e['@odata.etag'];
		msdyncrm_setupdomain.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyncrm_setupdomain.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyncrm_setupdomain;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_setupdomain = {
		msdyncrm_domainalignmentvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdyncrm_emailkeysvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdyncrm_ownershipvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdynmkt_emaildnsrecord1status : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdynmkt_emaildnsrecord2status : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
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