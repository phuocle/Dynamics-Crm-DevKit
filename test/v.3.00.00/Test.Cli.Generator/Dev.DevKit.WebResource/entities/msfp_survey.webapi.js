'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msfp_surveyApi = function (e) {
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
		var _msfp_survey = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Inspection: { b: 'msdyn_Inspection', a: '_msdyn_inspection_value', c: 'msdyn_inspections', d: 'msdyn_inspection' },
			msfp_acceptanonymousresponses: { a: 'msfp_acceptanonymousresponses' },
			msfp_anonymousurl: { a: 'msfp_anonymousurl' },
			msfp_description: { a: 'msfp_description' },
			msfp_embedcode: { a: 'msfp_embedcode' },
			msfp_enddate_UtcDateAndTime: { a: 'msfp_enddate' },
			msfp_friendlyname: { a: 'msfp_friendlyname' },
			msfp_name: { a: 'msfp_name' },
			msfp_otherproperties: { a: 'msfp_otherproperties' },
			msfp_PermanentID: { a: 'msfp_permanentid' },
			msfp_project: { b: 'msfp_project', a: '_msfp_project_value', c: 'msfp_projects', d: 'msfp_project' },
			msfp_publishedby: { b: 'msfp_publishedby', a: '_msfp_publishedby_value', c: 'systemusers', d: 'systemuser' },
			msfp_publishedon_UtcDateAndTime: { a: 'msfp_publishedon' },
			msfp_sourcesurveyidentifier: { a: 'msfp_sourcesurveyidentifier' },
			msfp_sourcesurveymodifieddate_UtcDateOnly: { a: 'msfp_sourcesurveymodifieddate' },
			msfp_sourcesurveyversion: { a: 'msfp_sourcesurveyversion' },
			msfp_startdate_UtcDateAndTime: { a: 'msfp_startdate' },
			msfp_surveyId: { a: 'msfp_surveyid' },
			msfp_surveysource: { a: 'msfp_surveysource' },
			msfp_surveyurl: { a: 'msfp_surveyurl' },
			msfp_variables: { a: 'msfp_variables' },
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
		var msfp_survey = {};
		msfp_survey.ODataEntity = e;
		msfp_survey.FormattedValue = {};
		for (var field in _msfp_survey) {
			var a = _msfp_survey[field].a;
			var b = _msfp_survey[field].b;
			var c = _msfp_survey[field].c;
			var d = _msfp_survey[field].d;
			var g = _msfp_survey[field].g;
			var r = _msfp_survey[field].r;
			webApiField(msfp_survey, field, e, a, b, c, d, r, u, g);
		}
		msfp_survey.Entity = u;
		msfp_survey.EntityName = 'msfp_survey';
		msfp_survey.EntityCollectionName = 'msfp_surveies';
		msfp_survey['@odata.etag'] = e['@odata.etag'];
		msfp_survey.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msfp_survey.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msfp_survey;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msfp_survey = {
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Active: 1,
			Deleted: 100000002,
			Draft: 100000000,
			Inactive: 2,
			Published: 100000003
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