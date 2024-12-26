'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_virtualdomainApi = function (e) {
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
		var _msdynmkt_virtualdomain = {
			msdynmkt_alignedname: { a: 'msdynmkt_alignedname' },
			msdynmkt_businessunitowned: { a: 'msdynmkt_businessunitowned' },
			msdynmkt_createdby: { b: 'msdynmkt_createdby', a: '_msdynmkt_createdby_value', c: 'systemusers', d: 'systemuser' },
			msdynmkt_createdon_UtcDateAndTime: { a: 'msdynmkt_createdon' },
			msdynmkt_createdonbehalfby: { b: 'msdynmkt_createdonbehalfby', a: '_msdynmkt_createdonbehalfby_value', c: 'systemusers', d: 'systemuser' },
			msdynmkt_domainalignmentrecordhost: { a: 'msdynmkt_domainalignmentrecordhost' },
			msdynmkt_domainalignmentrecordtype: { a: 'msdynmkt_domainalignmentrecordtype' },
			msdynmkt_domainalignmentrecordvalue: { a: 'msdynmkt_domainalignmentrecordvalue' },
			msdynmkt_domainalignmentvalidationstatus: { a: 'msdynmkt_domainalignmentvalidationstatus' },
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
			msdynmkt_modifiedby: { b: 'msdynmkt_modifiedby', a: '_msdynmkt_modifiedby_value', c: 'systemusers', d: 'systemuser' },
			msdynmkt_modifiedon_UtcDateAndTime: { a: 'msdynmkt_modifiedon' },
			msdynmkt_modifiedonbehalfby: { b: 'msdynmkt_modifiedonbehalfby', a: '_msdynmkt_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_ombprefillenabled: { a: 'msdynmkt_ombprefillenabled' },
			msdynmkt_ownershiprecordkey: { a: 'msdynmkt_ownershiprecordkey' },
			msdynmkt_ownershiprecordtype: { a: 'msdynmkt_ownershiprecordtype' },
			msdynmkt_ownershipvalidationstatus: { a: 'msdynmkt_ownershipvalidationstatus' },
			msdynmkt_owningbusinessunit: { b: 'msdynmkt_owningbusinessunit', a: '_msdynmkt_owningbusinessunit_value', c: 'businessunits', d: 'businessunit' },
			msdynmkt_rtmprefillenabled: { a: 'msdynmkt_rtmprefillenabled' },
			msdynmkt_sourceentityId: { a: 'msdynmkt_sourceentityid' },
			msdynmkt_sourceentitytype: { a: 'msdynmkt_sourceentitytype' },
			msdynmkt_validationdate_UtcDateOnly: { a: 'msdynmkt_validationdate' },
			msdynmkt_virtualdomainId: { a: 'msdynmkt_virtualdomainid' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_virtualdomain = {};
		msdynmkt_virtualdomain.ODataEntity = e;
		msdynmkt_virtualdomain.FormattedValue = {};
		for (var field in _msdynmkt_virtualdomain) {
			var a = _msdynmkt_virtualdomain[field].a;
			var b = _msdynmkt_virtualdomain[field].b;
			var c = _msdynmkt_virtualdomain[field].c;
			var d = _msdynmkt_virtualdomain[field].d;
			var g = _msdynmkt_virtualdomain[field].g;
			var r = _msdynmkt_virtualdomain[field].r;
			webApiField(msdynmkt_virtualdomain, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_virtualdomain.Entity = u;
		msdynmkt_virtualdomain.EntityName = 'msdynmkt_virtualdomain';
		msdynmkt_virtualdomain.EntityCollectionName = 'msdynmkt_virtualdomains';
		msdynmkt_virtualdomain['@odata.etag'] = e['@odata.etag'];
		msdynmkt_virtualdomain.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_virtualdomain.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_virtualdomain;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_virtualdomain = {
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