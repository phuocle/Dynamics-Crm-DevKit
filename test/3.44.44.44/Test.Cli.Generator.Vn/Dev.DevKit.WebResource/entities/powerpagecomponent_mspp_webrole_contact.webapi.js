'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.powerpagecomponent_mspp_webrole_contactApi = function (e) {
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
		var _powerpagecomponent_mspp_webrole_contact = {
			contactid: { a: 'contactid', r: true },
			powerpagecomponent_mspp_webrole_contactId: { a: 'powerpagecomponent_mspp_webrole_contactid', r: true },
			powerpagecomponentid: { a: 'powerpagecomponentid', r: true },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var powerpagecomponent_mspp_webrole_contact = {};
		powerpagecomponent_mspp_webrole_contact.ODataEntity = e;
		powerpagecomponent_mspp_webrole_contact.FormattedValue = {};
		for (var field in _powerpagecomponent_mspp_webrole_contact) {
			var a = _powerpagecomponent_mspp_webrole_contact[field].a;
			var b = _powerpagecomponent_mspp_webrole_contact[field].b;
			var c = _powerpagecomponent_mspp_webrole_contact[field].c;
			var d = _powerpagecomponent_mspp_webrole_contact[field].d;
			var g = _powerpagecomponent_mspp_webrole_contact[field].g;
			var r = _powerpagecomponent_mspp_webrole_contact[field].r;
			webApiField(powerpagecomponent_mspp_webrole_contact, field, e, a, b, c, d, r, u, g);
		}
		powerpagecomponent_mspp_webrole_contact.Entity = u;
		powerpagecomponent_mspp_webrole_contact.EntityName = 'powerpagecomponent_mspp_webrole_contact';
		powerpagecomponent_mspp_webrole_contact.EntityCollectionName = '';
		powerpagecomponent_mspp_webrole_contact['@odata.etag'] = e['@odata.etag'];
		powerpagecomponent_mspp_webrole_contact.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		powerpagecomponent_mspp_webrole_contact.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return powerpagecomponent_mspp_webrole_contact;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.powerpagecomponent_mspp_webrole_contact = {
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