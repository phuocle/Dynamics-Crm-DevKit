'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msfp_surveyresponseApi = function (e) {
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
		var msfp_surveyresponse = {
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
			msfp_embedcontextparameters: { a: 'msfp_embedcontextparameters' },
			msfp_language: { a: 'msfp_language' },
			msfp_locale: { a: 'msfp_locale' },
			msfp_name: { a: 'msfp_name' },
			msfp_npsscore: { a: 'msfp_npsscore' },
			msfp_otherproperties: { a: 'msfp_otherproperties' },
			msfp_parentsurveyresponse: { b: 'msfp_parentsurveyresponse', a: '_msfp_parentsurveyresponse_value', c: '', d: '' },
			msfp_respondent: { a: 'msfp_respondent' },
			msfp_respondentemailaddress: { a: 'msfp_respondentemailaddress' },
			msfp_sentiment: { a: 'msfp_sentiment' },
			msfp_sourceresponseidentifier: { a: 'msfp_sourceresponseidentifier' },
			msfp_sourcesurveyidentifier: { a: 'msfp_sourcesurveyidentifier' },
			msfp_Startdate_UtcDateOnly: { a: 'msfp_startdate' },
			msfp_submitdate_UtcDateOnly: { a: 'msfp_submitdate' },
			msfp_surveyid: { b: 'msfp_surveyid', a: '_msfp_surveyid_value', c: 'msfp_surveies', d: 'msfp_survey' },
			msfp_surveyinviteid: { b: 'msfp_surveyinviteid', a: '_msfp_surveyinviteid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			msfp_surveyresponse: { a: 'msfp_surveyresponse' },
			msfp_surveyresponseurl: { a: 'msfp_surveyresponseurl' },
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
			regardingobjectid_account_msfp_surveyresponse: { b: 'regardingobjectid_account_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adobe_migratedrecord_msfp_surveyresponse: { b: 'regardingobjectid_adobe_migratedrecord_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'adobe_migratedrecords', d: 'adobe_migratedrecord' },
			regardingobjectid_adobe_templatedocument_msfp_surveyresponse: { b: 'regardingobjectid_adobe_templatedocument_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'adobe_templatedocuments', d: 'adobe_templatedocument' },
			regardingobjectid_bookableresourcebooking_msfp_surveyresponse: { b: 'regardingobjectid_bookableresourcebooking_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse: { b: 'regardingobjectid_bookableresourcebookingheader_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_msfp_surveyresponse: { b: 'regardingobjectid_bulkoperation_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_msfp_surveyresponse: { b: 'regardingobjectid_campaign_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_msfp_surveyresponse: { b: 'regardingobjectid_campaignactivity_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_msfp_surveyresponse: { b: 'regardingobjectid_contact_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_msfp_surveyresponse: { b: 'regardingobjectid_contract_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_msfp_surveyresponse: { b: 'regardingobjectid_entitlement_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_msfp_surveyresponse: { b: 'regardingobjectid_entitlementtemplate_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_msfp_surveyresponse: { b: 'regardingobjectid_incident_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_msfp_surveyresponse: { b: 'regardingobjectid_new_interactionforemail_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice_msfp_surveyresponse: { b: 'regardingobjectid_invoice_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_msfp_surveyresponse: { b: 'regardingobjectid_knowledgearticle_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_msfp_surveyresponse: { b: 'regardingobjectid_knowledgebaserecord_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_msfp_surveyresponse: { b: 'regardingobjectid_lead_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreement_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementbookingdate_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementbookingincident_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementbookingproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementbookingservice_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementbookingsetup_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementinvoicedate_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_bookingalertstatus_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_bookingrule_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_bookingtimestamp_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_customerasset_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_fieldservicesetting_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_incidenttypeproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_incidenttypeservice_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_inventoryadjustment_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_inventoryjournal_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_inventorytransfer_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_payment_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_paymentdetail_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_paymentmethod_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_paymentterm_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_playbookinstance_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_postalbum_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_postalcode_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_processnotes_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_productinventory_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_projectteam_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_purchaseorder_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_purchaseorderbill_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_purchaseorderproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_quotebookingincident_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_quotebookingproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_quotebookingservice_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_quotebookingservicetask_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_resourceterritory_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rma_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rmaproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rmareceipt_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rmareceiptproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rmasubstatus_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rtv_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rtvproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_rtvsubstatus_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_shipvia_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_shipvia_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_timegroup_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_timegroupdetail_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_timeoffrequest_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_warehouse_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workorder_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workordercharacteristic_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workorderincident_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workorderproduct_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workorderservice_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_msfp_surveyresponse: { b: 'regardingobjectid_msdyn_workorderservicetask_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_msfp_surveyresponse: { b: 'regardingobjectid_opportunity_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_msfp_surveyresponse: { b: 'regardingobjectid_quote_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_msfp_surveyresponse: { b: 'regardingobjectid_salesorder_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_msfp_surveyresponse: { b: 'regardingobjectid_site_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_msfp_surveyresponse: { b: 'regardingobjectid_uii_action_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_msfp_surveyresponse: { b: 'regardingobjectid_uii_hostedapplication_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_msfp_surveyresponse: { b: 'regardingobjectid_uii_nonhostedapplication_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_msfp_surveyresponse: { b: 'regardingobjectid_uii_option_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_msfp_surveyresponse: { b: 'regardingobjectid_uii_savedsession_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_msfp_surveyresponse: { b: 'regardingobjectid_uii_workflow_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_msfp_surveyresponse: { b: 'regardingobjectid_uii_workflowstep_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_msfp_surveyresponse: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_msfp_surveyresponse', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SeriesId: { a: 'seriesid', r: true },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SLAName: { a: 'slaname', r: true },
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
		for (var field in msfp_surveyresponse) {
			var a = msfp_surveyresponse[field].a;
			var b = msfp_surveyresponse[field].b;
			var c = msfp_surveyresponse[field].c;
			var d = msfp_surveyresponse[field].d;
			var g = msfp_surveyresponse[field].g;
			var r = msfp_surveyresponse[field].r;
			msfp_surveyresponse[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(msfp_surveyresponse, 'ActivityParties', {
			get: function () { return e['msfp_surveyresponse_activity_parties']; },
			set: function (value) {
				e['msfp_surveyresponse_activity_parties'] = value;
				u['msfp_surveyresponse_activity_parties'] = value;
			}
		});
		msfp_surveyresponse.Entity = u;
		msfp_surveyresponse.EntityName = 'msfp_surveyresponse';
		msfp_surveyresponse.EntityCollectionName = 'msfp_surveyresponses';
		msfp_surveyresponse['@odata.etag'] = e['@odata.etag'];
		msfp_surveyresponse.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msfp_surveyresponse.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msfp_surveyresponse;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msfp_surveyresponse = {
		Community : {
			Facebook: 1,
			Twitter: 2,
			Other: 0
		},
		DeliveryPriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Master: 1,
			Recurring_Instance: 2,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4
		},
		msfp_sentiment : {
			Positive: 647390000,
			Neutral: 647390001,
			Negative: 647390002
		},
		PriorityCode : {
			Low: 0,
			Normal: 1,
			High: 2
		},
		StateCode : {
			Open: 0,
			Completed: 1,
			Canceled: 2,
			Scheduled: 3
		},
		StatusCode : {
			Open: 1,
			Completed: 2,
			Canceled: 3,
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