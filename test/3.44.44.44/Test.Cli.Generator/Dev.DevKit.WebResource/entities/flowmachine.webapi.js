'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.flowmachineApi = function (e) {
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
		var _flowmachine = {
			AgentVersion: { a: 'agentversion' },
			ConnectivityConfiguration: { a: 'connectivityconfiguration' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			FlowMachineGroupId: { b: 'flowmachinegroupid', a: '_flowmachinegroupid_value', c: 'flowmachinegroups', d: 'flowmachinegroup' },
			flowmachineId: { a: 'flowmachineid', r: true },
			FlowMachineImageVersionId: { b: 'flowmachineimageversionid', a: '_flowmachineimageversionid_value', c: 'flowmachineimageversions', d: 'flowmachineimageversion' },
			FlowMachineNetworkId: { b: 'flowmachinenetworkid', a: '_flowmachinenetworkid_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork' },
			HostedMachineError: { a: 'hostedmachineerror' },
			HostedMachineState: { a: 'hostedmachinestate' },
			HostingType: { a: 'hostingtype' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			KeyDeliveryStatus: { a: 'keydeliverystatus' },
			KeyReceivedDate_UtcDateAndTime: { a: 'keyreceiveddate' },
			LastHeartbeatDate_UtcDateAndTime: { a: 'lastheartbeatdate' },
			LastKnownPictureInPictureSupport: { a: 'lastknownpictureinpicturesupport' },
			MachineMetadata: { a: 'machinemetadata' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OvercapacitySince_UtcDateAndTime: { a: 'overcapacitysince' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			SessionCapacity: { a: 'sessioncapacity' },
			SnapshotStartedAt_UtcDateAndTime: { a: 'snapshotstartedat' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var flowmachine = {};
		flowmachine.ODataEntity = e;
		flowmachine.FormattedValue = {};
		for (var field in _flowmachine) {
			var a = _flowmachine[field].a;
			var b = _flowmachine[field].b;
			var c = _flowmachine[field].c;
			var d = _flowmachine[field].d;
			var g = _flowmachine[field].g;
			var r = _flowmachine[field].r;
			webApiField(flowmachine, field, e, a, b, c, d, r, u, g);
		}
		flowmachine.Entity = u;
		flowmachine.EntityName = 'flowmachine';
		flowmachine.EntityCollectionName = 'flowmachines';
		flowmachine['@odata.etag'] = e['@odata.etag'];
		flowmachine.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		flowmachine.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return flowmachine;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachine = {
		HostedMachineState : {
			Disabled: 0,
			Enabled: 1,
			Error: 2
		},
		HostingType : {
			CloudPc: 2,
			Customer: 0,
			Hosted: 1
		},
		KeyDeliveryStatus : {
			Default: 1,
			KeyExpired: 3,
			PendingNewKey: 2
		},
		LastKnownPictureInPictureSupport : {
			Disabled: 1,
			Enabled: 2,
			Unknown: 0
		},
		statecode : {
			Active: 0,
			Inactive: 1,
			Maintenance: 2
		},
		statuscode : {
			Active: 1,
			Disabled: 9,
			DrainMode: 5,
			Error: 8,
			HostedMachineOvercapacity: 13,
			HostedMachineOvercapacityDeleted: 14,
			HostedMachineOvercapacityDisabled: 15,
			Inactive: 2,
			ManualMaintenance: 4,
			ProvisionedWithError: 12,
			Provisioning: 10,
			RequiresGroupKey: 11,
			RequiresReconnection: 3,
			Temporary: 7,
			ToDelete: 6
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