'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_relationshipanalyticsmetadataApi = function (e) {
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
		var _msdyn_relationshipanalyticsmetadata = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_absoluteEmailWeight: { a: 'msdyn_absoluteemailweight' },
			msdyn_absoluteMeetingWeight: { a: 'msdyn_absolutemeetingweight' },
			msdyn_absolutePhonecallWeight: { a: 'msdyn_absolutephonecallweight' },
			msdyn_absoluteTaskWeight: { a: 'msdyn_absolutetaskweight' },
			msdyn_communicationFrequency: { a: 'msdyn_communicationfrequency' },
			msdyn_fairHealthThreshold: { a: 'msdyn_fairhealththreshold' },
			msdyn_goodHealthThreshold: { a: 'msdyn_goodhealththreshold' },
			msdyn_healthEnabled: { a: 'msdyn_healthenabled' },
			msdyn_healthScoresDistribution: { a: 'msdyn_healthscoresdistribution' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_provisioningStatus: { a: 'msdyn_provisioningstatus' },
			msdyn_relationshipanalyticsmetadataId: { a: 'msdyn_relationshipanalyticsmetadataid' },
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
		var msdyn_relationshipanalyticsmetadata = {};
		msdyn_relationshipanalyticsmetadata.ODataEntity = e;
		msdyn_relationshipanalyticsmetadata.FormattedValue = {};
		for (var field in _msdyn_relationshipanalyticsmetadata) {
			var a = _msdyn_relationshipanalyticsmetadata[field].a;
			var b = _msdyn_relationshipanalyticsmetadata[field].b;
			var c = _msdyn_relationshipanalyticsmetadata[field].c;
			var d = _msdyn_relationshipanalyticsmetadata[field].d;
			var g = _msdyn_relationshipanalyticsmetadata[field].g;
			var r = _msdyn_relationshipanalyticsmetadata[field].r;
			webApiField(msdyn_relationshipanalyticsmetadata, field, e, a, b, c, d, r, u, g);
		}
		msdyn_relationshipanalyticsmetadata.Entity = u;
		msdyn_relationshipanalyticsmetadata.EntityName = 'msdyn_relationshipanalyticsmetadata';
		msdyn_relationshipanalyticsmetadata.EntityCollectionName = 'msdyn_relationshipanalyticsmetadatas';
		msdyn_relationshipanalyticsmetadata['@odata.etag'] = e['@odata.etag'];
		msdyn_relationshipanalyticsmetadata.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_relationshipanalyticsmetadata.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_relationshipanalyticsmetadata;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_relationshipanalyticsmetadata = {
		msdyn_communicationFrequency : {
			Daily: 100000001,
			FewDays: 100000002,
			FewWeeks: 100000004,
			Monthly: 100000005,
			Weekly: 100000003
		},
		msdyn_provisioningStatus : {
			Activation_Completed: 100000003,
			Activation_Failed: 100000004,
			Activation_InProgress: 100000002,
			Deactivation_Completed: 100000006,
			Deactivation_Failed: 100000007,
			Deactivation_InProgress: 100000005,
			None: 100000001
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