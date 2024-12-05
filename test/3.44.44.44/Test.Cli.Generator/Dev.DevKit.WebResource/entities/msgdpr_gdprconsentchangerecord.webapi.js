'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msgdpr_gdprconsentchangerecordApi = function (e) {
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
		var _msgdpr_gdprconsentchangerecord = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msgdpr_changedby: { b: 'msgdpr_changedby', a: '_msgdpr_changedby_value', c: 'systemusers', d: 'systemuser' },
			msgdpr_consentchangesource: { a: 'msgdpr_consentchangesource' },
			msgdpr_consentchangesourceform: { b: 'msgdpr_consentchangesourceform', a: '_msgdpr_consentchangesourceform_value', c: 'msdyncrm_marketingforms', d: 'msdyncrm_marketingform' },
			msgdpr_contactid: { b: 'msgdpr_contactid', a: '_msgdpr_contactid_value', c: 'contacts', d: 'contact' },
			msgdpr_gdprconsentchangerecordId: { a: 'msgdpr_gdprconsentchangerecordid' },
			msgdpr_name: { a: 'msgdpr_name' },
			msgdpr_value: { a: 'msgdpr_value' },
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
		var msgdpr_gdprconsentchangerecord = {};
		msgdpr_gdprconsentchangerecord.ODataEntity = e;
		msgdpr_gdprconsentchangerecord.FormattedValue = {};
		for (var field in _msgdpr_gdprconsentchangerecord) {
			var a = _msgdpr_gdprconsentchangerecord[field].a;
			var b = _msgdpr_gdprconsentchangerecord[field].b;
			var c = _msgdpr_gdprconsentchangerecord[field].c;
			var d = _msgdpr_gdprconsentchangerecord[field].d;
			var g = _msgdpr_gdprconsentchangerecord[field].g;
			var r = _msgdpr_gdprconsentchangerecord[field].r;
			webApiField(msgdpr_gdprconsentchangerecord, field, e, a, b, c, d, r, u, g);
		}
		msgdpr_gdprconsentchangerecord.Entity = u;
		msgdpr_gdprconsentchangerecord.EntityName = 'msgdpr_gdprconsentchangerecord';
		msgdpr_gdprconsentchangerecord.EntityCollectionName = 'msgdpr_gdprconsentchangerecords';
		msgdpr_gdprconsentchangerecord['@odata.etag'] = e['@odata.etag'];
		msgdpr_gdprconsentchangerecord.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msgdpr_gdprconsentchangerecord.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msgdpr_gdprconsentchangerecord;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msgdpr_gdprconsentchangerecord = {
		msgdpr_value : {
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