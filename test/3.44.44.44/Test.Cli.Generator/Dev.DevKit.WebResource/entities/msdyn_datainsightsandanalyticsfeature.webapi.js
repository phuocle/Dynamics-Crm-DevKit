'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_datainsightsandanalyticsfeatureApi = function (e) {
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
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						value = value.replace('{', '').replace('}', '');
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
					}
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
		var _msdyn_datainsightsandanalyticsfeature = {
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
			msdyn_analyticschecksum: { a: 'msdyn_analyticschecksum' },
			msdyn_datainsightsandanalyticsfeatureId: { a: 'msdyn_datainsightsandanalyticsfeatureid' },
			msdyn_datasourcemode: { a: 'msdyn_datasourcemode' },
			msdyn_iscustomizationsupported: { a: 'msdyn_iscustomizationsupported', r: true },
			msdyn_isdemoenabled: { a: 'msdyn_isdemoenabled' },
			msdyn_isenabled: { a: 'msdyn_isenabled' },
			msdyn_lastaccesstime_TimezoneDateAndTime: { a: 'msdyn_lastaccesstime' },
			msdyn_lastprovisionsenttime_TimezoneDateAndTime: { a: 'msdyn_lastprovisionsenttime' },
			msdyn_lastreportrefreshtime_TimezoneDateAndTime: { a: 'msdyn_lastreportrefreshtime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_provisionerrorcode: { a: 'msdyn_provisionerrorcode' },
			msdyn_provisionstatus: { a: 'msdyn_provisionstatus' },
			msdyn_provisionstatusdetail: { a: 'msdyn_provisionstatusdetail' },
			msdyn_provisionsubstatus: { a: 'msdyn_provisionsubstatus' },
			msdyn_reporttype: { a: 'msdyn_reporttype' },
			msdyn_schedule: { a: 'msdyn_schedule' },
			msdyn_templateid: { a: 'msdyn_templateid' },
			msdyn_timezonecode: { a: 'msdyn_timezonecode' },
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
		var msdyn_datainsightsandanalyticsfeature = {};
		msdyn_datainsightsandanalyticsfeature.ODataEntity = e;
		msdyn_datainsightsandanalyticsfeature.FormattedValue = {};
		for (var field in _msdyn_datainsightsandanalyticsfeature) {
			var a = _msdyn_datainsightsandanalyticsfeature[field].a;
			var b = _msdyn_datainsightsandanalyticsfeature[field].b;
			var c = _msdyn_datainsightsandanalyticsfeature[field].c;
			var d = _msdyn_datainsightsandanalyticsfeature[field].d;
			var g = _msdyn_datainsightsandanalyticsfeature[field].g;
			var r = _msdyn_datainsightsandanalyticsfeature[field].r;
			webApiField(msdyn_datainsightsandanalyticsfeature, field, e, a, b, c, d, r, u, g);
		}
		msdyn_datainsightsandanalyticsfeature.Entity = u;
		msdyn_datainsightsandanalyticsfeature.EntityName = 'msdyn_datainsightsandanalyticsfeature';
		msdyn_datainsightsandanalyticsfeature.EntityCollectionName = 'msdyn_datainsightsandanalyticsfeatures';
		msdyn_datainsightsandanalyticsfeature['@odata.etag'] = e['@odata.etag'];
		msdyn_datainsightsandanalyticsfeature.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_datainsightsandanalyticsfeature.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_datainsightsandanalyticsfeature;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_datainsightsandanalyticsfeature = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_datasourcemode : {
			DirectQuery: 487460001,
			Import: 487460000
		},
		msdyn_provisionstatus : {
			Not_Provisioned: 192350001,
			Provision_Failed: 192350002,
			Provision_in_Progress: 192350003,
			Provisioned: 192350000
		},
		msdyn_reporttype : {
			Default: 192350000,
			Draft: 192350002,
			Published: 192350001
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