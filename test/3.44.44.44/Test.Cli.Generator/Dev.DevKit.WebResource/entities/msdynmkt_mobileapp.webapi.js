'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_mobileappApi = function (e) {
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
		var _msdynmkt_mobileapp = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_activefcm: { a: 'msdynmkt_activefcm' },
			msdynmkt_activeios: { a: 'msdynmkt_activeios' },
			msdynmkt_apikey: { a: 'msdynmkt_apikey' },
			msdynmkt_apitoken: { a: 'msdynmkt_apitoken' },
			msdynmkt_applicationmode: { a: 'msdynmkt_applicationmode' },
			msdynmkt_authenticationmode: { a: 'msdynmkt_authenticationmode' },
			msdynmkt_bundleId: { a: 'msdynmkt_bundleid' },
			msdynmkt_certificate1: { a: 'msdynmkt_certificate1' },
			msdynmkt_certificate2: { a: 'msdynmkt_certificate2' },
			msdynmkt_certificate3: { a: 'msdynmkt_certificate3' },
			msdynmkt_certificate4: { a: 'msdynmkt_certificate4' },
			msdynmkt_certificate5: { a: 'msdynmkt_certificate5' },
			msdynmkt_certificateName: { a: 'msdynmkt_certificatename' },
			msdynmkt_description: { a: 'msdynmkt_description' },
			msdynmkt_keyid: { a: 'msdynmkt_keyid' },
			msdynmkt_mobileappId: { a: 'msdynmkt_mobileappid' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_password: { a: 'msdynmkt_password' },
			msdynmkt_signingkey: { a: 'msdynmkt_signingkey' },
			msdynmkt_teamId: { a: 'msdynmkt_teamid' },
			msdynmkt_uionly_value_endpoint: { a: 'msdynmkt_uionly_value_endpoint' },
			msdynmkt_uionly_value_organizationid: { a: 'msdynmkt_uionly_value_organizationid' },
			msdynmkt_validationfcm: { a: 'msdynmkt_validationfcm' },
			msdynmkt_validationios: { a: 'msdynmkt_validationios' },
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
		var msdynmkt_mobileapp = {};
		msdynmkt_mobileapp.ODataEntity = e;
		msdynmkt_mobileapp.FormattedValue = {};
		for (var field in _msdynmkt_mobileapp) {
			var a = _msdynmkt_mobileapp[field].a;
			var b = _msdynmkt_mobileapp[field].b;
			var c = _msdynmkt_mobileapp[field].c;
			var d = _msdynmkt_mobileapp[field].d;
			var g = _msdynmkt_mobileapp[field].g;
			var r = _msdynmkt_mobileapp[field].r;
			webApiField(msdynmkt_mobileapp, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_mobileapp.Entity = u;
		msdynmkt_mobileapp.EntityName = 'msdynmkt_mobileapp';
		msdynmkt_mobileapp.EntityCollectionName = 'msdynmkt_mobileapps';
		msdynmkt_mobileapp['@odata.etag'] = e['@odata.etag'];
		msdynmkt_mobileapp.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_mobileapp.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_mobileapp;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_mobileapp = {
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