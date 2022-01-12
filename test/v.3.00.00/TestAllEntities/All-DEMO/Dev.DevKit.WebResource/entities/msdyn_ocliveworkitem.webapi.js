'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocliveworkitemApi = function (e) {
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
		var msdyn_ocliveworkitem = {
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
			msdyn_activeagentassignedon_UtcDateAndTime: { a: 'msdyn_activeagentassignedon' },
			msdyn_activeagentid: { b: 'msdyn_activeagentid', a: '_msdyn_activeagentid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_activesessionparticipantid: { b: 'msdyn_activesessionparticipantid', a: '_msdyn_activesessionparticipantid_value', c: 'msdyn_sessionparticipants', d: 'msdyn_sessionparticipant' },
			msdyn_cdsqueueid: { b: 'msdyn_cdsqueueid', a: '_msdyn_cdsqueueid_value', c: 'queues', d: 'queue' },
			msdyn_channel: { a: 'msdyn_channel', g: true },
			msdyn_channelproviderName: { a: 'msdyn_channelproviderName' },
			msdyn_closedon_UtcDateAndTime: { a: 'msdyn_closedon' },
			msdyn_ConversationSummaryField: { a: 'msdyn_conversationsummaryfield' },
			msdyn_createdon_UtcDateAndTime: { a: 'msdyn_createdon' },
			msdyn_customer_msdyn_ocliveworkitem_account: { b: 'msdyn_customer_msdyn_ocliveworkitem_account', a: '_msdyn_customer_value', c: 'accounts', d: 'account' },
			msdyn_customer_msdyn_ocliveworkitem_contact: { b: 'msdyn_customer_msdyn_ocliveworkitem_contact', a: '_msdyn_customer_value', c: 'contacts', d: 'contact' },
			msdyn_customerlanguageid: { b: 'msdyn_customerlanguageid', a: '_msdyn_customerlanguageid_value', c: 'msdyn_oclanguages', d: 'msdyn_oclanguage' },
			msdyn_customerlocale: { a: 'msdyn_customerlocale' },
			msdyn_customersentimentlabel: { a: 'msdyn_customersentimentlabel' },
			msdyn_dailytopicid: { b: 'msdyn_dailytopicid', a: '_msdyn_dailytopicid_value', c: 'msdyn_ocsentimentdailytopics', d: 'msdyn_ocsentimentdailytopic' },
			msdyn_effortpredictionresult: { b: 'msdyn_effortpredictionresult', a: '_msdyn_effortpredictionresult_value', c: 'msdyn_effortpredictionresults', d: 'msdyn_effortpredictionresult' },
			msdyn_escalationcount: { a: 'msdyn_escalationcount' },
			msdyn_initiatedon_UtcDateAndTime: { a: 'msdyn_initiatedon' },
			msdyn_isoutbound: { a: 'msdyn_isoutbound' },
			msdyn_IssueId: { b: 'msdyn_IssueId', a: '_msdyn_issueid_value', c: 'incidents', d: 'incident' },
			msdyn_lastsessionid: { b: 'msdyn_lastsessionid', a: '_msdyn_lastsessionid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_liveworkstreamnotificationdata: { a: 'msdyn_liveworkstreamnotificationdata' },
			msdyn_modifiedon_UtcDateAndTime: { a: 'msdyn_modifiedon' },
			msdyn_ocliveworkitemid1: { a: 'msdyn_ocliveworkitemid' },
			msdyn_queueid: { b: 'msdyn_queueid', a: '_msdyn_queueid_value', c: 'msdyn_omnichannelqueues', d: 'msdyn_omnichannelqueue' },
			msdyn_queueitemid: { b: 'msdyn_queueitemid', a: '_msdyn_queueitemid_value', c: 'queueitems', d: 'queueitem' },
			msdyn_routableobjectid: { b: 'msdyn_routableobjectid', a: '_msdyn_routableobjectid_value', c: 'tasks', d: 'task' },
			msdyn_socialprofileid: { b: 'msdyn_socialprofileid', a: '_msdyn_socialprofileid_value', c: 'socialprofiles', d: 'socialprofile' },
			msdyn_startedon_UtcDateAndTime: { a: 'msdyn_startedon' },
			msdyn_statusupdatedon_UtcDateAndTime: { a: 'msdyn_statusupdatedon' },
			msdyn_thirdpartyconversation: { a: 'msdyn_thirdpartyconversation' },
			msdyn_TimelineControlField: { a: 'msdyn_timelinecontrolfield' },
			msdyn_title: { a: 'msdyn_title' },
			msdyn_TranscriptControl: { a: 'msdyn_transcriptcontrol' },
			msdyn_transfercount: { a: 'msdyn_transfercount' },
			msdyn_urcustomersentimentkeywords: { a: 'msdyn_urcustomersentimentkeywords' },
			msdyn_urcustomersentimentlabel: { a: 'msdyn_urcustomersentimentlabel' },
			msdyn_urcustomersentimentscore: { a: 'msdyn_urcustomersentimentscore' },
			msdyn_workstreamworkdistributionmode: { a: 'msdyn_workstreamworkdistributionmode' },
			msdyn_wrapupinitiatedon_UtcDateAndTime: { a: 'msdyn_wrapupinitiatedon' },
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
			regardingobjectid_account_msdyn_ocliveworkitem: { b: 'regardingobjectid_account_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_msdyn_ocliveworkitem: { b: 'regardingobjectid_bookableresourcebooking_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_msdyn_ocliveworkitem: { b: 'regardingobjectid_bookableresourcebookingheader_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_msdyn_ocliveworkitem: { b: 'regardingobjectid_bulkoperation_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_msdyn_ocliveworkitem: { b: 'regardingobjectid_campaign_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_msdyn_ocliveworkitem: { b: 'regardingobjectid_campaignactivity_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_msdyn_ocliveworkitem: { b: 'regardingobjectid_contact_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_msdyn_ocliveworkitem: { b: 'regardingobjectid_contract_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_msdyn_ocliveworkitem: { b: 'regardingobjectid_entitlement_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_msdyn_ocliveworkitem: { b: 'regardingobjectid_entitlementtemplate_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_msdyn_ocliveworkitem: { b: 'regardingobjectid_incident_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_msdyn_ocliveworkitem: { b: 'regardingobjectid_new_interactionforemail_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice_msdyn_ocliveworkitem: { b: 'regardingobjectid_invoice_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_msdyn_ocliveworkitem: { b: 'regardingobjectid_knowledgearticle_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_msdyn_ocliveworkitem: { b: 'regardingobjectid_knowledgebaserecord_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_msdyn_ocliveworkitem: { b: 'regardingobjectid_lead_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreement_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementbookingdate_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementbookingincident_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementbookingproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementbookingservice_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementbookingsetup_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementinvoicedate_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_bookingalertstatus_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_bookingrule_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_bookingtimestamp_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_fieldservicesetting_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_incidenttypeproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_incidenttypeservice_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_inventoryadjustment_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_inventoryjournal_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_inventorytransfer_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_payment_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_paymentdetail_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_paymentmethod_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_paymentterm_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_playbookinstance_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_postalcode_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_processnotes_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_productinventory_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_projectteam_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_purchaseorder_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_purchaseorderbill_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_purchaseorderproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_quotebookingincident_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_quotebookingproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_quotebookingservice_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_quotebookingservicetask_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_resourceterritory_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rma_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rmaproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rmareceipt_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rmareceiptproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rmasubstatus_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rtv_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rtvproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_rtvsubstatus_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_shipvia_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_shipvia_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_timegroup_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_timegroupdetail_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_timeoffrequest_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_warehouse_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workorder_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workordercharacteristic_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workorderincident_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workorderproduct_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workorderservice_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_msdyn_ocliveworkitem: { b: 'regardingobjectid_msdyn_workorderservicetask_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_msdyn_ocliveworkitem: { b: 'regardingobjectid_opportunity_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_msdyn_ocliveworkitem: { b: 'regardingobjectid_quote_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_msdyn_ocliveworkitem: { b: 'regardingobjectid_salesorder_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_msdyn_ocliveworkitem: { b: 'regardingobjectid_site_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_action_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_hostedapplication_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_nonhostedapplication_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_option_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_savedsession_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_workflow_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_workflowstep_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_msdyn_ocliveworkitem: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_msdyn_ocliveworkitem', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
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
		for (var field in msdyn_ocliveworkitem) {
			var a = msdyn_ocliveworkitem[field].a;
			var b = msdyn_ocliveworkitem[field].b;
			var c = msdyn_ocliveworkitem[field].c;
			var d = msdyn_ocliveworkitem[field].d;
			var g = msdyn_ocliveworkitem[field].g;
			var r = msdyn_ocliveworkitem[field].r;
			msdyn_ocliveworkitem[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(msdyn_ocliveworkitem, 'ActivityParties', {
			get: function () { return e['msdyn_ocliveworkitem_activity_parties']; },
			set: function (value) {
				e['msdyn_ocliveworkitem_activity_parties'] = value;
				u['msdyn_ocliveworkitem_activity_parties'] = value;
			}
		});
		msdyn_ocliveworkitem.Entity = u;
		msdyn_ocliveworkitem.EntityName = 'msdyn_ocliveworkitem';
		msdyn_ocliveworkitem.EntityCollectionName = 'msdyn_ocliveworkitems';
		msdyn_ocliveworkitem['@odata.etag'] = e['@odata.etag'];
		msdyn_ocliveworkitem.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocliveworkitem.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocliveworkitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocliveworkitem = {
		ActivityTypeCode : {
			Appointment: 4201,
			Booking_Alert: 10357,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10644,
			Customer_Voice_alert: 10261,
			Customer_Voice_survey_invite: 10271,
			Customer_Voice_survey_response: 10273,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10752,
			Phone_Call: 4210,
			Project_Service_Approval: 10387,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10659,
			Task: 4212
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
		msdyn_channel : {
			Co_browse: 192390000,
			Custom: 192350002,
			Entity_Records: 192350000,
			Facebook: 192330000,
			LINE: 192310000,
			Live_chat: 192360000,
			Microsoft_Teams: 19241000,
			Screen_sharing: 192400000,
			SMS: 192340000,
			Twitter: 192350001,
			Video: 192380000,
			Voice: 192370000,
			WeChat: 192320000,
			WhatsApp: 192300000
		},
		msdyn_customersentimentlabel : {
			NA: 0,
			Negative: 8,
			Neutral: 10,
			Positive: 12,
			Slightly_negative: 9,
			Slightly_positive: 11,
			Very_negative: 7,
			Very_positive: 13
		},
		msdyn_urcustomersentimentlabel : {
			NA: 0,
			Negative: 8,
			Neutral: 10,
			Positive: 12,
			Slightly_negative: 9,
			Slightly_positive: 11,
			Very_negative: 7,
			Very_positive: 13
		},
		msdyn_workstreamworkdistributionmode : {
			Pick: 192350001,
			Push: 192350000
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		StateCode : {
			Closed: 1,
			Open: 0,
			Resolved: 2,
			Scheduled: 3,
			Wrap_up_Deprecated: 4
		},
		StatusCode : {
			Active: 2,
			Closed: 4,
			Open: 1,
			Resolved: 6,
			Scheduled: 7,
			Waiting: 3,
			Wrap_up: 5
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