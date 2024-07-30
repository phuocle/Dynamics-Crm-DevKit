'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.solutioncomponentrelationshipconfigurationApi = function (e) {
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
		var _solutioncomponentrelationshipconfiguration = {
			AddRelatedComponents: { a: 'addrelatedcomponents' },
			CascadeRemoveComponents: { a: 'cascaderemovecomponents' },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityRelationshipId: { b: 'EntityRelationshipId', a: '_entityrelationshipid_value', c: 'entityrelationships', d: 'entityrelationship' },
			ForceAddingManagedRelatedComponents: { a: 'forceaddingmanagedrelatedcomponents' },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			name: { a: 'name' },
			NoMissingDependencyForApiManagedSolution: { a: 'nomissingdependencyforapimanagedsolution' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			PrimaryEntityDependencyType: { a: 'primaryentitydependencytype' },
			RespectParentRootComponentBehavior: { a: 'respectparentrootcomponentbehavior' },
			SecondaryEntityDependencyType: { a: 'secondaryentitydependencytype' },
			solutioncomponentrelationshipconfigurationId: { a: 'solutioncomponentrelationshipconfigurationid' },
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
		var solutioncomponentrelationshipconfiguration = {};
		solutioncomponentrelationshipconfiguration.ODataEntity = e;
		solutioncomponentrelationshipconfiguration.FormattedValue = {};
		for (var field in _solutioncomponentrelationshipconfiguration) {
			var a = _solutioncomponentrelationshipconfiguration[field].a;
			var b = _solutioncomponentrelationshipconfiguration[field].b;
			var c = _solutioncomponentrelationshipconfiguration[field].c;
			var d = _solutioncomponentrelationshipconfiguration[field].d;
			var g = _solutioncomponentrelationshipconfiguration[field].g;
			var r = _solutioncomponentrelationshipconfiguration[field].r;
			webApiField(solutioncomponentrelationshipconfiguration, field, e, a, b, c, d, r, u, g);
		}
		solutioncomponentrelationshipconfiguration.Entity = u;
		solutioncomponentrelationshipconfiguration.EntityName = 'solutioncomponentrelationshipconfiguration';
		solutioncomponentrelationshipconfiguration.EntityCollectionName = 'solutioncomponentrelationshipconfigurations';
		solutioncomponentrelationshipconfiguration['@odata.etag'] = e['@odata.etag'];
		solutioncomponentrelationshipconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		solutioncomponentrelationshipconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return solutioncomponentrelationshipconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.solutioncomponentrelationshipconfiguration = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		PrimaryEntityDependencyType : {
			Quan_he_phu_thuoc_bat_buoc: 0,
			Quan_he_phu_thuoc_khong_bat_buoc: 1
		},
		SecondaryEntityDependencyType : {
			Quan_he_phu_thuoc_bat_buoc: 0,
			Quan_he_phu_thuoc_khong_bat_buoc: 1
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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