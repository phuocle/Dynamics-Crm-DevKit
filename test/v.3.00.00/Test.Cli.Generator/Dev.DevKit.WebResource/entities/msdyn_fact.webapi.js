'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_factApi = function (e) {
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
		var _msdyn_fact = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AccountCustomer: { b: 'msdyn_AccountCustomer', a: '_msdyn_accountcustomer_value', c: 'accounts', d: 'account' },
			msdyn_AccountVendor: { b: 'msdyn_AccountVendor', a: '_msdyn_accountvendor_value', c: 'accounts', d: 'account' },
			msdyn_ActChargeableBilledSalesAmount: { a: 'msdyn_actchargeablebilledsalesamount' },
			msdyn_actchargeablebilledsalesamount_Base: { a: 'msdyn_actchargeablebilledsalesamount_base', r: true },
			msdyn_ActChargeableBilledSalesQuantity: { a: 'msdyn_actchargeablebilledsalesquantity' },
			msdyn_ActChargeableCostAmount: { a: 'msdyn_actchargeablecostamount' },
			msdyn_actchargeablecostamount_Base: { a: 'msdyn_actchargeablecostamount_base', r: true },
			msdyn_ActChargeableCostQuantity: { a: 'msdyn_actchargeablecostquantity' },
			msdyn_ActChargeableUnbilledSalesAmount: { a: 'msdyn_actchargeableunbilledsalesamount' },
			msdyn_actchargeableunbilledsalesamount_Base: { a: 'msdyn_actchargeableunbilledsalesamount_base', r: true },
			msdyn_ActChargeableUnbilledSalesQuantity: { a: 'msdyn_actchargeableunbilledsalesquantity' },
			msdyn_ActNoChargeBilledSalesAmount: { a: 'msdyn_actnochargebilledsalesamount' },
			msdyn_actnochargebilledsalesamount_Base: { a: 'msdyn_actnochargebilledsalesamount_base', r: true },
			msdyn_ActNoChargeBilledSalesQuantity: { a: 'msdyn_actnochargebilledsalesquantity' },
			msdyn_ActNoChargeCostAmount: { a: 'msdyn_actnochargecostamount' },
			msdyn_actnochargecostamount_Base: { a: 'msdyn_actnochargecostamount_base', r: true },
			msdyn_ActNoChargeCostQuantity: { a: 'msdyn_actnochargecostquantity' },
			msdyn_ActNoChargeUnbilledSalesAmount: { a: 'msdyn_actnochargeunbilledsalesamount' },
			msdyn_actnochargeunbilledsalesamount_Base: { a: 'msdyn_actnochargeunbilledsalesamount_base', r: true },
			msdyn_ActNoChargeUnbilledSalesQuantity: { a: 'msdyn_actnochargeunbilledsalesquantity' },
			msdyn_ActNonChargeableCostAmount: { a: 'msdyn_actnonchargeablecostamount' },
			msdyn_actnonchargeablecostamount_Base: { a: 'msdyn_actnonchargeablecostamount_base', r: true },
			msdyn_ActNonChargeableCostQuantity: { a: 'msdyn_actnonchargeablecostquantity' },
			msdyn_ActNonChargeableUnbilledSalesAmount: { a: 'msdyn_actnonchargeableunbilledsalesamount' },
			msdyn_actnonchargeableunbilledsalesamount_Base: { a: 'msdyn_actnonchargeableunbilledsalesamount_base', r: true },
			msdyn_ActNonChargeableUnbilledSalesQuantity: { a: 'msdyn_actnonchargeableunbilledsalesquantity' },
			msdyn_bookableresource: { b: 'msdyn_bookableresource', a: '_msdyn_bookableresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_ContactCustomer: { b: 'msdyn_ContactCustomer', a: '_msdyn_contactcustomer_value', c: 'contacts', d: 'contact' },
			msdyn_ContactVendor: { b: 'msdyn_ContactVendor', a: '_msdyn_contactvendor_value', c: 'contacts', d: 'contact' },
			msdyn_CustomerType: { a: 'msdyn_customertype' },
			msdyn_DocumentDate_UtcDateOnly: { a: 'msdyn_documentdate' },
			msdyn_earnedrevenue: { a: 'msdyn_earnedrevenue', r: true },
			msdyn_earnedrevenue_Base: { a: 'msdyn_earnedrevenue_base', r: true },
			msdyn_EndDate_UtcDateOnly: { a: 'msdyn_enddate' },
			msdyn_EstChargeableBilledSalesAmount: { a: 'msdyn_estchargeablebilledsalesamount' },
			msdyn_estchargeablebilledsalesamount_Base: { a: 'msdyn_estchargeablebilledsalesamount_base', r: true },
			msdyn_EstChargeableBilledSalesQuantity: { a: 'msdyn_estchargeablebilledsalesquantity' },
			msdyn_EstChargeableCostAmount: { a: 'msdyn_estchargeablecostamount' },
			msdyn_estchargeablecostamount_Base: { a: 'msdyn_estchargeablecostamount_base', r: true },
			msdyn_EstChargeableCostQuantity: { a: 'msdyn_estchargeablecostquantity' },
			msdyn_EstChargeableUnbilledSalesAmount: { a: 'msdyn_estchargeableunbilledsalesamount' },
			msdyn_estchargeableunbilledsalesamount_Base: { a: 'msdyn_estchargeableunbilledsalesamount_base', r: true },
			msdyn_EstChargeableUnbilledSalesQuantity: { a: 'msdyn_estchargeableunbilledsalesquantity' },
			msdyn_Estimate: { b: 'msdyn_Estimate', a: '_msdyn_estimate_value', c: 'msdyn_estimates', d: 'msdyn_estimate' },
			msdyn_estimatelineid: { b: 'msdyn_estimatelineid', a: '_msdyn_estimatelineid_value', c: 'msdyn_estimatelines', d: 'msdyn_estimateline' },
			msdyn_EstNoChargeBilledSalesAmount: { a: 'msdyn_estnochargebilledsalesamount' },
			msdyn_estnochargebilledsalesamount_Base: { a: 'msdyn_estnochargebilledsalesamount_base', r: true },
			msdyn_EstNoChargeBilledSalesQuantity: { a: 'msdyn_estnochargebilledsalesquantity' },
			msdyn_EstNoChargeCostAmount: { a: 'msdyn_estnochargecostamount' },
			msdyn_estnochargecostamount_Base: { a: 'msdyn_estnochargecostamount_base', r: true },
			msdyn_EstNoChargeCostQuantity: { a: 'msdyn_estnochargecostquantity' },
			msdyn_EstNoChargeUnbilledSalesAmount: { a: 'msdyn_estnochargeunbilledsalesamount' },
			msdyn_estnochargeunbilledsalesamount_Base: { a: 'msdyn_estnochargeunbilledsalesamount_base', r: true },
			msdyn_EstNoChargeUnbilledSalesQuantity: { a: 'msdyn_estnochargeunbilledsalesquantity' },
			msdyn_EstNonChargeableCostAmount: { a: 'msdyn_estnonchargeablecostamount' },
			msdyn_estnonchargeablecostamount_Base: { a: 'msdyn_estnonchargeablecostamount_base', r: true },
			msdyn_EstNonChargeableCostQuantity: { a: 'msdyn_estnonchargeablecostquantity' },
			msdyn_EstNonChargeableUnbilledSalesAmount: { a: 'msdyn_estnonchargeableunbilledsalesamount' },
			msdyn_estnonchargeableunbilledsalesamount_Base: { a: 'msdyn_estnonchargeableunbilledsalesamount_base', r: true },
			msdyn_EstNonChargeableUnbilledSalesQuantity: { a: 'msdyn_estnonchargeableunbilledsalesquantity' },
			msdyn_factId: { a: 'msdyn_factid' },
			msdyn_FactType: { a: 'msdyn_facttype' },
			msdyn_grossmargin: { a: 'msdyn_grossmargin', r: true },
			msdyn_grossmargin_Base: { a: 'msdyn_grossmargin_base', r: true },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Product: { b: 'msdyn_Product', a: '_msdyn_product_value', c: 'products', d: 'product' },
			msdyn_Project: { b: 'msdyn_Project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_ResourceCategory: { b: 'msdyn_ResourceCategory', a: '_msdyn_resourcecategory_value', c: 'bookableresourcecategories', d: 'bookableresourcecategory' },
			msdyn_SalesContract: { b: 'msdyn_SalesContract', a: '_msdyn_salescontract_value', c: 'salesorders', d: 'salesorder' },
			msdyn_SalesContractLine: { a: 'msdyn_salescontractline' },
			msdyn_SalesContractLineId: { b: 'msdyn_SalesContractLineId', a: '_msdyn_salescontractlineid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			msdyn_StartDate_UtcDateOnly: { a: 'msdyn_startdate' },
			msdyn_Task: { b: 'msdyn_Task', a: '_msdyn_task_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_totalcost: { a: 'msdyn_totalcost', r: true },
			msdyn_totalcost_Base: { a: 'msdyn_totalcost_base', r: true },
			msdyn_totalhours: { a: 'msdyn_totalhours', r: true },
			msdyn_TransactionCategory: { b: 'msdyn_TransactionCategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			msdyn_TransactionClassification: { a: 'msdyn_transactionclassification' },
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
		var msdyn_fact = {};
		msdyn_fact.ODataEntity = e;
		msdyn_fact.FormattedValue = {};
		for (var field in _msdyn_fact) {
			var a = _msdyn_fact[field].a;
			var b = _msdyn_fact[field].b;
			var c = _msdyn_fact[field].c;
			var d = _msdyn_fact[field].d;
			var g = _msdyn_fact[field].g;
			var r = _msdyn_fact[field].r;
			webApiField(msdyn_fact, field, e, a, b, c, d, r, u, g);
		}
		msdyn_fact.Entity = u;
		msdyn_fact.EntityName = 'msdyn_fact';
		msdyn_fact.EntityCollectionName = 'msdyn_facts';
		msdyn_fact['@odata.etag'] = e['@odata.etag'];
		msdyn_fact.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_fact.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_fact;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_fact = {
		msdyn_CustomerType : {
			Account: 192350001,
			Contact: 192350002
		},
		msdyn_FactType : {
			Actual: 192350000,
			Estimate: 192350001
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