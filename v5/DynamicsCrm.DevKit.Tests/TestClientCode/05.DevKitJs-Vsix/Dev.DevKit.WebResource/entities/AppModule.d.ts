//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class AppModuleApi {
		/**
		* DynamicsCrm.DevKit AppModuleApi
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
		/** This field is used to store AI generated Description for Model-driven App */
		aiappdescription: string | null;
		/** This field stores the Time when last AI App Description was generated. */
		aidescriptiongeneratedon_UtcDateAndTime: Date | null;
		/** This field is used to store App Graph for Model-driven App */
		appgraph: string | null;
		/** Unique identifier for entity instances */
		AppModuleId: string | null;
		/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleIdUnique: string | null;
		/** App Module Version */
		AppModuleVersion: string | null;
		/** App Module Xml Managed */
		AppModuleXmlManaged: string | null;
		/** Client Type such as Web or UCI */
		ClientType: number | null;
		/** For internal use only */
		readonly ComponentState: OptionSet.AppModule.ComponentState | null;
		/** Contains configuration XML */
		ConfigXML: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Description for entity */
		Description: string | null;
		/** App Module Descriptor */
		readonly Descriptor: string | null;
		/** App Module Event Handlers */
		EventHandlers: string | null;
		/** Form Factor */
		FormFactor: number | null;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number | null;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string | null;
		/** Is Default */
		IsDefault: boolean | null;
		/** Is Featured */
		IsFeatured: boolean | null;
		/** Is Managed */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of App Module */
		Name: string | null;
		/** App navigation type */
		NavigationType: OptionSet.AppModule.NavigationType | null;
		/** The client that this app is optimized for */
		OptimizedFor: string | null;
		/** Unique identifier of the organization associated with the app. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Internal use only */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Date and time when the record was published. */
		PublishedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the publisher. */
		PublisherId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the Model-driven App */
		statecode: OptionSet.AppModule.statecode | null;
		/** Reason for the status of the Model-driven App */
		statuscode: OptionSet.AppModule.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Unique Name of App Module */
		UniqueName: string | null;
		/** Contains URL */
		URL: string | null;
		readonly VersionNumber: number | null;
		/** Unique identifier of the Web Resource */
		WebResourceId: string | null;
		/** Unique identifier of the Web Resource as Welcome Page Id */
		WelcomePageId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** This field is used to store AI generated Description for Model-driven App */
			readonly aiappdescription: string;
			/** This field stores the Time when last AI App Description was generated. */
			readonly aidescriptiongeneratedon_UtcDateAndTime: string;
			/** This field is used to store App Graph for Model-driven App */
			readonly appgraph: string;
			/** Unique identifier for entity instances */
			readonly AppModuleId: string;
			/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
			readonly AppModuleIdUnique: string;
			/** App Module Version */
			readonly AppModuleVersion: string;
			/** App Module Xml Managed */
			readonly AppModuleXmlManaged: string;
			/** Client Type such as Web or UCI */
			readonly ClientType: string;
			/** For internal use only */
			readonly ComponentState: string;
			/** Contains configuration XML */
			readonly ConfigXML: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Description for entity */
			readonly Description: string;
			/** App Module Descriptor */
			readonly Descriptor: string;
			/** App Module Event Handlers */
			readonly EventHandlers: string;
			/** Form Factor */
			readonly FormFactor: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** Is Default */
			readonly IsDefault: string;
			/** Is Featured */
			readonly IsFeatured: string;
			/** Is Managed */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of App Module */
			readonly Name: string;
			/** App navigation type */
			readonly NavigationType: string;
			/** The client that this app is optimized for */
			readonly OptimizedFor: string;
			/** Unique identifier of the organization associated with the app. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Internal use only */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Date and time when the record was published. */
			readonly PublishedOn_UtcDateAndTime: string;
			/** Unique identifier of the publisher. */
			readonly PublisherId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Model-driven App */
			readonly statecode: string;
			/** Reason for the status of the Model-driven App */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Unique Name of App Module */
			readonly UniqueName: string;
			/** Contains URL */
			readonly URL: string;
			readonly VersionNumber: string;
			/** Unique identifier of the Web Resource */
			readonly WebResourceId: string;
			/** Unique identifier of the Web Resource as Welcome Page Id */
			readonly WelcomePageId: string;
		}
	}
}
declare namespace OptionSet {
	namespace AppModule {
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
		enum NavigationType {
			/** Multi_session = 1*/
			Multi_session = 1,
			/** Single_session = 0*/
			Single_session = 0
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Deleted = 3*/
			Deleted = 3,
			/** Inactive = 2*/
			Inactive = 2
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