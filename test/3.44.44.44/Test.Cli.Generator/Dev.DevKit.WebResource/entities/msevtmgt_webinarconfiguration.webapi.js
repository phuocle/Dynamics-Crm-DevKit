'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_webinarconfigurationApi = function (e) {
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
		var _msevtmgt_webinarconfiguration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_accesstoken: { a: 'msevtmgt_accesstoken' },
			msevtmgt_AccessTokenKey: { a: 'msevtmgt_accesstokenkey' },
			msevtmgt_AccessTokenSecret: { a: 'msevtmgt_accesstokensecret' },
			msevtmgt_appURL: { a: 'msevtmgt_appurl' },
			msevtmgt_authorized: { a: 'msevtmgt_authorized' },
			msevtmgt_ClientId: { a: 'msevtmgt_clientid' },
			msevtmgt_LastUpdateDateTime_UtcDateAndTime: { a: 'msevtmgt_lastupdatedatetime' },
			msevtmgt_Message: { a: 'msevtmgt_message' },
			msevtmgt_name: { a: 'msevtmgt_name' },
			msevtmgt_providerservicestatus: { a: 'msevtmgt_providerservicestatus' },
			msevtmgt_UpdateCredentials: { a: 'msevtmgt_updatecredentials' },
			msevtmgt_webinarconfigurationId: { a: 'msevtmgt_webinarconfigurationid' },
			msevtmgt_WebinarProviderId: { b: 'msevtmgt_WebinarProviderId', a: '_msevtmgt_webinarproviderid_value', c: 'msevtmgt_webinarproviders', d: 'msevtmgt_webinarprovider' },
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
		var msevtmgt_webinarconfiguration = {};
		msevtmgt_webinarconfiguration.ODataEntity = e;
		msevtmgt_webinarconfiguration.FormattedValue = {};
		for (var field in _msevtmgt_webinarconfiguration) {
			var a = _msevtmgt_webinarconfiguration[field].a;
			var b = _msevtmgt_webinarconfiguration[field].b;
			var c = _msevtmgt_webinarconfiguration[field].c;
			var d = _msevtmgt_webinarconfiguration[field].d;
			var g = _msevtmgt_webinarconfiguration[field].g;
			var r = _msevtmgt_webinarconfiguration[field].r;
			webApiField(msevtmgt_webinarconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_webinarconfiguration.Entity = u;
		msevtmgt_webinarconfiguration.EntityName = 'msevtmgt_webinarconfiguration';
		msevtmgt_webinarconfiguration.EntityCollectionName = 'msevtmgt_webinarconfigurations';
		msevtmgt_webinarconfiguration['@odata.etag'] = e['@odata.etag'];
		msevtmgt_webinarconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_webinarconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_webinarconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_webinarconfiguration = {
		msevtmgt_authorized : {
			No: 100000001,
			Token_expired: 100000002,
			Yes: 100000000
		},
		msevtmgt_providerservicestatus : {
			Forbidden: 100000002,
			Healthy: 100000000,
			Not_authenticated: 100000001,
			Unhealthy: 100000003
		},
		msevtmgt_UpdateCredentials : {
			No: 100000002,
			Yes: 100000001
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