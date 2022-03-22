'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.chatApi = function (e) {
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
		var _chat = {
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
			LinkedBy: { b: 'linkedby', a: '_linkedby_value', c: 'systemusers', d: 'systemuser', r: true },
			LinkedOn_UtcDateAndTime: { a: 'linkedon', r: true },
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
			regardingobjectid_account_chat: { b: 'regardingobjectid_account_chat', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_chat: { b: 'regardingobjectid_bookableresourcebooking_chat', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_chat: { b: 'regardingobjectid_bookableresourcebookingheader_chat', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_chat: { b: 'regardingobjectid_bulkoperation_chat', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_chat: { b: 'regardingobjectid_campaign_chat', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_chat: { b: 'regardingobjectid_campaignactivity_chat', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_chat: { b: 'regardingobjectid_contact_chat', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_chat: { b: 'regardingobjectid_contract_chat', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_chat: { b: 'regardingobjectid_entitlement_chat', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_chat: { b: 'regardingobjectid_entitlementtemplate_chat', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_chat: { b: 'regardingobjectid_incident_chat', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_chat: { b: 'regardingobjectid_new_interactionforemail_chat', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice_chat: { b: 'regardingobjectid_invoice_chat', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_chat: { b: 'regardingobjectid_knowledgearticle_chat', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_chat: { b: 'regardingobjectid_knowledgebaserecord_chat', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_chat: { b: 'regardingobjectid_lead_chat', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_chat: { b: 'regardingobjectid_msdyn_agreement_chat', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_chat: { b: 'regardingobjectid_msdyn_agreementbookingdate_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_chat: { b: 'regardingobjectid_msdyn_agreementbookingincident_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_chat: { b: 'regardingobjectid_msdyn_agreementbookingproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_chat: { b: 'regardingobjectid_msdyn_agreementbookingservice_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_chat: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_chat: { b: 'regardingobjectid_msdyn_agreementbookingsetup_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_chat: { b: 'regardingobjectid_msdyn_agreementinvoicedate_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_chat: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_chat: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_chat', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_chat: { b: 'regardingobjectid_msdyn_bookingalertstatus_chat', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_chat: { b: 'regardingobjectid_msdyn_bookingrule_chat', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_chat: { b: 'regardingobjectid_msdyn_bookingtimestamp_chat', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_chat: { b: 'regardingobjectid_msdyn_customerasset_chat', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_chat: { b: 'regardingobjectid_msdyn_fieldservicesetting_chat', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_chat: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_chat', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_chat: { b: 'regardingobjectid_msdyn_incidenttypeproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_chat: { b: 'regardingobjectid_msdyn_incidenttypeservice_chat', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_chat: { b: 'regardingobjectid_msdyn_inventoryadjustment_chat', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_chat: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_chat: { b: 'regardingobjectid_msdyn_inventoryjournal_chat', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_chat: { b: 'regardingobjectid_msdyn_inventorytransfer_chat', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_chat: { b: 'regardingobjectid_msdyn_payment_chat', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_chat: { b: 'regardingobjectid_msdyn_paymentdetail_chat', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_chat: { b: 'regardingobjectid_msdyn_paymentmethod_chat', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_chat: { b: 'regardingobjectid_msdyn_paymentterm_chat', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_chat: { b: 'regardingobjectid_msdyn_playbookinstance_chat', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_chat: { b: 'regardingobjectid_msdyn_postalbum_chat', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_chat: { b: 'regardingobjectid_msdyn_postalcode_chat', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_chat: { b: 'regardingobjectid_msdyn_processnotes_chat', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_chat: { b: 'regardingobjectid_msdyn_productinventory_chat', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_chat: { b: 'regardingobjectid_msdyn_projectteam_chat', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_chat: { b: 'regardingobjectid_msdyn_purchaseorder_chat', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_chat: { b: 'regardingobjectid_msdyn_purchaseorderbill_chat', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_chat: { b: 'regardingobjectid_msdyn_purchaseorderproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_chat: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_chat', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_chat: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_chat: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_chat', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_chat: { b: 'regardingobjectid_msdyn_quotebookingincident_chat', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_chat: { b: 'regardingobjectid_msdyn_quotebookingproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_chat: { b: 'regardingobjectid_msdyn_quotebookingservice_chat', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_chat: { b: 'regardingobjectid_msdyn_quotebookingservicetask_chat', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_chat: { b: 'regardingobjectid_msdyn_resourceterritory_chat', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_chat: { b: 'regardingobjectid_msdyn_rma_chat', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_chat: { b: 'regardingobjectid_msdyn_rmaproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_chat: { b: 'regardingobjectid_msdyn_rmareceipt_chat', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_chat: { b: 'regardingobjectid_msdyn_rmareceiptproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_chat: { b: 'regardingobjectid_msdyn_rmasubstatus_chat', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_chat: { b: 'regardingobjectid_msdyn_rtv_chat', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_chat: { b: 'regardingobjectid_msdyn_rtvproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_chat: { b: 'regardingobjectid_msdyn_rtvsubstatus_chat', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_chat: { b: 'regardingobjectid_msdyn_salessuggestion_chat', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_chat: { b: 'regardingobjectid_msdyn_shipvia_chat', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_chat: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_chat', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_chat: { b: 'regardingobjectid_msdyn_timegroup_chat', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_chat: { b: 'regardingobjectid_msdyn_timegroupdetail_chat', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_chat: { b: 'regardingobjectid_msdyn_timeoffrequest_chat', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_chat: { b: 'regardingobjectid_msdyn_warehouse_chat', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_chat: { b: 'regardingobjectid_msdyn_workorder_chat', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_chat: { b: 'regardingobjectid_msdyn_workordercharacteristic_chat', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_chat: { b: 'regardingobjectid_msdyn_workorderincident_chat', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_chat: { b: 'regardingobjectid_msdyn_workorderproduct_chat', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_chat: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_chat', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_chat: { b: 'regardingobjectid_msdyn_workorderservice_chat', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_chat: { b: 'regardingobjectid_msdyn_workorderservicetask_chat', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_chat: { b: 'regardingobjectid_opportunity_chat', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_chat: { b: 'regardingobjectid_quote_chat', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_chat: { b: 'regardingobjectid_salesorder_chat', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_service_chat: { b: 'regardingobjectid_service_chat', a: '_regardingobjectid_value', c: 'services', d: 'service' },
			regardingobjectid_site_chat: { b: 'regardingobjectid_site_chat', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_chat: { b: 'regardingobjectid_uii_action_chat', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_chat: { b: 'regardingobjectid_uii_hostedapplication_chat', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_chat: { b: 'regardingobjectid_uii_nonhostedapplication_chat', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_chat: { b: 'regardingobjectid_uii_option_chat', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_chat: { b: 'regardingobjectid_uii_savedsession_chat', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_chat: { b: 'regardingobjectid_uii_workflow_chat', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_chat: { b: 'regardingobjectid_uii_workflowstep_chat', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_chat: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_chat', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SeriesId: { a: 'seriesid', r: true },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subject: { a: 'subject' },
			teamschatid: { a: 'teamschatid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UnLinkedBy: { b: 'unlinkedby', a: '_unlinkedby_value', c: 'systemusers', d: 'systemuser', r: true },
			UnLinkedOn_UtcDateAndTime: { a: 'unlinkedon', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var chat = {};
		chat.ODataEntity = e;
		chat.FormattedValue = {};
		for (var field in _chat) {
			var a = _chat[field].a;
			var b = _chat[field].b;
			var c = _chat[field].c;
			var d = _chat[field].d;
			var g = _chat[field].g;
			var r = _chat[field].r;
			webApiField(chat, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(chat, 'ActivityParties', {
			get: function () { return e['chat_activity_parties']; },
			set: function (value) {
				e['chat_activity_parties'] = value;
				u['chat_activity_parties'] = value;
			}
		});
		chat.Entity = u;
		chat.EntityName = 'chat';
		chat.EntityCollectionName = 'chats';
		chat['@odata.etag'] = e['@odata.etag'];
		chat.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		chat.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return chat;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.chat = {
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