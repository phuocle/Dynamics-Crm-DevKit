'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.adobe_recipientApi = function (e) {
		var EMPTY_STRING = '';
		var f = '@OData.Community.Display.V1.FormattedValue';
        function webApiField(entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, isMultiOptionSet) {
            var l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
            var property = {};
            var getFormattedValue = function () {
                if (entity[logicalName + f] === undefined || entity[logicalName + f] === null) {
                    return EMPTY_STRING;
                }
                if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
                    if (entity[logicalName + l] === entityLogicalName) {
                        return entity[logicalName + f];
                    }
                    return EMPTY_STRING;
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
                    value = value.replace('{', EMPTY_STRING).replace('}', EMPTY_STRING);
                    upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + value + ')';
                } else {
                    upsertEntity[logicalName] = value;
                }
                entity[logicalName] = value;
            };
            Object.defineProperty(property, 'FormattedValue', {
                get: getFormattedValue
            });
            if (readOnly) {
                Object.defineProperty(property, 'Value', {
                    get: getValue
                });
            }
            else {
                Object.defineProperty(property, 'Value', {
                    get: getValue,
                    set: setValue
                });
            }
            return property;
        }
		var adobe_recipient = {
			adobe_AgreementId: { b: 'adobe_AgreementId', a: '_adobe_agreementid_value', c: 'adobe_agreements', d: 'adobe_agreement' },
			adobe_countrycode: { a: 'adobe_countrycode' },
			adobe_datesigned_UtcDateOnly: { a: 'adobe_datesigned' },
			adobe_displayedorder: { a: 'adobe_displayedorder' },
			adobe_emailaddress: { a: 'adobe_emailaddress' },
			adobe_fullname: { a: 'adobe_fullname' },
			adobe_hassigned: { a: 'adobe_hassigned' },
			adobe_identityverification: { a: 'adobe_identityverification' },
			adobe_name: { a: 'adobe_name' },
			adobe_overridedefaultverification: { a: 'adobe_overridedefaultverification' },
			adobe_parentagreementstatus: { a: 'adobe_parentagreementstatus' },
			adobe_participantid: { a: 'adobe_participantid' },
			adobe_password: { a: 'adobe_password' },
			adobe_phone: { a: 'adobe_phone' },
			adobe_recipientcrmtype: { a: 'adobe_recipientcrmtype' },
			adobe_recipientId: { a: 'adobe_recipientid' },
			adobe_recipientlookuptype: { a: 'adobe_recipientlookuptype' },
			adobe_recipientorderbackup: { a: 'adobe_recipientorderbackup' },
			adobe_recipientorderint: { a: 'adobe_recipientorderint' },
			adobe_recipientrole: { a: 'adobe_recipientrole' },
			adobe_relatedcontact: { b: 'adobe_relatedcontact', a: '_adobe_relatedcontact_value', c: 'contacts', d: 'contact' },
			adobe_relatedlead: { b: 'adobe_relatedlead', a: '_adobe_relatedlead_value', c: 'leads', d: 'lead' },
			adobe_relateduser: { b: 'adobe_relateduser', a: '_adobe_relateduser_value', c: 'systemusers', d: 'systemuser' },
			adobe_signingurl: { a: 'adobe_signingurl' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			ImportSequenceNumber: { a: 'importsequencenumber' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
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
			traversedpath: { a: 'traversedpath' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in adobe_recipient) {
			var a = adobe_recipient[field].a;
			var b = adobe_recipient[field].b;
			var c = adobe_recipient[field].c;
			var d = adobe_recipient[field].d;
			var g = adobe_recipient[field].g;
			var r = adobe_recipient[field].r;
			adobe_recipient[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		adobe_recipient.Entity = u;
		adobe_recipient.EntityName = 'adobe_recipient';
		adobe_recipient.EntityCollectionName = 'adobe_recipients';
		adobe_recipient['@odata.etag'] = e['@odata.etag'];
		adobe_recipient.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		adobe_recipient.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return adobe_recipient;
	};
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.adobe_recipient = {
		adobe_identityverification : {
			EMAIL: 648770003,
			PHONE: 648770004,
			PASSWORD: 648770000,
			KNOWLEDGE_BASE: 648770001,
			WEB_IDENTITY: 648770002
		},
		adobe_recipientcrmtype : {
			New: 648770000,
			Contact: 648770001,
			Lead: 648770002,
			User: 648770003
		},
		adobe_recipientlookuptype : {
			Lead: 648770000,
			Contact: 648770001,
			User: 648770002
		},
		adobe_recipientrole : {
			SIGNER: 648770000,
			APPROVER: 648770001,
			CC: 648770002
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