'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.flowmachinegroupApi = function (e) {
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
		var _flowmachinegroup = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DomainSetting: { a: 'domainsetting' },
			FlowGroupType: { a: 'flowgrouptype' },
			flowmachinegroupId: { a: 'flowmachinegroupid', r: true },
			flowmachineimage: { b: 'flowmachineimage', a: '_flowmachineimage_value', c: 'flowmachineimages', d: 'flowmachineimage' },
			flowmachinenetwork: { b: 'flowmachinenetwork', a: '_flowmachinenetwork_value', c: 'flowmachinenetworks', d: 'flowmachinenetwork' },
			GroupMetadata: { a: 'groupmetadata' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			KeyCreationDate_TimezoneDateAndTime: { a: 'keycreationdate' },
			KeyExpiryGracePeriod: { a: 'keyexpirygraceperiod' },
			KeyValidityPeriod: { a: 'keyvalidityperiod' },
			ManagementType: { a: 'managementtype' },
			MaxManagedMachineCount: { a: 'maxmanagedmachinecount' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			PasswordChangedBy: { b: 'passwordchangedby', a: '_passwordchangedby_value', c: 'systemusers', d: 'systemuser' },
			PasswordChangedDate_UtcDateAndTime: { a: 'passwordchangeddate' },
			PreferredQueuingType: { a: 'preferredqueuingtype' },
			PrimaryKeyPackage: { a: 'primarykeypackage' },
			PrimaryPublicKey: { a: 'primarypublickey' },
			ProvisioningError: { a: 'provisioningerror' },
			ProvisioningState: { a: 'provisioningstate' },
			RotationStartedBy: { b: 'rotationstartedby', a: '_rotationstartedby_value', c: 'systemusers', d: 'systemuser' },
			SecondaryKeyPackage: { a: 'secondarykeypackage' },
			SecondaryPublicKey: { a: 'secondarypublickey' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			trytoreusewindowssession: { a: 'trytoreusewindowssession' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var flowmachinegroup = {};
		flowmachinegroup.ODataEntity = e;
		flowmachinegroup.FormattedValue = {};
		for (var field in _flowmachinegroup) {
			var a = _flowmachinegroup[field].a;
			var b = _flowmachinegroup[field].b;
			var c = _flowmachinegroup[field].c;
			var d = _flowmachinegroup[field].d;
			var g = _flowmachinegroup[field].g;
			var r = _flowmachinegroup[field].r;
			webApiField(flowmachinegroup, field, e, a, b, c, d, r, u, g);
		}
		flowmachinegroup.Entity = u;
		flowmachinegroup.EntityName = 'flowmachinegroup';
		flowmachinegroup.EntityCollectionName = 'flowmachinegroups';
		flowmachinegroup['@odata.etag'] = e['@odata.etag'];
		flowmachinegroup.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		flowmachinegroup.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return flowmachinegroup;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.flowmachinegroup = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		DomainSetting : {
			Da_tham_gia_AAD: 1,
			Khong_co: 0
		},
		FlowGroupType : {
			Khong_dung_khoa: 545940000,
			Mac_dinh: 545940002,
			Tieu_chuan: 545940001
		},
		ManagementType : {
			Duoc_quan_ly: 1,
			Khach_hang: 0
		},
		PreferredQueuingType : {
			ExtendedQueuePrioritization: 1,
			FIFO: 0
		},
		ProvisioningState : {
			Da_cung_cap: 2,
			Da_tao: 0,
			Dang_cung_cap: 1,
			Loi: 3
		},
		statecode : {
			Bao_tri: 2,
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Da_cach_ly: 6,
			Hien_hoat: 1,
			HmgCmkOperation: 7,
			HmgIslandMove: 5,
			KeyExpired: 4,
			Khong_hoat_dong: 2,
			ManualMaintenance: 3
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