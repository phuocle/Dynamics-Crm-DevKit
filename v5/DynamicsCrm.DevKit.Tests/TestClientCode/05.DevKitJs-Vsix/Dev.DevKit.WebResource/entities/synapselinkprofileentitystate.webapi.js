'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	DevKit.synapselinkprofileentitystateApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _synapselinkprofileentitystate = {
			AdditionTime_UtcDateAndTime: { a: 'additiontime', g: 'DateTime' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			CrmRecordCount: { a: 'crmrecordcount', g: 'Integer' },
			CrmRecordCountModifiedTime_UtcDateAndTime: { a: 'crmrecordcountmodifiedtime', g: 'DateTime' },
			EntityName2: { a: 'entityname' },
			EntitySource: { a: 'entitysource', g: 'Integer' },
			EntityType: { a: 'entitytype', g: 'Integer' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			InitialSyncDataCompletedTime_UtcDateAndTime: { a: 'initialsyncdatacompletedtime', g: 'DateTime' },
			InitialSyncMetadataCreatedTime_UtcDateAndTime: { a: 'initialsyncmetadatacreatedtime', g: 'DateTime' },
			InitialSyncProcessCompletedTime_UtcDateAndTime: { a: 'initialsyncprocesscompletedtime', g: 'DateTime' },
			InitialSyncState: { a: 'initialsyncstate', g: 'Integer' },
			LakeRecordCount: { a: 'lakerecordcount', g: 'Integer' },
			LakeRecordCountModifiedTime_UtcDateAndTime: { a: 'lakerecordcountmodifiedtime', g: 'DateTime' },
			LastSyncedDataTime_UtcDateAndTime: { a: 'lastsynceddatatime', g: 'DateTime' },
			LastSyncedDataVersion: { a: 'lastsynceddataversion' },
			LastSyncedMetadataTime_UtcDateAndTime: { a: 'lastsyncedmetadatatime', g: 'DateTime' },
			LastSyncedMetadataVersion: { a: 'lastsyncedmetadataversion' },
			MetadataState: { a: 'metadatastate', g: 'Integer' },
			MinSyncedDataVersion: { a: 'minsynceddataversion', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			profile: { b: 'profile', a: '_profile_value', c: 'synapselinkprofiles', d: 'synapselinkprofile' },
			profileentity: { b: 'profileentity', a: '_profileentity_value', c: 'synapselinkprofileentities', d: 'synapselinkprofileentity' },
			SourceRecordCount: { a: 'sourcerecordcount', g: 'Integer' },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			synapselinkprofileentitystateId: { a: 'synapselinkprofileentitystateid' },
			SynapseTableCreationState: { a: 'synapsetablecreationstate', g: 'Integer' },
			SyncState: { a: 'syncstate', g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const synapselinkprofileentitystate = {};
		synapselinkprofileentitystate.ODataEntity = e;
		synapselinkprofileentitystate.FormattedValue = {};
		for (const field in _synapselinkprofileentitystate) {
			const fieldConfig = _synapselinkprofileentitystate[field];
			webApiField(synapselinkprofileentitystate, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		synapselinkprofileentitystate.Entity = u;
		synapselinkprofileentitystate.EntityName = 'synapselinkprofileentitystate';
		synapselinkprofileentitystate.EntityCollectionName = 'synapselinkprofileentitystates';
		synapselinkprofileentitystate['@odata.etag'] = e?.['@odata.etag'];
		synapselinkprofileentitystate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		synapselinkprofileentitystate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return synapselinkprofileentitystate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.synapselinkprofileentitystate = {
		EntitySource: { Dataverse: 0, FnOTables: 1 },
		EntityType: { Requested: 0 },
		InitialSyncState: { Completed: 4, CompletedWithFailures: 8, InProgress: 2, None: 0, NotStarted: 1, Paused: 32, PostProcessing: 64, RequestedInitialData: 16 },
		MetadataState: { Created: 8, Failure: 16, MetadataCreating: 2, None: 0, NotCreated: 1, RelationshipCreating: 4 },
		statecode: { Active: 0, Inactive: 1 },
		statuscode: { Active: 1, Inactive: 2 },
		SynapseTableCreationState: { Completed: 2, Failed: 3, InProgress: 1, NotStarted: 0 },
		SyncState: { Completed: 4, CompletedWithFailures: 8, InProgress: 2, None: 0, NotStarted: 1, Paused: 32, PostProcessing: 64, RequestedInitialData: 16 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = {}));