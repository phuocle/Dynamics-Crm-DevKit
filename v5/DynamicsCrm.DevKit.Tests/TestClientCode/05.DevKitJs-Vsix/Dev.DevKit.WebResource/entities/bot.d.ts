//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formbot_Information {
		interface Tabs {
		}
		interface Body {
			/** Defines which users may interact with the bot. */
			accesscontrolpolicy: DevKit.Controls.OptionSet;
			/** Stores information with application manifest data such as Teams application information. */
			applicationmanifestinformation: DevKit.Controls.String;
			/** Stores information for the authentication configuration. */
			authenticationconfiguration: DevKit.Controls.String;
			/** Defines how the bot should be authenticated to the user. */
			authenticationmode: DevKit.Controls.OptionSet;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			authenticationtrigger: DevKit.Controls.OptionSet;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			authorizedsecuritygroupids: DevKit.Controls.String;
			/** Used to store content of bot configuration data. */
			Configuration: DevKit.Controls.String;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 100KB in size. This value can be changed at any time. */
			iconbase64: DevKit.Controls.String;
			/** The language identifier (LCID) of this Copilot. */
			Language: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** The display name of the Copilot. */
			name: DevKit.Controls.String;
			/** Used to identify the origin used to create the bot. */
			Origin: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier for the business unit that owns the record */
			OwningBusinessUnit: DevKit.Controls.Lookup;
			/** Unique identifier for Connection Reference associated with Copilot. */
			ProviderConnectionReferenceId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who last published the bot. */
			publishedby: DevKit.Controls.Lookup;
			/** Date and time when the Copilot was last published */
			publishedon: DevKit.Controls.DateTime;
			/** Runtime provider */
			RuntimeProvider: DevKit.Controls.OptionSet;
			/** Unique name identifying the Copilot. */
			SchemaName: DevKit.Controls.String;
			/** Status of the Copilot */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Copilot */
			statuscode: DevKit.Controls.OptionSet;
			/** The list of supported languages by this bot */
			SupportedLanguages: DevKit.Controls.MultiOptionSet;
			/** Used to store information about the synchronization operations of the bot */
			SynchronizationStatus: DevKit.Controls.String;
			/** Used to identify the template and version used for the bot default content */
			Template: DevKit.Controls.String;
		}
		interface Grid {
			/** Related chat bot components */
			BotComponents: DevKit.Controls.Grid;
			/** Linked component collections */
			ComponentCollections: DevKit.Controls.Grid;
			/** Related chat bot conversation transcripts */
			ConversationTranscripts: DevKit.Controls.Grid;
		}
	}
	export class Formbot_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form bot_Information */
		Body: DevKit.Formbot_Information.Body;
		/** The Grid of form bot_Information */
		Grid: DevKit.Formbot_Information.Grid;
	}
	export class botApi {
		/**
		* DynamicsCrm.DevKit botApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Defines which users may interact with the bot. */
		accesscontrolpolicy: OptionSet.bot.accesscontrolpolicy | null;
		/** Stores information with application manifest data such as Teams application information. */
		applicationmanifestinformation: string | null;
		/** Stores information for the authentication configuration. */
		authenticationconfiguration: string | null;
		/** Defines how the bot should be authenticated to the user. */
		authenticationmode: OptionSet.bot.authenticationmode | null;
		/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
		authenticationtrigger: OptionSet.bot.authenticationtrigger | null;
		/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
		authorizedsecuritygroupids: string | null;
		/** Unique identifier of the Copilot. */
		botId: string | null;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.bot.ComponentState | null;
		/** Used to store content of bot configuration data. */
		Configuration: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 100KB in size. This value can be changed at any time. */
		iconbase64: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** The language identifier (LCID) of this Copilot. */
		Language: OptionSet.bot.Language | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The display name of the Copilot. */
		name: string | null;
		/** Used to identify the origin used to create the bot. */
		Origin: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier for Connection Reference associated with Copilot. */
		ProviderConnectionReferenceId: string | null;
		/** Unique identifier of the user who last published the bot. */
		publishedby: string | null;
		/** Date and time when the Copilot was last published */
		publishedon_UtcDateAndTime: Date | null;
		RuntimeProvider: OptionSet.bot.RuntimeProvider | null;
		/** Unique name identifying the Copilot. */
		SchemaName: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Copilot */
		statecode: OptionSet.bot.statecode | null;
		/** Reason for the status of the Copilot */
		statuscode: OptionSet.bot.statuscode | null;
		/** The list of supported languages by this bot */
		SupportedLanguages: Array<OptionSet.bot.SupportedLanguages> | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Used to store information about the synchronization operations of the bot */
		SynchronizationStatus: string | null;
		/** Used to identify the template and version used for the bot default content */
		Template: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Defines which users may interact with the bot. */
			readonly accesscontrolpolicy: string;
			/** Stores information with application manifest data such as Teams application information. */
			readonly applicationmanifestinformation: string;
			/** Stores information for the authentication configuration. */
			readonly authenticationconfiguration: string;
			/** Defines how the bot should be authenticated to the user. */
			readonly authenticationmode: string;
			/** Defines at which point authentication for the bot should be triggered. Security can be enforced at the bot entry point, removing the need for explicit authentication nodes in the dialog flow. */
			readonly authenticationtrigger: string;
			/** Contains a comma-delimited list of up to 20 Azure Active Directory Group IDs that are allowed to interact with the bot. This field is ignored if Access Control Policy is not set to Group membership. */
			readonly authorizedsecuritygroupids: string;
			/** Unique identifier of the Copilot. */
			readonly botId: string;
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Used to store content of bot configuration data. */
			readonly Configuration: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Used to visually identify your bot in channels and services. Represented in a base64 encoded string. Must be in PNG format, and no larger than 100KB in size. This value can be changed at any time. */
			readonly iconbase64: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** The language identifier (LCID) of this Copilot. */
			readonly Language: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The display name of the Copilot. */
			readonly name: string;
			/** Used to identify the origin used to create the bot. */
			readonly Origin: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier for Connection Reference associated with Copilot. */
			readonly ProviderConnectionReferenceId: string;
			/** Unique identifier of the user who last published the bot. */
			readonly publishedby: string;
			/** Date and time when the Copilot was last published */
			readonly publishedon_UtcDateAndTime: string;
			readonly RuntimeProvider: string;
			/** Unique name identifying the Copilot. */
			readonly SchemaName: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Copilot */
			readonly statecode: string;
			/** Reason for the status of the Copilot */
			readonly statuscode: string;
			/** The list of supported languages by this bot */
			readonly SupportedLanguages: Array<string>;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Used to store information about the synchronization operations of the bot */
			readonly SynchronizationStatus: string;
			/** Used to identify the template and version used for the bot default content */
			readonly Template: string;
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
	namespace bot {
		enum accesscontrolpolicy {
			/** Any = 0*/
			Any = 0,
			/** Any_multi_tenant = 3*/
			Any_multi_tenant = 3,
			/** Copilot_readers = 1*/
			Copilot_readers = 1,
			/** Group_membership = 2*/
			Group_membership = 2
		}
		enum authenticationmode {
			/** Custom_Azure_Active_Directory = 3*/
			Custom_Azure_Active_Directory = 3,
			/** Generic_OAuth2 = 4*/
			Generic_OAuth2 = 4,
			/** Integrated = 2*/
			Integrated = 2,
			/** None = 1*/
			None = 1,
			/** Unspecified = 0*/
			Unspecified = 0
		}
		enum authenticationtrigger {
			/** Always = 1*/
			Always = 1,
			/** As_Needed = 0*/
			As_Needed = 0
		}
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum Language {
			/** Arabic = 1025*/
			Arabic = 1025,
			/** Chinese_Simplified = 2052*/
			Chinese_Simplified = 2052,
			/** Chinese_Traditional = 1028*/
			Chinese_Traditional = 1028,
			/** Czech = 1029*/
			Czech = 1029,
			/** Danish = 1030*/
			Danish = 1030,
			/** Dutch = 1043*/
			Dutch = 1043,
			/** English = 1033*/
			English = 1033,
			/** English_Australia = 3081*/
			English_Australia = 3081,
			/** English_United_Kingdom = 2057*/
			English_United_Kingdom = 2057,
			/** Finnish = 1035*/
			Finnish = 1035,
			/** French = 1036*/
			French = 1036,
			/** French_Canada = 3084*/
			French_Canada = 3084,
			/** German = 1031*/
			German = 1031,
			/** Greek = 1032*/
			Greek = 1032,
			/** Hebrew = 1037*/
			Hebrew = 1037,
			/** Hindi = 1081*/
			Hindi = 1081,
			/** Indonesian = 1057*/
			Indonesian = 1057,
			/** Italian = 1040*/
			Italian = 1040,
			/** Japanese = 1041*/
			Japanese = 1041,
			/** Korean = 1042*/
			Korean = 1042,
			/** Norwegian = 1044*/
			Norwegian = 1044,
			/** Polish = 1045*/
			Polish = 1045,
			/** Portuguese_Brazilian = 1046*/
			Portuguese_Brazilian = 1046,
			/** Portuguese_Portugal = 2070*/
			Portuguese_Portugal = 2070,
			/** Russian = 1049*/
			Russian = 1049,
			/** Spanish = 1034*/
			Spanish = 1034,
			/** Spanish_United_States = 21514*/
			Spanish_United_States = 21514,
			/** Swedish = 1053*/
			Swedish = 1053,
			/** Thai = 1054*/
			Thai = 1054,
			/** Turkish = 1055*/
			Turkish = 1055
		}
		enum RuntimeProvider {
			/** Nuance_Mix_Shell = 1*/
			Nuance_Mix_Shell = 1,
			/** Power_Virtual_Agents = 0*/
			Power_Virtual_Agents = 0
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Deprovisioned = 2*/
			Deprovisioned = 2,
			/** MissingLicense = 5*/
			MissingLicense = 5,
			/** Provisioned = 1*/
			Provisioned = 1,
			/** ProvisionFailed = 4*/
			ProvisionFailed = 4,
			/** Provisioning = 3*/
			Provisioning = 3
		}
		enum SupportedLanguages {
			/** Arabic = 1025*/
			Arabic = 1025,
			/** Chinese_Simplified = 2052*/
			Chinese_Simplified = 2052,
			/** Chinese_Traditional = 1028*/
			Chinese_Traditional = 1028,
			/** Czech = 1029*/
			Czech = 1029,
			/** Danish = 1030*/
			Danish = 1030,
			/** Dutch = 1043*/
			Dutch = 1043,
			/** English = 1033*/
			English = 1033,
			/** English_Australia = 3081*/
			English_Australia = 3081,
			/** English_United_Kingdom = 2057*/
			English_United_Kingdom = 2057,
			/** Finnish = 1035*/
			Finnish = 1035,
			/** French = 1036*/
			French = 1036,
			/** French_Canada = 3084*/
			French_Canada = 3084,
			/** German = 1031*/
			German = 1031,
			/** Greek = 1032*/
			Greek = 1032,
			/** Hebrew = 1037*/
			Hebrew = 1037,
			/** Hindi = 1081*/
			Hindi = 1081,
			/** Indonesian = 1057*/
			Indonesian = 1057,
			/** Italian = 1040*/
			Italian = 1040,
			/** Japanese = 1041*/
			Japanese = 1041,
			/** Korean = 1042*/
			Korean = 1042,
			/** Norwegian = 1044*/
			Norwegian = 1044,
			/** Polish = 1045*/
			Polish = 1045,
			/** Portuguese_Brazilian = 1046*/
			Portuguese_Brazilian = 1046,
			/** Portuguese_Portugal = 2070*/
			Portuguese_Portugal = 2070,
			/** Russian = 1049*/
			Russian = 1049,
			/** Spanish = 1034*/
			Spanish = 1034,
			/** Spanish_United_States = 21514*/
			Spanish_United_States = 21514,
			/** Swedish = 1053*/
			Swedish = 1053,
			/** Thai = 1054*/
			Thai = 1054,
			/** Turkish = 1055*/
			Turkish = 1055
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}