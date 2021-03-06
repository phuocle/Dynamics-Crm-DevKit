﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocsystemmessageApi = function (e) {
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
		var msdyn_ocsystemmessage = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_defaultlanguage: { b: 'msdyn_defaultlanguage', a: '_msdyn_defaultlanguage_value', c: 'msdyn_oclanguages', d: 'msdyn_oclanguage' },
			msdyn_instanceid: { a: 'msdyn_instanceid' },
			msdyn_messagedescription: { a: 'msdyn_messagedescription' },
			msdyn_messagereceiver: { a: 'msdyn_messagereceiver' },
			msdyn_messagetemplatetrigger: { a: 'msdyn_messagetemplatetrigger' },
			msdyn_messagetext: { a: 'msdyn_messagetext' },
			msdyn_messagetype: { a: 'msdyn_messagetype' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocsystemmessageId: { a: 'msdyn_ocsystemmessageid' },
			msdyn_streamsource: { a: 'msdyn_streamsource' },
			msdyn_systemmessageeventtype: { a: 'msdyn_systemmessageeventtype' },
			msdyn_widgetid: { b: 'msdyn_widgetid', a: '_msdyn_widgetid_value', c: 'msdyn_livechatconfigs', d: 'msdyn_livechatconfig' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_ocsystemmessage) {
			var a = msdyn_ocsystemmessage[field].a;
			var b = msdyn_ocsystemmessage[field].b;
			var c = msdyn_ocsystemmessage[field].c;
			var d = msdyn_ocsystemmessage[field].d;
			var g = msdyn_ocsystemmessage[field].g;
			var r = msdyn_ocsystemmessage[field].r;
			msdyn_ocsystemmessage[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_ocsystemmessage.Entity = u;
		msdyn_ocsystemmessage.EntityName = 'msdyn_ocsystemmessage';
		msdyn_ocsystemmessage.EntityCollectionName = 'msdyn_ocsystemmessages';
		msdyn_ocsystemmessage['@odata.etag'] = e['@odata.etag'];
		msdyn_ocsystemmessage.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocsystemmessage.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocsystemmessage;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocsystemmessage = {
		msdyn_messagereceiver : {
			Agent: 192350000,
			Customer: 192350001
		},
		msdyn_messagetemplatetrigger : {
			Outside_24_hour_conversation_window: 1
		},
		msdyn_messagetype : {
			Automated_Message: 2,
			Message_Template: 3
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
		msdyn_systemmessageeventtype : {
			Agent_assigned_to_conversation: 192350017,
			Agent_couldnt_be_assigned_to_conversation: 192350018,
			Agent_disconnected_from_conversation: 192350013,
			Agent_ended_conversation: 192350014,
			Agent_joined_conversation: 192350000,
			Agents_message_couldnt_be_sent: 192350022,
			Average_wait_time_for_customers_Hours: 192350031,
			Average_wait_time_for_customers_Hours_and_minutes: 192350032,
			Average_wait_time_for_customers_Minutes: 192350030,
			Consult_accepted: 192350001,
			Consult_rejected: 192350007,
			Consult_request_failed: 192350004,
			Consult_request_timed_out: 192350009,
			Consult_session_ended: 192350016,
			Consult_started: 192350003,
			Couldnt_find_the_channel_account_in_Omnichannel: 192350037,
			Customer_disconnected: 192350020,
			Customer_ended_conversation: 192350019,
			Customer_is_next_in_line: 192350024,
			Customer_no_longer_on_hold: 192350043,
			Customer_put_on_hold: 192350042,
			Customers_file_couldnt_be_attached_because_its_too_big: 192350038,
			Customers_message_couldnt_be_sent_Outside_of_operation_hours: 192350023,
			Customers_position_in_queue: 192350021,
			Holiday_message_to_customer: 192350035,
			Leave_as_many_messages_as_youd_like_and_well_get_back_to_you_as_soon_as_possible_Well_save_your_chat_history_so_you_can_leave_and_come_back_anytime: 192350041,
			Message_couldnt_be_delivered_Unsupported_message_type: 192350025,
			Message_couldnt_be_sent_A_channel_account_cant_message_another_account_within_Omnichannel: 192350034,
			Message_couldnt_be_sent_File_couldnt_be_attached: 192350040,
			Message_couldnt_be_sent_Outside_allowed_timeframe: 192350029,
			Message_or_attachment_failed_to_send_Providing_error_details_including_error_code_reason_for_failure_message_id_timestamp_and_transaction_id: 192350044,
			Out_of_operating_hour_message_to_customer: 192350036,
			Recording_and_transcription_paused: 192350050,
			Recording_and_transcription_resumed: 192350051,
			Recording_and_transcription_started: 192350049,
			Recording_and_transcription_stopped: 192350052,
			Session_ended: 192350015,
			Transcription_paused: 192350046,
			Transcription_resumed: 192350047,
			Transcription_started: 192350045,
			Transcription_stopped: 192350048,
			Transfer_to_agent_accepted: 192350002,
			Transfer_to_agent_failed: 192350006,
			Transfer_to_agent_rejected: 192350008,
			Transfer_to_agent_requested: 192350005,
			Transfer_to_agent_timed_out: 192350010,
			Transfer_to_out_of_operating_hour_queue: 192350039,
			Transfer_to_queue_failed: 192350012,
			Transfer_to_queue_started: 192350011,
			Voice_call_accepted: 192350027,
			Voice_call_declined: 192350028,
			Voice_call_ended: 192350033,
			Voice_call_requested: 192350026
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