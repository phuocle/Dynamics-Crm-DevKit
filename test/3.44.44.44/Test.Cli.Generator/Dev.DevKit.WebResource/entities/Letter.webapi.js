'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.LetterApi = function (e) {
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
		var _letter = {
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
			Address: { a: 'address' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsBilled: { a: 'isbilled' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
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
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_letter: { b: 'regardingobjectid_account_letter', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adx_invitation_letter: { b: 'regardingobjectid_adx_invitation_letter', a: '_regardingobjectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			regardingobjectid_bookableresourcebooking_letter: { b: 'regardingobjectid_bookableresourcebooking_letter', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_letter: { b: 'regardingobjectid_bookableresourcebookingheader_letter', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_letter: { b: 'regardingobjectid_bulkoperation_letter', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_letter: { b: 'regardingobjectid_campaign_letter', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_letter: { b: 'regardingobjectid_campaignactivity_letter', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_letter: { b: 'regardingobjectid_contact_letter', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_letter: { b: 'regardingobjectid_contract_letter', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_letter: { b: 'regardingobjectid_entitlement_letter', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_letter: { b: 'regardingobjectid_entitlementtemplate_letter', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_letter: { b: 'regardingobjectid_incident_letter', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_letter: { b: 'regardingobjectid_invoice_letter', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_letter: { b: 'regardingobjectid_knowledgearticle_letter', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_letter: { b: 'regardingobjectid_knowledgebaserecord_letter', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_letter: { b: 'regardingobjectid_lead_letter', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyncrm_contentsettings_letter: { b: 'regardingobjectid_msdyncrm_contentsettings_letter', a: '_regardingobjectid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			regardingobjectid_msdyncrm_customerjourney_letter: { b: 'regardingobjectid_msdyncrm_customerjourney_letter', a: '_regardingobjectid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			regardingobjectid_msdyncrm_leadscoremodel_letter: { b: 'regardingobjectid_msdyncrm_leadscoremodel_letter', a: '_regardingobjectid_value', c: 'msdyncrm_leadscoremodels', d: 'msdyncrm_leadscoremodel' },
			regardingobjectid_msdyncrm_linkedinaccount_letter: { b: 'regardingobjectid_msdyncrm_linkedinaccount_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			regardingobjectid_msdyncrm_linkedinactivity_letter: { b: 'regardingobjectid_msdyncrm_linkedinactivity_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinactivities', d: 'msdyncrm_linkedinactivity' },
			regardingobjectid_msdyncrm_linkedinfieldmapping_letter: { b: 'regardingobjectid_msdyncrm_linkedinfieldmapping_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinfieldmappings', d: 'msdyncrm_linkedinfieldmapping' },
			regardingobjectid_msdyncrm_linkedinform_letter: { b: 'regardingobjectid_msdyncrm_linkedinform_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			regardingobjectid_msdyncrm_linkedinformanswer_letter: { b: 'regardingobjectid_msdyncrm_linkedinformanswer_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformanswers', d: 'msdyncrm_linkedinformanswer' },
			regardingobjectid_msdyncrm_linkedinformquestion_letter: { b: 'regardingobjectid_msdyncrm_linkedinformquestion_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformquestions', d: 'msdyncrm_linkedinformquestion' },
			regardingobjectid_msdyncrm_linkedinformsubmission_letter: { b: 'regardingobjectid_msdyncrm_linkedinformsubmission_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinformsubmissions', d: 'msdyncrm_linkedinformsubmission' },
			regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_letter: { b: 'regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinleadmatchingstrategies', d: 'msdyncrm_linkedinleadmatchingstrategy' },
			regardingobjectid_msdyncrm_linkedinuserprofile_letter: { b: 'regardingobjectid_msdyncrm_linkedinuserprofile_letter', a: '_regardingobjectid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_letter: { b: 'regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_letter', a: '_regardingobjectid_value', c: 'msdyncrm_marketingdynamiccontentmetadatas', d: 'msdyncrm_marketingdynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_letter: { b: 'regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_letter', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemaildynamiccontentmetadatas', d: 'msdyncrm_marketingemaildynamiccontentmetadata' },
			regardingobjectid_msdyncrm_marketingemailtestsend_letter: { b: 'regardingobjectid_msdyncrm_marketingemailtestsend_letter', a: '_regardingobjectid_value', c: 'msdyncrm_marketingemailtestsends', d: 'msdyncrm_marketingemailtestsend' },
			regardingobjectid_msdyncrm_migration_letter: { b: 'regardingobjectid_msdyncrm_migration_letter', a: '_regardingobjectid_value', c: 'msdyncrm_migrations', d: 'msdyncrm_migration' },
			regardingobjectid_msdyncrm_uicconfig_letter: { b: 'regardingobjectid_msdyncrm_uicconfig_letter', a: '_regardingobjectid_value', c: 'msdyncrm_uicconfigs', d: 'msdyncrm_uicconfig' },
			regardingobjectid_msdyn_agreement_letter: { b: 'regardingobjectid_msdyn_agreement_letter', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_letter: { b: 'regardingobjectid_msdyn_agreementbookingdate_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_letter: { b: 'regardingobjectid_msdyn_agreementbookingincident_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_letter: { b: 'regardingobjectid_msdyn_agreementbookingproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_letter: { b: 'regardingobjectid_msdyn_agreementbookingservice_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_letter: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_letter: { b: 'regardingobjectid_msdyn_agreementbookingsetup_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_letter: { b: 'regardingobjectid_msdyn_agreementinvoicedate_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_letter: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_letter: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_letter', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_letter: { b: 'regardingobjectid_msdyn_bookingalertstatus_letter', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_letter: { b: 'regardingobjectid_msdyn_bookingrule_letter', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_letter: { b: 'regardingobjectid_msdyn_bookingtimestamp_letter', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_letter: { b: 'regardingobjectid_msdyn_customerasset_letter', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_letter: { b: 'regardingobjectid_msdyn_fieldservicesetting_letter', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_letter: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_letter', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_letter: { b: 'regardingobjectid_msdyn_incidenttypeproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_letter: { b: 'regardingobjectid_msdyn_incidenttypeservice_letter', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_letter: { b: 'regardingobjectid_msdyn_inventoryadjustment_letter', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_letter: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_letter: { b: 'regardingobjectid_msdyn_inventoryjournal_letter', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_letter: { b: 'regardingobjectid_msdyn_inventorytransfer_letter', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_letter: { b: 'regardingobjectid_msdyn_payment_letter', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_letter: { b: 'regardingobjectid_msdyn_paymentdetail_letter', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_letter: { b: 'regardingobjectid_msdyn_paymentmethod_letter', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_letter: { b: 'regardingobjectid_msdyn_paymentterm_letter', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_letter: { b: 'regardingobjectid_msdyn_playbookinstance_letter', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_letter: { b: 'regardingobjectid_msdyn_postalbum_letter', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_letter: { b: 'regardingobjectid_msdyn_postalcode_letter', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_productinventory_letter: { b: 'regardingobjectid_msdyn_productinventory_letter', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_purchaseorder_letter: { b: 'regardingobjectid_msdyn_purchaseorder_letter', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_letter: { b: 'regardingobjectid_msdyn_purchaseorderbill_letter', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_letter: { b: 'regardingobjectid_msdyn_purchaseorderproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_letter: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_letter', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_letter: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_letter: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_letter', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_letter: { b: 'regardingobjectid_msdyn_quotebookingincident_letter', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_letter: { b: 'regardingobjectid_msdyn_quotebookingproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_letter: { b: 'regardingobjectid_msdyn_quotebookingservice_letter', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_letter: { b: 'regardingobjectid_msdyn_quotebookingservicetask_letter', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_letter: { b: 'regardingobjectid_msdyn_resourceterritory_letter', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_letter: { b: 'regardingobjectid_msdyn_rma_letter', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_letter: { b: 'regardingobjectid_msdyn_rmaproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_letter: { b: 'regardingobjectid_msdyn_rmareceipt_letter', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_letter: { b: 'regardingobjectid_msdyn_rmareceiptproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_letter: { b: 'regardingobjectid_msdyn_rmasubstatus_letter', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_letter: { b: 'regardingobjectid_msdyn_rtv_letter', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_letter: { b: 'regardingobjectid_msdyn_rtvproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_letter: { b: 'regardingobjectid_msdyn_rtvsubstatus_letter', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_letter: { b: 'regardingobjectid_msdyn_salessuggestion_letter', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_letter: { b: 'regardingobjectid_msdyn_shipvia_letter', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_swarm_letter: { b: 'regardingobjectid_msdyn_swarm_letter', a: '_regardingobjectid_value', c: 'msdyn_swarms', d: 'msdyn_swarm' },
			regardingobjectid_msdyn_systemuserschedulersetting_letter: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_letter', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_letter: { b: 'regardingobjectid_msdyn_timegroup_letter', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_letter: { b: 'regardingobjectid_msdyn_timegroupdetail_letter', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_letter: { b: 'regardingobjectid_msdyn_timeoffrequest_letter', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_letter: { b: 'regardingobjectid_msdyn_warehouse_letter', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_letter: { b: 'regardingobjectid_msdyn_workorder_letter', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_letter: { b: 'regardingobjectid_msdyn_workordercharacteristic_letter', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_letter: { b: 'regardingobjectid_msdyn_workorderincident_letter', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_letter: { b: 'regardingobjectid_msdyn_workorderproduct_letter', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_letter: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_letter', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_letter: { b: 'regardingobjectid_msdyn_workorderservice_letter', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_letter: { b: 'regardingobjectid_msdyn_workorderservicetask_letter', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_msevtmgt_checkin_letter: { b: 'regardingobjectid_msevtmgt_checkin_letter', a: '_regardingobjectid_value', c: 'msevtmgt_checkins', d: 'msevtmgt_checkin' },
			regardingobjectid_msevtmgt_event_letter: { b: 'regardingobjectid_msevtmgt_event_letter', a: '_regardingobjectid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			regardingobjectid_msevtmgt_eventpurchase_letter: { b: 'regardingobjectid_msevtmgt_eventpurchase_letter', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchases', d: 'msevtmgt_eventpurchase' },
			regardingobjectid_msevtmgt_eventpurchaseattendee_letter: { b: 'regardingobjectid_msevtmgt_eventpurchaseattendee_letter', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchaseattendees', d: 'msevtmgt_eventpurchaseattendee' },
			regardingobjectid_msevtmgt_eventpurchasepass_letter: { b: 'regardingobjectid_msevtmgt_eventpurchasepass_letter', a: '_regardingobjectid_value', c: 'msevtmgt_eventpurchasepasses', d: 'msevtmgt_eventpurchasepass' },
			regardingobjectid_msevtmgt_eventregistration_letter: { b: 'regardingobjectid_msevtmgt_eventregistration_letter', a: '_regardingobjectid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			regardingobjectid_msevtmgt_hotel_letter: { b: 'regardingobjectid_msevtmgt_hotel_letter', a: '_regardingobjectid_value', c: 'msevtmgt_hotels', d: 'msevtmgt_hotel' },
			regardingobjectid_msevtmgt_hotelroomallocation_letter: { b: 'regardingobjectid_msevtmgt_hotelroomallocation_letter', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomallocations', d: 'msevtmgt_hotelroomallocation' },
			regardingobjectid_msevtmgt_hotelroomreservation_letter: { b: 'regardingobjectid_msevtmgt_hotelroomreservation_letter', a: '_regardingobjectid_value', c: 'msevtmgt_hotelroomreservations', d: 'msevtmgt_hotelroomreservation' },
			regardingobjectid_msevtmgt_layout_letter: { b: 'regardingobjectid_msevtmgt_layout_letter', a: '_regardingobjectid_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			regardingobjectid_msevtmgt_room_letter: { b: 'regardingobjectid_msevtmgt_room_letter', a: '_regardingobjectid_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			regardingobjectid_msevtmgt_session_letter: { b: 'regardingobjectid_msevtmgt_session_letter', a: '_regardingobjectid_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			regardingobjectid_msevtmgt_sessionregistration_letter: { b: 'regardingobjectid_msevtmgt_sessionregistration_letter', a: '_regardingobjectid_value', c: 'msevtmgt_sessionregistrations', d: 'msevtmgt_sessionregistration' },
			regardingobjectid_msevtmgt_sessiontrack_letter: { b: 'regardingobjectid_msevtmgt_sessiontrack_letter', a: '_regardingobjectid_value', c: 'msevtmgt_sessiontracks', d: 'msevtmgt_sessiontrack' },
			regardingobjectid_msevtmgt_speaker_letter: { b: 'regardingobjectid_msevtmgt_speaker_letter', a: '_regardingobjectid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			regardingobjectid_msevtmgt_speakerengagement_letter: { b: 'regardingobjectid_msevtmgt_speakerengagement_letter', a: '_regardingobjectid_value', c: 'msevtmgt_speakerengagements', d: 'msevtmgt_speakerengagement' },
			regardingobjectid_msevtmgt_sponsorablearticle_letter: { b: 'regardingobjectid_msevtmgt_sponsorablearticle_letter', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorablearticles', d: 'msevtmgt_sponsorablearticle' },
			regardingobjectid_msevtmgt_sponsorship_letter: { b: 'regardingobjectid_msevtmgt_sponsorship_letter', a: '_regardingobjectid_value', c: 'msevtmgt_sponsorships', d: 'msevtmgt_sponsorship' },
			regardingobjectid_msevtmgt_venue_letter: { b: 'regardingobjectid_msevtmgt_venue_letter', a: '_regardingobjectid_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			regardingobjectid_msevtmgt_webinarconfiguration_letter: { b: 'regardingobjectid_msevtmgt_webinarconfiguration_letter', a: '_regardingobjectid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			regardingobjectid_msevtmgt_webinarprovider_letter: { b: 'regardingobjectid_msevtmgt_webinarprovider_letter', a: '_regardingobjectid_value', c: 'msevtmgt_webinarproviders', d: 'msevtmgt_webinarprovider' },
			regardingobjectid_mspp_adplacement_letter: { b: 'regardingobjectid_mspp_adplacement_letter', a: '_regardingobjectid_value', c: 'mspp_adplacements', d: 'mspp_adplacement' },
			regardingobjectid_mspp_pollplacement_letter: { b: 'regardingobjectid_mspp_pollplacement_letter', a: '_regardingobjectid_value', c: 'mspp_pollplacements', d: 'mspp_pollplacement' },
			regardingobjectid_mspp_publishingstatetransitionrule_letter: { b: 'regardingobjectid_mspp_publishingstatetransitionrule_letter', a: '_regardingobjectid_value', c: 'mspp_publishingstatetransitionrules', d: 'mspp_publishingstatetransitionrule' },
			regardingobjectid_mspp_redirect_letter: { b: 'regardingobjectid_mspp_redirect_letter', a: '_regardingobjectid_value', c: 'mspp_redirects', d: 'mspp_redirect' },
			regardingobjectid_mspp_shortcut_letter: { b: 'regardingobjectid_mspp_shortcut_letter', a: '_regardingobjectid_value', c: 'mspp_shortcuts', d: 'mspp_shortcut' },
			regardingobjectid_mspp_website_letter: { b: 'regardingobjectid_mspp_website_letter', a: '_regardingobjectid_value', c: 'mspp_websites', d: 'mspp_website' },
			regardingobjectid_opportunity_letter: { b: 'regardingobjectid_opportunity_letter', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_letter: { b: 'regardingobjectid_quote_letter', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_letter: { b: 'regardingobjectid_salesorder_letter', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_letter: { b: 'regardingobjectid_site_letter', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
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
		var letter = {};
		letter.ODataEntity = e;
		letter.FormattedValue = {};
		for (var field in _letter) {
			var a = _letter[field].a;
			var b = _letter[field].b;
			var c = _letter[field].c;
			var d = _letter[field].d;
			var g = _letter[field].g;
			var r = _letter[field].r;
			webApiField(letter, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(letter, 'ActivityParties', {
			get: function () { return e['letter_activity_parties']; },
			set: function (value) {
				e['letter_activity_parties'] = value;
				u['letter_activity_parties'] = value;
			}
		});
		letter.Entity = u;
		letter.EntityName = 'letter';
		letter.EntityCollectionName = 'letters';
		letter['@odata.etag'] = e['@odata.etag'];
		letter.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		letter.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return letter;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Letter = {
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
			Open: 0
		},
		StatusCode : {
			Canceled: 5,
			Draft: 2,
			Open: 1,
			Received: 3,
			Sent: 4
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