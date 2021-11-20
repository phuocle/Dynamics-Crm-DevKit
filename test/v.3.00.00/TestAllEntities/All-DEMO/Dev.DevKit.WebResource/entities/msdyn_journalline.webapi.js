'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_journallineApi = function (e) {
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
		var msdyn_journalline = {
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
			msdyn_IsPosted: { a: 'msdyn_isposted' },
			msdyn_Journal: { b: 'msdyn_Journal', a: '_msdyn_journal_value', c: 'msdyn_journals', d: 'msdyn_journal' },
			msdyn_journallineId: { a: 'msdyn_journallineid' },
			msdyn_Percent: { a: 'msdyn_percent' },
			msdyn_Price: { a: 'msdyn_price' },
			msdyn_price_Base: { a: 'msdyn_price_base', r: true },
			msdyn_PriceList: { b: 'msdyn_PriceList', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_Project: { b: 'msdyn_Project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_Quantity: { a: 'msdyn_quantity' },
			msdyn_ResourceCategory: { b: 'msdyn_ResourceCategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_ResourceOrganizationalUnitId: { b: 'msdyn_ResourceOrganizationalUnitId', a: '_msdyn_resourceorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_SalesContract: { b: 'msdyn_SalesContract', a: '_msdyn_salescontract_value', c: 'salesorders', d: 'salesorder' },
			msdyn_SalesContractLine: { a: 'msdyn_salescontractline' },
			msdyn_SalesContractLineId: { b: 'msdyn_SalesContractLineId', a: '_msdyn_salescontractlineid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			msdyn_StartDateTime_UtcDateAndTime: { a: 'msdyn_startdatetime' },
			msdyn_Task: { b: 'msdyn_Task', a: '_msdyn_task_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_TransactionCategory: { b: 'msdyn_TransactionCategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			msdyn_TransactionClassification: { a: 'msdyn_transactionclassification' },
			msdyn_TransactionTypeCode: { a: 'msdyn_transactiontypecode' },
			msdyn_Unit: { b: 'msdyn_Unit', a: '_msdyn_unit_value', c: 'uoms', d: 'uom' },
			msdyn_UnitSchedule: { b: 'msdyn_UnitSchedule', a: '_msdyn_unitschedule_value', c: 'uomschedules', d: 'uomschedule' },
			msdyn_VendorType: { a: 'msdyn_vendortype' },
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
		for (var field in msdyn_journalline) {
			var a = msdyn_journalline[field].a;
			var b = msdyn_journalline[field].b;
			var c = msdyn_journalline[field].c;
			var d = msdyn_journalline[field].d;
			var g = msdyn_journalline[field].g;
			var r = msdyn_journalline[field].r;
			msdyn_journalline[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_journalline.Entity = u;
		msdyn_journalline.EntityName = 'msdyn_journalline';
		msdyn_journalline.EntityCollectionName = 'msdyn_journallines';
		msdyn_journalline['@odata.etag'] = e['@odata.etag'];
		msdyn_journalline.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_journalline.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_journalline;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_journalline = {
			msdyn_AmountMethod : {
				Fixed_Price: 192350001,
				Multiply_Basis_Amount_By_Percent: 192350003,
				Multiply_Basis_Quantity_By_Price: 192350002,
				Multiply_Quantity_By_Price: 192350000,
				Tax_Calculation: 690970000
			},
			msdyn_BillingStatus : {
				Canceled: 192350003,
				Customer_Invoice_Created: 192350001,
				Customer_Invoice_Posted: 192350002,
				Ready_to_Invoice: 192350004,
				Unbilled_Sales_Created: 192350000,
				Work_order_closed_posted: 690970000
			},
			msdyn_BillingType : {
				Chargeable: 192350001,
				Complimentary: 192350002,
				Non_Chargeable: 192350000,
				Not_Available: 192350003
			},
			msdyn_CustomerType : {
				Account: 192350001,
				Contact: 192350002
			},
			msdyn_TransactionClassification : {
				Additional: 690970001,
				Commission: 690970000,
				Expense: 192350001,
				Fee: 192350004,
				Material: 192350002,
				Milestone: 192350003,
				Tax: 690970002,
				Time: 192350000
			},
			msdyn_TransactionTypeCode : {
				Billed_Sales: 192350006,
				Cost: 192350000,
				InterOrganizational_Sales: 192350008,
				Project_Contract: 192350004,
				Resourcing_Unit_Cost: 192350007,
				Unbilled_Sales: 192350005
			},
			msdyn_VendorType : {
				Account: 192350001,
				Contact: 192350002
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