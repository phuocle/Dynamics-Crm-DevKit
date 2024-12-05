'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_predictionmodelstatusApi = function (e) {
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
		var _msdyn_predictionmodelstatus = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_ChangeGradesOnRetrain: { a: 'msdyn_changegradesonretrain' },
			msdyn_ComputationConfig: { a: 'msdyn_computationconfig' },
			msdyn_ComputationFrequency: { a: 'msdyn_computationfrequency' },
			msdyn_ConfigVersion: { a: 'msdyn_configversion' },
			msdyn_Created_UtcDateAndTime: { a: 'msdyn_created' },
			msdyn_DockerImageName: { a: 'msdyn_dockerimagename' },
			msdyn_ExplanationPath: { a: 'msdyn_explanationpath' },
			msdyn_GradeDefinition: { a: 'msdyn_gradedefinition' },
			msdyn_IsCurrent: { a: 'msdyn_iscurrent' },
			msdyn_IslandUrl: { a: 'msdyn_islandurl' },
			msdyn_isnewentityadditionopted: { a: 'msdyn_isnewentityadditionopted' },
			msdyn_IsScheduled: { a: 'msdyn_isscheduled' },
			msdyn_Message: { a: 'msdyn_message' },
			msdyn_ModelId: { a: 'msdyn_modelid' },
			msdyn_ModelPath: { a: 'msdyn_modelpath' },
			msdyn_ModelVersion: { a: 'msdyn_modelversion' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_NextComputation_UtcDateAndTime: { a: 'msdyn_nextcomputation' },
			msdyn_PredictionGuid: { a: 'msdyn_predictionguid' },
			msdyn_predictionmodelstatusId: { a: 'msdyn_predictionmodelstatusid' },
			msdyn_PredictionName: { a: 'msdyn_predictionname' },
			msdyn_PredictionType: { a: 'msdyn_predictiontype' },
			msdyn_PsmOpted: { a: 'msdyn_psmopted' },
			msdyn_PublishOnTrain: { a: 'msdyn_publishontrain' },
			msdyn_RetryCounter: { a: 'msdyn_retrycounter' },
			msdyn_SignalsUsed: { a: 'msdyn_signalsused' },
			msdyn_Status: { a: 'msdyn_status' },
			msdyn_TestSetCount: { a: 'msdyn_testsetcount' },
			msdyn_TimeoutPeriodInMinutes: { a: 'msdyn_timeoutperiodinminutes' },
			msdyn_TrainingAccuracy: { a: 'msdyn_trainingaccuracy' },
			msdyn_TrainingAuc: { a: 'msdyn_trainingauc' },
			msdyn_TrainingConfig: { a: 'msdyn_trainingconfig' },
			msdyn_TrainingSetCount: { a: 'msdyn_trainingsetcount' },
			msdyn_UseBPFAsFilter: { a: 'msdyn_usebpfasfilter' },
			msdyn_ValidationSetCount: { a: 'msdyn_validationsetcount' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msdyn_predictionmodelstatus = {};
		msdyn_predictionmodelstatus.ODataEntity = e;
		msdyn_predictionmodelstatus.FormattedValue = {};
		for (var field in _msdyn_predictionmodelstatus) {
			var a = _msdyn_predictionmodelstatus[field].a;
			var b = _msdyn_predictionmodelstatus[field].b;
			var c = _msdyn_predictionmodelstatus[field].c;
			var d = _msdyn_predictionmodelstatus[field].d;
			var g = _msdyn_predictionmodelstatus[field].g;
			var r = _msdyn_predictionmodelstatus[field].r;
			webApiField(msdyn_predictionmodelstatus, field, e, a, b, c, d, r, u, g);
		}
		msdyn_predictionmodelstatus.Entity = u;
		msdyn_predictionmodelstatus.EntityName = 'msdyn_predictionmodelstatus';
		msdyn_predictionmodelstatus.EntityCollectionName = 'msdyn_predictionmodelstatuses';
		msdyn_predictionmodelstatus['@odata.etag'] = e['@odata.etag'];
		msdyn_predictionmodelstatus.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_predictionmodelstatus.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_predictionmodelstatus;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_predictionmodelstatus = {
		msdyn_PredictionType : {
			LeadScoring: 192350000,
			OpportunityScoring: 192350001,
			SimilarOpportunity: 192350002
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