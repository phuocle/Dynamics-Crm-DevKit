'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ChannelInstanceAccountApi = function (e) {
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
		var _msdyn_channelinstanceaccount = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ChannelDefinitionId: { b: 'msdyn_ChannelDefinitionId', a: '_msdyn_channeldefinitionid_value', c: 'msdyn_channeldefinitions', d: 'msdyn_channeldefinition' },
			msdyn_ChannelInstanceAccountId: { a: 'msdyn_channelinstanceaccountid' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_byoacschannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_byoacschannelinstanceaccounts', d: 'msdynmkt_byoacschannelinstanceaccount' },
			msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_infobipchannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_infobipchannelinstanceaccounts', d: 'msdynmkt_infobipchannelinstanceaccount' },
			msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_linkmobilitychannelinstanceaccounts', d: 'msdynmkt_linkmobilitychannelinstanceaccount' },
			msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_mocksmsproviderchannelinstanceaccounts', d: 'msdynmkt_mocksmsproviderchannelinstanceaccount' },
			msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_telesignchannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_telesignchannelinstanceaccounts', d: 'msdynmkt_telesignchannelinstanceaccount' },
			msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_twiliochannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_twiliochannelinstanceaccounts', d: 'msdynmkt_twiliochannelinstanceaccount' },
			msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount: { b: 'msdyn_extendedentityid_msdynmkt_vibeschannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_vibeschannelinstanceaccounts', d: 'msdynmkt_vibeschannelinstanceaccount' },
			msdyn_extendedentityId_msdyn_defextendedchannelinstanceaccount: { b: 'msdyn_extendedentityId_msdyn_defextendedchannelinstanceaccount', a: '_msdyn_extendedentityid_value', c: 'msdyn_defextendedchannelinstanceaccounts', d: 'msdyn_defextendedchannelinstanceaccount' },
			msdyn_Name: { a: 'msdyn_name' },
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
		var msdyn_channelinstanceaccount = {};
		msdyn_channelinstanceaccount.ODataEntity = e;
		msdyn_channelinstanceaccount.FormattedValue = {};
		for (var field in _msdyn_channelinstanceaccount) {
			var a = _msdyn_channelinstanceaccount[field].a;
			var b = _msdyn_channelinstanceaccount[field].b;
			var c = _msdyn_channelinstanceaccount[field].c;
			var d = _msdyn_channelinstanceaccount[field].d;
			var g = _msdyn_channelinstanceaccount[field].g;
			var r = _msdyn_channelinstanceaccount[field].r;
			webApiField(msdyn_channelinstanceaccount, field, e, a, b, c, d, r, u, g);
		}
		msdyn_channelinstanceaccount.Entity = u;
		msdyn_channelinstanceaccount.EntityName = 'msdyn_channelinstanceaccount';
		msdyn_channelinstanceaccount.EntityCollectionName = 'msdyn_channelinstanceaccounts';
		msdyn_channelinstanceaccount['@odata.etag'] = e['@odata.etag'];
		msdyn_channelinstanceaccount.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_channelinstanceaccount.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_channelinstanceaccount;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ChannelInstanceAccount = {
		msdyn_extendedentityIdType : {
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