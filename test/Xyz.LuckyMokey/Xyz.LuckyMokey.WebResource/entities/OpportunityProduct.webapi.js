'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.OpportunityProductApi = function (e) {
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
		var opportunityproduct = {
			BaseAmount: { a: 'baseamount' },
			BaseAmount_Base: { a: 'baseamount_base', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExtendedAmount: { a: 'extendedamount' },
			ExtendedAmount_Base: { a: 'extendedamount_base', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsPriceOverridden: { a: 'ispriceoverridden' },
			IsProductOverridden: { a: 'isproductoverridden' },
			LineItemNumber: { a: 'lineitemnumber' },
			ManualDiscountAmount: { a: 'manualdiscountamount' },
			ManualDiscountAmount_Base: { a: 'manualdiscountamount_base', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_BillingMethod: { a: 'msdyn_billingmethod' },
			msdyn_BudgetAmount: { a: 'msdyn_budgetamount' },
			msdyn_budgetamount_Base: { a: 'msdyn_budgetamount_base', r: true },
			msdyn_CostAmount: { a: 'msdyn_costamount' },
			msdyn_costamount_Base: { a: 'msdyn_costamount_base', r: true },
			msdyn_CostPricePerUnit: { a: 'msdyn_costpriceperunit' },
			msdyn_costpriceperunit_Base: { a: 'msdyn_costpriceperunit_base', r: true },
			msdyn_Duration: { a: 'msdyn_duration' },
			msdyn_enddate_UtcDateOnly: { a: 'msdyn_enddate' },
			msdyn_LineType: { a: 'msdyn_linetype' },
			msdyn_pricelist: { b: 'msdyn_pricelist', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_Project: { b: 'msdyn_Project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_serviceaccount: { b: 'msdyn_serviceaccount', a: '_msdyn_serviceaccount_value', c: 'accounts', d: 'account' },
			msdyn_startdate_UtcDateOnly: { a: 'msdyn_startdate' },
			OpportunityId: { b: 'opportunityid', a: '_opportunityid_value', c: 'opportunities', d: 'opportunity' },
			OpportunityProductId: { a: 'opportunityproductid' },
			OpportunityProductName: { a: 'opportunityproductname' },
			OpportunityStateCode: { a: 'opportunitystatecode', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: '', d: '', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '', r: true },
			ParentBundleId: { a: 'parentbundleid' },
			ParentBundleIdRef: { b: 'parentbundleidref', a: '_parentbundleidref_value', c: 'opportunityproducts', d: 'opportunityproduct' },
			PricePerUnit: { a: 'priceperunit' },
			PricePerUnit_Base: { a: 'priceperunit_base', r: true },
			PricingErrorCode: { a: 'pricingerrorcode' },
			ProductAssociationId: { a: 'productassociationid' },
			ProductDescription: { a: 'productdescription' },
			ProductId: { b: 'productid', a: '_productid_value', c: 'products', d: 'product' },
			ProductName: { a: 'productname' },
			ProductTypeCode: { a: 'producttypecode' },
			PropertyConfigurationStatus: { a: 'propertyconfigurationstatus' },
			Quantity: { a: 'quantity' },
			SequenceNumber: { a: 'sequencenumber' },
			SkipPriceCalculation: { a: 'skippricecalculation' },
			Tax: { a: 'tax' },
			Tax_Base: { a: 'tax_base', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UoMId: { b: 'uomid', a: '_uomid_value', c: 'uoms', d: 'uom' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			VolumeDiscountAmount: { a: 'volumediscountamount', r: true },
			VolumeDiscountAmount_Base: { a: 'volumediscountamount_base', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in opportunityproduct) {
			var a = opportunityproduct[field].a;
			var b = opportunityproduct[field].b;
			var c = opportunityproduct[field].c;
			var d = opportunityproduct[field].d;
			var g = opportunityproduct[field].g;
			var r = opportunityproduct[field].r;
			opportunityproduct[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		opportunityproduct.Entity = u;
		opportunityproduct.EntityName = 'opportunityproduct';
		opportunityproduct.EntityCollectionName = 'opportunityproducts';
		opportunityproduct['@odata.etag'] = e['@odata.etag'];
		opportunityproduct.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		opportunityproduct.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return opportunityproduct;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.OpportunityProduct = {
		msdyn_BillingMethod : {
			Time_and_Material: 192350000,
			Fixed_Price: 192350001
		},
		msdyn_LineType : {
			Project_Service_Line: 690970000,
			Field_Service_Line: 690970001
		},
		OpportunityStateCode : {
		},
		PricingErrorCode : {
			None: 0,
			Detail_Error: 1,
			Missing_Price_Level: 2,
			Inactive_Price_Level: 3,
			Missing_Quantity: 4,
			Missing_Unit_Price: 5,
			Missing_Product: 6,
			Invalid_Product: 7,
			Missing_Pricing_Code: 8,
			Invalid_Pricing_Code: 9,
			Missing_UOM: 10,
			Product_Not_In_Price_Level: 11,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Price: 14,
			Missing_Current_Cost: 15,
			Missing_Standard_Cost: 16,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Price: 19,
			Invalid_Current_Cost: 20,
			Invalid_Standard_Cost: 21,
			Invalid_Rounding_Policy: 22,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Amount: 24,
			Price_Calculation_Error: 25,
			Invalid_Discount_Type: 26,
			Discount_Type_Invalid_State: 27,
			Invalid_Discount: 28,
			Invalid_Quantity: 29,
			Invalid_Pricing_Precision: 30,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule_: 32,
			Inactive_Discount_Type: 33,
			Invalid_Price_Level_Currency: 34,
			Price_Attribute_Out_Of_Range: 35,
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		ProductTypeCode : {
			Product: 1,
			Bundle: 2,
			Required_Bundle_Product: 3,
			Optional_Bundle_Product: 4,
			Project_based_Service: 5
		},
		PropertyConfigurationStatus : {
			Edit: 0,
			Rectify: 1,
			Not_Configured: 2
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnCreate: 1,
			SkipPriceCalcOnUpdate: 2
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