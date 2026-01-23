'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.flowmachinegroupApi = function (e) {
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
		const _flowmachinegroup = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true, g: 'Integer' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DisconnectionPlannedOn_UtcDateAndTime: { a: 'disconnectionplannedon', g: 'DateTime' },
			DomainSetting: { a: 'domainsetting', g: 'Integer' },
			FlowGroupType: { a: 'flowgrouptype', g: 'Integer' },
			flowmachinegroupId: { a: 'flowmachinegroupid', r: true },
			flowmachineimage: { b: 'flowmachineimage', a: '_flowmachineimage_value', c: 'flowmachineimages', d: 'flowmachineimage' },
			flowmachinenetwork: { b: 'flowmachinenetwork', a: '_flowmachinenetwork_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork' },
			GroupMetadata: { a: 'groupmetadata' },
			ImportSequenceNumber: { a: 'importsequencenumber', g: 'Integer' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true, g: 'Boolean' },
			KeyCreationDate_TimezoneDateAndTime: { a: 'keycreationdate', g: 'DateTime' },
			KeyExpiryGracePeriod: { a: 'keyexpirygraceperiod', g: 'Integer' },
			KeyValidityPeriod: { a: 'keyvalidityperiod', g: 'Integer' },
			LastRunDate_UtcDateAndTime: { a: 'lastrundate', g: 'DateTime' },
			ManagedVersion: { a: 'managedversion', g: 'Integer' },
			ManagementType: { a: 'managementtype', g: 'Integer' },
			MaxManagedMachineCount: { a: 'maxmanagedmachinecount', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon', g: 'DateTime' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true, g: 'DateTime' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PasswordChangedBy: { b: 'passwordchangedby', a: '_passwordchangedby_value', c: 'systemusers', d: 'systemuser' },
			PasswordChangedDate_UtcDateAndTime: { a: 'passwordchangeddate', g: 'DateTime' },
			PreferredQueuingType: { a: 'preferredqueuingtype', g: 'Integer' },
			PrimaryKeyPackage: { a: 'primarykeypackage' },
			PrimaryPublicKey: { a: 'primarypublickey' },
			ProvisioningError: { a: 'provisioningerror' },
			ProvisioningState: { a: 'provisioningstate', g: 'Integer' },
			RotationStartedBy: { b: 'rotationstartedby', a: '_rotationstartedby_value', c: 'systemusers', d: 'systemuser' },
			SecondaryKeyPackage: { a: 'secondarykeypackage' },
			SecondaryPublicKey: { a: 'secondarypublickey' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode', g: 'Integer' },
			statuscode: { a: 'statuscode', g: 'Integer' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			trytoreusewindowssession: { a: 'trytoreusewindowssession', g: 'Boolean' },
			UsageType: { a: 'usagetype', g: 'Integer' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const flowmachinegroup = {};
		flowmachinegroup.ODataEntity = e;
		flowmachinegroup.FormattedValue = {};
		for (const field in _flowmachinegroup) {
			const fieldConfig = _flowmachinegroup[field];
			webApiField(flowmachinegroup, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		flowmachinegroup.Entity = u;
		flowmachinegroup.EntityName = 'flowmachinegroup';
		flowmachinegroup.EntityCollectionName = 'flowmachinegroups';
		flowmachinegroup['@odata.etag'] = e?.['@odata.etag'];
		flowmachinegroup.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		flowmachinegroup.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return flowmachinegroup;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.flowmachinegroup = {
		ComponentState: { Deleted: 2, Deleted_Unpublished: 3, Published: 0, Unpublished: 1 },
		DomainSetting: { AadJoined: 1, HybridEntraJoined: 2, None: 0 },
		FlowGroupType: { Default: 545940002, Keyless: 545940000, Standard: 545940001 },
		ManagedVersion: { V1: 1, V2: 2 },
		ManagementType: { Customer: 0, Managed: 1, Shared: 2 },
		PreferredQueuingType: { ExtendedQueuePrioritization: 1, FIFO: 0 },
		ProvisioningState: { Created: 0, Error: 3, Provisioned: 2, Provisioning: 1 },
		statecode: { Active: 0, Inactive: 1, Maintenance: 2 },
		statuscode: { Active: 1, HmgCmkOperation: 7, HmgIslandMove: 5, Inactive: 2, KeyExpired: 4, ManualMaintenance: 3, Quarantined: 6 },
		UsageType: { CuaOnly: 1, RpaAndCua: 2, RpaOnly: 0 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));