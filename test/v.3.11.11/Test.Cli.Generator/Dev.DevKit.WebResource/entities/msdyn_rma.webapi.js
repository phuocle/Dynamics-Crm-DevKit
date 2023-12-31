'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_rmaApi = function (e) {
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
		var _msdyn_rma = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ApprovedBy: { b: 'msdyn_ApprovedBy', a: '_msdyn_approvedby_value', c: 'systemusers', d: 'systemuser' },
			msdyn_AutoNumbering: { a: 'msdyn_autonumbering' },
			msdyn_BillingAccount: { b: 'msdyn_BillingAccount', a: '_msdyn_billingaccount_value', c: 'accounts', d: 'account' },
			msdyn_DateRequested_UtcDateOnly: { a: 'msdyn_daterequested' },
			msdyn_Description: { a: 'msdyn_description' },
			msdyn_ETA_UtcDateOnly: { a: 'msdyn_eta' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_PackagingTrackingNo: { a: 'msdyn_packagingtrackingno' },
			msdyn_PriceList: { b: 'msdyn_PriceList', a: '_msdyn_pricelist_value', c: 'pricelevels', d: 'pricelevel' },
			msdyn_ProcessingAction: { a: 'msdyn_processingaction' },
			msdyn_ReferenceNo: { a: 'msdyn_referenceno' },
			msdyn_RequestedByContact: { b: 'msdyn_RequestedByContact', a: '_msdyn_requestedbycontact_value', c: 'contacts', d: 'contact' },
			msdyn_rmaId: { a: 'msdyn_rmaid' },
			msdyn_ServiceAccount: { b: 'msdyn_ServiceAccount', a: '_msdyn_serviceaccount_value', c: 'accounts', d: 'account' },
			msdyn_ShippingTrackingNo: { a: 'msdyn_shippingtrackingno' },
			msdyn_ShipVia: { b: 'msdyn_ShipVia', a: '_msdyn_shipvia_value', c: 'msdyn_shipvias', d: 'msdyn_shipvia' },
			msdyn_SubStatus: { b: 'msdyn_SubStatus', a: '_msdyn_substatus_value', c: 'msdyn_rmasubstatuses', d: 'msdyn_rmasubstatus' },
			msdyn_SystemStatus: { a: 'msdyn_systemstatus' },
			msdyn_Taxable: { a: 'msdyn_taxable' },
			msdyn_TaxCode: { b: 'msdyn_TaxCode', a: '_msdyn_taxcode_value', c: 'msdyn_taxcodes', d: 'msdyn_taxcode' },
			msdyn_TotalAmount: { a: 'msdyn_totalamount' },
			msdyn_totalamount_Base: { a: 'msdyn_totalamount_base', r: true },
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
		var msdyn_rma = {};
		msdyn_rma.ODataEntity = e;
		msdyn_rma.FormattedValue = {};
		for (var field in _msdyn_rma) {
			var a = _msdyn_rma[field].a;
			var b = _msdyn_rma[field].b;
			var c = _msdyn_rma[field].c;
			var d = _msdyn_rma[field].d;
			var g = _msdyn_rma[field].g;
			var r = _msdyn_rma[field].r;
			webApiField(msdyn_rma, field, e, a, b, c, d, r, u, g);
		}
		msdyn_rma.Entity = u;
		msdyn_rma.EntityName = 'msdyn_rma';
		msdyn_rma.EntityCollectionName = 'msdyn_rmas';
		msdyn_rma['@odata.etag'] = e['@odata.etag'];
		msdyn_rma.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_rma.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_rma;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_rma = {
		msdyn_ProcessingAction : {
			Change_Asset_Ownership: 690970002,
			Create_RTV: 690970000,
			Return_to_Warehouse: 690970001
		},
		msdyn_SystemStatus : {
			Canceled: 690970001,
			Pending: 690970000,
			Products_Received: 690970002
		},
		OwnerIdType : {
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