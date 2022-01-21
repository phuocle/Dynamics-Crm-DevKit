'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SocialActivityApi = function (e) {
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
		var socialactivity = {
			ActivityAdditionalParams: { a: 'activityadditionalparams' },
			ActivityId: { a: 'activityid' },
			ActualDurationMinutes: { a: 'actualdurationminutes' },
			ActualEnd_UtcDateAndTime: { a: 'actualend' },
			ActualStart_UtcDateAndTime: { a: 'actualstart' },
			Community: { a: 'community' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DirectionCode: { a: 'directioncode' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InResponseTo: { a: 'inresponseto' },
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
			postauthor_account: { b: 'postauthor_account', a: '_postauthor_value', c: 'accounts', d: 'account' },
			postauthor_contact: { b: 'postauthor_contact', a: '_postauthor_value', c: 'contacts', d: 'contact' },
			postauthoraccount_account: { b: 'postauthoraccount_account', a: '_postauthoraccount_value', c: 'accounts', d: 'account' },
			postauthoraccount_contact: { b: 'postauthoraccount_contact', a: '_postauthoraccount_value', c: 'contacts', d: 'contact' },
			PostedOn_UtcDateAndTime: { a: 'postedon' },
			PostFromProfileId: { b: 'postfromprofileid', a: '_postfromprofileid_value', c: 'socialprofiles', d: 'socialprofile' },
			PostId: { a: 'postid' },
			PostMessageType: { a: 'postmessagetype' },
			PostToProfileId: { a: 'posttoprofileid' },
			PostURL: { a: 'posturl' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			regardingobjectid_account_socialactivity: { b: 'regardingobjectid_account_socialactivity', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_asyncoperation: { b: 'regardingobjectid_asyncoperation', a: '_regardingobjectid_value', c: 'asyncoperations', d: 'asyncoperation' },
			regardingobjectid_bookableresourcebooking_socialactivity: { b: 'regardingobjectid_bookableresourcebooking_socialactivity', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_socialactivity: { b: 'regardingobjectid_bookableresourcebookingheader_socialactivity', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_socialactivity: { b: 'regardingobjectid_bulkoperation_socialactivity', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_socialactivity: { b: 'regardingobjectid_campaign_socialactivity', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_socialactivity: { b: 'regardingobjectid_campaignactivity_socialactivity', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_socialactivity: { b: 'regardingobjectid_contact_socialactivity', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_socialactivity: { b: 'regardingobjectid_contract_socialactivity', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_socialactivity: { b: 'regardingobjectid_entitlement_socialactivity', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_socialactivity: { b: 'regardingobjectid_entitlementtemplate_socialactivity', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_socialactivity: { b: 'regardingobjectid_incident_socialactivity', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_socialactivity: { b: 'regardingobjectid_invoice_socialactivity', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_socialactivity: { b: 'regardingobjectid_knowledgearticle_socialactivity', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_socialactivity: { b: 'regardingobjectid_knowledgebaserecord_socialactivity', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_socialactivity: { b: 'regardingobjectid_lead_socialactivity', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_socialactivity: { b: 'regardingobjectid_msdyn_agreement_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_socialactivity: { b: 'regardingobjectid_msdyn_agreementbookingdate_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_socialactivity: { b: 'regardingobjectid_msdyn_agreementbookingincident_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_socialactivity: { b: 'regardingobjectid_msdyn_agreementbookingproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_socialactivity: { b: 'regardingobjectid_msdyn_agreementbookingservice_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_socialactivity: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_socialactivity: { b: 'regardingobjectid_msdyn_agreementbookingsetup_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_socialactivity: { b: 'regardingobjectid_msdyn_agreementinvoicedate_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_socialactivity: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_socialactivity: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_socialactivity: { b: 'regardingobjectid_msdyn_bookingalertstatus_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_socialactivity: { b: 'regardingobjectid_msdyn_bookingrule_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_socialactivity: { b: 'regardingobjectid_msdyn_bookingtimestamp_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_socialactivity: { b: 'regardingobjectid_msdyn_customerasset_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_socialactivity: { b: 'regardingobjectid_msdyn_fieldservicesetting_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_socialactivity: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_socialactivity: { b: 'regardingobjectid_msdyn_incidenttypeproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_socialactivity: { b: 'regardingobjectid_msdyn_incidenttypeservice_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_socialactivity: { b: 'regardingobjectid_msdyn_inventoryadjustment_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_socialactivity: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_socialactivity: { b: 'regardingobjectid_msdyn_inventoryjournal_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_socialactivity: { b: 'regardingobjectid_msdyn_inventorytransfer_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_socialactivity: { b: 'regardingobjectid_msdyn_payment_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_socialactivity: { b: 'regardingobjectid_msdyn_paymentdetail_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_socialactivity: { b: 'regardingobjectid_msdyn_paymentmethod_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_socialactivity: { b: 'regardingobjectid_msdyn_paymentterm_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_socialactivity: { b: 'regardingobjectid_msdyn_playbookinstance_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_socialactivity: { b: 'regardingobjectid_msdyn_postalbum_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_socialactivity: { b: 'regardingobjectid_msdyn_postalcode_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_socialactivity: { b: 'regardingobjectid_msdyn_processnotes_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_socialactivity: { b: 'regardingobjectid_msdyn_productinventory_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_socialactivity: { b: 'regardingobjectid_msdyn_projectteam_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_socialactivity: { b: 'regardingobjectid_msdyn_purchaseorder_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_socialactivity: { b: 'regardingobjectid_msdyn_purchaseorderbill_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_socialactivity: { b: 'regardingobjectid_msdyn_purchaseorderproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_socialactivity: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_socialactivity: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_socialactivity: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_socialactivity: { b: 'regardingobjectid_msdyn_quotebookingincident_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_socialactivity: { b: 'regardingobjectid_msdyn_quotebookingproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_socialactivity: { b: 'regardingobjectid_msdyn_quotebookingservice_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_socialactivity: { b: 'regardingobjectid_msdyn_quotebookingservicetask_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_socialactivity: { b: 'regardingobjectid_msdyn_resourceterritory_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_socialactivity: { b: 'regardingobjectid_msdyn_rma_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_socialactivity: { b: 'regardingobjectid_msdyn_rmaproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_socialactivity: { b: 'regardingobjectid_msdyn_rmareceipt_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_socialactivity: { b: 'regardingobjectid_msdyn_rmareceiptproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_socialactivity: { b: 'regardingobjectid_msdyn_rmasubstatus_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_socialactivity: { b: 'regardingobjectid_msdyn_rtv_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_socialactivity: { b: 'regardingobjectid_msdyn_rtvproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_socialactivity: { b: 'regardingobjectid_msdyn_rtvsubstatus_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_shipvia_socialactivity: { b: 'regardingobjectid_msdyn_shipvia_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_socialactivity: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_socialactivity: { b: 'regardingobjectid_msdyn_timegroup_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_socialactivity: { b: 'regardingobjectid_msdyn_timegroupdetail_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_socialactivity: { b: 'regardingobjectid_msdyn_timeoffrequest_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_socialactivity: { b: 'regardingobjectid_msdyn_warehouse_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_socialactivity: { b: 'regardingobjectid_msdyn_workorder_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_socialactivity: { b: 'regardingobjectid_msdyn_workordercharacteristic_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_socialactivity: { b: 'regardingobjectid_msdyn_workorderincident_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_socialactivity: { b: 'regardingobjectid_msdyn_workorderproduct_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_socialactivity: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_socialactivity: { b: 'regardingobjectid_msdyn_workorderservice_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_socialactivity: { b: 'regardingobjectid_msdyn_workorderservicetask_socialactivity', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_socialactivity: { b: 'regardingobjectid_opportunity_socialactivity', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_socialactivity: { b: 'regardingobjectid_quote_socialactivity', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_socialactivity: { b: 'regardingobjectid_salesorder_socialactivity', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_socialactivity: { b: 'regardingobjectid_site_socialactivity', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_socialactivity: { b: 'regardingobjectid_uii_action_socialactivity', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_socialactivity: { b: 'regardingobjectid_uii_hostedapplication_socialactivity', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_socialactivity: { b: 'regardingobjectid_uii_nonhostedapplication_socialactivity', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_socialactivity: { b: 'regardingobjectid_uii_option_socialactivity', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_socialactivity: { b: 'regardingobjectid_uii_savedsession_socialactivity', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_socialactivity: { b: 'regardingobjectid_uii_workflow_socialactivity', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_socialactivity: { b: 'regardingobjectid_uii_workflowstep_socialactivity', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_socialactivity: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_socialactivity', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
			ScheduledDurationMinutes: { a: 'scheduleddurationminutes' },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend' },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart' },
			SentimentValue: { a: 'sentimentvalue' },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			SocialAdditionalParams: { a: 'socialadditionalparams' },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			Subject: { a: 'subject' },
			ThreadId: { a: 'threadid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in socialactivity) {
			var a = socialactivity[field].a;
			var b = socialactivity[field].b;
			var c = socialactivity[field].c;
			var d = socialactivity[field].d;
			var g = socialactivity[field].g;
			var r = socialactivity[field].r;
			socialactivity[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(socialactivity, 'ActivityParties', {
			get: function () { return e['socialactivity_activity_parties']; },
			set: function (value) {
				e['socialactivity_activity_parties'] = value;
				u['socialactivity_activity_parties'] = value;
			}
		});
		socialactivity.Entity = u;
		socialactivity.EntityName = 'socialactivity';
		socialactivity.EntityCollectionName = 'socialactivities';
		socialactivity['@odata.etag'] = e['@odata.etag'];
		socialactivity.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		socialactivity.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return socialactivity;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SocialActivity = {
		ActivityTypeCode : {
			Appointment: 4201,
			Booking_Alert: 10400,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case_Resolution: 4206,
			Conversation: 10702,
			Customer_Voice_alert: 10294,
			Customer_Voice_survey_invite: 10304,
			Customer_Voice_survey_response: 10306,
			Email: 4202,
			Fax: 4204,
			Letter: 4207,
			Opportunity_Close: 4208,
			Order_Close: 4209,
			Outbound_message: 10813,
			Phone_Call: 4210,
			Project_Service_Approval: 10430,
			Quick_Campaign: 4406,
			Quote_Close: 4211,
			Recurring_Appointment: 4251,
			Service_Activity: 4214,
			Session: 10717,
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
		PostMessageType : {
			Private_Message: 1,
			Public_Message: 0
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		StateCode : {
			Canceled: 2,
			Completed: 1,
			Open: 0
		},
		StatusCode : {
			Canceled: 5,
			Completed: 1,
			Failed: 2,
			Open: 4,
			Processing: 3
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