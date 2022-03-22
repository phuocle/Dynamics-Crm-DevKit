'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_livechatconfigApi = function (e) {
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
		var _msdyn_livechatconfig = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_agentDisplayName: { a: 'msdyn_agentdisplayname' },
			msdyn_AuthsettingsId: { b: 'msdyn_AuthsettingsId', a: '_msdyn_authsettingsid_value', c: 'msdyn_authenticationsettingses', d: 'msdyn_authenticationsettings' },
			msdyn_AutoDetectLanguage: { a: 'msdyn_autodetectlanguage' },
			msdyn_avatarUrl: { a: 'msdyn_avatarurl' },
			msdyn_averagewaittime_enabled: { a: 'msdyn_averagewaittime_enabled' },
			msdyn_callingoptions: { a: 'msdyn_callingoptions' },
			msdyn_cobrowseprovider: { a: 'msdyn_cobrowseprovider' },
			msdyn_conversationmode: { a: 'msdyn_conversationmode' },
			msdyn_Duringnonoperatinghours: { a: 'msdyn_duringnonoperatinghours' },
			msdyn_EmailTemplate: { a: 'msdyn_emailtemplate' },
			msdyn_enablechatreconnect: { a: 'msdyn_enablechatreconnect' },
			msdyn_Enablechattranscriptdownload: { a: 'msdyn_enablechattranscriptdownload' },
			msdyn_Enablechattranscriptemail: { a: 'msdyn_enablechattranscriptemail' },
			msdyn_enablecobrowse: { a: 'msdyn_enablecobrowse' },
			msdyn_Enablefileattachmentsforagents: { a: 'msdyn_enablefileattachmentsforagents' },
			msdyn_Enablefileattachmentsforcustomers: { a: 'msdyn_enablefileattachmentsforcustomers' },
			msdyn_enablescreensharing: { a: 'msdyn_enablescreensharing' },
			msdyn_genericagentdisplayname: { a: 'msdyn_genericagentdisplayname' },
			msdyn_infolabel: { a: 'msdyn_infolabel' },
			msdyn_Language: { a: 'msdyn_language' },
			msdyn_livechatconfigId: { a: 'msdyn_livechatconfigid' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_Mailbox: { a: 'msdyn_mailbox' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_oc_geolocationprovider: { b: 'msdyn_oc_geolocationprovider', a: '_msdyn_oc_geolocationprovider_value', c: 'msdyn_oc_geolocationproviders', d: 'msdyn_oc_geolocationprovider' },
			msdyn_ocWidgetLanguage: { b: 'msdyn_ocWidgetLanguage', a: '_msdyn_ocwidgetlanguage_value', c: 'msdyn_oclanguages', d: 'msdyn_oclanguage' },
			msdyn_offlinewidgetsubtitle: { a: 'msdyn_offlinewidgetsubtitle' },
			msdyn_offlinewidgetthemecolor: { a: 'msdyn_offlinewidgetthemecolor' },
			msdyn_offlinewidgettitle: { a: 'msdyn_offlinewidgettitle' },
			msdyn_operatinghourid: { b: 'msdyn_operatinghourid', a: '_msdyn_operatinghourid_value', c: 'msdyn_operatinghours', d: 'msdyn_operatinghour' },
			msdyn_portalurl: { a: 'msdyn_portalurl' },
			msdyn_positioninqueue_enabled: { a: 'msdyn_positioninqueue_enabled' },
			msdyn_postchatenabled: { a: 'msdyn_postchatenabled' },
			msdyn_PostConversationSurvey: { b: 'msdyn_PostConversationSurvey', a: '_msdyn_postconversationsurvey_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msdyn_PostConversationSurveyBotSurvey: { a: 'msdyn_postconversationsurveybotsurvey' },
			msdyn_PostConversationSurveyEnable: { a: 'msdyn_postconversationsurveyenable' },
			msdyn_PostConversationSurveyMessageText: { a: 'msdyn_postconversationsurveymessagetext' },
			msdyn_PostConversationSurveyMode: { a: 'msdyn_postconversationsurveymode' },
			msdyn_PrechatEnabled: { a: 'msdyn_prechatenabled' },
			msdyn_PreChatQuestionnaireAuthenticated: { b: 'msdyn_PreChatQuestionnaireAuthenticated', a: '_msdyn_prechatquestionnaireauthenticated_value', c: 'msdyn_questionsequences', d: 'msdyn_questionsequence' },
			msdyn_PreChatQuestionnaireUnauthenticated: { b: 'msdyn_PreChatQuestionnaireUnauthenticated', a: '_msdyn_prechatquestionnaireunauthenticated_value', c: 'msdyn_questionsequences', d: 'msdyn_questionsequence' },
			msdyn_proactivechatenabled: { a: 'msdyn_proactivechatenabled' },
			msdyn_redirectionurl: { a: 'msdyn_redirectionurl' },
			msdyn_requestvisitorlocation: { a: 'msdyn_requestvisitorlocation' },
			msdyn_screensharingprovider: { a: 'msdyn_screensharingprovider' },
			msdyn_showagentname: { a: 'msdyn_showagentname' },
			msdyn_Showwidgetduringofflinehours: { a: 'msdyn_showwidgetduringofflinehours' },
			msdyn_timetoreconnectwithpreviousagent: { a: 'msdyn_timetoreconnectwithpreviousagent' },
			msdyn_widgetAppId: { a: 'msdyn_widgetappid' },
			msdyn_WidgetLocale: { b: 'msdyn_WidgetLocale', a: '_msdyn_widgetlocale_value', c: 'msdyn_chatwidgetlanguages', d: 'msdyn_chatwidgetlanguage' },
			msdyn_widgetPosition: { a: 'msdyn_widgetposition' },
			msdyn_WidgetSnippet: { a: 'msdyn_widgetsnippet' },
			msdyn_widgetsoundnotification: { a: 'msdyn_widgetsoundnotification' },
			msdyn_widgetSubtitle: { a: 'msdyn_widgetsubtitle' },
			msdyn_widgetThemeColor: { a: 'msdyn_widgetthemecolor' },
			msdyn_widgetTitle: { a: 'msdyn_widgettitle' },
			msdyn_widgetvisualnotification: { a: 'msdyn_widgetvisualnotification' },
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
		var msdyn_livechatconfig = {};
		msdyn_livechatconfig.ODataEntity = e;
		msdyn_livechatconfig.FormattedValue = {};
		for (var field in _msdyn_livechatconfig) {
			var a = _msdyn_livechatconfig[field].a;
			var b = _msdyn_livechatconfig[field].b;
			var c = _msdyn_livechatconfig[field].c;
			var d = _msdyn_livechatconfig[field].d;
			var g = _msdyn_livechatconfig[field].g;
			var r = _msdyn_livechatconfig[field].r;
			webApiField(msdyn_livechatconfig, field, e, a, b, c, d, r, u, g);
		}
		msdyn_livechatconfig.Entity = u;
		msdyn_livechatconfig.EntityName = 'msdyn_livechatconfig';
		msdyn_livechatconfig.EntityCollectionName = 'msdyn_livechatconfigs';
		msdyn_livechatconfig['@odata.etag'] = e['@odata.etag'];
		msdyn_livechatconfig.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_livechatconfig.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_livechatconfig;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_livechatconfig = {
		msdyn_agentDisplayName : {
			First_name: 192350001,
			Full_name: 192350000,
			Last_name: 192350002,
			Nick_name: 192350003
		},
		msdyn_callingoptions : {
			No_calling: 192350000,
			Video_and_voice_calling: 192350001,
			Voice_only: 192350002
		},
		msdyn_conversationmode : {
			Live_Chat: 192350000,
			Persistent_Chat: 192350001
		},
		msdyn_Language : {
			Auto_Detect: 192350000,
			English: 192360014
		},
		msdyn_offlinewidgetthemecolor : {
			Black: 19236004,
			Blue: 19236002,
			Brown: 192350005,
			Clay: 192350006,
			Green: 19236003,
			Grey: 192350003,
			Orange: 192350001,
			Pink: 192350002,
			Purple: 192350007,
			Red: 19236001,
			Teal: 192360017,
			Violet: 192350004
		},
		msdyn_PostConversationSurveyMode : {
			Insert_survey_in_conversation: 192350000,
			Send_survey_link_to_conversation: 192350001
		},
		msdyn_widgetPosition : {
			Bottom_left: 192236011,
			Bottom_right: 192236010
		},
		msdyn_widgetThemeColor : {
			Black: 19236004,
			Blue: 19236002,
			Brown: 192350005,
			Clay: 192350006,
			Green: 19236003,
			Grey: 192350003,
			Orange: 192350001,
			Pink: 192350002,
			Purple: 192350007,
			Red: 19236001,
			Teal: 192360017,
			Violet: 192350004
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