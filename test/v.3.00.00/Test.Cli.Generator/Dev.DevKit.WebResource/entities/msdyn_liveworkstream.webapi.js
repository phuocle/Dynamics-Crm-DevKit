'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_liveworkstreamApi = function (e) {
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
		var _msdyn_liveworkstream = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AllowedPresences: { a: 'msdyn_allowedpresences', g: true },
			msdyn_APIKey: { a: 'msdyn_apikey' },
			msdyn_apikeyversionnumber: { a: 'msdyn_apikeyversionnumber' },
			msdyn_AssignWorkItemAfterDecline: { a: 'msdyn_assignworkitemafterdecline' },
			msdyn_AutoCloseAfterInactivity: { a: 'msdyn_autocloseafterinactivity' },
			msdyn_blockcapacityforwrapup: { a: 'msdyn_blockcapacityforwrapup' },
			msdyn_bot_queue: { b: 'msdyn_bot_queue', a: '_msdyn_bot_queue_value', c: 'queues', d: 'queue' },
			msdyn_bot_rule: { a: 'msdyn_bot_rule' },
			msdyn_bot_user: { b: 'msdyn_bot_user', a: '_msdyn_bot_user_value', c: 'systemusers', d: 'systemuser' },
			msdyn_capacityformat: { a: 'msdyn_capacityformat' },
			msdyn_CapacityRequired: { a: 'msdyn_capacityrequired' },
			msdyn_ConnectorsURL: { a: 'msdyn_connectorsurl' },
			msdyn_conversationmode: { a: 'msdyn_conversationmode' },
			msdyn_CustomerID: { a: 'msdyn_customerid' },
			msdyn_defaultqueue: { b: 'msdyn_defaultqueue', a: '_msdyn_defaultqueue_value', c: 'queues', d: 'queue' },
			msdyn_direction: { a: 'msdyn_direction' },
			msdyn_enableagentaffinity: { a: 'msdyn_enableagentaffinity' },
			msdyn_enableautomatedmessages: { a: 'msdyn_enableautomatedmessages' },
			msdyn_enableselectingfrompushbasedworkstreams: { a: 'msdyn_enableselectingfrompushbasedworkstreams' },
			msdyn_EntityRoutingConfigurationId: { b: 'msdyn_EntityRoutingConfigurationId', a: '_msdyn_entityroutingconfigurationid_value', c: 'msdyn_entityroutingconfigurations', d: 'msdyn_entityroutingconfiguration' },
			msdyn_FallBackLanguage: { a: 'msdyn_fallbacklanguage' },
			msdyn_FollowUpAfterWaiting: { a: 'msdyn_followupafterwaiting' },
			msdyn_handlingtimethreshold: { a: 'msdyn_handlingtimethreshold' },
			msdyn_isdefault: { a: 'msdyn_isdefault' },
			msdyn_LastValidationOn_TimezoneDateAndTime: { a: 'msdyn_lastvalidationon' },
			msdyn_LastValidationStatus: { a: 'msdyn_lastvalidationstatus' },
			msdyn_liveworkstreamId: { a: 'msdyn_liveworkstreamid' },
			msdyn_masterentityroutingconfigurationid: { b: 'msdyn_masterentityroutingconfigurationid', a: '_msdyn_masterentityroutingconfigurationid_value', c: 'msdyn_masterentityroutingconfigurations', d: 'msdyn_masterentityroutingconfiguration' },
			msdyn_matchinglogic: { a: 'msdyn_matchinglogic' },
			msdyn_MaxConcurrentConnection: { a: 'msdyn_maxconcurrentconnection' },
			msdyn_mode: { a: 'msdyn_mode' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Notification: { a: 'msdyn_notification' },
			msdyn_notificationscenarioplaceholder: { a: 'msdyn_notificationscenarioplaceholder' },
			msdyn_notificationtemplate_consult: { a: 'msdyn_notificationtemplate_consult' },
			msdyn_notificationtemplate_incoming_auth: { a: 'msdyn_notificationtemplate_incoming_auth' },
			msdyn_notificationtemplate_incoming_unauth: { a: 'msdyn_notificationtemplate_incoming_unauth' },
			msdyn_notificationtemplate_supervisorassign: { a: 'msdyn_notificationtemplate_supervisorassign' },
			msdyn_notificationtemplate_transfer: { a: 'msdyn_notificationtemplate_transfer' },
			msdyn_outboundqueueid: { b: 'msdyn_outboundqueueid', a: '_msdyn_outboundqueueid_value', c: 'queues', d: 'queue' },
			msdyn_recordidentificationrule: { a: 'msdyn_recordidentificationrule' },
			msdyn_RecordIdentificationValidationRule: { a: 'msdyn_recordidentificationvalidationrule' },
			msdyn_routingcontractid: { b: 'msdyn_routingcontractid', a: '_msdyn_routingcontractid_value', c: 'msdyn_decisioncontracts', d: 'msdyn_decisioncontract' },
			msdyn_Screenpoptimeout: { a: 'msdyn_screenpoptimeout' },
			msdyn_Screenpoptimeout_optionSet: { a: 'msdyn_screenpoptimeout_optionSet' },
			msdyn_sessionscenarioplaceholder: { a: 'msdyn_sessionscenarioplaceholder' },
			msdyn_sessiontemplate_default: { a: 'msdyn_sessiontemplate_default' },
			msdyn_skillattachmentrulescount: { a: 'msdyn_skillattachmentrulescount', r: true },
			msdyn_skillattachmentrulescount_Date_UtcDateAndTime: { a: 'msdyn_skillattachmentrulescount_date', r: true },
			msdyn_skillattachmentrulescount_State: { a: 'msdyn_skillattachmentrulescount_state', r: true },
			msdyn_smsprovider: { a: 'msdyn_smsprovider' },
			msdyn_streamsource: { a: 'msdyn_streamsource' },
			msdyn_TelesignInboundURL: { a: 'msdyn_telesigninboundurl' },
			msdyn_TwilioInboundURL: { a: 'msdyn_twilioinboundurl' },
			msdyn_waitingtimethreshold: { a: 'msdyn_waitingtimethreshold' },
			msdyn_workdistributionmode: { a: 'msdyn_workdistributionmode' },
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
		var msdyn_liveworkstream = {};
		msdyn_liveworkstream.ODataEntity = e;
		msdyn_liveworkstream.FormattedValue = {};
		for (var field in _msdyn_liveworkstream) {
			var a = _msdyn_liveworkstream[field].a;
			var b = _msdyn_liveworkstream[field].b;
			var c = _msdyn_liveworkstream[field].c;
			var d = _msdyn_liveworkstream[field].d;
			var g = _msdyn_liveworkstream[field].g;
			var r = _msdyn_liveworkstream[field].r;
			webApiField(msdyn_liveworkstream, field, e, a, b, c, d, r, u, g);
		}
		msdyn_liveworkstream.Entity = u;
		msdyn_liveworkstream.EntityName = 'msdyn_liveworkstream';
		msdyn_liveworkstream.EntityCollectionName = 'msdyn_liveworkstreams';
		msdyn_liveworkstream['@odata.etag'] = e['@odata.etag'];
		msdyn_liveworkstream.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_liveworkstream.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_liveworkstream;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_liveworkstream = {
		msdyn_AllowedPresences : {
			Available: 192360000,
			Away: 192360003,
			Busy: 192360001,
			Busy_DND: 192360002,
			Offline: 192360004
		},
		msdyn_capacityformat : {
			Profile_based: 192360000,
			Unit_based: 192350000
		},
		msdyn_conversationmode : {
			Live_Chat: 192350000,
			Persistent_Chat: 192350001
		},
		msdyn_direction : {
			Inbound: 0,
			Outbound: 1
		},
		msdyn_matchinglogic : {
			Closest_Match: 192350001,
			Exact_Match: 192350000
		},
		msdyn_mode : {
			Legacy: 717210000,
			Simplified: 717210001
		},
		msdyn_Notification : {
			Directly_open_session: 100000000,
			Screen_pop_with_decline: 100000002,
			Screen_pop_with_timeout: 100000001
		},
		msdyn_Screenpoptimeout_optionSet : {
			_120: 120,
			_150: 150,
			_180: 180,
			_210: 210,
			_240: 240,
			_270: 270,
			_30: 30,
			_300: 300,
			_60: 60,
			_90: 90
		},
		msdyn_smsprovider : {
			TeleSign: 192350000,
			Twilio: 192350001
		},
		msdyn_streamsource : {
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_workdistributionmode : {
			Pick: 192350001,
			Push: 192350000
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