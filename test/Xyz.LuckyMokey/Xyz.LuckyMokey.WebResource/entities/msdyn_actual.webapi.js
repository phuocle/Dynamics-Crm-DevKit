'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.msdyn_actualApi = function (e) {
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
		var msdyn_actual = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AccountCustomer: { b: 'msdyn_AccountCustomer', a: '_msdyn_accountcustomer_value', c: 'accounts', d: 'account' },
			msdyn_AccountingDate_UtcDateOnly: { a: 'msdyn_accountingdate' },
			msdyn_AccountVendor: { b: 'msdyn_AccountVendor', a: '_msdyn_accountvendor_value', c: 'accounts', d: 'account' },
			msdyn_actualId: { a: 'msdyn_actualid' },
			msdyn_AdjustmentStatus: { a: 'msdyn_adjustmentstatus' },
			msdyn_Agreement: { b: 'msdyn_Agreement', a: '_msdyn_agreement_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			msdyn_Amount: { a: 'msdyn_amount' },
			msdyn_amount_Base: { a: 'msdyn_amount_base', r: true },
			msdyn_AmountMethod: { a: 'msdyn_amountmethod' },
			msdyn_BasisAmount: { a: 'msdyn_basisamount' },
			msdyn_basisamount_Base: { a: 'msdyn_basisamount_base', r: true },
			msdyn_BasisPrice: { a: 'msdyn_basisprice' },
			msdyn_basisprice_Base: { a: 'msdyn_basisprice_base', r: true },
			msdyn_BasisQuantity: { a: 'msdyn_basisquantity' },
			msdyn_BillingStatus: { a: 'msdyn_billingstatus' },
			msdyn_BillingType: { a: 'msdyn_billingtype' },
			msdyn_bookableresource: { b: 'msdyn_bookableresource', a: '_msdyn_bookableresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_ContactCustomer: { b: 'msdyn_ContactCustomer', a: '_msdyn_contactcustomer_value', c: 'contacts', d: 'contact' },
			msdyn_ContactVendor: { b: 'msdyn_ContactVendor', a: '_msdyn_contactvendor_value', c: 'contacts', d: 'contact' },
			msdyn_contractorganizationalunitid: { b: 'msdyn_contractorganizationalunitid', a: '_msdyn_contractorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_CustomerType: { a: 'msdyn_customertype' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_DocumentDate_UtcDateOnly: { a: 'msdyn_documentdate' },
			msdyn_EndDateTime_UtcDateAndTime: { a: 'msdyn_enddatetime' },
			msdyn_ExchangeRateDate_UtcDateOnly: { a: 'msdyn_exchangeratedate' },
			msdyn_externaldescription: { a: 'msdyn_externaldescription' },
			msdyn_ExternalReferenceDate_UtcDateOnly: { a: 'msdyn_externalreferencedate' },
			msdyn_ExternalReferenceID: { a: 'msdyn_externalreferenceid' },
			msdyn_IncidentType: { b: 'msdyn_IncidentType', a: '_msdyn_incidenttype_value', c: 'msdyn_incidenttypes', d: 'msdyn_incidenttype' },
			msdyn_Invoice: { b: 'msdyn_Invoice', a: '_msdyn_invoice_value', c: 'invoices', d: 'invoice' },
			msdyn_IsJournalized: { a: 'msdyn_isjournalized' },
			msdyn_JournalType: { a: 'msdyn_journaltype' },
			msdyn_Percent: { a: 'msdyn_percent' },
			msdyn_Price: { a: 'msdyn_price' },
			msdyn_price_Base: { a: 'msdyn_price_base', r: true },
			msdyn_PriceList: { b: 'msdyn_PriceList', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_ProductType: { a: 'msdyn_producttype' },
			msdyn_Project: { b: 'msdyn_Project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_Quantity: { a: 'msdyn_quantity' },
			msdyn_ResourceCategory: { b: 'msdyn_ResourceCategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_ResourceOrganizationalUnitId: { b: 'msdyn_ResourceOrganizationalUnitId', a: '_msdyn_resourceorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_SalesContract: { b: 'msdyn_SalesContract', a: '_msdyn_salescontract_value', c: 'salesorders', d: 'salesorder' },
			msdyn_SalesContractLine: { a: 'msdyn_salescontractline' },
			msdyn_SalesContractLineId: { b: 'msdyn_SalesContractLineId', a: '_msdyn_salescontractlineid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			msdyn_ServiceAccount: { b: 'msdyn_ServiceAccount', a: '_msdyn_serviceaccount_value', c: 'accounts', d: 'account' },
			msdyn_ServiceTerritory: { b: 'msdyn_ServiceTerritory', a: '_msdyn_serviceterritory_value', c: 'territories', d: 'territory' },
			msdyn_StartDateTime_UtcDateAndTime: { a: 'msdyn_startdatetime' },
			msdyn_Task: { b: 'msdyn_Task', a: '_msdyn_task_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_TaxCode: { b: 'msdyn_TaxCode', a: '_msdyn_taxcode_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			msdyn_TransactionCategory: { b: 'msdyn_TransactionCategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			msdyn_TransactionClassification: { a: 'msdyn_transactionclassification' },
			msdyn_TransactionTypeCode: { a: 'msdyn_transactiontypecode' },
			msdyn_Unit: { b: 'msdyn_Unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_UnitSchedule: { b: 'msdyn_UnitSchedule', a: '_msdyn_unitschedule_value', c: 'uomschedules', d: 'uomschedule' },
			msdyn_VendorType: { a: 'msdyn_vendortype' },
			msdyn_Warehouse: { b: 'msdyn_Warehouse', a: '_msdyn_warehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_WorkLocation: { a: 'msdyn_worklocation' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_WorkOrderType: { b: 'msdyn_WorkOrderType', a: '_msdyn_workordertype_value', c: 'msdyn_workordertypes', d: 'msdyn_workordertype' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_actual) {
			var a = msdyn_actual[field].a;
			var b = msdyn_actual[field].b;
			var c = msdyn_actual[field].c;
			var d = msdyn_actual[field].d;
			var g = msdyn_actual[field].g;
			var r = msdyn_actual[field].r;
			msdyn_actual[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_actual.Entity = u;
		msdyn_actual.EntityName = 'msdyn_actual';
		msdyn_actual.EntityCollectionName = 'msdyn_actuals';
		msdyn_actual['@odata.etag'] = e['@odata.etag'];
		msdyn_actual.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_actual.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_actual;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_actual = {
		msdyn_AdjustmentStatus : {
			In_Process: 192350000,
			Adjusted: 192350001,
			Unadjustable: 192350002
		},
		msdyn_AmountMethod : {
			Tax_Calculation: 690970000,
			Multiply_Quantity_By_Price: 192350000,
			Fixed_Price: 192350001,
			Multiply_Basis_Quantity_By_Price: 192350002,
			Multiply_Basis_Amount_By_Percent: 192350003
		},
		msdyn_BillingStatus : {
			Ready_to_Invoice: 192350004,
			Work_order_closed_posted: 690970000,
			Unbilled_Sales_Created: 192350000,
			Customer_Invoice_Created: 192350001,
			Customer_Invoice_Posted: 192350002,
			Canceled: 192350003
		},
		msdyn_BillingType : {
			Non_Chargeable: 192350000,
			Chargeable: 192350001,
			Complimentary: 192350002,
			Not_Available: 192350003
		},
		msdyn_CustomerType : {
			Account: 192350001,
			Contact: 192350002
		},
		msdyn_JournalType : {
			Working_Hours: 690970000,
			Break: 690970001,
			Travel: 690970002,
			Overtime: 690970003,
			Business_Closure: 690970004
		},
		msdyn_ProductType : {
			Inventory: 690970000,
			Non_Inventory: 690970001,
			Service: 690970002
		},
		msdyn_TransactionClassification : {
			Commission: 690970000,
			Additional: 690970001,
			Tax: 690970002,
			Time: 192350000,
			Expense: 192350001,
			Material: 192350002,
			Milestone: 192350003,
			Fee: 192350004
		},
		msdyn_TransactionTypeCode : {
			Cost: 192350000,
			Project_Contract: 192350004,
			Unbilled_Sales: 192350005,
			Billed_Sales: 192350006,
			Resourcing_Unit_Cost: 192350007,
			Inter_Organizational_Sales: 192350008
		},
		msdyn_VendorType : {
			Account: 192350001,
			Contact: 192350002
		},
		msdyn_WorkLocation : {
			Onsite: 690970000,
			Facility: 690970001,
			Location_Agnostic: 690970002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
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