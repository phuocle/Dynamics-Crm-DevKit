'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.SharePointDocumentApi = function (e) {
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
		var sharepointdocument = {
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
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: '', d: '', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '', r: true },
			ReadUrl: { a: 'readurl', r: true },
			regardingobjectid_account: { b: 'regardingobjectid_account', a: '_regardingobjectid_value', c: 'accounts', d: 'account' },
			regardingobjectid_contact: { b: 'regardingobjectid_contact', a: '_regardingobjectid_value', c: 'contacts', d: 'contact' },
			regardingobjectid_kbarticle: { b: 'regardingobjectid_kbarticle', a: '_regardingobjectid_value', c: 'kbarticles', d: 'kbarticle' },
			regardingobjectid_knowledgearticle: { b: 'regardingobjectid_knowledgearticle', a: '_regardingobjectid_value', c: 'knowledgearticles', d: 'knowledgearticle' },
			regardingobjectid_lead: { b: 'regardingobjectid_lead', a: '_regardingobjectid_value', c: 'leads', d: 'lead' },
			regardingobjectid_msdyn_agreement: { b: 'regardingobjectid_msdyn_agreement', a: '_regardingobjectid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			regardingobjectid_msdyn_agreementbookingdate: { b: 'regardingobjectid_msdyn_agreementbookingdate', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			regardingobjectid_msdyn_agreementbookingsetup: { b: 'regardingobjectid_msdyn_agreementbookingsetup', a: '_regardingobjectid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			regardingobjectid_msdyn_agreementinvoicedate: { b: 'regardingobjectid_msdyn_agreementinvoicedate', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicedates', d: 'msdyn_agreementinvoicedate' },
			regardingobjectid_msdyn_agreementinvoicesetup: { b: 'regardingobjectid_msdyn_agreementinvoicesetup', a: '_regardingobjectid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			regardingobjectid_msdyn_bookingtimestamp: { b: 'regardingobjectid_msdyn_bookingtimestamp', a: '_regardingobjectid_value', c: 'msdyn_bookingtimestamps', d: 'msdyn_bookingtimestamp' },
			regardingobjectid_msdyn_expense: { b: 'regardingobjectid_msdyn_expense', a: '_regardingobjectid_value', c: 'msdyn_expenses', d: 'msdyn_expense' },
			regardingobjectid_msdyn_incidenttypeproduct: { b: 'regardingobjectid_msdyn_incidenttypeproduct', a: '_regardingobjectid_value', c: 'msdyn_incidenttypeproducts', d: 'msdyn_incidenttypeproduct' },
			regardingobjectid_msdyn_inventoryadjustment: { b: 'regardingobjectid_msdyn_inventoryadjustment', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustments', d: 'msdyn_inventoryadjustment' },
			regardingobjectid_msdyn_inventoryadjustmentproduct: { b: 'regardingobjectid_msdyn_inventoryadjustmentproduct', a: '_regardingobjectid_value', c: 'msdyn_inventoryadjustmentproducts', d: 'msdyn_inventoryadjustmentproduct' },
			regardingobjectid_msdyn_inventorytransfer: { b: 'regardingobjectid_msdyn_inventorytransfer', a: '_regardingobjectid_value', c: 'msdyn_inventorytransfers', d: 'msdyn_inventorytransfer' },
			regardingobjectid_msdyn_knowledgearticletemplate: { b: 'regardingobjectid_msdyn_knowledgearticletemplate', a: '_regardingobjectid_value', c: 'msdyn_knowledgearticletemplates', d: 'msdyn_knowledgearticletemplate' },
			regardingobjectid_msdyn_playbookactivity: { b: 'regardingobjectid_msdyn_playbookactivity', a: '_regardingobjectid_value', c: 'msdyn_playbookactivities', d: 'msdyn_playbookactivity' },
			regardingobjectid_msdyn_project: { b: 'regardingobjectid_msdyn_project', a: '_regardingobjectid_value', c: 'msdyn_projects', d: 'msdyn_project' },
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
			regardingobjectid_opportunity: { b: 'regardingobjectid_opportunity', a: '_regardingobjectid_value', c: 'opportunities', d: 'opportunity' },
			regardingobjectid_product: { b: 'regardingobjectid_product', a: '_regardingobjectid_value', c: 'products', d: 'product' },
			regardingobjectid_quote: { b: 'regardingobjectid_quote', a: '_regardingobjectid_value', c: 'quotes', d: 'quote' },
			regardingobjectid_salesliterature: { b: 'regardingobjectid_salesliterature', a: '_regardingobjectid_value', c: 'salesliteratures', d: 'salesliterature' },
			RegardingObjectIdYomiName: { a: 'regardingobjectidyominame' },
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
		for (var field in sharepointdocument) {
			var a = sharepointdocument[field].a;
			var b = sharepointdocument[field].b;
			var c = sharepointdocument[field].c;
			var d = sharepointdocument[field].d;
			var g = sharepointdocument[field].g;
			var r = sharepointdocument[field].r;
			sharepointdocument[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		sharepointdocument.Entity = u;
		sharepointdocument.EntityName = 'sharepointdocument';
		sharepointdocument.EntityCollectionName = 'sharepointdocuments';
		sharepointdocument['@odata.etag'] = e['@odata.etag'];
		sharepointdocument.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		sharepointdocument.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return sharepointdocument;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.SharePointDocument = {
		DocumentLocationType : {
			General: 0,
			Dedicated_for_OneNote_Integration: 1
		},
		ServiceType : {
			SharePoint: 0,
			OneDrive: 1,
			Shared_with_me: 2,
			MS_Teams: 3
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