//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_authenticationsettings_Information {
		interface Tabs {
		}
		interface Body {
			/** Authentication Type which will be applied to the chat */
			msdyn_Authenticationtype: DevKit.Controls.OptionSet;
			/** Javascript function which will need to return the authentication token */
			msdyn_JavaScriptclientfunction: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_ocauthchanneltype: DevKit.Controls.OptionSet;
			/** URL to the Public Key which will be used for token validation */
			msdyn_PublickeyURL: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_authenticationsettings_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_authenticationsettings_Information */
		Body: DevKit.Formmsdyn_authenticationsettings_Information.Body;
		/** The Process of form msdyn_authenticationsettings_Information */
		Process: DevKit.Formmsdyn_authenticationsettings_Information.Process;
		/** The SidePanes of form msdyn_authenticationsettings_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_authenticationsettingsApi {
		/**
		* DynamicsCrm.DevKit msdyn_authenticationsettingsApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Auth service Client Id */
		msdyn_authenticationclientid: string;
		/** Auth service client secret */
		msdyn_authenticationclientsecret: string;
		/** Auth service scopes */
		msdyn_authenticationscopes: string;
		/** Unique identifier for entity instances */
		msdyn_authenticationsettingsId: string;
		/** Authentication Type which will be applied to the chat */
		msdyn_Authenticationtype: OptionSet.msdyn_authenticationsettings.msdyn_Authenticationtype;
		/** Decrypted token url to hit with Access token */
		msdyn_decryptedtokenurl: string;
		/** Javascript function which will need to return the authentication token */
		msdyn_JavaScriptclientfunction: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_ocauthchanneltype: OptionSet.msdyn_authenticationsettings.msdyn_ocauthchanneltype;
		/** URL to the Public Key which will be used for token validation */
		msdyn_PublickeyURL: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Authentication settings */
		statecode: OptionSet.msdyn_authenticationsettings.statecode;
		/** Reason for the status of the Authentication settings */
		statuscode: OptionSet.msdyn_authenticationsettings.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Auth service Client Id */
			readonly msdyn_authenticationclientid: string;
			/** Auth service client secret */
			readonly msdyn_authenticationclientsecret: string;
			/** Auth service scopes */
			readonly msdyn_authenticationscopes: string;
			/** Unique identifier for entity instances */
			readonly msdyn_authenticationsettingsId: string;
			/** Authentication Type which will be applied to the chat */
			readonly msdyn_Authenticationtype: string;
			/** Decrypted token url to hit with Access token */
			readonly msdyn_decryptedtokenurl: string;
			/** Javascript function which will need to return the authentication token */
			readonly msdyn_JavaScriptclientfunction: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_ocauthchanneltype: string;
			/** URL to the Public Key which will be used for token validation */
			readonly msdyn_PublickeyURL: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Authentication settings */
			readonly statecode: string;
			/** Reason for the status of the Authentication settings */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_authenticationsettings {
		enum msdyn_Authenticationtype {
			/** 192350001 */
			OAuth_20_code_flow,
			/** 192350000 */
			OAuth_20_implicit_flow
		}
		enum msdyn_ocauthchanneltype {
			/** 192450000 */
			Apple_Messages_For_Business,
			/** 192360000 */
			Live_chat
		}
		enum OwnerIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}