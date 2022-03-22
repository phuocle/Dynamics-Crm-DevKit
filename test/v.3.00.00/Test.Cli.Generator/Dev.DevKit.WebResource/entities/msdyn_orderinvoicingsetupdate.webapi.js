'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_orderinvoicingsetupdateApi = function (e) {
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
		var _msdyn_orderinvoicingsetupdate = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Invoice: { b: 'msdyn_Invoice', a: '_msdyn_invoice_value', c: 'invoices', d: 'invoice' },
			msdyn_InvoiceDate_UtcDateOnly: { a: 'msdyn_invoicedate' },
			msdyn_InvoiceSetup: { b: 'msdyn_InvoiceSetup', a: '_msdyn_invoicesetup_value', c: 'msdyn_orderinvoicingsetups', d: 'msdyn_orderinvoicingsetup' },
			msdyn_InvoiceStatus: { a: 'msdyn_invoicestatus' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Order: { b: 'msdyn_Order', a: '_msdyn_order_value', c: 'salesorders', d: 'salesorder' },
			msdyn_OrderInvoicingDate: { b: 'msdyn_OrderInvoicingDate', a: '_msdyn_orderinvoicingdate_value', c: 'msdyn_orderinvoicingdates', d: 'msdyn_orderinvoicingdate' },
			msdyn_orderinvoicingsetupdateId: { a: 'msdyn_orderinvoicingsetupdateid' },
			msdyn_PostponeGenerationUntil_TimezoneDateAndTime: { a: 'msdyn_postponegenerationuntil' },
			msdyn_PreviousInvoiceDate_UtcDateOnly: { a: 'msdyn_previousinvoicedate' },
			msdyn_Revision: { a: 'msdyn_revision' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_orderinvoicingsetupdate = {};
		msdyn_orderinvoicingsetupdate.ODataEntity = e;
		msdyn_orderinvoicingsetupdate.FormattedValue = {};
		for (var field in _msdyn_orderinvoicingsetupdate) {
			var a = _msdyn_orderinvoicingsetupdate[field].a;
			var b = _msdyn_orderinvoicingsetupdate[field].b;
			var c = _msdyn_orderinvoicingsetupdate[field].c;
			var d = _msdyn_orderinvoicingsetupdate[field].d;
			var g = _msdyn_orderinvoicingsetupdate[field].g;
			var r = _msdyn_orderinvoicingsetupdate[field].r;
			webApiField(msdyn_orderinvoicingsetupdate, field, e, a, b, c, d, r, u, g);
		}
		msdyn_orderinvoicingsetupdate.Entity = u;
		msdyn_orderinvoicingsetupdate.EntityName = 'msdyn_orderinvoicingsetupdate';
		msdyn_orderinvoicingsetupdate.EntityCollectionName = 'msdyn_orderinvoicingsetupdates';
		msdyn_orderinvoicingsetupdate['@odata.etag'] = e['@odata.etag'];
		msdyn_orderinvoicingsetupdate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_orderinvoicingsetupdate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_orderinvoicingsetupdate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_orderinvoicingsetupdate = {
		msdyn_InvoiceStatus : {
			Canceled: 690970002,
			Processed: 690970001,
			Scheduled: 690970000
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