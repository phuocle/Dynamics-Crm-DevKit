'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.PhoneCallApi = function (e) {
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
		var _phonecall = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateOnly: { a: 'actualend' },
			ActualStart_UtcDateOnly: { a: 'actualstart' },
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
			LeftVoiceMail: { a: 'leftvoicemail' },
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
			PhoneNumber: { a: 'phonenumber' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_phonecall: { b: 'regardingobjectid_account_phonecall', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_phonecall: { b: 'regardingobjectid_bookableresourcebooking_phonecall', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_phonecall: { b: 'regardingobjectid_bookableresourcebookingheader_phonecall', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_phonecall: { b: 'regardingobjectid_bulkoperation_phonecall', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_phonecall: { b: 'regardingobjectid_campaign_phonecall', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_phonecall: { b: 'regardingobjectid_campaignactivity_phonecall', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_phonecall: { b: 'regardingobjectid_contact_phonecall', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_phonecall: { b: 'regardingobjectid_contract_phonecall', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_phonecall: { b: 'regardingobjectid_entitlement_phonecall', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_phonecall: { b: 'regardingobjectid_entitlementtemplate_phonecall', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_phonecall: { b: 'regardingobjectid_incident_phonecall', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_phonecall: { b: 'regardingobjectid_invoice_phonecall', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_phonecall: { b: 'regardingobjectid_knowledgearticle_phonecall', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_phonecall: { b: 'regardingobjectid_knowledgebaserecord_phonecall', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_phonecall: { b: 'regardingobjectid_lead_phonecall', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_phonecall: { b: 'regardingobjectid_msdyn_agreement_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_phonecall: { b: 'regardingobjectid_msdyn_agreementbookingdate_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_phonecall: { b: 'regardingobjectid_msdyn_agreementbookingincident_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_phonecall: { b: 'regardingobjectid_msdyn_agreementbookingproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_phonecall: { b: 'regardingobjectid_msdyn_agreementbookingservice_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_phonecall: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_phonecall: { b: 'regardingobjectid_msdyn_agreementbookingsetup_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_phonecall: { b: 'regardingobjectid_msdyn_agreementinvoicedate_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_phonecall: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_phonecall: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_phonecall', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_phonecall: { b: 'regardingobjectid_msdyn_bookingalertstatus_phonecall', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_phonecall: { b: 'regardingobjectid_msdyn_bookingrule_phonecall', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_phonecall: { b: 'regardingobjectid_msdyn_bookingtimestamp_phonecall', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_phonecall: { b: 'regardingobjectid_msdyn_customerasset_phonecall', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_phonecall: { b: 'regardingobjectid_msdyn_fieldservicesetting_phonecall', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_phonecall: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_phonecall', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_phonecall: { b: 'regardingobjectid_msdyn_incidenttypeproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_phonecall: { b: 'regardingobjectid_msdyn_incidenttypeservice_phonecall', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_phonecall: { b: 'regardingobjectid_msdyn_inventoryadjustment_phonecall', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_phonecall: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_phonecall: { b: 'regardingobjectid_msdyn_inventoryjournal_phonecall', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_phonecall: { b: 'regardingobjectid_msdyn_inventorytransfer_phonecall', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_phonecall: { b: 'regardingobjectid_msdyn_payment_phonecall', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_phonecall: { b: 'regardingobjectid_msdyn_paymentdetail_phonecall', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_phonecall: { b: 'regardingobjectid_msdyn_paymentmethod_phonecall', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_phonecall: { b: 'regardingobjectid_msdyn_paymentterm_phonecall', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_phonecall: { b: 'regardingobjectid_msdyn_playbookinstance_phonecall', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_phonecall: { b: 'regardingobjectid_msdyn_postalbum_phonecall', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_phonecall: { b: 'regardingobjectid_msdyn_postalcode_phonecall', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_phonecall: { b: 'regardingobjectid_msdyn_processnotes_phonecall', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_phonecall: { b: 'regardingobjectid_msdyn_productinventory_phonecall', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_phonecall: { b: 'regardingobjectid_msdyn_projectteam_phonecall', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_phonecall: { b: 'regardingobjectid_msdyn_purchaseorder_phonecall', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_phonecall: { b: 'regardingobjectid_msdyn_purchaseorderbill_phonecall', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_phonecall: { b: 'regardingobjectid_msdyn_purchaseorderproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_phonecall: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_phonecall', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_phonecall: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_phonecall: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_phonecall', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_phonecall: { b: 'regardingobjectid_msdyn_quotebookingincident_phonecall', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_phonecall: { b: 'regardingobjectid_msdyn_quotebookingproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_phonecall: { b: 'regardingobjectid_msdyn_quotebookingservice_phonecall', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_phonecall: { b: 'regardingobjectid_msdyn_quotebookingservicetask_phonecall', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_phonecall: { b: 'regardingobjectid_msdyn_resourceterritory_phonecall', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_phonecall: { b: 'regardingobjectid_msdyn_rma_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_phonecall: { b: 'regardingobjectid_msdyn_rmaproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_phonecall: { b: 'regardingobjectid_msdyn_rmareceipt_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_phonecall: { b: 'regardingobjectid_msdyn_rmareceiptproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_phonecall: { b: 'regardingobjectid_msdyn_rmasubstatus_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_phonecall: { b: 'regardingobjectid_msdyn_rtv_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_phonecall: { b: 'regardingobjectid_msdyn_rtvproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_phonecall: { b: 'regardingobjectid_msdyn_rtvsubstatus_phonecall', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_phonecall: { b: 'regardingobjectid_msdyn_salessuggestion_phonecall', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_phonecall: { b: 'regardingobjectid_msdyn_shipvia_phonecall', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_phonecall: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_phonecall', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_phonecall: { b: 'regardingobjectid_msdyn_timegroup_phonecall', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_phonecall: { b: 'regardingobjectid_msdyn_timegroupdetail_phonecall', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_phonecall: { b: 'regardingobjectid_msdyn_timeoffrequest_phonecall', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_phonecall: { b: 'regardingobjectid_msdyn_warehouse_phonecall', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_phonecall: { b: 'regardingobjectid_msdyn_workorder_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_phonecall: { b: 'regardingobjectid_msdyn_workordercharacteristic_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_phonecall: { b: 'regardingobjectid_msdyn_workorderincident_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_phonecall: { b: 'regardingobjectid_msdyn_workorderproduct_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_phonecall: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_phonecall: { b: 'regardingobjectid_msdyn_workorderservice_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_phonecall: { b: 'regardingobjectid_msdyn_workorderservicetask_phonecall', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_phonecall: { b: 'regardingobjectid_opportunity_phonecall', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_phonecall: { b: 'regardingobjectid_quote_phonecall', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_phonecall: { b: 'regardingobjectid_salesorder_phonecall', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_phonecall: { b: 'regardingobjectid_site_phonecall', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_phonecall: { b: 'regardingobjectid_uii_action_phonecall', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_phonecall: { b: 'regardingobjectid_uii_hostedapplication_phonecall', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_phonecall: { b: 'regardingobjectid_uii_nonhostedapplication_phonecall', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_phonecall: { b: 'regardingobjectid_uii_option_phonecall', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_phonecall: { b: 'regardingobjectid_uii_savedsession_phonecall', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_phonecall: { b: 'regardingobjectid_uii_workflow_phonecall', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_phonecall: { b: 'regardingobjectid_uii_workflowstep_phonecall', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_phonecall: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_phonecall', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
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
		var phonecall = {};
		phonecall.ODataEntity = e;
		phonecall.FormattedValue = {};
		for (var field in _phonecall) {
			var a = _phonecall[field].a;
			var b = _phonecall[field].b;
			var c = _phonecall[field].c;
			var d = _phonecall[field].d;
			var g = _phonecall[field].g;
			var r = _phonecall[field].r;
			webApiField(phonecall, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(phonecall, 'ActivityParties', {
			get: function () { return e['phonecall_activity_parties']; },
			set: function (value) {
				e['phonecall_activity_parties'] = value;
				u['phonecall_activity_parties'] = value;
			}
		});
		phonecall.Entity = u;
		phonecall.EntityName = 'phonecall';
		phonecall.EntityCollectionName = 'phonecalls';
		phonecall['@odata.etag'] = e['@odata.etag'];
		phonecall.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		phonecall.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return phonecall;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.PhoneCall = {
		ActivityTypeCode : {
			Activity_record_for_the_Teams_chat: 10088,
			Appointment: 4201,
			Booking_Alert: 10473,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10743,
			Customer_Voice_alert: 10330,
			Customer_Voice_survey_invite: 10340,
			Customer_Voice_survey_response: 10342,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10857,
			Phone_Call: 4210,
			Project_Service_Approval: 10489,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10760,
			Task: 4212
		},
		OwnerIdType : {
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
			Canceled: 3,
			Made: 2,
			Open: 1,
			Received: 4
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