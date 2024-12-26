'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_eventmetadata_sdkmessageprocessingstepApi = function (e) {
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
		var _msdynmkt_eventmetadata_sdkmessageprocessingstep = {
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
			msdynmkt_eventmetadata_sdkmessageprocessingstepId: { a: 'msdynmkt_eventmetadata_sdkmessageprocessingstepid' },
			msdynmkt_eventmetadataId: { b: 'msdynmkt_eventmetadataId', a: '_msdynmkt_eventmetadataid_value', c: 'msdynmkt_eventmetadatas', d: 'msdynmkt_eventmetadata' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_sdkmessageprocessingstepId: { b: 'msdynmkt_sdkmessageprocessingstepId', a: '_msdynmkt_sdkmessageprocessingstepid_value', c: 'sdkmessageprocessingsteps', d: 'sdkmessageprocessingstep' },
			msdynmkt_uniquename: { a: 'msdynmkt_uniquename' },
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
		var msdynmkt_eventmetadata_sdkmessageprocessingstep = {};
		msdynmkt_eventmetadata_sdkmessageprocessingstep.ODataEntity = e;
		msdynmkt_eventmetadata_sdkmessageprocessingstep.FormattedValue = {};
		for (var field in _msdynmkt_eventmetadata_sdkmessageprocessingstep) {
			var a = _msdynmkt_eventmetadata_sdkmessageprocessingstep[field].a;
			var b = _msdynmkt_eventmetadata_sdkmessageprocessingstep[field].b;
			var c = _msdynmkt_eventmetadata_sdkmessageprocessingstep[field].c;
			var d = _msdynmkt_eventmetadata_sdkmessageprocessingstep[field].d;
			var g = _msdynmkt_eventmetadata_sdkmessageprocessingstep[field].g;
			var r = _msdynmkt_eventmetadata_sdkmessageprocessingstep[field].r;
			webApiField(msdynmkt_eventmetadata_sdkmessageprocessingstep, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_eventmetadata_sdkmessageprocessingstep.Entity = u;
		msdynmkt_eventmetadata_sdkmessageprocessingstep.EntityName = 'msdynmkt_eventmetadata_sdkmessageprocessingstep';
		msdynmkt_eventmetadata_sdkmessageprocessingstep.EntityCollectionName = 'msdynmkt_eventmetadata_sdkmessageprocessingsteps';
		msdynmkt_eventmetadata_sdkmessageprocessingstep['@odata.etag'] = e['@odata.etag'];
		msdynmkt_eventmetadata_sdkmessageprocessingstep.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_eventmetadata_sdkmessageprocessingstep.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_eventmetadata_sdkmessageprocessingstep;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_eventmetadata_sdkmessageprocessingstep = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
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