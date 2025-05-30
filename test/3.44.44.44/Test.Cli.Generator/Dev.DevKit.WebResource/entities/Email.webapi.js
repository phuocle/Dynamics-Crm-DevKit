﻿'use strict';
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
			emailsender_equipment: { b: 'emailsender_equipment', a: '_emailsender_value', c: 'equipments', d: 'equipment', r: true },
			emailsender_lead: { b: 'emailsender_lead', a: '_emailsender_value', c: 'leads', d: 'lead', r: true },
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
			msdyn_copilotengaged: { a: 'msdyn_copilotengaged' },
			msdyn_emailengagementinteractions: { a: 'msdyn_emailengagementinteractions' },
			msdyn_RecipientList: { a: 'msdyn_recipientlist' },
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
			regardingobjectid_bookableresourcebooking_email: { b: 'regardingobjectid_bookableresourcebooking_email', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_email: { b: 'regardingobjectid_bookableresourcebookingheader_email', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_email: { b: 'regardingobjectid_bulkoperation_email', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_email: { b: 'regardingobjectid_campaign_email', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_email: { b: 'regardingobjectid_campaignactivity_email', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_email: { b: 'regardingobjectid_contact_email', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_email: { b: 'regardingobjectid_contract_email', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_email: { b: 'regardingobjectid_entitlement_email', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_email: { b: 'regardingobjectid_entitlementtemplate_email', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_email: { b: 'regardingobjectid_incident_email', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_email: { b: 'regardingobjectid_invoice_email', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_email: { b: 'regardingobjectid_knowledgearticle_email', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_email: { b: 'regardingobjectid_knowledgebaserecord_email', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_email: { b: 'regardingobjectid_lead_email', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyncrm_contentsettings_email: { b: 'regardingobjectid_msdyncrm_contentsettings_email', a: '_regardingobjectid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			regardingobjectid_msdyncrm_customerjourney_email: { b: 'regardingobjectid_msdyncrm_customerjourney_email', a: '_regardingobjectid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			regardingobjectid_msdyncrm_leadscoremodel_email: { b: 'regardingobjectid_msdyncrm_leadscoremodel_email', a: '_regardingobjectid_value', c: 'msdyncrm_leadscoremodels', d: 'msdyncrm_leadscoremodel' },
			regardingobjectid_msdyncrm_linkedinaccount_email: { b: 'regardingobjectid_msdyncrm_linkedinaccount_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			regardingobjectid_msdyncrm_linkedinactivity_email: { b: 'regardingobjectid_msdyncrm_linkedinactivity_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinactivities', d: 'msdyncrm_linkedinactivity' },
			regardingobjectid_msdyncrm_linkedinfieldmapping_email: { b: 'regardingobjectid_msdyncrm_linkedinfieldmapping_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinfieldmappings', d: 'msdyncrm_linkedinfieldmapping' },
			regardingobjectid_msdyncrm_linkedinform_email: { b: 'regardingobjectid_msdyncrm_linkedinform_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			regardingobjectid_msdyncrm_linkedinformanswer_email: { b: 'regardingobjectid_msdyncrm_linkedinformanswer_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformanswers', d: 'msdyncrm_linkedinformanswer' },
			regardingobjectid_msdyncrm_linkedinformquestion_email: { b: 'regardingobjectid_msdyncrm_linkedinformquestion_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformquestions', d: 'msdyncrm_linkedinformquestion' },
			regardingobjectid_msdyncrm_linkedinformsubmission_email: { b: 'regardingobjectid_msdyncrm_linkedinformsubmission_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformsubmissions', d: 'msdyncrm_linkedinformsubmission' },
			regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_email: { b: 'regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinleadmatchingstrategies', d: 'msdyncrm_linkedinleadmatchingstrategy' },
			regardingobjectid_msdyncrm_linkedinuserprofile_email: { b: 'regardingobjectid_msdyncrm_linkedinuserprofile_email', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_email: { b: 'regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_email', a: '_regardingobjectid_value', c: 'msdyncrm_marketingdynamiccontentmetadatas', d: 'msdyncrm_marketingdynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_email: { b: 'regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_email', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemaildynamiccontentmetadatas', d: 'msdyncrm_marketingemaildynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemailtestsend_email: { b: 'regardingobjectid_msdyncrm_marketingemailtestsend_email', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemailtestsends', d: 'msdyncrm_marketingemailtestsend' },
			regardingobjectid_msdyncrm_migration_email: { b: 'regardingobjectid_msdyncrm_migration_email', a: '_regardingobjectid_value', c: 'msdyncrm_migrations', d: 'msdyncrm_migration' },
			regardingobjectid_msdyncrm_uicconfig_email: { b: 'regardingobjectid_msdyncrm_uicconfig_email', a: '_regardingobjectid_value', c: 'msdyncrm_uicconfigs', d: 'msdyncrm_uicconfig' },
			regardingobjectid_msdyn_agreement_email: { b: 'regardingobjectid_msdyn_agreement_email', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_email: { b: 'regardingobjectid_msdyn_agreementbookingdate_email', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_email: { b: 'regardingobjectid_msdyn_agreementbookingincident_email', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_email: { b: 'regardingobjectid_msdyn_agreementbookingproduct_email', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_email: { b: 'regardingobjectid_msdyn_agreementbookingservice_email', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_email: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_email', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_email: { b: 'regardingobjectid_msdyn_agreementbookingsetup_email', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_email: { b: 'regardingobjectid_msdyn_agreementinvoicedate_email', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_email: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_email', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_email: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_email', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_email: { b: 'regardingobjectid_msdyn_bookingalertstatus_email', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_email: { b: 'regardingobjectid_msdyn_bookingrule_email', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_email: { b: 'regardingobjectid_msdyn_bookingtimestamp_email', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_email: { b: 'regardingobjectid_msdyn_customerasset_email', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_email: { b: 'regardingobjectid_msdyn_fieldservicesetting_email', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_email: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_email', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_email: { b: 'regardingobjectid_msdyn_incidenttypeproduct_email', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_email: { b: 'regardingobjectid_msdyn_incidenttypeservice_email', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_email: { b: 'regardingobjectid_msdyn_inventoryadjustment_email', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_email: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_email', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_email: { b: 'regardingobjectid_msdyn_inventoryjournal_email', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_email: { b: 'regardingobjectid_msdyn_inventorytransfer_email', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_email: { b: 'regardingobjectid_msdyn_payment_email', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_email: { b: 'regardingobjectid_msdyn_paymentdetail_email', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_email: { b: 'regardingobjectid_msdyn_paymentmethod_email', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_email: { b: 'regardingobjectid_msdyn_paymentterm_email', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_email: { b: 'regardingobjectid_msdyn_playbookinstance_email', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_email: { b: 'regardingobjectid_msdyn_postalbum_email', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_email: { b: 'regardingobjectid_msdyn_postalcode_email', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_productinventory_email: { b: 'regardingobjectid_msdyn_productinventory_email', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_purchaseorder_email: { b: 'regardingobjectid_msdyn_purchaseorder_email', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_email: { b: 'regardingobjectid_msdyn_purchaseorderbill_email', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_email: { b: 'regardingobjectid_msdyn_purchaseorderproduct_email', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_email: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_email', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_email: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_email', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_email: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_email', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_email: { b: 'regardingobjectid_msdyn_quotebookingincident_email', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_email: { b: 'regardingobjectid_msdyn_quotebookingproduct_email', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_email: { b: 'regardingobjectid_msdyn_quotebookingservice_email', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_email: { b: 'regardingobjectid_msdyn_quotebookingservicetask_email', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_email: { b: 'regardingobjectid_msdyn_resourceterritory_email', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_email: { b: 'regardingobjectid_msdyn_rma_email', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_email: { b: 'regardingobjectid_msdyn_rmaproduct_email', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_email: { b: 'regardingobjectid_msdyn_rmareceipt_email', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_email: { b: 'regardingobjectid_msdyn_rmareceiptproduct_email', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_email: { b: 'regardingobjectid_msdyn_rmasubstatus_email', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_email: { b: 'regardingobjectid_msdyn_rtv_email', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_email: { b: 'regardingobjectid_msdyn_rtvproduct_email', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_email: { b: 'regardingobjectid_msdyn_rtvsubstatus_email', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_email: { b: 'regardingobjectid_msdyn_salessuggestion_email', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_email: { b: 'regardingobjectid_msdyn_shipvia_email', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_swarm_email: { b: 'regardingobjectid_msdyn_swarm_email', a: '_regardingobjectid_value', c: 'msdyn_swarms', d: 'msdyn_swarm' },
			regardingobjectid_msdyn_systemuserschedulersetting_email: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_email', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_email: { b: 'regardingobjectid_msdyn_timegroup_email', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_email: { b: 'regardingobjectid_msdyn_timegroupdetail_email', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_email: { b: 'regardingobjectid_msdyn_timeoffrequest_email', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_email: { b: 'regardingobjectid_msdyn_warehouse_email', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_email: { b: 'regardingobjectid_msdyn_workorder_email', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_email: { b: 'regardingobjectid_msdyn_workordercharacteristic_email', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_email: { b: 'regardingobjectid_msdyn_workorderincident_email', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_email: { b: 'regardingobjectid_msdyn_workorderproduct_email', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_email: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_email', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_email: { b: 'regardingobjectid_msdyn_workorderservice_email', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_email: { b: 'regardingobjectid_msdyn_workorderservicetask_email', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_msevtmgt_checkin_email: { b: 'regardingobjectid_msevtmgt_checkin_email', a: '_regardingobjectid_value', c: 'msevtmgt_checkins', d: 'msevtmgt_checkin' },
			regardingobjectid_msevtmgt_event_email: { b: 'regardingobjectid_msevtmgt_event_email', a: '_regardingobjectid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			regardingobjectid_msevtmgt_eventpurchase_email: { b: 'regardingobjectid_msevtmgt_eventpurchase_email', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchases', d: 'msevtmgt_eventpurchase' },
			regardingobjectid_msevtmgt_eventpurchaseattendee_email: { b: 'regardingobjectid_msevtmgt_eventpurchaseattendee_email', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchaseattendees', d: 'msevtmgt_eventpurchaseattendee' },
			regardingobjectid_msevtmgt_eventpurchasepass_email: { b: 'regardingobjectid_msevtmgt_eventpurchasepass_email', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchasepasses', d: 'msevtmgt_eventpurchasepass' },
			regardingobjectid_msevtmgt_eventregistration_email: { b: 'regardingobjectid_msevtmgt_eventregistration_email', a: '_regardingobjectid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			regardingobjectid_msevtmgt_hotel_email: { b: 'regardingobjectid_msevtmgt_hotel_email', a: '_regardingobjectid_value', c: 'msevtmgt_hotels', d: 'msevtmgt_hotel' },
			regardingobjectid_msevtmgt_hotelroomallocation_email: { b: 'regardingobjectid_msevtmgt_hotelroomallocation_email', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomallocations', d: 'msevtmgt_hotelroomallocation' },
			regardingobjectid_msevtmgt_hotelroomreservation_email: { b: 'regardingobjectid_msevtmgt_hotelroomreservation_email', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomreservations', d: 'msevtmgt_hotelroomreservation' },
			regardingobjectid_msevtmgt_layout_email: { b: 'regardingobjectid_msevtmgt_layout_email', a: '_regardingobjectid_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			regardingobjectid_msevtmgt_room_email: { b: 'regardingobjectid_msevtmgt_room_email', a: '_regardingobjectid_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			regardingobjectid_msevtmgt_session_email: { b: 'regardingobjectid_msevtmgt_session_email', a: '_regardingobjectid_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			regardingobjectid_msevtmgt_sessionregistration_email: { b: 'regardingobjectid_msevtmgt_sessionregistration_email', a: '_regardingobjectid_value', c: 'msevtmgt_sessionregistrations', d: 'msevtmgt_sessionregistration' },
			regardingobjectid_msevtmgt_sessiontrack_email: { b: 'regardingobjectid_msevtmgt_sessiontrack_email', a: '_regardingobjectid_value', c: 'msevtmgt_sessiontracks', d: 'msevtmgt_sessiontrack' },
			regardingobjectid_msevtmgt_speaker_email: { b: 'regardingobjectid_msevtmgt_speaker_email', a: '_regardingobjectid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			regardingobjectid_msevtmgt_speakerengagement_email: { b: 'regardingobjectid_msevtmgt_speakerengagement_email', a: '_regardingobjectid_value', c: 'msevtmgt_speakerengagements', d: 'msevtmgt_speakerengagement' },
			regardingobjectid_msevtmgt_sponsorablearticle_email: { b: 'regardingobjectid_msevtmgt_sponsorablearticle_email', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorablearticles', d: 'msevtmgt_sponsorablearticle' },
			regardingobjectid_msevtmgt_sponsorship_email: { b: 'regardingobjectid_msevtmgt_sponsorship_email', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorships', d: 'msevtmgt_sponsorship' },
			regardingobjectid_msevtmgt_venue_email: { b: 'regardingobjectid_msevtmgt_venue_email', a: '_regardingobjectid_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			regardingobjectid_msevtmgt_webinarconfiguration_email: { b: 'regardingobjectid_msevtmgt_webinarconfiguration_email', a: '_regardingobjectid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			regardingobjectid_msevtmgt_webinarprovider_email: { b: 'regardingobjectid_msevtmgt_webinarprovider_email', a: '_regardingobjectid_value', c: 'msevtmgt_webinarproviders', d: 'msevtmgt_webinarprovider' },
			regardingobjectid_mspp_adplacement_email: { b: 'regardingobjectid_mspp_adplacement_email', a: '_regardingobjectid_value', c: 'mspp_adplacements', d: 'mspp_adplacement' },
			regardingobjectid_mspp_pollplacement_email: { b: 'regardingobjectid_mspp_pollplacement_email', a: '_regardingobjectid_value', c: 'mspp_pollplacements', d: 'mspp_pollplacement' },
			regardingobjectid_mspp_publishingstatetransitionrule_email: { b: 'regardingobjectid_mspp_publishingstatetransitionrule_email', a: '_regardingobjectid_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			regardingobjectid_mspp_redirect_email: { b: 'regardingobjectid_mspp_redirect_email', a: '_regardingobjectid_value', c: 'mspp_redirects', d: 'mspp_redirect' },
			regardingobjectid_mspp_shortcut_email: { b: 'regardingobjectid_mspp_shortcut_email', a: '_regardingobjectid_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			regardingobjectid_mspp_website_email: { b: 'regardingobjectid_mspp_website_email', a: '_regardingobjectid_value', c: 'mspp_websites', d: 'mspp_website' },
			regardingobjectid_opportunity_email: { b: 'regardingobjectid_opportunity_email', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_email: { b: 'regardingobjectid_quote_email', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_email: { b: 'regardingobjectid_salesorder_email', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_email: { b: 'regardingobjectid_site_email', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
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
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
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
			Appointment: 4201,
			Booking_Alert: 11000,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10691,
			Copilot_Transcript: 10877,
			Customer_Voice_alert: 10600,
			Customer_Voice_survey_invite: 10610,
			Customer_Voice_survey_response: 10612,
			Email: 4202,
			Fax: 4204,
			Invite_Redemption: 10310,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 11063,
			Phone_Call: 4210,
			Portal_Comment: 10311,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10708,
			Task: 4212,
			Teams_chat: 10185,
			Voicemail: 11070
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