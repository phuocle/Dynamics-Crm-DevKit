'use strict';
/** @namespace DevKit */
// @ts-ignore
var DevKit;
(function (/** @type {any} */ DevKit) {
	if (DevKit === undefined) DevKit = {};
	DevKit.EmailServerProfileApi = function (e) {
		const f = '@OData.Community.Display.V1.FormattedValue';
		function webApiField(obj, field, entity, logicalName, schemaName, entityLogicalCollectionName, entityLogicalName, readOnly, upsertEntity, type) {
			const l = '@Microsoft.Dynamics.CRM.lookuplogicalname';
			const getFormattedValue = function () {
				if (entity?.[logicalName + f] === undefined || entity?.[logicalName + f] === null) {
					return '';
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === entityLogicalName) {
						return entity?.[logicalName + f];
					}
					return '';
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
				}
				return entity?.[logicalName + f];
			};
			const getValue = function () {
				if (entity?.[logicalName] === undefined || entity?.[logicalName] === null) {
					return null;
				}
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName.length > 0) {
					if (entity?.[logicalName + l] === undefined || entity?.[logicalName + l] === entityLogicalName) {
						return returnGet(entity?.[logicalName], type);
					}
					return null;
				}
				if (type === 'MultiOptionSet') {
					return entity?.[logicalName]?.toString()?.split(',').map(function (item) { return parseInt(item, 10); });
				}
				return returnGet(entity?.[logicalName], type);
			};
			const returnGet = function (data, type) {
				if (data === null || data === undefined) return null;
				if (type === null || type === undefined) return data;
				const typeParsers = {
					DateTime: function (value) {
						if (value === null || value === undefined) return null;
						if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
						const trimmedString = String(value).trim();
						if (trimmedString === '') return null;
						const timestamp = Date.parse(trimmedString);
						if (isNaN(timestamp)) return null;
						const parsedDate = new Date(timestamp);
						return isNaN(parsedDate.getTime()) ? null : parsedDate;
					},
					Integer: function (value) {
						const parsed = parseInt(value, 10);
						return isNaN(parsed) ? null : parsed;
					},
					Number: function (value) {
						const parsed = Number(value);
						return isNaN(parsed) ? null : parsed;
					},
					Boolean: function (value) {
						if (value === null || value === undefined) return null;
						if (typeof value === 'boolean') return value;
						if (typeof value === 'number') return value !== 0;
						const stringValue = String(value).trim().toLowerCase();
						const trueValues = ["true", "1", "yes", "y"];
						const falseValues = ["false", "0", "no", "n"];
						if (trueValues.includes(stringValue)) return true;
						if (falseValues.includes(stringValue)) return false;
						return false;
					}
				};
				const parser = typeParsers[type];
				return parser ? parser(data) : data;
			};
			const setValue = function (value) {
				if (type === 'MultiOptionSet') value = value?.join(',');
				if (entityLogicalCollectionName !== undefined && entityLogicalCollectionName?.length > 0) {
					if (value === null) {
						upsertEntity[schemaName + '@odata.bind'] = null;
					}
					else {
						const cleanValue = typeof value === 'string' ? value.replace(/[{}]/g, '') : value;
						upsertEntity[schemaName + '@odata.bind'] = '/' + entityLogicalCollectionName + '(' + cleanValue + ')';
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
		const _emailserverprofile = {
			AadResourceId: { a: 'aadresourceid' },
			ACSEmailServiceName: { a: 'acsemailservicename' },
			ACSEnabledForOutgoingEmail: { a: 'acsenabledforoutgoingemail', g: 'Boolean' },
			ACSEndpointUrl: { a: 'acsendpointurl' },
			ACSManagedIdentityId: { b: 'acsmanagedidentityid', a: '_acsmanagedidentityid_value', c: 'managedidentities', d: 'managedidentity' },
			ACSResourceGroupName: { a: 'acsresourcegroupname' },
			ACSSubscriptionId: { a: 'acssubscriptionid' },
			CreatedBy: { b: 'createdby', a: '_createdby_value', c: 'systemusers', d: 'systemuser', r: true },
			CreatedOn_UtcDateAndTime: { a: 'createdon', r: true, g: 'DateTime' },
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
			ExchangeVersion: { a: 'exchangeversion', g: 'Integer' },
			IncomingAuthenticationProtocol: { a: 'incomingauthenticationprotocol', g: 'Integer' },
			IncomingCredentialRetrieval: { a: 'incomingcredentialretrieval', g: 'Integer' },
			IncomingPartnerApplication: { b: 'incomingpartnerapplication', a: '_incomingpartnerapplication_value', c: 'partnerapplications', d: 'partnerapplication', r: true },
			IncomingPassword: { a: 'incomingpassword' },
			IncomingPortNumber: { a: 'incomingportnumber', g: 'Integer' },
			IncomingServerLocation: { a: 'incomingserverlocation' },
			IncomingUseImpersonation: { a: 'incominguseimpersonation', g: 'Boolean' },
			IncomingUserName: { a: 'incomingusername' },
			IncomingUseSSL: { a: 'incomingusessl', g: 'Boolean' },
			IsIncomingPasswordSet: { a: 'isincomingpasswordset', r: true, g: 'Boolean' },
			IsOauthClientSecretSet: { a: 'isoauthclientsecretset', r: true, g: 'Boolean' },
			IsOutgoingPasswordSet: { a: 'isoutgoingpasswordset', r: true, g: 'Boolean' },
			keyvaultreferenceid: { b: 'keyvaultreferenceid', a: '_keyvaultreferenceid_value', c: 'keyvaultreferences', d: 'keyvaultreference' },
			LastAuthorizationStatus: { a: 'lastauthorizationstatus', g: 'Integer' },
			LastCrmMessage: { a: 'lastcrmmessage' },
			LastTestExecutionStatus: { a: 'lasttestexecutionstatus', g: 'Integer' },
			LastTestRequest: { a: 'lasttestrequest' },
			LastTestResponse: { a: 'lasttestresponse' },
			LastTestStartTime_UtcDateAndTime: { a: 'lastteststarttime', g: 'DateTime' },
			LastTestTotalExecutionTime: { a: 'lasttesttotalexecutiontime', g: 'Integer' },
			LastTestValidationStatus: { a: 'lasttestvalidationstatus', g: 'Integer' },
			managedidentityid: { b: 'managedidentityid', a: '_managedidentityid_value', c: 'managedidentities', d: 'managedidentity' },
			MaxConcurrentConnections: { a: 'maxconcurrentconnections', g: 'Integer' },
			MinPollingIntervalInMinutes: { a: 'minpollingintervalinminutes', g: 'Integer' },
			ModifiedBy: { b: 'modifiedby', a: '_modifiedby_value', c: 'systemusers', d: 'systemuser', r: true },
			ModifiedOn_UtcDateAndTime: { a: 'modifiedon', r: true, g: 'DateTime' },
			ModifiedOnBehalfBy: { b: 'modifiedonbehalfby', a: '_modifiedonbehalfby_value', c: 'systemusers', d: 'systemuser', r: true },
			MoveUndeliveredEmails: { a: 'moveundeliveredemails', g: 'Boolean' },
			Name: { a: 'name' },
			OauthClientId: { a: 'oauthclientid' },
			OauthClientSecret: { a: 'oauthclientsecret' },
			OrganizationId: { b: 'organizationid', a: '_organizationid_value', c: 'organizations', d: 'organization', r: true },
			OutgoingAuthenticationProtocol: { a: 'outgoingauthenticationprotocol', g: 'Integer' },
			OutgoingAutoGrantDelegateAccess: { a: 'outgoingautograntdelegateaccess', g: 'Boolean' },
			OutgoingCredentialRetrieval: { a: 'outgoingcredentialretrieval', g: 'Integer' },
			OutgoingPartnerApplication: { b: 'outgoingpartnerapplication', a: '_outgoingpartnerapplication_value', c: 'partnerapplications', d: 'partnerapplication', r: true },
			OutgoingPassword: { a: 'outgoingpassword' },
			OutgoingPortNumber: { a: 'outgoingportnumber', g: 'Integer' },
			OutgoingServerLocation: { a: 'outgoingserverlocation' },
			OutgoingUseImpersonation: { a: 'outgoinguseimpersonation', g: 'Boolean' },
			OutgoingUsername: { a: 'outgoingusername' },
			OutgoingUseSSL: { a: 'outgoingusessl', g: 'Boolean' },
			OwnerEmailAddress: { a: 'owneremailaddress' },
			OwnerId_systemuser: { b: 'ownerid', a: '_ownerid_value', c: 'systemusers', d: 'systemuser' },
			OwnerId_team: { b: 'ownerid', a: '_ownerid_value', c: 'teams', d: 'team' },
			OwningBusinessUnit: { b: 'owningbusinessunit', a: '_owningbusinessunit_value', c: 'businessunits', d: 'businessunit', r: true },
			OwningTeam: { b: 'owningteam', a: '_owningteam_value', c: 'teams', d: 'team', r: true },
			ProcessEmailsReceivedAfter_UtcDateAndTime: { a: 'processemailsreceivedafter', g: 'DateTime' },
			PurviewManagedIdentityId: { b: 'purviewmanagedidentityid', a: '_purviewmanagedidentityid_value', c: 'managedidentities', d: 'managedidentity' },
			SendEmailAlert: { a: 'sendemailalert', g: 'Boolean' },
			ServerAuthority: { a: 'serverauthority', g: 'Integer' },
			ServerType: { a: 'servertype', g: 'Integer' },
			StateCode: { a: 'statecode', g: 'Integer' },
			StatusCode: { a: 'statuscode', g: 'Integer' },
			TimeoutMailboxConnection: { a: 'timeoutmailboxconnection', g: 'Boolean' },
			TimeoutMailboxConnectionAfterAmount: { a: 'timeoutmailboxconnectionafteramount', g: 'Integer' },
			TimeZoneRuleVersionNumber: { a: 'timezoneruleversionnumber', g: 'Integer' },
			UseAutoDiscover: { a: 'useautodiscover', g: 'Boolean' },
			UseDefaultTenantId: { a: 'usedefaulttenantid', g: 'Boolean' },
			UseSameSettingsForOutgoingConnections: { a: 'usesamesettingsforoutgoingconnections', g: 'Boolean' },
			UTCConversionTimeZoneCode: { a: 'utcconversiontimezonecode', g: 'Integer' },
			VersionNumber: { a: 'versionnumber', r: true, g: 'Integer' }
		};
		if (e === undefined) e = {};
		const u = {};
		const emailserverprofile = {};
		emailserverprofile.ODataEntity = e;
		emailserverprofile.FormattedValue = {};
		for (const field in _emailserverprofile) {
			const fieldConfig = _emailserverprofile[field];
			webApiField(emailserverprofile, field, e, fieldConfig.a, fieldConfig.b, fieldConfig.c, fieldConfig.d, fieldConfig.r, u, fieldConfig.g);
		}
		emailserverprofile.Entity = u;
		emailserverprofile.EntityName = 'emailserverprofile';
		emailserverprofile.EntityCollectionName = 'emailserverprofiles';
		emailserverprofile['@odata.etag'] = e?.['@odata.etag'];
		emailserverprofile.getAliasedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias] === undefined || e?.[alias] === null) {
				return null;
			}
			if (isMultiOptionSet) {
				return e?.[alias].toString().split(',').map(function (item) { return parseInt(item, 10); });
			}
			return e?.[alias];
		};
		emailserverprofile.getAliasedFormattedValue = function (alias, isMultiOptionSet = false) {
			if (e?.[alias + f] === undefined || e?.[alias + f] === null) {
				return '';
			}
			if (isMultiOptionSet) {
				return e?.[alias + f]?.toString()?.split(';').map(function (item) { return item?.trim(); });
			}
			return e?.[alias + f];
		};
		return emailserverprofile;
	};
})(DevKit || (DevKit = /** @type {any} */ ({})));
/** @namespace OptionSet */
// @ts-ignore
var OptionSet;
(function (/** @type {any} */ OptionSet) {
	OptionSet.EmailServerProfile = {
		ExchangeVersion: { Exchange_2007: 0, Exchange_2007_SP1: 1, Exchange_2010: 2, Exchange_2010_SP1: 3, Exchange_2010_SP2: 4, Exchange_2013: 5 },
		IncomingAuthenticationProtocol: { Auto_Detect: 0, Basic: 3, Negotiate: 1, NTLM: 2, OAuth: 4 },
		IncomingCredentialRetrieval: { Credentials_Specified_by_a_User_or_Queue: 0, Credentials_Specified_in_Email_Server_Profile: 1, Exchange_Hybrid_Modern_Auth_HMA: 6, Gmail_OAuth: 5, OAuth_with_Microsoft_Entra_ID: 7, Server_to_Server_Authentication: 2, Windows_Integrated_Authentication: 3, Without_Credentials_Anonymous: 4 },
		LastAuthorizationStatus: { Failure: 0, Success: 1 },
		LastTestExecutionStatus: { Failure: 0, Success: 1, Warning: 2 },
		LastTestValidationStatus: { Failure: 0, Success: 1 },
		OutgoingAuthenticationProtocol: { Auto_Detect: 0, Basic: 3, Negotiate: 1, NTLM: 2, OAuth: 4 },
		OutgoingCredentialRetrieval: { Credentials_Specified_by_a_User_or_Queue: 0, Credentials_Specified_in_Email_Server_Profile: 1, Exchange_Hybrid_Modern_Auth_HMA: 6, Gmail_OAuth: 5, OAuth_with_Microsoft_Entra_ID: 7, Server_to_Server_Authentication: 2, Windows_Integrated_Authentication: 3, Without_Credentials_Anonymous: 4 },
		ServerAuthority: { Automatic_determined_by_Dynamics_365_cloud: 3, China_21Vianet_httpsloginchinacloudapicn: 2, Public_GCC_httpsloginmicrosoftonlinecom: 0, US_Government_GCC_High_and_DoD_httpsloginmicrosoftonlineus: 1 },
		ServerType: { Exchange_Online_Hybrid: 3, Exchange_Server: 0, Exchange_Server_Hybrid: 2, IMAPSMTP: 4, Other_POP3SMTP: 1 },
		StateCode: { Active: 0, Inactive: 1 },
		StatusCode: { Active: 1, Inactive: 2 },
		RollupState: { NotCalculated: 0, Calculated: 1, OverflowError: 2, OtherError: 3, RetryLimitExceeded: 4, HierarchicalRecursionLimitReached: 5, LoopDetected: 6 }
	};
})(OptionSet || (OptionSet = /** @type {any} */ ({})));