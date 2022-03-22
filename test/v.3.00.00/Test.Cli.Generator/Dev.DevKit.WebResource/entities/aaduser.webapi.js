'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.aaduserApi = function (e) {
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
		var _aaduser = {
			aaduserId: { a: 'aaduserid' },
			AccountEnabled: { a: 'accountenabled' },
			BusinessPhones: { a: 'businessphones' },
			City: { a: 'city' },
			CompanyName: { a: 'companyname' },
			CreatedDateTime_UtcDateAndTime: { a: 'createddatetime', r: true },
			DisplayName: { a: 'displayname' },
			GivenName: { a: 'givenname' },
			id1: { a: 'id' },
			ImAddresses: { a: 'imaddresses' },
			JobTitle: { a: 'jobtitle' },
			Mail: { a: 'mail' },
			MobilePhone: { a: 'mobilephone' },
			OfficeLocation: { a: 'officelocation' },
			PostalCode: { a: 'postalcode' },
			PreferredLanguage: { a: 'preferredlanguage' },
			StreetAddress: { a: 'streetaddress' },
			surname: { a: 'surname' },
			UserPrincipalName: { a: 'userprincipalname' },
			UserType: { a: 'usertype' }
		};
		if (e === undefined) e = {};
		var u = {};
		var aaduser = {};
		aaduser.ODataEntity = e;
		aaduser.FormattedValue = {};
		for (var field in _aaduser) {
			var a = _aaduser[field].a;
			var b = _aaduser[field].b;
			var c = _aaduser[field].c;
			var d = _aaduser[field].d;
			var g = _aaduser[field].g;
			var r = _aaduser[field].r;
			webApiField(aaduser, field, e, a, b, c, d, r, u, g);
		}
		aaduser.Entity = u;
		aaduser.EntityName = 'aaduser';
		aaduser.EntityCollectionName = 'aadusers';
		aaduser['@odata.etag'] = e['@odata.etag'];
		aaduser.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		aaduser.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return aaduser;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.aaduser = {
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