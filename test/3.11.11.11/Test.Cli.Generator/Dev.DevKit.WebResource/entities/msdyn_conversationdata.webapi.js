﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_conversationdataApi = function (e) {
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
		var _msdyn_conversationdata = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AccountId: { a: 'msdyn_accountid' },
			msdyn_AdditionalData: { a: 'msdyn_additionaldata' },
			msdyn_Channel: { a: 'msdyn_channel' },
			msdyn_ContactId: { a: 'msdyn_contactid' },
			msdyn_conversationdataId: { a: 'msdyn_conversationdataid' },
			msdyn_ConversationId: { a: 'msdyn_conversationid' },
			msdyn_ConversationTimestamp_UtcDateAndTime: { a: 'msdyn_conversationtimestamp' },
			msdyn_CustomAttribute1: { a: 'msdyn_customattribute1' },
			msdyn_CustomAttribute2: { a: 'msdyn_customattribute2' },
			msdyn_CustomAttribute3: { a: 'msdyn_customattribute3' },
			msdyn_CustomAttribute4: { a: 'msdyn_customattribute4' },
			msdyn_CustomAttribute5: { a: 'msdyn_customattribute5' },
			msdyn_customerCity: { a: 'msdyn_customercity' },
			msdyn_customerCountry: { a: 'msdyn_customercountry' },
			msdyn_customerState: { a: 'msdyn_customerstate' },
			msdyn_customerZip: { a: 'msdyn_customerzip' },
			msdyn_ExternalCorrelationId: { a: 'msdyn_externalcorrelationid' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PrimaryRelatedEntityName: { a: 'msdyn_primaryrelatedentityname' },
			msdyn_PrimaryRelatedEntityRecordId: { a: 'msdyn_primaryrelatedentityrecordid' },
			msdyn_ProviderId: { a: 'msdyn_providerid' },
			msdyn_ProviderName: { a: 'msdyn_providername' },
			msdyn_Region: { a: 'msdyn_region' },
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
		var msdyn_conversationdata = {};
		msdyn_conversationdata.ODataEntity = e;
		msdyn_conversationdata.FormattedValue = {};
		for (var field in _msdyn_conversationdata) {
			var a = _msdyn_conversationdata[field].a;
			var b = _msdyn_conversationdata[field].b;
			var c = _msdyn_conversationdata[field].c;
			var d = _msdyn_conversationdata[field].d;
			var g = _msdyn_conversationdata[field].g;
			var r = _msdyn_conversationdata[field].r;
			webApiField(msdyn_conversationdata, field, e, a, b, c, d, r, u, g);
		}
		msdyn_conversationdata.Entity = u;
		msdyn_conversationdata.EntityName = 'msdyn_conversationdata';
		msdyn_conversationdata.EntityCollectionName = 'msdyn_conversationdatas';
		msdyn_conversationdata['@odata.etag'] = e['@odata.etag'];
		msdyn_conversationdata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_conversationdata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_conversationdata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_conversationdata = {
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