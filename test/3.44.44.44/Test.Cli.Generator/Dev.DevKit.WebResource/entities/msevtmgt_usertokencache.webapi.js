'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_usertokencacheApi = function (e) {
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
		var _msevtmgt_usertokencache = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_encryptedvalue01: { a: 'msevtmgt_encryptedvalue01' },
			msevtmgt_encryptedvalue02: { a: 'msevtmgt_encryptedvalue02' },
			msevtmgt_encryptedvalue03: { a: 'msevtmgt_encryptedvalue03' },
			msevtmgt_encryptedvalue04: { a: 'msevtmgt_encryptedvalue04' },
			msevtmgt_encryptedvalue05: { a: 'msevtmgt_encryptedvalue05' },
			msevtmgt_encryptedvalue06: { a: 'msevtmgt_encryptedvalue06' },
			msevtmgt_encryptedvalue07: { a: 'msevtmgt_encryptedvalue07' },
			msevtmgt_encryptedvalue08: { a: 'msevtmgt_encryptedvalue08' },
			msevtmgt_encryptedvalue09: { a: 'msevtmgt_encryptedvalue09' },
			msevtmgt_encryptedvalue10: { a: 'msevtmgt_encryptedvalue10' },
			msevtmgt_encryptedvalue11: { a: 'msevtmgt_encryptedvalue11' },
			msevtmgt_encryptedvalue12: { a: 'msevtmgt_encryptedvalue12' },
			msevtmgt_encryptedvalue13: { a: 'msevtmgt_encryptedvalue13' },
			msevtmgt_encryptedvalue14: { a: 'msevtmgt_encryptedvalue14' },
			msevtmgt_encryptedvalue15: { a: 'msevtmgt_encryptedvalue15' },
			msevtmgt_encryptedvalue16: { a: 'msevtmgt_encryptedvalue16' },
			msevtmgt_encryptedvalue17: { a: 'msevtmgt_encryptedvalue17' },
			msevtmgt_encryptedvalue18: { a: 'msevtmgt_encryptedvalue18' },
			msevtmgt_encryptedvalue19: { a: 'msevtmgt_encryptedvalue19' },
			msevtmgt_encryptedvalue20: { a: 'msevtmgt_encryptedvalue20' },
			msevtmgt_encryptedvalue21: { a: 'msevtmgt_encryptedvalue21' },
			msevtmgt_encryptedvalue22: { a: 'msevtmgt_encryptedvalue22' },
			msevtmgt_encryptedvalue23: { a: 'msevtmgt_encryptedvalue23' },
			msevtmgt_encryptedvalue24: { a: 'msevtmgt_encryptedvalue24' },
			msevtmgt_encryptedvalue25: { a: 'msevtmgt_encryptedvalue25' },
			msevtmgt_encryptedvalue26: { a: 'msevtmgt_encryptedvalue26' },
			msevtmgt_encryptedvalue27: { a: 'msevtmgt_encryptedvalue27' },
			msevtmgt_encryptedvalue28: { a: 'msevtmgt_encryptedvalue28' },
			msevtmgt_encryptedvalue29: { a: 'msevtmgt_encryptedvalue29' },
			msevtmgt_encryptedvalue30: { a: 'msevtmgt_encryptedvalue30' },
			msevtmgt_encryptedvalue31: { a: 'msevtmgt_encryptedvalue31' },
			msevtmgt_encryptedvalue32: { a: 'msevtmgt_encryptedvalue32' },
			msevtmgt_encyptedvalue: { a: 'msevtmgt_encyptedvalue' },
			msevtmgt_name: { a: 'msevtmgt_name' },
			msevtmgt_systemuserid: { b: 'msevtmgt_systemuserid', a: '_msevtmgt_systemuserid_value', c: 'systemusers', d: 'systemuser' },
			msevtmgt_usertokencacheId: { a: 'msevtmgt_usertokencacheid' },
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
		var msevtmgt_usertokencache = {};
		msevtmgt_usertokencache.ODataEntity = e;
		msevtmgt_usertokencache.FormattedValue = {};
		for (var field in _msevtmgt_usertokencache) {
			var a = _msevtmgt_usertokencache[field].a;
			var b = _msevtmgt_usertokencache[field].b;
			var c = _msevtmgt_usertokencache[field].c;
			var d = _msevtmgt_usertokencache[field].d;
			var g = _msevtmgt_usertokencache[field].g;
			var r = _msevtmgt_usertokencache[field].r;
			webApiField(msevtmgt_usertokencache, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_usertokencache.Entity = u;
		msevtmgt_usertokencache.EntityName = 'msevtmgt_usertokencache';
		msevtmgt_usertokencache.EntityCollectionName = 'msevtmgt_usertokencaches';
		msevtmgt_usertokencache['@odata.etag'] = e['@odata.etag'];
		msevtmgt_usertokencache.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_usertokencache.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_usertokencache;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_usertokencache = {
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