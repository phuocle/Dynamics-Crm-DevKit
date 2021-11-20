'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_purchaseorderApi = function (e) {
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
		var msdyn_purchaseorder = {
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
			msdyn_AddressName: { a: 'msdyn_addressname' },
			msdyn_AmountBilled: { a: 'msdyn_amountbilled' },
			msdyn_amountbilled_Base: { a: 'msdyn_amountbilled_base', r: true },
			msdyn_ApprovalStatus: { a: 'msdyn_approvalstatus' },
			msdyn_ApprovedRejectedBy: { b: 'msdyn_ApprovedRejectedBy', a: '_msdyn_approvedrejectedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_AutoNumbering: { a: 'msdyn_autonumbering' },
			msdyn_Booking: { b: 'msdyn_Booking', a: '_msdyn_booking_value', c: 'bookableresourcebookings', d: 'bookableresourcebooking' },
			msdyn_City: { a: 'msdyn_city' },
			msdyn_Country: { a: 'msdyn_country' },
			msdyn_DateExpected_UtcDateOnly: { a: 'msdyn_dateexpected' },
			msdyn_InternalFlags: { a: 'msdyn_internalflags' },
			msdyn_Latitude: { a: 'msdyn_latitude' },
			msdyn_Longitude: { a: 'msdyn_longitude' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_OrderedBy: { b: 'msdyn_OrderedBy', a: '_msdyn_orderedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_PaymentTerm: { b: 'msdyn_PaymentTerm', a: '_msdyn_paymentterm_value', c: 'msdyn_paymentterms', d: 'msdyn_paymentterm' },
			msdyn_PODate_UtcDateOnly: { a: 'msdyn_purchaseorderdate' },
			msdyn_PostalCode: { a: 'msdyn_postalcode' },
			msdyn_purchaseorderId: { a: 'msdyn_purchaseorderid' },
			msdyn_ReceivetoWarehouse: { b: 'msdyn_ReceivetoWarehouse', a: '_msdyn_receivetowarehouse_value', c: 'msdyn_warehouses', d: 'msdyn_warehouse' },
			msdyn_RequestedByResource: { b: 'msdyn_RequestedByResource', a: '_msdyn_requestedbyresource_value', c: 'bookableresources', d: 'bookableresource' },
			msdyn_ShipTo: { a: 'msdyn_shipto' },
			msdyn_ShipVia: { b: 'msdyn_ShipVia', a: '_msdyn_shipvia_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			msdyn_StateOrProvince: { a: 'msdyn_stateorprovince' },
			msdyn_SubStatus: { b: 'msdyn_SubStatus', a: '_msdyn_substatus_value', c: 'msdyn_purchaseordersubstatuses', d: 'msdyn_purchaseordersubstatus' },
			msdyn_SystemStatus: { a: 'msdyn_systemstatus' },
			msdyn_TotalAmount: { a: 'msdyn_totalamount' },
			msdyn_totalamount_Base: { a: 'msdyn_totalamount_base', r: true },
			msdyn_Vendor: { b: 'msdyn_Vendor', a: '_msdyn_vendor_value', c: 'accounts', d: 'account' },
			msdyn_VendorNote: { a: 'msdyn_vendornote' },
			msdyn_WorkOrder: { b: 'msdyn_WorkOrder', a: '_msdyn_workorder_value', c: 'msdyn_workorders', d: 'msdyn_workorder' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in msdyn_purchaseorder) {
			var a = msdyn_purchaseorder[field].a;
			var b = msdyn_purchaseorder[field].b;
			var c = msdyn_purchaseorder[field].c;
			var d = msdyn_purchaseorder[field].d;
			var g = msdyn_purchaseorder[field].g;
			var r = msdyn_purchaseorder[field].r;
			msdyn_purchaseorder[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		msdyn_purchaseorder.Entity = u;
		msdyn_purchaseorder.EntityName = 'msdyn_purchaseorder';
		msdyn_purchaseorder.EntityCollectionName = 'msdyn_purchaseorders';
		msdyn_purchaseorder['@odata.etag'] = e['@odata.etag'];
		msdyn_purchaseorder.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_purchaseorder.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_purchaseorder;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
		OptionSet.msdyn_purchaseorder = {
			msdyn_ApprovalStatus : {
				Approved: 690970000,
				Rejected: 690970001
			},
			msdyn_ShipTo : {
				Business_Unit: 690970001,
				Other: 690970003,
				Service_Account: 690970002,
				Site: 690970000
			},
			msdyn_SystemStatus : {
				Billed: 690970004,
				Canceled: 690970002,
				Draft: 690970000,
				Products_Received: 690970003,
				Submitted: 690970001
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