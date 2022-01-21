'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AnnotationApi = function (e) {
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
		var annotation = {
			AnnotationId: { a: 'annotationid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DocumentBody: { a: 'documentbody' },
			DummyFileName: { a: 'dummyfilename', r: true },
			DummyRegarding: { a: 'dummyregarding', r: true },
			FileName: { a: 'filename' },
			FilePointer: { a: 'filepointer', r: true },
			FileSize: { a: 'filesize', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsDocument: { a: 'isdocument' },
			IsPrivate: { a: 'isprivate', r: true },
			LangId: { a: 'langid' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NoteText: { a: 'notetext' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_appointment: { b: 'objectid_appointment', a: '_objectid_value', c: 'appointments', d: 'appointment' },
			objectid_bookableresource: { b: 'objectid_bookableresource', a: '_objectid_value', c: 'bookableresources', d: 'bookableresource' },
			objectid_bookableresourcebooking: { b: 'objectid_bookableresourcebooking', a: '_objectid_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			objectid_bookableresourcebookingheader: { b: 'objectid_bookableresourcebookingheader', a: '_objectid_value', c: 'bookableresourcebookingheaders', d: 'bookableresourcebookingheader' },
			objectid_bookableresourcecategoryassn: { b: 'objectid_bookableresourcecategoryassn', a: '_objectid_value', c: 'bookableresourcecategoryassns', d: 'bookableresourcecategoryassn' },
			objectid_bookableresourcecharacteristic: { b: 'objectid_bookableresourcecharacteristic', a: '_objectid_value', c: 'bookableresourcecharacteristics', d: 'bookableresourcecharacteristic' },
			objectid_bookableresourcegroup: { b: 'objectid_bookableresourcegroup', a: '_objectid_value', c: 'bookableresourcegroups', d: 'bookableresourcegroup' },
			objectid_bulkoperation: { b: 'objectid_bulkoperation', a: '_objectid_value', c: 'bulkoperations', d: 'bulkoperation' },
			objectid_calendar: { b: 'objectid_calendar', a: '_objectid_value', c: 'calendars', d: 'calendar' },
			objectid_campaign: { b: 'objectid_campaign', a: '_objectid_value', c: 'campaigns', d: 'campaign' },
			objectid_campaignactivity: { b: 'objectid_campaignactivity', a: '_objectid_value', c: 'campaignactivities', d: 'campaignactivity' },
			objectid_campaignresponse: { b: 'objectid_campaignresponse', a: '_objectid_value', c: 'campaignresponses', d: 'campaignresponse' },
			channelaccessprofile_annotations: { b: 'channelaccessprofile_annotations', a: '_objectid_value', c: 'channelaccessprofiles', d: 'channelaccessprofile' },
			channelaccessprofileruleid: { b: 'channelaccessprofileruleid', a: '_objectid_value', c: 'channelaccessprofilerules', d: 'channelaccessprofilerule' },
			objectid_profileruleitem: { b: 'objectid_profileruleitem', a: '_objectid_value', c: 'channelaccessprofileruleitems', d: 'channelaccessprofileruleitem' },
			objectid_commitment: { b: 'objectid_commitment', a: '_objectid_value', c: 'commitments', d: 'commitment' },
			objectid_competitor: { b: 'objectid_competitor', a: '_objectid_value', c: 'competitors', d: 'competitor' },
			objectid_contact: { b: 'objectid_contact', a: '_objectid_value', c: 'contacts', d: 'contact' },
			objectid_contract: { b: 'objectid_contract', a: '_objectid_value', c: 'contracts', d: 'contract' },
			objectid_contractdetail: { b: 'objectid_contractdetail', a: '_objectid_value', c: 'contractdetails', d: 'contractdetail' },
			objectid_convertrule: { b: 'objectid_convertrule', a: '_objectid_value', c: 'convertrules', d: 'convertrule' },
			objectid_duplicaterule: { b: 'objectid_duplicaterule', a: '_objectid_value', c: 'duplicaterules', d: 'duplicaterule' },
			objectid_email: { b: 'objectid_email', a: '_objectid_value', c: 'emails', d: 'email' },
			objectid_emailserverprofile: { b: 'objectid_emailserverprofile', a: '_objectid_value', c: 'emailserverprofiles', d: 'emailserverprofile' },
			objectid_entitlement: { b: 'objectid_entitlement', a: '_objectid_value', c: 'entitlements', d: 'entitlement' },
			objectid_entitlementchannel: { b: 'objectid_entitlementchannel', a: '_objectid_value', c: 'entitlementchannels', d: 'entitlementchannel' },
			objectid_entitlementtemplate: { b: 'objectid_entitlementtemplate', a: '_objectid_value', c: 'entitlementtemplates', d: 'entitlementtemplate' },
			objectid_equipment: { b: 'objectid_equipment', a: '_objectid_value', c: 'equipments', d: 'equipment' },
			objectid_fax: { b: 'objectid_fax', a: '_objectid_value', c: 'faxes', d: 'fax' },
			objectid_goal: { b: 'objectid_goal', a: '_objectid_value', c: 'goals', d: 'goal' },
			objectid_incident: { b: 'objectid_incident', a: '_objectid_value', c: 'incidents', d: 'incident' },
			objectid_incidentresolution: { b: 'objectid_incidentresolution', a: '_objectid_value', c: 'incidentresolutions', d: 'incidentresolution' },
			objectid_invoice: { b: 'objectid_invoice', a: '_objectid_value', c: 'invoices', d: 'invoice' },
			objectid_kbarticle: { b: 'objectid_kbarticle', a: '_objectid_value', c: 'kbarticles', d: 'kbarticle' },
			objectid_knowledgearticle: { b: 'objectid_knowledgearticle', a: '_objectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			objectid_knowledgebaserecord: { b: 'objectid_knowledgebaserecord', a: '_objectid_value', c: 'knowledgebaserecords', d: 'knowledgebaserecord' },
			objectid_lead: { b: 'objectid_lead', a: '_objectid_value', c: 'leads', d: 'lead' },
			objectid_letter: { b: 'objectid_letter', a: '_objectid_value', c: 'letters', d: 'letter' },
			objectid_list: { b: 'objectid_list', a: '_objectid_value', c: 'lists', d: 'list' },
			objectid_mailbox: { b: 'objectid_mailbox', a: '_objectid_value', c: 'mailboxes', d: 'mailbox' },
			objectid_msdyn_3dmodel: { b: 'objectid_msdyn_3dmodel', a: '_objectid_value', c: 'msdyn_3dmodels', d: 'msdyn_3dmodel' },
			objectid_msdyn_accountpricelist: { b: 'objectid_msdyn_accountpricelist', a: '_objectid_value', c: 'msdyn_accountpricelists', d: 'msdyn_accountpricelist' },
			objectid_msdyn_actual: { b: 'objectid_msdyn_actual', a: '_objectid_value', c: 'msdyn_actuals', d: 'msdyn_actual' },
			objectid_msdyn_agreement: { b: 'objectid_msdyn_agreement', a: '_objectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			objectid_msdyn_agreementbookingdate: { b: 'objectid_msdyn_agreementbookingdate', a: '_objectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			objectid_msdyn_agreementbookingincident: { b: 'objectid_msdyn_agreementbookingincident', a: '_objectid_value', c: 'msdyn_agreementbookingincidents', d: 'msdyn_agreementbookingincident' },
			objectid_msdyn_agreementbookingproduct: { b: 'objectid_msdyn_agreementbookingproduct', a: '_objectid_value', c: 'msdyn_agreementbookingproducts', d: 'msdyn_agreementbookingproduct' },
			objectid_msdyn_agreementbookingservice: { b: 'objectid_msdyn_agreementbookingservice', a: '_objectid_value', c: 'msdyn_agreementbookingservices', d: 'msdyn_agreementbookingservice' },
			objectid_msdyn_agreementbookingservicetask: { b: 'objectid_msdyn_agreementbookingservicetask', a: '_objectid_value', c: 'msdyn_agreementbookingservicetasks', d: 'msdyn_agreementbookingservicetask' },
			objectid_msdyn_agreementbookingsetup: { b: 'objectid_msdyn_agreementbookingsetup', a: '_objectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			objectid_msdyn_agreementinvoicedate: { b: 'objectid_msdyn_agreementinvoicedate', a: '_objectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			objectid_msdyn_agreementinvoiceproduct: { b: 'objectid_msdyn_agreementinvoiceproduct', a: '_objectid_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			objectid_msdyn_agreementinvoicesetup: { b: 'objectid_msdyn_agreementinvoicesetup', a: '_objectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			objectid_msdyn_agreementsubstatus: { b: 'objectid_msdyn_agreementsubstatus', a: '_objectid_value', c: 'msdyn_agreementsubstatuses', d: 'msdyn_agreementsubstatus' },
			objectid_msdyn_aifptrainingdocument: { b: 'objectid_msdyn_aifptrainingdocument', a: '_objectid_value', c: 'msdyn_aifptrainingdocuments', d: 'msdyn_aifptrainingdocument' },
			objectid_msdyn_aimodel: { b: 'objectid_msdyn_aimodel', a: '_objectid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			objectid_msdyn_aiodimage: { b: 'objectid_msdyn_aiodimage', a: '_objectid_value', c: 'msdyn_aiodimages', d: 'msdyn_aiodimage' },
			objectid_msdyn_approval: { b: 'objectid_msdyn_approval', a: '_objectid_value', c: 'msdyn_approvals', d: 'msdyn_approval' },
			objectid_msdyn_approvalset: { b: 'objectid_msdyn_approvalset', a: '_objectid_value', c: 'msdyn_approvalsets', d: 'msdyn_approvalset' },
			objectid_msdyn_bookingalert: { b: 'objectid_msdyn_bookingalert', a: '_objectid_value', c: 'msdyn_bookingalerts', d: 'msdyn_bookingalert' },
			objectid_msdyn_bookingalertstatus: { b: 'objectid_msdyn_bookingalertstatus', a: '_objectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			objectid_msdyn_bookingjournal: { b: 'objectid_msdyn_bookingjournal', a: '_objectid_value', c: 'msdyn_bookingjournals', d: 'msdyn_bookingjournal' },
			objectid_msdyn_bookingrule: { b: 'objectid_msdyn_bookingrule', a: '_objectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			objectid_msdyn_bookingtimestamp: { b: 'objectid_msdyn_bookingtimestamp', a: '_objectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			objectid_msdyn_characteristicreqforteammember: { b: 'objectid_msdyn_characteristicreqforteammember', a: '_objectid_value', c: 'msdyn_characteristicreqforteammembers', d: 'msdyn_characteristicreqforteammember' },
			objectid_msdyn_contactpricelist: { b: 'objectid_msdyn_contactpricelist', a: '_objectid_value', c: 'msdyn_contactpricelists', d: 'msdyn_contactpricelist' },
			objectid_msdyn_customerasset: { b: 'objectid_msdyn_customerasset', a: '_objectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			objectid_msdyn_dataexport: { b: 'objectid_msdyn_dataexport', a: '_objectid_value', c: 'msdyn_dataexports', d: 'msdyn_dataexport' },
			objectid_msdyn_delegation: { b: 'objectid_msdyn_delegation', a: '_objectid_value', c: 'msdyn_delegations', d: 'msdyn_delegation' },
			objectid_msdyn_estimate: { b: 'objectid_msdyn_estimate', a: '_objectid_value', c: 'msdyn_estimates', d: 'msdyn_estimate' },
			objectid_msdyn_estimateline: { b: 'objectid_msdyn_estimateline', a: '_objectid_value', c: 'msdyn_estimatelines', d: 'msdyn_estimateline' },
			objectid_msdyn_expense: { b: 'objectid_msdyn_expense', a: '_objectid_value', c: 'msdyn_expenses', d: 'msdyn_expense' },
			objectid_msdyn_expensecategory: { b: 'objectid_msdyn_expensecategory', a: '_objectid_value', c: 'msdyn_expensecategories', d: 'msdyn_expensecategory' },
			objectid_msdyn_expensereceipt: { b: 'objectid_msdyn_expensereceipt', a: '_objectid_value', c: 'msdyn_expensereceipts', d: 'msdyn_expensereceipt' },
			objectid_msdyn_fact: { b: 'objectid_msdyn_fact', a: '_objectid_value', c: 'msdyn_facts', d: 'msdyn_fact' },
			objectid_msdyn_fieldservicesetting: { b: 'objectid_msdyn_fieldservicesetting', a: '_objectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			objectid_msdyn_findworkevent: { b: 'objectid_msdyn_findworkevent', a: '_objectid_value', c: 'msdyn_findworkevents', d: 'msdyn_findworkevent' },
			objectid_msdyn_incidenttype: { b: 'objectid_msdyn_incidenttype', a: '_objectid_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			objectid_msdyn_incidenttypecharacteristic: { b: 'objectid_msdyn_incidenttypecharacteristic', a: '_objectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			objectid_msdyn_incidenttypeproduct: { b: 'objectid_msdyn_incidenttypeproduct', a: '_objectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			objectid_msdyn_incidenttypeservice: { b: 'objectid_msdyn_incidenttypeservice', a: '_objectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			objectid_msdyn_incidenttypessetup: { b: 'objectid_msdyn_incidenttypessetup', a: '_objectid_value', c: 'msdyn_incidenttypessetups', d: 'msdyn_incidenttypessetup' },
			objectid_msdyn_inspectionattachment: { b: 'objectid_msdyn_inspectionattachment', a: '_objectid_value', c: 'msdyn_inspectionattachments', d: 'msdyn_inspectionattachment' },
			objectid_msdyn_inventoryadjustment: { b: 'objectid_msdyn_inventoryadjustment', a: '_objectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			objectid_msdyn_inventoryadjustmentproduct: { b: 'objectid_msdyn_inventoryadjustmentproduct', a: '_objectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			objectid_msdyn_inventoryjournal: { b: 'objectid_msdyn_inventoryjournal', a: '_objectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			objectid_msdyn_inventorytransfer: { b: 'objectid_msdyn_inventorytransfer', a: '_objectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			objectid_msdyn_invoicelinetransaction: { b: 'objectid_msdyn_invoicelinetransaction', a: '_objectid_value', c: 'msdyn_invoicelinetransactions', d: 'msdyn_invoicelinetransaction' },
			objectid_msdyn_iotalert: { b: 'objectid_msdyn_iotalert', a: '_objectid_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			objectid_msdyn_iotdevice: { b: 'objectid_msdyn_iotdevice', a: '_objectid_value', c: 'msdyn_iotdevices', d: 'msdyn_iotdevice' },
			objectid_msdyn_iotdevicecategory: { b: 'objectid_msdyn_iotdevicecategory', a: '_objectid_value', c: 'msdyn_iotdevicecategories', d: 'msdyn_iotdevicecategory' },
			objectid_msdyn_iotdevicecommand: { b: 'objectid_msdyn_iotdevicecommand', a: '_objectid_value', c: 'msdyn_iotdevicecommands', d: 'msdyn_iotdevicecommand' },
			objectid_msdyn_iotdeviceregistrationhistory: { b: 'objectid_msdyn_iotdeviceregistrationhistory', a: '_objectid_value', c: 'msdyn_iotdeviceregistrationhistories', d: 'msdyn_iotdeviceregistrationhistory' },
			objectid_msdyn_journal: { b: 'objectid_msdyn_journal', a: '_objectid_value', c: 'msdyn_journals', d: 'msdyn_journal' },
			objectid_msdyn_journalline: { b: 'objectid_msdyn_journalline', a: '_objectid_value', c: 'msdyn_journallines', d: 'msdyn_journalline' },
			objectid_msdyn_liveconversation: { b: 'objectid_msdyn_liveconversation', a: '_objectid_value', c: 'msdyn_liveconversations', d: 'msdyn_liveconversation' },
			objectid_msdyn_ocflaggedspam: { b: 'objectid_msdyn_ocflaggedspam', a: '_objectid_value', c: 'msdyn_ocflaggedspams', d: 'msdyn_ocflaggedspam' },
			objectid_msdyn_ocliveworkitem: { b: 'objectid_msdyn_ocliveworkitem', a: '_objectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			objectid_msdyn_ocoutboundmessage: { b: 'objectid_msdyn_ocoutboundmessage', a: '_objectid_value', c: 'msdyn_ocoutboundmessages', d: 'msdyn_ocoutboundmessage' },
			objectid_msdyn_ocsession: { b: 'objectid_msdyn_ocsession', a: '_objectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			objectid_msdyn_opportunitylineresourcecategory: { b: 'objectid_msdyn_opportunitylineresourcecategory', a: '_objectid_value', c: 'msdyn_opportunitylineresourcecategories', d: 'msdyn_opportunitylineresourcecategory' },
			objectid_msdyn_opportunitylinetransaction: { b: 'objectid_msdyn_opportunitylinetransaction', a: '_objectid_value', c: 'msdyn_opportunitylinetransactions', d: 'msdyn_opportunitylinetransaction' },
			objectid_msdyn_opportunitylinetransactioncategory: { b: 'objectid_msdyn_opportunitylinetransactioncategory', a: '_objectid_value', c: 'msdyn_opportunitylinetransactioncategories', d: 'msdyn_opportunitylinetransactioncategory' },
			objectid_msdyn_opportunitylinetransactionclassificatio: { b: 'objectid_msdyn_opportunitylinetransactionclassificatio', a: '_objectid_value', c: 'msdyn_opportunitylinetransactionclassificatios', d: 'msdyn_opportunitylinetransactionclassificatio' },
			objectid_msdyn_opportunitypricelist: { b: 'objectid_msdyn_opportunitypricelist', a: '_objectid_value', c: 'msdyn_opportunitypricelists', d: 'msdyn_opportunitypricelist' },
			objectid_msdyn_orderlineresourcecategory: { b: 'objectid_msdyn_orderlineresourcecategory', a: '_objectid_value', c: 'msdyn_orderlineresourcecategories', d: 'msdyn_orderlineresourcecategory' },
			objectid_msdyn_orderlinetransaction: { b: 'objectid_msdyn_orderlinetransaction', a: '_objectid_value', c: 'msdyn_orderlinetransactions', d: 'msdyn_orderlinetransaction' },
			objectid_msdyn_orderlinetransactioncategory: { b: 'objectid_msdyn_orderlinetransactioncategory', a: '_objectid_value', c: 'msdyn_orderlinetransactioncategories', d: 'msdyn_orderlinetransactioncategory' },
			objectid_msdyn_orderlinetransactionclassification: { b: 'objectid_msdyn_orderlinetransactionclassification', a: '_objectid_value', c: 'msdyn_orderlinetransactionclassifications', d: 'msdyn_orderlinetransactionclassification' },
			objectid_msdyn_orderpricelist: { b: 'objectid_msdyn_orderpricelist', a: '_objectid_value', c: 'msdyn_orderpricelists', d: 'msdyn_orderpricelist' },
			objectid_msdyn_organizationalunit: { b: 'objectid_msdyn_organizationalunit', a: '_objectid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			objectid_msdyn_overflowactionconfig: { b: 'objectid_msdyn_overflowactionconfig', a: '_objectid_value', c: 'msdyn_overflowactionconfigs', d: 'msdyn_overflowactionconfig' },
			objectid_msdyn_payment: { b: 'objectid_msdyn_payment', a: '_objectid_value', c: 'msdyn_payments', d: 'msdyn_payment' },
			objectid_msdyn_paymentdetail: { b: 'objectid_msdyn_paymentdetail', a: '_objectid_value', c: 'msdyn_paymentdetails', d: 'msdyn_paymentdetail' },
			objectid_msdyn_paymentmethod: { b: 'objectid_msdyn_paymentmethod', a: '_objectid_value', c: 'msdyn_paymentmethods', d: 'msdyn_paymentmethod' },
			objectid_msdyn_paymentterm: { b: 'objectid_msdyn_paymentterm', a: '_objectid_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			objectid_msdyn_personalsoundsetting: { b: 'objectid_msdyn_personalsoundsetting', a: '_objectid_value', c: 'msdyn_personalsoundsettings', d: 'msdyn_personalsoundsetting' },
			objectid_msdyn_playbookinstance: { b: 'objectid_msdyn_playbookinstance', a: '_objectid_value', c: 'msdyn_playbookinstances', d: 'msdyn_playbookinstance' },
			objectid_msdyn_playbooktemplate: { b: 'objectid_msdyn_playbooktemplate', a: '_objectid_value', c: 'msdyn_playbooktemplates', d: 'msdyn_playbooktemplate' },
			objectid_msdyn_postalbum: { b: 'objectid_msdyn_postalbum', a: '_objectid_value', c: 'msdyn_postalbums', d: 'msdyn_postalbum' },
			objectid_msdyn_postalcode: { b: 'objectid_msdyn_postalcode', a: '_objectid_value', c: 'msdyn_postalcodes', d: 'msdyn_postalcode' },
			objectid_msdyn_priority: { b: 'objectid_msdyn_priority', a: '_objectid_value', c: 'msdyn_priorities', d: 'msdyn_priority' },
			objectid_msdyn_processnotes: { b: 'objectid_msdyn_processnotes', a: '_objectid_value', c: 'msdyn_processnoteses', d: 'msdyn_processnotes' },
			objectid_msdyn_productinventory: { b: 'objectid_msdyn_productinventory', a: '_objectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
			objectid_msdyn_project: { b: 'objectid_msdyn_project', a: '_objectid_value', c: 'msdyn_projects', d: 'msdyn_project' },
			objectid_msdyn_projectapproval: { b: 'objectid_msdyn_projectapproval', a: '_objectid_value', c: 'msdyn_projectapprovals', d: 'msdyn_projectapproval' },
			objectid_msdyn_projectparameter: { b: 'objectid_msdyn_projectparameter', a: '_objectid_value', c: 'msdyn_projectparameters', d: 'msdyn_projectparameter' },
			objectid_msdyn_projectparameterpricelist: { b: 'objectid_msdyn_projectparameterpricelist', a: '_objectid_value', c: 'msdyn_projectparameterpricelists', d: 'msdyn_projectparameterpricelist' },
			objectid_msdyn_projectpricelist: { b: 'objectid_msdyn_projectpricelist', a: '_objectid_value', c: 'msdyn_projectpricelists', d: 'msdyn_projectpricelist' },
			objectid_msdyn_projecttask: { b: 'objectid_msdyn_projecttask', a: '_objectid_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			objectid_msdyn_projecttaskdependency: { b: 'objectid_msdyn_projecttaskdependency', a: '_objectid_value', c: 'msdyn_projecttaskdependencies', d: 'msdyn_projecttaskdependency' },
			objectid_msdyn_projecttaskstatususer: { b: 'objectid_msdyn_projecttaskstatususer', a: '_objectid_value', c: 'msdyn_projecttaskstatususers', d: 'msdyn_projecttaskstatususer' },
			objectid_msdyn_projectteam: { b: 'objectid_msdyn_projectteam', a: '_objectid_value', c: 'msdyn_projectteams', d: 'msdyn_projectteam' },
			objectid_msdyn_projectteammembersignup: { b: 'objectid_msdyn_projectteammembersignup', a: '_objectid_value', c: 'msdyn_projectteammembersignups', d: 'msdyn_projectteammembersignup' },
			objectid_msdyn_projecttransactioncategory: { b: 'objectid_msdyn_projecttransactioncategory', a: '_objectid_value', c: 'msdyn_projecttransactioncategories', d: 'msdyn_projecttransactioncategory' },
			objectid_msdyn_purchaseorder: { b: 'objectid_msdyn_purchaseorder', a: '_objectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			objectid_msdyn_purchaseorderbill: { b: 'objectid_msdyn_purchaseorderbill', a: '_objectid_value', c: 'msdyn_purchaseorderbills', d: 'msdyn_purchaseorderbill' },
			objectid_msdyn_purchaseorderproduct: { b: 'objectid_msdyn_purchaseorderproduct', a: '_objectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			objectid_msdyn_purchaseorderreceipt: { b: 'objectid_msdyn_purchaseorderreceipt', a: '_objectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			objectid_msdyn_purchaseorderreceiptproduct: { b: 'objectid_msdyn_purchaseorderreceiptproduct', a: '_objectid_value', c: 'msdyn_purchaseorderreceiptproducts', d: 'msdyn_purchaseorderreceiptproduct' },
			objectid_msdyn_purchaseordersubstatus: { b: 'objectid_msdyn_purchaseordersubstatus', a: '_objectid_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			objectid_msdyn_quotebookingincident: { b: 'objectid_msdyn_quotebookingincident', a: '_objectid_value', c: 'msdyn_quotebookingincidents', d: 'msdyn_quotebookingincident' },
			objectid_msdyn_quotebookingproduct: { b: 'objectid_msdyn_quotebookingproduct', a: '_objectid_value', c: 'msdyn_quotebookingproducts', d: 'msdyn_quotebookingproduct' },
			objectid_msdyn_quotebookingservice: { b: 'objectid_msdyn_quotebookingservice', a: '_objectid_value', c: 'msdyn_quotebookingservices', d: 'msdyn_quotebookingservice' },
			objectid_msdyn_quotebookingservicetask: { b: 'objectid_msdyn_quotebookingservicetask', a: '_objectid_value', c: 'msdyn_quotebookingservicetasks', d: 'msdyn_quotebookingservicetask' },
			objectid_msdyn_quotelineresourcecategory: { b: 'objectid_msdyn_quotelineresourcecategory', a: '_objectid_value', c: 'msdyn_quotelineresourcecategories', d: 'msdyn_quotelineresourcecategory' },
			objectid_msdyn_quotelinetransaction: { b: 'objectid_msdyn_quotelinetransaction', a: '_objectid_value', c: 'msdyn_quotelinetransactions', d: 'msdyn_quotelinetransaction' },
			objectid_msdyn_quotelinetransactioncategory: { b: 'objectid_msdyn_quotelinetransactioncategory', a: '_objectid_value', c: 'msdyn_quotelinetransactioncategories', d: 'msdyn_quotelinetransactioncategory' },
			objectid_msdyn_quotelinetransactionclassification: { b: 'objectid_msdyn_quotelinetransactionclassification', a: '_objectid_value', c: 'msdyn_quotelinetransactionclassifications', d: 'msdyn_quotelinetransactionclassification' },
			objectid_msdyn_quotepricelist: { b: 'objectid_msdyn_quotepricelist', a: '_objectid_value', c: 'msdyn_quotepricelists', d: 'msdyn_quotepricelist' },
			objectid_msdyn_requirementcharacteristic: { b: 'objectid_msdyn_requirementcharacteristic', a: '_objectid_value', c: 'msdyn_requirementcharacteristics', d: 'msdyn_requirementcharacteristic' },
			objectid_msdyn_requirementresourcecategory: { b: 'objectid_msdyn_requirementresourcecategory', a: '_objectid_value', c: 'msdyn_requirementresourcecategories', d: 'msdyn_requirementresourcecategory' },
			objectid_msdyn_requirementresourcepreference: { b: 'objectid_msdyn_requirementresourcepreference', a: '_objectid_value', c: 'msdyn_requirementresourcepreferences', d: 'msdyn_requirementresourcepreference' },
			objectid_msdyn_requirementstatus: { b: 'objectid_msdyn_requirementstatus', a: '_objectid_value', c: 'msdyn_requirementstatuses', d: 'msdyn_requirementstatus' },
			objectid_msdyn_resourcecategorypricelevel: { b: 'objectid_msdyn_resourcecategorypricelevel', a: '_objectid_value', c: 'msdyn_resourcecategorypricelevels', d: 'msdyn_resourcecategorypricelevel' },
			objectid_msdyn_resourcepaytype: { b: 'objectid_msdyn_resourcepaytype', a: '_objectid_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
			objectid_msdyn_resourcerequest: { b: 'objectid_msdyn_resourcerequest', a: '_objectid_value', c: 'msdyn_resourcerequests', d: 'msdyn_resourcerequest' },
			objectid_msdyn_resourcerequirement: { b: 'objectid_msdyn_resourcerequirement', a: '_objectid_value', c: 'msdyn_resourcerequirements', d: 'msdyn_resourcerequirement' },
			objectid_msdyn_resourcerequirementdetail: { b: 'objectid_msdyn_resourcerequirementdetail', a: '_objectid_value', c: 'msdyn_resourcerequirementdetails', d: 'msdyn_resourcerequirementdetail' },
			objectid_msdyn_resourceterritory: { b: 'objectid_msdyn_resourceterritory', a: '_objectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			objectid_msdyn_rma: { b: 'objectid_msdyn_rma', a: '_objectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			objectid_msdyn_rmaproduct: { b: 'objectid_msdyn_rmaproduct', a: '_objectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			objectid_msdyn_rmareceipt: { b: 'objectid_msdyn_rmareceipt', a: '_objectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			objectid_msdyn_rmareceiptproduct: { b: 'objectid_msdyn_rmareceiptproduct', a: '_objectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			objectid_msdyn_rmasubstatus: { b: 'objectid_msdyn_rmasubstatus', a: '_objectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			objectid_msdyn_rolecompetencyrequirement: { b: 'objectid_msdyn_rolecompetencyrequirement', a: '_objectid_value', c: 'msdyn_rolecompetencyrequirements', d: 'msdyn_rolecompetencyrequirement' },
			objectid_msdyn_rtv: { b: 'objectid_msdyn_rtv', a: '_objectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			objectid_msdyn_rtvproduct: { b: 'objectid_msdyn_rtvproduct', a: '_objectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			objectid_msdyn_rtvsubstatus: { b: 'objectid_msdyn_rtvsubstatus', a: '_objectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			objectid_msdyn_servicetasktype: { b: 'objectid_msdyn_servicetasktype', a: '_objectid_value', c: 'msdyn_servicetasktypes', d: 'msdyn_servicetasktype' },
			objectid_msdyn_shipvia: { b: 'objectid_msdyn_shipvia', a: '_objectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			objectid_msdyn_soundfile: { b: 'objectid_msdyn_soundfile', a: '_objectid_value', c: 'msdyn_soundfiles', d: 'msdyn_soundfile' },
			objectid_msdyn_soundnotificationsetting: { b: 'objectid_msdyn_soundnotificationsetting', a: '_objectid_value', c: 'msdyn_soundnotificationsettings', d: 'msdyn_soundnotificationsetting' },
			objectid_msdyn_systemuserschedulersetting: { b: 'objectid_msdyn_systemuserschedulersetting', a: '_objectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			objectid_msdyn_taxcode: { b: 'objectid_msdyn_taxcode', a: '_objectid_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			objectid_msdyn_taxcodedetail: { b: 'objectid_msdyn_taxcodedetail', a: '_objectid_value', c: 'msdyn_taxcodedetails', d: 'msdyn_taxcodedetail' },
			objectid_msdyn_timeentry: { b: 'objectid_msdyn_timeentry', a: '_objectid_value', c: 'msdyn_timeentries', d: 'msdyn_timeentry' },
			objectid_msdyn_timegroup: { b: 'objectid_msdyn_timegroup', a: '_objectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			objectid_msdyn_timegroupdetail: { b: 'objectid_msdyn_timegroupdetail', a: '_objectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			objectid_msdyn_timeoffrequest: { b: 'objectid_msdyn_timeoffrequest', a: '_objectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			objectid_msdyn_transactioncategory: { b: 'objectid_msdyn_transactioncategory', a: '_objectid_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			objectid_msdyn_transactioncategoryclassification: { b: 'objectid_msdyn_transactioncategoryclassification', a: '_objectid_value', c: 'msdyn_transactioncategoryclassifications', d: 'msdyn_transactioncategoryclassification' },
			objectid_msdyn_transactioncategoryhierarchyelement: { b: 'objectid_msdyn_transactioncategoryhierarchyelement', a: '_objectid_value', c: 'msdyn_transactioncategoryhierarchyelements', d: 'msdyn_transactioncategoryhierarchyelement' },
			objectid_msdyn_transactioncategorypricelevel: { b: 'objectid_msdyn_transactioncategorypricelevel', a: '_objectid_value', c: 'msdyn_transactioncategorypricelevels', d: 'msdyn_transactioncategorypricelevel' },
			objectid_msdyn_transactionconnection: { b: 'objectid_msdyn_transactionconnection', a: '_objectid_value', c: 'msdyn_transactionconnections', d: 'msdyn_transactionconnection' },
			objectid_msdyn_transactionorigin: { b: 'objectid_msdyn_transactionorigin', a: '_objectid_value', c: 'msdyn_transactionorigins', d: 'msdyn_transactionorigin' },
			objectid_msdyn_transactiontype: { b: 'objectid_msdyn_transactiontype', a: '_objectid_value', c: 'msdyn_transactiontypes', d: 'msdyn_transactiontype' },
			objectid_msdyn_transcript: { b: 'objectid_msdyn_transcript', a: '_objectid_value', c: 'msdyn_transcripts', d: 'msdyn_transcript' },
			objectid_msdyn_warehouse: { b: 'objectid_msdyn_warehouse', a: '_objectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			objectid_msdyn_workhourtemplate: { b: 'objectid_msdyn_workhourtemplate', a: '_objectid_value', c: 'msdyn_workhourtemplates', d: 'msdyn_workhourtemplate' },
			objectid_msdyn_workorder: { b: 'objectid_msdyn_workorder', a: '_objectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			objectid_msdyn_workordercharacteristic: { b: 'objectid_msdyn_workordercharacteristic', a: '_objectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			objectid_msdyn_workorderincident: { b: 'objectid_msdyn_workorderincident', a: '_objectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			objectid_msdyn_workorderproduct: { b: 'objectid_msdyn_workorderproduct', a: '_objectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			objectid_msdyn_workorderresourcerestriction: { b: 'objectid_msdyn_workorderresourcerestriction', a: '_objectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			objectid_msdyn_workorderservice: { b: 'objectid_msdyn_workorderservice', a: '_objectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			objectid_msdyn_workorderservicetask: { b: 'objectid_msdyn_workorderservicetask', a: '_objectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			objectid_msdyn_workordersubstatus: { b: 'objectid_msdyn_workordersubstatus', a: '_objectid_value', c: 'msdyn_workordersubstatuses', d: 'msdyn_workordersubstatus' },
			objectid_msdyusd_agentscriptaction: { b: 'objectid_msdyusd_agentscriptaction', a: '_objectid_value', c: 'msdyusd_agentscriptactions', d: 'msdyusd_agentscriptaction' },
			objectid_msdyusd_answer: { b: 'objectid_msdyusd_answer', a: '_objectid_value', c: 'msdyusd_answers', d: 'msdyusd_answer' },
			objectid_msdyusd_configuration: { b: 'objectid_msdyusd_configuration', a: '_objectid_value', c: 'msdyusd_configurations', d: 'msdyusd_configuration' },
			objectid_msdyusd_customizationfiles: { b: 'objectid_msdyusd_customizationfiles', a: '_objectid_value', c: 'msdyusd_customizationfileses', d: 'msdyusd_customizationfiles' },
			objectid_msdyusd_entityassignment: { b: 'objectid_msdyusd_entityassignment', a: '_objectid_value', c: 'msdyusd_entityassignments', d: 'msdyusd_entityassignment' },
			objectid_msdyusd_entitysearch: { b: 'objectid_msdyusd_entitysearch', a: '_objectid_value', c: 'msdyusd_entitysearchs', d: 'msdyusd_entitysearch' },
			objectid_msdyusd_form: { b: 'objectid_msdyusd_form', a: '_objectid_value', c: 'msdyusd_forms', d: 'msdyusd_form' },
			objectid_msdyusd_languagemodule: { b: 'objectid_msdyusd_languagemodule', a: '_objectid_value', c: 'msdyusd_languagemodules', d: 'msdyusd_languagemodule' },
			objectid_msdyusd_scriptlet: { b: 'objectid_msdyusd_scriptlet', a: '_objectid_value', c: 'msdyusd_scriptlets', d: 'msdyusd_scriptlet' },
			objectid_msdyusd_scripttasktrigger: { b: 'objectid_msdyusd_scripttasktrigger', a: '_objectid_value', c: 'msdyusd_scripttasktriggers', d: 'msdyusd_scripttasktrigger' },
			objectid_msdyusd_search: { b: 'objectid_msdyusd_search', a: '_objectid_value', c: 'msdyusd_searchs', d: 'msdyusd_search' },
			objectid_msdyusd_sessioninformation: { b: 'objectid_msdyusd_sessioninformation', a: '_objectid_value', c: 'msdyusd_sessioninformations', d: 'msdyusd_sessioninformation' },
			objectid_msdyusd_task: { b: 'objectid_msdyusd_task', a: '_objectid_value', c: 'msdyusd_tasks', d: 'msdyusd_task' },
			objectid_msdyusd_toolbarbutton: { b: 'objectid_msdyusd_toolbarbutton', a: '_objectid_value', c: 'msdyusd_toolbarbuttons', d: 'msdyusd_toolbarbutton' },
			objectid_msdyusd_toolbarstrip: { b: 'objectid_msdyusd_toolbarstrip', a: '_objectid_value', c: 'msdyusd_toolbarstrips', d: 'msdyusd_toolbarstrip' },
			objectid_msdyusd_tracesourcesetting: { b: 'objectid_msdyusd_tracesourcesetting', a: '_objectid_value', c: 'msdyusd_tracesourcesettings', d: 'msdyusd_tracesourcesetting' },
			objectid_msdyusd_uiievent: { b: 'objectid_msdyusd_uiievent', a: '_objectid_value', c: 'msdyusd_uiievents', d: 'msdyusd_uiievent' },
			objectid_msdyusd_windowroute: { b: 'objectid_msdyusd_windowroute', a: '_objectid_value', c: 'msdyusd_windowroutes', d: 'msdyusd_windowroute' },
			objectid_msfp_alert: { b: 'objectid_msfp_alert', a: '_objectid_value', c: 'msfp_alerts', d: 'msfp_alert' },
			objectid_msfp_question: { b: 'objectid_msfp_question', a: '_objectid_value', c: 'msfp_questions', d: 'msfp_question' },
			objectid_msfp_surveyinvite: { b: 'objectid_msfp_surveyinvite', a: '_objectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			objectid_msfp_surveyresponse: { b: 'objectid_msfp_surveyresponse', a: '_objectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			objectid_opportunity: { b: 'objectid_opportunity', a: '_objectid_value', c: 'opportunities', d: 'opportunity' },
			objectid_opportunityclose: { b: 'objectid_opportunityclose', a: '_objectid_value', c: 'opportunitycloses', d: 'opportunityclose' },
			objectid_orderclose: { b: 'objectid_orderclose', a: '_objectid_value', c: 'ordercloses', d: 'orderclose' },
			objectid_phonecall: { b: 'objectid_phonecall', a: '_objectid_value', c: 'phonecalls', d: 'phonecall' },
			objectid_product: { b: 'objectid_product', a: '_objectid_value', c: 'products', d: 'product' },
			objectid_quote: { b: 'objectid_quote', a: '_objectid_value', c: 'quotes', d: 'quote' },
			objectid_quoteclose: { b: 'objectid_quoteclose', a: '_objectid_value', c: 'quotecloses', d: 'quoteclose' },
			objectid_recurringappointmentmaster: { b: 'objectid_recurringappointmentmaster', a: '_objectid_value', c: 'recurringappointmentmasters', d: 'recurringappointmentmaster' },
			objectid_resourcespec: { b: 'objectid_resourcespec', a: '_objectid_value', c: 'resourcespecs', d: 'resourcespec' },
			objectid_routingrule: { b: 'objectid_routingrule', a: '_objectid_value', c: 'routingrules', d: 'routingrule' },
			objectid_routingruleitem: { b: 'objectid_routingruleitem', a: '_objectid_value', c: 'routingruleitems', d: 'routingruleitem' },
			objectid_salesorder: { b: 'objectid_salesorder', a: '_objectid_value', c: 'salesorders', d: 'salesorder' },
			objectid_service: { b: 'objectid_service', a: '_objectid_value', c: 'services', d: 'service' },
			objectid_serviceappointment: { b: 'objectid_serviceappointment', a: '_objectid_value', c: 'serviceappointments', d: 'serviceappointment' },
			objectid_sharepointdocument: { b: 'objectid_sharepointdocument', a: '_objectid_value', c: 'sharepointdocuments', d: 'sharepointdocument' },
			objectid_sla: { b: 'objectid_sla', a: '_objectid_value', c: 'slas', d: 'sla' },
			objectid_socialactivity: { b: 'objectid_socialactivity', a: '_objectid_value', c: 'socialactivities', d: 'socialactivity' },
			objectid_task: { b: 'objectid_task', a: '_objectid_value', c: 'tasks', d: 'task' },
			objectid_uii_action: { b: 'objectid_uii_action', a: '_objectid_value', c: 'uii_actions', d: 'uii_action' },
			objectid_uii_hostedapplication: { b: 'objectid_uii_hostedapplication', a: '_objectid_value', c: 'uii_hostedapplications', d: 'uii_hostedapplication' },
			objectid_uii_nonhostedapplication: { b: 'objectid_uii_nonhostedapplication', a: '_objectid_value', c: 'uii_nonhostedapplications', d: 'uii_nonhostedapplication' },
			objectid_uii_option: { b: 'objectid_uii_option', a: '_objectid_value', c: 'uii_options', d: 'uii_option' },
			objectid_uii_workflow: { b: 'objectid_uii_workflow', a: '_objectid_value', c: 'uii_workflows', d: 'uii_workflow' },
			objectid_uii_workflowstep: { b: 'objectid_uii_workflowstep', a: '_objectid_value', c: 'uii_workflowsteps', d: 'uii_workflowstep' },
			objectid_uii_workflow_workflowstep_mapping: { b: 'objectid_uii_workflow_workflowstep_mapping', a: '_objectid_value', c: 'uii_workflow_workflowstep_mappings', d: 'uii_workflow_workflowstep_mapping' },
			objectid_workflow: { b: 'objectid_workflow', a: '_objectid_value', c: 'workflows', d: 'workflow' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			Prefix: { a: 'prefix', r: true },
			StepId: { a: 'stepid' },
			StoragePointer: { a: 'storagepointer', r: true },
			Subject: { a: 'subject' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in annotation) {
			var a = annotation[field].a;
			var b = annotation[field].b;
			var c = annotation[field].c;
			var d = annotation[field].d;
			var g = annotation[field].g;
			var r = annotation[field].r;
			annotation[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		annotation.Entity = u;
		annotation.EntityName = 'annotation';
		annotation.EntityCollectionName = 'annotations';
		annotation['@odata.etag'] = e['@odata.etag'];
		annotation.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		annotation.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return annotation;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Annotation = {
		ObjectTypeCode : {
			Account: 1,
			Appointment: 4201,
			Bulk_Import: 4407,
			Calendar: 4003,
			Campaign: 4400,
			Campaign_Activity: 4402,
			Campaign_Response: 4401,
			Case: 112,
			Case_Resolution: 4206,
			Commitment: 4215,
			Competitor: 123,
			Contact: 2,
			Contract: 1010,
			Contract_Line: 1011,
			Email: 4202,
			FacilityEquipment: 4000,
			Fax: 4204,
			Invoice: 1090,
			Lead: 4,
			Letter: 4207,
			Marketing_List: 4300,
			Opportunity: 3,
			Opportunity_Close: 4208,
			Order: 1088,
			Order_Close: 4209,
			Phone_Call: 4210,
			Product: 1024,
			Quote: 1084,
			Quote_Close: 4211,
			Resource_Specification: 4006,
			Routing_Rule: 8181,
			Routing_Rule_Item: 8199,
			Service: 4001,
			Service_Activity: 4214,
			Task: 4212
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