'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_quotelineinvoicescheduleApi = function (e) {
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
		var _msdyn_quotelineinvoiceschedule = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_InvoiceRunDate_UtcDateOnly: { a: 'msdyn_invoicerundate' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_QuoteLine: { a: 'msdyn_quoteline' },
			msdyn_quotelineid: { b: 'msdyn_quotelineid', a: '_msdyn_quotelineid_value', c: 'quotedetails', d: 'quotedetail' },
			msdyn_quotelineinvoicescheduleId: { a: 'msdyn_quotelineinvoicescheduleid' },
			msdyn_QuoteLineScheduleOfValue: { b: 'msdyn_QuoteLineScheduleOfValue', a: '_msdyn_quotelinescheduleofvalue_value', c: 'msdyn_quotelinescheduleofvalues', d: 'msdyn_quotelinescheduleofvalue' },
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
		var msdyn_quotelineinvoiceschedule = {};
		msdyn_quotelineinvoiceschedule.ODataEntity = e;
		msdyn_quotelineinvoiceschedule.FormattedValue = {};
		for (var field in _msdyn_quotelineinvoiceschedule) {
			var a = _msdyn_quotelineinvoiceschedule[field].a;
			var b = _msdyn_quotelineinvoiceschedule[field].b;
			var c = _msdyn_quotelineinvoiceschedule[field].c;
			var d = _msdyn_quotelineinvoiceschedule[field].d;
			var g = _msdyn_quotelineinvoiceschedule[field].g;
			var r = _msdyn_quotelineinvoiceschedule[field].r;
			webApiField(msdyn_quotelineinvoiceschedule, field, e, a, b, c, d, r, u, g);
		}
		msdyn_quotelineinvoiceschedule.Entity = u;
		msdyn_quotelineinvoiceschedule.EntityName = 'msdyn_quotelineinvoiceschedule';
		msdyn_quotelineinvoiceschedule.EntityCollectionName = 'msdyn_quotelineinvoiceschedules';
		msdyn_quotelineinvoiceschedule['@odata.etag'] = e['@odata.etag'];
		msdyn_quotelineinvoiceschedule.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_quotelineinvoiceschedule.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_quotelineinvoiceschedule;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_quotelineinvoiceschedule = {
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