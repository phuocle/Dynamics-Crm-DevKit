'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ChannelInstanceApi = function (e) {
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
		var _msdyn_channelinstance = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ChannelDefinitionId: { b: 'msdyn_ChannelDefinitionId', a: '_msdyn_channeldefinitionid_value', c: 'msdyn_channeldefinitions', d: 'msdyn_channeldefinition' },
			msdyn_ChannelInstanceAccountId: { b: 'msdyn_ChannelInstanceAccountId', a: '_msdyn_channelinstanceaccountid_value', c: 'msdyn_channelinstanceaccounts', d: 'msdyn_channelinstanceaccount' },
			msdyn_ChannelInstanceId: { a: 'msdyn_channelinstanceid' },
			msdyn_ConsumingApplicationId: { b: 'msdyn_ConsumingApplicationId', a: '_msdyn_consumingapplicationid_value', c: 'msdyn_consumingapplications', d: 'msdyn_consumingapplication' },
			msdyn_ContactPoint: { a: 'msdyn_contactpoint' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_extendedentityid_msdynmkt_byoacschannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_byoacschannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_byoacschannelinstances', d: 'msdynmkt_byoacschannelinstance' },
			msdyn_extendedentityid_msdynmkt_infobipchannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_infobipchannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_infobipchannelinstances', d: 'msdynmkt_infobipchannelinstance' },
			msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_linkmobilitychannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_linkmobilitychannelinstances', d: 'msdynmkt_linkmobilitychannelinstance' },
			msdyn_extendedentityid_msdynmkt_mobileappchannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_mobileappchannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_mobileappchannelinstances', d: 'msdynmkt_mobileappchannelinstance' },
			msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_mocksmsproviderchannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_mocksmsproviderchannelinstances', d: 'msdynmkt_mocksmsproviderchannelinstance' },
			msdyn_extendedentityid_msdynmkt_telesignchannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_telesignchannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_telesignchannelinstances', d: 'msdynmkt_telesignchannelinstance' },
			msdyn_extendedentityid_msdynmkt_twiliochannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_twiliochannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_twiliochannelinstances', d: 'msdynmkt_twiliochannelinstance' },
			msdyn_extendedentityid_msdynmkt_vibeschannelinstance: { b: 'msdyn_extendedentityid_msdynmkt_vibeschannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdynmkt_vibeschannelinstances', d: 'msdynmkt_vibeschannelinstance' },
			msdyn_extendedentityId_msdyn_defextendedchannelinstance: { b: 'msdyn_extendedentityId_msdyn_defextendedchannelinstance', a: '_msdyn_extendedentityid_value', c: 'msdyn_defextendedchannelinstances', d: 'msdyn_defextendedchannelinstance' },
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
		var msdyn_channelinstance = {};
		msdyn_channelinstance.ODataEntity = e;
		msdyn_channelinstance.FormattedValue = {};
		for (var field in _msdyn_channelinstance) {
			var a = _msdyn_channelinstance[field].a;
			var b = _msdyn_channelinstance[field].b;
			var c = _msdyn_channelinstance[field].c;
			var d = _msdyn_channelinstance[field].d;
			var g = _msdyn_channelinstance[field].g;
			var r = _msdyn_channelinstance[field].r;
			webApiField(msdyn_channelinstance, field, e, a, b, c, d, r, u, g);
		}
		msdyn_channelinstance.Entity = u;
		msdyn_channelinstance.EntityName = 'msdyn_channelinstance';
		msdyn_channelinstance.EntityCollectionName = 'msdyn_channelinstances';
		msdyn_channelinstance['@odata.etag'] = e['@odata.etag'];
		msdyn_channelinstance.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_channelinstance.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_channelinstance;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ChannelInstance = {
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