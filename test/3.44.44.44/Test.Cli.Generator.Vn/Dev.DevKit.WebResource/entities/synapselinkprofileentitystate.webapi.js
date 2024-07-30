'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.synapselinkprofileentitystateApi = function (e) {
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
		var _synapselinkprofileentitystate = {
			AdditionTime_UtcDateAndTime: { a: 'additiontime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CrmRecordCount: { a: 'crmrecordcount' },
			CrmRecordCountModifiedTime_UtcDateAndTime: { a: 'crmrecordcountmodifiedtime' },
			EntityName2: { a: 'entityname' },
			EntitySource: { a: 'entitysource' },
			EntityType: { a: 'entitytype' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			InitialSyncDataCompletedTime_UtcDateAndTime: { a: 'initialsyncdatacompletedtime' },
			InitialSyncMetadataCreatedTime_UtcDateAndTime: { a: 'initialsyncmetadatacreatedtime' },
			InitialSyncProcessCompletedTime_UtcDateAndTime: { a: 'initialsyncprocesscompletedtime' },
			InitialSyncState: { a: 'initialsyncstate' },
			LakeRecordCount: { a: 'lakerecordcount' },
			LakeRecordCountModifiedTime_UtcDateAndTime: { a: 'lakerecordcountmodifiedtime' },
			LastSyncedDataTime_UtcDateAndTime: { a: 'lastsynceddatatime' },
			LastSyncedDataVersion: { a: 'lastsynceddataversion' },
			LastSyncedMetadataTime_UtcDateAndTime: { a: 'lastsyncedmetadatatime' },
			LastSyncedMetadataVersion: { a: 'lastsyncedmetadataversion' },
			MetadataState: { a: 'metadatastate' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			profile: { b: 'profile', a: '_profile_value', c: 'synapselinkprofiles', d: 'synapselinkprofile' },
			profileentity: { b: 'profileentity', a: '_profileentity_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			synapselinkprofileentitystateId: { a: 'synapselinkprofileentitystateid' },
			SynapseTableCreationState: { a: 'synapsetablecreationstate' },
			SyncState: { a: 'syncstate' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var synapselinkprofileentitystate = {};
		synapselinkprofileentitystate.ODataEntity = e;
		synapselinkprofileentitystate.FormattedValue = {};
		for (var field in _synapselinkprofileentitystate) {
			var a = _synapselinkprofileentitystate[field].a;
			var b = _synapselinkprofileentitystate[field].b;
			var c = _synapselinkprofileentitystate[field].c;
			var d = _synapselinkprofileentitystate[field].d;
			var g = _synapselinkprofileentitystate[field].g;
			var r = _synapselinkprofileentitystate[field].r;
			webApiField(synapselinkprofileentitystate, field, e, a, b, c, d, r, u, g);
		}
		synapselinkprofileentitystate.Entity = u;
		synapselinkprofileentitystate.EntityName = 'synapselinkprofileentitystate';
		synapselinkprofileentitystate.EntityCollectionName = 'synapselinkprofileentitystates';
		synapselinkprofileentitystate['@odata.etag'] = e['@odata.etag'];
		synapselinkprofileentitystate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		synapselinkprofileentitystate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return synapselinkprofileentitystate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.synapselinkprofileentitystate = {
		EntitySource : {
			Dataverse: 0,
			FnOTables: 1
		},
		EntityType : {
			Requested: 0
		},
		InitialSyncState : {
			Completed: 4,
			CompletedWithFailures: 8,
			InProgress: 2,
			None: 0,
			NotStarted: 1,
			Paused: 32,
			PostProcessing: 64,
			RequestedInitialData: 16
		},
		MetadataState : {
			Created: 8,
			Failure: 16,
			MetadataCreating: 2,
			None: 0,
			NotCreated: 1,
			RelationshipCreating: 4
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Inactive: 2
		},
		SynapseTableCreationState : {
			Completed: 2,
			Failed: 3,
			InProgress: 1,
			NotStarted: 0
		},
		SyncState : {
			Completed: 4,
			CompletedWithFailures: 8,
			InProgress: 2,
			None: 0,
			NotStarted: 1,
			Paused: 32,
			PostProcessing: 64,
			RequestedInitialData: 16
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