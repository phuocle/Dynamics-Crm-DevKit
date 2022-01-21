'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.RecurringAppointmentMasterApi = function (e) {
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
		var recurringappointmentmaster = {
			ActivityId: { a: 'activityid' },
			Category: { a: 'category' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DayOfMonth: { a: 'dayofmonth' },
			DaysOfWeekMask: { a: 'daysofweekmask' },
			DeletedExceptionsList: { a: 'deletedexceptionslist', r: true },
			Description: { a: 'description' },
			Duration: { a: 'duration' },
			EffectiveEndDate_UtcDateAndTime: { a: 'effectiveenddate' },
			EffectiveStartDate_UtcDateOnly: { a: 'effectivestartdate' },
			EndTime_UtcDateAndTime: { a: 'endtime' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpansionStateCode: { a: 'expansionstatecode', r: true },
			FirstDayOfWeek: { a: 'firstdayofweek' },
			GlobalObjectId: { a: 'globalobjectid' },
			GroupId: { b: 'groupid', a: '_groupid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			Instance: { a: 'instance' },
			InstanceTypeCode: { a: 'instancetypecode', r: true },
			Interval: { a: 'interval' },
			IsAllDayEvent: { a: 'isalldayevent' },
			IsBilled: { a: 'isbilled' },
			IsMapiPrivate: { a: 'ismapiprivate' },
			IsNthMonthly: { a: 'isnthmonthly' },
			IsNthYearly: { a: 'isnthyearly' },
			IsOnlineMeeting: { a: 'isonlinemeeting' },
			IsRegenerate: { a: 'isregenerate' },
			IsRegularActivity: { a: 'isregularactivity', r: true },
			IsUnsafe: { a: 'isunsafe', r: true },
			IsWeekDayPattern: { a: 'isweekdaypattern' },
			IsWorkflowCreated: { a: 'isworkflowcreated' },
			LastExpandedInstanceDate_UtcDateAndTime: { a: 'lastexpandedinstancedate', r: true },
			Location: { a: 'location' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MonthOfYear: { a: 'monthofyear' },
			NextExpansionInstanceDate_UtcDateAndTime: { a: 'nextexpansioninstancedate', r: true },
			Occurrences: { a: 'occurrences' },
			OnlineMeetingChatId: { a: 'onlinemeetingchatid' },
			OnlineMeetingId: { a: 'onlinemeetingid' },
			OnlineMeetingJoinUrl: { a: 'onlinemeetingjoinurl' },
			OnlineMeetingType: { a: 'onlinemeetingtype' },
			OutlookOwnerApptId: { a: 'outlookownerapptid' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PatternEndDate_UtcDateOnly: { a: 'patternenddate' },
			PatternEndType: { a: 'patternendtype' },
			PatternStartDate_UtcDateOnly: { a: 'patternstartdate' },
			PriorityCode: { a: 'prioritycode' },
			ProcessId: { a: 'processid' },
			RecurrencePatternType: { a: 'recurrencepatterntype' },
			regardingobjectid_account_recurringappointmentmaster: { b: 'regardingobjectid_account_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_bookableresourcebooking_recurringappointmentmaster: { b: 'regardingobjectid_bookableresourcebooking_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			regardingobjectid_bookableresourcebookingheader_recurringappointmentmaster: { b: 'regardingobjectid_bookableresourcebookingheader_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			regardingobjectid_bulkoperation_recurringappointmentmaster: { b: 'regardingobjectid_bulkoperation_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			regardingobjectid_campaign_recurringappointmentmaster: { b: 'regardingobjectid_campaign_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'campaigns', d: 'campaign' },
			regardingobjectid_campaignactivity_recurringappointmentmaster: { b: 'regardingobjectid_campaignactivity_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			regardingobjectid_contact_recurringappointmentmaster: { b: 'regardingobjectid_contact_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_contract_recurringappointmentmaster: { b: 'regardingobjectid_contract_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'contracts', d: 'contract' },
			regardingobjectid_entitlement_recurringappointmentmaster: { b: 'regardingobjectid_entitlement_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'entitlements', d: 'entitlement' },
			regardingobjectid_entitlementtemplate_recurringappointmentmaster: { b: 'regardingobjectid_entitlementtemplate_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			regardingobjectid_incident_recurringappointmentmaster: { b: 'regardingobjectid_incident_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_invoice_recurringappointmentmaster: { b: 'regardingobjectid_invoice_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'invoices', d: 'invoice' },
			regardingobjectid_knowledgearticle_recurringappointmentmaster: { b: 'regardingobjectid_knowledgearticle_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_knowledgebaserecord_recurringappointmentmaster: { b: 'regardingobjectid_knowledgebaserecord_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			regardingobjectid_lead_recurringappointmentmaster: { b: 'regardingobjectid_lead_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreement_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementbookingdate_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingincident_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementbookingincident_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			regardingobjectid_msdyn_agreementbookingproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementbookingproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			regardingobjectid_msdyn_agreementbookingservice_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementbookingservice_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			regardingobjectid_msdyn_agreementbookingservicetask_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementbookingservicetask_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			regardingobjectid_msdyn_agreementbookingsetup_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementbookingsetup_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementinvoicedate_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoiceproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementinvoiceproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			regardingobjectid_msdyn_agreementinvoicesetup_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_agreementinvoicesetup_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingalertstatus_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_bookingalertstatus_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			regardingobjectid_msdyn_bookingrule_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_bookingrule_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			regardingobjectid_msdyn_bookingtimestamp_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_bookingtimestamp_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_customerasset_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_customerasset_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			regardingobjectid_msdyn_fieldservicesetting_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_fieldservicesetting_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			regardingobjectid_msdyn_incidenttypecharacteristic_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_incidenttypecharacteristic_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			regardingobjectid_msdyn_incidenttypeproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_incidenttypeproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_incidenttypeservice_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_incidenttypeservice_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			regardingobjectid_msdyn_inventoryadjustment_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_inventoryadjustment_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventoryjournal_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_inventoryjournal_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			regardingobjectid_msdyn_inventorytransfer_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_inventorytransfer_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_payment_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_payment_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			regardingobjectid_msdyn_paymentdetail_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_paymentdetail_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			regardingobjectid_msdyn_paymentmethod_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_paymentmethod_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			regardingobjectid_msdyn_paymentterm_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_paymentterm_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			regardingobjectid_msdyn_playbookinstance_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_playbookinstance_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			regardingobjectid_msdyn_postalbum_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_postalbum_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			regardingobjectid_msdyn_postalcode_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_postalcode_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			regardingobjectid_msdyn_processnotes_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_processnotes_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			regardingobjectid_msdyn_productinventory_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_productinventory_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			regardingobjectid_msdyn_projectteam_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_projectteam_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			regardingobjectid_msdyn_purchaseorder_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_purchaseorder_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderbill_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_purchaseorderbill_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			regardingobjectid_msdyn_purchaseorderproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_purchaseorderproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_purchaseorderreceipt_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_purchaseorderreceiptproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_purchaseorderreceiptproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			regardingobjectid_msdyn_purchaseordersubstatus_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_purchaseordersubstatus_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			regardingobjectid_msdyn_quotebookingincident_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_quotebookingincident_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			regardingobjectid_msdyn_quotebookingproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_quotebookingproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			regardingobjectid_msdyn_quotebookingservice_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_quotebookingservice_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			regardingobjectid_msdyn_quotebookingservicetask_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_quotebookingservicetask_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			regardingobjectid_msdyn_resourceterritory_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_resourceterritory_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rma_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmaproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rmaproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			regardingobjectid_msdyn_rmareceipt_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rmareceipt_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rmareceiptproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rmareceiptproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			regardingobjectid_msdyn_rmasubstatus_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rmasubstatus_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			regardingobjectid_msdyn_rtv_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rtv_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_rtvproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rtvproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			regardingobjectid_msdyn_rtvsubstatus_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_rtvsubstatus_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			regardingobjectid_msdyn_shipvia_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_shipvia_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			regardingobjectid_msdyn_systemuserschedulersetting_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_systemuserschedulersetting_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			regardingobjectid_msdyn_timegroup_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_timegroup_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_timegroupdetail_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_timeoffrequest_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_timeoffrequest_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			regardingobjectid_msdyn_warehouse_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_warehouse_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workorder_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workordercharacteristic_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workordercharacteristic_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			regardingobjectid_msdyn_workorderincident_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workorderincident_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workorderproduct_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderresourcerestriction_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workorderresourcerestriction_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			regardingobjectid_msdyn_workorderservice_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workorderservice_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask_recurringappointmentmaster: { b: 'regardingobjectid_msdyn_workorderservicetask_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_opportunity_recurringappointmentmaster: { b: 'regardingobjectid_opportunity_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_quote_recurringappointmentmaster: { b: 'regardingobjectid_quote_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesorder_recurringappointmentmaster: { b: 'regardingobjectid_salesorder_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'salesorders', d: 'salesorder' },
			regardingobjectid_site_recurringappointmentmaster: { b: 'regardingobjectid_site_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'sites', d: 'site' },
			regardingobjectid_uii_action_recurringappointmentmaster: { b: 'regardingobjectid_uii_action_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_actions', d: 'uii_action' },
			regardingobjectid_uii_hostedapplication_recurringappointmentmaster: { b: 'regardingobjectid_uii_hostedapplication_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			regardingobjectid_uii_nonhostedapplication_recurringappointmentmaster: { b: 'regardingobjectid_uii_nonhostedapplication_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			regardingobjectid_uii_option_recurringappointmentmaster: { b: 'regardingobjectid_uii_option_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_options', d: 'uii_option' },
			regardingobjectid_uii_savedsession_recurringappointmentmaster: { b: 'regardingobjectid_uii_savedsession_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_savedsessions', d: 'uii_savedsession' },
			regardingobjectid_uii_workflow_recurringappointmentmaster: { b: 'regardingobjectid_uii_workflow_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			regardingobjectid_uii_workflowstep_recurringappointmentmaster: { b: 'regardingobjectid_uii_workflowstep_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			regardingobjectid_uii_workflow_workflowstep_mapping_recurringappointmentmaster: { b: 'regardingobjectid_uii_workflow_workflowstep_mapping_recurringappointmentmaster', a: '_regardingobjectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
			RuleId: { b: 'ruleid', a: '_ruleid_value', c: 'recurrencerules', d: 'recurrencerule', r: true },
			ScheduledEnd_UtcDateAndTime: { a: 'scheduledend', r: true },
			ScheduledStart_UtcDateAndTime: { a: 'scheduledstart', r: true },
			SeriesStatus: { a: 'seriesstatus' },
			ServiceId: { b: 'serviceid', a: '_serviceid_value', c: 'services', d: 'service' },
			SortDate_UtcDateAndTime: { a: 'sortdate' },
			StageId: { a: 'stageid' },
			StartTime_UtcDateAndTime: { a: 'starttime' },
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
		for (var field in recurringappointmentmaster) {
			var a = recurringappointmentmaster[field].a;
			var b = recurringappointmentmaster[field].b;
			var c = recurringappointmentmaster[field].c;
			var d = recurringappointmentmaster[field].d;
			var g = recurringappointmentmaster[field].g;
			var r = recurringappointmentmaster[field].r;
			recurringappointmentmaster[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		Object.defineProperty(recurringappointmentmaster, 'ActivityParties', {
			get: function () { return e['recurringappointmentmaster_activity_parties']; },
			set: function (value) {
				e['recurringappointmentmaster_activity_parties'] = value;
				u['recurringappointmentmaster_activity_parties'] = value;
			}
		});
		recurringappointmentmaster.Entity = u;
		recurringappointmentmaster.EntityName = 'recurringappointmentmaster';
		recurringappointmentmaster.EntityCollectionName = 'recurringappointmentmasters';
		recurringappointmentmaster['@odata.etag'] = e['@odata.etag'];
		recurringappointmentmaster.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		recurringappointmentmaster.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return recurringappointmentmaster;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RecurringAppointmentMaster = {
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
		ExpansionStateCode : {
			Full: 2,
			Partial: 1,
			Unexpanded: 0
		},
		Instance : {
			First: 1,
			Fourth: 4,
			Last: 5,
			Second: 2,
			Third: 3
		},
		InstanceTypeCode : {
			Not_Recurring: 0,
			Recurring_Exception: 3,
			Recurring_Future_Exception: 4,
			Recurring_Instance: 2,
			Recurring_Master: 1
		},
		MonthOfYear : {
			April: 4,
			August: 8,
			December: 12,
			February: 2,
			Invalid_Month_Of_Year: 0,
			January: 1,
			July: 7,
			June: 6,
			March: 3,
			May: 5,
			November: 11,
			October: 10,
			September: 9
		},
		OnlineMeetingType : {
			Teams_Meeting: 1
		},
		PatternEndType : {
			No_End_Date: 1,
			Occurrences: 2,
			Pattern_End_Date: 3
		},
		PriorityCode : {
			High: 2,
			Low: 0,
			Normal: 1
		},
		RecurrencePatternType : {
			Daily: 0,
			Monthly: 2,
			Weekly: 1,
			Yearly: 3
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