'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_agentcopilotsettingApi = function (e) {
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
		var _msdyn_agentcopilotsetting = {
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdyn_agentassistenabled: { a: 'msdyn_agentassistenabled' },
			msdyn_agentassistkbfilter: { a: 'msdyn_agentassistkbfilter' },
			msdyn_agentassistkbfilterlive: { a: 'msdyn_agentassistkbfilterlive' },
			msdyn_agentassisturl: { a: 'msdyn_agentassisturl' },
			msdyn_agentcopilotsettingId: { a: 'msdyn_agentcopilotsettingid' },
			msdyn_agentlist: { a: 'msdyn_agentlist' },
			msdyn_allagentsenabled: { a: 'msdyn_allagentsenabled' },
			msdyn_allowcrossgeo: { a: 'msdyn_allowcrossgeo' },
			msdyn_allowtranslation: { a: 'msdyn_allowtranslation' },
			msdyn_allworkstreamsenabled: { a: 'msdyn_allworkstreamsenabled' },
			msdyn_answerassistenabled: { a: 'msdyn_answerassistenabled' },
			msdyn_answerassistkbfilter: { a: 'msdyn_answerassistkbfilter' },
			msdyn_answerassistkbfilterlive: { a: 'msdyn_answerassistkbfilterlive' },
			msdyn_answerassisturl: { a: 'msdyn_answerassisturl' },
			msdyn_autocaseclosureenabled: { a: 'msdyn_autocaseclosureenabled' },
			msdyn_autocaseclosuresettings: { a: 'msdyn_autocaseclosuresettings' },
			msdyn_casetocaseresolutionmanualflowenabled: { a: 'msdyn_casetocaseresolutionmanualflowenabled' },
			msdyn_companyscopeurls: { a: 'msdyn_companyscopeurls' },
			msdyn_consentacceptanceby_UtcDateAndTime: { a: 'msdyn_consentacceptanceby' },
			msdyn_consentacceptedon_UtcDateAndTime: { a: 'msdyn_consentacceptedon' },
			msdyn_conversationtocaseautonomousflowenabled: { a: 'msdyn_conversationtocaseautonomousflowenabled' },
			msdyn_conversationtocasemanualflowenabled: { a: 'msdyn_conversationtocasemanualflowenabled' },
			msdyn_copilotcustomconfiguration: { a: 'msdyn_copilotcustomconfiguration' },
			msdyn_copilotemailenabledmode: { a: 'msdyn_copilotemailenabledmode' },
			msdyn_copilotembedsettings: { a: 'msdyn_copilotembedsettings' },
			msdyn_copilotenabled: { a: 'msdyn_copilotenabled' },
			msdyn_displayname: { a: 'msdyn_displayname' },
			msdyn_dvcopilotstatus: { a: 'msdyn_dvcopilotstatus' },
			msdyn_dynamicfilterconfig: { a: 'msdyn_dynamicfilterconfig' },
			msdyn_dynamicfilterconfiglive: { a: 'msdyn_dynamicfilterconfiglive' },
			msdyn_emailassistconfiguration: { a: 'msdyn_emailassistconfiguration' },
			msdyn_emailassistenabled: { a: 'msdyn_emailassistenabled' },
			msdyn_emailassistkbfilter: { a: 'msdyn_emailassistkbfilter' },
			msdyn_emailassistkbfilterlive: { a: 'msdyn_emailassistkbfilterlive' },
			msdyn_emailassisturl: { a: 'msdyn_emailassisturl' },
			msdyn_emailsentimentenabled: { a: 'msdyn_emailsentimentenabled' },
			msdyn_interactionsenabled: { a: 'msdyn_interactionsenabled' },
			msdyn_isdeterministicknowledgeenabled: { a: 'msdyn_isdeterministicknowledgeenabled' },
			msdyn_isdvcopilotenabled: { a: 'msdyn_isdvcopilotenabled' },
			msdyn_isemaildefaultonenabledone: { a: 'msdyn_isemaildefaultonenabledone' },
			msdyn_isknowledgehubconnectorsourceenabled: { a: 'msdyn_isknowledgehubconnectorsourceenabled' },
			msdyn_kbenabled: { a: 'msdyn_kbenabled' },
			msdyn_kbfilterallowagentedit: { a: 'msdyn_kbfilterallowagentedit' },
			msdyn_kbfilterforpersonalization: { a: 'msdyn_kbfilterforpersonalization' },
			msdyn_kbfilterforpersonalizationlive: { a: 'msdyn_kbfilterforpersonalizationlive' },
			msdyn_knowledgearticlecountlive: { a: 'msdyn_knowledgearticlecountlive' },
			msdyn_knowledgearticlesourceenabled: { a: 'msdyn_knowledgearticlesourceenabled' },
			msdyn_knowledgeconnectorpublishstatus: { a: 'msdyn_knowledgeconnectorpublishstatus' },
			msdyn_lasttrainingstatus: { a: 'msdyn_lasttrainingstatus' },
			msdyn_lasttrainingtime_UtcDateAndTime: { a: 'msdyn_lasttrainingtime' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_pluginconfiguration: { a: 'msdyn_pluginconfiguration' },
			msdyn_proactivepromptsenabled: { a: 'msdyn_proactivepromptsenabled' },
			msdyn_searchconfiguration: { a: 'msdyn_searchconfiguration' },
			msdyn_sharepointsourceenabled: { a: 'msdyn_sharepointsourceenabled' },
			msdyn_suggestedpromptsenabled: { a: 'msdyn_suggestedpromptsenabled' },
			msdyn_systemstatus: { a: 'msdyn_systemstatus' },
			msdyn_transcriptenabled: { a: 'msdyn_transcriptenabled' },
			msdyn_uniquekey: { a: 'msdyn_uniquekey' },
			msdyn_useagentlanguage: { a: 'msdyn_useagentlanguage' },
			msdyn_workstreamlist: { a: 'msdyn_workstreamlist' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
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
		var msdyn_agentcopilotsetting = {};
		msdyn_agentcopilotsetting.ODataEntity = e;
		msdyn_agentcopilotsetting.FormattedValue = {};
		for (var field in _msdyn_agentcopilotsetting) {
			var a = _msdyn_agentcopilotsetting[field].a;
			var b = _msdyn_agentcopilotsetting[field].b;
			var c = _msdyn_agentcopilotsetting[field].c;
			var d = _msdyn_agentcopilotsetting[field].d;
			var g = _msdyn_agentcopilotsetting[field].g;
			var r = _msdyn_agentcopilotsetting[field].r;
			webApiField(msdyn_agentcopilotsetting, field, e, a, b, c, d, r, u, g);
		}
		msdyn_agentcopilotsetting.Entity = u;
		msdyn_agentcopilotsetting.EntityName = 'msdyn_agentcopilotsetting';
		msdyn_agentcopilotsetting.EntityCollectionName = 'msdyn_agentcopilotsettings';
		msdyn_agentcopilotsetting['@odata.etag'] = e['@odata.etag'];
		msdyn_agentcopilotsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_agentcopilotsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_agentcopilotsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_agentcopilotsetting = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_copilotemailenabledmode : {
			_default: 133230002,
			manual: 133230001
		},
		msdyn_lasttrainingstatus : {
			Completed: 100230102,
			Failed: 100230103,
			Initiated: 100230101,
			InvalidKBFilters: 100230104,
			NoKBArticles: 100230105
		},
		msdyn_systemstatus : {
			Configuring: 100230002,
			Disabling: 100230004,
			FailureConfiguring: 100230005,
			New: 100230001,
			Ready: 100230003
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