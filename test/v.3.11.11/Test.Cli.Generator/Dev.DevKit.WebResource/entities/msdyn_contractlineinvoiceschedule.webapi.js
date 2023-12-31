'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_contractlineinvoicescheduleApi = function (e) {
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
		var _msdyn_contractlineinvoiceschedule = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ContractLine: { a: 'msdyn_contractline' },
			msdyn_ContractLineId: { b: 'msdyn_ContractLineId', a: '_msdyn_contractlineid_value', c: 'salesorderdetails', d: 'salesorderdetail' },
			msdyn_contractlineinvoicescheduleId: { a: 'msdyn_contractlineinvoicescheduleid' },
			msdyn_ContractLineScheduleOfValue: { b: 'msdyn_ContractLineScheduleOfValue', a: '_msdyn_contractlinescheduleofvalue_value', c: 'msdyn_contractlinescheduleofvalues', d: 'msdyn_contractlinescheduleofvalue' },
			msdyn_Invoice: { b: 'msdyn_Invoice', a: '_msdyn_invoice_value', c: 'invoices', d: 'invoice' },
			msdyn_InvoiceRunDate_UtcDateOnly: { a: 'msdyn_invoicerundate' },
			msdyn_InvoiceRunStatus: { a: 'msdyn_invoicerunstatus' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_transactioncutoffdate_UtcDateOnly: { a: 'msdyn_transactioncutoffdate' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_contractlineinvoiceschedule = {};
		msdyn_contractlineinvoiceschedule.ODataEntity = e;
		msdyn_contractlineinvoiceschedule.FormattedValue = {};
		for (var field in _msdyn_contractlineinvoiceschedule) {
			var a = _msdyn_contractlineinvoiceschedule[field].a;
			var b = _msdyn_contractlineinvoiceschedule[field].b;
			var c = _msdyn_contractlineinvoiceschedule[field].c;
			var d = _msdyn_contractlineinvoiceschedule[field].d;
			var g = _msdyn_contractlineinvoiceschedule[field].g;
			var r = _msdyn_contractlineinvoiceschedule[field].r;
			webApiField(msdyn_contractlineinvoiceschedule, field, e, a, b, c, d, r, u, g);
		}
		msdyn_contractlineinvoiceschedule.Entity = u;
		msdyn_contractlineinvoiceschedule.EntityName = 'msdyn_contractlineinvoiceschedule';
		msdyn_contractlineinvoiceschedule.EntityCollectionName = 'msdyn_contractlineinvoiceschedules';
		msdyn_contractlineinvoiceschedule['@odata.etag'] = e['@odata.etag'];
		msdyn_contractlineinvoiceschedule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_contractlineinvoiceschedule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_contractlineinvoiceschedule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_contractlineinvoiceschedule = {
		msdyn_InvoiceRunStatus : {
			Not_Run: 192350000,
			Run_Failed: 192350002,
			Run_Successful: 192350001
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