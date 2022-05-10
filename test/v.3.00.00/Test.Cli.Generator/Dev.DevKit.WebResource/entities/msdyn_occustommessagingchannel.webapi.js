'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_occustommessagingchannelApi = function (e) {
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
		var _msdyn_occustommessagingchannel = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_custombotchannelregistration: { b: 'msdyn_custombotchannelregistration', a: '_msdyn_custombotchannelregistration_value', c: 'msdyn_ocbotchannelregistrations', d: 'msdyn_ocbotchannelregistration' },
			msdyn_enablefileattachmentsforagents: { a: 'msdyn_enablefileattachmentsforagents' },
			msdyn_enablefileattachmentsforcustomers: { a: 'msdyn_enablefileattachmentsforcustomers' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_occustomchannelid: { a: 'msdyn_occustomchannelid' },
			msdyn_occustommessagingchannelId: { a: 'msdyn_occustommessagingchannelid' },
			msdyn_ocwidgetlanguage: { b: 'msdyn_ocwidgetlanguage', a: '_msdyn_ocwidgetlanguage_value', c: 'msdyn_oclanguages', d: 'msdyn_oclanguage' },
			msdyn_PostConversationSurvey: { b: 'msdyn_PostConversationSurvey', a: '_msdyn_postconversationsurvey_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msdyn_PostConversationSurveyBotSurvey: { a: 'msdyn_postconversationsurveybotsurvey' },
			msdyn_PostConversationSurveyBotSurveyMessageText: { a: 'msdyn_postconversationsurveybotsurveymessagetext' },
			msdyn_PostConversationSurveyBotSurveyMode: { a: 'msdyn_postconversationsurveybotsurveymode' },
			msdyn_PostConversationSurveyEnable: { a: 'msdyn_postconversationsurveyenable' },
			msdyn_PostConversationSurveyMessageText: { a: 'msdyn_postconversationsurveymessagetext' },
			msdyn_PostConversationSurveyMode: { a: 'msdyn_postconversationsurveymode' },
			msdyn_PostConversationSurveySeparateBotSurvey: { b: 'msdyn_PostConversationSurveySeparateBotSurvey', a: '_msdyn_postconversationsurveyseparatebotsurvey_value', c: 'msfp_surveies', d: 'msfp_survey' },
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
		var msdyn_occustommessagingchannel = {};
		msdyn_occustommessagingchannel.ODataEntity = e;
		msdyn_occustommessagingchannel.FormattedValue = {};
		for (var field in _msdyn_occustommessagingchannel) {
			var a = _msdyn_occustommessagingchannel[field].a;
			var b = _msdyn_occustommessagingchannel[field].b;
			var c = _msdyn_occustommessagingchannel[field].c;
			var d = _msdyn_occustommessagingchannel[field].d;
			var g = _msdyn_occustommessagingchannel[field].g;
			var r = _msdyn_occustommessagingchannel[field].r;
			webApiField(msdyn_occustommessagingchannel, field, e, a, b, c, d, r, u, g);
		}
		msdyn_occustommessagingchannel.Entity = u;
		msdyn_occustommessagingchannel.EntityName = 'msdyn_occustommessagingchannel';
		msdyn_occustommessagingchannel.EntityCollectionName = 'msdyn_occustommessagingchannels';
		msdyn_occustommessagingchannel['@odata.etag'] = e['@odata.etag'];
		msdyn_occustommessagingchannel.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_occustommessagingchannel.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_occustommessagingchannel;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_occustommessagingchannel = {
		msdyn_occustomchannelid : {
			Direct_Line: 192350000,
			Googles_Business_Messages: 192350004,
			Kik: 192350001,
			Telegram: 192350002
		},
		msdyn_PostConversationSurveyBotSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
		msdyn_PostConversationSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
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