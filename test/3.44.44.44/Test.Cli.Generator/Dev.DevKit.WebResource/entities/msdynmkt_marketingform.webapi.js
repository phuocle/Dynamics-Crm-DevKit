'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_marketingformApi = function (e) {
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
		var _msdynmkt_marketingform = {
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
			msdynmkt_compliancesettings4id: { b: 'msdynmkt_compliancesettings4id', a: '_msdynmkt_compliancesettings4id_value', c: 'msdynmkt_compliancesettings4s', d: 'msdynmkt_compliancesettings4' },
			msdynmkt_conditionalcontent: { a: 'msdynmkt_conditionalcontent' },
			msdynmkt_contactmatchingrule: { b: 'msdynmkt_contactmatchingrule', a: '_msdynmkt_contactmatchingrule_value', c: 'msdynmkt_matchingstrategies', d: 'msdynmkt_matchingstrategy' },
			msdynmkt_createcontact: { a: 'msdynmkt_createcontact' },
			msdynmkt_createlead: { a: 'msdynmkt_createlead' },
			msdynmkt_createnewparentcontactonnomatch: { a: 'msdynmkt_createnewparentcontactonnomatch' },
			msdynmkt_designerhtml: { a: 'msdynmkt_designerhtml' },
			msdynmkt_doubleoptintogglemodifiedby: { b: 'msdynmkt_doubleoptintogglemodifiedby', a: '_msdynmkt_doubleoptintogglemodifiedby_value', c: 'systemusers', d: 'systemuser' },
			msdynmkt_doubleoptintogglemodifiedon_UtcDateAndTime: { a: 'msdynmkt_doubleoptintogglemodifiedon' },
			msdynmkt_errormessage: { a: 'msdynmkt_errormessage' },
			msdynmkt_formhtml: { a: 'msdynmkt_formhtml' },
			msdynmkt_handlingduplicatecontacts: { a: 'msdynmkt_handlingduplicatecontacts' },
			msdynmkt_handlingduplicateleads: { a: 'msdynmkt_handlingduplicateleads' },
			msdynmkt_isdoiforciblydisabled: { a: 'msdynmkt_isdoiforciblydisabled' },
			msdynmkt_leadmatchingrule: { b: 'msdynmkt_leadmatchingrule', a: '_msdynmkt_leadmatchingrule_value', c: 'msdynmkt_matchingstrategies', d: 'msdynmkt_matchingstrategy' },
			msdynmkt_linkleadtoparentcontact: { a: 'msdynmkt_linkleadtoparentcontact' },
			msdynmkt_marketingformId: { a: 'msdynmkt_marketingformid' },
			msdynmkt_marketingformtemplateid: { b: 'msdynmkt_marketingformtemplateid', a: '_msdynmkt_marketingformtemplateid_value', c: 'msdynmkt_marketingformtemplates', d: 'msdynmkt_marketingformtemplate' },
			msdynmkt_marketingformtype: { a: 'msdynmkt_marketingformtype' },
			msdynmkt_matchingstrategyid: { b: 'msdynmkt_matchingstrategyid', a: '_msdynmkt_matchingstrategyid_value', c: 'msdynmkt_matchingstrategies', d: 'msdynmkt_matchingstrategy' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_parentcontactmatchingstrategyid: { b: 'msdynmkt_parentcontactmatchingstrategyid', a: '_msdynmkt_parentcontactmatchingstrategyid_value', c: 'msdynmkt_matchingstrategies', d: 'msdynmkt_matchingstrategy' },
			msdynmkt_placeholders: { a: 'msdynmkt_placeholders' },
			msdynmkt_portalpublishingstatus: { a: 'msdynmkt_portalpublishingstatus' },
			msdynmkt_portalurl: { a: 'msdynmkt_portalurl' },
			msdynmkt_prefillfields: { a: 'msdynmkt_prefillfields' },
			msdynmkt_redirectenabled: { a: 'msdynmkt_redirectenabled' },
			msdynmkt_redirecturl: { a: 'msdynmkt_redirecturl' },
			msdynmkt_standalonehtml: { a: 'msdynmkt_standalonehtml' },
			msdynmkt_standalonepublishstatus: { a: 'msdynmkt_standalonepublishstatus' },
			msdynmkt_successmessage: { a: 'msdynmkt_successmessage' },
			msdynmkt_targetaudience: { b: 'msdynmkt_targetaudience', a: '_msdynmkt_targetaudience_value', c: 'msdynmkt_formtargetaudiences', d: 'msdynmkt_formtargetaudience' },
			msdynmkt_targetentity: { a: 'msdynmkt_targetentity' },
			msdynmkt_uniquename: { a: 'msdynmkt_uniquename' },
			msdynmkt_updatecontact: { a: 'msdynmkt_updatecontact' },
			msdynmkt_updatelead: { a: 'msdynmkt_updatelead' },
			msdynmkt_updateparentcontact: { a: 'msdynmkt_updateparentcontact' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
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
		var msdynmkt_marketingform = {};
		msdynmkt_marketingform.ODataEntity = e;
		msdynmkt_marketingform.FormattedValue = {};
		for (var field in _msdynmkt_marketingform) {
			var a = _msdynmkt_marketingform[field].a;
			var b = _msdynmkt_marketingform[field].b;
			var c = _msdynmkt_marketingform[field].c;
			var d = _msdynmkt_marketingform[field].d;
			var g = _msdynmkt_marketingform[field].g;
			var r = _msdynmkt_marketingform[field].r;
			webApiField(msdynmkt_marketingform, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_marketingform.Entity = u;
		msdynmkt_marketingform.EntityName = 'msdynmkt_marketingform';
		msdynmkt_marketingform.EntityCollectionName = 'msdynmkt_marketingforms';
		msdynmkt_marketingform['@odata.etag'] = e['@odata.etag'];
		msdynmkt_marketingform.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_marketingform.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_marketingform;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_marketingform = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdynmkt_createcontact : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_createlead : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_handlingduplicatecontacts : {
			Always_create_new_contact: 100000001,
			Use_a_rule_to_match_an_existing_contact: 100000000
		},
		msdynmkt_handlingduplicateleads : {
			Always_create_new_lead: 100000001,
			Use_a_rule_to_match_an_existing_lead: 100000000
		},
		msdynmkt_marketingformtype : {
			Marketing_form: 534120000,
			Registration_form: 534120001
		},
		msdynmkt_portalpublishingstatus : {
			Failed: 534120003,
			NotStarted: 534120001,
			Publishing: 534120002,
			Succeeded: 534120004
		},
		msdynmkt_standalonepublishstatus : {
			Failed: 534120003,
			InProgress: 534120002,
			NotStarted: 534120001,
			Succeeded: 534120004
		},
		msdynmkt_updatecontact : {
			No: 810180001,
			Yes: 810180000
		},
		msdynmkt_updatelead : {
			No: 810180001,
			Yes: 810180000
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 1,
			Live: 2,
			Live_Editing: 3
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