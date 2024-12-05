'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msevtmgt_SpeakerApi = function (e) {
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
		var _msevtmgt_speaker = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeRate: { a: 'exchangerate', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msevtmgt_About: { a: 'msevtmgt_about' },
			msevtmgt_Accomplishments: { a: 'msevtmgt_accomplishments' },
			msevtmgt_Blog: { a: 'msevtmgt_blog' },
			msevtmgt_Contact: { b: 'msevtmgt_Contact', a: '_msevtmgt_contact_value', c: 'contacts', d: 'contact' },
			msevtmgt_Email: { a: 'msevtmgt_email' },
			msevtmgt_EventId: { b: 'msevtmgt_EventId', a: '_msevtmgt_eventid_value', c: 'msevtmgt_events', d: 'msevtmgt_event' },
			msevtmgt_EventRegistration: { b: 'msevtmgt_EventRegistration', a: '_msevtmgt_eventregistration_value', c: 'msevtmgt_eventregistrations', d: 'msevtmgt_eventregistration' },
			msevtmgt_LinkedIn: { a: 'msevtmgt_linkedin' },
			msevtmgt_Name: { a: 'msevtmgt_name' },
			msevtmgt_Publications: { a: 'msevtmgt_publications' },
			msevtmgt_SpeakerCost: { a: 'msevtmgt_speakercost' },
			msevtmgt_speakercost_Base: { a: 'msevtmgt_speakercost_base', r: true },
			msevtmgt_SpeakerId: { a: 'msevtmgt_speakerid' },
			msevtmgt_Title: { a: 'msevtmgt_title' },
			msevtmgt_TransactionCurrencyId: { b: 'msevtmgt_TransactionCurrencyId', a: '_msevtmgt_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			msevtmgt_Twitter: { a: 'msevtmgt_twitter' },
			msevtmgt_Type: { a: 'msevtmgt_type' },
			msevtmgt_Website: { a: 'msevtmgt_website' },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: 'systemusers', d: 'systemuser', r: true },
			processid: { a: 'processid' },
			stageid: { a: 'stageid' },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			TransactionCurrencyId: { b: 'transactioncurrencyid', a: '_transactioncurrencyid_value', c: 'transactioncurrencies', d: 'transactioncurrency' },
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		var msevtmgt_speaker = {};
		msevtmgt_speaker.ODataEntity = e;
		msevtmgt_speaker.FormattedValue = {};
		for (var field in _msevtmgt_speaker) {
			var a = _msevtmgt_speaker[field].a;
			var b = _msevtmgt_speaker[field].b;
			var c = _msevtmgt_speaker[field].c;
			var d = _msevtmgt_speaker[field].d;
			var g = _msevtmgt_speaker[field].g;
			var r = _msevtmgt_speaker[field].r;
			webApiField(msevtmgt_speaker, field, e, a, b, c, d, r, u, g);
		}
		msevtmgt_speaker.Entity = u;
		msevtmgt_speaker.EntityName = 'msevtmgt_speaker';
		msevtmgt_speaker.EntityCollectionName = 'msevtmgt_speakers';
		msevtmgt_speaker['@odata.etag'] = e['@odata.etag'];
		msevtmgt_speaker.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msevtmgt_speaker.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msevtmgt_speaker;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msevtmgt_Speaker = {
		msevtmgt_Type : {
			External_speaker: 100000001,
			Internal_speaker: 100000000
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