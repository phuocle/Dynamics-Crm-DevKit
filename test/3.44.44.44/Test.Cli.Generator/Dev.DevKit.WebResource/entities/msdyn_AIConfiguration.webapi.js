'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_AIConfigurationApi = function (e) {
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
		var _msdyn_aiconfiguration = {
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
			msdyn_AIConfigurationId: { a: 'msdyn_aiconfigurationid' },
			msdyn_AIConfigurationIdUnique: { a: 'msdyn_aiconfigurationidunique', r: true },
			msdyn_AIModelId: { b: 'msdyn_AIModelId', a: '_msdyn_aimodelid_value', c: 'msdyn_aimodels', d: 'msdyn_aimodel' },
			msdyn_ConnectionReferenceId: { b: 'msdyn_ConnectionReferenceId', a: '_msdyn_connectionreferenceid_value', c: 'connectionreferences', d: 'connectionreference' },
			msdyn_CreatedFromConfigurationId: { b: 'msdyn_CreatedFromConfigurationId', a: '_msdyn_createdfromconfigurationid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			msdyn_CustomConfiguration: { a: 'msdyn_customconfiguration' },
			msdyn_DataBinding: { a: 'msdyn_databinding' },
			msdyn_lasterrors: { a: 'msdyn_lasterrors' },
			msdyn_lasttrainorrundate_TimezoneDateAndTime: { a: 'msdyn_lasttrainorrundate' },
			msdyn_MajorIterationNumber: { a: 'msdyn_majoriterationnumber' },
			msdyn_MinorIterationNumber: { a: 'msdyn_minoriterationnumber' },
			msdyn_Model_name: { a: 'msdyn_model', r: true },
			msdyn_ModelAction: { a: 'msdyn_modelaction' },
			msdyn_ModelData: { a: 'msdyn_modeldata' },
			msdyn_modelglobalexplainability: { a: 'msdyn_modelglobalexplainability' },
			msdyn_ModelPerformance: { a: 'msdyn_modelperformance' },
			msdyn_ModelProvisioningMetadata: { a: 'msdyn_modelprovisioningmetadata' },
			msdyn_ModelProvisioningStatus: { a: 'msdyn_modelprovisioningstatus' },
			msdyn_ModelRunDataSpecification: { a: 'msdyn_modelrundataspecification' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_ResourceInfo: { a: 'msdyn_resourceinfo' },
			msdyn_RunConfiguration: { a: 'msdyn_runconfiguration' },
			msdyn_SchedulingOptions: { a: 'msdyn_schedulingoptions' },
			msdyn_TemplateVersion: { a: 'msdyn_templateversion' },
			msdyn_TrainedModelAIConfigurationPareId: { b: 'msdyn_TrainedModelAIConfigurationPareId', a: '_msdyn_trainedmodelaiconfigurationpareid_value', c: 'msdyn_aiconfigurations', d: 'msdyn_aiconfiguration' },
			msdyn_Type: { a: 'msdyn_type' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateOnly: { a: 'overwritetime', r: true },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser', r: true },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team', r: true },
			OwnerIdType: { a: 'owneridtype', r: true },
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
		var msdyn_aiconfiguration = {};
		msdyn_aiconfiguration.ODataEntity = e;
		msdyn_aiconfiguration.FormattedValue = {};
		for (var field in _msdyn_aiconfiguration) {
			var a = _msdyn_aiconfiguration[field].a;
			var b = _msdyn_aiconfiguration[field].b;
			var c = _msdyn_aiconfiguration[field].c;
			var d = _msdyn_aiconfiguration[field].d;
			var g = _msdyn_aiconfiguration[field].g;
			var r = _msdyn_aiconfiguration[field].r;
			webApiField(msdyn_aiconfiguration, field, e, a, b, c, d, r, u, g);
		}
		msdyn_aiconfiguration.Entity = u;
		msdyn_aiconfiguration.EntityName = 'msdyn_aiconfiguration';
		msdyn_aiconfiguration.EntityCollectionName = 'msdyn_aiconfigurations';
		msdyn_aiconfiguration['@odata.etag'] = e['@odata.etag'];
		msdyn_aiconfiguration.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_aiconfiguration.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_aiconfiguration;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_AIConfiguration = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_Type : {
			RunConfiguration: 190690001,
			TrainingConfiguration: 190690000
		},
		statecode : {
			Done: 2,
			Draft: 0,
			Failed: 3,
			InProgress: 1
		},
		statuscode : {
			CancelFailed: 12,
			Cancelling: 2,
			DeleteFailed: 13,
			Deleting: 5,
			Draft: 0,
			Published: 7,
			PublishFailed: 10,
			Publishing: 3,
			Scheduled: 8,
			Trained: 6,
			TrainFailed: 9,
			Training: 1,
			UnpublishFailed: 11,
			Unpublishing: 4,
			UnsuccessfulTraining: 14
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