'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.QueueItemApi = function (e) {
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
		var _queueitem = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EnteredOn_UtcDateAndTime: { a: 'enteredon', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_skipursync: { a: 'msdyn_skipursync' },
			objectid_activitypointer: { b: 'objectid_activitypointer', a: '_objectid_value', c: 'activitypointers', d: 'activitypointer' },
			objectid_adx_inviteredemption: { b: 'objectid_adx_inviteredemption', a: '_objectid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			objectid_adx_portalcomment: { b: 'objectid_adx_portalcomment', a: '_objectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_bulkoperation: { b: 'objectid_bulkoperation', a: '_objectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			objectid_campaignactivity: { b: 'objectid_campaignactivity', a: '_objectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			objectid_campaignresponse: { b: 'objectid_campaignresponse', a: '_objectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			objectid_chat: { b: 'objectid_chat', a: '_objectid_value', c: 'chats', d: 'chat' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_incident: { b: 'objectid_incident', a: '_objectid_value', c: 'incidents', d: 'incident' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_msdyncrm_appointmentactivitymarketingtemplate: { b: 'objectid_msdyncrm_appointmentactivitymarketingtemplate', a: '_objectid_value', c: 'msdyncrm_appointmentactivitymarketingtemplates', d: 'msdyncrm_appointmentactivitymarketingtemplate' },
			objectid_msdyncrm_mktactivity: { b: 'objectid_msdyncrm_mktactivity', a: '_objectid_value', c: 'msdyncrm_mktactivities', d: 'msdyncrm_mktactivity' },
			objectid_msdyncrm_phonecallactivitymarketingtemplate: { b: 'objectid_msdyncrm_phonecallactivitymarketingtemplate', a: '_objectid_value', c: 'msdyncrm_phonecallactivitymarketingtemplates', d: 'msdyncrm_phonecallactivitymarketingtemplate' },
			objectid_msdyncrm_taskactivitymarketingtemplate: { b: 'objectid_msdyncrm_taskactivitymarketingtemplate', a: '_objectid_value', c: 'msdyncrm_taskactivitymarketingtemplates', d: 'msdyncrm_taskactivitymarketingtemplate' },
			objectid_msdyn_agreementbookingdate: { b: 'objectid_msdyn_agreementbookingdate', a: '_objectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			objectid_msdyn_agreementbookingsetup: { b: 'objectid_msdyn_agreementbookingsetup', a: '_objectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			objectid_msdyn_agreementinvoicedate: { b: 'objectid_msdyn_agreementinvoicedate', a: '_objectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			objectid_msdyn_agreementinvoicesetup: { b: 'objectid_msdyn_agreementinvoicesetup', a: '_objectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			objectid_msdyn_bookingalert: { b: 'objectid_msdyn_bookingalert', a: '_objectid_value', c: 'msdyn_bookingalerts', d: 'msdyn_bookingalert' },
			objectid_msdyn_copilottranscript: { b: 'objectid_msdyn_copilottranscript', a: '_objectid_value', c: 'msdyn_copilottranscripts', d: 'msdyn_copilottranscript' },
			objectid_msdyn_inventoryadjustment: { b: 'objectid_msdyn_inventoryadjustment', a: '_objectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			objectid_msdyn_inventorytransfer: { b: 'objectid_msdyn_inventorytransfer', a: '_objectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			objectid_msdyn_iotalert: { b: 'objectid_msdyn_iotalert', a: '_objectid_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			objectid_msdyn_knowledgearticletemplate: { b: 'objectid_msdyn_knowledgearticletemplate', a: '_objectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			objectid_msdyn_liveconversation: { b: 'objectid_msdyn_liveconversation', a: '_objectid_value', c: 'msdyn_liveconversations', d: 'msdyn_liveconversation' },
			objectid_msdyn_ocliveworkitem: { b: 'objectid_msdyn_ocliveworkitem', a: '_objectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			objectid_msdyn_ocoutboundmessage: { b: 'objectid_msdyn_ocoutboundmessage', a: '_objectid_value', c: 'msdyn_ocoutboundmessages', d: 'msdyn_ocoutboundmessage' },
			objectid_msdyn_ocsession: { b: 'objectid_msdyn_ocsession', a: '_objectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			objectid_msdyn_ocvoicemail: { b: 'objectid_msdyn_ocvoicemail', a: '_objectid_value', c: 'msdyn_ocvoicemails', d: 'msdyn_ocvoicemail' },
			objectid_msdyn_overflowactionconfig: { b: 'objectid_msdyn_overflowactionconfig', a: '_objectid_value', c: 'msdyn_overflowactionconfigs', d: 'msdyn_overflowactionconfig' },
			objectid_msdyn_timegroup: { b: 'objectid_msdyn_timegroup', a: '_objectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			objectid_msdyn_timegroupdetail: { b: 'objectid_msdyn_timegroupdetail', a: '_objectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			objectid_msdyn_workorder: { b: 'objectid_msdyn_workorder', a: '_objectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			objectid_msdyn_workorderincident: { b: 'objectid_msdyn_workorderincident', a: '_objectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			objectid_msdyn_workorderservice: { b: 'objectid_msdyn_workorderservice', a: '_objectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			objectid_msdyn_workorderservicetask: { b: 'objectid_msdyn_workorderservicetask', a: '_objectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			objectid_msfp_alert: { b: 'objectid_msfp_alert', a: '_objectid_value', c: 'msfp_alerts', d: 'msfp_alert' },
			objectid_msfp_surveyinvite: { b: 'objectid_msfp_surveyinvite', a: '_objectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			objectid_msfp_surveyresponse: { b: 'objectid_msfp_surveyresponse', a: '_objectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_serviceappointment: { b: 'objectid_serviceappointment', a: '_objectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			ObjectTypeCode: { a: 'objecttypecode', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Priority: { a: 'priority' },
			QueueId: { b: 'queueid', a: '_queueid_value', c: 'queues', d: 'queue' },
			QueueItemId: { a: 'queueitemid' },
			Sender: { a: 'sender' },
			State: { a: 'state' },
			StateCode: { a: 'statecode' },
			Status: { a: 'status' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			Title: { a: 'title' },
			ToRecipients: { a: 'torecipients' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			workerid_systemuser: { b: 'workerid_systemuser', a: '_workerid_value', c: 'systemusers', d: 'systemuser' },
			workerid_team: { b: 'workerid_team', a: '_workerid_value', c: 'teams', d: 'team' },
			WorkerIdModifiedOn_UtcDateOnly: { a: 'workeridmodifiedon', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var queueitem = {};
		queueitem.ODataEntity = e;
		queueitem.FormattedValue = {};
		for (var field in _queueitem) {
			var a = _queueitem[field].a;
			var b = _queueitem[field].b;
			var c = _queueitem[field].c;
			var d = _queueitem[field].d;
			var g = _queueitem[field].g;
			var r = _queueitem[field].r;
			webApiField(queueitem, field, e, a, b, c, d, r, u, g);
		}
		queueitem.Entity = u;
		queueitem.EntityName = 'queueitem';
		queueitem.EntityCollectionName = 'queueitems';
		queueitem['@odata.etag'] = e['@odata.etag'];
		queueitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		queueitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return queueitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.QueueItem = {
		ObjectIdTypeCode : {
		},
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 11643,
			Agreement_Booking_Setup: 11648,
			Agreement_Invoice_Date: 11649,
			Agreement_Invoice_Setup: 11651,
			Appointment: 4201,
			Appointment_activity_marketing_template: 11138,
			Booking_Alert: 11000,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 11017,
			Inventory_Adjustment: 11671,
			Inventory_Transfer: 11674,
			Invite_Redemption: 10310,
			IoT_Alert: 10402,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10201,
			Letter: 4207,
			Marketing_activity: 11175,
			Ongoing_conversation_Deprecated: 10679,
			Outbound_message: 11063,
			Overflow_Action_Config: 10655,
			Phone_Call: 4210,
			Phone_call_activity_marketing_template: 11176,
			Portal_Comment: 10311,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10708,
			Social_Activity: 4216,
			Task: 4212,
			Task_activity_marketing_template: 11182,
			Teams_chat: 10185,
			Time_Group_Detail: 11018,
			Voicemail: 11070,
			Work_Order: 11705,
			Work_Order_Incident: 11708,
			Work_Order_Service: 11711,
			Work_Order_Service_Task: 11712
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
		},
		WorkerIdType : {
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