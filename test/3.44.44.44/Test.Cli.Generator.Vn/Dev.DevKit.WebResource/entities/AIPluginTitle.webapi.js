﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.AIPluginTitleApi = function (e) {
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
		var _aiplugintitle = {
			AccentColor: { a: 'accentcolor' },
			AIPluginTitleId: { a: 'aiplugintitleid' },
			BaseArtifactId: { a: 'baseartifactid' },
			ComponentIdUnique: { a: 'componentidunique', r: true },
			ComponentState: { a: 'componentstate', r: true },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Description: { a: 'description' },
			DeveloperName: { a: 'developername' },
			DisplayName: { a: 'displayname' },
			Icon: { a: 'icon' },
			EntityImage: { a: 'iconscolorimage' },
			EntityImage_Timestamp: { a: 'iconscolorimage_timestamp', r: true },
			EntityImage_URL: { a: 'iconscolorimage_url', r: true },
			IconsColorImage: { a: 'iconscolorimage' },
			IconsColorImage_Timestamp: { a: 'iconscolorimage_timestamp', r: true },
			IconsColorImage_URL: { a: 'iconscolorimage_url', r: true },
			IconsColorImageId: { a: 'iconscolorimageid', r: true },
			IconsOutlineImage: { a: 'iconsoutlineimage' },
			IconsOutlineImage_Timestamp: { a: 'iconsoutlineimage_timestamp', r: true },
			IconsOutlineImage_URL: { a: 'iconsoutlineimage_url', r: true },
			IconsOutlineImageId: { a: 'iconsoutlineimageid', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			IsCustom: { a: 'iscustom' },
			IsCustomizable: { a: 'iscustomizable' },
			IsManaged: { a: 'ismanaged', r: true },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OverriddenCreatedOn_UtcDateOnly: { a: 'overriddencreatedon' },
			OverwriteTime_UtcDateAndTime: { a: 'overwritetime', r: true },
			PluginTitleVersion: { a: 'plugintitleversion' },
			PrivacyURL: { a: 'privacyurl' },
			ShortDescription: { a: 'shortdescription' },
			SolutionId: { a: 'solutionid', r: true },
			statecode: { a: 'statecode' },
			statuscode: { a: 'statuscode' },
			SupportingSolutionId: { a: 'supportingsolutionid', r: true },
			TermsOfUseUrl: { a: 'termsofuseurl' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true },
			WebsiteUrl: { a: 'websiteurl' }
		};
		if (e === undefined) e = {};
		var u = {};
		var aiplugintitle = {};
		aiplugintitle.ODataEntity = e;
		aiplugintitle.FormattedValue = {};
		for (var field in _aiplugintitle) {
			var a = _aiplugintitle[field].a;
			var b = _aiplugintitle[field].b;
			var c = _aiplugintitle[field].c;
			var d = _aiplugintitle[field].d;
			var g = _aiplugintitle[field].g;
			var r = _aiplugintitle[field].r;
			webApiField(aiplugintitle, field, e, a, b, c, d, r, u, g);
		}
		aiplugintitle.Entity = u;
		aiplugintitle.EntityName = 'aiplugintitle';
		aiplugintitle.EntityCollectionName = 'aiplugintitles';
		aiplugintitle['@odata.etag'] = e['@odata.etag'];
		aiplugintitle.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		aiplugintitle.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return aiplugintitle;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.AIPluginTitle = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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