'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ServiceAppointmentApi = function (e) {
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
		var _serviceappointment = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			Category: { a: 'category' },
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
			IsAllDayEvent: { a: 'isalldayevent' },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			LeftVoiceMail: { a: 'leftvoicemail' },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_OrganizationalUnitId: { b: 'msdyn_OrganizationalUnitId', a: '_msdyn_organizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
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
			regardingobjectid_account_serviceappointment: { b: 'regardingobjectid_account_serviceappointment', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_serviceappointment: { b: 'regardingobjectid_bookableresourcebooking_serviceappointment', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_serviceappointment: { b: 'regardingobjectid_bookableresourcebookingheader_serviceappointment', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_serviceappointment: { b: 'regardingobjectid_bulkoperation_serviceappointment', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_serviceappointment: { b: 'regardingobjectid_campaign_serviceappointment', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_serviceappointment: { b: 'regardingobjectid_campaignactivity_serviceappointment', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_serviceappointment: { b: 'regardingobjectid_contact_serviceappointment', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_serviceappointment: { b: 'regardingobjectid_contract_serviceappointment', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_serviceappointment: { b: 'regardingobjectid_entitlement_serviceappointment', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_serviceappointment: { b: 'regardingobjectid_entitlementtemplate_serviceappointment', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_serviceappointment: { b: 'regardingobjectid_incident_serviceappointment', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_new_interactionforemail_serviceappointment: { b: 'regardingobjectid_new_interactionforemail_serviceappointment', a: '_regardingobjectid_value', c: 'interactionforemails', d: 'interactionforemail' },
			regardingobjectid_invoice_serviceappointment: { b: 'regardingobjectid_invoice_serviceappointment', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_serviceappointment: { b: 'regardingobjectid_knowledgearticle_serviceappointment', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_serviceappointment: { b: 'regardingobjectid_knowledgebaserecord_serviceappointment', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_serviceappointment: { b: 'regardingobjectid_lead_serviceappointment', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_serviceappointment: { b: 'regardingobjectid_msdyn_agreement_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_serviceappointment: { b: 'regardingobjectid_msdyn_agreementbookingdate_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_serviceappointment: { b: 'regardingobjectid_msdyn_agreementbookingincident_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_serviceappointment: { b: 'regardingobjectid_msdyn_agreementbookingproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_serviceappointment: { b: 'regardingobjectid_msdyn_agreementbookingservice_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_serviceappointment: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_serviceappointment: { b: 'regardingobjectid_msdyn_agreementbookingsetup_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_serviceappointment: { b: 'regardingobjectid_msdyn_agreementinvoicedate_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_serviceappointment: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_serviceappointment: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_serviceappointment: { b: 'regardingobjectid_msdyn_bookingalertstatus_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_serviceappointment: { b: 'regardingobjectid_msdyn_bookingrule_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_serviceappointment: { b: 'regardingobjectid_msdyn_bookingtimestamp_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_serviceappointment: { b: 'regardingobjectid_msdyn_customerasset_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_serviceappointment: { b: 'regardingobjectid_msdyn_fieldservicesetting_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_serviceappointment: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_serviceappointment: { b: 'regardingobjectid_msdyn_incidenttypeproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_serviceappointment: { b: 'regardingobjectid_msdyn_incidenttypeservice_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_serviceappointment: { b: 'regardingobjectid_msdyn_inventoryadjustment_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_serviceappointment: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_serviceappointment: { b: 'regardingobjectid_msdyn_inventoryjournal_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_serviceappointment: { b: 'regardingobjectid_msdyn_inventorytransfer_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_serviceappointment: { b: 'regardingobjectid_msdyn_payment_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_serviceappointment: { b: 'regardingobjectid_msdyn_paymentdetail_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_serviceappointment: { b: 'regardingobjectid_msdyn_paymentmethod_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_serviceappointment: { b: 'regardingobjectid_msdyn_paymentterm_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_serviceappointment: { b: 'regardingobjectid_msdyn_playbookinstance_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_serviceappointment: { b: 'regardingobjectid_msdyn_postalbum_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_serviceappointment: { b: 'regardingobjectid_msdyn_postalcode_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_serviceappointment: { b: 'regardingobjectid_msdyn_processnotes_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_serviceappointment: { b: 'regardingobjectid_msdyn_productinventory_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_serviceappointment: { b: 'regardingobjectid_msdyn_projectteam_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_serviceappointment: { b: 'regardingobjectid_msdyn_purchaseorder_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_serviceappointment: { b: 'regardingobjectid_msdyn_purchaseorderbill_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_serviceappointment: { b: 'regardingobjectid_msdyn_purchaseorderproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_serviceappointment: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_serviceappointment: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_serviceappointment: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_serviceappointment: { b: 'regardingobjectid_msdyn_quotebookingincident_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_serviceappointment: { b: 'regardingobjectid_msdyn_quotebookingproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_serviceappointment: { b: 'regardingobjectid_msdyn_quotebookingservice_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_serviceappointment: { b: 'regardingobjectid_msdyn_quotebookingservicetask_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_serviceappointment: { b: 'regardingobjectid_msdyn_resourceterritory_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_serviceappointment: { b: 'regardingobjectid_msdyn_rma_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_serviceappointment: { b: 'regardingobjectid_msdyn_rmaproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_serviceappointment: { b: 'regardingobjectid_msdyn_rmareceipt_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_serviceappointment: { b: 'regardingobjectid_msdyn_rmareceiptproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_serviceappointment: { b: 'regardingobjectid_msdyn_rmasubstatus_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_serviceappointment: { b: 'regardingobjectid_msdyn_rtv_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_serviceappointment: { b: 'regardingobjectid_msdyn_rtvproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_serviceappointment: { b: 'regardingobjectid_msdyn_rtvsubstatus_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_salessuggestion_serviceappointment: { b: 'regardingobjectid_msdyn_salessuggestion_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			regardingobjectid_msdyn_shipvia_serviceappointment: { b: 'regardingobjectid_msdyn_shipvia_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_serviceappointment: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_serviceappointment: { b: 'regardingobjectid_msdyn_timegroup_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_serviceappointment: { b: 'regardingobjectid_msdyn_timegroupdetail_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_serviceappointment: { b: 'regardingobjectid_msdyn_timeoffrequest_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_serviceappointment: { b: 'regardingobjectid_msdyn_warehouse_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_serviceappointment: { b: 'regardingobjectid_msdyn_workorder_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_serviceappointment: { b: 'regardingobjectid_msdyn_workordercharacteristic_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_serviceappointment: { b: 'regardingobjectid_msdyn_workorderincident_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_serviceappointment: { b: 'regardingobjectid_msdyn_workorderproduct_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_serviceappointment: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_serviceappointment: { b: 'regardingobjectid_msdyn_workorderservice_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_serviceappointment: { b: 'regardingobjectid_msdyn_workorderservicetask_serviceappointment', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_serviceappointment: { b: 'regardingobjectid_opportunity_serviceappointment', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_serviceappointment: { b: 'regardingobjectid_quote_serviceappointment', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_serviceappointment: { b: 'regardingobjectid_salesorder_serviceappointment', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_serviceappointment: { b: 'regardingobjectid_site_serviceappointment', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_serviceappointment: { b: 'regardingobjectid_uii_action_serviceappointment', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_serviceappointment: { b: 'regardingobjectid_uii_hostedapplication_serviceappointment', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_serviceappointment: { b: 'regardingobjectid_uii_nonhostedapplication_serviceappointment', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_serviceappointment: { b: 'regardingobjectid_uii_option_serviceappointment', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_serviceappointment: { b: 'regardingobjectid_uii_savedsession_serviceappointment', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_serviceappointment: { b: 'regardingobjectid_uii_workflow_serviceappointment', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_serviceappointment: { b: 'regardingobjectid_uii_workflowstep_serviceappointment', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_serviceappointment: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_serviceappointment', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			SenderMailboxId: { b: 'sendermailboxid', a: '_sendermailboxid_value', c: 'mailboxes', d: 'mailbox', r: true },
			SentOn_UtcDateAndTime: { a: 'senton', r: true },
			SeriesId: { a: 'seriesid', r: true },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SiteId: { b: 'siteid', a: '_siteid_value', c: 'sites', d: 'site' },
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
		var serviceappointment = {};
		serviceappointment.ODataEntity = e;
		serviceappointment.FormattedValue = {};
		for (var field in _serviceappointment) {
			var a = _serviceappointment[field].a;
			var b = _serviceappointment[field].b;
			var c = _serviceappointment[field].c;
			var d = _serviceappointment[field].d;
			var g = _serviceappointment[field].g;
			var r = _serviceappointment[field].r;
			webApiField(serviceappointment, field, e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(serviceappointment, 'ActivityParties', {
			get: function () { return e['serviceappointment_activity_parties']; },
			set: function (value) {
				e['serviceappointment_activity_parties'] = value;
				u['serviceappointment_activity_parties'] = value;
			}
		});
		serviceappointment.Entity = u;
		serviceappointment.EntityName = 'serviceappointment';
		serviceappointment.EntityCollectionName = 'serviceappointments';
		serviceappointment['@odata.etag'] = e['@odata.etag'];
		serviceappointment.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		serviceappointment.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return serviceappointment;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ServiceAppointment = {
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
			Closed: 1,
			Open: 0,
			Scheduled: 3
		},
		StatusCode : {
			Arrived: 7,
			Canceled: 9,
			Completed: 8,
			In_Progress: 6,
			No_Show: 10,
			Pending: 3,
			Requested: 1,
			Reserved: 4,
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