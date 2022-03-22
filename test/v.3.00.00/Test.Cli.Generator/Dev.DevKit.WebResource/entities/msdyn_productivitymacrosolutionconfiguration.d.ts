//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_productivitymacrosolutionconfiguration_Information {
		interface Tabs {
		}
		interface Body {
			/** Sets designer fallback url */
			msdyn_designerfallbackurl: DevKit.Controls.String;
			/** Sets the entity from which to read designer URL */
			msdyn_designerurlconfigentity: DevKit.Controls.String;
			/** Sets the attributes of designer url config entity */
			msdyn_designerurlconfigentityattrib: DevKit.Controls.String;
			/** Sets the id from which to read designer URL */
			msdyn_designerurlconfigentityid: DevKit.Controls.String;
			/** An OData query to retrieve record from which to read designer URL */
			msdyn_designerurlconfigentityquery: DevKit.Controls.String;
			/** Sets the path to designer blob with designer URL */
			msdyn_designerurlrelativepath: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Sets the value for serach hint */
			msdyn_searchhint: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
			/** Sets the value for user voice link */
			msdyn_uservoicelink: DevKit.Controls.String;
			/** Sets the value for user voice text */
			msdyn_uservoicetext: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_productivitymacrosolutionconfiguration_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_productivitymacrosolutionconfiguration_Information */
		Body: DevKit.Formmsdyn_productivitymacrosolutionconfiguration_Information.Body;
		/** The Process of form msdyn_productivitymacrosolutionconfiguration_Information */
		Process: DevKit.Formmsdyn_productivitymacrosolutionconfiguration_Information.Process;
		/** The SidePanes of form msdyn_productivitymacrosolutionconfiguration_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_productivitymacrosolutionconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_productivitymacrosolutionconfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_productivitymacrosolutionconfiguration.ComponentState;
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
		/** Sets designer fallback url */
		msdyn_designerfallbackurl: string;
		/** Sets the entity from which to read designer URL */
		msdyn_designerurlconfigentity: string;
		/** Sets the attributes of designer url config entity */
		msdyn_designerurlconfigentityattrib: string;
		/** Sets the id from which to read designer URL */
		msdyn_designerurlconfigentityid: string;
		/** An OData query to retrieve record from which to read designer URL */
		msdyn_designerurlconfigentityquery: string;
		/** Sets the path to designer blob with designer URL */
		msdyn_designerurlrelativepath: string;
		/** Macro solution version */
		msdyn_macrosversion: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_productivitymacrosolutionconfigurationId: string;
		/** Sets the value for serach hint */
		msdyn_searchhint: string;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** Sets the value for user voice link */
		msdyn_uservoicelink: string;
		/** Sets the value for user voice text */
		msdyn_uservoicetext: string;
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
		/** Status of the Macro Solution Configuration */
		statecode: OptionSet.msdyn_productivitymacrosolutionconfiguration.statecode;
		/** Reason for the status of the Macro Solution Configuration */
		statuscode: OptionSet.msdyn_productivitymacrosolutionconfiguration.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_productivitymacrosolutionconfiguration {
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