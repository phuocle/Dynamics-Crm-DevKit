﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_msteamssettingsv2_Information {
		interface Tabs {
		}
		interface Body {
			/** MSTeams settingsv2 name */
			msdyn_MSTeamsSettingsName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_msteamssettingsv2_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_msteamssettingsv2_Information */
		Body: DevKit.Formmsdyn_msteamssettingsv2_Information.Body;
		/** The Process of form msdyn_msteamssettingsv2_Information */
		Process: DevKit.Formmsdyn_msteamssettingsv2_Information.Process;
		/** The SidePanes of form msdyn_msteamssettingsv2_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_msteamssettingsv2_Information2 {
		interface Tabs {
		}
		interface Body {
			/** MSTeams settingsv2 name */
			msdyn_MSTeamsSettingsName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_msteamssettingsv2_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_msteamssettingsv2_Information2 */
		Body: DevKit.Formmsdyn_msteamssettingsv2_Information2.Body;
		/** The Process of form msdyn_msteamssettingsv2_Information2 */
		Process: DevKit.Formmsdyn_msteamssettingsv2_Information2.Process;
		/** The SidePanes of form msdyn_msteamssettingsv2_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_msteamssettingsv2Api {
		/**
		* DynamicsCrm.DevKit msdyn_msteamssettingsv2Api
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
		CreatedBy: string;
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
		/** Indicates whether the default title for linked chat is the record name */
		msdyn_DefaultTeamsChatTitleEnabled: boolean;
		/** URL for embeded collaboration MSteams service */
		msdyn_EmbedCollabServiceUrl: string;
		/** Indicates whether embed-collab teams integration is enabled */
		msdyn_EmbedCollabTeamsIntegrationEnabled: boolean;
		/** MSTeams settingsv2 name */
		msdyn_MSTeamsSettingsName: string;
		/** Unique identifier for entity instances */
		msdyn_msteamssettingsv2Id: string;
		/** Indicates whether sensitivity label setting for new team creation has been enabled */
		msdyn_SensitivityLabelSettingEnabled: boolean;
		msdyn_TabServiceUrl: string;
		/** Indicates whether teams meeting integration is enabled */
		msdyn_TeamsMeetingIntegrationEnabled: boolean;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the msdyn_msteamssettingsv2 */
		statecode: OptionSet.msdyn_msteamssettingsv2.statecode;
		/** Reason for the status of the msdyn_msteamssettingsv2 */
		statuscode: OptionSet.msdyn_msteamssettingsv2.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_msteamssettingsv2 {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}