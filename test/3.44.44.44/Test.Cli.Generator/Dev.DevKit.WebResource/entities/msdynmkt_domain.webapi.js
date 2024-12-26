'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_domainApi = function (e) {
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
		var _msdynmkt_domain = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_alignedname: { a: 'msdynmkt_alignedname' },
			msdynmkt_businessunitowned: { a: 'msdynmkt_businessunitowned' },
			msdynmkt_domainalignmentrecordhost: { a: 'msdynmkt_domainalignmentrecordhost' },
			msdynmkt_domainalignmentrecordtype: { a: 'msdynmkt_domainalignmentrecordtype' },
			msdynmkt_domainalignmentrecordvalue: { a: 'msdynmkt_domainalignmentrecordvalue' },
			msdynmkt_domainalignmentvalidationstatus: { a: 'msdynmkt_domainalignmentvalidationstatus' },
			msdynmkt_domainId: { a: 'msdynmkt_domainid' },
			msdynmkt_emaildnsrecord1status: { a: 'msdynmkt_emaildnsrecord1status' },
			msdynmkt_emaildnsrecord2status: { a: 'msdynmkt_emaildnsrecord2status' },
			msdynmkt_emailhost1: { a: 'msdynmkt_emailhost1' },
			msdynmkt_emailhost2: { a: 'msdynmkt_emailhost2' },
			msdynmkt_emailkey1: { a: 'msdynmkt_emailkey1' },
			msdynmkt_emailkey2: { a: 'msdynmkt_emailkey2' },
			msdynmkt_emailtyperecord1: { a: 'msdynmkt_emailtyperecord1' },
			msdynmkt_emailtyperecord2: { a: 'msdynmkt_emailtyperecord2' },
			msdynmkt_generatedomainalignmentkeys: { a: 'msdynmkt_generatedomainalignmentkeys' },
			msdynmkt_generateemailkeys: { a: 'msdynmkt_generateemailkeys' },
			msdynmkt_generateformkeys: { a: 'msdynmkt_generateformkeys' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_obmprefillenabled: { a: 'msdynmkt_obmprefillenabled' },
			msdynmkt_ownershiprecordkey: { a: 'msdynmkt_ownershiprecordkey' },
			msdynmkt_ownershiprecordtype: { a: 'msdynmkt_ownershiprecordtype' },
			msdynmkt_ownershipvalidationstatus: { a: 'msdynmkt_ownershipvalidationstatus' },
			msdynmkt_rtmprefillenabled: { a: 'msdynmkt_rtmprefillenabled' },
			msdynmkt_stepwizardprogress: { a: 'msdynmkt_stepwizardprogress' },
			msdynmkt_validationdate_UtcDateOnly: { a: 'msdynmkt_validationdate' },
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
		var msdynmkt_domain = {};
		msdynmkt_domain.ODataEntity = e;
		msdynmkt_domain.FormattedValue = {};
		for (var field in _msdynmkt_domain) {
			var a = _msdynmkt_domain[field].a;
			var b = _msdynmkt_domain[field].b;
			var c = _msdynmkt_domain[field].c;
			var d = _msdynmkt_domain[field].d;
			var g = _msdynmkt_domain[field].g;
			var r = _msdynmkt_domain[field].r;
			webApiField(msdynmkt_domain, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_domain.Entity = u;
		msdynmkt_domain.EntityName = 'msdynmkt_domain';
		msdynmkt_domain.EntityCollectionName = 'msdynmkt_domains';
		msdynmkt_domain['@odata.etag'] = e['@odata.etag'];
		msdynmkt_domain.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_domain.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_domain;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_domain = {
		msdynmkt_domainalignmentvalidationstatus : {
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
		msdynmkt_ownershipvalidationstatus : {
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