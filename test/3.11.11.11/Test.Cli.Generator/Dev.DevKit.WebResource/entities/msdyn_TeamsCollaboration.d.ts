﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_TeamsCollaboration_Information {
		interface Tabs {
		}
		interface Body {
			/** Collaboration team name */
			msdyn_TeamName: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_TeamsCollaboration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_TeamsCollaboration_Information */
		Body: DevKit.Formmsdyn_TeamsCollaboration_Information.Body;
		/** The Process of form msdyn_TeamsCollaboration_Information */
		Process: DevKit.Formmsdyn_TeamsCollaboration_Information.Process;
		/** The SidePanes of form msdyn_TeamsCollaboration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_TeamsCollaborationApi {
		/**
		* DynamicsCrm.DevKit msdyn_TeamsCollaborationApi
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
		/** Collaboration appid which was used to pin the record */
		msdyn_AppId: string;
		/** Collaboration channel relative folder URL */
		msdyn_ChannelFolderRelativeUrl: string;
		/** Collaboration channel Id */
		msdyn_ChannelId: string;
		/** Collaboration channel name */
		msdyn_ChannelName: string;
		/** Collaboration Channel Type required to differentiate between private and other channels */
		msdyn_channelType: string;
		/** Collaboration tab content url */
		msdyn_ContentUrl: string;
		/** Collaboration group identifier */
		msdyn_GroupId: string;
		/** Collaboration piped entity which was used to pin the record */
		msdyn_pipedEntityId: string;
		/** Collaboration team Id */
		msdyn_TeamId: string;
		/** Collaboration team name */
		msdyn_TeamName: string;
		/** Unique identifier for entity instances */
		msdyn_TeamsCollaborationId: string;
		/** Team site URL */
		msdyn_TeamSiteUrl: string;
		/** Collaboration tenant identifier */
		msdyn_TenantId: string;
		/** Collaboration tab web url */
		msdyn_WebUrl: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Related Dynamics 365 record Id */
		RegardingObjectId: string;
		/** Related Dynamics 365 record Id (entity code) */
		RegardingObjectTypeCode: number;
		/** Related Dynamics 365 record type name */
		RegardingObjectTypeName: string;
		/** Status of the Collaboration entity */
		statecode: OptionSet.msdyn_TeamsCollaboration.statecode;
		/** Reason for the status of the Collaboration entity */
		statuscode: OptionSet.msdyn_TeamsCollaboration.statuscode;
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
			/** Collaboration appid which was used to pin the record */
			readonly msdyn_AppId: string;
			/** Collaboration channel relative folder URL */
			readonly msdyn_ChannelFolderRelativeUrl: string;
			/** Collaboration channel Id */
			readonly msdyn_ChannelId: string;
			/** Collaboration channel name */
			readonly msdyn_ChannelName: string;
			/** Collaboration Channel Type required to differentiate between private and other channels */
			readonly msdyn_channelType: string;
			/** Collaboration tab content url */
			readonly msdyn_ContentUrl: string;
			/** Collaboration group identifier */
			readonly msdyn_GroupId: string;
			/** Collaboration piped entity which was used to pin the record */
			readonly msdyn_pipedEntityId: string;
			/** Collaboration team Id */
			readonly msdyn_TeamId: string;
			/** Collaboration team name */
			readonly msdyn_TeamName: string;
			/** Unique identifier for entity instances */
			readonly msdyn_TeamsCollaborationId: string;
			/** Team site URL */
			readonly msdyn_TeamSiteUrl: string;
			/** Collaboration tenant identifier */
			readonly msdyn_TenantId: string;
			/** Collaboration tab web url */
			readonly msdyn_WebUrl: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Related Dynamics 365 record Id */
			readonly RegardingObjectId: string;
			/** Related Dynamics 365 record Id (entity code) */
			readonly RegardingObjectTypeCode: string;
			/** Related Dynamics 365 record type name */
			readonly RegardingObjectTypeName: string;
			/** Status of the Collaboration entity */
			readonly statecode: string;
			/** Reason for the status of the Collaboration entity */
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
	namespace msdyn_TeamsCollaboration {
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