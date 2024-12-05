'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ConversationParticipantInsightsApi = function (e) {
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
		var _msdyn_conversationparticipantinsights = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AadId: { a: 'msdyn_aadid' },
			msdyn_AvgPauseBeforeSpeakingInMS: { a: 'msdyn_avgpausebeforespeakinginms' },
			msdyn_ChannelIndex: { a: 'msdyn_channelindex' },
			msdyn_ConversationAggregatedInsights: { b: 'msdyn_ConversationAggregatedInsights', a: '_msdyn_conversationaggregatedinsights_value', c: 'msdyn_conversationaggregatedinsightses', d: 'msdyn_conversationaggregatedinsights' },
			msdyn_ConversationParticipantInsightsId: { a: 'msdyn_conversationparticipantinsightsid' },
			msdyn_DisplayName: { a: 'msdyn_displayname' },
			msdyn_Email: { a: 'msdyn_email' },
			msdyn_LongestMonologueInMS: { a: 'msdyn_longestmonologueinms' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_ParticipantId: { a: 'msdyn_participantid' },
			msdyn_ParticipantRole: { a: 'msdyn_participantrole' },
			msdyn_ParticipationMethod: { a: 'msdyn_participationmethod' },
			msdyn_PhoneNumber: { a: 'msdyn_phonenumber' },
			msdyn_SwitchCount: { a: 'msdyn_switchcount' },
			msdyn_TalkingSpeedWordsPerMin: { a: 'msdyn_talkingspeedwordspermin' },
			msdyn_TalkToListenRatio: { a: 'msdyn_talktolistenratio' },
			msdyn_TenantId: { a: 'msdyn_tenantid' },
			msdyn_user_account: { b: 'msdyn_user_account', a: '_msdyn_user_value', c: 'accounts', d: 'account' },
			msdyn_user_contact: { b: 'msdyn_user_contact', a: '_msdyn_user_value', c: 'contacts', d: 'contact' },
			msdyn_user_systemuser: { b: 'msdyn_user_systemuser', a: '_msdyn_user_value', c: 'systemusers', d: 'systemuser' },
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
		var msdyn_conversationparticipantinsights = {};
		msdyn_conversationparticipantinsights.ODataEntity = e;
		msdyn_conversationparticipantinsights.FormattedValue = {};
		for (var field in _msdyn_conversationparticipantinsights) {
			var a = _msdyn_conversationparticipantinsights[field].a;
			var b = _msdyn_conversationparticipantinsights[field].b;
			var c = _msdyn_conversationparticipantinsights[field].c;
			var d = _msdyn_conversationparticipantinsights[field].d;
			var g = _msdyn_conversationparticipantinsights[field].g;
			var r = _msdyn_conversationparticipantinsights[field].r;
			webApiField(msdyn_conversationparticipantinsights, field, e, a, b, c, d, r, u, g);
		}
		msdyn_conversationparticipantinsights.Entity = u;
		msdyn_conversationparticipantinsights.EntityName = 'msdyn_conversationparticipantinsights';
		msdyn_conversationparticipantinsights.EntityCollectionName = 'msdyn_conversationparticipantinsightses';
		msdyn_conversationparticipantinsights['@odata.etag'] = e['@odata.etag'];
		msdyn_conversationparticipantinsights.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_conversationparticipantinsights.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_conversationparticipantinsights;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ConversationParticipantInsights = {
		msdyn_ParticipantRole : {
			Agent: 0,
			Customer: 1
		},
		msdyn_ParticipationMethod : {
			Callee: 192350001,
			Caller: 192350000
		},
		msdyn_UserIdType : {
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