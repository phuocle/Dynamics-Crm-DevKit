'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocprovisioningstateApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
			var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			var property = {};
			var getFormattedValue = function () {
				if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
					return EMPTY_STRING;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity[logicalName + l] === entityLogicalName) {
						return entity[logicalName + f];
					}
					return EMPTY_STRING;
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
					value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
					upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
				} else {
					upsertEntity[logicalName] = value;
				}
				entity[logicalName] = value;
			};
			Object.defineProperty(property, 'FormattedValue', {
				get: getFormattedValue
			});
			if (readOnly) {
				Object.defineProperty(property, 'Value', {
					get: getValue
				});
			}
			else {
				Object.defineProperty(property, 'Value', {
					get: getValue,
					set: setValue
				});
			}
			return property;
		}
		var msdyn_ocprovisioningstate = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_communicationprovidersettingid: { b: 'msdyn_communicationprovidersettingid', a: '_msdyn_communicationprovidersettingid_value', c: 'msdyn_occommunicationprovidersettings', d: 'msdyn_occommunicationprovidersetting' },
			msdyn_errormessage: { a: 'msdyn_errormessage' },
			msdyn_exceptiondetails: { a: 'msdyn_exceptiondetails' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocfbapplicationid: { b: 'msdyn_ocfbapplicationid', a: '_msdyn_ocfbapplicationid_value', c: 'msdyn_ocfbapplications', d: 'msdyn_ocfbapplication' },
			msdyn_ocfbpageid: { b: 'msdyn_ocfbpageid', a: '_msdyn_ocfbpageid_value', c: 'msdyn_ocfbpages', d: 'msdyn_ocfbpage' },
			msdyn_oclinechannelconfigid: { b: 'msdyn_oclinechannelconfigid', a: '_msdyn_oclinechannelconfigid_value', c: 'msdyn_oclinechannelconfigs', d: 'msdyn_oclinechannelconfig' },
			msdyn_ocprovisioningstateId: { a: 'msdyn_ocprovisioningstateid' },
			msdyn_octeamschannelconfigid: { b: 'msdyn_octeamschannelconfigid', a: '_msdyn_octeamschannelconfigid_value', c: 'msdyn_octeamschannelconfigs', d: 'msdyn_octeamschannelconfig' },
			msdyn_ocwhatsappchannelaccountId: { b: 'msdyn_ocwhatsappchannelaccountId', a: '_msdyn_ocwhatsappchannelaccountid_value', c: 'msdyn_ocwhatsappchannelaccounts', d: 'msdyn_ocwhatsappchannelaccount' },
			msdyn_phonenumberid: { b: 'msdyn_phonenumberid', a: '_msdyn_phonenumberid_value', c: 'msdyn_ocphonenumbers', d: 'msdyn_ocphonenumber' },
			msdyn_provisioningresponse: { a: 'msdyn_provisioningresponse' },
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
		for (var field in msdyn_ocprovisioningstate) {
			var a = msdyn_ocprovisioningstate[field].a;
			var b = msdyn_ocprovisioningstate[field].b;
			var c = msdyn_ocprovisioningstate[field].c;
			var d = msdyn_ocprovisioningstate[field].d;
			var g = msdyn_ocprovisioningstate[field].g;
			var r = msdyn_ocprovisioningstate[field].r;
			msdyn_ocprovisioningstate[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_ocprovisioningstate.Entity = u;
		msdyn_ocprovisioningstate.EntityName = 'msdyn_ocprovisioningstate';
		msdyn_ocprovisioningstate.EntityCollectionName = 'msdyn_ocprovisioningstates';
		msdyn_ocprovisioningstate['@odata.etag'] = e['@odata.etag'];
		msdyn_ocprovisioningstate.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocprovisioningstate.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocprovisioningstate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocprovisioningstate = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Deprovisioned: 192350006,
			Deprovisioning: 192350005,
			Draft: 192350001,
			Error: 192350004,
			Processing: 192350002,
			Running: 192350003
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