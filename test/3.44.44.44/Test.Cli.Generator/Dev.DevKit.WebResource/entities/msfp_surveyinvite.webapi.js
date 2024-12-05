'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msfp_surveyinviteApi = function (e) {
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
		var _msfp_surveyinvite = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			Community: { a: 'community' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DeliveryLastAttemptedOn_UtcDateAndTime: { a: 'deliverylastattemptedon', r: true },
			DeliveryPriorityCode: { a: 'deliveryprioritycode' },
			Description: { a: 'description' },
			ExchangeItemId: { a: 'exchangeitemid' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExchangeWebLink: { a: 'exchangeweblink' },
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
			msfp_channel: { a: 'msfp_channel' },
			msfp_contextparameters: { a: 'msfp_contextparameters' },
			msfp_CustomerVoiceSurveyInvite: { a: 'msfp_customervoicesurveyinvite' },
			msfp_emailmessage: { a: 'msfp_emailmessage' },
			msfp_fromemailaddress: { a: 'msfp_fromemailaddress' },
			msfp_invitebouncecategory: { a: 'msfp_invitebouncecategory' },
			msfp_invitebouncedetails: { a: 'msfp_invitebouncedetails' },
			msfp_inviteemailaddress: { a: 'msfp_inviteemailaddress' },
			msfp_invitefailurereason: { a: 'msfp_invitefailurereason' },
			msfp_invitesentdate_UtcDateOnly: { a: 'msfp_invitesentdate' },
			msfp_invitestatus: { a: 'msfp_invitestatus' },
			msfp_invitestatusreason: { a: 'msfp_invitestatusreason' },
			msfp_inviteupdateddate_UtcDateOnly: { a: 'msfp_inviteupdateddate' },
			msfp_isincentiveEnabled: { a: 'msfp_isincentiveenabled' },
			msfp_otherproperties: { a: 'msfp_otherproperties' },
			msfp_respondent: { a: 'msfp_respondent' },
			msfp_sourcesurveyidentifier: { a: 'msfp_sourcesurveyidentifier' },
			msfp_subject: { a: 'msfp_subject' },
			msfp_surveyid: { b: 'msfp_surveyid', a: '_msfp_surveyid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msfp_surveyinvitationurl: { a: 'msfp_surveyinvitationurl' },
			msfp_UnsubscribedRecipientSurveyInviteId: { b: 'msfp_UnsubscribedRecipientSurveyInviteId', a: '_msfp_unsubscribedrecipientsurveyinviteid_value', c: 'msfp_unsubscribedrecipients', d: 'msfp_unsubscribedrecipient' },
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
			regardingobjectid_account_msfp_surveyinvite: { b: 'regardingobjectid_account_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adx_invitation_msfp_surveyinvite: { b: 'regardingobjectid_adx_invitation_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			regardingobjectid_bookableresourcebooking_msfp_surveyinvite: { b: 'regardingobjectid_bookableresourcebooking_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_msfp_surveyinvite: { b: 'regardingobjectid_bookableresourcebookingheader_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_msfp_surveyinvite: { b: 'regardingobjectid_bulkoperation_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_msfp_surveyinvite: { b: 'regardingobjectid_campaign_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_msfp_surveyinvite: { b: 'regardingobjectid_campaignactivity_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_msfp_surveyinvite: { b: 'regardingobjectid_contact_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_msfp_surveyinvite: { b: 'regardingobjectid_contract_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_msfp_surveyinvite: { b: 'regardingobjectid_entitlement_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_msfp_surveyinvite: { b: 'regardingobjectid_entitlementtemplate_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_msfp_surveyinvite: { b: 'regardingobjectid_incident_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_msfp_surveyinvite: { b: 'regardingobjectid_new_interactionforemail_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice_msfp_surveyinvite: { b: 'regardingobjectid_invoice_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_msfp_surveyinvite: { b: 'regardingobjectid_knowledgearticle_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_msfp_surveyinvite: { b: 'regardingobjectid_knowledgebaserecord_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_msfp_surveyinvite: { b: 'regardingobjectid_lead_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyncrm_contentsettings_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_contentsettings_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			regardingobjectid_msdyncrm_customerjourney_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_customerjourney_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			regardingobjectid_msdyncrm_leadscoremodel_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_leadscoremodel_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_leadscoremodels', d: 'msdyncrm_leadscoremodel' },
			regardingobjectid_msdyncrm_linkedinaccount_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinaccount_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			regardingobjectid_msdyncrm_linkedinactivity_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinactivity_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinactivities', d: 'msdyncrm_linkedinactivity' },
			regardingobjectid_msdyncrm_linkedinfieldmapping_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinfieldmapping_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinfieldmappings', d: 'msdyncrm_linkedinfieldmapping' },
			regardingobjectid_msdyncrm_linkedinform_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinform_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			regardingobjectid_msdyncrm_linkedinformanswer_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinformanswer_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformanswers', d: 'msdyncrm_linkedinformanswer' },
			regardingobjectid_msdyncrm_linkedinformquestion_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinformquestion_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformquestions', d: 'msdyncrm_linkedinformquestion' },
			regardingobjectid_msdyncrm_linkedinformsubmission_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinformsubmission_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformsubmissions', d: 'msdyncrm_linkedinformsubmission' },
			regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinleadmatchingstrategies', d: 'msdyncrm_linkedinleadmatchingstrategy' },
			regardingobjectid_msdyncrm_linkedinuserprofile_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_linkedinuserprofile_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_marketingdynamiccontentmetadatas', d: 'msdyncrm_marketingdynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemaildynamiccontentmetadatas', d: 'msdyncrm_marketingemaildynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemailtestsend_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_marketingemailtestsend_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemailtestsends', d: 'msdyncrm_marketingemailtestsend' },
			regardingobjectid_msdyncrm_migration_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_migration_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_migrations', d: 'msdyncrm_migration' },
			regardingobjectid_msdyncrm_uicconfig_msfp_surveyinvite: { b: 'regardingobjectid_msdyncrm_uicconfig_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyncrm_uicconfigs', d: 'msdyncrm_uicconfig' },
			regardingobjectid_msdyn_agreement_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreement_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementbookingdate_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementbookingincident_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementbookingproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementbookingservice_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementbookingsetup_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementinvoicedate_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_bookingalertstatus_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_bookingrule_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_bookingtimestamp_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_customerasset_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_fieldservicesetting_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_incidenttypeproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_incidenttypeservice_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_inventoryadjustment_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_inventoryjournal_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_inventorytransfer_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_payment_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_paymentdetail_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_paymentmethod_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_paymentterm_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_playbookinstance_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_postalbum_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_postalcode_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_productinventory_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_productinventory_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_purchaseorder_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_purchaseorder_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_purchaseorderbill_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_purchaseorderproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_quotebookingincident_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_quotebookingproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_quotebookingservice_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_quotebookingservicetask_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_resourceterritory_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rma_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rmaproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rmareceipt_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rmareceiptproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rmasubstatus_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rtv_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rtvproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_rtvsubstatus_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_salessuggestion_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_shipvia_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_swarm_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_swarm_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_swarms', d: 'msdyn_swarm' },
			regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_timegroup_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_timegroupdetail_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_timeoffrequest_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_warehouse_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workorder_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workordercharacteristic_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workorderincident_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workorderproduct_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workorderservice_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_msfp_surveyinvite: { b: 'regardingobjectid_msdyn_workorderservicetask_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_msevtmgt_checkin_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_checkin_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_checkins', d: 'msevtmgt_checkin' },
			regardingobjectid_msevtmgt_event_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_event_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			regardingobjectid_msevtmgt_eventpurchase_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_eventpurchase_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchases', d: 'msevtmgt_eventpurchase' },
			regardingobjectid_msevtmgt_eventpurchaseattendee_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_eventpurchaseattendee_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchaseattendees', d: 'msevtmgt_eventpurchaseattendee' },
			regardingobjectid_msevtmgt_eventpurchasepass_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_eventpurchasepass_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchasepasses', d: 'msevtmgt_eventpurchasepass' },
			regardingobjectid_msevtmgt_eventregistration_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_eventregistration_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			regardingobjectid_msevtmgt_hotel_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_hotel_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_hotels', d: 'msevtmgt_hotel' },
			regardingobjectid_msevtmgt_hotelroomallocation_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_hotelroomallocation_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomallocations', d: 'msevtmgt_hotelroomallocation' },
			regardingobjectid_msevtmgt_hotelroomreservation_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_hotelroomreservation_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomreservations', d: 'msevtmgt_hotelroomreservation' },
			regardingobjectid_msevtmgt_layout_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_layout_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			regardingobjectid_msevtmgt_room_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_room_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			regardingobjectid_msevtmgt_session_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_session_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			regardingobjectid_msevtmgt_sessionregistration_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_sessionregistration_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_sessionregistrations', d: 'msevtmgt_sessionregistration' },
			regardingobjectid_msevtmgt_sessiontrack_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_sessiontrack_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_sessiontracks', d: 'msevtmgt_sessiontrack' },
			regardingobjectid_msevtmgt_speaker_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_speaker_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			regardingobjectid_msevtmgt_speakerengagement_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_speakerengagement_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_speakerengagements', d: 'msevtmgt_speakerengagement' },
			regardingobjectid_msevtmgt_sponsorablearticle_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_sponsorablearticle_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorablearticles', d: 'msevtmgt_sponsorablearticle' },
			regardingobjectid_msevtmgt_sponsorship_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_sponsorship_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorships', d: 'msevtmgt_sponsorship' },
			regardingobjectid_msevtmgt_venue_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_venue_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			regardingobjectid_msevtmgt_webinarconfiguration_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_webinarconfiguration_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			regardingobjectid_msevtmgt_webinarprovider_msfp_surveyinvite: { b: 'regardingobjectid_msevtmgt_webinarprovider_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'msevtmgt_webinarproviders', d: 'msevtmgt_webinarprovider' },
			regardingobjectid_mspp_adplacement_msfp_surveyinvite: { b: 'regardingobjectid_mspp_adplacement_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'mspp_adplacements', d: 'mspp_adplacement' },
			regardingobjectid_mspp_pollplacement_msfp_surveyinvite: { b: 'regardingobjectid_mspp_pollplacement_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'mspp_pollplacements', d: 'mspp_pollplacement' },
			regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyinvite: { b: 'regardingobjectid_mspp_publishingstatetransitionrule_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			regardingobjectid_mspp_redirect_msfp_surveyinvite: { b: 'regardingobjectid_mspp_redirect_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'mspp_redirects', d: 'mspp_redirect' },
			regardingobjectid_mspp_shortcut_msfp_surveyinvite: { b: 'regardingobjectid_mspp_shortcut_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			regardingobjectid_mspp_website_msfp_surveyinvite: { b: 'regardingobjectid_mspp_website_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'mspp_websites', d: 'mspp_website' },
			regardingobjectid_opportunity_msfp_surveyinvite: { b: 'regardingobjectid_opportunity_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_msfp_surveyinvite: { b: 'regardingobjectid_quote_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_msfp_surveyinvite: { b: 'regardingobjectid_salesorder_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_msfp_surveyinvite: { b: 'regardingobjectid_site_msfp_surveyinvite', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
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
			Subject: { a: 'subject' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msfp_surveyinvite = {};
		msfp_surveyinvite.ODataEntity = e;
		msfp_surveyinvite.FormattedValue = {};
		for (var field in _msfp_surveyinvite) {
			var a = _msfp_surveyinvite[field].a;
			var b = _msfp_surveyinvite[field].b;
			var c = _msfp_surveyinvite[field].c;
			var d = _msfp_surveyinvite[field].d;
			var g = _msfp_surveyinvite[field].g;
			var r = _msfp_surveyinvite[field].r;
			webApiField(msfp_surveyinvite, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(msfp_surveyinvite, 'ActivityParties', {
			get: function () { return e['msfp_surveyinvite_activity_parties']; },
			set: function (value) {
				e['msfp_surveyinvite_activity_parties'] = value;
				u['msfp_surveyinvite_activity_parties'] = value;
			}
		});
		msfp_surveyinvite.Entity = u;
		msfp_surveyinvite.EntityName = 'msfp_surveyinvite';
		msfp_surveyinvite.EntityCollectionName = 'msfp_surveyinvites';
		msfp_surveyinvite['@odata.etag'] = e['@odata.etag'];
		msfp_surveyinvite.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msfp_surveyinvite.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msfp_surveyinvite;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msfp_surveyinvite = {
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
		Community : {
			Apple_Messages_For_Business: 16,
			Cortana: 5,
			Direct_Line: 6,
			Direct_Line_Speech: 8,
			Email: 9,
			Facebook: 1,
			Googles_Business_Messages: 17,
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
		msfp_channel : {
			Email: 647390000,
			Flow: 647390001
		},
		msfp_invitebouncecategory : {
			Blocklisting_issues: 413190007,
			Connection_error: 413190011,
			DMARC_issues: 413190004,
			Email_failed_due_to_unknown_error: 413190015,
			Full_mailbox: 413190003,
			Greylisting_issues: 413190006,
			Inactive_mailbox: 413190002,
			Invalid_domain: 413190001,
			Invalid_mailbox: 413190000,
			Message_expired: 413190013,
			No_Error: 413190016,
			Policy_related: 413190012,
			Recipient_server_error: 413190010,
			Relaying_issues: 413190008,
			Reputation_issues: 413190005,
			Routing_issues: 413190009,
			Suppression_list: 413190014
		},
		msfp_invitefailurereason : {
			Block_bounced: 413190003,
			Cache_block_bounced: 413190010,
			Cache_hard_bounced: 413190011,
			Email_activity_expired: 413190009,
			Email_blocked_by_suppression: 413190012,
			Email_failed_due_to_unknown_error: 413190008,
			Hard_bounced: 413190002,
			Invalid_email_address: 413190004,
			Invalid_recipient_address: 413190005,
			Invalid_reply_to_address: 413190007,
			Invalid_sender_address: 413190006,
			No_Error: 413190013,
			Soft_bounced: 413190001,
			Spam_complaint: 413190000
		},
		msfp_invitestatus : {
			Created: 647390005,
			Delayed: 647390008,
			Failed: 647390004,
			Queued: 647390000,
			Read: 647390006,
			Reminder_failed: 647390011,
			Reminder_in_progress: 647390012,
			Reminder_scheduled: 647390009,
			Reminder_sent: 647390010,
			Responded: 647390003,
			Sent: 647390002,
			Skipped: 647390013,
			Started: 647390007,
			UnSubscribed: 647390001
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
			Canceled: 3,
			Completed: 2,
			Open: 1,
			Scheduled: 4
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