'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.adx_invitation_mspp_webrole_powerpagecomponentApi = function (e) {
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
					value = value.replace('{', '').replace('}', '');
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
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
		var _adx_invitation_mspp_webrole_powerpagecomponent = {
			adx_invitation_mspp_webrole_powerpagecomponentId: { a: 'adx_invitation_mspp_webrole_powerpagecomponentid', r: true },
			adx_invitationid: { a: 'adx_invitationid', r: true },
			powerpagecomponentid: { a: 'powerpagecomponentid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var adx_invitation_mspp_webrole_powerpagecomponent = {};
		adx_invitation_mspp_webrole_powerpagecomponent.ODataEntity = e;
		adx_invitation_mspp_webrole_powerpagecomponent.FormattedValue = {};
		for (var field in _adx_invitation_mspp_webrole_powerpagecomponent) {
			var a = _adx_invitation_mspp_webrole_powerpagecomponent[field].a;
			var b = _adx_invitation_mspp_webrole_powerpagecomponent[field].b;
			var c = _adx_invitation_mspp_webrole_powerpagecomponent[field].c;
			var d = _adx_invitation_mspp_webrole_powerpagecomponent[field].d;
			var g = _adx_invitation_mspp_webrole_powerpagecomponent[field].g;
			var r = _adx_invitation_mspp_webrole_powerpagecomponent[field].r;
			webApiField(adx_invitation_mspp_webrole_powerpagecomponent, field, e, a, b, c, d, r, u, g);
		}
		adx_invitation_mspp_webrole_powerpagecomponent.Entity = u;
		adx_invitation_mspp_webrole_powerpagecomponent.EntityName = 'adx_invitation_mspp_webrole_powerpagecomponent';
		adx_invitation_mspp_webrole_powerpagecomponent.EntityCollectionName = '';
		adx_invitation_mspp_webrole_powerpagecomponent['@odata.etag'] = e['@odata.etag'];
		adx_invitation_mspp_webrole_powerpagecomponent.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		adx_invitation_mspp_webrole_powerpagecomponent.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return adx_invitation_mspp_webrole_powerpagecomponent;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adx_invitation_mspp_webrole_powerpagecomponent = {
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