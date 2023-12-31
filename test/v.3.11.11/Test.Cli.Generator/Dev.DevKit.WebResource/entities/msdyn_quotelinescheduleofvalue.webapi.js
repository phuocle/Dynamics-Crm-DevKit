﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_quotelinescheduleofvalueApi = function (e) {
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
		var _msdyn_quotelinescheduleofvalue = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_amount: { a: 'msdyn_amount' },
			msdyn_amount_after_tax: { a: 'msdyn_amount_after_tax', r: true },
			msdyn_amount_after_tax_Base: { a: 'msdyn_amount_after_tax_base', r: true },
			msdyn_amount_Base: { a: 'msdyn_amount_base', r: true },
			msdyn_invoicedate_UtcDateOnly: { a: 'msdyn_invoicedate' },
			msdyn_invoicestatus: { a: 'msdyn_invoicestatus' },
			msdyn_isdataimport: { a: 'msdyn_isdataimport' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_projecttask: { b: 'msdyn_projecttask', a: '_msdyn_projecttask_value', c: 'msdyn_projecttasks', d: 'msdyn_projecttask' },
			msdyn_quoteline: { a: 'msdyn_quoteline' },
			msdyn_quotelineid: { b: 'msdyn_quotelineid', a: '_msdyn_quotelineid_value', c: 'quotedetails', d: 'quotedetail' },
			msdyn_quotelinescheduleofvalueId: { a: 'msdyn_quotelinescheduleofvalueid' },
			msdyn_tax: { a: 'msdyn_tax' },
			msdyn_tax_Base: { a: 'msdyn_tax_base', r: true },
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
		var msdyn_quotelinescheduleofvalue = {};
		msdyn_quotelinescheduleofvalue.ODataEntity = e;
		msdyn_quotelinescheduleofvalue.FormattedValue = {};
		for (var field in _msdyn_quotelinescheduleofvalue) {
			var a = _msdyn_quotelinescheduleofvalue[field].a;
			var b = _msdyn_quotelinescheduleofvalue[field].b;
			var c = _msdyn_quotelinescheduleofvalue[field].c;
			var d = _msdyn_quotelinescheduleofvalue[field].d;
			var g = _msdyn_quotelinescheduleofvalue[field].g;
			var r = _msdyn_quotelinescheduleofvalue[field].r;
			webApiField(msdyn_quotelinescheduleofvalue, field, e, a, b, c, d, r, u, g);
		}
		msdyn_quotelinescheduleofvalue.Entity = u;
		msdyn_quotelinescheduleofvalue.EntityName = 'msdyn_quotelinescheduleofvalue';
		msdyn_quotelinescheduleofvalue.EntityCollectionName = 'msdyn_quotelinescheduleofvalues';
		msdyn_quotelinescheduleofvalue['@odata.etag'] = e['@odata.etag'];
		msdyn_quotelinescheduleofvalue.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_quotelinescheduleofvalue.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_quotelinescheduleofvalue;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotelinescheduleofvalue = {
		msdyn_invoicestatus : {
			Customer_invoice_created: 192350002,
			Customer_invoice_posted: 192350003,
			Not_Ready_for_invoicing: 192350000,
			Ready_for_invoicing: 192350001
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