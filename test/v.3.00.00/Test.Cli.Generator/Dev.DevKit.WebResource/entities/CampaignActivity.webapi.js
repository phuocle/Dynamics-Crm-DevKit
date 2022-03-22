﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.CampaignActivityApi = function (e) {
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
		var _campaignactivity = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualCost: { a: 'actualcost' },
			ActualCost_Base: { a: 'actualcost_base', r: true },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			BudgetedCost: { a: 'budgetedcost' },
			BudgetedCost_Base: { a: 'budgetedcost_base', r: true },
			Category: { a: 'category' },
			ChannelTypeCode: { a: 'channeltypecode' },
			Community: { a: 'community' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DeliveryLastAttemptedOn_UtcDateAndTime: { a: 'deliverylastattemptedon', r: true },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			Description: { a: 'description' },
			DoNotSendOnOptOut: { a: 'donotsendonoptout' },
			ExchangeItemId: { a: 'exchangeitemid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExchangeWebLink: { a: 'exchangeweblink' },
			ExcludeIfContactedInXDays: { a: 'excludeifcontactedinxdays' },
			IgnoreInactiveListMembers: { a: 'ignoreinactivelistmembers' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LeftVoiceMail: { a: 'leftvoicemail' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OnHoldTime: { a: 'onholdtime', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PostponeActivityProcessingUntil_UtcDateAndTime: { a: 'postponeactivityprocessinguntil', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			RegardingObjectId: { b: 'regardingobjectid', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateOnly: { a: 'scheduledend' },
			ScheduledStart_UtcDateOnly: { a: 'scheduledstart' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SeriesId: { a: 'seriesid', r: true },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			TraversedPath: { a: 'traversedpath' },
			TypeCode: { a: 'typecode' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var campaignactivity = {};
		campaignactivity.ODataEntity = e;
		campaignactivity.FormattedValue = {};
		for (var field in _campaignactivity) {
			var a = _campaignactivity[field].a;
			var b = _campaignactivity[field].b;
			var c = _campaignactivity[field].c;
			var d = _campaignactivity[field].d;
			var g = _campaignactivity[field].g;
			var r = _campaignactivity[field].r;
			webApiField(campaignactivity, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(campaignactivity, 'ActivityParties', {
			get: function () { return e['campaignactivity_activity_parties']; },
			set: function (value) {
				e['campaignactivity_activity_parties'] = value;
				u['campaignactivity_activity_parties'] = value;
			}
		});
		campaignactivity.Entity = u;
		campaignactivity.EntityName = 'campaignactivity';
		campaignactivity.EntityCollectionName = 'campaignactivities';
		campaignactivity['@odata.etag'] = e['@odata.etag'];
		campaignactivity.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		campaignactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return campaignactivity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.CampaignActivity = {
		ActivityTypeCode : {
			Activity_record_for_the_Teams_chat: 10086,
			Appointment: 4201,
			Booking_Alert: 10404,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10707,
			Customer_Voice_alert: 10313,
			Customer_Voice_survey_invite: 10323,
			Customer_Voice_survey_response: 10325,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10817,
			Phone_Call: 4210,
			Project_Service_Approval: 10434,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10721,
			Task: 4212
		},
		ChannelTypeCode : {
			Appointment: 2,
			Email: 7,
			Email_via_Mail_Mergedeprecated: 8,
			Fax: 5,
			Fax_via_Mail_Mergedeprecated: 6,
			Letter: 3,
			Letter_via_Mail_Mergedeprecated: 4,
			Other: 9,
			Phone: 1
		},
		Community : {
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			GroupMe: 10,
			Kik: 11,
			Line: 3,
			Microsoft_Teams: 7,
			Other: 0,
			Skype: 13,
			Slack: 14,
			Telegram: 12,
			Twitter: 2,
			Wechat: 4,
			WhatsApp: 15
		},
		DeliveryPriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		StateCode : {
			Canceled: 2,
			Closed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 3,
			Closed: 2,
			Completed: 6,
			In_Progress: 0,
			Pending: 4,
			Proposed: 1,
			System_Aborted: 5
		},
		TypeCode : {
			Content_Distribution: 5,
			Content_Preparation: 2,
			Direct_Follow_Up_Contact: 7,
			Direct_Initial_Contact: 6,
			Lead_Qualification: 4,
			Reminder_Distribution: 8,
			Research: 1,
			Target_Marketing_List_Creation: 3
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