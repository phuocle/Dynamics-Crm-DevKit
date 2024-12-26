'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdyn_ocvoicechannelsettingApi = function (e) {
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
		var _msdyn_ocvoicechannelsetting = {
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
			msdyn_agentexternalparticipantcontrolenabled: { a: 'msdyn_agentexternalparticipantcontrolenabled' },
			msdyn_agentexternalparticipanttransfercontrolenabled: { a: 'msdyn_agentexternalparticipanttransfercontrolenabled' },
			msdyn_agentexternalteamsparticipantcontrolenabled: { a: 'msdyn_agentexternalteamsparticipantcontrolenabled' },
			msdyn_agentexternalteamsparticipanttransfercontrolenabled: { a: 'msdyn_agentexternalteamsparticipanttransfercontrolenabled' },
			msdyn_agentrecordingcontrolsenabled: { a: 'msdyn_agentrecordingcontrolsenabled' },
			msdyn_agenttranscriptioncontrolsenabled: { a: 'msdyn_agenttranscriptioncontrolsenabled' },
			msdyn_announceaveragewaittime: { a: 'msdyn_announceaveragewaittime' },
			msdyn_announcepositioninqueue: { a: 'msdyn_announcepositioninqueue' },
			msdyn_calleridname: { a: 'msdyn_calleridname' },
			msdyn_calleridphonenumberid: { b: 'msdyn_calleridphonenumberid', a: '_msdyn_calleridphonenumberid_value', c: 'msdyn_ocphonenumbers', d: 'msdyn_ocphonenumber' },
			msdyn_enablepostcallsurvey: { a: 'msdyn_enablepostcallsurvey' },
			msdyn_enablepostcallsurveyduration: { a: 'msdyn_enablepostcallsurveyduration' },
			msdyn_enablestoprecordingtranscriptiononhold: { a: 'msdyn_enablestoprecordingtranscriptiononhold' },
			msdyn_inboundurl: { a: 'msdyn_inboundurl' },
			msdyn_isanonymouscallerid: { a: 'msdyn_isanonymouscallerid' },
			msdyn_liveworkstreamid: { b: 'msdyn_liveworkstreamid', a: '_msdyn_liveworkstreamid_value', c: 'msdyn_liveworkstreams', d: 'msdyn_liveworkstream' },
			msdyn_name: { a: 'msdyn_name' },
			msdyn_ocvoicechannelsettingId: { a: 'msdyn_ocvoicechannelsettingid' },
			msdyn_operatinghoursid: { b: 'msdyn_operatinghoursid', a: '_msdyn_operatinghoursid_value', c: 'msdyn_operatinghours', d: 'msdyn_operatinghour' },
			msdyn_outboundcallregionallowlist: { a: 'msdyn_outboundcallregionallowlist' },
			msdyn_phonenumberid: { b: 'msdyn_phonenumberid', a: '_msdyn_phonenumberid_value', c: 'msdyn_ocphonenumbers', d: 'msdyn_ocphonenumber' },
			msdyn_postcallsurveyendtime_UtcDateAndTime: { a: 'msdyn_postcallsurveyendtime' },
			msdyn_postcallsurveyfrequency: { a: 'msdyn_postcallsurveyfrequency' },
			msdyn_postcallsurveystarttime_UtcDateAndTime: { a: 'msdyn_postcallsurveystarttime' },
			msdyn_recordingenabled: { a: 'msdyn_recordingenabled' },
			msdyn_recordingmode: { a: 'msdyn_recordingmode', g: true },
			msdyn_showhidetranscriptionfeaturepreview: { a: 'msdyn_showhidetranscriptionfeaturepreview' },
			msdyn_skipwaitmusicforivr: { a: 'msdyn_skipwaitmusicforivr' },
			msdyn_stoptranscriptionandrecordingafterpstntransfer: { a: 'msdyn_stoptranscriptionandrecordingafterpstntransfer' },
			msdyn_stoptranscriptionandrecordingafterteamstransfer: { a: 'msdyn_stoptranscriptionandrecordingafterteamstransfer' },
			msdyn_transcriptionenabled: { a: 'msdyn_transcriptionenabled' },
			msdyn_transcriptionmode: { a: 'msdyn_transcriptionmode', g: true },
			msdyn_transcriptionshowbydefault: { a: 'msdyn_transcriptionshowbydefault' },
			msdyn_usebridgetransferforpstntransfer: { a: 'msdyn_usebridgetransferforpstntransfer' },
			msdyn_usebridgetransferforteamstransfer: { a: 'msdyn_usebridgetransferforteamstransfer' },
			msdyn_voiceauthenticationsettingsid: { b: 'msdyn_voiceauthenticationsettingsid', a: '_msdyn_voiceauthenticationsettingsid_value', c: 'msdyn_authenticationsettingses', d: 'msdyn_authenticationsettings' },
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
		var msdyn_ocvoicechannelsetting = {};
		msdyn_ocvoicechannelsetting.ODataEntity = e;
		msdyn_ocvoicechannelsetting.FormattedValue = {};
		for (var field in _msdyn_ocvoicechannelsetting) {
			var a = _msdyn_ocvoicechannelsetting[field].a;
			var b = _msdyn_ocvoicechannelsetting[field].b;
			var c = _msdyn_ocvoicechannelsetting[field].c;
			var d = _msdyn_ocvoicechannelsetting[field].d;
			var g = _msdyn_ocvoicechannelsetting[field].g;
			var r = _msdyn_ocvoicechannelsetting[field].r;
			webApiField(msdyn_ocvoicechannelsetting, field, e, a, b, c, d, r, u, g);
		}
		msdyn_ocvoicechannelsetting.Entity = u;
		msdyn_ocvoicechannelsetting.EntityName = 'msdyn_ocvoicechannelsetting';
		msdyn_ocvoicechannelsetting.EntityCollectionName = 'msdyn_ocvoicechannelsettings';
		msdyn_ocvoicechannelsetting['@odata.etag'] = e['@odata.etag'];
		msdyn_ocvoicechannelsetting.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdyn_ocvoicechannelsetting.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdyn_ocvoicechannelsetting;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_ocvoicechannelsetting = {
		ComponentState : {
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		msdyn_recordingmode : {
			Automatic: 192351002,
			Manual: 192351001,
			None: 192351000
		},
		msdyn_transcriptionmode : {
			Automatic: 192351002,
			Manual: 192351001,
			None: 192351000
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