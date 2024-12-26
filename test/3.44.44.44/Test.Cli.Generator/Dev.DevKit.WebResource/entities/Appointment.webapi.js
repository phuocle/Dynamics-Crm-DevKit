'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AppointmentApi = function (e) {
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
		var _appointment = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			AttachmentCount: { a: 'attachmentcount', r: true },
			AttachmentErrors: { a: 'attachmenterrors' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			FormattedScheduledEnd_TimezoneDateAndTime: { a: 'formattedscheduledend', r: true },
			FormattedScheduledStart_TimezoneDateAndTime: { a: 'formattedscheduledstart', r: true },
			GlobalObjectId: { a: 'globalobjectid' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			IsAllDayEvent: { a: 'isalldayevent' },
			IsBilled: { a: 'isbilled' },
			IsDraft: { a: 'isdraft' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsOnlineMeeting: { a: 'isonlinemeeting' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsUnsafe: { a: 'isunsafe', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedFieldsMask: { a: 'modifiedfieldsmask', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyncrm_ActivityId: { a: 'msdyncrm_activityid' },
			msdyncrm_associatedcustomerjourneyiteration: { b: 'msdyncrm_associatedcustomerjourneyiteration', a: '_msdyncrm_associatedcustomerjourneyiteration_value', c: 'msdyncrm_customerjourneyiterations', d: 'msdyncrm_customerjourneyiteration' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OnlineMeetingChatId: { a: 'onlinemeetingchatid' },
			OnlineMeetingId: { a: 'onlinemeetingid' },
			OnlineMeetingJoinUrl: { a: 'onlinemeetingjoinurl' },
			OnlineMeetingType: { a: 'onlinemeetingtype' },
			OriginalStartDate_UtcDateAndTime: { a: 'originalstartdate', r: true },
			OutlookOwnerApptId: { a: 'outlookownerapptid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_appointment: { b: 'regardingobjectid_account_appointment', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adx_invitation_appointment: { b: 'regardingobjectid_adx_invitation_appointment', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			regardingobjectid_bookableresourcebooking_appointment: { b: 'regardingobjectid_bookableresourcebooking_appointment', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_appointment: { b: 'regardingobjectid_bookableresourcebookingheader_appointment', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_appointment: { b: 'regardingobjectid_bulkoperation_appointment', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_appointment: { b: 'regardingobjectid_campaign_appointment', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_appointment: { b: 'regardingobjectid_campaignactivity_appointment', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_appointment: { b: 'regardingobjectid_contact_appointment', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_appointment: { b: 'regardingobjectid_contract_appointment', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_appointment: { b: 'regardingobjectid_entitlement_appointment', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_appointment: { b: 'regardingobjectid_entitlementtemplate_appointment', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_appointment: { b: 'regardingobjectid_incident_appointment', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_appointment: { b: 'regardingobjectid_invoice_appointment', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_appointment: { b: 'regardingobjectid_knowledgearticle_appointment', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_appointment: { b: 'regardingobjectid_knowledgebaserecord_appointment', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_appointment: { b: 'regardingobjectid_lead_appointment', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyncrm_contentsettings_appointment: { b: 'regardingobjectid_msdyncrm_contentsettings_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			regardingobjectid_msdyncrm_customerjourney_appointment: { b: 'regardingobjectid_msdyncrm_customerjourney_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			regardingobjectid_msdyncrm_leadscoremodel_appointment: { b: 'regardingobjectid_msdyncrm_leadscoremodel_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_leadscoremodels', d: 'msdyncrm_leadscoremodel' },
			regardingobjectid_msdyncrm_linkedinaccount_appointment: { b: 'regardingobjectid_msdyncrm_linkedinaccount_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			regardingobjectid_msdyncrm_linkedinactivity_appointment: { b: 'regardingobjectid_msdyncrm_linkedinactivity_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinactivities', d: 'msdyncrm_linkedinactivity' },
			regardingobjectid_msdyncrm_linkedinfieldmapping_appointment: { b: 'regardingobjectid_msdyncrm_linkedinfieldmapping_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinfieldmappings', d: 'msdyncrm_linkedinfieldmapping' },
			regardingobjectid_msdyncrm_linkedinform_appointment: { b: 'regardingobjectid_msdyncrm_linkedinform_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			regardingobjectid_msdyncrm_linkedinformanswer_appointment: { b: 'regardingobjectid_msdyncrm_linkedinformanswer_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformanswers', d: 'msdyncrm_linkedinformanswer' },
			regardingobjectid_msdyncrm_linkedinformquestion_appointment: { b: 'regardingobjectid_msdyncrm_linkedinformquestion_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformquestions', d: 'msdyncrm_linkedinformquestion' },
			regardingobjectid_msdyncrm_linkedinformsubmission_appointment: { b: 'regardingobjectid_msdyncrm_linkedinformsubmission_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformsubmissions', d: 'msdyncrm_linkedinformsubmission' },
			regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_appointment: { b: 'regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinleadmatchingstrategies', d: 'msdyncrm_linkedinleadmatchingstrategy' },
			regardingobjectid_msdyncrm_linkedinuserprofile_appointment: { b: 'regardingobjectid_msdyncrm_linkedinuserprofile_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_appointment: { b: 'regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_marketingdynamiccontentmetadatas', d: 'msdyncrm_marketingdynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_appointment: { b: 'regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemaildynamiccontentmetadatas', d: 'msdyncrm_marketingemaildynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemailtestsend_appointment: { b: 'regardingobjectid_msdyncrm_marketingemailtestsend_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemailtestsends', d: 'msdyncrm_marketingemailtestsend' },
			regardingobjectid_msdyncrm_migration_appointment: { b: 'regardingobjectid_msdyncrm_migration_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_migrations', d: 'msdyncrm_migration' },
			regardingobjectid_msdyncrm_uicconfig_appointment: { b: 'regardingobjectid_msdyncrm_uicconfig_appointment', a: '_regardingobjectid_value', c: 'msdyncrm_uicconfigs', d: 'msdyncrm_uicconfig' },
			regardingobjectid_msdyn_agreement_appointment: { b: 'regardingobjectid_msdyn_agreement_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_appointment: { b: 'regardingobjectid_msdyn_agreementbookingdate_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_appointment: { b: 'regardingobjectid_msdyn_agreementbookingincident_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_appointment: { b: 'regardingobjectid_msdyn_agreementbookingproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_appointment: { b: 'regardingobjectid_msdyn_agreementbookingservice_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_appointment: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_appointment: { b: 'regardingobjectid_msdyn_agreementbookingsetup_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_appointment: { b: 'regardingobjectid_msdyn_agreementinvoicedate_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_appointment: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_appointment: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_appointment', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_appointment: { b: 'regardingobjectid_msdyn_bookingalertstatus_appointment', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_appointment: { b: 'regardingobjectid_msdyn_bookingrule_appointment', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_appointment: { b: 'regardingobjectid_msdyn_bookingtimestamp_appointment', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_appointment: { b: 'regardingobjectid_msdyn_customerasset_appointment', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_appointment: { b: 'regardingobjectid_msdyn_fieldservicesetting_appointment', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_appointment: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_appointment', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_appointment: { b: 'regardingobjectid_msdyn_incidenttypeproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_appointment: { b: 'regardingobjectid_msdyn_incidenttypeservice_appointment', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_appointment: { b: 'regardingobjectid_msdyn_inventoryadjustment_appointment', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_appointment: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_appointment: { b: 'regardingobjectid_msdyn_inventoryjournal_appointment', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_appointment: { b: 'regardingobjectid_msdyn_inventorytransfer_appointment', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_appointment: { b: 'regardingobjectid_msdyn_payment_appointment', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_appointment: { b: 'regardingobjectid_msdyn_paymentdetail_appointment', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_appointment: { b: 'regardingobjectid_msdyn_paymentmethod_appointment', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_appointment: { b: 'regardingobjectid_msdyn_paymentterm_appointment', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_appointment: { b: 'regardingobjectid_msdyn_playbookinstance_appointment', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_appointment: { b: 'regardingobjectid_msdyn_postalbum_appointment', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_appointment: { b: 'regardingobjectid_msdyn_postalcode_appointment', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_productinventory_appointment: { b: 'regardingobjectid_msdyn_productinventory_appointment', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_purchaseorder_appointment: { b: 'regardingobjectid_msdyn_purchaseorder_appointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_appointment: { b: 'regardingobjectid_msdyn_purchaseorderbill_appointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_appointment: { b: 'regardingobjectid_msdyn_purchaseorderproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_appointment: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_appointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_appointment: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_appointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_appointment: { b: 'regardingobjectid_msdyn_quotebookingincident_appointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_appointment: { b: 'regardingobjectid_msdyn_quotebookingproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_appointment: { b: 'regardingobjectid_msdyn_quotebookingservice_appointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_appointment: { b: 'regardingobjectid_msdyn_quotebookingservicetask_appointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_appointment: { b: 'regardingobjectid_msdyn_resourceterritory_appointment', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_appointment: { b: 'regardingobjectid_msdyn_rma_appointment', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_appointment: { b: 'regardingobjectid_msdyn_rmaproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_appointment: { b: 'regardingobjectid_msdyn_rmareceipt_appointment', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_appointment: { b: 'regardingobjectid_msdyn_rmareceiptproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_appointment: { b: 'regardingobjectid_msdyn_rmasubstatus_appointment', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_appointment: { b: 'regardingobjectid_msdyn_rtv_appointment', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_appointment: { b: 'regardingobjectid_msdyn_rtvproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_appointment: { b: 'regardingobjectid_msdyn_rtvsubstatus_appointment', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_appointment: { b: 'regardingobjectid_msdyn_salessuggestion_appointment', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_appointment: { b: 'regardingobjectid_msdyn_shipvia_appointment', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_swarm_appointment: { b: 'regardingobjectid_msdyn_swarm_appointment', a: '_regardingobjectid_value', c: 'msdyn_swarms', d: 'msdyn_swarm' },
			regardingobjectid_msdyn_systemuserschedulersetting_appointment: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_appointment', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_appointment: { b: 'regardingobjectid_msdyn_timegroup_appointment', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_appointment: { b: 'regardingobjectid_msdyn_timegroupdetail_appointment', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_appointment: { b: 'regardingobjectid_msdyn_timeoffrequest_appointment', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_appointment: { b: 'regardingobjectid_msdyn_warehouse_appointment', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_appointment: { b: 'regardingobjectid_msdyn_workorder_appointment', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_appointment: { b: 'regardingobjectid_msdyn_workordercharacteristic_appointment', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_appointment: { b: 'regardingobjectid_msdyn_workorderincident_appointment', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_appointment: { b: 'regardingobjectid_msdyn_workorderproduct_appointment', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_appointment: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_appointment', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_appointment: { b: 'regardingobjectid_msdyn_workorderservice_appointment', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_appointment: { b: 'regardingobjectid_msdyn_workorderservicetask_appointment', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_msevtmgt_checkin_appointment: { b: 'regardingobjectid_msevtmgt_checkin_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_checkins', d: 'msevtmgt_checkin' },
			regardingobjectid_msevtmgt_event_appointment: { b: 'regardingobjectid_msevtmgt_event_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			regardingobjectid_msevtmgt_eventpurchase_appointment: { b: 'regardingobjectid_msevtmgt_eventpurchase_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchases', d: 'msevtmgt_eventpurchase' },
			regardingobjectid_msevtmgt_eventpurchaseattendee_appointment: { b: 'regardingobjectid_msevtmgt_eventpurchaseattendee_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchaseattendees', d: 'msevtmgt_eventpurchaseattendee' },
			regardingobjectid_msevtmgt_eventpurchasepass_appointment: { b: 'regardingobjectid_msevtmgt_eventpurchasepass_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchasepasses', d: 'msevtmgt_eventpurchasepass' },
			regardingobjectid_msevtmgt_eventregistration_appointment: { b: 'regardingobjectid_msevtmgt_eventregistration_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			regardingobjectid_msevtmgt_hotel_appointment: { b: 'regardingobjectid_msevtmgt_hotel_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_hotels', d: 'msevtmgt_hotel' },
			regardingobjectid_msevtmgt_hotelroomallocation_appointment: { b: 'regardingobjectid_msevtmgt_hotelroomallocation_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomallocations', d: 'msevtmgt_hotelroomallocation' },
			regardingobjectid_msevtmgt_hotelroomreservation_appointment: { b: 'regardingobjectid_msevtmgt_hotelroomreservation_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomreservations', d: 'msevtmgt_hotelroomreservation' },
			regardingobjectid_msevtmgt_layout_appointment: { b: 'regardingobjectid_msevtmgt_layout_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			regardingobjectid_msevtmgt_room_appointment: { b: 'regardingobjectid_msevtmgt_room_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			regardingobjectid_msevtmgt_session_appointment: { b: 'regardingobjectid_msevtmgt_session_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			regardingobjectid_msevtmgt_sessionregistration_appointment: { b: 'regardingobjectid_msevtmgt_sessionregistration_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_sessionregistrations', d: 'msevtmgt_sessionregistration' },
			regardingobjectid_msevtmgt_sessiontrack_appointment: { b: 'regardingobjectid_msevtmgt_sessiontrack_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_sessiontracks', d: 'msevtmgt_sessiontrack' },
			regardingobjectid_msevtmgt_speaker_appointment: { b: 'regardingobjectid_msevtmgt_speaker_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			regardingobjectid_msevtmgt_speakerengagement_appointment: { b: 'regardingobjectid_msevtmgt_speakerengagement_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_speakerengagements', d: 'msevtmgt_speakerengagement' },
			regardingobjectid_msevtmgt_sponsorablearticle_appointment: { b: 'regardingobjectid_msevtmgt_sponsorablearticle_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorablearticles', d: 'msevtmgt_sponsorablearticle' },
			regardingobjectid_msevtmgt_sponsorship_appointment: { b: 'regardingobjectid_msevtmgt_sponsorship_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorships', d: 'msevtmgt_sponsorship' },
			regardingobjectid_msevtmgt_venue_appointment: { b: 'regardingobjectid_msevtmgt_venue_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			regardingobjectid_msevtmgt_webinarconfiguration_appointment: { b: 'regardingobjectid_msevtmgt_webinarconfiguration_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			regardingobjectid_msevtmgt_webinarprovider_appointment: { b: 'regardingobjectid_msevtmgt_webinarprovider_appointment', a: '_regardingobjectid_value', c: 'msevtmgt_webinarproviders', d: 'msevtmgt_webinarprovider' },
			regardingobjectid_mspp_adplacement_appointment: { b: 'regardingobjectid_mspp_adplacement_appointment', a: '_regardingobjectid_value', c: 'mspp_adplacements', d: 'mspp_adplacement' },
			regardingobjectid_mspp_pollplacement_appointment: { b: 'regardingobjectid_mspp_pollplacement_appointment', a: '_regardingobjectid_value', c: 'mspp_pollplacements', d: 'mspp_pollplacement' },
			regardingobjectid_mspp_publishingstatetransitionrule_appointment: { b: 'regardingobjectid_mspp_publishingstatetransitionrule_appointment', a: '_regardingobjectid_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			regardingobjectid_mspp_redirect_appointment: { b: 'regardingobjectid_mspp_redirect_appointment', a: '_regardingobjectid_value', c: 'mspp_redirects', d: 'mspp_redirect' },
			regardingobjectid_mspp_shortcut_appointment: { b: 'regardingobjectid_mspp_shortcut_appointment', a: '_regardingobjectid_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			regardingobjectid_mspp_website_appointment: { b: 'regardingobjectid_mspp_website_appointment', a: '_regardingobjectid_value', c: 'mspp_websites', d: 'mspp_website' },
			regardingobjectid_opportunity_appointment: { b: 'regardingobjectid_opportunity_appointment', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_appointment: { b: 'regardingobjectid_quote_appointment', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_appointment: { b: 'regardingobjectid_salesorder_appointment', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_appointment: { b: 'regardingobjectid_site_appointment', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
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
			SubscriptionId: { a: 'subscriptionid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var appointment = {};
		appointment.ODataEntity = e;
		appointment.FormattedValue = {};
		for (var field in _appointment) {
			var a = _appointment[field].a;
			var b = _appointment[field].b;
			var c = _appointment[field].c;
			var d = _appointment[field].d;
			var g = _appointment[field].g;
			var r = _appointment[field].r;
			webApiField(appointment, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(appointment, 'ActivityParties', {
			get: function () { return e['appointment_activity_parties']; },
			set: function (value) {
				e['appointment_activity_parties'] = value;
				u['appointment_activity_parties'] = value;
			}
		});
		appointment.Entity = u;
		appointment.EntityName = 'appointment';
		appointment.EntityCollectionName = 'appointments';
		appointment['@odata.etag'] = e['@odata.etag'];
		appointment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		appointment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return appointment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Appointment = {
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
		AttachmentErrors : {
			None: 0,
			The_appointment_was_saved_as_a_Microsoft_Dynamics_365_appointment_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid: 1
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		OnlineMeetingType : {
			Teams_Meeting: 1
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RegardingObjectTypeCode : {
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0,
			Scheduled: 3
		},
		StatusCode : {
			Busy: 5,
			Canceled: 4,
			Completed: 3,
			Free: 1,
			Out_of_Office: 6,
			Tentative: 2
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