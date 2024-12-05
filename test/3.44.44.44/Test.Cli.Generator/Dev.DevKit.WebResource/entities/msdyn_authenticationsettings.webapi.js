'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_authenticationsettingsApi = function (e) {
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
		var _msdyn_authenticationsettings = {
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
			msdyn_accesstokenurl: { a: 'msdyn_accesstokenurl' },
			msdyn_actionname: { a: 'msdyn_actionname' },
			msdyn_additionalparams: { a: 'msdyn_additionalparams' },
			msdyn_authenticationclientid: { a: 'msdyn_authenticationclientid' },
			msdyn_authenticationclientsecret: { a: 'msdyn_authenticationclientsecret' },
			msdyn_authenticationscopes: { a: 'msdyn_authenticationscopes' },
			msdyn_authenticationsettingsId: { a: 'msdyn_authenticationsettingsid' },
			msdyn_Authenticationtype: { a: 'msdyn_authenticationtype' },
			msdyn_authserviceconfigsetid: { a: 'msdyn_authserviceconfigsetid' },
			msdyn_authservicescopeid: { a: 'msdyn_authservicescopeid' },
			msdyn_decryptedtokenurl: { a: 'msdyn_decryptedtokenurl' },
			msdyn_endpointregion: { a: 'msdyn_endpointregion' },
			msdyn_JavaScriptclientfunction: { a: 'msdyn_javascriptclientfunction' },
			msdyn_mappedaccountidfield: { a: 'msdyn_mappedaccountidfield' },
			msdyn_mappedcontactidfield: { a: 'msdyn_mappedcontactidfield' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocauthchanneltype: { a: 'msdyn_ocauthchanneltype' },
			msdyn_PublickeyURL: { a: 'msdyn_publickeyurl' },
			msdyn_redirecturi: { a: 'msdyn_redirecturi' },
			msdyn_useauthcodeflow: { a: 'msdyn_useauthcodeflow' },
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
		var msdyn_authenticationsettings = {};
		msdyn_authenticationsettings.ODataEntity = e;
		msdyn_authenticationsettings.FormattedValue = {};
		for (var field in _msdyn_authenticationsettings) {
			var a = _msdyn_authenticationsettings[field].a;
			var b = _msdyn_authenticationsettings[field].b;
			var c = _msdyn_authenticationsettings[field].c;
			var d = _msdyn_authenticationsettings[field].d;
			var g = _msdyn_authenticationsettings[field].g;
			var r = _msdyn_authenticationsettings[field].r;
			webApiField(msdyn_authenticationsettings, field, e, a, b, c, d, r, u, g);
		}
		msdyn_authenticationsettings.Entity = u;
		msdyn_authenticationsettings.EntityName = 'msdyn_authenticationsettings';
		msdyn_authenticationsettings.EntityCollectionName = 'msdyn_authenticationsettingses';
		msdyn_authenticationsettings['@odata.etag'] = e['@odata.etag'];
		msdyn_authenticationsettings.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_authenticationsettings.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_authenticationsettings;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_authenticationsettings = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_Authenticationtype : {
			Gatekeeper_Biometric_Authentication: 192350002,
			OAuth_20_code_flow: 192350001,
			OAuth_20_enhanced_authentication_chat_flow: 192350004,
			OAuth_20_implicit_flow: 192350000,
			OAuth_20_OpenId_connect_flow: 192350003
		},
		msdyn_endpointregion : {
			Canada: 192440002,
			United_Kingdom: 192440003,
			United_States: 192440001
		},
		msdyn_ocauthchanneltype : {
			Apple_Messages_For_Business: 192450000,
			Live_chat: 192360000,
			Voice: 192440000
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