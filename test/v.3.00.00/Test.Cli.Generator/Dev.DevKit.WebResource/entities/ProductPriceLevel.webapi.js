'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ProductPriceLevelApi = function (e) {
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
		var _productpricelevel = {
			Amount: { a: 'amount' },
			Amount_Base: { a: 'amount_base', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DiscountTypeId: { b: 'discounttypeid', a: '_discounttypeid_value', c: 'discounttypes', d: 'discounttype' },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { a: 'organizationid', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			Percentage: { a: 'percentage' },
			PriceLevelId: { b: 'pricelevelid', a: '_pricelevelid_value', c: 'pricelevels', d: 'pricelevel' },
			PricingMethodCode: { a: 'pricingmethodcode' },
			ProcessId: { a: 'processid' },
			ProductId: { b: 'productid', a: '_productid_value', c: 'products', d: 'product' },
			ProductNumber: { a: 'productnumber', r: true },
			ProductPriceLevelId: { a: 'productpricelevelid' },
			QuantitySellingCode: { a: 'quantitysellingcode' },
			RoundingOptionAmount: { a: 'roundingoptionamount' },
			RoundingOptionAmount_Base: { a: 'roundingoptionamount_base', r: true },
			RoundingOptionCode: { a: 'roundingoptioncode' },
			RoundingPolicyCode: { a: 'roundingpolicycode' },
			StageId: { a: 'stageid' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UoMId: { b: 'uomid', a: '_uomid_value', c: 'uoms', d: 'uom' },
			UoMScheduleId: { b: 'uomscheduleid', a: '_uomscheduleid_value', c: 'uomschedules', d: 'uomschedule' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var productpricelevel = {};
		productpricelevel.ODataEntity = e;
		productpricelevel.FormattedValue = {};
		for (var field in _productpricelevel) {
			var a = _productpricelevel[field].a;
			var b = _productpricelevel[field].b;
			var c = _productpricelevel[field].c;
			var d = _productpricelevel[field].d;
			var g = _productpricelevel[field].g;
			var r = _productpricelevel[field].r;
			webApiField(productpricelevel, field, e, a, b, c, d, r, u, g);
		}
		productpricelevel.Entity = u;
		productpricelevel.EntityName = 'productpricelevel';
		productpricelevel.EntityCollectionName = 'productpricelevels';
		productpricelevel['@odata.etag'] = e['@odata.etag'];
		productpricelevel.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		productpricelevel.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return productpricelevel;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ProductPriceLevel = {
		PricingMethodCode : {
			Currency_Amount: 1,
			Percent_Margin_Current_Cost: 4,
			Percent_Margin_Standard_Cost: 6,
			Percent_Markup_Current_Cost: 3,
			Percent_Markup_Standard_Cost: 5,
			Percent_of_List: 2
		},
		QuantitySellingCode : {
			No_Control: 1,
			Whole: 2,
			Whole_and_Fractional: 3
		},
		RoundingOptionCode : {
			Ends_in: 1,
			Multiple_of: 2
		},
		RoundingPolicyCode : {
			Down: 3,
			None: 1,
			To_Nearest: 4,
			Up: 2
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