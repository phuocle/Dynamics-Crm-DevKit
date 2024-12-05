'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.SharePointDocumentApi = function (e) {
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
		var _sharepointdocument = {
			AbsoluteUrl: { a: 'absoluteurl', r: true },
			AppCreatedBy: { a: 'appcreatedby', r: true },
			AppModifiedBy: { a: 'appmodifiedby', r: true },
			Author: { a: 'author' },
			BusinessUnitId: { b: 'businessunitid', a: '_businessunitid_value', c: 'businessunits', d: 'businessunit' },
			CheckedOutTo: { a: 'checkedoutto', r: true },
			CheckInComment: { a: 'checkincomment', r: true },
			ChildFolderCount: { a: 'childfoldercount', r: true },
			ChildItemCount: { a: 'childitemcount', r: true },
			ContentType: { a: 'contenttype', r: true },
			ContentTypeId: { a: 'contenttypeid', r: true },
			CopySource: { a: 'copysource', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DocumentId: { a: 'documentid', r: true },
			DocumentLocationType: { a: 'documentlocationtype', r: true },
			Edit: { a: 'edit', r: true },
			EditUrl: { a: 'editurl', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			FileSize: { a: 'filesize', r: true },
			FileType: { a: 'filetype', r: true },
			FullName: { a: 'fullname', r: true },
			IconClassName: { a: 'iconclassname', r: true },
			IsCheckedOut: { a: 'ischeckedout', r: true },
			IsFolder: { a: 'isfolder', r: true },
			IsRecursiveFetch: { a: 'isrecursivefetch', r: true },
			LocationId: { a: 'locationid', r: true },
			LocationName: { a: 'locationname', r: true },
			Modified_UtcDateAndTime: { a: 'modified', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			ReadUrl: { a: 'readurl', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_adx_portalcomment: { b: 'regardingobjectid_adx_portalcomment', a: '_regardingobjectid_value', c: 'adx_portalcomments', d: 'adx_portalcomment' },
			regardingobjectid_opportunity: { b: 'regardingobjectid_opportunity', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_incident: { b: 'regardingobjectid_incident', a: '_regardingobjectid_value', c: 'incidents', d: 'incident' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_lead: { b: 'regardingobjectid_lead', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement: { b: 'regardingobjectid_msdyn_agreement', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate: { b: 'regardingobjectid_msdyn_agreementbookingdate', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingsetup: { b: 'regardingobjectid_msdyn_agreementbookingsetup', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate: { b: 'regardingobjectid_msdyn_agreementinvoicedate', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoicesetup: { b: 'regardingobjectid_msdyn_agreementinvoicesetup', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingtimestamp: { b: 'regardingobjectid_msdyn_bookingtimestamp', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_incidenttypeproduct: { b: 'regardingobjectid_msdyn_incidenttypeproduct', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_inventoryadjustment: { b: 'regardingobjectid_msdyn_inventoryadjustment', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventorytransfer: { b: 'regardingobjectid_msdyn_inventorytransfer', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_knowledgearticletemplate: { b: 'regardingobjectid_msdyn_knowledgearticletemplate', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			regardingobjectid_msdyn_playbookactivity: { b: 'regardingobjectid_msdyn_playbookactivity', a: '_regardingobjectid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			regardingobjectid_msdyn_purchaseorder: { b: 'regardingobjectid_msdyn_purchaseorder', a: '_regardingobjectid_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			regardingobjectid_msdyn_purchaseorderproduct: { b: 'regardingobjectid_msdyn_purchaseorderproduct', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderproducts', d: 'msdyn_purchaseorderproduct' },
			regardingobjectid_msdyn_purchaseorderreceipt: { b: 'regardingobjectid_msdyn_purchaseorderreceipt', a: '_regardingobjectid_value', c: 'msdyn_purchaseorderreceipts', d: 'msdyn_purchaseorderreceipt' },
			regardingobjectid_msdyn_resourceterritory: { b: 'regardingobjectid_msdyn_resourceterritory', a: '_regardingobjectid_value', c: 'msdyn_resourceterritories', d: 'msdyn_resourceterritory' },
			regardingobjectid_msdyn_rma: { b: 'regardingobjectid_msdyn_rma', a: '_regardingobjectid_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			regardingobjectid_msdyn_rmareceipt: { b: 'regardingobjectid_msdyn_rmareceipt', a: '_regardingobjectid_value', c: 'msdyn_rmareceipts', d: 'msdyn_rmareceipt' },
			regardingobjectid_msdyn_rtv: { b: 'regardingobjectid_msdyn_rtv', a: '_regardingobjectid_value', c: 'msdyn_rtvs', d: 'msdyn_rtv' },
			regardingobjectid_msdyn_timegroup: { b: 'regardingobjectid_msdyn_timegroup', a: '_regardingobjectid_value', c: 'msdyn_timegroups', d: 'msdyn_timegroup' },
			regardingobjectid_msdyn_timegroupdetail: { b: 'regardingobjectid_msdyn_timegroupdetail', a: '_regardingobjectid_value', c: 'msdyn_timegroupdetails', d: 'msdyn_timegroupdetail' },
			regardingobjectid_msdyn_warehouse: { b: 'regardingobjectid_msdyn_warehouse', a: '_regardingobjectid_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			regardingobjectid_msdyn_workorder: { b: 'regardingobjectid_msdyn_workorder', a: '_regardingobjectid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			regardingobjectid_msdyn_workorderincident: { b: 'regardingobjectid_msdyn_workorderincident', a: '_regardingobjectid_value', c: 'msdyn_workorderincidents', d: 'msdyn_workorderincident' },
			regardingobjectid_msdyn_workorderproduct: { b: 'regardingobjectid_msdyn_workorderproduct', a: '_regardingobjectid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			regardingobjectid_msdyn_workorderservice: { b: 'regardingobjectid_msdyn_workorderservice', a: '_regardingobjectid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			regardingobjectid_msdyn_workorderservicetask: { b: 'regardingobjectid_msdyn_workorderservicetask', a: '_regardingobjectid_value', c: 'msdyn_workorderservicetasks', d: 'msdyn_workorderservicetask' },
			regardingobjectid_product: { b: 'regardingobjectid_product', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			regardingobjectid_quote: { b: 'regardingobjectid_quote', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesliterature: { b: 'regardingobjectid_salesliterature', a: '_regardingobjectid_value', c: 'salesliteratures', d: 'salesliterature' },
			RelativeLocation: { a: 'relativelocation', r: true },
			ServiceType: { a: 'servicetype' },
			SharePointCreatedOn_UtcDateAndTime: { a: 'sharepointcreatedon', r: true },
			SharePointDocumentId: { a: 'sharepointdocumentid' },
			SharePointModifiedBy: { a: 'sharepointmodifiedby', r: true },
			Title: { a: 'title', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency', r: true },
			Version: { a: 'version', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var sharepointdocument = {};
		sharepointdocument.ODataEntity = e;
		sharepointdocument.FormattedValue = {};
		for (var field in _sharepointdocument) {
			var a = _sharepointdocument[field].a;
			var b = _sharepointdocument[field].b;
			var c = _sharepointdocument[field].c;
			var d = _sharepointdocument[field].d;
			var g = _sharepointdocument[field].g;
			var r = _sharepointdocument[field].r;
			webApiField(sharepointdocument, field, e, a, b, c, d, r, u, g);
		}
		sharepointdocument.Entity = u;
		sharepointdocument.EntityName = 'sharepointdocument';
		sharepointdocument.EntityCollectionName = 'sharepointdocuments';
		sharepointdocument['@odata.etag'] = e['@odata.etag'];
		sharepointdocument.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sharepointdocument.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sharepointdocument;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SharePointDocument = {
		DocumentLocationType : {
			Dedicated_for_OneNote_Integration: 1,
			General: 0
		},
		RegardingObjectTypeCode : {
		},
		ServiceType : {
			MS_Teams: 3,
			OneDrive: 1,
			Shared_with_me: 2,
			SharePoint: 0
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