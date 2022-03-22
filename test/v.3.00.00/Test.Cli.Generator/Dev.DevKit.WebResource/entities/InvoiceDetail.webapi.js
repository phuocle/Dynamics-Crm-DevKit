'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.InvoiceDetailApi = function (e) {
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
		var _invoicedetail = {
			ActualDeliveryOn_UtcDateOnly: { a: 'actualdeliveryon' },
			BaseAmount: { a: 'baseamount' },
			BaseAmount_Base: { a: 'baseamount_base', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ExtendedAmount: { a: 'extendedamount' },
			ExtendedAmount_Base: { a: 'extendedamount_base', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InvoiceDetailId: { a: 'invoicedetailid' },
			InvoiceDetailName: { a: 'invoicedetailname' },
			InvoiceId: { b: 'invoiceid', a: '_invoiceid_value', c: 'invoices', d: 'invoice' },
			InvoiceIsPriceLocked: { a: 'invoiceispricelocked', r: true },
			InvoiceStateCode: { a: 'invoicestatecode', r: true },
			IsCopied: { a: 'iscopied' },
			IsPriceOverridden: { a: 'ispriceoverridden' },
			IsProductOverridden: { a: 'isproductoverridden' },
			LineItemNumber: { a: 'lineitemnumber' },
			ManualDiscountAmount: { a: 'manualdiscountamount' },
			ManualDiscountAmount_Base: { a: 'manualdiscountamount_base', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Agreement: { b: 'msdyn_Agreement', a: '_msdyn_agreement_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			msdyn_AgreementInvoiceProduct: { b: 'msdyn_AgreementInvoiceProduct', a: '_msdyn_agreementinvoiceproduct_value', c: 'msdyn_agreementinvoiceproducts', d: 'msdyn_agreementinvoiceproduct' },
			msdyn_BillingMethod: { a: 'msdyn_billingmethod' },
			msdyn_chargeableamount: { a: 'msdyn_chargeableamount' },
			msdyn_chargeableamount_Base: { a: 'msdyn_chargeableamount_base', r: true },
			msdyn_complimentaryamount: { a: 'msdyn_complimentaryamount' },
			msdyn_complimentaryamount_Base: { a: 'msdyn_complimentaryamount_base', r: true },
			msdyn_ContractLine: { a: 'msdyn_contractline' },
			msdyn_contractlineamount: { a: 'msdyn_contractlineamount' },
			msdyn_contractlineamount_Base: { a: 'msdyn_contractlineamount_base', r: true },
			msdyn_Currency: { b: 'msdyn_Currency', a: '_msdyn_currency_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			msdyn_invoicedtilldate: { a: 'msdyn_invoicedtilldate' },
			msdyn_invoicedtilldate_Base: { a: 'msdyn_invoicedtilldate_base', r: true },
			msdyn_LineOrder: { a: 'msdyn_lineorder' },
			msdyn_LineType: { a: 'msdyn_linetype' },
			msdyn_nonchargeableamount: { a: 'msdyn_nonchargeableamount' },
			msdyn_nonchargeableamount_Base: { a: 'msdyn_nonchargeableamount_base', r: true },
			msdyn_OrderInvoicingProduct: { b: 'msdyn_OrderInvoicingProduct', a: '_msdyn_orderinvoicingproduct_value', c: 'msdyn_orderinvoicingproducts', d: 'msdyn_orderinvoicingproduct' },
			msdyn_Project: { b: 'msdyn_Project', a: '_msdyn_project_value', c: 'msdyn_projects', d: 'msdyn_project' },
			msdyn_WorkOrderId: { b: 'msdyn_WorkOrderId', a: '_msdyn_workorderid_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			msdyn_WorkOrderProductId: { b: 'msdyn_WorkOrderProductId', a: '_msdyn_workorderproductid_value', c: 'msdyn_workorderproducts', d: 'msdyn_workorderproduct' },
			msdyn_WorkOrderServiceId: { b: 'msdyn_WorkOrderServiceId', a: '_msdyn_workorderserviceid_value', c: 'msdyn_workorderservices', d: 'msdyn_workorderservice' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			ParentBundleId: { a: 'parentbundleid' },
			ParentBundleIdRef: { b: 'parentbundleidref', a: '_parentbundleidref_value', c: 'invoicedetails', d: 'invoicedetail' },
			PricePerUnit: { a: 'priceperunit' },
			PricePerUnit_Base: { a: 'priceperunit_base', r: true },
			PricingErrorCode: { a: 'pricingerrorcode' },
			ProductAssociationId: { a: 'productassociationid' },
			ProductDescription: { a: 'productdescription' },
			ProductId: { b: 'productid', a: '_productid_value', c: 'products', d: 'product' },
			ProductName: { a: 'productname' },
			ProductNumber: { a: 'productnumber', r: true },
			ProductTypeCode: { a: 'producttypecode' },
			PropertyConfigurationStatus: { a: 'propertyconfigurationstatus' },
			Quantity: { a: 'quantity' },
			QuantityBackordered: { a: 'quantitybackordered' },
			QuantityCancelled: { a: 'quantitycancelled' },
			QuantityShipped: { a: 'quantityshipped' },
			SalesOrderDetailId: { b: 'salesorderdetailid', a: '_salesorderdetailid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			SalesRepId: { b: 'salesrepid', a: '_salesrepid_value', c: 'systemusers', d: 'systemuser' },
			SequenceNumber: { a: 'sequencenumber' },
			ShippingTrackingNumber: { a: 'shippingtrackingnumber' },
			ShipTo_City: { a: 'shipto_city' },
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
			Tax: { a: 'tax' },
			Tax_Base: { a: 'tax_base', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			UoMId: { b: 'uomid', a: '_uomid_value', c: 'uoms', d: 'uom' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			VolumeDiscountAmount: { a: 'volumediscountamount', r: true },
			VolumeDiscountAmount_Base: { a: 'volumediscountamount_base', r: true },
			WillCall: { a: 'willcall' }
		};
		if (e === undefined) e = {};
		var u = {};
		var invoicedetail = {};
		invoicedetail.ODataEntity = e;
		invoicedetail.FormattedValue = {};
		for (var field in _invoicedetail) {
			var a = _invoicedetail[field].a;
			var b = _invoicedetail[field].b;
			var c = _invoicedetail[field].c;
			var d = _invoicedetail[field].d;
			var g = _invoicedetail[field].g;
			var r = _invoicedetail[field].r;
			webApiField(invoicedetail, field, e, a, b, c, d, r, u, g);
		}
		invoicedetail.Entity = u;
		invoicedetail.EntityName = 'invoicedetail';
		invoicedetail.EntityCollectionName = 'invoicedetails';
		invoicedetail['@odata.etag'] = e['@odata.etag'];
		invoicedetail.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		invoicedetail.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return invoicedetail;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.InvoiceDetail = {
		msdyn_BillingMethod : {
			Fixed_Price: 192350001,
			Time_and_Material: 192350000
		},
		msdyn_LineType : {
			Field_Service_Line: 690970001,
			Project_Service_Line: 690970000
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
		ProductTypeCode : {
			Bundle: 2,
			Optional_Bundle_Product: 4,
			Product: 1,
			Project_based_Service: 5,
			Required_Bundle_Product: 3
		},
		PropertyConfigurationStatus : {
			Edit: 0,
			Not_Configured: 2,
			Rectify: 1
		},
		ShipTo_FreightTermsCode : {
			FOB: 1,
			No_Charge: 2
		},
		SkipPriceCalculation : {
			DoPriceCalcAlways: 0,
			SkipPriceCalcOnCreate: 1,
			SkipPriceCalcOnUpdate: 2,
			SkipPriceCalcOnUpSert: 3
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