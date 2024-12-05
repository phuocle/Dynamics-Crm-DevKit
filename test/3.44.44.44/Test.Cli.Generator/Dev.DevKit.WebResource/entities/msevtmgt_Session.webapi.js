'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_SessionApi = function (e) {
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
		var _msevtmgt_session = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_allowattendeestounmute: { a: 'msevtmgt_allowattendeestounmute' },
			msevtmgt_allowcameraforattendees: { a: 'msevtmgt_allowcameraforattendees' },
			msevtmgt_allowexternalpresenters: { a: 'msevtmgt_allowexternalpresenters' },
			msevtmgt_allowmeetingchat: { a: 'msevtmgt_allowmeetingchat' },
			msevtmgt_allowpstnsserstobypasslobby: { a: 'msevtmgt_allowpstnsserstobypasslobby' },
			msevtmgt_allowteamsmeetingreactions: { a: 'msevtmgt_allowteamsmeetingreactions' },
			msevtmgt_attendeeengagementreport: { a: 'msevtmgt_attendeeengagementreport' },
			msevtmgt_attendeeurl: { a: 'msevtmgt_attendeeurl' },
			msevtmgt_AudienceType: { a: 'msevtmgt_audiencetype' },
			msevtmgt_autoadmittedusers: { a: 'msevtmgt_autoadmittedusers' },
			msevtmgt_autorecordingenabled: { a: 'msevtmgt_autorecordingenabled' },
			msevtmgt_AVSupport: { a: 'msevtmgt_avsupport' },
			msevtmgt_baserecurrentsessionid: { a: 'msevtmgt_baserecurrentsessionid' },
			msevtmgt_building: { b: 'msevtmgt_building', a: '_msevtmgt_building_value', c: 'msevtmgt_buildings', d: 'msevtmgt_building' },
			msevtmgt_ByInvitationOnly: { a: 'msevtmgt_byinvitationonly' },
			msevtmgt_calendarcontent: { a: 'msevtmgt_calendarcontent' },
			msevtmgt_calendarcontent_plaintext: { a: 'msevtmgt_calendarcontent_plaintext' },
			msevtmgt_CamerasPermitted: { a: 'msevtmgt_cameraspermitted' },
			msevtmgt_changemeetingoptions: { a: 'msevtmgt_changemeetingoptions' },
			msevtmgt_CheckInCount: { a: 'msevtmgt_checkincount' },
			msevtmgt_creationsource: { a: 'msevtmgt_creationsource' },
			msevtmgt_descriptorsyncstatus: { a: 'msevtmgt_descriptorsyncstatus' },
			msevtmgt_DetailedDescription: { a: 'msevtmgt_detaileddescription' },
			msevtmgt_DurationMins: { a: 'msevtmgt_durationmins', r: true },
			msevtmgt_EndTime_TimezoneDateAndTime: { a: 'msevtmgt_endtime' },
			msevtmgt_entryexitannouncementsenabled: { a: 'msevtmgt_entryexitannouncementsenabled' },
			msevtmgt_Event: { b: 'msevtmgt_Event', a: '_msevtmgt_event_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_EventSpeakerId: { b: 'msevtmgt_EventSpeakerId', a: '_msevtmgt_eventspeakerid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			msevtmgt_ExternalUrl: { a: 'msevtmgt_externalurl' },
			msevtmgt_FlipChart: { a: 'msevtmgt_flipchart' },
			msevtmgt_Industry: { a: 'msevtmgt_industry' },
			msevtmgt_InternetConnection: { a: 'msevtmgt_internetconnection' },
			msevtmgt_isoutofsync: { a: 'msevtmgt_isoutofsync' },
			msevtmgt_Keywords: { a: 'msevtmgt_keywords' },
			msevtmgt_Language: { a: 'msevtmgt_language' },
			msevtmgt_lastteamssyncdate_UtcDateAndTime: { a: 'msevtmgt_lastteamssyncdate' },
			msevtmgt_layout: { b: 'msevtmgt_layout', a: '_msevtmgt_layout_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_NDA: { a: 'msevtmgt_nda' },
			msevtmgt_PassSessions: { b: 'msevtmgt_PassSessions', a: '_msevtmgt_passsessions_value', c: 'msevtmgt_passes', d: 'msevtmgt_pass' },
			msevtmgt_PresentationManagerUrl: { a: 'msevtmgt_presentationmanagerurl' },
			msevtmgt_previousnumberoffreeslots: { a: 'msevtmgt_previousnumberoffreeslots' },
			msevtmgt_Producer: { b: 'msevtmgt_Producer', a: '_msevtmgt_producer_value', c: 'msevtmgt_eventteammembers', d: 'msevtmgt_eventteammember' },
			msevtmgt_PublishStatus: { a: 'msevtmgt_publishstatus' },
			msevtmgt_qna: { a: 'msevtmgt_qna' },
			msevtmgt_recordingforattendees: { a: 'msevtmgt_recordingforattendees' },
			msevtmgt_recordingforproducersandspeakers: { a: 'msevtmgt_recordingforproducersandspeakers' },
			msevtmgt_RecordingsPermitted: { a: 'msevtmgt_recordingspermitted' },
			msevtmgt_recurrencepattern: { a: 'msevtmgt_recurrencepattern' },
			msevtmgt_RegistrationCount: { a: 'msevtmgt_registrationcount' },
			msevtmgt_registrationcounterlock: { a: 'msevtmgt_registrationcounterlock' },
			msevtmgt_room: { b: 'msevtmgt_room', a: '_msevtmgt_room_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			msevtmgt_SessionCode: { a: 'msevtmgt_sessioncode' },
			msevtmgt_sessionformat: { a: 'msevtmgt_sessionformat' },
			msevtmgt_SessionId: { a: 'msevtmgt_sessionid' },
			msevtmgt_SessionMaxCapacity: { a: 'msevtmgt_sessionmaxcapacity' },
			msevtmgt_SessionObjectives: { a: 'msevtmgt_sessionobjectives' },
			msevtmgt_SessionPreRequisites: { a: 'msevtmgt_sessionprerequisites' },
			msevtmgt_SessionSummary: { a: 'msevtmgt_sessionsummary' },
			msevtmgt_SessionType: { a: 'msevtmgt_sessiontype' },
			msevtmgt_showwaitlist: { a: 'msevtmgt_showwaitlist' },
			msevtmgt_StartTime_TimezoneDateAndTime: { a: 'msevtmgt_starttime' },
			msevtmgt_streamingenabled: { a: 'msevtmgt_streamingenabled' },
			msevtmgt_streamingprovider: { a: 'msevtmgt_streamingprovider' },
			msevtmgt_streamowner: { b: 'msevtmgt_streamowner', a: '_msevtmgt_streamowner_value', c: 'systemusers', d: 'systemuser' },
			msevtmgt_teamsinvitationhtml: { a: 'msevtmgt_teamsinvitationhtml' },
			msevtmgt_TotalNumberOfQuestionsAsked: { a: 'msevtmgt_totalnumberofquestionsasked', r: true },
			msevtmgt_TotalNumberOfQuestionsAsked_Date_UtcDateAndTime: { a: 'msevtmgt_totalnumberofquestionsasked_date', r: true },
			msevtmgt_TotalNumberOfQuestionsAsked_State: { a: 'msevtmgt_totalnumberofquestionsasked_state', r: true },
			msevtmgt_Venue: { b: 'msevtmgt_Venue', a: '_msevtmgt_venue_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			msevtmgt_VideoConferencing: { a: 'msevtmgt_videoconferencing' },
			msevtmgt_WaitlistthisSession: { a: 'msevtmgt_waitlistthissession' },
			msevtmgt_WebinarConfigurationId: { b: 'msevtmgt_WebinarConfigurationId', a: '_msevtmgt_webinarconfigurationid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			msevtmgt_WebinarID: { a: 'msevtmgt_webinarid' },
			msevtmgt_webinarnotificationseen: { a: 'msevtmgt_webinarnotificationseen' },
			msevtmgt_webinaroperation: { a: 'msevtmgt_webinaroperation' },
			msevtmgt_webinarstatus: { a: 'msevtmgt_webinarstatus' },
			msevtmgt_webinarstatusreason: { a: 'msevtmgt_webinarstatusreason' },
			msevtmgt_WebinarType: { b: 'msevtmgt_WebinarType', a: '_msevtmgt_webinartype_value', c: 'msevtmgt_webinartypes', d: 'msevtmgt_webinartype' },
			msevtmgt_webinarurl: { a: 'msevtmgt_webinarurl' },
			msevtmgt_WhiteBoard: { a: 'msevtmgt_whiteboard' },
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
		var msevtmgt_session = {};
		msevtmgt_session.ODataEntity = e;
		msevtmgt_session.FormattedValue = {};
		for (var field in _msevtmgt_session) {
			var a = _msevtmgt_session[field].a;
			var b = _msevtmgt_session[field].b;
			var c = _msevtmgt_session[field].c;
			var d = _msevtmgt_session[field].d;
			var g = _msevtmgt_session[field].g;
			var r = _msevtmgt_session[field].r;
			webApiField(msevtmgt_session, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_session.Entity = u;
		msevtmgt_session.EntityName = 'msevtmgt_session';
		msevtmgt_session.EntityCollectionName = 'msevtmgt_sessions';
		msevtmgt_session['@odata.etag'] = e['@odata.etag'];
		msevtmgt_session.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_session.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_session;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_Session = {
		msevtmgt_allowmeetingchat : {
			Disabled: 100000001,
			Enabled: 100000000,
			In_meeting_only: 100000002
		},
		msevtmgt_AudienceType : {
			Advanced: 100000003,
			General: 100000000,
			Intermediate: 100000002,
			Introductory: 100000001
		},
		msevtmgt_autoadmittedusers : {
			Everyone: 100000003,
			Only_me: 100000005,
			People_I_invite: 100000004,
			People_in_my_organization_and_guests: 100000001,
			People_in_my_organization_trusted_organizations_and_guests: 100000002
		},
		msevtmgt_AVSupport : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_ByInvitationOnly : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_CamerasPermitted : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_creationsource : {
			Dynamics: 100000001,
			Microsoft_Teams: 100000002
		},
		msevtmgt_descriptorsyncstatus : {
			Going_live: 100000001,
			Going_live_failed: 100000002,
			Modifying_capacity: 100000003,
			Modifying_capacity_failed: 100000004,
			Not_Synced: 100000005,
			Synced: 100000000
		},
		msevtmgt_FlipChart : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_Industry : {
			Architecture_and_engineering: 100000000,
			Financial_services: 100000001,
			Manufacturing: 100000002,
			Media_entertainment: 100000003,
			Other: 100000008,
			Professional_services: 100000004,
			Public_sector: 100000005,
			Retail: 100000006,
			Wholesale_and_distribution: 100000007
		},
		msevtmgt_InternetConnection : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_Language : {
			Chinese_Simplified: 100000009,
			Chinese_Traditional: 100000013,
			Dutch: 100000006,
			English: 100000000,
			French: 100000001,
			German: 100000002,
			Hebrew: 100000012,
			Italian: 100000004,
			Japanese: 100000010,
			Korean: 100000011,
			Portuguese: 100000008,
			Russian: 100000005,
			Spanish: 100000003,
			Turkish: 100000007
		},
		msevtmgt_NDA : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_PublishStatus : {
			Cancelled: 100000004,
			Draft: 100000000,
			Going_live: 100000005,
			In_progress: 100000002,
			Live: 100000003,
			Ready_to_go_live: 100000001
		},
		msevtmgt_RecordingsPermitted : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_sessionformat : {
			Hybrid: 100000003,
			On_site: 100000001,
			Webinar: 100000002
		},
		msevtmgt_SessionType : {
			Brainstorming: 100000003,
			Breakout: 100000004,
			General: 100000002,
			Hands_onlab: 100000000,
			Keynote: 100000001,
			Training: 100000005
		},
		msevtmgt_streamingprovider : {
			Other: 100000003,
			Teams_Live_Events: 100000001,
			Teams_Meetings: 100000002,
			Teams_Town_Hall: 100000006,
			Teams_Virtual_Events: 100000005,
			Teams_Webinars: 100000004
		},
		msevtmgt_VideoConferencing : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_WaitlistthisSession : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_WhiteBoard : {
			No: 100000002,
			Yes: 100000001
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