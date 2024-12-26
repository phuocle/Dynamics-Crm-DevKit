//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_channelprovider_Information {
		interface Tabs {
		}
		interface Body {
			/** CIF version */
			msdyn_apiversion: DevKit.Controls.OptionSet;
			/** The url of the title */
			msdyn_channelurl: DevKit.Controls.String;
			/** This takes a text blob as input and Microsoft.CIFramework.getEnvironment will return this as value of the key customParams */
			msdyn_customparams: DevKit.Controls.String;
			/** Select yes if you want to enable Analytics for your channel provider */
			msdyn_enableanalytics: DevKit.Controls.Boolean;
			/** Is outbound communication enabled */
			msdyn_enableoutbound: DevKit.Controls.Boolean;
			/** Title of the session. */
			msdyn_Label: DevKit.Controls.String;
			/** Name of the channel provider */
			msdyn_name: DevKit.Controls.String;
			/** Select Channel Order as 0 for this Channel to take precedence over others. */
			msdyn_SortOrder: DevKit.Controls.Integer;
			/** Domain to be whitelisted */
			msdyn_trusteddomain: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_channelprovider_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_channelprovider_Information */
		Body: DevKit.Formmsdyn_channelprovider_Information.Body;
		/** The Process of form msdyn_channelprovider_Information */
		Process: DevKit.Formmsdyn_channelprovider_Information.Process;
		/** The SidePanes of form msdyn_channelprovider_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_channelproviderApi {
		/**
		* DynamicsCrm.DevKit msdyn_channelproviderApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_channelprovider.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** CIF version */
		msdyn_apiversion: OptionSet.msdyn_channelprovider.msdyn_apiversion;
		/** Unique identifier for entity instances */
		msdyn_channelproviderId: string;
		/** The url of the title */
		msdyn_channelurl: string;
		/** This takes a text blob as input and Microsoft.CIFramework.getEnvironment will return this as value of the key customParams */
		msdyn_customparams: string;
		/** Select yes if you want to enable Analytics for your channel provider */
		msdyn_enableanalytics: boolean;
		/** Is outbound communication enabled */
		msdyn_enableoutbound: boolean;
		/** Title of the session. */
		msdyn_Label: string;
		/** Name of the channel provider */
		msdyn_name: string;
		/** Select Channel Order as 0 for this Channel to take precedence over others. */
		msdyn_SortOrder: number;
		/** Domain to be whitelisted */
		msdyn_trusteddomain: string;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the CI Provider */
		statecode: OptionSet.msdyn_channelprovider.statecode;
		/** Reason for the status of the CI Provider */
		statuscode: OptionSet.msdyn_channelprovider.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** CIF version */
			readonly msdyn_apiversion: string;
			/** Unique identifier for entity instances */
			readonly msdyn_channelproviderId: string;
			/** The url of the title */
			readonly msdyn_channelurl: string;
			/** This takes a text blob as input and Microsoft.CIFramework.getEnvironment will return this as value of the key customParams */
			readonly msdyn_customparams: string;
			/** Select yes if you want to enable Analytics for your channel provider */
			readonly msdyn_enableanalytics: string;
			/** Is outbound communication enabled */
			readonly msdyn_enableoutbound: string;
			/** Title of the session. */
			readonly msdyn_Label: string;
			/** Name of the channel provider */
			readonly msdyn_name: string;
			/** Select Channel Order as 0 for this Channel to take precedence over others. */
			readonly msdyn_SortOrder: string;
			/** Domain to be whitelisted */
			readonly msdyn_trusteddomain: string;
			/** Unique Name for the entity. */
			readonly msdyn_UniqueName: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the CI Provider */
			readonly statecode: string;
			/** Reason for the status of the CI Provider */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_channelprovider {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum msdyn_apiversion {
			/** 162450000 */
			_2
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