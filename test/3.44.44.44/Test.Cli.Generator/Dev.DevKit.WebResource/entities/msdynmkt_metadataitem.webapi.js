'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.msdynmkt_metadataitemApi = function (e) {
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
		var _msdynmkt_metadataitem = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			msdynmkt_DataType: { a: 'msdynmkt_datatype' },
			msdynmkt_DateTimeBehavior: { a: 'msdynmkt_datetimebehavior' },
			msdynmkt_DisplayName: { a: 'msdynmkt_displayname' },
			msdynmkt_FullMetadataAsJSON: { a: 'msdynmkt_fullmetadataasjson' },
			msdynmkt_IconPath: { a: 'msdynmkt_iconpath' },
			msdynmkt_IsRequired: { a: 'msdynmkt_isrequired' },
			msdynmkt_IsSecured: { a: 'msdynmkt_issecured' },
			msdynmkt_LanguageCode: { a: 'msdynmkt_languagecode' },
			msdynmkt_LogicalName: { a: 'msdynmkt_logicalname' },
			msdynmkt_metadataitemId: { a: 'msdynmkt_metadataitemid' },
			msdynmkt_name: { a: 'msdynmkt_name' },
			msdynmkt_NativeId: { a: 'msdynmkt_nativeid' },
			msdynmkt_NavigationPathsAsJSON: { a: 'msdynmkt_navigationpathsasjson' },
			msdynmkt_ReferencedSourcesAsJSON: { a: 'msdynmkt_referencedsourcesasjson' },
			msdynmkt_SourceDisplayName: { a: 'msdynmkt_sourcedisplayname' },
			msdynmkt_SourceIsVirtual: { a: 'msdynmkt_sourceisvirtual' },
			msdynmkt_SourceLogicalName: { a: 'msdynmkt_sourcelogicalname' },
			msdynmkt_SourcePrimaryId: { a: 'msdynmkt_sourceprimaryid' },
			msdynmkt_SourceSetName: { a: 'msdynmkt_sourcesetname' },
			msdynmkt_SourceType: { a: 'msdynmkt_sourcetype' },
			msdynmkt_SourceVirtualTableType: { a: 'msdynmkt_sourcevirtualtabletype' },
			msdynmkt_StringFormatType: { a: 'msdynmkt_stringformattype' },
			msdynmkt_TargetAudience: { a: 'msdynmkt_targetaudienceasjson' },
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
		var msdynmkt_metadataitem = {};
		msdynmkt_metadataitem.ODataEntity = e;
		msdynmkt_metadataitem.FormattedValue = {};
		for (var field in _msdynmkt_metadataitem) {
			var a = _msdynmkt_metadataitem[field].a;
			var b = _msdynmkt_metadataitem[field].b;
			var c = _msdynmkt_metadataitem[field].c;
			var d = _msdynmkt_metadataitem[field].d;
			var g = _msdynmkt_metadataitem[field].g;
			var r = _msdynmkt_metadataitem[field].r;
			webApiField(msdynmkt_metadataitem, field, e, a, b, c, d, r, u, g);
		}
		msdynmkt_metadataitem.Entity = u;
		msdynmkt_metadataitem.EntityName = 'msdynmkt_metadataitem';
		msdynmkt_metadataitem.EntityCollectionName = 'msdynmkt_metadataitems';
		msdynmkt_metadataitem['@odata.etag'] = e['@odata.etag'];
		msdynmkt_metadataitem.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		msdynmkt_metadataitem.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return msdynmkt_metadataitem;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdynmkt_metadataitem = {
		msdynmkt_DataType : {
			BigInt: 534120000,
			Boolean: 534120015,
			DateTime: 534120002,
			Decimal: 534120003,
			Double: 534120007,
			EntityCollection: 534120020,
			EntityValue: 534120019,
			File: 534120006,
			Image: 534120008,
			Integer: 534120004,
			Lookup: 534120009,
			ManyToManyRelationship: 534120018,
			ManyToOneRelationship: 534120022,
			Memo: 534120011,
			Money: 534120001,
			MultiSelectPicklist: 534120010,
			OneToManyRelationship: 534120017,
			Other: 534120021,
			Picklist: 534120012,
			State: 534120014,
			Status: 534120013,
			String: 534120005,
			Uniqueidentifier: 534120016
		},
		msdynmkt_DateTimeBehavior : {
			DateOnly: 534120001,
			TimeZoneIndependent: 534120000,
			UserLocal: 534120002
		},
		msdynmkt_SourceType : {
			CJO_Business_Event: 534120002,
			CJO_Custom_Event: 534120003,
			CJO_Interaction_Event: 534120001,
			Dataverse_Table: 534120000,
			External: 534120005,
			Legal: 534120004
		},
		msdynmkt_SourceVirtualTableType : {
			Elastic: 534120001,
			None: 534120000,
			Other: 534120002
		},
		msdynmkt_StringFormatType : {
			Email: 534120000,
			Json: 534120008,
			Phone: 534120007,
			PhoneticGuide: 534120005,
			RichText: 534120009,
			Text: 534120001,
			TextArea: 534120002,
			TickerSymbol: 534120004,
			Url: 534120003,
			VersionNumber: 534120006
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