﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_panetoolconfigurationApi = function (e) {
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
		var _msdyn_panetoolconfiguration = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_category: { a: 'msdyn_category' },
			msdyn_controlname: { a: 'msdyn_controlname' },
			msdyn_data: { a: 'msdyn_data' },
			msdyn_defaulticon: { a: 'msdyn_defaulticon' },
			msdyn_description: { a: 'msdyn_description' },
			msdyn_isConfigurable: { a: 'msdyn_isconfigurable' },
			msdyn_learnmorelink: { a: 'msdyn_learnmorelink' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_panetoolconfigurationId: { a: 'msdyn_panetoolconfigurationid' },
			msdyn_toolConfigurationEntity: { a: 'msdyn_toolconfigurationentity' },
			msdyn_UniqueName: { a: 'msdyn_uniquename' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_panetoolconfiguration = {};
		msdyn_panetoolconfiguration.ODataEntity = e;
		msdyn_panetoolconfiguration.FormattedValue = {};
		for (var field in _msdyn_panetoolconfiguration) {
			var a = _msdyn_panetoolconfiguration[field].a;
			var b = _msdyn_panetoolconfiguration[field].b;
			var c = _msdyn_panetoolconfiguration[field].c;
			var d = _msdyn_panetoolconfiguration[field].d;
			var g = _msdyn_panetoolconfiguration[field].g;
			var r = _msdyn_panetoolconfiguration[field].r;
			webApiField(msdyn_panetoolconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_panetoolconfiguration.Entity = u;
		msdyn_panetoolconfiguration.EntityName = 'msdyn_panetoolconfiguration';
		msdyn_panetoolconfiguration.EntityCollectionName = 'msdyn_panetoolconfigurations';
		msdyn_panetoolconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_panetoolconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_panetoolconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_panetoolconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_panetoolconfiguration = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_category : {
			Agent_Guidance: 100000001,
			Automated_action: 100000004,
			Collabaration: 100000003,
			Reference: 100000002,
			Uncategorized: 100000000
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