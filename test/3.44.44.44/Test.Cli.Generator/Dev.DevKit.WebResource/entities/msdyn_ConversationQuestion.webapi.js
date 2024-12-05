'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ConversationQuestionApi = function (e) {
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
		var _msdyn_conversationquestion = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_Category: { a: 'msdyn_category' },
			msdyn_ConversationParticipantInsights: { b: 'msdyn_ConversationParticipantInsights', a: '_msdyn_conversationparticipantinsights_value', c: 'msdyn_conversationparticipantinsightses', d: 'msdyn_conversationparticipantinsights' },
			msdyn_ConversationQuestionId: { a: 'msdyn_conversationquestionid' },
			msdyn_DurationInMS: { a: 'msdyn_durationinms' },
			msdyn_FragmentEnd: { a: 'msdyn_fragmentend' },
			msdyn_FragmentStart: { a: 'msdyn_fragmentstart' },
			msdyn_Locale: { a: 'msdyn_locale' },
			msdyn_Name: { a: 'msdyn_name' },
			msdyn_OffsetInMS: { a: 'msdyn_offsetinms' },
			msdyn_Text: { a: 'msdyn_text' },
			msdyn_Type: { a: 'msdyn_type' },
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
		var msdyn_conversationquestion = {};
		msdyn_conversationquestion.ODataEntity = e;
		msdyn_conversationquestion.FormattedValue = {};
		for (var field in _msdyn_conversationquestion) {
			var a = _msdyn_conversationquestion[field].a;
			var b = _msdyn_conversationquestion[field].b;
			var c = _msdyn_conversationquestion[field].c;
			var d = _msdyn_conversationquestion[field].d;
			var g = _msdyn_conversationquestion[field].g;
			var r = _msdyn_conversationquestion[field].r;
			webApiField(msdyn_conversationquestion, field, e, a, b, c, d, r, u, g);
		}
		msdyn_conversationquestion.Entity = u;
		msdyn_conversationquestion.EntityName = 'msdyn_conversationquestion';
		msdyn_conversationquestion.EntityCollectionName = 'msdyn_conversationquestions';
		msdyn_conversationquestion['@odata.etag'] = e['@odata.etag'];
		msdyn_conversationquestion.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_conversationquestion.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_conversationquestion;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ConversationQuestion = {
		msdyn_Locale : {
			ar_ae: 140,
			ar_bh: 150,
			ar_eg: 160,
			ar_iq: 170,
			ar_jo: 180,
			ar_kw: 190,
			ar_lb: 200,
			ar_om: 210,
			ar_qa: 220,
			ar_sa: 230,
			ar_sy: 240,
			da_dk: 260,
			de_de: 20,
			en_gb: 10,
			en_us: 0,
			es_es: 50,
			es_mx: 60,
			fi_fi: 280,
			fr_ca: 120,
			fr_fr: 30,
			he_il: 250,
			it_it: 40,
			ja_jp: 70,
			nb_no: 290,
			nl_nl: 110,
			pt_br: 80,
			pt_pt: 130,
			sv_se: 270,
			zh_cn: 90
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