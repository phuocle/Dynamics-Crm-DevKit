'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.ProductApi = function (e) {
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
		var _product = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedByExternalParty: { b: 'createdbyexternalparty', a: '_createdbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CurrentCost: { a: 'currentcost' },
			CurrentCost_Base: { a: 'currentcost_base', r: true },
			DefaultUoMId: { b: 'defaultuomid', a: '_defaultuomid_value', c: 'uoms', d: 'uom' },
			DefaultUoMScheduleId: { b: 'defaultuomscheduleid', a: '_defaultuomscheduleid_value', c: 'uomschedules', d: 'uomschedule' },
			Description: { a: 'description' },
			DMTImportState: { a: 'dmtimportstate' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			HierarchyPath: { a: 'hierarchypath', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsKit: { a: 'iskit' },
			IsReparented: { a: 'isreparented' },
			IsStockItem: { a: 'isstockitem' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedByExternalParty: { b: 'modifiedbyexternalparty', a: '_modifiedbyexternalparty_value', c: 'externalparties', d: 'externalparty', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ConvertToCustomerAsset: { a: 'msdyn_converttocustomerasset' },
			msdyn_DefaultVendor: { b: 'msdyn_DefaultVendor', a: '_msdyn_defaultvendor_value', c: 'accounts', d: 'account' },
			msdyn_FieldServiceProductType: { a: 'msdyn_fieldserviceproducttype' },
			msdyn_gdproptout: { a: 'msdyn_gdproptout' },
			msdyn_PurchaseName: { a: 'msdyn_purchasename' },
			msdyn_Taxable: { a: 'msdyn_taxable' },
			msdyn_TransactionCategory: { b: 'msdyn_TransactionCategory', a: '_msdyn_transactioncategory_value', c: 'msdyn_transactioncategories', d: 'msdyn_transactioncategory' },
			msdyn_UPCCode: { a: 'msdyn_upccode' },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ParentProductId: { b: 'parentproductid', a: '_parentproductid_value', c: 'products', d: 'product' },
			Price: { a: 'price' },
			Price_Base: { a: 'price_base', r: true },
			PriceLevelId: { b: 'pricelevelid', a: '_pricelevelid_value', c: 'pricelevels', d: 'pricelevel' },
			ProcessId: { a: 'processid' },
			ProductId: { a: 'productid' },
			ProductNumber: { a: 'productnumber' },
			ProductStructure: { a: 'productstructure' },
			ProductTypeCode: { a: 'producttypecode' },
			ProductUrl: { a: 'producturl' },
			QuantityDecimal: { a: 'quantitydecimal' },
			QuantityOnHand: { a: 'quantityonhand' },
			Size: { a: 'size' },
			StageId: { a: 'stageid' },
			StandardCost: { a: 'standardcost' },
			StandardCost_Base: { a: 'standardcost_base', r: true },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			StockVolume: { a: 'stockvolume' },
			StockWeight: { a: 'stockweight' },
			SubjectId: { b: 'subjectid', a: '_subjectid_value', c: 'subjects', d: 'subject' },
			SupplierName: { a: 'suppliername' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			ValidFromDate_DateOnly: { a: 'validfromdate' },
			ValidToDate_DateOnly: { a: 'validtodate' },
			VendorID: { a: 'vendorid' },
			VendorName: { a: 'vendorname' },
			VendorPartNumber: { a: 'vendorpartnumber' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var product = {};
		product.ODataEntity = e;
		product.FormattedValue = {};
		for (var field in _product) {
			var a = _product[field].a;
			var b = _product[field].b;
			var c = _product[field].c;
			var d = _product[field].d;
			var g = _product[field].g;
			var r = _product[field].r;
			webApiField(product, field, e, a, b, c, d, r, u, g);
		}
		product.Entity = u;
		product.EntityName = 'product';
		product.EntityCollectionName = 'products';
		product['@odata.etag'] = e['@odata.etag'];
		product.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		product.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return product;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Product = {
		msdyn_FieldServiceProductType : {
			Inventory: 690970000,
			Non_Inventory: 690970001,
			Service: 690970002
		},
		ProductStructure : {
			Product: 1,
			Product_Bundle: 3,
			Product_Family: 2
		},
		ProductTypeCode : {
			Flat_Fees: 4,
			Miscellaneous_Charges: 2,
			Sales_Inventory: 1,
			Services: 3
		},
		StateCode : {
			Active: 0,
			Draft: 2,
			Retired: 1,
			Under_Revision: 3
		},
		StatusCode : {
			Active: 1,
			Draft: 0,
			Retired: 2,
			Under_Revision: 3
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