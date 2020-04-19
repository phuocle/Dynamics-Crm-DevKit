'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.EmailServerProfileApi = function (e) {
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
		var emailserverprofile = {
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true },
			CreatedOnBehalfBy: { b: 'createdonbehalfby', a: '_createdonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			DefaultServerLocation: { a: 'defaultserverlocation' },
			Description: { a: 'description' },
			EmailServerProfileId: { a: 'emailserverprofileid' },
			EmailServerTypeName: { a: 'emailservertypename', r: true },
			EncodingCodePage: { a: 'encodingcodepage' },
			EntityImage: { a: 'entityimage' },
			EntityImage_Timestamp: { a: 'entityimage_timestamp', r: true },
			EntityImage_URL: { a: 'entityimage_url', r: true },
			EntityImageId: { a: 'entityimageid', r: true },
			ExchangeOnlineTenantId: { a: 'exchangeonlinetenantid' },
			ExchangeVersion: { a: 'exchangeversion' },
			IncomingAuthenticationProtocol: { a: 'incomingauthenticationprotocol' },
			IncomingCredentialRetrieval: { a: 'incomingcredentialretrieval' },
			IncomingPartnerApplication: { b: 'incomingpartnerapplication', a: '_incomingpartnerapplication_value', c: 'partnerapplications', d: 'partnerapplication', r: true },
			IncomingPassword: { a: 'incomingpassword' },
			IncomingPortNumber: { a: 'incomingportnumber' },
			IncomingServerLocation: { a: 'incomingserverlocation' },
			IncomingUseImpersonation: { a: 'incominguseimpersonation' },
			IncomingUserName: { a: 'incomingusername' },
			IncomingUseSSL: { a: 'incomingusessl' },
			IsIncomingPasswordSet: { a: 'isincomingpasswordset', r: true },
			IsOutgoingPasswordSet: { a: 'isoutgoingpasswordset', r: true },
			LastAuthorizationStatus: { a: 'lastauthorizationstatus' },
			LastCrmMessage: { a: 'lastcrmmessage' },
			LastTestExecutionStatus: { a: 'lasttestexecutionstatus' },
			LastTestRequest: { a: 'lasttestrequest' },
			LastTestResponse: { a: 'lasttestresponse' },
			LastTestStartTime_UtcDateAndTime: { a: 'lastteststarttime' },
			LastTestTotalExecutionTime: { a: 'lasttesttotalexecutiontime' },
			LastTestValidationStatus: { a: 'lasttestvalidationstatus' },
			MaxConcurrentConnections: { a: 'maxconcurrentconnections' },
			MinPollingIntervalInMinutes: { a: 'minpollingintervalinminutes' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MoveUndeliveredEmails: { a: 'moveundeliveredemails' },
			Name: { a: 'name' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OutgoingAuthenticationProtocol: { a: 'outgoingauthenticationprotocol' },
			OutgoingAutoGrantDelegateAccess: { a: 'outgoingautograntdelegateaccess' },
			OutgoingCredentialRetrieval: { a: 'outgoingcredentialretrieval' },
			OutgoingPartnerApplication: { b: 'outgoingpartnerapplication', a: '_outgoingpartnerapplication_value', c: 'partnerapplications', d: 'partnerapplication', r: true },
			OutgoingPassword: { a: 'outgoingpassword' },
			OutgoingPortNumber: { a: 'outgoingportnumber' },
			OutgoingServerLocation: { a: 'outgoingserverlocation' },
			OutgoingUseImpersonation: { a: 'outgoinguseimpersonation' },
			OutgoingUsername: { a: 'outgoingusername' },
			OutgoingUseSSL: { a: 'outgoingusessl' },
			OwnerEmailAddress: { a: 'owneremailaddress' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			OwningUser: { b: 'owninguser', a: '_owninguser_value', c: '', d: '', r: true },
			ProcessEmailsReceivedAfter_UtcDateAndTime: { a: 'processemailsreceivedafter' },
			SendEmailAlert: { a: 'sendemailalert' },
			ServerType: { a: 'servertype' },
			StateCode: { a: 'statecode' },
			StatusCode: { a: 'statuscode' },
			TimeoutMailboxConnection: { a: 'timeoutmailboxconnection' },
			TimeoutMailboxConnectionAfterAmount: { a: 'timeoutmailboxconnectionafteramount' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber' },
			UseAutoDiscover: { a: 'useautodiscover' },
			UseDefaultTenantId: { a: 'usedefaulttenantid' },
			UseSameSettingsForOutgoingConnections: { a: 'usesamesettingsforoutgoingconnections' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode' },
			VersionNumber: { a: 'versionnumber', r: true }
		};
		if (e === undefined) e = {};
		var u = {};
		for (var field in emailserverprofile) {
			var a = emailserverprofile[field].a;
			var b = emailserverprofile[field].b;
			var c = emailserverprofile[field].c;
			var d = emailserverprofile[field].d;
			var g = emailserverprofile[field].g;
			var r = emailserverprofile[field].r;
			emailserverprofile[field] = webApiField(e, a, b, c, d, r, u, g);
		}
		emailserverprofile.Entity = u;
		emailserverprofile.EntityName = 'emailserverprofile';
		emailserverprofile.EntityCollectionName = 'emailserverprofiles';
		emailserverprofile['@odata.etag'] = e['@odata.etag'];
		emailserverprofile.getAliasedValue = function (alias, isMultiOptionSet) {
			if (e[alias] === undefined || e[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e[alias];
		}
		emailserverprofile.getAliasedFormattedValue = function (alias, isMultiOptionSet) {
			if (e[alias + f] === undefined || e[alias + f] === null) {
				return EMPTY_STRING;
			}
			if (isMultiOptionSet) {
				return e[alias + f].toString().split(';').map(function (item) { return item.trim(); });
			}
			return e[alias + f];
		}
		return emailserverprofile;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.EmailServerProfile = {
		ExchangeVersion : {
			Exchange_2007: 0,
			Exchange_2007_SP1: 1,
			Exchange_2010: 2,
			Exchange_2010_SP1: 3,
			Exchange_2010_SP2: 4,
			Exchange_2013: 5
		},
		IncomingAuthenticationProtocol : {
			Auto_Detect: 0,
			Negotiate: 1,
			NTLM: 2,
			Basic: 3
		},
		IncomingCredentialRetrieval : {
			Credentials_Specified_by_a_User_or_Queue: 0,
			Credentials_Specified_in_Email_Server_Profile: 1,
			Server_to_Server_Authentication: 2,
			Windows_Integrated_Authentication: 3,
			Without_Credentials_Anonymous: 4
		},
		LastAuthorizationStatus : {
			Failure: 0,
			Success: 1
		},
		LastTestExecutionStatus : {
			Failure: 0,
			Success: 1,
			Warning: 2
		},
		LastTestValidationStatus : {
			Failure: 0,
			Success: 1
		},
		OutgoingAuthenticationProtocol : {
			Auto_Detect: 0,
			Negotiate: 1,
			NTLM: 2,
			Basic: 3
		},
		OutgoingCredentialRetrieval : {
			Credentials_Specified_by_a_User_or_Queue: 0,
			Credentials_Specified_in_Email_Server_Profile: 1,
			Server_to_Server_Authentication: 2,
			Windows_Integrated_Authentication: 3,
			Without_Credentials_Anonymous: 4
		},
		ServerType : {
			Exchange_Server: 0,
			Other_POP3SMTP: 1,
			Exchange_Server_Hybrid: 2,
			Exchange_Online_Hybrid: 3,
			IMAPSMTP: 4
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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