'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msfp_questionApi = function (e) {
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
		var _msfp_question = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msfp_choicetype: { a: 'msfp_choicetype' },
			msfp_correctanswer: { a: 'msfp_correctanswer' },
			msfp_imageproperties: { a: 'msfp_imageproperties' },
			msfp_Maximumrating: { a: 'msfp_maximumrating' },
			msfp_multiline: { a: 'msfp_multiline' },
			msfp_name: { a: 'msfp_name' },
			msfp_order: { a: 'msfp_order' },
			msfp_otherproperties: { a: 'msfp_otherproperties' },
			msfp_PermanentID: { a: 'msfp_permanentid' },
			msfp_questionchoices: { a: 'msfp_questionchoices' },
			msfp_questionId: { a: 'msfp_questionid' },
			msfp_questiontext: { a: 'msfp_questiontext' },
			msfp_questiontype: { a: 'msfp_questiontype' },
			msfp_responserequired: { a: 'msfp_responserequired' },
			msfp_sequence: { a: 'msfp_sequence' },
			msfp_sourceparentquestionidentifier: { a: 'msfp_sourceparentquestionidentifier' },
			msfp_Sourcequestionidentifier: { a: 'msfp_sourcequestionidentifier' },
			msfp_sourcesurveyidentifier: { a: 'msfp_sourcesurveyidentifier' },
			msfp_subtitle: { a: 'msfp_subtitle' },
			msfp_Survey: { b: 'msfp_Survey', a: '_msfp_survey_value', c: 'msfp_surveies', d: 'msfp_survey' },
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
		var msfp_question = {};
		msfp_question.ODataEntity = e;
		msfp_question.FormattedValue = {};
		for (var field in _msfp_question) {
			var a = _msfp_question[field].a;
			var b = _msfp_question[field].b;
			var c = _msfp_question[field].c;
			var d = _msfp_question[field].d;
			var g = _msfp_question[field].g;
			var r = _msfp_question[field].r;
			webApiField(msfp_question, field, e, a, b, c, d, r, u, g);
		}
		msfp_question.Entity = u;
		msfp_question.EntityName = 'msfp_question';
		msfp_question.EntityCollectionName = 'msfp_questions';
		msfp_question['@odata.etag'] = e['@odata.etag'];
		msfp_question.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msfp_question.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msfp_question;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msfp_question = {
		msfp_choicetype : {
			Multi_choice: 647390001,
			none: 647390002,
			Single_choice: 647390000
		},
		msfp_questiontype : {
			Choice: 647390000,
			Date: 647390003,
			Date_and_time: 647390010,
			Drop_down: 647390011,
			File_Upload: 647390008,
			MatrixChoice: 647390006,
			MatrixChoiceGroup: 647390005,
			NPS: 647390007,
			Number: 647390009,
			Ranking: 647390004,
			Rating: 647390002,
			Text: 647390001
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