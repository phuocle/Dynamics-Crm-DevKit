'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.QuoteApi = function (e) {
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
		var _quote = {
			AccountId: { b: 'accountid', a: '_accountid_value', c: 'accounts', d: 'account', r: true },
			BillTo_AddressId: { a: 'billto_addressid' },
			BillTo_City: { a: 'billto_city' },
			BillTo_Composite: { a: 'billto_composite', r: true },
			BillTo_ContactName: { a: 'billto_contactname' },
			BillTo_Country: { a: 'billto_country' },
			BillTo_Fax: { a: 'billto_fax' },
			BillTo_Line1: { a: 'billto_line1' },
			BillTo_Line2: { a: 'billto_line2' },
			BillTo_Line3: { a: 'billto_line3' },
			BillTo_Name: { a: 'billto_name' },
			BillTo_PostalCode: { a: 'billto_postalcode' },
			BillTo_StateOrProvince: { a: 'billto_stateorprovince' },
			BillTo_Telephone: { a: 'billto_telephone' },
			CampaignId: { b: 'campaignid', a: '_campaignid_value', c: 'campaigns', d: 'campaign' },
			ClosedOn_DateOnly: { a: 'closedon' },
			ContactId: { b: 'contactid', a: '_contactid_value', c: 'contacts', d: 'contact', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			customerid_account: { b: 'customerid_account', a: '_customerid_value', c: 'accounts', d: 'account' },
			customerid_contact: { b: 'customerid_contact', a: '_customerid_value', c: 'contacts', d: 'contact' },
			Description: { a: 'description' },
			DiscountAmount: { a: 'discountamount' },
			DiscountAmount_Base: { a: 'discountamount_base', r: true },
			DiscountPercentage: { a: 'discountpercentage' },
			EffectiveFrom_UtcDateOnly: { a: 'effectivefrom' },
			EffectiveTo_UtcDateOnly: { a: 'effectiveto' },
			EmailAddress: { a: 'emailaddress' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExpiresOn_DateOnly: { a: 'expireson' },
			FreightAmount: { a: 'freightamount' },
			FreightAmount_Base: { a: 'freightamount_base', r: true },
			FreightTermsCode: { a: 'freighttermscode' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			LastOnHoldTime_UtcDateAndTime: { a: 'lastonholdtime' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Account: { b: 'msdyn_Account', a: '_msdyn_account_value', c: 'accounts', d: 'account' },
			msdyn_AccountManagerId: { b: 'msdyn_AccountManagerId', a: '_msdyn_accountmanagerid_value', c: 'systemusers', d: 'systemuser' },
			msdyn_AdjustedGrossMargin: { a: 'msdyn_adjustedgrossmargin', r: true },
			msdyn_Competitive: { a: 'msdyn_competitive', r: true },
			msdyn_ContractOrganizationalUnitId: { b: 'msdyn_ContractOrganizationalUnitId', a: '_msdyn_contractorganizationalunitid_value', c: 'msdyn_organizationalunits', d: 'msdyn_organizationalunit' },
			msdyn_CustomerBudgetRollUp: { a: 'msdyn_customerbudgetrollup', r: true },
			msdyn_customerbudgetrollup_Base: { a: 'msdyn_customerbudgetrollup_base', r: true },
			msdyn_CustomerBudgetRollUp_Date_UtcDateAndTime: { a: 'msdyn_customerbudgetrollup_date', r: true },
			msdyn_CustomerBudgetRollUp_State: { a: 'msdyn_customerbudgetrollup_state', r: true },
			msdyn_EstimatedBudget: { a: 'msdyn_estimatedbudget', r: true },
			msdyn_EstimatedCompletionRollUp_UtcDateOnly: { a: 'msdyn_estimatedcompletionrollup', r: true },
			msdyn_EstimatedCompletionRollUp_Date_UtcDateAndTime: { a: 'msdyn_estimatedcompletionrollup_date', r: true },
			msdyn_EstimatedCompletionRollUp_State: { a: 'msdyn_estimatedcompletionrollup_state', r: true },
			msdyn_EstimatedCost: { a: 'msdyn_estimatedcost' },
			msdyn_estimatedcost_Base: { a: 'msdyn_estimatedcost_base', r: true },
			msdyn_EstimatedQuoteMargin: { a: 'msdyn_estimatedquotemargin', r: true },
			msdyn_EstimatedSchedule: { a: 'msdyn_estimatedschedule', r: true },
			msdyn_feasible: { a: 'msdyn_feasible' },
			msdyn_GrossMargin: { a: 'msdyn_grossmargin', r: true },
			msdyn_InvoiceSetupTotals: { a: 'msdyn_invoicesetuptotals' },
			msdyn_invoicesetuptotals_Base: { a: 'msdyn_invoicesetuptotals_base', r: true },
			msdyn_OrderType: { a: 'msdyn_ordertype' },
			msdyn_Profitability: { a: 'msdyn_profitability', r: true },
			msdyn_QuoteLineEndDate_UtcDateOnly: { a: 'msdyn_quotelineenddate' },
			msdyn_QuoteLineStartDate_UtcDateOnly: { a: 'msdyn_quotelinestartdate' },
			msdyn_TotalAmount: { a: 'msdyn_totalamount', r: true },
			msdyn_totalamount_Base: { a: 'msdyn_totalamount_base', r: true },
			msdyn_TotalChargeableCostRollup: { a: 'msdyn_totalchargeablecostrollup', r: true },
			msdyn_totalchargeablecostrollup_Base: { a: 'msdyn_totalchargeablecostrollup_base', r: true },
			msdyn_TotalChargeableCostRollup_Date_UtcDateAndTime: { a: 'msdyn_totalchargeablecostrollup_date', r: true },
			msdyn_TotalChargeableCostRollup_State: { a: 'msdyn_totalchargeablecostrollup_state', r: true },
			msdyn_TotalNonchargeableCostRollup: { a: 'msdyn_totalnonchargeablecostrollup', r: true },
			msdyn_totalnonchargeablecostrollup_Base: { a: 'msdyn_totalnonchargeablecostrollup_base', r: true },
			msdyn_TotalNonchargeableCostRollup_Date_UtcDateAndTime: { a: 'msdyn_totalnonchargeablecostrollup_date', r: true },
			msdyn_TotalNonchargeableCostRollup_State: { a: 'msdyn_totalnonchargeablecostrollup_state', r: true },
			Name: { a: 'name' },
			OnHoldTime: { a: 'onholdtime', r: true },
			OpportunityId: { b: 'opportunityid', a: '_opportunityid_value', c: 'opportunities', d: 'opportunity' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PaymentTermsCode: { a: 'paymenttermscode' },
			PriceLevelId: { b: 'pricelevelid', a: '_pricelevelid_value', c: 'pricelevels', d: 'pricelevel' },
			PricingErrorCode: { a: 'pricingerrorcode' },
			ProcessId: { a: 'processid' },
			QuoteId: { a: 'quoteid' },
			QuoteNumber: { a: 'quotenumber' },
			RequestDeliveryBy_UtcDateOnly: { a: 'requestdeliveryby' },
			RevisionNumber: { a: 'revisionnumber', r: true },
			ShippingMethodCode: { a: 'shippingmethodcode' },
			ShipTo_AddressId: { a: 'shipto_addressid' },
			ShipTo_City: { a: 'shipto_city' },
			ShipTo_Composite: { a: 'shipto_composite', r: true },
			ShipTo_ContactName: { a: 'shipto_contactname' },
			ShipTo_Country: { a: 'shipto_country' },
			ShipTo_Fax: { a: 'shipto_fax' },
			ShipTo_FreightTermsCode: { a: 'shipto_freighttermscode' },
			ShipTo_Line1: { a: 'shipto_line1' },
			ShipTo_Line2: { a: 'shipto_line2' },
			ShipTo_Line3: { a: 'shipto_line3' },
			ShipTo_Name: { a: 'shipto_name' },
			ShipTo_PostalCode: { a: 'shipto_postalcode' },
			ShipTo_StateOrProvince: { a: 'shipto_stateorprovince' },
			ShipTo_Telephone: { a: 'shipto_telephone' },
			SkipPriceCalculation: { a: 'skippricecalculation' },
			SLAId: { b: 'slaid', a: '_slaid_value', c: 'slas', d: 'sla' },
			SLAInvokedId: { b: 'slainvokedid', a: '_slainvokedid_value', c: 'slas', d: 'sla', r: true },
			StageId: { a: 'stageid' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TotalAmount: { a: 'totalamount' },
			TotalAmount_Base: { a: 'totalamount_base', r: true },
			TotalAmountLessFreight: { a: 'totalamountlessfreight' },
			TotalAmountLessFreight_Base: { a: 'totalamountlessfreight_base', r: true },
			TotalDiscountAmount: { a: 'totaldiscountamount' },
			TotalDiscountAmount_Base: { a: 'totaldiscountamount_base', r: true },
			TotalLineItemAmount: { a: 'totallineitemamount' },
			TotalLineItemAmount_Base: { a: 'totallineitemamount_base', r: true },
			TotalLineItemDiscountAmount: { a: 'totallineitemdiscountamount' },
			TotalLineItemDiscountAmount_Base: { a: 'totallineitemdiscountamount_base', r: true },
			TotalTax: { a: 'totaltax' },
			TotalTax_Base: { a: 'totaltax_base', r: true },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UniqueDscId: { a: 'uniquedscid', r: true },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WillCall: { a: 'willcall' }
		};
		if (e === undefined) e = {};
		var u = {};
		var quote = {};
		quote.ODataEntity = e;
		quote.FormattedValue = {};
		for (var field in _quote) {
			var a = _quote[field].a;
			var b = _quote[field].b;
			var c = _quote[field].c;
			var d = _quote[field].d;
			var g = _quote[field].g;
			var r = _quote[field].r;
			webApiField(quote, field, e, a, b, c, d, r, u, g);
		}
		quote.Entity = u;
		quote.EntityName = 'quote';
		quote.EntityCollectionName = 'quotes';
		quote['@odata.etag'] = e['@odata.etag'];
		quote.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		quote.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return quote;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Quote = {
		FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		msdyn_Competitive : {
			Customer_Budget_Not_Available: 192350000,
			Outside_Customer_Expectations: 192350002,
			Within_Customer_Expectations: 192350001
		},
		msdyn_EstimatedBudget : {
			Budget_Estimate_Not_Available: 192350000,
			Exceeds_Customer_Budget: 192350002,
			Within_Customer_Budget: 192350001
		},
		msdyn_EstimatedSchedule : {
			Estimated_To_Finish_Early: 192350001,
			Estimated_To_Finish_Late: 192350002,
			Estimated_To_Finish_On_Schedule: 192350003,
			Schedule_Not_Available: 192350000
		},
		msdyn_feasible : {
			Feasibility_Not_Available: 192350000,
			Feasible: 192350001,
			Not_Feasible: 192350002
		},
		msdyn_OrderType : {
			Item_based: 192350000,
			Service_Maintenance_Based: 690970002,
			Work_based: 192350001
		},
		msdyn_Profitability : {
			Not_Profitable: 192350002,
			Profitability_Not_Available: 192350000,
			Profitable: 192350001
		},
		PaymentTermsCode : {
			_2_10_Net_30: 2,
			Net_30: 1,
			Net_45: 3,
			Net_60: 4
		},
		PricingErrorCode : {
			Base_Currency_Attribute_Overflow: 36,
			Base_Currency_Attribute_Underflow: 37,
			Detail_Error: 1,
			Discount_Type_Invalid_State: 27,
			Inactive_Discount_Type: 33,
			Inactive_Price_Level: 3,
			Invalid_Current_Cost: 20,
			Invalid_Discount: 28,
			Invalid_Discount_Type: 26,
			Invalid_Price: 19,
			Invalid_Price_Level_Amount: 17,
			Invalid_Price_Level_Currency: 34,
			Invalid_Price_Level_Percentage: 18,
			Invalid_Pricing_Code: 9,
			Invalid_Pricing_Precision: 30,
			Invalid_Product: 7,
			Invalid_Quantity: 29,
			Invalid_Rounding_Amount: 24,
			Invalid_Rounding_Option: 23,
			Invalid_Rounding_Policy: 22,
			Invalid_Standard_Cost: 21,
			Missing_Current_Cost: 15,
			Missing_Price: 14,
			Missing_Price_Level: 2,
			Missing_Price_Level_Amount: 12,
			Missing_Price_Level_Percentage: 13,
			Missing_Pricing_Code: 8,
			Missing_Product: 6,
			Missing_Product_Default_UOM: 31,
			Missing_Product_UOM_Schedule: 32,
			Missing_Quantity: 4,
			Missing_Standard_Cost: 16,
			Missing_Unit_Price: 5,
			Missing_UOM: 10,
			None: 0,
			Price_Attribute_Out_Of_Range: 35,
			Price_Calculation_Error: 25,
			Product_Not_In_Price_Level: 11,
			Transaction_currency_is_not_set_for_the_product_price_list_item: 38
		},
		ShippingMethodCode : {
			Airborne: 1,
			DHL: 2,
			FedEx: 3,
			Full_Load: 6,
			Postal_Mail: 5,
			UPS: 4,
			Will_Call: 7
		},
		ShipTo_FreightTermsCode : {
			Default_Value: 1
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnRetrieve: 1
		},
		StateCode : {
			Active: 1,
			Closed: 3,
			Draft: 0,
			Won: 2
		},
		StatusCode : {
			Canceled: 6,
			In_Progress_1: 1,
			In_Progress_2: 2,
			Lost: 5,
			Open: 3,
			Revised: 7,
			Won: 4
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