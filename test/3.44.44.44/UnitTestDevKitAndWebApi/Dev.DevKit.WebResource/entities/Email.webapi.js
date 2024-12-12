'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EmailApi = function (e) {
		var f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
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
				if (type === 'MultiOptionSet') {
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
						return returnGet(entity[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity[logicalName].toString().split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity[logicalName], type);
			};
			var returnGet = function (data, type) {
				var parseDate = function (dateString) {
					const date = new Date(dateString);
					if (isNaN(date.getTime())) {
						return null;
					} else {
						return date;
					}
				}
				var parseBoolean = function (booleanString) {
					if (typeof booleanString !== 'string') return false;
					const lowerStr = booleanString.trim().toLowerCase();
					const trueValues = ["true", "1", "yes", "y"];
					const falseValues = ["false", "0", "no", "n"];
					if (trueValues.includes(lowerStr)) {
						return true;
					} else if (falseValues.includes(lowerStr)) {
						return false;
					} else {
						return false;
					}
				};
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				if (type === "DateTime") {
					const date = parseDate(data);
					if (isNaN(date.getTime())) return null;
					return date;
				}
				else if (type === "Integer") {
					const int = parseInt(data);
					if (isNaN(int)) return null;
					return int;
				}
				else if (type === "Number") {
					const double = Number(data);
					if (isNaN(double)) return null;
					return double;
				}
				else if (type === "Boolean") {
					return parseBoolean(data);
				}
				return data;
			}
			var setValue = function (value) {
				if (type === 'MultiOptionSet') value = value.join(',');
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
		var _email = {
			acceptingentityid_queue: { b: 'acceptingentityid_queue', a: '_acceptingentityid_value', c: 'queues', d: 'queue' },
			acceptingentityid_systemuser: { b: 'acceptingentityid_systemuser', a: '_acceptingentityid_value', c: 'systemusers', d: 'systemuser' },
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes', g: 'Integer' },
			ActualEnd_UtcDateOnly: { a: 'actualend', g: 'DateTime' },
			ActualStart_UtcDateOnly: { a: 'actualstart', g: 'DateTime' },
			AttachmentCount: { a: 'attachmentcount', r: true, g: 'Integer' },
			AttachmentOpenCount: { a: 'attachmentopencount', g: 'Integer' },
			BaseConversationIndexHash: { a: 'baseconversationindexhash', g: 'Integer' },
			Category: { a: 'category' },
			Compressed: { a: 'compressed', r: true, g: 'Boolean' },
			ConversationIndex: { a: 'conversationindex', r: true },
			ConversationTrackingId: { a: 'conversationtrackingid' },
			CorrelatedActivityId: { b: 'correlatedactivityid', a: '_correlatedactivityid_value', c: 'emails', d: 'email' },
			correlatedsubjectchanged: { a: 'correlatedsubjectchanged', g: 'Boolean' },
			CorrelationMethod: { a: 'correlationmethod', r: true, g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DelayedEmailSendTime_UtcDateAndTime: { a: 'delayedemailsendtime', g: 'DateTime' },
			DeliveryAttempts: { a: 'deliveryattempts', g: 'Integer' },
			DeliveryPriorityCode: { a: 'deliveryprioritycode', g: 'Integer' },
			DeliveryReceiptRequested: { a: 'deliveryreceiptrequested', g: 'Boolean' },
			Description: { a: 'description' },
			DescriptionBlobId_name: { a: 'descriptionblobid', r: true },
			DirectionCode: { a: 'directioncode', g: 'Boolean' },
			EmailReminderExpiryTime_UtcDateAndTime: { a: 'emailreminderexpirytime', g: 'DateTime' },
			EmailReminderStatus: { a: 'emailreminderstatus', r: true, g: 'Integer' },
			EmailReminderText: { a: 'emailremindertext' },
			EmailReminderType: { a: 'emailremindertype', g: 'Integer' },
			emailsender_account: { b: 'emailsender_account', a: '_emailsender_value', c: 'accounts', d: 'account', r: true },
			emailsender_contact: { b: 'emailsender_contact', a: '_emailsender_value', c: 'contacts', d: 'contact', r: true },
			emailsender_queue: { b: 'emailsender_queue', a: '_emailsender_value', c: 'queues', d: 'queue', r: true },
			emailsender_systemuser: { b: 'emailsender_systemuser', a: '_emailsender_value', c: 'systemusers', d: 'systemuser', r: true },
			EmailTrackingId: { a: 'emailtrackingid' },
			ExchangeRate: { a: 'exchangerate', r: true, g: 'Number' },
			FollowEmailUserPreference: { a: 'followemailuserpreference', g: 'Boolean' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			InReplyTo: { a: 'inreplyto', r: true },
			InternetMessageHeaders: { a: 'internetmessageheaders' },
			IsBilled: { a: 'isbilled', g: 'Boolean' },
			IsDuplicateSenderUnresolved: { a: 'isduplicatesenderunresolved', g: 'Boolean' },
			IsEmailFollowed: { a: 'isemailfollowed', r: true, g: 'Boolean' },
			IsEmailReminderSet: { a: 'isemailreminderset', r: true, g: 'Boolean' },
			IsRegularActivity: { a: 'isregularactivity', r: true, g: 'Boolean' },
			IsSafeDescriptionTruncated: { a: 'issafedescriptiontruncated', r: true, g: 'Integer' },
			IsUnsafe: { a: 'isunsafe', r: true, g: 'Integer' },
			IsWorkflowCreated: { a: 'isworkflowcreated', g: 'Boolean' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime', g: 'DateTime' },
			LastOpenedTime_UtcDateAndTime: { a: 'lastopenedtime', g: 'DateTime' },
			LinksClickedCount: { a: 'linksclickedcount', g: 'Integer' },
			MessageId: { a: 'messageid' },
			MessageIdDupCheck: { a: 'messageiddupcheck' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Notifications: { a: 'notifications', g: 'Integer' },
			OnHoldTime: { a: 'onholdtime', r: true, g: 'Integer' },
			OpenCount: { a: 'opencount', g: 'Integer' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentActivityId: { b: 'parentactivityid', a: '_parentactivityid_value', c: 'emails', d: 'email' },
			PostponeEmailProcessingUntil_UtcDateAndTime: { a: 'postponeemailprocessinguntil', r: true, g: 'DateTime' },
			PriorityCode: { a: 'prioritycode', g: 'Integer' },
			ProcessId: { a: 'processid' },
			ReadReceiptRequested: { a: 'readreceiptrequested', g: 'Boolean' },
			ReceivingMailboxId: { b: 'receivingmailboxid', a: '_receivingmailboxid_value', c: 'mailboxes', d: 'mailbox' },
			regardingobjectid_account_email: { b: 'regardingobjectid_account_email', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adx_invitation_email: { b: 'regardingobjectid_adx_invitation_email', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			regardingobjectid_asyncoperation: { b: 'regardingobjectid_asyncoperation', a: '_regardingobjectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			regardingobjectid_contact_email: { b: 'regardingobjectid_contact_email', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_knowledgearticle_email: { b: 'regardingobjectid_knowledgearticle_email', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_email: { b: 'regardingobjectid_knowledgebaserecord_email', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_mspp_adplacement_email: { b: 'regardingobjectid_mspp_adplacement_email', a: '_regardingobjectid_value', c: 'mspp_adplacements', d: 'mspp_adplacement' },
			regardingobjectid_mspp_pollplacement_email: { b: 'regardingobjectid_mspp_pollplacement_email', a: '_regardingobjectid_value', c: 'mspp_pollplacements', d: 'mspp_pollplacement' },
			regardingobjectid_mspp_publishingstatetransitionrule_email: { b: 'regardingobjectid_mspp_publishingstatetransitionrule_email', a: '_regardingobjectid_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			regardingobjectid_mspp_redirect_email: { b: 'regardingobjectid_mspp_redirect_email', a: '_regardingobjectid_value', c: 'mspp_redirects', d: 'mspp_redirect' },
			regardingobjectid_mspp_shortcut_email: { b: 'regardingobjectid_mspp_shortcut_email', a: '_regardingobjectid_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			regardingobjectid_mspp_website_email: { b: 'regardingobjectid_mspp_website_email', a: '_regardingobjectid_value', c: 'mspp_websites', d: 'mspp_website' },
			ReminderActionCardId: { a: 'reminderactioncardid' },
			ReplyCount: { a: 'replycount', r: true, g: 'Integer' },
			ReservedForInternalUse: { a: 'reservedforinternaluse' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true, g: 'Integer' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend', g: 'DateTime' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart', g: 'DateTime' },
			Sender: { a: 'sender' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SendersAccount: { b: 'sendersaccount', a: '_sendersaccount_value', c: 'accounts', d: 'account', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true, g: 'DateTime' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate', g: 'DateTime' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubmittedBy: { a: 'submittedby' },
			TemplateId: { b: 'templateid', a: '_templateid_value', c: 'templates', d: 'template' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			ToRecipients: { a: 'torecipients' },
			TrackingToken: { a: 'trackingtoken' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		var u = {};
		var email = {};
		email.ODataEntity = e;
		email.FormattedValue = {};
		for (var field in _email) {
			var a = _email[field].a;
			var b = _email[field].b;
			var c = _email[field].c;
			var d = _email[field].d;
			var g = _email[field].g;
			var r = _email[field].r;
			webApiField(email, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(email, 'ActivityParties', {
			get: function () { return e['email_activity_parties']; },
			set: function (value) {
				e['email_activity_parties'] = value;
				u['email_activity_parties'] = value;
			}
		});
		email.Entity = u;
		email.EntityName = 'email';
		email.EntityCollectionName = 'emails';
		email['@odata.etag'] = e['@odata.etag'];
		email.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		email.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return email;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Email = {
		AcceptingEntityTypeCode : {
		},
		ActivityTypeCode : {
			Appointment: 4201,
			Customer_Voice_alert: 10611,
			Customer_Voice_survey_invite: 10612,
			Customer_Voice_survey_response: 10613,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10315,
			Letter: 4207,
			Phone_Call: 4210,
			Portal_Comment: 10316,
			Recurring_Appointment: 4251,
			Task: 4212,
			Teams_chat: 10187
		},
		CorrelationMethod : {
			ConversationIndex: 5,
			CustomCorrelation: 7,
			InReplyTo: 3,
			None: 0,
			Skipped: 1,
			SmartMatching: 6,
			TrackingToken: 4,
			XHeader: 2
		},
		DeliveryPriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		EmailReminderStatus : {
			NotSet: 0,
			ReminderExpired: 2,
			ReminderInvalid: 3,
			ReminderSet: 1
		},
		EmailReminderType : {
			If_I_do_not_receive_a_reply_by: 0,
			If_the_email_is_not_opened_by: 1,
			Remind_me_anyways_at: 2
		},
		EmailSenderObjectTypeCode : {
		},
		Notifications : {
			None: 0,
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1,
			Truncated_body: 2
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		SendersAccountObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 5,
			Completed: 2,
			Draft: 1,
			Failed: 8,
			Pending_Send: 6,
			Received: 4,
			Sending: 7,
			Sent: 3
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