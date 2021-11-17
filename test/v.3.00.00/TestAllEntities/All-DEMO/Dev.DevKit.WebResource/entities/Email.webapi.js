'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.EmailApi = function (e) {
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
		var email = {
			AcceptingEntityId_queue: { b: 'acceptingentityid', a: '_acceptingentityid_value', d: 'queue' },
			AcceptingEntityId_systemuser: { b: 'acceptingentityid', a: '_acceptingentityid_value', d: 'systemuser' },
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			AttachmentCount: { a: 'attachmentcount', r: true },
			AttachmentOpenCount: { a: 'attachmentopencount' },
			BaseConversationIndexHash: { a: 'baseconversationindexhash' },
			bcc_account: { b: 'bcc', a: '_bcc_value', d: 'account' },
			bcc_contact: { b: 'bcc', a: '_bcc_value', d: 'contact' },
			bcc_entitlement: { b: 'bcc', a: '_bcc_value', d: 'entitlement' },
			bcc_equipment: { b: 'bcc', a: '_bcc_value', d: 'equipment' },
			bcc_knowledgearticle: { b: 'bcc', a: '_bcc_value', d: 'knowledgearticle' },
			bcc_lead: { b: 'bcc', a: '_bcc_value', d: 'lead' },
			bcc_queue: { b: 'bcc', a: '_bcc_value', d: 'queue' },
			bcc_systemuser: { b: 'bcc', a: '_bcc_value', d: 'systemuser' },
			bcc_unresolvedaddress: { b: 'bcc', a: '_bcc_value', d: 'unresolvedaddress' },
			Category: { a: 'category' },
			cc_account: { b: 'cc', a: '_cc_value', d: 'account' },
			cc_contact: { b: 'cc', a: '_cc_value', d: 'contact' },
			cc_entitlement: { b: 'cc', a: '_cc_value', d: 'entitlement' },
			cc_equipment: { b: 'cc', a: '_cc_value', d: 'equipment' },
			cc_knowledgearticle: { b: 'cc', a: '_cc_value', d: 'knowledgearticle' },
			cc_lead: { b: 'cc', a: '_cc_value', d: 'lead' },
			cc_queue: { b: 'cc', a: '_cc_value', d: 'queue' },
			cc_systemuser: { b: 'cc', a: '_cc_value', d: 'systemuser' },
			cc_unresolvedaddress: { b: 'cc', a: '_cc_value', d: 'unresolvedaddress' },
			Compressed: { a: 'compressed', r: true },
			ConversationIndex: { a: 'conversationindex', r: true },
			ConversationTrackingId: { a: 'conversationtrackingid' },
			CorrelatedActivityId: { b: 'correlatedactivityid', a: '_correlatedactivityid_value', d: 'email' },
			CorrelationMethod: { a: 'correlationmethod', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', d: 'systemuser', r: true },
			DelayedEmailSendTime_UtcDateAndTime: { a: 'delayedemailsendtime' },
			DeliveryAttempts: { a: 'deliveryattempts' },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			DeliveryReceiptRequested: { a: 'deliveryreceiptrequested' },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode' },
			EmailReminderExpiryTime_UtcDateAndTime: { a: 'emailreminderexpirytime' },
			EmailReminderStatus: { a: 'emailreminderstatus', r: true },
			EmailReminderText: { a: 'emailremindertext' },
			EmailReminderType: { a: 'emailremindertype' },
			EmailSender_account: { b: 'emailsender', a: '_emailsender_value', d: 'account', r: true },
			EmailSender_contact: { b: 'emailsender', a: '_emailsender_value', d: 'contact', r: true },
			EmailSender_equipment: { b: 'emailsender', a: '_emailsender_value', d: 'equipment', r: true },
			EmailSender_lead: { b: 'emailsender', a: '_emailsender_value', d: 'lead', r: true },
			EmailSender_queue: { b: 'emailsender', a: '_emailsender_value', d: 'queue', r: true },
			EmailSender_systemuser: { b: 'emailsender', a: '_emailsender_value', d: 'systemuser', r: true },
			EmailTrackingId: { a: 'emailtrackingid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FollowEmailUserPreference: { a: 'followemailuserpreference' },
			from_queue: { b: 'from', a: '_from_value', d: 'queue' },
			from_systemuser: { b: 'from', a: '_from_value', d: 'systemuser' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InReplyTo: { a: 'inreplyto', r: true },
			IsBilled: { a: 'isbilled' },
			IsEmailFollowed: { a: 'isemailfollowed', r: true },
			IsEmailReminderSet: { a: 'isemailreminderset', r: true },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsUnsafe: { a: 'isunsafe', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LastOpenedTime_UtcDateAndTime: { a: 'lastopenedtime' },
			LinksClickedCount: { a: 'linksclickedcount' },
			MessageId: { a: 'messageid' },
			MessageIdDupCheck: { a: 'messageiddupcheck' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', d: 'systemuser', r: true },
			msdyn_RecipientList: { a: 'msdyn_recipientlist' },
			Notifications: { a: 'notifications' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpenCount: { a: 'opencount' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', d: 'systemuser', r: true },
			ParentActivityId: { b: 'parentactivityid', a: '_parentactivityid_value', d: 'email' },
			PostponeEmailProcessingUntil_UtcDateAndTime: { a: 'postponeemailprocessinguntil', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			ReadReceiptRequested: { a: 'readreceiptrequested' },
			ReceivingMailboxId: { b: 'receivingmailboxid', a: '_receivingmailboxid_value', d: 'mailbox' },
			RegardingObjectId_account: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'account' },
			RegardingObjectId_asyncoperation: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'asyncoperation' },
			RegardingObjectId_bookableresourcebooking: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'bookableresourcebooking' },
			RegardingObjectId_bookableresourcebookingheader: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'bookableresourcebookingheader' },
			RegardingObjectId_bulkoperation: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'bulkoperation' },
			RegardingObjectId_campaign: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'campaign' },
			RegardingObjectId_campaignactivity: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'campaignactivity' },
			RegardingObjectId_contact: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'contact' },
			RegardingObjectId_contract: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'contract' },
			RegardingObjectId_entitlement: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'entitlement' },
			RegardingObjectId_entitlementtemplate: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'entitlementtemplate' },
			RegardingObjectId_incident: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'incident' },
			RegardingObjectId_invoice: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'invoice' },
			RegardingObjectId_knowledgearticle: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'knowledgearticle' },
			RegardingObjectId_knowledgebaserecord: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'knowledgebaserecord' },
			RegardingObjectId_lead: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'lead' },
			RegardingObjectId_msdyn_agreement: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreement' },
			RegardingObjectId_msdyn_agreementbookingdate: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementbookingdate' },
			RegardingObjectId_msdyn_agreementbookingincident: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementbookingincident' },
			RegardingObjectId_msdyn_agreementbookingproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementbookingproduct' },
			RegardingObjectId_msdyn_agreementbookingservice: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementbookingservice' },
			RegardingObjectId_msdyn_agreementbookingservicetask: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementbookingservicetask' },
			RegardingObjectId_msdyn_agreementbookingsetup: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementbookingsetup' },
			RegardingObjectId_msdyn_agreementinvoicedate: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementinvoicedate' },
			RegardingObjectId_msdyn_agreementinvoiceproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementinvoiceproduct' },
			RegardingObjectId_msdyn_agreementinvoicesetup: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_agreementinvoicesetup' },
			RegardingObjectId_msdyn_bookingalertstatus: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_bookingalertstatus' },
			RegardingObjectId_msdyn_bookingrule: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_bookingrule' },
			RegardingObjectId_msdyn_bookingtimestamp: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_bookingtimestamp' },
			RegardingObjectId_msdyn_customerasset: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_customerasset' },
			RegardingObjectId_msdyn_fieldservicesetting: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_fieldservicesetting' },
			RegardingObjectId_msdyn_incidenttypecharacteristic: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_incidenttypecharacteristic' },
			RegardingObjectId_msdyn_incidenttypeproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_incidenttypeproduct' },
			RegardingObjectId_msdyn_incidenttypeservice: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_incidenttypeservice' },
			RegardingObjectId_msdyn_inventoryadjustment: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_inventoryadjustment' },
			RegardingObjectId_msdyn_inventoryadjustmentproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_inventoryadjustmentproduct' },
			RegardingObjectId_msdyn_inventoryjournal: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_inventoryjournal' },
			RegardingObjectId_msdyn_inventorytransfer: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_inventorytransfer' },
			RegardingObjectId_msdyn_payment: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_payment' },
			RegardingObjectId_msdyn_paymentdetail: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_paymentdetail' },
			RegardingObjectId_msdyn_paymentmethod: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_paymentmethod' },
			RegardingObjectId_msdyn_paymentterm: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_paymentterm' },
			RegardingObjectId_msdyn_playbookinstance: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_playbookinstance' },
			RegardingObjectId_msdyn_postalbum: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_postalbum' },
			RegardingObjectId_msdyn_postalcode: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_postalcode' },
			RegardingObjectId_msdyn_processnotes: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_processnotes' },
			RegardingObjectId_msdyn_productinventory: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_productinventory' },
			RegardingObjectId_msdyn_projectteam: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_projectteam' },
			RegardingObjectId_msdyn_purchaseorder: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_purchaseorder' },
			RegardingObjectId_msdyn_purchaseorderbill: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_purchaseorderbill' },
			RegardingObjectId_msdyn_purchaseorderproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_purchaseorderproduct' },
			RegardingObjectId_msdyn_purchaseorderreceipt: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_purchaseorderreceipt' },
			RegardingObjectId_msdyn_purchaseorderreceiptproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_purchaseorderreceiptproduct' },
			RegardingObjectId_msdyn_purchaseordersubstatus: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_purchaseordersubstatus' },
			RegardingObjectId_msdyn_quotebookingincident: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_quotebookingincident' },
			RegardingObjectId_msdyn_quotebookingproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_quotebookingproduct' },
			RegardingObjectId_msdyn_quotebookingservice: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_quotebookingservice' },
			RegardingObjectId_msdyn_quotebookingservicetask: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_quotebookingservicetask' },
			RegardingObjectId_msdyn_resourceterritory: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_resourceterritory' },
			RegardingObjectId_msdyn_rma: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rma' },
			RegardingObjectId_msdyn_rmaproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rmaproduct' },
			RegardingObjectId_msdyn_rmareceipt: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rmareceipt' },
			RegardingObjectId_msdyn_rmareceiptproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rmareceiptproduct' },
			RegardingObjectId_msdyn_rmasubstatus: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rmasubstatus' },
			RegardingObjectId_msdyn_rtv: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rtv' },
			RegardingObjectId_msdyn_rtvproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rtvproduct' },
			RegardingObjectId_msdyn_rtvsubstatus: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_rtvsubstatus' },
			RegardingObjectId_msdyn_shipvia: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_shipvia' },
			RegardingObjectId_msdyn_systemuserschedulersetting: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_systemuserschedulersetting' },
			RegardingObjectId_msdyn_timegroup: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_timegroup' },
			RegardingObjectId_msdyn_timegroupdetail: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_timegroupdetail' },
			RegardingObjectId_msdyn_timeoffrequest: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_timeoffrequest' },
			RegardingObjectId_msdyn_warehouse: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_warehouse' },
			RegardingObjectId_msdyn_workorder: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workorder' },
			RegardingObjectId_msdyn_workordercharacteristic: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workordercharacteristic' },
			RegardingObjectId_msdyn_workorderincident: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workorderincident' },
			RegardingObjectId_msdyn_workorderproduct: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workorderproduct' },
			RegardingObjectId_msdyn_workorderresourcerestriction: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workorderresourcerestriction' },
			RegardingObjectId_msdyn_workorderservice: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workorderservice' },
			RegardingObjectId_msdyn_workorderservicetask: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'msdyn_workorderservicetask' },
			RegardingObjectId_opportunity: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'opportunity' },
			RegardingObjectId_quote: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'quote' },
			RegardingObjectId_salesorder: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'salesorder' },
			RegardingObjectId_site: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'site' },
			RegardingObjectId_uii_action: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_action' },
			RegardingObjectId_uii_hostedapplication: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_hostedapplication' },
			RegardingObjectId_uii_nonhostedapplication: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_nonhostedapplication' },
			RegardingObjectId_uii_option: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_option' },
			RegardingObjectId_uii_savedsession: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_savedsession' },
			RegardingObjectId_uii_workflow: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_workflow' },
			RegardingObjectId_uii_workflowstep: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_workflowstep' },
			RegardingObjectId_uii_workflow_workflowstep_mapping: { b: 'regardingobjectid', a: '_regardingobjectid_value', d: 'uii_workflow_workflowstep_mapping' },
			ReminderActionCardId: { a: 'reminderactioncardid' },
			ReplyCount: { a: 'replycount', r: true },
			ReservedForInternalUse: { a: 'reservedforinternaluse' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			Sender: { a: 'sender' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', d: 'mailbox', r: true },
			SendersAccount: { b: 'sendersaccount', a: '_sendersaccount_value', d: 'account', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subcategory: { a: 'subcategory' },
			Subject: { a: 'subject' },
			SubmittedBy: { a: 'submittedby' },
			TemplateId: { b: 'templateid', a: '_templateid_value', d: 'template' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			to_account: { b: 'to', a: '_to_value', d: 'account' },
			to_contact: { b: 'to', a: '_to_value', d: 'contact' },
			to_entitlement: { b: 'to', a: '_to_value', d: 'entitlement' },
			to_equipment: { b: 'to', a: '_to_value', d: 'equipment' },
			to_knowledgearticle: { b: 'to', a: '_to_value', d: 'knowledgearticle' },
			to_lead: { b: 'to', a: '_to_value', d: 'lead' },
			to_queue: { b: 'to', a: '_to_value', d: 'queue' },
			to_systemuser: { b: 'to', a: '_to_value', d: 'systemuser' },
			to_unresolvedaddress: { b: 'to', a: '_to_value', d: 'unresolvedaddress' },
			ToRecipients: { a: 'torecipients' },
			TrackingToken: { a: 'trackingtoken' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in email) {
			var a = email[field].a;
			var b = email[field].b;
			var c = email[field].c;
			var d = email[field].d;
			var g = email[field].g;
			var r = email[field].r;
			email[field] = webApiField(e, a, b, c, d, r, u, g);
		}
