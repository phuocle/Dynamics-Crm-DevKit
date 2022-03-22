﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3Api = function (e) {
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
		var _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = {
			ActiveStageId: { b: 'activestageid', a: '_activestageid_value', c: 'processstages', d: 'processstage' },
			ActiveStageStartedOn_UtcDateOnly: { a: 'activestagestartedon' },
			bpf_Duration: { a: 'bpf_duration', r: true },
			bpf_msdyn_agreementbookingsetupid: { b: 'bpf_msdyn_agreementbookingsetupid', a: '_bpf_msdyn_agreementbookingsetupid_value', c: 'msdyn_agreementbookingsetups', d: 'msdyn_agreementbookingsetup' },
			bpf_msdyn_agreementid: { b: 'bpf_msdyn_agreementid', a: '_bpf_msdyn_agreementid_value', c: 'msdyn_agreements', d: 'msdyn_agreement' },
			bpf_msdyn_agreementinvoicesetupid: { b: 'bpf_msdyn_agreementinvoicesetupid', a: '_bpf_msdyn_agreementinvoicesetupid_value', c: 'msdyn_agreementinvoicesetups', d: 'msdyn_agreementinvoicesetup' },
			bpf_name: { a: 'bpf_name' },
			BusinessProcessFlowInstanceId: { a: 'businessprocessflowinstanceid' },
			CompletedOn_UtcDateOnly: { a: 'completedon' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			ProcessId: { b: 'processid', a: '_processid_value', c: 'workflows', d: 'workflow' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TraversedPath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = {};
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.ODataEntity = e;
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.FormattedValue = {};
		for (var field in _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3) {
			var a = _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[field].a;
			var b = _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[field].b;
			var c = _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[field].c;
			var d = _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[field].d;
			var g = _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[field].g;
			var r = _msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[field].r;
			webApiField(msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3, field, e, a, b, c, d, r, u, g);
		}
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.Entity = u;
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.EntityName = 'msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3';
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.EntityCollectionName = 'msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3s';
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3['@odata.etag'] = e['@odata.etag'];
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 = {
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Aborted: 3,
			Active: 1,
			Finished: 2
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