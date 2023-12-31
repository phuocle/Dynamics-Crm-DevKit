﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocbotchannelregistrationApi = function (e) {
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
		var _msdyn_ocbotchannelregistration = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_communicationprovidersettingid: { b: 'msdyn_communicationprovidersettingid', a: '_msdyn_communicationprovidersettingid_value', c: 'msdyn_occommunicationprovidersettings', d: 'msdyn_occommunicationprovidersetting' },
			msdyn_iscustommessagingbcr: { a: 'msdyn_iscustommessagingbcr' },
			msdyn_iscustommessagingcreated: { a: 'msdyn_iscustommessagingcreated' },
			msdyn_lastvalidateddate_UtcDateAndTime: { a: 'msdyn_lastvalidateddate' },
			msdyn_messagingendpoint: { a: 'msdyn_messagingendpoint' },
			msdyn_msappid: { a: 'msdyn_msappid' },
			msdyn_msappsecret: { a: 'msdyn_msappsecret' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocbotchannelregistrationId: { a: 'msdyn_ocbotchannelregistrationid' },
			msdyn_ocfbapplicationid: { b: 'msdyn_ocfbapplicationid', a: '_msdyn_ocfbapplicationid_value', c: 'msdyn_ocfbapplications', d: 'msdyn_ocfbapplication' },
			msdyn_oclinechannelconfigid: { b: 'msdyn_oclinechannelconfigid', a: '_msdyn_oclinechannelconfigid_value', c: 'msdyn_oclinechannelconfigs', d: 'msdyn_oclinechannelconfig' },
			msdyn_octeamschannelconfigid: { b: 'msdyn_octeamschannelconfigid', a: '_msdyn_octeamschannelconfigid_value', c: 'msdyn_octeamschannelconfigs', d: 'msdyn_octeamschannelconfig' },
			msdyn_validationstatus: { a: 'msdyn_validationstatus' },
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
		var msdyn_ocbotchannelregistration = {};
		msdyn_ocbotchannelregistration.ODataEntity = e;
		msdyn_ocbotchannelregistration.FormattedValue = {};
		for (var field in _msdyn_ocbotchannelregistration) {
			var a = _msdyn_ocbotchannelregistration[field].a;
			var b = _msdyn_ocbotchannelregistration[field].b;
			var c = _msdyn_ocbotchannelregistration[field].c;
			var d = _msdyn_ocbotchannelregistration[field].d;
			var g = _msdyn_ocbotchannelregistration[field].g;
			var r = _msdyn_ocbotchannelregistration[field].r;
			webApiField(msdyn_ocbotchannelregistration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocbotchannelregistration.Entity = u;
		msdyn_ocbotchannelregistration.EntityName = 'msdyn_ocbotchannelregistration';
		msdyn_ocbotchannelregistration.EntityCollectionName = 'msdyn_ocbotchannelregistrations';
		msdyn_ocbotchannelregistration['@odata.etag'] = e['@odata.etag'];
		msdyn_ocbotchannelregistration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocbotchannelregistration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocbotchannelregistration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocbotchannelregistration = {
		OwnerIdType : {
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