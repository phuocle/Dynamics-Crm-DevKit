'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_EventApi = function (e) {
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
		var _msevtmgt_event = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_EventURLspecified: { a: 'msdyncrm_eventurlspecified', r: true },
			msdyncrm_marketingformid: { b: 'msdyncrm_marketingformid', a: '_msdyncrm_marketingformid_value', c: 'msdyncrm_marketingforms', d: 'msdyncrm_marketingform' },
			msdyncrm_SessionsCount: { a: 'msdyncrm_sessionscount', r: true },
			msdyncrm_SessionsCount_Date_UtcDateAndTime: { a: 'msdyncrm_sessionscount_date', r: true },
			msdyncrm_SessionsCount_State: { a: 'msdyncrm_sessionscount_state', r: true },
			msdyncrm_usemarketingform: { a: 'msdyncrm_usemarketingform' },
			msdynmkt_bannerimageid: { a: 'msdynmkt_bannerimageid' },
			msdynmkt_completiondate_TimezoneDateAndTime: { a: 'msdynmkt_completiondate' },
			msdynmkt_linkedvirtualeventid: { a: 'msdynmkt_linkedvirtualeventid' },
			msdynmkt_logoimageid: { a: 'msdynmkt_logoimageid' },
			msevtmgt_allowanonymousregistrations: { a: 'msevtmgt_allowanonymousregistrations' },
			msevtmgt_allowattendeestounmute: { a: 'msevtmgt_allowattendeestounmute' },
			msevtmgt_allowcameraforattendees: { a: 'msevtmgt_allowcameraforattendees' },
			msevtmgt_allowcustomagenda: { a: 'msevtmgt_allowcustomagenda' },
			msevtmgt_allowexternalpresenters: { a: 'msevtmgt_allowexternalpresenters' },
			msevtmgt_allowmeetingchat: { a: 'msevtmgt_allowmeetingchat' },
			msevtmgt_allowpstnsserstobypasslobby: { a: 'msevtmgt_allowpstnsserstobypasslobby' },
			msevtmgt_allowteamsmeetingreactions: { a: 'msevtmgt_allowteamsmeetingreactions' },
			msevtmgt_attendeeengagementreport: { a: 'msevtmgt_attendeeengagementreport' },
			msevtmgt_attendeeurl: { a: 'msevtmgt_attendeeurl' },
			msevtmgt_autoadmittedusers: { a: 'msevtmgt_autoadmittedusers' },
			msevtmgt_autorecordingenabled: { a: 'msevtmgt_autorecordingenabled' },
			msevtmgt_autoregisterwaitlistitems: { a: 'msevtmgt_autoregisterwaitlistitems' },
			msevtmgt_baserecurrenteventid: { a: 'msevtmgt_baserecurrenteventid' },
			msevtmgt_BookedFlightReservations: { a: 'msevtmgt_bookedflightreservations' },
			msevtmgt_BookRooms: { a: 'msevtmgt_bookrooms' },
			msevtmgt_BudgetAllocated: { a: 'msevtmgt_budgetallocated' },
			msevtmgt_budgetallocated_Base: { a: 'msevtmgt_budgetallocated_base', r: true },
			msevtmgt_building: { b: 'msevtmgt_building', a: '_msevtmgt_building_value', c: 'msevtmgt_buildings', d: 'msevtmgt_building' },
			msevtmgt_calendarcontent: { a: 'msevtmgt_calendarcontent' },
			msevtmgt_calendarcontent_plaintext: { a: 'msevtmgt_calendarcontent_plaintext' },
			msevtmgt_calendarevent: { a: 'msevtmgt_calendarevent' },
			msevtmgt_CateringRequired: { a: 'msevtmgt_cateringrequired' },
			msevtmgt_changemeetingoptions: { a: 'msevtmgt_changemeetingoptions' },
			msevtmgt_CheckInCount: { a: 'msevtmgt_checkincount' },
			msevtmgt_ConfirmedHotelChoices: { a: 'msevtmgt_confirmedhotelchoices' },
			msevtmgt_CountdownInDays: { a: 'msevtmgt_countdownindays', r: true },
			msevtmgt_createleadsforeventregistrations: { a: 'msevtmgt_createleadsforeventregistrations' },
			msevtmgt_CreateMarketingCollateral: { a: 'msevtmgt_createmarketingcollateral' },
			msevtmgt_creationsource: { a: 'msevtmgt_creationsource' },
			msevtmgt_customeventurl: { a: 'msevtmgt_customeventurl' },
			msevtmgt_DefinePackagesandPricing: { a: 'msevtmgt_definepackagesandpricing' },
			msevtmgt_DefineSessions: { a: 'msevtmgt_definesessions' },
			msevtmgt_DefineTeam: { a: 'msevtmgt_defineteam' },
			msevtmgt_Description: { a: 'msevtmgt_description' },
			msevtmgt_descriptorsyncstatus: { a: 'msevtmgt_descriptorsyncstatus' },
			msevtmgt_DevelopMarketingPlan: { a: 'msevtmgt_developmarketingplan' },
			msevtmgt_EarlyBirdCutOffDate_UtcDateAndTime: { a: 'msevtmgt_earlybirdcutoffdate' },
			msevtmgt_embedregistrationform: { a: 'msevtmgt_embedregistrationform' },
			msevtmgt_enablecaptcha: { a: 'msevtmgt_enablecaptcha' },
			msevtmgt_Enablemultiattendeeregistration: { a: 'msevtmgt_enablemultiattendeeregistration' },
			msevtmgt_entryexitannouncementsenabled: { a: 'msevtmgt_entryexitannouncementsenabled' },
			msevtmgt_EventDebriefing: { a: 'msevtmgt_eventdebriefing' },
			msevtmgt_EventEndDate_TimezoneDateAndTime: { a: 'msevtmgt_eventenddate' },
			msevtmgt_EventFormat: { a: 'msevtmgt_eventformat' },
			msevtmgt_EventId: { a: 'msevtmgt_eventid' },
			msevtmgt_eventimage: { b: 'msevtmgt_eventimage', a: '_msevtmgt_eventimage_value', c: 'msdyncrm_files', d: 'msdyncrm_file' },
			msevtmgt_EventStartDate_TimezoneDateAndTime: { a: 'msevtmgt_eventstartdate' },
			msevtmgt_EventTimeZone: { a: 'msevtmgt_eventtimezone' },
			msevtmgt_EventTimeZoneName: { a: 'msevtmgt_eventtimezonename' },
			msevtmgt_EventType: { a: 'msevtmgt_eventtype' },
			msevtmgt_EventVenueCost: { a: 'msevtmgt_eventvenuecost' },
			msevtmgt_eventvenuecost_Base: { a: 'msevtmgt_eventvenuecost_base', r: true },
			msevtmgt_ExpectedOutcome: { a: 'msevtmgt_expectedoutcome' },
			msevtmgt_FollowUpOnLeads: { a: 'msevtmgt_followuponleads' },
			msevtmgt_formpagejavascriptcode: { a: 'msevtmgt_formpagejavascriptcode', r: true },
			msevtmgt_GuestLogistics: { a: 'msevtmgt_guestlogistics' },
			msevtmgt_IdentifySpeakers: { a: 'msevtmgt_identifyspeakers' },
			msevtmgt_IdentifySponsors: { a: 'msevtmgt_identifysponsors' },
			msevtmgt_isoutofsync: { a: 'msevtmgt_isoutofsync' },
			msevtmgt_IsRecurringEvent: { a: 'msevtmgt_isrecurringevent' },
			msevtmgt_istemplate: { a: 'msevtmgt_istemplate' },
			msevtmgt_Language: { a: 'msevtmgt_language' },
			msevtmgt_lastteamssyncdate_UtcDateAndTime: { a: 'msevtmgt_lastteamssyncdate' },
			msevtmgt_layout: { b: 'msevtmgt_layout', a: '_msevtmgt_layout_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			msevtmgt_MakePaymentsDue: { a: 'msevtmgt_makepaymentsdue' },
			msevtmgt_ManageRegistrationCount: { a: 'msevtmgt_manageregistrationcount' },
			msevtmgt_marketingformid: { b: 'msevtmgt_marketingformid', a: '_msevtmgt_marketingformid_value', c: 'msdynmkt_marketingforms', d: 'msdynmkt_marketingform' },
			msevtmgt_MaximumEventCapacity: { a: 'msevtmgt_maximumeventcapacity' },
			msevtmgt_MaxNumberOfRegistrations: { a: 'msevtmgt_maxnumberofregistrations' },
			msevtmgt_MiscellaneousCosts: { a: 'msevtmgt_miscellaneouscosts' },
			msevtmgt_miscellaneouscosts_Base: { a: 'msevtmgt_miscellaneouscosts_base', r: true },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_NotifyAuthoritiesOfEvent: { a: 'msevtmgt_notifyauthoritiesofevent' },
			msevtmgt_numberofinvitations: { a: 'msevtmgt_numberofinvitations' },
			msevtmgt_PlanRegistration: { a: 'msevtmgt_planregistration' },
			msevtmgt_portalspecificeventenddate_UtcDateAndTime: { a: 'msevtmgt_portalspecificeventenddate' },
			msevtmgt_portalspecificeventstartdate_UtcDateAndTime: { a: 'msevtmgt_portalspecificeventstartdate' },
			msevtmgt_PresentationManagerUrl: { a: 'msevtmgt_presentationmanagerurl' },
			msevtmgt_previousnumberoffreeslots: { a: 'msevtmgt_previousnumberoffreeslots' },
			msevtmgt_PrimaryGoal: { a: 'msevtmgt_primarygoal' },
			msevtmgt_PrimaryVenue: { b: 'msevtmgt_PrimaryVenue', a: '_msevtmgt_primaryvenue_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			msevtmgt_producer: { b: 'msevtmgt_producer', a: '_msevtmgt_producer_value', c: 'msevtmgt_eventteammembers', d: 'msevtmgt_eventteammember' },
			msevtmgt_publiceventurl: { a: 'msevtmgt_publiceventurl' },
			msevtmgt_PublishStatus: { a: 'msevtmgt_publishstatus' },
			msevtmgt_qna: { a: 'msevtmgt_qna' },
			msevtmgt_readableeventid: { a: 'msevtmgt_readableeventid' },
			msevtmgt_recordingforattendees: { a: 'msevtmgt_recordingforattendees' },
			msevtmgt_recordingforproducersandspeakers: { a: 'msevtmgt_recordingforproducersandspeakers' },
			msevtmgt_recoveryitems: { a: 'msevtmgt_recoveryitems' },
			msevtmgt_RecurrencePattern: { a: 'msevtmgt_recurrencepattern' },
			msevtmgt_recurrenteventstatus: { a: 'msevtmgt_recurrenteventstatus' },
			msevtmgt_RegistrationCount: { a: 'msevtmgt_registrationcount' },
			msevtmgt_registrationcounterlock: { a: 'msevtmgt_registrationcounterlock' },
			msevtmgt_RegistrationsTarget: { a: 'msevtmgt_registrationstarget' },
			msevtmgt_RequestSponsorship: { a: 'msevtmgt_requestsponsorship' },
			msevtmgt_RevenueFromSponsorship: { a: 'msevtmgt_revenuefromsponsorship' },
			msevtmgt_revenuefromsponsorship_Base: { a: 'msevtmgt_revenuefromsponsorship_base', r: true },
			msevtmgt_room: { b: 'msevtmgt_room', a: '_msevtmgt_room_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			msevtmgt_ScheduleAirportPickups: { a: 'msevtmgt_scheduleairportpickups' },
			msevtmgt_ScheduleSessions: { a: 'msevtmgt_schedulesessions' },
			msevtmgt_SelectSpeakers: { a: 'msevtmgt_selectspeakers' },
			msevtmgt_SelectVendors: { a: 'msevtmgt_selectvendors' },
			msevtmgt_SendEventInvitation: { a: 'msevtmgt_sendeventinvitation' },
			msevtmgt_SendMarketingMaterial: { a: 'msevtmgt_sendmarketingmaterial' },
			msevtmgt_SendPreEventReminders: { a: 'msevtmgt_sendpreeventreminders' },
			msevtmgt_SendThankYouEmails: { a: 'msevtmgt_sendthankyouemails' },
			msevtmgt_setregistrationsenddate: { a: 'msevtmgt_setregistrationsenddate' },
			msevtmgt_showautomaticregistrationcheckbox: { a: 'msevtmgt_showautomaticregistrationcheckbox' },
			msevtmgt_showwaitlist: { a: 'msevtmgt_showwaitlist' },
			msevtmgt_sourcesystem: { a: 'msevtmgt_sourcesystem' },
			msevtmgt_Stopwebsiteregistrationson_TimezoneDateAndTime: { a: 'msevtmgt_stopwebsiteregistrationson' },
			msevtmgt_streamingenabled: { a: 'msevtmgt_streamingenabled' },
			msevtmgt_streamingprovider: { a: 'msevtmgt_streamingprovider' },
			msevtmgt_streamowner: { b: 'msevtmgt_streamowner', a: '_msevtmgt_streamowner_value', c: 'systemusers', d: 'systemuser' },
			msevtmgt_TargetRevenue: { a: 'msevtmgt_targetrevenue' },
			msevtmgt_targetrevenue_Base: { a: 'msevtmgt_targetrevenue_base', r: true },
			msevtmgt_TeamDebriefing: { a: 'msevtmgt_teamdebriefing' },
			msevtmgt_teamsevent: { a: 'msevtmgt_teamsevent' },
			msevtmgt_teamsinvitationhtml: { a: 'msevtmgt_teamsinvitationhtml' },
			msevtmgt_TotalCostOfEventsActivities: { a: 'msevtmgt_totalcostofeventsactivities' },
			msevtmgt_totalcostofeventsactivities_Base: { a: 'msevtmgt_totalcostofeventsactivities_base', r: true },
			msevtmgt_TotalCostOfExternalMembers: { a: 'msevtmgt_totalcostofexternalmembers' },
			msevtmgt_totalcostofexternalmembers_Base: { a: 'msevtmgt_totalcostofexternalmembers_base', r: true },
			msevtmgt_TotalRegistrationFee: { a: 'msevtmgt_totalregistrationfee' },
			msevtmgt_totalregistrationfee_Base: { a: 'msevtmgt_totalregistrationfee_base', r: true },
			msevtmgt_TotalRevenueFromTheEvent: { a: 'msevtmgt_totalrevenuefromtheevent' },
			msevtmgt_totalrevenuefromtheevent_Base: { a: 'msevtmgt_totalrevenuefromtheevent_base', r: true },
			msevtmgt_TransactionCurrencyId: { b: 'msevtmgt_TransactionCurrencyId', a: '_msevtmgt_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			msevtmgt_WaitlistStartingPoint: { a: 'msevtmgt_waitliststartingpoint' },
			msevtmgt_WaitlistthisEvent: { a: 'msevtmgt_waitlistthisevent' },
			msevtmgt_WebinarConfigurationId: { b: 'msevtmgt_WebinarConfigurationId', a: '_msevtmgt_webinarconfigurationid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			msevtmgt_WebinarID: { a: 'msevtmgt_webinarid' },
			msevtmgt_webinarnotificationseen: { a: 'msevtmgt_webinarnotificationseen' },
			msevtmgt_webinaroperation: { a: 'msevtmgt_webinaroperation' },
			msevtmgt_webinarstatus: { a: 'msevtmgt_webinarstatus' },
			msevtmgt_webinarstatusreason: { a: 'msevtmgt_webinarstatusreason' },
			msevtmgt_WebinarType: { b: 'msevtmgt_WebinarType', a: '_msevtmgt_webinartype_value', c: 'msevtmgt_webinartypes', d: 'msevtmgt_webinartype' },
			msevtmgt_webinarURL: { a: 'msevtmgt_webinarurl' },
			msevtmgt_Websitemessage: { a: 'msevtmgt_websitemessage' },
			msevtmgt_websitepreference: { a: 'msevtmgt_websitepreference' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msevtmgt_event = {};
		msevtmgt_event.ODataEntity = e;
		msevtmgt_event.FormattedValue = {};
		for (var field in _msevtmgt_event) {
			var a = _msevtmgt_event[field].a;
			var b = _msevtmgt_event[field].b;
			var c = _msevtmgt_event[field].c;
			var d = _msevtmgt_event[field].d;
			var g = _msevtmgt_event[field].g;
			var r = _msevtmgt_event[field].r;
			webApiField(msevtmgt_event, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_event.Entity = u;
		msevtmgt_event.EntityName = 'msevtmgt_event';
		msevtmgt_event.EntityCollectionName = 'msevtmgt_events';
		msevtmgt_event['@odata.etag'] = e['@odata.etag'];
		msevtmgt_event.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_event.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_event;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_Event = {
		msevtmgt_allowmeetingchat : {
			Disabled: 100000001,
			Enabled: 100000000,
			In_meeting_only: 100000002
		},
		msevtmgt_autoadmittedusers : {
			Everyone: 100000003,
			Only_me: 100000005,
			People_I_invite: 100000004,
			People_in_my_organization_and_guests: 100000001,
			People_in_my_organization_trusted_organizations_and_guests: 100000002
		},
		msevtmgt_BookedFlightReservations : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_BookRooms : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_CateringRequired : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_ConfirmedHotelChoices : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_CreateMarketingCollateral : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_creationsource : {
			Dynamics: 100000001,
			Microsoft_Teams: 100000002
		},
		msevtmgt_DefinePackagesandPricing : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_DefineSessions : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_DefineTeam : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_descriptorsyncstatus : {
			Going_live: 100000001,
			Going_live_failed: 100000002,
			Modifying_capacity: 100000003,
			Modifying_capacity_failed: 100000004,
			Not_Synced: 100000005,
			Synced: 100000000
		},
		msevtmgt_DevelopMarketingPlan : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_EventDebriefing : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_EventFormat : {
			Hybrid: 100000003,
			On_site: 100000001,
			Webinar: 100000002
		},
		msevtmgt_EventType : {
			Conference: 100000002,
			Demonstration: 100000003,
			Executive_briefing: 100000001,
			Training: 100000004,
			Webcast: 100000005
		},
		msevtmgt_FollowUpOnLeads : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_GuestLogistics : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_IdentifySpeakers : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_IdentifySponsors : {
			Complete: 100000003,
			Incomplete: 100000002,
			Not_applicable: 100000001
		},
		msevtmgt_istemplate : {
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
		msevtmgt_MakePaymentsDue : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_ManageRegistrationCount : {
			No: 100000002,
			Yes: 100000001
		},
		msevtmgt_NotifyAuthoritiesOfEvent : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_PlanRegistration : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_PrimaryGoal : {
			Education: 100000003,
			Marketing: 100000001,
			Morale: 100000004,
			Sales: 100000002
		},
		msevtmgt_PublishStatus : {
			Cancelled: 100000004,
			Draft: 100000000,
			Going_live: 100000005,
			In_progress: 100000002,
			Live: 100000003,
			Ready_to_go_live: 100000001
		},
		msevtmgt_RequestSponsorship : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_ScheduleAirportPickups : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_ScheduleSessions : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SelectSpeakers : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SelectVendors : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendEventInvitation : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendMarketingMaterial : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendPreEventReminders : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_SendThankYouEmails : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_sourcesystem : {
			Outbound_marketing: 100000001,
			Real_time_Journeys: 100000002
		},
		msevtmgt_streamingprovider : {
			Other: 100000003,
			Teams_Live_Events: 100000001,
			Teams_Meetings: 100000002,
			Teams_Town_Hall: 100000006,
			Teams_Virtual_Events: 100000005,
			Teams_Webinars: 100000004
		},
		msevtmgt_TeamDebriefing : {
			Completed: 100000003,
			In_progress: 100000002,
			Not_applicable: 100000004,
			Not_started: 100000001
		},
		msevtmgt_WaitlistthisEvent : {
			No: 100000001,
			Yes: 100000002
		},
		msevtmgt_websitepreference : {
			On_a_standalone_registration_page: 192350001,
			On_your_own_website: 192350002,
			This_event_doesnt_have_a_website: 192350003
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