'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EmailApi = function (e) {
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
		var _email = {
			acceptingentityid_queue: { b: 'acceptingentityid_queue', a: '_acceptingentityid_value', c: 'queues', d: 'queue' },
			acceptingentityid_systemuser: { b: 'acceptingentityid_systemuser', a: '_acceptingentityid_value', c: 'systemusers', d: 'systemuser' },
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			AttachmentCount: { a: 'attachmentcount', r: true },
			AttachmentOpenCount: { a: 'attachmentopencount' },
			BaseConversationIndexHash: { a: 'baseconversationindexhash' },
			Category: { a: 'category' },
			Compressed: { a: 'compressed', r: true },
			ConversationIndex: { a: 'conversationindex', r: true },
			ConversationTrackingId: { a: 'conversationtrackingid' },
			CorrelatedActivityId: { b: 'correlatedactivityid', a: '_correlatedactivityid_value', c: 'emails', d: 'email' },
			correlatedsubjectchanged: { a: 'correlatedsubjectchanged' },
			CorrelationMethod: { a: 'correlationmethod', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DelayedEmailSendTime_UtcDateAndTime: { a: 'delayedemailsendtime' },
			DeliveryAttempts: { a: 'deliveryattempts' },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			DeliveryReceiptRequested: { a: 'deliveryreceiptrequested' },
			Description: { a: 'description' },
			DescriptionBlobId_name: { a: 'descriptionblobid', r: true },
			DirectionCode: { a: 'directioncode' },
			EmailReminderExpiryTime_UtcDateAndTime: { a: 'emailreminderexpirytime' },
			EmailReminderStatus: { a: 'emailreminderstatus', r: true },
			EmailReminderText: { a: 'emailremindertext' },
			EmailReminderType: { a: 'emailremindertype' },
			emailsender_account: { b: 'emailsender_account', a: '_emailsender_value', c: 'accounts', d: 'account', r: true },
			emailsender_contact: { b: 'emailsender_contact', a: '_emailsender_value', c: 'contacts', d: 'contact', r: true },
			emailsender_queue: { b: 'emailsender_queue', a: '_emailsender_value', c: 'queues', d: 'queue', r: true },
			emailsender_systemuser: { b: 'emailsender_systemuser', a: '_emailsender_value', c: 'systemusers', d: 'systemuser', r: true },
			EmailTrackingId: { a: 'emailtrackingid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FollowEmailUserPreference: { a: 'followemailuserpreference' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InReplyTo: { a: 'inreplyto', r: true },
			InternetMessageHeaders: { a: 'internetmessageheaders' },
			IsBilled: { a: 'isbilled' },
			IsDuplicateSenderUnresolved: { a: 'isduplicatesenderunresolved' },
			IsEmailFollowed: { a: 'isemailfollowed', r: true },
			IsEmailReminderSet: { a: 'isemailreminderset', r: true },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsSafeDescriptionTruncated: { a: 'issafedescriptiontruncated', r: true },
			IsUnsafe: { a: 'isunsafe', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LastOpenedTime_UtcDateAndTime: { a: 'lastopenedtime' },
			LinksClickedCount: { a: 'linksclickedcount' },
			MessageId: { a: 'messageid' },
			MessageIdDupCheck: { a: 'messageiddupcheck' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Notifications: { a: 'notifications' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpenCount: { a: 'opencount' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			ParentActivityId: { b: 'parentactivityid', a: '_parentactivityid_value', c: 'emails', d: 'email' },
			PostponeEmailProcessingUntil_UtcDateAndTime: { a: 'postponeemailprocessinguntil', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			ReadReceiptRequested: { a: 'readreceiptrequested' },
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
			ReplyCount: { a: 'replycount', r: true },
			ReservedForInternalUse: { a: 'reservedforinternaluse' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			Sender: { a: 'sender' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SendersAccount: { b: 'sendersaccount', a: '_sendersaccount_value', c: 'accounts', d: 'account', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubmittedBy: { a: 'submittedby' },
			TemplateId: { b: 'templateid', a: '_templateid_value', c: 'templates', d: 'template' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			ToRecipients: { a: 'torecipients' },
			TrackingToken: { a: 'trackingtoken' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
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
			Cuoc_goi_dien_thoai: 4210,
			Cuoc_hen: 4201,
			Cuoc_hen_lap_lai: 4251,
			Email: 4202,
			Fax: 4204,
			Nhan_xet_Cong_thong_tin: 10311,
			Nhiem_vu: 4212,
			Quy_doi_Loi_moi: 10310,
			Thu_tin: 4207,
			Tro_chuyen_qua_Teams: 10185
		},
		CorrelationMethod : {
			ConversationIndex: 5,
			CustomCorrelation: 7,
			Da_bo_qua: 1,
			InReplyTo: 3,
			Khong_co: 0,
			SmartMatching: 6,
			TrackingToken: 4,
			XHeader: 2
		},
		DeliveryPriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		EmailReminderStatus : {
			NotSet: 0,
			ReminderExpired: 2,
			ReminderInvalid: 3,
			ReminderSet: 1
		},
		EmailReminderType : {
			Neu_email_khong_duoc_mo_vao: 1,
			Neu_toi_khong_nhan_duoc_thu_tra_loi_vao: 0,
			Van_cu_nhac_toi_vao: 2
		},
		EmailSenderObjectTypeCode : {
		},
		Notifications : {
			Khong: 0,
			Noi_dung_bi_cat_bot: 2,
			Thu_da_duoc_luu_thanh_ban_ghi_email_Microsoft_Dynamics_365_nhung_khong_the_luu_tat_ca_cac_tep_dinh_kem_voi_thu_Khong_the_luu_mot_tep_dinh_kem_neu_tep_do_da_bi_chan_hoac_loai_tep_khong_hop_le: 1
		},
		PriorityCode : {
			Binh_thuong: 1,
			Cao: 2,
			Thap: 0
		},
		RegardingObjectTypeCode : {
		},
		SendersAccountObjectTypeCode : {
		},
		StateCode : {
			Da_hoan_thanh: 1,
			Da_huy: 2,
			Mo: 0
		},
		StatusCode : {
			Ban_nhap: 1,
			Da_gui: 3,
			Da_hoan_thanh: 2,
			Da_huy: 5,
			Da_nhan: 4,
			Dang_cho_Gui: 6,
			Dang_gui: 7,
			Khong_thanh_cong: 8
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