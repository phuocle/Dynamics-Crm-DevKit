'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_AITemplateApi = function (e) {
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
		var _msdyn_aitemplate = {
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IntroducedVersion: { a: 'introducedversion' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_AITemplateId: { a: 'msdyn_aitemplateid' },
			msdyn_AITemplateIdUnique: { a: 'msdyn_aitemplateidunique', r: true },
			msdyn_DataBinding: { a: 'msdyn_databinding' },
			msdyn_defaultrunschedulingoptions: { a: 'msdyn_defaultrunschedulingoptions' },
			msdyn_IsTrainable: { a: 'msdyn_istrainable' },
			msdyn_ModelAction: { a: 'msdyn_modelaction' },
			msdyn_ResourceInfo: { a: 'msdyn_resourceinfo' },
			msdyn_RunConfigSchema: { a: 'msdyn_runconfigschema' },
			msdyn_RunDataSpecification: { a: 'msdyn_rundataspecification' },
			msdyn_TemplateVersion: { a: 'msdyn_templateversion' },
			msdyn_TrainingConfigSchema: { a: 'msdyn_trainingconfigschema' },
			msdyn_TrainingDataSpecification: { a: 'msdyn_trainingdataspecification' },
			msdyn_UniqueName: { a: 'msdyn_uniquename' },
			msdyn_UXConfiguration: { a: 'msdyn_uxconfiguration' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
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
		var msdyn_aitemplate = {};
		msdyn_aitemplate.ODataEntity = e;
		msdyn_aitemplate.FormattedValue = {};
		for (var field in _msdyn_aitemplate) {
			var a = _msdyn_aitemplate[field].a;
			var b = _msdyn_aitemplate[field].b;
			var c = _msdyn_aitemplate[field].c;
			var d = _msdyn_aitemplate[field].d;
			var g = _msdyn_aitemplate[field].g;
			var r = _msdyn_aitemplate[field].r;
			webApiField(msdyn_aitemplate, field, e, a, b, c, d, r, u, g);
		}
		msdyn_aitemplate.Entity = u;
		msdyn_aitemplate.EntityName = 'msdyn_aitemplate';
		msdyn_aitemplate.EntityCollectionName = 'msdyn_aitemplates';
		msdyn_aitemplate['@odata.etag'] = e['@odata.etag'];
		msdyn_aitemplate.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_aitemplate.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_aitemplate;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_AITemplate = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		OwnerIdType : {
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