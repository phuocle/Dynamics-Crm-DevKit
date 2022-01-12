'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.QueueItemApi = function (e) {
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
		var queueitem = {
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
			objectid_activitypointer: { b: 'objectid_activitypointer', a: '_objectid_value', c: 'activitypointers', d: 'activitypointer' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_bulkoperation: { b: 'objectid_bulkoperation', a: '_objectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			objectid_campaignactivity: { b: 'objectid_campaignactivity', a: '_objectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			objectid_campaignresponse: { b: 'objectid_campaignresponse', a: '_objectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_incident: { b: 'objectid_incident', a: '_objectid_value', c: 'incidents', d: 'incident' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_msdyn_agreementbookingdate: { b: 'objectid_msdyn_agreementbookingdate', a: '_objectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			objectid_msdyn_agreementbookingsetup: { b: 'objectid_msdyn_agreementbookingsetup', a: '_objectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			objectid_msdyn_agreementinvoicedate: { b: 'objectid_msdyn_agreementinvoicedate', a: '_objectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			objectid_msdyn_agreementinvoicesetup: { b: 'objectid_msdyn_agreementinvoicesetup', a: '_objectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			objectid_msdyn_approval: { b: 'objectid_msdyn_approval', a: '_objectid_value', c: 'msdyn_approvals', d: 'msdyn_approval' },
			objectid_msdyn_bookingalert: { b: 'objectid_msdyn_bookingalert', a: '_objectid_value', c: 'msdyn_bookingalerts', d: 'msdyn_bookingalert' },
			objectid_msdyn_inventoryadjustment: { b: 'objectid_msdyn_inventoryadjustment', a: '_objectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			objectid_msdyn_inventorytransfer: { b: 'objectid_msdyn_inventorytransfer', a: '_objectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			objectid_msdyn_iotalert: { b: 'objectid_msdyn_iotalert', a: '_objectid_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			objectid_msdyn_knowledgearticletemplate: { b: 'objectid_msdyn_knowledgearticletemplate', a: '_objectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			objectid_msdyn_liveconversation: { b: 'objectid_msdyn_liveconversation', a: '_objectid_value', c: 'msdyn_liveconversations', d: 'msdyn_liveconversation' },
			objectid_msdyn_ocliveworkitem: { b: 'objectid_msdyn_ocliveworkitem', a: '_objectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			objectid_msdyn_ocoutboundmessage: { b: 'objectid_msdyn_ocoutboundmessage', a: '_objectid_value', c: 'msdyn_ocoutboundmessages', d: 'msdyn_ocoutboundmessage' },
			objectid_msdyn_ocsession: { b: 'objectid_msdyn_ocsession', a: '_objectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			objectid_msdyn_overflowactionconfig: { b: 'objectid_msdyn_overflowactionconfig', a: '_objectid_value', c: 'msdyn_overflowactionconfigs', d: 'msdyn_overflowactionconfig' },
			objectid_msdyn_project: { b: 'objectid_msdyn_project', a: '_objectid_value', c: 'msdyn_projects', d: 'msdyn_project' },
			objectid_msdyn_projecttask: { b: 'objectid_msdyn_projecttask', a: '_objectid_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			objectid_msdyn_resourcerequest: { b: 'objectid_msdyn_resourcerequest', a: '_objectid_value', c: 'msdyn_resourcerequests', d: 'msdyn_resourcerequest' },
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
			Title: { a: 'title', r: true },
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
		for (var field in queueitem) {
			var a = queueitem[field].a;
			var b = queueitem[field].b;
			var c = queueitem[field].c;
			var d = queueitem[field].d;
			var g = queueitem[field].g;
			var r = queueitem[field].r;
			queueitem[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		queueitem.Entity = u;
		queueitem.EntityName = 'queueitem';
		queueitem.EntityCollectionName = 'queueitems';
		queueitem['@odata.etag'] = e['@odata.etag'];
		queueitem.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		queueitem.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
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
		ObjectTypeCode : {
			Activity: 4200,
			Agreement_Booking_Date: 10507,
			Agreement_Booking_Setup: 10512,
			Agreement_Invoice_Date: 10513,
			Agreement_Invoice_Setup: 10515,
			Appointment: 4201,
			Booking_Alert: 10386,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Conversation: 10673,
			Customer_Voice_alert: 10283,
			Customer_Voice_survey_invite: 10293,
			Customer_Voice_survey_response: 10295,
			Email: 4202,
			Fax: 4204,
			Fulfillment_Preference: 10409,
			Inventory_Adjustment: 10535,
			Inventory_Transfer: 10538,
			IoT_Alert: 10138,
			Knowledge_Article: 9953,
			Knowledge_Article_Template: 10086,
			Letter: 4207,
			Ongoing_conversation_Deprecated: 10663,
			Outbound_message: 10781,
			Overflow_Action_Config: 10650,
			Phone_Call: 4210,
			Project: 10455,
			Project_Service_Approval: 10416,
			Project_Task: 10460,
			Quick_Campaign: 4406,
			Recurring_Appointment: 4251,
			Resource_Request: 10478,
			Service_Activity: 4214,
			Session: 10688,
			Social_Activity: 4216,
			Task: 4212,
			Time_Group_Detail: 10410,
			Work_Order: 10578,
			Work_Order_Incident: 10581,
			Work_Order_Service: 10584,
			Work_Order_Service_Task: 10585
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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