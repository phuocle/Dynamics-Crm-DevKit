﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_workorderdetailsgenerationqueueApi = function (e) {
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
		var _msdyn_workorderdetailsgenerationqueue = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AgreementBookingDate: { b: 'msdyn_AgreementBookingDate', a: '_msdyn_agreementbookingdate_value', c: 'msdyn_agreementbookingdates', d: 'msdyn_agreementbookingdate' },
			msdyn_Booking: { a: 'msdyn_booking' },
			msdyn_ExceptionMessage: { a: 'msdyn_exceptionmessage' },
			msdyn_ExceptionTrace: { a: 'msdyn_exceptiontrace' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_Processed: { a: 'msdyn_processed' },
			msdyn_SchDateOwnerId: { a: 'msdyn_schdateownerid' },
			msdyn_WorkOrderDetails: { a: 'msdyn_workorderdetails' },
			msdyn_workorderdetailsgenerationqueueId: { a: 'msdyn_workorderdetailsgenerationqueueid' },
			msdyn_WorkorderId: { a: 'msdyn_workorderid' },
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
		var msdyn_workorderdetailsgenerationqueue = {};
		msdyn_workorderdetailsgenerationqueue.ODataEntity = e;
		msdyn_workorderdetailsgenerationqueue.FormattedValue = {};
		for (var field in _msdyn_workorderdetailsgenerationqueue) {
			var a = _msdyn_workorderdetailsgenerationqueue[field].a;
			var b = _msdyn_workorderdetailsgenerationqueue[field].b;
			var c = _msdyn_workorderdetailsgenerationqueue[field].c;
			var d = _msdyn_workorderdetailsgenerationqueue[field].d;
			var g = _msdyn_workorderdetailsgenerationqueue[field].g;
			var r = _msdyn_workorderdetailsgenerationqueue[field].r;
			webApiField(msdyn_workorderdetailsgenerationqueue, field, e, a, b, c, d, r, u, g);
		}
		msdyn_workorderdetailsgenerationqueue.Entity = u;
		msdyn_workorderdetailsgenerationqueue.EntityName = 'msdyn_workorderdetailsgenerationqueue';
		msdyn_workorderdetailsgenerationqueue.EntityCollectionName = 'msdyn_workorderdetailsgenerationqueues';
		msdyn_workorderdetailsgenerationqueue['@odata.etag'] = e['@odata.etag'];
		msdyn_workorderdetailsgenerationqueue.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_workorderdetailsgenerationqueue.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_workorderdetailsgenerationqueue;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workorderdetailsgenerationqueue = {
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