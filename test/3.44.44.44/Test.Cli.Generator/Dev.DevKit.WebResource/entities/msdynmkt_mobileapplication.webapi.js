'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_mobileapplicationApi = function (e) {
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
		var _msdynmkt_mobileapplication = {
			msdynmkt_activefcm: { a: 'msdynmkt_activefcm' },
			msdynmkt_activeios: { a: 'msdynmkt_activeios' },
			msdynmkt_apikey: { a: 'msdynmkt_apikey' },
			msdynmkt_apiToken: { a: 'msdynmkt_apitoken' },
			msdynmkt_applicationmode: { a: 'msdynmkt_applicationmode' },
			msdynmkt_applicationnicknameapns: { a: 'msdynmkt_applicationnicknameapns' },
			msdynmkt_applicationnicknamefcm: { a: 'msdynmkt_applicationnicknamefcm' },
			msdynmkt_authenticationmode: { a: 'msdynmkt_authenticationmode' },
			msdynmkt_BundleId: { a: 'msdynmkt_bundleid' },
			msdynmkt_certificate: { a: 'msdynmkt_certificate' },
			msdynmkt_CertificateName: { a: 'msdynmkt_certificatename' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_endpoint: { a: 'msdynmkt_endpoint' },
			msdynmkt_isconnected: { a: 'msdynmkt_isconnected' },
			msdynmkt_keyId: { a: 'msdynmkt_keyid' },
			msdynmkt_mobileapplicationId: { a: 'msdynmkt_mobileapplicationid' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_organizationid: { a: 'msdynmkt_organizationid' },
			msdynmkt_password: { a: 'msdynmkt_password' },
			msdynmkt_signingKey: { a: 'msdynmkt_signingkey' },
			msdynmkt_teamId: { a: 'msdynmkt_teamid' },
			msdynmkt_testmessage: { a: 'msdynmkt_testmessage' },
			msdynmkt_tokencopied: { a: 'msdynmkt_tokencopied' },
			msdynmkt_validationfcm: { a: 'msdynmkt_validationfcm' },
			msdynmkt_validationios: { a: 'msdynmkt_validationios' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdynmkt_mobileapplication = {};
		msdynmkt_mobileapplication.ODataEntity = e;
		msdynmkt_mobileapplication.FormattedValue = {};
		for (var field in _msdynmkt_mobileapplication) {
			var a = _msdynmkt_mobileapplication[field].a;
			var b = _msdynmkt_mobileapplication[field].b;
			var c = _msdynmkt_mobileapplication[field].c;
			var d = _msdynmkt_mobileapplication[field].d;
			var g = _msdynmkt_mobileapplication[field].g;
			var r = _msdynmkt_mobileapplication[field].r;
			webApiField(msdynmkt_mobileapplication, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_mobileapplication.Entity = u;
		msdynmkt_mobileapplication.EntityName = 'msdynmkt_mobileapplication';
		msdynmkt_mobileapplication.EntityCollectionName = 'msdynmkt_mobileapplications';
		msdynmkt_mobileapplication['@odata.etag'] = e['@odata.etag'];
		msdynmkt_mobileapplication.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_mobileapplication.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_mobileapplication;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_mobileapplication = {
		msdynmkt_validationfcm : {
			Checking: 295660001,
			Invalid: 295660003,
			Not_started: 295660000,
			Valid: 295660002,
			Valid_connected: 295660004
		},
		msdynmkt_validationios : {
			Checking: 295660001,
			Invalid: 295660003,
			Not_started: 295660000,
			Valid: 295660002,
			Valid_connected: 295660004
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