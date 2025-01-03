﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AnnotationApi = function (e) {
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
		var _annotation = {
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
			isAutonomouslyCreated: { a: 'isautonomouslycreated' },
			IsDocument: { a: 'isdocument' },
			IsPrivate: { a: 'isprivate', r: true },
			LangId: { a: 'langid' },
			MimeType: { a: 'mimetype' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			NoteText: { a: 'notetext' },
			objectid_account: { b: 'objectid_account', a: '_objectid_value', c: 'accounts', d: 'account' },
			objectid_adx_invitation: { b: 'objectid_adx_invitation', a: '_objectid_value', c: 'adx_invitations', d: 'adx_invitation' },
			objectid_adx_inviteredemption: { b: 'objectid_adx_inviteredemption', a: '_objectid_value', c: 'adx_inviteredemptions', d: 'adx_inviteredemption' },
			objectid_adx_portalcomment: { b: 'objectid_adx_portalcomment', a: '_objectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment' },
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
			objectid_chat: { b: 'objectid_chat', a: '_objectid_value', c: 'chats', d: 'chat' },
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
			objectid_msdyncrm_appointmentactivitymarketingtemplate: { b: 'objectid_msdyncrm_appointmentactivitymarketingtemplate', a: '_objectid_value', c: 'msdyncrm_appointmentactivitymarketingtemplates', d: 'msdyncrm_appointmentactivitymarketingtemplate' },
			objectid_msdyncrm_contentsettings: { b: 'objectid_msdyncrm_contentsettings', a: '_objectid_value', c: 'msdyncrm_contentsettingses', d: 'msdyncrm_contentsettings' },
			objectid_msdyncrm_customerjourney: { b: 'objectid_msdyncrm_customerjourney', a: '_objectid_value', c: 'msdyncrm_customerjourneies', d: 'msdyncrm_customerjourney' },
			objectid_msdyncrm_leadscoremodel: { b: 'objectid_msdyncrm_leadscoremodel', a: '_objectid_value', c: 'msdyncrm_leadscoremodels', d: 'msdyncrm_leadscoremodel' },
			objectid_msdyncrm_linkedinaccount: { b: 'objectid_msdyncrm_linkedinaccount', a: '_objectid_value', c: 'msdyncrm_linkedinaccounts', d: 'msdyncrm_linkedinaccount' },
			objectid_msdyncrm_linkedinactivity: { b: 'objectid_msdyncrm_linkedinactivity', a: '_objectid_value', c: 'msdyncrm_linkedinactivities', d: 'msdyncrm_linkedinactivity' },
			objectid_msdyncrm_linkedinfieldmapping: { b: 'objectid_msdyncrm_linkedinfieldmapping', a: '_objectid_value', c: 'msdyncrm_linkedinfieldmappings', d: 'msdyncrm_linkedinfieldmapping' },
			objectid_msdyncrm_linkedinform: { b: 'objectid_msdyncrm_linkedinform', a: '_objectid_value', c: 'msdyncrm_linkedinforms', d: 'msdyncrm_linkedinform' },
			objectid_msdyncrm_linkedinformanswer: { b: 'objectid_msdyncrm_linkedinformanswer', a: '_objectid_value', c: 'msdyncrm_linkedinformanswers', d: 'msdyncrm_linkedinformanswer' },
			objectid_msdyncrm_linkedinformquestion: { b: 'objectid_msdyncrm_linkedinformquestion', a: '_objectid_value', c: 'msdyncrm_linkedinformquestions', d: 'msdyncrm_linkedinformquestion' },
			objectid_msdyncrm_linkedinformsubmission: { b: 'objectid_msdyncrm_linkedinformsubmission', a: '_objectid_value', c: 'msdyncrm_linkedinformsubmissions', d: 'msdyncrm_linkedinformsubmission' },
			objectid_msdyncrm_linkedinleadmatchingstrategy: { b: 'objectid_msdyncrm_linkedinleadmatchingstrategy', a: '_objectid_value', c: 'msdyncrm_linkedinleadmatchingstrategies', d: 'msdyncrm_linkedinleadmatchingstrategy' },
			objectid_msdyncrm_linkedinuserprofile: { b: 'objectid_msdyncrm_linkedinuserprofile', a: '_objectid_value', c: 'msdyncrm_linkedinuserprofiles', d: 'msdyncrm_linkedinuserprofile' },
			objectid_msdyncrm_marketingdynamiccontentmetadata: { b: 'objectid_msdyncrm_marketingdynamiccontentmetadata', a: '_objectid_value', c: 'msdyncrm_marketingdynamiccontentmetadatas', d: 'msdyncrm_marketingdynamiccontentmetadata' },
			objectid_msdyncrm_marketingemaildynamiccontentmetadata: { b: 'objectid_msdyncrm_marketingemaildynamiccontentmetadata', a: '_objectid_value', c: 'msdyncrm_marketingemaildynamiccontentmetadatas', d: 'msdyncrm_marketingemaildynamiccontentmetadata' },
			objectid_msdyncrm_marketingemailtestsend: { b: 'objectid_msdyncrm_marketingemailtestsend', a: '_objectid_value', c: 'msdyncrm_marketingemailtestsends', d: 'msdyncrm_marketingemailtestsend' },
			objectid_msdyncrm_marketingform: { b: 'objectid_msdyncrm_marketingform', a: '_objectid_value', c: 'msdyncrm_marketingforms', d: 'msdyncrm_marketingform' },
			objectid_msdyncrm_marketingformtemplate: { b: 'objectid_msdyncrm_marketingformtemplate', a: '_objectid_value', c: 'msdyncrm_marketingformtemplates', d: 'msdyncrm_marketingformtemplate' },
			objectid_msdyncrm_marketingpage: { b: 'objectid_msdyncrm_marketingpage', a: '_objectid_value', c: 'msdyncrm_marketingpages', d: 'msdyncrm_marketingpage' },
			objectid_msdyncrm_marketingpagetemplate: { b: 'objectid_msdyncrm_marketingpagetemplate', a: '_objectid_value', c: 'msdyncrm_marketingpagetemplates', d: 'msdyncrm_marketingpagetemplate' },
			objectid_msdyncrm_migration: { b: 'objectid_msdyncrm_migration', a: '_objectid_value', c: 'msdyncrm_migrations', d: 'msdyncrm_migration' },
			objectid_msdyncrm_mktactivity: { b: 'objectid_msdyncrm_mktactivity', a: '_objectid_value', c: 'msdyncrm_mktactivities', d: 'msdyncrm_mktactivity' },
			objectid_msdyncrm_phonecallactivitymarketingtemplate: { b: 'objectid_msdyncrm_phonecallactivitymarketingtemplate', a: '_objectid_value', c: 'msdyncrm_phonecallactivitymarketingtemplates', d: 'msdyncrm_phonecallactivitymarketingtemplate' },
			objectid_msdyncrm_taskactivitymarketingtemplate: { b: 'objectid_msdyncrm_taskactivitymarketingtemplate', a: '_objectid_value', c: 'msdyncrm_taskactivitymarketingtemplates', d: 'msdyncrm_taskactivitymarketingtemplate' },
			objectid_msdyncrm_uicconfig: { b: 'objectid_msdyncrm_uicconfig', a: '_objectid_value', c: 'msdyncrm_uicconfigs', d: 'msdyncrm_uicconfig' },
			objectid_msdyn_3dmodel: { b: 'objectid_msdyn_3dmodel', a: '_objectid_value', c: 'msdyn_3dmodels', d: 'msdyn_3dmodel' },
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
			objectid_msdyn_bookingalert: { b: 'objectid_msdyn_bookingalert', a: '_objectid_value', c: 'msdyn_bookingalerts', d: 'msdyn_bookingalert' },
			objectid_msdyn_bookingalertstatus: { b: 'objectid_msdyn_bookingalertstatus', a: '_objectid_value', c: 'msdyn_bookingalertstatuses', d: 'msdyn_bookingalertstatus' },
			objectid_msdyn_bookingjournal: { b: 'objectid_msdyn_bookingjournal', a: '_objectid_value', c: 'msdyn_bookingjournals', d: 'msdyn_bookingjournal' },
			objectid_msdyn_bookingrule: { b: 'objectid_msdyn_bookingrule', a: '_objectid_value', c: 'msdyn_bookingrules', d: 'msdyn_bookingrule' },
			objectid_msdyn_bookingtimestamp: { b: 'objectid_msdyn_bookingtimestamp', a: '_objectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			objectid_msdyn_copilottranscript: { b: 'objectid_msdyn_copilottranscript', a: '_objectid_value', c: 'msdyn_copilottranscripts', d: 'msdyn_copilottranscript' },
			objectid_msdyn_customerasset: { b: 'objectid_msdyn_customerasset', a: '_objectid_value', c: 'msdyn_customerassets', d: 'msdyn_customerasset' },
			objectid_msdyn_fieldservicesetting: { b: 'objectid_msdyn_fieldservicesetting', a: '_objectid_value', c: 'msdyn_fieldservicesettings', d: 'msdyn_fieldservicesetting' },
			objectid_msdyn_flow_approval: { b: 'objectid_msdyn_flow_approval', a: '_objectid_value', c: 'msdyn_flow_approvals', d: 'msdyn_flow_approval' },
			objectid_msdyn_forecastconfiguration: { b: 'objectid_msdyn_forecastconfiguration', a: '_objectid_value', c: 'msdyn_forecastconfigurations', d: 'msdyn_forecastconfiguration' },
			objectid_msdyn_forecastpredictionstatus: { b: 'objectid_msdyn_forecastpredictionstatus', a: '_objectid_value', c: 'msdyn_forecastpredictionstatuses', d: 'msdyn_forecastpredictionstatus' },
			objectid_msdyn_functionallocation: { b: 'objectid_msdyn_functionallocation', a: '_objectid_value', c: 'msdyn_functionallocations', d: 'msdyn_functionallocation' },
			objectid_msdyn_incidenttype: { b: 'objectid_msdyn_incidenttype', a: '_objectid_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			objectid_msdyn_incidenttypecharacteristic: { b: 'objectid_msdyn_incidenttypecharacteristic', a: '_objectid_value', c: 'msdyn_incidenttypecharacteristics', d: 'msdyn_incidenttypecharacteristic' },
			objectid_msdyn_incidenttypeproduct: { b: 'objectid_msdyn_incidenttypeproduct', a: '_objectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			objectid_msdyn_incidenttypeservice: { b: 'objectid_msdyn_incidenttypeservice', a: '_objectid_value', c: 'msdyn_incidenttypeservices', d: 'msdyn_incidenttypeservice' },
			objectid_msdyn_incidenttypessetup: { b: 'objectid_msdyn_incidenttypessetup', a: '_objectid_value', c: 'msdyn_incidenttypessetups', d: 'msdyn_incidenttypessetup' },
			objectid_msdyn_inspectionattachment: { b: 'objectid_msdyn_inspectionattachment', a: '_objectid_value', c: 'msdyn_inspectionattachments', d: 'msdyn_inspectionattachment' },
			objectid_msdyn_insurance: { b: 'objectid_msdyn_insurance', a: '_objectid_value', c: 'msdyn_insurances', d: 'msdyn_insurance' },
			objectid_msdyn_inventoryadjustment: { b: 'objectid_msdyn_inventoryadjustment', a: '_objectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			objectid_msdyn_inventoryadjustmentproduct: { b: 'objectid_msdyn_inventoryadjustmentproduct', a: '_objectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			objectid_msdyn_inventoryjournal: { b: 'objectid_msdyn_inventoryjournal', a: '_objectid_value', c: 'msdyn_inventoryjournals', d: 'msdyn_inventoryjournal' },
			objectid_msdyn_inventorytransfer: { b: 'objectid_msdyn_inventorytransfer', a: '_objectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			objectid_msdyn_iotalert: { b: 'objectid_msdyn_iotalert', a: '_objectid_value', c: 'msdyn_iotalerts', d: 'msdyn_iotalert' },
			objectid_msdyn_iotdevice: { b: 'objectid_msdyn_iotdevice', a: '_objectid_value', c: 'msdyn_iotdevices', d: 'msdyn_iotdevice' },
			objectid_msdyn_iotdevicecategory: { b: 'objectid_msdyn_iotdevicecategory', a: '_objectid_value', c: 'msdyn_iotdevicecategories', d: 'msdyn_iotdevicecategory' },
			objectid_msdyn_iotdevicecommand: { b: 'objectid_msdyn_iotdevicecommand', a: '_objectid_value', c: 'msdyn_iotdevicecommands', d: 'msdyn_iotdevicecommand' },
			objectid_msdyn_iotdeviceregistrationhistory: { b: 'objectid_msdyn_iotdeviceregistrationhistory', a: '_objectid_value', c: 'msdyn_iotdeviceregistrationhistories', d: 'msdyn_iotdeviceregistrationhistory' },
			objectid_msdyn_liveconversation: { b: 'objectid_msdyn_liveconversation', a: '_objectid_value', c: 'msdyn_liveconversations', d: 'msdyn_liveconversation' },
			objectid_msdyn_ocflaggedspam: { b: 'objectid_msdyn_ocflaggedspam', a: '_objectid_value', c: 'msdyn_ocflaggedspams', d: 'msdyn_ocflaggedspam' },
			objectid_msdyn_ocliveworkitem: { b: 'objectid_msdyn_ocliveworkitem', a: '_objectid_value', c: 'msdyn_ocliveworkitems', d: 'msdyn_ocliveworkitem' },
			objectid_msdyn_ocoutboundmessage: { b: 'objectid_msdyn_ocoutboundmessage', a: '_objectid_value', c: 'msdyn_ocoutboundmessages', d: 'msdyn_ocoutboundmessage' },
			objectid_msdyn_ocsession: { b: 'objectid_msdyn_ocsession', a: '_objectid_value', c: 'msdyn_ocsessions', d: 'msdyn_ocsession' },
			objectid_msdyn_ocvoicemail: { b: 'objectid_msdyn_ocvoicemail', a: '_objectid_value', c: 'msdyn_ocvoicemails', d: 'msdyn_ocvoicemail' },
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
			objectid_msdyn_productinventory: { b: 'objectid_msdyn_productinventory', a: '_objectid_value', c: 'msdyn_productinventories', d: 'msdyn_productinventory' },
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
			objectid_msdyn_requirementcharacteristic: { b: 'objectid_msdyn_requirementcharacteristic', a: '_objectid_value', c: 'msdyn_requirementcharacteristics', d: 'msdyn_requirementcharacteristic' },
			objectid_msdyn_requirementresourcecategory: { b: 'objectid_msdyn_requirementresourcecategory', a: '_objectid_value', c: 'msdyn_requirementresourcecategories', d: 'msdyn_requirementresourcecategory' },
			objectid_msdyn_requirementresourcepreference: { b: 'objectid_msdyn_requirementresourcepreference', a: '_objectid_value', c: 'msdyn_requirementresourcepreferences', d: 'msdyn_requirementresourcepreference' },
			objectid_msdyn_requirementstatus: { b: 'objectid_msdyn_requirementstatus', a: '_objectid_value', c: 'msdyn_requirementstatuses', d: 'msdyn_requirementstatus' },
			objectid_msdyn_resourcepaytype: { b: 'objectid_msdyn_resourcepaytype', a: '_objectid_value', c: 'msdyn_resourcepaytypes', d: 'msdyn_resourcepaytype' },
			objectid_msdyn_resourcerequirement: { b: 'objectid_msdyn_resourcerequirement', a: '_objectid_value', c: 'msdyn_resourcerequirements', d: 'msdyn_resourcerequirement' },
			objectid_msdyn_resourcerequirementdetail: { b: 'objectid_msdyn_resourcerequirementdetail', a: '_objectid_value', c: 'msdyn_resourcerequirementdetails', d: 'msdyn_resourcerequirementdetail' },
			objectid_msdyn_resourceterritory: { b: 'objectid_msdyn_resourceterritory', a: '_objectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			objectid_msdyn_rma: { b: 'objectid_msdyn_rma', a: '_objectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			objectid_msdyn_rmaproduct: { b: 'objectid_msdyn_rmaproduct', a: '_objectid_value', c: 'msdyn_rmaproducts', d: 'msdyn_rmaproduct' },
			objectid_msdyn_rmareceipt: { b: 'objectid_msdyn_rmareceipt', a: '_objectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			objectid_msdyn_rmareceiptproduct: { b: 'objectid_msdyn_rmareceiptproduct', a: '_objectid_value', c: 'msdyn_rmareceiptproducts', d: 'msdyn_rmareceiptproduct' },
			objectid_msdyn_rmasubstatus: { b: 'objectid_msdyn_rmasubstatus', a: '_objectid_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			objectid_msdyn_rtv: { b: 'objectid_msdyn_rtv', a: '_objectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			objectid_msdyn_rtvproduct: { b: 'objectid_msdyn_rtvproduct', a: '_objectid_value', c: 'msdyn_rtvproducts', d: 'msdyn_rtvproduct' },
			objectid_msdyn_rtvsubstatus: { b: 'objectid_msdyn_rtvsubstatus', a: '_objectid_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			objectid_msdyn_salessuggestion: { b: 'objectid_msdyn_salessuggestion', a: '_objectid_value', c: 'msdyn_salessuggestions', d: 'msdyn_salessuggestion' },
			objectid_msdyn_servicetasktype: { b: 'objectid_msdyn_servicetasktype', a: '_objectid_value', c: 'msdyn_servicetasktypes', d: 'msdyn_servicetasktype' },
			objectid_msdyn_shipvia: { b: 'objectid_msdyn_shipvia', a: '_objectid_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			objectid_msdyn_soundfile: { b: 'objectid_msdyn_soundfile', a: '_objectid_value', c: 'msdyn_soundfiles', d: 'msdyn_soundfile' },
			objectid_msdyn_soundnotificationsetting: { b: 'objectid_msdyn_soundnotificationsetting', a: '_objectid_value', c: 'msdyn_soundnotificationsettings', d: 'msdyn_soundnotificationsetting' },
			objectid_msdyn_swarm: { b: 'objectid_msdyn_swarm', a: '_objectid_value', c: 'msdyn_swarms', d: 'msdyn_swarm' },
			objectid_msdyn_systemuserschedulersetting: { b: 'objectid_msdyn_systemuserschedulersetting', a: '_objectid_value', c: 'msdyn_systemuserschedulersettings', d: 'msdyn_systemuserschedulersetting' },
			objectid_msdyn_taggedrecord: { b: 'objectid_msdyn_taggedrecord', a: '_objectid_value', c: 'msdyn_taggedrecords', d: 'msdyn_taggedrecord' },
			objectid_msdyn_taxcode: { b: 'objectid_msdyn_taxcode', a: '_objectid_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			objectid_msdyn_taxcodedetail: { b: 'objectid_msdyn_taxcodedetail', a: '_objectid_value', c: 'msdyn_taxcodedetails', d: 'msdyn_taxcodedetail' },
			objectid_msdyn_timeentry: { b: 'objectid_msdyn_timeentry', a: '_objectid_value', c: 'msdyn_timeentries', d: 'msdyn_timeentry' },
			objectid_msdyn_timegroup: { b: 'objectid_msdyn_timegroup', a: '_objectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			objectid_msdyn_timegroupdetail: { b: 'objectid_msdyn_timegroupdetail', a: '_objectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			objectid_msdyn_timeoffrequest: { b: 'objectid_msdyn_timeoffrequest', a: '_objectid_value', c: 'msdyn_timeoffrequests', d: 'msdyn_timeoffrequest' },
			objectid_msdyn_transactionorigin: { b: 'objectid_msdyn_transactionorigin', a: '_objectid_value', c: 'msdyn_transactionorigins', d: 'msdyn_transactionorigin' },
			objectid_msdyn_transcript: { b: 'objectid_msdyn_transcript', a: '_objectid_value', c: 'msdyn_transcripts', d: 'msdyn_transcript' },
			objectid_msdyn_warehouse: { b: 'objectid_msdyn_warehouse', a: '_objectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			objectid_msdyn_workorder: { b: 'objectid_msdyn_workorder', a: '_objectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			objectid_msdyn_workordercharacteristic: { b: 'objectid_msdyn_workordercharacteristic', a: '_objectid_value', c: 'msdyn_workordercharacteristics', d: 'msdyn_workordercharacteristic' },
			objectid_msdyn_workorderincident: { b: 'objectid_msdyn_workorderincident', a: '_objectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			objectid_msdyn_workorderproduct: { b: 'objectid_msdyn_workorderproduct', a: '_objectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			objectid_msdyn_workorderresourcerestriction: { b: 'objectid_msdyn_workorderresourcerestriction', a: '_objectid_value', c: 'msdyn_workorderresourcerestrictions', d: 'msdyn_workorderresourcerestriction' },
			objectid_msdyn_workorderservice: { b: 'objectid_msdyn_workorderservice', a: '_objectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			objectid_msdyn_workorderservicetask: { b: 'objectid_msdyn_workorderservicetask', a: '_objectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			objectid_msdyn_workordersubstatus: { b: 'objectid_msdyn_workordersubstatus', a: '_objectid_value', c: 'msdyn_workordersubstatuses', d: 'msdyn_workordersubstatus' },
			objectid_msevtmgt_checkin: { b: 'objectid_msevtmgt_checkin', a: '_objectid_value', c: 'msevtmgt_checkins', d: 'msevtmgt_checkin' },
			objectid_msevtmgt_event: { b: 'objectid_msevtmgt_event', a: '_objectid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			objectid_msevtmgt_eventpurchase: { b: 'objectid_msevtmgt_eventpurchase', a: '_objectid_value', c: 'msevtmgt_eventpurchases', d: 'msevtmgt_eventpurchase' },
			objectid_msevtmgt_eventpurchaseattendee: { b: 'objectid_msevtmgt_eventpurchaseattendee', a: '_objectid_value', c: 'msevtmgt_eventpurchaseattendees', d: 'msevtmgt_eventpurchaseattendee' },
			objectid_msevtmgt_eventpurchasepass: { b: 'objectid_msevtmgt_eventpurchasepass', a: '_objectid_value', c: 'msevtmgt_eventpurchasepasses', d: 'msevtmgt_eventpurchasepass' },
			objectid_msevtmgt_eventregistration: { b: 'objectid_msevtmgt_eventregistration', a: '_objectid_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			objectid_msevtmgt_hotel: { b: 'objectid_msevtmgt_hotel', a: '_objectid_value', c: 'msevtmgt_hotels', d: 'msevtmgt_hotel' },
			objectid_msevtmgt_hotelroomallocation: { b: 'objectid_msevtmgt_hotelroomallocation', a: '_objectid_value', c: 'msevtmgt_hotelroomallocations', d: 'msevtmgt_hotelroomallocation' },
			objectid_msevtmgt_hotelroomreservation: { b: 'objectid_msevtmgt_hotelroomreservation', a: '_objectid_value', c: 'msevtmgt_hotelroomreservations', d: 'msevtmgt_hotelroomreservation' },
			objectid_msevtmgt_layout: { b: 'objectid_msevtmgt_layout', a: '_objectid_value', c: 'msevtmgt_layouts', d: 'msevtmgt_layout' },
			objectid_msevtmgt_room: { b: 'objectid_msevtmgt_room', a: '_objectid_value', c: 'msevtmgt_rooms', d: 'msevtmgt_room' },
			objectid_msevtmgt_session: { b: 'objectid_msevtmgt_session', a: '_objectid_value', c: 'msevtmgt_sessions', d: 'msevtmgt_session' },
			objectid_msevtmgt_sessionregistration: { b: 'objectid_msevtmgt_sessionregistration', a: '_objectid_value', c: 'msevtmgt_sessionregistrations', d: 'msevtmgt_sessionregistration' },
			objectid_msevtmgt_sessiontrack: { b: 'objectid_msevtmgt_sessiontrack', a: '_objectid_value', c: 'msevtmgt_sessiontracks', d: 'msevtmgt_sessiontrack' },
			objectid_msevtmgt_speaker: { b: 'objectid_msevtmgt_speaker', a: '_objectid_value', c: 'msevtmgt_speakers', d: 'msevtmgt_speaker' },
			objectid_msevtmgt_speakerengagement: { b: 'objectid_msevtmgt_speakerengagement', a: '_objectid_value', c: 'msevtmgt_speakerengagements', d: 'msevtmgt_speakerengagement' },
			objectid_msevtmgt_sponsorablearticle: { b: 'objectid_msevtmgt_sponsorablearticle', a: '_objectid_value', c: 'msevtmgt_sponsorablearticles', d: 'msevtmgt_sponsorablearticle' },
			objectid_msevtmgt_sponsorship: { b: 'objectid_msevtmgt_sponsorship', a: '_objectid_value', c: 'msevtmgt_sponsorships', d: 'msevtmgt_sponsorship' },
			objectid_msevtmgt_venue: { b: 'objectid_msevtmgt_venue', a: '_objectid_value', c: 'msevtmgt_venues', d: 'msevtmgt_venue' },
			objectid_msevtmgt_webinarconfiguration: { b: 'objectid_msevtmgt_webinarconfiguration', a: '_objectid_value', c: 'msevtmgt_webinarconfigurations', d: 'msevtmgt_webinarconfiguration' },
			objectid_msevtmgt_webinarprovider: { b: 'objectid_msevtmgt_webinarprovider', a: '_objectid_value', c: 'msevtmgt_webinarproviders', d: 'msevtmgt_webinarprovider' },
			objectid_msfp_alert: { b: 'objectid_msfp_alert', a: '_objectid_value', c: 'msfp_alerts', d: 'msfp_alert' },
			objectid_msfp_question: { b: 'objectid_msfp_question', a: '_objectid_value', c: 'msfp_questions', d: 'msfp_question' },
			objectid_msfp_surveyinvite: { b: 'objectid_msfp_surveyinvite', a: '_objectid_value', c: 'msfp_surveyinvites', d: 'msfp_surveyinvite' },
			objectid_msfp_surveyresponse: { b: 'objectid_msfp_surveyresponse', a: '_objectid_value', c: 'msfp_surveyresponses', d: 'msfp_surveyresponse' },
			objectid_mspcat_catalogsubmissionfiles: { b: 'objectid_mspcat_catalogsubmissionfiles', a: '_objectid_value', c: 'mspcat_catalogsubmissionfileses', d: 'mspcat_catalogsubmissionfiles' },
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
		var annotation = {};
		annotation.ODataEntity = e;
		annotation.FormattedValue = {};
		for (var field in _annotation) {
			var a = _annotation[field].a;
			var b = _annotation[field].b;
			var c = _annotation[field].c;
			var d = _annotation[field].d;
			var g = _annotation[field].g;
			var r = _annotation[field].r;
			webApiField(annotation, field, e, a, b, c, d, r, u, g);
		}
		annotation.Entity = u;
		annotation.EntityName = 'annotation';
		annotation.EntityCollectionName = 'annotations';
		annotation['@odata.etag'] = e['@odata.etag'];
		annotation.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		annotation.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
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
		ObjectIdTypeCode : {
		},
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