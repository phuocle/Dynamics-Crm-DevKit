'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_rtvApi = function (e) {
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
		var msdyn_rtv = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Address1: { a: 'msdyn_address1' },
			msdyn_Address2: { a: 'msdyn_address2' },
			msdyn_Address3: { a: 'msdyn_address3' },
			msdyn_ApprovedDeclinedBy: { b: 'msdyn_ApprovedDeclinedBy', a: '_msdyn_approveddeclinedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_AutoNumbering: { a: 'msdyn_autonumbering' },
			msdyn_Booking: { b: 'msdyn_Booking', a: '_msdyn_booking_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			msdyn_City: { a: 'msdyn_city' },
			msdyn_Country: { a: 'msdyn_country' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_OriginalPurchaseOrder: { b: 'msdyn_OriginalPurchaseOrder', a: '_msdyn_originalpurchaseorder_value', c: 'msdyn_purchaseorders', d: 'msdyn_purchaseorder' },
			msdyn_OriginatingRMA: { b: 'msdyn_OriginatingRMA', a: '_msdyn_originatingrma_value', c: 'msdyn_rmas', d: 'msdyn_rma' },
			msdyn_PostalCode: { a: 'msdyn_postalcode' },
			msdyn_ReferenceNo: { a: 'msdyn_referenceno' },
			msdyn_RequestDate_UtcDateOnly: { a: 'msdyn_requestdate' },
			msdyn_ReturnDate_UtcDateOnly: { a: 'msdyn_returndate' },
			msdyn_ReturnedBy: { b: 'msdyn_ReturnedBy', a: '_msdyn_returnedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_rtvId: { a: 'msdyn_rtvid' },
			msdyn_ShipVia: { b: 'msdyn_ShipVia', a: '_msdyn_shipvia_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			msdyn_StateOrProvince: { a: 'msdyn_stateorprovince' },
			msdyn_SubStatus: { b: 'msdyn_SubStatus', a: '_msdyn_substatus_value', c: 'msdyn_rtvsubstatuses', d: 'msdyn_rtvsubstatus' },
			msdyn_SystemStatus: { a: 'msdyn_systemstatus' },
			msdyn_TaxCode: { b: 'msdyn_TaxCode', a: '_msdyn_taxcode_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			msdyn_TotalAmount: { a: 'msdyn_totalamount' },
			msdyn_totalamount_Base: { a: 'msdyn_totalamount_base', r: true },
			msdyn_Vendor: { b: 'msdyn_Vendor', a: '_msdyn_vendor_value', c: 'accounts', d: 'account' },
			msdyn_VendorContact: { b: 'msdyn_VendorContact', a: '_msdyn_vendorcontact_value', c: 'contacts', d: 'contact' },
			msdyn_VendorRMA: { a: 'msdyn_vendorrma' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
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
		for (var field in msdyn_rtv) {
			var a = msdyn_rtv[field].a;
			var b = msdyn_rtv[field].b;
			var c = msdyn_rtv[field].c;
			var d = msdyn_rtv[field].d;
			var g = msdyn_rtv[field].g;
			var r = msdyn_rtv[field].r;
			msdyn_rtv[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_rtv.Entity = u;
		msdyn_rtv.EntityName = 'msdyn_rtv';
		msdyn_rtv.EntityCollectionName = 'msdyn_rtvs';
		msdyn_rtv['@odata.etag'] = e['@odata.etag'];
		msdyn_rtv.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_rtv.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_rtv;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rtv = {
		msdyn_SystemStatus : {
			Approved: 690970001,
			Canceled: 690970004,
			Draft: 690970000,
			Received: 690970003,
			Shipped: 690970002
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